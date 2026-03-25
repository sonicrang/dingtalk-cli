// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelContractReviewHeaders extends $tea.Model {
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

export class CancelContractReviewRequest extends $tea.Model {
  reviewType?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      reviewType: 'reviewType',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelContractReviewResponseBody extends $tea.Model {
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelContractReviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelContractReviewResponseBody;
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
      body: CancelContractReviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelReviewOrderHeaders extends $tea.Model {
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

export class CancelReviewOrderRequest extends $tea.Model {
  endFiles?: CancelReviewOrderRequestEndFiles[];
  extension?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      endFiles: 'endFiles',
      extension: 'extension',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endFiles: { 'type': 'array', 'itemType': CancelReviewOrderRequestEndFiles },
      extension: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelReviewOrderResponseBody extends $tea.Model {
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

export class CancelReviewOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelReviewOrderResponseBody;
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
      body: CancelReviewOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckEsignFileHeaders extends $tea.Model {
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

export class CheckEsignFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      fileId: 'fileId',
      spaceId: 'spaceId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      fileId: 'string',
      spaceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckEsignFileResponseBody extends $tea.Model {
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckEsignFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckEsignFileResponseBody;
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
      body: CheckEsignFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContractAiReviewResultNotifyHeaders extends $tea.Model {
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

export class ContractAiReviewResultNotifyRequest extends $tea.Model {
  annotations?: ContractAiReviewResultNotifyRequestAnnotations[];
  /**
   * @remarks
   * This parameter is required.
   */
  contractAiReviewCorpId?: string;
  contractAiReviewId?: number;
  errorCode?: string;
  errorMsg?: string;
  extension?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      contractAiReviewCorpId: 'contractAiReviewCorpId',
      contractAiReviewId: 'contractAiReviewId',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      extension: 'extension',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': ContractAiReviewResultNotifyRequestAnnotations },
      contractAiReviewCorpId: 'string',
      contractAiReviewId: 'number',
      errorCode: 'string',
      errorMsg: 'string',
      extension: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContractAiReviewResultNotifyResponseBody extends $tea.Model {
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

export class ContractAiReviewResultNotifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContractAiReviewResultNotifyResponseBody;
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
      body: ContractAiReviewResultNotifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContractBenefitConsumeHeaders extends $tea.Model {
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

export class ContractBenefitConsumeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esign
   */
  benefitPoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sjdaujii129w9qej2nqas
   */
  bizRequestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  consumeQuota?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ding1231ndu29923312
   */
  corpId?: string;
  extParams?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ding12939912nduaejjwe
   */
  isvCorpId?: string;
  /**
   * @example
   * djauihjauiwnkndjknkjanaae
   */
  optUnionId?: string;
  static names(): { [key: string]: string } {
    return {
      benefitPoint: 'benefitPoint',
      bizRequestId: 'bizRequestId',
      consumeQuota: 'consumeQuota',
      corpId: 'corpId',
      extParams: 'extParams',
      isvCorpId: 'isvCorpId',
      optUnionId: 'optUnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitPoint: 'string',
      bizRequestId: 'string',
      consumeQuota: 'number',
      corpId: 'string',
      extParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isvCorpId: 'string',
      optUnionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContractBenefitConsumeResponseBody extends $tea.Model {
  result?: ContractBenefitConsumeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ContractBenefitConsumeResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContractBenefitConsumeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContractBenefitConsumeResponseBody;
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
      body: ContractBenefitConsumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsCompareTaskHeaders extends $tea.Model {
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

export class CreateContractAppsCompareTaskRequest extends $tea.Model {
  comparativeFile?: CreateContractAppsCompareTaskRequestComparativeFile;
  comparativeFileDownloadUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  comparativeFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileSource?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  standardFile?: CreateContractAppsCompareTaskRequestStandardFile;
  standardFileDownloadUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  standardFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      comparativeFile: 'comparativeFile',
      comparativeFileDownloadUrl: 'comparativeFileDownloadUrl',
      comparativeFileName: 'comparativeFileName',
      fileSource: 'fileSource',
      requestId: 'requestId',
      standardFile: 'standardFile',
      standardFileDownloadUrl: 'standardFileDownloadUrl',
      standardFileName: 'standardFileName',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparativeFile: CreateContractAppsCompareTaskRequestComparativeFile,
      comparativeFileDownloadUrl: 'string',
      comparativeFileName: 'string',
      fileSource: 'string',
      requestId: 'string',
      standardFile: CreateContractAppsCompareTaskRequestStandardFile,
      standardFileDownloadUrl: 'string',
      standardFileName: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsCompareTaskResponseBody extends $tea.Model {
  result?: CreateContractAppsCompareTaskResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateContractAppsCompareTaskResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsCompareTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateContractAppsCompareTaskResponseBody;
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
      body: CreateContractAppsCompareTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsExtractTaskHeaders extends $tea.Model {
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

export class CreateContractAppsExtractTaskRequest extends $tea.Model {
  contractFile?: CreateContractAppsExtractTaskRequestContractFile;
  contractFileDownloadUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contractFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  extractKeys?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  fileSource?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      contractFile: 'contractFile',
      contractFileDownloadUrl: 'contractFileDownloadUrl',
      contractFileName: 'contractFileName',
      extractKeys: 'extractKeys',
      fileSource: 'fileSource',
      requestId: 'requestId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractFile: CreateContractAppsExtractTaskRequestContractFile,
      contractFileDownloadUrl: 'string',
      contractFileName: 'string',
      extractKeys: { 'type': 'array', 'itemType': 'string' },
      fileSource: 'string',
      requestId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsExtractTaskResponseBody extends $tea.Model {
  result?: CreateContractAppsExtractTaskResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateContractAppsExtractTaskResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsExtractTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateContractAppsExtractTaskResponseBody;
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
      body: CreateContractAppsExtractTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsReviewTaskHeaders extends $tea.Model {
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

export class CreateContractAppsReviewTaskRequest extends $tea.Model {
  contractFile?: CreateContractAppsReviewTaskRequestContractFile;
  contractFileDownloadUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contractFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileSource?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  reviewCustomRules?: CreateContractAppsReviewTaskRequestReviewCustomRules[];
  ruleType?: string;
  standpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      contractFile: 'contractFile',
      contractFileDownloadUrl: 'contractFileDownloadUrl',
      contractFileName: 'contractFileName',
      fileSource: 'fileSource',
      requestId: 'requestId',
      reviewCustomRules: 'reviewCustomRules',
      ruleType: 'ruleType',
      standpoint: 'standpoint',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractFile: CreateContractAppsReviewTaskRequestContractFile,
      contractFileDownloadUrl: 'string',
      contractFileName: 'string',
      fileSource: 'string',
      requestId: 'string',
      reviewCustomRules: { 'type': 'array', 'itemType': CreateContractAppsReviewTaskRequestReviewCustomRules },
      ruleType: 'string',
      standpoint: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsReviewTaskResponseBody extends $tea.Model {
  result?: CreateContractAppsReviewTaskResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateContractAppsReviewTaskResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsReviewTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateContractAppsReviewTaskResponseBody;
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
      body: CreateContractAppsReviewTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsTermsExtractEaskHeaders extends $tea.Model {
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

export class CreateContractAppsTermsExtractEaskRequest extends $tea.Model {
  contractFile?: CreateContractAppsTermsExtractEaskRequestContractFile;
  contractFileDownloadUrl?: string;
  contractFileName?: string;
  extractRules?: CreateContractAppsTermsExtractEaskRequestExtractRules[];
  fileSource?: string;
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      contractFile: 'contractFile',
      contractFileDownloadUrl: 'contractFileDownloadUrl',
      contractFileName: 'contractFileName',
      extractRules: 'extractRules',
      fileSource: 'fileSource',
      requestId: 'requestId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractFile: CreateContractAppsTermsExtractEaskRequestContractFile,
      contractFileDownloadUrl: 'string',
      contractFileName: 'string',
      extractRules: { 'type': 'array', 'itemType': CreateContractAppsTermsExtractEaskRequestExtractRules },
      fileSource: 'string',
      requestId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsTermsExtractEaskResponseBody extends $tea.Model {
  result?: CreateContractAppsTermsExtractEaskResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateContractAppsTermsExtractEaskResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsTermsExtractEaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateContractAppsTermsExtractEaskResponseBody;
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
      body: CreateContractAppsTermsExtractEaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractCompareTaskHeaders extends $tea.Model {
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

export class CreateContractCompareTaskRequest extends $tea.Model {
  comparativeFile?: CreateContractCompareTaskRequestComparativeFile;
  comparativeFileDownloadUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  comparativeFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileSource?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  standardFile?: CreateContractCompareTaskRequestStandardFile;
  standardFileDownloadUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  standardFileName?: string;
  static names(): { [key: string]: string } {
    return {
      comparativeFile: 'comparativeFile',
      comparativeFileDownloadUrl: 'comparativeFileDownloadUrl',
      comparativeFileName: 'comparativeFileName',
      fileSource: 'fileSource',
      requestId: 'requestId',
      standardFile: 'standardFile',
      standardFileDownloadUrl: 'standardFileDownloadUrl',
      standardFileName: 'standardFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparativeFile: CreateContractCompareTaskRequestComparativeFile,
      comparativeFileDownloadUrl: 'string',
      comparativeFileName: 'string',
      fileSource: 'string',
      requestId: 'string',
      standardFile: CreateContractCompareTaskRequestStandardFile,
      standardFileDownloadUrl: 'string',
      standardFileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractCompareTaskResponseBody extends $tea.Model {
  result?: CreateContractCompareTaskResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateContractCompareTaskResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractCompareTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateContractCompareTaskResponseBody;
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
      body: CreateContractCompareTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractExtractTaskHeaders extends $tea.Model {
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

export class CreateContractExtractTaskRequest extends $tea.Model {
  /**
   * **if can be null:**
   * false
   */
  contractFile?: CreateContractExtractTaskRequestContractFile;
  contractFileDownloadUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contractFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  extractKeys?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  fileSource?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contractFile: 'contractFile',
      contractFileDownloadUrl: 'contractFileDownloadUrl',
      contractFileName: 'contractFileName',
      extractKeys: 'extractKeys',
      fileSource: 'fileSource',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractFile: CreateContractExtractTaskRequestContractFile,
      contractFileDownloadUrl: 'string',
      contractFileName: 'string',
      extractKeys: { 'type': 'array', 'itemType': 'string' },
      fileSource: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractExtractTaskResponseBody extends $tea.Model {
  result?: CreateContractExtractTaskResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateContractExtractTaskResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractExtractTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateContractExtractTaskResponseBody;
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
      body: CreateContractExtractTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractReviewHeaders extends $tea.Model {
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

export class CreateContractReviewRequest extends $tea.Model {
  companyList?: string[];
  customReviewRules?: string;
  fileInfo?: CreateContractReviewRequestFileInfo;
  originatorUserId?: string;
  reviewPosition?: string;
  reviewResultType?: string;
  reviewType?: string;
  static names(): { [key: string]: string } {
    return {
      companyList: 'companyList',
      customReviewRules: 'customReviewRules',
      fileInfo: 'fileInfo',
      originatorUserId: 'originatorUserId',
      reviewPosition: 'reviewPosition',
      reviewResultType: 'reviewResultType',
      reviewType: 'reviewType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyList: { 'type': 'array', 'itemType': 'string' },
      customReviewRules: 'string',
      fileInfo: CreateContractReviewRequestFileInfo,
      originatorUserId: 'string',
      reviewPosition: 'string',
      reviewResultType: 'string',
      reviewType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractReviewResponseBody extends $tea.Model {
  result?: CreateContractReviewResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateContractReviewResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractReviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateContractReviewResponseBody;
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
      body: CreateContractReviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractReviewTaskHeaders extends $tea.Model {
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

export class CreateContractReviewTaskRequest extends $tea.Model {
  /**
   * **if can be null:**
   * false
   */
  contractFile?: CreateContractReviewTaskRequestContractFile;
  contractFileDownloadUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 采购合同.doc
   */
  contractFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileSource?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  reviewCustomRules?: CreateContractReviewTaskRequestReviewCustomRules[];
  /**
   * @example
   * model
   */
  ruleType?: string;
  /**
   * @example
   * 0
   */
  standpoint?: string;
  static names(): { [key: string]: string } {
    return {
      contractFile: 'contractFile',
      contractFileDownloadUrl: 'contractFileDownloadUrl',
      contractFileName: 'contractFileName',
      fileSource: 'fileSource',
      requestId: 'requestId',
      reviewCustomRules: 'reviewCustomRules',
      ruleType: 'ruleType',
      standpoint: 'standpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractFile: CreateContractReviewTaskRequestContractFile,
      contractFileDownloadUrl: 'string',
      contractFileName: 'string',
      fileSource: 'string',
      requestId: 'string',
      reviewCustomRules: { 'type': 'array', 'itemType': CreateContractReviewTaskRequestReviewCustomRules },
      ruleType: 'string',
      standpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractReviewTaskResponseBody extends $tea.Model {
  result?: CreateContractReviewTaskResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateContractReviewTaskResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractReviewTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateContractReviewTaskResponseBody;
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
      body: CreateContractReviewTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignQueryApprovalInfoHeaders extends $tea.Model {
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

export class EsignQueryApprovalInfoRequest extends $tea.Model {
  /**
   * @example
   * dingd0c871e2dfc941a34ac5d6980864d335
   */
  corpId?: string;
  /**
   * @example
   * 5556ae0359c64c4b9491c0c3c339341f
   */
  esignFlowId?: string;
  /**
   * @example
   * PbnhW6rVXRg8u6T4NiiOwwQiEiE
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      esignFlowId: 'esignFlowId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      esignFlowId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignQueryApprovalInfoResponseBody extends $tea.Model {
  result?: EsignQueryApprovalInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: EsignQueryApprovalInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignQueryApprovalInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EsignQueryApprovalInfoResponseBody;
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
      body: EsignQueryApprovalInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignQueryGrantInfoHeaders extends $tea.Model {
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

export class EsignQueryGrantInfoRequest extends $tea.Model {
  /**
   * @example
   * dingd0c871e2dfc941a34ac5d6980864d335
   */
  corpId?: string;
  extension?: { [key: string]: string };
  /**
   * @example
   * PbnhW6rVXRg8u6T4NiiOwwQiEiE
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      extension: 'extension',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignQueryGrantInfoResponseBody extends $tea.Model {
  result?: EsignQueryGrantInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: EsignQueryGrantInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignQueryGrantInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EsignQueryGrantInfoResponseBody;
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
      body: EsignQueryGrantInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignQueryIdentityByTicketHeaders extends $tea.Model {
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

export class EsignQueryIdentityByTicketRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingd0c871e2dfc941a34ac5d6980864d335
   */
  corpId?: string;
  extension?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * feb4b8e5-d6d9-4d22-a6b8-c8e26823a73a
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      extension: 'extension',
      ticket: 'ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignQueryIdentityByTicketResponseBody extends $tea.Model {
  result?: EsignQueryIdentityByTicketResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: EsignQueryIdentityByTicketResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignQueryIdentityByTicketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EsignQueryIdentityByTicketResponseBody;
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
      body: EsignQueryIdentityByTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignSyncEventHeaders extends $tea.Model {
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

export class EsignSyncEventRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * openEsign
   */
  action?: string;
  /**
   * @example
   * dingd0c871e2dfc941a34ac5d6980864d335
   */
  corpId?: string;
  /**
   * @example
   * {"name": "名字"}
   */
  esignData?: string;
  extension?: { [key: string]: string };
  /**
   * @example
   * PbnhW6rVXRg8u6T4NiiOwwQiEiE
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      corpId: 'corpId',
      esignData: 'esignData',
      extension: 'extension',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      corpId: 'string',
      esignData: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignSyncEventResponseBody extends $tea.Model {
  result?: EsignSyncEventResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: EsignSyncEventResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignSyncEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EsignSyncEventResponseBody;
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
      body: EsignSyncEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignUserVerifyHeaders extends $tea.Model {
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

export class EsignUserVerifyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingbfc7ac3ddee0c1acffe93478753d9884
   */
  corpId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1Wgkx59vuKA8u6T4NiiOwwQiEiE
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignUserVerifyResponseBody extends $tea.Model {
  result?: EsignUserVerifyResponseBodyResult;
  /**
   * @remarks
   * This parameter is required.
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
      result: EsignUserVerifyResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignUserVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EsignUserVerifyResponseBody;
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
      body: EsignUserVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishReviewOrderHeaders extends $tea.Model {
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

export class FinishReviewOrderRequest extends $tea.Model {
  endFiles?: FinishReviewOrderRequestEndFiles[];
  /**
   * @example
   * {}
   */
  extension?: string;
  /**
   * @example
   * 12345678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      endFiles: 'endFiles',
      extension: 'extension',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endFiles: { 'type': 'array', 'itemType': FinishReviewOrderRequestEndFiles },
      extension: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishReviewOrderResponseBody extends $tea.Model {
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

export class FinishReviewOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FinishReviewOrderResponseBody;
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
      body: FinishReviewOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractAnalysisResultHeaders extends $tea.Model {
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

export class GetContractAnalysisResultRequest extends $tea.Model {
  fileInfo?: GetContractAnalysisResultRequestFileInfo;
  originatorUserId?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfo: 'fileInfo',
      originatorUserId: 'originatorUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfo: GetContractAnalysisResultRequestFileInfo,
      originatorUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractAnalysisResultResponseBody extends $tea.Model {
  companyList?: string[];
  reviewPositions?: string[];
  reviewType?: string;
  wordCount?: number;
  static names(): { [key: string]: string } {
    return {
      companyList: 'companyList',
      reviewPositions: 'reviewPositions',
      reviewType: 'reviewType',
      wordCount: 'wordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyList: { 'type': 'array', 'itemType': 'string' },
      reviewPositions: { 'type': 'array', 'itemType': 'string' },
      reviewType: 'string',
      wordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractAnalysisResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetContractAnalysisResultResponseBody;
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
      body: GetContractAnalysisResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewBenefitHeaders extends $tea.Model {
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

export class GetContractReviewBenefitRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  reviewType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      reviewType: 'reviewType',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewBenefitResponseBody extends $tea.Model {
  result?: GetContractReviewBenefitResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetContractReviewBenefitResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewBenefitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetContractReviewBenefitResponseBody;
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
      body: GetContractReviewBenefitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewResultHeaders extends $tea.Model {
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

export class GetContractReviewResultRequest extends $tea.Model {
  body?: GetContractReviewResultRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetContractReviewResultRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewResultShrinkRequest extends $tea.Model {
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewResultResponseBody extends $tea.Model {
  result?: GetContractReviewResultResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetContractReviewResultResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetContractReviewResultResponseBody;
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
      body: GetContractReviewResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractSubjectRiskResultHeaders extends $tea.Model {
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

export class GetContractSubjectRiskResultRequest extends $tea.Model {
  reviewType?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      reviewType: 'reviewType',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractSubjectRiskResultResponseBody extends $tea.Model {
  subjectRiskResponses?: GetContractSubjectRiskResultResponseBodySubjectRiskResponses[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      subjectRiskResponses: 'subjectRiskResponses',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subjectRiskResponses: { 'type': 'array', 'itemType': GetContractSubjectRiskResultResponseBodySubjectRiskResponses },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractSubjectRiskResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetContractSubjectRiskResultResponseBody;
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
      body: GetContractSubjectRiskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenEsignFreeTrailHeaders extends $tea.Model {
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

export class OpenEsignFreeTrailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  corpId?: string;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      extension: 'extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenEsignFreeTrailResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  result?: OpenEsignFreeTrailResponseBodyResult;
  /**
   * @remarks
   * This parameter is required.
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
      result: OpenEsignFreeTrailResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenEsignFreeTrailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenEsignFreeTrailResponseBody;
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
      body: OpenEsignFreeTrailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvancedContractVersionHeaders extends $tea.Model {
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

export class QueryAdvancedContractVersionRequest extends $tea.Model {
  /**
   * @example
   * dingff048f704a8b6d8e4ac5d6980864d335
   */
  corpId?: string;
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      extension: 'extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvancedContractVersionResponseBody extends $tea.Model {
  result?: QueryAdvancedContractVersionResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: QueryAdvancedContractVersionResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvancedContractVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAdvancedContractVersionResponseBody;
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
      body: QueryAdvancedContractVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsCompareResultHeaders extends $tea.Model {
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

export class QueryContractAppsCompareResultRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  compareTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      compareTaskId: 'compareTaskId',
      requestId: 'requestId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareTaskId: 'string',
      requestId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsCompareResultResponseBody extends $tea.Model {
  result?: QueryContractAppsCompareResultResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: QueryContractAppsCompareResultResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsCompareResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryContractAppsCompareResultResponseBody;
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
      body: QueryContractAppsCompareResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsExtractResultHeaders extends $tea.Model {
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

export class QueryContractAppsExtractResultRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  extractTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      extractTaskId: 'extractTaskId',
      requestId: 'requestId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractTaskId: 'string',
      requestId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsExtractResultResponseBody extends $tea.Model {
  result?: QueryContractAppsExtractResultResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: QueryContractAppsExtractResultResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsExtractResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryContractAppsExtractResultResponseBody;
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
      body: QueryContractAppsExtractResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsReviewResultHeaders extends $tea.Model {
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

export class QueryContractAppsReviewResultRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  reviewTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      reviewTaskId: 'reviewTaskId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reviewTaskId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsReviewResultResponseBody extends $tea.Model {
  result?: QueryContractAppsReviewResultResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: QueryContractAppsReviewResultResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsReviewResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryContractAppsReviewResultResponseBody;
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
      body: QueryContractAppsReviewResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsTermsExtractResultHeaders extends $tea.Model {
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

export class QueryContractAppsTermsExtractResultRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  extractTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      extractTaskId: 'extractTaskId',
      requestId: 'requestId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractTaskId: 'string',
      requestId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsTermsExtractResultResponseBody extends $tea.Model {
  result?: QueryContractAppsTermsExtractResultResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: QueryContractAppsTermsExtractResultResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsTermsExtractResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryContractAppsTermsExtractResultResponseBody;
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
      body: QueryContractAppsTermsExtractResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractCompareResultHeaders extends $tea.Model {
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

export class QueryContractCompareResultRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  compareTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compareTaskId: 'compareTaskId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractCompareResultResponseBody extends $tea.Model {
  result?: QueryContractCompareResultResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: QueryContractCompareResultResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractCompareResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryContractCompareResultResponseBody;
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
      body: QueryContractCompareResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractExtractResultHeaders extends $tea.Model {
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

export class QueryContractExtractResultRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  extractTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      extractTaskId: 'extractTaskId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractExtractResultResponseBody extends $tea.Model {
  result?: QueryContractExtractResultResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: QueryContractExtractResultResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractExtractResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryContractExtractResultResponseBody;
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
      body: QueryContractExtractResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractReviewResultHeaders extends $tea.Model {
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

export class QueryContractReviewResultRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  reviewTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      reviewTaskId: 'reviewTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reviewTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractReviewResultResponseBody extends $tea.Model {
  result?: QueryContractReviewResultResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: QueryContractReviewResultResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractReviewResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryContractReviewResultResponseBody;
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
      body: QueryContractReviewResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractSignInfoHeaders extends $tea.Model {
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

export class QueryContractSignInfoRequest extends $tea.Model {
  contractBizId?: string;
  corpId?: string;
  staffId?: string;
  static names(): { [key: string]: string } {
    return {
      contractBizId: 'contractBizId',
      corpId: 'corpId',
      staffId: 'staffId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractBizId: 'string',
      corpId: 'string',
      staffId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractSignInfoResponseBody extends $tea.Model {
  result?: QueryContractSignInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: QueryContractSignInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractSignInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryContractSignInfoResponseBody;
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
      body: QueryContractSignInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendContractCardHeaders extends $tea.Model {
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

export class SendContractCardRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * signing
   */
  cardType?: string;
  contractInfo?: SendContractCardRequestContractInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ding5f62ac8a3c24952ebc961a6cb783455b
   */
  corpId?: string;
  extension?: { [key: string]: string };
  /**
   * @example
   * PROC_Xxxxxxxx
   */
  processInstanceId?: string;
  receiveGroups?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  receivers?: SendContractCardRequestReceivers[];
  /**
   * @remarks
   * This parameter is required.
   */
  sender?: SendContractCardRequestSender;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  syncSingleChat?: boolean;
  static names(): { [key: string]: string } {
    return {
      cardType: 'cardType',
      contractInfo: 'contractInfo',
      corpId: 'corpId',
      extension: 'extension',
      processInstanceId: 'processInstanceId',
      receiveGroups: 'receiveGroups',
      receivers: 'receivers',
      sender: 'sender',
      syncSingleChat: 'syncSingleChat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardType: 'string',
      contractInfo: SendContractCardRequestContractInfo,
      corpId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      processInstanceId: 'string',
      receiveGroups: { 'type': 'array', 'itemType': 'string' },
      receivers: { 'type': 'array', 'itemType': SendContractCardRequestReceivers },
      sender: SendContractCardRequestSender,
      syncSingleChat: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendContractCardResponseBody extends $tea.Model {
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

export class SendContractCardResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendContractCardResponseBody;
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
      body: SendContractCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSignEventHeaders extends $tea.Model {
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

export class SyncSignEventRequest extends $tea.Model {
  contractBizId?: string;
  corpId?: string;
  extInfo?: { [key: string]: string };
  sealType?: string[];
  signDate?: number;
  signFileList?: SyncSignEventRequestSignFileList[];
  staffId?: string;
  static names(): { [key: string]: string } {
    return {
      contractBizId: 'contractBizId',
      corpId: 'corpId',
      extInfo: 'extInfo',
      sealType: 'sealType',
      signDate: 'signDate',
      signFileList: 'signFileList',
      staffId: 'staffId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractBizId: 'string',
      corpId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sealType: { 'type': 'array', 'itemType': 'string' },
      signDate: 'number',
      signFileList: { 'type': 'array', 'itemType': SyncSignEventRequestSignFileList },
      staffId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSignEventShrinkRequest extends $tea.Model {
  contractBizId?: string;
  corpId?: string;
  extInfoShrink?: string;
  sealTypeShrink?: string;
  signDate?: number;
  signFileListShrink?: string;
  staffId?: string;
  static names(): { [key: string]: string } {
    return {
      contractBizId: 'contractBizId',
      corpId: 'corpId',
      extInfoShrink: 'extInfo',
      sealTypeShrink: 'sealType',
      signDate: 'signDate',
      signFileListShrink: 'signFileList',
      staffId: 'staffId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractBizId: 'string',
      corpId: 'string',
      extInfoShrink: 'string',
      sealTypeShrink: 'string',
      signDate: 'number',
      signFileListShrink: 'string',
      staffId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSignEventResponseBody extends $tea.Model {
  result?: SyncSignEventResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: SyncSignEventResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSignEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncSignEventResponseBody;
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
      body: SyncSignEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelReviewOrderRequestEndFiles extends $tea.Model {
  fileName?: string;
  fileSize?: string;
  fileType?: string;
  fileVersion?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      fileVersion: 'fileVersion',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'string',
      fileType: 'string',
      fileVersion: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContractAiReviewResultNotifyRequestAnnotationsCommentTexts extends $tea.Model {
  remark?: string;
  riskLevel?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'remark',
      riskLevel: 'riskLevel',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      riskLevel: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContractAiReviewResultNotifyRequestAnnotations extends $tea.Model {
  commentTexts?: ContractAiReviewResultNotifyRequestAnnotationsCommentTexts[];
  id?: number;
  originalText?: string;
  paragraph?: string;
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      commentTexts: 'commentTexts',
      id: 'id',
      originalText: 'originalText',
      paragraph: 'paragraph',
      riskLevel: 'riskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentTexts: { 'type': 'array', 'itemType': ContractAiReviewResultNotifyRequestAnnotationsCommentTexts },
      id: 'number',
      originalText: 'string',
      paragraph: 'string',
      riskLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContractBenefitConsumeResponseBodyResult extends $tea.Model {
  consumeResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      consumeResult: 'consumeResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsCompareTaskRequestComparativeFile extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsCompareTaskRequestStandardFile extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsCompareTaskResponseBodyResultData extends $tea.Model {
  compareTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      compareTaskId: 'compareTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsCompareTaskResponseBodyResult extends $tea.Model {
  data?: CreateContractAppsCompareTaskResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateContractAppsCompareTaskResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsExtractTaskRequestContractFile extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsExtractTaskResponseBodyResultData extends $tea.Model {
  extractTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      extractTaskId: 'extractTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsExtractTaskResponseBodyResult extends $tea.Model {
  data?: CreateContractAppsExtractTaskResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateContractAppsExtractTaskResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsReviewTaskRequestContractFile extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsReviewTaskRequestReviewCustomRules extends $tea.Model {
  riskLevel?: string;
  ruleDesc?: string;
  ruleSequence?: string;
  ruleTag?: string;
  ruleTitle?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'riskLevel',
      ruleDesc: 'ruleDesc',
      ruleSequence: 'ruleSequence',
      ruleTag: 'ruleTag',
      ruleTitle: 'ruleTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      ruleDesc: 'string',
      ruleSequence: 'string',
      ruleTag: 'string',
      ruleTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsReviewTaskResponseBodyResultData extends $tea.Model {
  reviewTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      reviewTaskId: 'reviewTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsReviewTaskResponseBodyResult extends $tea.Model {
  data?: CreateContractAppsReviewTaskResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateContractAppsReviewTaskResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsTermsExtractEaskRequestContractFile extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsTermsExtractEaskRequestExtractRulesTermRules extends $tea.Model {
  description?: string;
  termCategory?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      termCategory: 'termCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      termCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsTermsExtractEaskRequestExtractRules extends $tea.Model {
  ruleCategory?: string;
  termRules?: CreateContractAppsTermsExtractEaskRequestExtractRulesTermRules[];
  static names(): { [key: string]: string } {
    return {
      ruleCategory: 'ruleCategory',
      termRules: 'termRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCategory: 'string',
      termRules: { 'type': 'array', 'itemType': CreateContractAppsTermsExtractEaskRequestExtractRulesTermRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsTermsExtractEaskResponseBodyResultData extends $tea.Model {
  extractTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      extractTaskId: 'extractTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractAppsTermsExtractEaskResponseBodyResult extends $tea.Model {
  data?: CreateContractAppsTermsExtractEaskResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateContractAppsTermsExtractEaskResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractCompareTaskRequestComparativeFile extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractCompareTaskRequestStandardFile extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractCompareTaskResponseBodyResultData extends $tea.Model {
  compareTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      compareTaskId: 'compareTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractCompareTaskResponseBodyResult extends $tea.Model {
  data?: CreateContractCompareTaskResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateContractCompareTaskResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractExtractTaskRequestContractFile extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractExtractTaskResponseBodyResultData extends $tea.Model {
  extractTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      extractTaskId: 'extractTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractExtractTaskResponseBodyResult extends $tea.Model {
  data?: CreateContractExtractTaskResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateContractExtractTaskResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractReviewRequestFileInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fileId?: string;
  fileName?: string;
  fileSize?: string;
  fileType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractReviewResponseBodyResult extends $tea.Model {
  planFinishTime?: number;
  reviewType?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      planFinishTime: 'planFinishTime',
      reviewType: 'reviewType',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planFinishTime: 'number',
      reviewType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractReviewTaskRequestContractFile extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractReviewTaskRequestReviewCustomRules extends $tea.Model {
  /**
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @example
   * 审查合同金额大小，不得低于1000元
   */
  ruleDesc?: string;
  /**
   * @example
   * 1.1
   */
  ruleSequence?: string;
  /**
   * @example
   * 金额相关规则
   */
  ruleTag?: string;
  /**
   * @example
   * 合同金额校验
   */
  ruleTitle?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'riskLevel',
      ruleDesc: 'ruleDesc',
      ruleSequence: 'ruleSequence',
      ruleTag: 'ruleTag',
      ruleTitle: 'ruleTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      ruleDesc: 'string',
      ruleSequence: 'string',
      ruleTag: 'string',
      ruleTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractReviewTaskResponseBodyResultData extends $tea.Model {
  reviewTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      reviewTaskId: 'reviewTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContractReviewTaskResponseBodyResult extends $tea.Model {
  data?: CreateContractReviewTaskResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateContractReviewTaskResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignQueryApprovalInfoResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 202311081619000455501
   */
  bpmsProcessBusinessId?: string;
  /**
   * @example
   * O6wNhB4wTMajvNW8Dc_Rjg09301699431585
   */
  bpmsProcessInstanceId?: string;
  /**
   * @example
   * https://aflow.dingtalk.com/dingtalk/pc/query/pchomepage.htm?corpid=ding6c3948a9e37c439c35c2f4657eb6378f&swfrom=https://n.dingtalk.com/dingding/h5-contract/contractPC/index.html#/approval?procInstId=O6wNhB4wTMajvNW8Dc_Rjg09301699431585
   */
  bpmsProcessInstanceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      bpmsProcessBusinessId: 'bpmsProcessBusinessId',
      bpmsProcessInstanceId: 'bpmsProcessInstanceId',
      bpmsProcessInstanceUrl: 'bpmsProcessInstanceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpmsProcessBusinessId: 'string',
      bpmsProcessInstanceId: 'string',
      bpmsProcessInstanceUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignQueryGrantInfoResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 何一兵
   */
  legalPerson?: string;
  /**
   * @example
   * 18667021101
   */
  mobilePhoneNumber?: string;
  /**
   * @example
   * 杭州天谷信息科技有限公司
   */
  orgName?: string;
  /**
   * @example
   * 86
   */
  stateCode?: string;
  /**
   * @example
   * 913301087458306077
   */
  unifiedSocialCredit?: string;
  /**
   * @example
   * 某人名
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      legalPerson: 'legalPerson',
      mobilePhoneNumber: 'mobilePhoneNumber',
      orgName: 'orgName',
      stateCode: 'stateCode',
      unifiedSocialCredit: 'unifiedSocialCredit',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      legalPerson: 'string',
      mobilePhoneNumber: 'string',
      orgName: 'string',
      stateCode: 'string',
      unifiedSocialCredit: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EsignQueryIdentityByTicketResponseBodyResult extends $tea.Model {
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

export class EsignSyncEventResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 外部服务异常
   */
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

export class EsignUserVerifyResponseBodyResult extends $tea.Model {
  canAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      canAccess: 'canAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canAccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishReviewOrderRequestEndFiles extends $tea.Model {
  /**
   * @example
   * 合同文件
   */
  fileName?: string;
  /**
   * @example
   * 12
   */
  fileSize?: string;
  /**
   * @example
   * word
   */
  fileType?: string;
  /**
   * @example
   * 0
   */
  fileVersion?: number;
  /**
   * @example
   * http://oss.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      fileVersion: 'fileVersion',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'string',
      fileType: 'string',
      fileVersion: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractAnalysisResultRequestFileInfo extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewBenefitResponseBodyResultBenefitResponses extends $tea.Model {
  code?: string;
  restBenefit?: number;
  usedBenefit?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      restBenefit: 'restBenefit',
      usedBenefit: 'usedBenefit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      restBenefit: 'number',
      usedBenefit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewBenefitResponseBodyResult extends $tea.Model {
  benefitResponses?: GetContractReviewBenefitResponseBodyResultBenefitResponses[];
  static names(): { [key: string]: string } {
    return {
      benefitResponses: 'benefitResponses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitResponses: { 'type': 'array', 'itemType': GetContractReviewBenefitResponseBodyResultBenefitResponses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewResultRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  reviewType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      reviewType: 'reviewType',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewResultResponseBodyResultAnnotationsCommentTexts extends $tea.Model {
  remark?: string;
  riskLevel?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'remark',
      riskLevel: 'riskLevel',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      riskLevel: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewResultResponseBodyResultAnnotations extends $tea.Model {
  commentTexts?: GetContractReviewResultResponseBodyResultAnnotationsCommentTexts[];
  id?: number;
  originalText?: string;
  paragraph?: string;
  riskLevel?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      commentTexts: 'commentTexts',
      id: 'id',
      originalText: 'originalText',
      paragraph: 'paragraph',
      riskLevel: 'riskLevel',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentTexts: { 'type': 'array', 'itemType': GetContractReviewResultResponseBodyResultAnnotationsCommentTexts },
      id: 'number',
      originalText: 'string',
      paragraph: 'string',
      riskLevel: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewResultResponseBodyResultSummary extends $tea.Model {
  riskLevel?: string;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'riskLevel',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractReviewResultResponseBodyResult extends $tea.Model {
  annotations?: GetContractReviewResultResponseBodyResultAnnotations[];
  clearWordPath?: string;
  reviewType?: string;
  status?: string;
  summary?: GetContractReviewResultResponseBodyResultSummary;
  wordPath?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      clearWordPath: 'clearWordPath',
      reviewType: 'reviewType',
      status: 'status',
      summary: 'summary',
      wordPath: 'wordPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': GetContractReviewResultResponseBodyResultAnnotations },
      clearWordPath: 'string',
      reviewType: 'string',
      status: 'string',
      summary: GetContractReviewResultResponseBodyResultSummary,
      wordPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractSubjectRiskResultResponseBodySubjectRiskResponsesSubjectBaseInfoResponse extends $tea.Model {
  creditCode?: string;
  establishTime?: number;
  legalPersonName?: string;
  regLocation?: string;
  static names(): { [key: string]: string } {
    return {
      creditCode: 'creditCode',
      establishTime: 'establishTime',
      legalPersonName: 'legalPersonName',
      regLocation: 'regLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditCode: 'string',
      establishTime: 'number',
      legalPersonName: 'string',
      regLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractSubjectRiskResultResponseBodySubjectRiskResponsesSubjectRiskListResponse extends $tea.Model {
  isSubjectExist?: boolean;
  riskTypes?: string[];
  risks?: { [key: string]: any };
  totalRiskNumber?: number;
  static names(): { [key: string]: string } {
    return {
      isSubjectExist: 'isSubjectExist',
      riskTypes: 'riskTypes',
      risks: 'risks',
      totalRiskNumber: 'totalRiskNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSubjectExist: 'boolean',
      riskTypes: { 'type': 'array', 'itemType': 'string' },
      risks: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      totalRiskNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContractSubjectRiskResultResponseBodySubjectRiskResponses extends $tea.Model {
  subjectBaseInfoResponse?: GetContractSubjectRiskResultResponseBodySubjectRiskResponsesSubjectBaseInfoResponse;
  subjectName?: string;
  subjectRiskListResponse?: GetContractSubjectRiskResultResponseBodySubjectRiskResponsesSubjectRiskListResponse;
  static names(): { [key: string]: string } {
    return {
      subjectBaseInfoResponse: 'subjectBaseInfoResponse',
      subjectName: 'subjectName',
      subjectRiskListResponse: 'subjectRiskListResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subjectBaseInfoResponse: GetContractSubjectRiskResultResponseBodySubjectRiskResponsesSubjectBaseInfoResponse,
      subjectName: 'string',
      subjectRiskListResponse: GetContractSubjectRiskResultResponseBodySubjectRiskResponsesSubjectRiskListResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenEsignFreeTrailResponseBodyResult extends $tea.Model {
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvancedContractVersionResponseBodyResult extends $tea.Model {
  enableEsignAttachmentSign?: boolean;
  extension?: { [key: string]: string };
  /**
   * @example
   * advanced
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enableEsignAttachmentSign: 'enableEsignAttachmentSign',
      extension: 'extension',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEsignAttachmentSign: 'boolean',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsCompareResultResponseBodyResultDataCompareDetailDetails extends $tea.Model {
  compareWords?: string;
  originalWords?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      compareWords: 'compareWords',
      originalWords: 'originalWords',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareWords: 'string',
      originalWords: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsCompareResultResponseBodyResultDataCompareDetailDifferenceCount extends $tea.Model {
  add?: number;
  delete?: number;
  replace?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      add: 'add',
      delete: 'delete',
      replace: 'replace',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: 'number',
      delete: 'number',
      replace: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsCompareResultResponseBodyResultDataCompareDetail extends $tea.Model {
  details?: QueryContractAppsCompareResultResponseBodyResultDataCompareDetailDetails[];
  differenceCount?: QueryContractAppsCompareResultResponseBodyResultDataCompareDetailDifferenceCount;
  static names(): { [key: string]: string } {
    return {
      details: 'details',
      differenceCount: 'differenceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': QueryContractAppsCompareResultResponseBodyResultDataCompareDetailDetails },
      differenceCount: QueryContractAppsCompareResultResponseBodyResultDataCompareDetailDifferenceCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsCompareResultResponseBodyResultData extends $tea.Model {
  compareDetail?: QueryContractAppsCompareResultResponseBodyResultDataCompareDetail;
  compareDetailUrl?: string;
  compareStatus?: string;
  static names(): { [key: string]: string } {
    return {
      compareDetail: 'compareDetail',
      compareDetailUrl: 'compareDetailUrl',
      compareStatus: 'compareStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareDetail: QueryContractAppsCompareResultResponseBodyResultDataCompareDetail,
      compareDetailUrl: 'string',
      compareStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsCompareResultResponseBodyResult extends $tea.Model {
  data?: QueryContractAppsCompareResultResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryContractAppsCompareResultResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsExtractResultResponseBodyResultDataExtractEntities extends $tea.Model {
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

export class QueryContractAppsExtractResultResponseBodyResultData extends $tea.Model {
  extractEntities?: QueryContractAppsExtractResultResponseBodyResultDataExtractEntities[];
  extractStatus?: string;
  static names(): { [key: string]: string } {
    return {
      extractEntities: 'extractEntities',
      extractStatus: 'extractStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractEntities: { 'type': 'array', 'itemType': QueryContractAppsExtractResultResponseBodyResultDataExtractEntities },
      extractStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsExtractResultResponseBodyResult extends $tea.Model {
  data?: QueryContractAppsExtractResultResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryContractAppsExtractResultResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsReviewResultResponseBodyResultDataReviewRiskDetailSubRisks extends $tea.Model {
  originalContent?: string;
  resultContent?: string;
  resultType?: string;
  riskBrief?: string;
  riskClause?: string;
  riskExplain?: string;
  static names(): { [key: string]: string } {
    return {
      originalContent: 'originalContent',
      resultContent: 'resultContent',
      resultType: 'resultType',
      riskBrief: 'riskBrief',
      riskClause: 'riskClause',
      riskExplain: 'riskExplain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalContent: 'string',
      resultContent: 'string',
      resultType: 'string',
      riskBrief: 'string',
      riskClause: 'string',
      riskExplain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsReviewResultResponseBodyResultDataReviewRiskDetail extends $tea.Model {
  examineBrief?: string;
  examineResult?: string;
  examineStatus?: string;
  riskLevel?: string;
  ruleSequence?: string;
  ruleTag?: string;
  ruleTitle?: string;
  subRisks?: QueryContractAppsReviewResultResponseBodyResultDataReviewRiskDetailSubRisks[];
  static names(): { [key: string]: string } {
    return {
      examineBrief: 'examineBrief',
      examineResult: 'examineResult',
      examineStatus: 'examineStatus',
      riskLevel: 'riskLevel',
      ruleSequence: 'ruleSequence',
      ruleTag: 'ruleTag',
      ruleTitle: 'ruleTitle',
      subRisks: 'subRisks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      examineBrief: 'string',
      examineResult: 'string',
      examineStatus: 'string',
      riskLevel: 'string',
      ruleSequence: 'string',
      ruleTag: 'string',
      ruleTitle: 'string',
      subRisks: { 'type': 'array', 'itemType': QueryContractAppsReviewResultResponseBodyResultDataReviewRiskDetailSubRisks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsReviewResultResponseBodyResultDataReviewRiskOverview extends $tea.Model {
  hasRisk?: boolean;
  highRisk?: number;
  lowRisk?: number;
  mediumRisk?: number;
  static names(): { [key: string]: string } {
    return {
      hasRisk: 'hasRisk',
      highRisk: 'highRisk',
      lowRisk: 'lowRisk',
      mediumRisk: 'mediumRisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasRisk: 'boolean',
      highRisk: 'number',
      lowRisk: 'number',
      mediumRisk: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsReviewResultResponseBodyResultDataReviewStatus extends $tea.Model {
  overview?: string;
  result?: string;
  rule?: string;
  stage?: string;
  static names(): { [key: string]: string } {
    return {
      overview: 'overview',
      result: 'result',
      rule: 'rule',
      stage: 'stage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overview: 'string',
      result: 'string',
      rule: 'string',
      stage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsReviewResultResponseBodyResultData extends $tea.Model {
  reviewRiskDetail?: QueryContractAppsReviewResultResponseBodyResultDataReviewRiskDetail[];
  reviewRiskOverview?: QueryContractAppsReviewResultResponseBodyResultDataReviewRiskOverview;
  reviewStatus?: QueryContractAppsReviewResultResponseBodyResultDataReviewStatus;
  static names(): { [key: string]: string } {
    return {
      reviewRiskDetail: 'reviewRiskDetail',
      reviewRiskOverview: 'reviewRiskOverview',
      reviewStatus: 'reviewStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewRiskDetail: { 'type': 'array', 'itemType': QueryContractAppsReviewResultResponseBodyResultDataReviewRiskDetail },
      reviewRiskOverview: QueryContractAppsReviewResultResponseBodyResultDataReviewRiskOverview,
      reviewStatus: QueryContractAppsReviewResultResponseBodyResultDataReviewStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsReviewResultResponseBodyResult extends $tea.Model {
  data?: QueryContractAppsReviewResultResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryContractAppsReviewResultResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsTermsExtractResultResponseBodyResultDataExtractedContentsTermContents extends $tea.Model {
  detailTerm?: string;
  exist?: string;
  shortTerm?: string;
  termCategory?: string;
  static names(): { [key: string]: string } {
    return {
      detailTerm: 'detailTerm',
      exist: 'exist',
      shortTerm: 'shortTerm',
      termCategory: 'termCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailTerm: 'string',
      exist: 'string',
      shortTerm: 'string',
      termCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsTermsExtractResultResponseBodyResultDataExtractedContents extends $tea.Model {
  ruleCategory?: string;
  termContents?: QueryContractAppsTermsExtractResultResponseBodyResultDataExtractedContentsTermContents[];
  static names(): { [key: string]: string } {
    return {
      ruleCategory: 'ruleCategory',
      termContents: 'termContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCategory: 'string',
      termContents: { 'type': 'array', 'itemType': QueryContractAppsTermsExtractResultResponseBodyResultDataExtractedContentsTermContents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsTermsExtractResultResponseBodyResultData extends $tea.Model {
  extractedContents?: QueryContractAppsTermsExtractResultResponseBodyResultDataExtractedContents[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      extractedContents: 'extractedContents',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractedContents: { 'type': 'array', 'itemType': QueryContractAppsTermsExtractResultResponseBodyResultDataExtractedContents },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractAppsTermsExtractResultResponseBodyResult extends $tea.Model {
  data?: QueryContractAppsTermsExtractResultResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryContractAppsTermsExtractResultResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractCompareResultResponseBodyResultDataCompareDetailDetails extends $tea.Model {
  compareWords?: string;
  originalWords?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      compareWords: 'compareWords',
      originalWords: 'originalWords',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareWords: 'string',
      originalWords: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractCompareResultResponseBodyResultDataCompareDetailDifferenceCount extends $tea.Model {
  add?: number;
  delete?: number;
  replace?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      add: 'add',
      delete: 'delete',
      replace: 'replace',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: 'number',
      delete: 'number',
      replace: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractCompareResultResponseBodyResultDataCompareDetail extends $tea.Model {
  details?: QueryContractCompareResultResponseBodyResultDataCompareDetailDetails[];
  differenceCount?: QueryContractCompareResultResponseBodyResultDataCompareDetailDifferenceCount;
  static names(): { [key: string]: string } {
    return {
      details: 'details',
      differenceCount: 'differenceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': QueryContractCompareResultResponseBodyResultDataCompareDetailDetails },
      differenceCount: QueryContractCompareResultResponseBodyResultDataCompareDetailDifferenceCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractCompareResultResponseBodyResultData extends $tea.Model {
  compareDetail?: QueryContractCompareResultResponseBodyResultDataCompareDetail;
  compareDetailUrl?: string;
  compareStatus?: string;
  static names(): { [key: string]: string } {
    return {
      compareDetail: 'compareDetail',
      compareDetailUrl: 'compareDetailUrl',
      compareStatus: 'compareStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareDetail: QueryContractCompareResultResponseBodyResultDataCompareDetail,
      compareDetailUrl: 'string',
      compareStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractCompareResultResponseBodyResult extends $tea.Model {
  data?: QueryContractCompareResultResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryContractCompareResultResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractExtractResultResponseBodyResultDataExtractEntities extends $tea.Model {
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

export class QueryContractExtractResultResponseBodyResultData extends $tea.Model {
  extractEntities?: QueryContractExtractResultResponseBodyResultDataExtractEntities[];
  extractStatus?: string;
  static names(): { [key: string]: string } {
    return {
      extractEntities: 'extractEntities',
      extractStatus: 'extractStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractEntities: { 'type': 'array', 'itemType': QueryContractExtractResultResponseBodyResultDataExtractEntities },
      extractStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractExtractResultResponseBodyResult extends $tea.Model {
  data?: QueryContractExtractResultResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryContractExtractResultResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractReviewResultResponseBodyResultDataReviewRiskDetailSubRisks extends $tea.Model {
  originalContent?: string;
  resultContent?: string;
  resultType?: string;
  riskBrief?: string;
  riskClause?: string;
  riskExplain?: string;
  static names(): { [key: string]: string } {
    return {
      originalContent: 'originalContent',
      resultContent: 'resultContent',
      resultType: 'resultType',
      riskBrief: 'riskBrief',
      riskClause: 'riskClause',
      riskExplain: 'riskExplain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalContent: 'string',
      resultContent: 'string',
      resultType: 'string',
      riskBrief: 'string',
      riskClause: 'string',
      riskExplain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractReviewResultResponseBodyResultDataReviewRiskDetail extends $tea.Model {
  examineBrief?: string;
  examineResult?: string;
  examineStatus?: string;
  riskLevel?: string;
  ruleSequence?: string;
  ruleTag?: string;
  ruleTitle?: string;
  subRisks?: QueryContractReviewResultResponseBodyResultDataReviewRiskDetailSubRisks[];
  static names(): { [key: string]: string } {
    return {
      examineBrief: 'examineBrief',
      examineResult: 'examineResult',
      examineStatus: 'examineStatus',
      riskLevel: 'riskLevel',
      ruleSequence: 'ruleSequence',
      ruleTag: 'ruleTag',
      ruleTitle: 'ruleTitle',
      subRisks: 'subRisks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      examineBrief: 'string',
      examineResult: 'string',
      examineStatus: 'string',
      riskLevel: 'string',
      ruleSequence: 'string',
      ruleTag: 'string',
      ruleTitle: 'string',
      subRisks: { 'type': 'array', 'itemType': QueryContractReviewResultResponseBodyResultDataReviewRiskDetailSubRisks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractReviewResultResponseBodyResultDataReviewRiskOverview extends $tea.Model {
  hasRisk?: boolean;
  highRisk?: number;
  lowRisk?: number;
  mediumRisk?: number;
  static names(): { [key: string]: string } {
    return {
      hasRisk: 'hasRisk',
      highRisk: 'highRisk',
      lowRisk: 'lowRisk',
      mediumRisk: 'mediumRisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasRisk: 'boolean',
      highRisk: 'number',
      lowRisk: 'number',
      mediumRisk: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractReviewResultResponseBodyResultDataReviewStatus extends $tea.Model {
  overview?: string;
  result?: string;
  rule?: string;
  stage?: string;
  static names(): { [key: string]: string } {
    return {
      overview: 'overview',
      result: 'result',
      rule: 'rule',
      stage: 'stage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overview: 'string',
      result: 'string',
      rule: 'string',
      stage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractReviewResultResponseBodyResultData extends $tea.Model {
  reviewRiskDetail?: QueryContractReviewResultResponseBodyResultDataReviewRiskDetail[];
  reviewRiskOverview?: QueryContractReviewResultResponseBodyResultDataReviewRiskOverview;
  reviewStatus?: QueryContractReviewResultResponseBodyResultDataReviewStatus;
  static names(): { [key: string]: string } {
    return {
      reviewRiskDetail: 'reviewRiskDetail',
      reviewRiskOverview: 'reviewRiskOverview',
      reviewStatus: 'reviewStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewRiskDetail: { 'type': 'array', 'itemType': QueryContractReviewResultResponseBodyResultDataReviewRiskDetail },
      reviewRiskOverview: QueryContractReviewResultResponseBodyResultDataReviewRiskOverview,
      reviewStatus: QueryContractReviewResultResponseBodyResultDataReviewStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractReviewResultResponseBodyResult extends $tea.Model {
  data?: QueryContractReviewResultResponseBodyResultData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryContractReviewResultResponseBodyResultData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractSignInfoResponseBodyResultActualOriginator extends $tea.Model {
  name?: string;
  staffId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      staffId: 'staffId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      staffId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractSignInfoResponseBodyResultContractAttachmentFiles extends $tea.Model {
  fileDownloadUrl?: string;
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: number;
  static names(): { [key: string]: string } {
    return {
      fileDownloadUrl: 'fileDownloadUrl',
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileDownloadUrl: 'string',
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractSignInfoResponseBodyResultContractContentFiles extends $tea.Model {
  fileDownloadUrl?: string;
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: number;
  static names(): { [key: string]: string } {
    return {
      fileDownloadUrl: 'fileDownloadUrl',
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileDownloadUrl: 'string',
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractSignInfoResponseBodyResultOppositeParties extends $tea.Model {
  code?: string;
  name?: string;
  owner?: string;
  phoneNumber?: string;
  type?: string;
  uniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      owner: 'owner',
      phoneNumber: 'phoneNumber',
      type: 'type',
      uniqueCode: 'uniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      owner: 'string',
      phoneNumber: 'string',
      type: 'string',
      uniqueCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractSignInfoResponseBodyResultOurParties extends $tea.Model {
  code?: string;
  name?: string;
  owner?: string;
  phoneNumber?: string;
  type?: string;
  uniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      owner: 'owner',
      phoneNumber: 'phoneNumber',
      type: 'type',
      uniqueCode: 'uniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      owner: 'string',
      phoneNumber: 'string',
      type: 'string',
      uniqueCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractSignInfoResponseBodyResultSigners extends $tea.Model {
  name?: string;
  staffId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      staffId: 'staffId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      staffId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContractSignInfoResponseBodyResult extends $tea.Model {
  actualOriginator?: QueryContractSignInfoResponseBodyResultActualOriginator;
  amountType?: string;
  applicantDate?: number;
  approveTime?: number;
  bizId?: string;
  contractAmount?: string;
  contractAmountMethod?: string;
  contractAttachmentFiles?: QueryContractSignInfoResponseBodyResultContractAttachmentFiles[];
  contractContentFiles?: QueryContractSignInfoResponseBodyResultContractContentFiles[];
  contractEndDate?: number;
  contractId?: number;
  contractName?: string;
  contractNo?: string;
  contractRemark?: string;
  contractStartDate?: number;
  contractStatus?: string;
  contractTermType?: string;
  currencyCode?: string;
  deptName?: string;
  directoryName?: string;
  effectiveStatus?: string;
  gmtCreate?: number;
  gmtModified?: number;
  oppositeParties?: QueryContractSignInfoResponseBodyResultOppositeParties[];
  ourParties?: QueryContractSignInfoResponseBodyResultOurParties[];
  ownerName?: string;
  ownerStaffId?: string;
  processInstanceId?: string;
  signers?: QueryContractSignInfoResponseBodyResultSigners[];
  static names(): { [key: string]: string } {
    return {
      actualOriginator: 'actualOriginator',
      amountType: 'amountType',
      applicantDate: 'applicantDate',
      approveTime: 'approveTime',
      bizId: 'bizId',
      contractAmount: 'contractAmount',
      contractAmountMethod: 'contractAmountMethod',
      contractAttachmentFiles: 'contractAttachmentFiles',
      contractContentFiles: 'contractContentFiles',
      contractEndDate: 'contractEndDate',
      contractId: 'contractId',
      contractName: 'contractName',
      contractNo: 'contractNo',
      contractRemark: 'contractRemark',
      contractStartDate: 'contractStartDate',
      contractStatus: 'contractStatus',
      contractTermType: 'contractTermType',
      currencyCode: 'currencyCode',
      deptName: 'deptName',
      directoryName: 'directoryName',
      effectiveStatus: 'effectiveStatus',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      oppositeParties: 'oppositeParties',
      ourParties: 'ourParties',
      ownerName: 'ownerName',
      ownerStaffId: 'ownerStaffId',
      processInstanceId: 'processInstanceId',
      signers: 'signers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualOriginator: QueryContractSignInfoResponseBodyResultActualOriginator,
      amountType: 'string',
      applicantDate: 'number',
      approveTime: 'number',
      bizId: 'string',
      contractAmount: 'string',
      contractAmountMethod: 'string',
      contractAttachmentFiles: { 'type': 'array', 'itemType': QueryContractSignInfoResponseBodyResultContractAttachmentFiles },
      contractContentFiles: { 'type': 'array', 'itemType': QueryContractSignInfoResponseBodyResultContractContentFiles },
      contractEndDate: 'number',
      contractId: 'number',
      contractName: 'string',
      contractNo: 'string',
      contractRemark: 'string',
      contractStartDate: 'number',
      contractStatus: 'string',
      contractTermType: 'string',
      currencyCode: 'string',
      deptName: 'string',
      directoryName: 'string',
      effectiveStatus: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      oppositeParties: { 'type': 'array', 'itemType': QueryContractSignInfoResponseBodyResultOppositeParties },
      ourParties: { 'type': 'array', 'itemType': QueryContractSignInfoResponseBodyResultOurParties },
      ownerName: 'string',
      ownerStaffId: 'string',
      processInstanceId: 'string',
      signers: { 'type': 'array', 'itemType': QueryContractSignInfoResponseBodyResultSigners },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendContractCardRequestContractInfo extends $tea.Model {
  /**
   * @example
   * HT_xxxxxxx
   */
  contractCode?: string;
  /**
   * @example
   * 合同
   */
  contractName?: string;
  /**
   * @example
   * 1242153453
   */
  createTime?: number;
  /**
   * @example
   * 张三
   */
  signUserName?: string;
  static names(): { [key: string]: string } {
    return {
      contractCode: 'contractCode',
      contractName: 'contractName',
      createTime: 'createTime',
      signUserName: 'signUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractCode: 'string',
      contractName: 'string',
      createTime: 'number',
      signUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendContractCardRequestReceivers extends $tea.Model {
  /**
   * @example
   * ding5f62ac8a3c24952ebc961a6cb783455b
   */
  corpId?: string;
  /**
   * @example
   * 1622265907855672
   */
  userId?: string;
  /**
   * @example
   * 可以为空
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      userId: 'userId',
      userType: 'userType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendContractCardRequestSender extends $tea.Model {
  /**
   * @example
   * ding5f62ac8a3c24952ebc961a6cb783455b
   */
  corpId?: string;
  /**
   * @example
   * 1622265907855672
   */
  userId?: string;
  /**
   * @example
   * 可以为空
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      userId: 'userId',
      userType: 'userType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSignEventRequestSignFileList extends $tea.Model {
  fileDownloadUrl?: string;
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileDownloadUrl: 'fileDownloadUrl',
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileDownloadUrl: 'string',
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSignEventResponseBodyResult extends $tea.Model {
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
   * 智能法务取消合同审查
   * 
   * @param request - CancelContractReviewRequest
   * @param headers - CancelContractReviewHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelContractReviewResponse
   */
  async cancelContractReviewWithOptions(request: CancelContractReviewRequest, headers: CancelContractReviewHeaders, runtime: $Util.RuntimeOptions): Promise<CancelContractReviewResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.reviewType)) {
      body["reviewType"] = request.reviewType;
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
      action: "CancelContractReview",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/review/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CancelContractReviewResponse>(await this.execute(params, req, runtime), new CancelContractReviewResponse({}));
  }

  /**
   * 智能法务取消合同审查
   * 
   * @param request - CancelContractReviewRequest
   * @returns CancelContractReviewResponse
   */
  async cancelContractReview(request: CancelContractReviewRequest): Promise<CancelContractReviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CancelContractReviewHeaders({ });
    return await this.cancelContractReviewWithOptions(request, headers, runtime);
  }

  /**
   * 取消审查工单接口
   * 
   * @param request - CancelReviewOrderRequest
   * @param headers - CancelReviewOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelReviewOrderResponse
   */
  async cancelReviewOrderWithOptions(request: CancelReviewOrderRequest, headers: CancelReviewOrderHeaders, runtime: $Util.RuntimeOptions): Promise<CancelReviewOrderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endFiles)) {
      body["endFiles"] = request.endFiles;
    }

    if (!Util.isUnset(request.extension)) {
      body["extension"] = request.extension;
    }

    if (!Util.isUnset(request.orderId)) {
      body["orderId"] = request.orderId;
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
      action: "CancelReviewOrder",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/reviews/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CancelReviewOrderResponse>(await this.execute(params, req, runtime), new CancelReviewOrderResponse({}));
  }

  /**
   * 取消审查工单接口
   * 
   * @param request - CancelReviewOrderRequest
   * @returns CancelReviewOrderResponse
   */
  async cancelReviewOrder(request: CancelReviewOrderRequest): Promise<CancelReviewOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CancelReviewOrderHeaders({ });
    return await this.cancelReviewOrderWithOptions(request, headers, runtime);
  }

  /**
   * 查询esign文件是否正常
   * 
   * @param request - CheckEsignFileRequest
   * @param headers - CheckEsignFileHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckEsignFileResponse
   */
  async checkEsignFileWithOptions(request: CheckEsignFileRequest, headers: CheckEsignFileHeaders, runtime: $Util.RuntimeOptions): Promise<CheckEsignFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.fileId)) {
      body["fileId"] = request.fileId;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["spaceId"] = request.spaceId;
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
      action: "CheckEsignFile",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/esignFiles/check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CheckEsignFileResponse>(await this.execute(params, req, runtime), new CheckEsignFileResponse({}));
  }

  /**
   * 查询esign文件是否正常
   * 
   * @param request - CheckEsignFileRequest
   * @returns CheckEsignFileResponse
   */
  async checkEsignFile(request: CheckEsignFileRequest): Promise<CheckEsignFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CheckEsignFileHeaders({ });
    return await this.checkEsignFileWithOptions(request, headers, runtime);
  }

  /**
   * ai合同审查结果回调
   * 
   * @param request - ContractAiReviewResultNotifyRequest
   * @param headers - ContractAiReviewResultNotifyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContractAiReviewResultNotifyResponse
   */
  async contractAiReviewResultNotifyWithOptions(request: ContractAiReviewResultNotifyRequest, headers: ContractAiReviewResultNotifyHeaders, runtime: $Util.RuntimeOptions): Promise<ContractAiReviewResultNotifyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.annotations)) {
      body["annotations"] = request.annotations;
    }

    if (!Util.isUnset(request.contractAiReviewCorpId)) {
      body["contractAiReviewCorpId"] = request.contractAiReviewCorpId;
    }

    if (!Util.isUnset(request.contractAiReviewId)) {
      body["contractAiReviewId"] = request.contractAiReviewId;
    }

    if (!Util.isUnset(request.errorCode)) {
      body["errorCode"] = request.errorCode;
    }

    if (!Util.isUnset(request.errorMsg)) {
      body["errorMsg"] = request.errorMsg;
    }

    if (!Util.isUnset(request.extension)) {
      body["extension"] = request.extension;
    }

    if (!Util.isUnset(request.success)) {
      body["success"] = request.success;
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
      action: "ContractAiReviewResultNotify",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/aiReviews/results/notify`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ContractAiReviewResultNotifyResponse>(await this.execute(params, req, runtime), new ContractAiReviewResultNotifyResponse({}));
  }

  /**
   * ai合同审查结果回调
   * 
   * @param request - ContractAiReviewResultNotifyRequest
   * @returns ContractAiReviewResultNotifyResponse
   */
  async contractAiReviewResultNotify(request: ContractAiReviewResultNotifyRequest): Promise<ContractAiReviewResultNotifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ContractAiReviewResultNotifyHeaders({ });
    return await this.contractAiReviewResultNotifyWithOptions(request, headers, runtime);
  }

  /**
   * 合同权益核销
   * 
   * @param request - ContractBenefitConsumeRequest
   * @param headers - ContractBenefitConsumeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContractBenefitConsumeResponse
   */
  async contractBenefitConsumeWithOptions(request: ContractBenefitConsumeRequest, headers: ContractBenefitConsumeHeaders, runtime: $Util.RuntimeOptions): Promise<ContractBenefitConsumeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.benefitPoint)) {
      body["benefitPoint"] = request.benefitPoint;
    }

    if (!Util.isUnset(request.bizRequestId)) {
      body["bizRequestId"] = request.bizRequestId;
    }

    if (!Util.isUnset(request.consumeQuota)) {
      body["consumeQuota"] = request.consumeQuota;
    }

    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.extParams)) {
      body["extParams"] = request.extParams;
    }

    if (!Util.isUnset(request.isvCorpId)) {
      body["isvCorpId"] = request.isvCorpId;
    }

    if (!Util.isUnset(request.optUnionId)) {
      body["optUnionId"] = request.optUnionId;
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
      action: "ContractBenefitConsume",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/benefits/consume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ContractBenefitConsumeResponse>(await this.execute(params, req, runtime), new ContractBenefitConsumeResponse({}));
  }

  /**
   * 合同权益核销
   * 
   * @param request - ContractBenefitConsumeRequest
   * @returns ContractBenefitConsumeResponse
   */
  async contractBenefitConsume(request: ContractBenefitConsumeRequest): Promise<ContractBenefitConsumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ContractBenefitConsumeHeaders({ });
    return await this.contractBenefitConsumeWithOptions(request, headers, runtime);
  }

  /**
   * 创建合同比对任务
   * 
   * @param request - CreateContractAppsCompareTaskRequest
   * @param headers - CreateContractAppsCompareTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContractAppsCompareTaskResponse
   */
  async createContractAppsCompareTaskWithOptions(request: CreateContractAppsCompareTaskRequest, headers: CreateContractAppsCompareTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateContractAppsCompareTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.comparativeFile)) {
      body["comparativeFile"] = request.comparativeFile;
    }

    if (!Util.isUnset(request.comparativeFileDownloadUrl)) {
      body["comparativeFileDownloadUrl"] = request.comparativeFileDownloadUrl;
    }

    if (!Util.isUnset(request.comparativeFileName)) {
      body["comparativeFileName"] = request.comparativeFileName;
    }

    if (!Util.isUnset(request.fileSource)) {
      body["fileSource"] = request.fileSource;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.standardFile)) {
      body["standardFile"] = request.standardFile;
    }

    if (!Util.isUnset(request.standardFileDownloadUrl)) {
      body["standardFileDownloadUrl"] = request.standardFileDownloadUrl;
    }

    if (!Util.isUnset(request.standardFileName)) {
      body["standardFileName"] = request.standardFileName;
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
      action: "CreateContractAppsCompareTask",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/apps/comparisonTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateContractAppsCompareTaskResponse>(await this.execute(params, req, runtime), new CreateContractAppsCompareTaskResponse({}));
  }

  /**
   * 创建合同比对任务
   * 
   * @param request - CreateContractAppsCompareTaskRequest
   * @returns CreateContractAppsCompareTaskResponse
   */
  async createContractAppsCompareTask(request: CreateContractAppsCompareTaskRequest): Promise<CreateContractAppsCompareTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateContractAppsCompareTaskHeaders({ });
    return await this.createContractAppsCompareTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建合同提取任务
   * 
   * @param request - CreateContractAppsExtractTaskRequest
   * @param headers - CreateContractAppsExtractTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContractAppsExtractTaskResponse
   */
  async createContractAppsExtractTaskWithOptions(request: CreateContractAppsExtractTaskRequest, headers: CreateContractAppsExtractTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateContractAppsExtractTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contractFile)) {
      body["contractFile"] = request.contractFile;
    }

    if (!Util.isUnset(request.contractFileDownloadUrl)) {
      body["contractFileDownloadUrl"] = request.contractFileDownloadUrl;
    }

    if (!Util.isUnset(request.contractFileName)) {
      body["contractFileName"] = request.contractFileName;
    }

    if (!Util.isUnset(request.extractKeys)) {
      body["extractKeys"] = request.extractKeys;
    }

    if (!Util.isUnset(request.fileSource)) {
      body["fileSource"] = request.fileSource;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
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
      action: "CreateContractAppsExtractTask",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/apps/extractTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateContractAppsExtractTaskResponse>(await this.execute(params, req, runtime), new CreateContractAppsExtractTaskResponse({}));
  }

  /**
   * 创建合同提取任务
   * 
   * @param request - CreateContractAppsExtractTaskRequest
   * @returns CreateContractAppsExtractTaskResponse
   */
  async createContractAppsExtractTask(request: CreateContractAppsExtractTaskRequest): Promise<CreateContractAppsExtractTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateContractAppsExtractTaskHeaders({ });
    return await this.createContractAppsExtractTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建合同审查任务
   * 
   * @param request - CreateContractAppsReviewTaskRequest
   * @param headers - CreateContractAppsReviewTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContractAppsReviewTaskResponse
   */
  async createContractAppsReviewTaskWithOptions(request: CreateContractAppsReviewTaskRequest, headers: CreateContractAppsReviewTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateContractAppsReviewTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contractFile)) {
      body["contractFile"] = request.contractFile;
    }

    if (!Util.isUnset(request.contractFileDownloadUrl)) {
      body["contractFileDownloadUrl"] = request.contractFileDownloadUrl;
    }

    if (!Util.isUnset(request.contractFileName)) {
      body["contractFileName"] = request.contractFileName;
    }

    if (!Util.isUnset(request.fileSource)) {
      body["fileSource"] = request.fileSource;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.reviewCustomRules)) {
      body["reviewCustomRules"] = request.reviewCustomRules;
    }

    if (!Util.isUnset(request.ruleType)) {
      body["ruleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.standpoint)) {
      body["standpoint"] = request.standpoint;
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
      action: "CreateContractAppsReviewTask",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/apps/reviewTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateContractAppsReviewTaskResponse>(await this.execute(params, req, runtime), new CreateContractAppsReviewTaskResponse({}));
  }

  /**
   * 创建合同审查任务
   * 
   * @param request - CreateContractAppsReviewTaskRequest
   * @returns CreateContractAppsReviewTaskResponse
   */
  async createContractAppsReviewTask(request: CreateContractAppsReviewTaskRequest): Promise<CreateContractAppsReviewTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateContractAppsReviewTaskHeaders({ });
    return await this.createContractAppsReviewTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建合同条款抽取任务
   * 
   * @param request - CreateContractAppsTermsExtractEaskRequest
   * @param headers - CreateContractAppsTermsExtractEaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContractAppsTermsExtractEaskResponse
   */
  async createContractAppsTermsExtractEaskWithOptions(request: CreateContractAppsTermsExtractEaskRequest, headers: CreateContractAppsTermsExtractEaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateContractAppsTermsExtractEaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contractFile)) {
      body["contractFile"] = request.contractFile;
    }

    if (!Util.isUnset(request.contractFileDownloadUrl)) {
      body["contractFileDownloadUrl"] = request.contractFileDownloadUrl;
    }

    if (!Util.isUnset(request.contractFileName)) {
      body["contractFileName"] = request.contractFileName;
    }

    if (!Util.isUnset(request.extractRules)) {
      body["extractRules"] = request.extractRules;
    }

    if (!Util.isUnset(request.fileSource)) {
      body["fileSource"] = request.fileSource;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
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
      action: "CreateContractAppsTermsExtractEask",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/apps/termsExtractTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateContractAppsTermsExtractEaskResponse>(await this.execute(params, req, runtime), new CreateContractAppsTermsExtractEaskResponse({}));
  }

  /**
   * 创建合同条款抽取任务
   * 
   * @param request - CreateContractAppsTermsExtractEaskRequest
   * @returns CreateContractAppsTermsExtractEaskResponse
   */
  async createContractAppsTermsExtractEask(request: CreateContractAppsTermsExtractEaskRequest): Promise<CreateContractAppsTermsExtractEaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateContractAppsTermsExtractEaskHeaders({ });
    return await this.createContractAppsTermsExtractEaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建合同比对任务
   * 
   * @param request - CreateContractCompareTaskRequest
   * @param headers - CreateContractCompareTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContractCompareTaskResponse
   */
  async createContractCompareTaskWithOptions(request: CreateContractCompareTaskRequest, headers: CreateContractCompareTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateContractCompareTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.comparativeFile)) {
      body["comparativeFile"] = request.comparativeFile;
    }

    if (!Util.isUnset(request.comparativeFileDownloadUrl)) {
      body["comparativeFileDownloadUrl"] = request.comparativeFileDownloadUrl;
    }

    if (!Util.isUnset(request.comparativeFileName)) {
      body["comparativeFileName"] = request.comparativeFileName;
    }

    if (!Util.isUnset(request.fileSource)) {
      body["fileSource"] = request.fileSource;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.standardFile)) {
      body["standardFile"] = request.standardFile;
    }

    if (!Util.isUnset(request.standardFileDownloadUrl)) {
      body["standardFileDownloadUrl"] = request.standardFileDownloadUrl;
    }

    if (!Util.isUnset(request.standardFileName)) {
      body["standardFileName"] = request.standardFileName;
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
      action: "CreateContractCompareTask",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/comparisonTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateContractCompareTaskResponse>(await this.execute(params, req, runtime), new CreateContractCompareTaskResponse({}));
  }

  /**
   * 创建合同比对任务
   * 
   * @param request - CreateContractCompareTaskRequest
   * @returns CreateContractCompareTaskResponse
   */
  async createContractCompareTask(request: CreateContractCompareTaskRequest): Promise<CreateContractCompareTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateContractCompareTaskHeaders({ });
    return await this.createContractCompareTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建合同提取任务
   * 
   * @param request - CreateContractExtractTaskRequest
   * @param headers - CreateContractExtractTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContractExtractTaskResponse
   */
  async createContractExtractTaskWithOptions(request: CreateContractExtractTaskRequest, headers: CreateContractExtractTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateContractExtractTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contractFile)) {
      body["contractFile"] = request.contractFile;
    }

    if (!Util.isUnset(request.contractFileDownloadUrl)) {
      body["contractFileDownloadUrl"] = request.contractFileDownloadUrl;
    }

    if (!Util.isUnset(request.contractFileName)) {
      body["contractFileName"] = request.contractFileName;
    }

    if (!Util.isUnset(request.extractKeys)) {
      body["extractKeys"] = request.extractKeys;
    }

    if (!Util.isUnset(request.fileSource)) {
      body["fileSource"] = request.fileSource;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
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
      action: "CreateContractExtractTask",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/extractTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateContractExtractTaskResponse>(await this.execute(params, req, runtime), new CreateContractExtractTaskResponse({}));
  }

  /**
   * 创建合同提取任务
   * 
   * @param request - CreateContractExtractTaskRequest
   * @returns CreateContractExtractTaskResponse
   */
  async createContractExtractTask(request: CreateContractExtractTaskRequest): Promise<CreateContractExtractTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateContractExtractTaskHeaders({ });
    return await this.createContractExtractTaskWithOptions(request, headers, runtime);
  }

  /**
   * 智能法务发起合同审查
   * 
   * @param request - CreateContractReviewRequest
   * @param headers - CreateContractReviewHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContractReviewResponse
   */
  async createContractReviewWithOptions(request: CreateContractReviewRequest, headers: CreateContractReviewHeaders, runtime: $Util.RuntimeOptions): Promise<CreateContractReviewResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.companyList)) {
      body["companyList"] = request.companyList;
    }

    if (!Util.isUnset(request.customReviewRules)) {
      body["customReviewRules"] = request.customReviewRules;
    }

    if (!Util.isUnset(request.fileInfo)) {
      body["fileInfo"] = request.fileInfo;
    }

    if (!Util.isUnset(request.originatorUserId)) {
      body["originatorUserId"] = request.originatorUserId;
    }

    if (!Util.isUnset(request.reviewPosition)) {
      body["reviewPosition"] = request.reviewPosition;
    }

    if (!Util.isUnset(request.reviewResultType)) {
      body["reviewResultType"] = request.reviewResultType;
    }

    if (!Util.isUnset(request.reviewType)) {
      body["reviewType"] = request.reviewType;
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
      action: "CreateContractReview",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/review/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateContractReviewResponse>(await this.execute(params, req, runtime), new CreateContractReviewResponse({}));
  }

  /**
   * 智能法务发起合同审查
   * 
   * @param request - CreateContractReviewRequest
   * @returns CreateContractReviewResponse
   */
  async createContractReview(request: CreateContractReviewRequest): Promise<CreateContractReviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateContractReviewHeaders({ });
    return await this.createContractReviewWithOptions(request, headers, runtime);
  }

  /**
   * 创建合同审查任务
   * 
   * @param request - CreateContractReviewTaskRequest
   * @param headers - CreateContractReviewTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContractReviewTaskResponse
   */
  async createContractReviewTaskWithOptions(request: CreateContractReviewTaskRequest, headers: CreateContractReviewTaskHeaders, runtime: $Util.RuntimeOptions): Promise<CreateContractReviewTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contractFile)) {
      body["contractFile"] = request.contractFile;
    }

    if (!Util.isUnset(request.contractFileDownloadUrl)) {
      body["contractFileDownloadUrl"] = request.contractFileDownloadUrl;
    }

    if (!Util.isUnset(request.contractFileName)) {
      body["contractFileName"] = request.contractFileName;
    }

    if (!Util.isUnset(request.fileSource)) {
      body["fileSource"] = request.fileSource;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.reviewCustomRules)) {
      body["reviewCustomRules"] = request.reviewCustomRules;
    }

    if (!Util.isUnset(request.ruleType)) {
      body["ruleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.standpoint)) {
      body["standpoint"] = request.standpoint;
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
      action: "CreateContractReviewTask",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/reviewTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateContractReviewTaskResponse>(await this.execute(params, req, runtime), new CreateContractReviewTaskResponse({}));
  }

  /**
   * 创建合同审查任务
   * 
   * @param request - CreateContractReviewTaskRequest
   * @returns CreateContractReviewTaskResponse
   */
  async createContractReviewTask(request: CreateContractReviewTaskRequest): Promise<CreateContractReviewTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateContractReviewTaskHeaders({ });
    return await this.createContractReviewTaskWithOptions(request, headers, runtime);
  }

  /**
   * 天谷侧查询审批单
   * 
   * @param request - EsignQueryApprovalInfoRequest
   * @param headers - EsignQueryApprovalInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EsignQueryApprovalInfoResponse
   */
  async esignQueryApprovalInfoWithOptions(request: EsignQueryApprovalInfoRequest, headers: EsignQueryApprovalInfoHeaders, runtime: $Util.RuntimeOptions): Promise<EsignQueryApprovalInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.esignFlowId)) {
      body["esignFlowId"] = request.esignFlowId;
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
      action: "EsignQueryApprovalInfo",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/esign/approvalInfos/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<EsignQueryApprovalInfoResponse>(await this.execute(params, req, runtime), new EsignQueryApprovalInfoResponse({}));
  }

  /**
   * 天谷侧查询审批单
   * 
   * @param request - EsignQueryApprovalInfoRequest
   * @returns EsignQueryApprovalInfoResponse
   */
  async esignQueryApprovalInfo(request: EsignQueryApprovalInfoRequest): Promise<EsignQueryApprovalInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EsignQueryApprovalInfoHeaders({ });
    return await this.esignQueryApprovalInfoWithOptions(request, headers, runtime);
  }

  /**
   * 天谷侧查询授权信息接口
   * 
   * @param request - EsignQueryGrantInfoRequest
   * @param headers - EsignQueryGrantInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EsignQueryGrantInfoResponse
   */
  async esignQueryGrantInfoWithOptions(request: EsignQueryGrantInfoRequest, headers: EsignQueryGrantInfoHeaders, runtime: $Util.RuntimeOptions): Promise<EsignQueryGrantInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.extension)) {
      body["extension"] = request.extension;
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
      action: "EsignQueryGrantInfo",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/esign/anthInfos/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<EsignQueryGrantInfoResponse>(await this.execute(params, req, runtime), new EsignQueryGrantInfoResponse({}));
  }

  /**
   * 天谷侧查询授权信息接口
   * 
   * @param request - EsignQueryGrantInfoRequest
   * @returns EsignQueryGrantInfoResponse
   */
  async esignQueryGrantInfo(request: EsignQueryGrantInfoRequest): Promise<EsignQueryGrantInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EsignQueryGrantInfoHeaders({ });
    return await this.esignQueryGrantInfoWithOptions(request, headers, runtime);
  }

  /**
   * 天谷侧查询获取免登信息
   * 
   * @param request - EsignQueryIdentityByTicketRequest
   * @param headers - EsignQueryIdentityByTicketHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EsignQueryIdentityByTicketResponse
   */
  async esignQueryIdentityByTicketWithOptions(request: EsignQueryIdentityByTicketRequest, headers: EsignQueryIdentityByTicketHeaders, runtime: $Util.RuntimeOptions): Promise<EsignQueryIdentityByTicketResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.extension)) {
      body["extension"] = request.extension;
    }

    if (!Util.isUnset(request.ticket)) {
      body["ticket"] = request.ticket;
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
      action: "EsignQueryIdentityByTicket",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/esign/tickets/identities/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<EsignQueryIdentityByTicketResponse>(await this.execute(params, req, runtime), new EsignQueryIdentityByTicketResponse({}));
  }

  /**
   * 天谷侧查询获取免登信息
   * 
   * @param request - EsignQueryIdentityByTicketRequest
   * @returns EsignQueryIdentityByTicketResponse
   */
  async esignQueryIdentityByTicket(request: EsignQueryIdentityByTicketRequest): Promise<EsignQueryIdentityByTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EsignQueryIdentityByTicketHeaders({ });
    return await this.esignQueryIdentityByTicketWithOptions(request, headers, runtime);
  }

  /**
   * e签宝电子签事件同步回传接口
   * 
   * @param request - EsignSyncEventRequest
   * @param headers - EsignSyncEventHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EsignSyncEventResponse
   */
  async esignSyncEventWithOptions(request: EsignSyncEventRequest, headers: EsignSyncEventHeaders, runtime: $Util.RuntimeOptions): Promise<EsignSyncEventResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.action)) {
      body["action"] = request.action;
    }

    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.esignData)) {
      body["esignData"] = request.esignData;
    }

    if (!Util.isUnset(request.extension)) {
      body["extension"] = request.extension;
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
      action: "EsignSyncEvent",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/esign/events/sync`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<EsignSyncEventResponse>(await this.execute(params, req, runtime), new EsignSyncEventResponse({}));
  }

  /**
   * e签宝电子签事件同步回传接口
   * 
   * @param request - EsignSyncEventRequest
   * @returns EsignSyncEventResponse
   */
  async esignSyncEvent(request: EsignSyncEventRequest): Promise<EsignSyncEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EsignSyncEventHeaders({ });
    return await this.esignSyncEventWithOptions(request, headers, runtime);
  }

  /**
   * 校验钉钉用户能否访问e签宝页面接口
   * 
   * @param request - EsignUserVerifyRequest
   * @param headers - EsignUserVerifyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EsignUserVerifyResponse
   */
  async esignUserVerifyWithOptions(request: EsignUserVerifyRequest, headers: EsignUserVerifyHeaders, runtime: $Util.RuntimeOptions): Promise<EsignUserVerifyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
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
      action: "EsignUserVerify",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/esign/user/verify`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<EsignUserVerifyResponse>(await this.execute(params, req, runtime), new EsignUserVerifyResponse({}));
  }

  /**
   * 校验钉钉用户能否访问e签宝页面接口
   * 
   * @param request - EsignUserVerifyRequest
   * @returns EsignUserVerifyResponse
   */
  async esignUserVerify(request: EsignUserVerifyRequest): Promise<EsignUserVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EsignUserVerifyHeaders({ });
    return await this.esignUserVerifyWithOptions(request, headers, runtime);
  }

  /**
   * 完成工单审查接口
   * 
   * @param request - FinishReviewOrderRequest
   * @param headers - FinishReviewOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FinishReviewOrderResponse
   */
  async finishReviewOrderWithOptions(request: FinishReviewOrderRequest, headers: FinishReviewOrderHeaders, runtime: $Util.RuntimeOptions): Promise<FinishReviewOrderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endFiles)) {
      body["endFiles"] = request.endFiles;
    }

    if (!Util.isUnset(request.extension)) {
      body["extension"] = request.extension;
    }

    if (!Util.isUnset(request.orderId)) {
      body["orderId"] = request.orderId;
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
      action: "FinishReviewOrder",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/reviews/finish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<FinishReviewOrderResponse>(await this.execute(params, req, runtime), new FinishReviewOrderResponse({}));
  }

  /**
   * 完成工单审查接口
   * 
   * @param request - FinishReviewOrderRequest
   * @returns FinishReviewOrderResponse
   */
  async finishReviewOrder(request: FinishReviewOrderRequest): Promise<FinishReviewOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FinishReviewOrderHeaders({ });
    return await this.finishReviewOrderWithOptions(request, headers, runtime);
  }

  /**
   * 获取合同解析结果
   * 
   * @param request - GetContractAnalysisResultRequest
   * @param headers - GetContractAnalysisResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContractAnalysisResultResponse
   */
  async getContractAnalysisResultWithOptions(request: GetContractAnalysisResultRequest, headers: GetContractAnalysisResultHeaders, runtime: $Util.RuntimeOptions): Promise<GetContractAnalysisResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileInfo)) {
      body["fileInfo"] = request.fileInfo;
    }

    if (!Util.isUnset(request.originatorUserId)) {
      body["originatorUserId"] = request.originatorUserId;
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
      action: "GetContractAnalysisResult",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/review/getContractAnalysisResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetContractAnalysisResultResponse>(await this.execute(params, req, runtime), new GetContractAnalysisResultResponse({}));
  }

  /**
   * 获取合同解析结果
   * 
   * @param request - GetContractAnalysisResultRequest
   * @returns GetContractAnalysisResultResponse
   */
  async getContractAnalysisResult(request: GetContractAnalysisResultRequest): Promise<GetContractAnalysisResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetContractAnalysisResultHeaders({ });
    return await this.getContractAnalysisResultWithOptions(request, headers, runtime);
  }

  /**
   * 智能法务查询合同审查权益
   * 
   * @param request - GetContractReviewBenefitRequest
   * @param headers - GetContractReviewBenefitHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContractReviewBenefitResponse
   */
  async getContractReviewBenefitWithOptions(request: GetContractReviewBenefitRequest, headers: GetContractReviewBenefitHeaders, runtime: $Util.RuntimeOptions): Promise<GetContractReviewBenefitResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.reviewType)) {
      body["reviewType"] = request.reviewType;
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
      action: "GetContractReviewBenefit",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/review/getBenefit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetContractReviewBenefitResponse>(await this.execute(params, req, runtime), new GetContractReviewBenefitResponse({}));
  }

  /**
   * 智能法务查询合同审查权益
   * 
   * @param request - GetContractReviewBenefitRequest
   * @returns GetContractReviewBenefitResponse
   */
  async getContractReviewBenefit(request: GetContractReviewBenefitRequest): Promise<GetContractReviewBenefitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetContractReviewBenefitHeaders({ });
    return await this.getContractReviewBenefitWithOptions(request, headers, runtime);
  }

  /**
   * 智能法务查询合同审查结果
   * 
   * @param tmpReq - GetContractReviewResultRequest
   * @param headers - GetContractReviewResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContractReviewResultResponse
   */
  async getContractReviewResultWithOptions(tmpReq: GetContractReviewResultRequest, headers: GetContractReviewResultHeaders, runtime: $Util.RuntimeOptions): Promise<GetContractReviewResultResponse> {
    Util.validateModel(tmpReq);
    let request = new GetContractReviewResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bodyShrink)) {
      query["body"] = request.bodyShrink;
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
      action: "GetContractReviewResult",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/review/getResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetContractReviewResultResponse>(await this.execute(params, req, runtime), new GetContractReviewResultResponse({}));
  }

  /**
   * 智能法务查询合同审查结果
   * 
   * @param request - GetContractReviewResultRequest
   * @returns GetContractReviewResultResponse
   */
  async getContractReviewResult(request: GetContractReviewResultRequest): Promise<GetContractReviewResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetContractReviewResultHeaders({ });
    return await this.getContractReviewResultWithOptions(request, headers, runtime);
  }

  /**
   * 获取合同主体风险结果
   * 
   * @param request - GetContractSubjectRiskResultRequest
   * @param headers - GetContractSubjectRiskResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContractSubjectRiskResultResponse
   */
  async getContractSubjectRiskResultWithOptions(request: GetContractSubjectRiskResultRequest, headers: GetContractSubjectRiskResultHeaders, runtime: $Util.RuntimeOptions): Promise<GetContractSubjectRiskResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.reviewType)) {
      body["reviewType"] = request.reviewType;
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
      action: "GetContractSubjectRiskResult",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/review/getSubjectRiskResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetContractSubjectRiskResultResponse>(await this.execute(params, req, runtime), new GetContractSubjectRiskResultResponse({}));
  }

  /**
   * 获取合同主体风险结果
   * 
   * @param request - GetContractSubjectRiskResultRequest
   * @returns GetContractSubjectRiskResultResponse
   */
  async getContractSubjectRiskResult(request: GetContractSubjectRiskResultRequest): Promise<GetContractSubjectRiskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetContractSubjectRiskResultHeaders({ });
    return await this.getContractSubjectRiskResultWithOptions(request, headers, runtime);
  }

  /**
   * 开通电子签免费试用
   * 
   * @param request - OpenEsignFreeTrailRequest
   * @param headers - OpenEsignFreeTrailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenEsignFreeTrailResponse
   */
  async openEsignFreeTrailWithOptions(request: OpenEsignFreeTrailRequest, headers: OpenEsignFreeTrailHeaders, runtime: $Util.RuntimeOptions): Promise<OpenEsignFreeTrailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.extension)) {
      body["extension"] = request.extension;
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
      action: "OpenEsignFreeTrail",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/openEsignFreeTrail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<OpenEsignFreeTrailResponse>(await this.execute(params, req, runtime), new OpenEsignFreeTrailResponse({}));
  }

  /**
   * 开通电子签免费试用
   * 
   * @param request - OpenEsignFreeTrailRequest
   * @returns OpenEsignFreeTrailResponse
   */
  async openEsignFreeTrail(request: OpenEsignFreeTrailRequest): Promise<OpenEsignFreeTrailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new OpenEsignFreeTrailHeaders({ });
    return await this.openEsignFreeTrailWithOptions(request, headers, runtime);
  }

  /**
   * e签宝查询智能合同版本接口
   * 
   * @param request - QueryAdvancedContractVersionRequest
   * @param headers - QueryAdvancedContractVersionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAdvancedContractVersionResponse
   */
  async queryAdvancedContractVersionWithOptions(request: QueryAdvancedContractVersionRequest, headers: QueryAdvancedContractVersionHeaders, runtime: $Util.RuntimeOptions): Promise<QueryAdvancedContractVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.extension)) {
      body["extension"] = request.extension;
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
      action: "QueryAdvancedContractVersion",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/versions/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryAdvancedContractVersionResponse>(await this.execute(params, req, runtime), new QueryAdvancedContractVersionResponse({}));
  }

  /**
   * e签宝查询智能合同版本接口
   * 
   * @param request - QueryAdvancedContractVersionRequest
   * @returns QueryAdvancedContractVersionResponse
   */
  async queryAdvancedContractVersion(request: QueryAdvancedContractVersionRequest): Promise<QueryAdvancedContractVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryAdvancedContractVersionHeaders({ });
    return await this.queryAdvancedContractVersionWithOptions(request, headers, runtime);
  }

  /**
   * 查询合同比对结果
   * 
   * @param request - QueryContractAppsCompareResultRequest
   * @param headers - QueryContractAppsCompareResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContractAppsCompareResultResponse
   */
  async queryContractAppsCompareResultWithOptions(request: QueryContractAppsCompareResultRequest, headers: QueryContractAppsCompareResultHeaders, runtime: $Util.RuntimeOptions): Promise<QueryContractAppsCompareResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.compareTaskId)) {
      body["compareTaskId"] = request.compareTaskId;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
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
      action: "QueryContractAppsCompareResult",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/apps/comparisonResults/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryContractAppsCompareResultResponse>(await this.execute(params, req, runtime), new QueryContractAppsCompareResultResponse({}));
  }

  /**
   * 查询合同比对结果
   * 
   * @param request - QueryContractAppsCompareResultRequest
   * @returns QueryContractAppsCompareResultResponse
   */
  async queryContractAppsCompareResult(request: QueryContractAppsCompareResultRequest): Promise<QueryContractAppsCompareResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryContractAppsCompareResultHeaders({ });
    return await this.queryContractAppsCompareResultWithOptions(request, headers, runtime);
  }

  /**
   * 查询合同提取结果
   * 
   * @param request - QueryContractAppsExtractResultRequest
   * @param headers - QueryContractAppsExtractResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContractAppsExtractResultResponse
   */
  async queryContractAppsExtractResultWithOptions(request: QueryContractAppsExtractResultRequest, headers: QueryContractAppsExtractResultHeaders, runtime: $Util.RuntimeOptions): Promise<QueryContractAppsExtractResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extractTaskId)) {
      body["extractTaskId"] = request.extractTaskId;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
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
      action: "QueryContractAppsExtractResult",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/apps/extractResults/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryContractAppsExtractResultResponse>(await this.execute(params, req, runtime), new QueryContractAppsExtractResultResponse({}));
  }

  /**
   * 查询合同提取结果
   * 
   * @param request - QueryContractAppsExtractResultRequest
   * @returns QueryContractAppsExtractResultResponse
   */
  async queryContractAppsExtractResult(request: QueryContractAppsExtractResultRequest): Promise<QueryContractAppsExtractResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryContractAppsExtractResultHeaders({ });
    return await this.queryContractAppsExtractResultWithOptions(request, headers, runtime);
  }

  /**
   * 查询合同审查结果
   * 
   * @param request - QueryContractAppsReviewResultRequest
   * @param headers - QueryContractAppsReviewResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContractAppsReviewResultResponse
   */
  async queryContractAppsReviewResultWithOptions(request: QueryContractAppsReviewResultRequest, headers: QueryContractAppsReviewResultHeaders, runtime: $Util.RuntimeOptions): Promise<QueryContractAppsReviewResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.reviewTaskId)) {
      body["reviewTaskId"] = request.reviewTaskId;
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
      action: "QueryContractAppsReviewResult",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/apps/reviewResults/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryContractAppsReviewResultResponse>(await this.execute(params, req, runtime), new QueryContractAppsReviewResultResponse({}));
  }

  /**
   * 查询合同审查结果
   * 
   * @param request - QueryContractAppsReviewResultRequest
   * @returns QueryContractAppsReviewResultResponse
   */
  async queryContractAppsReviewResult(request: QueryContractAppsReviewResultRequest): Promise<QueryContractAppsReviewResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryContractAppsReviewResultHeaders({ });
    return await this.queryContractAppsReviewResultWithOptions(request, headers, runtime);
  }

  /**
   * 查询合同条款抽取结果
   * 
   * @param request - QueryContractAppsTermsExtractResultRequest
   * @param headers - QueryContractAppsTermsExtractResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContractAppsTermsExtractResultResponse
   */
  async queryContractAppsTermsExtractResultWithOptions(request: QueryContractAppsTermsExtractResultRequest, headers: QueryContractAppsTermsExtractResultHeaders, runtime: $Util.RuntimeOptions): Promise<QueryContractAppsTermsExtractResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extractTaskId)) {
      body["extractTaskId"] = request.extractTaskId;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
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
      action: "QueryContractAppsTermsExtractResult",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/apps/termsExtractResults/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryContractAppsTermsExtractResultResponse>(await this.execute(params, req, runtime), new QueryContractAppsTermsExtractResultResponse({}));
  }

  /**
   * 查询合同条款抽取结果
   * 
   * @param request - QueryContractAppsTermsExtractResultRequest
   * @returns QueryContractAppsTermsExtractResultResponse
   */
  async queryContractAppsTermsExtractResult(request: QueryContractAppsTermsExtractResultRequest): Promise<QueryContractAppsTermsExtractResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryContractAppsTermsExtractResultHeaders({ });
    return await this.queryContractAppsTermsExtractResultWithOptions(request, headers, runtime);
  }

  /**
   * 查询合同比对结果
   * 
   * @param request - QueryContractCompareResultRequest
   * @param headers - QueryContractCompareResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContractCompareResultResponse
   */
  async queryContractCompareResultWithOptions(request: QueryContractCompareResultRequest, headers: QueryContractCompareResultHeaders, runtime: $Util.RuntimeOptions): Promise<QueryContractCompareResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.compareTaskId)) {
      body["compareTaskId"] = request.compareTaskId;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
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
      action: "QueryContractCompareResult",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/comparisonResults/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryContractCompareResultResponse>(await this.execute(params, req, runtime), new QueryContractCompareResultResponse({}));
  }

  /**
   * 查询合同比对结果
   * 
   * @param request - QueryContractCompareResultRequest
   * @returns QueryContractCompareResultResponse
   */
  async queryContractCompareResult(request: QueryContractCompareResultRequest): Promise<QueryContractCompareResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryContractCompareResultHeaders({ });
    return await this.queryContractCompareResultWithOptions(request, headers, runtime);
  }

  /**
   * 查询合同提取结果
   * 
   * @param request - QueryContractExtractResultRequest
   * @param headers - QueryContractExtractResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContractExtractResultResponse
   */
  async queryContractExtractResultWithOptions(request: QueryContractExtractResultRequest, headers: QueryContractExtractResultHeaders, runtime: $Util.RuntimeOptions): Promise<QueryContractExtractResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extractTaskId)) {
      body["extractTaskId"] = request.extractTaskId;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
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
      action: "QueryContractExtractResult",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/extractResults/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryContractExtractResultResponse>(await this.execute(params, req, runtime), new QueryContractExtractResultResponse({}));
  }

  /**
   * 查询合同提取结果
   * 
   * @param request - QueryContractExtractResultRequest
   * @returns QueryContractExtractResultResponse
   */
  async queryContractExtractResult(request: QueryContractExtractResultRequest): Promise<QueryContractExtractResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryContractExtractResultHeaders({ });
    return await this.queryContractExtractResultWithOptions(request, headers, runtime);
  }

  /**
   * 查询合同审查结果
   * 
   * @param request - QueryContractReviewResultRequest
   * @param headers - QueryContractReviewResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContractReviewResultResponse
   */
  async queryContractReviewResultWithOptions(request: QueryContractReviewResultRequest, headers: QueryContractReviewResultHeaders, runtime: $Util.RuntimeOptions): Promise<QueryContractReviewResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.reviewTaskId)) {
      body["reviewTaskId"] = request.reviewTaskId;
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
      action: "QueryContractReviewResult",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/reviewResults/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryContractReviewResultResponse>(await this.execute(params, req, runtime), new QueryContractReviewResultResponse({}));
  }

  /**
   * 查询合同审查结果
   * 
   * @param request - QueryContractReviewResultRequest
   * @returns QueryContractReviewResultResponse
   */
  async queryContractReviewResult(request: QueryContractReviewResultRequest): Promise<QueryContractReviewResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryContractReviewResultHeaders({ });
    return await this.queryContractReviewResultWithOptions(request, headers, runtime);
  }

  /**
   * 查询合同电子签相关信息
   * 
   * @param request - QueryContractSignInfoRequest
   * @param headers - QueryContractSignInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContractSignInfoResponse
   */
  async queryContractSignInfoWithOptions(request: QueryContractSignInfoRequest, headers: QueryContractSignInfoHeaders, runtime: $Util.RuntimeOptions): Promise<QueryContractSignInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contractBizId)) {
      query["contractBizId"] = request.contractBizId;
    }

    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.staffId)) {
      query["staffId"] = request.staffId;
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
      action: "QueryContractSignInfo",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/queryContractSignInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryContractSignInfoResponse>(await this.execute(params, req, runtime), new QueryContractSignInfoResponse({}));
  }

  /**
   * 查询合同电子签相关信息
   * 
   * @param request - QueryContractSignInfoRequest
   * @returns QueryContractSignInfoResponse
   */
  async queryContractSignInfo(request: QueryContractSignInfoRequest): Promise<QueryContractSignInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryContractSignInfoHeaders({ });
    return await this.queryContractSignInfoWithOptions(request, headers, runtime);
  }

  /**
   * 发送合同相关卡片
   * 
   * @param request - SendContractCardRequest
   * @param headers - SendContractCardHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendContractCardResponse
   */
  async sendContractCardWithOptions(request: SendContractCardRequest, headers: SendContractCardHeaders, runtime: $Util.RuntimeOptions): Promise<SendContractCardResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cardType)) {
      body["cardType"] = request.cardType;
    }

    if (!Util.isUnset(request.contractInfo)) {
      body["contractInfo"] = request.contractInfo;
    }

    if (!Util.isUnset(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.extension)) {
      body["extension"] = request.extension;
    }

    if (!Util.isUnset(request.processInstanceId)) {
      body["processInstanceId"] = request.processInstanceId;
    }

    if (!Util.isUnset(request.receiveGroups)) {
      body["receiveGroups"] = request.receiveGroups;
    }

    if (!Util.isUnset(request.receivers)) {
      body["receivers"] = request.receivers;
    }

    if (!Util.isUnset(request.sender)) {
      body["sender"] = request.sender;
    }

    if (!Util.isUnset(request.syncSingleChat)) {
      body["syncSingleChat"] = request.syncSingleChat;
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
      action: "SendContractCard",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/cards/send`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SendContractCardResponse>(await this.execute(params, req, runtime), new SendContractCardResponse({}));
  }

  /**
   * 发送合同相关卡片
   * 
   * @param request - SendContractCardRequest
   * @returns SendContractCardResponse
   */
  async sendContractCard(request: SendContractCardRequest): Promise<SendContractCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SendContractCardHeaders({ });
    return await this.sendContractCardWithOptions(request, headers, runtime);
  }

  /**
   * 同步签署事件
   * 
   * @param tmpReq - SyncSignEventRequest
   * @param headers - SyncSignEventHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncSignEventResponse
   */
  async syncSignEventWithOptions(tmpReq: SyncSignEventRequest, headers: SyncSignEventHeaders, runtime: $Util.RuntimeOptions): Promise<SyncSignEventResponse> {
    Util.validateModel(tmpReq);
    let request = new SyncSignEventShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "extInfo", "json");
    }

    if (!Util.isUnset(tmpReq.sealType)) {
      request.sealTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sealType, "sealType", "json");
    }

    if (!Util.isUnset(tmpReq.signFileList)) {
      request.signFileListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.signFileList, "signFileList", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contractBizId)) {
      query["contractBizId"] = request.contractBizId;
    }

    if (!Util.isUnset(request.corpId)) {
      query["corpId"] = request.corpId;
    }

    if (!Util.isUnset(request.extInfoShrink)) {
      query["extInfo"] = request.extInfoShrink;
    }

    if (!Util.isUnset(request.sealTypeShrink)) {
      query["sealType"] = request.sealTypeShrink;
    }

    if (!Util.isUnset(request.signDate)) {
      query["signDate"] = request.signDate;
    }

    if (!Util.isUnset(request.signFileListShrink)) {
      query["signFileList"] = request.signFileListShrink;
    }

    if (!Util.isUnset(request.staffId)) {
      query["staffId"] = request.staffId;
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
      action: "SyncSignEvent",
      version: "contract_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/contract/syncSignEvent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SyncSignEventResponse>(await this.execute(params, req, runtime), new SyncSignEventResponse({}));
  }

  /**
   * 同步签署事件
   * 
   * @param request - SyncSignEventRequest
   * @returns SyncSignEventResponse
   */
  async syncSignEvent(request: SyncSignEventRequest): Promise<SyncSignEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SyncSignEventHeaders({ });
    return await this.syncSignEventWithOptions(request, headers, runtime);
  }

}
