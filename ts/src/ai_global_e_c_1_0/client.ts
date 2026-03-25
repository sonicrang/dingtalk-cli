// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class BusinessCodeCallbackHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BusinessCodeCallbackRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  businessCode?: string;
  eventType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      businessCode: 'businessCode',
      eventType: 'eventType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCode: 'string',
      eventType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BusinessCodeCallbackResponseBody extends $tea.Model {
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

export class BusinessCodeCallbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BusinessCodeCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BusinessCodeCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectionOmniChannelTiktokMessageHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectionOmniChannelTiktokMessageRequest extends $tea.Model {
  tiktokContentJsonString?: string;
  static names(): { [key: string]: string } {
    return {
      tiktokContentJsonString: 'tiktokContentJsonString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tiktokContentJsonString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectionOmniChannelTiktokMessageResponseBody extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  omniChannelTiktokRsp?: ConnectionOmniChannelTiktokMessageResponseBodyOmniChannelTiktokRsp;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      omniChannelTiktokRsp: 'omniChannelTiktokRsp',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      omniChannelTiktokRsp: ConnectionOmniChannelTiktokMessageResponseBodyOmniChannelTiktokRsp,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectionOmniChannelTiktokMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConnectionOmniChannelTiktokMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConnectionOmniChannelTiktokMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginUserHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginUserRequest extends $tea.Model {
  authCode?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'authCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginUserResponseBody extends $tea.Model {
  commodityInfo?: GetLoginUserResponseBodyCommodityInfo;
  corpId?: string;
  openId?: string;
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityInfo: 'commodityInfo',
      corpId: 'corpId',
      openId: 'openId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityInfo: GetLoginUserResponseBodyCommodityInfo,
      corpId: 'string',
      openId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLoginUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLoginUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HhoCallBackHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HhoCallBackRequest extends $tea.Model {
  data?: string;
  dtNotificationId?: string;
  shopId?: string;
  timestamp?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      dtNotificationId: 'dtNotificationId',
      shopId: 'shopId',
      timestamp: 'timestamp',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dtNotificationId: 'string',
      shopId: 'string',
      timestamp: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HhoCallBackResponseBody extends $tea.Model {
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

export class HhoCallBackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HhoCallBackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HhoCallBackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchRequest extends $tea.Model {
  description?: string;
  imageUrls?: string[];
  platform?: string[];
  productName?: string;
  sellingPoints?: string[];
  sourceData?: string;
  variants?: LaunchRequestVariants[];
  videoUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      imageUrls: 'imageUrls',
      platform: 'platform',
      productName: 'productName',
      sellingPoints: 'sellingPoints',
      sourceData: 'sourceData',
      variants: 'variants',
      videoUrls: 'videoUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      platform: { 'type': 'array', 'itemType': 'string' },
      productName: 'string',
      sellingPoints: { 'type': 'array', 'itemType': 'string' },
      sourceData: 'string',
      variants: { 'type': 'array', 'itemType': LaunchRequestVariants },
      videoUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
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

export class LaunchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LaunchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LaunchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessCodeInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessCodeInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  businessCode?: string;
  eventType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      businessCode: 'businessCode',
      eventType: 'eventType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCode: 'string',
      eventType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessCodeInfoResponseBody extends $tea.Model {
  businessCode?: string;
  imageType?: string;
  imageUrls?: string[];
  productId?: string;
  skuList?: QueryBusinessCodeInfoResponseBodySkuList[];
  static names(): { [key: string]: string } {
    return {
      businessCode: 'businessCode',
      imageType: 'imageType',
      imageUrls: 'imageUrls',
      productId: 'productId',
      skuList: 'skuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCode: 'string',
      imageType: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      productId: 'string',
      skuList: { 'type': 'array', 'itemType': QueryBusinessCodeInfoResponseBodySkuList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessCodeInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryBusinessCodeInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryBusinessCodeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNotableInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNotableInfoRequest extends $tea.Model {
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      sceneCode: 'sceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNotableInfoResponseBody extends $tea.Model {
  adminUnionIds?: string[];
  baseId?: string;
  static names(): { [key: string]: string } {
    return {
      adminUnionIds: 'adminUnionIds',
      baseId: 'baseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUnionIds: { 'type': 'array', 'itemType': 'string' },
      baseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNotableInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryNotableInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryNotableInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TiktokShopAuthCallbackHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TiktokShopAuthCallbackRequest extends $tea.Model {
  sellerType?: string;
  shopId?: string;
  shopName?: string;
  shopRegion?: string;
  static names(): { [key: string]: string } {
    return {
      sellerType: 'sellerType',
      shopId: 'shopId',
      shopName: 'shopName',
      shopRegion: 'shopRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sellerType: 'string',
      shopId: 'string',
      shopName: 'string',
      shopRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TiktokShopAuthCallbackResponseBody extends $tea.Model {
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

export class TiktokShopAuthCallbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TiktokShopAuthCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TiktokShopAuthCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TiktokWebhookProcessHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TiktokWebhookProcessRequest extends $tea.Model {
  tiktokContentJsonString?: string;
  static names(): { [key: string]: string } {
    return {
      tiktokContentJsonString: 'tiktokContentJsonString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tiktokContentJsonString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TiktokWebhookProcessResponseBody extends $tea.Model {
  code?: number;
  errorCode?: string;
  errorMsg?: string;
  omniChannelTiktokWebhookRsp?: TiktokWebhookProcessResponseBodyOmniChannelTiktokWebhookRsp;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      omniChannelTiktokWebhookRsp: 'omniChannelTiktokWebhookRsp',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errorCode: 'string',
      errorMsg: 'string',
      omniChannelTiktokWebhookRsp: TiktokWebhookProcessResponseBodyOmniChannelTiktokWebhookRsp,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TiktokWebhookProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TiktokWebhookProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TiktokWebhookProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectionOmniChannelTiktokMessageResponseBodyOmniChannelTiktokRsp extends $tea.Model {
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

export class GetLoginUserResponseBodyCommodityInfo extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchRequestVariantsOptionValues extends $tea.Model {
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

export class LaunchRequestVariants extends $tea.Model {
  images?: string[];
  optionValues?: LaunchRequestVariantsOptionValues[];
  price?: string;
  sku?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'images',
      optionValues: 'optionValues',
      price: 'price',
      sku: 'sku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': 'string' },
      optionValues: { 'type': 'array', 'itemType': LaunchRequestVariantsOptionValues },
      price: 'string',
      sku: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessCodeInfoResponseBodySkuList extends $tea.Model {
  imageUrl?: string;
  skuId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'imageUrl',
      skuId: 'skuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      skuId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TiktokWebhookProcessResponseBodyOmniChannelTiktokWebhookRsp extends $tea.Model {
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
   * 业务code回调
   * 
   * @param request - BusinessCodeCallbackRequest
   * @param headers - BusinessCodeCallbackHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BusinessCodeCallbackResponse
   */
  async businessCodeCallbackWithOptions(request: BusinessCodeCallbackRequest, headers: BusinessCodeCallbackHeaders, runtime: $Util.RuntimeOptions): Promise<BusinessCodeCallbackResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessCode)) {
      body["businessCode"] = request.businessCode;
    }

    if (!Util.isUnset(request.eventType)) {
      body["eventType"] = request.eventType;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

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
      action: "BusinessCodeCallback",
      version: "aiGlobalEC_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiGlobalEC/businessCode/callback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<BusinessCodeCallbackResponse>(await this.execute(params, req, runtime), new BusinessCodeCallbackResponse({}));
  }

  /**
   * 业务code回调
   * 
   * @param request - BusinessCodeCallbackRequest
   * @returns BusinessCodeCallbackResponse
   */
  async businessCodeCallback(request: BusinessCodeCallbackRequest): Promise<BusinessCodeCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BusinessCodeCallbackHeaders({ });
    return await this.businessCodeCallbackWithOptions(request, headers, runtime);
  }

  /**
   * 全渠道运营客服tiktok消息接入
   * 
   * @param request - ConnectionOmniChannelTiktokMessageRequest
   * @param headers - ConnectionOmniChannelTiktokMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConnectionOmniChannelTiktokMessageResponse
   */
  async connectionOmniChannelTiktokMessageWithOptions(request: ConnectionOmniChannelTiktokMessageRequest, headers: ConnectionOmniChannelTiktokMessageHeaders, runtime: $Util.RuntimeOptions): Promise<ConnectionOmniChannelTiktokMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tiktokContentJsonString)) {
      body["tiktokContentJsonString"] = request.tiktokContentJsonString;
    }

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
      action: "ConnectionOmniChannelTiktokMessage",
      version: "aiGlobalEC_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiGlobalEC/omniChannel/tiktok/im/message/process`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ConnectionOmniChannelTiktokMessageResponse>(await this.execute(params, req, runtime), new ConnectionOmniChannelTiktokMessageResponse({}));
  }

  /**
   * 全渠道运营客服tiktok消息接入
   * 
   * @param request - ConnectionOmniChannelTiktokMessageRequest
   * @returns ConnectionOmniChannelTiktokMessageResponse
   */
  async connectionOmniChannelTiktokMessage(request: ConnectionOmniChannelTiktokMessageRequest): Promise<ConnectionOmniChannelTiktokMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ConnectionOmniChannelTiktokMessageHeaders({ });
    return await this.connectionOmniChannelTiktokMessageWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前登录用户版本信息
   * 
   * @param request - GetLoginUserRequest
   * @param headers - GetLoginUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginUserResponse
   */
  async getLoginUserWithOptions(request: GetLoginUserRequest, headers: GetLoginUserHeaders, runtime: $Util.RuntimeOptions): Promise<GetLoginUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.authCode)) {
      body["authCode"] = request.authCode;
    }

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
      action: "GetLoginUser",
      version: "aiGlobalEC_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiGlobalEC/authCode/getLoginUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetLoginUserResponse>(await this.execute(params, req, runtime), new GetLoginUserResponse({}));
  }

  /**
   * 获取当前登录用户版本信息
   * 
   * @param request - GetLoginUserRequest
   * @returns GetLoginUserResponse
   */
  async getLoginUser(request: GetLoginUserRequest): Promise<GetLoginUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetLoginUserHeaders({ });
    return await this.getLoginUserWithOptions(request, headers, runtime);
  }

  /**
   * 提供给HHO的异步回调接口
   * 
   * @param request - HhoCallBackRequest
   * @param headers - HhoCallBackHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HhoCallBackResponse
   */
  async hhoCallBackWithOptions(request: HhoCallBackRequest, headers: HhoCallBackHeaders, runtime: $Util.RuntimeOptions): Promise<HhoCallBackResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["data"] = request.data;
    }

    if (!Util.isUnset(request.dtNotificationId)) {
      body["dtNotificationId"] = request.dtNotificationId;
    }

    if (!Util.isUnset(request.shopId)) {
      body["shopId"] = request.shopId;
    }

    if (!Util.isUnset(request.timestamp)) {
      body["timestamp"] = request.timestamp;
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
      action: "HhoCallBack",
      version: "aiGlobalEC_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiGlobalEC/hho/callback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<HhoCallBackResponse>(await this.execute(params, req, runtime), new HhoCallBackResponse({}));
  }

  /**
   * 提供给HHO的异步回调接口
   * 
   * @param request - HhoCallBackRequest
   * @returns HhoCallBackResponse
   */
  async hhoCallBack(request: HhoCallBackRequest): Promise<HhoCallBackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HhoCallBackHeaders({ });
    return await this.hhoCallBackWithOptions(request, headers, runtime);
  }

  /**
   * 刊登的对外开放Api
   * 
   * @param request - LaunchRequest
   * @param headers - LaunchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LaunchResponse
   */
  async launchWithOptions(request: LaunchRequest, headers: LaunchHeaders, runtime: $Util.RuntimeOptions): Promise<LaunchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.imageUrls)) {
      body["imageUrls"] = request.imageUrls;
    }

    if (!Util.isUnset(request.platform)) {
      body["platform"] = request.platform;
    }

    if (!Util.isUnset(request.productName)) {
      body["productName"] = request.productName;
    }

    if (!Util.isUnset(request.sellingPoints)) {
      body["sellingPoints"] = request.sellingPoints;
    }

    if (!Util.isUnset(request.sourceData)) {
      body["sourceData"] = request.sourceData;
    }

    if (!Util.isUnset(request.variants)) {
      body["variants"] = request.variants;
    }

    if (!Util.isUnset(request.videoUrls)) {
      body["videoUrls"] = request.videoUrls;
    }

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
      action: "Launch",
      version: "aiGlobalEC_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiGlobalEC/launch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<LaunchResponse>(await this.execute(params, req, runtime), new LaunchResponse({}));
  }

  /**
   * 刊登的对外开放Api
   * 
   * @param request - LaunchRequest
   * @returns LaunchResponse
   */
  async launch(request: LaunchRequest): Promise<LaunchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new LaunchHeaders({ });
    return await this.launchWithOptions(request, headers, runtime);
  }

  /**
   * 根据businessCode查询商品图片信息
   * 
   * @param request - QueryBusinessCodeInfoRequest
   * @param headers - QueryBusinessCodeInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBusinessCodeInfoResponse
   */
  async queryBusinessCodeInfoWithOptions(request: QueryBusinessCodeInfoRequest, headers: QueryBusinessCodeInfoHeaders, runtime: $Util.RuntimeOptions): Promise<QueryBusinessCodeInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessCode)) {
      body["businessCode"] = request.businessCode;
    }

    if (!Util.isUnset(request.eventType)) {
      body["eventType"] = request.eventType;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

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
      action: "QueryBusinessCodeInfo",
      version: "aiGlobalEC_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiGlobalEC/businessCode/queryInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryBusinessCodeInfoResponse>(await this.execute(params, req, runtime), new QueryBusinessCodeInfoResponse({}));
  }

  /**
   * 根据businessCode查询商品图片信息
   * 
   * @param request - QueryBusinessCodeInfoRequest
   * @returns QueryBusinessCodeInfoResponse
   */
  async queryBusinessCodeInfo(request: QueryBusinessCodeInfoRequest): Promise<QueryBusinessCodeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryBusinessCodeInfoHeaders({ });
    return await this.queryBusinessCodeInfoWithOptions(request, headers, runtime);
  }

  /**
   * 全渠道AI表格业务信息
   * 
   * @param request - QueryNotableInfoRequest
   * @param headers - QueryNotableInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryNotableInfoResponse
   */
  async queryNotableInfoWithOptions(request: QueryNotableInfoRequest, headers: QueryNotableInfoHeaders, runtime: $Util.RuntimeOptions): Promise<QueryNotableInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sceneCode)) {
      query["sceneCode"] = request.sceneCode;
    }

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
      action: "QueryNotableInfo",
      version: "aiGlobalEC_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiGlobalEC/omniChannel/notable`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<QueryNotableInfoResponse>(await this.execute(params, req, runtime), new QueryNotableInfoResponse({}));
  }

  /**
   * 全渠道AI表格业务信息
   * 
   * @param request - QueryNotableInfoRequest
   * @returns QueryNotableInfoResponse
   */
  async queryNotableInfo(request: QueryNotableInfoRequest): Promise<QueryNotableInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryNotableInfoHeaders({ });
    return await this.queryNotableInfoWithOptions(request, headers, runtime);
  }

  /**
   * 平台店铺授权回调
   * 
   * @param request - TiktokShopAuthCallbackRequest
   * @param headers - TiktokShopAuthCallbackHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TiktokShopAuthCallbackResponse
   */
  async tiktokShopAuthCallbackWithOptions(request: TiktokShopAuthCallbackRequest, headers: TiktokShopAuthCallbackHeaders, runtime: $Util.RuntimeOptions): Promise<TiktokShopAuthCallbackResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sellerType)) {
      body["sellerType"] = request.sellerType;
    }

    if (!Util.isUnset(request.shopId)) {
      body["shopId"] = request.shopId;
    }

    if (!Util.isUnset(request.shopName)) {
      body["shopName"] = request.shopName;
    }

    if (!Util.isUnset(request.shopRegion)) {
      body["shopRegion"] = request.shopRegion;
    }

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
      action: "TiktokShopAuthCallback",
      version: "aiGlobalEC_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiGlobalEC/omniChannel/tiktok/shop/authCallback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<TiktokShopAuthCallbackResponse>(await this.execute(params, req, runtime), new TiktokShopAuthCallbackResponse({}));
  }

  /**
   * 平台店铺授权回调
   * 
   * @param request - TiktokShopAuthCallbackRequest
   * @returns TiktokShopAuthCallbackResponse
   */
  async tiktokShopAuthCallback(request: TiktokShopAuthCallbackRequest): Promise<TiktokShopAuthCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TiktokShopAuthCallbackHeaders({ });
    return await this.tiktokShopAuthCallbackWithOptions(request, headers, runtime);
  }

  /**
   * 全渠道运营Tiktok的Webhook信息写入
   * 
   * @param request - TiktokWebhookProcessRequest
   * @param headers - TiktokWebhookProcessHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TiktokWebhookProcessResponse
   */
  async tiktokWebhookProcessWithOptions(request: TiktokWebhookProcessRequest, headers: TiktokWebhookProcessHeaders, runtime: $Util.RuntimeOptions): Promise<TiktokWebhookProcessResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tiktokContentJsonString)) {
      body["tiktokContentJsonString"] = request.tiktokContentJsonString;
    }

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
      action: "TiktokWebhookProcess",
      version: "aiGlobalEC_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/aiGlobalEC/omniChannel/tiktok/webhook/process`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<TiktokWebhookProcessResponse>(await this.execute(params, req, runtime), new TiktokWebhookProcessResponse({}));
  }

  /**
   * 全渠道运营Tiktok的Webhook信息写入
   * 
   * @param request - TiktokWebhookProcessRequest
   * @returns TiktokWebhookProcessResponse
   */
  async tiktokWebhookProcess(request: TiktokWebhookProcessRequest): Promise<TiktokWebhookProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TiktokWebhookProcessHeaders({ });
    return await this.tiktokWebhookProcessWithOptions(request, headers, runtime);
  }

}
