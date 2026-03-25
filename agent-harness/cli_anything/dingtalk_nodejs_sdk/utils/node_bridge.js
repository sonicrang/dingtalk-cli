#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function loadSdk(root) {
  const candidates = [
    path.join(root, 'ts', 'dist', 'index.js'),
    path.join(root, 'ts', 'src', 'index.ts'),
    path.join(root, 'ts'),
  ];
  for (const candidate of candidates) {
    try {
      return require(candidate);
    } catch (err) {}
  }
  throw new Error('Unable to load local DingTalk SDK from ts/dist/index.js');
}

function toPlain(value) {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map(toPlain);
  if (typeof value === 'object') {
    if (typeof value.toMap === 'function') return value.toMap();
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = toPlain(v);
    return out;
  }
  return value;
}

function parseInput() {
  const raw = fs.readFileSync(0, 'utf8');
  return raw ? JSON.parse(raw) : {};
}

// ── Type serialization ───────────────────────────────────────────────

/**
 * Convert a Tea Model type descriptor into a JSON-serializable schema object.
 * Recursively resolves nested Model classes up to maxDepth.
 *
 * Primitive strings ("string", "number", "boolean") pass through.
 * Map descriptors become { type: "map", keyType, valueType }.
 * Array descriptors become { type: "array", itemType }.
 * Model class references become { type: "model", className, fields: {...} }.
 */
function serializeType(typeDesc, seen, maxDepth) {
  if (maxDepth <= 0) return 'any';
  if (typeDesc === null || typeDesc === undefined) return 'unknown';

  // Primitive type strings
  if (typeof typeDesc === 'string') return typeDesc;

  // Map or Array descriptor objects (plain objects with 'type' key)
  if (typeof typeDesc === 'object' && typeDesc.type) {
    if (typeDesc.type === 'map') {
      return {
        type: 'map',
        keyType: serializeType(typeDesc.keyType, seen, maxDepth - 1),
        valueType: serializeType(typeDesc.valueType, seen, maxDepth - 1),
      };
    }
    if (typeDesc.type === 'array') {
      return {
        type: 'array',
        itemType: serializeType(typeDesc.itemType, seen, maxDepth - 1),
      };
    }
    return typeDesc; // other descriptors pass through
  }

  // Model class reference (constructor function with static names/types)
  if (typeof typeDesc === 'function' && typeof typeDesc.names === 'function') {
    const className = typeDesc.name || 'UnknownModel';
    // Prevent infinite recursion for circular references
    if (seen.has(className)) {
      return { type: 'model', className, circular: true };
    }
    seen.add(className);
    const schema = introspectClassDeep(typeDesc, className, seen, maxDepth - 1);
    seen.delete(className);
    return { type: 'model', className, fields: schema.fields };
  }

  return 'unknown';
}

/**
 * Deep introspection of a Tea Model class.
 * Returns { className, fields: { fieldName: { type, wireName, ... }, ... } }.
 */
function introspectClassDeep(cls, className, seen, maxDepth) {
  if (!cls) return null;
  try {
    const nameMap = typeof cls.names === 'function' ? cls.names() : {};
    const typeMap = typeof cls.types === 'function' ? cls.types() : {};
    const fieldNames = Object.keys(nameMap);

    const fields = {};
    for (const f of fieldNames) {
      fields[f] = {
        type: serializeType(typeMap[f], seen || new Set(), maxDepth || 3),
        wireName: nameMap[f] || f,
      };
    }
    return { className, fields };
  } catch (e) {
    return { className, fields: {} };
  }
}

// ── JSDoc metadata extraction from .d.ts ─────────────────────────────

/**
 * Parse a .d.ts file to extract @remarks (required) and @example annotations
 * for all classes. Returns { ClassName: { fieldName: { required, example }, ... } }.
 */
