// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class CopyLinkToWorkspaceHeaders extends $tea.Model {
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

export class CopyLinkToWorkspaceRequest extends $tea.Model {
  parentNodeKey?: string;
  shanhuiKey?: string;
  userId?: string;
  workspaceKey?: string;
  static names(): { [key: string]: string } {
    return {
      parentNodeKey: 'parentNodeKey',
      shanhuiKey: 'shanhuiKey',
      userId: 'userId',
      workspaceKey: 'workspaceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentNodeKey: 'string',
      shanhuiKey: 'string',
      userId: 'string',
      workspaceKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyLinkToWorkspaceResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 链接
   */
  result?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyLinkToWorkspaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyLinkToWorkspaceResponseBody;
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
      body: CopyLinkToWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlashMeetingHeaders extends $tea.Model {
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

export class CreateFlashMeetingRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  creator?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  eventId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      eventId: 'eventId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      eventId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlashMeetingResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  flashMeetingKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      flashMeetingKey: 'flashMeetingKey',
      startTime: 'startTime',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      flashMeetingKey: 'string',
      startTime: 'number',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlashMeetingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFlashMeetingResponseBody;
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
      body: CreateFlashMeetingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportShanhuiToDocHeaders extends $tea.Model {
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

export class ExportShanhuiToDocRequest extends $tea.Model {
  contentEnums?: string[];
  parentNodeKey?: string;
  shanhuiKey?: string;
  userId?: string;
  workspaceKey?: string;
  static names(): { [key: string]: string } {
    return {
      contentEnums: 'contentEnums',
      parentNodeKey: 'parentNodeKey',
      shanhuiKey: 'shanhuiKey',
      userId: 'userId',
      workspaceKey: 'workspaceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentEnums: { 'type': 'array', 'itemType': 'string' },
      parentNodeKey: 'string',
      shanhuiKey: 'string',
      userId: 'string',
      workspaceKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportShanhuiToDocResponseBody extends $tea.Model {
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportShanhuiToDocResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportShanhuiToDocResponseBody;
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
      body: ExportShanhuiToDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiAttachmentsHeaders extends $tea.Model {
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

export class GetShanhuiAttachmentsRequest extends $tea.Model {
  shanhuiKey?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      shanhuiKey: 'shanhuiKey',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shanhuiKey: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiAttachmentsResponseBody extends $tea.Model {
  result?: GetShanhuiAttachmentsResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetShanhuiAttachmentsResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiAttachmentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetShanhuiAttachmentsResponseBody;
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
      body: GetShanhuiAttachmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiByCalendarHeaders extends $tea.Model {
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

export class GetShanhuiByCalendarRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VGZCWXpvTmxpQmorbUhiSXUveTB98Iok
   */
  eventId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EUiSN7beu1Q2wR
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'eventId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiByCalendarResponseBody extends $tea.Model {
  result?: GetShanhuiByCalendarResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetShanhuiByCalendarResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiByCalendarResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetShanhuiByCalendarResponseBody;
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
      body: GetShanhuiByCalendarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiByShanhuiKeyHeaders extends $tea.Model {
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

export class GetShanhuiByShanhuiKeyResponseBody extends $tea.Model {
  result?: GetShanhuiByShanhuiKeyResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetShanhuiByShanhuiKeyResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiByShanhuiKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetShanhuiByShanhuiKeyResponseBody;
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
      body: GetShanhuiByShanhuiKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFromShanhuiDocHeaders extends $tea.Model {
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

export class GetTaskFromShanhuiDocRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gMp7ldNxoWbAqBQN
   */
  docKey?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0
   */
  nextToken?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DMvP2vrwe5QVUk0RcNb2FgiEiE
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      docKey: 'docKey',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docKey: 'string',
      maxResults: 'number',
      nextToken: 'number',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFromShanhuiDocResponseBody extends $tea.Model {
  result?: GetTaskFromShanhuiDocResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetTaskFromShanhuiDocResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFromShanhuiDocResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskFromShanhuiDocResponseBody;
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
      body: GetTaskFromShanhuiDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiAttachmentsResponseBodyResultAttachments extends $tea.Model {
  resourceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      resourceUrl: 'resourceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiAttachmentsResponseBodyResult extends $tea.Model {
  attachments?: GetShanhuiAttachmentsResponseBodyResultAttachments[];
  static names(): { [key: string]: string } {
    return {
      attachments: 'attachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': GetShanhuiAttachmentsResponseBodyResultAttachments },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiByCalendarResponseBodyResultTopics extends $tea.Model {
  /**
   * @example
   * 27Hio9BV23Ghj8LkRe34QzSdP94UtMkju
   */
  docKey?: string;
  /**
   * @example
   * 会议1
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docKey: 'docKey',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docKey: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiByCalendarResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 1685332800000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8K4ny9P9No06sjhk
   */
  flashmeetingKey?: string;
  /**
   * @example
   * false
   */
  hasSummary?: boolean;
  /**
   * @example
   * 1685318400000
   */
  startTime?: number;
  /**
   * @example
   * 2Hj32Uio28fjmMiu9Klsk
   */
  summaryDocKey?: string;
  /**
   * @example
   * 测试闪会
   */
  title?: string;
  topics?: GetShanhuiByCalendarResponseBodyResultTopics[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      flashmeetingKey: 'flashmeetingKey',
      hasSummary: 'hasSummary',
      startTime: 'startTime',
      summaryDocKey: 'summaryDocKey',
      title: 'title',
      topics: 'topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      flashmeetingKey: 'string',
      hasSummary: 'boolean',
      startTime: 'number',
      summaryDocKey: 'string',
      title: 'string',
      topics: { 'type': 'array', 'itemType': GetShanhuiByCalendarResponseBodyResultTopics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiByShanhuiKeyResponseBodyResultTopics extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 27Hio9BV23Ghj8LkRe34QzSdP94UtMkju
   */
  docKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 会议1
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docKey: 'docKey',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docKey: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShanhuiByShanhuiKeyResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 1685332800000
   */
  endTime?: number;
  /**
   * @example
   * 2kms47sjhb882
   */
  eventId?: string;
  /**
   * @example
   * 8K4ny9P9No06sjhk
   */
  flashmeetingKey?: string;
  /**
   * @example
   * false
   */
  hasSummary?: boolean;
  /**
   * @example
   * 1685318400000
   */
  startTime?: number;
  /**
   * @example
   * 2Hj32Uio28fjmMiu9Klsk
   */
  summaryDocKey?: string;
  /**
   * @example
   * 测试闪会
   */
  title?: string;
  topics?: GetShanhuiByShanhuiKeyResponseBodyResultTopics[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      eventId: 'eventId',
      flashmeetingKey: 'flashmeetingKey',
      hasSummary: 'hasSummary',
      startTime: 'startTime',
      summaryDocKey: 'summaryDocKey',
      title: 'title',
      topics: 'topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      eventId: 'string',
      flashmeetingKey: 'string',
      hasSummary: 'boolean',
      startTime: 'number',
      summaryDocKey: 'string',
      title: 'string',
      topics: { 'type': 'array', 'itemType': GetShanhuiByShanhuiKeyResponseBodyResultTopics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFromShanhuiDocResponseBodyResultItemsExecutorList extends $tea.Model {
  executorId?: string;
  statusStage?: number;
  subTaskKey?: string;
  static names(): { [key: string]: string } {
    return {
      executorId: 'executorId',
      statusStage: 'statusStage',
      subTaskKey: 'subTaskKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorId: 'string',
      statusStage: 'number',
      subTaskKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFromShanhuiDocResponseBodyResultItems extends $tea.Model {
  createTime?: number;
  creatorId?: string;
  deadline?: number;
  deleted?: boolean;
  executorList?: GetTaskFromShanhuiDocResponseBodyResultItemsExecutorList[];
  priority?: number;
  taskKey?: string;
  taskStatus?: string;
  taskType?: string;
  title?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      creatorId: 'creatorId',
      deadline: 'deadline',
      deleted: 'deleted',
      executorList: 'executorList',
      priority: 'priority',
      taskKey: 'taskKey',
      taskStatus: 'taskStatus',
      taskType: 'taskType',
      title: 'title',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creatorId: 'string',
      deadline: 'number',
      deleted: 'boolean',
      executorList: { 'type': 'array', 'itemType': GetTaskFromShanhuiDocResponseBodyResultItemsExecutorList },
      priority: 'number',
      taskKey: 'string',
      taskStatus: 'string',
      taskType: 'string',
      title: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFromShanhuiDocResponseBodyResult extends $tea.Model {
  hasMore?: boolean;
  items?: GetTaskFromShanhuiDocResponseBodyResultItems[];
  nextToken?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      items: 'items',
      nextToken: 'nextToken',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': GetTaskFromShanhuiDocResponseBodyResultItems },
      nextToken: 'string',
      total: 'number',
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
   * 将闪会添加链接到知识库
   * 
   * @param request - CopyLinkToWorkspaceRequest
   * @param headers - CopyLinkToWorkspaceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyLinkToWorkspaceResponse
   */
  async copyLinkToWorkspaceWithOptions(request: CopyLinkToWorkspaceRequest, headers: CopyLinkToWorkspaceHeaders, runtime: $Util.RuntimeOptions): Promise<CopyLinkToWorkspaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.parentNodeKey)) {
      body["parentNodeKey"] = request.parentNodeKey;
    }

    if (!Util.isUnset(request.shanhuiKey)) {
      body["shanhuiKey"] = request.shanhuiKey;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    if (!Util.isUnset(request.workspaceKey)) {
      body["workspaceKey"] = request.workspaceKey;
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
      action: "CopyLinkToWorkspace",
      version: "flashmeeting_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/flashmeeting/meetings/copyLinkToWorkspace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CopyLinkToWorkspaceResponse>(await this.execute(params, req, runtime), new CopyLinkToWorkspaceResponse({}));
  }

  /**
   * 将闪会添加链接到知识库
   * 
   * @param request - CopyLinkToWorkspaceRequest
   * @returns CopyLinkToWorkspaceResponse
   */
  async copyLinkToWorkspace(request: CopyLinkToWorkspaceRequest): Promise<CopyLinkToWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CopyLinkToWorkspaceHeaders({ });
    return await this.copyLinkToWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * 创建钉闪会并绑定日程
   * 
   * @param request - CreateFlashMeetingRequest
   * @param headers - CreateFlashMeetingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlashMeetingResponse
   */
  async createFlashMeetingWithOptions(request: CreateFlashMeetingRequest, headers: CreateFlashMeetingHeaders, runtime: $Util.RuntimeOptions): Promise<CreateFlashMeetingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.creator)) {
      body["creator"] = request.creator;
    }

    if (!Util.isUnset(request.eventId)) {
      body["eventId"] = request.eventId;
    }

    if (!Util.isUnset(request.title)) {
      body["title"] = request.title;
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
      action: "CreateFlashMeeting",
      version: "flashmeeting_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/flashmeeting/meetings`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateFlashMeetingResponse>(await this.execute(params, req, runtime), new CreateFlashMeetingResponse({}));
  }

  /**
   * 创建钉闪会并绑定日程
   * 
   * @param request - CreateFlashMeetingRequest
   * @returns CreateFlashMeetingResponse
   */
  async createFlashMeeting(request: CreateFlashMeetingRequest): Promise<CreateFlashMeetingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateFlashMeetingHeaders({ });
    return await this.createFlashMeetingWithOptions(request, headers, runtime);
  }

  /**
   * 将闪会导出到文档
   * 
   * @param request - ExportShanhuiToDocRequest
   * @param headers - ExportShanhuiToDocHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportShanhuiToDocResponse
   */
  async exportShanhuiToDocWithOptions(request: ExportShanhuiToDocRequest, headers: ExportShanhuiToDocHeaders, runtime: $Util.RuntimeOptions): Promise<ExportShanhuiToDocResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contentEnums)) {
      body["contentEnums"] = request.contentEnums;
    }

    if (!Util.isUnset(request.parentNodeKey)) {
      body["parentNodeKey"] = request.parentNodeKey;
    }

    if (!Util.isUnset(request.shanhuiKey)) {
      body["shanhuiKey"] = request.shanhuiKey;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    if (!Util.isUnset(request.workspaceKey)) {
      body["workspaceKey"] = request.workspaceKey;
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
      action: "ExportShanhuiToDoc",
      version: "flashmeeting_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/flashmeeting/meetings/export`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ExportShanhuiToDocResponse>(await this.execute(params, req, runtime), new ExportShanhuiToDocResponse({}));
  }

  /**
   * 将闪会导出到文档
   * 
   * @param request - ExportShanhuiToDocRequest
   * @returns ExportShanhuiToDocResponse
   */
  async exportShanhuiToDoc(request: ExportShanhuiToDocRequest): Promise<ExportShanhuiToDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ExportShanhuiToDocHeaders({ });
    return await this.exportShanhuiToDocWithOptions(request, headers, runtime);
  }

  /**
   * 获取闪会内上传的附件
   * 
   * @param request - GetShanhuiAttachmentsRequest
   * @param headers - GetShanhuiAttachmentsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetShanhuiAttachmentsResponse
   */
  async getShanhuiAttachmentsWithOptions(request: GetShanhuiAttachmentsRequest, headers: GetShanhuiAttachmentsHeaders, runtime: $Util.RuntimeOptions): Promise<GetShanhuiAttachmentsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.shanhuiKey)) {
      body["shanhuiKey"] = request.shanhuiKey;
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
      action: "GetShanhuiAttachments",
      version: "flashmeeting_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/flashmeeting/meetings/getShanhuiAttachments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetShanhuiAttachmentsResponse>(await this.execute(params, req, runtime), new GetShanhuiAttachmentsResponse({}));
  }

  /**
   * 获取闪会内上传的附件
   * 
   * @param request - GetShanhuiAttachmentsRequest
   * @returns GetShanhuiAttachmentsResponse
   */
  async getShanhuiAttachments(request: GetShanhuiAttachmentsRequest): Promise<GetShanhuiAttachmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetShanhuiAttachmentsHeaders({ });
    return await this.getShanhuiAttachmentsWithOptions(request, headers, runtime);
  }

  /**
   * 根据日程获取闪会的信息
   * 
   * @param request - GetShanhuiByCalendarRequest
   * @param headers - GetShanhuiByCalendarHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetShanhuiByCalendarResponse
   */
  async getShanhuiByCalendarWithOptions(request: GetShanhuiByCalendarRequest, headers: GetShanhuiByCalendarHeaders, runtime: $Util.RuntimeOptions): Promise<GetShanhuiByCalendarResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eventId)) {
      query["eventId"] = request.eventId;
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
      action: "GetShanhuiByCalendar",
      version: "flashmeeting_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/flashmeeting/calendars/meeting`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetShanhuiByCalendarResponse>(await this.execute(params, req, runtime), new GetShanhuiByCalendarResponse({}));
  }

  /**
   * 根据日程获取闪会的信息
   * 
   * @param request - GetShanhuiByCalendarRequest
   * @returns GetShanhuiByCalendarResponse
   */
  async getShanhuiByCalendar(request: GetShanhuiByCalendarRequest): Promise<GetShanhuiByCalendarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetShanhuiByCalendarHeaders({ });
    return await this.getShanhuiByCalendarWithOptions(request, headers, runtime);
  }

  /**
   * 根据闪会key来闪会的信息，包含关联的日程、会议时间、议题等
   * 
   * @param headers - GetShanhuiByShanhuiKeyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetShanhuiByShanhuiKeyResponse
   */
  async getShanhuiByShanhuiKeyWithOptions(flashmeetingKey: string, headers: GetShanhuiByShanhuiKeyHeaders, runtime: $Util.RuntimeOptions): Promise<GetShanhuiByShanhuiKeyResponse> {
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
      action: "GetShanhuiByShanhuiKey",
      version: "flashmeeting_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/flashmeeting/meetings/keys/${flashmeetingKey}/infos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetShanhuiByShanhuiKeyResponse>(await this.execute(params, req, runtime), new GetShanhuiByShanhuiKeyResponse({}));
  }

  /**
   * 根据闪会key来闪会的信息，包含关联的日程、会议时间、议题等
   * @returns GetShanhuiByShanhuiKeyResponse
   */
  async getShanhuiByShanhuiKey(flashmeetingKey: string): Promise<GetShanhuiByShanhuiKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetShanhuiByShanhuiKeyHeaders({ });
    return await this.getShanhuiByShanhuiKeyWithOptions(flashmeetingKey, headers, runtime);
  }

  /**
   * 根据闪会文档id获取待办任务
   * 
   * @param request - GetTaskFromShanhuiDocRequest
   * @param headers - GetTaskFromShanhuiDocHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskFromShanhuiDocResponse
   */
  async getTaskFromShanhuiDocWithOptions(request: GetTaskFromShanhuiDocRequest, headers: GetTaskFromShanhuiDocHeaders, runtime: $Util.RuntimeOptions): Promise<GetTaskFromShanhuiDocResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docKey)) {
      query["docKey"] = request.docKey;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
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
      action: "GetTaskFromShanhuiDoc",
      version: "flashmeeting_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/flashmeeting/meetings/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetTaskFromShanhuiDocResponse>(await this.execute(params, req, runtime), new GetTaskFromShanhuiDocResponse({}));
  }

  /**
   * 根据闪会文档id获取待办任务
   * 
   * @param request - GetTaskFromShanhuiDocRequest
   * @returns GetTaskFromShanhuiDocResponse
   */
  async getTaskFromShanhuiDoc(request: GetTaskFromShanhuiDocRequest): Promise<GetTaskFromShanhuiDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetTaskFromShanhuiDocHeaders({ });
    return await this.getTaskFromShanhuiDocWithOptions(request, headers, runtime);
  }

}
