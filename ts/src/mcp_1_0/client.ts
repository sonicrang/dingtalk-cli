// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivateMcpHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateMcpRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  mcpId?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      mcpId: 'mcpId',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpId: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateMcpResponseBody extends $tea.Model {
  instanceId?: string;
  jsonConfig?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      jsonConfig: 'jsonConfig',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jsonConfig: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateMcpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActivateMcpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActivateMcpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcpHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcpRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcpResponseBody extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMcpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMcpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "";
    if (Util.empty(this._endpoint)) {
      this._endpoint = "api.dingtalk.com";
    }

  }


  /**
   * 激活MCP
   * 
   * @param request - ActivateMcpRequest
   * @param headers - ActivateMcpHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateMcpResponse
   */
  async activateMcpWithOptions(request: ActivateMcpRequest, headers: ActivateMcpHeaders, runtime: $Util.RuntimeOptions): Promise<ActivateMcpResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mcpId)) {
      body["mcpId"] = request.mcpId;
    }

    if (!Util.isUnset(request.source)) {
      body["source"] = request.source;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsDingtalkAccessToken)) {
      realHeaders["x-acs-dingtalk-access-token"] = Util.toJSONString(headers.xAcsDingtalkAccessToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ActivateMcp",
      version: "mcp_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mcp/activate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ActivateMcpResponse>(await this.execute(params, req, runtime), new ActivateMcpResponse({}));
  }

  /**
   * 激活MCP
   * 
   * @param request - ActivateMcpRequest
   * @returns ActivateMcpResponse
   */
  async activateMcp(request: ActivateMcpRequest): Promise<ActivateMcpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ActivateMcpHeaders({ });
    return await this.activateMcpWithOptions(request, headers, runtime);
  }

  /**
   * 删除MCP实例
   * 
   * @param request - DeleteMcpRequest
   * @param headers - DeleteMcpHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMcpResponse
   */
  async deleteMcpWithOptions(request: DeleteMcpRequest, headers: DeleteMcpHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteMcpResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsDingtalkAccessToken)) {
      realHeaders["x-acs-dingtalk-access-token"] = Util.toJSONString(headers.xAcsDingtalkAccessToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMcp",
      version: "mcp_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mcp/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteMcpResponse>(await this.execute(params, req, runtime), new DeleteMcpResponse({}));
  }

  /**
   * 删除MCP实例
   * 
   * @param request - DeleteMcpRequest
   * @returns DeleteMcpResponse
   */
  async deleteMcp(request: DeleteMcpRequest): Promise<DeleteMcpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteMcpHeaders({ });
    return await this.deleteMcpWithOptions(request, headers, runtime);
  }

}
