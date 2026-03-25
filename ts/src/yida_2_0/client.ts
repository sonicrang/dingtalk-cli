// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchAddOrUpdateRoleMembersHeaders extends $tea.Model {
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

export class BatchAddOrUpdateRoleMembersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxx
   */
  corpId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"memberId":"5014533041684xx","manageScopes":"8360866xx,430181xx,429821xx"},{"memberId":"014329103xx","manageScopes":"all"}]
   */
  membersInfo?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ROLE-71dc7859-17df-490d-a93d-eb5506e31f42
   */
  roleUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 501453
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      membersInfo: 'membersInfo',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      roleUuid: 'roleUuid',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      membersInfo: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roleUuid: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddOrUpdateRoleMembersResponseBody extends $tea.Model {
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

export class BatchAddOrUpdateRoleMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchAddOrUpdateRoleMembersResponseBody;
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
      body: BatchAddOrUpdateRoleMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteRoleMembersHeaders extends $tea.Model {
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

export class BatchDeleteRoleMembersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxx
   */
  corpId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  memberIds?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ROLE-71dc7859-17df-490d-a93d-eb5506e31f42
   */
  roleUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 501453
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      memberIds: 'memberIds',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      roleUuid: 'roleUuid',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      memberIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roleUuid: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteRoleMembersResponseBody extends $tea.Model {
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

export class BatchDeleteRoleMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteRoleMembersResponseBody;
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
      body: BatchDeleteRoleMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAgentTaskHeaders extends $tea.Model {
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

export class CancelAgentTaskRequest extends $tea.Model {
  agentType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  agentUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxx
   */
  corpId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 501453
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'agentType',
      agentUuid: 'agentUuid',
      corpId: 'corpId',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      agentUuid: 'string',
      corpId: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAgentTaskResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
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
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAgentTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelAgentTaskResponseBody;
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
      body: CancelAgentTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentTaskHeaders extends $tea.Model {
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

export class CreateAgentTaskRequest extends $tea.Model {
  /**
   * @example
   * EXECUTE
   */
  agentCategory?: string;
  /**
   * @example
   * ALL
   */
  agentRangeType?: string;
  /**
   * @example
   * [{\"appType\":\"APP_xxx\",\"formUuid\":\"FORM-xxx\"}]
   */
  agentRangeValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  agentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  agentUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxx
   */
  corpId?: string;
  /**
   * @example
   * 1761204600404
   */
  endTimestamp?: string;
  needNoticePrincipal?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  principalUserId?: string;
  /**
   * @example
   * 1761204600404
   */
  startTimestamp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 501453
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentCategory: 'agentCategory',
      agentRangeType: 'agentRangeType',
      agentRangeValue: 'agentRangeValue',
      agentType: 'agentType',
      agentUserId: 'agentUserId',
      corpId: 'corpId',
      endTimestamp: 'endTimestamp',
      needNoticePrincipal: 'needNoticePrincipal',
      principalUserId: 'principalUserId',
      startTimestamp: 'startTimestamp',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCategory: 'string',
      agentRangeType: 'string',
      agentRangeValue: 'string',
      agentType: 'string',
      agentUserId: 'string',
      corpId: 'string',
      endTimestamp: 'string',
      needNoticePrincipal: 'string',
      principalUserId: 'string',
      startTimestamp: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentTaskResponseBody extends $tea.Model {
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

export class CreateAgentTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAgentTaskResponseBody;
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
      body: CreateAgentTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateFormDataHeaders extends $tea.Model {
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

export class CreateOrUpdateFormDataRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_XCE0EVXS6DYG3YDYC5RD
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"countrySelectField_l0c1cwiu":[{"value":"US"}]}
   */
  formDataJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-GX866MC1NC1VOFF6WVQW33FD16E23L3CPMKVKA
   */
  formUuid?: string;
  /**
   * @example
   * false
   */
  noExecuteExpression?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"key":"currentNodeName","value":"当前审批节点名称","type":"TEXT","operator":"like","componentName":"TextField"}]。详情参考 https://www.yuque.com/yida/support/agb8im#F4S8e
   */
  searchCondition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 09866181UTZVVD4R3DC955FNKIM52HVPU5WWK7
   */
  systemToken?: string;
  /**
   * @example
   * false
   */
  useAlias?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ding173982232112232
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      formDataJson: 'formDataJson',
      formUuid: 'formUuid',
      noExecuteExpression: 'noExecuteExpression',
      searchCondition: 'searchCondition',
      systemToken: 'systemToken',
      useAlias: 'useAlias',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formDataJson: 'string',
      formUuid: 'string',
      noExecuteExpression: 'boolean',
      searchCondition: 'string',
      systemToken: 'string',
      useAlias: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateFormDataResponseBody extends $tea.Model {
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateFormDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOrUpdateFormDataResponseBody;
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
      body: CreateOrUpdateFormDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMatrixDataByRowIdsHeaders extends $tea.Model {
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

export class DeleteMatrixDataByRowIdsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxx
   */
  corpId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MATRIX-C8I4J40EM81XLWZH61ZK
   */
  matrixId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rowIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 501453
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      matrixId: 'matrixId',
      rowIds: 'rowIds',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      matrixId: 'string',
      rowIds: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMatrixDataByRowIdsResponseBody extends $tea.Model {
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

export class DeleteMatrixDataByRowIdsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMatrixDataByRowIdsResponseBody;
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
      body: DeleteMatrixDataByRowIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTasksHeaders extends $tea.Model {
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

export class GetAgentTasksRequest extends $tea.Model {
  /**
   * @example
   * Agent--XXXXX
   */
  agentUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxx
   */
  corpId?: string;
  /**
   * @example
   * 10001
   */
  keywords?: string;
  /**
   * @example
   * 100
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * ALL
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 501453
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentUuid: 'agentUuid',
      corpId: 'corpId',
      keywords: 'keywords',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUuid: 'string',
      corpId: 'string',
      keywords: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTasksResponseBody extends $tea.Model {
  currentPage?: number;
  limit?: number;
  start?: number;
  totalCount?: number;
  values?: GetAgentTasksResponseBodyValues[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      limit: 'limit',
      start: 'start',
      totalCount: 'totalCount',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      limit: 'number',
      start: 'number',
      totalCount: 'number',
      values: { 'type': 'array', 'itemType': GetAgentTasksResponseBodyValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAgentTasksResponseBody;
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
      body: GetAgentTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFormComponentAliasListHeaders extends $tea.Model {
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

export class GetFormComponentAliasListRequest extends $tea.Model {
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
   */
  systemToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 未知
   */
  userId?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      language: 'language',
      systemToken: 'systemToken',
      userId: 'userId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      systemToken: 'string',
      userId: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFormComponentAliasListResponseBody extends $tea.Model {
  result?: GetFormComponentAliasListResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetFormComponentAliasListResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFormComponentAliasListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFormComponentAliasListResponseBody;
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
      body: GetFormComponentAliasListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFormDataByIDHeaders extends $tea.Model {
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

export class GetFormDataByIDRequest extends $tea.Model {
  /**
   * @example
   * APP_PBKT0MFBEBTDO8T7SLVP
   */
  appType?: string;
  /**
   * @example
   * FORM-AA28579F69644FC19A47FE267457E664ZVR1
   */
  formUuid?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * hexxx
   */
  systemToken?: string;
  /**
   * @example
   * false
   */
  useAlias?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      formUuid: 'formUuid',
      language: 'language',
      systemToken: 'systemToken',
      useAlias: 'useAlias',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formUuid: 'string',
      language: 'string',
      systemToken: 'string',
      useAlias: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFormDataByIDResponseBody extends $tea.Model {
  /**
   * @example
   * {       "numberField_jcr0069o": 1,       "multiSelectField_jcr0069s": [         "选项三",         "选项二"       ],       "textareaField_jcr0069n": "duohang",       "employeeField_jcr0069x": [         "xxxx"       ],       "departmentField_jcr0069z": "xxxx",       "cascadeDate_jcr0069u": [         "1514736000000",         "1517328000000"       ],       "cascadeSelectField_jcr006a0": [         "part",         "part_b"       ],       "tableField_jcr006a1": [         {           "departmentField_jcr006ad": "xxxx",           "cascadeDate_jcr006aa": [             "1514736000000",             "1517328000000"           ],           "selectField_jcr006a6": "选项三",           "citySelectField_jcr006ac": [             "天津",             "天津市",             "河东区"           ],           "radioField_jcr006a5": "选项二",           "employeeField_jcr006ab": [             "xxxxxx",             "yyyyyy"           ],           "dateField_jcr006a9": 1517328000000,           "textField_jcr006a2": "明细下单行",           "textareaField_jcr006a3": "明细下多行",           "cascadeSelectField_jcr006ae": [             "product",             "product_a"           ],           "numberField_jcr006a4": 2,           "checkboxField_jcr006a7": [             "选项一",             "选项三",             "选项二"           ],           "multiSelectField_jcr006a8": [             "选项一",             "选项三",             "选项二"           ]         }       ],       "selectField_jcr0069q": "选项一",       "citySelectField_jcr0069y": [         "北京",         "北京市",         "东城区"       ],       "checkboxField_jcr0069r": [         "选项三",         "选项二"       ],       "textField_jcr0069m": "danhang",       "radioField_jcr0069p": "选项一",       "dateField_jcr0069t": 1516636800000     }
   */
  formData?: { [key: string]: any };
  /**
   * @example
   * 33f6d221-17f8-42b7-836a-682b95a046c2
   */
  formInstId?: string;
  /**
   * @example
   * 2018-01-24 11:22:01
   */
  modifiedTimeGMT?: string;
  originator?: GetFormDataByIDResponseBodyOriginator;
  static names(): { [key: string]: string } {
    return {
      formData: 'formData',
      formInstId: 'formInstId',
      modifiedTimeGMT: 'modifiedTimeGMT',
      originator: 'originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formInstId: 'string',
      modifiedTimeGMT: 'string',
      originator: GetFormDataByIDResponseBodyOriginator,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFormDataByIDResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFormDataByIDResponseBody;
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
      body: GetFormDataByIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceByIdHeaders extends $tea.Model {
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

export class GetInstanceByIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKT0MFBEBTDO8T7SLVP
   */
  appType?: string;
  /**
   * @example
   * FORM-ADFC8E8E5ADE4B2F8FC2316CFC42A55CJLWZ
   */
  formUuid?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxyy
   */
  systemToken?: string;
  /**
   * @example
   * false
   */
  useAlias?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 未知
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      formUuid: 'formUuid',
      language: 'language',
      systemToken: 'systemToken',
      useAlias: 'useAlias',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formUuid: 'string',
      language: 'string',
      systemToken: 'string',
      useAlias: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceByIdResponseBody extends $tea.Model {
  actionExecutor?: GetInstanceByIdResponseBodyActionExecutor[];
  approvedResult?: string;
  createTimeGMT?: string;
  data?: { [key: string]: any };
  formUuid?: string;
  instanceStatus?: string;
  modifiedTimeGMT?: string;
  originator?: GetInstanceByIdResponseBodyOriginator;
  processCode?: string;
  processInstanceId?: string;
  title?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      actionExecutor: 'actionExecutor',
      approvedResult: 'approvedResult',
      createTimeGMT: 'createTimeGMT',
      data: 'data',
      formUuid: 'formUuid',
      instanceStatus: 'instanceStatus',
      modifiedTimeGMT: 'modifiedTimeGMT',
      originator: 'originator',
      processCode: 'processCode',
      processInstanceId: 'processInstanceId',
      title: 'title',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionExecutor: { 'type': 'array', 'itemType': GetInstanceByIdResponseBodyActionExecutor },
      approvedResult: 'string',
      createTimeGMT: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formUuid: 'string',
      instanceStatus: 'string',
      modifiedTimeGMT: 'string',
      originator: GetInstanceByIdResponseBodyOriginator,
      processCode: 'string',
      processInstanceId: 'string',
      title: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceByIdResponseBody;
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
      body: GetInstanceByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIdListHeaders extends $tea.Model {
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

export class GetInstanceIdListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKT0MFBEBTDO8T7SLVP
   */
  appType?: string;
  /**
   * @example
   * agree
   */
  approvedResult?: string;
  /**
   * @example
   * 2018-01-01
   */
  createFromTimeGMT?: string;
  /**
   * @example
   * 2018-02-01
   */
  createToTimeGMT?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3
   */
  formUuid?: string;
  /**
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * 2018-01-01
   */
  modifiedFromTimeGMT?: string;
  /**
   * @example
   * 2018-02-01
   */
  modifiedToTimeGMT?: string;
  /**
   * @example
   * ding123
   */
  originatorId?: string;
  /**
   * @example
   * {"text_field":"123"}
   */
  searchFieldJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
   */
  systemToken?: string;
  /**
   * @example
   * 2199132092
   */
  taskId?: string;
  /**
   * @example
   * false
   */
  useAlias?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ding123
   */
  userId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      approvedResult: 'approvedResult',
      createFromTimeGMT: 'createFromTimeGMT',
      createToTimeGMT: 'createToTimeGMT',
      formUuid: 'formUuid',
      instanceStatus: 'instanceStatus',
      language: 'language',
      modifiedFromTimeGMT: 'modifiedFromTimeGMT',
      modifiedToTimeGMT: 'modifiedToTimeGMT',
      originatorId: 'originatorId',
      searchFieldJson: 'searchFieldJson',
      systemToken: 'systemToken',
      taskId: 'taskId',
      useAlias: 'useAlias',
      userId: 'userId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      approvedResult: 'string',
      createFromTimeGMT: 'string',
      createToTimeGMT: 'string',
      formUuid: 'string',
      instanceStatus: 'string',
      language: 'string',
      modifiedFromTimeGMT: 'string',
      modifiedToTimeGMT: 'string',
      originatorId: 'string',
      searchFieldJson: 'string',
      systemToken: 'string',
      taskId: 'string',
      useAlias: 'boolean',
      userId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIdListResponseBody extends $tea.Model {
  data?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIdListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceIdListResponseBody;
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
      body: GetInstanceIdListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesHeaders extends $tea.Model {
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

export class GetInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKT0MFBEBTDO8T7SLVP
   */
  appType?: string;
  /**
   * @example
   * agree
   */
  approvedResult?: string;
  /**
   * @example
   * 2018-01-01
   */
  createFromTimeGMT?: string;
  /**
   * @example
   * 2018-02-01
   */
  createToTimeGMT?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3
   */
  formUuid?: string;
  /**
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * 2018-01-01
   */
  modifiedFromTimeGMT?: string;
  /**
   * @example
   * 2018-02-01
   */
  modifiedToTimeGMT?: string;
  /**
   * @example
   * 例如按照创建时间升序再按照文本组件值升序排序则填{\"gmt_create\":\"+\",\"textField_1234\":\"+\"} ，详情参考 https://www.yuque.com/yida/support/agb8im#CQro8
   */
  orderConfigJson?: string;
  /**
   * @example
   * manager123
   */
  originatorId?: string;
  /**
   * @example
   * 模式1：根据组件值模糊匹配，示例：{"textField_jcr0069m":"danhang","selectField_jcr0069q":"K"}     模式2: 采用数据管理的查询过滤条件，匹配功能更强大，示例：[{"key":"currentNodeName","value":"步凡","type":"TEXT","operator":"like","componentName":"TextField”}]，详情参考  https://www.yuque.com/yida/support/agb8im#F4S8e
   */
  searchFieldJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxx
   */
  systemToken?: string;
  /**
   * @example
   * 2199132092
   */
  taskId?: string;
  /**
   * @example
   * false
   */
  useAlias?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      approvedResult: 'approvedResult',
      createFromTimeGMT: 'createFromTimeGMT',
      createToTimeGMT: 'createToTimeGMT',
      formUuid: 'formUuid',
      instanceStatus: 'instanceStatus',
      language: 'language',
      modifiedFromTimeGMT: 'modifiedFromTimeGMT',
      modifiedToTimeGMT: 'modifiedToTimeGMT',
      orderConfigJson: 'orderConfigJson',
      originatorId: 'originatorId',
      searchFieldJson: 'searchFieldJson',
      systemToken: 'systemToken',
      taskId: 'taskId',
      useAlias: 'useAlias',
      userId: 'userId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      approvedResult: 'string',
      createFromTimeGMT: 'string',
      createToTimeGMT: 'string',
      formUuid: 'string',
      instanceStatus: 'string',
      language: 'string',
      modifiedFromTimeGMT: 'string',
      modifiedToTimeGMT: 'string',
      orderConfigJson: 'string',
      originatorId: 'string',
      searchFieldJson: 'string',
      systemToken: 'string',
      taskId: 'string',
      useAlias: 'boolean',
      userId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesResponseBody extends $tea.Model {
  data?: GetInstancesResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetInstancesResponseBodyData },
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstancesResponseBody;
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
      body: GetInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMatrixDetailByIdHeaders extends $tea.Model {
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

export class GetMatrixDetailByIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxx
   */
  corpId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MATRIX-C8I4J40EM81XLWZH61ZK
   */
  matrixId?: string;
  /**
   * @example
   * 100
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 501453
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      matrixId: 'matrixId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      matrixId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMatrixDetailByIdResponseBody extends $tea.Model {
  result?: GetMatrixDetailByIdResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetMatrixDetailByIdResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMatrixDetailByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMatrixDetailByIdResponseBody;
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
      body: GetMatrixDetailByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleDetailByIdHeaders extends $tea.Model {
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

export class GetRoleDetailByIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxx
   */
  corpId?: string;
  /**
   * @example
   * 100
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ROLE-71dc7859-17df-490d-a93d-eb5506e31f42
   */
  roleUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 501453
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      roleUuid: 'roleUuid',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roleUuid: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleDetailByIdResponseBody extends $tea.Model {
  result?: GetRoleDetailByIdResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetRoleDetailByIdResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleDetailByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRoleDetailByIdResponseBody;
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
      body: GetRoleDetailByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAndUpdateMatrixDataHeaders extends $tea.Model {
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

export class SaveAndUpdateMatrixDataRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxx
   */
  corpId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{ 	"column_xx": "deptId", 	"column_yy": ["userId"], 	"column_zz": "项目一", 	"rowId": "row_1748398062718" }, { 	"column_xx": "deptId", 	"column_yy": ["userId", "userId"], 	"column_zz": "项目二" }]
   */
  dataJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MATRIX-C8I4J40EM81XLWZH61ZK
   */
  matrixId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 501453
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      dataJson: 'dataJson',
      matrixId: 'matrixId',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataJson: 'string',
      matrixId: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAndUpdateMatrixDataResponseBody extends $tea.Model {
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

export class SaveAndUpdateMatrixDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveAndUpdateMatrixDataResponseBody;
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
      body: SaveAndUpdateMatrixDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveFormDataHeaders extends $tea.Model {
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

export class SaveFormDataRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKT0MFBEBTDO8T7SLVP
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"textField_jcpm6agt": "单行","employeeField_jcos0sar": ["workno"]}
   */
  formDataJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-NJYJZELV8YZRDEI2N5IQ7L6VEDMR1VE9GMPCJB
   */
  formUuid?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxx
   */
  systemToken?: string;
  /**
   * @example
   * false
   */
  useAlias?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      formDataJson: 'formDataJson',
      formUuid: 'formUuid',
      language: 'language',
      systemToken: 'systemToken',
      useAlias: 'useAlias',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formDataJson: 'string',
      formUuid: 'string',
      language: 'string',
      systemToken: 'string',
      useAlias: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveFormDataResponseBody extends $tea.Model {
  /**
   * @example
   * FINST-XIA66E71N7HSLK7H4KOZ388EEOP03A46YAYRK1
   */
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

export class SaveFormDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveFormDataResponseBody;
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
      body: SaveFormDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDataIdListHeaders extends $tea.Model {
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

export class SearchFormDataIdListRequest extends $tea.Model {
  /**
   * @example
   * 2018-01-01
   */
  createFromTimeGMT?: string;
  /**
   * @example
   * 2018-02-01
   */
  createToTimeGMT?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * 2018-01-01
   */
  modifiedFromTimeGMT?: string;
  /**
   * @example
   * 2018-02-01
   */
  modifiedToTimeGMT?: string;
  /**
   * @example
   * dign1234
   */
  originatorId?: string;
  searchFieldJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxx
   */
  systemToken?: string;
  /**
   * @example
   * false
   */
  useAlias?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ding1234
   */
  userId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      createFromTimeGMT: 'createFromTimeGMT',
      createToTimeGMT: 'createToTimeGMT',
      language: 'language',
      modifiedFromTimeGMT: 'modifiedFromTimeGMT',
      modifiedToTimeGMT: 'modifiedToTimeGMT',
      originatorId: 'originatorId',
      searchFieldJson: 'searchFieldJson',
      systemToken: 'systemToken',
      useAlias: 'useAlias',
      userId: 'userId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createFromTimeGMT: 'string',
      createToTimeGMT: 'string',
      language: 'string',
      modifiedFromTimeGMT: 'string',
      modifiedToTimeGMT: 'string',
      originatorId: 'string',
      searchFieldJson: 'string',
      systemToken: 'string',
      useAlias: 'boolean',
      userId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDataIdListResponseBody extends $tea.Model {
  data?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDataIdListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchFormDataIdListResponseBody;
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
      body: SearchFormDataIdListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDataSecondGenerationHeaders extends $tea.Model {
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

export class SearchFormDataSecondGenerationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_XCE0EVXS6DYG3YDYC5RD
   */
  appType?: string;
  /**
   * @example
   * 2021-05-01
   */
  createFromTimeGMT?: string;
  /**
   * @example
   * 2021-05-01
   */
  createToTimeGMT?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-GX866MC1NC1VOFF6WVQW33FD16E23L3CPMKVKA
   */
  formUuid?: string;
  /**
   * @example
   * 2021-05-01
   */
  modifiedFromTimeGMT?: string;
  /**
   * @example
   * 2021-09-10
   */
  modifiedToTimeGMT?: string;
  /**
   * @example
   * 例如按照创建时间升序按照文本组件值升序排序则填{\"gmt_create\":\"+\",\"textField_1234\":\"+\"}。详情参考 https://www.yuque.com/yida/support/agb8im#CQro8
   */
  orderConfigJson?: string;
  /**
   * @example
   * manager123
   */
  originatorId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * [{"key":"currentNodeName","value":"当前审批节点名称","type":"TEXT","operator":"like","componentName":"TextField"}]。详情参考 https://www.yuque.com/yida/support/agb8im#F4S8e
   */
  searchCondition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 09866181UTZVVD4R3DC955FNKIM52HVPU5WWK7
   */
  systemToken?: string;
  /**
   * @example
   * false
   */
  useAlias?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ding173982232112232
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      createFromTimeGMT: 'createFromTimeGMT',
      createToTimeGMT: 'createToTimeGMT',
      formUuid: 'formUuid',
      modifiedFromTimeGMT: 'modifiedFromTimeGMT',
      modifiedToTimeGMT: 'modifiedToTimeGMT',
      orderConfigJson: 'orderConfigJson',
      originatorId: 'originatorId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      searchCondition: 'searchCondition',
      systemToken: 'systemToken',
      useAlias: 'useAlias',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      createFromTimeGMT: 'string',
      createToTimeGMT: 'string',
      formUuid: 'string',
      modifiedFromTimeGMT: 'string',
      modifiedToTimeGMT: 'string',
      orderConfigJson: 'string',
      originatorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchCondition: 'string',
      systemToken: 'string',
      useAlias: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDataSecondGenerationResponseBody extends $tea.Model {
  data?: SearchFormDataSecondGenerationResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SearchFormDataSecondGenerationResponseBodyData },
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDataSecondGenerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchFormDataSecondGenerationResponseBody;
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
      body: SearchFormDataSecondGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDatasHeaders extends $tea.Model {
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

export class SearchFormDatasRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKT0MFBEBTDO8T7SLVP
   */
  appType?: string;
  /**
   * @example
   * 2018-01-01
   */
  createFromTimeGMT?: string;
  /**
   * @example
   * 2018-02-01
   */
  createToTimeGMT?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * {"numberField_1ac":"+"}, 表示按照字段numberField_1ac升序排列
   */
  dynamicOrder?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3
   */
  formUuid?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * 2018-01-01
   */
  modifiedFromTimeGMT?: string;
  /**
   * @example
   * 2018-02-01
   */
  modifiedToTimeGMT?: string;
  originatorId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * {"textField_jcr0069m":"danhang","textareaField_jcr0069n":"duohang","numberField_jcr0069o":["1","10"],"radioField_jcr0069p":"选项一","selectField_jcr0069q":"选项一","checkboxField_jcr0069r":["选项二"],"multiSelectField_jcr0069s":["选项二","选项三"],"dateField_jcr0069t":[1514736000000,1517414399000],"cascadeDate_jcr0069u":[[1514736000000,1517414399000],[1514736000000,1517414399000]],"employeeField_jcr0069x":["xxxxx"],"citySelectField_jcr0069y":["110000","110100","110101"],"departmentField_jcr0069z":1123456,"cascadeSelectField_jcr006a0":["part","part_b"],"tableField_jcr006a1":"明细数据"}
   */
  searchFieldJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxx
   */
  systemToken?: string;
  /**
   * @example
   * false
   */
  useAlias?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 173112212211
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      createFromTimeGMT: 'createFromTimeGMT',
      createToTimeGMT: 'createToTimeGMT',
      currentPage: 'currentPage',
      dynamicOrder: 'dynamicOrder',
      formUuid: 'formUuid',
      language: 'language',
      modifiedFromTimeGMT: 'modifiedFromTimeGMT',
      modifiedToTimeGMT: 'modifiedToTimeGMT',
      originatorId: 'originatorId',
      pageSize: 'pageSize',
      searchFieldJson: 'searchFieldJson',
      systemToken: 'systemToken',
      useAlias: 'useAlias',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      createFromTimeGMT: 'string',
      createToTimeGMT: 'string',
      currentPage: 'number',
      dynamicOrder: 'string',
      formUuid: 'string',
      language: 'string',
      modifiedFromTimeGMT: 'string',
      modifiedToTimeGMT: 'string',
      originatorId: 'string',
      pageSize: 'number',
      searchFieldJson: 'string',
      systemToken: 'string',
      useAlias: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDatasResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: SearchFormDatasResponseBodyData[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      data: 'data',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': SearchFormDatasResponseBodyData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDatasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchFormDatasResponseBody;
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
      body: SearchFormDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceHeaders extends $tea.Model {
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

export class StartInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKT0MFBEBTDO8T7SLVP
   */
  appType?: string;
  /**
   * @example
   * 18295
   */
  departmentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"textField_jcpm6agt": "单行","employeeField_jcos0sar": ["workno"]}
   */
  formDataJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-NJYJZELV8YZRDEI2N5IQ7L6VEDMR1VE9GMPCJB
   */
  formUuid?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * TPROC--EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ4
   */
  processCode?: string;
  /**
   * @example
   * [{ 	"key": "__optionalApproval_node_ocltdztr2b1", 	"value": ["5014533041684350"] }, { 	"key": "__optionalApproval_node_ocltdztr2b3", 	"value": ["5014533041684350", "01536610064226180419"] }, { 	"key": "__optionalApproval_node_oclte07cwn1", 	"value": ["01432910392321237660"] }]
   */
  processData?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxx
   */
  systemToken?: string;
  /**
   * @example
   * false
   */
  useAlias?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1731234567
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      departmentId: 'departmentId',
      formDataJson: 'formDataJson',
      formUuid: 'formUuid',
      language: 'language',
      processCode: 'processCode',
      processData: 'processData',
      systemToken: 'systemToken',
      useAlias: 'useAlias',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      departmentId: 'string',
      formDataJson: 'string',
      formUuid: 'string',
      language: 'string',
      processCode: 'string',
      processData: 'string',
      systemToken: 'string',
      useAlias: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * f30233fb-72e1-4af4-8cb8-c7e0ea9ee530
   */
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

export class StartInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartInstanceResponseBody;
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
      body: StartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentTaskHeaders extends $tea.Model {
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

export class UpdateAgentTaskRequest extends $tea.Model {
  /**
   * @example
   * ALL
   */
  agentRangeType?: string;
  /**
   * @example
   * [{\"appType\":\"APP_xxx\",\"formUuid\":\"FORM-xxx\"}]
   */
  agentRangeValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  agentUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Agent--xxxxx
   */
  agentUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxx
   */
  corpId?: string;
  /**
   * @example
   * 1761204600404
   */
  endTimestamp?: string;
  needNoticePrincipal?: string;
  /**
   * @example
   * 1761204600404
   */
  startTimestamp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 501453
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentRangeType: 'agentRangeType',
      agentRangeValue: 'agentRangeValue',
      agentUserId: 'agentUserId',
      agentUuid: 'agentUuid',
      corpId: 'corpId',
      endTimestamp: 'endTimestamp',
      needNoticePrincipal: 'needNoticePrincipal',
      startTimestamp: 'startTimestamp',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRangeType: 'string',
      agentRangeValue: 'string',
      agentUserId: 'string',
      agentUuid: 'string',
      corpId: 'string',
      endTimestamp: 'string',
      needNoticePrincipal: 'string',
      startTimestamp: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentTaskResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  result?: boolean;
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
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAgentTaskResponseBody;
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
      body: UpdateAgentTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFormDataHeaders extends $tea.Model {
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

export class UpdateFormDataRequest extends $tea.Model {
  /**
   * @example
   * APP_PBKT0MFBEBTDO8T7SLVP
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33f6d221-17f8-42b7-836a-682b95a046c2
   */
  formInstanceId?: string;
  /**
   * @example
   * FORM-AA28579F69644FC19A47FE267457E664ZVR1
   */
  formUuid?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxx
   */
  systemToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"textField_jcr0069m":"danhang","textareaField_jcr0069n":"duohang","numberField_jcr0069o":1,"radioField_jcr0069p":"选项一","selectField_jcr0069q":"选项一","checkboxField_jcr0069r":["选项二","选项三"],"multiSelectField_jcr0069s":["选项二","选项三"],"dateField_jcr0069t":1516636800000,"cascadeDate_jcr0069u":["1514736000000","1517328000000"],"employeeField_jcr0069x":["xxxxx"],"citySelectField_jcr0069y":["110000","110100","110101"],"departmentField_jcr0069z":1123456,"cascadeSelectField_jcr006a0":["part","part_b"],{"attachmentField_jna1lvyb":[{"downloadUrl":"https://www.aliwork.com/fileHandle?appType=default_tianshu_app&fileName=edd07ca9-1d2e-44b5-98fe-c1e16202f90d.txt&instId=&type=download","name":"test.txt","previewUrl":"https://www.aliwork.com/inst/preview?appType=default_tianshu_app&fileName=test.txt&fileSize=4&downloadUrl=edd07ca9-1d2e-44b5-98fe-c1e16202f90d.txt","url":"https://www.aliwork.com/fileHandle?appType=default_tianshu_app&fileName=edd07ca9-1d2e-44b5-98fe-c1e16202f90d.txt&instId=&type=download","ext":"txt"}]},"tableField_jcr006a1":[{"cascadeDate_jcr006aa":["1514736000000","1517328000000"],"cascadeSelectField_jcr006ae":["product","product_a"],"checkboxField_jcr006a7":["选项一","选项二","选项三"],"citySelectField_jcr006ac":["120000","120100","120102"],"dateField_jcr006a9":1517328000000,"departmentField_jcr006ad":1123456,"employeeField_jcr006ab":["yyyyy","xxxxx"],"multiSelectField_jcr006a8":["选项一","选项二","选项三"],"numberField_jcr006a4":2,"radioField_jcr006a5":"选项二","selectField_jcr006a6":"选项三","textField_jcr006a2":"明细下单行","textareaField_jcr006a3":"明细下多行"}]}
   */
  updateFormDataJson?: string;
  /**
   * @example
   * false
   */
  useAlias?: boolean;
  /**
   * @example
   * false
   */
  useLatestVersion?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      formInstanceId: 'formInstanceId',
      formUuid: 'formUuid',
      language: 'language',
      systemToken: 'systemToken',
      updateFormDataJson: 'updateFormDataJson',
      useAlias: 'useAlias',
      useLatestVersion: 'useLatestVersion',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formInstanceId: 'string',
      formUuid: 'string',
      language: 'string',
      systemToken: 'string',
      updateFormDataJson: 'string',
      useAlias: 'boolean',
      useLatestVersion: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFormDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubTableHeaders extends $tea.Model {
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

export class UpdateSubTableRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_XCE0EVXS6DYG3YDYC5RD
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FINST-J8766S91O2UYN87ZX3XOF1MY8MBA2912BSV0L24
   */
  formInstanceId?: string;
  language?: string;
  /**
   * @example
   * true
   */
  noExecuteExpression?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 09866181UTZVVD4R3DC955FNKIM52HVPU5WWK7
   */
  systemToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableFieldIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"countrySelectField_l0c1cwiu":[{"value":"US"}],"addressField_l0c1cwiy":{"address":"111","regionIds":[460000,469027,469023401],"regionText":[{"en_US":"hai+nan+sheng","zh_CN":"海南省"},{"en_US":"cheng+mai+xian","zh_CN":"澄迈县"},{"en_US":"guo+ying+hong+gang+nong+chang","zh_CN":"国营红岗农场"}]}}
   */
  updateFormDataJson?: string;
  useAlias?: boolean;
  /**
   * @example
   * false
   */
  useLatestFormSchemaVersion?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ding173982232112232
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      formInstanceId: 'formInstanceId',
      language: 'language',
      noExecuteExpression: 'noExecuteExpression',
      systemToken: 'systemToken',
      tableFieldIds: 'tableFieldIds',
      updateFormDataJson: 'updateFormDataJson',
      useAlias: 'useAlias',
      useLatestFormSchemaVersion: 'useLatestFormSchemaVersion',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formInstanceId: 'string',
      language: 'string',
      noExecuteExpression: 'boolean',
      systemToken: 'string',
      tableFieldIds: 'string',
      updateFormDataJson: 'string',
      useAlias: 'boolean',
      useLatestFormSchemaVersion: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubTableResponseBody extends $tea.Model {
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSubTableResponseBody;
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
      body: UpdateSubTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubTableByRowIdHeaders extends $tea.Model {
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

export class UpdateSubTableByRowIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_XCE0EVXS6DYG3YDYC5RD
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FINST-J8766S91O2UYN87ZX3XOF1MY8MBA2912BSV0L24
   */
  formInstanceId?: string;
  /**
   * **if can be null:**
   * false
   */
  formUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 09866181UTZVVD4R3DC955FNKIM52HVPU5WWK7
   */
  systemToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableFieldId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"textField_md2x1jow":"更新子表通过rowId","textareaField_md2x1jox":"更新子表通过rowId","rowId":"xxxxxxxxxxxxxxxx"},{"textField_md2x1jow":"更新子表通过rowId","textareaField_md2x1jox":"更新子表通过rowId","rowId":"xxxxxxxxxxxxxxxx"}]
   */
  updateSubTableDataJson?: string;
  useAlias?: boolean;
  /**
   * @example
   * false
   */
  useLatestFormSchemaVersion?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ding173982232112232
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      formInstanceId: 'formInstanceId',
      formUuid: 'formUuid',
      systemToken: 'systemToken',
      tableFieldId: 'tableFieldId',
      updateSubTableDataJson: 'updateSubTableDataJson',
      useAlias: 'useAlias',
      useLatestFormSchemaVersion: 'useLatestFormSchemaVersion',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formInstanceId: 'string',
      formUuid: 'string',
      systemToken: 'string',
      tableFieldId: 'string',
      updateSubTableDataJson: 'string',
      useAlias: 'boolean',
      useLatestFormSchemaVersion: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubTableByRowIdResponseBody extends $tea.Model {
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubTableByRowIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSubTableByRowIdResponseBody;
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
      body: UpdateSubTableByRowIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTasksResponseBodyValues extends $tea.Model {
  agentCategory?: string;
  agentCreateGMT?: string;
  agentEndGMT?: string;
  agentName?: string;
  agentRangeType?: string;
  agentRangeValue?: string;
  agentStartGMT?: string;
  agentType?: string;
  agentUserId?: string;
  agentUuid?: string;
  creator?: string;
  creatorName?: string;
  modifier?: string;
  needNoticePrincipal?: string;
  principalName?: string;
  principalUserId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentCategory: 'agentCategory',
      agentCreateGMT: 'agentCreateGMT',
      agentEndGMT: 'agentEndGMT',
      agentName: 'agentName',
      agentRangeType: 'agentRangeType',
      agentRangeValue: 'agentRangeValue',
      agentStartGMT: 'agentStartGMT',
      agentType: 'agentType',
      agentUserId: 'agentUserId',
      agentUuid: 'agentUuid',
      creator: 'creator',
      creatorName: 'creatorName',
      modifier: 'modifier',
      needNoticePrincipal: 'needNoticePrincipal',
      principalName: 'principalName',
      principalUserId: 'principalUserId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCategory: 'string',
      agentCreateGMT: 'string',
      agentEndGMT: 'string',
      agentName: 'string',
      agentRangeType: 'string',
      agentRangeValue: 'string',
      agentStartGMT: 'string',
      agentType: 'string',
      agentUserId: 'string',
      agentUuid: 'string',
      creator: 'string',
      creatorName: 'string',
      modifier: 'string',
      needNoticePrincipal: 'string',
      principalName: 'string',
      principalUserId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFormComponentAliasListResponseBodyResult extends $tea.Model {
  alias?: string;
  fieldId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      fieldId: 'fieldId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      fieldId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFormDataByIDResponseBodyOriginatorName extends $tea.Model {
  /**
   * @example
   * 张三
   */
  nameInChinese?: string;
  /**
   * @example
   * ZhangSan
   */
  nameInEnglish?: string;
  /**
   * @example
   * i18n
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'nameInChinese',
      nameInEnglish: 'nameInEnglish',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFormDataByIDResponseBodyOriginator extends $tea.Model {
  /**
   * @example
   * 开发部
   */
  departmentName?: string;
  email?: string;
  name?: GetFormDataByIDResponseBodyOriginatorName;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentName: 'departmentName',
      email: 'email',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentName: 'string',
      email: 'string',
      name: GetFormDataByIDResponseBodyOriginatorName,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceByIdResponseBodyActionExecutorName extends $tea.Model {
  /**
   * @example
   * 张三
   */
  nameInChinese?: string;
  /**
   * @example
   * ZhangSan
   */
  nameInEnglish?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'nameInChinese',
      nameInEnglish: 'nameInEnglish',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceByIdResponseBodyActionExecutor extends $tea.Model {
  deptName?: string;
  email?: string;
  name?: GetInstanceByIdResponseBodyActionExecutorName;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'deptName',
      email: 'email',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      email: 'string',
      name: GetInstanceByIdResponseBodyActionExecutorName,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceByIdResponseBodyOriginatorName extends $tea.Model {
  /**
   * @example
   * 张三
   */
  nameInChinese?: string;
  /**
   * @example
   * ZhangSan
   */
  nameInEnglish?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'nameInChinese',
      nameInEnglish: 'nameInEnglish',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceByIdResponseBodyOriginator extends $tea.Model {
  deptName?: string;
  email?: string;
  name?: GetInstanceByIdResponseBodyOriginatorName;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'deptName',
      email: 'email',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      email: 'string',
      name: GetInstanceByIdResponseBodyOriginatorName,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesResponseBodyDataActionExecutorName extends $tea.Model {
  /**
   * @example
   * 张三
   */
  nameInChinese?: string;
  /**
   * @example
   * ZhangSan
   */
  nameInEnglish?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'nameInChinese',
      nameInEnglish: 'nameInEnglish',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesResponseBodyDataActionExecutor extends $tea.Model {
  deptName?: string;
  email?: string;
  name?: GetInstancesResponseBodyDataActionExecutorName;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'deptName',
      email: 'email',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      email: 'string',
      name: GetInstancesResponseBodyDataActionExecutorName,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesResponseBodyDataOriginatorName extends $tea.Model {
  /**
   * @example
   * 张三
   */
  nameInChinese?: string;
  /**
   * @example
   * ZhangSan
   */
  nameInEnglish?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'nameInChinese',
      nameInEnglish: 'nameInEnglish',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesResponseBodyDataOriginator extends $tea.Model {
  deptName?: string;
  email?: string;
  name?: GetInstancesResponseBodyDataOriginatorName;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'deptName',
      email: 'email',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      email: 'string',
      name: GetInstancesResponseBodyDataOriginatorName,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesResponseBodyData extends $tea.Model {
  actionExecutor?: GetInstancesResponseBodyDataActionExecutor[];
  approvedResult?: string;
  createTimeGMT?: string;
  data?: { [key: string]: any };
  formUuid?: string;
  instanceStatus?: string;
  modifiedTimeGMT?: string;
  originator?: GetInstancesResponseBodyDataOriginator;
  processCode?: string;
  processInstanceId?: string;
  title?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      actionExecutor: 'actionExecutor',
      approvedResult: 'approvedResult',
      createTimeGMT: 'createTimeGMT',
      data: 'data',
      formUuid: 'formUuid',
      instanceStatus: 'instanceStatus',
      modifiedTimeGMT: 'modifiedTimeGMT',
      originator: 'originator',
      processCode: 'processCode',
      processInstanceId: 'processInstanceId',
      title: 'title',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionExecutor: { 'type': 'array', 'itemType': GetInstancesResponseBodyDataActionExecutor },
      approvedResult: 'string',
      createTimeGMT: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formUuid: 'string',
      instanceStatus: 'string',
      modifiedTimeGMT: 'string',
      originator: GetInstancesResponseBodyDataOriginator,
      processCode: 'string',
      processInstanceId: 'string',
      title: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMatrixDetailByIdResponseBodyResultDescription extends $tea.Model {
  enUS?: string;
  type?: string;
  zhCN?: string;
  static names(): { [key: string]: string } {
    return {
      enUS: 'en_US',
      type: 'type',
      zhCN: 'zh_CN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enUS: 'string',
      type: 'string',
      zhCN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMatrixDetailByIdResponseBodyResultMatrixData extends $tea.Model {
  currentPage?: number;
  data?: any;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      data: 'data',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: 'any',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMatrixDetailByIdResponseBodyResultMatrixTableConditionColumn extends $tea.Model {
  columnId?: string;
  componentType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      columnId: 'columnId',
      componentType: 'componentType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnId: 'string',
      componentType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMatrixDetailByIdResponseBodyResultMatrixTableResultColumn extends $tea.Model {
  columnId?: string;
  componentType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      columnId: 'columnId',
      componentType: 'componentType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnId: 'string',
      componentType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMatrixDetailByIdResponseBodyResultMatrixTable extends $tea.Model {
  conditionColumn?: GetMatrixDetailByIdResponseBodyResultMatrixTableConditionColumn[];
  resultColumn?: GetMatrixDetailByIdResponseBodyResultMatrixTableResultColumn[];
  static names(): { [key: string]: string } {
    return {
      conditionColumn: 'conditionColumn',
      resultColumn: 'resultColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionColumn: { 'type': 'array', 'itemType': GetMatrixDetailByIdResponseBodyResultMatrixTableConditionColumn },
      resultColumn: { 'type': 'array', 'itemType': GetMatrixDetailByIdResponseBodyResultMatrixTableResultColumn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMatrixDetailByIdResponseBodyResultName extends $tea.Model {
  enUS?: string;
  type?: string;
  zhCN?: string;
  static names(): { [key: string]: string } {
    return {
      enUS: 'en_US',
      type: 'type',
      zhCN: 'zh_CN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enUS: 'string',
      type: 'string',
      zhCN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMatrixDetailByIdResponseBodyResult extends $tea.Model {
  description?: GetMatrixDetailByIdResponseBodyResultDescription;
  matrixData?: GetMatrixDetailByIdResponseBodyResultMatrixData;
  matrixId?: string;
  matrixTable?: GetMatrixDetailByIdResponseBodyResultMatrixTable;
  name?: GetMatrixDetailByIdResponseBodyResultName;
  rowTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      matrixData: 'matrixData',
      matrixId: 'matrixId',
      matrixTable: 'matrixTable',
      name: 'name',
      rowTotalCount: 'rowTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: GetMatrixDetailByIdResponseBodyResultDescription,
      matrixData: GetMatrixDetailByIdResponseBodyResultMatrixData,
      matrixId: 'string',
      matrixTable: GetMatrixDetailByIdResponseBodyResultMatrixTable,
      name: GetMatrixDetailByIdResponseBodyResultName,
      rowTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleDetailByIdResponseBodyResultMembers extends $tea.Model {
  currentPage?: number;
  data?: any;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      data: 'data',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: 'any',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleDetailByIdResponseBodyResult extends $tea.Model {
  canModifyOwners?: any;
  description?: string;
  memberTotalCount?: number;
  members?: GetRoleDetailByIdResponseBodyResultMembers;
  name?: string;
  parentUuid?: string;
  roleUuid?: string;
  static names(): { [key: string]: string } {
    return {
      canModifyOwners: 'canModifyOwners',
      description: 'description',
      memberTotalCount: 'memberTotalCount',
      members: 'members',
      name: 'name',
      parentUuid: 'parentUuid',
      roleUuid: 'roleUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canModifyOwners: 'any',
      description: 'string',
      memberTotalCount: 'number',
      members: GetRoleDetailByIdResponseBodyResultMembers,
      name: 'string',
      parentUuid: 'string',
      roleUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDataSecondGenerationResponseBodyDataModifyUserName extends $tea.Model {
  /**
   * @example
   * 张三
   */
  nameInChinese?: string;
  /**
   * @example
   * ZhangSan
   */
  nameInEnglish?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'nameInChinese',
      nameInEnglish: 'nameInEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDataSecondGenerationResponseBodyDataModifyUser extends $tea.Model {
  name?: SearchFormDataSecondGenerationResponseBodyDataModifyUserName;
  /**
   * @example
   * ding173982232112232
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: SearchFormDataSecondGenerationResponseBodyDataModifyUserName,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDataSecondGenerationResponseBodyDataOriginatorName extends $tea.Model {
  /**
   * @example
   * 张三
   */
  nameInChinese?: string;
  /**
   * @example
   * ZhangSan
   */
  nameInEnglish?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'nameInChinese',
      nameInEnglish: 'nameInEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDataSecondGenerationResponseBodyDataOriginator extends $tea.Model {
  name?: SearchFormDataSecondGenerationResponseBodyDataOriginatorName;
  /**
   * @example
   * ding173982232112232
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: SearchFormDataSecondGenerationResponseBodyDataOriginatorName,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDataSecondGenerationResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2021-05-01
   */
  createTimeGMT?: string;
  /**
   * @example
   * ding12345
   */
  creatorUserId?: string;
  /**
   * @example
   * {"addressField_l0c1cwiy_id":"\"海南省/469027/国营红岗农场/111\"","associationFormField_l0c1hdz4_id":"\"[{\\\"formType\\\":\\\"receipt\\\",\\\"formUuid\\\":\\\"FORM-QQ866JB1QW8YM5XZZZ64VQB61OGM1MLWE1C0LG\\\",\\\"instanceId\\\":\\\"FINST-CC666Y6198RY0LAN39XGND212MSX3TFT95S0LN31\\\",\\\"subTitle\\\":\\\"{\\\\\\\"type\\\\\\\":\\\\\\\"div\\\\\\\",\\\\\\\"props\\\\\\\":{\\\\\\\"children\\\\\\\":{\\\\\\\"type\\\\\\\":\\\\\\\"a\\\\\\\",\\\\\\\"props\\\\\\\":{\\\\\\\"children\\\\\\\":\\\\\\\"查看签名\\\\\\\",\\\\\\\"className\\\\\\\":\\\\\\\"inst-cell-item-link\\\\\\\",\\\\\\\"style\\\\\\\":{\\\\\\\"cursor\\\\\\\":\\\\\\\"pointer\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#0068ff\\\\\\\"}}},\\\\\\\"className\\\\\\\":\\\\\\\"inst-cell-item\\\\\\\"}}\\\",\\\"appType\\\":\\\"APP_K6IGJJ6PFAARLPDSWKXQ\\\",\\\"title\\\":\\\"1\\\"}]\"","countrySelectField_l0c1cwiu_id":["PG"],"imageField_l0c1cwit":"[{\"previewUrl\":\"/ossFileHandle?appType=APP_K6IGJJ6PFAARLPDSWKXQ&fileName=APP_K6IGJJ6PFAARLPDSWKXQ_MTczMjU1NjYyMzg3MzI0NF8wUDk2NlQ2MVIzR1lHV1RaMjMxQ1A5U1Y1NU1NM1lMWVY1QzBMMQ$$.jpg&instId=&type=open&process=image/resize,m_fill,w_200,h_200,limit_0/quality,q_80\",\"size\":2610734,\"name\":\"Bts2Z0e6oxA.jpg\",\"downloadUrl\":\"/ossFileHandle?appType=APP_K6IGJJ6PFAARLPDSWKXQ&fileName=APP_K6IGJJ6PFAARLPDSWKXQ_MTczMjU1NjYyMzg3MzI0NF8wUDk2NlQ2MVIzR1lHV1RaMjMxQ1A5U1Y1NU1NM1lMWVY1QzBMMQ$$.jpg&instId=&type=download\",\"url\":\"/ossFileHandle?appType=APP_K6IGJJ6PFAARLPDSWKXQ&fileName=APP_K6IGJJ6PFAARLPDSWKXQ_MTczMjU1NjYyMzg3MzI0NF8wUDk2NlQ2MVIzR1lHV1RaMjMxQ1A5U1Y1NU1NM1lMWVY1QzBMMQ$$.jpg&instId=&type=download\"}]","rateField_l0c1cwis_value":"3","editorField_l0c1cwiz":"<div><strong>你好，这是测试</strong></div>\r\n<div><span style=\"font-family: kaiti;background-color: #ff0000;color: #ffff00;\"><em><strong>测试</strong></em></span></div>\r\n<div>&nbsp;</div>","rateField_l0c1cwis":3,"countrySelectField_l0c1cwiu":[],"attachmentField_l0ghkwv3":"[{\"downloadUrl\":\"/ossFileHandle?appType=APP_K6IGJJ6PFAARLPDSWKXQ&fileName=APP_K6IGJJ6PFAARLPDSWKXQ_MTczMjU1NjYyMzg3MzI0NF8wUDk2NlQ2MVIzR1lHV1RaMjMxQ1A5U1Y1NU1NM1lMWVY1QzBMMQ$$.jpg&instId=&type=download\",\"name\":\"Bts2Z0e6oxA.jpg\",\"previewUrl\":\"/ossFileHandle?appType=APP_K6IGJJ6PFAARLPDSWKXQ&fileName=APP_K6IGJJ6PFAARLPDSWKXQ_MTczMjU1NjYyMzg3MzI0NF8wUDk2NlQ2MVIzR1lHV1RaMjMxQ1A5U1Y1NU1NM1lMWVY1QzBMMQ$$.jpg&instId=&type=open&process=image/resize,m_fill,w_200,h_200,limit_0/quality,q_80\",\"size\":2610734,\"url\":\"/ossFileHandle?appType=APP_K6IGJJ6PFAARLPDSWKXQ&fileName=APP_K6IGJJ6PFAARLPDSWKXQ_MTczMjU1NjYyMzg3MzI0NF8wUDk2NlQ2MVIzR1lHV1RaMjMxQ1A5U1Y1NU1NM1lMWVY1QzBMMQ$$.jpg&instId=&type=download\"}]","addressField_l0c1cwiy":"{\"address\":\"111\",\"regionIds\":[460000,469027,469023401],\"regionText\":[{\"en_US\":\"hai+nan+sheng\",\"zh_CN\":\"海南省\"},{\"en_US\":\"cheng+mai+xian\",\"zh_CN\":\"澄迈县\"},{\"en_US\":\"guo+ying+hong+gang+nong+chang\",\"zh_CN\":\"国营红岗农场\"}]}"}
   */
  formData?: { [key: string]: any };
  /**
   * @example
   * FINST-J8766S91O2UYN87ZX3XOF1MY8MBA2912BSV0L24
   */
  formInstanceId?: string;
  /**
   * @example
   * FORM-GX866MC1NC1VOFF6WVQW33FD16E23L3CPMKVKA
   */
  formUuid?: string;
  /**
   * @example
   * 12345
   */
  id?: number;
  /**
   * @example
   * [{"componentName":"CountrySelectField","dateType":null,"fieldData":{"value":[{"text":{"en_US":"Papua New Guinea","zh_CN":"巴布亚新几内亚","type":"i18n"},"value":"PG"}]},"fieldDataUpdated":false,"fieldId":"countrySelectField_l0c1cwiu","format":null,"formatControls":null,"listNum":null,"options":[{"label":{"$ref":"$[0].fieldData.value[0].text"},"value":"PG"}],"rowId":null},{"componentName":"AssociationFormField","dateType":null,"fieldData":{"value":[{"formType":"receipt","formUuid":"FORM-QQ866JB1QW8YM5XZZZ64VQB61OGM1MLWE1C0LG","instanceId":"FINST-CC666Y6198RY0LAN39XGND212MSX3TFT95S0LN31","subTitle":"{\"type\":\"div\",\"props\":{\"children\":{\"type\":\"a\",\"props\":{\"children\":\"查看签名\",\"className\":\"inst-cell-item-link\",\"style\":{\"cursor\":\"pointer\",\"color\":\"#0068ff\"}}},\"className\":\"inst-cell-item\"}}","appType":"APP_K6IGJJ6PFAARLPDSWKXQ","title":"1"}]},"fieldDataUpdated":false,"fieldId":"associationFormField_l0c1hdz4","format":null,"formatControls":null,"listNum":null,"options":[],"rowId":null},{"componentName":"ImageField","dateType":null,"fieldData":{"value":[{"previewUrl":"/ossFileHandle?appType=APP_K6IGJJ6PFAARLPDSWKXQ&fileName=APP_K6IGJJ6PFAARLPDSWKXQ_MTczMjU1NjYyMzg3MzI0NF8wUDk2NlQ2MVIzR1lHV1RaMjMxQ1A5U1Y1NU1NM1lMWVY1QzBMMQ$$.jpg&instId=&type=open&process=image/resize,m_fill,w_200,h_200,limit_0/quality,q_80","size":2610734,"name":"Bts2Z0e6oxA.jpg","downloadUrl":"/ossFileHandle?appType=APP_K6IGJJ6PFAARLPDSWKXQ&fileName=APP_K6IGJJ6PFAARLPDSWKXQ_MTczMjU1NjYyMzg3MzI0NF8wUDk2NlQ2MVIzR1lHV1RaMjMxQ1A5U1Y1NU1NM1lMWVY1QzBMMQ$$.jpg&instId=&type=download","url":"/ossFileHandle?appType=APP_K6IGJJ6PFAARLPDSWKXQ&fileName=APP_K6IGJJ6PFAARLPDSWKXQ_MTczMjU1NjYyMzg3MzI0NF8wUDk2NlQ2MVIzR1lHV1RaMjMxQ1A5U1Y1NU1NM1lMWVY1QzBMMQ$$.jpg&instId=&type=download"}]},"fieldDataUpdated":false,"fieldId":"imageField_l0c1cwit","format":null,"formatControls":null,"listNum":null,"options":[],"rowId":null},{"componentName":"AddressField","dateType":null,"fieldData":{"value":{"address":"111","regionIds":[460000,469027,469023401],"regionText":[{"en_US":"hai+nan+sheng","zh_CN":"海南省"},{"en_US":"cheng+mai+xian","zh_CN":"澄迈县"},{"en_US":"guo+ying+hong+gang+nong+chang","zh_CN":"国营红岗农场"}]}},"fieldDataUpdated":false,"fieldId":"addressField_l0c1cwiy","format":null,"formatControls":null,"listNum":null,"options":[{"label":{"pureEn_US":"hai+nan+sheng","en_US":"hai+nan+sheng","zh_CN":"海南省","type":"i18n","key":null},"value":460000},{"label":{"pureEn_US":"cheng+mai+xian","en_US":"cheng+mai+xian","zh_CN":"澄迈县","type":"i18n","key":null},"value":469027},{"label":{"pureEn_US":"guo+ying+hong+gang+nong+chang","en_US":"guo+ying+hong+gang+nong+chang","zh_CN":"国营红岗农场","type":"i18n","key":null},"value":469023401}],"rowId":null},{"componentName":"EditorField","dateType":null,"fieldData":{"value":"<div><strong>你好，这是测试</strong></div>\r\n<div><span style=\"font-family: kaiti;background-color: #ff0000;color: #ffff00;\"><em><strong>测试</strong></em></span></div>\r\n<div>&nbsp;</div>"},"fieldDataUpdated":false,"fieldId":"editorField_l0c1cwiz","format":null,"formatControls":null,"listNum":null,"options":[],"rowId":null},{"componentName":"RateField","dateType":null,"fieldData":{"value":"3"},"fieldDataUpdated":false,"fieldId":"rateField_l0c1cwis","format":null,"formatControls":null,"listNum":null,"options":[],"rowId":null},{"componentName":"AttachmentField","dateType":null,"fieldData":{"value":[{"previewUrl":"/ossFileHandle?appType=APP_K6IGJJ6PFAARLPDSWKXQ&fileName=APP_K6IGJJ6PFAARLPDSWKXQ_MTczMjU1NjYyMzg3MzI0NF8wUDk2NlQ2MVIzR1lHV1RaMjMxQ1A5U1Y1NU1NM1lMWVY1QzBMMQ$$.jpg&instId=&type=open&process=image/resize,m_fill,w_200,h_200,limit_0/quality,q_80","size":2610734,"name":"Bts2Z0e6oxA.jpg","downloadUrl":"/ossFileHandle?appType=APP_K6IGJJ6PFAARLPDSWKXQ&fileName=APP_K6IGJJ6PFAARLPDSWKXQ_MTczMjU1NjYyMzg3MzI0NF8wUDk2NlQ2MVIzR1lHV1RaMjMxQ1A5U1Y1NU1NM1lMWVY1QzBMMQ$$.jpg&instId=&type=download","url":"/ossFileHandle?appType=APP_K6IGJJ6PFAARLPDSWKXQ&fileName=APP_K6IGJJ6PFAARLPDSWKXQ_MTczMjU1NjYyMzg3MzI0NF8wUDk2NlQ2MVIzR1lHV1RaMjMxQ1A5U1Y1NU1NM1lMWVY1QzBMMQ$$.jpg&instId=&type=download"}]},"fieldDataUpdated":false,"fieldId":"attachmentField_l0ghkwv3","format":null,"formatControls":null,"listNum":null,"options":[],"rowId":null}]
   */
  instanceValue?: string;
  /**
   * @example
   * 2021-05-01
   */
  modifiedTimeGMT?: string;
  /**
   * @example
   * manager123
   */
  modifier?: string;
  modifyUser?: SearchFormDataSecondGenerationResponseBodyDataModifyUser;
  originator?: SearchFormDataSecondGenerationResponseBodyDataOriginator;
  /**
   * @example
   * IMPORT-388664B1BAUVB3AYZE1RIUE88TDM1QI9WIOWK2
   */
  sequence?: string;
  /**
   * @example
   * YIDA909202202250027
   */
  serialNumber?: string;
  /**
   * @example
   * 李四发起的请购单
   */
  title?: string;
  /**
   * @example
   * 1.0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeGMT: 'createTimeGMT',
      creatorUserId: 'creatorUserId',
      formData: 'formData',
      formInstanceId: 'formInstanceId',
      formUuid: 'formUuid',
      id: 'id',
      instanceValue: 'instanceValue',
      modifiedTimeGMT: 'modifiedTimeGMT',
      modifier: 'modifier',
      modifyUser: 'modifyUser',
      originator: 'originator',
      sequence: 'sequence',
      serialNumber: 'serialNumber',
      title: 'title',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeGMT: 'string',
      creatorUserId: 'string',
      formData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formInstanceId: 'string',
      formUuid: 'string',
      id: 'number',
      instanceValue: 'string',
      modifiedTimeGMT: 'string',
      modifier: 'string',
      modifyUser: SearchFormDataSecondGenerationResponseBodyDataModifyUser,
      originator: SearchFormDataSecondGenerationResponseBodyDataOriginator,
      sequence: 'string',
      serialNumber: 'string',
      title: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDatasResponseBodyDataModifyUserUserName extends $tea.Model {
  /**
   * @example
   * 张三
   */
  nameInChinese?: string;
  /**
   * @example
   * ZhangSan
   */
  nameInEnglish?: string;
  /**
   * @example
   * i18n
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'nameInChinese',
      nameInEnglish: 'nameInEnglish',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDatasResponseBodyDataModifyUser extends $tea.Model {
  userId?: string;
  userName?: SearchFormDatasResponseBodyDataModifyUserUserName;
  static names(): { [key: string]: string } {
    return {
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: SearchFormDatasResponseBodyDataModifyUserUserName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDatasResponseBodyDataOriginatorUserName extends $tea.Model {
  /**
   * @example
   * 张三
   */
  nameInChinese?: string;
  /**
   * @example
   * ZhangSan
   */
  nameInEnglish?: string;
  /**
   * @example
   * i18n
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'nameInChinese',
      nameInEnglish: 'nameInEnglish',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDatasResponseBodyDataOriginator extends $tea.Model {
  userId?: string;
  userName?: SearchFormDatasResponseBodyDataOriginatorUserName;
  static names(): { [key: string]: string } {
    return {
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: SearchFormDatasResponseBodyDataOriginatorUserName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDatasResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2018-01-24 11:22:01
   */
  createdTimeGMT?: string;
  /**
   * @example
   * 1731234567
   */
  creatorUserId?: string;
  /**
   * @example
   * 1002
   */
  dataId?: number;
  /**
   * @example
   * {"numberField_jcr0069o":1,"multiSelectField_jcr0069s":["选项三","选项二"],"textareaField_jcr0069n":"duohang","employeeField_jcr0069x":["xxxx"],"departmentField_jcr0069z":"xxxx","cascadeDate_jcr0069u":["1514736000000","1517328000000"],"cascadeSelectField_jcr006a0":["part","part_b"],"tableField_jcr006a1":[{"departmentField_jcr006ad":"xxxx","cascadeDate_jcr006aa":["1514736000000","1517328000000"],"selectField_jcr006a6":"选项三","citySelectField_jcr006ac":["天津","天津市","河东区"],"radioField_jcr006a5":"选项二","employeeField_jcr006ab":["xxxxxx","yyyyyy"],"dateField_jcr006a9":1517328000000,"textField_jcr006a2":"明细下单行","textareaField_jcr006a3":"明细下多行","cascadeSelectField_jcr006ae":["product","product_a"],"numberField_jcr006a4":2,"checkboxField_jcr006a7":["选项一","选项三","选项二"],"multiSelectField_jcr006a8":["选项一","选项三","选项二"]}],"selectField_jcr0069q":"选项一","citySelectField_jcr0069y":["北京","北京市","东城区"],"checkboxField_jcr0069r":["选项三","选项二"],"textField_jcr0069m":"danhang","radioField_jcr0069p":"选项一","dateField_jcr0069t":1516636800000}
   */
  formData?: { [key: string]: any };
  /**
   * @example
   * FINST-BNKJDRF
   */
  formInstanceId?: string;
  /**
   * @example
   * FORM-EF6Y93URN24F1SCX15VA2P918LPEIJ2H3UFORCJ1
   */
  formUuid?: string;
  /**
   * @example
   * {"textField":"124"}
   */
  instanceValue?: string;
  modelUuid?: string;
  /**
   * @example
   * 2018-01-24 11:22:01
   */
  modifiedTimeGMT?: string;
  /**
   * @example
   * 1731234567
   */
  modifierUserId?: string;
  modifyUser?: SearchFormDatasResponseBodyDataModifyUser;
  originator?: SearchFormDatasResponseBodyDataOriginator;
  /**
   * @example
   * Squence-XXX
   */
  sequence?: string;
  /**
   * @example
   * 1234
   */
  serialNo?: string;
  /**
   * @example
   * 张三发起的表单
   */
  title?: string;
  /**
   * @example
   * 3
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createdTimeGMT: 'createdTimeGMT',
      creatorUserId: 'creatorUserId',
      dataId: 'dataId',
      formData: 'formData',
      formInstanceId: 'formInstanceId',
      formUuid: 'formUuid',
      instanceValue: 'instanceValue',
      modelUuid: 'modelUuid',
      modifiedTimeGMT: 'modifiedTimeGMT',
      modifierUserId: 'modifierUserId',
      modifyUser: 'modifyUser',
      originator: 'originator',
      sequence: 'sequence',
      serialNo: 'serialNo',
      title: 'title',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTimeGMT: 'string',
      creatorUserId: 'string',
      dataId: 'number',
      formData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formInstanceId: 'string',
      formUuid: 'string',
      instanceValue: 'string',
      modelUuid: 'string',
      modifiedTimeGMT: 'string',
      modifierUserId: 'string',
      modifyUser: SearchFormDatasResponseBodyDataModifyUser,
      originator: SearchFormDatasResponseBodyDataOriginator,
      sequence: 'string',
      serialNo: 'string',
      title: 'string',
      version: 'number',
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
   * 批量新增/更新角色成员
   * 
   * @param request - BatchAddOrUpdateRoleMembersRequest
   * @param headers - BatchAddOrUpdateRoleMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddOrUpdateRoleMembersResponse
   */
  async batchAddOrUpdateRoleMembersWithOptions(request: BatchAddOrUpdateRoleMembersRequest, headers: BatchAddOrUpdateRoleMembersHeaders, runtime: $Util.RuntimeOptions): Promise<BatchAddOrUpdateRoleMembersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.membersInfo)) {
      body["membersInfo"] = request.membersInfo;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.roleUuid)) {
      body["roleUuid"] = request.roleUuid;
    }

    if (!Util.isUnset(request.token)) {
      body["token"] = request.token;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      action: "BatchAddOrUpdateRoleMembers",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/resources/roles/upsert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<BatchAddOrUpdateRoleMembersResponse>(await this.execute(params, req, runtime), new BatchAddOrUpdateRoleMembersResponse({}));
  }

  /**
   * 批量新增/更新角色成员
   * 
   * @param request - BatchAddOrUpdateRoleMembersRequest
   * @returns BatchAddOrUpdateRoleMembersResponse
   */
  async batchAddOrUpdateRoleMembers(request: BatchAddOrUpdateRoleMembersRequest): Promise<BatchAddOrUpdateRoleMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BatchAddOrUpdateRoleMembersHeaders({ });
    return await this.batchAddOrUpdateRoleMembersWithOptions(request, headers, runtime);
  }

  /**
   * 批量删除角色成员
   * 
   * @param request - BatchDeleteRoleMembersRequest
   * @param headers - BatchDeleteRoleMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteRoleMembersResponse
   */
  async batchDeleteRoleMembersWithOptions(request: BatchDeleteRoleMembersRequest, headers: BatchDeleteRoleMembersHeaders, runtime: $Util.RuntimeOptions): Promise<BatchDeleteRoleMembersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.memberIds)) {
      body["memberIds"] = request.memberIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.roleUuid)) {
      body["roleUuid"] = request.roleUuid;
    }

    if (!Util.isUnset(request.token)) {
      body["token"] = request.token;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      action: "BatchDeleteRoleMembers",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/resources/roles/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteRoleMembersResponse>(await this.execute(params, req, runtime), new BatchDeleteRoleMembersResponse({}));
  }

  /**
   * 批量删除角色成员
   * 
   * @param request - BatchDeleteRoleMembersRequest
   * @returns BatchDeleteRoleMembersResponse
   */
  async batchDeleteRoleMembers(request: BatchDeleteRoleMembersRequest): Promise<BatchDeleteRoleMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BatchDeleteRoleMembersHeaders({ });
    return await this.batchDeleteRoleMembersWithOptions(request, headers, runtime);
  }

  /**
   * 撤销代理关系
   * 
   * @param request - CancelAgentTaskRequest
   * @param headers - CancelAgentTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAgentTaskResponse
   */
  async cancelAgentTaskWithOptions(request: CancelAgentTaskRequest, headers: CancelAgentTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CancelAgentTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentType)) {
      query["agentType"] = request.agentType;
    }

    if (!Util.isUnset(request.agentUuid)) {
      query["agentUuid"] = request.agentUuid;
    }

    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.token)) {
      query["token"] = request.token;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
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
      action: "CancelAgentTask",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/resources/agents/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CancelAgentTaskResponse>(await this.execute(params, req, runtime), new CancelAgentTaskResponse({}));
  }

  /**
   * 撤销代理关系
   * 
   * @param request - CancelAgentTaskRequest
   * @returns CancelAgentTaskResponse
   */
  async cancelAgentTask(request: CancelAgentTaskRequest): Promise<CancelAgentTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CancelAgentTaskHeaders({ });
    return await this.cancelAgentTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建代理关系
   * 
   * @param request - CreateAgentTaskRequest
   * @param headers - CreateAgentTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentTaskResponse
   */
  async createAgentTaskWithOptions(request: CreateAgentTaskRequest, headers: CreateAgentTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateAgentTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentCategory)) {
      query["agentCategory"] = request.agentCategory;
    }

    if (!Util.isUnset(request.agentRangeType)) {
      query["agentRangeType"] = request.agentRangeType;
    }

    if (!Util.isUnset(request.agentRangeValue)) {
      query["agentRangeValue"] = request.agentRangeValue;
    }

    if (!Util.isUnset(request.agentType)) {
      query["agentType"] = request.agentType;
    }

    if (!Util.isUnset(request.agentUserId)) {
      query["agentUserId"] = request.agentUserId;
    }

    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTimestamp)) {
      query["endTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.needNoticePrincipal)) {
      query["needNoticePrincipal"] = request.needNoticePrincipal;
    }

    if (!Util.isUnset(request.principalUserId)) {
      query["principalUserId"] = request.principalUserId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["startTimestamp"] = request.startTimestamp;
    }

    if (!Util.isUnset(request.token)) {
      query["token"] = request.token;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
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
      action: "CreateAgentTask",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/resources/agents/insert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateAgentTaskResponse>(await this.execute(params, req, runtime), new CreateAgentTaskResponse({}));
  }

  /**
   * 创建代理关系
   * 
   * @param request - CreateAgentTaskRequest
   * @returns CreateAgentTaskResponse
   */
  async createAgentTask(request: CreateAgentTaskRequest): Promise<CreateAgentTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateAgentTaskHeaders({ });
    return await this.createAgentTaskWithOptions(request, headers, runtime);
  }

  /**
   * 新增或更新表单实例
   * 
   * @param request - CreateOrUpdateFormDataRequest
   * @param headers - CreateOrUpdateFormDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateFormDataResponse
   */
  async createOrUpdateFormDataWithOptions(request: CreateOrUpdateFormDataRequest, headers: CreateOrUpdateFormDataHeaders, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateFormDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["appType"] = request.appType;
    }

    if (!Util.isUnset(request.formDataJson)) {
      body["formDataJson"] = request.formDataJson;
    }

    if (!Util.isUnset(request.formUuid)) {
      body["formUuid"] = request.formUuid;
    }

    if (!Util.isUnset(request.noExecuteExpression)) {
      body["noExecuteExpression"] = request.noExecuteExpression;
    }

    if (!Util.isUnset(request.searchCondition)) {
      body["searchCondition"] = request.searchCondition;
    }

    if (!Util.isUnset(request.systemToken)) {
      body["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.useAlias)) {
      body["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      action: "CreateOrUpdateFormData",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/instances/insertOrUpdate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateFormDataResponse>(await this.execute(params, req, runtime), new CreateOrUpdateFormDataResponse({}));
  }

  /**
   * 新增或更新表单实例
   * 
   * @param request - CreateOrUpdateFormDataRequest
   * @returns CreateOrUpdateFormDataResponse
   */
  async createOrUpdateFormData(request: CreateOrUpdateFormDataRequest): Promise<CreateOrUpdateFormDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateOrUpdateFormDataHeaders({ });
    return await this.createOrUpdateFormDataWithOptions(request, headers, runtime);
  }

  /**
   * 批量删除矩阵明细数据
   * 
   * @param request - DeleteMatrixDataByRowIdsRequest
   * @param headers - DeleteMatrixDataByRowIdsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMatrixDataByRowIdsResponse
   */
  async deleteMatrixDataByRowIdsWithOptions(request: DeleteMatrixDataByRowIdsRequest, headers: DeleteMatrixDataByRowIdsHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteMatrixDataByRowIdsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.matrixId)) {
      body["matrixId"] = request.matrixId;
    }

    if (!Util.isUnset(request.rowIds)) {
      body["rowIds"] = request.rowIds;
    }

    if (!Util.isUnset(request.token)) {
      body["token"] = request.token;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      action: "DeleteMatrixDataByRowIds",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/resources/matrices/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteMatrixDataByRowIdsResponse>(await this.execute(params, req, runtime), new DeleteMatrixDataByRowIdsResponse({}));
  }

  /**
   * 批量删除矩阵明细数据
   * 
   * @param request - DeleteMatrixDataByRowIdsRequest
   * @returns DeleteMatrixDataByRowIdsResponse
   */
  async deleteMatrixDataByRowIds(request: DeleteMatrixDataByRowIdsRequest): Promise<DeleteMatrixDataByRowIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteMatrixDataByRowIdsHeaders({ });
    return await this.deleteMatrixDataByRowIdsWithOptions(request, headers, runtime);
  }

  /**
   * 获取代理列表
   * 
   * @param request - GetAgentTasksRequest
   * @param headers - GetAgentTasksHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentTasksResponse
   */
  async getAgentTasksWithOptions(request: GetAgentTasksRequest, headers: GetAgentTasksHeaders, runtime: $Util.RuntimeOptions): Promise<GetAgentTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentUuid)) {
      query["agentUuid"] = request.agentUuid;
    }

    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.keywords)) {
      query["keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    if (!Util.isUnset(request.token)) {
      query["token"] = request.token;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
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
      action: "GetAgentTasks",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/resources/agents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetAgentTasksResponse>(await this.execute(params, req, runtime), new GetAgentTasksResponse({}));
  }

  /**
   * 获取代理列表
   * 
   * @param request - GetAgentTasksRequest
   * @returns GetAgentTasksResponse
   */
  async getAgentTasks(request: GetAgentTasksRequest): Promise<GetAgentTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAgentTasksHeaders({ });
    return await this.getAgentTasksWithOptions(request, headers, runtime);
  }

  /**
   * 获取表单组件别名列表
   * 
   * @param request - GetFormComponentAliasListRequest
   * @param headers - GetFormComponentAliasListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFormComponentAliasListResponse
   */
  async getFormComponentAliasListWithOptions(appType: string, formUuid: string, request: GetFormComponentAliasListRequest, headers: GetFormComponentAliasListHeaders, runtime: $Util.RuntimeOptions): Promise<GetFormComponentAliasListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.language)) {
      query["language"] = request.language;
    }

    if (!Util.isUnset(request.systemToken)) {
      query["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
    }

    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
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
      action: "GetFormComponentAliasList",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/component/alias/${appType}/${formUuid}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetFormComponentAliasListResponse>(await this.execute(params, req, runtime), new GetFormComponentAliasListResponse({}));
  }

  /**
   * 获取表单组件别名列表
   * 
   * @param request - GetFormComponentAliasListRequest
   * @returns GetFormComponentAliasListResponse
   */
  async getFormComponentAliasList(appType: string, formUuid: string, request: GetFormComponentAliasListRequest): Promise<GetFormComponentAliasListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetFormComponentAliasListHeaders({ });
    return await this.getFormComponentAliasListWithOptions(appType, formUuid, request, headers, runtime);
  }

  /**
   * 根据表单 ID 查询实例详情
   * 
   * @param request - GetFormDataByIDRequest
   * @param headers - GetFormDataByIDHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFormDataByIDResponse
   */
  async getFormDataByIDWithOptions(id: string, request: GetFormDataByIDRequest, headers: GetFormDataByIDHeaders, runtime: $Util.RuntimeOptions): Promise<GetFormDataByIDResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      query["appType"] = request.appType;
    }

    if (!Util.isUnset(request.formUuid)) {
      query["formUuid"] = request.formUuid;
    }

    if (!Util.isUnset(request.language)) {
      query["language"] = request.language;
    }

    if (!Util.isUnset(request.systemToken)) {
      query["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.useAlias)) {
      query["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
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
      action: "GetFormDataByID",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/instances/${id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetFormDataByIDResponse>(await this.execute(params, req, runtime), new GetFormDataByIDResponse({}));
  }

  /**
   * 根据表单 ID 查询实例详情
   * 
   * @param request - GetFormDataByIDRequest
   * @returns GetFormDataByIDResponse
   */
  async getFormDataByID(id: string, request: GetFormDataByIDRequest): Promise<GetFormDataByIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetFormDataByIDHeaders({ });
    return await this.getFormDataByIDWithOptions(id, request, headers, runtime);
  }

  /**
   * 根据实例 ID 获取流程实例详情
   * 
   * @param request - GetInstanceByIdRequest
   * @param headers - GetInstanceByIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceByIdResponse
   */
  async getInstanceByIdWithOptions(id: string, request: GetInstanceByIdRequest, headers: GetInstanceByIdHeaders, runtime: $Util.RuntimeOptions): Promise<GetInstanceByIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      query["appType"] = request.appType;
    }

    if (!Util.isUnset(request.formUuid)) {
      query["formUuid"] = request.formUuid;
    }

    if (!Util.isUnset(request.language)) {
      query["language"] = request.language;
    }

    if (!Util.isUnset(request.systemToken)) {
      query["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.useAlias)) {
      query["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
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
      action: "GetInstanceById",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/processes/instancesInfos/${id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceByIdResponse>(await this.execute(params, req, runtime), new GetInstanceByIdResponse({}));
  }

  /**
   * 根据实例 ID 获取流程实例详情
   * 
   * @param request - GetInstanceByIdRequest
   * @returns GetInstanceByIdResponse
   */
  async getInstanceById(id: string, request: GetInstanceByIdRequest): Promise<GetInstanceByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetInstanceByIdHeaders({ });
    return await this.getInstanceByIdWithOptions(id, request, headers, runtime);
  }

  /**
   * 根据条件搜索流程实例 ID
   * 
   * @param request - GetInstanceIdListRequest
   * @param headers - GetInstanceIdListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceIdListResponse
   */
  async getInstanceIdListWithOptions(request: GetInstanceIdListRequest, headers: GetInstanceIdListHeaders, runtime: $Util.RuntimeOptions): Promise<GetInstanceIdListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["appType"] = request.appType;
    }

    if (!Util.isUnset(request.approvedResult)) {
      body["approvedResult"] = request.approvedResult;
    }

    if (!Util.isUnset(request.createFromTimeGMT)) {
      body["createFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!Util.isUnset(request.createToTimeGMT)) {
      body["createToTimeGMT"] = request.createToTimeGMT;
    }

    if (!Util.isUnset(request.formUuid)) {
      body["formUuid"] = request.formUuid;
    }

    if (!Util.isUnset(request.instanceStatus)) {
      body["instanceStatus"] = request.instanceStatus;
    }

    if (!Util.isUnset(request.language)) {
      body["language"] = request.language;
    }

    if (!Util.isUnset(request.modifiedFromTimeGMT)) {
      body["modifiedFromTimeGMT"] = request.modifiedFromTimeGMT;
    }

    if (!Util.isUnset(request.modifiedToTimeGMT)) {
      body["modifiedToTimeGMT"] = request.modifiedToTimeGMT;
    }

    if (!Util.isUnset(request.originatorId)) {
      body["originatorId"] = request.originatorId;
    }

    if (!Util.isUnset(request.searchFieldJson)) {
      body["searchFieldJson"] = request.searchFieldJson;
    }

    if (!Util.isUnset(request.systemToken)) {
      body["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!Util.isUnset(request.useAlias)) {
      body["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceIdList",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/processes/instanceIds`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceIdListResponse>(await this.execute(params, req, runtime), new GetInstanceIdListResponse({}));
  }

  /**
   * 根据条件搜索流程实例 ID
   * 
   * @param request - GetInstanceIdListRequest
   * @returns GetInstanceIdListResponse
   */
  async getInstanceIdList(request: GetInstanceIdListRequest): Promise<GetInstanceIdListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetInstanceIdListHeaders({ });
    return await this.getInstanceIdListWithOptions(request, headers, runtime);
  }

  /**
   * 根据搜索条件获取流程表单实例详情
   * 
   * @param request - GetInstancesRequest
   * @param headers - GetInstancesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstancesResponse
   */
  async getInstancesWithOptions(request: GetInstancesRequest, headers: GetInstancesHeaders, runtime: $Util.RuntimeOptions): Promise<GetInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["appType"] = request.appType;
    }

    if (!Util.isUnset(request.approvedResult)) {
      body["approvedResult"] = request.approvedResult;
    }

    if (!Util.isUnset(request.createFromTimeGMT)) {
      body["createFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!Util.isUnset(request.createToTimeGMT)) {
      body["createToTimeGMT"] = request.createToTimeGMT;
    }

    if (!Util.isUnset(request.formUuid)) {
      body["formUuid"] = request.formUuid;
    }

    if (!Util.isUnset(request.instanceStatus)) {
      body["instanceStatus"] = request.instanceStatus;
    }

    if (!Util.isUnset(request.language)) {
      body["language"] = request.language;
    }

    if (!Util.isUnset(request.modifiedFromTimeGMT)) {
      body["modifiedFromTimeGMT"] = request.modifiedFromTimeGMT;
    }

    if (!Util.isUnset(request.modifiedToTimeGMT)) {
      body["modifiedToTimeGMT"] = request.modifiedToTimeGMT;
    }

    if (!Util.isUnset(request.orderConfigJson)) {
      body["orderConfigJson"] = request.orderConfigJson;
    }

    if (!Util.isUnset(request.originatorId)) {
      body["originatorId"] = request.originatorId;
    }

    if (!Util.isUnset(request.searchFieldJson)) {
      body["searchFieldJson"] = request.searchFieldJson;
    }

    if (!Util.isUnset(request.systemToken)) {
      body["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!Util.isUnset(request.useAlias)) {
      body["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstances",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/processes/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetInstancesResponse>(await this.execute(params, req, runtime), new GetInstancesResponse({}));
  }

  /**
   * 根据搜索条件获取流程表单实例详情
   * 
   * @param request - GetInstancesRequest
   * @returns GetInstancesResponse
   */
  async getInstances(request: GetInstancesRequest): Promise<GetInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetInstancesHeaders({ });
    return await this.getInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 获取权限矩阵数据详情
   * 
   * @param request - GetMatrixDetailByIdRequest
   * @param headers - GetMatrixDetailByIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMatrixDetailByIdResponse
   */
  async getMatrixDetailByIdWithOptions(request: GetMatrixDetailByIdRequest, headers: GetMatrixDetailByIdHeaders, runtime: $Util.RuntimeOptions): Promise<GetMatrixDetailByIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.matrixId)) {
      query["matrixId"] = request.matrixId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.token)) {
      query["token"] = request.token;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
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
      action: "GetMatrixDetailById",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/resources/matrices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetMatrixDetailByIdResponse>(await this.execute(params, req, runtime), new GetMatrixDetailByIdResponse({}));
  }

  /**
   * 获取权限矩阵数据详情
   * 
   * @param request - GetMatrixDetailByIdRequest
   * @returns GetMatrixDetailByIdResponse
   */
  async getMatrixDetailById(request: GetMatrixDetailByIdRequest): Promise<GetMatrixDetailByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetMatrixDetailByIdHeaders({ });
    return await this.getMatrixDetailByIdWithOptions(request, headers, runtime);
  }

  /**
   * 获取角色详情和成员列表
   * 
   * @param request - GetRoleDetailByIdRequest
   * @param headers - GetRoleDetailByIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoleDetailByIdResponse
   */
  async getRoleDetailByIdWithOptions(request: GetRoleDetailByIdRequest, headers: GetRoleDetailByIdHeaders, runtime: $Util.RuntimeOptions): Promise<GetRoleDetailByIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.roleUuid)) {
      query["roleUuid"] = request.roleUuid;
    }

    if (!Util.isUnset(request.token)) {
      query["token"] = request.token;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
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
      action: "GetRoleDetailById",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/resources/roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetRoleDetailByIdResponse>(await this.execute(params, req, runtime), new GetRoleDetailByIdResponse({}));
  }

  /**
   * 获取角色详情和成员列表
   * 
   * @param request - GetRoleDetailByIdRequest
   * @returns GetRoleDetailByIdResponse
   */
  async getRoleDetailById(request: GetRoleDetailByIdRequest): Promise<GetRoleDetailByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetRoleDetailByIdHeaders({ });
    return await this.getRoleDetailByIdWithOptions(request, headers, runtime);
  }

  /**
   * 修改/新增矩阵明细数据
   * 
   * @param request - SaveAndUpdateMatrixDataRequest
   * @param headers - SaveAndUpdateMatrixDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveAndUpdateMatrixDataResponse
   */
  async saveAndUpdateMatrixDataWithOptions(request: SaveAndUpdateMatrixDataRequest, headers: SaveAndUpdateMatrixDataHeaders, runtime: $Util.RuntimeOptions): Promise<SaveAndUpdateMatrixDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.dataJson)) {
      body["dataJson"] = request.dataJson;
    }

    if (!Util.isUnset(request.matrixId)) {
      body["matrixId"] = request.matrixId;
    }

    if (!Util.isUnset(request.token)) {
      body["token"] = request.token;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      action: "SaveAndUpdateMatrixData",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/resources/matrices/upsert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SaveAndUpdateMatrixDataResponse>(await this.execute(params, req, runtime), new SaveAndUpdateMatrixDataResponse({}));
  }

  /**
   * 修改/新增矩阵明细数据
   * 
   * @param request - SaveAndUpdateMatrixDataRequest
   * @returns SaveAndUpdateMatrixDataResponse
   */
  async saveAndUpdateMatrixData(request: SaveAndUpdateMatrixDataRequest): Promise<SaveAndUpdateMatrixDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SaveAndUpdateMatrixDataHeaders({ });
    return await this.saveAndUpdateMatrixDataWithOptions(request, headers, runtime);
  }

  /**
   * 新增表单实例
   * 
   * @param request - SaveFormDataRequest
   * @param headers - SaveFormDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveFormDataResponse
   */
  async saveFormDataWithOptions(request: SaveFormDataRequest, headers: SaveFormDataHeaders, runtime: $Util.RuntimeOptions): Promise<SaveFormDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["appType"] = request.appType;
    }

    if (!Util.isUnset(request.formDataJson)) {
      body["formDataJson"] = request.formDataJson;
    }

    if (!Util.isUnset(request.formUuid)) {
      body["formUuid"] = request.formUuid;
    }

    if (!Util.isUnset(request.language)) {
      body["language"] = request.language;
    }

    if (!Util.isUnset(request.systemToken)) {
      body["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.useAlias)) {
      body["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      action: "SaveFormData",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SaveFormDataResponse>(await this.execute(params, req, runtime), new SaveFormDataResponse({}));
  }

  /**
   * 新增表单实例
   * 
   * @param request - SaveFormDataRequest
   * @returns SaveFormDataResponse
   */
  async saveFormData(request: SaveFormDataRequest): Promise<SaveFormDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SaveFormDataHeaders({ });
    return await this.saveFormDataWithOptions(request, headers, runtime);
  }

  /**
   * 根据条件搜索表单实例 ID 列表
   * 
   * @param request - SearchFormDataIdListRequest
   * @param headers - SearchFormDataIdListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchFormDataIdListResponse
   */
  async searchFormDataIdListWithOptions(appType: string, formUuid: string, request: SearchFormDataIdListRequest, headers: SearchFormDataIdListHeaders, runtime: $Util.RuntimeOptions): Promise<SearchFormDataIdListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createFromTimeGMT)) {
      body["createFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!Util.isUnset(request.createToTimeGMT)) {
      body["createToTimeGMT"] = request.createToTimeGMT;
    }

    if (!Util.isUnset(request.language)) {
      body["language"] = request.language;
    }

    if (!Util.isUnset(request.modifiedFromTimeGMT)) {
      body["modifiedFromTimeGMT"] = request.modifiedFromTimeGMT;
    }

    if (!Util.isUnset(request.modifiedToTimeGMT)) {
      body["modifiedToTimeGMT"] = request.modifiedToTimeGMT;
    }

    if (!Util.isUnset(request.originatorId)) {
      body["originatorId"] = request.originatorId;
    }

    if (!Util.isUnset(request.searchFieldJson)) {
      body["searchFieldJson"] = request.searchFieldJson;
    }

    if (!Util.isUnset(request.systemToken)) {
      body["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.useAlias)) {
      body["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchFormDataIdList",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/instances/ids/${appType}/${formUuid}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SearchFormDataIdListResponse>(await this.execute(params, req, runtime), new SearchFormDataIdListResponse({}));
  }

  /**
   * 根据条件搜索表单实例 ID 列表
   * 
   * @param request - SearchFormDataIdListRequest
   * @returns SearchFormDataIdListResponse
   */
  async searchFormDataIdList(appType: string, formUuid: string, request: SearchFormDataIdListRequest): Promise<SearchFormDataIdListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SearchFormDataIdListHeaders({ });
    return await this.searchFormDataIdListWithOptions(appType, formUuid, request, headers, runtime);
  }

  /**
   * 通过高级检索条件查询表单实例
   * 
   * @param request - SearchFormDataSecondGenerationRequest
   * @param headers - SearchFormDataSecondGenerationHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchFormDataSecondGenerationResponse
   */
  async searchFormDataSecondGenerationWithOptions(request: SearchFormDataSecondGenerationRequest, headers: SearchFormDataSecondGenerationHeaders, runtime: $Util.RuntimeOptions): Promise<SearchFormDataSecondGenerationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["appType"] = request.appType;
    }

    if (!Util.isUnset(request.createFromTimeGMT)) {
      body["createFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!Util.isUnset(request.createToTimeGMT)) {
      body["createToTimeGMT"] = request.createToTimeGMT;
    }

    if (!Util.isUnset(request.formUuid)) {
      body["formUuid"] = request.formUuid;
    }

    if (!Util.isUnset(request.modifiedFromTimeGMT)) {
      body["modifiedFromTimeGMT"] = request.modifiedFromTimeGMT;
    }

    if (!Util.isUnset(request.modifiedToTimeGMT)) {
      body["modifiedToTimeGMT"] = request.modifiedToTimeGMT;
    }

    if (!Util.isUnset(request.orderConfigJson)) {
      body["orderConfigJson"] = request.orderConfigJson;
    }

    if (!Util.isUnset(request.originatorId)) {
      body["originatorId"] = request.originatorId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchCondition)) {
      body["searchCondition"] = request.searchCondition;
    }

    if (!Util.isUnset(request.systemToken)) {
      body["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.useAlias)) {
      body["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      action: "SearchFormDataSecondGeneration",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/instances/advances/queryAll`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SearchFormDataSecondGenerationResponse>(await this.execute(params, req, runtime), new SearchFormDataSecondGenerationResponse({}));
  }

  /**
   * 通过高级检索条件查询表单实例
   * 
   * @param request - SearchFormDataSecondGenerationRequest
   * @returns SearchFormDataSecondGenerationResponse
   */
  async searchFormDataSecondGeneration(request: SearchFormDataSecondGenerationRequest): Promise<SearchFormDataSecondGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SearchFormDataSecondGenerationHeaders({ });
    return await this.searchFormDataSecondGenerationWithOptions(request, headers, runtime);
  }

  /**
   * 根据条件搜索表单实例详情列表
   * 
   * @param request - SearchFormDatasRequest
   * @param headers - SearchFormDatasHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchFormDatasResponse
   */
  async searchFormDatasWithOptions(request: SearchFormDatasRequest, headers: SearchFormDatasHeaders, runtime: $Util.RuntimeOptions): Promise<SearchFormDatasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["appType"] = request.appType;
    }

    if (!Util.isUnset(request.createFromTimeGMT)) {
      body["createFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!Util.isUnset(request.createToTimeGMT)) {
      body["createToTimeGMT"] = request.createToTimeGMT;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["currentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dynamicOrder)) {
      body["dynamicOrder"] = request.dynamicOrder;
    }

    if (!Util.isUnset(request.formUuid)) {
      body["formUuid"] = request.formUuid;
    }

    if (!Util.isUnset(request.language)) {
      body["language"] = request.language;
    }

    if (!Util.isUnset(request.modifiedFromTimeGMT)) {
      body["modifiedFromTimeGMT"] = request.modifiedFromTimeGMT;
    }

    if (!Util.isUnset(request.modifiedToTimeGMT)) {
      body["modifiedToTimeGMT"] = request.modifiedToTimeGMT;
    }

    if (!Util.isUnset(request.originatorId)) {
      body["originatorId"] = request.originatorId;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchFieldJson)) {
      body["searchFieldJson"] = request.searchFieldJson;
    }

    if (!Util.isUnset(request.systemToken)) {
      body["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.useAlias)) {
      body["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      action: "SearchFormDatas",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/instances/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SearchFormDatasResponse>(await this.execute(params, req, runtime), new SearchFormDatasResponse({}));
  }

  /**
   * 根据条件搜索表单实例详情列表
   * 
   * @param request - SearchFormDatasRequest
   * @returns SearchFormDatasResponse
   */
  async searchFormDatas(request: SearchFormDatasRequest): Promise<SearchFormDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SearchFormDatasHeaders({ });
    return await this.searchFormDatasWithOptions(request, headers, runtime);
  }

  /**
   * 发起新的流程实例
   * 
   * @param request - StartInstanceRequest
   * @param headers - StartInstanceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(request: StartInstanceRequest, headers: StartInstanceHeaders, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["appType"] = request.appType;
    }

    if (!Util.isUnset(request.departmentId)) {
      body["departmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.formDataJson)) {
      body["formDataJson"] = request.formDataJson;
    }

    if (!Util.isUnset(request.formUuid)) {
      body["formUuid"] = request.formUuid;
    }

    if (!Util.isUnset(request.language)) {
      body["language"] = request.language;
    }

    if (!Util.isUnset(request.processCode)) {
      body["processCode"] = request.processCode;
    }

    if (!Util.isUnset(request.processData)) {
      body["processData"] = request.processData;
    }

    if (!Util.isUnset(request.systemToken)) {
      body["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.useAlias)) {
      body["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      action: "StartInstance",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/processes/instances/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<StartInstanceResponse>(await this.execute(params, req, runtime), new StartInstanceResponse({}));
  }

  /**
   * 发起新的流程实例
   * 
   * @param request - StartInstanceRequest
   * @returns StartInstanceResponse
   */
  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new StartInstanceHeaders({ });
    return await this.startInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 修改代理信息
   * 
   * @param request - UpdateAgentTaskRequest
   * @param headers - UpdateAgentTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentTaskResponse
   */
  async updateAgentTaskWithOptions(request: UpdateAgentTaskRequest, headers: UpdateAgentTaskHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateAgentTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentRangeType)) {
      query["agentRangeType"] = request.agentRangeType;
    }

    if (!Util.isUnset(request.agentRangeValue)) {
      query["agentRangeValue"] = request.agentRangeValue;
    }

    if (!Util.isUnset(request.agentUserId)) {
      query["agentUserId"] = request.agentUserId;
    }

    if (!Util.isUnset(request.agentUuid)) {
      query["agentUuid"] = request.agentUuid;
    }

    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTimestamp)) {
      query["endTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.needNoticePrincipal)) {
      query["needNoticePrincipal"] = request.needNoticePrincipal;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["startTimestamp"] = request.startTimestamp;
    }

    if (!Util.isUnset(request.token)) {
      query["token"] = request.token;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
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
      action: "UpdateAgentTask",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/resources/agents/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateAgentTaskResponse>(await this.execute(params, req, runtime), new UpdateAgentTaskResponse({}));
  }

  /**
   * 修改代理信息
   * 
   * @param request - UpdateAgentTaskRequest
   * @returns UpdateAgentTaskResponse
   */
  async updateAgentTask(request: UpdateAgentTaskRequest): Promise<UpdateAgentTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateAgentTaskHeaders({ });
    return await this.updateAgentTaskWithOptions(request, headers, runtime);
  }

  /**
   * 更新表单实例
   * 
   * @param request - UpdateFormDataRequest
   * @param headers - UpdateFormDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFormDataResponse
   */
  async updateFormDataWithOptions(request: UpdateFormDataRequest, headers: UpdateFormDataHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateFormDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["appType"] = request.appType;
    }

    if (!Util.isUnset(request.formInstanceId)) {
      body["formInstanceId"] = request.formInstanceId;
    }

    if (!Util.isUnset(request.formUuid)) {
      body["formUuid"] = request.formUuid;
    }

    if (!Util.isUnset(request.language)) {
      body["language"] = request.language;
    }

    if (!Util.isUnset(request.systemToken)) {
      body["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.updateFormDataJson)) {
      body["updateFormDataJson"] = request.updateFormDataJson;
    }

    if (!Util.isUnset(request.useAlias)) {
      body["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.useLatestVersion)) {
      body["useLatestVersion"] = request.useLatestVersion;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      action: "UpdateFormData",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/instances`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "none",
    });
    return $tea.cast<UpdateFormDataResponse>(await this.execute(params, req, runtime), new UpdateFormDataResponse({}));
  }

  /**
   * 更新表单实例
   * 
   * @param request - UpdateFormDataRequest
   * @returns UpdateFormDataResponse
   */
  async updateFormData(request: UpdateFormDataRequest): Promise<UpdateFormDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateFormDataHeaders({ });
    return await this.updateFormDataWithOptions(request, headers, runtime);
  }

  /**
   * 更新宜搭子表单
   * 
   * @param request - UpdateSubTableRequest
   * @param headers - UpdateSubTableHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubTableResponse
   */
  async updateSubTableWithOptions(request: UpdateSubTableRequest, headers: UpdateSubTableHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateSubTableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["appType"] = request.appType;
    }

    if (!Util.isUnset(request.formInstanceId)) {
      body["formInstanceId"] = request.formInstanceId;
    }

    if (!Util.isUnset(request.language)) {
      body["language"] = request.language;
    }

    if (!Util.isUnset(request.noExecuteExpression)) {
      body["noExecuteExpression"] = request.noExecuteExpression;
    }

    if (!Util.isUnset(request.systemToken)) {
      body["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.tableFieldIds)) {
      body["tableFieldIds"] = request.tableFieldIds;
    }

    if (!Util.isUnset(request.updateFormDataJson)) {
      body["updateFormDataJson"] = request.updateFormDataJson;
    }

    if (!Util.isUnset(request.useAlias)) {
      body["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.useLatestFormSchemaVersion)) {
      body["useLatestFormSchemaVersion"] = request.useLatestFormSchemaVersion;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      action: "UpdateSubTable",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/updateSubTable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateSubTableResponse>(await this.execute(params, req, runtime), new UpdateSubTableResponse({}));
  }

  /**
   * 更新宜搭子表单
   * 
   * @param request - UpdateSubTableRequest
   * @returns UpdateSubTableResponse
   */
  async updateSubTable(request: UpdateSubTableRequest): Promise<UpdateSubTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateSubTableHeaders({ });
    return await this.updateSubTableWithOptions(request, headers, runtime);
  }

  /**
   * 通过指定rowId更新宜搭子表单数据
   * 
   * @param request - UpdateSubTableByRowIdRequest
   * @param headers - UpdateSubTableByRowIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubTableByRowIdResponse
   */
  async updateSubTableByRowIdWithOptions(request: UpdateSubTableByRowIdRequest, headers: UpdateSubTableByRowIdHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateSubTableByRowIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["appType"] = request.appType;
    }

    if (!Util.isUnset(request.formInstanceId)) {
      body["formInstanceId"] = request.formInstanceId;
    }

    if (!Util.isUnset(request.formUuid)) {
      body["formUuid"] = request.formUuid;
    }

    if (!Util.isUnset(request.systemToken)) {
      body["systemToken"] = request.systemToken;
    }

    if (!Util.isUnset(request.tableFieldId)) {
      body["tableFieldId"] = request.tableFieldId;
    }

    if (!Util.isUnset(request.updateSubTableDataJson)) {
      body["updateSubTableDataJson"] = request.updateSubTableDataJson;
    }

    if (!Util.isUnset(request.useAlias)) {
      body["useAlias"] = request.useAlias;
    }

    if (!Util.isUnset(request.useLatestFormSchemaVersion)) {
      body["useLatestFormSchemaVersion"] = request.useLatestFormSchemaVersion;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
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
      action: "UpdateSubTableByRowId",
      version: "yida_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/yida/forms/updateSubTableByRowId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateSubTableByRowIdResponse>(await this.execute(params, req, runtime), new UpdateSubTableByRowIdResponse({}));
  }

  /**
   * 通过指定rowId更新宜搭子表单数据
   * 
   * @param request - UpdateSubTableByRowIdRequest
   * @returns UpdateSubTableByRowIdResponse
   */
  async updateSubTableByRowId(request: UpdateSubTableByRowIdRequest): Promise<UpdateSubTableByRowIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateSubTableByRowIdHeaders({ });
    return await this.updateSubTableByRowIdWithOptions(request, headers, runtime);
  }

}
