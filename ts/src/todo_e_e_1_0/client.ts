// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class AppCreateEnterpriseTodoTaskHeaders extends $tea.Model {
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

export class AppCreateEnterpriseTodoTaskRequest extends $tea.Model {
  bizCategoryId?: string;
  bizCreatedTime?: number;
  customFields?: AppCreateEnterpriseTodoTaskRequestCustomFields[];
  description?: string;
  detailUrl?: AppCreateEnterpriseTodoTaskRequestDetailUrl;
  dueTime?: number;
  executorIds?: string[];
  notifyConfigs?: AppCreateEnterpriseTodoTaskRequestNotifyConfigs;
  operatorId?: string;
  priority?: number;
  sourceId?: string;
  sourceTitle?: string;
  subject?: string;
  toolbarTemplateKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizCategoryId: 'bizCategoryId',
      bizCreatedTime: 'bizCreatedTime',
      customFields: 'customFields',
      description: 'description',
      detailUrl: 'detailUrl',
      dueTime: 'dueTime',
      executorIds: 'executorIds',
      notifyConfigs: 'notifyConfigs',
      operatorId: 'operatorId',
      priority: 'priority',
      sourceId: 'sourceId',
      sourceTitle: 'sourceTitle',
      subject: 'subject',
      toolbarTemplateKey: 'toolbarTemplateKey',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCategoryId: 'string',
      bizCreatedTime: 'number',
      customFields: { 'type': 'array', 'itemType': AppCreateEnterpriseTodoTaskRequestCustomFields },
      description: 'string',
      detailUrl: AppCreateEnterpriseTodoTaskRequestDetailUrl,
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      notifyConfigs: AppCreateEnterpriseTodoTaskRequestNotifyConfigs,
      operatorId: 'string',
      priority: 'number',
      sourceId: 'string',
      sourceTitle: 'string',
      subject: 'string',
      toolbarTemplateKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppCreateEnterpriseTodoTaskResponseBody extends $tea.Model {
  bizCategoryId?: string;
  createdTime?: number;
  creatorId?: string;
  description?: string;
  detailUrl?: AppCreateEnterpriseTodoTaskResponseBodyDetailUrl;
  done?: boolean;
  dueTime?: number;
  executorIds?: string[];
  modifiedTime?: number;
  priority?: number;
  sourceId?: string;
  subject?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      bizCategoryId: 'bizCategoryId',
      createdTime: 'createdTime',
      creatorId: 'creatorId',
      description: 'description',
      detailUrl: 'detailUrl',
      done: 'done',
      dueTime: 'dueTime',
      executorIds: 'executorIds',
      modifiedTime: 'modifiedTime',
      priority: 'priority',
      sourceId: 'sourceId',
      subject: 'subject',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCategoryId: 'string',
      createdTime: 'number',
      creatorId: 'string',
      description: 'string',
      detailUrl: AppCreateEnterpriseTodoTaskResponseBodyDetailUrl,
      done: 'boolean',
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      modifiedTime: 'number',
      priority: 'number',
      sourceId: 'string',
      subject: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppCreateEnterpriseTodoTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AppCreateEnterpriseTodoTaskResponseBody;
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
      body: AppCreateEnterpriseTodoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppDeleteTodoEETaskHeaders extends $tea.Model {
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

export class AppDeleteTodoEETaskRequest extends $tea.Model {
  operatorId?: string;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      operatorId: 'operatorId',
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppDeleteTodoEETaskResponseBody extends $tea.Model {
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

export class AppDeleteTodoEETaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AppDeleteTodoEETaskResponseBody;
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
      body: AppDeleteTodoEETaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGetUserTaskListHeaders extends $tea.Model {
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

export class AppGetUserTaskListRequest extends $tea.Model {
  done?: boolean;
  operatorId?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      done: 'done',
      operatorId: 'operatorId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'boolean',
      operatorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGetUserTaskListResponseBody extends $tea.Model {
  data?: AppGetUserTaskListResponseBodyData[];
  hasMore?: boolean;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      hasMore: 'hasMore',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': AppGetUserTaskListResponseBodyData },
      hasMore: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGetUserTaskListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AppGetUserTaskListResponseBody;
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
      body: AppGetUserTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppUpdateTaskHeaders extends $tea.Model {
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

export class AppUpdateTaskRequest extends $tea.Model {
  bizCreatedTime?: number;
  description?: string;
  done?: boolean;
  dueTime?: number;
  executorIds?: string[];
  operatorId?: string;
  subject?: string;
  taskId?: number;
  toolbarTemplateKey?: string;
  static names(): { [key: string]: string } {
    return {
      bizCreatedTime: 'bizCreatedTime',
      description: 'description',
      done: 'done',
      dueTime: 'dueTime',
      executorIds: 'executorIds',
      operatorId: 'operatorId',
      subject: 'subject',
      taskId: 'taskId',
      toolbarTemplateKey: 'toolbarTemplateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCreatedTime: 'number',
      description: 'string',
      done: 'boolean',
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      operatorId: 'string',
      subject: 'string',
      taskId: 'number',
      toolbarTemplateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppUpdateTaskResponseBody extends $tea.Model {
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

export class AppUpdateTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AppUpdateTaskResponseBody;
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
      body: AppUpdateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppUpdateUserTaskStatusHeaders extends $tea.Model {
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

export class AppUpdateUserTaskStatusRequest extends $tea.Model {
  operatorId?: string;
  userTaskStatuses?: AppUpdateUserTaskStatusRequestUserTaskStatuses[];
  static names(): { [key: string]: string } {
    return {
      operatorId: 'operatorId',
      userTaskStatuses: 'userTaskStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
      userTaskStatuses: { 'type': 'array', 'itemType': AppUpdateUserTaskStatusRequestUserTaskStatuses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppUpdateUserTaskStatusResponseBody extends $tea.Model {
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

export class AppUpdateUserTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AppUpdateUserTaskStatusResponseBody;
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
      body: AppUpdateUserTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseTodoTaskHeaders extends $tea.Model {
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

export class CreateEnterpriseTodoTaskRequest extends $tea.Model {
  bizCategoryId?: string;
  customFields?: CreateEnterpriseTodoTaskRequestCustomFields[];
  description?: string;
  detailUrl?: CreateEnterpriseTodoTaskRequestDetailUrl;
  dueTime?: number;
  executorIds?: string[];
  notifyConfigs?: CreateEnterpriseTodoTaskRequestNotifyConfigs;
  operatorId?: string;
  priority?: number;
  sourceId?: string;
  sourceTitle?: string;
  subject?: string;
  trackerIds?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizCategoryId: 'bizCategoryId',
      customFields: 'customFields',
      description: 'description',
      detailUrl: 'detailUrl',
      dueTime: 'dueTime',
      executorIds: 'executorIds',
      notifyConfigs: 'notifyConfigs',
      operatorId: 'operatorId',
      priority: 'priority',
      sourceId: 'sourceId',
      sourceTitle: 'sourceTitle',
      subject: 'subject',
      trackerIds: 'trackerIds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCategoryId: 'string',
      customFields: { 'type': 'array', 'itemType': CreateEnterpriseTodoTaskRequestCustomFields },
      description: 'string',
      detailUrl: CreateEnterpriseTodoTaskRequestDetailUrl,
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      notifyConfigs: CreateEnterpriseTodoTaskRequestNotifyConfigs,
      operatorId: 'string',
      priority: 'number',
      sourceId: 'string',
      sourceTitle: 'string',
      subject: 'string',
      trackerIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseTodoTaskResponseBody extends $tea.Model {
  bizCategoryId?: string;
  createdTime?: number;
  creatorId?: string;
  description?: string;
  detailUrl?: CreateEnterpriseTodoTaskResponseBodyDetailUrl;
  done?: boolean;
  dueTime?: number;
  executorIds?: string[];
  modifiedTime?: number;
  sourceId?: string;
  subject?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      bizCategoryId: 'bizCategoryId',
      createdTime: 'createdTime',
      creatorId: 'creatorId',
      description: 'description',
      detailUrl: 'detailUrl',
      done: 'done',
      dueTime: 'dueTime',
      executorIds: 'executorIds',
      modifiedTime: 'modifiedTime',
      sourceId: 'sourceId',
      subject: 'subject',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCategoryId: 'string',
      createdTime: 'number',
      creatorId: 'string',
      description: 'string',
      detailUrl: CreateEnterpriseTodoTaskResponseBodyDetailUrl,
      done: 'boolean',
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      modifiedTime: 'number',
      sourceId: 'string',
      subject: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseTodoTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEnterpriseTodoTaskResponseBody;
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
      body: CreateEnterpriseTodoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateHeaders extends $tea.Model {
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

export class CreateStandardTemplateRequest extends $tea.Model {
  actions?: CreateStandardTemplateRequestActions[];
  description?: string;
  name?: string;
  operatorId?: string;
  service?: CreateStandardTemplateRequestService;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      description: 'description',
      name: 'name',
      operatorId: 'operatorId',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': CreateStandardTemplateRequestActions },
      description: 'string',
      name: 'string',
      operatorId: 'string',
      service: CreateStandardTemplateRequestService,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateResponseBody extends $tea.Model {
  actions?: CreateStandardTemplateResponseBodyActions[];
  description?: string;
  name?: string;
  templateKey?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      description: 'description',
      name: 'name',
      templateKey: 'templateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': CreateStandardTemplateResponseBodyActions },
      description: 'string',
      name: 'string',
      templateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateStandardTemplateResponseBody;
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
      body: CreateStandardTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCategorySourceConfigHeaders extends $tea.Model {
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

export class DeleteCategorySourceConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  bizCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      bizCategoryId: 'bizCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCategoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCategorySourceConfigResponseBody extends $tea.Model {
  success?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCategorySourceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCategorySourceConfigResponseBody;
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
      body: DeleteCategorySourceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTodoEETaskHeaders extends $tea.Model {
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

export class DeleteTodoEETaskRequest extends $tea.Model {
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTodoEETaskResponseBody extends $tea.Model {
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

export class DeleteTodoEETaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTodoEETaskResponseBody;
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
      body: DeleteTodoEETaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategorySourceConfigListHeaders extends $tea.Model {
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

export class GetCategorySourceConfigListRequest extends $tea.Model {
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategorySourceConfigListResponseBody extends $tea.Model {
  configs?: GetCategorySourceConfigListResponseBodyConfigs[];
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      nextToken: 'nextToken',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': GetCategorySourceConfigListResponseBodyConfigs },
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategorySourceConfigListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCategorySourceConfigListResponseBody;
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
      body: GetCategorySourceConfigListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateListHeaders extends $tea.Model {
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

export class GetTemplateListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateListResponseBody extends $tea.Model {
  data?: GetTemplateListResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetTemplateListResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateListResponseBody;
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
      body: GetTemplateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTaskListHeaders extends $tea.Model {
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

export class GetUserTaskListRequest extends $tea.Model {
  done?: boolean;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      done: 'done',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTaskListResponseBody extends $tea.Model {
  data?: GetUserTaskListResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetUserTaskListResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTaskListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserTaskListResponseBody;
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
      body: GetUserTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskExecutionStatusHeaders extends $tea.Model {
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

export class QueryTaskExecutionStatusRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskExecutionStatusResponseBody extends $tea.Model {
  data?: QueryTaskExecutionStatusResponseBodyData[];
  hasMore?: boolean;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      hasMore: 'hasMore',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryTaskExecutionStatusResponseBodyData },
      hasMore: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskExecutionStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTaskExecutionStatusResponseBody;
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
      body: QueryTaskExecutionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCategorySourceConfigHeaders extends $tea.Model {
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

export class RegisterCategorySourceConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  bizCategoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 财务_审批_考勤
   */
  bizCategoryName?: string;
  /**
   * @example
   * 张三
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      bizCategoryId: 'bizCategoryId',
      bizCategoryName: 'bizCategoryName',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCategoryId: 'string',
      bizCategoryName: 'string',
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCategorySourceConfigResponseBody extends $tea.Model {
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

export class RegisterCategorySourceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterCategorySourceConfigResponseBody;
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
      body: RegisterCategorySourceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCategorySourceConfigHeaders extends $tea.Model {
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

export class UpdateCategorySourceConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  bizCategoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 考勤_财务
   */
  bizCategoryName?: string;
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      bizCategoryId: 'bizCategoryId',
      bizCategoryName: 'bizCategoryName',
      operatorId: 'operatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCategoryId: 'string',
      bizCategoryName: 'string',
      operatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCategorySourceConfigResponseBody extends $tea.Model {
  success?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCategorySourceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCategorySourceConfigResponseBody;
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
      body: UpdateCategorySourceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStandardTemplateHeaders extends $tea.Model {
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

export class UpdateStandardTemplateRequest extends $tea.Model {
  actions?: UpdateStandardTemplateRequestActions[];
  operatorId?: string;
  service?: UpdateStandardTemplateRequestService;
  templateKey?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      operatorId: 'operatorId',
      service: 'service',
      templateKey: 'templateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': UpdateStandardTemplateRequestActions },
      operatorId: 'string',
      service: UpdateStandardTemplateRequestService,
      templateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStandardTemplateResponseBody extends $tea.Model {
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

export class UpdateStandardTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStandardTemplateResponseBody;
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
      body: UpdateStandardTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskHeaders extends $tea.Model {
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

export class UpdateTaskRequest extends $tea.Model {
  description?: string;
  done?: boolean;
  dueTime?: number;
  executorIds?: string[];
  subject?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      done: 'done',
      dueTime: 'dueTime',
      executorIds: 'executorIds',
      subject: 'subject',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      done: 'boolean',
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      subject: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
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

export class UpdateTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTaskResponseBody;
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
      body: UpdateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTaskStatusHeaders extends $tea.Model {
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

export class UpdateUserTaskStatusRequest extends $tea.Model {
  operatorId?: string;
  userTaskStatuses?: UpdateUserTaskStatusRequestUserTaskStatuses[];
  static names(): { [key: string]: string } {
    return {
      operatorId: 'operatorId',
      userTaskStatuses: 'userTaskStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
      userTaskStatuses: { 'type': 'array', 'itemType': UpdateUserTaskStatusRequestUserTaskStatuses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTaskStatusResponseBody extends $tea.Model {
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

export class UpdateUserTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserTaskStatusResponseBody;
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
      body: UpdateUserTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppCreateEnterpriseTodoTaskRequestCustomFields extends $tea.Model {
  fieldKey?: string;
  fieldLink?: string;
  fieldType?: string;
  fieldValue?: string;
  icon?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'fieldKey',
      fieldLink: 'fieldLink',
      fieldType: 'fieldType',
      fieldValue: 'fieldValue',
      icon: 'icon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      fieldLink: 'string',
      fieldType: 'string',
      fieldValue: 'string',
      icon: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppCreateEnterpriseTodoTaskRequestDetailUrl extends $tea.Model {
  appUrl?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'appUrl',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppCreateEnterpriseTodoTaskRequestNotifyConfigs extends $tea.Model {
  assistance?: string;
  dingNotify?: string;
  static names(): { [key: string]: string } {
    return {
      assistance: 'assistance',
      dingNotify: 'dingNotify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistance: 'string',
      dingNotify: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppCreateEnterpriseTodoTaskResponseBodyDetailUrl extends $tea.Model {
  appUrl?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'appUrl',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGetUserTaskListResponseBodyDataDetailUrl extends $tea.Model {
  appUrl?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'appUrl',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGetUserTaskListResponseBodyData extends $tea.Model {
  bizCategoryId?: string;
  createdTime?: number;
  description?: string;
  detailUrl?: AppGetUserTaskListResponseBodyDataDetailUrl;
  done?: boolean;
  dueTime?: number;
  modifiedTime?: number;
  operatorId?: string;
  priority?: number;
  subject?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      bizCategoryId: 'bizCategoryId',
      createdTime: 'createdTime',
      description: 'description',
      detailUrl: 'detailUrl',
      done: 'done',
      dueTime: 'dueTime',
      modifiedTime: 'modifiedTime',
      operatorId: 'operatorId',
      priority: 'priority',
      subject: 'subject',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCategoryId: 'string',
      createdTime: 'number',
      description: 'string',
      detailUrl: AppGetUserTaskListResponseBodyDataDetailUrl,
      done: 'boolean',
      dueTime: 'number',
      modifiedTime: 'number',
      operatorId: 'string',
      priority: 'number',
      subject: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppUpdateUserTaskStatusRequestUserTaskStatuses extends $tea.Model {
  done?: boolean;
  /**
   * **if can be null:**
   * false
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      done: 'done',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseTodoTaskRequestCustomFields extends $tea.Model {
  fieldKey?: string;
  fieldLink?: string;
  fieldType?: string;
  fieldValue?: string;
  icon?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'fieldKey',
      fieldLink: 'fieldLink',
      fieldType: 'fieldType',
      fieldValue: 'fieldValue',
      icon: 'icon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      fieldLink: 'string',
      fieldType: 'string',
      fieldValue: 'string',
      icon: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseTodoTaskRequestDetailUrl extends $tea.Model {
  appUrl?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'appUrl',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseTodoTaskRequestNotifyConfigs extends $tea.Model {
  dingNotify?: string;
  static names(): { [key: string]: string } {
    return {
      dingNotify: 'dingNotify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingNotify: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseTodoTaskResponseBodyDetailUrl extends $tea.Model {
  appUrl?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'appUrl',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestActions extends $tea.Model {
  actionGroup?: string;
  name?: string;
  needReason?: boolean;
  needReasonRequired?: boolean;
  order?: number;
  styleType?: number;
  static names(): { [key: string]: string } {
    return {
      actionGroup: 'actionGroup',
      name: 'name',
      needReason: 'needReason',
      needReasonRequired: 'needReasonRequired',
      order: 'order',
      styleType: 'styleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionGroup: 'string',
      name: 'string',
      needReason: 'boolean',
      needReasonRequired: 'boolean',
      order: 'number',
      styleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestService extends $tea.Model {
  callbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'callbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateResponseBodyActions extends $tea.Model {
  actionKey?: string;
  name?: string;
  needReason?: boolean;
  needReasonRequired?: boolean;
  order?: number;
  styleType?: number;
  static names(): { [key: string]: string } {
    return {
      actionKey: 'actionKey',
      name: 'name',
      needReason: 'needReason',
      needReasonRequired: 'needReasonRequired',
      order: 'order',
      styleType: 'styleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionKey: 'string',
      name: 'string',
      needReason: 'boolean',
      needReasonRequired: 'boolean',
      order: 'number',
      styleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategorySourceConfigListResponseBodyConfigs extends $tea.Model {
  bizCategoryId?: string;
  bizCategoryName?: string;
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      bizCategoryId: 'bizCategoryId',
      bizCategoryName: 'bizCategoryName',
      configId: 'configId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCategoryId: 'string',
      bizCategoryName: 'string',
      configId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateListResponseBodyDataActions extends $tea.Model {
  actionKey?: string;
  description?: string;
  name?: string;
  needReason?: boolean;
  needReasonRequired?: boolean;
  order?: number;
  styleType?: number;
  static names(): { [key: string]: string } {
    return {
      actionKey: 'actionKey',
      description: 'description',
      name: 'name',
      needReason: 'needReason',
      needReasonRequired: 'needReasonRequired',
      order: 'order',
      styleType: 'styleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionKey: 'string',
      description: 'string',
      name: 'string',
      needReason: 'boolean',
      needReasonRequired: 'boolean',
      order: 'number',
      styleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateListResponseBodyData extends $tea.Model {
  actions?: GetTemplateListResponseBodyDataActions[];
  createTime?: number;
  creatorId?: string;
  description?: string;
  modifiedTime?: number;
  modifierId?: string;
  name?: string;
  templateKey?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      createTime: 'createTime',
      creatorId: 'creatorId',
      description: 'description',
      modifiedTime: 'modifiedTime',
      modifierId: 'modifierId',
      name: 'name',
      templateKey: 'templateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': GetTemplateListResponseBodyDataActions },
      createTime: 'number',
      creatorId: 'string',
      description: 'string',
      modifiedTime: 'number',
      modifierId: 'string',
      name: 'string',
      templateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTaskListResponseBodyData extends $tea.Model {
  createdTime?: number;
  description?: string;
  done?: boolean;
  dueTime?: number;
  subject?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      done: 'done',
      dueTime: 'dueTime',
      subject: 'subject',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      description: 'string',
      done: 'boolean',
      dueTime: 'number',
      subject: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskExecutionStatusResponseBodyData extends $tea.Model {
  done?: boolean;
  executorId?: string;
  finishDate?: number;
  static names(): { [key: string]: string } {
    return {
      done: 'done',
      executorId: 'executorId',
      finishDate: 'finishDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'boolean',
      executorId: 'string',
      finishDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStandardTemplateRequestActions extends $tea.Model {
  actionGroup?: string;
  name?: string;
  needReason?: boolean;
  needReasonRequired?: boolean;
  order?: number;
  styleType?: number;
  static names(): { [key: string]: string } {
    return {
      actionGroup: 'actionGroup',
      name: 'name',
      needReason: 'needReason',
      needReasonRequired: 'needReasonRequired',
      order: 'order',
      styleType: 'styleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionGroup: 'string',
      name: 'string',
      needReason: 'boolean',
      needReasonRequired: 'boolean',
      order: 'number',
      styleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStandardTemplateRequestService extends $tea.Model {
  callbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'callbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTaskStatusRequestUserTaskStatuses extends $tea.Model {
  done?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      done: 'done',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'boolean',
      taskId: 'string',
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
   * 创建专属待办
   * 
   * @param request - AppCreateEnterpriseTodoTaskRequest
   * @param headers - AppCreateEnterpriseTodoTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppCreateEnterpriseTodoTaskResponse
   */
  async appCreateEnterpriseTodoTaskWithOptions(request: AppCreateEnterpriseTodoTaskRequest, headers: AppCreateEnterpriseTodoTaskHeaders, runtime: $Util.RuntimeOptions): Promise<AppCreateEnterpriseTodoTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizCategoryId)) {
      body["bizCategoryId"] = request.bizCategoryId;
    }

    if (!Util.isUnset(request.bizCreatedTime)) {
      body["bizCreatedTime"] = request.bizCreatedTime;
    }

    if (!Util.isUnset(request.customFields)) {
      body["customFields"] = request.customFields;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.detailUrl)) {
      body["detailUrl"] = request.detailUrl;
    }

    if (!Util.isUnset(request.dueTime)) {
      body["dueTime"] = request.dueTime;
    }

    if (!Util.isUnset(request.executorIds)) {
      body["executorIds"] = request.executorIds;
    }

    if (!Util.isUnset(request.notifyConfigs)) {
      body["notifyConfigs"] = request.notifyConfigs;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.priority)) {
      body["priority"] = request.priority;
    }

    if (!Util.isUnset(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceTitle)) {
      body["sourceTitle"] = request.sourceTitle;
    }

    if (!Util.isUnset(request.subject)) {
      body["subject"] = request.subject;
    }

    if (!Util.isUnset(request.toolbarTemplateKey)) {
      body["toolbarTemplateKey"] = request.toolbarTemplateKey;
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppCreateEnterpriseTodoTask",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/apps/users/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AppCreateEnterpriseTodoTaskResponse>(await this.execute(params, req, runtime), new AppCreateEnterpriseTodoTaskResponse({}));
  }

  /**
   * 创建专属待办
   * 
   * @param request - AppCreateEnterpriseTodoTaskRequest
   * @returns AppCreateEnterpriseTodoTaskResponse
   */
  async appCreateEnterpriseTodoTask(request: AppCreateEnterpriseTodoTaskRequest): Promise<AppCreateEnterpriseTodoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AppCreateEnterpriseTodoTaskHeaders({ });
    return await this.appCreateEnterpriseTodoTaskWithOptions(request, headers, runtime);
  }

  /**
   * 删除专属待办
   * 
   * @param request - AppDeleteTodoEETaskRequest
   * @param headers - AppDeleteTodoEETaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppDeleteTodoEETaskResponse
   */
  async appDeleteTodoEETaskWithOptions(request: AppDeleteTodoEETaskRequest, headers: AppDeleteTodoEETaskHeaders, runtime: $Util.RuntimeOptions): Promise<AppDeleteTodoEETaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.taskIds)) {
      body["taskIds"] = request.taskIds;
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
      action: "AppDeleteTodoEETask",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/apps/users/tasks/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AppDeleteTodoEETaskResponse>(await this.execute(params, req, runtime), new AppDeleteTodoEETaskResponse({}));
  }

  /**
   * 删除专属待办
   * 
   * @param request - AppDeleteTodoEETaskRequest
   * @returns AppDeleteTodoEETaskResponse
   */
  async appDeleteTodoEETask(request: AppDeleteTodoEETaskRequest): Promise<AppDeleteTodoEETaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AppDeleteTodoEETaskHeaders({ });
    return await this.appDeleteTodoEETaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询用户待办列表
   * 
   * @param request - AppGetUserTaskListRequest
   * @param headers - AppGetUserTaskListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppGetUserTaskListResponse
   */
  async appGetUserTaskListWithOptions(request: AppGetUserTaskListRequest, headers: AppGetUserTaskListHeaders, runtime: $Util.RuntimeOptions): Promise<AppGetUserTaskListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.done)) {
      body["done"] = request.done;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppGetUserTaskList",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/apps/users/tasks/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AppGetUserTaskListResponse>(await this.execute(params, req, runtime), new AppGetUserTaskListResponse({}));
  }

  /**
   * 查询用户待办列表
   * 
   * @param request - AppGetUserTaskListRequest
   * @returns AppGetUserTaskListResponse
   */
  async appGetUserTaskList(request: AppGetUserTaskListRequest): Promise<AppGetUserTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AppGetUserTaskListHeaders({ });
    return await this.appGetUserTaskListWithOptions(request, headers, runtime);
  }

  /**
   * 更新专属待办信息
   * 
   * @param request - AppUpdateTaskRequest
   * @param headers - AppUpdateTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppUpdateTaskResponse
   */
  async appUpdateTaskWithOptions(request: AppUpdateTaskRequest, headers: AppUpdateTaskHeaders, runtime: $Util.RuntimeOptions): Promise<AppUpdateTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizCreatedTime)) {
      body["bizCreatedTime"] = request.bizCreatedTime;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.done)) {
      body["done"] = request.done;
    }

    if (!Util.isUnset(request.dueTime)) {
      body["dueTime"] = request.dueTime;
    }

    if (!Util.isUnset(request.executorIds)) {
      body["executorIds"] = request.executorIds;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.subject)) {
      body["subject"] = request.subject;
    }

    if (!Util.isUnset(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!Util.isUnset(request.toolbarTemplateKey)) {
      body["toolbarTemplateKey"] = request.toolbarTemplateKey;
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
      action: "AppUpdateTask",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/apps/users/tasks/infos`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AppUpdateTaskResponse>(await this.execute(params, req, runtime), new AppUpdateTaskResponse({}));
  }

  /**
   * 更新专属待办信息
   * 
   * @param request - AppUpdateTaskRequest
   * @returns AppUpdateTaskResponse
   */
  async appUpdateTask(request: AppUpdateTaskRequest): Promise<AppUpdateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AppUpdateTaskHeaders({ });
    return await this.appUpdateTaskWithOptions(request, headers, runtime);
  }

  /**
   * 更新用户的待办状态
   * 
   * @param request - AppUpdateUserTaskStatusRequest
   * @param headers - AppUpdateUserTaskStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppUpdateUserTaskStatusResponse
   */
  async appUpdateUserTaskStatusWithOptions(request: AppUpdateUserTaskStatusRequest, headers: AppUpdateUserTaskStatusHeaders, runtime: $Util.RuntimeOptions): Promise<AppUpdateUserTaskStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.userTaskStatuses)) {
      body["userTaskStatuses"] = request.userTaskStatuses;
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
      action: "AppUpdateUserTaskStatus",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/apps/users/tasks/statuses`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AppUpdateUserTaskStatusResponse>(await this.execute(params, req, runtime), new AppUpdateUserTaskStatusResponse({}));
  }

  /**
   * 更新用户的待办状态
   * 
   * @param request - AppUpdateUserTaskStatusRequest
   * @returns AppUpdateUserTaskStatusResponse
   */
  async appUpdateUserTaskStatus(request: AppUpdateUserTaskStatusRequest): Promise<AppUpdateUserTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AppUpdateUserTaskStatusHeaders({ });
    return await this.appUpdateUserTaskStatusWithOptions(request, headers, runtime);
  }

  /**
   * 创建企业待办
   * 
   * @param request - CreateEnterpriseTodoTaskRequest
   * @param headers - CreateEnterpriseTodoTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnterpriseTodoTaskResponse
   */
  async createEnterpriseTodoTaskWithOptions(request: CreateEnterpriseTodoTaskRequest, headers: CreateEnterpriseTodoTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateEnterpriseTodoTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizCategoryId)) {
      body["bizCategoryId"] = request.bizCategoryId;
    }

    if (!Util.isUnset(request.customFields)) {
      body["customFields"] = request.customFields;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.detailUrl)) {
      body["detailUrl"] = request.detailUrl;
    }

    if (!Util.isUnset(request.dueTime)) {
      body["dueTime"] = request.dueTime;
    }

    if (!Util.isUnset(request.executorIds)) {
      body["executorIds"] = request.executorIds;
    }

    if (!Util.isUnset(request.notifyConfigs)) {
      body["notifyConfigs"] = request.notifyConfigs;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.priority)) {
      body["priority"] = request.priority;
    }

    if (!Util.isUnset(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceTitle)) {
      body["sourceTitle"] = request.sourceTitle;
    }

    if (!Util.isUnset(request.subject)) {
      body["subject"] = request.subject;
    }

    if (!Util.isUnset(request.trackerIds)) {
      body["trackerIds"] = request.trackerIds;
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEnterpriseTodoTask",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/users/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateEnterpriseTodoTaskResponse>(await this.execute(params, req, runtime), new CreateEnterpriseTodoTaskResponse({}));
  }

  /**
   * 创建企业待办
   * 
   * @param request - CreateEnterpriseTodoTaskRequest
   * @returns CreateEnterpriseTodoTaskResponse
   */
  async createEnterpriseTodoTask(request: CreateEnterpriseTodoTaskRequest): Promise<CreateEnterpriseTodoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateEnterpriseTodoTaskHeaders({ });
    return await this.createEnterpriseTodoTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建专属待办模板实例
   * 
   * @param request - CreateStandardTemplateRequest
   * @param headers - CreateStandardTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStandardTemplateResponse
   */
  async createStandardTemplateWithOptions(request: CreateStandardTemplateRequest, headers: CreateStandardTemplateHeaders, runtime: $Util.RuntimeOptions): Promise<CreateStandardTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actions)) {
      body["actions"] = request.actions;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.service)) {
      body["service"] = request.service;
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
      action: "CreateStandardTemplate",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/standards/templates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateStandardTemplateResponse>(await this.execute(params, req, runtime), new CreateStandardTemplateResponse({}));
  }

  /**
   * 创建专属待办模板实例
   * 
   * @param request - CreateStandardTemplateRequest
   * @returns CreateStandardTemplateResponse
   */
  async createStandardTemplate(request: CreateStandardTemplateRequest): Promise<CreateStandardTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateStandardTemplateHeaders({ });
    return await this.createStandardTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 删除应用类目信息
   * 
   * @param request - DeleteCategorySourceConfigRequest
   * @param headers - DeleteCategorySourceConfigHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCategorySourceConfigResponse
   */
  async deleteCategorySourceConfigWithOptions(request: DeleteCategorySourceConfigRequest, headers: DeleteCategorySourceConfigHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteCategorySourceConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizCategoryId)) {
      body["bizCategoryId"] = request.bizCategoryId;
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
      action: "DeleteCategorySourceConfig",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/apps/categories/sourceConfigs/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteCategorySourceConfigResponse>(await this.execute(params, req, runtime), new DeleteCategorySourceConfigResponse({}));
  }

  /**
   * 删除应用类目信息
   * 
   * @param request - DeleteCategorySourceConfigRequest
   * @returns DeleteCategorySourceConfigResponse
   */
  async deleteCategorySourceConfig(request: DeleteCategorySourceConfigRequest): Promise<DeleteCategorySourceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteCategorySourceConfigHeaders({ });
    return await this.deleteCategorySourceConfigWithOptions(request, headers, runtime);
  }

  /**
   * 删除待办
   * 
   * @param request - DeleteTodoEETaskRequest
   * @param headers - DeleteTodoEETaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTodoEETaskResponse
   */
  async deleteTodoEETaskWithOptions(request: DeleteTodoEETaskRequest, headers: DeleteTodoEETaskHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteTodoEETaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskIds)) {
      body["taskIds"] = request.taskIds;
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
      action: "DeleteTodoEETask",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/users/tasks/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteTodoEETaskResponse>(await this.execute(params, req, runtime), new DeleteTodoEETaskResponse({}));
  }

  /**
   * 删除待办
   * 
   * @param request - DeleteTodoEETaskRequest
   * @returns DeleteTodoEETaskResponse
   */
  async deleteTodoEETask(request: DeleteTodoEETaskRequest): Promise<DeleteTodoEETaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteTodoEETaskHeaders({ });
    return await this.deleteTodoEETaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询应用注册类目信息列表
   * 
   * @param request - GetCategorySourceConfigListRequest
   * @param headers - GetCategorySourceConfigListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCategorySourceConfigListResponse
   */
  async getCategorySourceConfigListWithOptions(request: GetCategorySourceConfigListRequest, headers: GetCategorySourceConfigListHeaders, runtime: $Util.RuntimeOptions): Promise<GetCategorySourceConfigListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "GetCategorySourceConfigList",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/apps/categories/sourceConfigs/lists/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetCategorySourceConfigListResponse>(await this.execute(params, req, runtime), new GetCategorySourceConfigListResponse({}));
  }

  /**
   * 查询应用注册类目信息列表
   * 
   * @param request - GetCategorySourceConfigListRequest
   * @returns GetCategorySourceConfigListResponse
   */
  async getCategorySourceConfigList(request: GetCategorySourceConfigListRequest): Promise<GetCategorySourceConfigListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetCategorySourceConfigListHeaders({ });
    return await this.getCategorySourceConfigListWithOptions(request, headers, runtime);
  }

  /**
   * 查询创建的Template列表
   * 
   * @param request - GetTemplateListRequest
   * @param headers - GetTemplateListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateListResponse
   */
  async getTemplateListWithOptions(request: GetTemplateListRequest, headers: GetTemplateListHeaders, runtime: $Util.RuntimeOptions): Promise<GetTemplateListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
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
      action: "GetTemplateList",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/templates/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateListResponse>(await this.execute(params, req, runtime), new GetTemplateListResponse({}));
  }

  /**
   * 查询创建的Template列表
   * 
   * @param request - GetTemplateListRequest
   * @returns GetTemplateListResponse
   */
  async getTemplateList(request: GetTemplateListRequest): Promise<GetTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetTemplateListHeaders({ });
    return await this.getTemplateListWithOptions(request, headers, runtime);
  }

  /**
   * 查询用户待办列表
   * 
   * @param request - GetUserTaskListRequest
   * @param headers - GetUserTaskListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserTaskListResponse
   */
  async getUserTaskListWithOptions(request: GetUserTaskListRequest, headers: GetUserTaskListHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserTaskListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.done)) {
      body["done"] = request.done;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserTaskList",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/users/tasks/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetUserTaskListResponse>(await this.execute(params, req, runtime), new GetUserTaskListResponse({}));
  }

  /**
   * 查询用户待办列表
   * 
   * @param request - GetUserTaskListRequest
   * @returns GetUserTaskListResponse
   */
  async getUserTaskList(request: GetUserTaskListRequest): Promise<GetUserTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserTaskListHeaders({ });
    return await this.getUserTaskListWithOptions(request, headers, runtime);
  }

  /**
   * 查询任务所有执行人的完成状态
   * 
   * @param request - QueryTaskExecutionStatusRequest
   * @param headers - QueryTaskExecutionStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskExecutionStatusResponse
   */
  async queryTaskExecutionStatusWithOptions(request: QueryTaskExecutionStatusRequest, headers: QueryTaskExecutionStatusHeaders, runtime: $Util.RuntimeOptions): Promise<QueryTaskExecutionStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

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
      action: "QueryTaskExecutionStatus",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/apps/users/tasks/executionStatuses`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryTaskExecutionStatusResponse>(await this.execute(params, req, runtime), new QueryTaskExecutionStatusResponse({}));
  }

  /**
   * 查询任务所有执行人的完成状态
   * 
   * @param request - QueryTaskExecutionStatusRequest
   * @returns QueryTaskExecutionStatusResponse
   */
  async queryTaskExecutionStatus(request: QueryTaskExecutionStatusRequest): Promise<QueryTaskExecutionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryTaskExecutionStatusHeaders({ });
    return await this.queryTaskExecutionStatusWithOptions(request, headers, runtime);
  }

  /**
   * 注册应用类目信息
   * 
   * @param request - RegisterCategorySourceConfigRequest
   * @param headers - RegisterCategorySourceConfigHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterCategorySourceConfigResponse
   */
  async registerCategorySourceConfigWithOptions(request: RegisterCategorySourceConfigRequest, headers: RegisterCategorySourceConfigHeaders, runtime: $Util.RuntimeOptions): Promise<RegisterCategorySourceConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizCategoryId)) {
      body["bizCategoryId"] = request.bizCategoryId;
    }

    if (!Util.isUnset(request.bizCategoryName)) {
      body["bizCategoryName"] = request.bizCategoryName;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
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
      action: "RegisterCategorySourceConfig",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/apps/categories/sourceConfigs/register`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RegisterCategorySourceConfigResponse>(await this.execute(params, req, runtime), new RegisterCategorySourceConfigResponse({}));
  }

  /**
   * 注册应用类目信息
   * 
   * @param request - RegisterCategorySourceConfigRequest
   * @returns RegisterCategorySourceConfigResponse
   */
  async registerCategorySourceConfig(request: RegisterCategorySourceConfigRequest): Promise<RegisterCategorySourceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RegisterCategorySourceConfigHeaders({ });
    return await this.registerCategorySourceConfigWithOptions(request, headers, runtime);
  }

  /**
   * 修改应用类目注册信息
   * 
   * @param request - UpdateCategorySourceConfigRequest
   * @param headers - UpdateCategorySourceConfigHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCategorySourceConfigResponse
   */
  async updateCategorySourceConfigWithOptions(request: UpdateCategorySourceConfigRequest, headers: UpdateCategorySourceConfigHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateCategorySourceConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizCategoryId)) {
      body["bizCategoryId"] = request.bizCategoryId;
    }

    if (!Util.isUnset(request.bizCategoryName)) {
      body["bizCategoryName"] = request.bizCategoryName;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
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
      action: "UpdateCategorySourceConfig",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/apps/categories/sourceConfigs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateCategorySourceConfigResponse>(await this.execute(params, req, runtime), new UpdateCategorySourceConfigResponse({}));
  }

  /**
   * 修改应用类目注册信息
   * 
   * @param request - UpdateCategorySourceConfigRequest
   * @returns UpdateCategorySourceConfigResponse
   */
  async updateCategorySourceConfig(request: UpdateCategorySourceConfigRequest): Promise<UpdateCategorySourceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateCategorySourceConfigHeaders({ });
    return await this.updateCategorySourceConfigWithOptions(request, headers, runtime);
  }

  /**
   * 更新标准模板
   * 
   * @param request - UpdateStandardTemplateRequest
   * @param headers - UpdateStandardTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStandardTemplateResponse
   */
  async updateStandardTemplateWithOptions(request: UpdateStandardTemplateRequest, headers: UpdateStandardTemplateHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateStandardTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actions)) {
      body["actions"] = request.actions;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.service)) {
      body["service"] = request.service;
    }

    if (!Util.isUnset(request.templateKey)) {
      body["templateKey"] = request.templateKey;
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
      action: "UpdateStandardTemplate",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/standards/templates/infos`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateStandardTemplateResponse>(await this.execute(params, req, runtime), new UpdateStandardTemplateResponse({}));
  }

  /**
   * 更新标准模板
   * 
   * @param request - UpdateStandardTemplateRequest
   * @returns UpdateStandardTemplateResponse
   */
  async updateStandardTemplate(request: UpdateStandardTemplateRequest): Promise<UpdateStandardTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateStandardTemplateHeaders({ });
    return await this.updateStandardTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 更新待办信息
   * 
   * @param request - UpdateTaskRequest
   * @param headers - UpdateTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskResponse
   */
  async updateTaskWithOptions(request: UpdateTaskRequest, headers: UpdateTaskHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.done)) {
      body["done"] = request.done;
    }

    if (!Util.isUnset(request.dueTime)) {
      body["dueTime"] = request.dueTime;
    }

    if (!Util.isUnset(request.executorIds)) {
      body["executorIds"] = request.executorIds;
    }

    if (!Util.isUnset(request.subject)) {
      body["subject"] = request.subject;
    }

    if (!Util.isUnset(request.taskId)) {
      body["taskId"] = request.taskId;
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
      action: "UpdateTask",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/users/tasks/infos`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateTaskResponse>(await this.execute(params, req, runtime), new UpdateTaskResponse({}));
  }

  /**
   * 更新待办信息
   * 
   * @param request - UpdateTaskRequest
   * @returns UpdateTaskResponse
   */
  async updateTask(request: UpdateTaskRequest): Promise<UpdateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateTaskHeaders({ });
    return await this.updateTaskWithOptions(request, headers, runtime);
  }

  /**
   * 更新用户的待办状态
   * 
   * @param request - UpdateUserTaskStatusRequest
   * @param headers - UpdateUserTaskStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserTaskStatusResponse
   */
  async updateUserTaskStatusWithOptions(request: UpdateUserTaskStatusRequest, headers: UpdateUserTaskStatusHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateUserTaskStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.userTaskStatuses)) {
      body["userTaskStatuses"] = request.userTaskStatuses;
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
      action: "UpdateUserTaskStatus",
      version: "todoEE_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/todoEE/users/tasks/statuses`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserTaskStatusResponse>(await this.execute(params, req, runtime), new UpdateUserTaskStatusResponse({}));
  }

  /**
   * 更新用户的待办状态
   * 
   * @param request - UpdateUserTaskStatusRequest
   * @returns UpdateUserTaskStatusResponse
   */
  async updateUserTaskStatus(request: UpdateUserTaskStatusRequest): Promise<UpdateUserTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateUserTaskStatusHeaders({ });
    return await this.updateUserTaskStatusWithOptions(request, headers, runtime);
  }

}
