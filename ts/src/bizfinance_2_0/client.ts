// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class BenefitMapValue extends $tea.Model {
  canUse?: boolean;
  canUseQuota?: number;
  usedQuota?: number;
  static names(): { [key: string]: string } {
    return {
      canUse: 'canUse',
      canUseQuota: 'canUseQuota',
      usedQuota: 'usedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canUse: 'boolean',
      canUseQuota: 'number',
      usedQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFinanceEnterpriseAccountHeaders extends $tea.Model {
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

export class AddFinanceEnterpriseAccountRequest extends $tea.Model {
  /**
   * @example
   * 钉钉科技
   */
  accountName?: string;
  /**
   * @example
   * BANKCARD
   */
  accountType?: string;
  bankCardNo?: string;
  /**
   * @example
   * ICBC
   */
  bankCode?: string;
  /**
   * @example
   * 中国工商银行
   */
  bankName?: string;
  /**
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @example
   * 账户描述
   */
  description?: string;
  /**
   * @example
   * 中国工商银行余杭分行
   */
  officialName?: string;
  /**
   * @example
   * 1128878445
   */
  officialNumber?: string;
  /**
   * @example
   * 浙江省
   */
  province?: string;
  /**
   * @example
   * smallScaleTaxpayer
   */
  taxNature?: string;
  /**
   * @example
   * 147581475814758
   */
  taxNo?: string;
  /**
   * @example
   * 5046195764756652
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'accountName',
      accountType: 'accountType',
      bankCardNo: 'bankCardNo',
      bankCode: 'bankCode',
      bankName: 'bankName',
      city: 'city',
      description: 'description',
      officialName: 'officialName',
      officialNumber: 'officialNumber',
      province: 'province',
      taxNature: 'taxNature',
      taxNo: 'taxNo',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'string',
      bankCardNo: 'string',
      bankCode: 'string',
      bankName: 'string',
      city: 'string',
      description: 'string',
      officialName: 'string',
      officialNumber: 'string',
      province: 'string',
      taxNature: 'string',
      taxNo: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFinanceEnterpriseAccountResponseBody extends $tea.Model {
  accountCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'accountCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFinanceEnterpriseAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddFinanceEnterpriseAccountResponseBody;
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
      body: AddFinanceEnterpriseAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRetentionRecordHeaders extends $tea.Model {
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

export class AddRetentionRecordRequest extends $tea.Model {
  mobile?: string;
  stateCode?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'mobile',
      stateCode: 'stateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      stateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRetentionRecordResponseBody extends $tea.Model {
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'isSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRetentionRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddRetentionRecordResponseBody;
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
      body: AddRetentionRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BankGatewayInvokeHeaders extends $tea.Model {
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

export class BankGatewayInvokeRequest extends $tea.Model {
  /**
   * @example
   * bankHttp
   */
  actionType?: string;
  inputData?: string;
  /**
   * @example
   * https://cdc.cmbchina.com/cdcserver/api/v2
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'actionType',
      inputData: 'inputData',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      inputData: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BankGatewayInvokeResponseBody extends $tea.Model {
  outputData?: string;
  static names(): { [key: string]: string } {
    return {
      outputData: 'outputData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BankGatewayInvokeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BankGatewayInvokeResponseBody;
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
      body: BankGatewayInvokeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteReceiptHeaders extends $tea.Model {
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

export class BatchDeleteReceiptRequest extends $tea.Model {
  instanceIdList?: string[];
  /**
   * @example
   * 504XX
   */
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'instanceIdList',
      operator: 'operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteReceiptResponseBody extends $tea.Model {
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

export class BatchDeleteReceiptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteReceiptResponseBody;
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
      body: BatchDeleteReceiptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryOrgInvoiceUrlHeaders extends $tea.Model {
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

export class BatchQueryOrgInvoiceUrlRequest extends $tea.Model {
  companyCode?: string;
  invoiceKeyVOList?: BatchQueryOrgInvoiceUrlRequestInvoiceKeyVOList[];
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      companyCode: 'companyCode',
      invoiceKeyVOList: 'invoiceKeyVOList',
      operator: 'operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyCode: 'string',
      invoiceKeyVOList: { 'type': 'array', 'itemType': BatchQueryOrgInvoiceUrlRequestInvoiceKeyVOList },
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryOrgInvoiceUrlResponseBody extends $tea.Model {
  failInvoiceList?: BatchQueryOrgInvoiceUrlResponseBodyFailInvoiceList[];
  orgInvoiceUrlList?: BatchQueryOrgInvoiceUrlResponseBodyOrgInvoiceUrlList[];
  static names(): { [key: string]: string } {
    return {
      failInvoiceList: 'failInvoiceList',
      orgInvoiceUrlList: 'orgInvoiceUrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failInvoiceList: { 'type': 'array', 'itemType': BatchQueryOrgInvoiceUrlResponseBodyFailInvoiceList },
      orgInvoiceUrlList: { 'type': 'array', 'itemType': BatchQueryOrgInvoiceUrlResponseBodyOrgInvoiceUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryOrgInvoiceUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchQueryOrgInvoiceUrlResponseBody;
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
      body: BatchQueryOrgInvoiceUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryPaymentRecallFileHeaders extends $tea.Model {
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

export class BatchQueryPaymentRecallFileRequest extends $tea.Model {
  detailIdList?: string[];
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      detailIdList: 'detailIdList',
      operator: 'operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailIdList: { 'type': 'array', 'itemType': 'string' },
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryPaymentRecallFileResponseBody extends $tea.Model {
  paymentRecallFileList?: BatchQueryPaymentRecallFileResponseBodyPaymentRecallFileList[];
  static names(): { [key: string]: string } {
    return {
      paymentRecallFileList: 'paymentRecallFileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paymentRecallFileList: { 'type': 'array', 'itemType': BatchQueryPaymentRecallFileResponseBodyPaymentRecallFileList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryPaymentRecallFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchQueryPaymentRecallFileResponseBody;
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
      body: BatchQueryPaymentRecallFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSyncBankReceiptHeaders extends $tea.Model {
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

export class BatchSyncBankReceiptRequest extends $tea.Model {
  body?: BatchSyncBankReceiptRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': BatchSyncBankReceiptRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSyncBankReceiptResponseBody extends $tea.Model {
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

export class BatchSyncBankReceiptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchSyncBankReceiptResponseBody;
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
      body: BatchSyncBankReceiptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSignEnterpriseAccountHeaders extends $tea.Model {
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

export class CancelSignEnterpriseAccountRequest extends $tea.Model {
  accountCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'accountCode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSignEnterpriseAccountResponseBody extends $tea.Model {
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

export class CancelSignEnterpriseAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelSignEnterpriseAccountResponseBody;
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
      body: CancelSignEnterpriseAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckVoucherStatusHeaders extends $tea.Model {
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

export class CheckVoucherStatusRequest extends $tea.Model {
  /**
   * @example
   * COM_DEFUALT
   */
  companyCode?: string;
  /**
   * @example
   * 1631526550994
   */
  endTime?: number;
  /**
   * @example
   * VAT_IN
   */
  financeType?: string;
  /**
   * @example
   * 3121234560
   */
  invoiceCode?: string;
  /**
   * @example
   * 1234567890
   */
  invoiceNo?: string;
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
   * 1631526550994
   */
  startTime?: number;
  /**
   * @example
   * 12345678901
   */
  taxNo?: string;
  /**
   * @example
   * VERIFIED
   */
  verifyStatus?: string;
  static names(): { [key: string]: string } {
    return {
      companyCode: 'companyCode',
      endTime: 'endTime',
      financeType: 'financeType',
      invoiceCode: 'invoiceCode',
      invoiceNo: 'invoiceNo',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
      taxNo: 'taxNo',
      verifyStatus: 'verifyStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyCode: 'string',
      endTime: 'number',
      financeType: 'string',
      invoiceCode: 'string',
      invoiceNo: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      taxNo: 'string',
      verifyStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckVoucherStatusResponseBody extends $tea.Model {
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

export class CheckVoucherStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckVoucherStatusResponseBody;
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
      body: CheckVoucherStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmPaymentOrderHeaders extends $tea.Model {
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

export class ConfirmPaymentOrderRequest extends $tea.Model {
  outBizNoList?: string[];
  /**
   * @example
   * 5041123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      outBizNoList: 'outBizNoList',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outBizNoList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmPaymentOrderResponseBody extends $tea.Model {
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

export class ConfirmPaymentOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfirmPaymentOrderResponseBody;
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
      body: ConfirmPaymentOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectionOrderHeaders extends $tea.Model {
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

export class CreateCollectionOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.01
   */
  amount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a
   */
  collectionInfoId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a
   */
  instanceId?: string;
  /**
   * @example
   * 收款
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      collectionInfoId: 'collectionInfoId',
      instanceId: 'instanceId',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      collectionInfoId: 'string',
      instanceId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectionOrderResponseBody extends $tea.Model {
  collectionUrl?: string;
  static names(): { [key: string]: string } {
    return {
      collectionUrl: 'collectionUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectionOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCollectionOrderResponseBody;
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
      body: CreateCollectionOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePaymentOrderHeaders extends $tea.Model {
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

export class CreatePaymentOrderRequest extends $tea.Model {
  /**
   * @example
   * 100
   */
  amount?: string;
  /**
   * @example
   * 1741941518884
   */
  expireTime?: number;
  /**
   * @example
   * xxxxabc
   */
  outBizNo?: string;
  payeeAccountDTO?: CreatePaymentOrderRequestPayeeAccountDTO;
  payerAccountDTO?: CreatePaymentOrderRequestPayerAccountDTO;
  /**
   * @example
   * 日常报销
   */
  paymentOrderTitle?: string;
  /**
   * @example
   * 备注
   */
  remark?: string;
  /**
   * @example
   * 付款用途
   */
  usage?: string;
  /**
   * @example
   * 5046195764756652
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      expireTime: 'expireTime',
      outBizNo: 'outBizNo',
      payeeAccountDTO: 'payeeAccountDTO',
      payerAccountDTO: 'payerAccountDTO',
      paymentOrderTitle: 'paymentOrderTitle',
      remark: 'remark',
      usage: 'usage',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      expireTime: 'number',
      outBizNo: 'string',
      payeeAccountDTO: CreatePaymentOrderRequestPayeeAccountDTO,
      payerAccountDTO: CreatePaymentOrderRequestPayerAccountDTO,
      paymentOrderTitle: 'string',
      remark: 'string',
      usage: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePaymentOrderResponseBody extends $tea.Model {
  expireTime?: number;
  orderNo?: string;
  outBizNo?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      orderNo: 'orderNo',
      outBizNo: 'outBizNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      orderNo: 'string',
      outBizNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePaymentOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePaymentOrderResponseBody;
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
      body: CreatePaymentOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCompanyHeaders extends $tea.Model {
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

export class DeleteCompanyRequest extends $tea.Model {
  companyCode?: string;
  static names(): { [key: string]: string } {
    return {
      companyCode: 'companyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCompanyResponseBody extends $tea.Model {
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

export class DeleteCompanyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCompanyResponseBody;
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
      body: DeleteCompanyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseAccountHeaders extends $tea.Model {
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

export class DeleteEnterpriseAccountRequest extends $tea.Model {
  accountCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'accountCode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseAccountResponseBody extends $tea.Model {
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

export class DeleteEnterpriseAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEnterpriseAccountResponseBody;
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
      body: DeleteEnterpriseAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProcessInstanceHeaders extends $tea.Model {
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

export class DeleteProcessInstanceRequest extends $tea.Model {
  /**
   * @example
   * xxxx
   */
  instanceId?: string;
  /**
   * @example
   * xxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProcessInstanceResponseBody extends $tea.Model {
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

export class DeleteProcessInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProcessInstanceResponseBody;
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
      body: DeleteProcessInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowInstanceHeaders extends $tea.Model {
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

export class DeleteWorkflowInstanceRequest extends $tea.Model {
  /**
   * @example
   * xxxx
   */
  instanceId?: string;
  /**
   * @example
   * xxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowInstanceResponseBody extends $tea.Model {
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

export class DeleteWorkflowInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkflowInstanceResponseBody;
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
      body: DeleteWorkflowInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCompanyHeaders extends $tea.Model {
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

export class EnableCompanyRequest extends $tea.Model {
  companyCode?: string;
  static names(): { [key: string]: string } {
    return {
      companyCode: 'companyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCompanyResponseBody extends $tea.Model {
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

export class EnableCompanyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableCompanyResponseBody;
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
      body: EnableCompanyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableEnterpriseAccountHeaders extends $tea.Model {
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

export class EnableEnterpriseAccountRequest extends $tea.Model {
  accountCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'accountCode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableEnterpriseAccountResponseBody extends $tea.Model {
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

export class EnableEnterpriseAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableEnterpriseAccountResponseBody;
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
      body: EnableEnterpriseAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryHeaders extends $tea.Model {
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

export class GetCategoryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INCOME_XXX
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryResponseBody extends $tea.Model {
  accountantBookIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INCOME_XXX
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isDir?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 汽车
   */
  name?: string;
  /**
   * @example
   * DIR_XXX
   */
  parentCode?: string;
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * valid
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * income
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountantBookIdList: 'accountantBookIdList',
      code: 'code',
      isDir: 'isDir',
      name: 'name',
      parentCode: 'parentCode',
      remark: 'remark',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountantBookIdList: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
      isDir: 'boolean',
      name: 'string',
      parentCode: 'string',
      remark: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCategoryResponseBody;
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
      body: GetCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefineHeaders extends $tea.Model {
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

export class GetDefineRequest extends $tea.Model {
  /**
   * @example
   * DEF_123456
   */
  code?: string;
  /**
   * @example
   * 门店
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefineResponseBody extends $tea.Model {
  hasMore?: boolean;
  list?: GetDefineResponseBodyList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      list: 'list',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      list: { 'type': 'array', 'itemType': GetDefineResponseBodyList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDefineResponseBody;
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
      body: GetDefineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefineDataHeaders extends $tea.Model {
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

export class GetDefineDataRequest extends $tea.Model {
  /**
   * @example
   * DEF_123456
   */
  code?: string;
  /**
   * @example
   * xx路门店1号
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefineDataResponseBody extends $tea.Model {
  hasMore?: boolean;
  list?: GetDefineDataResponseBodyList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      list: 'list',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      list: { 'type': 'array', 'itemType': GetDefineDataResponseBodyList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefineDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDefineDataResponseBody;
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
      body: GetDefineDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFinanceAccountHeaders extends $tea.Model {
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

export class GetFinanceAccountRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accountCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'accountCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFinanceAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  accountCode?: string;
  /**
   * @example
   * test@alipay.com
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  accountName?: string;
  accountRemark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALIPAY
   */
  accountType?: string;
  accountantBookIdList?: string[];
  /**
   * @example
   * 50000.55
   */
  amount?: string;
  bankCode?: string;
  bankName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1631526550994
   */
  createTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abcdef
   */
  creator?: string;
  officialName?: string;
  officialNumber?: string;
  signStatus?: string;
  source?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'accountCode',
      accountId: 'accountId',
      accountName: 'accountName',
      accountRemark: 'accountRemark',
      accountType: 'accountType',
      accountantBookIdList: 'accountantBookIdList',
      amount: 'amount',
      bankCode: 'bankCode',
      bankName: 'bankName',
      createTime: 'createTime',
      creator: 'creator',
      officialName: 'officialName',
      officialNumber: 'officialNumber',
      signStatus: 'signStatus',
      source: 'source',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
      accountId: 'string',
      accountName: 'string',
      accountRemark: 'string',
      accountType: 'string',
      accountantBookIdList: { 'type': 'array', 'itemType': 'string' },
      amount: 'string',
      bankCode: 'string',
      bankName: 'string',
      createTime: 'number',
      creator: 'string',
      officialName: 'string',
      officialNumber: 'string',
      signStatus: 'string',
      source: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFinanceAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFinanceAccountResponseBody;
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
      body: GetFinanceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectHeaders extends $tea.Model {
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

export class GetProjectRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJ-xxx
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $tea.Model {
  accountantBookIdList?: string[];
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1631526550994
   */
  createTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aaa
   */
  creator?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 和外部合作
   */
  description?: string;
  name?: string;
  parentCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJ-XXX
   */
  projectCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 外包项目
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * valid
   */
  status?: string;
  userDefineCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountantBookIdList: 'accountantBookIdList',
      code: 'code',
      createTime: 'createTime',
      creator: 'creator',
      description: 'description',
      name: 'name',
      parentCode: 'parentCode',
      projectCode: 'projectCode',
      projectName: 'projectName',
      status: 'status',
      userDefineCode: 'userDefineCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountantBookIdList: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
      createTime: 'number',
      creator: 'string',
      description: 'string',
      name: 'string',
      parentCode: 'string',
      projectCode: 'string',
      projectName: 'string',
      status: 'string',
      userDefineCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectResponseBody;
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
      body: GetProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReceiptHeaders extends $tea.Model {
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

export class GetReceiptRequest extends $tea.Model {
  /**
   * @example
   * 20251231541312
   */
  businessId?: string;
  /**
   * @example
   * 19b98a1c-5a31-4d78-9da7-0e347593820a
   */
  code?: string;
  /**
   * @example
   * EM-1017F28E03350B1738B3000X
   */
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'businessId',
      code: 'code',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      code: 'string',
      modelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReceiptResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"operatorUserId":"015865244722391178","data":{"amount":{"amountStr":"566"},"code":"d0d54815-32c5-4b18-8391-e79713bba95e","payeeAt":1637251200000,"departmentCode":"-1","project":{"projectCode":"PROJ_101761F3FF6B21362ECA000N","projectName":"客户合作项目"},"principalId":"015865244722391178","enterpriseAccount":{},"approvedAt":1637305373000,"title":"地狱猫提交的智能财务-收款","createAt":1637305353000,"paymentAt":1637251200000,"supplier":{},"operateUserId":"015865244722391178","applicantEmployeeId":"015865244722391178","comment":"ffff","category":{"categoryCode":"INC_1016D6CB3C181E28F0120009","categoryName":"销售收入"},"customer":{"customerCode":"CUS_10178592ECEC2133C893000F","customerName":"钉钉"},"status":"agree"}}
   */
  data?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EM-1017F28E03350B1738B3000X
   */
  modelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      data: 'data',
      modelId: 'modelId',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      data: 'string',
      modelId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReceiptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetReceiptResponseBody;
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
      body: GetReceiptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplierHeaders extends $tea.Model {
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

export class GetSupplierRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SUP_XXX
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplierResponseBody extends $tea.Model {
  accountantBookIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SUP_XXX
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1634786828686
   */
  createTime?: number;
  customFormDataList?: GetSupplierResponseBodyCustomFormDataList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 原材料供应商
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * XX公司
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * valid
   */
  status?: string;
  userDefineCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountantBookIdList: 'accountantBookIdList',
      code: 'code',
      createTime: 'createTime',
      customFormDataList: 'customFormDataList',
      description: 'description',
      name: 'name',
      status: 'status',
      userDefineCode: 'userDefineCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountantBookIdList: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
      createTime: 'number',
      customFormDataList: { 'type': 'array', 'itemType': GetSupplierResponseBodyCustomFormDataList },
      description: 'string',
      name: 'string',
      status: 'string',
      userDefineCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplierResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSupplierResponseBody;
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
      body: GetSupplierResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueInvoiceWithOrderHeaders extends $tea.Model {
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

export class IssueInvoiceWithOrderRequest extends $tea.Model {
  content?: IssueInvoiceWithOrderRequestContent;
  financeAppKey?: string;
  operator?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      financeAppKey: 'financeAppKey',
      operator: 'operator',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: IssueInvoiceWithOrderRequestContent,
      financeAppKey: 'string',
      operator: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueInvoiceWithOrderResponseBody extends $tea.Model {
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

export class IssueInvoiceWithOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IssueInvoiceWithOrderResponseBody;
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
      body: IssueInvoiceWithOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkCommonInvokeHeaders extends $tea.Model {
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

export class LinkCommonInvokeRequest extends $tea.Model {
  /**
   * @example
   * TEST
   */
  bizType?: string;
  /**
   * @example
   * "{\"key\":\"value\"}"
   */
  data?: string;
  /**
   * @example
   * INOVKE_XXX
   */
  invokeId?: string;
  /**
   * @example
   * abc
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      data: 'data',
      invokeId: 'invokeId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      data: 'string',
      invokeId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkCommonInvokeResponseBody extends $tea.Model {
  bizType?: string;
  data?: string;
  invokeId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      data: 'data',
      invokeId: 'invokeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      data: 'string',
      invokeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkCommonInvokeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LinkCommonInvokeResponseBody;
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
      body: LinkCommonInvokeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderBillingHeaders extends $tea.Model {
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

export class OrderBillingRequest extends $tea.Model {
  additionInfos?: OrderBillingRequestAdditionInfos[];
  /**
   * @example
   * abc
   */
  appKey?: string;
  applyPerson?: string;
  invoiceRemark?: string;
  /**
   * @example
   * VAT_NORMAL_E
   */
  invoiceType?: string;
  isNaturalPerson?: boolean;
  operator?: string;
  /**
   * @example
   * abc
   */
  orderId?: string;
  payee?: string;
  phone?: string;
  products?: OrderBillingRequestProducts[];
  /**
   * @example
   * 浙江省杭州市XXX街道
   */
  purchaserAddress?: string;
  purchaserBankAccount?: string;
  purchaserBankName?: string;
  /**
   * @example
   * XXX公司
   */
  purchaserName?: string;
  purchaserTaxNo?: string;
  purchaserTel?: string;
  remark?: string;
  reviewer?: string;
  signature?: string;
  taxSign?: number;
  static names(): { [key: string]: string } {
    return {
      additionInfos: 'additionInfos',
      appKey: 'appKey',
      applyPerson: 'applyPerson',
      invoiceRemark: 'invoiceRemark',
      invoiceType: 'invoiceType',
      isNaturalPerson: 'isNaturalPerson',
      operator: 'operator',
      orderId: 'orderId',
      payee: 'payee',
      phone: 'phone',
      products: 'products',
      purchaserAddress: 'purchaserAddress',
      purchaserBankAccount: 'purchaserBankAccount',
      purchaserBankName: 'purchaserBankName',
      purchaserName: 'purchaserName',
      purchaserTaxNo: 'purchaserTaxNo',
      purchaserTel: 'purchaserTel',
      remark: 'remark',
      reviewer: 'reviewer',
      signature: 'signature',
      taxSign: 'taxSign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionInfos: { 'type': 'array', 'itemType': OrderBillingRequestAdditionInfos },
      appKey: 'string',
      applyPerson: 'string',
      invoiceRemark: 'string',
      invoiceType: 'string',
      isNaturalPerson: 'boolean',
      operator: 'string',
      orderId: 'string',
      payee: 'string',
      phone: 'string',
      products: { 'type': 'array', 'itemType': OrderBillingRequestProducts },
      purchaserAddress: 'string',
      purchaserBankAccount: 'string',
      purchaserBankName: 'string',
      purchaserName: 'string',
      purchaserTaxNo: 'string',
      purchaserTel: 'string',
      remark: 'string',
      reviewer: 'string',
      signature: 'string',
      taxSign: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderBillingResponseBody extends $tea.Model {
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

export class OrderBillingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OrderBillingResponseBody;
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
      body: OrderBillingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryCorpPayAccountsHeaders extends $tea.Model {
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

export class PageQueryCorpPayAccountsResponseBody extends $tea.Model {
  accounts?: PageQueryCorpPayAccountsResponseBodyAccounts[];
  static names(): { [key: string]: string } {
    return {
      accounts: 'accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': PageQueryCorpPayAccountsResponseBodyAccounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryCorpPayAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PageQueryCorpPayAccountsResponseBody;
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
      body: PageQueryCorpPayAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTradeByPageHeaders extends $tea.Model {
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

export class QueryAccountTradeByPageRequest extends $tea.Model {
  /**
   * @example
   * ACC_XXXXX
   */
  accountId?: string;
  /**
   * @example
   * 1730778990150
   */
  endDate?: number;
  filter?: QueryAccountTradeByPageRequestFilter;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1730778990150
   */
  startDate?: number;
  /**
   * @example
   * 50423414443123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      endDate: 'endDate',
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startDate: 'startDate',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      endDate: 'number',
      filter: QueryAccountTradeByPageRequestFilter,
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTradeByPageResponseBody extends $tea.Model {
  hasMore?: boolean;
  nextToken?: number;
  result?: QueryAccountTradeByPageResponseBodyResult[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextToken: 'number',
      result: { 'type': 'array', 'itemType': QueryAccountTradeByPageResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTradeByPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAccountTradeByPageResponseBody;
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
      body: QueryAccountTradeByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAlipayUserIdHeaders extends $tea.Model {
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

export class QueryAlipayUserIdRequest extends $tea.Model {
  dingUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dingUserIds: 'dingUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAlipayUserIdResponseBody extends $tea.Model {
  alipayBizUserList?: QueryAlipayUserIdResponseBodyAlipayBizUserList[];
  static names(): { [key: string]: string } {
    return {
      alipayBizUserList: 'alipayBizUserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayBizUserList: { 'type': 'array', 'itemType': QueryAlipayUserIdResponseBodyAlipayBizUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAlipayUserIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAlipayUserIdResponseBody;
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
      body: QueryAlipayUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCategoryByPageHeaders extends $tea.Model {
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

export class QueryCategoryByPageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCategoryByPageResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  list?: QueryCategoryByPageResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      list: 'list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      list: { 'type': 'array', 'itemType': QueryCategoryByPageResponseBodyList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCategoryByPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCategoryByPageResponseBody;
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
      body: QueryCategoryByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionInfoListHeaders extends $tea.Model {
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

export class QueryCollectionInfoListRequest extends $tea.Model {
  /**
   * @example
   * SUCCESS
   * 
   * **if can be null:**
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionInfoListResponseBody extends $tea.Model {
  collectionInfoList?: QueryCollectionInfoListResponseBodyCollectionInfoList[];
  static names(): { [key: string]: string } {
    return {
      collectionInfoList: 'collectionInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionInfoList: { 'type': 'array', 'itemType': QueryCollectionInfoListResponseBodyCollectionInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionInfoListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCollectionInfoListResponseBody;
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
      body: QueryCollectionInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionOrderHeaders extends $tea.Model {
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

export class QueryCollectionOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionOrderResponseBody extends $tea.Model {
  amount?: string;
  instanceId?: string;
  remark?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      instanceId: 'instanceId',
      remark: 'remark',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      instanceId: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCollectionOrderResponseBody;
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
      body: QueryCollectionOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCorpScaleHeaders extends $tea.Model {
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

export class QueryCorpScaleRequest extends $tea.Model {
  corpNames?: string[];
  static names(): { [key: string]: string } {
    return {
      corpNames: 'corpNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCorpScaleShrinkRequest extends $tea.Model {
  corpNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      corpNamesShrink: 'corpNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpNamesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCorpScaleResponseBody extends $tea.Model {
  corpScaleMap?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      corpScaleMap: 'corpScaleMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpScaleMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCorpScaleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCorpScaleResponseBody;
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
      body: QueryCorpScaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerByPageHeaders extends $tea.Model {
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

export class QueryCustomerByPageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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

export class QueryCustomerByPageResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  list?: QueryCustomerByPageResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      list: 'list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      list: { 'type': 'array', 'itemType': QueryCustomerByPageResponseBodyList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerByPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCustomerByPageResponseBody;
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
      body: QueryCustomerByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseAccountByPageHeaders extends $tea.Model {
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

export class QueryEnterpriseAccountByPageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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

export class QueryEnterpriseAccountByPageResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  list?: QueryEnterpriseAccountByPageResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      list: 'list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      list: { 'type': 'array', 'itemType': QueryEnterpriseAccountByPageResponseBodyList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseAccountByPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEnterpriseAccountByPageResponseBody;
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
      body: QueryEnterpriseAccountByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseAccountSignUrlHeaders extends $tea.Model {
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

export class QueryEnterpriseAccountSignUrlRequest extends $tea.Model {
  /**
   * @example
   * ACC_X12133
   */
  accountCode?: string;
  /**
   * @example
   * 5041145245
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'accountCode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseAccountSignUrlResponseBody extends $tea.Model {
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

export class QueryEnterpriseAccountSignUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEnterpriseAccountSignUrlResponseBody;
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
      body: QueryEnterpriseAccountSignUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseCodeOpenDetailHeaders extends $tea.Model {
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

export class QueryEnterpriseCodeOpenDetailResponseBody extends $tea.Model {
  enterpriseId?: string;
  openedStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'enterpriseId',
      openedStatus: 'openedStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'string',
      openedStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseCodeOpenDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEnterpriseCodeOpenDetailResponseBody;
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
      body: QueryEnterpriseCodeOpenDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancePaymentOrderDetailHeaders extends $tea.Model {
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

export class QueryInstancePaymentOrderDetailRequest extends $tea.Model {
  /**
   * @example
   * abc
   */
  orderNo?: string;
  static names(): { [key: string]: string } {
    return {
      orderNo: 'orderNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancePaymentOrderDetailResponseBody extends $tea.Model {
  amount?: string;
  instanceId?: string;
  payeeAccountDTO?: QueryInstancePaymentOrderDetailResponseBodyPayeeAccountDTO;
  payerAccountDTO?: QueryInstancePaymentOrderDetailResponseBodyPayerAccountDTO;
  remark?: string;
  usage?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      instanceId: 'instanceId',
      payeeAccountDTO: 'payeeAccountDTO',
      payerAccountDTO: 'payerAccountDTO',
      remark: 'remark',
      usage: 'usage',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      instanceId: 'string',
      payeeAccountDTO: QueryInstancePaymentOrderDetailResponseBodyPayeeAccountDTO,
      payerAccountDTO: QueryInstancePaymentOrderDetailResponseBodyPayerAccountDTO,
      remark: 'string',
      usage: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancePaymentOrderDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryInstancePaymentOrderDetailResponseBody;
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
      body: QueryInstancePaymentOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceTransferDataHeaders extends $tea.Model {
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

export class QueryInvoiceTransferDataRequest extends $tea.Model {
  body?: QueryInvoiceTransferDataRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: QueryInvoiceTransferDataRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceTransferDataShrinkRequest extends $tea.Model {
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

export class QueryInvoiceTransferDataResponseBody extends $tea.Model {
  keyToData?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      keyToData: 'keyToData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyToData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceTransferDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryInvoiceTransferDataResponseBody;
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
      body: QueryInvoiceTransferDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentBenefitHeaders extends $tea.Model {
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

export class QueryPaymentBenefitRequest extends $tea.Model {
  /**
   * @example
   * 5042215136
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

export class QueryPaymentBenefitResponseBody extends $tea.Model {
  benefitMap?: { [key: string]: BenefitMapValue };
  corpId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      benefitMap: 'benefitMap',
      corpId: 'corpId',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitMap: { 'type': 'map', 'keyType': 'string', 'valueType': BenefitMapValue },
      corpId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentBenefitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPaymentBenefitResponseBody;
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
      body: QueryPaymentBenefitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentOrderDetailHeaders extends $tea.Model {
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

export class QueryPaymentOrderDetailRequest extends $tea.Model {
  outBizNoList?: string[];
  /**
   * @example
   * 50455845112
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      outBizNoList: 'outBizNoList',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outBizNoList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentOrderDetailShrinkRequest extends $tea.Model {
  outBizNoListShrink?: string;
  /**
   * @example
   * 50455845112
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      outBizNoListShrink: 'outBizNoList',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outBizNoListShrink: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentOrderDetailResponseBody extends $tea.Model {
  orderList?: QueryPaymentOrderDetailResponseBodyOrderList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderList: 'orderList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': QueryPaymentOrderDetailResponseBodyOrderList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentOrderDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPaymentOrderDetailResponseBody;
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
      body: QueryPaymentOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentRecallFileHeaders extends $tea.Model {
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

export class QueryPaymentRecallFileRequest extends $tea.Model {
  /**
   * @example
   * 504
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

export class QueryPaymentRecallFileResponseBody extends $tea.Model {
  corpId?: string;
  paymentRecallFileList?: QueryPaymentRecallFileResponseBodyPaymentRecallFileList[];
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      paymentRecallFileList: 'paymentRecallFileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      paymentRecallFileList: { 'type': 'array', 'itemType': QueryPaymentRecallFileResponseBodyPaymentRecallFileList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentRecallFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPaymentRecallFileResponseBody;
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
      body: QueryPaymentRecallFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentRecallFileVTwoHeaders extends $tea.Model {
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

export class QueryPaymentRecallFileVTwoRequest extends $tea.Model {
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

export class QueryPaymentRecallFileVTwoResponseBody extends $tea.Model {
  corpId?: string;
  paymentRecallFileList?: QueryPaymentRecallFileVTwoResponseBodyPaymentRecallFileList[];
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      paymentRecallFileList: 'paymentRecallFileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      paymentRecallFileList: { 'type': 'array', 'itemType': QueryPaymentRecallFileVTwoResponseBodyPaymentRecallFileList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentRecallFileVTwoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPaymentRecallFileVTwoResponseBody;
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
      body: QueryPaymentRecallFileVTwoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentStatusHeaders extends $tea.Model {
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

export class QueryPaymentStatusRequest extends $tea.Model {
  /**
   * @example
   * ABC
   */
  instanceId?: string;
  /**
   * @example
   * 20241102231
   */
  orderNo?: string;
  /**
   * @example
   * 504323
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      orderNo: 'orderNo',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderNo: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentStatusResponseBody extends $tea.Model {
  /**
   * @example
   * dingXXX
   */
  corpId?: string;
  /**
   * @example
   * 收款账户错误
   */
  failReason?: string;
  /**
   * @example
   * ABC
   */
  instanceId?: string;
  /**
   * @example
   * 20241112
   */
  orderNo?: string;
  payeeAccountInfo?: QueryPaymentStatusResponseBodyPayeeAccountInfo;
  payerAccountInfo?: QueryPaymentStatusResponseBodyPayerAccountInfo;
  /**
   * @example
   * SUCCESS
   */
  paymentStatus?: string;
  /**
   * @example
   * 2024-11-11 00:00:00
   */
  paymentTime?: string;
  /**
   * @example
   * ABC
   */
  remark?: string;
  /**
   * @example
   * 报销
   */
  usage?: string;
  /**
   * @example
   * 504
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      failReason: 'failReason',
      instanceId: 'instanceId',
      orderNo: 'orderNo',
      payeeAccountInfo: 'payeeAccountInfo',
      payerAccountInfo: 'payerAccountInfo',
      paymentStatus: 'paymentStatus',
      paymentTime: 'paymentTime',
      remark: 'remark',
      usage: 'usage',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      failReason: 'string',
      instanceId: 'string',
      orderNo: 'string',
      payeeAccountInfo: QueryPaymentStatusResponseBodyPayeeAccountInfo,
      payerAccountInfo: QueryPaymentStatusResponseBodyPayerAccountInfo,
      paymentStatus: 'string',
      paymentTime: 'string',
      remark: 'string',
      usage: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPaymentStatusResponseBody;
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
      body: QueryPaymentStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionUserIdsHeaders extends $tea.Model {
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

export class QueryPermissionUserIdsResponseBody extends $tea.Model {
  dingUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dingUserIds: 'dingUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionUserIdsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPermissionUserIdsResponseBody;
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
      body: QueryPermissionUserIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductByPageHeaders extends $tea.Model {
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

export class QueryProductByPageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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

export class QueryProductByPageResponseBody extends $tea.Model {
  hasMore?: boolean;
  list?: QueryProductByPageResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      list: 'list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      list: { 'type': 'array', 'itemType': QueryProductByPageResponseBodyList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductByPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryProductByPageResponseBody;
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
      body: QueryProductByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectByPageHeaders extends $tea.Model {
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

export class QueryProjectByPageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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

export class QueryProjectByPageResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  list?: QueryProjectByPageResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      list: 'list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      list: { 'type': 'array', 'itemType': QueryProjectByPageResponseBodyList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectByPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryProjectByPageResponseBody;
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
      body: QueryProjectByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiptForInvoiceHeaders extends $tea.Model {
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

export class QueryReceiptForInvoiceRequest extends $tea.Model {
  /**
   * @example
   * abc
   */
  accountantBookId?: string;
  applyStatusList?: string[];
  bizStatusList?: string[];
  /**
   * @example
   * COM_DEFAULT
   */
  companyCode?: string;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  receiptStatusList?: string[];
  searchParams?: { [key: string]: string };
  startTime?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountantBookId: 'accountantBookId',
      applyStatusList: 'applyStatusList',
      bizStatusList: 'bizStatusList',
      companyCode: 'companyCode',
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      receiptStatusList: 'receiptStatusList',
      searchParams: 'searchParams',
      startTime: 'startTime',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountantBookId: 'string',
      applyStatusList: { 'type': 'array', 'itemType': 'string' },
      bizStatusList: { 'type': 'array', 'itemType': 'string' },
      companyCode: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      receiptStatusList: { 'type': 'array', 'itemType': 'string' },
      searchParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startTime: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiptForInvoiceResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  hasMore?: string;
  list?: QueryReceiptForInvoiceResponseBodyList[];
  /**
   * @example
   * 500
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      list: 'list',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'string',
      list: { 'type': 'array', 'itemType': QueryReceiptForInvoiceResponseBodyList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiptForInvoiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryReceiptForInvoiceResponseBody;
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
      body: QueryReceiptForInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplierByPageHeaders extends $tea.Model {
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

export class QuerySupplierByPageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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

export class QuerySupplierByPageResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  list?: QuerySupplierByPageResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      list: 'list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      list: { 'type': 'array', 'itemType': QuerySupplierByPageResponseBodyList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplierByPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySupplierByPageResponseBody;
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
      body: QuerySupplierByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUseNewInvoiceAppHeaders extends $tea.Model {
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

export class QueryUseNewInvoiceAppResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  useNew?: boolean;
  static names(): { [key: string]: string } {
    return {
      useNew: 'useNew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      useNew: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUseNewInvoiceAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUseNewInvoiceAppResponseBody;
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
      body: QueryUseNewInvoiceAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserRoleListHeaders extends $tea.Model {
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

export class QueryUserRoleListRequest extends $tea.Model {
  /**
   * @example
   * COM_DEFAULT
   */
  companyCode?: string;
  /**
   * @example
   * 12312231231
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      companyCode: 'companyCode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyCode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserRoleListResponseBody extends $tea.Model {
  /**
   * @example
   * COM_DEFAULT
   */
  companyCode?: string;
  financeEmpDeptOpenList?: QueryUserRoleListResponseBodyFinanceEmpDeptOpenList[];
  roleVOList?: QueryUserRoleListResponseBodyRoleVOList[];
  static names(): { [key: string]: string } {
    return {
      companyCode: 'companyCode',
      financeEmpDeptOpenList: 'financeEmpDeptOpenList',
      roleVOList: 'roleVOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyCode: 'string',
      financeEmpDeptOpenList: { 'type': 'array', 'itemType': QueryUserRoleListResponseBodyFinanceEmpDeptOpenList },
      roleVOList: { 'type': 'array', 'itemType': QueryUserRoleListResponseBodyRoleVOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserRoleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserRoleListResponseBody;
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
      body: QueryUserRoleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignEnterpriseAccountHeaders extends $tea.Model {
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

export class SignEnterpriseAccountRequest extends $tea.Model {
  /**
   * @example
   * ACC_XXX
   */
  accountCode?: string;
  /**
   * @example
   * 123
   */
  bankCardNo?: string;
  /**
   * @example
   * 123
   * 
   * **if can be null:**
   * true
   */
  bankOpenId?: string;
  /**
   * @example
   * COMM_UNIONPAY
   * 
   * **if can be null:**
   * true
   */
  channelType?: string;
  /**
   * @example
   * XXX
   */
  feeItemCode?: string;
  /**
   * @example
   * XXXX
   */
  issueNo?: string;
  /**
   * @example
   * 123
   */
  operator?: string;
  /**
   * @example
   * signed
   */
  signOperateType?: string;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'accountCode',
      bankCardNo: 'bankCardNo',
      bankOpenId: 'bankOpenId',
      channelType: 'channelType',
      feeItemCode: 'feeItemCode',
      issueNo: 'issueNo',
      operator: 'operator',
      signOperateType: 'signOperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
      bankCardNo: 'string',
      bankOpenId: 'string',
      channelType: 'string',
      feeItemCode: 'string',
      issueNo: 'string',
      operator: 'string',
      signOperateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignEnterpriseAccountResponseBody extends $tea.Model {
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

export class SignEnterpriseAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SignEnterpriseAccountResponseBody;
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
      body: SignEnterpriseAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncReceiptRecallHeaders extends $tea.Model {
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

export class SyncReceiptRecallRequest extends $tea.Model {
  /**
   * @example
   * https:xxxx.pdf
   */
  fileDownloadUrl?: string;
  /**
   * @example
   * 1234.pdf
   */
  fileName?: string;
  /**
   * @example
   * 123
   */
  orderNo?: string;
  static names(): { [key: string]: string } {
    return {
      fileDownloadUrl: 'fileDownloadUrl',
      fileName: 'fileName',
      orderNo: 'orderNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileDownloadUrl: 'string',
      fileName: 'string',
      orderNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncReceiptRecallResponseBody extends $tea.Model {
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

export class SyncReceiptRecallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncReceiptRecallResponseBody;
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
      body: SyncReceiptRecallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuxiliaryStatusHeaders extends $tea.Model {
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

export class UpdateAuxiliaryStatusRequest extends $tea.Model {
  auxiliaryId?: string;
  auxiliaryType?: string;
  operateType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      auxiliaryId: 'auxiliaryId',
      auxiliaryType: 'auxiliaryType',
      operateType: 'operateType',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auxiliaryId: 'string',
      auxiliaryType: 'string',
      operateType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuxiliaryStatusResponseBody extends $tea.Model {
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

export class UpdateAuxiliaryStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAuxiliaryStatusResponseBody;
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
      body: UpdateAuxiliaryStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFinanceEnterpriseAccountHeaders extends $tea.Model {
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

export class UpdateFinanceEnterpriseAccountRequest extends $tea.Model {
  /**
   * @example
   * ACC_XXXXXX
   */
  accountCode?: string;
  /**
   * @example
   * 钉钉科技
   */
  accountName?: string;
  /**
   * @example
   * BANKCARD
   */
  accountType?: string;
  bankCardNo?: string;
  /**
   * @example
   * ICBC
   */
  bankCode?: string;
  /**
   * @example
   * 中国工商银行
   */
  bankName?: string;
  /**
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @example
   * 账户描述
   */
  description?: string;
  /**
   * @example
   * 中国工商银行余杭分行
   */
  officialName?: string;
  /**
   * @example
   * 1128878445
   */
  officialNumber?: string;
  /**
   * @example
   * 浙江省
   */
  province?: string;
  /**
   * @example
   * smallScaleTaxpayer
   */
  taxNature?: string;
  /**
   * @example
   * 125481254812548
   */
  taxNo?: string;
  /**
   * @example
   * 5046195764756652
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'accountCode',
      accountName: 'accountName',
      accountType: 'accountType',
      bankCardNo: 'bankCardNo',
      bankCode: 'bankCode',
      bankName: 'bankName',
      city: 'city',
      description: 'description',
      officialName: 'officialName',
      officialNumber: 'officialNumber',
      province: 'province',
      taxNature: 'taxNature',
      taxNo: 'taxNo',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
      accountName: 'string',
      accountType: 'string',
      bankCardNo: 'string',
      bankCode: 'string',
      bankName: 'string',
      city: 'string',
      description: 'string',
      officialName: 'string',
      officialNumber: 'string',
      province: 'string',
      taxNature: 'string',
      taxNo: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFinanceEnterpriseAccountResponseBody extends $tea.Model {
  accountCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'accountCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFinanceEnterpriseAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFinanceEnterpriseAccountResponseBody;
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
      body: UpdateFinanceEnterpriseAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceOrderInfoHeaders extends $tea.Model {
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

export class UpdateInstanceOrderInfoRequest extends $tea.Model {
  /**
   * @example
   * xxx错误
   */
  failReason?: string;
  /**
   * @example
   * abc
   */
  orderNo?: string;
  /**
   * @example
   * 123
   */
  outOrderNo?: string;
  payerBank?: UpdateInstanceOrderInfoRequestPayerBank;
  /**
   * @example
   * 1709691000682
   */
  paymentTime?: number;
  /**
   * @example
   * PAYING
   */
  status?: string;
  /**
   * @example
   * 123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      failReason: 'failReason',
      orderNo: 'orderNo',
      outOrderNo: 'outOrderNo',
      payerBank: 'payerBank',
      paymentTime: 'paymentTime',
      status: 'status',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      orderNo: 'string',
      outOrderNo: 'string',
      payerBank: UpdateInstanceOrderInfoRequestPayerBank,
      paymentTime: 'number',
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceOrderInfoShrinkRequest extends $tea.Model {
  /**
   * @example
   * xxx错误
   */
  failReason?: string;
  /**
   * @example
   * abc
   */
  orderNo?: string;
  /**
   * @example
   * 123
   */
  outOrderNo?: string;
  payerBankShrink?: string;
  /**
   * @example
   * 1709691000682
   */
  paymentTime?: number;
  /**
   * @example
   * PAYING
   */
  status?: string;
  /**
   * @example
   * 123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      failReason: 'failReason',
      orderNo: 'orderNo',
      outOrderNo: 'outOrderNo',
      payerBankShrink: 'payerBank',
      paymentTime: 'paymentTime',
      status: 'status',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      orderNo: 'string',
      outOrderNo: 'string',
      payerBankShrink: 'string',
      paymentTime: 'number',
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceOrderInfoResponseBody extends $tea.Model {
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

export class UpdateInstanceOrderInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceOrderInfoResponseBody;
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
      body: UpdateInstanceOrderInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInvoiceDataTransferDoneHeaders extends $tea.Model {
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

export class UpdateInvoiceDataTransferDoneResponseBody extends $tea.Model {
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

export class UpdateInvoiceDataTransferDoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInvoiceDataTransferDoneResponseBody;
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
      body: UpdateInvoiceDataTransferDoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInvoiceUrlHeaders extends $tea.Model {
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

export class UpdateInvoiceUrlRequest extends $tea.Model {
  body?: UpdateInvoiceUrlRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateInvoiceUrlRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInvoiceUrlShrinkRequest extends $tea.Model {
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

export class UpdateInvoiceUrlResponseBody extends $tea.Model {
  result?: UpdateInvoiceUrlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: UpdateInvoiceUrlResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInvoiceUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInvoiceUrlResponseBody;
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
      body: UpdateInvoiceUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryOrgInvoiceUrlRequestInvoiceKeyVOList extends $tea.Model {
  invoiceCode?: string;
  invoiceNo?: string;
  static names(): { [key: string]: string } {
    return {
      invoiceCode: 'invoiceCode',
      invoiceNo: 'invoiceNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoiceCode: 'string',
      invoiceNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryOrgInvoiceUrlResponseBodyFailInvoiceList extends $tea.Model {
  errorMsg?: string;
  invoiceCode?: string;
  invoiceNo?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'errorMsg',
      invoiceCode: 'invoiceCode',
      invoiceNo: 'invoiceNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      invoiceCode: 'string',
      invoiceNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryOrgInvoiceUrlResponseBodyOrgInvoiceUrlList extends $tea.Model {
  invoiceCode?: string;
  invoiceNo?: string;
  ofdUrl?: string;
  originFileType?: string;
  originFileUrl?: string;
  pdfUrl?: string;
  xmlUrl?: string;
  static names(): { [key: string]: string } {
    return {
      invoiceCode: 'invoiceCode',
      invoiceNo: 'invoiceNo',
      ofdUrl: 'ofdUrl',
      originFileType: 'originFileType',
      originFileUrl: 'originFileUrl',
      pdfUrl: 'pdfUrl',
      xmlUrl: 'xmlUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoiceCode: 'string',
      invoiceNo: 'string',
      ofdUrl: 'string',
      originFileType: 'string',
      originFileUrl: 'string',
      pdfUrl: 'string',
      xmlUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryPaymentRecallFileResponseBodyPaymentRecallFileList extends $tea.Model {
  detailId?: string;
  fileId?: string;
  fileName?: string;
  fileSize?: string;
  fileType?: string;
  recallFileUrl?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      detailId: 'detailId',
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      recallFileUrl: 'recallFileUrl',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailId: 'string',
      fileId: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileType: 'string',
      recallFileUrl: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSyncBankReceiptRequestBody extends $tea.Model {
  /**
   * @example
   * https://xxxxx
   */
  fileDownloadUrl?: string;
  /**
   * @example
   * xxxx回单.pdf
   */
  fileName?: string;
  /**
   * @example
   * 2024000001902335
   */
  messageId?: string;
  /**
   * @example
   * detailId
   */
  messageIdType?: string;
  static names(): { [key: string]: string } {
    return {
      fileDownloadUrl: 'fileDownloadUrl',
      fileName: 'fileName',
      messageId: 'messageId',
      messageIdType: 'messageIdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileDownloadUrl: 'string',
      fileName: 'string',
      messageId: 'string',
      messageIdType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePaymentOrderRequestPayeeAccountDTOBankOpenDTO extends $tea.Model {
  /**
   * @example
   * 钉钉中国
   */
  accountName?: string;
  /**
   * @example
   * 1025884624512
   */
  bankBranchCode?: string;
  /**
   * @example
   * 招商银行杭州余杭分行
   */
  bankBranchName?: string;
  /**
   * @example
   * 122215111012
   */
  bankCardNo?: string;
  /**
   * @example
   * ICBC
   */
  bankCode?: string;
  /**
   * @example
   * 招商银行
   */
  bankName?: string;
  /**
   * @example
   * PERSONAL_BANK_CARD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'accountName',
      bankBranchCode: 'bankBranchCode',
      bankBranchName: 'bankBranchName',
      bankCardNo: 'bankCardNo',
      bankCode: 'bankCode',
      bankName: 'bankName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      bankBranchCode: 'string',
      bankBranchName: 'string',
      bankCardNo: 'string',
      bankCode: 'string',
      bankName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePaymentOrderRequestPayeeAccountDTO extends $tea.Model {
  bankOpenDTO?: CreatePaymentOrderRequestPayeeAccountDTOBankOpenDTO;
  static names(): { [key: string]: string } {
    return {
      bankOpenDTO: 'bankOpenDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankOpenDTO: CreatePaymentOrderRequestPayeeAccountDTOBankOpenDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePaymentOrderRequestPayerAccountDTO extends $tea.Model {
  /**
   * @example
   * ACC_XXXXX
   */
  enterpriseAccountCode?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseAccountCode: 'enterpriseAccountCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseAccountCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefineResponseBodyList extends $tea.Model {
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

export class GetDefineDataResponseBodyList extends $tea.Model {
  /**
   * @example
   * DA_123456
   */
  dataCode?: string;
  /**
   * @example
   * DEF_123456
   */
  defineCode?: string;
  /**
   * @example
   * xx路1号门店
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parentDataCode?: string;
  /**
   * @example
   * valid
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dataCode: 'dataCode',
      defineCode: 'defineCode',
      name: 'name',
      parentDataCode: 'parentDataCode',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCode: 'string',
      defineCode: 'string',
      name: 'string',
      parentDataCode: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplierResponseBodyCustomFormDataList extends $tea.Model {
  bizAlias?: string;
  componentType?: string;
  extValue?: string;
  id?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      bizAlias: 'bizAlias',
      componentType: 'componentType',
      extValue: 'extValue',
      id: 'id',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizAlias: 'string',
      componentType: 'string',
      extValue: 'string',
      id: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueInvoiceWithOrderRequestContentAdditionInfo extends $tea.Model {
  additionContent?: string;
  additionName?: string;
  dataType?: number;
  static names(): { [key: string]: string } {
    return {
      additionContent: 'additionContent',
      additionName: 'additionName',
      dataType: 'dataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionContent: 'string',
      additionName: 'string',
      dataType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueInvoiceWithOrderRequestContentProducts extends $tea.Model {
  amountIncludeTax?: string;
  productName?: string;
  quantity?: string;
  revenueCode?: string;
  specs?: string;
  taxSign?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      amountIncludeTax: 'amountIncludeTax',
      productName: 'productName',
      quantity: 'quantity',
      revenueCode: 'revenueCode',
      specs: 'specs',
      taxSign: 'taxSign',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountIncludeTax: 'string',
      productName: 'string',
      quantity: 'string',
      revenueCode: 'string',
      specs: 'string',
      taxSign: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueInvoiceWithOrderRequestContent extends $tea.Model {
  additionInfo?: IssueInvoiceWithOrderRequestContentAdditionInfo[];
  applyPerson?: string;
  bankAccount?: string;
  bankName?: string;
  invoiceRemark?: string;
  invoiceType?: number;
  naturalPerson?: string;
  orderId?: string;
  payee?: string;
  phone?: string;
  products?: IssueInvoiceWithOrderRequestContentProducts[];
  purchaser?: string;
  purchaserAddress?: string;
  purchaserTel?: string;
  remark?: string;
  reviewer?: string;
  taxnum?: string;
  static names(): { [key: string]: string } {
    return {
      additionInfo: 'additionInfo',
      applyPerson: 'applyPerson',
      bankAccount: 'bankAccount',
      bankName: 'bankName',
      invoiceRemark: 'invoiceRemark',
      invoiceType: 'invoiceType',
      naturalPerson: 'naturalPerson',
      orderId: 'orderId',
      payee: 'payee',
      phone: 'phone',
      products: 'products',
      purchaser: 'purchaser',
      purchaserAddress: 'purchaserAddress',
      purchaserTel: 'purchaserTel',
      remark: 'remark',
      reviewer: 'reviewer',
      taxnum: 'taxnum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionInfo: { 'type': 'array', 'itemType': IssueInvoiceWithOrderRequestContentAdditionInfo },
      applyPerson: 'string',
      bankAccount: 'string',
      bankName: 'string',
      invoiceRemark: 'string',
      invoiceType: 'number',
      naturalPerson: 'string',
      orderId: 'string',
      payee: 'string',
      phone: 'string',
      products: { 'type': 'array', 'itemType': IssueInvoiceWithOrderRequestContentProducts },
      purchaser: 'string',
      purchaserAddress: 'string',
      purchaserTel: 'string',
      remark: 'string',
      reviewer: 'string',
      taxnum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderBillingRequestAdditionInfos extends $tea.Model {
  additionContent?: string;
  additionName?: string;
  dataType?: number;
  static names(): { [key: string]: string } {
    return {
      additionContent: 'additionContent',
      additionName: 'additionName',
      dataType: 'dataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionContent: 'string',
      additionName: 'string',
      dataType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderBillingRequestProducts extends $tea.Model {
  /**
   * @example
   * 12.55
   */
  amountWithTax?: string;
  /**
   * @example
   * 面包
   */
  productName?: string;
  /**
   * @example
   * 5
   */
  quantity?: string;
  revenueCode?: string;
  specification?: string;
  /**
   * @example
   * 个
   */
  unit?: string;
  /**
   * @example
   * 19.99
   */
  unitPrice?: string;
  static names(): { [key: string]: string } {
    return {
      amountWithTax: 'amountWithTax',
      productName: 'productName',
      quantity: 'quantity',
      revenueCode: 'revenueCode',
      specification: 'specification',
      unit: 'unit',
      unitPrice: 'unitPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountWithTax: 'string',
      productName: 'string',
      quantity: 'string',
      revenueCode: 'string',
      specification: 'string',
      unit: 'string',
      unitPrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryCorpPayAccountsResponseBodyAccounts extends $tea.Model {
  accountClass?: string;
  accountId?: string;
  accountName?: string;
  accountNo?: string;
  accountRemark?: string;
  accountType?: string;
  creatorUid?: number;
  hasSignReceipt?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountClass: 'accountClass',
      accountId: 'accountId',
      accountName: 'accountName',
      accountNo: 'accountNo',
      accountRemark: 'accountRemark',
      accountType: 'accountType',
      creatorUid: 'creatorUid',
      hasSignReceipt: 'hasSignReceipt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountClass: 'string',
      accountId: 'string',
      accountName: 'string',
      accountNo: 'string',
      accountRemark: 'string',
      accountType: 'string',
      creatorUid: 'number',
      hasSignReceipt: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTradeByPageRequestFilter extends $tea.Model {
  /**
   * @example
   * 10
   */
  endAmount?: string;
  /**
   * @example
   * 钉钉
   */
  otherAccountName?: string;
  /**
   * @example
   * 1
   */
  startAmount?: string;
  /**
   * @example
   * in
   */
  tradeType?: string;
  static names(): { [key: string]: string } {
    return {
      endAmount: 'endAmount',
      otherAccountName: 'otherAccountName',
      startAmount: 'startAmount',
      tradeType: 'tradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endAmount: 'string',
      otherAccountName: 'string',
      startAmount: 'string',
      tradeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTradeByPageResponseBodyResultReceiptFile extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  previewUrl?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      previewUrl: 'previewUrl',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      previewUrl: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTradeByPageResponseBodyResult extends $tea.Model {
  balance?: string;
  detailId?: string;
  instanceId?: string;
  instanceTitle?: string;
  instanceUrl?: string;
  otherAccountName?: string;
  otherAccountNo?: string;
  receiptFile?: QueryAccountTradeByPageResponseBodyResultReceiptFile;
  remark?: string;
  tradeAmount?: string;
  tradeNo?: string;
  tradeTime?: number;
  tradeType?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      balance: 'balance',
      detailId: 'detailId',
      instanceId: 'instanceId',
      instanceTitle: 'instanceTitle',
      instanceUrl: 'instanceUrl',
      otherAccountName: 'otherAccountName',
      otherAccountNo: 'otherAccountNo',
      receiptFile: 'receiptFile',
      remark: 'remark',
      tradeAmount: 'tradeAmount',
      tradeNo: 'tradeNo',
      tradeTime: 'tradeTime',
      tradeType: 'tradeType',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balance: 'string',
      detailId: 'string',
      instanceId: 'string',
      instanceTitle: 'string',
      instanceUrl: 'string',
      otherAccountName: 'string',
      otherAccountNo: 'string',
      receiptFile: QueryAccountTradeByPageResponseBodyResultReceiptFile,
      remark: 'string',
      tradeAmount: 'string',
      tradeNo: 'string',
      tradeTime: 'number',
      tradeType: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAlipayUserIdResponseBodyAlipayBizUserList extends $tea.Model {
  alipayUserId?: string;
  dingUserId?: string;
  static names(): { [key: string]: string } {
    return {
      alipayUserId: 'alipayUserId',
      dingUserId: 'dingUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayUserId: 'string',
      dingUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCategoryByPageResponseBodyList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INCOME_XXX
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isDir?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 汽车
   */
  name?: string;
  /**
   * @example
   * INCOM_XXX
   */
  parentCode?: string;
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * valid
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * income
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      isDir: 'isDir',
      name: 'name',
      parentCode: 'parentCode',
      remark: 'remark',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isDir: 'boolean',
      name: 'string',
      parentCode: 'string',
      remark: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionInfoListResponseBodyCollectionInfoList extends $tea.Model {
  accountHolderName?: string;
  alipayLogonId?: string;
  auditStatus?: string;
  certNo?: string;
  collectionInfoId?: string;
  failReason?: string;
  gmtAudit?: number;
  merchantName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountHolderName: 'accountHolderName',
      alipayLogonId: 'alipayLogonId',
      auditStatus: 'auditStatus',
      certNo: 'certNo',
      collectionInfoId: 'collectionInfoId',
      failReason: 'failReason',
      gmtAudit: 'gmtAudit',
      merchantName: 'merchantName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountHolderName: 'string',
      alipayLogonId: 'string',
      auditStatus: 'string',
      certNo: 'string',
      collectionInfoId: 'string',
      failReason: 'string',
      gmtAudit: 'number',
      merchantName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerByPageResponseBodyList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CUS_XXX
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1634786828686
   */
  createTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 重要客户
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * XX有限公司
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * valid
   */
  status?: string;
  userDefineCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      status: 'status',
      userDefineCode: 'userDefineCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      description: 'string',
      name: 'string',
      status: 'string',
      userDefineCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseAccountByPageResponseBodyList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  accountCode?: string;
  /**
   * @example
   * test@alipay.com
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 网商银行
   */
  accountName?: string;
  /**
   * @example
   * test
   */
  accountRemark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALIPAY
   */
  accountType?: string;
  /**
   * @example
   * 10000.33
   */
  amount?: string;
  bankCode?: string;
  bankName?: string;
  companyCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1631526550994
   */
  createTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aaa
   */
  creator?: string;
  officialName?: string;
  officialNumber?: string;
  signStatus?: string;
  source?: string;
  status?: string;
  supportReceipt?: boolean;
  supportTradeDetail?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'accountCode',
      accountId: 'accountId',
      accountName: 'accountName',
      accountRemark: 'accountRemark',
      accountType: 'accountType',
      amount: 'amount',
      bankCode: 'bankCode',
      bankName: 'bankName',
      companyCode: 'companyCode',
      createTime: 'createTime',
      creator: 'creator',
      officialName: 'officialName',
      officialNumber: 'officialNumber',
      signStatus: 'signStatus',
      source: 'source',
      status: 'status',
      supportReceipt: 'supportReceipt',
      supportTradeDetail: 'supportTradeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
      accountId: 'string',
      accountName: 'string',
      accountRemark: 'string',
      accountType: 'string',
      amount: 'string',
      bankCode: 'string',
      bankName: 'string',
      companyCode: 'string',
      createTime: 'number',
      creator: 'string',
      officialName: 'string',
      officialNumber: 'string',
      signStatus: 'string',
      source: 'string',
      status: 'string',
      supportReceipt: 'boolean',
      supportTradeDetail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancePaymentOrderDetailResponseBodyPayeeAccountDTOBankOpenDTO extends $tea.Model {
  accountName?: string;
  bankBranchCode?: string;
  bankBranchName?: string;
  bankCardNo?: string;
  bankCode?: string;
  bankName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'accountName',
      bankBranchCode: 'bankBranchCode',
      bankBranchName: 'bankBranchName',
      bankCardNo: 'bankCardNo',
      bankCode: 'bankCode',
      bankName: 'bankName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      bankBranchCode: 'string',
      bankBranchName: 'string',
      bankCardNo: 'string',
      bankCode: 'string',
      bankName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancePaymentOrderDetailResponseBodyPayeeAccountDTO extends $tea.Model {
  bankOpenDTO?: QueryInstancePaymentOrderDetailResponseBodyPayeeAccountDTOBankOpenDTO;
  static names(): { [key: string]: string } {
    return {
      bankOpenDTO: 'bankOpenDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankOpenDTO: QueryInstancePaymentOrderDetailResponseBodyPayeeAccountDTOBankOpenDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancePaymentOrderDetailResponseBodyPayerAccountDTOBankOpenDTO extends $tea.Model {
  accountName?: string;
  bankBranchCode?: string;
  bankBranchName?: string;
  bankCardNo?: string;
  bankCode?: string;
  bankName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'accountName',
      bankBranchCode: 'bankBranchCode',
      bankBranchName: 'bankBranchName',
      bankCardNo: 'bankCardNo',
      bankCode: 'bankCode',
      bankName: 'bankName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      bankBranchCode: 'string',
      bankBranchName: 'string',
      bankCardNo: 'string',
      bankCode: 'string',
      bankName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancePaymentOrderDetailResponseBodyPayerAccountDTO extends $tea.Model {
  bankOpenDTO?: QueryInstancePaymentOrderDetailResponseBodyPayerAccountDTOBankOpenDTO;
  enterpriseAccountCode?: string;
  static names(): { [key: string]: string } {
    return {
      bankOpenDTO: 'bankOpenDTO',
      enterpriseAccountCode: 'enterpriseAccountCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankOpenDTO: QueryInstancePaymentOrderDetailResponseBodyPayerAccountDTOBankOpenDTO,
      enterpriseAccountCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceTransferDataRequestBody extends $tea.Model {
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      keys: 'keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentOrderDetailResponseBodyOrderListPayeeAccountDTOBankDTO extends $tea.Model {
  accountName?: string;
  bankBranchCode?: string;
  bankBranchName?: string;
  bankCardNo?: string;
  bankCode?: string;
  bankName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'accountName',
      bankBranchCode: 'bankBranchCode',
      bankBranchName: 'bankBranchName',
      bankCardNo: 'bankCardNo',
      bankCode: 'bankCode',
      bankName: 'bankName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      bankBranchCode: 'string',
      bankBranchName: 'string',
      bankCardNo: 'string',
      bankCode: 'string',
      bankName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentOrderDetailResponseBodyOrderListPayeeAccountDTO extends $tea.Model {
  bankDTO?: QueryPaymentOrderDetailResponseBodyOrderListPayeeAccountDTOBankDTO;
  static names(): { [key: string]: string } {
    return {
      bankDTO: 'bankDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankDTO: QueryPaymentOrderDetailResponseBodyOrderListPayeeAccountDTOBankDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentOrderDetailResponseBodyOrderListPayerAccountDTO extends $tea.Model {
  enterpriseAccountCode?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseAccountCode: 'enterpriseAccountCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseAccountCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentOrderDetailResponseBodyOrderListSubOrderListPayeeAccountDTOBankDTO extends $tea.Model {
  accountName?: string;
  bankBranchCode?: string;
  bankBranchName?: string;
  bankCardNo?: string;
  bankCode?: string;
  bankName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'accountName',
      bankBranchCode: 'bankBranchCode',
      bankBranchName: 'bankBranchName',
      bankCardNo: 'bankCardNo',
      bankCode: 'bankCode',
      bankName: 'bankName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      bankBranchCode: 'string',
      bankBranchName: 'string',
      bankCardNo: 'string',
      bankCode: 'string',
      bankName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentOrderDetailResponseBodyOrderListSubOrderListPayeeAccountDTO extends $tea.Model {
  bankDTO?: QueryPaymentOrderDetailResponseBodyOrderListSubOrderListPayeeAccountDTOBankDTO;
  static names(): { [key: string]: string } {
    return {
      bankDTO: 'bankDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankDTO: QueryPaymentOrderDetailResponseBodyOrderListSubOrderListPayeeAccountDTOBankDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentOrderDetailResponseBodyOrderListSubOrderListPayerAccountDTO extends $tea.Model {
  enterpriseAccountCode?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseAccountCode: 'enterpriseAccountCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseAccountCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentOrderDetailResponseBodyOrderListSubOrderList extends $tea.Model {
  amount?: string;
  corpId?: string;
  orderNo?: string;
  outBizNo?: string;
  payeeAccountDTO?: QueryPaymentOrderDetailResponseBodyOrderListSubOrderListPayeeAccountDTO;
  payerAccountDTO?: QueryPaymentOrderDetailResponseBodyOrderListSubOrderListPayerAccountDTO;
  remark?: string;
  status?: string;
  usage?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      corpId: 'corpId',
      orderNo: 'orderNo',
      outBizNo: 'outBizNo',
      payeeAccountDTO: 'payeeAccountDTO',
      payerAccountDTO: 'payerAccountDTO',
      remark: 'remark',
      status: 'status',
      usage: 'usage',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      corpId: 'string',
      orderNo: 'string',
      outBizNo: 'string',
      payeeAccountDTO: QueryPaymentOrderDetailResponseBodyOrderListSubOrderListPayeeAccountDTO,
      payerAccountDTO: QueryPaymentOrderDetailResponseBodyOrderListSubOrderListPayerAccountDTO,
      remark: 'string',
      status: 'string',
      usage: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentOrderDetailResponseBodyOrderList extends $tea.Model {
  amount?: string;
  corpId?: string;
  orderNo?: string;
  outBizNo?: string;
  payeeAccountDTO?: QueryPaymentOrderDetailResponseBodyOrderListPayeeAccountDTO;
  payerAccountDTO?: QueryPaymentOrderDetailResponseBodyOrderListPayerAccountDTO;
  remark?: string;
  status?: string;
  subOrderList?: QueryPaymentOrderDetailResponseBodyOrderListSubOrderList[];
  usage?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      corpId: 'corpId',
      orderNo: 'orderNo',
      outBizNo: 'outBizNo',
      payeeAccountDTO: 'payeeAccountDTO',
      payerAccountDTO: 'payerAccountDTO',
      remark: 'remark',
      status: 'status',
      subOrderList: 'subOrderList',
      usage: 'usage',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      corpId: 'string',
      orderNo: 'string',
      outBizNo: 'string',
      payeeAccountDTO: QueryPaymentOrderDetailResponseBodyOrderListPayeeAccountDTO,
      payerAccountDTO: QueryPaymentOrderDetailResponseBodyOrderListPayerAccountDTO,
      remark: 'string',
      status: 'string',
      subOrderList: { 'type': 'array', 'itemType': QueryPaymentOrderDetailResponseBodyOrderListSubOrderList },
      usage: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentRecallFileResponseBodyPaymentRecallFileList extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: string;
  fileType?: string;
  instanceId?: string;
  orderNo?: string;
  previewUrl?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      instanceId: 'instanceId',
      orderNo: 'orderNo',
      previewUrl: 'previewUrl',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileType: 'string',
      instanceId: 'string',
      orderNo: 'string',
      previewUrl: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentRecallFileVTwoResponseBodyPaymentRecallFileList extends $tea.Model {
  fileId?: string;
  fileName?: string;
  fileSize?: string;
  fileType?: string;
  instanceId?: string;
  orderNo?: string;
  previewUrl?: string;
  recallFileUrl?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      instanceId: 'instanceId',
      orderNo: 'orderNo',
      previewUrl: 'previewUrl',
      recallFileUrl: 'recallFileUrl',
      spaceId: 'spaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileType: 'string',
      instanceId: 'string',
      orderNo: 'string',
      previewUrl: 'string',
      recallFileUrl: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentStatusResponseBodyPayeeAccountInfoBankOpenDTO extends $tea.Model {
  bankBranchName?: string;
  bankCardNo?: string;
  bankName?: string;
  static names(): { [key: string]: string } {
    return {
      bankBranchName: 'bankBranchName',
      bankCardNo: 'bankCardNo',
      bankName: 'bankName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankBranchName: 'string',
      bankCardNo: 'string',
      bankName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentStatusResponseBodyPayeeAccountInfo extends $tea.Model {
  bankOpenDTO?: QueryPaymentStatusResponseBodyPayeeAccountInfoBankOpenDTO;
  static names(): { [key: string]: string } {
    return {
      bankOpenDTO: 'bankOpenDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankOpenDTO: QueryPaymentStatusResponseBodyPayeeAccountInfoBankOpenDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentStatusResponseBodyPayerAccountInfoBankOpenDTO extends $tea.Model {
  bankBranchName?: string;
  bankCardNo?: string;
  bankName?: string;
  static names(): { [key: string]: string } {
    return {
      bankBranchName: 'bankBranchName',
      bankCardNo: 'bankCardNo',
      bankName: 'bankName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankBranchName: 'string',
      bankCardNo: 'string',
      bankName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPaymentStatusResponseBodyPayerAccountInfo extends $tea.Model {
  accountType?: string;
  bankOpenDTO?: QueryPaymentStatusResponseBodyPayerAccountInfoBankOpenDTO;
  enterpriseAccountCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'accountType',
      bankOpenDTO: 'bankOpenDTO',
      enterpriseAccountCode: 'enterpriseAccountCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bankOpenDTO: QueryPaymentStatusResponseBodyPayerAccountInfoBankOpenDTO,
      enterpriseAccountCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductByPageResponseBodyList extends $tea.Model {
  code?: string;
  createTime?: number;
  description?: string;
  information?: string;
  name?: string;
  specification?: string;
  status?: string;
  unit?: string;
  userDefineCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      createTime: 'createTime',
      description: 'description',
      information: 'information',
      name: 'name',
      specification: 'specification',
      status: 'status',
      unit: 'unit',
      userDefineCode: 'userDefineCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      description: 'string',
      information: 'string',
      name: 'string',
      specification: 'string',
      status: 'string',
      unit: 'string',
      userDefineCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectByPageResponseBodyList extends $tea.Model {
  caode?: string;
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1631524595555
   */
  createTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aaaa
   */
  creator?: string;
  /**
   * @example
   * 外派项目
   */
  description?: string;
  name?: string;
  parentCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJ-xxx
   */
  projectCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 外派项目
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * valid
   */
  status?: string;
  userDefineCode?: string;
  static names(): { [key: string]: string } {
    return {
      caode: 'caode',
      code: 'code',
      createTime: 'createTime',
      creator: 'creator',
      description: 'description',
      name: 'name',
      parentCode: 'parentCode',
      projectCode: 'projectCode',
      projectName: 'projectName',
      status: 'status',
      userDefineCode: 'userDefineCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caode: 'string',
      code: 'string',
      createTime: 'number',
      creator: 'string',
      description: 'string',
      name: 'string',
      parentCode: 'string',
      projectCode: 'string',
      projectName: 'string',
      status: 'string',
      userDefineCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiptForInvoiceResponseBodyListCreator extends $tea.Model {
  /**
   * @example
   * https://xxxx
   */
  avatarUrl?: string;
  /**
   * @example
   * 测试名字
   */
  nick?: string;
  /**
   * @example
   * 1231
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      nick: 'nick',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      nick: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiptForInvoiceResponseBodyListCustomer extends $tea.Model {
  /**
   * @example
   * CUS_xxxxx
   */
  code?: string;
  /**
   * @example
   * 李四
   */
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

export class QueryReceiptForInvoiceResponseBodyListProductInfoList extends $tea.Model {
  /**
   * @example
   * 12.3
   */
  amountWithTax?: string;
  /**
   * @example
   * 100
   */
  amountWithoutTax?: string;
  /**
   * @example
   * 10
   */
  discountAmount?: string;
  /**
   * @example
   * 鱼
   */
  name?: string;
  /**
   * @example
   * 2
   */
  quantity?: string;
  /**
   * @example
   * 大型
   */
  specification?: string;
  /**
   * @example
   * XXX
   */
  taxClassificationCode?: string;
  /**
   * @example
   * 0.3
   */
  taxRate?: string;
  /**
   * @example
   * 千克
   */
  unit?: string;
  /**
   * @example
   * 12.3
   */
  unitPriceWithTax?: string;
  /**
   * @example
   * 100
   */
  unitPriceWithoutTax?: string;
  withTax?: boolean;
  static names(): { [key: string]: string } {
    return {
      amountWithTax: 'amountWithTax',
      amountWithoutTax: 'amountWithoutTax',
      discountAmount: 'discountAmount',
      name: 'name',
      quantity: 'quantity',
      specification: 'specification',
      taxClassificationCode: 'taxClassificationCode',
      taxRate: 'taxRate',
      unit: 'unit',
      unitPriceWithTax: 'unitPriceWithTax',
      unitPriceWithoutTax: 'unitPriceWithoutTax',
      withTax: 'withTax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountWithTax: 'string',
      amountWithoutTax: 'string',
      discountAmount: 'string',
      name: 'string',
      quantity: 'string',
      specification: 'string',
      taxClassificationCode: 'string',
      taxRate: 'string',
      unit: 'string',
      unitPriceWithTax: 'string',
      unitPriceWithoutTax: 'string',
      withTax: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiptForInvoiceResponseBodyList extends $tea.Model {
  /**
   * @example
   * abc
   */
  accountantBookId?: string;
  /**
   * @example
   * 5000
   */
  amount?: string;
  /**
   * @example
   * applied
   */
  applyStatus?: string;
  /**
   * @example
   * invoicing
   */
  bizStatus?: string;
  /**
   * @example
   * 123
   */
  businessId?: string;
  /**
   * @example
   * COM_DEFAULT
   */
  companyCode?: string;
  createTime?: string;
  creator?: QueryReceiptForInvoiceResponseBodyListCreator;
  customer?: QueryReceiptForInvoiceResponseBodyListCustomer;
  /**
   * @example
   * www.abc.com
   */
  drawerEmail?: string;
  /**
   * @example
   * 12345678901
   */
  drawerTelephone?: string;
  /**
   * @example
   * 增值税发票
   */
  invoiceType?: string;
  jumpUrl?: string;
  /**
   * @example
   * EM-xxxxx
   */
  modelId?: string;
  productInfoList?: QueryReceiptForInvoiceResponseBodyListProductInfoList[];
  /**
   * @example
   * abc
   */
  purchaserAccount?: string;
  /**
   * @example
   * 杭州市
   */
  purchaserAddress?: string;
  /**
   * @example
   * 建设银行
   */
  purchaserBankName?: string;
  /**
   * @example
   * 钉有限公司
   */
  purchaserName?: string;
  /**
   * @example
   * 123456
   */
  purchaserTaxNo?: string;
  /**
   * @example
   * 13333333333
   */
  purchaserTel?: string;
  /**
   * @example
   * abc
   */
  receiptId?: string;
  /**
   * @example
   * 16000000
   */
  recordTime?: string;
  /**
   * @example
   * 备注信息
   */
  remark?: string;
  /**
   * @example
   * approval
   */
  source?: string;
  /**
   * @example
   * agree
   */
  status?: string;
  /**
   * @example
   * 张三提交的开票申请单
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountantBookId: 'accountantBookId',
      amount: 'amount',
      applyStatus: 'applyStatus',
      bizStatus: 'bizStatus',
      businessId: 'businessId',
      companyCode: 'companyCode',
      createTime: 'createTime',
      creator: 'creator',
      customer: 'customer',
      drawerEmail: 'drawerEmail',
      drawerTelephone: 'drawerTelephone',
      invoiceType: 'invoiceType',
      jumpUrl: 'jumpUrl',
      modelId: 'modelId',
      productInfoList: 'productInfoList',
      purchaserAccount: 'purchaserAccount',
      purchaserAddress: 'purchaserAddress',
      purchaserBankName: 'purchaserBankName',
      purchaserName: 'purchaserName',
      purchaserTaxNo: 'purchaserTaxNo',
      purchaserTel: 'purchaserTel',
      receiptId: 'receiptId',
      recordTime: 'recordTime',
      remark: 'remark',
      source: 'source',
      status: 'status',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountantBookId: 'string',
      amount: 'string',
      applyStatus: 'string',
      bizStatus: 'string',
      businessId: 'string',
      companyCode: 'string',
      createTime: 'string',
      creator: QueryReceiptForInvoiceResponseBodyListCreator,
      customer: QueryReceiptForInvoiceResponseBodyListCustomer,
      drawerEmail: 'string',
      drawerTelephone: 'string',
      invoiceType: 'string',
      jumpUrl: 'string',
      modelId: 'string',
      productInfoList: { 'type': 'array', 'itemType': QueryReceiptForInvoiceResponseBodyListProductInfoList },
      purchaserAccount: 'string',
      purchaserAddress: 'string',
      purchaserBankName: 'string',
      purchaserName: 'string',
      purchaserTaxNo: 'string',
      purchaserTel: 'string',
      receiptId: 'string',
      recordTime: 'string',
      remark: 'string',
      source: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplierByPageResponseBodyListCustomFormDataList extends $tea.Model {
  bizAlias?: string;
  componentType?: string;
  extValue?: string;
  id?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      bizAlias: 'bizAlias',
      componentType: 'componentType',
      extValue: 'extValue',
      id: 'id',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizAlias: 'string',
      componentType: 'string',
      extValue: 'string',
      id: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplierByPageResponseBodyList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SUP_XXX
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1634786828686
   */
  createTime?: number;
  customFormDataList?: QuerySupplierByPageResponseBodyListCustomFormDataList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 原材料供应商
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * XX供应商
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * valid
   */
  status?: string;
  userDefineCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      createTime: 'createTime',
      customFormDataList: 'customFormDataList',
      description: 'description',
      name: 'name',
      status: 'status',
      userDefineCode: 'userDefineCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      customFormDataList: { 'type': 'array', 'itemType': QuerySupplierByPageResponseBodyListCustomFormDataList },
      description: 'string',
      name: 'string',
      status: 'string',
      userDefineCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserRoleListResponseBodyFinanceEmpDeptOpenList extends $tea.Model {
  cascadeDeptId?: string;
  deptId?: number;
  name?: string;
  superDeptId?: number;
  static names(): { [key: string]: string } {
    return {
      cascadeDeptId: 'cascadeDeptId',
      deptId: 'deptId',
      name: 'name',
      superDeptId: 'superDeptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadeDeptId: 'string',
      deptId: 'number',
      name: 'string',
      superDeptId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserRoleListResponseBodyRoleVOList extends $tea.Model {
  /**
   * @example
   * applicationManager
   */
  roleCode?: string;
  /**
   * @example
   * 应用管理员
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleCode: 'roleCode',
      roleName: 'roleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleCode: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceOrderInfoRequestPayerBank extends $tea.Model {
  /**
   * @example
   * 64112222
   */
  cardNo?: string;
  /**
   * @example
   * 招商银行
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cardNo: 'cardNo',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNo: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInvoiceUrlRequestBodyUrlList extends $tea.Model {
  invoiceCode?: string;
  invoiceNo?: string;
  ofdUrl?: string;
  pdfUrl?: string;
  xmlUrl?: string;
  static names(): { [key: string]: string } {
    return {
      invoiceCode: 'invoiceCode',
      invoiceNo: 'invoiceNo',
      ofdUrl: 'ofdUrl',
      pdfUrl: 'pdfUrl',
      xmlUrl: 'xmlUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoiceCode: 'string',
      invoiceNo: 'string',
      ofdUrl: 'string',
      pdfUrl: 'string',
      xmlUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInvoiceUrlRequestBody extends $tea.Model {
  companyCode?: string;
  operator?: string;
  urlList?: UpdateInvoiceUrlRequestBodyUrlList[];
  static names(): { [key: string]: string } {
    return {
      companyCode: 'companyCode',
      operator: 'operator',
      urlList: 'urlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyCode: 'string',
      operator: 'string',
      urlList: { 'type': 'array', 'itemType': UpdateInvoiceUrlRequestBodyUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInvoiceUrlResponseBodyResultFailInvoiceList extends $tea.Model {
  errorMsg?: string;
  invoiceCode?: string;
  invoiceNo?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'errorMsg',
      invoiceCode: 'invoiceCode',
      invoiceNo: 'invoiceNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      invoiceCode: 'string',
      invoiceNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInvoiceUrlResponseBodyResult extends $tea.Model {
  failInvoiceList?: UpdateInvoiceUrlResponseBodyResultFailInvoiceList[];
  isAllSuccess?: string;
  static names(): { [key: string]: string } {
    return {
      failInvoiceList: 'failInvoiceList',
      isAllSuccess: 'isAllSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failInvoiceList: { 'type': 'array', 'itemType': UpdateInvoiceUrlResponseBodyResultFailInvoiceList },
      isAllSuccess: 'string',
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
   * 新增智能财务的企业账户
   * 
   * @param request - AddFinanceEnterpriseAccountRequest
   * @param headers - AddFinanceEnterpriseAccountHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFinanceEnterpriseAccountResponse
   */
  async addFinanceEnterpriseAccountWithOptions(request: AddFinanceEnterpriseAccountRequest, headers: AddFinanceEnterpriseAccountHeaders, runtime: $Util.RuntimeOptions): Promise<AddFinanceEnterpriseAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["accountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountType)) {
      body["accountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bankCardNo)) {
      body["bankCardNo"] = request.bankCardNo;
    }

    if (!Util.isUnset(request.bankCode)) {
      body["bankCode"] = request.bankCode;
    }

    if (!Util.isUnset(request.bankName)) {
      body["bankName"] = request.bankName;
    }

    if (!Util.isUnset(request.city)) {
      body["city"] = request.city;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.officialName)) {
      body["officialName"] = request.officialName;
    }

    if (!Util.isUnset(request.officialNumber)) {
      body["officialNumber"] = request.officialNumber;
    }

    if (!Util.isUnset(request.province)) {
      body["province"] = request.province;
    }

    if (!Util.isUnset(request.taxNature)) {
      body["taxNature"] = request.taxNature;
    }

    if (!Util.isUnset(request.taxNo)) {
      body["taxNo"] = request.taxNo;
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
      action: "AddFinanceEnterpriseAccount",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/enterpriseAccounts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AddFinanceEnterpriseAccountResponse>(await this.execute(params, req, runtime), new AddFinanceEnterpriseAccountResponse({}));
  }

  /**
   * 新增智能财务的企业账户
   * 
   * @param request - AddFinanceEnterpriseAccountRequest
   * @returns AddFinanceEnterpriseAccountResponse
   */
  async addFinanceEnterpriseAccount(request: AddFinanceEnterpriseAccountRequest): Promise<AddFinanceEnterpriseAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddFinanceEnterpriseAccountHeaders({ });
    return await this.addFinanceEnterpriseAccountWithOptions(request, headers, runtime);
  }

  /**
   * 留资上报
   * 
   * @param request - AddRetentionRecordRequest
   * @param headers - AddRetentionRecordHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRetentionRecordResponse
   */
  async addRetentionRecordWithOptions(request: AddRetentionRecordRequest, headers: AddRetentionRecordHeaders, runtime: $Util.RuntimeOptions): Promise<AddRetentionRecordResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mobile)) {
      query["mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.stateCode)) {
      query["stateCode"] = request.stateCode;
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
      action: "AddRetentionRecord",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/retentionRecord`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AddRetentionRecordResponse>(await this.execute(params, req, runtime), new AddRetentionRecordResponse({}));
  }

  /**
   * 留资上报
   * 
   * @param request - AddRetentionRecordRequest
   * @returns AddRetentionRecordResponse
   */
  async addRetentionRecord(request: AddRetentionRecordRequest): Promise<AddRetentionRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddRetentionRecordHeaders({ });
    return await this.addRetentionRecordWithOptions(request, headers, runtime);
  }

  /**
   * 银行接入层通用接口
   * 
   * @param request - BankGatewayInvokeRequest
   * @param headers - BankGatewayInvokeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BankGatewayInvokeResponse
   */
  async bankGatewayInvokeWithOptions(request: BankGatewayInvokeRequest, headers: BankGatewayInvokeHeaders, runtime: $Util.RuntimeOptions): Promise<BankGatewayInvokeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionType)) {
      body["actionType"] = request.actionType;
    }

    if (!Util.isUnset(request.inputData)) {
      body["inputData"] = request.inputData;
    }

    if (!Util.isUnset(request.url)) {
      body["url"] = request.url;
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
      action: "BankGatewayInvoke",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/bankGateways/invoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<BankGatewayInvokeResponse>(await this.execute(params, req, runtime), new BankGatewayInvokeResponse({}));
  }

  /**
   * 银行接入层通用接口
   * 
   * @param request - BankGatewayInvokeRequest
   * @returns BankGatewayInvokeResponse
   */
  async bankGatewayInvoke(request: BankGatewayInvokeRequest): Promise<BankGatewayInvokeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BankGatewayInvokeHeaders({ });
    return await this.bankGatewayInvokeWithOptions(request, headers, runtime);
  }

  /**
   * 批量删除智能财务单据
   * 
   * @param request - BatchDeleteReceiptRequest
   * @param headers - BatchDeleteReceiptHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteReceiptResponse
   */
  async batchDeleteReceiptWithOptions(request: BatchDeleteReceiptRequest, headers: BatchDeleteReceiptHeaders, runtime: $Util.RuntimeOptions): Promise<BatchDeleteReceiptResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceIdList)) {
      body["instanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.operator)) {
      body["operator"] = request.operator;
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
      action: "BatchDeleteReceipt",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/instances/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteReceiptResponse>(await this.execute(params, req, runtime), new BatchDeleteReceiptResponse({}));
  }

  /**
   * 批量删除智能财务单据
   * 
   * @param request - BatchDeleteReceiptRequest
   * @returns BatchDeleteReceiptResponse
   */
  async batchDeleteReceipt(request: BatchDeleteReceiptRequest): Promise<BatchDeleteReceiptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BatchDeleteReceiptHeaders({ });
    return await this.batchDeleteReceiptWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询企业票池发票下载链接
   * 
   * @param request - BatchQueryOrgInvoiceUrlRequest
   * @param headers - BatchQueryOrgInvoiceUrlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchQueryOrgInvoiceUrlResponse
   */
  async batchQueryOrgInvoiceUrlWithOptions(request: BatchQueryOrgInvoiceUrlRequest, headers: BatchQueryOrgInvoiceUrlHeaders, runtime: $Util.RuntimeOptions): Promise<BatchQueryOrgInvoiceUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.companyCode)) {
      body["companyCode"] = request.companyCode;
    }

    if (!Util.isUnset(request.invoiceKeyVOList)) {
      body["invoiceKeyVOList"] = request.invoiceKeyVOList;
    }

    if (!Util.isUnset(request.operator)) {
      body["operator"] = request.operator;
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
      action: "BatchQueryOrgInvoiceUrl",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/invoices/urls/batchQuery`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<BatchQueryOrgInvoiceUrlResponse>(await this.execute(params, req, runtime), new BatchQueryOrgInvoiceUrlResponse({}));
  }

  /**
   * 批量查询企业票池发票下载链接
   * 
   * @param request - BatchQueryOrgInvoiceUrlRequest
   * @returns BatchQueryOrgInvoiceUrlResponse
   */
  async batchQueryOrgInvoiceUrl(request: BatchQueryOrgInvoiceUrlRequest): Promise<BatchQueryOrgInvoiceUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BatchQueryOrgInvoiceUrlHeaders({ });
    return await this.batchQueryOrgInvoiceUrlWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询支付回单文件
   * 
   * @param request - BatchQueryPaymentRecallFileRequest
   * @param headers - BatchQueryPaymentRecallFileHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchQueryPaymentRecallFileResponse
   */
  async batchQueryPaymentRecallFileWithOptions(request: BatchQueryPaymentRecallFileRequest, headers: BatchQueryPaymentRecallFileHeaders, runtime: $Util.RuntimeOptions): Promise<BatchQueryPaymentRecallFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.detailIdList)) {
      body["detailIdList"] = request.detailIdList;
    }

    if (!Util.isUnset(request.operator)) {
      body["operator"] = request.operator;
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
      action: "BatchQueryPaymentRecallFile",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/payments/recallFiles/batchQuery`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<BatchQueryPaymentRecallFileResponse>(await this.execute(params, req, runtime), new BatchQueryPaymentRecallFileResponse({}));
  }

  /**
   * 批量查询支付回单文件
   * 
   * @param request - BatchQueryPaymentRecallFileRequest
   * @returns BatchQueryPaymentRecallFileResponse
   */
  async batchQueryPaymentRecallFile(request: BatchQueryPaymentRecallFileRequest): Promise<BatchQueryPaymentRecallFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BatchQueryPaymentRecallFileHeaders({ });
    return await this.batchQueryPaymentRecallFileWithOptions(request, headers, runtime);
  }

  /**
   * 批量同步银行回单
   * 
   * @param request - BatchSyncBankReceiptRequest
   * @param headers - BatchSyncBankReceiptHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSyncBankReceiptResponse
   */
  async batchSyncBankReceiptWithOptions(request: BatchSyncBankReceiptRequest, headers: BatchSyncBankReceiptHeaders, runtime: $Util.RuntimeOptions): Promise<BatchSyncBankReceiptResponse> {
    Util.validateModel(request);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsDingtalkAccessToken)) {
      realHeaders["x-acs-dingtalk-access-token"] = Util.toJSONString(headers.xAcsDingtalkAccessToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "BatchSyncBankReceipt",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/receipts/batchSync`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<BatchSyncBankReceiptResponse>(await this.execute(params, req, runtime), new BatchSyncBankReceiptResponse({}));
  }

  /**
   * 批量同步银行回单
   * 
   * @param request - BatchSyncBankReceiptRequest
   * @returns BatchSyncBankReceiptResponse
   */
  async batchSyncBankReceipt(request: BatchSyncBankReceiptRequest): Promise<BatchSyncBankReceiptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BatchSyncBankReceiptHeaders({ });
    return await this.batchSyncBankReceiptWithOptions(request, headers, runtime);
  }

  /**
   * 已签约的企业账户解约
   * 
   * @param request - CancelSignEnterpriseAccountRequest
   * @param headers - CancelSignEnterpriseAccountHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSignEnterpriseAccountResponse
   */
  async cancelSignEnterpriseAccountWithOptions(request: CancelSignEnterpriseAccountRequest, headers: CancelSignEnterpriseAccountHeaders, runtime: $Util.RuntimeOptions): Promise<CancelSignEnterpriseAccountResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountCode)) {
      query["accountCode"] = request.accountCode;
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
      action: "CancelSignEnterpriseAccount",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/enterpriseAccounts/cancelSign`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CancelSignEnterpriseAccountResponse>(await this.execute(params, req, runtime), new CancelSignEnterpriseAccountResponse({}));
  }

  /**
   * 已签约的企业账户解约
   * 
   * @param request - CancelSignEnterpriseAccountRequest
   * @returns CancelSignEnterpriseAccountResponse
   */
  async cancelSignEnterpriseAccount(request: CancelSignEnterpriseAccountRequest): Promise<CancelSignEnterpriseAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CancelSignEnterpriseAccountHeaders({ });
    return await this.cancelSignEnterpriseAccountWithOptions(request, headers, runtime);
  }

  /**
   * 查验发票是否生成凭证
   * 
   * @param request - CheckVoucherStatusRequest
   * @param headers - CheckVoucherStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckVoucherStatusResponse
   */
  async checkVoucherStatusWithOptions(request: CheckVoucherStatusRequest, headers: CheckVoucherStatusHeaders, runtime: $Util.RuntimeOptions): Promise<CheckVoucherStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.companyCode)) {
      body["companyCode"] = request.companyCode;
    }

    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.financeType)) {
      body["financeType"] = request.financeType;
    }

    if (!Util.isUnset(request.invoiceCode)) {
      body["invoiceCode"] = request.invoiceCode;
    }

    if (!Util.isUnset(request.invoiceNo)) {
      body["invoiceNo"] = request.invoiceNo;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taxNo)) {
      body["taxNo"] = request.taxNo;
    }

    if (!Util.isUnset(request.verifyStatus)) {
      body["verifyStatus"] = request.verifyStatus;
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
      action: "CheckVoucherStatus",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/invoices/checkVoucherStatus/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CheckVoucherStatusResponse>(await this.execute(params, req, runtime), new CheckVoucherStatusResponse({}));
  }

  /**
   * 查验发票是否生成凭证
   * 
   * @param request - CheckVoucherStatusRequest
   * @returns CheckVoucherStatusResponse
   */
  async checkVoucherStatus(request: CheckVoucherStatusRequest): Promise<CheckVoucherStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CheckVoucherStatusHeaders({ });
    return await this.checkVoucherStatusWithOptions(request, headers, runtime);
  }

  /**
   * 获取唤起智能财务收银台的地址
   * 
   * @param request - ConfirmPaymentOrderRequest
   * @param headers - ConfirmPaymentOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmPaymentOrderResponse
   */
  async confirmPaymentOrderWithOptions(request: ConfirmPaymentOrderRequest, headers: ConfirmPaymentOrderHeaders, runtime: $Util.RuntimeOptions): Promise<ConfirmPaymentOrderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outBizNoList)) {
      body["outBizNoList"] = request.outBizNoList;
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
      action: "ConfirmPaymentOrder",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/payments/confirm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ConfirmPaymentOrderResponse>(await this.execute(params, req, runtime), new ConfirmPaymentOrderResponse({}));
  }

  /**
   * 获取唤起智能财务收银台的地址
   * 
   * @param request - ConfirmPaymentOrderRequest
   * @returns ConfirmPaymentOrderResponse
   */
  async confirmPaymentOrder(request: ConfirmPaymentOrderRequest): Promise<ConfirmPaymentOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ConfirmPaymentOrderHeaders({ });
    return await this.confirmPaymentOrderWithOptions(request, headers, runtime);
  }

  /**
   * 创建收款订单
   * 
   * @param request - CreateCollectionOrderRequest
   * @param headers - CreateCollectionOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCollectionOrderResponse
   */
  async createCollectionOrderWithOptions(request: CreateCollectionOrderRequest, headers: CreateCollectionOrderHeaders, runtime: $Util.RuntimeOptions): Promise<CreateCollectionOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.amount)) {
      query["amount"] = request.amount;
    }

    if (!Util.isUnset(request.collectionInfoId)) {
      query["collectionInfoId"] = request.collectionInfoId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.remark)) {
      query["remark"] = request.remark;
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
      action: "CreateCollectionOrder",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/me/collections/orders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateCollectionOrderResponse>(await this.execute(params, req, runtime), new CreateCollectionOrderResponse({}));
  }

  /**
   * 创建收款订单
   * 
   * @param request - CreateCollectionOrderRequest
   * @returns CreateCollectionOrderResponse
   */
  async createCollectionOrder(request: CreateCollectionOrderRequest): Promise<CreateCollectionOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateCollectionOrderHeaders({ });
    return await this.createCollectionOrderWithOptions(request, headers, runtime);
  }

  /**
   * 创建智能财务待支付订单
   * 
   * @param request - CreatePaymentOrderRequest
   * @param headers - CreatePaymentOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePaymentOrderResponse
   */
  async createPaymentOrderWithOptions(request: CreatePaymentOrderRequest, headers: CreatePaymentOrderHeaders, runtime: $Util.RuntimeOptions): Promise<CreatePaymentOrderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.amount)) {
      body["amount"] = request.amount;
    }

    if (!Util.isUnset(request.expireTime)) {
      body["expireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.outBizNo)) {
      body["outBizNo"] = request.outBizNo;
    }

    if (!Util.isUnset(request.payeeAccountDTO)) {
      body["payeeAccountDTO"] = request.payeeAccountDTO;
    }

    if (!Util.isUnset(request.payerAccountDTO)) {
      body["payerAccountDTO"] = request.payerAccountDTO;
    }

    if (!Util.isUnset(request.paymentOrderTitle)) {
      body["paymentOrderTitle"] = request.paymentOrderTitle;
    }

    if (!Util.isUnset(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!Util.isUnset(request.usage)) {
      body["usage"] = request.usage;
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
      action: "CreatePaymentOrder",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/payments/orders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreatePaymentOrderResponse>(await this.execute(params, req, runtime), new CreatePaymentOrderResponse({}));
  }

  /**
   * 创建智能财务待支付订单
   * 
   * @param request - CreatePaymentOrderRequest
   * @returns CreatePaymentOrderResponse
   */
  async createPaymentOrder(request: CreatePaymentOrderRequest): Promise<CreatePaymentOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreatePaymentOrderHeaders({ });
    return await this.createPaymentOrderWithOptions(request, headers, runtime);
  }

  /**
   * 停用企业主体
   * 
   * @param request - DeleteCompanyRequest
   * @param headers - DeleteCompanyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCompanyResponse
   */
  async deleteCompanyWithOptions(request: DeleteCompanyRequest, headers: DeleteCompanyHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteCompanyResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.companyCode)) {
      query["companyCode"] = request.companyCode;
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
      action: "DeleteCompany",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/companies/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteCompanyResponse>(await this.execute(params, req, runtime), new DeleteCompanyResponse({}));
  }

  /**
   * 停用企业主体
   * 
   * @param request - DeleteCompanyRequest
   * @returns DeleteCompanyResponse
   */
  async deleteCompany(request: DeleteCompanyRequest): Promise<DeleteCompanyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteCompanyHeaders({ });
    return await this.deleteCompanyWithOptions(request, headers, runtime);
  }

  /**
   * 停用企业账户
   * 
   * @param request - DeleteEnterpriseAccountRequest
   * @param headers - DeleteEnterpriseAccountHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnterpriseAccountResponse
   */
  async deleteEnterpriseAccountWithOptions(request: DeleteEnterpriseAccountRequest, headers: DeleteEnterpriseAccountHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteEnterpriseAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountCode)) {
      body["accountCode"] = request.accountCode;
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
      action: "DeleteEnterpriseAccount",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/enterpriseAccounts/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteEnterpriseAccountResponse>(await this.execute(params, req, runtime), new DeleteEnterpriseAccountResponse({}));
  }

  /**
   * 停用企业账户
   * 
   * @param request - DeleteEnterpriseAccountRequest
   * @returns DeleteEnterpriseAccountResponse
   */
  async deleteEnterpriseAccount(request: DeleteEnterpriseAccountRequest): Promise<DeleteEnterpriseAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteEnterpriseAccountHeaders({ });
    return await this.deleteEnterpriseAccountWithOptions(request, headers, runtime);
  }

  /**
   * 删除智能财务OA审批单，有权限控制
   * 
   * @param request - DeleteProcessInstanceRequest
   * @param headers - DeleteProcessInstanceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProcessInstanceResponse
   */
  async deleteProcessInstanceWithOptions(request: DeleteProcessInstanceRequest, headers: DeleteProcessInstanceHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteProcessInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
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
      action: "DeleteProcessInstance",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/processInstance/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteProcessInstanceResponse>(await this.execute(params, req, runtime), new DeleteProcessInstanceResponse({}));
  }

  /**
   * 删除智能财务OA审批单，有权限控制
   * 
   * @param request - DeleteProcessInstanceRequest
   * @returns DeleteProcessInstanceResponse
   */
  async deleteProcessInstance(request: DeleteProcessInstanceRequest): Promise<DeleteProcessInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteProcessInstanceHeaders({ });
    return await this.deleteProcessInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 删除工作流流程实例
   * 
   * @param request - DeleteWorkflowInstanceRequest
   * @param headers - DeleteWorkflowInstanceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowInstanceResponse
   */
  async deleteWorkflowInstanceWithOptions(request: DeleteWorkflowInstanceRequest, headers: DeleteWorkflowInstanceHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteWorkflowInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
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
      action: "DeleteWorkflowInstance",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/workflowInstance/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkflowInstanceResponse>(await this.execute(params, req, runtime), new DeleteWorkflowInstanceResponse({}));
  }

  /**
   * 删除工作流流程实例
   * 
   * @param request - DeleteWorkflowInstanceRequest
   * @returns DeleteWorkflowInstanceResponse
   */
  async deleteWorkflowInstance(request: DeleteWorkflowInstanceRequest): Promise<DeleteWorkflowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteWorkflowInstanceHeaders({ });
    return await this.deleteWorkflowInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 启用企业主体
   * 
   * @param request - EnableCompanyRequest
   * @param headers - EnableCompanyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableCompanyResponse
   */
  async enableCompanyWithOptions(request: EnableCompanyRequest, headers: EnableCompanyHeaders, runtime: $Util.RuntimeOptions): Promise<EnableCompanyResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.companyCode)) {
      query["companyCode"] = request.companyCode;
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
      action: "EnableCompany",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/companies/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<EnableCompanyResponse>(await this.execute(params, req, runtime), new EnableCompanyResponse({}));
  }

  /**
   * 启用企业主体
   * 
   * @param request - EnableCompanyRequest
   * @returns EnableCompanyResponse
   */
  async enableCompany(request: EnableCompanyRequest): Promise<EnableCompanyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EnableCompanyHeaders({ });
    return await this.enableCompanyWithOptions(request, headers, runtime);
  }

  /**
   * 启用企业账户
   * 
   * @param request - EnableEnterpriseAccountRequest
   * @param headers - EnableEnterpriseAccountHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableEnterpriseAccountResponse
   */
  async enableEnterpriseAccountWithOptions(request: EnableEnterpriseAccountRequest, headers: EnableEnterpriseAccountHeaders, runtime: $Util.RuntimeOptions): Promise<EnableEnterpriseAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountCode)) {
      body["accountCode"] = request.accountCode;
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
      action: "EnableEnterpriseAccount",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/enterpriseAccounts/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<EnableEnterpriseAccountResponse>(await this.execute(params, req, runtime), new EnableEnterpriseAccountResponse({}));
  }

  /**
   * 启用企业账户
   * 
   * @param request - EnableEnterpriseAccountRequest
   * @returns EnableEnterpriseAccountResponse
   */
  async enableEnterpriseAccount(request: EnableEnterpriseAccountRequest): Promise<EnableEnterpriseAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EnableEnterpriseAccountHeaders({ });
    return await this.enableEnterpriseAccountWithOptions(request, headers, runtime);
  }

  /**
   * 获取费用类别
   * 
   * @param request - GetCategoryRequest
   * @param headers - GetCategoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCategoryResponse
   */
  async getCategoryWithOptions(request: GetCategoryRequest, headers: GetCategoryHeaders, runtime: $Util.RuntimeOptions): Promise<GetCategoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      query["code"] = request.code;
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
      action: "GetCategory",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/categories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetCategoryResponse>(await this.execute(params, req, runtime), new GetCategoryResponse({}));
  }

  /**
   * 获取费用类别
   * 
   * @param request - GetCategoryRequest
   * @returns GetCategoryResponse
   */
  async getCategory(request: GetCategoryRequest): Promise<GetCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetCategoryHeaders({ });
    return await this.getCategoryWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业内自定义辅助档案信息
   * 
   * @param request - GetDefineRequest
   * @param headers - GetDefineHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDefineResponse
   */
  async getDefineWithOptions(request: GetDefineRequest, headers: GetDefineHeaders, runtime: $Util.RuntimeOptions): Promise<GetDefineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

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
      action: "GetDefine",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/customInfos/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetDefineResponse>(await this.execute(params, req, runtime), new GetDefineResponse({}));
  }

  /**
   * 查询企业内自定义辅助档案信息
   * 
   * @param request - GetDefineRequest
   * @returns GetDefineResponse
   */
  async getDefine(request: GetDefineRequest): Promise<GetDefineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDefineHeaders({ });
    return await this.getDefineWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业内自定义辅助档案数据信息
   * 
   * @param request - GetDefineDataRequest
   * @param headers - GetDefineDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDefineDataResponse
   */
  async getDefineDataWithOptions(request: GetDefineDataRequest, headers: GetDefineDataHeaders, runtime: $Util.RuntimeOptions): Promise<GetDefineDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

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
      action: "GetDefineData",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/customDatas/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetDefineDataResponse>(await this.execute(params, req, runtime), new GetDefineDataResponse({}));
  }

  /**
   * 查询企业内自定义辅助档案数据信息
   * 
   * @param request - GetDefineDataRequest
   * @returns GetDefineDataResponse
   */
  async getDefineData(request: GetDefineDataRequest): Promise<GetDefineDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDefineDataHeaders({ });
    return await this.getDefineDataWithOptions(request, headers, runtime);
  }

  /**
   * 获取企业账户
   * 
   * @param request - GetFinanceAccountRequest
   * @param headers - GetFinanceAccountHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFinanceAccountResponse
   */
  async getFinanceAccountWithOptions(request: GetFinanceAccountRequest, headers: GetFinanceAccountHeaders, runtime: $Util.RuntimeOptions): Promise<GetFinanceAccountResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountCode)) {
      query["accountCode"] = request.accountCode;
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
      action: "GetFinanceAccount",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/financeAccounts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetFinanceAccountResponse>(await this.execute(params, req, runtime), new GetFinanceAccountResponse({}));
  }

  /**
   * 获取企业账户
   * 
   * @param request - GetFinanceAccountRequest
   * @returns GetFinanceAccountResponse
   */
  async getFinanceAccount(request: GetFinanceAccountRequest): Promise<GetFinanceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetFinanceAccountHeaders({ });
    return await this.getFinanceAccountWithOptions(request, headers, runtime);
  }

  /**
   * 获取单条项目
   * 
   * @param request - GetProjectRequest
   * @param headers - GetProjectHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(request: GetProjectRequest, headers: GetProjectHeaders, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      query["code"] = request.code;
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
      action: "GetProject",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.execute(params, req, runtime), new GetProjectResponse({}));
  }

  /**
   * 获取单条项目
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(request: GetProjectRequest): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetProjectHeaders({ });
    return await this.getProjectWithOptions(request, headers, runtime);
  }

  /**
   * 获取智能财务单据详情
   * 
   * @param request - GetReceiptRequest
   * @param headers - GetReceiptHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReceiptResponse
   */
  async getReceiptWithOptions(request: GetReceiptRequest, headers: GetReceiptHeaders, runtime: $Util.RuntimeOptions): Promise<GetReceiptResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessId)) {
      query["businessId"] = request.businessId;
    }

    if (!Util.isUnset(request.code)) {
      query["code"] = request.code;
    }

    if (!Util.isUnset(request.modelId)) {
      query["modelId"] = request.modelId;
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
      action: "GetReceipt",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/receipts/details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetReceiptResponse>(await this.execute(params, req, runtime), new GetReceiptResponse({}));
  }

  /**
   * 获取智能财务单据详情
   * 
   * @param request - GetReceiptRequest
   * @returns GetReceiptResponse
   */
  async getReceipt(request: GetReceiptRequest): Promise<GetReceiptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetReceiptHeaders({ });
    return await this.getReceiptWithOptions(request, headers, runtime);
  }

  /**
   * 获取智能财务应用内维护的供应商信息
   * 
   * @param request - GetSupplierRequest
   * @param headers - GetSupplierHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSupplierResponse
   */
  async getSupplierWithOptions(request: GetSupplierRequest, headers: GetSupplierHeaders, runtime: $Util.RuntimeOptions): Promise<GetSupplierResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      query["code"] = request.code;
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
      action: "GetSupplier",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/suppliers/details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetSupplierResponse>(await this.execute(params, req, runtime), new GetSupplierResponse({}));
  }

  /**
   * 获取智能财务应用内维护的供应商信息
   * 
   * @param request - GetSupplierRequest
   * @returns GetSupplierResponse
   */
  async getSupplier(request: GetSupplierRequest): Promise<GetSupplierResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetSupplierHeaders({ });
    return await this.getSupplierWithOptions(request, headers, runtime);
  }

  /**
   * 订单开票
   * 
   * @param request - IssueInvoiceWithOrderRequest
   * @param headers - IssueInvoiceWithOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IssueInvoiceWithOrderResponse
   */
  async issueInvoiceWithOrderWithOptions(request: IssueInvoiceWithOrderRequest, headers: IssueInvoiceWithOrderHeaders, runtime: $Util.RuntimeOptions): Promise<IssueInvoiceWithOrderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.financeAppKey)) {
      body["financeAppKey"] = request.financeAppKey;
    }

    if (!Util.isUnset(request.operator)) {
      body["operator"] = request.operator;
    }

    if (!Util.isUnset(request.signature)) {
      body["signature"] = request.signature;
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
      action: "IssueInvoiceWithOrder",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/issueInvoices/order`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<IssueInvoiceWithOrderResponse>(await this.execute(params, req, runtime), new IssueInvoiceWithOrderResponse({}));
  }

  /**
   * 订单开票
   * 
   * @param request - IssueInvoiceWithOrderRequest
   * @returns IssueInvoiceWithOrderResponse
   */
  async issueInvoiceWithOrder(request: IssueInvoiceWithOrderRequest): Promise<IssueInvoiceWithOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new IssueInvoiceWithOrderHeaders({ });
    return await this.issueInvoiceWithOrderWithOptions(request, headers, runtime);
  }

  /**
   * 根据不同的bizType查询不同的数据
   * 
   * @param request - LinkCommonInvokeRequest
   * @param headers - LinkCommonInvokeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LinkCommonInvokeResponse
   */
  async linkCommonInvokeWithOptions(request: LinkCommonInvokeRequest, headers: LinkCommonInvokeHeaders, runtime: $Util.RuntimeOptions): Promise<LinkCommonInvokeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizType)) {
      body["bizType"] = request.bizType;
    }

    if (!Util.isUnset(request.data)) {
      body["data"] = request.data;
    }

    if (!Util.isUnset(request.invokeId)) {
      body["invokeId"] = request.invokeId;
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
      action: "LinkCommonInvoke",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/link/bizTypes/invoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<LinkCommonInvokeResponse>(await this.execute(params, req, runtime), new LinkCommonInvokeResponse({}));
  }

  /**
   * 根据不同的bizType查询不同的数据
   * 
   * @param request - LinkCommonInvokeRequest
   * @returns LinkCommonInvokeResponse
   */
  async linkCommonInvoke(request: LinkCommonInvokeRequest): Promise<LinkCommonInvokeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new LinkCommonInvokeHeaders({ });
    return await this.linkCommonInvokeWithOptions(request, headers, runtime);
  }

  /**
   * 订单开票
   * 
   * @param request - OrderBillingRequest
   * @param headers - OrderBillingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OrderBillingResponse
   */
  async orderBillingWithOptions(request: OrderBillingRequest, headers: OrderBillingHeaders, runtime: $Util.RuntimeOptions): Promise<OrderBillingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.additionInfos)) {
      body["additionInfos"] = request.additionInfos;
    }

    if (!Util.isUnset(request.appKey)) {
      body["appKey"] = request.appKey;
    }

    if (!Util.isUnset(request.applyPerson)) {
      body["applyPerson"] = request.applyPerson;
    }

    if (!Util.isUnset(request.invoiceRemark)) {
      body["invoiceRemark"] = request.invoiceRemark;
    }

    if (!Util.isUnset(request.invoiceType)) {
      body["invoiceType"] = request.invoiceType;
    }

    if (!Util.isUnset(request.isNaturalPerson)) {
      body["isNaturalPerson"] = request.isNaturalPerson;
    }

    if (!Util.isUnset(request.operator)) {
      body["operator"] = request.operator;
    }

    if (!Util.isUnset(request.orderId)) {
      body["orderId"] = request.orderId;
    }

    if (!Util.isUnset(request.payee)) {
      body["payee"] = request.payee;
    }

    if (!Util.isUnset(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!Util.isUnset(request.products)) {
      body["products"] = request.products;
    }

    if (!Util.isUnset(request.purchaserAddress)) {
      body["purchaserAddress"] = request.purchaserAddress;
    }

    if (!Util.isUnset(request.purchaserBankAccount)) {
      body["purchaserBankAccount"] = request.purchaserBankAccount;
    }

    if (!Util.isUnset(request.purchaserBankName)) {
      body["purchaserBankName"] = request.purchaserBankName;
    }

    if (!Util.isUnset(request.purchaserName)) {
      body["purchaserName"] = request.purchaserName;
    }

    if (!Util.isUnset(request.purchaserTaxNo)) {
      body["purchaserTaxNo"] = request.purchaserTaxNo;
    }

    if (!Util.isUnset(request.purchaserTel)) {
      body["purchaserTel"] = request.purchaserTel;
    }

    if (!Util.isUnset(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!Util.isUnset(request.reviewer)) {
      body["reviewer"] = request.reviewer;
    }

    if (!Util.isUnset(request.signature)) {
      body["signature"] = request.signature;
    }

    if (!Util.isUnset(request.taxSign)) {
      body["taxSign"] = request.taxSign;
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
      action: "OrderBilling",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/billings/order`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<OrderBillingResponse>(await this.execute(params, req, runtime), new OrderBillingResponse({}));
  }

  /**
   * 订单开票
   * 
   * @param request - OrderBillingRequest
   * @returns OrderBillingResponse
   */
  async orderBilling(request: OrderBillingRequest): Promise<OrderBillingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new OrderBillingHeaders({ });
    return await this.orderBillingWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业支付绑定的付款账户列表
   * 
   * @param headers - PageQueryCorpPayAccountsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageQueryCorpPayAccountsResponse
   */
  async pageQueryCorpPayAccountsWithOptions(headers: PageQueryCorpPayAccountsHeaders, runtime: $Util.RuntimeOptions): Promise<PageQueryCorpPayAccountsResponse> {
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
      action: "PageQueryCorpPayAccounts",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/corpPayAccounts/batch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<PageQueryCorpPayAccountsResponse>(await this.execute(params, req, runtime), new PageQueryCorpPayAccountsResponse({}));
  }

  /**
   * 查询企业支付绑定的付款账户列表
   * @returns PageQueryCorpPayAccountsResponse
   */
  async pageQueryCorpPayAccounts(): Promise<PageQueryCorpPayAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PageQueryCorpPayAccountsHeaders({ });
    return await this.pageQueryCorpPayAccountsWithOptions(headers, runtime);
  }

  /**
   * 分页查询账户的银行交易流水
   * 
   * @param request - QueryAccountTradeByPageRequest
   * @param headers - QueryAccountTradeByPageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountTradeByPageResponse
   */
  async queryAccountTradeByPageWithOptions(request: QueryAccountTradeByPageRequest, headers: QueryAccountTradeByPageHeaders, runtime: $Util.RuntimeOptions): Promise<QueryAccountTradeByPageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["accountId"] = request.accountId;
    }

    if (!Util.isUnset(request.endDate)) {
      body["endDate"] = request.endDate;
    }

    if (!Util.isUnset(request.filter)) {
      body["filter"] = request.filter;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      body["startDate"] = request.startDate;
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
      action: "QueryAccountTradeByPage",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/payments/trades/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryAccountTradeByPageResponse>(await this.execute(params, req, runtime), new QueryAccountTradeByPageResponse({}));
  }

  /**
   * 分页查询账户的银行交易流水
   * 
   * @param request - QueryAccountTradeByPageRequest
   * @returns QueryAccountTradeByPageResponse
   */
  async queryAccountTradeByPage(request: QueryAccountTradeByPageRequest): Promise<QueryAccountTradeByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryAccountTradeByPageHeaders({ });
    return await this.queryAccountTradeByPageWithOptions(request, headers, runtime);
  }

  /**
   * 根据staffId批量查询返回支付宝userId
   * 
   * @param request - QueryAlipayUserIdRequest
   * @param headers - QueryAlipayUserIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAlipayUserIdResponse
   */
  async queryAlipayUserIdWithOptions(request: QueryAlipayUserIdRequest, headers: QueryAlipayUserIdHeaders, runtime: $Util.RuntimeOptions): Promise<QueryAlipayUserIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dingUserIds)) {
      body["dingUserIds"] = request.dingUserIds;
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
      action: "QueryAlipayUserId",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/consumption/aliPay/getUserId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryAlipayUserIdResponse>(await this.execute(params, req, runtime), new QueryAlipayUserIdResponse({}));
  }

  /**
   * 根据staffId批量查询返回支付宝userId
   * 
   * @param request - QueryAlipayUserIdRequest
   * @returns QueryAlipayUserIdResponse
   */
  async queryAlipayUserId(request: QueryAlipayUserIdRequest): Promise<QueryAlipayUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryAlipayUserIdHeaders({ });
    return await this.queryAlipayUserIdWithOptions(request, headers, runtime);
  }

  /**
   * 批量获取费用类别
   * 
   * @param request - QueryCategoryByPageRequest
   * @param headers - QueryCategoryByPageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCategoryByPageResponse
   */
  async queryCategoryByPageWithOptions(request: QueryCategoryByPageRequest, headers: QueryCategoryByPageHeaders, runtime: $Util.RuntimeOptions): Promise<QueryCategoryByPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
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
      action: "QueryCategoryByPage",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/categories/batch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryCategoryByPageResponse>(await this.execute(params, req, runtime), new QueryCategoryByPageResponse({}));
  }

  /**
   * 批量获取费用类别
   * 
   * @param request - QueryCategoryByPageRequest
   * @returns QueryCategoryByPageResponse
   */
  async queryCategoryByPage(request: QueryCategoryByPageRequest): Promise<QueryCategoryByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryCategoryByPageHeaders({ });
    return await this.queryCategoryByPageWithOptions(request, headers, runtime);
  }

  /**
   * 查询进件信息
   * 
   * @param request - QueryCollectionInfoListRequest
   * @param headers - QueryCollectionInfoListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCollectionInfoListResponse
   */
  async queryCollectionInfoListWithOptions(request: QueryCollectionInfoListRequest, headers: QueryCollectionInfoListHeaders, runtime: $Util.RuntimeOptions): Promise<QueryCollectionInfoListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
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
      action: "QueryCollectionInfoList",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/me/collections/accounts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryCollectionInfoListResponse>(await this.execute(params, req, runtime), new QueryCollectionInfoListResponse({}));
  }

  /**
   * 查询进件信息
   * 
   * @param request - QueryCollectionInfoListRequest
   * @returns QueryCollectionInfoListResponse
   */
  async queryCollectionInfoList(request: QueryCollectionInfoListRequest): Promise<QueryCollectionInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryCollectionInfoListHeaders({ });
    return await this.queryCollectionInfoListWithOptions(request, headers, runtime);
  }

  /**
   * 查询收款订单
   * 
   * @param request - QueryCollectionOrderRequest
   * @param headers - QueryCollectionOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCollectionOrderResponse
   */
  async queryCollectionOrderWithOptions(request: QueryCollectionOrderRequest, headers: QueryCollectionOrderHeaders, runtime: $Util.RuntimeOptions): Promise<QueryCollectionOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
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
      action: "QueryCollectionOrder",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/me/collections/orders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryCollectionOrderResponse>(await this.execute(params, req, runtime), new QueryCollectionOrderResponse({}));
  }

  /**
   * 查询收款订单
   * 
   * @param request - QueryCollectionOrderRequest
   * @returns QueryCollectionOrderResponse
   */
  async queryCollectionOrder(request: QueryCollectionOrderRequest): Promise<QueryCollectionOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryCollectionOrderHeaders({ });
    return await this.queryCollectionOrderWithOptions(request, headers, runtime);
  }

  /**
   * 根据企业名称列表，查询是否在钉钉有组织，及组织的认证状态与规模
   * 
   * @param tmpReq - QueryCorpScaleRequest
   * @param headers - QueryCorpScaleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCorpScaleResponse
   */
  async queryCorpScaleWithOptions(tmpReq: QueryCorpScaleRequest, headers: QueryCorpScaleHeaders, runtime: $Util.RuntimeOptions): Promise<QueryCorpScaleResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryCorpScaleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.corpNames)) {
      request.corpNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.corpNames, "corpNames", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpNamesShrink)) {
      query["corpNames"] = request.corpNamesShrink;
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
      action: "QueryCorpScale",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/queryCorpScale`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryCorpScaleResponse>(await this.execute(params, req, runtime), new QueryCorpScaleResponse({}));
  }

  /**
   * 根据企业名称列表，查询是否在钉钉有组织，及组织的认证状态与规模
   * 
   * @param request - QueryCorpScaleRequest
   * @returns QueryCorpScaleResponse
   */
  async queryCorpScale(request: QueryCorpScaleRequest): Promise<QueryCorpScaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryCorpScaleHeaders({ });
    return await this.queryCorpScaleWithOptions(request, headers, runtime);
  }

  /**
   * 分页批量获取智能财务应用内维护的客户信息
   * 
   * @param request - QueryCustomerByPageRequest
   * @param headers - QueryCustomerByPageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomerByPageResponse
   */
  async queryCustomerByPageWithOptions(request: QueryCustomerByPageRequest, headers: QueryCustomerByPageHeaders, runtime: $Util.RuntimeOptions): Promise<QueryCustomerByPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
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
      action: "QueryCustomerByPage",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/customers/batch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryCustomerByPageResponse>(await this.execute(params, req, runtime), new QueryCustomerByPageResponse({}));
  }

  /**
   * 分页批量获取智能财务应用内维护的客户信息
   * 
   * @param request - QueryCustomerByPageRequest
   * @returns QueryCustomerByPageResponse
   */
  async queryCustomerByPage(request: QueryCustomerByPageRequest): Promise<QueryCustomerByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryCustomerByPageHeaders({ });
    return await this.queryCustomerByPageWithOptions(request, headers, runtime);
  }

  /**
   * 批量获取企业账户
   * 
   * @param request - QueryEnterpriseAccountByPageRequest
   * @param headers - QueryEnterpriseAccountByPageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEnterpriseAccountByPageResponse
   */
  async queryEnterpriseAccountByPageWithOptions(request: QueryEnterpriseAccountByPageRequest, headers: QueryEnterpriseAccountByPageHeaders, runtime: $Util.RuntimeOptions): Promise<QueryEnterpriseAccountByPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
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
      action: "QueryEnterpriseAccountByPage",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/financeAccounts/batch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryEnterpriseAccountByPageResponse>(await this.execute(params, req, runtime), new QueryEnterpriseAccountByPageResponse({}));
  }

  /**
   * 批量获取企业账户
   * 
   * @param request - QueryEnterpriseAccountByPageRequest
   * @returns QueryEnterpriseAccountByPageResponse
   */
  async queryEnterpriseAccountByPage(request: QueryEnterpriseAccountByPageRequest): Promise<QueryEnterpriseAccountByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryEnterpriseAccountByPageHeaders({ });
    return await this.queryEnterpriseAccountByPageWithOptions(request, headers, runtime);
  }

  /**
   * 获取智能财务企业账户签约地址
   * 
   * @param request - QueryEnterpriseAccountSignUrlRequest
   * @param headers - QueryEnterpriseAccountSignUrlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEnterpriseAccountSignUrlResponse
   */
  async queryEnterpriseAccountSignUrlWithOptions(request: QueryEnterpriseAccountSignUrlRequest, headers: QueryEnterpriseAccountSignUrlHeaders, runtime: $Util.RuntimeOptions): Promise<QueryEnterpriseAccountSignUrlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountCode)) {
      query["accountCode"] = request.accountCode;
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
      action: "QueryEnterpriseAccountSignUrl",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/enterpriseAccounts/sign`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryEnterpriseAccountSignUrlResponse>(await this.execute(params, req, runtime), new QueryEnterpriseAccountSignUrlResponse({}));
  }

  /**
   * 获取智能财务企业账户签约地址
   * 
   * @param request - QueryEnterpriseAccountSignUrlRequest
   * @returns QueryEnterpriseAccountSignUrlResponse
   */
  async queryEnterpriseAccountSignUrl(request: QueryEnterpriseAccountSignUrlRequest): Promise<QueryEnterpriseAccountSignUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryEnterpriseAccountSignUrlHeaders({ });
    return await this.queryEnterpriseAccountSignUrlWithOptions(request, headers, runtime);
  }

  /**
   * 查询组织的企业码开通情况
   * 
   * @param headers - QueryEnterpriseCodeOpenDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEnterpriseCodeOpenDetailResponse
   */
  async queryEnterpriseCodeOpenDetailWithOptions(headers: QueryEnterpriseCodeOpenDetailHeaders, runtime: $Util.RuntimeOptions): Promise<QueryEnterpriseCodeOpenDetailResponse> {
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
      action: "QueryEnterpriseCodeOpenDetail",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/enterprisecode/getOpenDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryEnterpriseCodeOpenDetailResponse>(await this.execute(params, req, runtime), new QueryEnterpriseCodeOpenDetailResponse({}));
  }

  /**
   * 查询组织的企业码开通情况
   * @returns QueryEnterpriseCodeOpenDetailResponse
   */
  async queryEnterpriseCodeOpenDetail(): Promise<QueryEnterpriseCodeOpenDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryEnterpriseCodeOpenDetailHeaders({ });
    return await this.queryEnterpriseCodeOpenDetailWithOptions(headers, runtime);
  }

  /**
   * 查询支付订单详情
   * 
   * @param request - QueryInstancePaymentOrderDetailRequest
   * @param headers - QueryInstancePaymentOrderDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstancePaymentOrderDetailResponse
   */
  async queryInstancePaymentOrderDetailWithOptions(instanceId: string, request: QueryInstancePaymentOrderDetailRequest, headers: QueryInstancePaymentOrderDetailHeaders, runtime: $Util.RuntimeOptions): Promise<QueryInstancePaymentOrderDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderNo)) {
      query["orderNo"] = request.orderNo;
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
      action: "QueryInstancePaymentOrderDetail",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/instances/${instanceId}/paymentOrders/details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryInstancePaymentOrderDetailResponse>(await this.execute(params, req, runtime), new QueryInstancePaymentOrderDetailResponse({}));
  }

  /**
   * 查询支付订单详情
   * 
   * @param request - QueryInstancePaymentOrderDetailRequest
   * @returns QueryInstancePaymentOrderDetailResponse
   */
  async queryInstancePaymentOrderDetail(instanceId: string, request: QueryInstancePaymentOrderDetailRequest): Promise<QueryInstancePaymentOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryInstancePaymentOrderDetailHeaders({ });
    return await this.queryInstancePaymentOrderDetailWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 发票数据迁移，根据数据key查询具体数据data
   * 
   * @param tmpReq - QueryInvoiceTransferDataRequest
   * @param headers - QueryInvoiceTransferDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInvoiceTransferDataResponse
   */
  async queryInvoiceTransferDataWithOptions(tmpReq: QueryInvoiceTransferDataRequest, headers: QueryInvoiceTransferDataHeaders, runtime: $Util.RuntimeOptions): Promise<QueryInvoiceTransferDataResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryInvoiceTransferDataShrinkRequest({ });
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
      action: "QueryInvoiceTransferData",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/invoices/transferredDatas/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryInvoiceTransferDataResponse>(await this.execute(params, req, runtime), new QueryInvoiceTransferDataResponse({}));
  }

  /**
   * 发票数据迁移，根据数据key查询具体数据data
   * 
   * @param request - QueryInvoiceTransferDataRequest
   * @returns QueryInvoiceTransferDataResponse
   */
  async queryInvoiceTransferData(request: QueryInvoiceTransferDataRequest): Promise<QueryInvoiceTransferDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryInvoiceTransferDataHeaders({ });
    return await this.queryInvoiceTransferDataWithOptions(request, headers, runtime);
  }

  /**
   * 查询支付的权益使用信息
   * 
   * @param request - QueryPaymentBenefitRequest
   * @param headers - QueryPaymentBenefitHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPaymentBenefitResponse
   */
  async queryPaymentBenefitWithOptions(request: QueryPaymentBenefitRequest, headers: QueryPaymentBenefitHeaders, runtime: $Util.RuntimeOptions): Promise<QueryPaymentBenefitResponse> {
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
      action: "QueryPaymentBenefit",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/payments/benefits`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryPaymentBenefitResponse>(await this.execute(params, req, runtime), new QueryPaymentBenefitResponse({}));
  }

  /**
   * 查询支付的权益使用信息
   * 
   * @param request - QueryPaymentBenefitRequest
   * @returns QueryPaymentBenefitResponse
   */
  async queryPaymentBenefit(request: QueryPaymentBenefitRequest): Promise<QueryPaymentBenefitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryPaymentBenefitHeaders({ });
    return await this.queryPaymentBenefitWithOptions(request, headers, runtime);
  }

  /**
   * 查询智能财务支付订单信息
   * 
   * @param tmpReq - QueryPaymentOrderDetailRequest
   * @param headers - QueryPaymentOrderDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPaymentOrderDetailResponse
   */
  async queryPaymentOrderDetailWithOptions(tmpReq: QueryPaymentOrderDetailRequest, headers: QueryPaymentOrderDetailHeaders, runtime: $Util.RuntimeOptions): Promise<QueryPaymentOrderDetailResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryPaymentOrderDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.outBizNoList)) {
      request.outBizNoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outBizNoList, "outBizNoList", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outBizNoListShrink)) {
      query["outBizNoList"] = request.outBizNoListShrink;
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
      action: "QueryPaymentOrderDetail",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/payments/orders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryPaymentOrderDetailResponse>(await this.execute(params, req, runtime), new QueryPaymentOrderDetailResponse({}));
  }

  /**
   * 查询智能财务支付订单信息
   * 
   * @param request - QueryPaymentOrderDetailRequest
   * @returns QueryPaymentOrderDetailResponse
   */
  async queryPaymentOrderDetail(request: QueryPaymentOrderDetailRequest): Promise<QueryPaymentOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryPaymentOrderDetailHeaders({ });
    return await this.queryPaymentOrderDetailWithOptions(request, headers, runtime);
  }

  /**
   * 查询支付回单信息
   * 
   * @param request - QueryPaymentRecallFileRequest
   * @param headers - QueryPaymentRecallFileHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPaymentRecallFileResponse
   */
  async queryPaymentRecallFileWithOptions(instanceId: string, request: QueryPaymentRecallFileRequest, headers: QueryPaymentRecallFileHeaders, runtime: $Util.RuntimeOptions): Promise<QueryPaymentRecallFileResponse> {
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
      action: "QueryPaymentRecallFile",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/payments/recallFiles/${instanceId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryPaymentRecallFileResponse>(await this.execute(params, req, runtime), new QueryPaymentRecallFileResponse({}));
  }

  /**
   * 查询支付回单信息
   * 
   * @param request - QueryPaymentRecallFileRequest
   * @returns QueryPaymentRecallFileResponse
   */
  async queryPaymentRecallFile(instanceId: string, request: QueryPaymentRecallFileRequest): Promise<QueryPaymentRecallFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryPaymentRecallFileHeaders({ });
    return await this.queryPaymentRecallFileWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 查询支付回单信息，权限集与QueryPaymentRecallFile不同
   * 
   * @param request - QueryPaymentRecallFileVTwoRequest
   * @param headers - QueryPaymentRecallFileVTwoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPaymentRecallFileVTwoResponse
   */
  async queryPaymentRecallFileVTwoWithOptions(instanceId: string, request: QueryPaymentRecallFileVTwoRequest, headers: QueryPaymentRecallFileVTwoHeaders, runtime: $Util.RuntimeOptions): Promise<QueryPaymentRecallFileVTwoResponse> {
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
      action: "QueryPaymentRecallFileVTwo",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/payments/recallFilesV2/${instanceId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryPaymentRecallFileVTwoResponse>(await this.execute(params, req, runtime), new QueryPaymentRecallFileVTwoResponse({}));
  }

  /**
   * 查询支付回单信息，权限集与QueryPaymentRecallFile不同
   * 
   * @param request - QueryPaymentRecallFileVTwoRequest
   * @returns QueryPaymentRecallFileVTwoResponse
   */
  async queryPaymentRecallFileVTwo(instanceId: string, request: QueryPaymentRecallFileVTwoRequest): Promise<QueryPaymentRecallFileVTwoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryPaymentRecallFileVTwoHeaders({ });
    return await this.queryPaymentRecallFileVTwoWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 查询支付订单的状态
   * 
   * @param request - QueryPaymentStatusRequest
   * @param headers - QueryPaymentStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPaymentStatusResponse
   */
  async queryPaymentStatusWithOptions(request: QueryPaymentStatusRequest, headers: QueryPaymentStatusHeaders, runtime: $Util.RuntimeOptions): Promise<QueryPaymentStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderNo)) {
      query["orderNo"] = request.orderNo;
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
      action: "QueryPaymentStatus",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/payments/statuses`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryPaymentStatusResponse>(await this.execute(params, req, runtime), new QueryPaymentStatusResponse({}));
  }

  /**
   * 查询支付订单的状态
   * 
   * @param request - QueryPaymentStatusRequest
   * @returns QueryPaymentStatusResponse
   */
  async queryPaymentStatus(request: QueryPaymentStatusRequest): Promise<QueryPaymentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryPaymentStatusHeaders({ });
    return await this.queryPaymentStatusWithOptions(request, headers, runtime);
  }

  /**
   * 查询对应权限点的人员staffId
   * 
   * @param headers - QueryPermissionUserIdsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPermissionUserIdsResponse
   */
  async queryPermissionUserIdsWithOptions(headers: QueryPermissionUserIdsHeaders, runtime: $Util.RuntimeOptions): Promise<QueryPermissionUserIdsResponse> {
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
      action: "QueryPermissionUserIds",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/consumption/permission/getUserIds`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryPermissionUserIdsResponse>(await this.execute(params, req, runtime), new QueryPermissionUserIdsResponse({}));
  }

  /**
   * 查询对应权限点的人员staffId
   * @returns QueryPermissionUserIdsResponse
   */
  async queryPermissionUserIds(): Promise<QueryPermissionUserIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryPermissionUserIdsHeaders({ });
    return await this.queryPermissionUserIdsWithOptions(headers, runtime);
  }

  /**
   * 批量获取商品信息
   * 
   * @param request - QueryProductByPageRequest
   * @param headers - QueryProductByPageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProductByPageResponse
   */
  async queryProductByPageWithOptions(request: QueryProductByPageRequest, headers: QueryProductByPageHeaders, runtime: $Util.RuntimeOptions): Promise<QueryProductByPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
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
      action: "QueryProductByPage",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/products/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryProductByPageResponse>(await this.execute(params, req, runtime), new QueryProductByPageResponse({}));
  }

  /**
   * 批量获取商品信息
   * 
   * @param request - QueryProductByPageRequest
   * @returns QueryProductByPageResponse
   */
  async queryProductByPage(request: QueryProductByPageRequest): Promise<QueryProductByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryProductByPageHeaders({ });
    return await this.queryProductByPageWithOptions(request, headers, runtime);
  }

  /**
   * 批量获取项目信息
   * 
   * @param request - QueryProjectByPageRequest
   * @param headers - QueryProjectByPageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProjectByPageResponse
   */
  async queryProjectByPageWithOptions(request: QueryProjectByPageRequest, headers: QueryProjectByPageHeaders, runtime: $Util.RuntimeOptions): Promise<QueryProjectByPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
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
      action: "QueryProjectByPage",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/projects/batch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryProjectByPageResponse>(await this.execute(params, req, runtime), new QueryProjectByPageResponse({}));
  }

  /**
   * 批量获取项目信息
   * 
   * @param request - QueryProjectByPageRequest
   * @returns QueryProjectByPageResponse
   */
  async queryProjectByPage(request: QueryProjectByPageRequest): Promise<QueryProjectByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryProjectByPageHeaders({ });
    return await this.queryProjectByPageWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询智能财务单据主数据信息
   * 
   * @param request - QueryReceiptForInvoiceRequest
   * @param headers - QueryReceiptForInvoiceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReceiptForInvoiceResponse
   */
  async queryReceiptForInvoiceWithOptions(request: QueryReceiptForInvoiceRequest, headers: QueryReceiptForInvoiceHeaders, runtime: $Util.RuntimeOptions): Promise<QueryReceiptForInvoiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountantBookId)) {
      body["accountantBookId"] = request.accountantBookId;
    }

    if (!Util.isUnset(request.applyStatusList)) {
      body["applyStatusList"] = request.applyStatusList;
    }

    if (!Util.isUnset(request.bizStatusList)) {
      body["bizStatusList"] = request.bizStatusList;
    }

    if (!Util.isUnset(request.companyCode)) {
      body["companyCode"] = request.companyCode;
    }

    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.receiptStatusList)) {
      body["receiptStatusList"] = request.receiptStatusList;
    }

    if (!Util.isUnset(request.searchParams)) {
      body["searchParams"] = request.searchParams;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
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
      action: "QueryReceiptForInvoice",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/invoices/receipts/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryReceiptForInvoiceResponse>(await this.execute(params, req, runtime), new QueryReceiptForInvoiceResponse({}));
  }

  /**
   * 批量查询智能财务单据主数据信息
   * 
   * @param request - QueryReceiptForInvoiceRequest
   * @returns QueryReceiptForInvoiceResponse
   */
  async queryReceiptForInvoice(request: QueryReceiptForInvoiceRequest): Promise<QueryReceiptForInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryReceiptForInvoiceHeaders({ });
    return await this.queryReceiptForInvoiceWithOptions(request, headers, runtime);
  }

  /**
   * 分页批量获取智能财务应用内维护的供应商信息
   * 
   * @param request - QuerySupplierByPageRequest
   * @param headers - QuerySupplierByPageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySupplierByPageResponse
   */
  async querySupplierByPageWithOptions(request: QuerySupplierByPageRequest, headers: QuerySupplierByPageHeaders, runtime: $Util.RuntimeOptions): Promise<QuerySupplierByPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
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
      action: "QuerySupplierByPage",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/suppliers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QuerySupplierByPageResponse>(await this.execute(params, req, runtime), new QuerySupplierByPageResponse({}));
  }

  /**
   * 分页批量获取智能财务应用内维护的供应商信息
   * 
   * @param request - QuerySupplierByPageRequest
   * @returns QuerySupplierByPageResponse
   */
  async querySupplierByPage(request: QuerySupplierByPageRequest): Promise<QuerySupplierByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QuerySupplierByPageHeaders({ });
    return await this.querySupplierByPageWithOptions(request, headers, runtime);
  }

  /**
   * 查询组织是否命中走新发票应用
   * 
   * @param headers - QueryUseNewInvoiceAppHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUseNewInvoiceAppResponse
   */
  async queryUseNewInvoiceAppWithOptions(headers: QueryUseNewInvoiceAppHeaders, runtime: $Util.RuntimeOptions): Promise<QueryUseNewInvoiceAppResponse> {
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
      action: "QueryUseNewInvoiceApp",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/invoice/appGray`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryUseNewInvoiceAppResponse>(await this.execute(params, req, runtime), new QueryUseNewInvoiceAppResponse({}));
  }

  /**
   * 查询组织是否命中走新发票应用
   * @returns QueryUseNewInvoiceAppResponse
   */
  async queryUseNewInvoiceApp(): Promise<QueryUseNewInvoiceAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryUseNewInvoiceAppHeaders({ });
    return await this.queryUseNewInvoiceAppWithOptions(headers, runtime);
  }

  /**
   * 查询用户角色成员，支持分页，可获取某个企业主体下的角色成员
   * 
   * @param request - QueryUserRoleListRequest
   * @param headers - QueryUserRoleListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserRoleListResponse
   */
  async queryUserRoleListWithOptions(request: QueryUserRoleListRequest, headers: QueryUserRoleListHeaders, runtime: $Util.RuntimeOptions): Promise<QueryUserRoleListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.companyCode)) {
      query["companyCode"] = request.companyCode;
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
      action: "QueryUserRoleList",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/users/roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryUserRoleListResponse>(await this.execute(params, req, runtime), new QueryUserRoleListResponse({}));
  }

  /**
   * 查询用户角色成员，支持分页，可获取某个企业主体下的角色成员
   * 
   * @param request - QueryUserRoleListRequest
   * @returns QueryUserRoleListResponse
   */
  async queryUserRoleList(request: QueryUserRoleListRequest): Promise<QueryUserRoleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryUserRoleListHeaders({ });
    return await this.queryUserRoleListWithOptions(request, headers, runtime);
  }

  /**
   * 签约企业账户
   * 
   * @param request - SignEnterpriseAccountRequest
   * @param headers - SignEnterpriseAccountHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SignEnterpriseAccountResponse
   */
  async signEnterpriseAccountWithOptions(request: SignEnterpriseAccountRequest, headers: SignEnterpriseAccountHeaders, runtime: $Util.RuntimeOptions): Promise<SignEnterpriseAccountResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountCode)) {
      query["accountCode"] = request.accountCode;
    }

    if (!Util.isUnset(request.bankCardNo)) {
      query["bankCardNo"] = request.bankCardNo;
    }

    if (!Util.isUnset(request.bankOpenId)) {
      query["bankOpenId"] = request.bankOpenId;
    }

    if (!Util.isUnset(request.channelType)) {
      query["channelType"] = request.channelType;
    }

    if (!Util.isUnset(request.feeItemCode)) {
      query["feeItemCode"] = request.feeItemCode;
    }

    if (!Util.isUnset(request.issueNo)) {
      query["issueNo"] = request.issueNo;
    }

    if (!Util.isUnset(request.operator)) {
      query["operator"] = request.operator;
    }

    if (!Util.isUnset(request.signOperateType)) {
      query["signOperateType"] = request.signOperateType;
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
      action: "SignEnterpriseAccount",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/enterpriseAccounts/sign`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SignEnterpriseAccountResponse>(await this.execute(params, req, runtime), new SignEnterpriseAccountResponse({}));
  }

  /**
   * 签约企业账户
   * 
   * @param request - SignEnterpriseAccountRequest
   * @returns SignEnterpriseAccountResponse
   */
  async signEnterpriseAccount(request: SignEnterpriseAccountRequest): Promise<SignEnterpriseAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SignEnterpriseAccountHeaders({ });
    return await this.signEnterpriseAccountWithOptions(request, headers, runtime);
  }

  /**
   * 发送银企支付回单文件信息
   * 
   * @param request - SyncReceiptRecallRequest
   * @param headers - SyncReceiptRecallHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncReceiptRecallResponse
   */
  async syncReceiptRecallWithOptions(request: SyncReceiptRecallRequest, headers: SyncReceiptRecallHeaders, runtime: $Util.RuntimeOptions): Promise<SyncReceiptRecallResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileDownloadUrl)) {
      query["fileDownloadUrl"] = request.fileDownloadUrl;
    }

    if (!Util.isUnset(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!Util.isUnset(request.orderNo)) {
      query["orderNo"] = request.orderNo;
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
      action: "SyncReceiptRecall",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/receipts/syncRecall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SyncReceiptRecallResponse>(await this.execute(params, req, runtime), new SyncReceiptRecallResponse({}));
  }

  /**
   * 发送银企支付回单文件信息
   * 
   * @param request - SyncReceiptRecallRequest
   * @returns SyncReceiptRecallResponse
   */
  async syncReceiptRecall(request: SyncReceiptRecallRequest): Promise<SyncReceiptRecallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SyncReceiptRecallHeaders({ });
    return await this.syncReceiptRecallWithOptions(request, headers, runtime);
  }

  /**
   * 更新智能财务档案的状态
   * 
   * @param request - UpdateAuxiliaryStatusRequest
   * @param headers - UpdateAuxiliaryStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAuxiliaryStatusResponse
   */
  async updateAuxiliaryStatusWithOptions(request: UpdateAuxiliaryStatusRequest, headers: UpdateAuxiliaryStatusHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateAuxiliaryStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.auxiliaryId)) {
      query["auxiliaryId"] = request.auxiliaryId;
    }

    if (!Util.isUnset(request.auxiliaryType)) {
      query["auxiliaryType"] = request.auxiliaryType;
    }

    if (!Util.isUnset(request.operateType)) {
      query["operateType"] = request.operateType;
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
      action: "UpdateAuxiliaryStatus",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/auxiliaries/status`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateAuxiliaryStatusResponse>(await this.execute(params, req, runtime), new UpdateAuxiliaryStatusResponse({}));
  }

  /**
   * 更新智能财务档案的状态
   * 
   * @param request - UpdateAuxiliaryStatusRequest
   * @returns UpdateAuxiliaryStatusResponse
   */
  async updateAuxiliaryStatus(request: UpdateAuxiliaryStatusRequest): Promise<UpdateAuxiliaryStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateAuxiliaryStatusHeaders({ });
    return await this.updateAuxiliaryStatusWithOptions(request, headers, runtime);
  }

  /**
   * 更新智能财务的企业账户
   * 
   * @param request - UpdateFinanceEnterpriseAccountRequest
   * @param headers - UpdateFinanceEnterpriseAccountHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFinanceEnterpriseAccountResponse
   */
  async updateFinanceEnterpriseAccountWithOptions(request: UpdateFinanceEnterpriseAccountRequest, headers: UpdateFinanceEnterpriseAccountHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateFinanceEnterpriseAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountCode)) {
      body["accountCode"] = request.accountCode;
    }

    if (!Util.isUnset(request.accountName)) {
      body["accountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountType)) {
      body["accountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bankCardNo)) {
      body["bankCardNo"] = request.bankCardNo;
    }

    if (!Util.isUnset(request.bankCode)) {
      body["bankCode"] = request.bankCode;
    }

    if (!Util.isUnset(request.bankName)) {
      body["bankName"] = request.bankName;
    }

    if (!Util.isUnset(request.city)) {
      body["city"] = request.city;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.officialName)) {
      body["officialName"] = request.officialName;
    }

    if (!Util.isUnset(request.officialNumber)) {
      body["officialNumber"] = request.officialNumber;
    }

    if (!Util.isUnset(request.province)) {
      body["province"] = request.province;
    }

    if (!Util.isUnset(request.taxNature)) {
      body["taxNature"] = request.taxNature;
    }

    if (!Util.isUnset(request.taxNo)) {
      body["taxNo"] = request.taxNo;
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
      action: "UpdateFinanceEnterpriseAccount",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/enterpriseAccounts`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateFinanceEnterpriseAccountResponse>(await this.execute(params, req, runtime), new UpdateFinanceEnterpriseAccountResponse({}));
  }

  /**
   * 更新智能财务的企业账户
   * 
   * @param request - UpdateFinanceEnterpriseAccountRequest
   * @returns UpdateFinanceEnterpriseAccountResponse
   */
  async updateFinanceEnterpriseAccount(request: UpdateFinanceEnterpriseAccountRequest): Promise<UpdateFinanceEnterpriseAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateFinanceEnterpriseAccountHeaders({ });
    return await this.updateFinanceEnterpriseAccountWithOptions(request, headers, runtime);
  }

  /**
   * 更新单据的支付状态
   * 
   * @param tmpReq - UpdateInstanceOrderInfoRequest
   * @param headers - UpdateInstanceOrderInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceOrderInfoResponse
   */
  async updateInstanceOrderInfoWithOptions(instanceId: string, tmpReq: UpdateInstanceOrderInfoRequest, headers: UpdateInstanceOrderInfoHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceOrderInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateInstanceOrderInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.payerBank)) {
      request.payerBankShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payerBank, "payerBank", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.failReason)) {
      query["failReason"] = request.failReason;
    }

    if (!Util.isUnset(request.orderNo)) {
      query["orderNo"] = request.orderNo;
    }

    if (!Util.isUnset(request.outOrderNo)) {
      query["outOrderNo"] = request.outOrderNo;
    }

    if (!Util.isUnset(request.payerBankShrink)) {
      query["payerBank"] = request.payerBankShrink;
    }

    if (!Util.isUnset(request.paymentTime)) {
      query["paymentTime"] = request.paymentTime;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
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
      action: "UpdateInstanceOrderInfo",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/instances/${instanceId}/paymentOrders/states`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceOrderInfoResponse>(await this.execute(params, req, runtime), new UpdateInstanceOrderInfoResponse({}));
  }

  /**
   * 更新单据的支付状态
   * 
   * @param request - UpdateInstanceOrderInfoRequest
   * @returns UpdateInstanceOrderInfoResponse
   */
  async updateInstanceOrderInfo(instanceId: string, request: UpdateInstanceOrderInfoRequest): Promise<UpdateInstanceOrderInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateInstanceOrderInfoHeaders({ });
    return await this.updateInstanceOrderInfoWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 发票数据迁移，新发票应用上报已成功搬移数据
   * 
   * @param headers - UpdateInvoiceDataTransferDoneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInvoiceDataTransferDoneResponse
   */
  async updateInvoiceDataTransferDoneWithOptions(headers: UpdateInvoiceDataTransferDoneHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateInvoiceDataTransferDoneResponse> {
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
      action: "UpdateInvoiceDataTransferDone",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/invoices/transferredDatas/statuses`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateInvoiceDataTransferDoneResponse>(await this.execute(params, req, runtime), new UpdateInvoiceDataTransferDoneResponse({}));
  }

  /**
   * 发票数据迁移，新发票应用上报已成功搬移数据
   * @returns UpdateInvoiceDataTransferDoneResponse
   */
  async updateInvoiceDataTransferDone(): Promise<UpdateInvoiceDataTransferDoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateInvoiceDataTransferDoneHeaders({ });
    return await this.updateInvoiceDataTransferDoneWithOptions(headers, runtime);
  }

  /**
   * 用于更新智能财务企业票池内对应发票的下载链接
   * 
   * @param tmpReq - UpdateInvoiceUrlRequest
   * @param headers - UpdateInvoiceUrlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInvoiceUrlResponse
   */
  async updateInvoiceUrlWithOptions(tmpReq: UpdateInvoiceUrlRequest, headers: UpdateInvoiceUrlHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateInvoiceUrlResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateInvoiceUrlShrinkRequest({ });
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
      action: "UpdateInvoiceUrl",
      version: "bizfinance_2.0",
      protocol: "HTTP",
      pathname: `/v2.0/bizfinance/invoices/urls`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateInvoiceUrlResponse>(await this.execute(params, req, runtime), new UpdateInvoiceUrlResponse({}));
  }

  /**
   * 用于更新智能财务企业票池内对应发票的下载链接
   * 
   * @param request - UpdateInvoiceUrlRequest
   * @returns UpdateInvoiceUrlResponse
   */
  async updateInvoiceUrl(request: UpdateInvoiceUrlRequest): Promise<UpdateInvoiceUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateInvoiceUrlHeaders({ });
    return await this.updateInvoiceUrlWithOptions(request, headers, runtime);
  }

}
