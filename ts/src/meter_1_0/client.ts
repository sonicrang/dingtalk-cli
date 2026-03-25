// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetResourceUseInfoHeaders extends $tea.Model {
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

export class GetResourceUseInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  benefitCodeList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  period?: string;
  static names(): { [key: string]: string } {
    return {
      benefitCodeList: 'benefitCodeList',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitCodeList: { 'type': 'array', 'itemType': 'string' },
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceUseInfoResponseBody extends $tea.Model {
  result?: GetResourceUseInfoResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetResourceUseInfoResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceUseInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceUseInfoResponseBody;
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
      body: GetResourceUseInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceUseInfoResponseBodyResult extends $tea.Model {
  quotaNum?: number;
  usedNum?: number;
  static names(): { [key: string]: string } {
    return {
      quotaNum: 'quotaNum',
      usedNum: 'usedNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaNum: 'number',
      usedNum: 'number',
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
   * 获取开放平台当月资源用量
   * 
   * @param request - GetResourceUseInfoRequest
   * @param headers - GetResourceUseInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceUseInfoResponse
   */
  async getResourceUseInfoWithOptions(request: GetResourceUseInfoRequest, headers: GetResourceUseInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetResourceUseInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.benefitCodeList)) {
      body["benefitCodeList"] = request.benefitCodeList;
    }

    if (!Util.isUnset(request.period)) {
      body["period"] = request.period;
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
      action: "GetResourceUseInfo",
      version: "meter_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/meter/resources/useInfos/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetResourceUseInfoResponse>(await this.execute(params, req, runtime), new GetResourceUseInfoResponse({}));
  }

  /**
   * 获取开放平台当月资源用量
   * 
   * @param request - GetResourceUseInfoRequest
   * @returns GetResourceUseInfoResponse
   */
  async getResourceUseInfo(request: GetResourceUseInfoRequest): Promise<GetResourceUseInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetResourceUseInfoHeaders({ });
    return await this.getResourceUseInfoWithOptions(request, headers, runtime);
  }

}
