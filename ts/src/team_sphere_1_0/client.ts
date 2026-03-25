// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class AnalysisReportHeaders extends $tea.Model {
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

export class AnalysisReportRequest extends $tea.Model {
  filter?: AnalysisReportRequestFilter;
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      reportId: 'reportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: AnalysisReportRequestFilter,
      reportId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalysisReportResponseBody extends $tea.Model {
  result?: AnalysisReportResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': AnalysisReportResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalysisReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AnalysisReportResponseBody;
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
      body: AnalysisReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationTaskHeaders extends $tea.Model {
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

export class CreateOrganizationTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 明天12点前完成周报撰写
   */
  content?: string;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  disableActivity?: boolean;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  disableNotification?: boolean;
  /**
   * @example
   * 2021-08-13T07:36:50.318Z
   */
  dueDate?: string;
  /**
   * @example
   * 173xxxx
   */
  executorId?: string;
  involveMembers?: string[];
  /**
   * @example
   * 我是一条任务备注
   */
  note?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * involves
   */
  visible?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      disableActivity: 'disableActivity',
      disableNotification: 'disableNotification',
      dueDate: 'dueDate',
      executorId: 'executorId',
      involveMembers: 'involveMembers',
      note: 'note',
      visible: 'visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      disableActivity: 'boolean',
      disableNotification: 'boolean',
      dueDate: 'string',
      executorId: 'string',
      involveMembers: { 'type': 'array', 'itemType': 'string' },
      note: 'string',
      visible: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationTaskResponseBody extends $tea.Model {
  result?: CreateOrganizationTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateOrganizationTaskResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOrganizationTaskResponseBody;
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
      body: CreateOrganizationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectMembersV3Headers extends $tea.Model {
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

export class CreateProjectMembersV3Request extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userIds: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectMembersV3ResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateProjectMembersV3ResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': CreateProjectMembersV3ResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectMembersV3Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProjectMembersV3ResponseBody;
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
      body: CreateProjectMembersV3ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectV3Headers extends $tea.Model {
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

export class CreateProjectV3Request extends $tea.Model {
  name?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectV3ResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateProjectV3ResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateProjectV3ResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectV3Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProjectV3ResponseBody;
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
      body: CreateProjectV3ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskHeaders extends $tea.Model {
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

export class CreateTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 任务标题
   */
  content?: string;
  customfields?: CreateTaskRequestCustomfields[];
  disableActivity?: boolean;
  disableNotification?: boolean;
  /**
   * @example
   * 2022-06-13T07:36:50.318Z
   */
  dueDate?: string;
  /**
   * @example
   * 173xxxx
   */
  executorId?: string;
  /**
   * @example
   * 我是一条任务备注
   */
  note?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 62c25e3b376exxxxxx
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      customfields: 'customfields',
      disableActivity: 'disableActivity',
      disableNotification: 'disableNotification',
      dueDate: 'dueDate',
      executorId: 'executorId',
      note: 'note',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      customfields: { 'type': 'array', 'itemType': CreateTaskRequestCustomfields },
      disableActivity: 'boolean',
      disableNotification: 'boolean',
      dueDate: 'string',
      executorId: 'string',
      note: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBody extends $tea.Model {
  result?: CreateTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateTaskResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTaskResponseBody;
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
      body: CreateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectMembersV3Headers extends $tea.Model {
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

export class DeleteProjectMembersV3Request extends $tea.Model {
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userIds: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectMembersV3ResponseBody extends $tea.Model {
  errors?: DeleteProjectMembersV3ResponseBodyErrors[];
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      errors: 'errors',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errors: { 'type': 'array', 'itemType': DeleteProjectMembersV3ResponseBodyErrors },
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectMembersV3Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProjectMembersV3ResponseBody;
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
      body: DeleteProjectMembersV3ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintProjectHeaders extends $tea.Model {
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

export class GetFootprintProjectResponseBody extends $tea.Model {
  result?: GetFootprintProjectResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetFootprintProjectResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFootprintProjectResponseBody;
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
      body: GetFootprintProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintTaskHeaders extends $tea.Model {
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

export class GetFootprintTaskResponseBody extends $tea.Model {
  result?: GetFootprintTaskResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetFootprintTaskResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFootprintTaskResponseBody;
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
      body: GetFootprintTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFreeTaskHeaders extends $tea.Model {
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

export class GetFreeTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0517xxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFreeTaskResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetFreeTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetFreeTaskResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFreeTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFreeTaskResponseBody;
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
      body: GetFreeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMembersV3Headers extends $tea.Model {
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

export class GetProjectMembersV3Request extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  projectRoleId?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      projectRoleId: 'projectRoleId',
      userIds: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      projectRoleId: 'string',
      userIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMembersV3ResponseBody extends $tea.Model {
  /**
   * @example
   * f279e812-e431-428d-846d-cxxxxxx
   */
  nextToken?: string;
  requestId?: string;
  result?: GetProjectMembersV3ResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetProjectMembersV3ResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMembersV3Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectMembersV3ResponseBody;
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
      body: GetProjectMembersV3ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRolesV3Headers extends $tea.Model {
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

export class GetProjectRolesV3Request extends $tea.Model {
  includeHidden?: boolean;
  level?: number;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      includeHidden: 'includeHidden',
      level: 'level',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeHidden: 'boolean',
      level: 'number',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRolesV3ResponseBody extends $tea.Model {
  /**
   * @example
   * f279e812-e431-428d-846d-cxxxxxx
   */
  nextToken?: string;
  requestId?: string;
  result?: GetProjectRolesV3ResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetProjectRolesV3ResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRolesV3Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectRolesV3ResponseBody;
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
      body: GetProjectRolesV3ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStaredProjectsHeaders extends $tea.Model {
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

export class GetStaredProjectsRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  nextToken?: string;
  /**
   * @example
   * updated:desc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      sortBy: 'sortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStaredProjectsResponseBody extends $tea.Model {
  /**
   * @example
   * f279e812-e431-428d-846d-cxxxxxx
   */
  nextToken?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStaredProjectsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStaredProjectsResponseBody;
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
      body: GetStaredProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTbUserIdByDingUserIdHeaders extends $tea.Model {
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

export class GetTbUserIdByDingUserIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dingUserIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0517xxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dingUserIds: 'dingUserIds',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingUserIds: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTbUserIdByDingUserIdResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetTbUserIdByDingUserIdResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetTbUserIdByDingUserIdResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTbUserIdByDingUserIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTbUserIdByDingUserIdResponseBody;
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
      body: GetTbUserIdByDingUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingOrgIdByDingOrgIdHeaders extends $tea.Model {
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

export class GetThingOrgIdByDingOrgIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  result?: GetThingOrgIdByDingOrgIdResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetThingOrgIdByDingOrgIdResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingOrgIdByDingOrgIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetThingOrgIdByDingOrgIdResponseBody;
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
      body: GetThingOrgIdByDingOrgIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserJoinedProjectsV3Headers extends $tea.Model {
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

export class GetUserJoinedProjectsV3Request extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  projectIds?: string;
  projectRoleLevels?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      projectIds: 'projectIds',
      projectRoleLevels: 'projectRoleLevels',
      sortBy: 'sortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      projectIds: 'string',
      projectRoleLevels: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserJoinedProjectsV3ResponseBody extends $tea.Model {
  /**
   * @example
   * f279e812-e431-428d-846d-cxxxxxx
   */
  nextToken?: string;
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserJoinedProjectsV3Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserJoinedProjectsV3ResponseBody;
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
      body: GetUserJoinedProjectsV3ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewHeaders extends $tea.Model {
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

export class ListAllTaskViewResponseBody extends $tea.Model {
  result?: ListAllTaskViewResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ListAllTaskViewResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAllTaskViewResponseBody;
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
      body: ListAllTaskViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsHeaders extends $tea.Model {
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

export class ListMyShortcutViewsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBody extends $tea.Model {
  /**
   * @example
   * f279e812-e431-428d-846d-cxxxxxx
   */
  nextToken?: string;
  result?: ListMyShortcutViewsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      result: { 'type': 'array', 'itemType': ListMyShortcutViewsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMyShortcutViewsResponseBody;
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
      body: ListMyShortcutViewsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllTaskHeaders extends $tea.Model {
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

export class QueryAllTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllTaskResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryAllTaskResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryAllTaskResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAllTaskResponseBody;
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
      body: QueryAllTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskHeaders extends $tea.Model {
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

export class QueryTaskRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  tql?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      tql: 'tql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      tql: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponseBody extends $tea.Model {
  /**
   * @example
   * f279e812-e431-428d-846d-cxxxxxx
   */
  nextToken?: string;
  requestId?: string;
  result?: QueryTaskResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryTaskResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTaskResponseBody;
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
      body: QueryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTasksV3Headers extends $tea.Model {
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

export class QueryTasksV3Request extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTasksV3ResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryTasksV3ResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryTasksV3ResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTasksV3Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTasksV3ResponseBody;
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
      body: QueryTasksV3ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAllTasksByTqlHeaders extends $tea.Model {
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

export class SearchAllTasksByTqlRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  tql?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0517xxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      tql: 'tql',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      tql: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAllTasksByTqlResponseBody extends $tea.Model {
  /**
   * @example
   * f279e812-e431-428d-846d-cxxxxxx
   */
  nextToken?: string;
  requestId?: string;
  result?: string[];
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAllTasksByTqlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchAllTasksByTqlResponseBody;
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
      body: SearchAllTasksByTqlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectCustomFiledsV3Headers extends $tea.Model {
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

export class SearchProjectCustomFiledsV3Request extends $tea.Model {
  cfIds?: string;
  maxResults?: number;
  nextToken?: string;
  sfcId?: string;
  static names(): { [key: string]: string } {
    return {
      cfIds: 'cfIds',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      sfcId: 'sfcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cfIds: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sfcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectCustomFiledsV3ResponseBody extends $tea.Model {
  /**
   * @example
   * f279e812-e431-428d-846d-cxxxxxx
   */
  nextToken?: string;
  requestId?: string;
  result?: SearchProjectCustomFiledsV3ResponseBodyResult[];
  /**
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': SearchProjectCustomFiledsV3ResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectCustomFiledsV3Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchProjectCustomFiledsV3ResponseBody;
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
      body: SearchProjectCustomFiledsV3ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectsV3Headers extends $tea.Model {
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

export class SearchProjectsV3Request extends $tea.Model {
  includeTemplate?: boolean;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  projectIds?: string;
  sourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0517xxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      includeTemplate: 'includeTemplate',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      projectIds: 'projectIds',
      sourceId: 'sourceId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeTemplate: 'boolean',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      projectIds: 'string',
      sourceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectsV3ResponseBody extends $tea.Model {
  /**
   * @example
   * f279e812-e431-428d-846d-cxxxxxx
   */
  nextToken?: string;
  requestId?: string;
  result?: SearchProjectsV3ResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': SearchProjectsV3ResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectsV3Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchProjectsV3ResponseBody;
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
      body: SearchProjectsV3ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectMemberRoleV3Headers extends $tea.Model {
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

export class UpdateProjectMemberRoleV3Request extends $tea.Model {
  roleIds?: string[];
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      roleIds: 'roleIds',
      userIds: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectMemberRoleV3ResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateProjectMemberRoleV3ResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpdateProjectMemberRoleV3ResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectMemberRoleV3Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProjectMemberRoleV3ResponseBody;
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
      body: UpdateProjectMemberRoleV3ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectV3Headers extends $tea.Model {
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

export class UpdateProjectV3Request extends $tea.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectV3ResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateProjectV3ResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateProjectV3ResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectV3Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProjectV3ResponseBody;
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
      body: UpdateProjectV3ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalysisReportRequestFilter extends $tea.Model {
  created?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalysisReportResponseBodyResultCols extends $tea.Model {
  baseType?: string;
  name?: string;
  theme?: string;
  static names(): { [key: string]: string } {
    return {
      baseType: 'baseType',
      name: 'name',
      theme: 'theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseType: 'string',
      name: 'string',
      theme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalysisReportResponseBodyResultListQuery extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalysisReportResponseBodyResultVisualizationSettings extends $tea.Model {
  dimension?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'dimension',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalysisReportResponseBodyResult extends $tea.Model {
  cols?: AnalysisReportResponseBodyResultCols[];
  listQuery?: AnalysisReportResponseBodyResultListQuery[][];
  name?: string;
  rows?: string[][];
  tips?: string;
  title?: string;
  visualizationSettings?: AnalysisReportResponseBodyResultVisualizationSettings;
  static names(): { [key: string]: string } {
    return {
      cols: 'cols',
      listQuery: 'listQuery',
      name: 'name',
      rows: 'rows',
      tips: 'tips',
      title: 'title',
      visualizationSettings: 'visualizationSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cols: { 'type': 'array', 'itemType': AnalysisReportResponseBodyResultCols },
      listQuery: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': AnalysisReportResponseBodyResultListQuery } },
      name: 'string',
      rows: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      tips: 'string',
      title: 'string',
      visualizationSettings: AnalysisReportResponseBodyResultVisualizationSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationTaskResponseBodyResultCreator extends $tea.Model {
  /**
   * @example
   * https://xxxxxxxxxx
   */
  avatarUrl?: string;
  /**
   * @example
   * 鬼斩
   */
  name?: string;
  /**
   * @example
   * 173xxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      name: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationTaskResponseBodyResultExecutor extends $tea.Model {
  /**
   * @example
   * https://xxxxxxxxxx
   */
  avatarUrl?: string;
  /**
   * @example
   * 鬼斩
   */
  name?: string;
  /**
   * @example
   * 173xxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      name: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationTaskResponseBodyResultInvolvers extends $tea.Model {
  /**
   * @example
   * httpx://xxx
   */
  avatarUrl?: string;
  /**
   * @example
   * 173xxxx
   */
  id?: string;
  /**
   * @example
   * 鬼斩
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationTaskResponseBodyResult extends $tea.Model {
  ancestorIds?: string[];
  /**
   * @example
   * 0
   */
  attachmentsCount?: number;
  /**
   * @example
   * 明天12点前写好周报
   */
  content?: string;
  /**
   * @example
   * 2021-08-13T07:36:50.318Z
   */
  created?: string;
  creator?: CreateOrganizationTaskResponseBodyResultCreator;
  /**
   * @example
   * 173xxxx
   */
  creatorId?: string;
  /**
   * @example
   * 2021-08-13T07:36:50.318Z
   */
  dueDate?: string;
  executor?: CreateOrganizationTaskResponseBodyResultExecutor;
  /**
   * @example
   * 173xxxx
   */
  executorId?: string;
  /**
   * @example
   * false
   */
  hasReminder?: boolean;
  /**
   * @example
   * 62a697c053c2ef5xxxxxx
   */
  id?: string;
  involveMembers?: string[];
  involvers?: CreateOrganizationTaskResponseBodyResultInvolvers[];
  /**
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @example
   * false
   */
  isDone?: string;
  /**
   * @example
   * 我是一条备注哦
   */
  note?: string;
  /**
   * @example
   * 2021-08-13T07:36:50.318Z
   */
  updated?: string;
  /**
   * @example
   * members
   */
  visible?: string;
  static names(): { [key: string]: string } {
    return {
      ancestorIds: 'ancestorIds',
      attachmentsCount: 'attachmentsCount',
      content: 'content',
      created: 'created',
      creator: 'creator',
      creatorId: 'creatorId',
      dueDate: 'dueDate',
      executor: 'executor',
      executorId: 'executorId',
      hasReminder: 'hasReminder',
      id: 'id',
      involveMembers: 'involveMembers',
      involvers: 'involvers',
      isDeleted: 'isDeleted',
      isDone: 'isDone',
      note: 'note',
      updated: 'updated',
      visible: 'visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancestorIds: { 'type': 'array', 'itemType': 'string' },
      attachmentsCount: 'number',
      content: 'string',
      created: 'string',
      creator: CreateOrganizationTaskResponseBodyResultCreator,
      creatorId: 'string',
      dueDate: 'string',
      executor: CreateOrganizationTaskResponseBodyResultExecutor,
      executorId: 'string',
      hasReminder: 'boolean',
      id: 'string',
      involveMembers: { 'type': 'array', 'itemType': 'string' },
      involvers: { 'type': 'array', 'itemType': CreateOrganizationTaskResponseBodyResultInvolvers },
      isDeleted: 'boolean',
      isDone: 'string',
      note: 'string',
      updated: 'string',
      visible: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectMembersV3ResponseBodyResult extends $tea.Model {
  boundToObjectId?: string;
  boundToObjectType?: string;
  joined?: string;
  role?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      boundToObjectId: 'boundToObjectId',
      boundToObjectType: 'boundToObjectType',
      joined: 'joined',
      role: 'role',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundToObjectId: 'string',
      boundToObjectType: 'string',
      joined: 'string',
      role: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectV3ResponseBodyResult extends $tea.Model {
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

export class CreateTaskRequestCustomfieldsValue extends $tea.Model {
  id?: string;
  thumbUrl?: string;
  /**
   * @example
   * 我是自定义字段显示值
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      thumbUrl: 'thumbUrl',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      thumbUrl: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestCustomfields extends $tea.Model {
  /**
   * @example
   * 62fb0bxxxxxxx
   */
  customfieldId?: string;
  /**
   * @example
   * 自定义字段-文本
   */
  customfieldName?: string;
  value?: CreateTaskRequestCustomfieldsValue[];
  static names(): { [key: string]: string } {
    return {
      customfieldId: 'customfieldId',
      customfieldName: 'customfieldName',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customfieldId: 'string',
      customfieldName: 'string',
      value: { 'type': 'array', 'itemType': CreateTaskRequestCustomfieldsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBodyResultCustomfieldsValue extends $tea.Model {
  /**
   * @example
   * 我是自定义字段显示值
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBodyResultCustomfields extends $tea.Model {
  /**
   * @example
   * 625bcxdxxxxxx
   */
  customfieldId?: string;
  value?: CreateTaskResponseBodyResultCustomfieldsValue[];
  static names(): { [key: string]: string } {
    return {
      customfieldId: 'customfieldId',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customfieldId: 'string',
      value: { 'type': 'array', 'itemType': CreateTaskResponseBodyResultCustomfieldsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 任务标题
   */
  content?: string;
  /**
   * @example
   * 2021-08-13T07:36:50.318Z
   */
  created?: string;
  /**
   * @example
   * 173xxxxx
   */
  creatorId?: string;
  customfields?: CreateTaskResponseBodyResultCustomfields[];
  /**
   * @example
   * 2022-08-13T07:36:50.318Z
   */
  dueDate?: string;
  /**
   * @example
   * 173xxxx
   */
  executorId?: string;
  involveMembers?: string[];
  /**
   * @example
   * 我是一条备注
   */
  note?: string;
  /**
   * @example
   * -10
   */
  priority?: number;
  /**
   * @example
   * 62c25e3b376ecxxxxxx
   */
  projectId?: string;
  /**
   * @example
   * 62a697c053c2ef5xxxxxx
   */
  taskId?: string;
  /**
   * @example
   * 2021-08-13T07:36:50.318Z
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      created: 'created',
      creatorId: 'creatorId',
      customfields: 'customfields',
      dueDate: 'dueDate',
      executorId: 'executorId',
      involveMembers: 'involveMembers',
      note: 'note',
      priority: 'priority',
      projectId: 'projectId',
      taskId: 'taskId',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      created: 'string',
      creatorId: 'string',
      customfields: { 'type': 'array', 'itemType': CreateTaskResponseBodyResultCustomfields },
      dueDate: 'string',
      executorId: 'string',
      involveMembers: { 'type': 'array', 'itemType': 'string' },
      note: 'string',
      priority: 'number',
      projectId: 'string',
      taskId: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectMembersV3ResponseBodyErrors extends $tea.Model {
  message?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintProjectResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  created?: string;
  /**
   * @example
   * 5f687406f05b283425ea8f6f
   */
  creatorId?: string;
  /**
   * @example
   * xxxx
   */
  description?: string;
  /**
   * @example
   * 1234
   */
  id?: string;
  /**
   * @example
   * true
   */
  isDeleted?: boolean;
  /**
   * @example
   * https://things.teambition.net?icon_logo=%F0%9F%92%A5
   */
  logo?: string;
  /**
   * @example
   * x项目
   */
  name?: string;
  /**
   * @example
   * 6139cd1aba5b128516ec8c86
   */
  organizationId?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  updated?: string;
  /**
   * @example
   * project
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      creatorId: 'creatorId',
      description: 'description',
      id: 'id',
      isDeleted: 'isDeleted',
      logo: 'logo',
      name: 'name',
      organizationId: 'organizationId',
      updated: 'updated',
      visibility: 'visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      creatorId: 'string',
      description: 'string',
      id: 'string',
      isDeleted: 'boolean',
      logo: 'string',
      name: 'string',
      organizationId: 'string',
      updated: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintTaskResponseBodyResultCustomfields extends $tea.Model {
  /**
   * @example
   * 666a472803e46df8ce98a4a5
   */
  customfieldId?: string;
  /**
   * @example
   * date
   */
  type?: string;
  value?: { [key: string]: any }[];
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      customfieldId: 'customfieldId',
      type: 'type',
      value: 'value',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customfieldId: 'string',
      type: 'string',
      value: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintTaskResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2024-09-19T11:07:51.468Z
   */
  accomplished?: string;
  basicPos?: string;
  content?: string;
  created?: string;
  creatorId?: string;
  customfields?: GetFootprintTaskResponseBodyResultCustomfields[];
  /**
   * @example
   * 2024-09-13T10:00:00.000Z
   */
  dueDate?: string;
  executorId?: string;
  id?: string;
  involveMembers?: string[];
  /**
   * @example
   * false
   */
  isArchived?: boolean;
  isDeleted?: boolean;
  /**
   * @example
   * true
   */
  isDone?: boolean;
  /**
   * @example
   * test123
   */
  note?: string;
  organizationId?: string;
  /**
   * @example
   * 0
   */
  pos?: number;
  /**
   * @example
   * 0
   */
  priority?: number;
  projectId?: string;
  sfcId?: string;
  /**
   * @example
   * 6639f974916cdb178e7d***
   */
  stageId?: string;
  /**
   * @example
   * 2024-09-13T10:00:00.000Z
   */
  startDate?: string;
  /**
   * @example
   * 6639f974916cdb178e7d***
   */
  tasklistId?: string;
  /**
   * @example
   * 6639f974916cdb178e7****
   */
  tfsId?: string;
  /**
   * @example
   * 540
   */
  uniqueId?: number;
  updated?: string;
  /**
   * @example
   * members
   */
  visible?: string;
  static names(): { [key: string]: string } {
    return {
      accomplished: 'accomplished',
      basicPos: 'basicPos',
      content: 'content',
      created: 'created',
      creatorId: 'creatorId',
      customfields: 'customfields',
      dueDate: 'dueDate',
      executorId: 'executorId',
      id: 'id',
      involveMembers: 'involveMembers',
      isArchived: 'isArchived',
      isDeleted: 'isDeleted',
      isDone: 'isDone',
      note: 'note',
      organizationId: 'organizationId',
      pos: 'pos',
      priority: 'priority',
      projectId: 'projectId',
      sfcId: 'sfcId',
      stageId: 'stageId',
      startDate: 'startDate',
      tasklistId: 'tasklistId',
      tfsId: 'tfsId',
      uniqueId: 'uniqueId',
      updated: 'updated',
      visible: 'visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accomplished: 'string',
      basicPos: 'string',
      content: 'string',
      created: 'string',
      creatorId: 'string',
      customfields: { 'type': 'array', 'itemType': GetFootprintTaskResponseBodyResultCustomfields },
      dueDate: 'string',
      executorId: 'string',
      id: 'string',
      involveMembers: { 'type': 'array', 'itemType': 'string' },
      isArchived: 'boolean',
      isDeleted: 'boolean',
      isDone: 'boolean',
      note: 'string',
      organizationId: 'string',
      pos: 'number',
      priority: 'number',
      projectId: 'string',
      sfcId: 'string',
      stageId: 'string',
      startDate: 'string',
      tasklistId: 'string',
      tfsId: 'string',
      uniqueId: 'number',
      updated: 'string',
      visible: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFreeTaskResponseBodyResult extends $tea.Model {
  accomplished?: string;
  ancestorIds?: string[];
  content?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  created?: string;
  creatorId?: string;
  dueDate?: string;
  executorId?: string;
  id?: string;
  involveMembers?: string[];
  isArchive?: boolean;
  isDone?: boolean;
  note?: string;
  organizationId?: string;
  priority?: number;
  recurrence?: string[];
  sourceId?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  startDate?: string;
  tagIds?: string[];
  uniqueId?: number;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  updated?: string;
  visible?: string;
  static names(): { [key: string]: string } {
    return {
      accomplished: 'accomplished',
      ancestorIds: 'ancestorIds',
      content: 'content',
      created: 'created',
      creatorId: 'creatorId',
      dueDate: 'dueDate',
      executorId: 'executorId',
      id: 'id',
      involveMembers: 'involveMembers',
      isArchive: 'isArchive',
      isDone: 'isDone',
      note: 'note',
      organizationId: 'organizationId',
      priority: 'priority',
      recurrence: 'recurrence',
      sourceId: 'sourceId',
      startDate: 'startDate',
      tagIds: 'tagIds',
      uniqueId: 'uniqueId',
      updated: 'updated',
      visible: 'visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accomplished: 'string',
      ancestorIds: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      created: 'string',
      creatorId: 'string',
      dueDate: 'string',
      executorId: 'string',
      id: 'string',
      involveMembers: { 'type': 'array', 'itemType': 'string' },
      isArchive: 'boolean',
      isDone: 'boolean',
      note: 'string',
      organizationId: 'string',
      priority: 'number',
      recurrence: { 'type': 'array', 'itemType': 'string' },
      sourceId: 'string',
      startDate: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      uniqueId: 'number',
      updated: 'string',
      visible: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMembersV3ResponseBodyResult extends $tea.Model {
  role?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRolesV3ResponseBodyResult extends $tea.Model {
  display?: boolean;
  id?: string;
  isDefaultRole?: boolean;
  level?: number;
  name?: string;
  originalId?: string;
  static names(): { [key: string]: string } {
    return {
      display: 'display',
      id: 'id',
      isDefaultRole: 'isDefaultRole',
      level: 'level',
      name: 'name',
      originalId: 'originalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'boolean',
      id: 'string',
      isDefaultRole: 'boolean',
      level: 'number',
      name: 'string',
      originalId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTbUserIdByDingUserIdResponseBodyResult extends $tea.Model {
  dingtalkUserId?: string;
  tbUserId?: string;
  static names(): { [key: string]: string } {
    return {
      dingtalkUserId: 'dingtalkUserId',
      tbUserId: 'tbUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkUserId: 'string',
      tbUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingOrgIdByDingOrgIdResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50c32afae8cf1439xxxx
   */
  tbOrganizationId?: string;
  static names(): { [key: string]: string } {
    return {
      tbOrganizationId: 'tbOrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tbOrganizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultFilterConditionsOp extends $tea.Model {
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultFilterConditionsValues extends $tea.Model {
  deep?: string;
  id?: string;
  label?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      deep: 'deep',
      id: 'id',
      label: 'label',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deep: 'string',
      id: 'string',
      label: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultFilterConditions extends $tea.Model {
  fixed?: boolean;
  key?: string;
  op?: ListAllTaskViewResponseBodyResultFilterConditionsOp;
  values?: ListAllTaskViewResponseBodyResultFilterConditionsValues[];
  static names(): { [key: string]: string } {
    return {
      fixed: 'fixed',
      key: 'key',
      op: 'op',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixed: 'boolean',
      key: 'string',
      op: ListAllTaskViewResponseBodyResultFilterConditionsOp,
      values: { 'type': 'array', 'itemType': ListAllTaskViewResponseBodyResultFilterConditionsValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultFilterInvisibleConditionsOp extends $tea.Model {
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultFilterInvisibleConditionsValues extends $tea.Model {
  deep?: string;
  id?: string;
  label?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      deep: 'deep',
      id: 'id',
      label: 'label',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deep: 'string',
      id: 'string',
      label: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultFilterInvisibleConditions extends $tea.Model {
  fixed?: boolean;
  key?: string;
  op?: ListAllTaskViewResponseBodyResultFilterInvisibleConditionsOp;
  values?: ListAllTaskViewResponseBodyResultFilterInvisibleConditionsValues[];
  static names(): { [key: string]: string } {
    return {
      fixed: 'fixed',
      key: 'key',
      op: 'op',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixed: 'boolean',
      key: 'string',
      op: ListAllTaskViewResponseBodyResultFilterInvisibleConditionsOp,
      values: { 'type': 'array', 'itemType': ListAllTaskViewResponseBodyResultFilterInvisibleConditionsValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultFilter extends $tea.Model {
  conditions?: ListAllTaskViewResponseBodyResultFilterConditions[];
  invisibleConditions?: ListAllTaskViewResponseBodyResultFilterInvisibleConditions[];
  logic?: string;
  logicDisabled?: boolean;
  q?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      invisibleConditions: 'invisibleConditions',
      logic: 'logic',
      logicDisabled: 'logicDisabled',
      q: 'q',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ListAllTaskViewResponseBodyResultFilterConditions },
      invisibleConditions: { 'type': 'array', 'itemType': ListAllTaskViewResponseBodyResultFilterInvisibleConditions },
      logic: 'string',
      logicDisabled: 'boolean',
      q: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultGroupType extends $tea.Model {
  canCreateGroup?: boolean;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      canCreateGroup: 'canCreateGroup',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canCreateGroup: 'boolean',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultOrderType extends $tea.Model {
  direction?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultShowType extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultToolbarInfoGroupTypesSetting extends $tea.Model {
  dateType?: string;
  fieldName?: string;
  fieldType?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'dateType',
      fieldName: 'fieldName',
      fieldType: 'fieldType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      fieldName: 'string',
      fieldType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultToolbarInfoGroupTypes extends $tea.Model {
  canCreateGroup?: boolean;
  name?: string;
  serviceName?: string;
  setting?: ListAllTaskViewResponseBodyResultToolbarInfoGroupTypesSetting;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      canCreateGroup: 'canCreateGroup',
      name: 'name',
      serviceName: 'serviceName',
      setting: 'setting',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canCreateGroup: 'boolean',
      name: 'string',
      serviceName: 'string',
      setting: ListAllTaskViewResponseBodyResultToolbarInfoGroupTypesSetting,
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultToolbarInfoOrderTypes extends $tea.Model {
  direction?: string;
  name?: string;
  supportDirection?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      name: 'name',
      supportDirection: 'supportDirection',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      name: 'string',
      supportDirection: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultToolbarInfoShowTypes extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultToolbarInfo extends $tea.Model {
  groupTypes?: ListAllTaskViewResponseBodyResultToolbarInfoGroupTypes[];
  orderTypes?: ListAllTaskViewResponseBodyResultToolbarInfoOrderTypes[];
  showTypes?: ListAllTaskViewResponseBodyResultToolbarInfoShowTypes[];
  static names(): { [key: string]: string } {
    return {
      groupTypes: 'groupTypes',
      orderTypes: 'orderTypes',
      showTypes: 'showTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupTypes: { 'type': 'array', 'itemType': ListAllTaskViewResponseBodyResultToolbarInfoGroupTypes },
      orderTypes: { 'type': 'array', 'itemType': ListAllTaskViewResponseBodyResultToolbarInfoOrderTypes },
      showTypes: { 'type': 'array', 'itemType': ListAllTaskViewResponseBodyResultToolbarInfoShowTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResultViewSetting extends $tea.Model {
  /**
   * @example
   * true
   */
  showDoneTask?: boolean;
  /**
   * @example
   * true
   */
  showSubTask?: boolean;
  static names(): { [key: string]: string } {
    return {
      showDoneTask: 'showDoneTask',
      showSubTask: 'showSubTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showDoneTask: 'boolean',
      showSubTask: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTaskViewResponseBodyResult extends $tea.Model {
  boundToObjectId?: string;
  /**
   * @example
   * user
   */
  boundToObjectType?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  created?: string;
  /**
   * @example
   * 5f687406f05b283425ea8f6f
   */
  creatorId?: string;
  /**
   * @example
   * xxxx
   */
  description?: string;
  filter?: ListAllTaskViewResponseBodyResultFilter;
  groupType?: ListAllTaskViewResponseBodyResultGroupType;
  id?: string;
  isDeleted?: boolean;
  /**
   * @example
   * x项目
   */
  name?: string;
  orderType?: ListAllTaskViewResponseBodyResultOrderType;
  /**
   * @example
   * 6139cd1aba5b128516ec8c86
   */
  organizationId?: string;
  showType?: ListAllTaskViewResponseBodyResultShowType;
  toolbarInfo?: ListAllTaskViewResponseBodyResultToolbarInfo;
  tql?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  updated?: string;
  viewSetting?: ListAllTaskViewResponseBodyResultViewSetting;
  static names(): { [key: string]: string } {
    return {
      boundToObjectId: 'boundToObjectId',
      boundToObjectType: 'boundToObjectType',
      created: 'created',
      creatorId: 'creatorId',
      description: 'description',
      filter: 'filter',
      groupType: 'groupType',
      id: 'id',
      isDeleted: 'isDeleted',
      name: 'name',
      orderType: 'orderType',
      organizationId: 'organizationId',
      showType: 'showType',
      toolbarInfo: 'toolbarInfo',
      tql: 'tql',
      updated: 'updated',
      viewSetting: 'viewSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundToObjectId: 'string',
      boundToObjectType: 'string',
      created: 'string',
      creatorId: 'string',
      description: 'string',
      filter: ListAllTaskViewResponseBodyResultFilter,
      groupType: ListAllTaskViewResponseBodyResultGroupType,
      id: 'string',
      isDeleted: 'boolean',
      name: 'string',
      orderType: ListAllTaskViewResponseBodyResultOrderType,
      organizationId: 'string',
      showType: ListAllTaskViewResponseBodyResultShowType,
      toolbarInfo: ListAllTaskViewResponseBodyResultToolbarInfo,
      tql: 'string',
      updated: 'string',
      viewSetting: ListAllTaskViewResponseBodyResultViewSetting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultFilterConditionsOp extends $tea.Model {
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultFilterConditionsValues extends $tea.Model {
  deep?: string;
  id?: string;
  label?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      deep: 'deep',
      id: 'id',
      label: 'label',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deep: 'string',
      id: 'string',
      label: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultFilterConditions extends $tea.Model {
  fixed?: boolean;
  key?: string;
  op?: ListMyShortcutViewsResponseBodyResultFilterConditionsOp;
  values?: ListMyShortcutViewsResponseBodyResultFilterConditionsValues[];
  static names(): { [key: string]: string } {
    return {
      fixed: 'fixed',
      key: 'key',
      op: 'op',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixed: 'boolean',
      key: 'string',
      op: ListMyShortcutViewsResponseBodyResultFilterConditionsOp,
      values: { 'type': 'array', 'itemType': ListMyShortcutViewsResponseBodyResultFilterConditionsValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultFilterInvisibleConditionsOp extends $tea.Model {
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultFilterInvisibleConditionsValues extends $tea.Model {
  deep?: string;
  id?: string;
  label?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      deep: 'deep',
      id: 'id',
      label: 'label',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deep: 'string',
      id: 'string',
      label: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultFilterInvisibleConditions extends $tea.Model {
  fixed?: boolean;
  key?: string;
  op?: ListMyShortcutViewsResponseBodyResultFilterInvisibleConditionsOp;
  values?: ListMyShortcutViewsResponseBodyResultFilterInvisibleConditionsValues[];
  static names(): { [key: string]: string } {
    return {
      fixed: 'fixed',
      key: 'key',
      op: 'op',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixed: 'boolean',
      key: 'string',
      op: ListMyShortcutViewsResponseBodyResultFilterInvisibleConditionsOp,
      values: { 'type': 'array', 'itemType': ListMyShortcutViewsResponseBodyResultFilterInvisibleConditionsValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultFilter extends $tea.Model {
  conditions?: ListMyShortcutViewsResponseBodyResultFilterConditions[];
  invisibleConditions?: ListMyShortcutViewsResponseBodyResultFilterInvisibleConditions[];
  logic?: string;
  logicDisabled?: boolean;
  q?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      invisibleConditions: 'invisibleConditions',
      logic: 'logic',
      logicDisabled: 'logicDisabled',
      q: 'q',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ListMyShortcutViewsResponseBodyResultFilterConditions },
      invisibleConditions: { 'type': 'array', 'itemType': ListMyShortcutViewsResponseBodyResultFilterInvisibleConditions },
      logic: 'string',
      logicDisabled: 'boolean',
      q: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultGroupType extends $tea.Model {
  canCreateGroup?: boolean;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      canCreateGroup: 'canCreateGroup',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canCreateGroup: 'boolean',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultOrderType extends $tea.Model {
  direction?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultShowType extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultToolbarInfoGroupTypesSetting extends $tea.Model {
  dateType?: string;
  fieldName?: string;
  fieldType?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'dateType',
      fieldName: 'fieldName',
      fieldType: 'fieldType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      fieldName: 'string',
      fieldType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultToolbarInfoGroupTypes extends $tea.Model {
  canCreateGroup?: boolean;
  name?: string;
  serviceName?: string;
  setting?: ListMyShortcutViewsResponseBodyResultToolbarInfoGroupTypesSetting;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      canCreateGroup: 'canCreateGroup',
      name: 'name',
      serviceName: 'serviceName',
      setting: 'setting',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canCreateGroup: 'boolean',
      name: 'string',
      serviceName: 'string',
      setting: ListMyShortcutViewsResponseBodyResultToolbarInfoGroupTypesSetting,
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultToolbarInfoOrderTypes extends $tea.Model {
  direction?: string;
  name?: string;
  supportDirection?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      name: 'name',
      supportDirection: 'supportDirection',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      name: 'string',
      supportDirection: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultToolbarInfoShowTypes extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultToolbarInfo extends $tea.Model {
  groupTypes?: ListMyShortcutViewsResponseBodyResultToolbarInfoGroupTypes[];
  orderTypes?: ListMyShortcutViewsResponseBodyResultToolbarInfoOrderTypes[];
  showTypes?: ListMyShortcutViewsResponseBodyResultToolbarInfoShowTypes[];
  static names(): { [key: string]: string } {
    return {
      groupTypes: 'groupTypes',
      orderTypes: 'orderTypes',
      showTypes: 'showTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupTypes: { 'type': 'array', 'itemType': ListMyShortcutViewsResponseBodyResultToolbarInfoGroupTypes },
      orderTypes: { 'type': 'array', 'itemType': ListMyShortcutViewsResponseBodyResultToolbarInfoOrderTypes },
      showTypes: { 'type': 'array', 'itemType': ListMyShortcutViewsResponseBodyResultToolbarInfoShowTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResultViewSetting extends $tea.Model {
  /**
   * @example
   * true
   */
  showDoneTask?: boolean;
  /**
   * @example
   * true
   */
  showSubTask?: boolean;
  static names(): { [key: string]: string } {
    return {
      showDoneTask: 'showDoneTask',
      showSubTask: 'showSubTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showDoneTask: 'boolean',
      showSubTask: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyShortcutViewsResponseBodyResult extends $tea.Model {
  boundToObjectId?: string;
  /**
   * @example
   * user
   */
  boundToObjectType?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  created?: string;
  /**
   * @example
   * 5f687406f05b283425ea8f6f
   */
  creatorId?: string;
  /**
   * @example
   * xxxx
   */
  description?: string;
  filter?: ListMyShortcutViewsResponseBodyResultFilter;
  groupType?: ListMyShortcutViewsResponseBodyResultGroupType;
  id?: string;
  isDeleted?: boolean;
  /**
   * @example
   * x项目
   */
  name?: string;
  orderType?: ListMyShortcutViewsResponseBodyResultOrderType;
  /**
   * @example
   * 6139cd1aba5b128516ec8c86
   */
  organizationId?: string;
  showType?: ListMyShortcutViewsResponseBodyResultShowType;
  toolbarInfo?: ListMyShortcutViewsResponseBodyResultToolbarInfo;
  tql?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  updated?: string;
  viewSetting?: ListMyShortcutViewsResponseBodyResultViewSetting;
  static names(): { [key: string]: string } {
    return {
      boundToObjectId: 'boundToObjectId',
      boundToObjectType: 'boundToObjectType',
      created: 'created',
      creatorId: 'creatorId',
      description: 'description',
      filter: 'filter',
      groupType: 'groupType',
      id: 'id',
      isDeleted: 'isDeleted',
      name: 'name',
      orderType: 'orderType',
      organizationId: 'organizationId',
      showType: 'showType',
      toolbarInfo: 'toolbarInfo',
      tql: 'tql',
      updated: 'updated',
      viewSetting: 'viewSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundToObjectId: 'string',
      boundToObjectType: 'string',
      created: 'string',
      creatorId: 'string',
      description: 'string',
      filter: ListMyShortcutViewsResponseBodyResultFilter,
      groupType: ListMyShortcutViewsResponseBodyResultGroupType,
      id: 'string',
      isDeleted: 'boolean',
      name: 'string',
      orderType: ListMyShortcutViewsResponseBodyResultOrderType,
      organizationId: 'string',
      showType: ListMyShortcutViewsResponseBodyResultShowType,
      toolbarInfo: ListMyShortcutViewsResponseBodyResultToolbarInfo,
      tql: 'string',
      updated: 'string',
      viewSetting: ListMyShortcutViewsResponseBodyResultViewSetting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllTaskResponseBodyResultCustomfieldsValue extends $tea.Model {
  id?: string;
  metaString?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      metaString: 'metaString',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metaString: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllTaskResponseBodyResultCustomfields extends $tea.Model {
  cfId?: string;
  type?: string;
  value?: QueryAllTaskResponseBodyResultCustomfieldsValue[];
  static names(): { [key: string]: string } {
    return {
      cfId: 'cfId',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cfId: 'string',
      type: 'string',
      value: { 'type': 'array', 'itemType': QueryAllTaskResponseBodyResultCustomfieldsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllTaskResponseBodyResult extends $tea.Model {
  accomplishTime?: string;
  ancestorIds?: string[];
  content?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  created?: string;
  creatorId?: string;
  customfields?: QueryAllTaskResponseBodyResultCustomfields[];
  dueDate?: string;
  executorId?: string;
  id?: string;
  involveMembers?: string[];
  isArchived?: boolean;
  isDone?: boolean;
  note?: string;
  parentTaskId?: string;
  priority?: number;
  projectId?: string;
  sfcId?: string;
  stageId?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  startDate?: string;
  tagIds?: string[];
  /**
   * @deprecated
   */
  taskId?: string;
  tasklistId?: string;
  tfsId?: string;
  uniqueId?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  updated?: string;
  visible?: string;
  static names(): { [key: string]: string } {
    return {
      accomplishTime: 'accomplishTime',
      ancestorIds: 'ancestorIds',
      content: 'content',
      created: 'created',
      creatorId: 'creatorId',
      customfields: 'customfields',
      dueDate: 'dueDate',
      executorId: 'executorId',
      id: 'id',
      involveMembers: 'involveMembers',
      isArchived: 'isArchived',
      isDone: 'isDone',
      note: 'note',
      parentTaskId: 'parentTaskId',
      priority: 'priority',
      projectId: 'projectId',
      sfcId: 'sfcId',
      stageId: 'stageId',
      startDate: 'startDate',
      tagIds: 'tagIds',
      taskId: 'taskId',
      tasklistId: 'tasklistId',
      tfsId: 'tfsId',
      uniqueId: 'uniqueId',
      updated: 'updated',
      visible: 'visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accomplishTime: 'string',
      ancestorIds: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      created: 'string',
      creatorId: 'string',
      customfields: { 'type': 'array', 'itemType': QueryAllTaskResponseBodyResultCustomfields },
      dueDate: 'string',
      executorId: 'string',
      id: 'string',
      involveMembers: { 'type': 'array', 'itemType': 'string' },
      isArchived: 'boolean',
      isDone: 'boolean',
      note: 'string',
      parentTaskId: 'string',
      priority: 'number',
      projectId: 'string',
      sfcId: 'string',
      stageId: 'string',
      startDate: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      tasklistId: 'string',
      tfsId: 'string',
      uniqueId: 'string',
      updated: 'string',
      visible: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponseBodyResultCustomfieldsValue extends $tea.Model {
  id?: string;
  metaString?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      metaString: 'metaString',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metaString: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponseBodyResultCustomfields extends $tea.Model {
  cfId?: string;
  type?: string;
  value?: QueryTaskResponseBodyResultCustomfieldsValue[];
  static names(): { [key: string]: string } {
    return {
      cfId: 'cfId',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cfId: 'string',
      type: 'string',
      value: { 'type': 'array', 'itemType': QueryTaskResponseBodyResultCustomfieldsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponseBodyResultExecutorUserInfo extends $tea.Model {
  avatarUrl?: string;
  id?: string;
  memberId?: string;
  name?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      id: 'id',
      memberId: 'memberId',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      id: 'string',
      memberId: 'string',
      name: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponseBodyResultProjectInfo extends $tea.Model {
  id?: string;
  logo?: string;
  name?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      logo: 'logo',
      name: 'name',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      logo: 'string',
      name: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponseBodyResult extends $tea.Model {
  accomplishTime?: string;
  content?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  created?: string;
  creatorId?: string;
  customfields?: QueryTaskResponseBodyResultCustomfields[];
  dueDate?: string;
  executorId?: string;
  executorUserInfo?: QueryTaskResponseBodyResultExecutorUserInfo;
  id?: string;
  involveMembers?: string[];
  isDone?: boolean;
  note?: string;
  projectId?: string;
  projectInfo?: QueryTaskResponseBodyResultProjectInfo;
  /**
   * @deprecated
   */
  taskId?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      accomplishTime: 'accomplishTime',
      content: 'content',
      created: 'created',
      creatorId: 'creatorId',
      customfields: 'customfields',
      dueDate: 'dueDate',
      executorId: 'executorId',
      executorUserInfo: 'executorUserInfo',
      id: 'id',
      involveMembers: 'involveMembers',
      isDone: 'isDone',
      note: 'note',
      projectId: 'projectId',
      projectInfo: 'projectInfo',
      taskId: 'taskId',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accomplishTime: 'string',
      content: 'string',
      created: 'string',
      creatorId: 'string',
      customfields: { 'type': 'array', 'itemType': QueryTaskResponseBodyResultCustomfields },
      dueDate: 'string',
      executorId: 'string',
      executorUserInfo: QueryTaskResponseBodyResultExecutorUserInfo,
      id: 'string',
      involveMembers: { 'type': 'array', 'itemType': 'string' },
      isDone: 'boolean',
      note: 'string',
      projectId: 'string',
      projectInfo: QueryTaskResponseBodyResultProjectInfo,
      taskId: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTasksV3ResponseBodyResultCustomfieldsValue extends $tea.Model {
  id?: string;
  metaString?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      metaString: 'metaString',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metaString: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTasksV3ResponseBodyResultCustomfields extends $tea.Model {
  cfId?: string;
  type?: string;
  value?: QueryTasksV3ResponseBodyResultCustomfieldsValue[];
  static names(): { [key: string]: string } {
    return {
      cfId: 'cfId',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cfId: 'string',
      type: 'string',
      value: { 'type': 'array', 'itemType': QueryTasksV3ResponseBodyResultCustomfieldsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTasksV3ResponseBodyResult extends $tea.Model {
  accomplishTime?: string;
  content?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  created?: string;
  creatorId?: string;
  customfields?: QueryTasksV3ResponseBodyResultCustomfields[];
  dueDate?: string;
  executorId?: string;
  id?: string;
  involveMembers?: string[];
  isDone?: boolean;
  note?: string;
  projectId?: string;
  sourceId?: string;
  /**
   * @deprecated
   */
  taskId?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      accomplishTime: 'accomplishTime',
      content: 'content',
      created: 'created',
      creatorId: 'creatorId',
      customfields: 'customfields',
      dueDate: 'dueDate',
      executorId: 'executorId',
      id: 'id',
      involveMembers: 'involveMembers',
      isDone: 'isDone',
      note: 'note',
      projectId: 'projectId',
      sourceId: 'sourceId',
      taskId: 'taskId',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accomplishTime: 'string',
      content: 'string',
      created: 'string',
      creatorId: 'string',
      customfields: { 'type': 'array', 'itemType': QueryTasksV3ResponseBodyResultCustomfields },
      dueDate: 'string',
      executorId: 'string',
      id: 'string',
      involveMembers: { 'type': 'array', 'itemType': 'string' },
      isDone: 'boolean',
      note: 'string',
      projectId: 'string',
      sourceId: 'string',
      taskId: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectCustomFiledsV3ResponseBodyResultAdvancedCustomfield extends $tea.Model {
  id?: string;
  name?: string;
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectCustomFiledsV3ResponseBodyResultChoices extends $tea.Model {
  id?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectCustomFiledsV3ResponseBodyResult extends $tea.Model {
  advancedCustomfield?: SearchProjectCustomFiledsV3ResponseBodyResultAdvancedCustomfield;
  boundToObjectId?: string;
  boundToObjectType?: string;
  choices?: SearchProjectCustomFiledsV3ResponseBodyResultChoices[];
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  created?: string;
  creatorId?: string;
  id?: string;
  name?: string;
  originalId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      advancedCustomfield: 'advancedCustomfield',
      boundToObjectId: 'boundToObjectId',
      boundToObjectType: 'boundToObjectType',
      choices: 'choices',
      created: 'created',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      originalId: 'originalId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedCustomfield: SearchProjectCustomFiledsV3ResponseBodyResultAdvancedCustomfield,
      boundToObjectId: 'string',
      boundToObjectType: 'string',
      choices: { 'type': 'array', 'itemType': SearchProjectCustomFiledsV3ResponseBodyResultChoices },
      created: 'string',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      originalId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectsV3ResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  created?: string;
  creatorId?: string;
  description?: string;
  id?: string;
  isArchived?: boolean;
  isTemplate?: boolean;
  logo?: string;
  name?: string;
  organizationId?: string;
  sourceId?: string;
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      creatorId: 'creatorId',
      description: 'description',
      id: 'id',
      isArchived: 'isArchived',
      isTemplate: 'isTemplate',
      logo: 'logo',
      name: 'name',
      organizationId: 'organizationId',
      sourceId: 'sourceId',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      creatorId: 'string',
      description: 'string',
      id: 'string',
      isArchived: 'boolean',
      isTemplate: 'boolean',
      logo: 'string',
      name: 'string',
      organizationId: 'string',
      sourceId: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectMemberRoleV3ResponseBodyResult extends $tea.Model {
  id?: string;
  role?: number;
  roleIds?: string[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      role: 'role',
      roleIds: 'roleIds',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      role: 'number',
      roleIds: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectV3ResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2022-07-04T03:29:34.770Z
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updated: 'string',
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
   * 查询任务概览
   * 
   * @param request - AnalysisReportRequest
   * @param headers - AnalysisReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalysisReportResponse
   */
  async analysisReportWithOptions(userId: string, request: AnalysisReportRequest, headers: AnalysisReportHeaders, runtime: $Util.RuntimeOptions): Promise<AnalysisReportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      body["filter"] = request.filter;
    }

    if (!Util.isUnset(request.reportId)) {
      body["reportId"] = request.reportId;
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
      action: "AnalysisReport",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/analyses/report`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AnalysisReportResponse>(await this.execute(params, req, runtime), new AnalysisReportResponse({}));
  }

  /**
   * 查询任务概览
   * 
   * @param request - AnalysisReportRequest
   * @returns AnalysisReportResponse
   */
  async analysisReport(userId: string, request: AnalysisReportRequest): Promise<AnalysisReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AnalysisReportHeaders({ });
    return await this.analysisReportWithOptions(userId, request, headers, runtime);
  }

  /**
   * 创建自由任务
   * 
   * @param request - CreateOrganizationTaskRequest
   * @param headers - CreateOrganizationTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrganizationTaskResponse
   */
  async createOrganizationTaskWithOptions(userId: string, request: CreateOrganizationTaskRequest, headers: CreateOrganizationTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateOrganizationTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.disableActivity)) {
      body["disableActivity"] = request.disableActivity;
    }

    if (!Util.isUnset(request.disableNotification)) {
      body["disableNotification"] = request.disableNotification;
    }

    if (!Util.isUnset(request.dueDate)) {
      body["dueDate"] = request.dueDate;
    }

    if (!Util.isUnset(request.executorId)) {
      body["executorId"] = request.executorId;
    }

    if (!Util.isUnset(request.involveMembers)) {
      body["involveMembers"] = request.involveMembers;
    }

    if (!Util.isUnset(request.note)) {
      body["note"] = request.note;
    }

    if (!Util.isUnset(request.visible)) {
      body["visible"] = request.visible;
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
      action: "CreateOrganizationTask",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/organizations/users/${userId}/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateOrganizationTaskResponse>(await this.execute(params, req, runtime), new CreateOrganizationTaskResponse({}));
  }

  /**
   * 创建自由任务
   * 
   * @param request - CreateOrganizationTaskRequest
   * @returns CreateOrganizationTaskResponse
   */
  async createOrganizationTask(userId: string, request: CreateOrganizationTaskRequest): Promise<CreateOrganizationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateOrganizationTaskHeaders({ });
    return await this.createOrganizationTaskWithOptions(userId, request, headers, runtime);
  }

  /**
   * 创建项目成员
   * 
   * @param request - CreateProjectMembersV3Request
   * @param headers - CreateProjectMembersV3Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectMembersV3Response
   */
  async createProjectMembersV3WithOptions(userId: string, projectId: string, request: CreateProjectMembersV3Request, headers: CreateProjectMembersV3Headers, runtime: $Util.RuntimeOptions): Promise<CreateProjectMembersV3Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userIds)) {
      body["userIds"] = request.userIds;
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
      action: "CreateProjectMembersV3",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/projects/${projectId}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectMembersV3Response>(await this.execute(params, req, runtime), new CreateProjectMembersV3Response({}));
  }

  /**
   * 创建项目成员
   * 
   * @param request - CreateProjectMembersV3Request
   * @returns CreateProjectMembersV3Response
   */
  async createProjectMembersV3(userId: string, projectId: string, request: CreateProjectMembersV3Request): Promise<CreateProjectMembersV3Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateProjectMembersV3Headers({ });
    return await this.createProjectMembersV3WithOptions(userId, projectId, request, headers, runtime);
  }

  /**
   * 创建协作空间。
   * 
   * @param request - CreateProjectV3Request
   * @param headers - CreateProjectV3Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectV3Response
   */
  async createProjectV3WithOptions(userId: string, request: CreateProjectV3Request, headers: CreateProjectV3Headers, runtime: $Util.RuntimeOptions): Promise<CreateProjectV3Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.organizationId)) {
      query["organizationId"] = request.organizationId;
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
      action: "CreateProjectV3",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/projects`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectV3Response>(await this.execute(params, req, runtime), new CreateProjectV3Response({}));
  }

  /**
   * 创建协作空间。
   * 
   * @param request - CreateProjectV3Request
   * @returns CreateProjectV3Response
   */
  async createProjectV3(userId: string, request: CreateProjectV3Request): Promise<CreateProjectV3Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateProjectV3Headers({ });
    return await this.createProjectV3WithOptions(userId, request, headers, runtime);
  }

  /**
   * 创建协作空间任务
   * 
   * @param request - CreateTaskRequest
   * @param headers - CreateTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(userId: string, request: CreateTaskRequest, headers: CreateTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.customfields)) {
      body["customfields"] = request.customfields;
    }

    if (!Util.isUnset(request.disableActivity)) {
      body["disableActivity"] = request.disableActivity;
    }

    if (!Util.isUnset(request.disableNotification)) {
      body["disableNotification"] = request.disableNotification;
    }

    if (!Util.isUnset(request.dueDate)) {
      body["dueDate"] = request.dueDate;
    }

    if (!Util.isUnset(request.executorId)) {
      body["executorId"] = request.executorId;
    }

    if (!Util.isUnset(request.note)) {
      body["note"] = request.note;
    }

    if (!Util.isUnset(request.projectId)) {
      body["projectId"] = request.projectId;
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
      action: "CreateTask",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskResponse>(await this.execute(params, req, runtime), new CreateTaskResponse({}));
  }

  /**
   * 创建协作空间任务
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(userId: string, request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateTaskHeaders({ });
    return await this.createTaskWithOptions(userId, request, headers, runtime);
  }

  /**
   * 删除项目成员。
   * 
   * @param request - DeleteProjectMembersV3Request
   * @param headers - DeleteProjectMembersV3Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectMembersV3Response
   */
  async deleteProjectMembersV3WithOptions(userId: string, projectId: string, request: DeleteProjectMembersV3Request, headers: DeleteProjectMembersV3Headers, runtime: $Util.RuntimeOptions): Promise<DeleteProjectMembersV3Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userIds)) {
      body["userIds"] = request.userIds;
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
      action: "DeleteProjectMembersV3",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/projects/${projectId}/members/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectMembersV3Response>(await this.execute(params, req, runtime), new DeleteProjectMembersV3Response({}));
  }

  /**
   * 删除项目成员。
   * 
   * @param request - DeleteProjectMembersV3Request
   * @returns DeleteProjectMembersV3Response
   */
  async deleteProjectMembersV3(userId: string, projectId: string, request: DeleteProjectMembersV3Request): Promise<DeleteProjectMembersV3Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteProjectMembersV3Headers({ });
    return await this.deleteProjectMembersV3WithOptions(userId, projectId, request, headers, runtime);
  }

  /**
   * 获取最近访问的项目
   * 
   * @param headers - GetFootprintProjectHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFootprintProjectResponse
   */
  async getFootprintProjectWithOptions(userId: string, headers: GetFootprintProjectHeaders, runtime: $Util.RuntimeOptions): Promise<GetFootprintProjectResponse> {
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
      action: "GetFootprintProject",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/footprints/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetFootprintProjectResponse>(await this.execute(params, req, runtime), new GetFootprintProjectResponse({}));
  }

  /**
   * 获取最近访问的项目
   * @returns GetFootprintProjectResponse
   */
  async getFootprintProject(userId: string): Promise<GetFootprintProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetFootprintProjectHeaders({ });
    return await this.getFootprintProjectWithOptions(userId, headers, runtime);
  }

  /**
   * 获取最近访问的任务
   * 
   * @param headers - GetFootprintTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFootprintTaskResponse
   */
  async getFootprintTaskWithOptions(userId: string, headers: GetFootprintTaskHeaders, runtime: $Util.RuntimeOptions): Promise<GetFootprintTaskResponse> {
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
      action: "GetFootprintTask",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/footprints/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetFootprintTaskResponse>(await this.execute(params, req, runtime), new GetFootprintTaskResponse({}));
  }

  /**
   * 获取最近访问的任务
   * @returns GetFootprintTaskResponse
   */
  async getFootprintTask(userId: string): Promise<GetFootprintTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetFootprintTaskHeaders({ });
    return await this.getFootprintTaskWithOptions(userId, headers, runtime);
  }

  /**
   * 查询轻任务详情。
   * 
   * @param request - GetFreeTaskRequest
   * @param headers - GetFreeTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFreeTaskResponse
   */
  async getFreeTaskWithOptions(taskId: string, request: GetFreeTaskRequest, headers: GetFreeTaskHeaders, runtime: $Util.RuntimeOptions): Promise<GetFreeTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "GetFreeTask",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/organizations/tasks/${taskId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetFreeTaskResponse>(await this.execute(params, req, runtime), new GetFreeTaskResponse({}));
  }

  /**
   * 查询轻任务详情。
   * 
   * @param request - GetFreeTaskRequest
   * @returns GetFreeTaskResponse
   */
  async getFreeTask(taskId: string, request: GetFreeTaskRequest): Promise<GetFreeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetFreeTaskHeaders({ });
    return await this.getFreeTaskWithOptions(taskId, request, headers, runtime);
  }

  /**
   * 获取协作空间成员列表。
   * 
   * @param request - GetProjectMembersV3Request
   * @param headers - GetProjectMembersV3Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectMembersV3Response
   */
  async getProjectMembersV3WithOptions(userId: string, projectId: string, request: GetProjectMembersV3Request, headers: GetProjectMembersV3Headers, runtime: $Util.RuntimeOptions): Promise<GetProjectMembersV3Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.projectRoleId)) {
      query["projectRoleId"] = request.projectRoleId;
    }

    if (!Util.isUnset(request.userIds)) {
      query["userIds"] = request.userIds;
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
      action: "GetProjectMembersV3",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/projects/${projectId}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetProjectMembersV3Response>(await this.execute(params, req, runtime), new GetProjectMembersV3Response({}));
  }

  /**
   * 获取协作空间成员列表。
   * 
   * @param request - GetProjectMembersV3Request
   * @returns GetProjectMembersV3Response
   */
  async getProjectMembersV3(userId: string, projectId: string, request: GetProjectMembersV3Request): Promise<GetProjectMembersV3Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetProjectMembersV3Headers({ });
    return await this.getProjectMembersV3WithOptions(userId, projectId, request, headers, runtime);
  }

  /**
   * 获取项目角色列表。
   * 
   * @param request - GetProjectRolesV3Request
   * @param headers - GetProjectRolesV3Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectRolesV3Response
   */
  async getProjectRolesV3WithOptions(userId: string, projectId: string, request: GetProjectRolesV3Request, headers: GetProjectRolesV3Headers, runtime: $Util.RuntimeOptions): Promise<GetProjectRolesV3Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.includeHidden)) {
      query["includeHidden"] = request.includeHidden;
    }

    if (!Util.isUnset(request.level)) {
      query["level"] = request.level;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
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
      action: "GetProjectRolesV3",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/projects/${projectId}/roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetProjectRolesV3Response>(await this.execute(params, req, runtime), new GetProjectRolesV3Response({}));
  }

  /**
   * 获取项目角色列表。
   * 
   * @param request - GetProjectRolesV3Request
   * @returns GetProjectRolesV3Response
   */
  async getProjectRolesV3(userId: string, projectId: string, request: GetProjectRolesV3Request): Promise<GetProjectRolesV3Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetProjectRolesV3Headers({ });
    return await this.getProjectRolesV3WithOptions(userId, projectId, request, headers, runtime);
  }

  /**
   * 获取用户星标协作空间
   * 
   * @param request - GetStaredProjectsRequest
   * @param headers - GetStaredProjectsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStaredProjectsResponse
   */
  async getStaredProjectsWithOptions(userId: string, request: GetStaredProjectsRequest, headers: GetStaredProjectsHeaders, runtime: $Util.RuntimeOptions): Promise<GetStaredProjectsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["sortBy"] = request.sortBy;
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
      action: "GetStaredProjects",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/staredProjects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetStaredProjectsResponse>(await this.execute(params, req, runtime), new GetStaredProjectsResponse({}));
  }

  /**
   * 获取用户星标协作空间
   * 
   * @param request - GetStaredProjectsRequest
   * @returns GetStaredProjectsResponse
   */
  async getStaredProjects(userId: string, request: GetStaredProjectsRequest): Promise<GetStaredProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetStaredProjectsHeaders({ });
    return await this.getStaredProjectsWithOptions(userId, request, headers, runtime);
  }

  /**
   * 钉钉 userId 查询 24位长 userId。
   * 
   * @param request - GetTbUserIdByDingUserIdRequest
   * @param headers - GetTbUserIdByDingUserIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTbUserIdByDingUserIdResponse
   */
  async getTbUserIdByDingUserIdWithOptions(request: GetTbUserIdByDingUserIdRequest, headers: GetTbUserIdByDingUserIdHeaders, runtime: $Util.RuntimeOptions): Promise<GetTbUserIdByDingUserIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dingUserIds)) {
      query["dingUserIds"] = request.dingUserIds;
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
      action: "GetTbUserIdByDingUserId",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/idmaps/userIds`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetTbUserIdByDingUserIdResponse>(await this.execute(params, req, runtime), new GetTbUserIdByDingUserIdResponse({}));
  }

  /**
   * 钉钉 userId 查询 24位长 userId。
   * 
   * @param request - GetTbUserIdByDingUserIdRequest
   * @returns GetTbUserIdByDingUserIdResponse
   */
  async getTbUserIdByDingUserId(request: GetTbUserIdByDingUserIdRequest): Promise<GetTbUserIdByDingUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetTbUserIdByDingUserIdHeaders({ });
    return await this.getTbUserIdByDingUserIdWithOptions(request, headers, runtime);
  }

  /**
   * 获取快办企业ID
   * 
   * @param headers - GetThingOrgIdByDingOrgIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetThingOrgIdByDingOrgIdResponse
   */
  async getThingOrgIdByDingOrgIdWithOptions(headers: GetThingOrgIdByDingOrgIdHeaders, runtime: $Util.RuntimeOptions): Promise<GetThingOrgIdByDingOrgIdResponse> {
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
      action: "GetThingOrgIdByDingOrgId",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/organizations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetThingOrgIdByDingOrgIdResponse>(await this.execute(params, req, runtime), new GetThingOrgIdByDingOrgIdResponse({}));
  }

  /**
   * 获取快办企业ID
   * @returns GetThingOrgIdByDingOrgIdResponse
   */
  async getThingOrgIdByDingOrgId(): Promise<GetThingOrgIdByDingOrgIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetThingOrgIdByDingOrgIdHeaders({ });
    return await this.getThingOrgIdByDingOrgIdWithOptions(headers, runtime);
  }

  /**
   * 获取用户参与项目。
   * 
   * @param request - GetUserJoinedProjectsV3Request
   * @param headers - GetUserJoinedProjectsV3Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserJoinedProjectsV3Response
   */
  async getUserJoinedProjectsV3WithOptions(userId: string, request: GetUserJoinedProjectsV3Request, headers: GetUserJoinedProjectsV3Headers, runtime: $Util.RuntimeOptions): Promise<GetUserJoinedProjectsV3Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.projectIds)) {
      query["projectIds"] = request.projectIds;
    }

    if (!Util.isUnset(request.projectRoleLevels)) {
      query["projectRoleLevels"] = request.projectRoleLevels;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["sortBy"] = request.sortBy;
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
      action: "GetUserJoinedProjectsV3",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/projects/userJoined`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetUserJoinedProjectsV3Response>(await this.execute(params, req, runtime), new GetUserJoinedProjectsV3Response({}));
  }

  /**
   * 获取用户参与项目。
   * 
   * @param request - GetUserJoinedProjectsV3Request
   * @returns GetUserJoinedProjectsV3Response
   */
  async getUserJoinedProjectsV3(userId: string, request: GetUserJoinedProjectsV3Request): Promise<GetUserJoinedProjectsV3Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserJoinedProjectsV3Headers({ });
    return await this.getUserJoinedProjectsV3WithOptions(userId, request, headers, runtime);
  }

  /**
   * 获取全部任务
   * 
   * @param headers - ListAllTaskViewHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllTaskViewResponse
   */
  async listAllTaskViewWithOptions(userId: string, headers: ListAllTaskViewHeaders, runtime: $Util.RuntimeOptions): Promise<ListAllTaskViewResponse> {
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
      action: "ListAllTaskView",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/allTaskViews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListAllTaskViewResponse>(await this.execute(params, req, runtime), new ListAllTaskViewResponse({}));
  }

  /**
   * 获取全部任务
   * @returns ListAllTaskViewResponse
   */
  async listAllTaskView(userId: string): Promise<ListAllTaskViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListAllTaskViewHeaders({ });
    return await this.listAllTaskViewWithOptions(userId, headers, runtime);
  }

  /**
   * 查询我的捷径
   * 
   * @param request - ListMyShortcutViewsRequest
   * @param headers - ListMyShortcutViewsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMyShortcutViewsResponse
   */
  async listMyShortcutViewsWithOptions(userId: string, request: ListMyShortcutViewsRequest, headers: ListMyShortcutViewsHeaders, runtime: $Util.RuntimeOptions): Promise<ListMyShortcutViewsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
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
      action: "ListMyShortcutViews",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/shortcutViews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListMyShortcutViewsResponse>(await this.execute(params, req, runtime), new ListMyShortcutViewsResponse({}));
  }

  /**
   * 查询我的捷径
   * 
   * @param request - ListMyShortcutViewsRequest
   * @returns ListMyShortcutViewsResponse
   */
  async listMyShortcutViews(userId: string, request: ListMyShortcutViewsRequest): Promise<ListMyShortcutViewsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListMyShortcutViewsHeaders({ });
    return await this.listMyShortcutViewsWithOptions(userId, request, headers, runtime);
  }

  /**
   * 查询自由任务和项目任务详情。
   * 
   * @param request - QueryAllTaskRequest
   * @param headers - QueryAllTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAllTaskResponse
   */
  async queryAllTaskWithOptions(userId: string, request: QueryAllTaskRequest, headers: QueryAllTaskHeaders, runtime: $Util.RuntimeOptions): Promise<QueryAllTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
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
      action: "QueryAllTask",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/tasks/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryAllTaskResponse>(await this.execute(params, req, runtime), new QueryAllTaskResponse({}));
  }

  /**
   * 查询自由任务和项目任务详情。
   * 
   * @param request - QueryAllTaskRequest
   * @returns QueryAllTaskResponse
   */
  async queryAllTask(userId: string, request: QueryAllTaskRequest): Promise<QueryAllTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryAllTaskHeaders({ });
    return await this.queryAllTaskWithOptions(userId, request, headers, runtime);
  }

  /**
   * 查询我的任务
   * 
   * @param request - QueryTaskRequest
   * @param headers - QueryTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskResponse
   */
  async queryTaskWithOptions(userId: string, request: QueryTaskRequest, headers: QueryTaskHeaders, runtime: $Util.RuntimeOptions): Promise<QueryTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.tql)) {
      body["tql"] = request.tql;
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
      action: "QueryTask",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/tasks/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryTaskResponse>(await this.execute(params, req, runtime), new QueryTaskResponse({}));
  }

  /**
   * 查询我的任务
   * 
   * @param request - QueryTaskRequest
   * @returns QueryTaskResponse
   */
  async queryTask(userId: string, request: QueryTaskRequest): Promise<QueryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryTaskHeaders({ });
    return await this.queryTaskWithOptions(userId, request, headers, runtime);
  }

  /**
   * 查询协作空间任务详情。
   * 
   * @param request - QueryTasksV3Request
   * @param headers - QueryTasksV3Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTasksV3Response
   */
  async queryTasksV3WithOptions(userId: string, request: QueryTasksV3Request, headers: QueryTasksV3Headers, runtime: $Util.RuntimeOptions): Promise<QueryTasksV3Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
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
      action: "QueryTasksV3",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/user/${userId}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryTasksV3Response>(await this.execute(params, req, runtime), new QueryTasksV3Response({}));
  }

  /**
   * 查询协作空间任务详情。
   * 
   * @param request - QueryTasksV3Request
   * @returns QueryTasksV3Response
   */
  async queryTasksV3(userId: string, request: QueryTasksV3Request): Promise<QueryTasksV3Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryTasksV3Headers({ });
    return await this.queryTasksV3WithOptions(userId, request, headers, runtime);
  }

  /**
   * 通过TQL搜索自由任务和协作空间任务ID。
   * 
   * @param request - SearchAllTasksByTqlRequest
   * @param headers - SearchAllTasksByTqlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAllTasksByTqlResponse
   */
  async searchAllTasksByTqlWithOptions(request: SearchAllTasksByTqlRequest, headers: SearchAllTasksByTqlHeaders, runtime: $Util.RuntimeOptions): Promise<SearchAllTasksByTqlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.tql)) {
      query["tql"] = request.tql;
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
      action: "SearchAllTasksByTql",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/taskIds`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SearchAllTasksByTqlResponse>(await this.execute(params, req, runtime), new SearchAllTasksByTqlResponse({}));
  }

  /**
   * 通过TQL搜索自由任务和协作空间任务ID。
   * 
   * @param request - SearchAllTasksByTqlRequest
   * @returns SearchAllTasksByTqlResponse
   */
  async searchAllTasksByTql(request: SearchAllTasksByTqlRequest): Promise<SearchAllTasksByTqlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SearchAllTasksByTqlHeaders({ });
    return await this.searchAllTasksByTqlWithOptions(request, headers, runtime);
  }

  /**
   * 搜索项目自定义字段。
   * 
   * @param request - SearchProjectCustomFiledsV3Request
   * @param headers - SearchProjectCustomFiledsV3Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchProjectCustomFiledsV3Response
   */
  async searchProjectCustomFiledsV3WithOptions(userId: string, projectId: string, request: SearchProjectCustomFiledsV3Request, headers: SearchProjectCustomFiledsV3Headers, runtime: $Util.RuntimeOptions): Promise<SearchProjectCustomFiledsV3Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cfIds)) {
      query["cfIds"] = request.cfIds;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.sfcId)) {
      query["sfcId"] = request.sfcId;
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
      action: "SearchProjectCustomFiledsV3",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/projects/${projectId}/customFields`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SearchProjectCustomFiledsV3Response>(await this.execute(params, req, runtime), new SearchProjectCustomFiledsV3Response({}));
  }

  /**
   * 搜索项目自定义字段。
   * 
   * @param request - SearchProjectCustomFiledsV3Request
   * @returns SearchProjectCustomFiledsV3Response
   */
  async searchProjectCustomFiledsV3(userId: string, projectId: string, request: SearchProjectCustomFiledsV3Request): Promise<SearchProjectCustomFiledsV3Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SearchProjectCustomFiledsV3Headers({ });
    return await this.searchProjectCustomFiledsV3WithOptions(userId, projectId, request, headers, runtime);
  }

  /**
   * 查询协作空间。
   * 
   * @param request - SearchProjectsV3Request
   * @param headers - SearchProjectsV3Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchProjectsV3Response
   */
  async searchProjectsV3WithOptions(request: SearchProjectsV3Request, headers: SearchProjectsV3Headers, runtime: $Util.RuntimeOptions): Promise<SearchProjectsV3Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.includeTemplate)) {
      query["includeTemplate"] = request.includeTemplate;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.projectIds)) {
      query["projectIds"] = request.projectIds;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["sourceId"] = request.sourceId;
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
      action: "SearchProjectsV3",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SearchProjectsV3Response>(await this.execute(params, req, runtime), new SearchProjectsV3Response({}));
  }

  /**
   * 查询协作空间。
   * 
   * @param request - SearchProjectsV3Request
   * @returns SearchProjectsV3Response
   */
  async searchProjectsV3(request: SearchProjectsV3Request): Promise<SearchProjectsV3Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SearchProjectsV3Headers({ });
    return await this.searchProjectsV3WithOptions(request, headers, runtime);
  }

  /**
   * 修改项目成员的角色。
   * 
   * @param request - UpdateProjectMemberRoleV3Request
   * @param headers - UpdateProjectMemberRoleV3Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectMemberRoleV3Response
   */
  async updateProjectMemberRoleV3WithOptions(userId: string, projectId: string, request: UpdateProjectMemberRoleV3Request, headers: UpdateProjectMemberRoleV3Headers, runtime: $Util.RuntimeOptions): Promise<UpdateProjectMemberRoleV3Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleIds)) {
      body["roleIds"] = request.roleIds;
    }

    if (!Util.isUnset(request.userIds)) {
      body["userIds"] = request.userIds;
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
      action: "UpdateProjectMemberRoleV3",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/projects/${projectId}/roles/assign`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectMemberRoleV3Response>(await this.execute(params, req, runtime), new UpdateProjectMemberRoleV3Response({}));
  }

  /**
   * 修改项目成员的角色。
   * 
   * @param request - UpdateProjectMemberRoleV3Request
   * @returns UpdateProjectMemberRoleV3Response
   */
  async updateProjectMemberRoleV3(userId: string, projectId: string, request: UpdateProjectMemberRoleV3Request): Promise<UpdateProjectMemberRoleV3Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateProjectMemberRoleV3Headers({ });
    return await this.updateProjectMemberRoleV3WithOptions(userId, projectId, request, headers, runtime);
  }

  /**
   * 更新协作空间。
   * 
   * @param request - UpdateProjectV3Request
   * @param headers - UpdateProjectV3Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectV3Response
   */
  async updateProjectV3WithOptions(userId: string, projectId: string, request: UpdateProjectV3Request, headers: UpdateProjectV3Headers, runtime: $Util.RuntimeOptions): Promise<UpdateProjectV3Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProjectV3",
      version: "teamSphere_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/teamSphere/users/${userId}/projects/${projectId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectV3Response>(await this.execute(params, req, runtime), new UpdateProjectV3Response({}));
  }

  /**
   * 更新协作空间。
   * 
   * @param request - UpdateProjectV3Request
   * @returns UpdateProjectV3Response
   */
  async updateProjectV3(userId: string, projectId: string, request: UpdateProjectV3Request): Promise<UpdateProjectV3Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateProjectV3Headers({ });
    return await this.updateProjectV3WithOptions(userId, projectId, request, headers, runtime);
  }

}
