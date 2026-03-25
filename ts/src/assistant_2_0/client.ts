// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAssistantMessageHeaders extends $tea.Model {
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

export class CreateAssistantMessageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantMessageResponseBody extends $tea.Model {
  assistantId?: string;
  createdAt?: number;
  id?: string;
  object?: string;
  role?: string;
  runId?: string;
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      createdAt: 'createdAt',
      id: 'id',
      object: 'object',
      role: 'role',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      createdAt: 'number',
      id: 'string',
      object: 'string',
      role: 'string',
      runId: 'string',
      threadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAssistantMessageResponseBody;
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
      body: CreateAssistantMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantRunHeaders extends $tea.Model {
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

export class CreateAssistantRunResponseBody extends $tea.Model {
  assistantId?: string;
  cancelledAt?: number;
  completedAt?: number;
  createdAt?: number;
  expiresAt?: number;
  failedAt?: number;
  id?: string;
  lastErrorMsg?: string;
  object?: string;
  startedAt?: number;
  status?: string;
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      cancelledAt: 'cancelledAt',
      completedAt: 'completedAt',
      createdAt: 'createdAt',
      expiresAt: 'expiresAt',
      failedAt: 'failedAt',
      id: 'id',
      lastErrorMsg: 'lastErrorMsg',
      object: 'object',
      startedAt: 'startedAt',
      status: 'status',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      cancelledAt: 'number',
      completedAt: 'number',
      createdAt: 'number',
      expiresAt: 'number',
      failedAt: 'number',
      id: 'string',
      lastErrorMsg: 'string',
      object: 'string',
      startedAt: 'number',
      status: 'string',
      threadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAssistantRunResponseBody;
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
      body: CreateAssistantRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantThreadHeaders extends $tea.Model {
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

export class CreateAssistantThreadResponseBody extends $tea.Model {
  createdAt?: number;
  id?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      id: 'id',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      id: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantThreadResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAssistantThreadResponseBody;
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
      body: CreateAssistantThreadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssistantMessageHeaders extends $tea.Model {
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

export class DeleteAssistantMessageResponseBody extends $tea.Model {
  deleted?: boolean;
  id?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'deleted',
      id: 'id',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'boolean',
      id: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssistantMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAssistantMessageResponseBody;
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
      body: DeleteAssistantMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssistantThreadHeaders extends $tea.Model {
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

export class DeleteAssistantThreadResponseBody extends $tea.Model {
  deleted?: boolean;
  id?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'deleted',
      id: 'id',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'boolean',
      id: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssistantThreadResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAssistantThreadResponseBody;
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
      body: DeleteAssistantThreadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantMessageHeaders extends $tea.Model {
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

export class ListAssistantMessageRequest extends $tea.Model {
  limit?: number;
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      runId: 'runId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      runId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantMessageResponseBody extends $tea.Model {
  data?: ListAssistantMessageResponseBodyData[];
  object?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAssistantMessageResponseBodyData },
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAssistantMessageResponseBody;
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
      body: ListAssistantMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantMessageHeaders extends $tea.Model {
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

export class RetrieveAssistantMessageResponseBody extends $tea.Model {
  assisantId?: string;
  content?: any[];
  createdAt?: number;
  id?: string;
  object?: string;
  role?: string;
  runId?: string;
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assisantId: 'assisantId',
      content: 'content',
      createdAt: 'createdAt',
      id: 'id',
      object: 'object',
      role: 'role',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assisantId: 'string',
      content: { 'type': 'array', 'itemType': 'any' },
      createdAt: 'number',
      id: 'string',
      object: 'string',
      role: 'string',
      runId: 'string',
      threadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetrieveAssistantMessageResponseBody;
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
      body: RetrieveAssistantMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantThreadHeaders extends $tea.Model {
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

export class RetrieveAssistantThreadResponseBody extends $tea.Model {
  createdAt?: number;
  id?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      id: 'id',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      id: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantThreadResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetrieveAssistantThreadResponseBody;
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
      body: RetrieveAssistantThreadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantMessageResponseBodyData extends $tea.Model {
  assistantId?: string;
  content?: any[];
  createdAt?: number;
  id?: string;
  object?: string;
  role?: string;
  runId?: string;
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      content: 'content',
      createdAt: 'createdAt',
      id: 'id',
      object: 'object',
      role: 'role',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      content: { 'type': 'array', 'itemType': 'any' },
      createdAt: 'number',
      id: 'string',
      object: 'string',
      role: 'string',
      runId: 'string',
      threadId: 'string',
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
   * 创建AI助理的消息体
   * 
   * @param request - CreateAssistantMessageRequest
   * @param headers - CreateAssistantMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAssistantMessageResponse
   */
  async createAssistantMessageWithOptions(threadId: string, request: CreateAssistantMessageRequest, headers: CreateAssistantMessageHeaders, runtime: $Util.RuntimeOptions): Promise<CreateAssistantMessageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      query["content"] = request.content;
    }

    if (!Util.isUnset(request.role)) {
      query["role"] = request.role;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAssistantMessage",
      version: "assistant_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/assistant/threads/${threadId}/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateAssistantMessageResponse>(await this.execute(params, req, runtime), new CreateAssistantMessageResponse({}));
  }

  /**
   * 创建AI助理的消息体
   * 
   * @param request - CreateAssistantMessageRequest
   * @returns CreateAssistantMessageResponse
   */
  async createAssistantMessage(threadId: string, request: CreateAssistantMessageRequest): Promise<CreateAssistantMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateAssistantMessageHeaders({ });
    return await this.createAssistantMessageWithOptions(threadId, request, headers, runtime);
  }

  /**
   * 创建AI助理的运行任务
   * 
   * @param headers - CreateAssistantRunHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAssistantRunResponse
   */
  async createAssistantRunWithOptions(threadId: string, headers: CreateAssistantRunHeaders, runtime: $Util.RuntimeOptions): Promise<CreateAssistantRunResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsDingtalkAccessToken)) {
      realHeaders["x-acs-dingtalk-access-token"] = Util.toJSONString(headers.xAcsDingtalkAccessToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "CreateAssistantRun",
      version: "assistant_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/assistant/threads/${threadId}/runs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateAssistantRunResponse>(await this.execute(params, req, runtime), new CreateAssistantRunResponse({}));
  }

  /**
   * 创建AI助理的运行任务
   * @returns CreateAssistantRunResponse
   */
  async createAssistantRun(threadId: string): Promise<CreateAssistantRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateAssistantRunHeaders({ });
    return await this.createAssistantRunWithOptions(threadId, headers, runtime);
  }

  /**
   * 创建AI助理线程实例
   * 
   * @param headers - CreateAssistantThreadHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAssistantThreadResponse
   */
  async createAssistantThreadWithOptions(headers: CreateAssistantThreadHeaders, runtime: $Util.RuntimeOptions): Promise<CreateAssistantThreadResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsDingtalkAccessToken)) {
      realHeaders["x-acs-dingtalk-access-token"] = Util.toJSONString(headers.xAcsDingtalkAccessToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "CreateAssistantThread",
      version: "assistant_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/assistant/threads`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateAssistantThreadResponse>(await this.execute(params, req, runtime), new CreateAssistantThreadResponse({}));
  }

  /**
   * 创建AI助理线程实例
   * @returns CreateAssistantThreadResponse
   */
  async createAssistantThread(): Promise<CreateAssistantThreadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateAssistantThreadHeaders({ });
    return await this.createAssistantThreadWithOptions(headers, runtime);
  }

  /**
   * 删除AI助理的消息体
   * 
   * @param headers - DeleteAssistantMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAssistantMessageResponse
   */
  async deleteAssistantMessageWithOptions(threadId: string, messageId: string, headers: DeleteAssistantMessageHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteAssistantMessageResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsDingtalkAccessToken)) {
      realHeaders["x-acs-dingtalk-access-token"] = Util.toJSONString(headers.xAcsDingtalkAccessToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAssistantMessage",
      version: "assistant_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/assistant/threads/${threadId}/messages/${messageId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteAssistantMessageResponse>(await this.execute(params, req, runtime), new DeleteAssistantMessageResponse({}));
  }

  /**
   * 删除AI助理的消息体
   * @returns DeleteAssistantMessageResponse
   */
  async deleteAssistantMessage(threadId: string, messageId: string): Promise<DeleteAssistantMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteAssistantMessageHeaders({ });
    return await this.deleteAssistantMessageWithOptions(threadId, messageId, headers, runtime);
  }

  /**
   * 删除AI助理线程实例
   * 
   * @param headers - DeleteAssistantThreadHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAssistantThreadResponse
   */
  async deleteAssistantThreadWithOptions(threadId: string, headers: DeleteAssistantThreadHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteAssistantThreadResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsDingtalkAccessToken)) {
      realHeaders["x-acs-dingtalk-access-token"] = Util.toJSONString(headers.xAcsDingtalkAccessToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAssistantThread",
      version: "assistant_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/assistant/threads/${threadId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteAssistantThreadResponse>(await this.execute(params, req, runtime), new DeleteAssistantThreadResponse({}));
  }

  /**
   * 删除AI助理线程实例
   * @returns DeleteAssistantThreadResponse
   */
  async deleteAssistantThread(threadId: string): Promise<DeleteAssistantThreadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteAssistantThreadHeaders({ });
    return await this.deleteAssistantThreadWithOptions(threadId, headers, runtime);
  }

  /**
   * 获取AI助理消息列表
   * 
   * @param request - ListAssistantMessageRequest
   * @param headers - ListAssistantMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAssistantMessageResponse
   */
  async listAssistantMessageWithOptions(threadId: string, request: ListAssistantMessageRequest, headers: ListAssistantMessageHeaders, runtime: $Util.RuntimeOptions): Promise<ListAssistantMessageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.runId)) {
      query["runId"] = request.runId;
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAssistantMessage",
      version: "assistant_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/assistant/threads/${threadId}/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListAssistantMessageResponse>(await this.execute(params, req, runtime), new ListAssistantMessageResponse({}));
  }

  /**
   * 获取AI助理消息列表
   * 
   * @param request - ListAssistantMessageRequest
   * @returns ListAssistantMessageResponse
   */
  async listAssistantMessage(threadId: string, request: ListAssistantMessageRequest): Promise<ListAssistantMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListAssistantMessageHeaders({ });
    return await this.listAssistantMessageWithOptions(threadId, request, headers, runtime);
  }

  /**
   * 获取AI助理的消息体
   * 
   * @param headers - RetrieveAssistantMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveAssistantMessageResponse
   */
  async retrieveAssistantMessageWithOptions(threadId: string, messageId: string, headers: RetrieveAssistantMessageHeaders, runtime: $Util.RuntimeOptions): Promise<RetrieveAssistantMessageResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsDingtalkAccessToken)) {
      realHeaders["x-acs-dingtalk-access-token"] = Util.toJSONString(headers.xAcsDingtalkAccessToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "RetrieveAssistantMessage",
      version: "assistant_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/assistant/threads/${threadId}/messages/${messageId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RetrieveAssistantMessageResponse>(await this.execute(params, req, runtime), new RetrieveAssistantMessageResponse({}));
  }

  /**
   * 获取AI助理的消息体
   * @returns RetrieveAssistantMessageResponse
   */
  async retrieveAssistantMessage(threadId: string, messageId: string): Promise<RetrieveAssistantMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RetrieveAssistantMessageHeaders({ });
    return await this.retrieveAssistantMessageWithOptions(threadId, messageId, headers, runtime);
  }

  /**
   * 检索AI助理线程实例
   * 
   * @param headers - RetrieveAssistantThreadHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveAssistantThreadResponse
   */
  async retrieveAssistantThreadWithOptions(threadId: string, headers: RetrieveAssistantThreadHeaders, runtime: $Util.RuntimeOptions): Promise<RetrieveAssistantThreadResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsDingtalkAccessToken)) {
      realHeaders["x-acs-dingtalk-access-token"] = Util.toJSONString(headers.xAcsDingtalkAccessToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "RetrieveAssistantThread",
      version: "assistant_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/assistant/threads/${threadId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RetrieveAssistantThreadResponse>(await this.execute(params, req, runtime), new RetrieveAssistantThreadResponse({}));
  }

  /**
   * 检索AI助理线程实例
   * @returns RetrieveAssistantThreadResponse
   */
  async retrieveAssistantThread(threadId: string): Promise<RetrieveAssistantThreadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RetrieveAssistantThreadHeaders({ });
    return await this.retrieveAssistantThreadWithOptions(threadId, headers, runtime);
  }

}
