// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetSalaryCalculationHeaders extends $tea.Model {
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

export class GetSalaryCalculationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-06
   */
  date?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SalaryGroupxxx
   */
  salaryGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      salaryGroupId: 'salaryGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      salaryGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryCalculationResponseBody extends $tea.Model {
  result?: GetSalaryCalculationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetSalaryCalculationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryCalculationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSalaryCalculationResponseBody;
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
      body: GetSalaryCalculationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryGroupHeaders extends $tea.Model {
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

export class GetSalaryGroupResponseBody extends $tea.Model {
  result?: GetSalaryGroupResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetSalaryGroupResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSalaryGroupResponseBody;
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
      body: GetSalaryGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryItemHeaders extends $tea.Model {
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

export class GetSalaryItemRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SalaryItemGroupxxx
   */
  salaryItemGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      salaryItemGroupId: 'salaryItemGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      salaryItemGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryItemResponseBody extends $tea.Model {
  result?: GetSalaryItemResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetSalaryItemResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSalaryItemResponseBody;
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
      body: GetSalaryItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryItemGroupHeaders extends $tea.Model {
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

export class GetSalaryItemGroupResponseBody extends $tea.Model {
  result?: GetSalaryItemGroupResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetSalaryItemGroupResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryItemGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSalaryItemGroupResponseBody;
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
      body: GetSalaryItemGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSalaryCalculationHeaders extends $tea.Model {
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

export class ListSalaryCalculationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-06
   */
  date?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SalaryGroupXXX
   */
  salaryGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      salaryGroupId: 'salaryGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      salaryGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSalaryCalculationResponseBody extends $tea.Model {
  result?: ListSalaryCalculationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ListSalaryCalculationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSalaryCalculationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSalaryCalculationResponseBody;
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
      body: ListSalaryCalculationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteSalaryCalculationHeaders extends $tea.Model {
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

export class WriteSalaryCalculationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-06
   */
  date?: string;
  items?: WriteSalaryCalculationRequestItems[];
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      items: { 'type': 'array', 'itemType': WriteSalaryCalculationRequestItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteSalaryCalculationResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteSalaryCalculationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WriteSalaryCalculationResponseBody;
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
      body: WriteSalaryCalculationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryCalculationResponseBodyResult extends $tea.Model {
  calStatus?: boolean;
  /**
   * @example
   * 2025-06-30
   */
  endDate?: string;
  /**
   * @example
   * 2025-06-01
   */
  startDate?: string;
  /**
   * @example
   * NONE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      calStatus: 'calStatus',
      endDate: 'endDate',
      startDate: 'startDate',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calStatus: 'boolean',
      endDate: 'string',
      startDate: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryGroupResponseBodyResult extends $tea.Model {
  enableFlag?: boolean;
  /**
   * @example
   * SalaryItemGroupIdxxx
   */
  salaryGroupId?: string;
  /**
   * @example
   * 123
   */
  salaryGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      enableFlag: 'enableFlag',
      salaryGroupId: 'salaryGroupId',
      salaryGroupName: 'salaryGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFlag: 'boolean',
      salaryGroupId: 'string',
      salaryGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryItemResponseBodyResult extends $tea.Model {
  /**
   * @example
   * SalaryItemIdxxx
   */
  salaryItemId?: string;
  /**
   * @example
   * 绩效xx
   */
  salaryItemName?: string;
  static names(): { [key: string]: string } {
    return {
      salaryItemId: 'salaryItemId',
      salaryItemName: 'salaryItemName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      salaryItemId: 'string',
      salaryItemName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSalaryItemGroupResponseBodyResult extends $tea.Model {
  /**
   * @example
   * SalaryItemGroupIdxxx
   */
  salaryItemGroupId?: string;
  /**
   * @example
   * 浮动薪资xx
   */
  salaryItemGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      salaryItemGroupId: 'salaryItemGroupId',
      salaryItemGroupName: 'salaryItemGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      salaryItemGroupId: 'string',
      salaryItemGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSalaryCalculationResponseBodyResultDataDataList extends $tea.Model {
  salaryItemId?: string;
  salaryItemName?: string;
  salaryItemValue?: string;
  static names(): { [key: string]: string } {
    return {
      salaryItemId: 'salaryItemId',
      salaryItemName: 'salaryItemName',
      salaryItemValue: 'salaryItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      salaryItemId: 'string',
      salaryItemName: 'string',
      salaryItemValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSalaryCalculationResponseBodyResultData extends $tea.Model {
  dataList?: ListSalaryCalculationResponseBodyResultDataDataList[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'dataList',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListSalaryCalculationResponseBodyResultDataDataList },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSalaryCalculationResponseBodyResult extends $tea.Model {
  data?: ListSalaryCalculationResponseBodyResultData[];
  hasMore?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      hasMore: 'hasMore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSalaryCalculationResponseBodyResultData },
      hasMore: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteSalaryCalculationRequestItemsContents extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SalaryItemXXX
   */
  salaryItemId?: string;
  /**
   * @example
   * 26
   */
  salaryItemValue?: string;
  static names(): { [key: string]: string } {
    return {
      salaryItemId: 'salaryItemId',
      salaryItemValue: 'salaryItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      salaryItemId: 'string',
      salaryItemValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteSalaryCalculationRequestItems extends $tea.Model {
  contents?: WriteSalaryCalculationRequestItemsContents[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      contents: 'contents',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': WriteSalaryCalculationRequestItemsContents },
      userId: 'string',
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
   * 小微薪酬获取薪资记录
   * 
   * @param request - GetSalaryCalculationRequest
   * @param headers - GetSalaryCalculationHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSalaryCalculationResponse
   */
  async getSalaryCalculationWithOptions(request: GetSalaryCalculationRequest, headers: GetSalaryCalculationHeaders, runtime: $Util.RuntimeOptions): Promise<GetSalaryCalculationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.date)) {
      query["date"] = request.date;
    }

    if (!Util.isUnset(request.salaryGroupId)) {
      query["salaryGroupId"] = request.salaryGroupId;
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
      action: "GetSalaryCalculation",
      version: "salary_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/salary/calculation`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetSalaryCalculationResponse>(await this.execute(params, req, runtime), new GetSalaryCalculationResponse({}));
  }

  /**
   * 小微薪酬获取薪资记录
   * 
   * @param request - GetSalaryCalculationRequest
   * @returns GetSalaryCalculationResponse
   */
  async getSalaryCalculation(request: GetSalaryCalculationRequest): Promise<GetSalaryCalculationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetSalaryCalculationHeaders({ });
    return await this.getSalaryCalculationWithOptions(request, headers, runtime);
  }

  /**
   * 小微薪酬获取薪资组
   * 
   * @param headers - GetSalaryGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSalaryGroupResponse
   */
  async getSalaryGroupWithOptions(headers: GetSalaryGroupHeaders, runtime: $Util.RuntimeOptions): Promise<GetSalaryGroupResponse> {
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
      action: "GetSalaryGroup",
      version: "salary_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/salary/group`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetSalaryGroupResponse>(await this.execute(params, req, runtime), new GetSalaryGroupResponse({}));
  }

  /**
   * 小微薪酬获取薪资组
   * @returns GetSalaryGroupResponse
   */
  async getSalaryGroup(): Promise<GetSalaryGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetSalaryGroupHeaders({ });
    return await this.getSalaryGroupWithOptions(headers, runtime);
  }

  /**
   * 小微薪酬获取薪资项目
   * 
   * @param request - GetSalaryItemRequest
   * @param headers - GetSalaryItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSalaryItemResponse
   */
  async getSalaryItemWithOptions(request: GetSalaryItemRequest, headers: GetSalaryItemHeaders, runtime: $Util.RuntimeOptions): Promise<GetSalaryItemResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.salaryItemGroupId)) {
      query["salaryItemGroupId"] = request.salaryItemGroupId;
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
      action: "GetSalaryItem",
      version: "salary_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/salary/item`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetSalaryItemResponse>(await this.execute(params, req, runtime), new GetSalaryItemResponse({}));
  }

  /**
   * 小微薪酬获取薪资项目
   * 
   * @param request - GetSalaryItemRequest
   * @returns GetSalaryItemResponse
   */
  async getSalaryItem(request: GetSalaryItemRequest): Promise<GetSalaryItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetSalaryItemHeaders({ });
    return await this.getSalaryItemWithOptions(request, headers, runtime);
  }

  /**
   * 小微薪酬获取薪资项目大类
   * 
   * @param headers - GetSalaryItemGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSalaryItemGroupResponse
   */
  async getSalaryItemGroupWithOptions(headers: GetSalaryItemGroupHeaders, runtime: $Util.RuntimeOptions): Promise<GetSalaryItemGroupResponse> {
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
      action: "GetSalaryItemGroup",
      version: "salary_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/salary/itemGroup`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetSalaryItemGroupResponse>(await this.execute(params, req, runtime), new GetSalaryItemGroupResponse({}));
  }

  /**
   * 小微薪酬获取薪资项目大类
   * @returns GetSalaryItemGroupResponse
   */
  async getSalaryItemGroup(): Promise<GetSalaryItemGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetSalaryItemGroupHeaders({ });
    return await this.getSalaryItemGroupWithOptions(headers, runtime);
  }

  /**
   * 小微薪酬获取薪资记录数据
   * 
   * @param request - ListSalaryCalculationRequest
   * @param headers - ListSalaryCalculationHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSalaryCalculationResponse
   */
  async listSalaryCalculationWithOptions(request: ListSalaryCalculationRequest, headers: ListSalaryCalculationHeaders, runtime: $Util.RuntimeOptions): Promise<ListSalaryCalculationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.date)) {
      body["date"] = request.date;
    }

    if (!Util.isUnset(request.pageIndex)) {
      body["pageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.salaryGroupId)) {
      body["salaryGroupId"] = request.salaryGroupId;
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
      action: "ListSalaryCalculation",
      version: "salary_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/salary/calculation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListSalaryCalculationResponse>(await this.execute(params, req, runtime), new ListSalaryCalculationResponse({}));
  }

  /**
   * 小微薪酬获取薪资记录数据
   * 
   * @param request - ListSalaryCalculationRequest
   * @returns ListSalaryCalculationResponse
   */
  async listSalaryCalculation(request: ListSalaryCalculationRequest): Promise<ListSalaryCalculationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListSalaryCalculationHeaders({ });
    return await this.listSalaryCalculationWithOptions(request, headers, runtime);
  }

  /**
   * 小微薪酬获取薪资记录写入
   * 
   * @param request - WriteSalaryCalculationRequest
   * @param headers - WriteSalaryCalculationHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WriteSalaryCalculationResponse
   */
  async writeSalaryCalculationWithOptions(request: WriteSalaryCalculationRequest, headers: WriteSalaryCalculationHeaders, runtime: $Util.RuntimeOptions): Promise<WriteSalaryCalculationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.date)) {
      body["date"] = request.date;
    }

    if (!Util.isUnset(request.items)) {
      body["items"] = request.items;
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
      action: "WriteSalaryCalculation",
      version: "salary_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/salary/calculation/write`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<WriteSalaryCalculationResponse>(await this.execute(params, req, runtime), new WriteSalaryCalculationResponse({}));
  }

  /**
   * 小微薪酬获取薪资记录写入
   * 
   * @param request - WriteSalaryCalculationRequest
   * @returns WriteSalaryCalculationResponse
   */
  async writeSalaryCalculation(request: WriteSalaryCalculationRequest): Promise<WriteSalaryCalculationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new WriteSalaryCalculationHeaders({ });
    return await this.writeSalaryCalculationWithOptions(request, headers, runtime);
  }

}
