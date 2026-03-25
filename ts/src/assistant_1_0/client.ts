// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDomainWordsHeaders extends $tea.Model {
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

export class AddDomainWordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainWords?: AddDomainWordsRequestDomainWords[];
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      domainWords: 'domainWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      domainWords: { 'type': 'array', 'itemType': AddDomainWordsRequestDomainWords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainWordsResponseBody extends $tea.Model {
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

export class AddDomainWordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDomainWordsResponseBody;
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
      body: AddDomainWordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddToOrgSkillRepositoryHeaders extends $tea.Model {
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

export class AddToOrgSkillRepositoryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  actionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  actionVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operatorUnionId?: string;
  static names(): { [key: string]: string } {
    return {
      actionId: 'actionId',
      actionVersion: 'actionVersion',
      operatorUnionId: 'operatorUnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionId: 'string',
      actionVersion: 'string',
      operatorUnionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddToOrgSkillRepositoryResponseBody extends $tea.Model {
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

export class AddToOrgSkillRepositoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddToOrgSkillRepositoryResponseBody;
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
      body: AddToOrgSkillRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssistantMeResponseHeaders extends $tea.Model {
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

export class AssistantMeResponseRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  input?: string;
  instructions?: string;
  metadata?: { [key: string]: any };
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      instructions: 'instructions',
      metadata: 'metadata',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      instructions: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      stream: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssistantMeResponseResponseBody extends $tea.Model {
  createdAt?: number;
  error?: string;
  id?: string;
  metadata?: { [key: string]: any };
  model?: string;
  object?: string;
  output?: AssistantMeResponseResponseBodyOutput[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      error: 'error',
      id: 'id',
      metadata: 'metadata',
      model: 'model',
      object: 'object',
      output: 'output',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      error: 'string',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      model: 'string',
      object: 'string',
      output: { 'type': 'array', 'itemType': AssistantMeResponseResponseBodyOutput },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssistantMeResponseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssistantMeResponseResponseBody;
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
      body: AssistantMeResponseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssistantResponseHeaders extends $tea.Model {
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

export class AssistantResponseRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  input?: string;
  instructions?: string;
  metadata?: { [key: string]: any };
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      instructions: 'instructions',
      metadata: 'metadata',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      instructions: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      stream: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssistantResponseResponseBody extends $tea.Model {
  createdAt?: number;
  error?: string;
  id?: string;
  metadata?: { [key: string]: any };
  model?: string;
  object?: string;
  output?: AssistantResponseResponseBodyOutput[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      error: 'error',
      id: 'id',
      metadata: 'metadata',
      model: 'model',
      object: 'object',
      output: 'output',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      error: 'string',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      model: 'string',
      object: 'string',
      output: { 'type': 'array', 'itemType': AssistantResponseResponseBodyOutput },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssistantResponseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssistantResponseResponseBody;
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
      body: AssistantResponseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetAICreditsRecordHeaders extends $tea.Model {
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

export class BatchGetAICreditsRecordRequest extends $tea.Model {
  assistantId?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetAICreditsRecordResponseBody extends $tea.Model {
  hasMore?: boolean;
  list?: BatchGetAICreditsRecordResponseBodyList[];
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
      list: { 'type': 'array', 'itemType': BatchGetAICreditsRecordResponseBodyList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetAICreditsRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchGetAICreditsRecordResponseBody;
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
      body: BatchGetAICreditsRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantHeaders extends $tea.Model {
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

export class CreateAssistantRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instructions?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operatorUnionId?: string;
  recommendPrompts?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  welcomeContent?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      icon: 'icon',
      instructions: 'instructions',
      name: 'name',
      operatorUnionId: 'operatorUnionId',
      recommendPrompts: 'recommendPrompts',
      welcomeContent: 'welcomeContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      icon: 'string',
      instructions: 'string',
      name: 'string',
      operatorUnionId: 'string',
      recommendPrompts: { 'type': 'array', 'itemType': 'string' },
      welcomeContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantResponseBody extends $tea.Model {
  actionNames?: string[];
  assistantId?: string;
  assistantUnionId?: string;
  createdAt?: number;
  creatorUnionId?: string;
  description?: string;
  fallbackContent?: string;
  icon?: string;
  instructions?: string;
  knowledgeFileNames?: string[];
  model?: string;
  name?: string;
  recommendPrompts?: string[];
  unifiedAppId?: string;
  welcomeContent?: string;
  static names(): { [key: string]: string } {
    return {
      actionNames: 'actionNames',
      assistantId: 'assistantId',
      assistantUnionId: 'assistantUnionId',
      createdAt: 'createdAt',
      creatorUnionId: 'creatorUnionId',
      description: 'description',
      fallbackContent: 'fallbackContent',
      icon: 'icon',
      instructions: 'instructions',
      knowledgeFileNames: 'knowledgeFileNames',
      model: 'model',
      name: 'name',
      recommendPrompts: 'recommendPrompts',
      unifiedAppId: 'unifiedAppId',
      welcomeContent: 'welcomeContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionNames: { 'type': 'array', 'itemType': 'string' },
      assistantId: 'string',
      assistantUnionId: 'string',
      createdAt: 'number',
      creatorUnionId: 'string',
      description: 'string',
      fallbackContent: 'string',
      icon: 'string',
      instructions: 'string',
      knowledgeFileNames: { 'type': 'array', 'itemType': 'string' },
      model: 'string',
      name: 'string',
      recommendPrompts: { 'type': 'array', 'itemType': 'string' },
      unifiedAppId: 'string',
      welcomeContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAssistantResponseBody;
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
      body: CreateAssistantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantMessageHeaders extends $tea.Model {
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

export class CreateAssistantMessageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  extension?: { [key: string]: string };
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      extension: 'extension',
      metadata: 'metadata',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantMessageResponseBody extends $tea.Model {
  assistantId?: string;
  content?: any[];
  createdAt?: number;
  id?: string;
  metadata?: { [key: string]: any };
  object?: string;
  role?: string;
  runId?: string;
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      content: 'content',
      createdAt: 'createdAt',
      id: 'id',
      metadata: 'metadata',
      object: 'object',
      role: 'role',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      content: { 'type': 'array', 'itemType': 'any' },
      createdAt: 'number',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      role: 'string',
      runId: 'string',
      threadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAssistantMessageResponseBody;
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
      body: CreateAssistantMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantRunHeaders extends $tea.Model {
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

export class CreateAssistantRunRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  instructions?: string;
  metadata?: { [key: string]: any };
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      instructions: 'instructions',
      metadata: 'metadata',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      instructions: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      stream: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantRunResponseBody extends $tea.Model {
  assistantId?: string;
  cancelledAt?: number;
  completedAt?: number;
  createdAt?: number;
  expiresAt?: number;
  failedAt?: number;
  id?: string;
  lastErrorMsg?: string;
  metadata?: { [key: string]: any };
  object?: string;
  startedAt?: number;
  status?: string;
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      cancelledAt: 'cancelledAt',
      completedAt: 'completedAt',
      createdAt: 'createdAt',
      expiresAt: 'expiresAt',
      failedAt: 'failedAt',
      id: 'id',
      lastErrorMsg: 'lastErrorMsg',
      metadata: 'metadata',
      object: 'object',
      startedAt: 'startedAt',
      status: 'status',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      cancelledAt: 'number',
      completedAt: 'number',
      createdAt: 'number',
      expiresAt: 'number',
      failedAt: 'number',
      id: 'string',
      lastErrorMsg: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      startedAt: 'number',
      status: 'string',
      threadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAssistantRunResponseBody;
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
      body: CreateAssistantRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantThreadHeaders extends $tea.Model {
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

export class CreateAssistantThreadRequest extends $tea.Model {
  /**
   * **if can be null:**
   * true
   */
  metadata?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      metadata: 'metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantThreadResponseBody extends $tea.Model {
  createdAt?: number;
  id?: string;
  metadata?: { [key: string]: any };
  object?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      id: 'id',
      metadata: 'metadata',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssistantThreadResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAssistantThreadResponseBody;
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
      body: CreateAssistantThreadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssistantHeaders extends $tea.Model {
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

export class DeleteAssistantRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operatorUnionId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      operatorUnionId: 'operatorUnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      operatorUnionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssistantResponseBody extends $tea.Model {
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

export class DeleteAssistantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAssistantResponseBody;
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
      body: DeleteAssistantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssistantMessageHeaders extends $tea.Model {
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

export class DeleteAssistantMessageResponseBody extends $tea.Model {
  deleted?: boolean;
  id?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'deleted',
      id: 'id',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'boolean',
      id: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssistantMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAssistantMessageResponseBody;
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
      body: DeleteAssistantMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssistantThreadHeaders extends $tea.Model {
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

export class DeleteAssistantThreadResponseBody extends $tea.Model {
  deleted?: boolean;
  id?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'deleted',
      id: 'id',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'boolean',
      id: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssistantThreadResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAssistantThreadResponseBody;
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
      body: DeleteAssistantThreadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainWordsHeaders extends $tea.Model {
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

export class DeleteDomainWordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainWords?: DeleteDomainWordsRequestDomainWords[];
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      domainWords: 'domainWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      domainWords: { 'type': 'array', 'itemType': DeleteDomainWordsRequestDomainWords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainWordsResponseBody extends $tea.Model {
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

export class DeleteDomainWordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainWordsResponseBody;
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
      body: DeleteDomainWordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKnowledgeHeaders extends $tea.Model {
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

export class DeleteKnowledgeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  studyId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      studyId: 'studyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      studyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKnowledgeResponseBody extends $tea.Model {
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

export class DeleteKnowledgeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKnowledgeResponseBody;
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
      body: DeleteKnowledgeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAssistantHeaders extends $tea.Model {
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

export class DeployAssistantRequest extends $tea.Model {
  action?: DeployAssistantRequestAction;
  aiAssistantId?: string;
  appScopes?: DeployAssistantRequestAppScopes;
  description?: string;
  fallback?: DeployAssistantRequestFallback;
  icon?: string;
  instructions?: string;
  isPublic?: number;
  name?: string;
  operateUserId?: string;
  recommendPrompts?: string[];
  shareRecipient?: string;
  toneStyle?: string;
  uuid?: string;
  welcomeContent?: string;
  welcomeTitle?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      aiAssistantId: 'aiAssistantId',
      appScopes: 'appScopes',
      description: 'description',
      fallback: 'fallback',
      icon: 'icon',
      instructions: 'instructions',
      isPublic: 'isPublic',
      name: 'name',
      operateUserId: 'operateUserId',
      recommendPrompts: 'recommendPrompts',
      shareRecipient: 'shareRecipient',
      toneStyle: 'toneStyle',
      uuid: 'uuid',
      welcomeContent: 'welcomeContent',
      welcomeTitle: 'welcomeTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: DeployAssistantRequestAction,
      aiAssistantId: 'string',
      appScopes: DeployAssistantRequestAppScopes,
      description: 'string',
      fallback: DeployAssistantRequestFallback,
      icon: 'string',
      instructions: 'string',
      isPublic: 'number',
      name: 'string',
      operateUserId: 'string',
      recommendPrompts: { 'type': 'array', 'itemType': 'string' },
      shareRecipient: 'string',
      toneStyle: 'string',
      uuid: 'string',
      welcomeContent: 'string',
      welcomeTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAssistantResponseBody extends $tea.Model {
  assistantId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAssistantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployAssistantResponseBody;
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
      body: DeployAssistantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAskDetailHeaders extends $tea.Model {
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

export class GetAskDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  offset?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      endTime: 'endTime',
      offset: 'offset',
      pageSize: 'pageSize',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      endTime: 'number',
      offset: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAskDetailResponseBody extends $tea.Model {
  result?: GetAskDetailResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetAskDetailResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAskDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAskDetailResponseBody;
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
      body: GetAskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssistantActionInfoHeaders extends $tea.Model {
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

export class GetAssistantActionInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssistantActionInfoResponseBody extends $tea.Model {
  actionList?: GetAssistantActionInfoResponseBodyActionList[];
  assistantId?: string;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      actionList: 'actionList',
      assistantId: 'assistantId',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': GetAssistantActionInfoResponseBodyActionList },
      assistantId: 'string',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssistantActionInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAssistantActionInfoResponseBody;
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
      body: GetAssistantActionInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainWordsHeaders extends $tea.Model {
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

export class GetDomainWordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainWordsResponseBody extends $tea.Model {
  result?: string[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': 'string' },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainWordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDomainWordsResponseBody;
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
      body: GetDomainWordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeListHeaders extends $tea.Model {
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

export class GetKnowledgeListRequest extends $tea.Model {
  assistantId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeListResponseBody extends $tea.Model {
  result?: GetKnowledgeListResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetKnowledgeListResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKnowledgeListResponseBody;
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
      body: GetKnowledgeListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAssistantHeaders extends $tea.Model {
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

export class InstallAssistantRequest extends $tea.Model {
  assistantId?: string;
  isAllOrgMemberVisible?: boolean;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      isAllOrgMemberVisible: 'isAllOrgMemberVisible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      isAllOrgMemberVisible: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAssistantResponseBody extends $tea.Model {
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

export class InstallAssistantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallAssistantResponseBody;
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
      body: InstallAssistantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LearnKnowledgeHeaders extends $tea.Model {
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

export class LearnKnowledgeRequest extends $tea.Model {
  assistantId?: string;
  docUrl?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      docUrl: 'docUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      docUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LearnKnowledgeResponseBody extends $tea.Model {
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

export class LearnKnowledgeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LearnKnowledgeResponseBody;
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
      body: LearnKnowledgeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantHeaders extends $tea.Model {
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

export class ListAssistantRequest extends $tea.Model {
  cursor?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      pageSize: 'pageSize',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'number',
      pageSize: 'number',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantResponseBody extends $tea.Model {
  hasMore?: boolean;
  list?: ListAssistantResponseBodyList[];
  nextCursor?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      list: 'list',
      nextCursor: 'nextCursor',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      list: { 'type': 'array', 'itemType': ListAssistantResponseBodyList },
      nextCursor: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAssistantResponseBody;
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
      body: ListAssistantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantMessageHeaders extends $tea.Model {
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

export class ListAssistantMessageRequest extends $tea.Model {
  limit?: number;
  order?: string;
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      order: 'order',
      runId: 'runId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      order: 'string',
      runId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantMessageResponseBody extends $tea.Model {
  data?: ListAssistantMessageResponseBodyData[];
  object?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAssistantMessageResponseBodyData },
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAssistantMessageResponseBody;
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
      body: ListAssistantMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantRunHeaders extends $tea.Model {
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

export class ListAssistantRunRequest extends $tea.Model {
  limit?: number;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      order: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantRunResponseBody extends $tea.Model {
  data?: ListAssistantRunResponseBodyData[];
  object?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAssistantRunResponseBodyData },
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAssistantRunResponseBody;
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
      body: ListAssistantRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceHeaders extends $tea.Model {
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

export class ListInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  prototypeAssistantId?: string;
  static names(): { [key: string]: string } {
    return {
      prototypeAssistantId: 'prototypeAssistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prototypeAssistantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $tea.Model {
  result?: ListInstanceResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListInstanceResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceResponseBody;
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
      body: ListInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVisibleAssistantHeaders extends $tea.Model {
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

export class ListVisibleAssistantRequest extends $tea.Model {
  cursor?: number;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      name: 'name',
      pageSize: 'pageSize',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'number',
      name: 'string',
      pageSize: 'number',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVisibleAssistantResponseBody extends $tea.Model {
  hasMore?: boolean;
  list?: ListVisibleAssistantResponseBodyList[];
  nextCursor?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      list: 'list',
      nextCursor: 'nextCursor',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      list: { 'type': 'array', 'itemType': ListVisibleAssistantResponseBodyList },
      nextCursor: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVisibleAssistantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVisibleAssistantResponseBody;
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
      body: ListVisibleAssistantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogListHeaders extends $tea.Model {
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

export class LogListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogListResponseBody extends $tea.Model {
  result?: LogListResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: LogListResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LogListResponseBody;
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
      body: LogListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelearnKnowledgeHeaders extends $tea.Model {
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

export class RelearnKnowledgeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelearnKnowledgeResponseBody extends $tea.Model {
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

export class RelearnKnowledgeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RelearnKnowledgeResponseBody;
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
      body: RelearnKnowledgeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAssistantHeaders extends $tea.Model {
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

export class RemoveAssistantRequest extends $tea.Model {
  assistantId?: string;
  operatorUnionId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      operatorUnionId: 'operatorUnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      operatorUnionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAssistantResponseBody extends $tea.Model {
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

export class RemoveAssistantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveAssistantResponseBody;
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
      body: RemoveAssistantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFromOrgSkillRepositoryHeaders extends $tea.Model {
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

export class RemoveFromOrgSkillRepositoryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  actionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operatorUnionId?: string;
  static names(): { [key: string]: string } {
    return {
      actionId: 'actionId',
      operatorUnionId: 'operatorUnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionId: 'string',
      operatorUnionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFromOrgSkillRepositoryResponseBody extends $tea.Model {
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

export class RemoveFromOrgSkillRepositoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveFromOrgSkillRepositoryResponseBody;
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
      body: RemoveFromOrgSkillRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantBasicInfoHeaders extends $tea.Model {
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

export class RetrieveAssistantBasicInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantBasicInfoResponseBody extends $tea.Model {
  actionNames?: string[];
  assistantId?: string;
  assistantUnionId?: string;
  createdAt?: number;
  creatorUnionId?: string;
  description?: string;
  fallbackContent?: string;
  icon?: string;
  instructions?: string;
  knowledgeFileNames?: string[];
  model?: string;
  name?: string;
  recommendPrompts?: string[];
  unifiedAppId?: string;
  welcomeContent?: string;
  static names(): { [key: string]: string } {
    return {
      actionNames: 'actionNames',
      assistantId: 'assistantId',
      assistantUnionId: 'assistantUnionId',
      createdAt: 'createdAt',
      creatorUnionId: 'creatorUnionId',
      description: 'description',
      fallbackContent: 'fallbackContent',
      icon: 'icon',
      instructions: 'instructions',
      knowledgeFileNames: 'knowledgeFileNames',
      model: 'model',
      name: 'name',
      recommendPrompts: 'recommendPrompts',
      unifiedAppId: 'unifiedAppId',
      welcomeContent: 'welcomeContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionNames: { 'type': 'array', 'itemType': 'string' },
      assistantId: 'string',
      assistantUnionId: 'string',
      createdAt: 'number',
      creatorUnionId: 'string',
      description: 'string',
      fallbackContent: 'string',
      icon: 'string',
      instructions: 'string',
      knowledgeFileNames: { 'type': 'array', 'itemType': 'string' },
      model: 'string',
      name: 'string',
      recommendPrompts: { 'type': 'array', 'itemType': 'string' },
      unifiedAppId: 'string',
      welcomeContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantBasicInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetrieveAssistantBasicInfoResponseBody;
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
      body: RetrieveAssistantBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantMessageHeaders extends $tea.Model {
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

export class RetrieveAssistantMessageResponseBody extends $tea.Model {
  assisantId?: string;
  content?: any[];
  createdAt?: number;
  id?: string;
  metadata?: { [key: string]: any };
  object?: string;
  role?: string;
  runId?: string;
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assisantId: 'assisantId',
      content: 'content',
      createdAt: 'createdAt',
      id: 'id',
      metadata: 'metadata',
      object: 'object',
      role: 'role',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assisantId: 'string',
      content: { 'type': 'array', 'itemType': 'any' },
      createdAt: 'number',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      role: 'string',
      runId: 'string',
      threadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetrieveAssistantMessageResponseBody;
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
      body: RetrieveAssistantMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantRunHeaders extends $tea.Model {
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

export class RetrieveAssistantRunResponseBody extends $tea.Model {
  assistantId?: string;
  cancelledAt?: number;
  completedAt?: number;
  createdAt?: number;
  expiresAt?: number;
  failedAt?: number;
  id?: string;
  lastErrorMsg?: string;
  metadata?: { [key: string]: any };
  object?: string;
  startedAt?: number;
  status?: string;
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      cancelledAt: 'cancelledAt',
      completedAt: 'completedAt',
      createdAt: 'createdAt',
      expiresAt: 'expiresAt',
      failedAt: 'failedAt',
      id: 'id',
      lastErrorMsg: 'lastErrorMsg',
      metadata: 'metadata',
      object: 'object',
      startedAt: 'startedAt',
      status: 'status',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      cancelledAt: 'number',
      completedAt: 'number',
      createdAt: 'number',
      expiresAt: 'number',
      failedAt: 'number',
      id: 'string',
      lastErrorMsg: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      startedAt: 'number',
      status: 'string',
      threadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetrieveAssistantRunResponseBody;
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
      body: RetrieveAssistantRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantScopeHeaders extends $tea.Model {
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

export class RetrieveAssistantScopeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantScopeResponseBody extends $tea.Model {
  result?: RetrieveAssistantScopeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: RetrieveAssistantScopeResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantScopeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetrieveAssistantScopeResponseBody;
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
      body: RetrieveAssistantScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantThreadHeaders extends $tea.Model {
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

export class RetrieveAssistantThreadResponseBody extends $tea.Model {
  createdAt?: number;
  id?: string;
  metadata?: { [key: string]: any };
  object?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      id: 'id',
      metadata: 'metadata',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantThreadResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetrieveAssistantThreadResponseBody;
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
      body: RetrieveAssistantThreadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssistantBasicInfoHeaders extends $tea.Model {
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

export class UpdateAssistantBasicInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  description?: string;
  fallbackContent?: string;
  icon?: string;
  instructions?: string;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operatorUnionId?: string;
  recommendPrompts?: string[];
  welcomeContent?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      description: 'description',
      fallbackContent: 'fallbackContent',
      icon: 'icon',
      instructions: 'instructions',
      name: 'name',
      operatorUnionId: 'operatorUnionId',
      recommendPrompts: 'recommendPrompts',
      welcomeContent: 'welcomeContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      description: 'string',
      fallbackContent: 'string',
      icon: 'string',
      instructions: 'string',
      name: 'string',
      operatorUnionId: 'string',
      recommendPrompts: { 'type': 'array', 'itemType': 'string' },
      welcomeContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssistantBasicInfoResponseBody extends $tea.Model {
  actionNames?: string[];
  assistantId?: string;
  assistantUnionId?: string;
  createdAt?: number;
  creatorUnionId?: string;
  description?: string;
  fallbackContent?: string;
  icon?: string;
  instructions?: string;
  knowledgeFileNames?: string[];
  model?: string;
  name?: string;
  recommendPrompts?: string[];
  unifiedAppId?: string;
  welcomeContent?: string;
  static names(): { [key: string]: string } {
    return {
      actionNames: 'actionNames',
      assistantId: 'assistantId',
      assistantUnionId: 'assistantUnionId',
      createdAt: 'createdAt',
      creatorUnionId: 'creatorUnionId',
      description: 'description',
      fallbackContent: 'fallbackContent',
      icon: 'icon',
      instructions: 'instructions',
      knowledgeFileNames: 'knowledgeFileNames',
      model: 'model',
      name: 'name',
      recommendPrompts: 'recommendPrompts',
      unifiedAppId: 'unifiedAppId',
      welcomeContent: 'welcomeContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionNames: { 'type': 'array', 'itemType': 'string' },
      assistantId: 'string',
      assistantUnionId: 'string',
      createdAt: 'number',
      creatorUnionId: 'string',
      description: 'string',
      fallbackContent: 'string',
      icon: 'string',
      instructions: 'string',
      knowledgeFileNames: { 'type': 'array', 'itemType': 'string' },
      model: 'string',
      name: 'string',
      recommendPrompts: { 'type': 'array', 'itemType': 'string' },
      unifiedAppId: 'string',
      welcomeContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssistantBasicInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAssistantBasicInfoResponseBody;
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
      body: UpdateAssistantBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssistantScopeHeaders extends $tea.Model {
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

export class UpdateAssistantScopeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assistantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operatorUnionId?: string;
  scopes?: UpdateAssistantScopeRequestScopes;
  sharing?: boolean;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      operatorUnionId: 'operatorUnionId',
      scopes: 'scopes',
      sharing: 'sharing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      operatorUnionId: 'string',
      scopes: UpdateAssistantScopeRequestScopes,
      sharing: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssistantScopeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: any;
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
      body: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainWordsRequestDomainWords extends $tea.Model {
  description?: string;
  domainWord?: string;
  formalWords?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      domainWord: 'domainWord',
      formalWords: 'formalWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainWord: 'string',
      formalWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssistantMeResponseResponseBodyOutputContent extends $tea.Model {
  annotations?: any[];
  text?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': 'any' },
      text: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssistantMeResponseResponseBodyOutput extends $tea.Model {
  content?: AssistantMeResponseResponseBodyOutputContent[];
  id?: string;
  role?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      id: 'id',
      role: 'role',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': AssistantMeResponseResponseBodyOutputContent },
      id: 'string',
      role: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssistantResponseResponseBodyOutputContent extends $tea.Model {
  annotations?: any[];
  text?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': 'any' },
      text: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssistantResponseResponseBodyOutput extends $tea.Model {
  content?: AssistantResponseResponseBodyOutputContent[];
  id?: string;
  role?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      id: 'id',
      role: 'role',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': AssistantResponseResponseBodyOutputContent },
      id: 'string',
      role: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetAICreditsRecordResponseBodyList extends $tea.Model {
  actionNames?: string;
  assistantId?: string;
  assistantName?: string;
  deptId?: number;
  deptName?: string;
  requestId?: string;
  time?: string;
  unionId?: string;
  usedNum?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      actionNames: 'actionNames',
      assistantId: 'assistantId',
      assistantName: 'assistantName',
      deptId: 'deptId',
      deptName: 'deptName',
      requestId: 'requestId',
      time: 'time',
      unionId: 'unionId',
      usedNum: 'usedNum',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionNames: 'string',
      assistantId: 'string',
      assistantName: 'string',
      deptId: 'number',
      deptName: 'string',
      requestId: 'string',
      time: 'string',
      unionId: 'string',
      usedNum: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainWordsRequestDomainWords extends $tea.Model {
  description?: string;
  domainWord?: string;
  formalWords?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      domainWord: 'domainWord',
      formalWords: 'formalWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainWord: 'string',
      formalWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAssistantRequestActionActionAuthInfo extends $tea.Model {
  authConfig?: string;
  authenticationType?: string;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      authenticationType: 'authenticationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: 'string',
      authenticationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAssistantRequestAction extends $tea.Model {
  actionAuthInfo?: DeployAssistantRequestActionActionAuthInfo;
  actionName?: string;
  description?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      actionAuthInfo: 'actionAuthInfo',
      actionName: 'actionName',
      description: 'description',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionAuthInfo: DeployAssistantRequestActionActionAuthInfo,
      actionName: 'string',
      description: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAssistantRequestAppScopes extends $tea.Model {
  deptVisibleScopes?: string;
  dynamicGroupScopes?: string;
  isHidden?: boolean;
  roleVisibleScopes?: string;
  userVisibleScopes?: string;
  static names(): { [key: string]: string } {
    return {
      deptVisibleScopes: 'deptVisibleScopes',
      dynamicGroupScopes: 'dynamicGroupScopes',
      isHidden: 'isHidden',
      roleVisibleScopes: 'roleVisibleScopes',
      userVisibleScopes: 'userVisibleScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptVisibleScopes: 'string',
      dynamicGroupScopes: 'string',
      isHidden: 'boolean',
      roleVisibleScopes: 'string',
      userVisibleScopes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAssistantRequestFallback extends $tea.Model {
  actionType?: string;
  defaultMsg?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'actionType',
      defaultMsg: 'defaultMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      defaultMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAskDetailResponseBodyResultListReferences extends $tea.Model {
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

export class GetAskDetailResponseBodyResultList extends $tea.Model {
  answer?: string;
  answerResult?: string;
  commentTags?: string[];
  isMarkResolved?: boolean;
  nick?: string;
  question?: string;
  references?: GetAskDetailResponseBodyResultListReferences[];
  time?: number;
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      answerResult: 'answerResult',
      commentTags: 'commentTags',
      isMarkResolved: 'isMarkResolved',
      nick: 'nick',
      question: 'question',
      references: 'references',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      answerResult: 'string',
      commentTags: { 'type': 'array', 'itemType': 'string' },
      isMarkResolved: 'boolean',
      nick: 'string',
      question: 'string',
      references: { 'type': 'array', 'itemType': GetAskDetailResponseBodyResultListReferences },
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAskDetailResponseBodyResult extends $tea.Model {
  hasMore?: boolean;
  list?: GetAskDetailResponseBodyResultList[];
  nextCursor?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      list: 'list',
      nextCursor: 'nextCursor',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      list: { 'type': 'array', 'itemType': GetAskDetailResponseBodyResultList },
      nextCursor: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssistantActionInfoResponseBodyActionList extends $tea.Model {
  actionId?: string;
  actionName?: string;
  actionVersion?: string;
  description?: string;
  icon?: string;
  static names(): { [key: string]: string } {
    return {
      actionId: 'actionId',
      actionName: 'actionName',
      actionVersion: 'actionVersion',
      description: 'description',
      icon: 'icon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionId: 'string',
      actionName: 'string',
      actionVersion: 'string',
      description: 'string',
      icon: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeListResponseBodyResult extends $tea.Model {
  docFormat?: string;
  docName?: string;
  docUrl?: string;
  status?: string;
  studyId?: string;
  static names(): { [key: string]: string } {
    return {
      docFormat: 'docFormat',
      docName: 'docName',
      docUrl: 'docUrl',
      status: 'status',
      studyId: 'studyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docFormat: 'string',
      docName: 'string',
      docUrl: 'string',
      status: 'string',
      studyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantResponseBodyList extends $tea.Model {
  assistantId?: string;
  createdAt?: number;
  creatorUnionId?: string;
  description?: string;
  icon?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      createdAt: 'createdAt',
      creatorUnionId: 'creatorUnionId',
      description: 'description',
      icon: 'icon',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      createdAt: 'number',
      creatorUnionId: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantMessageResponseBodyData extends $tea.Model {
  assistantId?: string;
  content?: any[];
  createdAt?: number;
  id?: string;
  metadata?: { [key: string]: any };
  object?: string;
  role?: string;
  runId?: string;
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      content: 'content',
      createdAt: 'createdAt',
      id: 'id',
      metadata: 'metadata',
      object: 'object',
      role: 'role',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      content: { 'type': 'array', 'itemType': 'any' },
      createdAt: 'number',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      role: 'string',
      runId: 'string',
      threadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistantRunResponseBodyData extends $tea.Model {
  assistantId?: string;
  cancelledAt?: number;
  completedAt?: number;
  createdAt?: number;
  expiresAt?: number;
  failedAt?: number;
  id?: string;
  lastErrorMsg?: string;
  metadata?: { [key: string]: any };
  object?: string;
  startedAt?: number;
  status?: string;
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      cancelledAt: 'cancelledAt',
      completedAt: 'completedAt',
      createdAt: 'createdAt',
      expiresAt: 'expiresAt',
      failedAt: 'failedAt',
      id: 'id',
      lastErrorMsg: 'lastErrorMsg',
      metadata: 'metadata',
      object: 'object',
      startedAt: 'startedAt',
      status: 'status',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      cancelledAt: 'number',
      completedAt: 'number',
      createdAt: 'number',
      expiresAt: 'number',
      failedAt: 'number',
      id: 'string',
      lastErrorMsg: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      startedAt: 'number',
      status: 'string',
      threadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResult extends $tea.Model {
  description?: string;
  icon?: string;
  name?: string;
  prototypeAssistantId?: string;
  tenantAssistantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      icon: 'icon',
      name: 'name',
      prototypeAssistantId: 'prototypeAssistantId',
      tenantAssistantId: 'tenantAssistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      icon: 'string',
      name: 'string',
      prototypeAssistantId: 'string',
      tenantAssistantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVisibleAssistantResponseBodyList extends $tea.Model {
  assistantId?: string;
  createdAt?: number;
  creatorUnionId?: string;
  description?: string;
  icon?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      createdAt: 'createdAt',
      creatorUnionId: 'creatorUnionId',
      description: 'description',
      icon: 'icon',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      createdAt: 'number',
      creatorUnionId: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogListResponseBodyResultList extends $tea.Model {
  actionNames?: string;
  customChannel?: string;
  input?: string;
  name?: string;
  output?: string;
  result?: string;
  scene?: string;
  time?: number;
  unionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      actionNames: 'actionNames',
      customChannel: 'customChannel',
      input: 'input',
      name: 'name',
      output: 'output',
      result: 'result',
      scene: 'scene',
      time: 'time',
      unionId: 'unionId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionNames: 'string',
      customChannel: 'string',
      input: 'string',
      name: 'string',
      output: 'string',
      result: 'string',
      scene: 'string',
      time: 'number',
      unionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogListResponseBodyResult extends $tea.Model {
  hasMore?: boolean;
  list?: LogListResponseBodyResultList[];
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
      list: { 'type': 'array', 'itemType': LogListResponseBodyResultList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantScopeResponseBodyResultScopes extends $tea.Model {
  deptVisibleScopes?: string[];
  dynamicGroupScopes?: string[];
  isAdmin?: boolean;
  roleVisibleScopes?: string[];
  userVisibleScopes?: string[];
  static names(): { [key: string]: string } {
    return {
      deptVisibleScopes: 'deptVisibleScopes',
      dynamicGroupScopes: 'dynamicGroupScopes',
      isAdmin: 'isAdmin',
      roleVisibleScopes: 'roleVisibleScopes',
      userVisibleScopes: 'userVisibleScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptVisibleScopes: { 'type': 'array', 'itemType': 'string' },
      dynamicGroupScopes: { 'type': 'array', 'itemType': 'string' },
      isAdmin: 'boolean',
      roleVisibleScopes: { 'type': 'array', 'itemType': 'string' },
      userVisibleScopes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveAssistantScopeResponseBodyResult extends $tea.Model {
  assistantId?: string;
  scopes?: RetrieveAssistantScopeResponseBodyResultScopes;
  sharing?: boolean;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      scopes: 'scopes',
      sharing: 'sharing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      scopes: RetrieveAssistantScopeResponseBodyResultScopes,
      sharing: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssistantScopeRequestScopes extends $tea.Model {
  deptVisibleScopes?: string[];
  dynamicGroupScopes?: string[];
  isAdmin?: boolean;
  roleVisibleScopes?: string[];
  userVisibleScopes?: string[];
  static names(): { [key: string]: string } {
    return {
      deptVisibleScopes: 'deptVisibleScopes',
      dynamicGroupScopes: 'dynamicGroupScopes',
      isAdmin: 'isAdmin',
      roleVisibleScopes: 'roleVisibleScopes',
      userVisibleScopes: 'userVisibleScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptVisibleScopes: { 'type': 'array', 'itemType': 'string' },
      dynamicGroupScopes: { 'type': 'array', 'itemType': 'string' },
      isAdmin: 'boolean',
      roleVisibleScopes: { 'type': 'array', 'itemType': 'string' },
      userVisibleScopes: { 'type': 'array', 'itemType': 'string' },
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
   * 助理添加专业词汇
   * 
   * @param request - AddDomainWordsRequest
   * @param headers - AddDomainWordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDomainWordsResponse
   */
  async addDomainWordsWithOptions(request: AddDomainWordsRequest, headers: AddDomainWordsHeaders, runtime: $Util.RuntimeOptions): Promise<AddDomainWordsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.domainWords)) {
      body["domainWords"] = request.domainWords;
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
      action: "AddDomainWords",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/domainWords`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AddDomainWordsResponse>(await this.execute(params, req, runtime), new AddDomainWordsResponse({}));
  }

  /**
   * 助理添加专业词汇
   * 
   * @param request - AddDomainWordsRequest
   * @returns AddDomainWordsResponse
   */
  async addDomainWords(request: AddDomainWordsRequest): Promise<AddDomainWordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddDomainWordsHeaders({ });
    return await this.addDomainWordsWithOptions(request, headers, runtime);
  }

  /**
   * 添加技能到组织技能库
   * 
   * @param request - AddToOrgSkillRepositoryRequest
   * @param headers - AddToOrgSkillRepositoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddToOrgSkillRepositoryResponse
   */
  async addToOrgSkillRepositoryWithOptions(request: AddToOrgSkillRepositoryRequest, headers: AddToOrgSkillRepositoryHeaders, runtime: $Util.RuntimeOptions): Promise<AddToOrgSkillRepositoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionId)) {
      body["actionId"] = request.actionId;
    }

    if (!Util.isUnset(request.actionVersion)) {
      body["actionVersion"] = request.actionVersion;
    }

    if (!Util.isUnset(request.operatorUnionId)) {
      body["operatorUnionId"] = request.operatorUnionId;
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
      action: "AddToOrgSkillRepository",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/orgActionRepositories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AddToOrgSkillRepositoryResponse>(await this.execute(params, req, runtime), new AddToOrgSkillRepositoryResponse({}));
  }

  /**
   * 添加技能到组织技能库
   * 
   * @param request - AddToOrgSkillRepositoryRequest
   * @returns AddToOrgSkillRepositoryResponse
   */
  async addToOrgSkillRepository(request: AddToOrgSkillRepositoryRequest): Promise<AddToOrgSkillRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddToOrgSkillRepositoryHeaders({ });
    return await this.addToOrgSkillRepositoryWithOptions(request, headers, runtime);
  }

  /**
   * 助理响应接口-委托权限
   * 
   * @param request - AssistantMeResponseRequest
   * @param headers - AssistantMeResponseHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssistantMeResponseResponse
   */
  async assistantMeResponseWithOptions(assistantId: string, request: AssistantMeResponseRequest, headers: AssistantMeResponseHeaders, runtime: $Util.RuntimeOptions): Promise<AssistantMeResponseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.input)) {
      body["input"] = request.input;
    }

    if (!Util.isUnset(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!Util.isUnset(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!Util.isUnset(request.stream)) {
      body["stream"] = request.stream;
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
      action: "AssistantMeResponse",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/${assistantId}/me/compatible-mode/responses`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AssistantMeResponseResponse>(await this.execute(params, req, runtime), new AssistantMeResponseResponse({}));
  }

  /**
   * 助理响应接口-委托权限
   * 
   * @param request - AssistantMeResponseRequest
   * @returns AssistantMeResponseResponse
   */
  async assistantMeResponse(assistantId: string, request: AssistantMeResponseRequest): Promise<AssistantMeResponseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AssistantMeResponseHeaders({ });
    return await this.assistantMeResponseWithOptions(assistantId, request, headers, runtime);
  }

  /**
   * 助理响应接口-应用权限
   * 
   * @param request - AssistantResponseRequest
   * @param headers - AssistantResponseHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssistantResponseResponse
   */
  async assistantResponseWithOptions(assistantId: string, request: AssistantResponseRequest, headers: AssistantResponseHeaders, runtime: $Util.RuntimeOptions): Promise<AssistantResponseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.input)) {
      body["input"] = request.input;
    }

    if (!Util.isUnset(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!Util.isUnset(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!Util.isUnset(request.stream)) {
      body["stream"] = request.stream;
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
      action: "AssistantResponse",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/${assistantId}/compatible-mode/responses`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AssistantResponseResponse>(await this.execute(params, req, runtime), new AssistantResponseResponse({}));
  }

  /**
   * 助理响应接口-应用权限
   * 
   * @param request - AssistantResponseRequest
   * @returns AssistantResponseResponse
   */
  async assistantResponse(assistantId: string, request: AssistantResponseRequest): Promise<AssistantResponseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AssistantResponseHeaders({ });
    return await this.assistantResponseWithOptions(assistantId, request, headers, runtime);
  }

  /**
   * 分页查询算粒的使用记录
   * 
   * @param request - BatchGetAICreditsRecordRequest
   * @param headers - BatchGetAICreditsRecordHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetAICreditsRecordResponse
   */
  async batchGetAICreditsRecordWithOptions(request: BatchGetAICreditsRecordRequest, headers: BatchGetAICreditsRecordHeaders, runtime: $Util.RuntimeOptions): Promise<BatchGetAICreditsRecordResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      query["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
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
      action: "BatchGetAICreditsRecord",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/aiCredits/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<BatchGetAICreditsRecordResponse>(await this.execute(params, req, runtime), new BatchGetAICreditsRecordResponse({}));
  }

  /**
   * 分页查询算粒的使用记录
   * 
   * @param request - BatchGetAICreditsRecordRequest
   * @returns BatchGetAICreditsRecordResponse
   */
  async batchGetAICreditsRecord(request: BatchGetAICreditsRecordRequest): Promise<BatchGetAICreditsRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BatchGetAICreditsRecordHeaders({ });
    return await this.batchGetAICreditsRecordWithOptions(request, headers, runtime);
  }

  /**
   * 创建AI助理
   * 
   * @param request - CreateAssistantRequest
   * @param headers - CreateAssistantHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAssistantResponse
   */
  async createAssistantWithOptions(request: CreateAssistantRequest, headers: CreateAssistantHeaders, runtime: $Util.RuntimeOptions): Promise<CreateAssistantResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.icon)) {
      body["icon"] = request.icon;
    }

    if (!Util.isUnset(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.operatorUnionId)) {
      body["operatorUnionId"] = request.operatorUnionId;
    }

    if (!Util.isUnset(request.recommendPrompts)) {
      body["recommendPrompts"] = request.recommendPrompts;
    }

    if (!Util.isUnset(request.welcomeContent)) {
      body["welcomeContent"] = request.welcomeContent;
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
      action: "CreateAssistant",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/basicInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateAssistantResponse>(await this.execute(params, req, runtime), new CreateAssistantResponse({}));
  }

  /**
   * 创建AI助理
   * 
   * @param request - CreateAssistantRequest
   * @returns CreateAssistantResponse
   */
  async createAssistant(request: CreateAssistantRequest): Promise<CreateAssistantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateAssistantHeaders({ });
    return await this.createAssistantWithOptions(request, headers, runtime);
  }

  /**
   * 创建AI助理的消息体
   * 
   * @param request - CreateAssistantMessageRequest
   * @param headers - CreateAssistantMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAssistantMessageResponse
   */
  async createAssistantMessageWithOptions(threadId: string, request: CreateAssistantMessageRequest, headers: CreateAssistantMessageHeaders, runtime: $Util.RuntimeOptions): Promise<CreateAssistantMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.extension)) {
      body["extension"] = request.extension;
    }

    if (!Util.isUnset(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!Util.isUnset(request.role)) {
      body["role"] = request.role;
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
      action: "CreateAssistantMessage",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/threads/${threadId}/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateAssistantMessageResponse>(await this.execute(params, req, runtime), new CreateAssistantMessageResponse({}));
  }

  /**
   * 创建AI助理的消息体
   * 
   * @param request - CreateAssistantMessageRequest
   * @returns CreateAssistantMessageResponse
   */
  async createAssistantMessage(threadId: string, request: CreateAssistantMessageRequest): Promise<CreateAssistantMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateAssistantMessageHeaders({ });
    return await this.createAssistantMessageWithOptions(threadId, request, headers, runtime);
  }

  /**
   * 创建AI助理的运行任务
   * 
   * @param request - CreateAssistantRunRequest
   * @param headers - CreateAssistantRunHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAssistantRunResponse
   */
  async createAssistantRunWithOptions(threadId: string, request: CreateAssistantRunRequest, headers: CreateAssistantRunHeaders, runtime: $Util.RuntimeOptions): Promise<CreateAssistantRunResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!Util.isUnset(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!Util.isUnset(request.stream)) {
      body["stream"] = request.stream;
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
      action: "CreateAssistantRun",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/threads/${threadId}/runs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateAssistantRunResponse>(await this.execute(params, req, runtime), new CreateAssistantRunResponse({}));
  }

  /**
   * 创建AI助理的运行任务
   * 
   * @param request - CreateAssistantRunRequest
   * @returns CreateAssistantRunResponse
   */
  async createAssistantRun(threadId: string, request: CreateAssistantRunRequest): Promise<CreateAssistantRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateAssistantRunHeaders({ });
    return await this.createAssistantRunWithOptions(threadId, request, headers, runtime);
  }

  /**
   * 创建AI助理线程实例
   * 
   * @param request - CreateAssistantThreadRequest
   * @param headers - CreateAssistantThreadHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAssistantThreadResponse
   */
  async createAssistantThreadWithOptions(request: CreateAssistantThreadRequest, headers: CreateAssistantThreadHeaders, runtime: $Util.RuntimeOptions): Promise<CreateAssistantThreadResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.metadata)) {
      body["metadata"] = request.metadata;
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
      action: "CreateAssistantThread",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/threads`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<CreateAssistantThreadResponse>(await this.execute(params, req, runtime), new CreateAssistantThreadResponse({}));
  }

  /**
   * 创建AI助理线程实例
   * 
   * @param request - CreateAssistantThreadRequest
   * @returns CreateAssistantThreadResponse
   */
  async createAssistantThread(request: CreateAssistantThreadRequest): Promise<CreateAssistantThreadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateAssistantThreadHeaders({ });
    return await this.createAssistantThreadWithOptions(request, headers, runtime);
  }

  /**
   * 删除AI助理
   * 
   * @param request - DeleteAssistantRequest
   * @param headers - DeleteAssistantHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAssistantResponse
   */
  async deleteAssistantWithOptions(request: DeleteAssistantRequest, headers: DeleteAssistantHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteAssistantResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      query["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.operatorUnionId)) {
      query["operatorUnionId"] = request.operatorUnionId;
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
      action: "DeleteAssistant",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/basicInfo`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteAssistantResponse>(await this.execute(params, req, runtime), new DeleteAssistantResponse({}));
  }

  /**
   * 删除AI助理
   * 
   * @param request - DeleteAssistantRequest
   * @returns DeleteAssistantResponse
   */
  async deleteAssistant(request: DeleteAssistantRequest): Promise<DeleteAssistantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteAssistantHeaders({ });
    return await this.deleteAssistantWithOptions(request, headers, runtime);
  }

  /**
   * 删除AI助理的消息体
   * 
   * @param headers - DeleteAssistantMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAssistantMessageResponse
   */
  async deleteAssistantMessageWithOptions(threadId: string, messageId: string, headers: DeleteAssistantMessageHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteAssistantMessageResponse> {
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
      action: "DeleteAssistantMessage",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/threads/${threadId}/messages/${messageId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteAssistantMessageResponse>(await this.execute(params, req, runtime), new DeleteAssistantMessageResponse({}));
  }

  /**
   * 删除AI助理的消息体
   * @returns DeleteAssistantMessageResponse
   */
  async deleteAssistantMessage(threadId: string, messageId: string): Promise<DeleteAssistantMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteAssistantMessageHeaders({ });
    return await this.deleteAssistantMessageWithOptions(threadId, messageId, headers, runtime);
  }

  /**
   * 删除AI助理线程实例
   * 
   * @param headers - DeleteAssistantThreadHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAssistantThreadResponse
   */
  async deleteAssistantThreadWithOptions(threadId: string, headers: DeleteAssistantThreadHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteAssistantThreadResponse> {
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
      action: "DeleteAssistantThread",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/threads/${threadId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteAssistantThreadResponse>(await this.execute(params, req, runtime), new DeleteAssistantThreadResponse({}));
  }

  /**
   * 删除AI助理线程实例
   * @returns DeleteAssistantThreadResponse
   */
  async deleteAssistantThread(threadId: string): Promise<DeleteAssistantThreadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteAssistantThreadHeaders({ });
    return await this.deleteAssistantThreadWithOptions(threadId, headers, runtime);
  }

  /**
   * 助理删除专业词汇
   * 
   * @param request - DeleteDomainWordsRequest
   * @param headers - DeleteDomainWordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainWordsResponse
   */
  async deleteDomainWordsWithOptions(request: DeleteDomainWordsRequest, headers: DeleteDomainWordsHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteDomainWordsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.domainWords)) {
      body["domainWords"] = request.domainWords;
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
      action: "DeleteDomainWords",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/domainWords/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainWordsResponse>(await this.execute(params, req, runtime), new DeleteDomainWordsResponse({}));
  }

  /**
   * 助理删除专业词汇
   * 
   * @param request - DeleteDomainWordsRequest
   * @returns DeleteDomainWordsResponse
   */
  async deleteDomainWords(request: DeleteDomainWordsRequest): Promise<DeleteDomainWordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteDomainWordsHeaders({ });
    return await this.deleteDomainWordsWithOptions(request, headers, runtime);
  }

  /**
   * 删除助理知识
   * 
   * @param request - DeleteKnowledgeRequest
   * @param headers - DeleteKnowledgeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKnowledgeResponse
   */
  async deleteKnowledgeWithOptions(request: DeleteKnowledgeRequest, headers: DeleteKnowledgeHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteKnowledgeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      query["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.studyId)) {
      query["studyId"] = request.studyId;
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
      action: "DeleteKnowledge",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/knowledges/items`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeleteKnowledgeResponse>(await this.execute(params, req, runtime), new DeleteKnowledgeResponse({}));
  }

  /**
   * 删除助理知识
   * 
   * @param request - DeleteKnowledgeRequest
   * @returns DeleteKnowledgeResponse
   */
  async deleteKnowledge(request: DeleteKnowledgeRequest): Promise<DeleteKnowledgeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteKnowledgeHeaders({ });
    return await this.deleteKnowledgeWithOptions(request, headers, runtime);
  }

  /**
   * 一键部署AI助理
   * 
   * @param request - DeployAssistantRequest
   * @param headers - DeployAssistantHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployAssistantResponse
   */
  async deployAssistantWithOptions(request: DeployAssistantRequest, headers: DeployAssistantHeaders, runtime: $Util.RuntimeOptions): Promise<DeployAssistantResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.action)) {
      body["action"] = request.action;
    }

    if (!Util.isUnset(request.aiAssistantId)) {
      body["aiAssistantId"] = request.aiAssistantId;
    }

    if (!Util.isUnset(request.appScopes)) {
      body["appScopes"] = request.appScopes;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.fallback)) {
      body["fallback"] = request.fallback;
    }

    if (!Util.isUnset(request.icon)) {
      body["icon"] = request.icon;
    }

    if (!Util.isUnset(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!Util.isUnset(request.isPublic)) {
      body["isPublic"] = request.isPublic;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.operateUserId)) {
      body["operateUserId"] = request.operateUserId;
    }

    if (!Util.isUnset(request.recommendPrompts)) {
      body["recommendPrompts"] = request.recommendPrompts;
    }

    if (!Util.isUnset(request.shareRecipient)) {
      body["shareRecipient"] = request.shareRecipient;
    }

    if (!Util.isUnset(request.toneStyle)) {
      body["toneStyle"] = request.toneStyle;
    }

    if (!Util.isUnset(request.uuid)) {
      body["uuid"] = request.uuid;
    }

    if (!Util.isUnset(request.welcomeContent)) {
      body["welcomeContent"] = request.welcomeContent;
    }

    if (!Util.isUnset(request.welcomeTitle)) {
      body["welcomeTitle"] = request.welcomeTitle;
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
      action: "DeployAssistant",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/deploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<DeployAssistantResponse>(await this.execute(params, req, runtime), new DeployAssistantResponse({}));
  }

  /**
   * 一键部署AI助理
   * 
   * @param request - DeployAssistantRequest
   * @returns DeployAssistantResponse
   */
  async deployAssistant(request: DeployAssistantRequest): Promise<DeployAssistantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeployAssistantHeaders({ });
    return await this.deployAssistantWithOptions(request, headers, runtime);
  }

  /**
   * 获取助理问答明细
   * 
   * @param request - GetAskDetailRequest
   * @param headers - GetAskDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAskDetailResponse
   */
  async getAskDetailWithOptions(request: GetAskDetailRequest, headers: GetAskDetailHeaders, runtime: $Util.RuntimeOptions): Promise<GetAskDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      query["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
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
      action: "GetAskDetail",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/askDetails`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetAskDetailResponse>(await this.execute(params, req, runtime), new GetAskDetailResponse({}));
  }

  /**
   * 获取助理问答明细
   * 
   * @param request - GetAskDetailRequest
   * @returns GetAskDetailResponse
   */
  async getAskDetail(request: GetAskDetailRequest): Promise<GetAskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAskDetailHeaders({ });
    return await this.getAskDetailWithOptions(request, headers, runtime);
  }

  /**
   * 获取AI助理技能列表信息
   * 
   * @param request - GetAssistantActionInfoRequest
   * @param headers - GetAssistantActionInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAssistantActionInfoResponse
   */
  async getAssistantActionInfoWithOptions(request: GetAssistantActionInfoRequest, headers: GetAssistantActionInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetAssistantActionInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      query["assistantId"] = request.assistantId;
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
      action: "GetAssistantActionInfo",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/actionLists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetAssistantActionInfoResponse>(await this.execute(params, req, runtime), new GetAssistantActionInfoResponse({}));
  }

  /**
   * 获取AI助理技能列表信息
   * 
   * @param request - GetAssistantActionInfoRequest
   * @returns GetAssistantActionInfoResponse
   */
  async getAssistantActionInfo(request: GetAssistantActionInfoRequest): Promise<GetAssistantActionInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAssistantActionInfoHeaders({ });
    return await this.getAssistantActionInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取助理专业词汇
   * 
   * @param request - GetDomainWordsRequest
   * @param headers - GetDomainWordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainWordsResponse
   */
  async getDomainWordsWithOptions(request: GetDomainWordsRequest, headers: GetDomainWordsHeaders, runtime: $Util.RuntimeOptions): Promise<GetDomainWordsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      query["assistantId"] = request.assistantId;
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
      action: "GetDomainWords",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/domainWords`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetDomainWordsResponse>(await this.execute(params, req, runtime), new GetDomainWordsResponse({}));
  }

  /**
   * 获取助理专业词汇
   * 
   * @param request - GetDomainWordsRequest
   * @returns GetDomainWordsResponse
   */
  async getDomainWords(request: GetDomainWordsRequest): Promise<GetDomainWordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDomainWordsHeaders({ });
    return await this.getDomainWordsWithOptions(request, headers, runtime);
  }

  /**
   * 获取助理知识列表
   * 
   * @param request - GetKnowledgeListRequest
   * @param headers - GetKnowledgeListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKnowledgeListResponse
   */
  async getKnowledgeListWithOptions(request: GetKnowledgeListRequest, headers: GetKnowledgeListHeaders, runtime: $Util.RuntimeOptions): Promise<GetKnowledgeListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      query["assistantId"] = request.assistantId;
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
      action: "GetKnowledgeList",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/knowledges/items`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetKnowledgeListResponse>(await this.execute(params, req, runtime), new GetKnowledgeListResponse({}));
  }

  /**
   * 获取助理知识列表
   * 
   * @param request - GetKnowledgeListRequest
   * @returns GetKnowledgeListResponse
   */
  async getKnowledgeList(request: GetKnowledgeListRequest): Promise<GetKnowledgeListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetKnowledgeListHeaders({ });
    return await this.getKnowledgeListWithOptions(request, headers, runtime);
  }

  /**
   * 安装助理
   * 
   * @param request - InstallAssistantRequest
   * @param headers - InstallAssistantHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAssistantResponse
   */
  async installAssistantWithOptions(request: InstallAssistantRequest, headers: InstallAssistantHeaders, runtime: $Util.RuntimeOptions): Promise<InstallAssistantResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.isAllOrgMemberVisible)) {
      body["isAllOrgMemberVisible"] = request.isAllOrgMemberVisible;
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
      action: "InstallAssistant",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/install`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<InstallAssistantResponse>(await this.execute(params, req, runtime), new InstallAssistantResponse({}));
  }

  /**
   * 安装助理
   * 
   * @param request - InstallAssistantRequest
   * @returns InstallAssistantResponse
   */
  async installAssistant(request: InstallAssistantRequest): Promise<InstallAssistantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InstallAssistantHeaders({ });
    return await this.installAssistantWithOptions(request, headers, runtime);
  }

  /**
   * 助理学习知识
   * 
   * @param request - LearnKnowledgeRequest
   * @param headers - LearnKnowledgeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LearnKnowledgeResponse
   */
  async learnKnowledgeWithOptions(request: LearnKnowledgeRequest, headers: LearnKnowledgeHeaders, runtime: $Util.RuntimeOptions): Promise<LearnKnowledgeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.docUrl)) {
      body["docUrl"] = request.docUrl;
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
      action: "LearnKnowledge",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/knowledges/items`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<LearnKnowledgeResponse>(await this.execute(params, req, runtime), new LearnKnowledgeResponse({}));
  }

  /**
   * 助理学习知识
   * 
   * @param request - LearnKnowledgeRequest
   * @returns LearnKnowledgeResponse
   */
  async learnKnowledge(request: LearnKnowledgeRequest): Promise<LearnKnowledgeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new LearnKnowledgeHeaders({ });
    return await this.learnKnowledgeWithOptions(request, headers, runtime);
  }

  /**
   * 获取AI助理列表
   * 
   * @param request - ListAssistantRequest
   * @param headers - ListAssistantHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAssistantResponse
   */
  async listAssistantWithOptions(request: ListAssistantRequest, headers: ListAssistantHeaders, runtime: $Util.RuntimeOptions): Promise<ListAssistantResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cursor)) {
      query["cursor"] = request.cursor;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
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
      action: "ListAssistant",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListAssistantResponse>(await this.execute(params, req, runtime), new ListAssistantResponse({}));
  }

  /**
   * 获取AI助理列表
   * 
   * @param request - ListAssistantRequest
   * @returns ListAssistantResponse
   */
  async listAssistant(request: ListAssistantRequest): Promise<ListAssistantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListAssistantHeaders({ });
    return await this.listAssistantWithOptions(request, headers, runtime);
  }

  /**
   * 获取AI助理消息列表
   * 
   * @param request - ListAssistantMessageRequest
   * @param headers - ListAssistantMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAssistantMessageResponse
   */
  async listAssistantMessageWithOptions(threadId: string, request: ListAssistantMessageRequest, headers: ListAssistantMessageHeaders, runtime: $Util.RuntimeOptions): Promise<ListAssistantMessageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.order)) {
      query["order"] = request.order;
    }

    if (!Util.isUnset(request.runId)) {
      query["runId"] = request.runId;
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
      action: "ListAssistantMessage",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/threads/${threadId}/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListAssistantMessageResponse>(await this.execute(params, req, runtime), new ListAssistantMessageResponse({}));
  }

  /**
   * 获取AI助理消息列表
   * 
   * @param request - ListAssistantMessageRequest
   * @returns ListAssistantMessageResponse
   */
  async listAssistantMessage(threadId: string, request: ListAssistantMessageRequest): Promise<ListAssistantMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListAssistantMessageHeaders({ });
    return await this.listAssistantMessageWithOptions(threadId, request, headers, runtime);
  }

  /**
   * 获取AI助理的运行任务的列表
   * 
   * @param request - ListAssistantRunRequest
   * @param headers - ListAssistantRunHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAssistantRunResponse
   */
  async listAssistantRunWithOptions(threadId: string, request: ListAssistantRunRequest, headers: ListAssistantRunHeaders, runtime: $Util.RuntimeOptions): Promise<ListAssistantRunResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.order)) {
      query["order"] = request.order;
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
      action: "ListAssistantRun",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/threads/${threadId}/runs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListAssistantRunResponse>(await this.execute(params, req, runtime), new ListAssistantRunResponse({}));
  }

  /**
   * 获取AI助理的运行任务的列表
   * 
   * @param request - ListAssistantRunRequest
   * @returns ListAssistantRunResponse
   */
  async listAssistantRun(threadId: string, request: ListAssistantRunRequest): Promise<ListAssistantRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListAssistantRunHeaders({ });
    return await this.listAssistantRunWithOptions(threadId, request, headers, runtime);
  }

  /**
   * 获取指定助理在组织下已安装的实例信息列表
   * 
   * @param request - ListInstanceRequest
   * @param headers - ListInstanceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResponse
   */
  async listInstanceWithOptions(request: ListInstanceRequest, headers: ListInstanceHeaders, runtime: $Util.RuntimeOptions): Promise<ListInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.prototypeAssistantId)) {
      query["prototypeAssistantId"] = request.prototypeAssistantId;
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
      action: "ListInstance",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/instances/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceResponse>(await this.execute(params, req, runtime), new ListInstanceResponse({}));
  }

  /**
   * 获取指定助理在组织下已安装的实例信息列表
   * 
   * @param request - ListInstanceRequest
   * @returns ListInstanceResponse
   */
  async listInstance(request: ListInstanceRequest): Promise<ListInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListInstanceHeaders({ });
    return await this.listInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 获取用户可见范围的AI助理列表
   * 
   * @param request - ListVisibleAssistantRequest
   * @param headers - ListVisibleAssistantHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVisibleAssistantResponse
   */
  async listVisibleAssistantWithOptions(request: ListVisibleAssistantRequest, headers: ListVisibleAssistantHeaders, runtime: $Util.RuntimeOptions): Promise<ListVisibleAssistantResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cursor)) {
      query["cursor"] = request.cursor;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
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
      action: "ListVisibleAssistant",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/visibleList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<ListVisibleAssistantResponse>(await this.execute(params, req, runtime), new ListVisibleAssistantResponse({}));
  }

  /**
   * 获取用户可见范围的AI助理列表
   * 
   * @param request - ListVisibleAssistantRequest
   * @returns ListVisibleAssistantResponse
   */
  async listVisibleAssistant(request: ListVisibleAssistantRequest): Promise<ListVisibleAssistantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListVisibleAssistantHeaders({ });
    return await this.listVisibleAssistantWithOptions(request, headers, runtime);
  }

  /**
   * 获取对话明细列表
   * 
   * @param request - LogListRequest
   * @param headers - LogListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LogListResponse
   */
  async logListWithOptions(request: LogListRequest, headers: LogListHeaders, runtime: $Util.RuntimeOptions): Promise<LogListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      query["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
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
      action: "LogList",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/logs/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<LogListResponse>(await this.execute(params, req, runtime), new LogListResponse({}));
  }

  /**
   * 获取对话明细列表
   * 
   * @param request - LogListRequest
   * @returns LogListResponse
   */
  async logList(request: LogListRequest): Promise<LogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new LogListHeaders({ });
    return await this.logListWithOptions(request, headers, runtime);
  }

  /**
   * 助理学习增量知识
   * 
   * @param request - RelearnKnowledgeRequest
   * @param headers - RelearnKnowledgeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RelearnKnowledgeResponse
   */
  async relearnKnowledgeWithOptions(request: RelearnKnowledgeRequest, headers: RelearnKnowledgeHeaders, runtime: $Util.RuntimeOptions): Promise<RelearnKnowledgeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      body["assistantId"] = request.assistantId;
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
      action: "RelearnKnowledge",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/knowledges/incrLearning`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RelearnKnowledgeResponse>(await this.execute(params, req, runtime), new RelearnKnowledgeResponse({}));
  }

  /**
   * 助理学习增量知识
   * 
   * @param request - RelearnKnowledgeRequest
   * @returns RelearnKnowledgeResponse
   */
  async relearnKnowledge(request: RelearnKnowledgeRequest): Promise<RelearnKnowledgeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RelearnKnowledgeHeaders({ });
    return await this.relearnKnowledgeWithOptions(request, headers, runtime);
  }

  /**
   * 卸载助理
   * 
   * @param request - RemoveAssistantRequest
   * @param headers - RemoveAssistantHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAssistantResponse
   */
  async removeAssistantWithOptions(request: RemoveAssistantRequest, headers: RemoveAssistantHeaders, runtime: $Util.RuntimeOptions): Promise<RemoveAssistantResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.operatorUnionId)) {
      body["operatorUnionId"] = request.operatorUnionId;
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
      action: "RemoveAssistant",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/uninstall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RemoveAssistantResponse>(await this.execute(params, req, runtime), new RemoveAssistantResponse({}));
  }

  /**
   * 卸载助理
   * 
   * @param request - RemoveAssistantRequest
   * @returns RemoveAssistantResponse
   */
  async removeAssistant(request: RemoveAssistantRequest): Promise<RemoveAssistantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RemoveAssistantHeaders({ });
    return await this.removeAssistantWithOptions(request, headers, runtime);
  }

  /**
   * 移除组织技能库技能
   * 
   * @param request - RemoveFromOrgSkillRepositoryRequest
   * @param headers - RemoveFromOrgSkillRepositoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveFromOrgSkillRepositoryResponse
   */
  async removeFromOrgSkillRepositoryWithOptions(request: RemoveFromOrgSkillRepositoryRequest, headers: RemoveFromOrgSkillRepositoryHeaders, runtime: $Util.RuntimeOptions): Promise<RemoveFromOrgSkillRepositoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionId)) {
      query["actionId"] = request.actionId;
    }

    if (!Util.isUnset(request.operatorUnionId)) {
      query["operatorUnionId"] = request.operatorUnionId;
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
      action: "RemoveFromOrgSkillRepository",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/orgActionRepositories`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RemoveFromOrgSkillRepositoryResponse>(await this.execute(params, req, runtime), new RemoveFromOrgSkillRepositoryResponse({}));
  }

  /**
   * 移除组织技能库技能
   * 
   * @param request - RemoveFromOrgSkillRepositoryRequest
   * @returns RemoveFromOrgSkillRepositoryResponse
   */
  async removeFromOrgSkillRepository(request: RemoveFromOrgSkillRepositoryRequest): Promise<RemoveFromOrgSkillRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RemoveFromOrgSkillRepositoryHeaders({ });
    return await this.removeFromOrgSkillRepositoryWithOptions(request, headers, runtime);
  }

  /**
   * 查询 AI 助理的基本信息
   * 
   * @param request - RetrieveAssistantBasicInfoRequest
   * @param headers - RetrieveAssistantBasicInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveAssistantBasicInfoResponse
   */
  async retrieveAssistantBasicInfoWithOptions(request: RetrieveAssistantBasicInfoRequest, headers: RetrieveAssistantBasicInfoHeaders, runtime: $Util.RuntimeOptions): Promise<RetrieveAssistantBasicInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      query["assistantId"] = request.assistantId;
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
      action: "RetrieveAssistantBasicInfo",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/basicInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RetrieveAssistantBasicInfoResponse>(await this.execute(params, req, runtime), new RetrieveAssistantBasicInfoResponse({}));
  }

  /**
   * 查询 AI 助理的基本信息
   * 
   * @param request - RetrieveAssistantBasicInfoRequest
   * @returns RetrieveAssistantBasicInfoResponse
   */
  async retrieveAssistantBasicInfo(request: RetrieveAssistantBasicInfoRequest): Promise<RetrieveAssistantBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RetrieveAssistantBasicInfoHeaders({ });
    return await this.retrieveAssistantBasicInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取AI助理的消息体
   * 
   * @param headers - RetrieveAssistantMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveAssistantMessageResponse
   */
  async retrieveAssistantMessageWithOptions(threadId: string, messageId: string, headers: RetrieveAssistantMessageHeaders, runtime: $Util.RuntimeOptions): Promise<RetrieveAssistantMessageResponse> {
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
      action: "RetrieveAssistantMessage",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/threads/${threadId}/messages/${messageId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RetrieveAssistantMessageResponse>(await this.execute(params, req, runtime), new RetrieveAssistantMessageResponse({}));
  }

  /**
   * 获取AI助理的消息体
   * @returns RetrieveAssistantMessageResponse
   */
  async retrieveAssistantMessage(threadId: string, messageId: string): Promise<RetrieveAssistantMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RetrieveAssistantMessageHeaders({ });
    return await this.retrieveAssistantMessageWithOptions(threadId, messageId, headers, runtime);
  }

  /**
   * 检索AI助理的运行任务
   * 
   * @param headers - RetrieveAssistantRunHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveAssistantRunResponse
   */
  async retrieveAssistantRunWithOptions(threadId: string, runId: string, headers: RetrieveAssistantRunHeaders, runtime: $Util.RuntimeOptions): Promise<RetrieveAssistantRunResponse> {
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
      action: "RetrieveAssistantRun",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/threads/${threadId}/runs/${runId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RetrieveAssistantRunResponse>(await this.execute(params, req, runtime), new RetrieveAssistantRunResponse({}));
  }

  /**
   * 检索AI助理的运行任务
   * @returns RetrieveAssistantRunResponse
   */
  async retrieveAssistantRun(threadId: string, runId: string): Promise<RetrieveAssistantRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RetrieveAssistantRunHeaders({ });
    return await this.retrieveAssistantRunWithOptions(threadId, runId, headers, runtime);
  }

  /**
   * 获取助理的使用范围
   * 
   * @param request - RetrieveAssistantScopeRequest
   * @param headers - RetrieveAssistantScopeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveAssistantScopeResponse
   */
  async retrieveAssistantScopeWithOptions(request: RetrieveAssistantScopeRequest, headers: RetrieveAssistantScopeHeaders, runtime: $Util.RuntimeOptions): Promise<RetrieveAssistantScopeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      query["assistantId"] = request.assistantId;
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
      action: "RetrieveAssistantScope",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/scope`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RetrieveAssistantScopeResponse>(await this.execute(params, req, runtime), new RetrieveAssistantScopeResponse({}));
  }

  /**
   * 获取助理的使用范围
   * 
   * @param request - RetrieveAssistantScopeRequest
   * @returns RetrieveAssistantScopeResponse
   */
  async retrieveAssistantScope(request: RetrieveAssistantScopeRequest): Promise<RetrieveAssistantScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RetrieveAssistantScopeHeaders({ });
    return await this.retrieveAssistantScopeWithOptions(request, headers, runtime);
  }

  /**
   * 检索AI助理线程实例
   * 
   * @param headers - RetrieveAssistantThreadHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveAssistantThreadResponse
   */
  async retrieveAssistantThreadWithOptions(threadId: string, headers: RetrieveAssistantThreadHeaders, runtime: $Util.RuntimeOptions): Promise<RetrieveAssistantThreadResponse> {
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
      action: "RetrieveAssistantThread",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/threads/${threadId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<RetrieveAssistantThreadResponse>(await this.execute(params, req, runtime), new RetrieveAssistantThreadResponse({}));
  }

  /**
   * 检索AI助理线程实例
   * @returns RetrieveAssistantThreadResponse
   */
  async retrieveAssistantThread(threadId: string): Promise<RetrieveAssistantThreadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RetrieveAssistantThreadHeaders({ });
    return await this.retrieveAssistantThreadWithOptions(threadId, headers, runtime);
  }

  /**
   * 更新AI助理基础信息
   * 
   * @param request - UpdateAssistantBasicInfoRequest
   * @param headers - UpdateAssistantBasicInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAssistantBasicInfoResponse
   */
  async updateAssistantBasicInfoWithOptions(request: UpdateAssistantBasicInfoRequest, headers: UpdateAssistantBasicInfoHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateAssistantBasicInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.fallbackContent)) {
      body["fallbackContent"] = request.fallbackContent;
    }

    if (!Util.isUnset(request.icon)) {
      body["icon"] = request.icon;
    }

    if (!Util.isUnset(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.operatorUnionId)) {
      body["operatorUnionId"] = request.operatorUnionId;
    }

    if (!Util.isUnset(request.recommendPrompts)) {
      body["recommendPrompts"] = request.recommendPrompts;
    }

    if (!Util.isUnset(request.welcomeContent)) {
      body["welcomeContent"] = request.welcomeContent;
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
      action: "UpdateAssistantBasicInfo",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/basicInfo`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<UpdateAssistantBasicInfoResponse>(await this.execute(params, req, runtime), new UpdateAssistantBasicInfoResponse({}));
  }

  /**
   * 更新AI助理基础信息
   * 
   * @param request - UpdateAssistantBasicInfoRequest
   * @returns UpdateAssistantBasicInfoResponse
   */
  async updateAssistantBasicInfo(request: UpdateAssistantBasicInfoRequest): Promise<UpdateAssistantBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateAssistantBasicInfoHeaders({ });
    return await this.updateAssistantBasicInfoWithOptions(request, headers, runtime);
  }

  /**
   * 更新 AI 助理使用范围
   * 
   * @param request - UpdateAssistantScopeRequest
   * @param headers - UpdateAssistantScopeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAssistantScopeResponse
   */
  async updateAssistantScopeWithOptions(request: UpdateAssistantScopeRequest, headers: UpdateAssistantScopeHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateAssistantScopeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!Util.isUnset(request.operatorUnionId)) {
      body["operatorUnionId"] = request.operatorUnionId;
    }

    if (!Util.isUnset(request.scopes)) {
      body["scopes"] = request.scopes;
    }

    if (!Util.isUnset(request.sharing)) {
      body["sharing"] = request.sharing;
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
      action: "UpdateAssistantScope",
      version: "assistant_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/assistant/scope`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "any",
    });
    return $tea.cast<UpdateAssistantScopeResponse>(await this.execute(params, req, runtime), new UpdateAssistantScopeResponse({}));
  }

  /**
   * 更新 AI 助理使用范围
   * 
   * @param request - UpdateAssistantScopeRequest
   * @returns UpdateAssistantScopeResponse
   */
  async updateAssistantScope(request: UpdateAssistantScopeRequest): Promise<UpdateAssistantScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateAssistantScopeHeaders({ });
    return await this.updateAssistantScopeWithOptions(request, headers, runtime);
  }

}
