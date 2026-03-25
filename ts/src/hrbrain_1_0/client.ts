// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class HrbrainBizDataQueryHeaders extends $tea.Model {
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

export class HrbrainBizDataQueryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizCode?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'bizCode',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainBizDataQueryResponseBody extends $tea.Model {
  content?: HrbrainBizDataQueryResponseBodyContent;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: HrbrainBizDataQueryResponseBodyContent,
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainBizDataQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainBizDataQueryResponseBody;
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
      body: HrbrainBizDataQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteAwardRecordsHeaders extends $tea.Model {
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

export class HrbrainDeleteAwardRecordsRequest extends $tea.Model {
  params?: HrbrainDeleteAwardRecordsRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteAwardRecordsRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteAwardRecordsResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteAwardRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteAwardRecordsResponseBody;
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
      body: HrbrainDeleteAwardRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteCustomHeaders extends $tea.Model {
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

export class HrbrainDeleteCustomRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  modelCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  params?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      modelCode: 'modelCode',
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCode: 'string',
      params: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteCustomResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteCustomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteCustomResponseBody;
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
      body: HrbrainDeleteCustomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteDeptInfoHeaders extends $tea.Model {
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

export class HrbrainDeleteDeptInfoRequest extends $tea.Model {
  params?: HrbrainDeleteDeptInfoRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteDeptInfoRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteDeptInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteDeptInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteDeptInfoResponseBody;
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
      body: HrbrainDeleteDeptInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteDimissionHeaders extends $tea.Model {
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

export class HrbrainDeleteDimissionRequest extends $tea.Model {
  params?: HrbrainDeleteDimissionRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteDimissionRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteDimissionResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d289
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteDimissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteDimissionResponseBody;
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
      body: HrbrainDeleteDimissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteEduExpHeaders extends $tea.Model {
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

export class HrbrainDeleteEduExpRequest extends $tea.Model {
  params?: HrbrainDeleteEduExpRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteEduExpRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteEduExpResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d289
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteEduExpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteEduExpResponseBody;
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
      body: HrbrainDeleteEduExpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteEmpInfoHeaders extends $tea.Model {
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

export class HrbrainDeleteEmpInfoRequest extends $tea.Model {
  params?: HrbrainDeleteEmpInfoRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteEmpInfoRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteEmpInfoResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d289
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteEmpInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteEmpInfoResponseBody;
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
      body: HrbrainDeleteEmpInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteLabelIndustryHeaders extends $tea.Model {
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

export class HrbrainDeleteLabelIndustryRequest extends $tea.Model {
  params?: HrbrainDeleteLabelIndustryRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteLabelIndustryRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteLabelIndustryResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d299
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteLabelIndustryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteLabelIndustryResponseBody;
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
      body: HrbrainDeleteLabelIndustryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteLabelInventoryHeaders extends $tea.Model {
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

export class HrbrainDeleteLabelInventoryRequest extends $tea.Model {
  params?: HrbrainDeleteLabelInventoryRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteLabelInventoryRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteLabelInventoryResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d299
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteLabelInventoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteLabelInventoryResponseBody;
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
      body: HrbrainDeleteLabelInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteLabelProfSkillHeaders extends $tea.Model {
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

export class HrbrainDeleteLabelProfSkillRequest extends $tea.Model {
  params?: HrbrainDeleteLabelProfSkillRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteLabelProfSkillRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteLabelProfSkillResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d289
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteLabelProfSkillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteLabelProfSkillResponseBody;
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
      body: HrbrainDeleteLabelProfSkillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletePerfEvalHeaders extends $tea.Model {
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

export class HrbrainDeletePerfEvalRequest extends $tea.Model {
  params?: HrbrainDeletePerfEvalRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeletePerfEvalRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletePerfEvalResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d289
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletePerfEvalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeletePerfEvalResponseBody;
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
      body: HrbrainDeletePerfEvalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletePromRecordsHeaders extends $tea.Model {
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

export class HrbrainDeletePromRecordsRequest extends $tea.Model {
  params?: HrbrainDeletePromRecordsRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeletePromRecordsRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletePromRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d299
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletePromRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeletePromRecordsResponseBody;
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
      body: HrbrainDeletePromRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletePunDetailHeaders extends $tea.Model {
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

export class HrbrainDeletePunDetailRequest extends $tea.Model {
  params?: HrbrainDeletePunDetailRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeletePunDetailRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletePunDetailResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d289
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletePunDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeletePunDetailResponseBody;
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
      body: HrbrainDeletePunDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteRegistHeaders extends $tea.Model {
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

export class HrbrainDeleteRegistRequest extends $tea.Model {
  params?: HrbrainDeleteRegistRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteRegistRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteRegistResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d289
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteRegistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteRegistResponseBody;
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
      body: HrbrainDeleteRegistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteRegularHeaders extends $tea.Model {
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

export class HrbrainDeleteRegularRequest extends $tea.Model {
  params?: HrbrainDeleteRegularRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteRegularRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteRegularResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteRegularResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteRegularResponseBody;
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
      body: HrbrainDeleteRegularResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteTrainingHeaders extends $tea.Model {
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

export class HrbrainDeleteTrainingRequest extends $tea.Model {
  params?: HrbrainDeleteTrainingRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteTrainingRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteTrainingResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteTrainingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteTrainingResponseBody;
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
      body: HrbrainDeleteTrainingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteTransferEvalHeaders extends $tea.Model {
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

export class HrbrainDeleteTransferEvalRequest extends $tea.Model {
  params?: HrbrainDeleteTransferEvalRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteTransferEvalRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteTransferEvalResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d289
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteTransferEvalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteTransferEvalResponseBody;
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
      body: HrbrainDeleteTransferEvalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteWorkExpHeaders extends $tea.Model {
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

export class HrbrainDeleteWorkExpRequest extends $tea.Model {
  params?: HrbrainDeleteWorkExpRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeleteWorkExpRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteWorkExpResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d289
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteWorkExpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeleteWorkExpResponseBody;
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
      body: HrbrainDeleteWorkExpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletetLabelBaseHeaders extends $tea.Model {
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

export class HrbrainDeletetLabelBaseRequest extends $tea.Model {
  params?: HrbrainDeletetLabelBaseRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainDeletetLabelBaseRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletetLabelBaseResponseBody extends $tea.Model {
  /**
   * @example
   * 480021443f9f37fcbf464c4a6b85d289
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletetLabelBaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainDeletetLabelBaseResponseBody;
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
      body: HrbrainDeletetLabelBaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainEmpPoolQueryHeaders extends $tea.Model {
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

export class HrbrainEmpPoolQueryRequest extends $tea.Model {
  keyword?: string;
  labels?: string[];
  maxResults?: number;
  nextToken?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labels: 'labels',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainEmpPoolQueryResponseBody extends $tea.Model {
  content?: HrbrainEmpPoolQueryResponseBodyContent;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: HrbrainEmpPoolQueryResponseBodyContent,
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainEmpPoolQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainEmpPoolQueryResponseBody;
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
      body: HrbrainEmpPoolQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainEmpPoolUserHeaders extends $tea.Model {
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

export class HrbrainEmpPoolUserRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: number;
  poolCode?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      poolCode: 'poolCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'number',
      poolCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainEmpPoolUserResponseBody extends $tea.Model {
  content?: HrbrainEmpPoolUserResponseBodyContent;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: HrbrainEmpPoolUserResponseBodyContent,
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainEmpPoolUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainEmpPoolUserResponseBody;
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
      body: HrbrainEmpPoolUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportAwardDetailHeaders extends $tea.Model {
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

export class HrbrainImportAwardDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportAwardDetailRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportAwardDetailRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportAwardDetailResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportAwardDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportAwardDetailResponseBody;
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
      body: HrbrainImportAwardDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportCustomHeaders extends $tea.Model {
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

export class HrbrainImportCustomRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: { [key: string]: any }[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modelCode?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
      modelCode: 'modelCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      corpId: 'string',
      modelCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportCustomResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportCustomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportCustomResponseBody;
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
      body: HrbrainImportCustomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportDeptInfoHeaders extends $tea.Model {
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

export class HrbrainImportDeptInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportDeptInfoRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportDeptInfoRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportDeptInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportDeptInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportDeptInfoResponseBody;
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
      body: HrbrainImportDeptInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportDimissionHeaders extends $tea.Model {
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

export class HrbrainImportDimissionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportDimissionRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportDimissionRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportDimissionResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportDimissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportDimissionResponseBody;
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
      body: HrbrainImportDimissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportEduExpHeaders extends $tea.Model {
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

export class HrbrainImportEduExpRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportEduExpRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportEduExpRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportEduExpResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportEduExpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportEduExpResponseBody;
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
      body: HrbrainImportEduExpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportEmpInfoHeaders extends $tea.Model {
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

export class HrbrainImportEmpInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportEmpInfoRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportEmpInfoRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportEmpInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportEmpInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportEmpInfoResponseBody;
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
      body: HrbrainImportEmpInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelBaseHeaders extends $tea.Model {
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

export class HrbrainImportLabelBaseRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportLabelBaseRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportLabelBaseRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelBaseResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelBaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportLabelBaseResponseBody;
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
      body: HrbrainImportLabelBaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelCustomHeaders extends $tea.Model {
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

export class HrbrainImportLabelCustomRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportLabelCustomRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportLabelCustomRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelCustomResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelCustomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportLabelCustomResponseBody;
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
      body: HrbrainImportLabelCustomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelIndustryHeaders extends $tea.Model {
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

export class HrbrainImportLabelIndustryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportLabelIndustryRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportLabelIndustryRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelIndustryResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelIndustryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportLabelIndustryResponseBody;
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
      body: HrbrainImportLabelIndustryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelInventoryHeaders extends $tea.Model {
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

export class HrbrainImportLabelInventoryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportLabelInventoryRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportLabelInventoryRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelInventoryResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelInventoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportLabelInventoryResponseBody;
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
      body: HrbrainImportLabelInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelProfSkillHeaders extends $tea.Model {
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

export class HrbrainImportLabelProfSkillRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportLabelProfSkillRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportLabelProfSkillRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelProfSkillResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelProfSkillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportLabelProfSkillResponseBody;
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
      body: HrbrainImportLabelProfSkillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportPerfEvalHeaders extends $tea.Model {
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

export class HrbrainImportPerfEvalRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportPerfEvalRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportPerfEvalRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportPerfEvalResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportPerfEvalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportPerfEvalResponseBody;
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
      body: HrbrainImportPerfEvalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportPromEvalHeaders extends $tea.Model {
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

export class HrbrainImportPromEvalRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportPromEvalRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportPromEvalRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportPromEvalResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportPromEvalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportPromEvalResponseBody;
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
      body: HrbrainImportPromEvalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportPunDetailHeaders extends $tea.Model {
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

export class HrbrainImportPunDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportPunDetailRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportPunDetailRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportPunDetailResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportPunDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportPunDetailResponseBody;
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
      body: HrbrainImportPunDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportRegistHeaders extends $tea.Model {
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

export class HrbrainImportRegistRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportRegistRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportRegistRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportRegistResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportRegistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportRegistResponseBody;
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
      body: HrbrainImportRegistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportRegularHeaders extends $tea.Model {
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

export class HrbrainImportRegularRequest extends $tea.Model {
  body?: HrbrainImportRegularRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportRegularRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportRegularResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportRegularResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportRegularResponseBody;
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
      body: HrbrainImportRegularResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportTrainingHeaders extends $tea.Model {
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

export class HrbrainImportTrainingRequest extends $tea.Model {
  body?: HrbrainImportTrainingRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportTrainingRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportTrainingResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportTrainingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportTrainingResponseBody;
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
      body: HrbrainImportTrainingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportTransferEvalHeaders extends $tea.Model {
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

export class HrbrainImportTransferEvalRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportTransferEvalRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportTransferEvalRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportTransferEvalResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportTransferEvalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportTransferEvalResponseBody;
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
      body: HrbrainImportTransferEvalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportWorkExpHeaders extends $tea.Model {
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

export class HrbrainImportWorkExpRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: HrbrainImportWorkExpRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': HrbrainImportWorkExpRequestBody },
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportWorkExpResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportWorkExpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainImportWorkExpResponseBody;
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
      body: HrbrainImportWorkExpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelCategoryTreeHeaders extends $tea.Model {
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

export class HrbrainLabelCategoryTreeResponseBody extends $tea.Model {
  content?: HrbrainLabelCategoryTreeResponseBodyContent[];
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': HrbrainLabelCategoryTreeResponseBodyContent },
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelCategoryTreeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainLabelCategoryTreeResponseBody;
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
      body: HrbrainLabelCategoryTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelCategoryUpdateHeaders extends $tea.Model {
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

export class HrbrainLabelCategoryUpdateRequest extends $tea.Model {
  categoryVo?: HrbrainLabelCategoryUpdateRequestCategoryVo;
  static names(): { [key: string]: string } {
    return {
      categoryVo: 'categoryVo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryVo: HrbrainLabelCategoryUpdateRequestCategoryVo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelCategoryUpdateResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelCategoryUpdateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainLabelCategoryUpdateResponseBody;
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
      body: HrbrainLabelCategoryUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataDeleteHeaders extends $tea.Model {
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

export class HrbrainLabelDataDeleteRequest extends $tea.Model {
  params?: HrbrainLabelDataDeleteRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainLabelDataDeleteRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataDeleteResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataDeleteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainLabelDataDeleteResponseBody;
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
      body: HrbrainLabelDataDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataQueryHeaders extends $tea.Model {
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

export class HrbrainLabelDataQueryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  labelCode?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      labelCode: 'labelCode',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelCode: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataQueryResponseBody extends $tea.Model {
  content?: HrbrainLabelDataQueryResponseBodyContent;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: HrbrainLabelDataQueryResponseBodyContent,
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainLabelDataQueryResponseBody;
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
      body: HrbrainLabelDataQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataUpsertHeaders extends $tea.Model {
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

export class HrbrainLabelDataUpsertRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  params?: HrbrainLabelDataUpsertRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': HrbrainLabelDataUpsertRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataUpsertResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataUpsertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainLabelDataUpsertResponseBody;
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
      body: HrbrainLabelDataUpsertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelMetaHeaders extends $tea.Model {
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

export class HrbrainLabelMetaRequest extends $tea.Model {
  categoryCodes?: string[];
  labelCode?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      categoryCodes: 'categoryCodes',
      labelCode: 'labelCode',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCodes: { 'type': 'array', 'itemType': 'string' },
      labelCode: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelMetaResponseBody extends $tea.Model {
  content?: HrbrainLabelMetaResponseBodyContent;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: HrbrainLabelMetaResponseBodyContent,
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelMetaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainLabelMetaResponseBody;
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
      body: HrbrainLabelMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelMetaStatusHeaders extends $tea.Model {
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

export class HrbrainLabelMetaStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  codes?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  optType?: string;
  static names(): { [key: string]: string } {
    return {
      codes: 'codes',
      optType: 'optType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: { 'type': 'array', 'itemType': 'string' },
      optType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelMetaStatusResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelMetaStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainLabelMetaStatusResponseBody;
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
      body: HrbrainLabelMetaStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelMetaUpdateHeaders extends $tea.Model {
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

export class HrbrainLabelMetaUpdateRequest extends $tea.Model {
  categoryCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  code?: string;
  dataType?: string;
  description?: string;
  importantLevel?: string;
  isSensitive?: boolean;
  name?: string;
  options?: { [key: string]: any }[];
  permission?: { [key: string]: any };
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'categoryCode',
      code: 'code',
      dataType: 'dataType',
      description: 'description',
      importantLevel: 'importantLevel',
      isSensitive: 'isSensitive',
      name: 'name',
      options: 'options',
      permission: 'permission',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      code: 'string',
      dataType: 'string',
      description: 'string',
      importantLevel: 'string',
      isSensitive: 'boolean',
      name: 'string',
      options: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      permission: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      required: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelMetaUpdateResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelMetaUpdateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainLabelMetaUpdateResponseBody;
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
      body: HrbrainLabelMetaUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelTaskDataHeaders extends $tea.Model {
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

export class HrbrainLabelTaskDataRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  optWorkNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      optWorkNo: 'optWorkNo',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optWorkNo: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelTaskDataResponseBody extends $tea.Model {
  content?: HrbrainLabelTaskDataResponseBodyContent[];
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': HrbrainLabelTaskDataResponseBodyContent },
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelTaskDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainLabelTaskDataResponseBody;
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
      body: HrbrainLabelTaskDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelTaskMetaHeaders extends $tea.Model {
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

export class HrbrainLabelTaskMetaRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  optWorkNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      optWorkNo: 'optWorkNo',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optWorkNo: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelTaskMetaResponseBody extends $tea.Model {
  content?: HrbrainLabelTaskMetaResponseBodyContent[];
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': HrbrainLabelTaskMetaResponseBodyContent },
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelTaskMetaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainLabelTaskMetaResponseBody;
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
      body: HrbrainLabelTaskMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentProfileAttachmentQueryHeaders extends $tea.Model {
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

export class HrbrainTalentProfileAttachmentQueryRequest extends $tea.Model {
  body?: string[];
  dingCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dingCorpId: 'dingCorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': 'string' },
      dingCorpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentProfileAttachmentQueryResponseBody extends $tea.Model {
  content?: HrbrainTalentProfileAttachmentQueryResponseBodyContent;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: HrbrainTalentProfileAttachmentQueryResponseBodyContent,
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentProfileAttachmentQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainTalentProfileAttachmentQueryResponseBody;
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
      body: HrbrainTalentProfileAttachmentQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentProfileBasicQueryHeaders extends $tea.Model {
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

export class HrbrainTalentProfileBasicQueryRequest extends $tea.Model {
  body?: string[];
  dingCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dingCorpId: 'dingCorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': 'string' },
      dingCorpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentProfileBasicQueryResponseBody extends $tea.Model {
  content?: HrbrainTalentProfileBasicQueryResponseBodyContent;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: HrbrainTalentProfileBasicQueryResponseBodyContent,
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentProfileBasicQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainTalentProfileBasicQueryResponseBody;
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
      body: HrbrainTalentProfileBasicQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentSearchHeaders extends $tea.Model {
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

export class HrbrainTalentSearchRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      sessionId: 'sessionId',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      sessionId: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentSearchResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentSearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainTalentSearchResponseBody;
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
      body: HrbrainTalentSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentSearchResultHeaders extends $tea.Model {
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

export class HrbrainTalentSearchResultRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentSearchResultResponseBody extends $tea.Model {
  content?: string[];
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentSearchResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HrbrainTalentSearchResultResponseBody;
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
      body: HrbrainTalentSearchResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StaffLabelRecordsQueryHeaders extends $tea.Model {
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

export class StaffLabelRecordsQueryRequest extends $tea.Model {
  body?: StaffLabelRecordsQueryRequestBody[];
  /**
   * @example
   * 0140180438261064274667
   */
  dingCorpId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dingCorpId: 'dingCorpId',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': StaffLabelRecordsQueryRequestBody },
      dingCorpId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StaffLabelRecordsQueryResponseBody extends $tea.Model {
  content?: StaffLabelRecordsQueryResponseBodyContent;
  /**
   * @example
   * 0140180438261064274667
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: StaffLabelRecordsQueryResponseBodyContent,
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StaffLabelRecordsQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StaffLabelRecordsQueryResponseBody;
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
      body: StaffLabelRecordsQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDataHeaders extends $tea.Model {
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

export class SyncDataRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dataId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  etlTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      dataId: 'dataId',
      etlTime: 'etlTime',
      projectId: 'projectId',
      schemaId: 'schemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataId: 'string',
      etlTime: 'string',
      projectId: 'string',
      schemaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDataResponseBody extends $tea.Model {
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

export class SyncDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncDataResponseBody;
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
      body: SyncDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainBizDataQueryResponseBodyContent extends $tea.Model {
  bizInfos?: { [key: string]: any }[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      bizInfos: 'bizInfos',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizInfos: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteAwardRecordsRequestParams extends $tea.Model {
  awardDate?: string;
  awardName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      awardDate: 'awardDate',
      awardName: 'awardName',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      awardDate: 'string',
      awardName: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteDeptInfoRequestParams extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deptNo?: string;
  static names(): { [key: string]: string } {
    return {
      deptNo: 'deptNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteDimissionRequestParams extends $tea.Model {
  dimissionDate?: string;
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      dimissionDate: 'dimissionDate',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimissionDate: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteEduExpRequestParams extends $tea.Model {
  eduName?: string;
  endDate?: string;
  schoolName?: string;
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      eduName: 'eduName',
      endDate: 'endDate',
      schoolName: 'schoolName',
      startDate: 'startDate',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eduName: 'string',
      endDate: 'string',
      schoolName: 'string',
      startDate: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteEmpInfoRequestParams extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteLabelIndustryRequestParams extends $tea.Model {
  label?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteLabelInventoryRequestParams extends $tea.Model {
  label?: { [key: string]: any };
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      period: 'period',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      period: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteLabelProfSkillRequestParams extends $tea.Model {
  label?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletePerfEvalRequestParams extends $tea.Model {
  perfPlanName?: string;
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      perfPlanName: 'perfPlanName',
      period: 'period',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perfPlanName: 'string',
      period: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletePromRecordsRequestParams extends $tea.Model {
  awardDate?: string;
  awardName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      awardDate: 'awardDate',
      awardName: 'awardName',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      awardDate: 'string',
      awardName: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletePunDetailRequestParams extends $tea.Model {
  effectiveDate?: string;
  punName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveDate: 'effectiveDate',
      punName: 'punName',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveDate: 'string',
      punName: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteRegistRequestParams extends $tea.Model {
  registDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      registDate: 'registDate',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registDate: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteRegularRequestParams extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  regularDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      regularDate: 'regularDate',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regularDate: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteTrainingRequestParams extends $tea.Model {
  trainEndDate?: string;
  trainName?: string;
  trainStartDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      trainEndDate: 'trainEndDate',
      trainName: 'trainName',
      trainStartDate: 'trainStartDate',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trainEndDate: 'string',
      trainName: 'string',
      trainStartDate: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteTransferEvalRequestParams extends $tea.Model {
  transferDate?: string;
  transferType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      transferDate: 'transferDate',
      transferType: 'transferType',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferDate: 'string',
      transferType: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeleteWorkExpRequestParams extends $tea.Model {
  companyName?: string;
  endDate?: string;
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      companyName: 'companyName',
      endDate: 'endDate',
      startDate: 'startDate',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      endDate: 'string',
      startDate: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainDeletetLabelBaseRequestParams extends $tea.Model {
  label?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainEmpPoolQueryResponseBodyContentPoolInfosPoolTags extends $tea.Model {
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainEmpPoolQueryResponseBodyContentPoolInfos extends $tea.Model {
  poolCode?: string;
  poolDesc?: string;
  poolName?: string;
  poolTags?: HrbrainEmpPoolQueryResponseBodyContentPoolInfosPoolTags[];
  static names(): { [key: string]: string } {
    return {
      poolCode: 'poolCode',
      poolDesc: 'poolDesc',
      poolName: 'poolName',
      poolTags: 'poolTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCode: 'string',
      poolDesc: 'string',
      poolName: 'string',
      poolTags: { 'type': 'array', 'itemType': HrbrainEmpPoolQueryResponseBodyContentPoolInfosPoolTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainEmpPoolQueryResponseBodyContent extends $tea.Model {
  maxResults?: number;
  nextToken?: number;
  poolInfos?: HrbrainEmpPoolQueryResponseBodyContentPoolInfos[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      poolInfos: 'poolInfos',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'number',
      poolInfos: { 'type': 'array', 'itemType': HrbrainEmpPoolQueryResponseBodyContentPoolInfos },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainEmpPoolUserResponseBodyContentEmpVos extends $tea.Model {
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

export class HrbrainEmpPoolUserResponseBodyContent extends $tea.Model {
  empVos?: HrbrainEmpPoolUserResponseBodyContentEmpVos[];
  maxResults?: number;
  nextToken?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      empVos: 'empVos',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      empVos: { 'type': 'array', 'itemType': HrbrainEmpPoolUserResponseBodyContentEmpVos },
      maxResults: 'number',
      nextToken: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportAwardDetailRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  awardDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  awardName?: string;
  awardOrg?: string;
  awardType?: string;
  comment?: string;
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      awardDate: 'awardDate',
      awardName: 'awardName',
      awardOrg: 'awardOrg',
      awardType: 'awardType',
      comment: 'comment',
      extendInfo: 'extendInfo',
      name: 'name',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      awardDate: 'string',
      awardName: 'string',
      awardOrg: 'string',
      awardType: 'string',
      comment: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportDeptInfoRequestBody extends $tea.Model {
  createDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deptName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deptNo?: string;
  effectiveDate?: string;
  extendInfo?: { [key: string]: any };
  isEffective?: string;
  superDeptName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  superDeptNo?: string;
  superEmpId?: string;
  superName?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'createDate',
      deptName: 'deptName',
      deptNo: 'deptNo',
      effectiveDate: 'effectiveDate',
      extendInfo: 'extendInfo',
      isEffective: 'isEffective',
      superDeptName: 'superDeptName',
      superDeptNo: 'superDeptNo',
      superEmpId: 'superEmpId',
      superName: 'superName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      deptName: 'string',
      deptNo: 'string',
      effectiveDate: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      isEffective: 'string',
      superDeptName: 'string',
      superDeptNo: 'string',
      superEmpId: 'string',
      superName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportDimissionRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deptName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deptNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dimissionDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dimissionReaasonDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dimissionReason?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  empType?: string;
  extendInfo?: { [key: string]: any };
  jobCodeName?: string;
  jobLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  postName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  superName?: string;
  workLocAddr?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'deptName',
      deptNo: 'deptNo',
      dimissionDate: 'dimissionDate',
      dimissionReaasonDesc: 'dimissionReaasonDesc',
      dimissionReason: 'dimissionReason',
      empType: 'empType',
      extendInfo: 'extendInfo',
      jobCodeName: 'jobCodeName',
      jobLevel: 'jobLevel',
      name: 'name',
      postName: 'postName',
      superName: 'superName',
      workLocAddr: 'workLocAddr',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      deptNo: 'string',
      dimissionDate: 'string',
      dimissionReaasonDesc: 'string',
      dimissionReason: 'string',
      empType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobCodeName: 'string',
      jobLevel: 'string',
      name: 'string',
      postName: 'string',
      superName: 'string',
      workLocAddr: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportEduExpRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  eduName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  extendInfo?: { [key: string]: any };
  major?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  schoolName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      eduName: 'eduName',
      endDate: 'endDate',
      extendInfo: 'extendInfo',
      major: 'major',
      name: 'name',
      schoolName: 'schoolName',
      startDate: 'startDate',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eduName: 'string',
      endDate: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      major: 'string',
      name: 'string',
      schoolName: 'string',
      startDate: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportEmpInfoRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  birthday?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deptName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deptNo?: string;
  dimissionDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  empSource?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  empStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  empType?: string;
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  gender?: string;
  highestDegree?: string;
  highestEduName?: string;
  isDimission?: string;
  jobCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  jobCodeName?: string;
  jobFamily?: string;
  jobLevel?: string;
  lastSchoolName?: string;
  marriage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nation?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nationCtry?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  politicalStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  postName?: string;
  registDate?: string;
  regularDate?: string;
  superEmpId?: string;
  superName?: string;
  workEmail?: string;
  workLocAddr?: string;
  workLocCity?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      deptName: 'deptName',
      deptNo: 'deptNo',
      dimissionDate: 'dimissionDate',
      empSource: 'empSource',
      empStatus: 'empStatus',
      empType: 'empType',
      extendInfo: 'extendInfo',
      gender: 'gender',
      highestDegree: 'highestDegree',
      highestEduName: 'highestEduName',
      isDimission: 'isDimission',
      jobCategory: 'jobCategory',
      jobCodeName: 'jobCodeName',
      jobFamily: 'jobFamily',
      jobLevel: 'jobLevel',
      lastSchoolName: 'lastSchoolName',
      marriage: 'marriage',
      name: 'name',
      nation: 'nation',
      nationCtry: 'nationCtry',
      politicalStatus: 'politicalStatus',
      postName: 'postName',
      registDate: 'registDate',
      regularDate: 'regularDate',
      superEmpId: 'superEmpId',
      superName: 'superName',
      workEmail: 'workEmail',
      workLocAddr: 'workLocAddr',
      workLocCity: 'workLocCity',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      deptName: 'string',
      deptNo: 'string',
      dimissionDate: 'string',
      empSource: 'string',
      empStatus: 'string',
      empType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gender: 'string',
      highestDegree: 'string',
      highestEduName: 'string',
      isDimission: 'string',
      jobCategory: 'string',
      jobCodeName: 'string',
      jobFamily: 'string',
      jobLevel: 'string',
      lastSchoolName: 'string',
      marriage: 'string',
      name: 'string',
      nation: 'string',
      nationCtry: 'string',
      politicalStatus: 'string',
      postName: 'string',
      registDate: 'string',
      regularDate: 'string',
      superEmpId: 'string',
      superName: 'string',
      workEmail: 'string',
      workLocAddr: 'string',
      workLocCity: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelBaseRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'extendInfo',
      name: 'name',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelCustomRequestBody extends $tea.Model {
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'extendInfo',
      name: 'name',
      tag: 'tag',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      tag: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelIndustryRequestBody extends $tea.Model {
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  level1?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  level2?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  level3?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'extendInfo',
      level1: 'level1',
      level2: 'level2',
      level3: 'level3',
      name: 'name',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level1: 'string',
      level2: 'string',
      level3: 'string',
      name: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelInventoryRequestBody extends $tea.Model {
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'extendInfo',
      name: 'name',
      period: 'period',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      period: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportLabelProfSkillRequestBody extends $tea.Model {
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  level1?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  level2?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  level3?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'extendInfo',
      level1: 'level1',
      level2: 'level2',
      level3: 'level3',
      name: 'name',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level1: 'string',
      level2: 'string',
      level3: 'string',
      name: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportPerfEvalRequestBody extends $tea.Model {
  comment?: string;
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  perfCate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  perfPlanName?: string;
  perfScore?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  periodEndDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  periodStartDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  score?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      extendInfo: 'extendInfo',
      name: 'name',
      perfCate: 'perfCate',
      perfPlanName: 'perfPlanName',
      perfScore: 'perfScore',
      period: 'period',
      periodEndDate: 'periodEndDate',
      periodStartDate: 'periodStartDate',
      score: 'score',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      perfCate: 'string',
      perfPlanName: 'string',
      perfScore: 'string',
      period: 'string',
      periodEndDate: 'string',
      periodStartDate: 'string',
      score: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportPromEvalRequestBody extends $tea.Model {
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  effectiveDate?: string;
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  newJobLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  period?: string;
  periodEndDate?: string;
  periodStartDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  preJobLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      effectiveDate: 'effectiveDate',
      extendInfo: 'extendInfo',
      name: 'name',
      newJobLevel: 'newJobLevel',
      period: 'period',
      periodEndDate: 'periodEndDate',
      periodStartDate: 'periodStartDate',
      preJobLevel: 'preJobLevel',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      effectiveDate: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      newJobLevel: 'string',
      period: 'string',
      periodEndDate: 'string',
      periodStartDate: 'string',
      preJobLevel: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportPunDetailRequestBody extends $tea.Model {
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  effectiveDate?: string;
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  punName?: string;
  punOrg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      effectiveDate: 'effectiveDate',
      extendInfo: 'extendInfo',
      name: 'name',
      punName: 'punName',
      punOrg: 'punOrg',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      effectiveDate: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      punName: 'string',
      punOrg: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportRegistRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deptName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deptNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  empSource?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  empType?: string;
  extendInfo?: { [key: string]: any };
  jobCodeName?: string;
  jobLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  postName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  registDate?: string;
  superName?: string;
  workLocAddr?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'deptName',
      deptNo: 'deptNo',
      empSource: 'empSource',
      empType: 'empType',
      extendInfo: 'extendInfo',
      jobCodeName: 'jobCodeName',
      jobLevel: 'jobLevel',
      name: 'name',
      postName: 'postName',
      registDate: 'registDate',
      superName: 'superName',
      workLocAddr: 'workLocAddr',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      deptNo: 'string',
      empSource: 'string',
      empType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobCodeName: 'string',
      jobLevel: 'string',
      name: 'string',
      postName: 'string',
      registDate: 'string',
      superName: 'string',
      workLocAddr: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportRegularRequestBody extends $tea.Model {
  deptName?: string;
  deptNo?: string;
  extendInfo?: { [key: string]: any };
  jobCodeName?: string;
  jobLevel?: string;
  name?: string;
  planRegularDate?: string;
  postName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regularDate?: string;
  superEmpId?: string;
  superName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'deptName',
      deptNo: 'deptNo',
      extendInfo: 'extendInfo',
      jobCodeName: 'jobCodeName',
      jobLevel: 'jobLevel',
      name: 'name',
      planRegularDate: 'planRegularDate',
      postName: 'postName',
      regularDate: 'regularDate',
      superEmpId: 'superEmpId',
      superName: 'superName',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      deptNo: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobCodeName: 'string',
      jobLevel: 'string',
      name: 'string',
      planRegularDate: 'string',
      postName: 'string',
      regularDate: 'string',
      superEmpId: 'string',
      superName: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportTrainingRequestBody extends $tea.Model {
  certifCnt?: string;
  creditScore?: string;
  deptName?: string;
  deptNo?: string;
  extendInfo?: { [key: string]: any };
  jobCodeName?: string;
  jobLevel?: string;
  name?: string;
  postName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  trainEndDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  trainName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  trainStartDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      certifCnt: 'certifCnt',
      creditScore: 'creditScore',
      deptName: 'deptName',
      deptNo: 'deptNo',
      extendInfo: 'extendInfo',
      jobCodeName: 'jobCodeName',
      jobLevel: 'jobLevel',
      name: 'name',
      postName: 'postName',
      trainEndDate: 'trainEndDate',
      trainName: 'trainName',
      trainStartDate: 'trainStartDate',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifCnt: 'string',
      creditScore: 'string',
      deptName: 'string',
      deptNo: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobCodeName: 'string',
      jobLevel: 'string',
      name: 'string',
      postName: 'string',
      trainEndDate: 'string',
      trainName: 'string',
      trainStartDate: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportTransferEvalRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  currInfo?: { [key: string]: any };
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  preInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  transferDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  transferReason?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  transferType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      currInfo: 'currInfo',
      extendInfo: 'extendInfo',
      name: 'name',
      preInfo: 'preInfo',
      transferDate: 'transferDate',
      transferReason: 'transferReason',
      transferType: 'transferType',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      preInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      transferDate: 'string',
      transferReason: 'string',
      transferType: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainImportWorkExpRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  companyName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  extendInfo?: { [key: string]: any };
  jobDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  postName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      companyName: 'companyName',
      endDate: 'endDate',
      extendInfo: 'extendInfo',
      jobDesc: 'jobDesc',
      name: 'name',
      postName: 'postName',
      startDate: 'startDate',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      endDate: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobDesc: 'string',
      name: 'string',
      postName: 'string',
      startDate: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelCategoryTreeResponseBodyContent extends $tea.Model {
  children?: { [key: string]: any }[];
  code?: string;
  currentLabelNum?: number;
  name?: string;
  pcode?: string;
  sortSize?: number;
  totalLabelNum?: number;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      code: 'code',
      currentLabelNum: 'currentLabelNum',
      name: 'name',
      pcode: 'pcode',
      sortSize: 'sortSize',
      totalLabelNum: 'totalLabelNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      code: 'string',
      currentLabelNum: 'number',
      name: 'string',
      pcode: 'string',
      sortSize: 'number',
      totalLabelNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelCategoryUpdateRequestCategoryVoCategories extends $tea.Model {
  children?: any[];
  code?: string;
  name?: string;
  pCode?: string;
  sortSize?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      code: 'code',
      name: 'name',
      pCode: 'pCode',
      sortSize: 'sortSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      code: 'string',
      name: 'string',
      pCode: 'string',
      sortSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelCategoryUpdateRequestCategoryVo extends $tea.Model {
  categories?: HrbrainLabelCategoryUpdateRequestCategoryVoCategories[];
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': HrbrainLabelCategoryUpdateRequestCategoryVoCategories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataDeleteRequestParams extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  labelCodes?: string[];
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      labelCodes: 'labelCodes',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelCodes: { 'type': 'array', 'itemType': 'string' },
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataQueryResponseBodyContentLabelDatas extends $tea.Model {
  deptName?: string;
  deptNo?: string;
  jobLevel?: string;
  labelTitle?: string;
  labelValue?: string;
  name?: string;
  postName?: string;
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'deptName',
      deptNo: 'deptNo',
      jobLevel: 'jobLevel',
      labelTitle: 'labelTitle',
      labelValue: 'labelValue',
      name: 'name',
      postName: 'postName',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      deptNo: 'string',
      jobLevel: 'string',
      labelTitle: 'string',
      labelValue: 'string',
      name: 'string',
      postName: 'string',
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataQueryResponseBodyContent extends $tea.Model {
  labelDatas?: HrbrainLabelDataQueryResponseBodyContentLabelDatas[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      labelDatas: 'labelDatas',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelDatas: { 'type': 'array', 'itemType': HrbrainLabelDataQueryResponseBodyContentLabelDatas },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataUpsertRequestParamsLabelDatas extends $tea.Model {
  labelCode?: string;
  labelValue?: string[];
  static names(): { [key: string]: string } {
    return {
      labelCode: 'labelCode',
      labelValue: 'labelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelCode: 'string',
      labelValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelDataUpsertRequestParams extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  labelDatas?: HrbrainLabelDataUpsertRequestParamsLabelDatas[];
  /**
   * @remarks
   * This parameter is required.
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      labelDatas: 'labelDatas',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelDatas: { 'type': 'array', 'itemType': HrbrainLabelDataUpsertRequestParamsLabelDatas },
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelMetaResponseBodyContentLabelMetas extends $tea.Model {
  categoryCode?: string;
  categoryName?: string;
  code?: string;
  dataType?: string;
  description?: string;
  extendInfo?: { [key: string]: any };
  gmtCreated?: number;
  gmtModified?: number;
  importantLevel?: string;
  isSensitive?: boolean;
  name?: string;
  options?: { [key: string]: any }[];
  required?: boolean;
  useStatus?: string;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'categoryCode',
      categoryName: 'categoryName',
      code: 'code',
      dataType: 'dataType',
      description: 'description',
      extendInfo: 'extendInfo',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      importantLevel: 'importantLevel',
      isSensitive: 'isSensitive',
      name: 'name',
      options: 'options',
      required: 'required',
      useStatus: 'useStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      categoryName: 'string',
      code: 'string',
      dataType: 'string',
      description: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreated: 'number',
      gmtModified: 'number',
      importantLevel: 'string',
      isSensitive: 'boolean',
      name: 'string',
      options: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      required: 'boolean',
      useStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelMetaResponseBodyContent extends $tea.Model {
  labelMetas?: HrbrainLabelMetaResponseBodyContentLabelMetas[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      labelMetas: 'labelMetas',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMetas: { 'type': 'array', 'itemType': HrbrainLabelMetaResponseBodyContentLabelMetas },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelTaskDataResponseBodyContentTags extends $tea.Model {
  code?: string;
  description?: string;
  name?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      name: 'name',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelTaskDataResponseBodyContent extends $tea.Model {
  deptName?: string;
  deptNo?: string;
  name?: string;
  tags?: HrbrainLabelTaskDataResponseBodyContentTags[];
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'deptName',
      deptNo: 'deptNo',
      name: 'name',
      tags: 'tags',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      deptNo: 'string',
      name: 'string',
      tags: { 'type': 'array', 'itemType': HrbrainLabelTaskDataResponseBodyContentTags },
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainLabelTaskMetaResponseBodyContent extends $tea.Model {
  code?: string;
  description?: string;
  isSystem?: string;
  name?: string;
  tagConfig?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      isSystem: 'isSystem',
      name: 'name',
      tagConfig: 'tagConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      isSystem: 'string',
      name: 'string',
      tagConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentProfileAttachmentQueryResponseBodyContentStaffAttachmentInfoListAttachmentInfoList extends $tea.Model {
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentProfileAttachmentQueryResponseBodyContentStaffAttachmentInfoList extends $tea.Model {
  attachmentInfoList?: HrbrainTalentProfileAttachmentQueryResponseBodyContentStaffAttachmentInfoListAttachmentInfoList[];
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentInfoList: 'attachmentInfoList',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentInfoList: { 'type': 'array', 'itemType': HrbrainTalentProfileAttachmentQueryResponseBodyContentStaffAttachmentInfoListAttachmentInfoList },
      workNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentProfileAttachmentQueryResponseBodyContent extends $tea.Model {
  staffAttachmentInfoList?: HrbrainTalentProfileAttachmentQueryResponseBodyContentStaffAttachmentInfoList[];
  static names(): { [key: string]: string } {
    return {
      staffAttachmentInfoList: 'staffAttachmentInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      staffAttachmentInfoList: { 'type': 'array', 'itemType': HrbrainTalentProfileAttachmentQueryResponseBodyContentStaffAttachmentInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentProfileBasicQueryResponseBodyContentProfileBaseInfoList extends $tea.Model {
  age?: string;
  birthday?: string;
  deptName?: string;
  deptNo?: string;
  gender?: string;
  jobLevel?: string;
  jobcode?: string;
  name?: string;
  position?: string;
  seniorityYears?: string;
  superName?: string;
  superWorkNo?: string;
  workNo?: string;
  workPlace?: string;
  static names(): { [key: string]: string } {
    return {
      age: 'age',
      birthday: 'birthday',
      deptName: 'deptName',
      deptNo: 'deptNo',
      gender: 'gender',
      jobLevel: 'jobLevel',
      jobcode: 'jobcode',
      name: 'name',
      position: 'position',
      seniorityYears: 'seniorityYears',
      superName: 'superName',
      superWorkNo: 'superWorkNo',
      workNo: 'workNo',
      workPlace: 'workPlace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'string',
      birthday: 'string',
      deptName: 'string',
      deptNo: 'string',
      gender: 'string',
      jobLevel: 'string',
      jobcode: 'string',
      name: 'string',
      position: 'string',
      seniorityYears: 'string',
      superName: 'string',
      superWorkNo: 'string',
      workNo: 'string',
      workPlace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HrbrainTalentProfileBasicQueryResponseBodyContent extends $tea.Model {
  profileBaseInfoList?: HrbrainTalentProfileBasicQueryResponseBodyContentProfileBaseInfoList[];
  static names(): { [key: string]: string } {
    return {
      profileBaseInfoList: 'profileBaseInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profileBaseInfoList: { 'type': 'array', 'itemType': HrbrainTalentProfileBasicQueryResponseBodyContentProfileBaseInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StaffLabelRecordsQueryRequestBodyLabels extends $tea.Model {
  /**
   * @example
   * long_termism_score
   */
  code?: string;
  /**
   * @example
   * values
   */
  typeCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      typeCode: 'typeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      typeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StaffLabelRecordsQueryRequestBody extends $tea.Model {
  labels?: StaffLabelRecordsQueryRequestBodyLabels[];
  /**
   * @example
   * 0140180438261064274667
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': StaffLabelRecordsQueryRequestBodyLabels },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StaffLabelRecordsQueryResponseBodyContentDataLabelsOptions extends $tea.Model {
  label?: string;
  tip?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      tip: 'tip',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      tip: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StaffLabelRecordsQueryResponseBodyContentDataLabels extends $tea.Model {
  /**
   * @example
   * long_termism_score
   */
  code?: string;
  /**
   * @example
   * values.long_termism_score
   */
  guid?: string;
  /**
   * @example
   * 持续业绩
   */
  name?: string;
  options?: StaffLabelRecordsQueryResponseBodyContentDataLabelsOptions[];
  /**
   * @example
   * values
   */
  typeCode?: string;
  /**
   * @example
   * 价值
   */
  typeName?: string;
  /**
   * @example
   * 5（总是）
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      guid: 'guid',
      name: 'name',
      options: 'options',
      typeCode: 'typeCode',
      typeName: 'typeName',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      guid: 'string',
      name: 'string',
      options: { 'type': 'array', 'itemType': StaffLabelRecordsQueryResponseBodyContentDataLabelsOptions },
      typeCode: 'string',
      typeName: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StaffLabelRecordsQueryResponseBodyContentData extends $tea.Model {
  labels?: StaffLabelRecordsQueryResponseBodyContentDataLabels[];
  /**
   * @example
   * 0140180438261064274667
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': StaffLabelRecordsQueryResponseBodyContentDataLabels },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StaffLabelRecordsQueryResponseBodyContent extends $tea.Model {
  data?: StaffLabelRecordsQueryResponseBodyContentData[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  nextToken?: string;
  /**
   * @example
   * 100
   */
  totalCountt?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      totalCountt: 'totalCountt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': StaffLabelRecordsQueryResponseBodyContentData },
      maxResults: 'number',
      nextToken: 'string',
      totalCountt: 'number',
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
   * 业务数据开放
   * 
   * @param request - HrbrainBizDataQueryRequest
   * @param headers - HrbrainBizDataQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainBizDataQueryResponse
   */
  async hrbrainBizDataQueryWithOptions(request: HrbrainBizDataQueryRequest, headers: HrbrainBizDataQueryHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainBizDataQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizCode)) {
      query["bizCode"] = request.bizCode;
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
      action: "HrbrainBizDataQuery",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/bizData/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainBizDataQueryResponse>(await this.execute(params, req, runtime), new HrbrainBizDataQueryResponse({}));
  }

  /**
   * 业务数据开放
   * 
   * @param request - HrbrainBizDataQueryRequest
   * @returns HrbrainBizDataQueryResponse
   */
  async hrbrainBizDataQuery(request: HrbrainBizDataQueryRequest): Promise<HrbrainBizDataQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainBizDataQueryHeaders({ });
    return await this.hrbrainBizDataQueryWithOptions(request, headers, runtime);
  }

  /**
   * 删除奖励记录
   * 
   * @param request - HrbrainDeleteAwardRecordsRequest
   * @param headers - HrbrainDeleteAwardRecordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteAwardRecordsResponse
   */
  async hrbrainDeleteAwardRecordsWithOptions(request: HrbrainDeleteAwardRecordsRequest, headers: HrbrainDeleteAwardRecordsHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteAwardRecordsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteAwardRecords",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/awardRecords/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteAwardRecordsResponse>(await this.execute(params, req, runtime), new HrbrainDeleteAwardRecordsResponse({}));
  }

  /**
   * 删除奖励记录
   * 
   * @param request - HrbrainDeleteAwardRecordsRequest
   * @returns HrbrainDeleteAwardRecordsResponse
   */
  async hrbrainDeleteAwardRecords(request: HrbrainDeleteAwardRecordsRequest): Promise<HrbrainDeleteAwardRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteAwardRecordsHeaders({ });
    return await this.hrbrainDeleteAwardRecordsWithOptions(request, headers, runtime);
  }

  /**
   * 删除自定义模型记录
   * 
   * @param request - HrbrainDeleteCustomRequest
   * @param headers - HrbrainDeleteCustomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteCustomResponse
   */
  async hrbrainDeleteCustomWithOptions(request: HrbrainDeleteCustomRequest, headers: HrbrainDeleteCustomHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteCustomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelCode)) {
      body["modelCode"] = request.modelCode;
    }

    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteCustom",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/customModels/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteCustomResponse>(await this.execute(params, req, runtime), new HrbrainDeleteCustomResponse({}));
  }

  /**
   * 删除自定义模型记录
   * 
   * @param request - HrbrainDeleteCustomRequest
   * @returns HrbrainDeleteCustomResponse
   */
  async hrbrainDeleteCustom(request: HrbrainDeleteCustomRequest): Promise<HrbrainDeleteCustomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteCustomHeaders({ });
    return await this.hrbrainDeleteCustomWithOptions(request, headers, runtime);
  }

  /**
   * 删除组织架构
   * 
   * @param request - HrbrainDeleteDeptInfoRequest
   * @param headers - HrbrainDeleteDeptInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteDeptInfoResponse
   */
  async hrbrainDeleteDeptInfoWithOptions(request: HrbrainDeleteDeptInfoRequest, headers: HrbrainDeleteDeptInfoHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteDeptInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteDeptInfo",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/deptInfos/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteDeptInfoResponse>(await this.execute(params, req, runtime), new HrbrainDeleteDeptInfoResponse({}));
  }

  /**
   * 删除组织架构
   * 
   * @param request - HrbrainDeleteDeptInfoRequest
   * @returns HrbrainDeleteDeptInfoResponse
   */
  async hrbrainDeleteDeptInfo(request: HrbrainDeleteDeptInfoRequest): Promise<HrbrainDeleteDeptInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteDeptInfoHeaders({ });
    return await this.hrbrainDeleteDeptInfoWithOptions(request, headers, runtime);
  }

  /**
   * 删除离职记录
   * 
   * @param request - HrbrainDeleteDimissionRequest
   * @param headers - HrbrainDeleteDimissionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteDimissionResponse
   */
  async hrbrainDeleteDimissionWithOptions(request: HrbrainDeleteDimissionRequest, headers: HrbrainDeleteDimissionHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteDimissionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteDimission",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/dimissionInfos/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteDimissionResponse>(await this.execute(params, req, runtime), new HrbrainDeleteDimissionResponse({}));
  }

  /**
   * 删除离职记录
   * 
   * @param request - HrbrainDeleteDimissionRequest
   * @returns HrbrainDeleteDimissionResponse
   */
  async hrbrainDeleteDimission(request: HrbrainDeleteDimissionRequest): Promise<HrbrainDeleteDimissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteDimissionHeaders({ });
    return await this.hrbrainDeleteDimissionWithOptions(request, headers, runtime);
  }

  /**
   * 删除教育经历
   * 
   * @param request - HrbrainDeleteEduExpRequest
   * @param headers - HrbrainDeleteEduExpHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteEduExpResponse
   */
  async hrbrainDeleteEduExpWithOptions(request: HrbrainDeleteEduExpRequest, headers: HrbrainDeleteEduExpHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteEduExpResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteEduExp",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/eduExperiences/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteEduExpResponse>(await this.execute(params, req, runtime), new HrbrainDeleteEduExpResponse({}));
  }

  /**
   * 删除教育经历
   * 
   * @param request - HrbrainDeleteEduExpRequest
   * @returns HrbrainDeleteEduExpResponse
   */
  async hrbrainDeleteEduExp(request: HrbrainDeleteEduExpRequest): Promise<HrbrainDeleteEduExpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteEduExpHeaders({ });
    return await this.hrbrainDeleteEduExpWithOptions(request, headers, runtime);
  }

  /**
   * 删除人员信息
   * 
   * @param request - HrbrainDeleteEmpInfoRequest
   * @param headers - HrbrainDeleteEmpInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteEmpInfoResponse
   */
  async hrbrainDeleteEmpInfoWithOptions(request: HrbrainDeleteEmpInfoRequest, headers: HrbrainDeleteEmpInfoHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteEmpInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteEmpInfo",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/empInfos/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteEmpInfoResponse>(await this.execute(params, req, runtime), new HrbrainDeleteEmpInfoResponse({}));
  }

  /**
   * 删除人员信息
   * 
   * @param request - HrbrainDeleteEmpInfoRequest
   * @returns HrbrainDeleteEmpInfoResponse
   */
  async hrbrainDeleteEmpInfo(request: HrbrainDeleteEmpInfoRequest): Promise<HrbrainDeleteEmpInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteEmpInfoHeaders({ });
    return await this.hrbrainDeleteEmpInfoWithOptions(request, headers, runtime);
  }

  /**
   * 删除领域经验
   * 
   * @param request - HrbrainDeleteLabelIndustryRequest
   * @param headers - HrbrainDeleteLabelIndustryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteLabelIndustryResponse
   */
  async hrbrainDeleteLabelIndustryWithOptions(request: HrbrainDeleteLabelIndustryRequest, headers: HrbrainDeleteLabelIndustryHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteLabelIndustryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteLabelIndustry",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/industries/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteLabelIndustryResponse>(await this.execute(params, req, runtime), new HrbrainDeleteLabelIndustryResponse({}));
  }

  /**
   * 删除领域经验
   * 
   * @param request - HrbrainDeleteLabelIndustryRequest
   * @returns HrbrainDeleteLabelIndustryResponse
   */
  async hrbrainDeleteLabelIndustry(request: HrbrainDeleteLabelIndustryRequest): Promise<HrbrainDeleteLabelIndustryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteLabelIndustryHeaders({ });
    return await this.hrbrainDeleteLabelIndustryWithOptions(request, headers, runtime);
  }

  /**
   * 删除盘点数据
   * 
   * @param request - HrbrainDeleteLabelInventoryRequest
   * @param headers - HrbrainDeleteLabelInventoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteLabelInventoryResponse
   */
  async hrbrainDeleteLabelInventoryWithOptions(request: HrbrainDeleteLabelInventoryRequest, headers: HrbrainDeleteLabelInventoryHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteLabelInventoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteLabelInventory",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/inventories/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteLabelInventoryResponse>(await this.execute(params, req, runtime), new HrbrainDeleteLabelInventoryResponse({}));
  }

  /**
   * 删除盘点数据
   * 
   * @param request - HrbrainDeleteLabelInventoryRequest
   * @returns HrbrainDeleteLabelInventoryResponse
   */
  async hrbrainDeleteLabelInventory(request: HrbrainDeleteLabelInventoryRequest): Promise<HrbrainDeleteLabelInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteLabelInventoryHeaders({ });
    return await this.hrbrainDeleteLabelInventoryWithOptions(request, headers, runtime);
  }

  /**
   * 删除专业技能
   * 
   * @param request - HrbrainDeleteLabelProfSkillRequest
   * @param headers - HrbrainDeleteLabelProfSkillHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteLabelProfSkillResponse
   */
  async hrbrainDeleteLabelProfSkillWithOptions(request: HrbrainDeleteLabelProfSkillRequest, headers: HrbrainDeleteLabelProfSkillHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteLabelProfSkillResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteLabelProfSkill",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/profSkills/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteLabelProfSkillResponse>(await this.execute(params, req, runtime), new HrbrainDeleteLabelProfSkillResponse({}));
  }

  /**
   * 删除专业技能
   * 
   * @param request - HrbrainDeleteLabelProfSkillRequest
   * @returns HrbrainDeleteLabelProfSkillResponse
   */
  async hrbrainDeleteLabelProfSkill(request: HrbrainDeleteLabelProfSkillRequest): Promise<HrbrainDeleteLabelProfSkillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteLabelProfSkillHeaders({ });
    return await this.hrbrainDeleteLabelProfSkillWithOptions(request, headers, runtime);
  }

  /**
   * 删除绩效记录
   * 
   * @param request - HrbrainDeletePerfEvalRequest
   * @param headers - HrbrainDeletePerfEvalHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeletePerfEvalResponse
   */
  async hrbrainDeletePerfEvalWithOptions(request: HrbrainDeletePerfEvalRequest, headers: HrbrainDeletePerfEvalHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeletePerfEvalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeletePerfEval",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/perfRecords/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeletePerfEvalResponse>(await this.execute(params, req, runtime), new HrbrainDeletePerfEvalResponse({}));
  }

  /**
   * 删除绩效记录
   * 
   * @param request - HrbrainDeletePerfEvalRequest
   * @returns HrbrainDeletePerfEvalResponse
   */
  async hrbrainDeletePerfEval(request: HrbrainDeletePerfEvalRequest): Promise<HrbrainDeletePerfEvalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeletePerfEvalHeaders({ });
    return await this.hrbrainDeletePerfEvalWithOptions(request, headers, runtime);
  }

  /**
   * 数据集成晋升记录删除
   * 
   * @param request - HrbrainDeletePromRecordsRequest
   * @param headers - HrbrainDeletePromRecordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeletePromRecordsResponse
   */
  async hrbrainDeletePromRecordsWithOptions(request: HrbrainDeletePromRecordsRequest, headers: HrbrainDeletePromRecordsHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeletePromRecordsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeletePromRecords",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/promEvals/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeletePromRecordsResponse>(await this.execute(params, req, runtime), new HrbrainDeletePromRecordsResponse({}));
  }

  /**
   * 数据集成晋升记录删除
   * 
   * @param request - HrbrainDeletePromRecordsRequest
   * @returns HrbrainDeletePromRecordsResponse
   */
  async hrbrainDeletePromRecords(request: HrbrainDeletePromRecordsRequest): Promise<HrbrainDeletePromRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeletePromRecordsHeaders({ });
    return await this.hrbrainDeletePromRecordsWithOptions(request, headers, runtime);
  }

  /**
   * 删除处分记录
   * 
   * @param request - HrbrainDeletePunDetailRequest
   * @param headers - HrbrainDeletePunDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeletePunDetailResponse
   */
  async hrbrainDeletePunDetailWithOptions(request: HrbrainDeletePunDetailRequest, headers: HrbrainDeletePunDetailHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeletePunDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeletePunDetail",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/punDetails/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeletePunDetailResponse>(await this.execute(params, req, runtime), new HrbrainDeletePunDetailResponse({}));
  }

  /**
   * 删除处分记录
   * 
   * @param request - HrbrainDeletePunDetailRequest
   * @returns HrbrainDeletePunDetailResponse
   */
  async hrbrainDeletePunDetail(request: HrbrainDeletePunDetailRequest): Promise<HrbrainDeletePunDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeletePunDetailHeaders({ });
    return await this.hrbrainDeletePunDetailWithOptions(request, headers, runtime);
  }

  /**
   * 删除入职记录
   * 
   * @param request - HrbrainDeleteRegistRequest
   * @param headers - HrbrainDeleteRegistHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteRegistResponse
   */
  async hrbrainDeleteRegistWithOptions(request: HrbrainDeleteRegistRequest, headers: HrbrainDeleteRegistHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteRegistResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteRegist",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/registerInfos/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteRegistResponse>(await this.execute(params, req, runtime), new HrbrainDeleteRegistResponse({}));
  }

  /**
   * 删除入职记录
   * 
   * @param request - HrbrainDeleteRegistRequest
   * @returns HrbrainDeleteRegistResponse
   */
  async hrbrainDeleteRegist(request: HrbrainDeleteRegistRequest): Promise<HrbrainDeleteRegistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteRegistHeaders({ });
    return await this.hrbrainDeleteRegistWithOptions(request, headers, runtime);
  }

  /**
   * 删除转正记录
   * 
   * @param request - HrbrainDeleteRegularRequest
   * @param headers - HrbrainDeleteRegularHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteRegularResponse
   */
  async hrbrainDeleteRegularWithOptions(request: HrbrainDeleteRegularRequest, headers: HrbrainDeleteRegularHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteRegularResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteRegular",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/regulars/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteRegularResponse>(await this.execute(params, req, runtime), new HrbrainDeleteRegularResponse({}));
  }

  /**
   * 删除转正记录
   * 
   * @param request - HrbrainDeleteRegularRequest
   * @returns HrbrainDeleteRegularResponse
   */
  async hrbrainDeleteRegular(request: HrbrainDeleteRegularRequest): Promise<HrbrainDeleteRegularResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteRegularHeaders({ });
    return await this.hrbrainDeleteRegularWithOptions(request, headers, runtime);
  }

  /**
   * 删除培训学习记录
   * 
   * @param request - HrbrainDeleteTrainingRequest
   * @param headers - HrbrainDeleteTrainingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteTrainingResponse
   */
  async hrbrainDeleteTrainingWithOptions(request: HrbrainDeleteTrainingRequest, headers: HrbrainDeleteTrainingHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteTrainingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteTraining",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/trainings/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteTrainingResponse>(await this.execute(params, req, runtime), new HrbrainDeleteTrainingResponse({}));
  }

  /**
   * 删除培训学习记录
   * 
   * @param request - HrbrainDeleteTrainingRequest
   * @returns HrbrainDeleteTrainingResponse
   */
  async hrbrainDeleteTraining(request: HrbrainDeleteTrainingRequest): Promise<HrbrainDeleteTrainingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteTrainingHeaders({ });
    return await this.hrbrainDeleteTrainingWithOptions(request, headers, runtime);
  }

  /**
   * 删除调岗记录
   * 
   * @param request - HrbrainDeleteTransferEvalRequest
   * @param headers - HrbrainDeleteTransferEvalHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteTransferEvalResponse
   */
  async hrbrainDeleteTransferEvalWithOptions(request: HrbrainDeleteTransferEvalRequest, headers: HrbrainDeleteTransferEvalHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteTransferEvalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteTransferEval",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/changeRecords/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteTransferEvalResponse>(await this.execute(params, req, runtime), new HrbrainDeleteTransferEvalResponse({}));
  }

  /**
   * 删除调岗记录
   * 
   * @param request - HrbrainDeleteTransferEvalRequest
   * @returns HrbrainDeleteTransferEvalResponse
   */
  async hrbrainDeleteTransferEval(request: HrbrainDeleteTransferEvalRequest): Promise<HrbrainDeleteTransferEvalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteTransferEvalHeaders({ });
    return await this.hrbrainDeleteTransferEvalWithOptions(request, headers, runtime);
  }

  /**
   * 删除工作经历
   * 
   * @param request - HrbrainDeleteWorkExpRequest
   * @param headers - HrbrainDeleteWorkExpHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeleteWorkExpResponse
   */
  async hrbrainDeleteWorkExpWithOptions(request: HrbrainDeleteWorkExpRequest, headers: HrbrainDeleteWorkExpHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeleteWorkExpResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeleteWorkExp",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/workExperiences/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeleteWorkExpResponse>(await this.execute(params, req, runtime), new HrbrainDeleteWorkExpResponse({}));
  }

  /**
   * 删除工作经历
   * 
   * @param request - HrbrainDeleteWorkExpRequest
   * @returns HrbrainDeleteWorkExpResponse
   */
  async hrbrainDeleteWorkExp(request: HrbrainDeleteWorkExpRequest): Promise<HrbrainDeleteWorkExpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeleteWorkExpHeaders({ });
    return await this.hrbrainDeleteWorkExpWithOptions(request, headers, runtime);
  }

  /**
   * 删除标签数据
   * 
   * @param request - HrbrainDeletetLabelBaseRequest
   * @param headers - HrbrainDeletetLabelBaseHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainDeletetLabelBaseResponse
   */
  async hrbrainDeletetLabelBaseWithOptions(request: HrbrainDeletetLabelBaseRequest, headers: HrbrainDeletetLabelBaseHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainDeletetLabelBaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainDeletetLabelBase",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/baseLabels/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainDeletetLabelBaseResponse>(await this.execute(params, req, runtime), new HrbrainDeletetLabelBaseResponse({}));
  }

  /**
   * 删除标签数据
   * 
   * @param request - HrbrainDeletetLabelBaseRequest
   * @returns HrbrainDeletetLabelBaseResponse
   */
  async hrbrainDeletetLabelBase(request: HrbrainDeletetLabelBaseRequest): Promise<HrbrainDeletetLabelBaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainDeletetLabelBaseHeaders({ });
    return await this.hrbrainDeletetLabelBaseWithOptions(request, headers, runtime);
  }

  /**
   * 人才池信息查询
   * 
   * @param request - HrbrainEmpPoolQueryRequest
   * @param headers - HrbrainEmpPoolQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainEmpPoolQueryResponse
   */
  async hrbrainEmpPoolQueryWithOptions(request: HrbrainEmpPoolQueryRequest, headers: HrbrainEmpPoolQueryHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainEmpPoolQueryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      body["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.labels)) {
      body["labels"] = request.labels;
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainEmpPoolQuery",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/empPools/infos/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainEmpPoolQueryResponse>(await this.execute(params, req, runtime), new HrbrainEmpPoolQueryResponse({}));
  }

  /**
   * 人才池信息查询
   * 
   * @param request - HrbrainEmpPoolQueryRequest
   * @returns HrbrainEmpPoolQueryResponse
   */
  async hrbrainEmpPoolQuery(request: HrbrainEmpPoolQueryRequest): Promise<HrbrainEmpPoolQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainEmpPoolQueryHeaders({ });
    return await this.hrbrainEmpPoolQueryWithOptions(request, headers, runtime);
  }

  /**
   * 人才池人员查询
   * 
   * @param request - HrbrainEmpPoolUserRequest
   * @param headers - HrbrainEmpPoolUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainEmpPoolUserResponse
   */
  async hrbrainEmpPoolUserWithOptions(request: HrbrainEmpPoolUserRequest, headers: HrbrainEmpPoolUserHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainEmpPoolUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.poolCode)) {
      body["poolCode"] = request.poolCode;
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
      action: "HrbrainEmpPoolUser",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/empPools/users/lists/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainEmpPoolUserResponse>(await this.execute(params, req, runtime), new HrbrainEmpPoolUserResponse({}));
  }

  /**
   * 人才池人员查询
   * 
   * @param request - HrbrainEmpPoolUserRequest
   * @returns HrbrainEmpPoolUserResponse
   */
  async hrbrainEmpPoolUser(request: HrbrainEmpPoolUserRequest): Promise<HrbrainEmpPoolUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainEmpPoolUserHeaders({ });
    return await this.hrbrainEmpPoolUserWithOptions(request, headers, runtime);
  }

  /**
   * 集成奖励记录
   * 
   * @param request - HrbrainImportAwardDetailRequest
   * @param headers - HrbrainImportAwardDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportAwardDetailResponse
   */
  async hrbrainImportAwardDetailWithOptions(request: HrbrainImportAwardDetailRequest, headers: HrbrainImportAwardDetailHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportAwardDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportAwardDetail",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/awardDetails/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportAwardDetailResponse>(await this.execute(params, req, runtime), new HrbrainImportAwardDetailResponse({}));
  }

  /**
   * 集成奖励记录
   * 
   * @param request - HrbrainImportAwardDetailRequest
   * @returns HrbrainImportAwardDetailResponse
   */
  async hrbrainImportAwardDetail(request: HrbrainImportAwardDetailRequest): Promise<HrbrainImportAwardDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportAwardDetailHeaders({ });
    return await this.hrbrainImportAwardDetailWithOptions(request, headers, runtime);
  }

  /**
   * 集成自定义模型记录
   * 
   * @param request - HrbrainImportCustomRequest
   * @param headers - HrbrainImportCustomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportCustomResponse
   */
  async hrbrainImportCustomWithOptions(request: HrbrainImportCustomRequest, headers: HrbrainImportCustomHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportCustomResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.modelCode)) {
      query["modelCode"] = request.modelCode;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportCustom",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/customModels/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportCustomResponse>(await this.execute(params, req, runtime), new HrbrainImportCustomResponse({}));
  }

  /**
   * 集成自定义模型记录
   * 
   * @param request - HrbrainImportCustomRequest
   * @returns HrbrainImportCustomResponse
   */
  async hrbrainImportCustom(request: HrbrainImportCustomRequest): Promise<HrbrainImportCustomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportCustomHeaders({ });
    return await this.hrbrainImportCustomWithOptions(request, headers, runtime);
  }

  /**
   * 集成组织架构
   * 
   * @param request - HrbrainImportDeptInfoRequest
   * @param headers - HrbrainImportDeptInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportDeptInfoResponse
   */
  async hrbrainImportDeptInfoWithOptions(request: HrbrainImportDeptInfoRequest, headers: HrbrainImportDeptInfoHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportDeptInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportDeptInfo",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/deptInfos/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportDeptInfoResponse>(await this.execute(params, req, runtime), new HrbrainImportDeptInfoResponse({}));
  }

  /**
   * 集成组织架构
   * 
   * @param request - HrbrainImportDeptInfoRequest
   * @returns HrbrainImportDeptInfoResponse
   */
  async hrbrainImportDeptInfo(request: HrbrainImportDeptInfoRequest): Promise<HrbrainImportDeptInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportDeptInfoHeaders({ });
    return await this.hrbrainImportDeptInfoWithOptions(request, headers, runtime);
  }

  /**
   * 集成离职信息
   * 
   * @param request - HrbrainImportDimissionRequest
   * @param headers - HrbrainImportDimissionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportDimissionResponse
   */
  async hrbrainImportDimissionWithOptions(request: HrbrainImportDimissionRequest, headers: HrbrainImportDimissionHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportDimissionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportDimission",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/dimissionInfos/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportDimissionResponse>(await this.execute(params, req, runtime), new HrbrainImportDimissionResponse({}));
  }

  /**
   * 集成离职信息
   * 
   * @param request - HrbrainImportDimissionRequest
   * @returns HrbrainImportDimissionResponse
   */
  async hrbrainImportDimission(request: HrbrainImportDimissionRequest): Promise<HrbrainImportDimissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportDimissionHeaders({ });
    return await this.hrbrainImportDimissionWithOptions(request, headers, runtime);
  }

  /**
   * 集成教育经历
   * 
   * @param request - HrbrainImportEduExpRequest
   * @param headers - HrbrainImportEduExpHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportEduExpResponse
   */
  async hrbrainImportEduExpWithOptions(request: HrbrainImportEduExpRequest, headers: HrbrainImportEduExpHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportEduExpResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportEduExp",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/eduExperiences/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportEduExpResponse>(await this.execute(params, req, runtime), new HrbrainImportEduExpResponse({}));
  }

  /**
   * 集成教育经历
   * 
   * @param request - HrbrainImportEduExpRequest
   * @returns HrbrainImportEduExpResponse
   */
  async hrbrainImportEduExp(request: HrbrainImportEduExpRequest): Promise<HrbrainImportEduExpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportEduExpHeaders({ });
    return await this.hrbrainImportEduExpWithOptions(request, headers, runtime);
  }

  /**
   * 集成人员信息
   * 
   * @param request - HrbrainImportEmpInfoRequest
   * @param headers - HrbrainImportEmpInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportEmpInfoResponse
   */
  async hrbrainImportEmpInfoWithOptions(request: HrbrainImportEmpInfoRequest, headers: HrbrainImportEmpInfoHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportEmpInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportEmpInfo",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/empInfos/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportEmpInfoResponse>(await this.execute(params, req, runtime), new HrbrainImportEmpInfoResponse({}));
  }

  /**
   * 集成人员信息
   * 
   * @param request - HrbrainImportEmpInfoRequest
   * @returns HrbrainImportEmpInfoResponse
   */
  async hrbrainImportEmpInfo(request: HrbrainImportEmpInfoRequest): Promise<HrbrainImportEmpInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportEmpInfoHeaders({ });
    return await this.hrbrainImportEmpInfoWithOptions(request, headers, runtime);
  }

  /**
   * 集成基础标签
   * 
   * @param request - HrbrainImportLabelBaseRequest
   * @param headers - HrbrainImportLabelBaseHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportLabelBaseResponse
   */
  async hrbrainImportLabelBaseWithOptions(request: HrbrainImportLabelBaseRequest, headers: HrbrainImportLabelBaseHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportLabelBaseResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportLabelBase",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/baseLabels/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportLabelBaseResponse>(await this.execute(params, req, runtime), new HrbrainImportLabelBaseResponse({}));
  }

  /**
   * 集成基础标签
   * 
   * @param request - HrbrainImportLabelBaseRequest
   * @returns HrbrainImportLabelBaseResponse
   */
  async hrbrainImportLabelBase(request: HrbrainImportLabelBaseRequest): Promise<HrbrainImportLabelBaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportLabelBaseHeaders({ });
    return await this.hrbrainImportLabelBaseWithOptions(request, headers, runtime);
  }

  /**
   * 集成自定义标签
   * 
   * @param request - HrbrainImportLabelCustomRequest
   * @param headers - HrbrainImportLabelCustomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportLabelCustomResponse
   */
  async hrbrainImportLabelCustomWithOptions(request: HrbrainImportLabelCustomRequest, headers: HrbrainImportLabelCustomHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportLabelCustomResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportLabelCustom",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/customLabels/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportLabelCustomResponse>(await this.execute(params, req, runtime), new HrbrainImportLabelCustomResponse({}));
  }

  /**
   * 集成自定义标签
   * 
   * @param request - HrbrainImportLabelCustomRequest
   * @returns HrbrainImportLabelCustomResponse
   */
  async hrbrainImportLabelCustom(request: HrbrainImportLabelCustomRequest): Promise<HrbrainImportLabelCustomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportLabelCustomHeaders({ });
    return await this.hrbrainImportLabelCustomWithOptions(request, headers, runtime);
  }

  /**
   * 集成领域经验
   * 
   * @param request - HrbrainImportLabelIndustryRequest
   * @param headers - HrbrainImportLabelIndustryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportLabelIndustryResponse
   */
  async hrbrainImportLabelIndustryWithOptions(request: HrbrainImportLabelIndustryRequest, headers: HrbrainImportLabelIndustryHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportLabelIndustryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportLabelIndustry",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/industries/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportLabelIndustryResponse>(await this.execute(params, req, runtime), new HrbrainImportLabelIndustryResponse({}));
  }

  /**
   * 集成领域经验
   * 
   * @param request - HrbrainImportLabelIndustryRequest
   * @returns HrbrainImportLabelIndustryResponse
   */
  async hrbrainImportLabelIndustry(request: HrbrainImportLabelIndustryRequest): Promise<HrbrainImportLabelIndustryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportLabelIndustryHeaders({ });
    return await this.hrbrainImportLabelIndustryWithOptions(request, headers, runtime);
  }

  /**
   * 集成盘点数据
   * 
   * @param request - HrbrainImportLabelInventoryRequest
   * @param headers - HrbrainImportLabelInventoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportLabelInventoryResponse
   */
  async hrbrainImportLabelInventoryWithOptions(request: HrbrainImportLabelInventoryRequest, headers: HrbrainImportLabelInventoryHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportLabelInventoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportLabelInventory",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/inventories/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportLabelInventoryResponse>(await this.execute(params, req, runtime), new HrbrainImportLabelInventoryResponse({}));
  }

  /**
   * 集成盘点数据
   * 
   * @param request - HrbrainImportLabelInventoryRequest
   * @returns HrbrainImportLabelInventoryResponse
   */
  async hrbrainImportLabelInventory(request: HrbrainImportLabelInventoryRequest): Promise<HrbrainImportLabelInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportLabelInventoryHeaders({ });
    return await this.hrbrainImportLabelInventoryWithOptions(request, headers, runtime);
  }

  /**
   * 集成专业技能
   * 
   * @param request - HrbrainImportLabelProfSkillRequest
   * @param headers - HrbrainImportLabelProfSkillHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportLabelProfSkillResponse
   */
  async hrbrainImportLabelProfSkillWithOptions(request: HrbrainImportLabelProfSkillRequest, headers: HrbrainImportLabelProfSkillHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportLabelProfSkillResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportLabelProfSkill",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/profSkills/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportLabelProfSkillResponse>(await this.execute(params, req, runtime), new HrbrainImportLabelProfSkillResponse({}));
  }

  /**
   * 集成专业技能
   * 
   * @param request - HrbrainImportLabelProfSkillRequest
   * @returns HrbrainImportLabelProfSkillResponse
   */
  async hrbrainImportLabelProfSkill(request: HrbrainImportLabelProfSkillRequest): Promise<HrbrainImportLabelProfSkillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportLabelProfSkillHeaders({ });
    return await this.hrbrainImportLabelProfSkillWithOptions(request, headers, runtime);
  }

