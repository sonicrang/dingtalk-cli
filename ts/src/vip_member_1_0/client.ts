// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class DirectRedeemVipMemberByMobileHeaders extends $tea.Model {
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

export class DirectRedeemVipMemberByMobileRequest extends $tea.Model {
  bizRequestId?: string;
  channel?: string;
  dingtalkId?: string;
  duration?: number;
  mobile?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bizRequestId: 'bizRequestId',
      channel: 'channel',
      dingtalkId: 'dingtalkId',
      duration: 'duration',
      mobile: 'mobile',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRequestId: 'string',
      channel: 'string',
      dingtalkId: 'string',
      duration: 'number',
      mobile: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DirectRedeemVipMemberByMobileResponseBody extends $tea.Model {
  bizRequestId?: string;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizRequestId: 'bizRequestId',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRequestId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DirectRedeemVipMemberByMobileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DirectRedeemVipMemberByMobileResponseBody;
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
      body: DirectRedeemVipMemberByMobileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidRedeemVipMemberByBizRequestIdHeaders extends $tea.Model {
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

export class InvalidRedeemVipMemberByBizRequestIdRequest extends $tea.Model {
  bizRequestId?: string;
  channel?: string;
  dingtalkId?: string;
  duration?: number;
  mobile?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bizRequestId: 'bizRequestId',
      channel: 'channel',
      dingtalkId: 'dingtalkId',
      duration: 'duration',
      mobile: 'mobile',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRequestId: 'string',
      channel: 'string',
      dingtalkId: 'string',
      duration: 'number',
      mobile: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidRedeemVipMemberByBizRequestIdResponseBody extends $tea.Model {
  bizRequestId?: string;
  errorCode?: string;
  errorMsg?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      bizRequestId: 'bizRequestId',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRequestId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidRedeemVipMemberByBizRequestIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvalidRedeemVipMemberByBizRequestIdResponseBody;
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
      body: InvalidRedeemVipMemberByBizRequestIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckRedeemVipMemberHeaders extends $tea.Model {
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

export class PreCheckRedeemVipMemberRequest extends $tea.Model {
  bizRequestId?: string;
  channel?: string;
  dingtalkId?: string;
  duration?: number;
  mobile?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bizRequestId: 'bizRequestId',
      channel: 'channel',
      dingtalkId: 'dingtalkId',
      duration: 'duration',
      mobile: 'mobile',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRequestId: 'string',
      channel: 'string',
      dingtalkId: 'string',
      duration: 'number',
      mobile: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckRedeemVipMemberResponseBody extends $tea.Model {
  bizRequestId?: string;
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizRequestId: 'bizRequestId',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRequestId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckRedeemVipMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PreCheckRedeemVipMemberResponseBody;
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
      body: PreCheckRedeemVipMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemVipMemberHeaders extends $tea.Model {
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

export class QueryRedeemVipMemberRequest extends $tea.Model {
  bizRequestId?: string;
  channel?: string;
  dingtalkId?: string;
  duration?: number;
  mobile?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bizRequestId: 'bizRequestId',
      channel: 'channel',
      dingtalkId: 'dingtalkId',
      duration: 'duration',
      mobile: 'mobile',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRequestId: 'string',
      channel: 'string',
      dingtalkId: 'string',
      duration: 'number',
      mobile: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemVipMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  queryResults?: QueryRedeemVipMemberResponseBodyQueryResults[];
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      queryResults: 'queryResults',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      queryResults: { 'type': 'array', 'itemType': QueryRedeemVipMemberResponseBodyQueryResults },
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemVipMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRedeemVipMemberResponseBody;
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
      body: QueryRedeemVipMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVipMemberInfoHeaders extends $tea.Model {
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

export class QueryVipMemberInfoRequest extends $tea.Model {
  channelCode?: string;
  static names(): { [key: string]: string } {
    return {
      channelCode: 'channelCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVipMemberInfoResponseBody extends $tea.Model {
  expireTime?: string;
  isVip?: boolean;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      isVip: 'isVip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      isVip: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVipMemberInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryVipMemberInfoResponseBody;
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
      body: QueryVipMemberInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemVipMemberResponseBodyQueryResults extends $tea.Model {
  action?: string;
  actionTime?: string;
  dingtalkId?: string;
  duration?: number;
  expireDate?: string;
  nick?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      actionTime: 'actionTime',
      dingtalkId: 'dingtalkId',
      duration: 'duration',
      expireDate: 'expireDate',
      nick: 'nick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionTime: 'string',
      dingtalkId: 'string',
      duration: 'number',
      expireDate: 'string',
      nick: 'string',
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
   * 通过手机号直充365会员
   * 
   * @param request - DirectRedeemVipMemberByMobileRequest
   * @param headers - DirectRedeemVipMemberByMobileHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DirectRedeemVipMemberByMobileResponse
   */
  async directRedeemVipMemberByMobileWithOptions(request: DirectRedeemVipMemberByMobileRequest, headers: DirectRedeemVipMemberByMobileHeaders, runtime: $Util.RuntimeOptions): Promise<DirectRedeemVipMemberByMobileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizRequestId)) {
      body["bizRequestId"] = request.bizRequestId;
    }

    if (!Util.isUnset(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!Util.isUnset(request.dingtalkId)) {
      body["dingtalkId"] = request.dingtalkId;
    }

    if (!Util.isUnset(request.duration)) {
      body["duration"] = request.duration;
    }

    if (!Util.isUnset(request.mobile)) {
      body["mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.uuid)) {
      body["uuid"] = request.uuid;
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
      action: "DirectRedeemVipMemberByMobile",
      version: "vipMember_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/vipMember/users/directRedeemVip`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DirectRedeemVipMemberByMobileResponse>(await this.execute(params, req, runtime), new DirectRedeemVipMemberByMobileResponse({}));
  }

  /**
   * 通过手机号直充365会员
   * 
   * @param request - DirectRedeemVipMemberByMobileRequest
   * @returns DirectRedeemVipMemberByMobileResponse
   */
  async directRedeemVipMemberByMobile(request: DirectRedeemVipMemberByMobileRequest): Promise<DirectRedeemVipMemberByMobileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DirectRedeemVipMemberByMobileHeaders({ });
    return await this.directRedeemVipMemberByMobileWithOptions(request, headers, runtime);
  }

  /**
   * 通过虚拟订单号作废365会员权益
   * 
   * @param request - InvalidRedeemVipMemberByBizRequestIdRequest
   * @param headers - InvalidRedeemVipMemberByBizRequestIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvalidRedeemVipMemberByBizRequestIdResponse
   */
  async invalidRedeemVipMemberByBizRequestIdWithOptions(request: InvalidRedeemVipMemberByBizRequestIdRequest, headers: InvalidRedeemVipMemberByBizRequestIdHeaders, runtime: $Util.RuntimeOptions): Promise<InvalidRedeemVipMemberByBizRequestIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizRequestId)) {
      body["bizRequestId"] = request.bizRequestId;
    }

    if (!Util.isUnset(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!Util.isUnset(request.dingtalkId)) {
      body["dingtalkId"] = request.dingtalkId;
    }

    if (!Util.isUnset(request.duration)) {
      body["duration"] = request.duration;
    }

    if (!Util.isUnset(request.mobile)) {
      body["mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.uuid)) {
      body["uuid"] = request.uuid;
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
      action: "InvalidRedeemVipMemberByBizRequestId",
      version: "vipMember_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/vipMember/users/invalidRedeemVip`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<InvalidRedeemVipMemberByBizRequestIdResponse>(await this.execute(params, req, runtime), new InvalidRedeemVipMemberByBizRequestIdResponse({}));
  }

  /**
   * 通过虚拟订单号作废365会员权益
   * 
   * @param request - InvalidRedeemVipMemberByBizRequestIdRequest
   * @returns InvalidRedeemVipMemberByBizRequestIdResponse
   */
  async invalidRedeemVipMemberByBizRequestId(request: InvalidRedeemVipMemberByBizRequestIdRequest): Promise<InvalidRedeemVipMemberByBizRequestIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InvalidRedeemVipMemberByBizRequestIdHeaders({ });
    return await this.invalidRedeemVipMemberByBizRequestIdWithOptions(request, headers, runtime);
  }

  /**
   * 直充会员预校验是否满足条件
   * 
   * @param request - PreCheckRedeemVipMemberRequest
   * @param headers - PreCheckRedeemVipMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreCheckRedeemVipMemberResponse
   */
  async preCheckRedeemVipMemberWithOptions(request: PreCheckRedeemVipMemberRequest, headers: PreCheckRedeemVipMemberHeaders, runtime: $Util.RuntimeOptions): Promise<PreCheckRedeemVipMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizRequestId)) {
      body["bizRequestId"] = request.bizRequestId;
    }

    if (!Util.isUnset(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!Util.isUnset(request.dingtalkId)) {
      body["dingtalkId"] = request.dingtalkId;
    }

    if (!Util.isUnset(request.duration)) {
      body["duration"] = request.duration;
    }

    if (!Util.isUnset(request.mobile)) {
      body["mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.uuid)) {
      body["uuid"] = request.uuid;
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
      action: "PreCheckRedeemVipMember",
      version: "vipMember_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/vipMember/users/preCheckRedeemVip`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<PreCheckRedeemVipMemberResponse>(await this.execute(params, req, runtime), new PreCheckRedeemVipMemberResponse({}));
  }

  /**
   * 直充会员预校验是否满足条件
   * 
   * @param request - PreCheckRedeemVipMemberRequest
   * @returns PreCheckRedeemVipMemberResponse
   */
  async preCheckRedeemVipMember(request: PreCheckRedeemVipMemberRequest): Promise<PreCheckRedeemVipMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PreCheckRedeemVipMemberHeaders({ });
    return await this.preCheckRedeemVipMemberWithOptions(request, headers, runtime);
  }

  /**
   * 查询365会员直充信息
   * 
   * @param request - QueryRedeemVipMemberRequest
   * @param headers - QueryRedeemVipMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRedeemVipMemberResponse
   */
  async queryRedeemVipMemberWithOptions(request: QueryRedeemVipMemberRequest, headers: QueryRedeemVipMemberHeaders, runtime: $Util.RuntimeOptions): Promise<QueryRedeemVipMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizRequestId)) {
      body["bizRequestId"] = request.bizRequestId;
    }

    if (!Util.isUnset(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!Util.isUnset(request.dingtalkId)) {
      body["dingtalkId"] = request.dingtalkId;
    }

    if (!Util.isUnset(request.duration)) {
      body["duration"] = request.duration;
    }

    if (!Util.isUnset(request.mobile)) {
      body["mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.uuid)) {
      body["uuid"] = request.uuid;
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
      action: "QueryRedeemVipMember",
      version: "vipMember_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/vipMember/users/queryRedeemVip`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryRedeemVipMemberResponse>(await this.execute(params, req, runtime), new QueryRedeemVipMemberResponse({}));
  }

  /**
   * 查询365会员直充信息
   * 
   * @param request - QueryRedeemVipMemberRequest
   * @returns QueryRedeemVipMemberResponse
   */
  async queryRedeemVipMember(request: QueryRedeemVipMemberRequest): Promise<QueryRedeemVipMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryRedeemVipMemberHeaders({ });
    return await this.queryRedeemVipMemberWithOptions(request, headers, runtime);
  }

  /**
   * 查询365会员信息
   * 
   * @param request - QueryVipMemberInfoRequest
   * @param headers - QueryVipMemberInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVipMemberInfoResponse
   */
  async queryVipMemberInfoWithOptions(request: QueryVipMemberInfoRequest, headers: QueryVipMemberInfoHeaders, runtime: $Util.RuntimeOptions): Promise<QueryVipMemberInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelCode)) {
      body["channelCode"] = request.channelCode;
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
      action: "QueryVipMemberInfo",
      version: "vipMember_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/vipMember/users/memberInfos/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryVipMemberInfoResponse>(await this.execute(params, req, runtime), new QueryVipMemberInfoResponse({}));
  }

  /**
   * 查询365会员信息
   * 
   * @param request - QueryVipMemberInfoRequest
   * @returns QueryVipMemberInfoResponse
   */
  async queryVipMemberInfo(request: QueryVipMemberInfoRequest): Promise<QueryVipMemberInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryVipMemberInfoHeaders({ });
    return await this.queryVipMemberInfoWithOptions(request, headers, runtime);
  }

}
