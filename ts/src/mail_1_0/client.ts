// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class DraftMessage extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bccRecipients?: Recipient[];
  /**
   * @remarks
   * This parameter is required.
   */
  body?: DraftMessageBody;
  /**
   * @remarks
   * This parameter is required.
   */
  ccRecipients?: Recipient[];
  /**
   * @remarks
   * This parameter is required.
   */
  from?: Recipient;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 由RFC5322定义的邮件头集合
   */
  internetMessageHeaders?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * uniqid@dingtalk.com
   */
  internetMessageId?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isReadReceiptRequested?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PRY_NORMAL
   */
  priority?: Readable;
  /**
   * @remarks
   * This parameter is required.
   */
  replyTo?: Recipient;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 主题
   */
  subject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 一般取邮件正文的前一段
   */
  summary?: Readable;
  /**
   * @remarks
   * This parameter is required.
   */
  tags?: Readable[];
  /**
   * @remarks
   * This parameter is required.
   */
  toRecipients?: Recipient[];
  static names(): { [key: string]: string } {
    return {
      bccRecipients: 'bccRecipients',
      body: 'body',
      ccRecipients: 'ccRecipients',
      from: 'from',
      internetMessageHeaders: 'internetMessageHeaders',
      internetMessageId: 'internetMessageId',
      isReadReceiptRequested: 'isReadReceiptRequested',
      priority: 'priority',
      replyTo: 'replyTo',
      subject: 'subject',
      summary: 'summary',
      tags: 'tags',
      toRecipients: 'toRecipients',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bccRecipients: { 'type': 'array', 'itemType': Recipient },
      body: DraftMessageBody,
      ccRecipients: { 'type': 'array', 'itemType': Recipient },
      from: Recipient,
      internetMessageHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      internetMessageId: 'Readable',
      isReadReceiptRequested: 'boolean',
      priority: 'Readable',
      replyTo: Recipient,
      subject: 'Readable',
      summary: 'Readable',
      tags: { 'type': 'array', 'itemType': 'Readable' },
      toRecipients: { 'type': 'array', 'itemType': Recipient },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Message extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bccRecipients?: Recipient[];
  /**
   * @remarks
   * This parameter is required.
   */
  ccRecipients?: Recipient[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * conversationid
   */
  conversationId?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  folderId?: Readable;
  /**
   * @remarks
   * This parameter is required.
   */
  from?: Recipient;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  hasAttachments?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mailid
   */
  id?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 由RFC5322定义的邮件头集合
   */
  internetMessageHeaders?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * uniqid@dingtalk.com
   */
  internetMessageId?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isForwarded?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isRead?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isReadReceiptRequested?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isReplied?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-10-01T00:00:00Z
   */
  lastModifiedDateTime?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PRY_NORMAL
   */
  priority?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-10-01T00:00:00Z
   */
  receivedDateTime?: Readable;
  /**
   * @remarks
   * This parameter is required.
   */
  replyTo?: Recipient;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-10-01T00:00:00Z
   */
  sentDateTime?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 主题
   */
  subject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 一般取邮件正文的前一段
   */
  summary?: Readable;
  /**
   * @remarks
   * This parameter is required.
   */
  tags?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  toRecipients?: Recipient[];
  static names(): { [key: string]: string } {
    return {
      bccRecipients: 'bccRecipients',
      ccRecipients: 'ccRecipients',
      conversationId: 'conversationId',
      folderId: 'folderId',
      from: 'from',
      hasAttachments: 'hasAttachments',
      id: 'id',
      internetMessageHeaders: 'internetMessageHeaders',
      internetMessageId: 'internetMessageId',
      isForwarded: 'isForwarded',
      isRead: 'isRead',
      isReadReceiptRequested: 'isReadReceiptRequested',
      isReplied: 'isReplied',
      lastModifiedDateTime: 'lastModifiedDateTime',
      priority: 'priority',
      receivedDateTime: 'receivedDateTime',
      replyTo: 'replyTo',
      sentDateTime: 'sentDateTime',
      subject: 'subject',
      summary: 'summary',
      tags: 'tags',
      toRecipients: 'toRecipients',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bccRecipients: { 'type': 'array', 'itemType': Recipient },
      ccRecipients: { 'type': 'array', 'itemType': Recipient },
      conversationId: 'Readable',
      folderId: 'Readable',
      from: Recipient,
      hasAttachments: 'boolean',
      id: 'Readable',
      internetMessageHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      internetMessageId: 'Readable',
      isForwarded: 'boolean',
      isRead: 'boolean',
      isReadReceiptRequested: 'boolean',
      isReplied: 'boolean',
      lastModifiedDateTime: 'Readable',
      priority: 'Readable',
      receivedDateTime: 'Readable',
      replyTo: Recipient,
      sentDateTime: 'Readable',
      subject: 'Readable',
      summary: 'Readable',
      tags: { 'type': 'array', 'itemType': 'string' },
      toRecipients: { 'type': 'array', 'itemType': Recipient },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Recipient extends $tea.Model {
  /**
   * @example
   * zhangsan@b.com
   */
  email?: Readable;
  /**
   * @example
   * ZhangSan
   */
  name?: Readable;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'Readable',
      name: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMailFolderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMailFolderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  extensions?: { [key: string]: any };
  folerId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      extensions: 'extensions',
      folerId: 'folerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      folerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMailFolderResponseBody extends $tea.Model {
  folder?: CreateMailFolderResponseBodyFolder;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folder: 'folder',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: CreateMailFolderResponseBodyFolder,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMailFolderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMailFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMailFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageRequest extends $tea.Model {
  message?: DraftMessage;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: DraftMessage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageResponseBody extends $tea.Model {
  message?: Message;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: Message,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user@yourcompany.org
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  employeeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * password
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      employeeType: 'employeeType',
      name: 'name',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      employeeType: 'string',
      name: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  email?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMailFolderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMailFolderResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMailFolderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMailFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMailFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessagesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessagesRequest extends $tea.Model {
  deleteType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: string[];
  static names(): { [key: string]: string } {
    return {
      deleteType: 'deleteType',
      ids: 'ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteType: 'string',
      ids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessagesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageRequest extends $tea.Model {
  selectFields?: string;
  static names(): { [key: string]: string } {
    return {
      selectFields: 'selectFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectFields: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageResponseBody extends $tea.Model {
  message?: Message;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: Message,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMailFoldersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMailFoldersRequest extends $tea.Model {
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'folderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMailFoldersResponseBody extends $tea.Model {
  folders?: ListMailFoldersResponseBodyFolders[];
  static names(): { [key: string]: string } {
    return {
      folders: 'folders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: { 'type': 'array', 'itemType': ListMailFoldersResponseBodyFolders },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMailFoldersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMailFoldersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMailFoldersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  maxResults?: number;
  nextToken?: string;
  selectFields?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      selectFields: 'selectFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      selectFields: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBody extends $tea.Model {
  hasMore?: boolean;
  messages?: Message[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      messages: 'messages',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      messages: { 'type': 'array', 'itemType': Message },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveMailFolderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveMailFolderRequest extends $tea.Model {
  destinationFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationFolderId: 'destinationFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveMailFolderResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveMailFolderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveMailFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveMailFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $tea.Model {
  saveToSentItems?: boolean;
  static names(): { [key: string]: string } {
    return {
      saveToSentItems: 'saveToSentItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saveToSentItems: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMailFolderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMailFolderRequest extends $tea.Model {
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMailFolderResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMailFolderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMailFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMailFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageRequest extends $tea.Model {
  message?: DraftMessage;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: DraftMessage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageResponseBody extends $tea.Model {
  message?: Message;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: Message,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DraftMessageBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bodyHtml?: Readable;
  /**
   * @remarks
   * This parameter is required.
   */
  bodyText?: Readable;
  static names(): { [key: string]: string } {
    return {
      bodyHtml: 'bodyHtml',
      bodyText: 'bodyText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyHtml: 'Readable',
      bodyText: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMailFolderResponseBodyFolder extends $tea.Model {
  childFolderCount?: number;
  displayName?: string;
  extensions?: { [key: string]: any };
  id?: string;
  parentFolderId?: string;
  totalItemCount?: number;
  unreadItemCount?: number;
  static names(): { [key: string]: string } {
    return {
      childFolderCount: 'childFolderCount',
      displayName: 'displayName',
      extensions: 'extensions',
      id: 'id',
      parentFolderId: 'parentFolderId',
      totalItemCount: 'totalItemCount',
      unreadItemCount: 'unreadItemCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childFolderCount: 'number',
      displayName: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      parentFolderId: 'string',
      totalItemCount: 'number',
      unreadItemCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMailFoldersResponseBodyFolders extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  childFolderCount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  extensions?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parentFolderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  totalItemCount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  unreadItemCount?: number;
  static names(): { [key: string]: string } {
    return {
      childFolderCount: 'childFolderCount',
      displayName: 'displayName',
      extensions: 'extensions',
      id: 'id',
      parentFolderId: 'parentFolderId',
      totalItemCount: 'totalItemCount',
      unreadItemCount: 'unreadItemCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childFolderCount: 'number',
      displayName: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      id: 'string',
      parentFolderId: 'string',
      totalItemCount: 'number',
      unreadItemCount: 'number',
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
   * 创建邮件文件夹
   * 
   * @param request - CreateMailFolderRequest
   * @param headers - CreateMailFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMailFolderResponse
   */
  async createMailFolderWithOptions(email: string, request: CreateMailFolderRequest, headers: CreateMailFolderHeaders, runtime: $Util.RuntimeOptions): Promise<CreateMailFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.extensions)) {
      body["extensions"] = request.extensions;
    }

    if (!Util.isUnset(request.folerId)) {
      body["folerId"] = request.folerId;
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
      action: "CreateMailFolder",
      version: "mail_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mail/users/${email}/mailFolders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateMailFolderResponse>(await this.execute(params, req, runtime), new CreateMailFolderResponse({}));
  }

  /**
   * 创建邮件文件夹
   * 
   * @param request - CreateMailFolderRequest
   * @returns CreateMailFolderResponse
   */
  async createMailFolder(email: string, request: CreateMailFolderRequest): Promise<CreateMailFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateMailFolderHeaders({ });
    return await this.createMailFolderWithOptions(email, request, headers, runtime);
  }

  /**
   * 创建草稿
   * 
   * @param request - CreateMessageRequest
   * @param headers - CreateMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMessageResponse
   */
  async createMessageWithOptions(email: string, request: CreateMessageRequest, headers: CreateMessageHeaders, runtime: $Util.RuntimeOptions): Promise<CreateMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.message)) {
      body["message"] = request.message;
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
      action: "CreateMessage",
      version: "mail_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mail/users/${email}/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateMessageResponse>(await this.execute(params, req, runtime), new CreateMessageResponse({}));
  }

  /**
   * 创建草稿
   * 
   * @param request - CreateMessageRequest
   * @returns CreateMessageResponse
   */
  async createMessage(email: string, request: CreateMessageRequest): Promise<CreateMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateMessageHeaders({ });
    return await this.createMessageWithOptions(email, request, headers, runtime);
  }

  /**
   * 创建企业邮箱用户
   * 
   * @param request - CreateUserRequest
   * @param headers - CreateUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: CreateUserRequest, headers: CreateUserHeaders, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.email)) {
      body["email"] = request.email;
    }

    if (!Util.isUnset(request.employeeType)) {
      body["employeeType"] = request.employeeType;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.password)) {
      body["password"] = request.password;
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
      action: "CreateUser",
      version: "mail_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mail/users`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateUserResponse>(await this.execute(params, req, runtime), new CreateUserResponse({}));
  }

  /**
   * 创建企业邮箱用户
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateUserHeaders({ });
    return await this.createUserWithOptions(request, headers, runtime);
  }

  /**
   * 删除文件夹
   * 
   * @param headers - DeleteMailFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMailFolderResponse
   */
  async deleteMailFolderWithOptions(email: string, id: string, headers: DeleteMailFolderHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteMailFolderResponse> {
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
      action: "DeleteMailFolder",
      version: "mail_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mail/users/${email}/mailFolders/${id}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteMailFolderResponse>(await this.execute(params, req, runtime), new DeleteMailFolderResponse({}));
  }

  /**
   * 删除文件夹
   * @returns DeleteMailFolderResponse
   */
  async deleteMailFolder(email: string, id: string): Promise<DeleteMailFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteMailFolderHeaders({ });
    return await this.deleteMailFolderWithOptions(email, id, headers, runtime);
  }

  /**
   * 批量删除邮件
   * 
   * @param request - DeleteMessagesRequest
   * @param headers - DeleteMessagesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessagesResponse
   */
  async deleteMessagesWithOptions(email: string, request: DeleteMessagesRequest, headers: DeleteMessagesHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteMessagesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deleteType)) {
      body["deleteType"] = request.deleteType;
    }

    if (!Util.isUnset(request.ids)) {
      body["ids"] = request.ids;
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
      action: "DeleteMessages",
      version: "mail_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mail/users/${email}/messages/batchDelete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteMessagesResponse>(await this.execute(params, req, runtime), new DeleteMessagesResponse({}));
  }

  /**
   * 批量删除邮件
   * 
   * @param request - DeleteMessagesRequest
   * @returns DeleteMessagesResponse
   */
  async deleteMessages(email: string, request: DeleteMessagesRequest): Promise<DeleteMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteMessagesHeaders({ });
    return await this.deleteMessagesWithOptions(email, request, headers, runtime);
  }

  /**
   * 获取邮件元数据
   * 
   * @param request - GetMessageRequest
   * @param headers - GetMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageResponse
   */
  async getMessageWithOptions(email: string, id: string, request: GetMessageRequest, headers: GetMessageHeaders, runtime: $Util.RuntimeOptions): Promise<GetMessageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.selectFields)) {
      query["selectFields"] = request.selectFields;
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
      action: "GetMessage",
      version: "mail_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mail/users/${email}/messages/${id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetMessageResponse>(await this.execute(params, req, runtime), new GetMessageResponse({}));
  }

  /**
   * 获取邮件元数据
   * 
   * @param request - GetMessageRequest
   * @returns GetMessageResponse
   */
  async getMessage(email: string, id: string, request: GetMessageRequest): Promise<GetMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetMessageHeaders({ });
    return await this.getMessageWithOptions(email, id, request, headers, runtime);
  }

  /**
   * 获取指定文件夹的子文件夹列表
   * 
   * @param request - ListMailFoldersRequest
   * @param headers - ListMailFoldersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMailFoldersResponse
   */
  async listMailFoldersWithOptions(email: string, request: ListMailFoldersRequest, headers: ListMailFoldersHeaders, runtime: $Util.RuntimeOptions): Promise<ListMailFoldersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.folderId)) {
      query["folderId"] = request.folderId;
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
      action: "ListMailFolders",
      version: "mail_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mail/users/${email}/mailFolders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListMailFoldersResponse>(await this.execute(params, req, runtime), new ListMailFoldersResponse({}));
  }

  /**
   * 获取指定文件夹的子文件夹列表
   * 
   * @param request - ListMailFoldersRequest
   * @returns ListMailFoldersResponse
   */
  async listMailFolders(email: string, request: ListMailFoldersRequest): Promise<ListMailFoldersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListMailFoldersHeaders({ });
    return await this.listMailFoldersWithOptions(email, request, headers, runtime);
  }

  /**
   * 获取邮件列表
   * 
   * @param request - ListMessagesRequest
   * @param headers - ListMessagesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessagesResponse
   */
  async listMessagesWithOptions(email: string, folderId: string, request: ListMessagesRequest, headers: ListMessagesHeaders, runtime: $Util.RuntimeOptions): Promise<ListMessagesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.selectFields)) {
      query["selectFields"] = request.selectFields;
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
      action: "ListMessages",
      version: "mail_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mail/users/${email}/mailFolders/${folderId}/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListMessagesResponse>(await this.execute(params, req, runtime), new ListMessagesResponse({}));
  }

  /**
   * 获取邮件列表
   * 
   * @param request - ListMessagesRequest
   * @returns ListMessagesResponse
   */
  async listMessages(email: string, folderId: string, request: ListMessagesRequest): Promise<ListMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListMessagesHeaders({ });
    return await this.listMessagesWithOptions(email, folderId, request, headers, runtime);
  }

  /**
   * 移动文件夹
   * 
   * @param request - MoveMailFolderRequest
   * @param headers - MoveMailFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveMailFolderResponse
   */
  async moveMailFolderWithOptions(email: string, id: string, request: MoveMailFolderRequest, headers: MoveMailFolderHeaders, runtime: $Util.RuntimeOptions): Promise<MoveMailFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destinationFolderId)) {
      body["destinationFolderId"] = request.destinationFolderId;
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
      action: "MoveMailFolder",
      version: "mail_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mail/users/${email}/mailFolders/${id}/move`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<MoveMailFolderResponse>(await this.execute(params, req, runtime), new MoveMailFolderResponse({}));
  }

  /**
   * 移动文件夹
   * 
   * @param request - MoveMailFolderRequest
   * @returns MoveMailFolderResponse
   */
  async moveMailFolder(email: string, id: string, request: MoveMailFolderRequest): Promise<MoveMailFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new MoveMailFolderHeaders({ });
    return await this.moveMailFolderWithOptions(email, id, request, headers, runtime);
  }

  /**
   * 发送邮件
   * 
   * @param request - SendMessageRequest
   * @param headers - SendMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageResponse
   */
  async sendMessageWithOptions(email: string, id: string, request: SendMessageRequest, headers: SendMessageHeaders, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.saveToSentItems)) {
      body["saveToSentItems"] = request.saveToSentItems;
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
      action: "SendMessage",
      version: "mail_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mail/users/${email}/messages/${id}/send`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<SendMessageResponse>(await this.execute(params, req, runtime), new SendMessageResponse({}));
  }

  /**
   * 发送邮件
   * 
   * @param request - SendMessageRequest
   * @returns SendMessageResponse
   */
  async sendMessage(email: string, id: string, request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SendMessageHeaders({ });
    return await this.sendMessageWithOptions(email, id, request, headers, runtime);
  }

  /**
   * 修改文件夹信息
   * 
   * @param request - UpdateMailFolderRequest
   * @param headers - UpdateMailFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMailFolderResponse
   */
  async updateMailFolderWithOptions(email: string, id: string, request: UpdateMailFolderRequest, headers: UpdateMailFolderHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateMailFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
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
      action: "UpdateMailFolder",
      version: "mail_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mail/users/${email}/mailFolders/${id}/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateMailFolderResponse>(await this.execute(params, req, runtime), new UpdateMailFolderResponse({}));
  }

  /**
   * 修改文件夹信息
   * 
   * @param request - UpdateMailFolderRequest
   * @returns UpdateMailFolderResponse
   */
  async updateMailFolder(email: string, id: string, request: UpdateMailFolderRequest): Promise<UpdateMailFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateMailFolderHeaders({ });
    return await this.updateMailFolderWithOptions(email, id, request, headers, runtime);
  }

  /**
   * 修改草稿
   * 
   * @param request - UpdateMessageRequest
   * @param headers - UpdateMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMessageResponse
   */
  async updateMessageWithOptions(email: string, id: string, request: UpdateMessageRequest, headers: UpdateMessageHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.message)) {
      body["message"] = request.message;
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
      action: "UpdateMessage",
      version: "mail_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/mail/users/${email}/messages/${id}/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateMessageResponse>(await this.execute(params, req, runtime), new UpdateMessageResponse({}));
  }

  /**
   * 修改草稿
   * 
   * @param request - UpdateMessageRequest
   * @returns UpdateMessageResponse
   */
  async updateMessage(email: string, id: string, request: UpdateMessageRequest): Promise<UpdateMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateMessageHeaders({ });
    return await this.updateMessageWithOptions(email, id, request, headers, runtime);
  }

}
