// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class ToRoleMemberDTOMapValue extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  memberId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  memberType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  memberIdBelongOrgId?: number;
  avatar?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'memberId',
      memberType: 'memberType',
      memberIdBelongOrgId: 'memberIdBelongOrgId',
      avatar: 'avatar',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
      memberIdBelongOrgId: 'number',
      avatar: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRoleMemberHeaders extends $tea.Model {
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

export class AddRoleMemberRequest extends $tea.Model {
  roleMemberList?: AddRoleMemberRequestRoleMemberList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      roleMemberList: 'roleMemberList',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleMemberList: { 'type': 'array', 'itemType': AddRoleMemberRequestRoleMemberList },
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRoleMemberResponseBody extends $tea.Model {
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

export class AddRoleMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddRoleMemberResponseBody;
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
      body: AddRoleMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSwitchHeaders extends $tea.Model {
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

export class ChangeSwitchRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  value?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'boolean',
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSwitchResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSwitchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeSwitchResponseBody;
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
      body: ChangeSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFieldHeaders extends $tea.Model {
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

export class CreateFieldRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * key: id或者name
   *     value: 对应字段值,不同类型的字段传入的value值不同
   *       - text: "TextString"          // 文本字符串
   *       - number: 123                 // 整数/浮点数均可
   *       - singleSelect: "optionIdxxx1" | "optionName1" // 单选选项Id/单选选项名
   *       - date: 1688601600000 ｜ "2023-12-20 03:00"
   *                                     // 支持传时间戳或ISO 8601字符串
   *       - user: [{
   *           uid: \"1234567\"            // 用户uid
   *         }, {
   *           uid: \"2345678\"
   *         }]
   */
  property?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      property: 'property',
      type: 'type',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      property: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFieldResponseBody extends $tea.Model {
  id?: string;
  name?: string;
  /**
   * @example
   * key: id或者name
   *     value: 对应字段值,不同类型的字段传入的value值不同
   *       - text: "TextString"          // 文本字符串
   *       - number: 123                 // 整数/浮点数均可
   *       - singleSelect: "optionIdxxx1" | "optionName1" // 单选选项Id/单选选项名
   *       - date: 1688601600000 ｜ "2023-12-20 03:00"
   *                                     // 支持传时间戳或ISO 8601字符串
   *       - user: [{
   *           uid: \"1234567\"            // 用户uid
   *         }, {
   *           uid: \"2345678\"
   *         }]
   */
  property?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      property: 'property',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      property: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFieldResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFieldResponseBody;
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
      body: CreateFieldResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleHeaders extends $tea.Model {
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

export class CreateRoleRequest extends $tea.Model {
  flowType?: string;
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roleType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subRoles?: CreateRoleRequestSubRoles[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      flowType: 'flowType',
      id: 'id',
      name: 'name',
      roleType: 'roleType',
      subRoles: 'subRoles',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowType: 'string',
      id: 'number',
      name: 'string',
      roleType: 'string',
      subRoles: { 'type': 'array', 'itemType': CreateRoleRequestSubRoles },
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseBody extends $tea.Model {
  flowType?: string;
  id?: number;
  name?: string;
  roleType?: string;
  subRoles?: CreateRoleResponseBodySubRoles[];
  static names(): { [key: string]: string } {
    return {
      flowType: 'flowType',
      id: 'id',
      name: 'name',
      roleType: 'roleType',
      subRoles: 'subRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowType: 'string',
      id: 'number',
      name: 'string',
      roleType: 'string',
      subRoles: { 'type': 'array', 'itemType': CreateRoleResponseBodySubRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRoleResponseBody;
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
      body: CreateRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetHeaders extends $tea.Model {
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

export class CreateSheetRequest extends $tea.Model {
  fields?: CreateSheetRequestFields[];
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      name: 'name',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': CreateSheetRequestFields },
      name: 'string',
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetResponseBody extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSheetResponseBody;
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
      body: CreateSheetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFieldHeaders extends $tea.Model {
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

export class DeleteFieldRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFieldResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
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

export class DeleteFieldResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFieldResponseBody;
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
      body: DeleteFieldResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordsHeaders extends $tea.Model {
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

export class DeleteRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  recordIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      recordIds: 'recordIds',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordIds: { 'type': 'array', 'itemType': 'string' },
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
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

export class DeleteRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRecordsResponseBody;
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
      body: DeleteRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoleHeaders extends $tea.Model {
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

export class DeleteRoleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  roleId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'roleId',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoleResponseBody extends $tea.Model {
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

export class DeleteRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRoleResponseBody;
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
      body: DeleteRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSheetHeaders extends $tea.Model {
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

export class DeleteSheetRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSheetResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
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

export class DeleteSheetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSheetResponseBody;
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
      body: DeleteSheetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllFieldsHeaders extends $tea.Model {
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

export class GetAllFieldsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllFieldsResponseBody extends $tea.Model {
  value?: GetAllFieldsResponseBodyValue[];
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': GetAllFieldsResponseBodyValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllFieldsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAllFieldsResponseBody;
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
      body: GetAllFieldsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllSheetsHeaders extends $tea.Model {
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

export class GetAllSheetsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllSheetsResponseBody extends $tea.Model {
  value?: GetAllSheetsResponseBodyValue[];
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': GetAllSheetsResponseBodyValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllSheetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAllSheetsResponseBody;
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
      body: GetAllSheetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordHeaders extends $tea.Model {
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

export class GetRecordRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResponseBody extends $tea.Model {
  createdBy?: GetRecordResponseBodyCreatedBy;
  createdTime?: number;
  fields?: { [key: string]: any };
  id?: string;
  lastModifiedBy?: GetRecordResponseBodyLastModifiedBy;
  lastModifiedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'createdBy',
      createdTime: 'createdTime',
      fields: 'fields',
      id: 'id',
      lastModifiedBy: 'lastModifiedBy',
      lastModifiedTime: 'lastModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: GetRecordResponseBodyCreatedBy,
      createdTime: 'number',
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      lastModifiedBy: GetRecordResponseBodyLastModifiedBy,
      lastModifiedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRecordResponseBody;
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
      body: GetRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsHeaders extends $tea.Model {
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

export class GetRecordsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * nextToken
   */
  nextToken?: string;
  records?: GetRecordsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextToken: 'string',
      records: { 'type': 'array', 'itemType': GetRecordsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRecordsResponseBody;
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
      body: GetRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSheetHeaders extends $tea.Model {
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

export class GetSheetRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSheetResponseBody extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSheetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSheetResponseBody;
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
      body: GetSheetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchHeaders extends $tea.Model {
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

export class GetSwitchRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSwitchResponseBody;
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
      body: GetSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDocRolesHeaders extends $tea.Model {
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

export class GetUserDocRolesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'operatorId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDocRolesResponseBody extends $tea.Model {
  enabled?: boolean;
  roles?: GetUserDocRolesResponseBodyRoles[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      roles: { 'type': 'array', 'itemType': GetUserDocRolesResponseBodyRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDocRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserDocRolesResponseBody;
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
      body: GetUserDocRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRecordsHeaders extends $tea.Model {
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

export class InsertRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  records?: InsertRecordsRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'records',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': InsertRecordsRequestRecords },
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRecordsResponseBody extends $tea.Model {
  value?: InsertRecordsResponseBodyValue[];
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': InsertRecordsResponseBodyValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertRecordsResponseBody;
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
      body: InsertRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsHeaders extends $tea.Model {
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

export class ListRecordsRequest extends $tea.Model {
  filter?: ListRecordsRequestFilter;
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: ListRecordsRequestFilter,
      maxResults: 'number',
      nextToken: 'string',
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * nextToken
   */
  nextToken?: string;
  records?: ListRecordsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextToken: 'string',
      records: { 'type': 'array', 'itemType': ListRecordsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRecordsResponseBody;
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
      body: ListRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepareSetRichTextHeaders extends $tea.Model {
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

export class PrepareSetRichTextRequest extends $tea.Model {
  markdown?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      markdown: 'markdown',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markdown: 'string',
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepareSetRichTextResponseBody extends $tea.Model {
  markdown?: string;
  uploadInfos?: PrepareSetRichTextResponseBodyUploadInfos[];
  static names(): { [key: string]: string } {
    return {
      markdown: 'markdown',
      uploadInfos: 'uploadInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markdown: 'string',
      uploadInfos: { 'type': 'array', 'itemType': PrepareSetRichTextResponseBodyUploadInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepareSetRichTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PrepareSetRichTextResponseBody;
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
      body: PrepareSetRichTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocAllRolesHeaders extends $tea.Model {
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

export class QueryDocAllRolesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocAllRolesResponseBody extends $tea.Model {
  allRoles?: QueryDocAllRolesResponseBodyAllRoles[];
  defaultRole?: QueryDocAllRolesResponseBodyDefaultRole;
  enabled?: boolean;
  systemRoles?: number[];
  static names(): { [key: string]: string } {
    return {
      allRoles: 'allRoles',
      defaultRole: 'defaultRole',
      enabled: 'enabled',
      systemRoles: 'systemRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allRoles: { 'type': 'array', 'itemType': QueryDocAllRolesResponseBodyAllRoles },
      defaultRole: QueryDocAllRolesResponseBodyDefaultRole,
      enabled: 'boolean',
      systemRoles: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocAllRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDocAllRolesResponseBody;
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
      body: QueryDocAllRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildRoleMembersHeaders extends $tea.Model {
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

export class RebuildRoleMembersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  defaultRoleDTO?: RebuildRoleMembersRequestDefaultRoleDTO;
  /**
   * @remarks
   * This parameter is required.
   */
  toRoleMemberDTOMap?: { [key: string]: ToRoleMemberDTOMapValue[] };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoleDTO: 'defaultRoleDTO',
      toRoleMemberDTOMap: 'toRoleMemberDTOMap',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoleDTO: RebuildRoleMembersRequestDefaultRoleDTO,
      toRoleMemberDTOMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ToRoleMemberDTOMapValue } },
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildRoleMembersResponseBody extends $tea.Model {
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

export class RebuildRoleMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebuildRoleMembersResponseBody;
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
      body: RebuildRoleMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFieldHeaders extends $tea.Model {
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

export class UpdateFieldRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * key: id或者name
   *     value: 对应字段值,不同类型的字段传入的value值不同
   *       - text: "TextString"          // 文本字符串
   *       - number: 123                 // 整数/浮点数均可
   *       - singleSelect: "optionIdxxx1" | "optionName1" // 单选选项Id/单选选项名
   *       - date: 1688601600000 ｜ "2023-12-20 03:00"
   *                                     // 支持传时间戳或ISO 8601字符串
   *       - user: [{
   *           uid: \"1234567\"            // 用户uid
   *         }, {
   *           uid: \"2345678\"
   *         }]
   */
  property?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      property: 'property',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      property: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFieldResponseBody extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFieldResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFieldResponseBody;
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
      body: UpdateFieldResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordsHeaders extends $tea.Model {
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

export class UpdateRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  records?: UpdateRecordsRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'records',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': UpdateRecordsRequestRecords },
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordsResponseBody extends $tea.Model {
  value?: UpdateRecordsResponseBodyValue[];
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': UpdateRecordsResponseBodyValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRecordsResponseBody;
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
      body: UpdateRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleHeaders extends $tea.Model {
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

export class UpdateRoleRequest extends $tea.Model {
  flowType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roleType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subRoles?: UpdateRoleRequestSubRoles[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      flowType: 'flowType',
      id: 'id',
      name: 'name',
      roleType: 'roleType',
      subRoles: 'subRoles',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowType: 'string',
      id: 'number',
      name: 'string',
      roleType: 'string',
      subRoles: { 'type': 'array', 'itemType': UpdateRoleRequestSubRoles },
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponseBody extends $tea.Model {
  flowType?: string;
  id?: number;
  name?: string;
  roleType?: string;
  subRoles?: UpdateRoleResponseBodySubRoles[];
  static names(): { [key: string]: string } {
    return {
      flowType: 'flowType',
      id: 'id',
      name: 'name',
      roleType: 'roleType',
      subRoles: 'subRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowType: 'string',
      id: 'number',
      name: 'string',
      roleType: 'string',
      subRoles: { 'type': 'array', 'itemType': UpdateRoleResponseBodySubRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRoleResponseBody;
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
      body: UpdateRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSheetHeaders extends $tea.Model {
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

export class UpdateSheetRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSheetResponseBody extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSheetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSheetResponseBody;
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
      body: UpdateSheetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRoleMemberRequestRoleMemberList extends $tea.Model {
  memberId?: string;
  memberIdBelongOrgId?: number;
  memberType?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'memberId',
      memberIdBelongOrgId: 'memberIdBelongOrgId',
      memberType: 'memberType',
      roleId: 'roleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberIdBelongOrgId: 'number',
      memberType: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleRequestSubRoles extends $tea.Model {
  authLevel?: number;
  bizType?: number;
  config?: string;
  gmtCreate?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      authLevel: 'authLevel',
      bizType: 'bizType',
      config: 'config',
      gmtCreate: 'gmtCreate',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authLevel: 'number',
      bizType: 'number',
      config: 'string',
      gmtCreate: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseBodySubRoles extends $tea.Model {
  authLevel?: number;
  bizType?: number;
  config?: string;
  gmtCreate?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      authLevel: 'authLevel',
      bizType: 'bizType',
      config: 'config',
      gmtCreate: 'gmtCreate',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authLevel: 'number',
      bizType: 'number',
      config: 'string',
      gmtCreate: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetRequestFields extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * key: id或者name
   *     value: 对应字段值,不同类型的字段传入的value值不同
   *       - text: "TextString"          // 文本字符串
   *       - number: 123                 // 整数/浮点数均可
   *       - singleSelect: "optionIdxxx1" | "optionName1" // 单选选项Id/单选选项名
   *       - date: 1688601600000 ｜ "2023-12-20 03:00"
   *                                     // 支持传时间戳或ISO 8601字符串
   *       - user: [{
   *           uid: \"1234567\"            // 用户uid
   *         }, {
   *           uid: \"2345678\"
   *         }]
   */
  property?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      property: 'property',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      property: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllFieldsResponseBodyValue extends $tea.Model {
  id?: string;
  name?: string;
  /**
   * @example
   * key: id或者name
   *     value: 对应字段值,不同类型的字段传入的value值不同
   *       - text: "TextString"          // 文本字符串
   *       - number: 123                 // 整数/浮点数均可
   *       - singleSelect: "optionIdxxx1" | "optionName1" // 单选选项Id/单选选项名
   *       - date: 1688601600000 ｜ "2023-12-20 03:00"
   *                                     // 支持传时间戳或ISO 8601字符串
   *       - user: [{
   *           uid: \"1234567\"            // 用户uid
   *         }, {
   *           uid: \"2345678\"
   *         }]
   */
  property?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      property: 'property',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      property: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllSheetsResponseBodyValue extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResponseBodyCreatedBy extends $tea.Model {
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResponseBodyLastModifiedBy extends $tea.Model {
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsResponseBodyRecordsCreatedBy extends $tea.Model {
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsResponseBodyRecordsLastModifiedBy extends $tea.Model {
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsResponseBodyRecords extends $tea.Model {
  createdBy?: GetRecordsResponseBodyRecordsCreatedBy;
  createdTime?: number;
  fields?: { [key: string]: any };
  id?: string;
  lastModifiedBy?: GetRecordsResponseBodyRecordsLastModifiedBy;
  lastModifiedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'createdBy',
      createdTime: 'createdTime',
      fields: 'fields',
      id: 'id',
      lastModifiedBy: 'lastModifiedBy',
      lastModifiedTime: 'lastModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: GetRecordsResponseBodyRecordsCreatedBy,
      createdTime: 'number',
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      lastModifiedBy: GetRecordsResponseBodyRecordsLastModifiedBy,
      lastModifiedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDocRolesResponseBodyRolesSubRoles extends $tea.Model {
  authLevel?: number;
  bizType?: number;
  config?: string;
  gmtCreate?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      authLevel: 'authLevel',
      bizType: 'bizType',
      config: 'config',
      gmtCreate: 'gmtCreate',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authLevel: 'number',
      bizType: 'number',
      config: 'string',
      gmtCreate: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDocRolesResponseBodyRoles extends $tea.Model {
  flowType?: string;
  id?: number;
  name?: string;
  roleType?: string;
  subRoles?: GetUserDocRolesResponseBodyRolesSubRoles[];
  static names(): { [key: string]: string } {
    return {
      flowType: 'flowType',
      id: 'id',
      name: 'name',
      roleType: 'roleType',
      subRoles: 'subRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowType: 'string',
      id: 'number',
      name: 'string',
      roleType: 'string',
      subRoles: { 'type': 'array', 'itemType': GetUserDocRolesResponseBodyRolesSubRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRecordsRequestRecords extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRecordsResponseBodyValue extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsRequestFilterConditions extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  field?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operator?: string;
  value?: any[];
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsRequestFilter extends $tea.Model {
  combination?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  conditions?: ListRecordsRequestFilterConditions[];
  static names(): { [key: string]: string } {
    return {
      combination: 'combination',
      conditions: 'conditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combination: 'string',
      conditions: { 'type': 'array', 'itemType': ListRecordsRequestFilterConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsResponseBodyRecordsCreatedBy extends $tea.Model {
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsResponseBodyRecordsLastModifiedBy extends $tea.Model {
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsResponseBodyRecords extends $tea.Model {
  createdBy?: ListRecordsResponseBodyRecordsCreatedBy;
  createdTime?: number;
  fields?: { [key: string]: any };
  id?: string;
  lastModifiedBy?: ListRecordsResponseBodyRecordsLastModifiedBy;
  lastModifiedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'createdBy',
      createdTime: 'createdTime',
      fields: 'fields',
      id: 'id',
      lastModifiedBy: 'lastModifiedBy',
      lastModifiedTime: 'lastModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: ListRecordsResponseBodyRecordsCreatedBy,
      createdTime: 'number',
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      lastModifiedBy: ListRecordsResponseBodyRecordsLastModifiedBy,
      lastModifiedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepareSetRichTextResponseBodyUploadInfos extends $tea.Model {
  resourceId?: string;
  resourceUrl?: string;
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceUrl: 'resourceUrl',
      uploadUrl: 'uploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceUrl: 'string',
      uploadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocAllRolesResponseBodyAllRolesMembers extends $tea.Model {
  avatar?: string;
  memberId?: string;
  memberIdBelongOrgId?: number;
  memberType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      memberId: 'memberId',
      memberIdBelongOrgId: 'memberIdBelongOrgId',
      memberType: 'memberType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      memberId: 'string',
      memberIdBelongOrgId: 'number',
      memberType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocAllRolesResponseBodyAllRolesRoleSubRoles extends $tea.Model {
  authLevel?: number;
  bizType?: number;
  config?: string;
  gmtCreate?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      authLevel: 'authLevel',
      bizType: 'bizType',
      config: 'config',
      gmtCreate: 'gmtCreate',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authLevel: 'number',
      bizType: 'number',
      config: 'string',
      gmtCreate: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocAllRolesResponseBodyAllRolesRole extends $tea.Model {
  flowType?: string;
  id?: number;
  name?: string;
  roleType?: string;
  subRoles?: QueryDocAllRolesResponseBodyAllRolesRoleSubRoles[];
  static names(): { [key: string]: string } {
    return {
      flowType: 'flowType',
      id: 'id',
      name: 'name',
      roleType: 'roleType',
      subRoles: 'subRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowType: 'string',
      id: 'number',
      name: 'string',
      roleType: 'string',
      subRoles: { 'type': 'array', 'itemType': QueryDocAllRolesResponseBodyAllRolesRoleSubRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocAllRolesResponseBodyAllRoles extends $tea.Model {
  members?: QueryDocAllRolesResponseBodyAllRolesMembers[];
  role?: QueryDocAllRolesResponseBodyAllRolesRole;
  static names(): { [key: string]: string } {
    return {
      members: 'members',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': QueryDocAllRolesResponseBodyAllRolesMembers },
      role: QueryDocAllRolesResponseBodyAllRolesRole,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocAllRolesResponseBodyDefaultRole extends $tea.Model {
  mode?: number;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      roleId: 'roleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'number',
      roleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildRoleMembersRequestDefaultRoleDTO extends $tea.Model {
  mode?: number;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      roleId: 'roleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'number',
      roleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordsRequestRecords extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordsResponseBodyValue extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleRequestSubRoles extends $tea.Model {
  authLevel?: number;
  bizType?: number;
  config?: string;
  gmtCreate?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      authLevel: 'authLevel',
      bizType: 'bizType',
      config: 'config',
      gmtCreate: 'gmtCreate',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authLevel: 'number',
      bizType: 'number',
      config: 'string',
      gmtCreate: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponseBodySubRoles extends $tea.Model {
  authLevel?: number;
  bizType?: number;
  config?: string;
  gmtCreate?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      authLevel: 'authLevel',
      bizType: 'bizType',
      config: 'config',
      gmtCreate: 'gmtCreate',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authLevel: 'number',
      bizType: 'number',
      config: 'string',
      gmtCreate: 'number',
      id: 'string',
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
   * 添加角色成员
   * 
   * @param request - AddRoleMemberRequest
   * @param headers - AddRoleMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRoleMemberResponse
   */
  async addRoleMemberWithOptions(baseId: string, request: AddRoleMemberRequest, headers: AddRoleMemberHeaders, runtime: $Util.RuntimeOptions): Promise<AddRoleMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleMemberList)) {
      body["roleMemberList"] = request.roleMemberList;
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
      action: "AddRoleMember",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/auth/role/member/${baseId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AddRoleMemberResponse>(await this.execute(params, req, runtime), new AddRoleMemberResponse({}));
  }

  /**
   * 添加角色成员
   * 
   * @param request - AddRoleMemberRequest
   * @returns AddRoleMemberResponse
   */
  async addRoleMember(baseId: string, request: AddRoleMemberRequest): Promise<AddRoleMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddRoleMemberHeaders({ });
    return await this.addRoleMemberWithOptions(baseId, request, headers, runtime);
  }

  /**
   * 修改高级权限设置开关
   * 
   * @param request - ChangeSwitchRequest
   * @param headers - ChangeSwitchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeSwitchResponse
   */
  async changeSwitchWithOptions(baseId: string, request: ChangeSwitchRequest, headers: ChangeSwitchHeaders, runtime: $Util.RuntimeOptions): Promise<ChangeSwitchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.value)) {
      body["value"] = request.value;
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
      action: "ChangeSwitch",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/auth/${baseId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ChangeSwitchResponse>(await this.execute(params, req, runtime), new ChangeSwitchResponse({}));
  }

  /**
   * 修改高级权限设置开关
   * 
   * @param request - ChangeSwitchRequest
   * @returns ChangeSwitchResponse
   */
  async changeSwitch(baseId: string, request: ChangeSwitchRequest): Promise<ChangeSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeSwitchHeaders({ });
    return await this.changeSwitchWithOptions(baseId, request, headers, runtime);
  }

  /**
   * 新增数据表字段
   * 
   * @param request - CreateFieldRequest
   * @param headers - CreateFieldHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFieldResponse
   */
  async createFieldWithOptions(baseId: string, sheetIdOrName: string, request: CreateFieldRequest, headers: CreateFieldHeaders, runtime: $Util.RuntimeOptions): Promise<CreateFieldResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.property)) {
      body["property"] = request.property;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
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
      action: "CreateField",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}/fields`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateFieldResponse>(await this.execute(params, req, runtime), new CreateFieldResponse({}));
  }

  /**
   * 新增数据表字段
   * 
   * @param request - CreateFieldRequest
   * @returns CreateFieldResponse
   */
  async createField(baseId: string, sheetIdOrName: string, request: CreateFieldRequest): Promise<CreateFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateFieldHeaders({ });
    return await this.createFieldWithOptions(baseId, sheetIdOrName, request, headers, runtime);
  }

  /**
   * 创建角色
   * 
   * @param request - CreateRoleRequest
   * @param headers - CreateRoleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoleResponse
   */
  async createRoleWithOptions(baseId: string, request: CreateRoleRequest, headers: CreateRoleHeaders, runtime: $Util.RuntimeOptions): Promise<CreateRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.flowType)) {
      body["flowType"] = request.flowType;
    }

    if (!Util.isUnset(request.id)) {
      body["id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.roleType)) {
      body["roleType"] = request.roleType;
    }

    if (!Util.isUnset(request.subRoles)) {
      body["subRoles"] = request.subRoles;
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
      action: "CreateRole",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/auth/role/${baseId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateRoleResponse>(await this.execute(params, req, runtime), new CreateRoleResponse({}));
  }

  /**
   * 创建角色
   * 
   * @param request - CreateRoleRequest
   * @returns CreateRoleResponse
   */
  async createRole(baseId: string, request: CreateRoleRequest): Promise<CreateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateRoleHeaders({ });
    return await this.createRoleWithOptions(baseId, request, headers, runtime);
  }

  /**
   * 创建数据表
   * 
   * @param request - CreateSheetRequest
   * @param headers - CreateSheetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSheetResponse
   */
  async createSheetWithOptions(baseId: string, request: CreateSheetRequest, headers: CreateSheetHeaders, runtime: $Util.RuntimeOptions): Promise<CreateSheetResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
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
      action: "CreateSheet",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateSheetResponse>(await this.execute(params, req, runtime), new CreateSheetResponse({}));
  }

  /**
   * 创建数据表
   * 
   * @param request - CreateSheetRequest
   * @returns CreateSheetResponse
   */
  async createSheet(baseId: string, request: CreateSheetRequest): Promise<CreateSheetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateSheetHeaders({ });
    return await this.createSheetWithOptions(baseId, request, headers, runtime);
  }

  /**
   * 删除数据表字段
   * 
   * @param request - DeleteFieldRequest
   * @param headers - DeleteFieldHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFieldResponse
   */
  async deleteFieldWithOptions(baseId: string, sheetIdOrName: string, fieldIdOrName: string, request: DeleteFieldRequest, headers: DeleteFieldHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteFieldResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
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
      action: "DeleteField",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}/fields/${fieldIdOrName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteFieldResponse>(await this.execute(params, req, runtime), new DeleteFieldResponse({}));
  }

  /**
   * 删除数据表字段
   * 
   * @param request - DeleteFieldRequest
   * @returns DeleteFieldResponse
   */
  async deleteField(baseId: string, sheetIdOrName: string, fieldIdOrName: string, request: DeleteFieldRequest): Promise<DeleteFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteFieldHeaders({ });
    return await this.deleteFieldWithOptions(baseId, sheetIdOrName, fieldIdOrName, request, headers, runtime);
  }

  /**
   * 删除数据表多行记录
   * 
   * @param request - DeleteRecordsRequest
   * @param headers - DeleteRecordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecordsResponse
   */
  async deleteRecordsWithOptions(baseId: string, sheetIdOrName: string, request: DeleteRecordsRequest, headers: DeleteRecordsHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteRecordsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.recordIds)) {
      body["recordIds"] = request.recordIds;
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
      action: "DeleteRecords",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}/records/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteRecordsResponse>(await this.execute(params, req, runtime), new DeleteRecordsResponse({}));
  }

  /**
   * 删除数据表多行记录
   * 
   * @param request - DeleteRecordsRequest
   * @returns DeleteRecordsResponse
   */
  async deleteRecords(baseId: string, sheetIdOrName: string, request: DeleteRecordsRequest): Promise<DeleteRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteRecordsHeaders({ });
    return await this.deleteRecordsWithOptions(baseId, sheetIdOrName, request, headers, runtime);
  }

  /**
   * 删除角色
   * 
   * @param request - DeleteRoleRequest
   * @param headers - DeleteRoleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoleResponse
   */
  async deleteRoleWithOptions(baseId: string, request: DeleteRoleRequest, headers: DeleteRoleHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleId)) {
      body["roleId"] = request.roleId;
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
      action: "DeleteRole",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/auth/role/${baseId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteRoleResponse>(await this.execute(params, req, runtime), new DeleteRoleResponse({}));
  }

  /**
   * 删除角色
   * 
   * @param request - DeleteRoleRequest
   * @returns DeleteRoleResponse
   */
  async deleteRole(baseId: string, request: DeleteRoleRequest): Promise<DeleteRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteRoleHeaders({ });
    return await this.deleteRoleWithOptions(baseId, request, headers, runtime);
  }

  /**
   * 删除数据表
   * 
   * @param request - DeleteSheetRequest
   * @param headers - DeleteSheetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSheetResponse
   */
  async deleteSheetWithOptions(baseId: string, sheetIdOrName: string, request: DeleteSheetRequest, headers: DeleteSheetHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteSheetResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
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
      action: "DeleteSheet",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteSheetResponse>(await this.execute(params, req, runtime), new DeleteSheetResponse({}));
  }

  /**
   * 删除数据表
   * 
   * @param request - DeleteSheetRequest
   * @returns DeleteSheetResponse
   */
  async deleteSheet(baseId: string, sheetIdOrName: string, request: DeleteSheetRequest): Promise<DeleteSheetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteSheetHeaders({ });
    return await this.deleteSheetWithOptions(baseId, sheetIdOrName, request, headers, runtime);
  }

  /**
   * 获取所有字段
   * 
   * @param request - GetAllFieldsRequest
   * @param headers - GetAllFieldsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAllFieldsResponse
   */
  async getAllFieldsWithOptions(baseId: string, sheetIdOrName: string, request: GetAllFieldsRequest, headers: GetAllFieldsHeaders, runtime: $Util.RuntimeOptions): Promise<GetAllFieldsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
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
      action: "GetAllFields",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}/fields`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetAllFieldsResponse>(await this.execute(params, req, runtime), new GetAllFieldsResponse({}));
  }

  /**
   * 获取所有字段
   * 
   * @param request - GetAllFieldsRequest
   * @returns GetAllFieldsResponse
   */
  async getAllFields(baseId: string, sheetIdOrName: string, request: GetAllFieldsRequest): Promise<GetAllFieldsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAllFieldsHeaders({ });
    return await this.getAllFieldsWithOptions(baseId, sheetIdOrName, request, headers, runtime);
  }

  /**
   * 获取所有数据表
   * 
   * @param request - GetAllSheetsRequest
   * @param headers - GetAllSheetsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAllSheetsResponse
   */
  async getAllSheetsWithOptions(baseId: string, request: GetAllSheetsRequest, headers: GetAllSheetsHeaders, runtime: $Util.RuntimeOptions): Promise<GetAllSheetsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
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
      action: "GetAllSheets",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetAllSheetsResponse>(await this.execute(params, req, runtime), new GetAllSheetsResponse({}));
  }

  /**
   * 获取所有数据表
   * 
   * @param request - GetAllSheetsRequest
   * @returns GetAllSheetsResponse
   */
  async getAllSheets(baseId: string, request: GetAllSheetsRequest): Promise<GetAllSheetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAllSheetsHeaders({ });
    return await this.getAllSheetsWithOptions(baseId, request, headers, runtime);
  }

  /**
   * 获取记录
   * 
   * @param request - GetRecordRequest
   * @param headers - GetRecordHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecordResponse
   */
  async getRecordWithOptions(baseId: string, sheetIdOrName: string, recordId: string, request: GetRecordRequest, headers: GetRecordHeaders, runtime: $Util.RuntimeOptions): Promise<GetRecordResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
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
      action: "GetRecord",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}/records/${recordId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetRecordResponse>(await this.execute(params, req, runtime), new GetRecordResponse({}));
  }

  /**
   * 获取记录
   * 
   * @param request - GetRecordRequest
   * @returns GetRecordResponse
   */
  async getRecord(baseId: string, sheetIdOrName: string, recordId: string, request: GetRecordRequest): Promise<GetRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetRecordHeaders({ });
    return await this.getRecordWithOptions(baseId, sheetIdOrName, recordId, request, headers, runtime);
  }

  /**
   * 获取多行记录
   * 
   * @param request - GetRecordsRequest
   * @param headers - GetRecordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecordsResponse
   */
  async getRecordsWithOptions(baseId: string, sheetIdOrName: string, request: GetRecordsRequest, headers: GetRecordsHeaders, runtime: $Util.RuntimeOptions): Promise<GetRecordsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
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
      action: "GetRecords",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}/records`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetRecordsResponse>(await this.execute(params, req, runtime), new GetRecordsResponse({}));
  }

  /**
   * 获取多行记录
   * 
   * @param request - GetRecordsRequest
   * @returns GetRecordsResponse
   */
  async getRecords(baseId: string, sheetIdOrName: string, request: GetRecordsRequest): Promise<GetRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetRecordsHeaders({ });
    return await this.getRecordsWithOptions(baseId, sheetIdOrName, request, headers, runtime);
  }

  /**
   * 获取数据表
   * 
   * @param request - GetSheetRequest
   * @param headers - GetSheetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSheetResponse
   */
  async getSheetWithOptions(baseId: string, sheetIdOrName: string, request: GetSheetRequest, headers: GetSheetHeaders, runtime: $Util.RuntimeOptions): Promise<GetSheetResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
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
      action: "GetSheet",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetSheetResponse>(await this.execute(params, req, runtime), new GetSheetResponse({}));
  }

  /**
   * 获取数据表
   * 
   * @param request - GetSheetRequest
   * @returns GetSheetResponse
   */
  async getSheet(baseId: string, sheetIdOrName: string, request: GetSheetRequest): Promise<GetSheetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetSheetHeaders({ });
    return await this.getSheetWithOptions(baseId, sheetIdOrName, request, headers, runtime);
  }

  /**
   * 获取高级权限设置开关
   * 
   * @param request - GetSwitchRequest
   * @param headers - GetSwitchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSwitchResponse
   */
  async getSwitchWithOptions(baseId: string, request: GetSwitchRequest, headers: GetSwitchHeaders, runtime: $Util.RuntimeOptions): Promise<GetSwitchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
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
      action: "GetSwitch",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/auth/${baseId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetSwitchResponse>(await this.execute(params, req, runtime), new GetSwitchResponse({}));
  }

  /**
   * 获取高级权限设置开关
   * 
   * @param request - GetSwitchRequest
   * @returns GetSwitchResponse
   */
  async getSwitch(baseId: string, request: GetSwitchRequest): Promise<GetSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetSwitchHeaders({ });
    return await this.getSwitchWithOptions(baseId, request, headers, runtime);
  }

  /**
   * 获取指定用户的高级权限角色配置列表
   * 
   * @param request - GetUserDocRolesRequest
   * @param headers - GetUserDocRolesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserDocRolesResponse
   */
  async getUserDocRolesWithOptions(baseId: string, request: GetUserDocRolesRequest, headers: GetUserDocRolesHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserDocRolesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.unionId)) {
      query["unionId"] = request.unionId;
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
      action: "GetUserDocRoles",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/auth/role/${baseId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetUserDocRolesResponse>(await this.execute(params, req, runtime), new GetUserDocRolesResponse({}));
  }

  /**
   * 获取指定用户的高级权限角色配置列表
   * 
   * @param request - GetUserDocRolesRequest
   * @returns GetUserDocRolesResponse
   */
  async getUserDocRoles(baseId: string, request: GetUserDocRolesRequest): Promise<GetUserDocRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserDocRolesHeaders({ });
    return await this.getUserDocRolesWithOptions(baseId, request, headers, runtime);
  }

  /**
   * 新增记录
   * 
   * @param request - InsertRecordsRequest
   * @param headers - InsertRecordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertRecordsResponse
   */
  async insertRecordsWithOptions(baseId: string, sheetIdOrName: string, request: InsertRecordsRequest, headers: InsertRecordsHeaders, runtime: $Util.RuntimeOptions): Promise<InsertRecordsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.records)) {
      body["records"] = request.records;
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
      action: "InsertRecords",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}/records`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<InsertRecordsResponse>(await this.execute(params, req, runtime), new InsertRecordsResponse({}));
  }

  /**
   * 新增记录
   * 
   * @param request - InsertRecordsRequest
   * @returns InsertRecordsResponse
   */
  async insertRecords(baseId: string, sheetIdOrName: string, request: InsertRecordsRequest): Promise<InsertRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InsertRecordsHeaders({ });
    return await this.insertRecordsWithOptions(baseId, sheetIdOrName, request, headers, runtime);
  }

  /**
   * 列出多行记录
   * 
   * @param request - ListRecordsRequest
   * @param headers - ListRecordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecordsResponse
   */
  async listRecordsWithOptions(baseId: string, sheetIdOrName: string, request: ListRecordsRequest, headers: ListRecordsHeaders, runtime: $Util.RuntimeOptions): Promise<ListRecordsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      body["filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["nextToken"] = request.nextToken;
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
      action: "ListRecords",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}/records/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListRecordsResponse>(await this.execute(params, req, runtime), new ListRecordsResponse({}));
  }

  /**
   * 列出多行记录
   * 
   * @param request - ListRecordsRequest
   * @returns ListRecordsResponse
   */
  async listRecords(baseId: string, sheetIdOrName: string, request: ListRecordsRequest): Promise<ListRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListRecordsHeaders({ });
    return await this.listRecordsWithOptions(baseId, sheetIdOrName, request, headers, runtime);
  }

  /**
   * 富文本值预处理
   * 
   * @param request - PrepareSetRichTextRequest
   * @param headers - PrepareSetRichTextHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PrepareSetRichTextResponse
   */
  async prepareSetRichTextWithOptions(baseId: string, request: PrepareSetRichTextRequest, headers: PrepareSetRichTextHeaders, runtime: $Util.RuntimeOptions): Promise<PrepareSetRichTextResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.markdown)) {
      body["markdown"] = request.markdown;
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
      action: "PrepareSetRichText",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/prepareSetRichText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<PrepareSetRichTextResponse>(await this.execute(params, req, runtime), new PrepareSetRichTextResponse({}));
  }

  /**
   * 富文本值预处理
   * 
   * @param request - PrepareSetRichTextRequest
   * @returns PrepareSetRichTextResponse
   */
  async prepareSetRichText(baseId: string, request: PrepareSetRichTextRequest): Promise<PrepareSetRichTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PrepareSetRichTextHeaders({ });
    return await this.prepareSetRichTextWithOptions(baseId, request, headers, runtime);
  }

  /**
   * 查询文档所有角色和角色成员
   * 
   * @param request - QueryDocAllRolesRequest
   * @param headers - QueryDocAllRolesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDocAllRolesResponse
   */
  async queryDocAllRolesWithOptions(baseId: string, request: QueryDocAllRolesRequest, headers: QueryDocAllRolesHeaders, runtime: $Util.RuntimeOptions): Promise<QueryDocAllRolesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
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
      action: "QueryDocAllRoles",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/auth/role/member/${baseId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryDocAllRolesResponse>(await this.execute(params, req, runtime), new QueryDocAllRolesResponse({}));
  }

  /**
   * 查询文档所有角色和角色成员
   * 
   * @param request - QueryDocAllRolesRequest
   * @returns QueryDocAllRolesResponse
   */
  async queryDocAllRoles(baseId: string, request: QueryDocAllRolesRequest): Promise<QueryDocAllRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryDocAllRolesHeaders({ });
    return await this.queryDocAllRolesWithOptions(baseId, request, headers, runtime);
  }

  /**
   * 重建角色成员
   * 
   * @param request - RebuildRoleMembersRequest
   * @param headers - RebuildRoleMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebuildRoleMembersResponse
   */
  async rebuildRoleMembersWithOptions(baseId: string, request: RebuildRoleMembersRequest, headers: RebuildRoleMembersHeaders, runtime: $Util.RuntimeOptions): Promise<RebuildRoleMembersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.defaultRoleDTO)) {
      body["defaultRoleDTO"] = request.defaultRoleDTO;
    }

    if (!Util.isUnset(request.toRoleMemberDTOMap)) {
      body["toRoleMemberDTOMap"] = request.toRoleMemberDTOMap;
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
      action: "RebuildRoleMembers",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/auth/role/member/${baseId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RebuildRoleMembersResponse>(await this.execute(params, req, runtime), new RebuildRoleMembersResponse({}));
  }

  /**
   * 重建角色成员
   * 
   * @param request - RebuildRoleMembersRequest
   * @returns RebuildRoleMembersResponse
   */
  async rebuildRoleMembers(baseId: string, request: RebuildRoleMembersRequest): Promise<RebuildRoleMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RebuildRoleMembersHeaders({ });
    return await this.rebuildRoleMembersWithOptions(baseId, request, headers, runtime);
  }

  /**
   * 更新数据表字段
   * 
   * @param request - UpdateFieldRequest
   * @param headers - UpdateFieldHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFieldResponse
   */
  async updateFieldWithOptions(baseId: string, sheetIdOrName: string, fieldIdOrName: string, request: UpdateFieldRequest, headers: UpdateFieldHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateFieldResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.property)) {
      body["property"] = request.property;
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
      action: "UpdateField",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}/fields/${fieldIdOrName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateFieldResponse>(await this.execute(params, req, runtime), new UpdateFieldResponse({}));
  }

  /**
   * 更新数据表字段
   * 
   * @param request - UpdateFieldRequest
   * @returns UpdateFieldResponse
   */
  async updateField(baseId: string, sheetIdOrName: string, fieldIdOrName: string, request: UpdateFieldRequest): Promise<UpdateFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateFieldHeaders({ });
    return await this.updateFieldWithOptions(baseId, sheetIdOrName, fieldIdOrName, request, headers, runtime);
  }

  /**
   * 更新数据表多行记录
   * 
   * @param request - UpdateRecordsRequest
   * @param headers - UpdateRecordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordsResponse
   */
  async updateRecordsWithOptions(baseId: string, sheetIdOrName: string, request: UpdateRecordsRequest, headers: UpdateRecordsHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateRecordsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.records)) {
      body["records"] = request.records;
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
      action: "UpdateRecords",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}/records`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateRecordsResponse>(await this.execute(params, req, runtime), new UpdateRecordsResponse({}));
  }

  /**
   * 更新数据表多行记录
   * 
   * @param request - UpdateRecordsRequest
   * @returns UpdateRecordsResponse
   */
  async updateRecords(baseId: string, sheetIdOrName: string, request: UpdateRecordsRequest): Promise<UpdateRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateRecordsHeaders({ });
    return await this.updateRecordsWithOptions(baseId, sheetIdOrName, request, headers, runtime);
  }

  /**
   * 更新角色
   * 
   * @param request - UpdateRoleRequest
   * @param headers - UpdateRoleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRoleResponse
   */
  async updateRoleWithOptions(baseId: string, request: UpdateRoleRequest, headers: UpdateRoleHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.flowType)) {
      body["flowType"] = request.flowType;
    }

    if (!Util.isUnset(request.id)) {
      body["id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.roleType)) {
      body["roleType"] = request.roleType;
    }

    if (!Util.isUnset(request.subRoles)) {
      body["subRoles"] = request.subRoles;
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
      action: "UpdateRole",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/auth/role/${baseId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateRoleResponse>(await this.execute(params, req, runtime), new UpdateRoleResponse({}));
  }

  /**
   * 更新角色
   * 
   * @param request - UpdateRoleRequest
   * @returns UpdateRoleResponse
   */
  async updateRole(baseId: string, request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateRoleHeaders({ });
    return await this.updateRoleWithOptions(baseId, request, headers, runtime);
  }

  /**
   * 更新数据表
   * 
   * @param request - UpdateSheetRequest
   * @param headers - UpdateSheetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSheetResponse
   */
  async updateSheetWithOptions(baseId: string, sheetIdOrName: string, request: UpdateSheetRequest, headers: UpdateSheetHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateSheetResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
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
      action: "UpdateSheet",
      version: "notable_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/notable/bases/${baseId}/sheets/${sheetIdOrName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateSheetResponse>(await this.execute(params, req, runtime), new UpdateSheetResponse({}));
  }

  /**
   * 更新数据表
   * 
   * @param request - UpdateSheetRequest
   * @returns UpdateSheetResponse
   */
  async updateSheet(baseId: string, sheetIdOrName: string, request: UpdateSheetRequest): Promise<UpdateSheetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateSheetHeaders({ });
    return await this.updateSheetWithOptions(baseId, sheetIdOrName, request, headers, runtime);
  }

}
