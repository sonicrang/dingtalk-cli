// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class DeleteFeedHeaders extends $tea.Model {
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

export class DeleteFeedRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dd-one-work-eSo869uR9VhWe2sqTw3dDF
   */
  feedId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ntThCP2X44FWclaliPIXPUQiEiE
   * 
   * **if can be null:**
   * false
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      feedId: 'feedId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFeedResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFeedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFeedResponseBody;
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
      body: DeleteFeedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliverOneFeedHeaders extends $tea.Model {
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

export class DeliverOneFeedRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  coverMediaId?: string;
  expireTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  summary?: string;
  userIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  videoMediaId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  videoTags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      coverMediaId: 'coverMediaId',
      expireTime: 'expireTime',
      summary: 'summary',
      userIds: 'userIds',
      videoMediaId: 'videoMediaId',
      videoTags: 'videoTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      coverMediaId: 'string',
      expireTime: 'number',
      summary: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
      videoMediaId: 'string',
      videoTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliverOneFeedResponseBody extends $tea.Model {
  result?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliverOneFeedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeliverOneFeedResponseBody;
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
      body: DeliverOneFeedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushFeedHeaders extends $tea.Model {
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

export class PushFeedRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: PushFeedRequestContent;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1772177962000
   */
  expireTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  feedFeature?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * iwElAqN6aXADBgQABQAGsO9WlNbxvoXaCN
   */
  idempotentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ntThCP2X44Fw73IXPUQiEiE
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      expireTime: 'expireTime',
      feedFeature: 'feedFeature',
      idempotentKey: 'idempotentKey',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: PushFeedRequestContent,
      expireTime: 'number',
      feedFeature: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentKey: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushFeedResponseBody extends $tea.Model {
  requestId?: string;
  result?: PushFeedResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: PushFeedResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushFeedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushFeedResponseBody;
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
      body: PushFeedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeedContentHeaders extends $tea.Model {
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

export class UpdateFeedContentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: UpdateFeedContentRequestContent;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dd-one-work-eSo869uR9Vhse2sqTw3dDF
   */
  feedId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ntThCP2X44FlskVliPIXPUQiEiE
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      feedId: 'feedId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: UpdateFeedContentRequestContent,
      feedId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeedContentResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeedContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFeedContentResponseBody;
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
      body: UpdateFeedContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeedExpireTimeHeaders extends $tea.Model {
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

export class UpdateFeedExpireTimeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1772177962000
   */
  expireTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dd-one-work-eSo869uR9Vhse2sqTw3dDF
   */
  feedId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ntThCP2X44FlskVliPIXPUQiEiE
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      feedId: 'feedId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      feedId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeedExpireTimeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeedExpireTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFeedExpireTimeResponseBody;
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
      body: UpdateFeedExpireTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushFeedRequestContentDslTemplateContent extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxxxx.xxx.com/v1.0/test.html
   */
  applyUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"date":"2025-11-06"}
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      applyUrl: 'applyUrl',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyUrl: 'string',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushFeedRequestContent extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dsTemplate
   */
  contentType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dslTemplateContent?: PushFeedRequestContentDslTemplateContent;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      dslTemplateContent: 'dslTemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      dslTemplateContent: PushFeedRequestContentDslTemplateContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushFeedResponseBodyResult extends $tea.Model {
  feedId?: string;
  static names(): { [key: string]: string } {
    return {
      feedId: 'feedId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeedContentRequestContentDslTemplateContent extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxxxx.xxx.com/v1.0/test.html
   */
  applyUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"date":"2025-11-06"}
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      applyUrl: 'applyUrl',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyUrl: 'string',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeedContentRequestContent extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dslTemplate
   */
  contentType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dslTemplateContent?: UpdateFeedContentRequestContentDslTemplateContent;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      dslTemplateContent: 'dslTemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      dslTemplateContent: UpdateFeedContentRequestContentDslTemplateContent,
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
   * 删除Feed
   * 
   * @param request - DeleteFeedRequest
   * @param headers - DeleteFeedHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFeedResponse
   */
  async deleteFeedWithOptions(request: DeleteFeedRequest, headers: DeleteFeedHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteFeedResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.feedId)) {
      body["feedId"] = request.feedId;
    }

    if (!Util.isUnset(request.unionId)) {
      body["unionId"] = request.unionId;
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
      action: "DeleteFeed",
      version: "dingOne_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dingOne/frame/feeds/deleteFeed`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteFeedResponse>(await this.execute(params, req, runtime), new DeleteFeedResponse({}));
  }

  /**
   * 删除Feed
   * 
   * @param request - DeleteFeedRequest
   * @returns DeleteFeedResponse
   */
  async deleteFeed(request: DeleteFeedRequest): Promise<DeleteFeedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteFeedHeaders({ });
    return await this.deleteFeedWithOptions(request, headers, runtime);
  }

  /**
   * 投放钉钉one中feed流资讯内容
   * 
   * @param request - DeliverOneFeedRequest
   * @param headers - DeliverOneFeedHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeliverOneFeedResponse
   */
  async deliverOneFeedWithOptions(request: DeliverOneFeedRequest, headers: DeliverOneFeedHeaders, runtime: $Util.RuntimeOptions): Promise<DeliverOneFeedResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.coverMediaId)) {
      body["coverMediaId"] = request.coverMediaId;
    }

    if (!Util.isUnset(request.expireTime)) {
      body["expireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.summary)) {
      body["summary"] = request.summary;
    }

    if (!Util.isUnset(request.userIds)) {
      body["userIds"] = request.userIds;
    }

    if (!Util.isUnset(request.videoMediaId)) {
      body["videoMediaId"] = request.videoMediaId;
    }

    if (!Util.isUnset(request.videoTags)) {
      body["videoTags"] = request.videoTags;
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
      action: "DeliverOneFeed",
      version: "dingOne_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dingOne/feed/deliver`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeliverOneFeedResponse>(await this.execute(params, req, runtime), new DeliverOneFeedResponse({}));
  }

  /**
   * 投放钉钉one中feed流资讯内容
   * 
   * @param request - DeliverOneFeedRequest
   * @returns DeliverOneFeedResponse
   */
  async deliverOneFeed(request: DeliverOneFeedRequest): Promise<DeliverOneFeedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeliverOneFeedHeaders({ });
    return await this.deliverOneFeedWithOptions(request, headers, runtime);
  }

  /**
   * Feed推送
   * 
   * @param request - PushFeedRequest
   * @param headers - PushFeedHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushFeedResponse
   */
  async pushFeedWithOptions(request: PushFeedRequest, headers: PushFeedHeaders, runtime: $Util.RuntimeOptions): Promise<PushFeedResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.expireTime)) {
      body["expireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.feedFeature)) {
      body["feedFeature"] = request.feedFeature;
    }

    if (!Util.isUnset(request.idempotentKey)) {
      body["idempotentKey"] = request.idempotentKey;
    }

    if (!Util.isUnset(request.unionId)) {
      body["unionId"] = request.unionId;
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
      action: "PushFeed",
      version: "dingOne_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dingOne/frame/feeds/pushFeed`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<PushFeedResponse>(await this.execute(params, req, runtime), new PushFeedResponse({}));
  }

  /**
   * Feed推送
   * 
   * @param request - PushFeedRequest
   * @returns PushFeedResponse
   */
  async pushFeed(request: PushFeedRequest): Promise<PushFeedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PushFeedHeaders({ });
    return await this.pushFeedWithOptions(request, headers, runtime);
  }

  /**
   * 更新feed内容
   * 
   * @param request - UpdateFeedContentRequest
   * @param headers - UpdateFeedContentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFeedContentResponse
   */
  async updateFeedContentWithOptions(request: UpdateFeedContentRequest, headers: UpdateFeedContentHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateFeedContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.feedId)) {
      body["feedId"] = request.feedId;
    }

    if (!Util.isUnset(request.unionId)) {
      body["unionId"] = request.unionId;
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
      action: "UpdateFeedContent",
      version: "dingOne_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dingOne/frame/feeds/updateFeedContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateFeedContentResponse>(await this.execute(params, req, runtime), new UpdateFeedContentResponse({}));
  }

  /**
   * 更新feed内容
   * 
   * @param request - UpdateFeedContentRequest
   * @returns UpdateFeedContentResponse
   */
  async updateFeedContent(request: UpdateFeedContentRequest): Promise<UpdateFeedContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateFeedContentHeaders({ });
    return await this.updateFeedContentWithOptions(request, headers, runtime);
  }

  /**
   * 更新feed过期时间
   * 
   * @param request - UpdateFeedExpireTimeRequest
   * @param headers - UpdateFeedExpireTimeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFeedExpireTimeResponse
   */
  async updateFeedExpireTimeWithOptions(request: UpdateFeedExpireTimeRequest, headers: UpdateFeedExpireTimeHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateFeedExpireTimeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.expireTime)) {
      body["expireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.feedId)) {
      body["feedId"] = request.feedId;
    }

    if (!Util.isUnset(request.unionId)) {
      body["unionId"] = request.unionId;
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
      action: "UpdateFeedExpireTime",
      version: "dingOne_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dingOne/frame/feeds/updateFeedExpireTime`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateFeedExpireTimeResponse>(await this.execute(params, req, runtime), new UpdateFeedExpireTimeResponse({}));
  }

  /**
   * 更新feed过期时间
   * 
   * @param request - UpdateFeedExpireTimeRequest
   * @returns UpdateFeedExpireTimeResponse
   */
  async updateFeedExpireTime(request: UpdateFeedExpireTimeRequest): Promise<UpdateFeedExpireTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateFeedExpireTimeHeaders({ });
    return await this.updateFeedExpireTimeWithOptions(request, headers, runtime);
  }

}
