// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class ControlRecordingHeaders extends $tea.Model {
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

export class ControlRecordingRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bind
   */
  action?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  agree?: boolean;
  teamCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      agree: 'agree',
      teamCode: 'teamCode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      agree: 'boolean',
      teamCode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlRecordingResponseBody extends $tea.Model {
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

export class ControlRecordingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ControlRecordingResponseBody;
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
      body: ControlRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordingScheduleHeaders extends $tea.Model {
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

export class CreateRecordingScheduleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  schedules?: CreateRecordingScheduleRequestSchedules[];
  /**
   * @remarks
   * This parameter is required.
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      schedules: 'schedules',
      sn: 'sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedules: { 'type': 'array', 'itemType': CreateRecordingScheduleRequestSchedules },
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordingScheduleResponseBody extends $tea.Model {
  result?: CreateRecordingScheduleResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': CreateRecordingScheduleResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordingScheduleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRecordingScheduleResponseBody;
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
      body: CreateRecordingScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordingScheduleHeaders extends $tea.Model {
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

export class DeleteRecordingScheduleResponseBody extends $tea.Model {
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

export class DeleteRecordingScheduleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRecordingScheduleResponseBody;
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
      body: DeleteRecordingScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileDownloadInfoHeaders extends $tea.Model {
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

export class GetAudioFileDownloadInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * da5ad92d-79dc-4599-8f92-ba8209c68569
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'deviceType',
      fileId: 'fileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileDownloadInfoResponseBody extends $tea.Model {
  result?: GetAudioFileDownloadInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetAudioFileDownloadInfoResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileDownloadInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAudioFileDownloadInfoResponseBody;
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
      body: GetAudioFileDownloadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileInfoHeaders extends $tea.Model {
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

export class GetAudioFileInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A1
   */
  deviceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'deviceType',
      fileId: 'fileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileInfoResponseBody extends $tea.Model {
  result?: GetAudioFileInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetAudioFileInfoResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAudioFileInfoResponseBody;
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
      body: GetAudioFileInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoHeaders extends $tea.Model {
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

export class GetCustomerInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customerId?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'customerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoResponseBody extends $tea.Model {
  result?: GetCustomerInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetCustomerInfoResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomerInfoResponseBody;
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
      body: GetCustomerInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInsightHeaders extends $tea.Model {
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

export class GetCustomerInsightRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customerId?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'customerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInsightResponseBody extends $tea.Model {
  result?: GetCustomerInsightResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetCustomerInsightResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInsightResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomerInsightResponseBody;
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
      body: GetCustomerInsightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordingScheduleHeaders extends $tea.Model {
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

export class GetRecordingScheduleResponseBody extends $tea.Model {
  result?: GetRecordingScheduleResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetRecordingScheduleResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordingScheduleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRecordingScheduleResponseBody;
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
      body: GetRecordingScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceChapterSummaryHeaders extends $tea.Model {
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

export class GetServiceChapterSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'recordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceChapterSummaryResponseBody extends $tea.Model {
  nextToken?: string;
  result?: GetServiceChapterSummaryResponseBodyResult[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      result: { 'type': 'array', 'itemType': GetServiceChapterSummaryResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceChapterSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceChapterSummaryResponseBody;
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
      body: GetServiceChapterSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceChatSummaryHeaders extends $tea.Model {
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

export class GetServiceChatSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'recordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceChatSummaryResponseBody extends $tea.Model {
  result?: GetServiceChatSummaryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetServiceChatSummaryResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceChatSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceChatSummaryResponseBody;
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
      body: GetServiceChatSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceQualityInspectionHeaders extends $tea.Model {
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

export class GetServiceQualityInspectionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'recordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceQualityInspectionResponseBody extends $tea.Model {
  result?: GetServiceQualityInspectionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetServiceQualityInspectionResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceQualityInspectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceQualityInspectionResponseBody;
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
      body: GetServiceQualityInspectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRecordTranscriptHeaders extends $tea.Model {
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

export class GetServiceRecordTranscriptRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
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

export class GetServiceRecordTranscriptResponseBody extends $tea.Model {
  result?: GetServiceRecordTranscriptResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetServiceRecordTranscriptResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRecordTranscriptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceRecordTranscriptResponseBody;
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
      body: GetServiceRecordTranscriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscriptSummaryHeaders extends $tea.Model {
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

export class GetTranscriptSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'deviceType',
      fileId: 'fileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscriptSummaryResponseBody extends $tea.Model {
  result?: GetTranscriptSummaryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetTranscriptSummaryResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscriptSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTranscriptSummaryResponseBody;
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
      body: GetTranscriptSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomerHeaders extends $tea.Model {
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

export class ListCustomerRequest extends $tea.Model {
  endTime?: number;
  maxResults?: number;
  nextToken?: string;
  ownerUserId?: string;
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  teamCode?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      ownerUserId: 'ownerUserId',
      startTime: 'startTime',
      teamCode: 'teamCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      ownerUserId: 'string',
      startTime: 'number',
      teamCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomerResponseBody extends $tea.Model {
  nextToken?: string;
  result?: ListCustomerResponseBodyResult[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      result: { 'type': 'array', 'itemType': ListCustomerResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomerResponseBody;
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
      body: ListCustomerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceRecordingDurationHeaders extends $tea.Model {
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

export class ListDeviceRecordingDurationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  maxResults?: number;
  nextToken?: string;
  sn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  teamCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      sn: 'sn',
      startTime: 'startTime',
      teamCode: 'teamCode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      sn: 'string',
      startTime: 'number',
      teamCode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceRecordingDurationResponseBody extends $tea.Model {
  nextToken?: string;
  result?: ListDeviceRecordingDurationResponseBodyResult[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      result: { 'type': 'array', 'itemType': ListDeviceRecordingDurationResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceRecordingDurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeviceRecordingDurationResponseBody;
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
      body: ListDeviceRecordingDurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRecordHeaders extends $tea.Model {
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

export class ListServiceRecordRequest extends $tea.Model {
  endTime?: number;
  maxResults?: number;
  nextToken?: string;
  startTime?: number;
  teamCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      startTime: 'startTime',
      teamCode: 'teamCode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      startTime: 'number',
      teamCode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRecordResponseBody extends $tea.Model {
  nextToken?: string;
  result?: ListServiceRecordResponseBodyResult[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      result: { 'type': 'array', 'itemType': ListServiceRecordResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceRecordResponseBody;
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
      body: ListServiceRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceTodoHeaders extends $tea.Model {
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

export class ListServiceTodoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'recordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceTodoResponseBody extends $tea.Model {
  result?: ListServiceTodoResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListServiceTodoResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceTodoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceTodoResponseBody;
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
      body: ListServiceTodoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamHeaders extends $tea.Model {
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

export class ListTeamRequest extends $tea.Model {
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

export class ListTeamResponseBody extends $tea.Model {
  nextToken?: string;
  result?: ListTeamResponseBodyResult[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      result: { 'type': 'array', 'itemType': ListTeamResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTeamResponseBody;
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
      body: ListTeamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsrTaskHeaders extends $tea.Model {
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

export class QueryAsrTaskRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      taskId: 'taskId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      taskId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsrTaskResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  result?: QueryAsrTaskResponseBodyResult;
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
      result: QueryAsrTaskResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsrTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAsrTaskResponseBody;
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
      body: QueryAsrTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAudioFileHeaders extends $tea.Model {
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

export class QueryAudioFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A1
   */
  deviceType?: string;
  endTimestamp?: number;
  /**
   * @example
   * 5
   */
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sn?: string;
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'deviceType',
      endTimestamp: 'endTimestamp',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      sn: 'sn',
      startTimestamp: 'startTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      endTimestamp: 'number',
      maxResults: 'number',
      nextToken: 'string',
      sn: 'string',
      startTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAudioFileResponseBody extends $tea.Model {
  nextToken?: string;
  result?: QueryAudioFileResponseBodyResult[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      result: { 'type': 'array', 'itemType': QueryAudioFileResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAudioFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAudioFileResponseBody;
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
      body: QueryAudioFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDetailHeaders extends $tea.Model {
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

export class QueryDeviceDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A1
   */
  deviceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  snList?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceType: 'deviceType',
      snList: 'snList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      snList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDetailResponseBody extends $tea.Model {
  result?: QueryDeviceDetailResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': QueryDeviceDetailResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDeviceDetailResponseBody;
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
      body: QueryDeviceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusHeaders extends $tea.Model {
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

export class QueryDeviceStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A1
   */
  deviceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  snList?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceType: 'deviceType',
      snList: 'snList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      snList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponseBody extends $tea.Model {
  result?: QueryDeviceStatusResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': QueryDeviceStatusResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDeviceStatusResponseBody;
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
      body: QueryDeviceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsrTaskHeaders extends $tea.Model {
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

export class SubmitAsrTaskRequest extends $tea.Model {
  bizKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dentryId?: string;
  phrases?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spaceId?: string;
  transcription?: SubmitAsrTaskRequestTranscription;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizKey: 'bizKey',
      dentryId: 'dentryId',
      phrases: 'phrases',
      sourceLanguage: 'sourceLanguage',
      spaceId: 'spaceId',
      transcription: 'transcription',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizKey: 'string',
      dentryId: 'string',
      phrases: { 'type': 'array', 'itemType': 'string' },
      sourceLanguage: 'string',
      spaceId: 'string',
      transcription: SubmitAsrTaskRequestTranscription,
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsrTaskResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  result?: SubmitAsrTaskResponseBodyResult;
  success?: string;
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
      result: SubmitAsrTaskResponseBodyResult,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsrTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitAsrTaskResponseBody;
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
      body: SubmitAsrTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceBindingHeaders extends $tea.Model {
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

export class UpdateDeviceBindingRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bind
   */
  action?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  teamCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      sn: 'sn',
      teamCode: 'teamCode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      sn: 'string',
      teamCode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceBindingResponseBody extends $tea.Model {
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

export class UpdateDeviceBindingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDeviceBindingResponseBody;
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
      body: UpdateDeviceBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordingScheduleHeaders extends $tea.Model {
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

export class UpdateRecordingScheduleRequest extends $tea.Model {
  endTime?: number;
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordingScheduleResponseBody extends $tea.Model {
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

export class UpdateRecordingScheduleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRecordingScheduleResponseBody;
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
      body: UpdateRecordingScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoCustomerSplitHeaders extends $tea.Model {
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

export class VideoCustomerSplitRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customer?: VideoCustomerSplitRequestCustomer;
  /**
   * @remarks
   * This parameter is required.
   */
  segmentId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      customer: 'customer',
      segmentId: 'segmentId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customer: VideoCustomerSplitRequestCustomer,
      segmentId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoCustomerSplitResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  result?: VideoCustomerSplitResponseBodyResult;
  success?: string;
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
      result: VideoCustomerSplitResponseBodyResult,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoCustomerSplitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoCustomerSplitResponseBody;
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
      body: VideoCustomerSplitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordingScheduleRequestSchedules extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  businessOrder?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      businessOrder: 'businessOrder',
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessOrder: 'string',
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordingScheduleResponseBodyResult extends $tea.Model {
  businessOrder?: string;
  endTime?: number;
  startTime?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      businessOrder: 'businessOrder',
      endTime: 'endTime',
      startTime: 'startTime',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessOrder: 'string',
      endTime: 'number',
      startTime: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileDownloadInfoResponseBodyResult extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileInfoResponseBodyResult extends $tea.Model {
  attributes?: { [key: string]: any };
  createTime?: number;
  creatorUserId?: string;
  duration?: number;
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      createTime: 'createTime',
      creatorUserId: 'creatorUserId',
      duration: 'duration',
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'number',
      creatorUserId: 'string',
      duration: 'number',
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoResponseBodyResult extends $tea.Model {
  createAt?: string;
  id?: string;
  name?: string;
  ownerUserId?: string;
  teamCode?: string;
  static names(): { [key: string]: string } {
    return {
      createAt: 'createAt',
      id: 'id',
      name: 'name',
      ownerUserId: 'ownerUserId',
      teamCode: 'teamCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createAt: 'string',
      id: 'string',
      name: 'string',
      ownerUserId: 'string',
      teamCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInsightResponseBodyResultIntention extends $tea.Model {
  description?: string;
  intention?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intention: 'intention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intention: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInsightResponseBodyResultTagAiTag extends $tea.Model {
  code?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInsightResponseBodyResultTagUserTag extends $tea.Model {
  code?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInsightResponseBodyResultTag extends $tea.Model {
  aiTag?: GetCustomerInsightResponseBodyResultTagAiTag[];
  userTag?: GetCustomerInsightResponseBodyResultTagUserTag[];
  static names(): { [key: string]: string } {
    return {
      aiTag: 'aiTag',
      userTag: 'userTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiTag: { 'type': 'array', 'itemType': GetCustomerInsightResponseBodyResultTagAiTag },
      userTag: { 'type': 'array', 'itemType': GetCustomerInsightResponseBodyResultTagUserTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInsightResponseBodyResult extends $tea.Model {
  intention?: GetCustomerInsightResponseBodyResultIntention;
  tag?: GetCustomerInsightResponseBodyResultTag;
  static names(): { [key: string]: string } {
    return {
      intention: 'intention',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intention: GetCustomerInsightResponseBodyResultIntention,
      tag: GetCustomerInsightResponseBodyResultTag,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordingScheduleResponseBodyResult extends $tea.Model {
  businessOrder?: string;
  endTime?: number;
  sn?: string;
  startTime?: number;
  status?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      businessOrder: 'businessOrder',
      endTime: 'endTime',
      sn: 'sn',
      startTime: 'startTime',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessOrder: 'string',
      endTime: 'number',
      sn: 'string',
      startTime: 'number',
      status: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceChapterSummaryResponseBodyResult extends $tea.Model {
  content?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceChatSummaryResponseBodyResultBasic extends $tea.Model {
  content?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceChatSummaryResponseBodyResultProductItemList extends $tea.Model {
  content?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceChatSummaryResponseBodyResultProduct extends $tea.Model {
  itemList?: GetServiceChatSummaryResponseBodyResultProductItemList[];
  product?: string;
  static names(): { [key: string]: string } {
    return {
      itemList: 'itemList',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': GetServiceChatSummaryResponseBodyResultProductItemList },
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceChatSummaryResponseBodyResult extends $tea.Model {
  basic?: GetServiceChatSummaryResponseBodyResultBasic[];
  product?: GetServiceChatSummaryResponseBodyResultProduct[];
  static names(): { [key: string]: string } {
    return {
      basic: 'basic',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basic: { 'type': 'array', 'itemType': GetServiceChatSummaryResponseBodyResultBasic },
      product: { 'type': 'array', 'itemType': GetServiceChatSummaryResponseBodyResultProduct },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceQualityInspectionResponseBodyResultGroupListItemList extends $tea.Model {
  flowName?: string;
  isHit?: string;
  name?: string;
  reason?: string;
  score?: number;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'flowName',
      isHit: 'isHit',
      name: 'name',
      reason: 'reason',
      score: 'score',
      script: 'script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      isHit: 'string',
      name: 'string',
      reason: 'string',
      score: 'number',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceQualityInspectionResponseBodyResultGroupList extends $tea.Model {
  itemList?: GetServiceQualityInspectionResponseBodyResultGroupListItemList[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      itemList: 'itemList',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': GetServiceQualityInspectionResponseBodyResultGroupListItemList },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceQualityInspectionResponseBodyResult extends $tea.Model {
  groupList?: GetServiceQualityInspectionResponseBodyResultGroupList[];
  score?: number;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      groupList: 'groupList',
      score: 'score',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupList: { 'type': 'array', 'itemType': GetServiceQualityInspectionResponseBodyResultGroupList },
      score: 'number',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRecordTranscriptResponseBodyResultAudionTextDataList extends $tea.Model {
  channel?: string;
  endTime?: string;
  startTime?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      endTime: 'endTime',
      startTime: 'startTime',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      endTime: 'string',
      startTime: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRecordTranscriptResponseBodyResultAudionText extends $tea.Model {
  dataList?: GetServiceRecordTranscriptResponseBodyResultAudionTextDataList[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'dataList',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': GetServiceRecordTranscriptResponseBodyResultAudionTextDataList },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRecordTranscriptResponseBodyResultSpeakerDataList extends $tea.Model {
  channel?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRecordTranscriptResponseBodyResultSpeaker extends $tea.Model {
  dataList?: GetServiceRecordTranscriptResponseBodyResultSpeakerDataList[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'dataList',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': GetServiceRecordTranscriptResponseBodyResultSpeakerDataList },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRecordTranscriptResponseBodyResult extends $tea.Model {
  audionText?: GetServiceRecordTranscriptResponseBodyResultAudionText;
  speaker?: GetServiceRecordTranscriptResponseBodyResultSpeaker;
  static names(): { [key: string]: string } {
    return {
      audionText: 'audionText',
      speaker: 'speaker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audionText: GetServiceRecordTranscriptResponseBodyResultAudionText,
      speaker: GetServiceRecordTranscriptResponseBodyResultSpeaker,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscriptSummaryResponseBodyResult extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomerResponseBodyResult extends $tea.Model {
  createAt?: string;
  id?: string;
  name?: string;
  ownerUserId?: string;
  teamCode?: string;
  static names(): { [key: string]: string } {
    return {
      createAt: 'createAt',
      id: 'id',
      name: 'name',
      ownerUserId: 'ownerUserId',
      teamCode: 'teamCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createAt: 'string',
      id: 'string',
      name: 'string',
      ownerUserId: 'string',
      teamCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceRecordingDurationResponseBodyResult extends $tea.Model {
  duration?: string;
  endTimestamp?: number;
  recordId?: string;
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      endTimestamp: 'endTimestamp',
      recordId: 'recordId',
      startTimestamp: 'startTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      endTimestamp: 'number',
      recordId: 'string',
      startTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRecordResponseBodyResultTeam extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRecordResponseBodyResultUser extends $tea.Model {
  name?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRecordResponseBodyResult extends $tea.Model {
  customerId?: string;
  deviceSn?: string;
  duration?: string;
  endTimestamp?: number;
  recordId?: string;
  startTimestamp?: number;
  team?: ListServiceRecordResponseBodyResultTeam;
  user?: ListServiceRecordResponseBodyResultUser;
  static names(): { [key: string]: string } {
    return {
      customerId: 'customerId',
      deviceSn: 'deviceSn',
      duration: 'duration',
      endTimestamp: 'endTimestamp',
      recordId: 'recordId',
      startTimestamp: 'startTimestamp',
      team: 'team',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
      deviceSn: 'string',
      duration: 'string',
      endTimestamp: 'number',
      recordId: 'string',
      startTimestamp: 'number',
      team: ListServiceRecordResponseBodyResultTeam,
      user: ListServiceRecordResponseBodyResultUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceTodoResponseBodyResultExecutors extends $tea.Model {
  name?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceTodoResponseBodyResult extends $tea.Model {
  creator?: string;
  dingTodoId?: string;
  executors?: ListServiceTodoResponseBodyResultExecutors[];
  finished?: boolean;
  planFinishDate?: number;
  todoContent?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      dingTodoId: 'dingTodoId',
      executors: 'executors',
      finished: 'finished',
      planFinishDate: 'planFinishDate',
      todoContent: 'todoContent',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      dingTodoId: 'string',
      executors: { 'type': 'array', 'itemType': ListServiceTodoResponseBodyResultExecutors },
      finished: 'boolean',
      planFinishDate: 'number',
      todoContent: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamResponseBodyResultTagListValueList extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamResponseBodyResultTagList extends $tea.Model {
  code?: string;
  name?: string;
  valueList?: ListTeamResponseBodyResultTagListValueList[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      valueList: 'valueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      valueList: { 'type': 'array', 'itemType': ListTeamResponseBodyResultTagListValueList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamResponseBodyResult extends $tea.Model {
  code?: string;
  name?: string;
  tagList?: ListTeamResponseBodyResultTagList[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      tagList: 'tagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      tagList: { 'type': 'array', 'itemType': ListTeamResponseBodyResultTagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsrTaskResponseBodyResultResultInfoParagraphListSentenceListWordList extends $tea.Model {
  endTime?: number;
  startTime?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsrTaskResponseBodyResultResultInfoParagraphListSentenceList extends $tea.Model {
  endTime?: number;
  sentence?: string;
  startTime?: number;
  wordList?: QueryAsrTaskResponseBodyResultResultInfoParagraphListSentenceListWordList[];
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
      wordList: { 'type': 'array', 'itemType': QueryAsrTaskResponseBodyResultResultInfoParagraphListSentenceListWordList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsrTaskResponseBodyResultResultInfoParagraphList extends $tea.Model {
  endTime?: number;
  paragraph?: string;
  sentenceList?: QueryAsrTaskResponseBodyResultResultInfoParagraphListSentenceList[];
  speakerId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      paragraph: 'paragraph',
      sentenceList: 'sentenceList',
      speakerId: 'speakerId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      paragraph: 'string',
      sentenceList: { 'type': 'array', 'itemType': QueryAsrTaskResponseBodyResultResultInfoParagraphListSentenceList },
      speakerId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsrTaskResponseBodyResultResultInfo extends $tea.Model {
  paragraphList?: QueryAsrTaskResponseBodyResultResultInfoParagraphList[];
  static names(): { [key: string]: string } {
    return {
      paragraphList: 'paragraphList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paragraphList: { 'type': 'array', 'itemType': QueryAsrTaskResponseBodyResultResultInfoParagraphList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsrTaskResponseBodyResult extends $tea.Model {
  bizKey?: string;
  nextToken?: string;
  resultInfo?: QueryAsrTaskResponseBodyResultResultInfo;
  taskId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      bizKey: 'bizKey',
      nextToken: 'nextToken',
      resultInfo: 'resultInfo',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizKey: 'string',
      nextToken: 'string',
      resultInfo: QueryAsrTaskResponseBodyResultResultInfo,
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAudioFileResponseBodyResult extends $tea.Model {
  attributes?: { [key: string]: any };
  createTime?: number;
  creatorUserId?: string;
  duration?: number;
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      createTime: 'createTime',
      creatorUserId: 'creatorUserId',
      duration: 'duration',
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'number',
      creatorUserId: 'string',
      duration: 'number',
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDetailResponseBodyResult extends $tea.Model {
  bindTimestamp?: number;
  deviceName?: string;
  sn?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bindTimestamp: 'bindTimestamp',
      deviceName: 'deviceName',
      sn: 'sn',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindTimestamp: 'number',
      deviceName: 'string',
      sn: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponseBodyResultBattery extends $tea.Model {
  timestamp?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'timestamp',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponseBodyResultFirmware extends $tea.Model {
  timestamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'timestamp',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponseBodyResultRecordingStartTime extends $tea.Model {
  timestamp?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'timestamp',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponseBodyResultStatus extends $tea.Model {
  timestamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'timestamp',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponseBodyResult extends $tea.Model {
  battery?: QueryDeviceStatusResponseBodyResultBattery;
  firmware?: QueryDeviceStatusResponseBodyResultFirmware;
  recordingStartTime?: QueryDeviceStatusResponseBodyResultRecordingStartTime;
  sn?: string;
  status?: QueryDeviceStatusResponseBodyResultStatus;
  static names(): { [key: string]: string } {
    return {
      battery: 'battery',
      firmware: 'firmware',
      recordingStartTime: 'recordingStartTime',
      sn: 'sn',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      battery: QueryDeviceStatusResponseBodyResultBattery,
      firmware: QueryDeviceStatusResponseBodyResultFirmware,
      recordingStartTime: QueryDeviceStatusResponseBodyResultRecordingStartTime,
      sn: 'string',
      status: QueryDeviceStatusResponseBodyResultStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsrTaskRequestTranscriptionDiarization extends $tea.Model {
  speakerCount?: number;
  static names(): { [key: string]: string } {
    return {
      speakerCount: 'speakerCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      speakerCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsrTaskRequestTranscription extends $tea.Model {
  diarization?: SubmitAsrTaskRequestTranscriptionDiarization;
  diarizationEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      diarization: 'diarization',
      diarizationEnabled: 'diarizationEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diarization: SubmitAsrTaskRequestTranscriptionDiarization,
      diarizationEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsrTaskResponseBodyResult extends $tea.Model {
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

export class VideoCustomerSplitRequestCustomerCustomersAppearance extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      videoId: 'videoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoCustomerSplitRequestCustomerCustomers extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appearance?: VideoCustomerSplitRequestCustomerCustomersAppearance;
  /**
   * @remarks
   * This parameter is required.
   */
  customerId?: string;
  static names(): { [key: string]: string } {
    return {
      appearance: 'appearance',
      customerId: 'customerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appearance: VideoCustomerSplitRequestCustomerCustomersAppearance,
      customerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoCustomerSplitRequestCustomer extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customers?: VideoCustomerSplitRequestCustomerCustomers[];
  static names(): { [key: string]: string } {
    return {
      customers: 'customers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customers: { 'type': 'array', 'itemType': VideoCustomerSplitRequestCustomerCustomers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoCustomerSplitResponseBodyResultCreateServiceRecordResult extends $tea.Model {
  recordIds?: string[];
  segmentId?: string;
  static names(): { [key: string]: string } {
    return {
      recordIds: 'recordIds',
      segmentId: 'segmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordIds: { 'type': 'array', 'itemType': 'string' },
      segmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoCustomerSplitResponseBodyResult extends $tea.Model {
  createServiceRecordResult?: VideoCustomerSplitResponseBodyResultCreateServiceRecordResult[];
  static names(): { [key: string]: string } {
    return {
      createServiceRecordResult: 'createServiceRecordResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createServiceRecordResult: { 'type': 'array', 'itemType': VideoCustomerSplitResponseBodyResultCreateServiceRecordResult },
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
   * 设备录音启停控制
   * 
   * @param request - ControlRecordingRequest
   * @param headers - ControlRecordingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ControlRecordingResponse
   */
  async controlRecordingWithOptions(request: ControlRecordingRequest, headers: ControlRecordingHeaders, runtime: $Util.RuntimeOptions): Promise<ControlRecordingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.action)) {
      body["action"] = request.action;
    }

    if (!Util.isUnset(request.agree)) {
      body["agree"] = request.agree;
    }

    if (!Util.isUnset(request.teamCode)) {
      body["teamCode"] = request.teamCode;
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
      action: "ControlRecording",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/devices/recording/control`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ControlRecordingResponse>(await this.execute(params, req, runtime), new ControlRecordingResponse({}));
  }

  /**
   * 设备录音启停控制
   * 
   * @param request - ControlRecordingRequest
   * @returns ControlRecordingResponse
   */
  async controlRecording(request: ControlRecordingRequest): Promise<ControlRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ControlRecordingHeaders({ });
    return await this.controlRecordingWithOptions(request, headers, runtime);
  }

  /**
   * 创建录制计划
   * 
   * @param request - CreateRecordingScheduleRequest
   * @param headers - CreateRecordingScheduleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecordingScheduleResponse
   */
  async createRecordingScheduleWithOptions(request: CreateRecordingScheduleRequest, headers: CreateRecordingScheduleHeaders, runtime: $Util.RuntimeOptions): Promise<CreateRecordingScheduleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.schedules)) {
      body["schedules"] = request.schedules;
    }

    if (!Util.isUnset(request.sn)) {
      body["sn"] = request.sn;
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
      action: "CreateRecordingSchedule",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/devices/recording/schedules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateRecordingScheduleResponse>(await this.execute(params, req, runtime), new CreateRecordingScheduleResponse({}));
  }

  /**
   * 创建录制计划
   * 
   * @param request - CreateRecordingScheduleRequest
   * @returns CreateRecordingScheduleResponse
   */
  async createRecordingSchedule(request: CreateRecordingScheduleRequest): Promise<CreateRecordingScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateRecordingScheduleHeaders({ });
    return await this.createRecordingScheduleWithOptions(request, headers, runtime);
  }

  /**
   * 删除录制计划
   * 
   * @param headers - DeleteRecordingScheduleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecordingScheduleResponse
   */
  async deleteRecordingScheduleWithOptions(taskId: string, headers: DeleteRecordingScheduleHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteRecordingScheduleResponse> {
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
      action: "DeleteRecordingSchedule",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/devices/recording/schedules/${taskId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteRecordingScheduleResponse>(await this.execute(params, req, runtime), new DeleteRecordingScheduleResponse({}));
  }

  /**
   * 删除录制计划
   * @returns DeleteRecordingScheduleResponse
   */
  async deleteRecordingSchedule(taskId: string): Promise<DeleteRecordingScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteRecordingScheduleHeaders({ });
    return await this.deleteRecordingScheduleWithOptions(taskId, headers, runtime);
  }

  /**
   * 获取音频文件下载地址
   * 
   * @param request - GetAudioFileDownloadInfoRequest
   * @param headers - GetAudioFileDownloadInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAudioFileDownloadInfoResponse
   */
  async getAudioFileDownloadInfoWithOptions(request: GetAudioFileDownloadInfoRequest, headers: GetAudioFileDownloadInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetAudioFileDownloadInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceType)) {
      body["deviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.fileId)) {
      body["fileId"] = request.fileId;
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
      action: "GetAudioFileDownloadInfo",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/device/audio/download`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetAudioFileDownloadInfoResponse>(await this.execute(params, req, runtime), new GetAudioFileDownloadInfoResponse({}));
  }

  /**
   * 获取音频文件下载地址
   * 
   * @param request - GetAudioFileDownloadInfoRequest
   * @returns GetAudioFileDownloadInfoResponse
   */
  async getAudioFileDownloadInfo(request: GetAudioFileDownloadInfoRequest): Promise<GetAudioFileDownloadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAudioFileDownloadInfoHeaders({ });
    return await this.getAudioFileDownloadInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取音频文件信息
   * 
   * @param request - GetAudioFileInfoRequest
   * @param headers - GetAudioFileInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAudioFileInfoResponse
   */
  async getAudioFileInfoWithOptions(request: GetAudioFileInfoRequest, headers: GetAudioFileInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetAudioFileInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceType)) {
      body["deviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.fileId)) {
      body["fileId"] = request.fileId;
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
      action: "GetAudioFileInfo",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/device/audio/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetAudioFileInfoResponse>(await this.execute(params, req, runtime), new GetAudioFileInfoResponse({}));
  }

  /**
   * 获取音频文件信息
   * 
   * @param request - GetAudioFileInfoRequest
   * @returns GetAudioFileInfoResponse
   */
  async getAudioFileInfo(request: GetAudioFileInfoRequest): Promise<GetAudioFileInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAudioFileInfoHeaders({ });
    return await this.getAudioFileInfoWithOptions(request, headers, runtime);
  }

  /**
   * 查询客户数据
   * 
   * @param request - GetCustomerInfoRequest
   * @param headers - GetCustomerInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerInfoResponse
   */
  async getCustomerInfoWithOptions(request: GetCustomerInfoRequest, headers: GetCustomerInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetCustomerInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customerId)) {
      query["customerId"] = request.customerId;
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
      action: "GetCustomerInfo",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/customer`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetCustomerInfoResponse>(await this.execute(params, req, runtime), new GetCustomerInfoResponse({}));
  }

  /**
   * 查询客户数据
   * 
   * @param request - GetCustomerInfoRequest
   * @returns GetCustomerInfoResponse
   */
  async getCustomerInfo(request: GetCustomerInfoRequest): Promise<GetCustomerInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetCustomerInfoHeaders({ });
    return await this.getCustomerInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取客户洞察信息
   * 
   * @param request - GetCustomerInsightRequest
   * @param headers - GetCustomerInsightHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerInsightResponse
   */
  async getCustomerInsightWithOptions(request: GetCustomerInsightRequest, headers: GetCustomerInsightHeaders, runtime: $Util.RuntimeOptions): Promise<GetCustomerInsightResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customerId)) {
      query["customerId"] = request.customerId;
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
      action: "GetCustomerInsight",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/customers/insights`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetCustomerInsightResponse>(await this.execute(params, req, runtime), new GetCustomerInsightResponse({}));
  }

  /**
   * 获取客户洞察信息
   * 
   * @param request - GetCustomerInsightRequest
   * @returns GetCustomerInsightResponse
   */
  async getCustomerInsight(request: GetCustomerInsightRequest): Promise<GetCustomerInsightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetCustomerInsightHeaders({ });
    return await this.getCustomerInsightWithOptions(request, headers, runtime);
  }

  /**
   * 获取录制计划
   * 
   * @param headers - GetRecordingScheduleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecordingScheduleResponse
   */
  async getRecordingScheduleWithOptions(taskId: string, headers: GetRecordingScheduleHeaders, runtime: $Util.RuntimeOptions): Promise<GetRecordingScheduleResponse> {
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
      action: "GetRecordingSchedule",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/devices/recording/schedules/${taskId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetRecordingScheduleResponse>(await this.execute(params, req, runtime), new GetRecordingScheduleResponse({}));
  }

  /**
   * 获取录制计划
   * @returns GetRecordingScheduleResponse
   */
  async getRecordingSchedule(taskId: string): Promise<GetRecordingScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetRecordingScheduleHeaders({ });
    return await this.getRecordingScheduleWithOptions(taskId, headers, runtime);
  }

  /**
   * 获取服务章节摘要
   * 
   * @param request - GetServiceChapterSummaryRequest
   * @param headers - GetServiceChapterSummaryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceChapterSummaryResponse
   */
  async getServiceChapterSummaryWithOptions(request: GetServiceChapterSummaryRequest, headers: GetServiceChapterSummaryHeaders, runtime: $Util.RuntimeOptions): Promise<GetServiceChapterSummaryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.recordId)) {
      query["recordId"] = request.recordId;
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
      action: "GetServiceChapterSummary",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/service/chapters/summary`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetServiceChapterSummaryResponse>(await this.execute(params, req, runtime), new GetServiceChapterSummaryResponse({}));
  }

  /**
   * 获取服务章节摘要
   * 
   * @param request - GetServiceChapterSummaryRequest
   * @returns GetServiceChapterSummaryResponse
   */
  async getServiceChapterSummary(request: GetServiceChapterSummaryRequest): Promise<GetServiceChapterSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetServiceChapterSummaryHeaders({ });
    return await this.getServiceChapterSummaryWithOptions(request, headers, runtime);
  }

  /**
   * 获取服务会话总结
   * 
   * @param request - GetServiceChatSummaryRequest
   * @param headers - GetServiceChatSummaryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceChatSummaryResponse
   */
  async getServiceChatSummaryWithOptions(request: GetServiceChatSummaryRequest, headers: GetServiceChatSummaryHeaders, runtime: $Util.RuntimeOptions): Promise<GetServiceChatSummaryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.recordId)) {
      query["recordId"] = request.recordId;
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
      action: "GetServiceChatSummary",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/service/chats/summary`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetServiceChatSummaryResponse>(await this.execute(params, req, runtime), new GetServiceChatSummaryResponse({}));
  }

  /**
   * 获取服务会话总结
   * 
   * @param request - GetServiceChatSummaryRequest
   * @returns GetServiceChatSummaryResponse
   */
  async getServiceChatSummary(request: GetServiceChatSummaryRequest): Promise<GetServiceChatSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetServiceChatSummaryHeaders({ });
    return await this.getServiceChatSummaryWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务质检信息
   * 
   * @param request - GetServiceQualityInspectionRequest
   * @param headers - GetServiceQualityInspectionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceQualityInspectionResponse
   */
  async getServiceQualityInspectionWithOptions(request: GetServiceQualityInspectionRequest, headers: GetServiceQualityInspectionHeaders, runtime: $Util.RuntimeOptions): Promise<GetServiceQualityInspectionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.recordId)) {
      query["recordId"] = request.recordId;
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
      action: "GetServiceQualityInspection",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/service/quality-inspections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetServiceQualityInspectionResponse>(await this.execute(params, req, runtime), new GetServiceQualityInspectionResponse({}));
  }

  /**
   * 查询服务质检信息
   * 
   * @param request - GetServiceQualityInspectionRequest
   * @returns GetServiceQualityInspectionResponse
   */
  async getServiceQualityInspection(request: GetServiceQualityInspectionRequest): Promise<GetServiceQualityInspectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetServiceQualityInspectionHeaders({ });
    return await this.getServiceQualityInspectionWithOptions(request, headers, runtime);
  }

  /**
   * 获取服务记录音频转写信息
   * 
   * @param request - GetServiceRecordTranscriptRequest
   * @param headers - GetServiceRecordTranscriptHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceRecordTranscriptResponse
   */
  async getServiceRecordTranscriptWithOptions(request: GetServiceRecordTranscriptRequest, headers: GetServiceRecordTranscriptHeaders, runtime: $Util.RuntimeOptions): Promise<GetServiceRecordTranscriptResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["id"] = request.id;
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
      action: "GetServiceRecordTranscript",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/service/transcript`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetServiceRecordTranscriptResponse>(await this.execute(params, req, runtime), new GetServiceRecordTranscriptResponse({}));
  }

  /**
   * 获取服务记录音频转写信息
   * 
   * @param request - GetServiceRecordTranscriptRequest
   * @returns GetServiceRecordTranscriptResponse
   */
  async getServiceRecordTranscript(request: GetServiceRecordTranscriptRequest): Promise<GetServiceRecordTranscriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetServiceRecordTranscriptHeaders({ });
    return await this.getServiceRecordTranscriptWithOptions(request, headers, runtime);
  }

  /**
   * 获取文件转写的概要信息
   * 
   * @param request - GetTranscriptSummaryRequest
   * @param headers - GetTranscriptSummaryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTranscriptSummaryResponse
   */
  async getTranscriptSummaryWithOptions(request: GetTranscriptSummaryRequest, headers: GetTranscriptSummaryHeaders, runtime: $Util.RuntimeOptions): Promise<GetTranscriptSummaryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceType)) {
      query["deviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.fileId)) {
      query["fileId"] = request.fileId;
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
      action: "GetTranscriptSummary",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/transcripts/summary`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetTranscriptSummaryResponse>(await this.execute(params, req, runtime), new GetTranscriptSummaryResponse({}));
  }

  /**
   * 获取文件转写的概要信息
   * 
   * @param request - GetTranscriptSummaryRequest
   * @returns GetTranscriptSummaryResponse
   */
  async getTranscriptSummary(request: GetTranscriptSummaryRequest): Promise<GetTranscriptSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetTranscriptSummaryHeaders({ });
    return await this.getTranscriptSummaryWithOptions(request, headers, runtime);
  }

  /**
   * 查询客户列表
   * 
   * @param request - ListCustomerRequest
   * @param headers - ListCustomerHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomerResponse
   */
  async listCustomerWithOptions(request: ListCustomerRequest, headers: ListCustomerHeaders, runtime: $Util.RuntimeOptions): Promise<ListCustomerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerUserId)) {
      query["ownerUserId"] = request.ownerUserId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.teamCode)) {
      query["teamCode"] = request.teamCode;
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
      action: "ListCustomer",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/customers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListCustomerResponse>(await this.execute(params, req, runtime), new ListCustomerResponse({}));
  }

  /**
   * 查询客户列表
   * 
   * @param request - ListCustomerRequest
   * @returns ListCustomerResponse
   */
  async listCustomer(request: ListCustomerRequest): Promise<ListCustomerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListCustomerHeaders({ });
    return await this.listCustomerWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询设备录音时长
   * 
   * @param request - ListDeviceRecordingDurationRequest
   * @param headers - ListDeviceRecordingDurationHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceRecordingDurationResponse
   */
  async listDeviceRecordingDurationWithOptions(request: ListDeviceRecordingDurationRequest, headers: ListDeviceRecordingDurationHeaders, runtime: $Util.RuntimeOptions): Promise<ListDeviceRecordingDurationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.sn)) {
      query["sn"] = request.sn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.teamCode)) {
      query["teamCode"] = request.teamCode;
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
      action: "ListDeviceRecordingDuration",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/devices/recording-durations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceRecordingDurationResponse>(await this.execute(params, req, runtime), new ListDeviceRecordingDurationResponse({}));
  }

  /**
   * 分页查询设备录音时长
   * 
   * @param request - ListDeviceRecordingDurationRequest
   * @returns ListDeviceRecordingDurationResponse
   */
  async listDeviceRecordingDuration(request: ListDeviceRecordingDurationRequest): Promise<ListDeviceRecordingDurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDeviceRecordingDurationHeaders({ });
    return await this.listDeviceRecordingDurationWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询服务记录
   * 
   * @param request - ListServiceRecordRequest
   * @param headers - ListServiceRecordHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceRecordResponse
   */
  async listServiceRecordWithOptions(request: ListServiceRecordRequest, headers: ListServiceRecordHeaders, runtime: $Util.RuntimeOptions): Promise<ListServiceRecordResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.teamCode)) {
      query["teamCode"] = request.teamCode;
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
      action: "ListServiceRecord",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/service-records`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListServiceRecordResponse>(await this.execute(params, req, runtime), new ListServiceRecordResponse({}));
  }

  /**
   * 分页查询服务记录
   * 
   * @param request - ListServiceRecordRequest
   * @returns ListServiceRecordResponse
   */
  async listServiceRecord(request: ListServiceRecordRequest): Promise<ListServiceRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListServiceRecordHeaders({ });
    return await this.listServiceRecordWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务记录待办列表
   * 
   * @param request - ListServiceTodoRequest
   * @param headers - ListServiceTodoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceTodoResponse
   */
  async listServiceTodoWithOptions(request: ListServiceTodoRequest, headers: ListServiceTodoHeaders, runtime: $Util.RuntimeOptions): Promise<ListServiceTodoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.recordId)) {
      query["recordId"] = request.recordId;
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
      action: "ListServiceTodo",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/service-todos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListServiceTodoResponse>(await this.execute(params, req, runtime), new ListServiceTodoResponse({}));
  }

  /**
   * 查询服务记录待办列表
   * 
   * @param request - ListServiceTodoRequest
   * @returns ListServiceTodoResponse
   */
  async listServiceTodo(request: ListServiceTodoRequest): Promise<ListServiceTodoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListServiceTodoHeaders({ });
    return await this.listServiceTodoWithOptions(request, headers, runtime);
  }

  /**
   * 查询团队列表
   * 
   * @param request - ListTeamRequest
   * @param headers - ListTeamHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTeamResponse
   */
  async listTeamWithOptions(request: ListTeamRequest, headers: ListTeamHeaders, runtime: $Util.RuntimeOptions): Promise<ListTeamResponse> {
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
      action: "ListTeam",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/teams`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListTeamResponse>(await this.execute(params, req, runtime), new ListTeamResponse({}));
  }

  /**
   * 查询团队列表
   * 
   * @param request - ListTeamRequest
   * @returns ListTeamResponse
   */
  async listTeam(request: ListTeamRequest): Promise<ListTeamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListTeamHeaders({ });
    return await this.listTeamWithOptions(request, headers, runtime);
  }

  /**
   * 查询asr结果
   * 
   * @param request - QueryAsrTaskRequest
   * @param headers - QueryAsrTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAsrTaskResponse
   */
  async queryAsrTaskWithOptions(request: QueryAsrTaskRequest, headers: QueryAsrTaskHeaders, runtime: $Util.RuntimeOptions): Promise<QueryAsrTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
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
      action: "QueryAsrTask",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/asr/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryAsrTaskResponse>(await this.execute(params, req, runtime), new QueryAsrTaskResponse({}));
  }

  /**
   * 查询asr结果
   * 
   * @param request - QueryAsrTaskRequest
   * @returns QueryAsrTaskResponse
   */
  async queryAsrTask(request: QueryAsrTaskRequest): Promise<QueryAsrTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryAsrTaskHeaders({ });
    return await this.queryAsrTaskWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询指定设备的音频文件列表
   * 
   * @param request - QueryAudioFileRequest
   * @param headers - QueryAudioFileHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAudioFileResponse
   */
  async queryAudioFileWithOptions(request: QueryAudioFileRequest, headers: QueryAudioFileHeaders, runtime: $Util.RuntimeOptions): Promise<QueryAudioFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceType)) {
      body["deviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.endTimestamp)) {
      body["endTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.sn)) {
      body["sn"] = request.sn;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      body["startTimestamp"] = request.startTimestamp;
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
      action: "QueryAudioFile",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/device/audio/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryAudioFileResponse>(await this.execute(params, req, runtime), new QueryAudioFileResponse({}));
  }

  /**
   * 分页查询指定设备的音频文件列表
   * 
   * @param request - QueryAudioFileRequest
   * @returns QueryAudioFileResponse
   */
  async queryAudioFile(request: QueryAudioFileRequest): Promise<QueryAudioFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryAudioFileHeaders({ });
    return await this.queryAudioFileWithOptions(request, headers, runtime);
  }

  /**
   * 获取设备列表
   * 
   * @param request - QueryDeviceDetailRequest
   * @param headers - QueryDeviceDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceDetailResponse
   */
  async queryDeviceDetailWithOptions(request: QueryDeviceDetailRequest, headers: QueryDeviceDetailHeaders, runtime: $Util.RuntimeOptions): Promise<QueryDeviceDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceType)) {
      body["deviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.snList)) {
      body["snList"] = request.snList;
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
      action: "QueryDeviceDetail",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/device/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryDeviceDetailResponse>(await this.execute(params, req, runtime), new QueryDeviceDetailResponse({}));
  }

  /**
   * 获取设备列表
   * 
   * @param request - QueryDeviceDetailRequest
   * @returns QueryDeviceDetailResponse
   */
  async queryDeviceDetail(request: QueryDeviceDetailRequest): Promise<QueryDeviceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryDeviceDetailHeaders({ });
    return await this.queryDeviceDetailWithOptions(request, headers, runtime);
  }

  /**
   * 查询设备属性
   * 
   * @param request - QueryDeviceStatusRequest
   * @param headers - QueryDeviceStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceStatusResponse
   */
  async queryDeviceStatusWithOptions(request: QueryDeviceStatusRequest, headers: QueryDeviceStatusHeaders, runtime: $Util.RuntimeOptions): Promise<QueryDeviceStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceType)) {
      body["deviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.snList)) {
      body["snList"] = request.snList;
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
      action: "QueryDeviceStatus",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/device/status`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryDeviceStatusResponse>(await this.execute(params, req, runtime), new QueryDeviceStatusResponse({}));
  }

  /**
   * 查询设备属性
   * 
   * @param request - QueryDeviceStatusRequest
   * @returns QueryDeviceStatusResponse
   */
  async queryDeviceStatus(request: QueryDeviceStatusRequest): Promise<QueryDeviceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryDeviceStatusHeaders({ });
    return await this.queryDeviceStatusWithOptions(request, headers, runtime);
  }

  /**
   * asr离线任务
   * 
   * @param request - SubmitAsrTaskRequest
   * @param headers - SubmitAsrTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAsrTaskResponse
   */
  async submitAsrTaskWithOptions(request: SubmitAsrTaskRequest, headers: SubmitAsrTaskHeaders, runtime: $Util.RuntimeOptions): Promise<SubmitAsrTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizKey)) {
      body["bizKey"] = request.bizKey;
    }

    if (!Util.isUnset(request.dentryId)) {
      body["dentryId"] = request.dentryId;
    }

    if (!Util.isUnset(request.phrases)) {
      body["phrases"] = request.phrases;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["sourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["spaceId"] = request.spaceId;
    }

    if (!Util.isUnset(request.transcription)) {
      body["transcription"] = request.transcription;
    }

    if (!Util.isUnset(request.unionId)) {
      body["unionId"] = request.unionId;
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
      action: "SubmitAsrTask",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/asr/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SubmitAsrTaskResponse>(await this.execute(params, req, runtime), new SubmitAsrTaskResponse({}));
  }

  /**
   * asr离线任务
   * 
   * @param request - SubmitAsrTaskRequest
   * @returns SubmitAsrTaskResponse
   */
  async submitAsrTask(request: SubmitAsrTaskRequest): Promise<SubmitAsrTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SubmitAsrTaskHeaders({ });
    return await this.submitAsrTaskWithOptions(request, headers, runtime);
  }

  /**
   * 更新设备绑定关系
   * 
   * @param request - UpdateDeviceBindingRequest
   * @param headers - UpdateDeviceBindingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeviceBindingResponse
   */
  async updateDeviceBindingWithOptions(request: UpdateDeviceBindingRequest, headers: UpdateDeviceBindingHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceBindingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.action)) {
      body["action"] = request.action;
    }

    if (!Util.isUnset(request.sn)) {
      body["sn"] = request.sn;
    }

    if (!Util.isUnset(request.teamCode)) {
      body["teamCode"] = request.teamCode;
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
      action: "UpdateDeviceBinding",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/devices/binding/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeviceBindingResponse>(await this.execute(params, req, runtime), new UpdateDeviceBindingResponse({}));
  }

  /**
   * 更新设备绑定关系
   * 
   * @param request - UpdateDeviceBindingRequest
   * @returns UpdateDeviceBindingResponse
   */
  async updateDeviceBinding(request: UpdateDeviceBindingRequest): Promise<UpdateDeviceBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateDeviceBindingHeaders({ });
    return await this.updateDeviceBindingWithOptions(request, headers, runtime);
  }

  /**
   * 更新录制计划
   * 
   * @param request - UpdateRecordingScheduleRequest
   * @param headers - UpdateRecordingScheduleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordingScheduleResponse
   */
  async updateRecordingScheduleWithOptions(request: UpdateRecordingScheduleRequest, headers: UpdateRecordingScheduleHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateRecordingScheduleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
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
      action: "UpdateRecordingSchedule",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/devices/recording/schedules`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateRecordingScheduleResponse>(await this.execute(params, req, runtime), new UpdateRecordingScheduleResponse({}));
  }

  /**
   * 更新录制计划
   * 
   * @param request - UpdateRecordingScheduleRequest
   * @returns UpdateRecordingScheduleResponse
   */
  async updateRecordingSchedule(request: UpdateRecordingScheduleRequest): Promise<UpdateRecordingScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateRecordingScheduleHeaders({ });
    return await this.updateRecordingScheduleWithOptions(request, headers, runtime);
  }

  /**
   * asr离线任务
   * 
   * @param request - VideoCustomerSplitRequest
   * @param headers - VideoCustomerSplitHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoCustomerSplitResponse
   */
  async videoCustomerSplitWithOptions(request: VideoCustomerSplitRequest, headers: VideoCustomerSplitHeaders, runtime: $Util.RuntimeOptions): Promise<VideoCustomerSplitResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customer)) {
      body["customer"] = request.customer;
    }

    if (!Util.isUnset(request.segmentId)) {
      body["segmentId"] = request.segmentId;
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
      action: "VideoCustomerSplit",
      version: "dvi_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/dvi/service/audiosplit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<VideoCustomerSplitResponse>(await this.execute(params, req, runtime), new VideoCustomerSplitResponse({}));
  }

  /**
   * asr离线任务
   * 
   * @param request - VideoCustomerSplitRequest
   * @returns VideoCustomerSplitResponse
   */
  async videoCustomerSplit(request: VideoCustomerSplitRequest): Promise<VideoCustomerSplitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new VideoCustomerSplitHeaders({ });
    return await this.videoCustomerSplitWithOptions(request, headers, runtime);
  }

}
