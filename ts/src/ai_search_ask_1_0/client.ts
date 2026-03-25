// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class RetrievalExtendParamsValue extends $tea.Model {
  startTime?: number;
  endTime?: number;
  keywords?: string[];
  sourceUserParams?: RetrievalExtendParamsValueSourceUserParams[];
  targetUserParams?: RetrievalExtendParamsValueTargetUserParams[];
  static names(): { [key: string]: string } {
    return {
      startTime: 'startTime',
      endTime: 'endTime',
      keywords: 'keywords',
      sourceUserParams: 'sourceUserParams',
      targetUserParams: 'targetUserParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      keywords: { 'type': 'array', 'itemType': 'string' },
      sourceUserParams: { 'type': 'array', 'itemType': RetrievalExtendParamsValueSourceUserParams },
      targetUserParams: { 'type': 'array', 'itemType': RetrievalExtendParamsValueTargetUserParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLoginStatusDevicesHeaders extends $tea.Model {
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

export class FetchLoginStatusDevicesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      userIdList: 'userIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLoginStatusDevicesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  result?: FetchLoginStatusDevicesResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': FetchLoginStatusDevicesResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLoginStatusDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FetchLoginStatusDevicesResponseBody;
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
      body: FetchLoginStatusDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiTaskResultHeaders extends $tea.Model {
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

export class GetAiTaskResultRequest extends $tea.Model {
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

export class GetAiTaskResultResponseBody extends $tea.Model {
  content?: string;
  contentType?: string;
  errorCode?: string;
  errorMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'contentType',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiTaskResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAiTaskResultResponseBody;
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
      body: GetAiTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveHeaders extends $tea.Model {
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

export class RetrieveRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  answerer?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  dragRequestContext?: RetrieveRequestDragRequestContext;
  keywordList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  limit?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  question?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  questioner?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  retrievalExtendParams?: { [key: string]: RetrievalExtendParamsValue };
  retrieveScoreThreshold?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tenant?: string;
  tokenLimit?: number;
  static names(): { [key: string]: string } {
    return {
      answerer: 'answerer',
      corpId: 'corpId',
      dragRequestContext: 'dragRequestContext',
      keywordList: 'keywordList',
      limit: 'limit',
      question: 'question',
      questioner: 'questioner',
      retrievalExtendParams: 'retrievalExtendParams',
      retrieveScoreThreshold: 'retrieveScoreThreshold',
      scene: 'scene',
      tenant: 'tenant',
      tokenLimit: 'tokenLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerer: 'string',
      corpId: 'string',
      dragRequestContext: RetrieveRequestDragRequestContext,
      keywordList: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      question: 'string',
      questioner: 'string',
      retrievalExtendParams: { 'type': 'map', 'keyType': 'string', 'valueType': RetrievalExtendParamsValue },
      retrieveScoreThreshold: 'number',
      scene: 'string',
      tenant: 'string',
      tokenLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  result?: RetrieveResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': RetrieveResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetrieveResponseBody;
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
      body: RetrieveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAiTaskHeaders extends $tea.Model {
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

export class SubmitAiTaskRequest extends $tea.Model {
  messages?: SubmitAiTaskRequestMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': SubmitAiTaskRequestMessages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAiTaskShrinkRequest extends $tea.Model {
  messagesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      messagesShrink: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messagesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAiTaskResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  result?: SubmitAiTaskResponseBodyResult;
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
      result: SubmitAiTaskResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAiTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitAiTaskResponseBody;
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
      body: SubmitAiTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrievalExtendParamsValueSourceUserParams extends $tea.Model {
  nick?: string;
  staffId?: string;
  static names(): { [key: string]: string } {
    return {
      nick: 'nick',
      staffId: 'staffId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nick: 'string',
      staffId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrievalExtendParamsValueTargetUserParams extends $tea.Model {
  nick?: string;
  staffId?: string;
  static names(): { [key: string]: string } {
    return {
      nick: 'nick',
      staffId: 'staffId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nick: 'string',
      staffId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLoginStatusDevicesResponseBodyResultDeviceList extends $tea.Model {
  actionTimestamp?: number;
  clientType?: string;
  isLoggedIn?: boolean;
  openDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      actionTimestamp: 'actionTimestamp',
      clientType: 'clientType',
      isLoggedIn: 'isLoggedIn',
      openDeviceId: 'openDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionTimestamp: 'number',
      clientType: 'string',
      isLoggedIn: 'boolean',
      openDeviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLoginStatusDevicesResponseBodyResult extends $tea.Model {
  deviceList?: FetchLoginStatusDevicesResponseBodyResultDeviceList[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceList: 'deviceList',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceList: { 'type': 'array', 'itemType': FetchLoginStatusDevicesResponseBodyResultDeviceList },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveRequestDragRequestContextEvaluationContext extends $tea.Model {
  sourceDentryId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceDentryId: 'sourceDentryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDentryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveRequestDragRequestContext extends $tea.Model {
  evaluationContext?: RetrieveRequestDragRequestContextEvaluationContext;
  static names(): { [key: string]: string } {
    return {
      evaluationContext: 'evaluationContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationContext: RetrieveRequestDragRequestContextEvaluationContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultCalendarsScoreItem extends $tea.Model {
  finallyScore?: number;
  scoreMap?: { [key: string]: number };
  scoreThreshold?: number;
  selectedBranch?: string[];
  selectedCategory?: string;
  static names(): { [key: string]: string } {
    return {
      finallyScore: 'finallyScore',
      scoreMap: 'scoreMap',
      scoreThreshold: 'scoreThreshold',
      selectedBranch: 'selectedBranch',
      selectedCategory: 'selectedCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finallyScore: 'number',
      scoreMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      scoreThreshold: 'number',
      selectedBranch: { 'type': 'array', 'itemType': 'string' },
      selectedCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultCalendars extends $tea.Model {
  creatorStaffId?: number;
  endTime?: number;
  gmtCreate?: number;
  gmtModified?: number;
  icon?: string;
  matchIntimacy?: boolean;
  material?: string;
  meetingRoom?: string;
  participantStaffIds?: string[];
  rawComment?: string;
  refType?: string;
  score?: number;
  scoreItem?: RetrieveResponseBodyResultCalendarsScoreItem;
  startTime?: number;
  timestamp?: number;
  title?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      creatorStaffId: 'creatorStaffId',
      endTime: 'endTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      icon: 'icon',
      matchIntimacy: 'matchIntimacy',
      material: 'material',
      meetingRoom: 'meetingRoom',
      participantStaffIds: 'participantStaffIds',
      rawComment: 'rawComment',
      refType: 'refType',
      score: 'score',
      scoreItem: 'scoreItem',
      startTime: 'startTime',
      timestamp: 'timestamp',
      title: 'title',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorStaffId: 'number',
      endTime: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      icon: 'string',
      matchIntimacy: 'boolean',
      material: 'string',
      meetingRoom: 'string',
      participantStaffIds: { 'type': 'array', 'itemType': 'string' },
      rawComment: 'string',
      refType: 'string',
      score: 'number',
      scoreItem: RetrieveResponseBodyResultCalendarsScoreItem,
      startTime: 'number',
      timestamp: 'number',
      title: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultDingHelperDocsAbleDashboardModel extends $tea.Model {
  chartName?: string;
  chartType?: string;
  dashboardName?: string;
  data?: string;
  sheetName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chartName: 'chartName',
      chartType: 'chartType',
      dashboardName: 'dashboardName',
      data: 'data',
      sheetName: 'sheetName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartName: 'string',
      chartType: 'string',
      dashboardName: 'string',
      data: 'string',
      sheetName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultDingHelperDocsScoreItem extends $tea.Model {
  finallyScore?: number;
  scoreMap?: { [key: string]: number };
  scoreThreshold?: number;
  selectedBranch?: string[];
  selectedCategory?: string;
  static names(): { [key: string]: string } {
    return {
      finallyScore: 'finallyScore',
      scoreMap: 'scoreMap',
      scoreThreshold: 'scoreThreshold',
      selectedBranch: 'selectedBranch',
      selectedCategory: 'selectedCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finallyScore: 'number',
      scoreMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      scoreThreshold: 'number',
      selectedBranch: { 'type': 'array', 'itemType': 'string' },
      selectedCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultDingHelperDocs extends $tea.Model {
  ableDashboardModel?: RetrieveResponseBodyResultDingHelperDocsAbleDashboardModel;
  chunkId?: number;
  chunkIds?: number[];
  chunkModel?: string;
  creator?: string;
  dentryUuid?: string;
  extension?: string;
  gmtCreate?: number;
  gmtModified?: number;
  hasExtendChunk?: boolean;
  icon?: string;
  matchIntimacy?: boolean;
  material?: string;
  refType?: string;
  score?: number;
  scoreItem?: RetrieveResponseBodyResultDingHelperDocsScoreItem;
  small2bigText?: string;
  text?: string;
  timestamp?: number;
  title?: string;
  type?: string;
  uploadSource?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      ableDashboardModel: 'ableDashboardModel',
      chunkId: 'chunkId',
      chunkIds: 'chunkIds',
      chunkModel: 'chunkModel',
      creator: 'creator',
      dentryUuid: 'dentryUuid',
      extension: 'extension',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      hasExtendChunk: 'hasExtendChunk',
      icon: 'icon',
      matchIntimacy: 'matchIntimacy',
      material: 'material',
      refType: 'refType',
      score: 'score',
      scoreItem: 'scoreItem',
      small2bigText: 'small2bigText',
      text: 'text',
      timestamp: 'timestamp',
      title: 'title',
      type: 'type',
      uploadSource: 'uploadSource',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ableDashboardModel: RetrieveResponseBodyResultDingHelperDocsAbleDashboardModel,
      chunkId: 'number',
      chunkIds: { 'type': 'array', 'itemType': 'number' },
      chunkModel: 'string',
      creator: 'string',
      dentryUuid: 'string',
      extension: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      hasExtendChunk: 'boolean',
      icon: 'string',
      matchIntimacy: 'boolean',
      material: 'string',
      refType: 'string',
      score: 'number',
      scoreItem: RetrieveResponseBodyResultDingHelperDocsScoreItem,
      small2bigText: 'string',
      text: 'string',
      timestamp: 'number',
      title: 'string',
      type: 'string',
      uploadSource: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultDocsAbleDashboardModel extends $tea.Model {
  chartName?: string;
  chartType?: string;
  dashboardName?: string;
  data?: string;
  sheetName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chartName: 'chartName',
      chartType: 'chartType',
      dashboardName: 'dashboardName',
      data: 'data',
      sheetName: 'sheetName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartName: 'string',
      chartType: 'string',
      dashboardName: 'string',
      data: 'string',
      sheetName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultDocsScoreItem extends $tea.Model {
  finallyScore?: number;
  scoreMap?: { [key: string]: number };
  scoreThreshold?: number;
  selectedBranch?: string[];
  selectedCategory?: string;
  static names(): { [key: string]: string } {
    return {
      finallyScore: 'finallyScore',
      scoreMap: 'scoreMap',
      scoreThreshold: 'scoreThreshold',
      selectedBranch: 'selectedBranch',
      selectedCategory: 'selectedCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finallyScore: 'number',
      scoreMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      scoreThreshold: 'number',
      selectedBranch: { 'type': 'array', 'itemType': 'string' },
      selectedCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultDocs extends $tea.Model {
  ableDashboardModel?: RetrieveResponseBodyResultDocsAbleDashboardModel;
  chunkId?: number;
  chunkIds?: number[];
  chunkModel?: string;
  creator?: string;
  dentryUuid?: string;
  extension?: string;
  gmtCreate?: number;
  gmtModified?: number;
  hasExtendChunk?: boolean;
  icon?: string;
  matchIntimacy?: boolean;
  material?: string;
  refType?: string;
  score?: number;
  scoreItem?: RetrieveResponseBodyResultDocsScoreItem;
  small2bigText?: string;
  text?: string;
  timestamp?: number;
  title?: string;
  type?: string;
  uploadSource?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      ableDashboardModel: 'ableDashboardModel',
      chunkId: 'chunkId',
      chunkIds: 'chunkIds',
      chunkModel: 'chunkModel',
      creator: 'creator',
      dentryUuid: 'dentryUuid',
      extension: 'extension',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      hasExtendChunk: 'hasExtendChunk',
      icon: 'icon',
      matchIntimacy: 'matchIntimacy',
      material: 'material',
      refType: 'refType',
      score: 'score',
      scoreItem: 'scoreItem',
      small2bigText: 'small2bigText',
      text: 'text',
      timestamp: 'timestamp',
      title: 'title',
      type: 'type',
      uploadSource: 'uploadSource',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ableDashboardModel: RetrieveResponseBodyResultDocsAbleDashboardModel,
      chunkId: 'number',
      chunkIds: { 'type': 'array', 'itemType': 'number' },
      chunkModel: 'string',
      creator: 'string',
      dentryUuid: 'string',
      extension: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      hasExtendChunk: 'boolean',
      icon: 'string',
      matchIntimacy: 'boolean',
      material: 'string',
      refType: 'string',
      score: 'number',
      scoreItem: RetrieveResponseBodyResultDocsScoreItem,
      small2bigText: 'string',
      text: 'string',
      timestamp: 'number',
      title: 'string',
      type: 'string',
      uploadSource: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultFaqsScoreItem extends $tea.Model {
  finallyScore?: number;
  scoreMap?: { [key: string]: number };
  scoreThreshold?: number;
  selectedBranch?: string[];
  selectedCategory?: string;
  static names(): { [key: string]: string } {
    return {
      finallyScore: 'finallyScore',
      scoreMap: 'scoreMap',
      scoreThreshold: 'scoreThreshold',
      selectedBranch: 'selectedBranch',
      selectedCategory: 'selectedCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finallyScore: 'number',
      scoreMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      scoreThreshold: 'number',
      selectedBranch: { 'type': 'array', 'itemType': 'string' },
      selectedCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultFaqs extends $tea.Model {
  icon?: string;
  matchIntimacy?: boolean;
  material?: string;
  refType?: string;
  score?: number;
  scoreItem?: RetrieveResponseBodyResultFaqsScoreItem;
  timestamp?: number;
  title?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'icon',
      matchIntimacy: 'matchIntimacy',
      material: 'material',
      refType: 'refType',
      score: 'score',
      scoreItem: 'scoreItem',
      timestamp: 'timestamp',
      title: 'title',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      matchIntimacy: 'boolean',
      material: 'string',
      refType: 'string',
      score: 'number',
      scoreItem: RetrieveResponseBodyResultFaqsScoreItem,
      timestamp: 'number',
      title: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultFinalResultsScoreItem extends $tea.Model {
  finallyScore?: number;
  scoreMap?: { [key: string]: number };
  scoreThreshold?: number;
  selectedBranch?: string[];
  selectedCategory?: string;
  static names(): { [key: string]: string } {
    return {
      finallyScore: 'finallyScore',
      scoreMap: 'scoreMap',
      scoreThreshold: 'scoreThreshold',
      selectedBranch: 'selectedBranch',
      selectedCategory: 'selectedCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finallyScore: 'number',
      scoreMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      scoreThreshold: 'number',
      selectedBranch: { 'type': 'array', 'itemType': 'string' },
      selectedCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultFinalResults extends $tea.Model {
  icon?: string;
  matchIntimacy?: boolean;
  material?: string;
  refType?: string;
  score?: number;
  scoreItem?: RetrieveResponseBodyResultFinalResultsScoreItem;
  timestamp?: number;
  title?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'icon',
      matchIntimacy: 'matchIntimacy',
      material: 'material',
      refType: 'refType',
      score: 'score',
      scoreItem: 'scoreItem',
      timestamp: 'timestamp',
      title: 'title',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      matchIntimacy: 'boolean',
      material: 'string',
      refType: 'string',
      score: 'number',
      scoreItem: RetrieveResponseBodyResultFinalResultsScoreItem,
      timestamp: 'number',
      title: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultMinutesScoreItem extends $tea.Model {
  finallyScore?: number;
  scoreMap?: { [key: string]: number };
  scoreThreshold?: number;
  selectedBranch?: string[];
  selectedCategory?: string;
  static names(): { [key: string]: string } {
    return {
      finallyScore: 'finallyScore',
      scoreMap: 'scoreMap',
      scoreThreshold: 'scoreThreshold',
      selectedBranch: 'selectedBranch',
      selectedCategory: 'selectedCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finallyScore: 'number',
      scoreMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      scoreThreshold: 'number',
      selectedBranch: { 'type': 'array', 'itemType': 'string' },
      selectedCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultMinutes extends $tea.Model {
  corpId?: number;
  creator?: string;
  extension?: string;
  fullTextSummary?: string;
  gmtModified?: number;
  icon?: string;
  matchIntimacy?: boolean;
  material?: string;
  originText?: string;
  refType?: string;
  score?: number;
  scoreItem?: RetrieveResponseBodyResultMinutesScoreItem;
  timestamp?: number;
  title?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      creator: 'creator',
      extension: 'extension',
      fullTextSummary: 'fullTextSummary',
      gmtModified: 'gmtModified',
      icon: 'icon',
      matchIntimacy: 'matchIntimacy',
      material: 'material',
      originText: 'originText',
      refType: 'refType',
      score: 'score',
      scoreItem: 'scoreItem',
      timestamp: 'timestamp',
      title: 'title',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'number',
      creator: 'string',
      extension: 'string',
      fullTextSummary: 'string',
      gmtModified: 'number',
      icon: 'string',
      matchIntimacy: 'boolean',
      material: 'string',
      originText: 'string',
      refType: 'string',
      score: 'number',
      scoreItem: RetrieveResponseBodyResultMinutesScoreItem,
      timestamp: 'number',
      title: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultReportsScoreItem extends $tea.Model {
  finallyScore?: number;
  scoreMap?: { [key: string]: number };
  scoreThreshold?: number;
  selectedBranch?: string[];
  selectedCategory?: string;
  static names(): { [key: string]: string } {
    return {
      finallyScore: 'finallyScore',
      scoreMap: 'scoreMap',
      scoreThreshold: 'scoreThreshold',
      selectedBranch: 'selectedBranch',
      selectedCategory: 'selectedCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finallyScore: 'number',
      scoreMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      scoreThreshold: 'number',
      selectedBranch: { 'type': 'array', 'itemType': 'string' },
      selectedCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultReports extends $tea.Model {
  content?: string;
  corpId?: number;
  creator?: string;
  gmtCreate?: number;
  gmtModified?: number;
  icon?: string;
  matchIntimacy?: boolean;
  material?: string;
  refType?: string;
  score?: number;
  scoreItem?: RetrieveResponseBodyResultReportsScoreItem;
  timestamp?: number;
  title?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      corpId: 'corpId',
      creator: 'creator',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      icon: 'icon',
      matchIntimacy: 'matchIntimacy',
      material: 'material',
      refType: 'refType',
      score: 'score',
      scoreItem: 'scoreItem',
      timestamp: 'timestamp',
      title: 'title',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      corpId: 'number',
      creator: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      icon: 'string',
      matchIntimacy: 'boolean',
      material: 'string',
      refType: 'string',
      score: 'number',
      scoreItem: RetrieveResponseBodyResultReportsScoreItem,
      timestamp: 'number',
      title: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultWikisScoreItem extends $tea.Model {
  finallyScore?: number;
  scoreMap?: { [key: string]: number };
  scoreThreshold?: number;
  selectedBranch?: string[];
  selectedCategory?: string;
  static names(): { [key: string]: string } {
    return {
      finallyScore: 'finallyScore',
      scoreMap: 'scoreMap',
      scoreThreshold: 'scoreThreshold',
      selectedBranch: 'selectedBranch',
      selectedCategory: 'selectedCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finallyScore: 'number',
      scoreMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      scoreThreshold: 'number',
      selectedBranch: { 'type': 'array', 'itemType': 'string' },
      selectedCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResultWikis extends $tea.Model {
  corpId?: number;
  icon?: string;
  matchIntimacy?: boolean;
  material?: string;
  refType?: string;
  score?: number;
  scoreItem?: RetrieveResponseBodyResultWikisScoreItem;
  timestamp?: number;
  title?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      icon: 'icon',
      matchIntimacy: 'matchIntimacy',
      material: 'material',
      refType: 'refType',
      score: 'score',
      scoreItem: 'scoreItem',
      timestamp: 'timestamp',
      title: 'title',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'number',
      icon: 'string',
      matchIntimacy: 'boolean',
      material: 'string',
      refType: 'string',
      score: 'number',
      scoreItem: RetrieveResponseBodyResultWikisScoreItem,
      timestamp: 'number',
      title: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyResult extends $tea.Model {
  calendars?: RetrieveResponseBodyResultCalendars[];
  dingHelperDocs?: RetrieveResponseBodyResultDingHelperDocs[];
  docs?: RetrieveResponseBodyResultDocs[];
  faqs?: RetrieveResponseBodyResultFaqs[];
  finalResults?: RetrieveResponseBodyResultFinalResults[];
  minutes?: RetrieveResponseBodyResultMinutes[];
  reports?: RetrieveResponseBodyResultReports[];
  wikis?: RetrieveResponseBodyResultWikis[];
  static names(): { [key: string]: string } {
    return {
      calendars: 'calendars',
      dingHelperDocs: 'dingHelperDocs',
      docs: 'docs',
      faqs: 'faqs',
      finalResults: 'finalResults',
      minutes: 'minutes',
      reports: 'reports',
      wikis: 'wikis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendars: { 'type': 'array', 'itemType': RetrieveResponseBodyResultCalendars },
      dingHelperDocs: { 'type': 'array', 'itemType': RetrieveResponseBodyResultDingHelperDocs },
      docs: { 'type': 'array', 'itemType': RetrieveResponseBodyResultDocs },
      faqs: { 'type': 'array', 'itemType': RetrieveResponseBodyResultFaqs },
      finalResults: { 'type': 'array', 'itemType': RetrieveResponseBodyResultFinalResults },
      minutes: { 'type': 'array', 'itemType': RetrieveResponseBodyResultMinutes },
      reports: { 'type': 'array', 'itemType': RetrieveResponseBodyResultReports },
      wikis: { 'type': 'array', 'itemType': RetrieveResponseBodyResultWikis },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAiTaskRequestMessages extends $tea.Model {
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

export class SubmitAiTaskResponseBodyResult extends $tea.Model {
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
   * 查询指定用户的全部已登录设备及其状态
   * 
   * @param request - FetchLoginStatusDevicesRequest
   * @param headers - FetchLoginStatusDevicesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchLoginStatusDevicesResponse
   */
  async fetchLoginStatusDevicesWithOptions(request: FetchLoginStatusDevicesRequest, headers: FetchLoginStatusDevicesHeaders, runtime: $Util.RuntimeOptions): Promise<FetchLoginStatusDevicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!Util.isUnset(request.userIdList)) {
      body["userIdList"] = request.userIdList;
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
      action: "FetchLoginStatusDevices",
      version: "aiSearchAsk_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiSearchAsk/fetchLoginStatusDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<FetchLoginStatusDevicesResponse>(await this.execute(params, req, runtime), new FetchLoginStatusDevicesResponse({}));
  }

  /**
   * 查询指定用户的全部已登录设备及其状态
   * 
   * @param request - FetchLoginStatusDevicesRequest
   * @returns FetchLoginStatusDevicesResponse
   */
  async fetchLoginStatusDevices(request: FetchLoginStatusDevicesRequest): Promise<FetchLoginStatusDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FetchLoginStatusDevicesHeaders({ });
    return await this.fetchLoginStatusDevicesWithOptions(request, headers, runtime);
  }

  /**
   * 获得ai任务结果
   * 
   * @param request - GetAiTaskResultRequest
   * @param headers - GetAiTaskResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiTaskResultResponse
   */
  async getAiTaskResultWithOptions(request: GetAiTaskResultRequest, headers: GetAiTaskResultHeaders, runtime: $Util.RuntimeOptions): Promise<GetAiTaskResultResponse> {
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
      action: "GetAiTaskResult",
      version: "aiSearchAsk_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiSearchAsk/getAiTaskResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetAiTaskResultResponse>(await this.execute(params, req, runtime), new GetAiTaskResultResponse({}));
  }

  /**
   * 获得ai任务结果
   * 
   * @param request - GetAiTaskResultRequest
   * @returns GetAiTaskResultResponse
   */
  async getAiTaskResult(request: GetAiTaskResultRequest): Promise<GetAiTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAiTaskResultHeaders({ });
    return await this.getAiTaskResultWithOptions(request, headers, runtime);
  }

  /**
   * 多数据源召回接口
   * 
   * @param request - RetrieveRequest
   * @param headers - RetrieveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveResponse
   */
  async retrieveWithOptions(request: RetrieveRequest, headers: RetrieveHeaders, runtime: $Util.RuntimeOptions): Promise<RetrieveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.answerer)) {
      body["answerer"] = request.answerer;
    }

    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.dragRequestContext)) {
      body["dragRequestContext"] = request.dragRequestContext;
    }

    if (!Util.isUnset(request.keywordList)) {
      body["keywordList"] = request.keywordList;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.question)) {
      body["question"] = request.question;
    }

    if (!Util.isUnset(request.questioner)) {
      body["questioner"] = request.questioner;
    }

    if (!Util.isUnset(request.retrievalExtendParams)) {
      body["retrievalExtendParams"] = request.retrievalExtendParams;
    }

    if (!Util.isUnset(request.retrieveScoreThreshold)) {
      body["retrieveScoreThreshold"] = request.retrieveScoreThreshold;
    }

    if (!Util.isUnset(request.scene)) {
      body["scene"] = request.scene;
    }

    if (!Util.isUnset(request.tenant)) {
      body["tenant"] = request.tenant;
    }

    if (!Util.isUnset(request.tokenLimit)) {
      body["tokenLimit"] = request.tokenLimit;
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
      action: "Retrieve",
      version: "aiSearchAsk_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiSearchAsk/retrieve`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RetrieveResponse>(await this.execute(params, req, runtime), new RetrieveResponse({}));
  }

  /**
   * 多数据源召回接口
   * 
   * @param request - RetrieveRequest
   * @returns RetrieveResponse
   */
  async retrieve(request: RetrieveRequest): Promise<RetrieveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RetrieveHeaders({ });
    return await this.retrieveWithOptions(request, headers, runtime);
  }

  /**
   * 提交ai任务
   * 
   * @param tmpReq - SubmitAiTaskRequest
   * @param headers - SubmitAiTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAiTaskResponse
   */
  async submitAiTaskWithOptions(tmpReq: SubmitAiTaskRequest, headers: SubmitAiTaskHeaders, runtime: $Util.RuntimeOptions): Promise<SubmitAiTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitAiTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.messages)) {
      request.messagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messages, "messages", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.messagesShrink)) {
      query["messages"] = request.messagesShrink;
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
      action: "SubmitAiTask",
      version: "aiSearchAsk_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiSearchAsk/submitAiTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SubmitAiTaskResponse>(await this.execute(params, req, runtime), new SubmitAiTaskResponse({}));
  }

  /**
   * 提交ai任务
   * 
   * @param request - SubmitAiTaskRequest
   * @returns SubmitAiTaskResponse
   */
  async submitAiTask(request: SubmitAiTaskRequest): Promise<SubmitAiTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SubmitAiTaskHeaders({ });
    return await this.submitAiTaskWithOptions(request, headers, runtime);
  }

}