  /**
   * 集成绩效记录
   * 
   * @param request - HrbrainImportPerfEvalRequest
   * @param headers - HrbrainImportPerfEvalHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportPerfEvalResponse
   */
  async hrbrainImportPerfEvalWithOptions(request: HrbrainImportPerfEvalRequest, headers: HrbrainImportPerfEvalHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportPerfEvalResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportPerfEval",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/perfRecords/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportPerfEvalResponse>(await this.execute(params, req, runtime), new HrbrainImportPerfEvalResponse({}));
  }

  /**
   * 集成绩效记录
   * 
   * @param request - HrbrainImportPerfEvalRequest
   * @returns HrbrainImportPerfEvalResponse
   */
  async hrbrainImportPerfEval(request: HrbrainImportPerfEvalRequest): Promise<HrbrainImportPerfEvalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportPerfEvalHeaders({ });
    return await this.hrbrainImportPerfEvalWithOptions(request, headers, runtime);
  }

  /**
   * 集成晋升记录
   * 
   * @param request - HrbrainImportPromEvalRequest
   * @param headers - HrbrainImportPromEvalHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportPromEvalResponse
   */
  async hrbrainImportPromEvalWithOptions(request: HrbrainImportPromEvalRequest, headers: HrbrainImportPromEvalHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportPromEvalResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportPromEval",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/promRecords/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportPromEvalResponse>(await this.execute(params, req, runtime), new HrbrainImportPromEvalResponse({}));
  }

  /**
   * 集成晋升记录
   * 
   * @param request - HrbrainImportPromEvalRequest
   * @returns HrbrainImportPromEvalResponse
   */
  async hrbrainImportPromEval(request: HrbrainImportPromEvalRequest): Promise<HrbrainImportPromEvalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportPromEvalHeaders({ });
    return await this.hrbrainImportPromEvalWithOptions(request, headers, runtime);
  }

  /**
   * 集成处分记录
   * 
   * @param request - HrbrainImportPunDetailRequest
   * @param headers - HrbrainImportPunDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportPunDetailResponse
   */
  async hrbrainImportPunDetailWithOptions(request: HrbrainImportPunDetailRequest, headers: HrbrainImportPunDetailHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportPunDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportPunDetail",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/punDetails/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportPunDetailResponse>(await this.execute(params, req, runtime), new HrbrainImportPunDetailResponse({}));
  }

  /**
   * 集成处分记录
   * 
   * @param request - HrbrainImportPunDetailRequest
   * @returns HrbrainImportPunDetailResponse
   */
  async hrbrainImportPunDetail(request: HrbrainImportPunDetailRequest): Promise<HrbrainImportPunDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportPunDetailHeaders({ });
    return await this.hrbrainImportPunDetailWithOptions(request, headers, runtime);
  }

  /**
   * 集成入职信息
   * 
   * @param request - HrbrainImportRegistRequest
   * @param headers - HrbrainImportRegistHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportRegistResponse
   */
  async hrbrainImportRegistWithOptions(request: HrbrainImportRegistRequest, headers: HrbrainImportRegistHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportRegistResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportRegist",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/registerInfos/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportRegistResponse>(await this.execute(params, req, runtime), new HrbrainImportRegistResponse({}));
  }

  /**
   * 集成入职信息
   * 
   * @param request - HrbrainImportRegistRequest
   * @returns HrbrainImportRegistResponse
   */
  async hrbrainImportRegist(request: HrbrainImportRegistRequest): Promise<HrbrainImportRegistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportRegistHeaders({ });
    return await this.hrbrainImportRegistWithOptions(request, headers, runtime);
  }

  /**
   * 集成转正记录
   * 
   * @param request - HrbrainImportRegularRequest
   * @param headers - HrbrainImportRegularHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportRegularResponse
   */
  async hrbrainImportRegularWithOptions(request: HrbrainImportRegularRequest, headers: HrbrainImportRegularHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportRegularResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportRegular",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/regulars/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportRegularResponse>(await this.execute(params, req, runtime), new HrbrainImportRegularResponse({}));
  }

  /**
   * 集成转正记录
   * 
   * @param request - HrbrainImportRegularRequest
   * @returns HrbrainImportRegularResponse
   */
  async hrbrainImportRegular(request: HrbrainImportRegularRequest): Promise<HrbrainImportRegularResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportRegularHeaders({ });
    return await this.hrbrainImportRegularWithOptions(request, headers, runtime);
  }

  /**
   * 集成培训学习记录
   * 
   * @param request - HrbrainImportTrainingRequest
   * @param headers - HrbrainImportTrainingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportTrainingResponse
   */
  async hrbrainImportTrainingWithOptions(request: HrbrainImportTrainingRequest, headers: HrbrainImportTrainingHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportTrainingResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportTraining",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/trainings/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportTrainingResponse>(await this.execute(params, req, runtime), new HrbrainImportTrainingResponse({}));
  }

  /**
   * 集成培训学习记录
   * 
   * @param request - HrbrainImportTrainingRequest
   * @returns HrbrainImportTrainingResponse
   */
  async hrbrainImportTraining(request: HrbrainImportTrainingRequest): Promise<HrbrainImportTrainingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportTrainingHeaders({ });
    return await this.hrbrainImportTrainingWithOptions(request, headers, runtime);
  }

  /**
   * 集成异动记录
   * 
   * @param request - HrbrainImportTransferEvalRequest
   * @param headers - HrbrainImportTransferEvalHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportTransferEvalResponse
   */
  async hrbrainImportTransferEvalWithOptions(request: HrbrainImportTransferEvalRequest, headers: HrbrainImportTransferEvalHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportTransferEvalResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportTransferEval",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/changeRecords/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportTransferEvalResponse>(await this.execute(params, req, runtime), new HrbrainImportTransferEvalResponse({}));
  }

  /**
   * 集成异动记录
   * 
   * @param request - HrbrainImportTransferEvalRequest
   * @returns HrbrainImportTransferEvalResponse
   */
  async hrbrainImportTransferEval(request: HrbrainImportTransferEvalRequest): Promise<HrbrainImportTransferEvalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportTransferEvalHeaders({ });
    return await this.hrbrainImportTransferEvalWithOptions(request, headers, runtime);
  }

  /**
   * 集成工作经历
   * 
   * @param request - HrbrainImportWorkExpRequest
   * @param headers - HrbrainImportWorkExpHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainImportWorkExpResponse
   */
  async hrbrainImportWorkExpWithOptions(request: HrbrainImportWorkExpRequest, headers: HrbrainImportWorkExpHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainImportWorkExpResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainImportWorkExp",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/workExperiences/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainImportWorkExpResponse>(await this.execute(params, req, runtime), new HrbrainImportWorkExpResponse({}));
  }

  /**
   * 集成工作经历
   * 
   * @param request - HrbrainImportWorkExpRequest
   * @returns HrbrainImportWorkExpResponse
   */
  async hrbrainImportWorkExp(request: HrbrainImportWorkExpRequest): Promise<HrbrainImportWorkExpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainImportWorkExpHeaders({ });
    return await this.hrbrainImportWorkExpWithOptions(request, headers, runtime);
  }

  /**
   * 标签分类树查询
   * 
   * @param headers - HrbrainLabelCategoryTreeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainLabelCategoryTreeResponse
   */
  async hrbrainLabelCategoryTreeWithOptions(headers: HrbrainLabelCategoryTreeHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainLabelCategoryTreeResponse> {
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
      action: "HrbrainLabelCategoryTree",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/labels/category/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainLabelCategoryTreeResponse>(await this.execute(params, req, runtime), new HrbrainLabelCategoryTreeResponse({}));
  }

  /**
   * 标签分类树查询
   * @returns HrbrainLabelCategoryTreeResponse
   */
  async hrbrainLabelCategoryTree(): Promise<HrbrainLabelCategoryTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainLabelCategoryTreeHeaders({ });
    return await this.hrbrainLabelCategoryTreeWithOptions(headers, runtime);
  }

  /**
   * 标签分类树更新
   * 
   * @param request - HrbrainLabelCategoryUpdateRequest
   * @param headers - HrbrainLabelCategoryUpdateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainLabelCategoryUpdateResponse
   */
  async hrbrainLabelCategoryUpdateWithOptions(request: HrbrainLabelCategoryUpdateRequest, headers: HrbrainLabelCategoryUpdateHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainLabelCategoryUpdateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryVo)) {
      body["categoryVo"] = request.categoryVo;
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
      action: "HrbrainLabelCategoryUpdate",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/labels/category/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainLabelCategoryUpdateResponse>(await this.execute(params, req, runtime), new HrbrainLabelCategoryUpdateResponse({}));
  }

  /**
   * 标签分类树更新
   * 
   * @param request - HrbrainLabelCategoryUpdateRequest
   * @returns HrbrainLabelCategoryUpdateResponse
   */
  async hrbrainLabelCategoryUpdate(request: HrbrainLabelCategoryUpdateRequest): Promise<HrbrainLabelCategoryUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainLabelCategoryUpdateHeaders({ });
    return await this.hrbrainLabelCategoryUpdateWithOptions(request, headers, runtime);
  }

  /**
   * 标签明细删除
   * 
   * @param request - HrbrainLabelDataDeleteRequest
   * @param headers - HrbrainLabelDataDeleteHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainLabelDataDeleteResponse
   */
  async hrbrainLabelDataDeleteWithOptions(request: HrbrainLabelDataDeleteRequest, headers: HrbrainLabelDataDeleteHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainLabelDataDeleteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainLabelDataDelete",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/label/dataDelete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainLabelDataDeleteResponse>(await this.execute(params, req, runtime), new HrbrainLabelDataDeleteResponse({}));
  }

  /**
   * 标签明细删除
   * 
   * @param request - HrbrainLabelDataDeleteRequest
   * @returns HrbrainLabelDataDeleteResponse
   */
  async hrbrainLabelDataDelete(request: HrbrainLabelDataDeleteRequest): Promise<HrbrainLabelDataDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainLabelDataDeleteHeaders({ });
    return await this.hrbrainLabelDataDeleteWithOptions(request, headers, runtime);
  }

  /**
   * 标签明细查询
   * 
   * @param request - HrbrainLabelDataQueryRequest
   * @param headers - HrbrainLabelDataQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainLabelDataQueryResponse
   */
  async hrbrainLabelDataQueryWithOptions(request: HrbrainLabelDataQueryRequest, headers: HrbrainLabelDataQueryHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainLabelDataQueryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelCode)) {
      body["labelCode"] = request.labelCode;
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainLabelDataQuery",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/labels/data`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainLabelDataQueryResponse>(await this.execute(params, req, runtime), new HrbrainLabelDataQueryResponse({}));
  }

  /**
   * 标签明细查询
   * 
   * @param request - HrbrainLabelDataQueryRequest
   * @returns HrbrainLabelDataQueryResponse
   */
  async hrbrainLabelDataQuery(request: HrbrainLabelDataQueryRequest): Promise<HrbrainLabelDataQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainLabelDataQueryHeaders({ });
    return await this.hrbrainLabelDataQueryWithOptions(request, headers, runtime);
  }

  /**
   * 标签明细更新
   * 
   * @param request - HrbrainLabelDataUpsertRequest
   * @param headers - HrbrainLabelDataUpsertHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainLabelDataUpsertResponse
   */
  async hrbrainLabelDataUpsertWithOptions(request: HrbrainLabelDataUpsertRequest, headers: HrbrainLabelDataUpsertHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainLabelDataUpsertResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
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
      action: "HrbrainLabelDataUpsert",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/label/dataUpsert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainLabelDataUpsertResponse>(await this.execute(params, req, runtime), new HrbrainLabelDataUpsertResponse({}));
  }

  /**
   * 标签明细更新
   * 
   * @param request - HrbrainLabelDataUpsertRequest
   * @returns HrbrainLabelDataUpsertResponse
   */
  async hrbrainLabelDataUpsert(request: HrbrainLabelDataUpsertRequest): Promise<HrbrainLabelDataUpsertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainLabelDataUpsertHeaders({ });
    return await this.hrbrainLabelDataUpsertWithOptions(request, headers, runtime);
  }

  /**
   * 标签元数据
   * 
   * @param request - HrbrainLabelMetaRequest
   * @param headers - HrbrainLabelMetaHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainLabelMetaResponse
   */
  async hrbrainLabelMetaWithOptions(request: HrbrainLabelMetaRequest, headers: HrbrainLabelMetaHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainLabelMetaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryCodes)) {
      body["categoryCodes"] = request.categoryCodes;
    }

    if (!Util.isUnset(request.labelCode)) {
      body["labelCode"] = request.labelCode;
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "HrbrainLabelMeta",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/labels/meta`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainLabelMetaResponse>(await this.execute(params, req, runtime), new HrbrainLabelMetaResponse({}));
  }

  /**
   * 标签元数据
   * 
   * @param request - HrbrainLabelMetaRequest
   * @returns HrbrainLabelMetaResponse
   */
  async hrbrainLabelMeta(request: HrbrainLabelMetaRequest): Promise<HrbrainLabelMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainLabelMetaHeaders({ });
    return await this.hrbrainLabelMetaWithOptions(request, headers, runtime);
  }

  /**
   * 标签元数据状态更新
   * 
   * @param request - HrbrainLabelMetaStatusRequest
   * @param headers - HrbrainLabelMetaStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainLabelMetaStatusResponse
   */
  async hrbrainLabelMetaStatusWithOptions(request: HrbrainLabelMetaStatusRequest, headers: HrbrainLabelMetaStatusHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainLabelMetaStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.codes)) {
      body["codes"] = request.codes;
    }

    if (!Util.isUnset(request.optType)) {
      body["optType"] = request.optType;
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
      action: "HrbrainLabelMetaStatus",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/labels/metaStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainLabelMetaStatusResponse>(await this.execute(params, req, runtime), new HrbrainLabelMetaStatusResponse({}));
  }

  /**
   * 标签元数据状态更新
   * 
   * @param request - HrbrainLabelMetaStatusRequest
   * @returns HrbrainLabelMetaStatusResponse
   */
  async hrbrainLabelMetaStatus(request: HrbrainLabelMetaStatusRequest): Promise<HrbrainLabelMetaStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainLabelMetaStatusHeaders({ });
    return await this.hrbrainLabelMetaStatusWithOptions(request, headers, runtime);
  }

  /**
   * 标签元数据更新
   * 
   * @param request - HrbrainLabelMetaUpdateRequest
   * @param headers - HrbrainLabelMetaUpdateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainLabelMetaUpdateResponse
   */
  async hrbrainLabelMetaUpdateWithOptions(request: HrbrainLabelMetaUpdateRequest, headers: HrbrainLabelMetaUpdateHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainLabelMetaUpdateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryCode)) {
      body["categoryCode"] = request.categoryCode;
    }

    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.dataType)) {
      body["dataType"] = request.dataType;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.importantLevel)) {
      body["importantLevel"] = request.importantLevel;
    }

    if (!Util.isUnset(request.isSensitive)) {
      body["isSensitive"] = request.isSensitive;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.options)) {
      body["options"] = request.options;
    }

    if (!Util.isUnset(request.permission)) {
      body["permission"] = request.permission;
    }

    if (!Util.isUnset(request.required)) {
      body["required"] = request.required;
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
      action: "HrbrainLabelMetaUpdate",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/labels/metaUpdate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainLabelMetaUpdateResponse>(await this.execute(params, req, runtime), new HrbrainLabelMetaUpdateResponse({}));
  }

  /**
   * 标签元数据更新
   * 
   * @param request - HrbrainLabelMetaUpdateRequest
   * @returns HrbrainLabelMetaUpdateResponse
   */
  async hrbrainLabelMetaUpdate(request: HrbrainLabelMetaUpdateRequest): Promise<HrbrainLabelMetaUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainLabelMetaUpdateHeaders({ });
    return await this.hrbrainLabelMetaUpdateWithOptions(request, headers, runtime);
  }

  /**
   * 打标任务生成的标签数据
   * 
   * @param request - HrbrainLabelTaskDataRequest
   * @param headers - HrbrainLabelTaskDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainLabelTaskDataResponse
   */
  async hrbrainLabelTaskDataWithOptions(request: HrbrainLabelTaskDataRequest, headers: HrbrainLabelTaskDataHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainLabelTaskDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.optWorkNo)) {
      query["optWorkNo"] = request.optWorkNo;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["sessionId"] = request.sessionId;
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
      action: "HrbrainLabelTaskData",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/labels/task/data`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainLabelTaskDataResponse>(await this.execute(params, req, runtime), new HrbrainLabelTaskDataResponse({}));
  }

  /**
   * 打标任务生成的标签数据
   * 
   * @param request - HrbrainLabelTaskDataRequest
   * @returns HrbrainLabelTaskDataResponse
   */
  async hrbrainLabelTaskData(request: HrbrainLabelTaskDataRequest): Promise<HrbrainLabelTaskDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainLabelTaskDataHeaders({ });
    return await this.hrbrainLabelTaskDataWithOptions(request, headers, runtime);
  }

  /**
   * 打标任务生成的标签元数据
   * 
   * @param request - HrbrainLabelTaskMetaRequest
   * @param headers - HrbrainLabelTaskMetaHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainLabelTaskMetaResponse
   */
  async hrbrainLabelTaskMetaWithOptions(request: HrbrainLabelTaskMetaRequest, headers: HrbrainLabelTaskMetaHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainLabelTaskMetaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.optWorkNo)) {
      query["optWorkNo"] = request.optWorkNo;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["sessionId"] = request.sessionId;
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
      action: "HrbrainLabelTaskMeta",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/labels/task/metadata`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainLabelTaskMetaResponse>(await this.execute(params, req, runtime), new HrbrainLabelTaskMetaResponse({}));
  }

  /**
   * 打标任务生成的标签元数据
   * 
   * @param request - HrbrainLabelTaskMetaRequest
   * @returns HrbrainLabelTaskMetaResponse
   */
  async hrbrainLabelTaskMeta(request: HrbrainLabelTaskMetaRequest): Promise<HrbrainLabelTaskMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainLabelTaskMetaHeaders({ });
    return await this.hrbrainLabelTaskMetaWithOptions(request, headers, runtime);
  }

  /**
   * 查询人才档案附件照片
   * 
   * @param request - HrbrainTalentProfileAttachmentQueryRequest
   * @param headers - HrbrainTalentProfileAttachmentQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainTalentProfileAttachmentQueryResponse
   */
  async hrbrainTalentProfileAttachmentQueryWithOptions(request: HrbrainTalentProfileAttachmentQueryRequest, headers: HrbrainTalentProfileAttachmentQueryHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainTalentProfileAttachmentQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dingCorpId)) {
      query["dingCorpId"] = request.dingCorpId;
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
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "HrbrainTalentProfileAttachmentQuery",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/profiles/attachmentPhotos/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainTalentProfileAttachmentQueryResponse>(await this.execute(params, req, runtime), new HrbrainTalentProfileAttachmentQueryResponse({}));
  }

  /**
   * 查询人才档案附件照片
   * 
   * @param request - HrbrainTalentProfileAttachmentQueryRequest
   * @returns HrbrainTalentProfileAttachmentQueryResponse
   */
  async hrbrainTalentProfileAttachmentQuery(request: HrbrainTalentProfileAttachmentQueryRequest): Promise<HrbrainTalentProfileAttachmentQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainTalentProfileAttachmentQueryHeaders({ });
    return await this.hrbrainTalentProfileAttachmentQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询人才档案基础数据
   * 
   * @param request - HrbrainTalentProfileBasicQueryRequest
   * @param headers - HrbrainTalentProfileBasicQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainTalentProfileBasicQueryResponse
   */
  async hrbrainTalentProfileBasicQueryWithOptions(request: HrbrainTalentProfileBasicQueryRequest, headers: HrbrainTalentProfileBasicQueryHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainTalentProfileBasicQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dingCorpId)) {
      query["dingCorpId"] = request.dingCorpId;
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
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "HrbrainTalentProfileBasicQuery",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/profiles/basicData/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainTalentProfileBasicQueryResponse>(await this.execute(params, req, runtime), new HrbrainTalentProfileBasicQueryResponse({}));
  }

  /**
   * 查询人才档案基础数据
   * 
   * @param request - HrbrainTalentProfileBasicQueryRequest
   * @returns HrbrainTalentProfileBasicQueryResponse
   */
  async hrbrainTalentProfileBasicQuery(request: HrbrainTalentProfileBasicQueryRequest): Promise<HrbrainTalentProfileBasicQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainTalentProfileBasicQueryHeaders({ });
    return await this.hrbrainTalentProfileBasicQueryWithOptions(request, headers, runtime);
  }

  /**
   * 提交人才搜索任务
   * 
   * @param request - HrbrainTalentSearchRequest
   * @param headers - HrbrainTalentSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainTalentSearchResponse
   */
  async hrbrainTalentSearchWithOptions(request: HrbrainTalentSearchRequest, headers: HrbrainTalentSearchHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainTalentSearchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.workNo)) {
      query["workNo"] = request.workNo;
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
      action: "HrbrainTalentSearch",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/talent/submitEmpSearchTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainTalentSearchResponse>(await this.execute(params, req, runtime), new HrbrainTalentSearchResponse({}));
  }

  /**
   * 提交人才搜索任务
   * 
   * @param request - HrbrainTalentSearchRequest
   * @returns HrbrainTalentSearchResponse
   */
  async hrbrainTalentSearch(request: HrbrainTalentSearchRequest): Promise<HrbrainTalentSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainTalentSearchHeaders({ });
    return await this.hrbrainTalentSearchWithOptions(request, headers, runtime);
  }

  /**
   * 获取搜索结果
   * 
   * @param request - HrbrainTalentSearchResultRequest
   * @param headers - HrbrainTalentSearchResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HrbrainTalentSearchResultResponse
   */
  async hrbrainTalentSearchResultWithOptions(request: HrbrainTalentSearchResultRequest, headers: HrbrainTalentSearchResultHeaders, runtime: $Util.RuntimeOptions): Promise<HrbrainTalentSearchResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.workNo)) {
      query["workNo"] = request.workNo;
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
      action: "HrbrainTalentSearchResult",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/talent/getEmpSearchTaskResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HrbrainTalentSearchResultResponse>(await this.execute(params, req, runtime), new HrbrainTalentSearchResultResponse({}));
  }

  /**
   * 获取搜索结果
   * 
   * @param request - HrbrainTalentSearchResultRequest
   * @returns HrbrainTalentSearchResultResponse
   */
  async hrbrainTalentSearchResult(request: HrbrainTalentSearchResultRequest): Promise<HrbrainTalentSearchResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HrbrainTalentSearchResultHeaders({ });
    return await this.hrbrainTalentSearchResultWithOptions(request, headers, runtime);
  }

  /**
   * 人员标签查询
   * 
   * @param request - StaffLabelRecordsQueryRequest
   * @param headers - StaffLabelRecordsQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StaffLabelRecordsQueryResponse
   */
  async staffLabelRecordsQueryWithOptions(request: StaffLabelRecordsQueryRequest, headers: StaffLabelRecordsQueryHeaders, runtime: $Util.RuntimeOptions): Promise<StaffLabelRecordsQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dingCorpId)) {
      query["dingCorpId"] = request.dingCorpId;
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
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "StaffLabelRecordsQuery",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas/labelRecords/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<StaffLabelRecordsQueryResponse>(await this.execute(params, req, runtime), new StaffLabelRecordsQueryResponse({}));
  }

  /**
   * 人员标签查询
   * 
   * @param request - StaffLabelRecordsQueryRequest
   * @returns StaffLabelRecordsQueryResponse
   */
  async staffLabelRecordsQuery(request: StaffLabelRecordsQueryRequest): Promise<StaffLabelRecordsQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new StaffLabelRecordsQueryHeaders({ });
    return await this.staffLabelRecordsQueryWithOptions(request, headers, runtime);
  }

  /**
   * 同步统计基础数据
   * 
   * @param request - SyncDataRequest
   * @param headers - SyncDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncDataResponse
   */
  async syncDataWithOptions(request: SyncDataRequest, headers: SyncDataHeaders, runtime: $Util.RuntimeOptions): Promise<SyncDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.dataId)) {
      body["dataId"] = request.dataId;
    }

    if (!Util.isUnset(request.etlTime)) {
      body["etlTime"] = request.etlTime;
    }

    if (!Util.isUnset(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!Util.isUnset(request.schemaId)) {
      body["schemaId"] = request.schemaId;
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
      action: "SyncData",
      version: "hrbrain_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/hrbrain/datas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SyncDataResponse>(await this.execute(params, req, runtime), new SyncDataResponse({}));
  }

  /**
   * 同步统计基础数据
   * 
   * @param request - SyncDataRequest
   * @returns SyncDataResponse
   */
  async syncData(request: SyncDataRequest): Promise<SyncDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SyncDataHeaders({ });
    return await this.syncDataWithOptions(request, headers, runtime);
  }

}
