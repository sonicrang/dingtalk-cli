// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCateringCommentHeaders extends $tea.Model {
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

export class AddCateringCommentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  commentId?: string;
  orderId?: string;
  rateContent?: string;
  ratedAt?: number;
  rating?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  shopId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  source?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      commentId: 'commentId',
      orderId: 'orderId',
      rateContent: 'rateContent',
      ratedAt: 'ratedAt',
      rating: 'rating',
      shopId: 'shopId',
      source: 'source',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentId: 'string',
      orderId: 'string',
      rateContent: 'string',
      ratedAt: 'number',
      rating: 'number',
      shopId: 'string',
      source: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCateringCommentResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCateringCommentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCateringCommentResponseBody;
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
      body: AddCateringCommentResponseBody,
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
   * 新增餐饮评价数据
   * 
   * @param request - AddCateringCommentRequest
   * @param headers - AddCateringCommentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCateringCommentResponse
   */
  async addCateringCommentWithOptions(request: AddCateringCommentRequest, headers: AddCateringCommentHeaders, runtime: $Util.RuntimeOptions): Promise<AddCateringCommentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commentId)) {
      body["commentId"] = request.commentId;
    }

    if (!Util.isUnset(request.orderId)) {
      body["orderId"] = request.orderId;
    }

    if (!Util.isUnset(request.rateContent)) {
      body["rateContent"] = request.rateContent;
    }

    if (!Util.isUnset(request.ratedAt)) {
      body["ratedAt"] = request.ratedAt;
    }

    if (!Util.isUnset(request.rating)) {
      body["rating"] = request.rating;
    }

    if (!Util.isUnset(request.shopId)) {
      body["shopId"] = request.shopId;
    }

    if (!Util.isUnset(request.source)) {
      body["source"] = request.source;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
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
      action: "AddCateringComment",
      version: "shangou_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/shangou/comment/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AddCateringCommentResponse>(await this.execute(params, req, runtime), new AddCateringCommentResponse({}));
  }

  /**
   * 新增餐饮评价数据
   * 
   * @param request - AddCateringCommentRequest
   * @returns AddCateringCommentResponse
   */
  async addCateringComment(request: AddCateringCommentRequest): Promise<AddCateringCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddCateringCommentHeaders({ });
    return await this.addCateringCommentWithOptions(request, headers, runtime);
  }

}
