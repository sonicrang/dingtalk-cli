// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchGetMinutesDetailsHeaders extends $tea.Model {
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

export class BatchGetMinutesDetailsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  taskUuids?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      taskUuids: 'taskUuids',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUuids: { 'type': 'array', 'itemType': 'string' },
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMinutesDetailsResponseBody extends $tea.Model {
  minutesDetails?: BatchGetMinutesDetailsResponseBodyMinutesDetails[];
  static names(): { [key: string]: string } {
    return {
      minutesDetails: 'minutesDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minutesDetails: { 'type': 'array', 'itemType': BatchGetMinutesDetailsResponseBodyMinutesDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMinutesDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchGetMinutesDetailsResponseBody;
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
      body: BatchGetMinutesDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMinutesByUploadFileHeaders extends $tea.Model {
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

export class CreateMinutesByUploadFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lJcRnm39OsU4jlFVmRGXXXXX
   */
  creatorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://media.source/audiotominutes.ogg
   */
  mediaFileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * audio
   */
  mediaType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11-20 录音
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lJcRnm39OsU4jlFVmRGXXXXX
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      creatorId: 'creatorId',
      mediaFileUrl: 'mediaFileUrl',
      mediaType: 'mediaType',
      title: 'title',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      creatorId: 'string',
      mediaFileUrl: 'string',
      mediaType: 'string',
      title: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMinutesByUploadFileResponseBody extends $tea.Model {
  bizId?: string;
  /**
   * @example
   * 7632756964313430aaaaaaaaaaaaaaaaaaaaaaaaaa7363731333633305f35
   */
  taskUuid?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      taskUuid: 'taskUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      taskUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMinutesByUploadFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMinutesByUploadFileResponseBody;
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
      body: CreateMinutesByUploadFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartDeviceAiSummaryHeaders extends $tea.Model {
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

export class CreateSmartDeviceAiSummaryRequest extends $tea.Model {
  agentId?: string;
  instanceId?: string;
  isvContext?: string;
  openFileId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      instanceId: 'instanceId',
      isvContext: 'isvContext',
      openFileId: 'openFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      instanceId: 'string',
      isvContext: 'string',
      openFileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartDeviceAiSummaryResponseBody extends $tea.Model {
  async?: boolean;
  static names(): { [key: string]: string } {
    return {
      async: 'async',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartDeviceAiSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSmartDeviceAiSummaryResponseBody;
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
      body: CreateSmartDeviceAiSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMinutesHeaders extends $tea.Model {
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

export class DeleteMinutesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
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

export class DeleteMinutesResponseBody extends $tea.Model {
  taskUuid?: string;
  static names(): { [key: string]: string } {
    return {
      taskUuid: 'taskUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMinutesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMinutesResponseBody;
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
      body: DeleteMinutesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMinutesTaskResultHeaders extends $tea.Model {
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

export class ExportMinutesTaskResultRequest extends $tea.Model {
  expireTime?: number;
  summaryExportSetting?: ExportMinutesTaskResultRequestSummaryExportSetting;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   */
  taskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 763xxxxxx325f32
   */
  taskUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * D5xxxxxxxxxxxxxxEiE
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      summaryExportSetting: 'summaryExportSetting',
      taskType: 'taskType',
      taskUuid: 'taskUuid',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      summaryExportSetting: ExportMinutesTaskResultRequestSummaryExportSetting,
      taskType: 'string',
      taskUuid: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMinutesTaskResultResponseBody extends $tea.Model {
  minutesDocUrl?: string;
  static names(): { [key: string]: string } {
    return {
      minutesDocUrl: 'minutesDocUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minutesDocUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMinutesTaskResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportMinutesTaskResultResponseBody;
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
      body: ExportMinutesTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSummaryHeaders extends $tea.Model {
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

export class GenerateSummaryRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  diyTemplateVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * meeting-assistant
   */
  summaryTemplateId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  summaryTemplateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lJcRnm39OsU4jlFVmRGXXXXX
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      diyTemplateVersion: 'diyTemplateVersion',
      summaryTemplateId: 'summaryTemplateId',
      summaryTemplateType: 'summaryTemplateType',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diyTemplateVersion: 'string',
      summaryTemplateId: 'string',
      summaryTemplateType: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSummaryResponseBody extends $tea.Model {
  summaryText?: string;
  taskUuid?: string;
  static names(): { [key: string]: string } {
    return {
      summaryText: 'summaryText',
      taskUuid: 'taskUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryText: 'string',
      taskUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateSummaryResponseBody;
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
      body: GenerateSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenQueryMinutesSummaryHeaders extends $tea.Model {
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

export class OpenQueryMinutesSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  taskUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      taskUuid: 'taskUuid',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUuid: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenQueryMinutesSummaryResponseBody extends $tea.Model {
  fullSummary?: string;
  static names(): { [key: string]: string } {
    return {
      fullSummary: 'fullSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullSummary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenQueryMinutesSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenQueryMinutesSummaryResponseBody;
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
      body: OpenQueryMinutesSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizMinutesHeaders extends $tea.Model {
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

export class QueryBizMinutesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bizType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      bizType: 'bizType',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'number',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizMinutesResponseBody extends $tea.Model {
  minutesDetails?: QueryBizMinutesResponseBodyMinutesDetails[];
  static names(): { [key: string]: string } {
    return {
      minutesDetails: 'minutesDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minutesDetails: { 'type': 'array', 'itemType': QueryBizMinutesResponseBodyMinutesDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizMinutesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryBizMinutesResponseBody;
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
      body: QueryBizMinutesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateMinutesListHeaders extends $tea.Model {
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

export class QueryCreateMinutesListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateMinutesListResponseBody extends $tea.Model {
  hasNext?: boolean;
  minutesDetails?: QueryCreateMinutesListResponseBodyMinutesDetails[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'hasNext',
      minutesDetails: 'minutesDetails',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      minutesDetails: { 'type': 'array', 'itemType': QueryCreateMinutesListResponseBodyMinutesDetails },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateMinutesListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCreateMinutesListResponseBody;
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
      body: QueryCreateMinutesListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesBasicInfoHeaders extends $tea.Model {
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

export class QueryMinutesBasicInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  taskUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      taskUuid: 'taskUuid',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUuid: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesBasicInfoResponseBody extends $tea.Model {
  duration?: number;
  endTime?: number;
  startTime?: number;
  taskCreator?: string;
  taskUuid?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      endTime: 'endTime',
      startTime: 'startTime',
      taskCreator: 'taskCreator',
      taskUuid: 'taskUuid',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      endTime: 'number',
      startTime: 'number',
      taskCreator: 'string',
      taskUuid: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesBasicInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMinutesBasicInfoResponseBody;
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
      body: QueryMinutesBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesChaptersHeaders extends $tea.Model {
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

export class QueryMinutesChaptersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * D5xxxxxxxxxgiEiE
   */
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

export class QueryMinutesChaptersResponseBody extends $tea.Model {
  chapterList?: QueryMinutesChaptersResponseBodyChapterList[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      chapterList: 'chapterList',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chapterList: { 'type': 'array', 'itemType': QueryMinutesChaptersResponseBodyChapterList },
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesChaptersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMinutesChaptersResponseBody;
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
      body: QueryMinutesChaptersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesKeywordHeaders extends $tea.Model {
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

export class QueryMinutesKeywordRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * D5xxxxxxxxxgiEiE
   */
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

export class QueryMinutesKeywordResponseBody extends $tea.Model {
  keywords?: string[];
  static names(): { [key: string]: string } {
    return {
      keywords: 'keywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesKeywordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMinutesKeywordResponseBody;
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
      body: QueryMinutesKeywordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesPlayInfoHeaders extends $tea.Model {
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

export class QueryMinutesPlayInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
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

export class QueryMinutesPlayInfoResponseBody extends $tea.Model {
  playInfo?: QueryMinutesPlayInfoResponseBodyPlayInfo;
  static names(): { [key: string]: string } {
    return {
      playInfo: 'playInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playInfo: QueryMinutesPlayInfoResponseBodyPlayInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesPlayInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMinutesPlayInfoResponseBody;
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
      body: QueryMinutesPlayInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesShareListHeaders extends $tea.Model {
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

export class QueryMinutesShareListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  maxResults?: number;
  nextToken?: string;
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      scene: 'scene',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      scene: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesShareListResponseBody extends $tea.Model {
  hasNext?: boolean;
  minutesDetails?: QueryMinutesShareListResponseBodyMinutesDetails[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'hasNext',
      minutesDetails: 'minutesDetails',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      minutesDetails: { 'type': 'array', 'itemType': QueryMinutesShareListResponseBodyMinutesDetails },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesShareListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMinutesShareListResponseBody;
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
      body: QueryMinutesShareListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesStatusHeaders extends $tea.Model {
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

export class QueryMinutesStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
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

export class QueryMinutesStatusResponseBody extends $tea.Model {
  status?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMinutesStatusResponseBody;
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
      body: QueryMinutesStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTextHeaders extends $tea.Model {
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

export class QueryMinutesTextRequest extends $tea.Model {
  direction?: number;
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'number',
      maxResults: 'number',
      nextToken: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTextResponseBody extends $tea.Model {
  hasNext?: boolean;
  nextToken?: string;
  paragraphList?: QueryMinutesTextResponseBodyParagraphList[];
  static names(): { [key: string]: string } {
    return {
      hasNext: 'hasNext',
      nextToken: 'nextToken',
      paragraphList: 'paragraphList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      nextToken: 'string',
      paragraphList: { 'type': 'array', 'itemType': QueryMinutesTextResponseBodyParagraphList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMinutesTextResponseBody;
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
      body: QueryMinutesTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTodoHeaders extends $tea.Model {
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

export class QueryMinutesTodoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * D5xxxxxxxxxgiEiE
   */
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

export class QueryMinutesTodoResponseBody extends $tea.Model {
  actions?: string[];
  dingtalkTodoList?: QueryMinutesTodoResponseBodyDingtalkTodoList[];
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      dingtalkTodoList: 'dingtalkTodoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      dingtalkTodoList: { 'type': 'array', 'itemType': QueryMinutesTodoResponseBodyDingtalkTodoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTodoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMinutesTodoResponseBody;
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
      body: QueryMinutesTodoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgDiyTemplatesHeaders extends $tea.Model {
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

export class QueryOrgDiyTemplatesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lJcRnm39OsU4jlFVmRGXXXXX
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgDiyTemplatesResponseBody extends $tea.Model {
  diyTemplates?: QueryOrgDiyTemplatesResponseBodyDiyTemplates[];
  hasNext?: boolean;
  nextToken?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      diyTemplates: 'diyTemplates',
      hasNext: 'hasNext',
      nextToken: 'nextToken',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diyTemplates: { 'type': 'array', 'itemType': QueryOrgDiyTemplatesResponseBodyDiyTemplates },
      hasNext: 'boolean',
      nextToken: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgDiyTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOrgDiyTemplatesResponseBody;
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
      body: QueryOrgDiyTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScheduleConfMinutesHeaders extends $tea.Model {
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

export class QueryScheduleConfMinutesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  eventId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'eventId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScheduleConfMinutesResponseBody extends $tea.Model {
  minutesDetails?: QueryScheduleConfMinutesResponseBodyMinutesDetails[];
  static names(): { [key: string]: string } {
    return {
      minutesDetails: 'minutesDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minutesDetails: { 'type': 'array', 'itemType': QueryScheduleConfMinutesResponseBodyMinutesDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScheduleConfMinutesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryScheduleConfMinutesResponseBody;
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
      body: QueryScheduleConfMinutesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmartDeviceAiSummaryHeaders extends $tea.Model {
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

export class QuerySmartDeviceAiSummaryRequest extends $tea.Model {
  agentId?: string;
  openFileId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      openFileId: 'openFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      openFileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmartDeviceAiSummaryResponseBody extends $tea.Model {
  aiSummaryList?: QuerySmartDeviceAiSummaryResponseBodyAiSummaryList[];
  state?: number;
  static names(): { [key: string]: string } {
    return {
      aiSummaryList: 'aiSummaryList',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiSummaryList: { 'type': 'array', 'itemType': QuerySmartDeviceAiSummaryResponseBodyAiSummaryList },
      state: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmartDeviceAiSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySmartDeviceAiSummaryResponseBody;
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
      body: QuerySmartDeviceAiSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummaryWithTemplateHeaders extends $tea.Model {
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

export class QuerySummaryWithTemplateRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  diyTemplateVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * meeting-assistant
   */
  summaryTemplateId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  summaryTemplateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lJcRnm39OsU4jlFVmRGXXXXX
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      diyTemplateVersion: 'diyTemplateVersion',
      summaryTemplateId: 'summaryTemplateId',
      summaryTemplateType: 'summaryTemplateType',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diyTemplateVersion: 'string',
      summaryTemplateId: 'string',
      summaryTemplateType: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummaryWithTemplateResponseBody extends $tea.Model {
  summaryText?: string;
  static names(): { [key: string]: string } {
    return {
      summaryText: 'summaryText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummaryWithTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySummaryWithTemplateResponseBody;
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
      body: QuerySummaryWithTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUploadVideoPlayInfoHeaders extends $tea.Model {
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

export class QueryUploadVideoPlayInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
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

export class QueryUploadVideoPlayInfoResponseBody extends $tea.Model {
  playInfo?: QueryUploadVideoPlayInfoResponseBodyPlayInfo;
  static names(): { [key: string]: string } {
    return {
      playInfo: 'playInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playInfo: QueryUploadVideoPlayInfoResponseBodyPlayInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUploadVideoPlayInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUploadVideoPlayInfoResponseBody;
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
      body: QueryUploadVideoPlayInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserAvailableDiyTemplatesHeaders extends $tea.Model {
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

export class QueryUserAvailableDiyTemplatesRequest extends $tea.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lJcRnm39OsU4jlFVmRGXXXXX
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserAvailableDiyTemplatesResponseBody extends $tea.Model {
  hasNext?: boolean;
  nextToken?: string;
  orgDiyTemplates?: QueryUserAvailableDiyTemplatesResponseBodyOrgDiyTemplates[];
  userDiyTemplates?: QueryUserAvailableDiyTemplatesResponseBodyUserDiyTemplates[];
  static names(): { [key: string]: string } {
    return {
      hasNext: 'hasNext',
      nextToken: 'nextToken',
      orgDiyTemplates: 'orgDiyTemplates',
      userDiyTemplates: 'userDiyTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      nextToken: 'string',
      orgDiyTemplates: { 'type': 'array', 'itemType': QueryUserAvailableDiyTemplatesResponseBodyOrgDiyTemplates },
      userDiyTemplates: { 'type': 'array', 'itemType': QueryUserAvailableDiyTemplatesResponseBodyUserDiyTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserAvailableDiyTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserAvailableDiyTemplatesResponseBody;
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
      body: QueryUserAvailableDiyTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserMinutesPermissionHeaders extends $tea.Model {
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

export class QueryUserMinutesPermissionResponseBody extends $tea.Model {
  hasPermission?: boolean;
  /**
   * @remarks
   * 角色类型：manager-管理员, owner-所有者, editor-可编辑, read_download-可查看/下载, read-仅查看, none-无权限
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      hasPermission: 'hasPermission',
      roleType: 'roleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPermission: 'boolean',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserMinutesPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserMinutesPermissionResponseBody;
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
      body: QueryUserMinutesPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDetailPageCustomTabHeaders extends $tea.Model {
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

export class SetDetailPageCustomTabRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customTabList?: SetDetailPageCustomTabRequestCustomTabList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lJcRnm39OsU4jlFVmRGXXXXX
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      customTabList: 'customTabList',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTabList: { 'type': 'array', 'itemType': SetDetailPageCustomTabRequestCustomTabList },
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDetailPageCustomTabResponseBody extends $tea.Model {
  taskUuid?: string;
  static names(): { [key: string]: string } {
    return {
      taskUuid: 'taskUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDetailPageCustomTabResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDetailPageCustomTabResponseBody;
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
      body: SetDetailPageCustomTabResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInProgressCustomTabsHeaders extends $tea.Model {
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

export class SetInProgressCustomTabsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customTabList?: SetInProgressCustomTabsRequestCustomTabList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lJcRnm39OsU4jlFVmRGXXXXX
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      customTabList: 'customTabList',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTabList: { 'type': 'array', 'itemType': SetInProgressCustomTabsRequestCustomTabList },
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInProgressCustomTabsResponseBody extends $tea.Model {
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

export class SetInProgressCustomTabsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetInProgressCustomTabsResponseBody;
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
      body: SetInProgressCustomTabsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMinutesTodosVisibleHeaders extends $tea.Model {
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

export class SetMinutesTodosVisibleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  todosVisible?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lJcRnm39OsU4jlFVmRGXXXXX
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      todosVisible: 'todosVisible',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      todosVisible: 'boolean',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMinutesTodosVisibleResponseBody extends $tea.Model {
  taskUuid?: string;
  todosVisible?: boolean;
  static names(): { [key: string]: string } {
    return {
      taskUuid: 'taskUuid',
      todosVisible: 'todosVisible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUuid: 'string',
      todosVisible: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMinutesTodosVisibleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetMinutesTodosVisibleResponseBody;
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
      body: SetMinutesTodosVisibleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMinutesTitleHeaders extends $tea.Model {
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

export class UpdateMinutesTitleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMinutesTitleResponseBody extends $tea.Model {
  taskUuid?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      taskUuid: 'taskUuid',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUuid: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMinutesTitleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMinutesTitleResponseBody;
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
      body: UpdateMinutesTitleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePermissionHeaders extends $tea.Model {
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

export class UpdatePermissionRequest extends $tea.Model {
  memberInfoList?: UpdatePermissionRequestMemberInfoList[];
  /**
   * @example
   * 0
   */
  opType?: number;
  /**
   * @example
   * 1000
   */
  roleCode?: string;
  roleSubResourceIds?: string[];
  /**
   * @example
   * 0
   */
  shareScope?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lJcRnm39OsU4jlFVmRGXXXXX
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      memberInfoList: 'memberInfoList',
      opType: 'opType',
      roleCode: 'roleCode',
      roleSubResourceIds: 'roleSubResourceIds',
      shareScope: 'shareScope',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberInfoList: { 'type': 'array', 'itemType': UpdatePermissionRequestMemberInfoList },
      opType: 'number',
      roleCode: 'string',
      roleSubResourceIds: { 'type': 'array', 'itemType': 'string' },
      shareScope: 'number',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePermissionResponseBody extends $tea.Model {
  failMemberInfoList?: UpdatePermissionResponseBodyFailMemberInfoList[];
  static names(): { [key: string]: string } {
    return {
      failMemberInfoList: 'failMemberInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failMemberInfoList: { 'type': 'array', 'itemType': UpdatePermissionResponseBodyFailMemberInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePermissionResponseBody;
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
      body: UpdatePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMinutesDetailsResponseBodyMinutesDetails extends $tea.Model {
  bizType?: number;
  creatorNick?: string;
  creatorUnionId?: string;
  durationMicros?: number;
  isDeleted?: number;
  size?: number;
  startTime?: number;
  status?: number;
  taskUuid?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      creatorNick: 'creatorNick',
      creatorUnionId: 'creatorUnionId',
      durationMicros: 'durationMicros',
      isDeleted: 'isDeleted',
      size: 'size',
      startTime: 'startTime',
      status: 'status',
      taskUuid: 'taskUuid',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      creatorNick: 'string',
      creatorUnionId: 'string',
      durationMicros: 'number',
      isDeleted: 'number',
      size: 'number',
      startTime: 'number',
      status: 'number',
      taskUuid: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMinutesTaskResultRequestSummaryExportSetting extends $tea.Model {
  enableBilingual?: boolean;
  /**
   * @example
   * zh
   */
  targetLang?: string;
  static names(): { [key: string]: string } {
    return {
      enableBilingual: 'enableBilingual',
      targetLang: 'targetLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableBilingual: 'boolean',
      targetLang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizMinutesResponseBodyMinutesDetails extends $tea.Model {
  bizType?: number;
  creatorNick?: string;
  creatorUnionId?: string;
  durationMicros?: number;
  isDeleted?: number;
  size?: number;
  startTime?: number;
  status?: number;
  taskUuid?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      creatorNick: 'creatorNick',
      creatorUnionId: 'creatorUnionId',
      durationMicros: 'durationMicros',
      isDeleted: 'isDeleted',
      size: 'size',
      startTime: 'startTime',
      status: 'status',
      taskUuid: 'taskUuid',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      creatorNick: 'string',
      creatorUnionId: 'string',
      durationMicros: 'number',
      isDeleted: 'number',
      size: 'number',
      startTime: 'number',
      status: 'number',
      taskUuid: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateMinutesListResponseBodyMinutesDetails extends $tea.Model {
  bizType?: number;
  creatorNick?: string;
  creatorUnionId?: string;
  durationMicros?: number;
  isDeleted?: number;
  size?: number;
  startTime?: number;
  status?: number;
  taskUuid?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      creatorNick: 'creatorNick',
      creatorUnionId: 'creatorUnionId',
      durationMicros: 'durationMicros',
      isDeleted: 'isDeleted',
      size: 'size',
      startTime: 'startTime',
      status: 'status',
      taskUuid: 'taskUuid',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      creatorNick: 'string',
      creatorUnionId: 'string',
      durationMicros: 'number',
      isDeleted: 'number',
      size: 'number',
      startTime: 'number',
      status: 'number',
      taskUuid: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesChaptersResponseBodyChapterList extends $tea.Model {
  content?: string;
  endTime?: number;
  startTime?: number;
  title?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      endTime: 'endTime',
      startTime: 'startTime',
      title: 'title',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      endTime: 'number',
      startTime: 'number',
      title: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesPlayInfoResponseBodyPlayInfo extends $tea.Model {
  downloadUrl?: string;
  duration?: string;
  mediaType?: string;
  playUrl?: string;
  size?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      duration: 'duration',
      mediaType: 'mediaType',
      playUrl: 'playUrl',
      size: 'size',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      duration: 'string',
      mediaType: 'string',
      playUrl: 'string',
      size: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesShareListResponseBodyMinutesDetails extends $tea.Model {
  bizType?: number;
  creatorNick?: string;
  creatorUnionId?: string;
  durationMicros?: number;
  isDeleted?: number;
  size?: number;
  startTime?: number;
  status?: number;
  taskUuid?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      creatorNick: 'creatorNick',
      creatorUnionId: 'creatorUnionId',
      durationMicros: 'durationMicros',
      isDeleted: 'isDeleted',
      size: 'size',
      startTime: 'startTime',
      status: 'status',
      taskUuid: 'taskUuid',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      creatorNick: 'string',
      creatorUnionId: 'string',
      durationMicros: 'number',
      isDeleted: 'number',
      size: 'number',
      startTime: 'number',
      status: 'number',
      taskUuid: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTextResponseBodyParagraphListSentenceListWordList extends $tea.Model {
  endTime?: number;
  startTime?: number;
  word?: string;
  wordId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      word: 'word',
      wordId: 'wordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      word: 'string',
      wordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTextResponseBodyParagraphListSentenceList extends $tea.Model {
  endTime?: number;
  sentence?: string;
  startTime?: number;
  wordList?: QueryMinutesTextResponseBodyParagraphListSentenceListWordList[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      sentence: 'sentence',
      startTime: 'startTime',
      wordList: 'wordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      sentence: 'string',
      startTime: 'number',
      wordList: { 'type': 'array', 'itemType': QueryMinutesTextResponseBodyParagraphListSentenceListWordList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTextResponseBodyParagraphListSpeakerDisplay extends $tea.Model {
  avatarUrl?: string;
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      nickName: 'nickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      nickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTextResponseBodyParagraphList extends $tea.Model {
  endTime?: number;
  nickName?: string;
  paragraph?: string;
  paragraphId?: number;
  recordId?: number;
  sentenceList?: QueryMinutesTextResponseBodyParagraphListSentenceList[];
  speakerDisplay?: QueryMinutesTextResponseBodyParagraphListSpeakerDisplay;
  startTime?: number;
  subSpeakerId?: string;
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      nickName: 'nickName',
      paragraph: 'paragraph',
      paragraphId: 'paragraphId',
      recordId: 'recordId',
      sentenceList: 'sentenceList',
      speakerDisplay: 'speakerDisplay',
      startTime: 'startTime',
      subSpeakerId: 'subSpeakerId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      nickName: 'string',
      paragraph: 'string',
      paragraphId: 'number',
      recordId: 'number',
      sentenceList: { 'type': 'array', 'itemType': QueryMinutesTextResponseBodyParagraphListSentenceList },
      speakerDisplay: QueryMinutesTextResponseBodyParagraphListSpeakerDisplay,
      startTime: 'number',
      subSpeakerId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTodoResponseBodyDingtalkTodoListExecutorList extends $tea.Model {
  avatar?: string;
  nick?: string;
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      nick: 'nick',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      nick: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTodoResponseBodyDingtalkTodoList extends $tea.Model {
  createdTime?: number;
  creatorUnionId?: string;
  deadline?: string;
  dingtalkTodoId?: string;
  executorList?: QueryMinutesTodoResponseBodyDingtalkTodoListExecutorList[];
  isDone?: boolean;
  minutesTodoId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      creatorUnionId: 'creatorUnionId',
      deadline: 'deadline',
      dingtalkTodoId: 'dingtalkTodoId',
      executorList: 'executorList',
      isDone: 'isDone',
      minutesTodoId: 'minutesTodoId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      creatorUnionId: 'string',
      deadline: 'string',
      dingtalkTodoId: 'string',
      executorList: { 'type': 'array', 'itemType': QueryMinutesTodoResponseBodyDingtalkTodoListExecutorList },
      isDone: 'boolean',
      minutesTodoId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgDiyTemplatesResponseBodyDiyTemplates extends $tea.Model {
  acceptTimes?: number;
  createTime?: number;
  creatorNick?: string;
  creatorUnionId?: string;
  diyTemplateBriefIntro?: string;
  diyTemplateIconUrl?: string;
  diyTemplateKey?: string;
  diyTemplateLatestVersion?: number;
  diyTemplateSource?: string;
  diyTemplateTitle?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      acceptTimes: 'acceptTimes',
      createTime: 'createTime',
      creatorNick: 'creatorNick',
      creatorUnionId: 'creatorUnionId',
      diyTemplateBriefIntro: 'diyTemplateBriefIntro',
      diyTemplateIconUrl: 'diyTemplateIconUrl',
      diyTemplateKey: 'diyTemplateKey',
      diyTemplateLatestVersion: 'diyTemplateLatestVersion',
      diyTemplateSource: 'diyTemplateSource',
      diyTemplateTitle: 'diyTemplateTitle',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptTimes: 'number',
      createTime: 'number',
      creatorNick: 'string',
      creatorUnionId: 'string',
      diyTemplateBriefIntro: 'string',
      diyTemplateIconUrl: 'string',
      diyTemplateKey: 'string',
      diyTemplateLatestVersion: 'number',
      diyTemplateSource: 'string',
      diyTemplateTitle: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScheduleConfMinutesResponseBodyMinutesDetails extends $tea.Model {
  bizType?: number;
  creatorNick?: string;
  creatorUnionId?: string;
  durationMicros?: number;
  isDeleted?: number;
  size?: number;
  startTime?: number;
  status?: number;
  taskUuid?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      creatorNick: 'creatorNick',
      creatorUnionId: 'creatorUnionId',
      durationMicros: 'durationMicros',
      isDeleted: 'isDeleted',
      size: 'size',
      startTime: 'startTime',
      status: 'status',
      taskUuid: 'taskUuid',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      creatorNick: 'string',
      creatorUnionId: 'string',
      durationMicros: 'number',
      isDeleted: 'number',
      size: 'number',
      startTime: 'number',
      status: 'number',
      taskUuid: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmartDeviceAiSummaryResponseBodyAiSummaryList extends $tea.Model {
  agentId?: string;
  aiSceneRuleAvatarUrl?: string;
  creatorUnionId?: string;
  instanceId?: string;
  openFileId?: string;
  order?: number;
  summary?: string;
  templateId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      aiSceneRuleAvatarUrl: 'aiSceneRuleAvatarUrl',
      creatorUnionId: 'creatorUnionId',
      instanceId: 'instanceId',
      openFileId: 'openFileId',
      order: 'order',
      summary: 'summary',
      templateId: 'templateId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      aiSceneRuleAvatarUrl: 'string',
      creatorUnionId: 'string',
      instanceId: 'string',
      openFileId: 'string',
      order: 'number',
      summary: 'string',
      templateId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUploadVideoPlayInfoResponseBodyPlayInfo extends $tea.Model {
  duration?: number;
  playUrl?: string;
  size?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      playUrl: 'playUrl',
      size: 'size',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      playUrl: 'string',
      size: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserAvailableDiyTemplatesResponseBodyOrgDiyTemplates extends $tea.Model {
  createTime?: number;
  diyTemplateBriefIntro?: string;
  diyTemplateIconUrl?: string;
  diyTemplateKey?: string;
  diyTemplateLatestVersion?: number;
  diyTemplateSource?: string;
  diyTemplateTitle?: string;
  modifiedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      diyTemplateBriefIntro: 'diyTemplateBriefIntro',
      diyTemplateIconUrl: 'diyTemplateIconUrl',
      diyTemplateKey: 'diyTemplateKey',
      diyTemplateLatestVersion: 'diyTemplateLatestVersion',
      diyTemplateSource: 'diyTemplateSource',
      diyTemplateTitle: 'diyTemplateTitle',
      modifiedTime: 'modifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      diyTemplateBriefIntro: 'string',
      diyTemplateIconUrl: 'string',
      diyTemplateKey: 'string',
      diyTemplateLatestVersion: 'number',
      diyTemplateSource: 'string',
      diyTemplateTitle: 'string',
      modifiedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserAvailableDiyTemplatesResponseBodyUserDiyTemplates extends $tea.Model {
  createTime?: number;
  diyTemplateBriefIntro?: string;
  diyTemplateIconUrl?: string;
  diyTemplateKey?: string;
  diyTemplateLatestVersion?: number;
  diyTemplateSource?: string;
  diyTemplateTitle?: string;
  modifiedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      diyTemplateBriefIntro: 'diyTemplateBriefIntro',
      diyTemplateIconUrl: 'diyTemplateIconUrl',
      diyTemplateKey: 'diyTemplateKey',
      diyTemplateLatestVersion: 'diyTemplateLatestVersion',
      diyTemplateSource: 'diyTemplateSource',
      diyTemplateTitle: 'diyTemplateTitle',
      modifiedTime: 'modifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      diyTemplateBriefIntro: 'string',
      diyTemplateIconUrl: 'string',
      diyTemplateKey: 'string',
      diyTemplateLatestVersion: 'number',
      diyTemplateSource: 'string',
      diyTemplateTitle: 'string',
      modifiedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDetailPageCustomTabRequestCustomTabList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * analyze
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn_ZH
   */
  defaultLocale?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nameI18nMap?: { [key: string]: any };
  /**
   * @example
   * https://example.com/pc/tab
   */
  pcUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/tab
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      defaultLocale: 'defaultLocale',
      nameI18nMap: 'nameI18nMap',
      pcUrl: 'pcUrl',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      defaultLocale: 'string',
      nameI18nMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pcUrl: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInProgressCustomTabsRequestCustomTabList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * data_analysis
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh_CN
   */
  defaultLocale?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nameI18nMap?: { [key: string]: any };
  /**
   * @example
   * https://example.com/app/minutes/analysis_pc
   */
  pcUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/app/minutes/analysis_h5
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      defaultLocale: 'defaultLocale',
      nameI18nMap: 'nameI18nMap',
      pcUrl: 'pcUrl',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      defaultLocale: 'string',
      nameI18nMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pcUrl: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePermissionRequestMemberInfoList extends $tea.Model {
  /**
   * @example
   * 2
   */
  memberType?: number;
  /**
   * @example
   * lJcRnm39OsU4jlFVmRGXXXXX
   */
  memberUnionId?: string;
  /**
   * @example
   * 2
   */
  policyId?: number;
  static names(): { [key: string]: string } {
    return {
      memberType: 'memberType',
      memberUnionId: 'memberUnionId',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberType: 'number',
      memberUnionId: 'string',
      policyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePermissionResponseBodyFailMemberInfoList extends $tea.Model {
  /**
   * @example
   * 2
   */
  memberType?: number;
  /**
   * @example
   * lJcRnm39OsU4jlFVmRGXXXXX
   */
  memberUnionId?: string;
  /**
   * @example
   * 2
   */
  policyId?: number;
  static names(): { [key: string]: string } {
    return {
      memberType: 'memberType',
      memberUnionId: 'memberUnionId',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberType: 'number',
      memberUnionId: 'string',
      policyId: 'number',
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
   * 批量获取闪记详情
   * 
   * @param request - BatchGetMinutesDetailsRequest
   * @param headers - BatchGetMinutesDetailsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetMinutesDetailsResponse
   */
  async batchGetMinutesDetailsWithOptions(request: BatchGetMinutesDetailsRequest, headers: BatchGetMinutesDetailsHeaders, runtime: $Util.RuntimeOptions): Promise<BatchGetMinutesDetailsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.unionId)) {
      query["unionId"] = request.unionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskUuids)) {
      body["taskUuids"] = request.taskUuids;
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
      action: "BatchGetMinutesDetails",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/details/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<BatchGetMinutesDetailsResponse>(await this.execute(params, req, runtime), new BatchGetMinutesDetailsResponse({}));
  }

  /**
   * 批量获取闪记详情
   * 
   * @param request - BatchGetMinutesDetailsRequest
   * @returns BatchGetMinutesDetailsResponse
   */
  async batchGetMinutesDetails(request: BatchGetMinutesDetailsRequest): Promise<BatchGetMinutesDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BatchGetMinutesDetailsHeaders({ });
    return await this.batchGetMinutesDetailsWithOptions(request, headers, runtime);
  }

  /**
   * 从上传的媒体文件创建闪记
   * 
   * @param request - CreateMinutesByUploadFileRequest
   * @param headers - CreateMinutesByUploadFileHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMinutesByUploadFileResponse
   */
  async createMinutesByUploadFileWithOptions(request: CreateMinutesByUploadFileRequest, headers: CreateMinutesByUploadFileHeaders, runtime: $Util.RuntimeOptions): Promise<CreateMinutesByUploadFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.unionId)) {
      query["unionId"] = request.unionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["bizId"] = request.bizId;
    }

    if (!Util.isUnset(request.creatorId)) {
      body["creatorId"] = request.creatorId;
    }

    if (!Util.isUnset(request.mediaFileUrl)) {
      body["mediaFileUrl"] = request.mediaFileUrl;
    }

    if (!Util.isUnset(request.mediaType)) {
      body["mediaType"] = request.mediaType;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMinutesByUploadFile",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/createMinutesByUploadFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateMinutesByUploadFileResponse>(await this.execute(params, req, runtime), new CreateMinutesByUploadFileResponse({}));
  }

  /**
   * 从上传的媒体文件创建闪记
   * 
   * @param request - CreateMinutesByUploadFileRequest
   * @returns CreateMinutesByUploadFileResponse
   */
  async createMinutesByUploadFile(request: CreateMinutesByUploadFileRequest): Promise<CreateMinutesByUploadFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateMinutesByUploadFileHeaders({ });
    return await this.createMinutesByUploadFileWithOptions(request, headers, runtime);
  }

  /**
   * 创建DingTalkA1小助理分析
   * 
   * @param request - CreateSmartDeviceAiSummaryRequest
   * @param headers - CreateSmartDeviceAiSummaryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmartDeviceAiSummaryResponse
   */
  async createSmartDeviceAiSummaryWithOptions(request: CreateSmartDeviceAiSummaryRequest, headers: CreateSmartDeviceAiSummaryHeaders, runtime: $Util.RuntimeOptions): Promise<CreateSmartDeviceAiSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isvContext)) {
      body["isvContext"] = request.isvContext;
    }

    if (!Util.isUnset(request.openFileId)) {
      body["openFileId"] = request.openFileId;
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
      action: "CreateSmartDeviceAiSummary",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/smartdevice/aisummary/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateSmartDeviceAiSummaryResponse>(await this.execute(params, req, runtime), new CreateSmartDeviceAiSummaryResponse({}));
  }

  /**
   * 创建DingTalkA1小助理分析
   * 
   * @param request - CreateSmartDeviceAiSummaryRequest
   * @returns CreateSmartDeviceAiSummaryResponse
   */
  async createSmartDeviceAiSummary(request: CreateSmartDeviceAiSummaryRequest): Promise<CreateSmartDeviceAiSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateSmartDeviceAiSummaryHeaders({ });
    return await this.createSmartDeviceAiSummaryWithOptions(request, headers, runtime);
  }

  /**
   * 删除闪记
   * 
   * @param request - DeleteMinutesRequest
   * @param headers - DeleteMinutesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMinutesResponse
   */
  async deleteMinutesWithOptions(taskUuid: string, request: DeleteMinutesRequest, headers: DeleteMinutesHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteMinutesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "DeleteMinutes",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/tasks/${taskUuid}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteMinutesResponse>(await this.execute(params, req, runtime), new DeleteMinutesResponse({}));
  }

  /**
   * 删除闪记
   * 
   * @param request - DeleteMinutesRequest
   * @returns DeleteMinutesResponse
   */
  async deleteMinutes(taskUuid: string, request: DeleteMinutesRequest): Promise<DeleteMinutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteMinutesHeaders({ });
    return await this.deleteMinutesWithOptions(taskUuid, request, headers, runtime);
  }

  /**
   * 导出闪记任务结果
   * 
   * @param request - ExportMinutesTaskResultRequest
   * @param headers - ExportMinutesTaskResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportMinutesTaskResultResponse
   */
  async exportMinutesTaskResultWithOptions(request: ExportMinutesTaskResultRequest, headers: ExportMinutesTaskResultHeaders, runtime: $Util.RuntimeOptions): Promise<ExportMinutesTaskResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.unionId)) {
      query["unionId"] = request.unionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.expireTime)) {
      body["expireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.summaryExportSetting)) {
      body["summaryExportSetting"] = request.summaryExportSetting;
    }

    if (!Util.isUnset(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    if (!Util.isUnset(request.taskUuid)) {
      body["taskUuid"] = request.taskUuid;
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
      action: "ExportMinutesTaskResult",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/minutesTask/export`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ExportMinutesTaskResultResponse>(await this.execute(params, req, runtime), new ExportMinutesTaskResultResponse({}));
  }

  /**
   * 导出闪记任务结果
   * 
   * @param request - ExportMinutesTaskResultRequest
   * @returns ExportMinutesTaskResultResponse
   */
  async exportMinutesTaskResult(request: ExportMinutesTaskResultRequest): Promise<ExportMinutesTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ExportMinutesTaskResultHeaders({ });
    return await this.exportMinutesTaskResultWithOptions(request, headers, runtime);
  }

  /**
   * 生成摘要
   * 
   * @param request - GenerateSummaryRequest
   * @param headers - GenerateSummaryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateSummaryResponse
   */
  async generateSummaryWithOptions(taskUuid: string, request: GenerateSummaryRequest, headers: GenerateSummaryHeaders, runtime: $Util.RuntimeOptions): Promise<GenerateSummaryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.unionId)) {
      query["unionId"] = request.unionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.diyTemplateVersion)) {
      body["diyTemplateVersion"] = request.diyTemplateVersion;
    }

    if (!Util.isUnset(request.summaryTemplateId)) {
      body["summaryTemplateId"] = request.summaryTemplateId;
    }

    if (!Util.isUnset(request.summaryTemplateType)) {
      body["summaryTemplateType"] = request.summaryTemplateType;
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
      action: "GenerateSummary",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/tasks/${taskUuid}/summary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GenerateSummaryResponse>(await this.execute(params, req, runtime), new GenerateSummaryResponse({}));
  }

  /**
   * 生成摘要
   * 
   * @param request - GenerateSummaryRequest
   * @returns GenerateSummaryResponse
   */
  async generateSummary(taskUuid: string, request: GenerateSummaryRequest): Promise<GenerateSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GenerateSummaryHeaders({ });
    return await this.generateSummaryWithOptions(taskUuid, request, headers, runtime);
  }

  /**
   * 查询闪记摘要
   * 
   * @param request - OpenQueryMinutesSummaryRequest
   * @param headers - OpenQueryMinutesSummaryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenQueryMinutesSummaryResponse
   */
  async openQueryMinutesSummaryWithOptions(request: OpenQueryMinutesSummaryRequest, headers: OpenQueryMinutesSummaryHeaders, runtime: $Util.RuntimeOptions): Promise<OpenQueryMinutesSummaryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskUuid)) {
      query["taskUuid"] = request.taskUuid;
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
      action: "OpenQueryMinutesSummary",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/queryMinutesSummary`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<OpenQueryMinutesSummaryResponse>(await this.execute(params, req, runtime), new OpenQueryMinutesSummaryResponse({}));
  }

  /**
   * 查询闪记摘要
   * 
   * @param request - OpenQueryMinutesSummaryRequest
   * @returns OpenQueryMinutesSummaryResponse
   */
  async openQueryMinutesSummary(request: OpenQueryMinutesSummaryRequest): Promise<OpenQueryMinutesSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new OpenQueryMinutesSummaryHeaders({ });
    return await this.openQueryMinutesSummaryWithOptions(request, headers, runtime);
  }

  /**
   * 查询闪会、文档等来源的闪记列表
   * 
   * @param request - QueryBizMinutesRequest
   * @param headers - QueryBizMinutesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBizMinutesResponse
   */
  async queryBizMinutesWithOptions(request: QueryBizMinutesRequest, headers: QueryBizMinutesHeaders, runtime: $Util.RuntimeOptions): Promise<QueryBizMinutesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      query["bizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["bizType"] = request.bizType;
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
      action: "QueryBizMinutes",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/queryBizMinutes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryBizMinutesResponse>(await this.execute(params, req, runtime), new QueryBizMinutesResponse({}));
  }

  /**
   * 查询闪会、文档等来源的闪记列表
   * 
   * @param request - QueryBizMinutesRequest
   * @returns QueryBizMinutesResponse
   */
  async queryBizMinutes(request: QueryBizMinutesRequest): Promise<QueryBizMinutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryBizMinutesHeaders({ });
    return await this.queryBizMinutesWithOptions(request, headers, runtime);
  }

  /**
   * 查询自己创建的闪记列表
   * 
   * @param request - QueryCreateMinutesListRequest
   * @param headers - QueryCreateMinutesListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCreateMinutesListResponse
   */
  async queryCreateMinutesListWithOptions(request: QueryCreateMinutesListRequest, headers: QueryCreateMinutesListHeaders, runtime: $Util.RuntimeOptions): Promise<QueryCreateMinutesListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "QueryCreateMinutesList",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/createLists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryCreateMinutesListResponse>(await this.execute(params, req, runtime), new QueryCreateMinutesListResponse({}));
  }

  /**
   * 查询自己创建的闪记列表
   * 
   * @param request - QueryCreateMinutesListRequest
   * @returns QueryCreateMinutesListResponse
   */
  async queryCreateMinutesList(request: QueryCreateMinutesListRequest): Promise<QueryCreateMinutesListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryCreateMinutesListHeaders({ });
    return await this.queryCreateMinutesListWithOptions(request, headers, runtime);
  }

  /**
   * 查询闪记基本信息
   * 
   * @param request - QueryMinutesBasicInfoRequest
   * @param headers - QueryMinutesBasicInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMinutesBasicInfoResponse
   */
  async queryMinutesBasicInfoWithOptions(request: QueryMinutesBasicInfoRequest, headers: QueryMinutesBasicInfoHeaders, runtime: $Util.RuntimeOptions): Promise<QueryMinutesBasicInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskUuid)) {
      query["taskUuid"] = request.taskUuid;
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
      action: "QueryMinutesBasicInfo",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/queryMinutesBasicInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryMinutesBasicInfoResponse>(await this.execute(params, req, runtime), new QueryMinutesBasicInfoResponse({}));
  }

  /**
   * 查询闪记基本信息
   * 
   * @param request - QueryMinutesBasicInfoRequest
   * @returns QueryMinutesBasicInfoResponse
   */
  async queryMinutesBasicInfo(request: QueryMinutesBasicInfoRequest): Promise<QueryMinutesBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryMinutesBasicInfoHeaders({ });
    return await this.queryMinutesBasicInfoWithOptions(request, headers, runtime);
  }

  /**
   * 查询听记智能章节列表
   * 
   * @param request - QueryMinutesChaptersRequest
   * @param headers - QueryMinutesChaptersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMinutesChaptersResponse
   */
  async queryMinutesChaptersWithOptions(taskUuid: string, request: QueryMinutesChaptersRequest, headers: QueryMinutesChaptersHeaders, runtime: $Util.RuntimeOptions): Promise<QueryMinutesChaptersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "QueryMinutesChapters",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/${taskUuid}/chapters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryMinutesChaptersResponse>(await this.execute(params, req, runtime), new QueryMinutesChaptersResponse({}));
  }

  /**
   * 查询听记智能章节列表
   * 
   * @param request - QueryMinutesChaptersRequest
   * @returns QueryMinutesChaptersResponse
   */
  async queryMinutesChapters(taskUuid: string, request: QueryMinutesChaptersRequest): Promise<QueryMinutesChaptersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryMinutesChaptersHeaders({ });
    return await this.queryMinutesChaptersWithOptions(taskUuid, request, headers, runtime);
  }

  /**
   * 查询闪记关键字
   * 
   * @param request - QueryMinutesKeywordRequest
   * @param headers - QueryMinutesKeywordHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMinutesKeywordResponse
   */
  async queryMinutesKeywordWithOptions(taskUuid: string, request: QueryMinutesKeywordRequest, headers: QueryMinutesKeywordHeaders, runtime: $Util.RuntimeOptions): Promise<QueryMinutesKeywordResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "QueryMinutesKeyword",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/${taskUuid}/keywords`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryMinutesKeywordResponse>(await this.execute(params, req, runtime), new QueryMinutesKeywordResponse({}));
  }

  /**
   * 查询闪记关键字
   * 
   * @param request - QueryMinutesKeywordRequest
   * @returns QueryMinutesKeywordResponse
   */
  async queryMinutesKeyword(taskUuid: string, request: QueryMinutesKeywordRequest): Promise<QueryMinutesKeywordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryMinutesKeywordHeaders({ });
    return await this.queryMinutesKeywordWithOptions(taskUuid, request, headers, runtime);
  }

  /**
   * 查询闪记媒体播放信息
   * 
   * @param request - QueryMinutesPlayInfoRequest
   * @param headers - QueryMinutesPlayInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMinutesPlayInfoResponse
   */
  async queryMinutesPlayInfoWithOptions(taskUuid: string, request: QueryMinutesPlayInfoRequest, headers: QueryMinutesPlayInfoHeaders, runtime: $Util.RuntimeOptions): Promise<QueryMinutesPlayInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "QueryMinutesPlayInfo",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/tasks/${taskUuid}/playInfos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryMinutesPlayInfoResponse>(await this.execute(params, req, runtime), new QueryMinutesPlayInfoResponse({}));
  }

  /**
   * 查询闪记媒体播放信息
   * 
   * @param request - QueryMinutesPlayInfoRequest
   * @returns QueryMinutesPlayInfoResponse
   */
  async queryMinutesPlayInfo(taskUuid: string, request: QueryMinutesPlayInfoRequest): Promise<QueryMinutesPlayInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryMinutesPlayInfoHeaders({ });
    return await this.queryMinutesPlayInfoWithOptions(taskUuid, request, headers, runtime);
  }

  /**
   * 获取与我共享闪记列表
   * 
   * @param request - QueryMinutesShareListRequest
   * @param headers - QueryMinutesShareListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMinutesShareListResponse
   */
  async queryMinutesShareListWithOptions(request: QueryMinutesShareListRequest, headers: QueryMinutesShareListHeaders, runtime: $Util.RuntimeOptions): Promise<QueryMinutesShareListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.scene)) {
      query["scene"] = request.scene;
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
      action: "QueryMinutesShareList",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/shareLists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryMinutesShareListResponse>(await this.execute(params, req, runtime), new QueryMinutesShareListResponse({}));
  }

  /**
   * 获取与我共享闪记列表
   * 
   * @param request - QueryMinutesShareListRequest
   * @returns QueryMinutesShareListResponse
   */
  async queryMinutesShareList(request: QueryMinutesShareListRequest): Promise<QueryMinutesShareListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryMinutesShareListHeaders({ });
    return await this.queryMinutesShareListWithOptions(request, headers, runtime);
  }

  /**
   * 查询闪记状态
   * 
   * @param request - QueryMinutesStatusRequest
   * @param headers - QueryMinutesStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMinutesStatusResponse
   */
  async queryMinutesStatusWithOptions(taskUuid: string, request: QueryMinutesStatusRequest, headers: QueryMinutesStatusHeaders, runtime: $Util.RuntimeOptions): Promise<QueryMinutesStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "QueryMinutesStatus",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/${taskUuid}/taskStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryMinutesStatusResponse>(await this.execute(params, req, runtime), new QueryMinutesStatusResponse({}));
  }

  /**
   * 查询闪记状态
   * 
   * @param request - QueryMinutesStatusRequest
   * @returns QueryMinutesStatusResponse
   */
  async queryMinutesStatus(taskUuid: string, request: QueryMinutesStatusRequest): Promise<QueryMinutesStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryMinutesStatusHeaders({ });
    return await this.queryMinutesStatusWithOptions(taskUuid, request, headers, runtime);
  }

  /**
   * 查询闪记转写文本内容
   * 
   * @param request - QueryMinutesTextRequest
   * @param headers - QueryMinutesTextHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMinutesTextResponse
   */
  async queryMinutesTextWithOptions(taskUuid: string, request: QueryMinutesTextRequest, headers: QueryMinutesTextHeaders, runtime: $Util.RuntimeOptions): Promise<QueryMinutesTextResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.direction)) {
      query["direction"] = request.direction;
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
      action: "QueryMinutesText",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/${taskUuid}/textInfos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryMinutesTextResponse>(await this.execute(params, req, runtime), new QueryMinutesTextResponse({}));
  }

  /**
   * 查询闪记转写文本内容
   * 
   * @param request - QueryMinutesTextRequest
   * @returns QueryMinutesTextResponse
   */
  async queryMinutesText(taskUuid: string, request: QueryMinutesTextRequest): Promise<QueryMinutesTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryMinutesTextHeaders({ });
    return await this.queryMinutesTextWithOptions(taskUuid, request, headers, runtime);
  }

  /**
   * 查询闪记待办
   * 
   * @param request - QueryMinutesTodoRequest
   * @param headers - QueryMinutesTodoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMinutesTodoResponse
   */
  async queryMinutesTodoWithOptions(taskUuid: string, request: QueryMinutesTodoRequest, headers: QueryMinutesTodoHeaders, runtime: $Util.RuntimeOptions): Promise<QueryMinutesTodoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "QueryMinutesTodo",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/${taskUuid}/todos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryMinutesTodoResponse>(await this.execute(params, req, runtime), new QueryMinutesTodoResponse({}));
  }

  /**
   * 查询闪记待办
   * 
   * @param request - QueryMinutesTodoRequest
   * @returns QueryMinutesTodoResponse
   */
  async queryMinutesTodo(taskUuid: string, request: QueryMinutesTodoRequest): Promise<QueryMinutesTodoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryMinutesTodoHeaders({ });
    return await this.queryMinutesTodoWithOptions(taskUuid, request, headers, runtime);
  }

  /**
   * 查询企业所有自定义纪要模板列表
   * 
   * @param request - QueryOrgDiyTemplatesRequest
   * @param headers - QueryOrgDiyTemplatesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrgDiyTemplatesResponse
   */
  async queryOrgDiyTemplatesWithOptions(request: QueryOrgDiyTemplatesRequest, headers: QueryOrgDiyTemplatesHeaders, runtime: $Util.RuntimeOptions): Promise<QueryOrgDiyTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "QueryOrgDiyTemplates",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/diyTemplates/orgDeclared`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryOrgDiyTemplatesResponse>(await this.execute(params, req, runtime), new QueryOrgDiyTemplatesResponse({}));
  }

  /**
   * 查询企业所有自定义纪要模板列表
   * 
   * @param request - QueryOrgDiyTemplatesRequest
   * @returns QueryOrgDiyTemplatesResponse
   */
  async queryOrgDiyTemplates(request: QueryOrgDiyTemplatesRequest): Promise<QueryOrgDiyTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryOrgDiyTemplatesHeaders({ });
    return await this.queryOrgDiyTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * 查询预约会议闪记列表
   * 
   * @param request - QueryScheduleConfMinutesRequest
   * @param headers - QueryScheduleConfMinutesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryScheduleConfMinutesResponse
   */
  async queryScheduleConfMinutesWithOptions(scheduleConferenceId: string, request: QueryScheduleConfMinutesRequest, headers: QueryScheduleConfMinutesHeaders, runtime: $Util.RuntimeOptions): Promise<QueryScheduleConfMinutesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eventId)) {
      query["eventId"] = request.eventId;
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
      action: "QueryScheduleConfMinutes",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/scheduleConference/${scheduleConferenceId}/minutes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryScheduleConfMinutesResponse>(await this.execute(params, req, runtime), new QueryScheduleConfMinutesResponse({}));
  }

  /**
   * 查询预约会议闪记列表
   * 
   * @param request - QueryScheduleConfMinutesRequest
   * @returns QueryScheduleConfMinutesResponse
   */
  async queryScheduleConfMinutes(scheduleConferenceId: string, request: QueryScheduleConfMinutesRequest): Promise<QueryScheduleConfMinutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryScheduleConfMinutesHeaders({ });
    return await this.queryScheduleConfMinutesWithOptions(scheduleConferenceId, request, headers, runtime);
  }

  /**
   * 查询DingTalkA1小助理分析
   * 
   * @param request - QuerySmartDeviceAiSummaryRequest
   * @param headers - QuerySmartDeviceAiSummaryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmartDeviceAiSummaryResponse
   */
  async querySmartDeviceAiSummaryWithOptions(request: QuerySmartDeviceAiSummaryRequest, headers: QuerySmartDeviceAiSummaryHeaders, runtime: $Util.RuntimeOptions): Promise<QuerySmartDeviceAiSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentId)) {
      body["agentId"] = request.agentId;
    }

    if (!Util.isUnset(request.openFileId)) {
      body["openFileId"] = request.openFileId;
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
      action: "QuerySmartDeviceAiSummary",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/smartdevice/aisummary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QuerySmartDeviceAiSummaryResponse>(await this.execute(params, req, runtime), new QuerySmartDeviceAiSummaryResponse({}));
  }

  /**
   * 查询DingTalkA1小助理分析
   * 
   * @param request - QuerySmartDeviceAiSummaryRequest
   * @returns QuerySmartDeviceAiSummaryResponse
   */
  async querySmartDeviceAiSummary(request: QuerySmartDeviceAiSummaryRequest): Promise<QuerySmartDeviceAiSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QuerySmartDeviceAiSummaryHeaders({ });
    return await this.querySmartDeviceAiSummaryWithOptions(request, headers, runtime);
  }

  /**
   * 根据模板id查询摘要
   * 
   * @param request - QuerySummaryWithTemplateRequest
   * @param headers - QuerySummaryWithTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySummaryWithTemplateResponse
   */
  async querySummaryWithTemplateWithOptions(taskUuid: string, request: QuerySummaryWithTemplateRequest, headers: QuerySummaryWithTemplateHeaders, runtime: $Util.RuntimeOptions): Promise<QuerySummaryWithTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.diyTemplateVersion)) {
      query["diyTemplateVersion"] = request.diyTemplateVersion;
    }

    if (!Util.isUnset(request.summaryTemplateId)) {
      query["summaryTemplateId"] = request.summaryTemplateId;
    }

    if (!Util.isUnset(request.summaryTemplateType)) {
      query["summaryTemplateType"] = request.summaryTemplateType;
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
      action: "QuerySummaryWithTemplate",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/tasks/${taskUuid}/summary/template`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QuerySummaryWithTemplateResponse>(await this.execute(params, req, runtime), new QuerySummaryWithTemplateResponse({}));
  }

  /**
   * 根据模板id查询摘要
   * 
   * @param request - QuerySummaryWithTemplateRequest
   * @returns QuerySummaryWithTemplateResponse
   */
  async querySummaryWithTemplate(taskUuid: string, request: QuerySummaryWithTemplateRequest): Promise<QuerySummaryWithTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QuerySummaryWithTemplateHeaders({ });
    return await this.querySummaryWithTemplateWithOptions(taskUuid, request, headers, runtime);
  }

  /**
   * 查询上传视频播放信息
   * 
   * @param request - QueryUploadVideoPlayInfoRequest
   * @param headers - QueryUploadVideoPlayInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUploadVideoPlayInfoResponse
   */
  async queryUploadVideoPlayInfoWithOptions(videoId: string, request: QueryUploadVideoPlayInfoRequest, headers: QueryUploadVideoPlayInfoHeaders, runtime: $Util.RuntimeOptions): Promise<QueryUploadVideoPlayInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "QueryUploadVideoPlayInfo",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/uploadVideos/${videoId}/playInfos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryUploadVideoPlayInfoResponse>(await this.execute(params, req, runtime), new QueryUploadVideoPlayInfoResponse({}));
  }

  /**
   * 查询上传视频播放信息
   * 
   * @param request - QueryUploadVideoPlayInfoRequest
   * @returns QueryUploadVideoPlayInfoResponse
   */
  async queryUploadVideoPlayInfo(videoId: string, request: QueryUploadVideoPlayInfoRequest): Promise<QueryUploadVideoPlayInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryUploadVideoPlayInfoHeaders({ });
    return await this.queryUploadVideoPlayInfoWithOptions(videoId, request, headers, runtime);
  }

  /**
   * 查询用户可见的企业自定义纪要模版列表
   * 
   * @param request - QueryUserAvailableDiyTemplatesRequest
   * @param headers - QueryUserAvailableDiyTemplatesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserAvailableDiyTemplatesResponse
   */
  async queryUserAvailableDiyTemplatesWithOptions(request: QueryUserAvailableDiyTemplatesRequest, headers: QueryUserAvailableDiyTemplatesHeaders, runtime: $Util.RuntimeOptions): Promise<QueryUserAvailableDiyTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "QueryUserAvailableDiyTemplates",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/diyTemplates/userAvailable`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryUserAvailableDiyTemplatesResponse>(await this.execute(params, req, runtime), new QueryUserAvailableDiyTemplatesResponse({}));
  }

  /**
   * 查询用户可见的企业自定义纪要模版列表
   * 
   * @param request - QueryUserAvailableDiyTemplatesRequest
   * @returns QueryUserAvailableDiyTemplatesResponse
   */
  async queryUserAvailableDiyTemplates(request: QueryUserAvailableDiyTemplatesRequest): Promise<QueryUserAvailableDiyTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryUserAvailableDiyTemplatesHeaders({ });
    return await this.queryUserAvailableDiyTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * 查询指定用户对某篇听记的权限
   * 
   * @param headers - QueryUserMinutesPermissionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserMinutesPermissionResponse
   */
  async queryUserMinutesPermissionWithOptions(taskUuid: string, unionId: string, headers: QueryUserMinutesPermissionHeaders, runtime: $Util.RuntimeOptions): Promise<QueryUserMinutesPermissionResponse> {
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
      action: "QueryUserMinutesPermission",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/tasks/${taskUuid}/permissions/${unionId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryUserMinutesPermissionResponse>(await this.execute(params, req, runtime), new QueryUserMinutesPermissionResponse({}));
  }

  /**
   * 查询指定用户对某篇听记的权限
   * @returns QueryUserMinutesPermissionResponse
   */
  async queryUserMinutesPermission(taskUuid: string, unionId: string): Promise<QueryUserMinutesPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryUserMinutesPermissionHeaders({ });
    return await this.queryUserMinutesPermissionWithOptions(taskUuid, unionId, headers, runtime);
  }

  /**
   * 自定义听记详情页tab
   * 
   * @param request - SetDetailPageCustomTabRequest
   * @param headers - SetDetailPageCustomTabHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDetailPageCustomTabResponse
   */
  async setDetailPageCustomTabWithOptions(taskUuid: string, request: SetDetailPageCustomTabRequest, headers: SetDetailPageCustomTabHeaders, runtime: $Util.RuntimeOptions): Promise<SetDetailPageCustomTabResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.unionId)) {
      query["unionId"] = request.unionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customTabList)) {
      body["customTabList"] = request.customTabList;
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
      action: "SetDetailPageCustomTab",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/tasks/${taskUuid}/customTabs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SetDetailPageCustomTabResponse>(await this.execute(params, req, runtime), new SetDetailPageCustomTabResponse({}));
  }

  /**
   * 自定义听记详情页tab
   * 
   * @param request - SetDetailPageCustomTabRequest
   * @returns SetDetailPageCustomTabResponse
   */
  async setDetailPageCustomTab(taskUuid: string, request: SetDetailPageCustomTabRequest): Promise<SetDetailPageCustomTabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SetDetailPageCustomTabHeaders({ });
    return await this.setDetailPageCustomTabWithOptions(taskUuid, request, headers, runtime);
  }

  /**
   * 配置应用在听记录制页的自定义Tab
   * 
   * @param request - SetInProgressCustomTabsRequest
   * @param headers - SetInProgressCustomTabsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetInProgressCustomTabsResponse
   */
  async setInProgressCustomTabsWithOptions(request: SetInProgressCustomTabsRequest, headers: SetInProgressCustomTabsHeaders, runtime: $Util.RuntimeOptions): Promise<SetInProgressCustomTabsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.unionId)) {
      query["unionId"] = request.unionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customTabList)) {
      body["customTabList"] = request.customTabList;
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
      action: "SetInProgressCustomTabs",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/apps/settings/inProgressTabs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SetInProgressCustomTabsResponse>(await this.execute(params, req, runtime), new SetInProgressCustomTabsResponse({}));
  }

  /**
   * 配置应用在听记录制页的自定义Tab
   * 
   * @param request - SetInProgressCustomTabsRequest
   * @returns SetInProgressCustomTabsResponse
   */
  async setInProgressCustomTabs(request: SetInProgressCustomTabsRequest): Promise<SetInProgressCustomTabsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SetInProgressCustomTabsHeaders({ });
    return await this.setInProgressCustomTabsWithOptions(request, headers, runtime);
  }

  /**
   * 设置AI纪要待办模块可见性
   * 
   * @param request - SetMinutesTodosVisibleRequest
   * @param headers - SetMinutesTodosVisibleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetMinutesTodosVisibleResponse
   */
  async setMinutesTodosVisibleWithOptions(taskUuid: string, request: SetMinutesTodosVisibleRequest, headers: SetMinutesTodosVisibleHeaders, runtime: $Util.RuntimeOptions): Promise<SetMinutesTodosVisibleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.unionId)) {
      query["unionId"] = request.unionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.todosVisible)) {
      body["todosVisible"] = request.todosVisible;
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
      action: "SetMinutesTodosVisible",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/tasks/${taskUuid}/todosVisible`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SetMinutesTodosVisibleResponse>(await this.execute(params, req, runtime), new SetMinutesTodosVisibleResponse({}));
  }

  /**
   * 设置AI纪要待办模块可见性
   * 
   * @param request - SetMinutesTodosVisibleRequest
   * @returns SetMinutesTodosVisibleResponse
   */
  async setMinutesTodosVisible(taskUuid: string, request: SetMinutesTodosVisibleRequest): Promise<SetMinutesTodosVisibleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SetMinutesTodosVisibleHeaders({ });
    return await this.setMinutesTodosVisibleWithOptions(taskUuid, request, headers, runtime);
  }

  /**
   * 更新闪记标题
   * 
   * @param request - UpdateMinutesTitleRequest
   * @param headers - UpdateMinutesTitleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMinutesTitleResponse
   */
  async updateMinutesTitleWithOptions(taskUuid: string, request: UpdateMinutesTitleRequest, headers: UpdateMinutesTitleHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateMinutesTitleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.title)) {
      query["title"] = request.title;
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
      action: "UpdateMinutesTitle",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/flashMinutes/tasks/${taskUuid}/titles`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateMinutesTitleResponse>(await this.execute(params, req, runtime), new UpdateMinutesTitleResponse({}));
  }

  /**
   * 更新闪记标题
   * 
   * @param request - UpdateMinutesTitleRequest
   * @returns UpdateMinutesTitleResponse
   */
  async updateMinutesTitle(taskUuid: string, request: UpdateMinutesTitleRequest): Promise<UpdateMinutesTitleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateMinutesTitleHeaders({ });
    return await this.updateMinutesTitleWithOptions(taskUuid, request, headers, runtime);
  }

  /**
   * 更新闪记权限
   * 
   * @param request - UpdatePermissionRequest
   * @param headers - UpdatePermissionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePermissionResponse
   */
  async updatePermissionWithOptions(taskUuid: string, request: UpdatePermissionRequest, headers: UpdatePermissionHeaders, runtime: $Util.RuntimeOptions): Promise<UpdatePermissionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.unionId)) {
      query["unionId"] = request.unionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.memberInfoList)) {
      body["memberInfoList"] = request.memberInfoList;
    }

    if (!Util.isUnset(request.opType)) {
      body["opType"] = request.opType;
    }

    if (!Util.isUnset(request.roleCode)) {
      body["roleCode"] = request.roleCode;
    }

    if (!Util.isUnset(request.roleSubResourceIds)) {
      body["roleSubResourceIds"] = request.roleSubResourceIds;
    }

    if (!Util.isUnset(request.shareScope)) {
      body["shareScope"] = request.shareScope;
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
      action: "UpdatePermission",
      version: "minutes_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/minutes/${taskUuid}/permission`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdatePermissionResponse>(await this.execute(params, req, runtime), new UpdatePermissionResponse({}));
  }

  /**
   * 更新闪记权限
   * 
   * @param request - UpdatePermissionRequest
   * @returns UpdatePermissionResponse
   */
  async updatePermission(taskUuid: string, request: UpdatePermissionRequest): Promise<UpdatePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdatePermissionHeaders({ });
    return await this.updatePermissionWithOptions(taskUuid, request, headers, runtime);
  }

}