function parseDtsAnnotations(dtsPath) {
  const annotations = {};
  try {
    const content = fs.readFileSync(dtsPath, 'utf8');
    // Match each class declaration with its body
    const classRegex = /export declare class (\w+)[^{]*\{([\s\S]*?)(?=\nexport declare class |\n(?:export )?default class |\Z)/g;
    let classMatch;
    while ((classMatch = classRegex.exec(content)) !== null) {
      const className = classMatch[1];
      const classBody = classMatch[2];
      const classAnnotations = {};

      // Match JSDoc comments followed by field declarations
      const fieldRegex = /\/\*\*([\s\S]*?)\*\/\s*(\w+)\??:/g;
      let fieldMatch;
      while ((fieldMatch = fieldRegex.exec(classBody)) !== null) {
        const jsdoc = fieldMatch[1];
        const fieldName = fieldMatch[2];
        const info = {};

        // Check for @remarks This parameter is required.
        if (/This parameter is required/i.test(jsdoc)) {
          info.required = true;
        }

        // Extract @example value
        const exampleMatch = jsdoc.match(/@example\s*\n\s*\*\s*(.+?)(?:\n|$)/);
        if (exampleMatch) {
          info.example = exampleMatch[1].trim();
        }

        if (Object.keys(info).length > 0) {
          classAnnotations[fieldName] = info;
        }
      }

      if (Object.keys(classAnnotations).length > 0) {
        annotations[className] = classAnnotations;
      }
    }
  } catch (e) {
    // .d.ts not available -- annotations will just be empty
  }
  return annotations;
}

/**
 * Merge JSDoc annotations into the deep-introspected fields.
 */
function mergeAnnotations(schema, annotations) {
  if (!schema || !schema.fields || !annotations) return schema;
  const classAnns = annotations[schema.className] || {};
  for (const [fieldName, fieldInfo] of Object.entries(schema.fields)) {
    const ann = classAnns[fieldName];
    if (ann) {
      if (ann.required) fieldInfo.required = true;
      if (ann.example !== undefined) fieldInfo.example = ann.example;
    }
    // Recurse into nested model fields
    if (fieldInfo.type && typeof fieldInfo.type === 'object' && fieldInfo.type.type === 'model' && fieldInfo.type.fields) {
      mergeAnnotationsIntoNestedFields(fieldInfo.type, annotations);
    }
  }
  return schema;
}

function mergeAnnotationsIntoNestedFields(modelType, annotations) {
  const classAnns = annotations[modelType.className] || {};
  for (const [fieldName, fieldInfo] of Object.entries(modelType.fields || {})) {
    const ann = classAnns[fieldName];
    if (ann) {
      if (ann.required) fieldInfo.required = true;
      if (ann.example !== undefined) fieldInfo.example = ann.example;
    }
    if (fieldInfo.type && typeof fieldInfo.type === 'object' && fieldInfo.type.type === 'model' && fieldInfo.type.fields) {
      mergeAnnotationsIntoNestedFields(fieldInfo.type, annotations);
    }
  }
}

// ── API metadata extraction from method source ───────────────────────

/**
 * Extract API metadata (HTTP method, pathname, authType, etc.) from a
 * WithOptions method's source code by parsing the $OpenApi.Params literal.
 */
function extractApiMetadata(clientClass, methodName) {
  const withOptionsName = `${methodName}WithOptions`;
  const fn = clientClass.prototype[withOptionsName];
  if (!fn) return null;

  const src = fn.toString();
  const meta = {};

  // Extract fields from the Params constructor: field: "value" or field: `template`
  const paramPatterns = [
    { key: 'action', regex: /action:\s*["'`]([^"'`]+)["'`]/ },
    { key: 'version', regex: /version:\s*["'`]([^"'`]+)["'`]/ },
    { key: 'protocol', regex: /protocol:\s*["'`]([^"'`]+)["'`]/ },
    { key: 'pathname', regex: /pathname:\s*["'`]([^"'`]+)["'`]/ },
    { key: 'method', regex: /method:\s*["'`]([^"'`]+)["'`]/ },
    { key: 'authType', regex: /authType:\s*["'`]([^"'`]+)["'`]/ },
    { key: 'style', regex: /style:\s*["'`]([^"'`]+)["'`]/ },
    { key: 'reqBodyType', regex: /reqBodyType:\s*["'`]([^"'`]+)["'`]/ },
    { key: 'bodyType', regex: /bodyType:\s*["'`]([^"'`]+)["'`]/ },
  ];

  for (const { key, regex } of paramPatterns) {
    const m = src.match(regex);
    if (m) meta[key] = m[1];
  }

  // Detect which fields go into query vs body vs formData
  const paramLocations = {};
  // body["fieldName"] = ...
  const bodyFieldRegex = /body\["(\w+)"\]/g;
  let bm;
  while ((bm = bodyFieldRegex.exec(src)) !== null) {
    paramLocations[bm[1]] = 'body';
  }
  // query["fieldName"] = ...
  const queryFieldRegex = /query\["(\w+)"\]/g;
  let qm;
  while ((qm = queryFieldRegex.exec(src)) !== null) {
    paramLocations[qm[1]] = 'query';
  }
  if (Object.keys(paramLocations).length > 0) {
    meta.paramLocations = paramLocations;
  }

  // Detect path parameters from pathname template: ${varName}
  const pathParamRegex = /\$\{(\w+)\}/g;
  const pathParams = [];
  // Use the raw source with template literals preserved
  const rawPathMatch = src.match(/pathname:\s*`([^`]+)`/);
  if (rawPathMatch) {
    meta.pathname = rawPathMatch[1]; // preserve template
    let pp;
    while ((pp = pathParamRegex.exec(rawPathMatch[1])) !== null) {
      pathParams.push(pp[1]);
    }
  }
  if (pathParams.length > 0) {
    meta.pathParams = pathParams;
  }

  // Extract JSDoc description from the method
  const jsSrc = fn.toString();
  // The compiled JS preserves JSDoc before the method in some cases
  // Better: parse from the .js source file -- handled at caller level

  return Object.keys(meta).length > 0 ? meta : null;
}

// ── JSDoc description extraction from source files ───────────────────

/**
 * Extract the JSDoc @description (Chinese or English) for methods
 * from the compiled .js file.
 */
function parseMethodDescriptions(jsPath) {
  const descriptions = {};
  try {
    const content = fs.readFileSync(jsPath, 'utf8');
    // Match: /** <description> * @param ... */ async methodName(
    const methodDocRegex = /\/\*\*\s*\n\s*\*\s*(.+?)\s*\n[\s\S]*?\*\/\s*\n\s*async\s+(\w+)\s*\(/g;
    let m;
    while ((m = methodDocRegex.exec(content)) !== null) {
      const desc = m[1].trim();
      const name = m[2];
      // Only store for non-WithOptions methods or WithOptions methods
      if (desc && desc !== '@returns' && !desc.startsWith('@')) {
        descriptions[name] = desc;
      }
    }
  } catch (e) {}
  return descriptions;
}

async function main() {
  const root = process.cwd();
  const sdk = loadSdk(root);
  const payload = parseInput();

  if (payload.action === 'list_modules') {
    const modules = Object.keys(sdk).sort();
    return { ok: true, result: { modules } };
  }

  if (payload.action === 'module_methods') {
    const mod = sdk[payload.module];
    if (!mod || !mod.default) throw new Error(`Unknown module: ${payload.module}`);
    const methods = Object.getOwnPropertyNames(mod.default.prototype)
      .filter((name) => name !== 'constructor' && typeof mod.default.prototype[name] === 'function')
      .sort();
    return { ok: true, result: { module: payload.module, methods } };
  }

  if (payload.action === 'module_describe') {
    const mod = sdk[payload.module];
    if (!mod || !mod.default) throw new Error(`Unknown module: ${payload.module}`);

    // Load JSDoc annotations from .d.ts file
    const dtsPath = path.join(root, 'ts', 'dist', payload.module, 'client.d.ts');
    const annotations = parseDtsAnnotations(dtsPath);

    // Load method descriptions from .js file
    const jsPath = path.join(root, 'ts', 'dist', payload.module, 'client.js');
    const methodDescriptions = parseMethodDescriptions(jsPath);

    // Get all methods (primary only, no WithOptions)
    const allMethods = Object.getOwnPropertyNames(mod.default.prototype)
      .filter((name) => name !== 'constructor' && typeof mod.default.prototype[name] === 'function')
      .sort();
    const primaryMethods = allMethods.filter((n) => !n.endsWith('WithOptions'));

    // For each primary method, try to find Request/Response/Headers classes and their fields
    const methodDetails = {};
    for (const methodName of primaryMethods) {
      const capName = methodName.charAt(0).toUpperCase() + methodName.slice(1);
      const requestClassName = `${capName}Request`;
      const responseClassName = `${capName}Response`;
      const headersClassName = `${capName}Headers`;
      const responseBodyClassName = `${capName}ResponseBody`;

      const detail = {
        hasWithOptions: allMethods.includes(`${methodName}WithOptions`),
        request: null,
        response: null,
        headers: null,
      };

      // Deep introspect Request class (resolve nested types up to 4 levels)
      const reqClass = mod[requestClassName];
      if (reqClass) {
        detail.request = introspectClassDeep(reqClass, requestClassName, new Set(), 4);
        mergeAnnotations(detail.request, annotations);
      }

      // Deep introspect Response class (prefer ResponseBody over Response)
      const respClass = mod[responseBodyClassName] || mod[responseClassName];
      const respName = mod[responseBodyClassName] ? responseBodyClassName : responseClassName;
      if (respClass) {
        detail.response = introspectClassDeep(respClass, respName, new Set(), 4);
        mergeAnnotations(detail.response, annotations);
      }

      // Deep introspect Headers class
      const hdrClass = mod[headersClassName];
      if (hdrClass) {
        detail.headers = introspectClassDeep(hdrClass, headersClassName, new Set(), 4);
        mergeAnnotations(detail.headers, annotations);
      }

      // Extract API metadata from WithOptions method
      const apiMeta = extractApiMetadata(mod.default, methodName);
      if (apiMeta) {
        detail.api = apiMeta;
      }

      // Add method description
      const desc = methodDescriptions[`${methodName}WithOptions`] || methodDescriptions[methodName];
      if (desc) {
        detail.description = desc;
      }

      methodDetails[methodName] = detail;
    }

    return {
      ok: true,
      result: {
        module: payload.module,
        totalMethods: allMethods.length,
        primaryMethods: primaryMethods.length,
        methods: methodDetails,
      },
    };
  }

  if (payload.action === 'method_describe') {
    const mod = sdk[payload.module];
    if (!mod || !mod.default) throw new Error(`Unknown module: ${payload.module}`);
    const methodName = payload.method;
    if (!methodName) throw new Error('method_describe requires a "method" field');

    const allMethods = Object.getOwnPropertyNames(mod.default.prototype)
      .filter((n) => n !== 'constructor' && typeof mod.default.prototype[n] === 'function');
    if (!allMethods.includes(methodName) && !allMethods.includes(`${methodName}WithOptions`)) {
      throw new Error(`Unknown method: ${payload.module}.${methodName}`);
    }

    const capName = methodName.charAt(0).toUpperCase() + methodName.slice(1);
    const requestClassName = `${capName}Request`;
    const responseBodyClassName = `${capName}ResponseBody`;
    const responseClassName = `${capName}Response`;
    const headersClassName = `${capName}Headers`;

    // Load JSDoc annotations
    const dtsPath = path.join(root, 'ts', 'dist', payload.module, 'client.d.ts');
    const annotations = parseDtsAnnotations(dtsPath);

    // Load method descriptions
    const jsPath = path.join(root, 'ts', 'dist', payload.module, 'client.js');
    const methodDescriptions = parseMethodDescriptions(jsPath);

    // Deep introspect with full depth (6 levels for single method)
    const maxDepth = 6;
    const detail = {
      module: payload.module,
      method: methodName,
      hasWithOptions: allMethods.includes(`${methodName}WithOptions`),
      request: null,
      response: null,
      headers: null,
      api: null,
      description: null,
    };

    const reqClass = mod[requestClassName];
    if (reqClass) {
      detail.request = introspectClassDeep(reqClass, requestClassName, new Set(), maxDepth);
      mergeAnnotations(detail.request, annotations);
    }

    const respClass = mod[responseBodyClassName] || mod[responseClassName];
    const respName = mod[responseBodyClassName] ? responseBodyClassName : responseClassName;
    if (respClass) {
      detail.response = introspectClassDeep(respClass, respName, new Set(), maxDepth);
      mergeAnnotations(detail.response, annotations);
    }

    const hdrClass = mod[headersClassName];
    if (hdrClass) {
      detail.headers = introspectClassDeep(hdrClass, headersClassName, new Set(), maxDepth);
      mergeAnnotations(detail.headers, annotations);
    }

    detail.api = extractApiMetadata(mod.default, methodName);
    detail.description = methodDescriptions[`${methodName}WithOptions`] || methodDescriptions[methodName] || null;

    return { ok: true, result: detail };
  }

  if (payload.action === 'modules_stats') {
    const moduleNames = Object.keys(sdk).sort();
    const stats = {};
    let totalPrimary = 0;
    let totalAll = 0;
    for (const modName of moduleNames) {
      try {
        const allMethods = Object.getOwnPropertyNames(sdk[modName].default.prototype)
          .filter((n) => n !== 'constructor' && typeof sdk[modName].default.prototype[n] === 'function');
        const primary = allMethods.filter((n) => !n.endsWith('WithOptions'));
        stats[modName] = { total: allMethods.length, primary: primary.length };
        totalPrimary += primary.length;
        totalAll += allMethods.length;
      } catch (e) {
        stats[modName] = { total: 0, primary: 0 };
      }
    }
    return {
      ok: true,
      result: {
        moduleCount: moduleNames.length,
        totalMethods: totalAll,
        totalPrimaryMethods: totalPrimary,
        modules: stats,
      },
    };
  }

  if (payload.action === 'call') {
    const mod = sdk[payload.module];
    if (!mod || !mod.default) throw new Error(`Unknown module: ${payload.module}`);
    const Client = mod.default;
    const client = new Client({});
    // Force HTTPS — some environments redirect HTTP requests returning HTML
    if (!client._protocol || client._protocol === 'HTTP') {
      client._protocol = 'HTTPS';
    }
    const methodName = payload.method;
    const withOptionsName = `${methodName}WithOptions`;
    let result;

    if (payload.headers && Object.keys(payload.headers).length && typeof client[withOptionsName] === 'function') {
      const headersClassName = `${methodName.charAt(0).toUpperCase()}${methodName.slice(1)}Headers`;
      const HeadersClass = mod[headersClassName];
      const headers = HeadersClass ? new HeadersClass(payload.headers) : payload.headers;
      const runtime = {};
      if (payload.args === undefined || payload.args === null) {
        result = await client[withOptionsName](headers, runtime);
      } else if (typeof payload.args === 'string' || Array.isArray(payload.args)) {
        result = await client[withOptionsName](payload.args, headers, runtime);
      } else {
        const requestClassName = `${methodName.charAt(0).toUpperCase()}${methodName.slice(1)}Request`;
        const RequestClass = mod[requestClassName];
        const request = RequestClass ? new RequestClass(payload.args) : payload.args;
        result = await client[withOptionsName](request, headers, runtime);
      }
    } else {
      if (typeof client[methodName] !== 'function') throw new Error(`Unknown method: ${payload.module}.${payload.method}`);
      if (payload.args === undefined || payload.args === null) {
        result = await client[methodName]();
      } else if (typeof payload.args === 'string' || Array.isArray(payload.args)) {
        result = await client[methodName](payload.args);
      } else {
        const requestClassName = `${methodName.charAt(0).toUpperCase()}${methodName.slice(1)}Request`;
        const RequestClass = mod[requestClassName];
        const request = RequestClass ? new RequestClass(payload.args) : payload.args;
        result = await client[methodName](request);
      }
    }

    return { ok: true, result: toPlain(result) };
  }

  throw new Error(`Unknown action: ${payload.action}`);
}

main()
  .then((data) => process.stdout.write(JSON.stringify(data)))
  .catch((err) => process.stdout.write(JSON.stringify({ ok: false, error: err.message })));
