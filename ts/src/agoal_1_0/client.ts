// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-dingtalk';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class Entity extends $tea.Model {
  children?: EntityChildren[];
  /**
   * @example
   * {"title": "123"}
   */
  data?: { [key: string]: any };
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * y/n
   */
  isDeleted?: string;
  /**
   * @example
   * 67dbb24f7aac3f62d8b98fb5
   */
  linkSourceId?: string;
  /**
   * @example
   * EXTERNAL_PERF_TASK
   */
  linkSourceType?: string;
  metas?: Meta[];
  /**
   * @example
   * DIMENSION
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      data: 'data',
      id: 'id',
      isDeleted: 'isDeleted',
      linkSourceId: 'linkSourceId',
      linkSourceType: 'linkSourceType',
      metas: 'metas',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': EntityChildren },
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      isDeleted: 'string',
      linkSourceId: 'string',
      linkSourceType: 'string',
      metas: { 'type': 'array', 'itemType': Meta },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Meta extends $tea.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  /**
   * @example
   * 编码
   */
  alias?: string;
  /**
   * @example
   * common
   */
  category?: string;
  /**
   * @example
   * title
   */
  code?: string;
  /**
   * @example
   * true
   */
  forceActive?: boolean;
  /**
   * @example
   * true
   */
  forceRequired?: boolean;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * {"width": 200}
   */
  scheme?: { [key: string]: any };
  /**
   * @example
   * 名称
   */
  title?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      alias: 'alias',
      category: 'category',
      code: 'code',
      forceActive: 'forceActive',
      forceRequired: 'forceRequired',
      required: 'required',
      scheme: 'scheme',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      alias: 'string',
      category: 'string',
      code: 'string',
      forceActive: 'boolean',
      forceRequired: 'boolean',
      required: 'boolean',
      scheme: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalAlignDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * COOPERATION
   */
  alignType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 662e006fe4b0f579bbcxxxxx
   */
  objectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * objective
   */
  objectType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 662e006fe4b0f579bbcxxxxx
   */
  objectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      alignType: 'alignType',
      objectId: 'objectId',
      objectType: 'objectType',
      objectiveId: 'objectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignType: 'string',
      objectId: 'string',
      objectType: 'string',
      objectiveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalFieldMetaDTO extends $tea.Model {
  /**
   * @remarks
   * 是否启用
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * 字段元数据别名
   * 
   * @example
   * 字段别名
   */
  alias?: string;
  /**
   * @remarks
   * 字段元数据标识
   * 
   * This parameter is required.
   * 
   * @example
   * foo
   */
  code?: string;
  /**
   * @remarks
   * 实体类型
   * 
   * This parameter is required.
   * 
   * @example
   * OBJECTIVE
   */
  entityType?: string;
  /**
   * @remarks
   * 字段ID
   * 
   * This parameter is required.
   * 
   * @example
   * 662e006fe4b0f579bbcxxxxx
   */
  fieldId?: string;
  /**
   * @remarks
   * 字段备注
   * 
   * @example
   * 字段备注
   */
  note?: string;
  /**
   * @remarks
   * 字段数据来源
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN
   */
  source?: string;
  /**
   * @remarks
   * 字段元数据名称
   * 
   * This parameter is required.
   * 
   * @example
   * 字段名
   */
  title?: string;
  /**
   * @remarks
   * 字段类型
   * 
   * This parameter is required.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      alias: 'alias',
      code: 'code',
      entityType: 'entityType',
      fieldId: 'fieldId',
      note: 'note',
      source: 'source',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      alias: 'string',
      code: 'string',
      entityType: 'string',
      fieldId: 'string',
      note: 'string',
      source: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalKeyActionDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  keyActionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://agoal.dingtalk.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      keyActionId: 'keyActionId',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyActionId: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalKeyResultDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  keyActions?: OpenAgoalKeyActionDTO[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  keyResultId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  progress?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试KR
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  titleMentions?: TitleMention[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      keyActions: 'keyActions',
      keyResultId: 'keyResultId',
      progress: 'progress',
      status: 'status',
      title: 'title',
      titleMentions: 'titleMentions',
      type: 'type',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyActions: { 'type': 'array', 'itemType': OpenAgoalKeyActionDTO },
      keyResultId: 'string',
      progress: 'number',
      status: 'number',
      title: 'string',
      titleMentions: { 'type': 'array', 'itemType': TitleMention },
      type: 'number',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalLatestProgressDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1716952481672
   */
  created?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  creator?: OpenAgoalUserDTO;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * <article class=\"4ever-article\"><p style=\"text-align:left;text-indent:0;margin-left:0;margin-top:0;margin-bottom:0\"><span>xxx</span></p></article>
   */
  htmldescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  progressId?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      creator: 'creator',
      htmldescription: 'htmldescription',
      progressId: 'progressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      creator: OpenAgoalUserDTO,
      htmldescription: 'string',
      progressId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalObjectiveDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  approveStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  created?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  downAlignObjectIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  executor?: OpenAgoalUserDTO;
  /**
   * @remarks
   * This parameter is required.
   */
  keyActions?: OpenAgoalKeyActionDTO[];
  /**
   * @remarks
   * This parameter is required.
   */
  keyResults?: OpenAgoalKeyResultDTO[];
  /**
   * @remarks
   * This parameter is required.
   */
  latestProgress?: OpenAgoalLatestProgressDTO;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  objectiveId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  objectiveRule?: OpenOrgObjectiveRuleDTO;
  /**
   * @remarks
   * This parameter is required.
   */
  period?: OpenObjectiveRulePeriodDTO;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  relatedUsers?: OpenAgoalUserDTO[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  teams?: OpenAgoalTeamDTO[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试目标
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  upAlignObjectIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  updated?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      approveStatus: 'approveStatus',
      created: 'created',
      downAlignObjectIds: 'downAlignObjectIds',
      executor: 'executor',
      keyActions: 'keyActions',
      keyResults: 'keyResults',
      latestProgress: 'latestProgress',
      objectiveId: 'objectiveId',
      objectiveRule: 'objectiveRule',
      period: 'period',
      progress: 'progress',
      relatedUsers: 'relatedUsers',
      status: 'status',
      teams: 'teams',
      title: 'title',
      upAlignObjectIds: 'upAlignObjectIds',
      updated: 'updated',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveStatus: 'string',
      created: 'number',
      downAlignObjectIds: { 'type': 'array', 'itemType': 'string' },
      executor: OpenAgoalUserDTO,
      keyActions: { 'type': 'array', 'itemType': OpenAgoalKeyActionDTO },
      keyResults: { 'type': 'array', 'itemType': OpenAgoalKeyResultDTO },
      latestProgress: OpenAgoalLatestProgressDTO,
      objectiveId: 'string',
      objectiveRule: OpenOrgObjectiveRuleDTO,
      period: OpenObjectiveRulePeriodDTO,
      progress: 'number',
      relatedUsers: { 'type': 'array', 'itemType': OpenAgoalUserDTO },
      status: 'number',
      teams: { 'type': 'array', 'itemType': OpenAgoalTeamDTO },
      title: 'string',
      upAlignObjectIds: { 'type': 'array', 'itemType': 'string' },
      updated: 'number',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalObjectiveDimensionDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  children?: OpenAgoalObjectiveDimensionDTOChildren[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 662e006fe4b0f579bbcxxxxx
   */
  dimensionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fieldConfig?: OpenAgoalFieldMetaDTO[];
  /**
   * @remarks
   * This parameter is required.
   */
  fieldValueMap?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 这是维度标题
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      dimensionId: 'dimensionId',
      fieldConfig: 'fieldConfig',
      fieldValueMap: 'fieldValueMap',
      title: 'title',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': OpenAgoalObjectiveDimensionDTOChildren },
      dimensionId: 'string',
      fieldConfig: { 'type': 'array', 'itemType': OpenAgoalFieldMetaDTO },
      fieldValueMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalOrgObjectiveDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dimension?: OpenAgoalObjectiveDimensionDTO;
  /**
   * @remarks
   * This parameter is required.
   */
  downAlignObjects?: OpenAgoalAlignDTO[];
  /**
   * @remarks
   * This parameter is required.
   */
  executor?: OpenAgoalUserDTO;
  /**
   * @remarks
   * This parameter is required.
   */
  fieldConfig?: OpenAgoalFieldMetaDTO[];
  /**
   * @remarks
   * This parameter is required.
   */
  fieldValueMap?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  objectiveId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  period?: OpenObjectiveRulePeriodDTO;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * formalEffective
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  team?: OpenAgoalTeamDTO;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试目标
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  upAlignObjects?: OpenAgoalAlignDTO[];
  static names(): { [key: string]: string } {
    return {
      dimension: 'dimension',
      downAlignObjects: 'downAlignObjects',
      executor: 'executor',
      fieldConfig: 'fieldConfig',
      fieldValueMap: 'fieldValueMap',
      objectiveId: 'objectiveId',
      period: 'period',
      status: 'status',
      team: 'team',
      title: 'title',
      upAlignObjects: 'upAlignObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: OpenAgoalObjectiveDimensionDTO,
      downAlignObjects: { 'type': 'array', 'itemType': OpenAgoalAlignDTO },
      executor: OpenAgoalUserDTO,
      fieldConfig: { 'type': 'array', 'itemType': OpenAgoalFieldMetaDTO },
      fieldValueMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      objectiveId: 'string',
      period: OpenObjectiveRulePeriodDTO,
      status: 'string',
      team: OpenAgoalTeamDTO,
      title: 'string',
      upAlignObjects: { 'type': 'array', 'itemType': OpenAgoalAlignDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalOrgObjectiveListDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  objectiveList?: OpenAgoalOrgObjectiveDTO[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      objectiveList: 'objectiveList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectiveList: { 'type': 'array', 'itemType': OpenAgoalOrgObjectiveDTO },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalPeriodDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1743436799000
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024年度
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  periodId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * season
   */
  periodType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1711900800000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      name: 'name',
      periodId: 'periodId',
      periodType: 'periodType',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      name: 'string',
      periodId: 'string',
      periodType: 'string',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalProgressDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  created?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  creator?: OpenAgoalUserDTO;
  /**
   * @remarks
   * This parameter is required.
   */
  htmlContent?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  keyResults?: OpenAgoalKeyResultDTO[];
  /**
   * @remarks
   * This parameter is required.
   */
  modifier?: OpenAgoalUserDTO;
  /**
   * @remarks
   * This parameter is required.
   */
  progress?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  progressId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      creator: 'creator',
      htmlContent: 'htmlContent',
      keyResults: 'keyResults',
      modifier: 'modifier',
      progress: 'progress',
      progressId: 'progressId',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      creator: OpenAgoalUserDTO,
      htmlContent: 'string',
      keyResults: { 'type': 'array', 'itemType': OpenAgoalKeyResultDTO },
      modifier: OpenAgoalUserDTO,
      progress: 'number',
      progressId: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalTeamDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8535683xx
   */
  deptId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试部门
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  teamId?: string;
  static names(): { [key: string]: string } {
    return {
      deptId: 'deptId',
      name: 'name',
      teamId: 'teamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptId: 'string',
      name: 'string',
      teamId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalUserDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 211042291978xxxx
   */
  dingUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dingUserId: 'dingUserId',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingUserId: 'string',
      name: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenObjectiveRuleDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  excludePopRuleView?: OpenObjectiveRuleScopeDTO[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OKR / PBC
   */
  objectiveCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  objectiveRuleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 规则
   */
  objectiveRuleName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  periods?: OpenObjectiveRulePeriodDTO[];
  /**
   * @remarks
   * This parameter is required.
   */
  popRuleView?: OpenObjectiveRuleScopeDTO[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  probationRule?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ONLINE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      excludePopRuleView: 'excludePopRuleView',
      objectiveCategory: 'objectiveCategory',
      objectiveRuleId: 'objectiveRuleId',
      objectiveRuleName: 'objectiveRuleName',
      periods: 'periods',
      popRuleView: 'popRuleView',
      probationRule: 'probationRule',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludePopRuleView: { 'type': 'array', 'itemType': OpenObjectiveRuleScopeDTO },
      objectiveCategory: 'string',
      objectiveRuleId: 'string',
      objectiveRuleName: 'string',
      periods: { 'type': 'array', 'itemType': OpenObjectiveRulePeriodDTO },
      popRuleView: { 'type': 'array', 'itemType': OpenObjectiveRuleScopeDTO },
      probationRule: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenObjectiveRulePeriodDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1743436799000
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024年度
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  periodId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * season
   */
  periodType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1711900800000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      name: 'name',
      periodId: 'periodId',
      periodType: 'periodType',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      name: 'string',
      periodId: 'string',
      periodType: 'string',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenObjectiveRuleScopeDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 82347xxx2382
   */
  scopeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USER
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      scopeId: 'scopeId',
      scopeType: 'scopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenOrgObjectiveRuleDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OKR / PBC
   */
  objectiveCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  objectiveRuleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试规则
   */
  objectiveRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      objectiveCategory: 'objectiveCategory',
      objectiveRuleId: 'objectiveRuleId',
      objectiveRuleName: 'objectiveRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectiveCategory: 'string',
      objectiveRuleId: 'string',
      objectiveRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenOrgPerfDocDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  executor?: OpenAgoalUserDTO;
  /**
   * @remarks
   * This parameter is required.
   */
  score?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  state?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  team?: OpenAgoalTeamDTO;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      executor: 'executor',
      score: 'score',
      state: 'state',
      team: 'team',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      executor: OpenAgoalUserDTO,
      score: 'string',
      state: 'string',
      team: OpenAgoalTeamDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenOrgPerfPlanDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  planId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'planId',
      status: 'status',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenScoreCardDimensionDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dimensionList?: OpenScoreCardDimensionDTODimensionList[];
  /**
   * @remarks
   * This parameter is required.
   */
  scoreCardId?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionList: 'dimensionList',
      scoreCardId: 'scoreCardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionList: { 'type': 'array', 'itemType': OpenScoreCardDimensionDTODimensionList },
      scoreCardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenUserAdminDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxxe3d8c283bb4aa39a90f97fcb1e09
   */
  dingCorpId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 211042291978xxxx
   */
  dingUserId?: string;
  static names(): { [key: string]: string } {
    return {
      dingCorpId: 'dingCorpId',
      dingUserId: 'dingUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingCorpId: 'string',
      dingUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenUserSubAdminDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deptIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxxe3d8c283bb4aa39a90f97fcb1e09
   */
  dingCorpId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 211042291978xxxx
   */
  dingUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  permissionGroupCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      deptIds: 'deptIds',
      dingCorpId: 'dingCorpId',
      dingUserId: 'dingUserId',
      permissionGroupCodes: 'permissionGroupCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptIds: { 'type': 'array', 'itemType': 'string' },
      dingCorpId: 'string',
      dingUserId: 'string',
      permissionGroupCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PerfTask extends $tea.Model {
  /**
   * @example
   * 328497234
   */
  id?: string;
  /**
   * @example
   * y/n
   */
  isDeleted?: string;
  /**
   * @example
   * ONGOING
   */
  status?: string;
  /**
   * @example
   * xxx考核任务
   */
  title?: string;
  /**
   * @example
   * 23223423
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isDeleted: 'isDeleted',
      status: 'status',
      title: 'title',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isDeleted: 'string',
      status: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TitleMention extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  length?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  user?: OpenAgoalUserDTO;
  static names(): { [key: string]: string } {
    return {
      length: 'length',
      offset: 'offset',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      offset: 'number',
      user: OpenAgoalUserDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalBizDataQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalBizDataQueryRequest extends $tea.Model {
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

export class AgoalBizDataQueryResponseBody extends $tea.Model {
  content?: AgoalBizDataQueryResponseBodyContent;
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
      content: AgoalBizDataQueryResponseBodyContent,
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalBizDataQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalBizDataQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalBizDataQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalCreateProgressHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalCreateProgressRequest extends $tea.Model {
  /**
   * @example
   * 64bf87f8d7ace3616f0a1971
   */
  krId?: string;
  /**
   * **if can be null:**
   * false
   */
  mergeIntoLatestProgress?: boolean;
  /**
   * @example
   * 662e006fe4b0f579bbcb10cf
   */
  objectiveId?: string;
  /**
   * @example
   * 这是一条目标进展文本
   */
  plainText?: string;
  /**
   * @example
   * 30
   */
  progress?: number;
  /**
   * @example
   * naturalWeek
   */
  progressMergePeriod?: string;
  static names(): { [key: string]: string } {
    return {
      krId: 'krId',
      mergeIntoLatestProgress: 'mergeIntoLatestProgress',
      objectiveId: 'objectiveId',
      plainText: 'plainText',
      progress: 'progress',
      progressMergePeriod: 'progressMergePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      krId: 'string',
      mergeIntoLatestProgress: 'boolean',
      objectiveId: 'string',
      plainText: 'string',
      progress: 'number',
      progressMergePeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalCreateProgressResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: OpenAgoalProgressDTO;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: OpenAgoalProgressDTO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalCreateProgressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalCreateProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalCreateProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalEntityCreateHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalEntityCreateRequest extends $tea.Model {
  body?: Entity[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': Entity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalEntityCreateResponseBody extends $tea.Model {
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

export class AgoalEntityCreateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalEntityCreateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalEntityCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalEntityUpdateHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalEntityUpdateRequest extends $tea.Model {
  body?: Entity[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': Entity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalEntityUpdateResponseBody extends $tea.Model {
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

export class AgoalEntityUpdateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalEntityUpdateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalEntityUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalFieldUpdateHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalFieldUpdateRequest extends $tea.Model {
  body?: AgoalFieldUpdateRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AgoalFieldUpdateRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalFieldUpdateShrinkRequest extends $tea.Model {
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

export class AgoalFieldUpdateResponseBody extends $tea.Model {
  content?: boolean;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'boolean',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalFieldUpdateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalFieldUpdateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalFieldUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalIndicatorBatchQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalIndicatorBatchQueryRequest extends $tea.Model {
  codeList?: string[];
  static names(): { [key: string]: string } {
    return {
      codeList: 'codeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalIndicatorBatchQueryShrinkRequest extends $tea.Model {
  codeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      codeListShrink: 'codeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalIndicatorBatchQueryResponseBody extends $tea.Model {
  result?: AgoalIndicatorBatchQueryResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': AgoalIndicatorBatchQueryResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalIndicatorBatchQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalIndicatorBatchQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalIndicatorBatchQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalIndicatorDataPushHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalIndicatorDataPushRequest extends $tea.Model {
  /**
   * @example
   * code_sik2834jdi383jd
   */
  code?: string;
  data?: AgoalIndicatorDataPushRequestData[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': AgoalIndicatorDataPushRequestData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalIndicatorDataPushResponseBody extends $tea.Model {
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

export class AgoalIndicatorDataPushResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalIndicatorDataPushResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalIndicatorDataPushResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveKeyActionListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveKeyActionListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 211042291978xxxx
   */
  dingUserId?: string;
  /**
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  keyResultId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  objectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      dingUserId: 'dingUserId',
      keyResultId: 'keyResultId',
      objectiveId: 'objectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingUserId: 'string',
      keyResultId: 'string',
      objectiveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveKeyActionListResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: OpenAgoalKeyActionDTO[];
  /**
   * @example
   * 7478B23C-80E8-1AD6-BE8C-09D480E0xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': OpenAgoalKeyActionDTO },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveKeyActionListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalObjectiveKeyActionListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalObjectiveKeyActionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveProgressListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveProgressListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  objectiveId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
      objectiveId: 'objectiveId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectiveId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveProgressListResponseBody extends $tea.Model {
  content?: AgoalObjectiveProgressListResponseBodyContent;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: AgoalObjectiveProgressListResponseBodyContent,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveProgressListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalObjectiveProgressListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalObjectiveProgressListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveRuleListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveRuleListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
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

export class AgoalObjectiveRuleListResponseBody extends $tea.Model {
  content?: AgoalObjectiveRuleListResponseBodyContent;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: AgoalObjectiveRuleListResponseBodyContent,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveRuleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalObjectiveRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalObjectiveRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveRulePeriodListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveRulePeriodListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  objectiveRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      objectiveRuleId: 'objectiveRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectiveRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveRulePeriodListResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: OpenObjectiveRulePeriodDTO[];
  /**
   * @example
   * 7478B23C-80E8-1AD6-BE8C-09D480E0xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': OpenObjectiveRulePeriodDTO },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveRulePeriodListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalObjectiveRulePeriodListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalObjectiveRulePeriodListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgObjectiveListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgObjectiveListRequest extends $tea.Model {
  /**
   * @example
   * 853530516
   * 
   * **if can be null:**
   * true
   */
  dingTeamId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 662e006fe4b0f579bbcxxxxx
   * 
   * **if can be null:**
   * true
   */
  periodId?: string;
  static names(): { [key: string]: string } {
    return {
      dingTeamId: 'dingTeamId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      periodId: 'periodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingTeamId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      periodId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgObjectiveListResponseBody extends $tea.Model {
  content?: OpenAgoalOrgObjectiveListDTO;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: OpenAgoalOrgObjectiveListDTO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgObjectiveListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalOrgObjectiveListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalOrgObjectiveListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgObjectiveQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgObjectiveQueryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 662e006fe4b0f579bbcxxxxx
   */
  objectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      objectiveId: 'objectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectiveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgObjectiveQueryResponseBody extends $tea.Model {
  content?: OpenAgoalOrgObjectiveDTO;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: OpenAgoalOrgObjectiveDTO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgObjectiveQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalOrgObjectiveQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalOrgObjectiveQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgObjectiveRuleListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgObjectiveRuleListResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: OpenOrgObjectiveRuleDTO[];
  /**
   * @example
   * 7478B23C-80E8-1AD6-BE8C-09D480E0xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': OpenOrgObjectiveRuleDTO },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgObjectiveRuleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalOrgObjectiveRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalOrgObjectiveRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgPerfDocQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgPerfDocQueryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      planId: 'planId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgPerfDocQueryResponseBody extends $tea.Model {
  content?: AgoalOrgPerfDocQueryResponseBodyContent;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: AgoalOrgPerfDocQueryResponseBodyContent,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgPerfDocQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalOrgPerfDocQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalOrgPerfDocQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgPerfPlanQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgPerfPlanQueryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
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

export class AgoalOrgPerfPlanQueryResponseBody extends $tea.Model {
  content?: AgoalOrgPerfPlanQueryResponseBodyContent;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: AgoalOrgPerfPlanQueryResponseBodyContent,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgPerfPlanQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalOrgPerfPlanQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalOrgPerfPlanQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalPerfTaskCreateHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalPerfTaskCreateRequest extends $tea.Model {
  body?: PerfTask[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': PerfTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalPerfTaskCreateResponseBody extends $tea.Model {
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

export class AgoalPerfTaskCreateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalPerfTaskCreateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalPerfTaskCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalPerfTaskUpdateHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalPerfTaskUpdateRequest extends $tea.Model {
  body?: PerfTask[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': PerfTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalPerfTaskUpdateResponseBody extends $tea.Model {
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

export class AgoalPerfTaskUpdateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalPerfTaskUpdateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalPerfTaskUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalPeriodListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalPeriodListRequest extends $tea.Model {
  body?: AgoalPeriodListRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AgoalPeriodListRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalPeriodListShrinkRequest extends $tea.Model {
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

export class AgoalPeriodListResponseBody extends $tea.Model {
  content?: OpenAgoalPeriodDTO[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': OpenAgoalPeriodDTO },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalPeriodListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalPeriodListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalPeriodListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalSendMessageHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalSendMessageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://agoal.dingtalk.com
   */
  mobileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"A":"a", "B":"b"}
   */
  params?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://agoal.dingtalk.com
   */
  pcUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 211042291978xxxx
   */
  sourceDingUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  targetDingUserIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1d01a14febc7482ca3b6e1d30cf5xxxx
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      mobileUrl: 'mobileUrl',
      params: 'params',
      pcUrl: 'pcUrl',
      sourceDingUserId: 'sourceDingUserId',
      targetDingUserIds: 'targetDingUserIds',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobileUrl: 'string',
      params: 'string',
      pcUrl: 'string',
      sourceDingUserId: 'string',
      targetDingUserIds: { 'type': 'array', 'itemType': 'string' },
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalSendMessageResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7478B23C-80E8-1AD6-BE8C-09D480E0xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalSendMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalSendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalSendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalUserAdminListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalUserAdminListResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: OpenUserAdminDTO[];
  /**
   * @example
   * 7478B23C-80E8-1AD6-BE8C-09D480E0xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': OpenUserAdminDTO },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalUserAdminListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalUserAdminListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalUserAdminListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalUserObjectiveListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalUserObjectiveListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 211042291978xxxx
   */
  dingUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6444f5e9a4261c6e699dxxxx
   */
  objectiveRuleId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  periodIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dingUserId: 'dingUserId',
      objectiveRuleId: 'objectiveRuleId',
      periodIds: 'periodIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingUserId: 'string',
      objectiveRuleId: 'string',
      periodIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalUserObjectiveListResponseBody extends $tea.Model {
  content?: OpenAgoalObjectiveDTO[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': OpenAgoalObjectiveDTO },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalUserObjectiveListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalUserObjectiveListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalUserObjectiveListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalUserSubAdminListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalUserSubAdminListRequest extends $tea.Model {
  /**
   * @example
   * ACCOUNT
   */
  funcPermissionGroup?: string;
  static names(): { [key: string]: string } {
    return {
      funcPermissionGroup: 'funcPermissionGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      funcPermissionGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalUserSubAdminListResponseBody extends $tea.Model {
  content?: OpenUserSubAdminDTO[];
  /**
   * @example
   * 7478B23C-80E8-1AD6-BE8C-09D480E0xxxx
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': OpenUserSubAdminDTO },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalUserSubAdminListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgoalUserSubAdminListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgoalUserSubAdminListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeptScoreCardIndicatorHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeptScoreCardIndicatorRequest extends $tea.Model {
  dingTeamId?: string;
  static names(): { [key: string]: string } {
    return {
      dingTeamId: 'dingTeamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingTeamId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeptScoreCardIndicatorResponseBody extends $tea.Model {
  content?: OpenScoreCardDimensionDTO;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: OpenScoreCardDimensionDTO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeptScoreCardIndicatorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeptScoreCardIndicatorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeptScoreCardIndicatorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndicatorDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndicatorDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  indicatorId?: string;
  monthNum?: number;
  static names(): { [key: string]: string } {
    return {
      indicatorId: 'indicatorId',
      monthNum: 'monthNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indicatorId: 'string',
      monthNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndicatorDetailResponseBody extends $tea.Model {
  content?: string[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndicatorDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIndicatorDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIndicatorDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectiveDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectiveDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  objectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      objectiveId: 'objectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectiveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectiveDetailResponseBody extends $tea.Model {
  content?: OpenAgoalObjectiveDTO;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: OpenAgoalObjectiveDTO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectiveDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetObjectiveDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetObjectiveDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectiveRuleDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsDingtalkAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsDingtalkAccessToken: 'x-acs-dingtalk-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsDingtalkAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectiveRuleDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  objectiveRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      objectiveRuleId: 'objectiveRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectiveRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectiveRuleDetailResponseBody extends $tea.Model {
  content?: OpenObjectiveRuleDTO;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: OpenObjectiveRuleDTO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectiveRuleDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetObjectiveRuleDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetObjectiveRuleDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityChildren extends $tea.Model {
  /**
   * @example
   * {"title": "123"}
   */
  data?: { [key: string]: any };
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * y/n
   */
  isDeleted?: string;
  /**
   * @example
   * 67dbb24f7aac3f62d8b98fb5
   */
  linkSourceId?: string;
  /**
   * @example
   * EXTERNAL_PERF_TASK
   */
  linkSourceType?: string;
  metas?: Meta[];
  /**
   * @example
   * DIMENSION
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      id: 'id',
      isDeleted: 'isDeleted',
      linkSourceId: 'linkSourceId',
      linkSourceType: 'linkSourceType',
      metas: 'metas',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      isDeleted: 'string',
      linkSourceId: 'string',
      linkSourceType: 'string',
      metas: { 'type': 'array', 'itemType': Meta },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAgoalObjectiveDimensionDTOChildren extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 662e006fe4b0f57ccbcxxxxx
   */
  dimensionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 这是子维度标题
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dimensionId: 'dimensionId',
      title: 'title',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionId: 'string',
      title: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenScoreCardDimensionDTODimensionList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dimensionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  indicatorIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      dimensionId: 'dimensionId',
      indicatorIdList: 'indicatorIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionId: 'string',
      indicatorIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalBizDataQueryResponseBodyContent extends $tea.Model {
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

export class AgoalFieldUpdateRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 662e006fe4b0f579bbcxxxxx
   */
  entityId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OBJECTIVE
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * title
   */
  fieldCode?: string;
  /**
   * @example
   * 字段值
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entityId',
      entityType: 'entityType',
      fieldCode: 'fieldCode',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
      fieldCode: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalIndicatorBatchQueryResponseBodyResult extends $tea.Model {
  code?: string;
  description?: string;
  id?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      id: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalIndicatorDataPushRequestData extends $tea.Model {
  /**
   * @example
   * 111
   */
  data?: string;
  /**
   * @example
   * 2025-11-01 11:01:00
   */
  period?: string;
  /**
   * @example
   * YEAR、HALF_YEAR、QUARTER、DOUBLE_MONTH、MONTH、WEEK
   */
  periodType?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      period: 'period',
      periodType: 'periodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      period: 'string',
      periodType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveProgressListResponseBodyContent extends $tea.Model {
  pageNumber?: string;
  pageSize?: string;
  result?: OpenAgoalProgressDTO[];
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      result: { 'type': 'array', 'itemType': OpenAgoalProgressDTO },
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalObjectiveRuleListResponseBodyContent extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: OpenObjectiveRuleDTO[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': OpenObjectiveRuleDTO },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgPerfDocQueryResponseBodyContent extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: OpenOrgPerfDocDTO[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': OpenOrgPerfDocDTO },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalOrgPerfPlanQueryResponseBodyContent extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: OpenOrgPerfPlanDTO[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': OpenOrgPerfPlanDTO },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgoalPeriodListRequestBody extends $tea.Model {
  periodTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      periodTypes: 'periodTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodTypes: { 'type': 'array', 'itemType': 'string' },
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
   * @param request - AgoalBizDataQueryRequest
   * @param headers - AgoalBizDataQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalBizDataQueryResponse
   */
  async agoalBizDataQueryWithOptions(request: AgoalBizDataQueryRequest, headers: AgoalBizDataQueryHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalBizDataQueryResponse> {
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
      action: "AgoalBizDataQuery",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/bizData/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalBizDataQueryResponse>(await this.execute(params, req, runtime), new AgoalBizDataQueryResponse({}));
  }

  /**
   * 业务数据开放
   * 
   * @param request - AgoalBizDataQueryRequest
   * @returns AgoalBizDataQueryResponse
   */
  async agoalBizDataQuery(request: AgoalBizDataQueryRequest): Promise<AgoalBizDataQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalBizDataQueryHeaders({ });
    return await this.agoalBizDataQueryWithOptions(request, headers, runtime);
  }

  /**
   * 创建目标进展
   * 
   * @param request - AgoalCreateProgressRequest
   * @param headers - AgoalCreateProgressHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalCreateProgressResponse
   */
  async agoalCreateProgressWithOptions(request: AgoalCreateProgressRequest, headers: AgoalCreateProgressHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalCreateProgressResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.krId)) {
      body["krId"] = request.krId;
    }

    if (!Util.isUnset(request.mergeIntoLatestProgress)) {
      body["mergeIntoLatestProgress"] = request.mergeIntoLatestProgress;
    }

    if (!Util.isUnset(request.objectiveId)) {
      body["objectiveId"] = request.objectiveId;
    }

    if (!Util.isUnset(request.plainText)) {
      body["plainText"] = request.plainText;
    }

    if (!Util.isUnset(request.progress)) {
      body["progress"] = request.progress;
    }

    if (!Util.isUnset(request.progressMergePeriod)) {
      body["progressMergePeriod"] = request.progressMergePeriod;
    }

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
      action: "AgoalCreateProgress",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/objectives/progresses`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalCreateProgressResponse>(await this.execute(params, req, runtime), new AgoalCreateProgressResponse({}));
  }

  /**
   * 创建目标进展
   * 
   * @param request - AgoalCreateProgressRequest
   * @returns AgoalCreateProgressResponse
   */
  async agoalCreateProgress(request: AgoalCreateProgressRequest): Promise<AgoalCreateProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalCreateProgressHeaders({ });
    return await this.agoalCreateProgressWithOptions(request, headers, runtime);
  }

  /**
   * 创建业务实体
   * 
   * @param request - AgoalEntityCreateRequest
   * @param headers - AgoalEntityCreateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalEntityCreateResponse
   */
  async agoalEntityCreateWithOptions(request: AgoalEntityCreateRequest, headers: AgoalEntityCreateHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalEntityCreateResponse> {
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
      action: "AgoalEntityCreate",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/entities`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalEntityCreateResponse>(await this.execute(params, req, runtime), new AgoalEntityCreateResponse({}));
  }

  /**
   * 创建业务实体
   * 
   * @param request - AgoalEntityCreateRequest
   * @returns AgoalEntityCreateResponse
   */
  async agoalEntityCreate(request: AgoalEntityCreateRequest): Promise<AgoalEntityCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalEntityCreateHeaders({ });
    return await this.agoalEntityCreateWithOptions(request, headers, runtime);
  }

  /**
   * 更新业务实体
   * 
   * @param request - AgoalEntityUpdateRequest
   * @param headers - AgoalEntityUpdateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalEntityUpdateResponse
   */
  async agoalEntityUpdateWithOptions(request: AgoalEntityUpdateRequest, headers: AgoalEntityUpdateHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalEntityUpdateResponse> {
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
      action: "AgoalEntityUpdate",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/entities`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalEntityUpdateResponse>(await this.execute(params, req, runtime), new AgoalEntityUpdateResponse({}));
  }

  /**
   * 更新业务实体
   * 
   * @param request - AgoalEntityUpdateRequest
   * @returns AgoalEntityUpdateResponse
   */
  async agoalEntityUpdate(request: AgoalEntityUpdateRequest): Promise<AgoalEntityUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalEntityUpdateHeaders({ });
    return await this.agoalEntityUpdateWithOptions(request, headers, runtime);
  }

  /**
   * 更新 Agoal 字段值
   * 
   * @param tmpReq - AgoalFieldUpdateRequest
   * @param headers - AgoalFieldUpdateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalFieldUpdateResponse
   */
  async agoalFieldUpdateWithOptions(tmpReq: AgoalFieldUpdateRequest, headers: AgoalFieldUpdateHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalFieldUpdateResponse> {
    Util.validateModel(tmpReq);
    let request = new AgoalFieldUpdateShrinkRequest({ });
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
      action: "AgoalFieldUpdate",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/fields`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalFieldUpdateResponse>(await this.execute(params, req, runtime), new AgoalFieldUpdateResponse({}));
  }

  /**
   * 更新 Agoal 字段值
   * 
   * @param request - AgoalFieldUpdateRequest
   * @returns AgoalFieldUpdateResponse
   */
  async agoalFieldUpdate(request: AgoalFieldUpdateRequest): Promise<AgoalFieldUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalFieldUpdateHeaders({ });
    return await this.agoalFieldUpdateWithOptions(request, headers, runtime);
  }

  /**
   * 通过指标编码批量查询指标列表
   * 
   * @param tmpReq - AgoalIndicatorBatchQueryRequest
   * @param headers - AgoalIndicatorBatchQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalIndicatorBatchQueryResponse
   */
  async agoalIndicatorBatchQueryWithOptions(tmpReq: AgoalIndicatorBatchQueryRequest, headers: AgoalIndicatorBatchQueryHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalIndicatorBatchQueryResponse> {
    Util.validateModel(tmpReq);
    let request = new AgoalIndicatorBatchQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.codeList)) {
      request.codeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.codeList, "codeList", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.codeListShrink)) {
      query["codeList"] = request.codeListShrink;
    }

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
      action: "AgoalIndicatorBatchQuery",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/indicator/batch/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalIndicatorBatchQueryResponse>(await this.execute(params, req, runtime), new AgoalIndicatorBatchQueryResponse({}));
  }

  /**
   * 通过指标编码批量查询指标列表
   * 
   * @param request - AgoalIndicatorBatchQueryRequest
   * @returns AgoalIndicatorBatchQueryResponse
   */
  async agoalIndicatorBatchQuery(request: AgoalIndicatorBatchQueryRequest): Promise<AgoalIndicatorBatchQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalIndicatorBatchQueryHeaders({ });
    return await this.agoalIndicatorBatchQueryWithOptions(request, headers, runtime);
  }

  /**
   * 通过指标编码推送指标时间维度数据
   * 
   * @param request - AgoalIndicatorDataPushRequest
   * @param headers - AgoalIndicatorDataPushHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalIndicatorDataPushResponse
   */
  async agoalIndicatorDataPushWithOptions(request: AgoalIndicatorDataPushRequest, headers: AgoalIndicatorDataPushHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalIndicatorDataPushResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.data)) {
      body["data"] = request.data;
    }

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
      action: "AgoalIndicatorDataPush",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/indicator/data/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalIndicatorDataPushResponse>(await this.execute(params, req, runtime), new AgoalIndicatorDataPushResponse({}));
  }

  /**
   * 通过指标编码推送指标时间维度数据
   * 
   * @param request - AgoalIndicatorDataPushRequest
   * @returns AgoalIndicatorDataPushResponse
   */
  async agoalIndicatorDataPush(request: AgoalIndicatorDataPushRequest): Promise<AgoalIndicatorDataPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalIndicatorDataPushHeaders({ });
    return await this.agoalIndicatorDataPushWithOptions(request, headers, runtime);
  }

  /**
   * 获取Agoal指定目标或者关键结果关联的关键行动
   * 
   * @param request - AgoalObjectiveKeyActionListRequest
   * @param headers - AgoalObjectiveKeyActionListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalObjectiveKeyActionListResponse
   */
  async agoalObjectiveKeyActionListWithOptions(request: AgoalObjectiveKeyActionListRequest, headers: AgoalObjectiveKeyActionListHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalObjectiveKeyActionListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dingUserId)) {
      query["dingUserId"] = request.dingUserId;
    }

    if (!Util.isUnset(request.keyResultId)) {
      query["keyResultId"] = request.keyResultId;
    }

    if (!Util.isUnset(request.objectiveId)) {
      query["objectiveId"] = request.objectiveId;
    }

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
      action: "AgoalObjectiveKeyActionList",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/objectives/keyActionLists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalObjectiveKeyActionListResponse>(await this.execute(params, req, runtime), new AgoalObjectiveKeyActionListResponse({}));
  }

  /**
   * 获取Agoal指定目标或者关键结果关联的关键行动
   * 
   * @param request - AgoalObjectiveKeyActionListRequest
   * @returns AgoalObjectiveKeyActionListResponse
   */
  async agoalObjectiveKeyActionList(request: AgoalObjectiveKeyActionListRequest): Promise<AgoalObjectiveKeyActionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalObjectiveKeyActionListHeaders({ });
    return await this.agoalObjectiveKeyActionListWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业下指定个人目标的所有进展
   * 
   * @param request - AgoalObjectiveProgressListRequest
   * @param headers - AgoalObjectiveProgressListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalObjectiveProgressListResponse
   */
  async agoalObjectiveProgressListWithOptions(request: AgoalObjectiveProgressListRequest, headers: AgoalObjectiveProgressListHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalObjectiveProgressListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.objectiveId)) {
      query["objectiveId"] = request.objectiveId;
    }

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
      action: "AgoalObjectiveProgressList",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/objectives/progresses/lists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalObjectiveProgressListResponse>(await this.execute(params, req, runtime), new AgoalObjectiveProgressListResponse({}));
  }

  /**
   * 查询企业下指定个人目标的所有进展
   * 
   * @param request - AgoalObjectiveProgressListRequest
   * @returns AgoalObjectiveProgressListResponse
   */
  async agoalObjectiveProgressList(request: AgoalObjectiveProgressListRequest): Promise<AgoalObjectiveProgressListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalObjectiveProgressListHeaders({ });
    return await this.agoalObjectiveProgressListWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业下目标规则列表
   * 
   * @param request - AgoalObjectiveRuleListRequest
   * @param headers - AgoalObjectiveRuleListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalObjectiveRuleListResponse
   */
  async agoalObjectiveRuleListWithOptions(request: AgoalObjectiveRuleListRequest, headers: AgoalObjectiveRuleListHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalObjectiveRuleListResponse> {
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
      action: "AgoalObjectiveRuleList",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/objectiveRuleLists/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalObjectiveRuleListResponse>(await this.execute(params, req, runtime), new AgoalObjectiveRuleListResponse({}));
  }

  /**
   * 查询企业下目标规则列表
   * 
   * @param request - AgoalObjectiveRuleListRequest
   * @returns AgoalObjectiveRuleListResponse
   */
  async agoalObjectiveRuleList(request: AgoalObjectiveRuleListRequest): Promise<AgoalObjectiveRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalObjectiveRuleListHeaders({ });
    return await this.agoalObjectiveRuleListWithOptions(request, headers, runtime);
  }

  /**
   * 获取Agoal目标规则下的周期列表
   * 
   * @param request - AgoalObjectiveRulePeriodListRequest
   * @param headers - AgoalObjectiveRulePeriodListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalObjectiveRulePeriodListResponse
   */
  async agoalObjectiveRulePeriodListWithOptions(request: AgoalObjectiveRulePeriodListRequest, headers: AgoalObjectiveRulePeriodListHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalObjectiveRulePeriodListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.objectiveRuleId)) {
      query["objectiveRuleId"] = request.objectiveRuleId;
    }

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
      action: "AgoalObjectiveRulePeriodList",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/objectiveRules/periodLists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalObjectiveRulePeriodListResponse>(await this.execute(params, req, runtime), new AgoalObjectiveRulePeriodListResponse({}));
  }

  /**
   * 获取Agoal目标规则下的周期列表
   * 
   * @param request - AgoalObjectiveRulePeriodListRequest
   * @returns AgoalObjectiveRulePeriodListResponse
   */
  async agoalObjectiveRulePeriodList(request: AgoalObjectiveRulePeriodListRequest): Promise<AgoalObjectiveRulePeriodListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalObjectiveRulePeriodListHeaders({ });
    return await this.agoalObjectiveRulePeriodListWithOptions(request, headers, runtime);
  }

  /**
   * 获取 Agoal 组织目标列表
   * 
   * @param request - AgoalOrgObjectiveListRequest
   * @param headers - AgoalOrgObjectiveListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalOrgObjectiveListResponse
   */
  async agoalOrgObjectiveListWithOptions(request: AgoalOrgObjectiveListRequest, headers: AgoalOrgObjectiveListHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalOrgObjectiveListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dingTeamId)) {
      query["dingTeamId"] = request.dingTeamId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.periodId)) {
      query["periodId"] = request.periodId;
    }

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
      action: "AgoalOrgObjectiveList",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/orgObjectives/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalOrgObjectiveListResponse>(await this.execute(params, req, runtime), new AgoalOrgObjectiveListResponse({}));
  }

  /**
   * 获取 Agoal 组织目标列表
   * 
   * @param request - AgoalOrgObjectiveListRequest
   * @returns AgoalOrgObjectiveListResponse
   */
  async agoalOrgObjectiveList(request: AgoalOrgObjectiveListRequest): Promise<AgoalOrgObjectiveListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalOrgObjectiveListHeaders({ });
    return await this.agoalOrgObjectiveListWithOptions(request, headers, runtime);
  }

  /**
   * 查询组织目标详情
   * 
   * @param request - AgoalOrgObjectiveQueryRequest
   * @param headers - AgoalOrgObjectiveQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalOrgObjectiveQueryResponse
   */
  async agoalOrgObjectiveQueryWithOptions(request: AgoalOrgObjectiveQueryRequest, headers: AgoalOrgObjectiveQueryHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalOrgObjectiveQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.objectiveId)) {
      query["objectiveId"] = request.objectiveId;
    }

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
      action: "AgoalOrgObjectiveQuery",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/orgObjectives`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalOrgObjectiveQueryResponse>(await this.execute(params, req, runtime), new AgoalOrgObjectiveQueryResponse({}));
  }

  /**
   * 查询组织目标详情
   * 
   * @param request - AgoalOrgObjectiveQueryRequest
   * @returns AgoalOrgObjectiveQueryResponse
   */
  async agoalOrgObjectiveQuery(request: AgoalOrgObjectiveQueryRequest): Promise<AgoalOrgObjectiveQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalOrgObjectiveQueryHeaders({ });
    return await this.agoalOrgObjectiveQueryWithOptions(request, headers, runtime);
  }

  /**
   * 获取Agoal目标规则列表
   * 
   * @param headers - AgoalOrgObjectiveRuleListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalOrgObjectiveRuleListResponse
   */
  async agoalOrgObjectiveRuleListWithOptions(headers: AgoalOrgObjectiveRuleListHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalOrgObjectiveRuleListResponse> {
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
      action: "AgoalOrgObjectiveRuleList",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/objectiveRules/lists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalOrgObjectiveRuleListResponse>(await this.execute(params, req, runtime), new AgoalOrgObjectiveRuleListResponse({}));
  }

  /**
   * 获取Agoal目标规则列表
   * @returns AgoalOrgObjectiveRuleListResponse
   */
  async agoalOrgObjectiveRuleList(): Promise<AgoalOrgObjectiveRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalOrgObjectiveRuleListHeaders({ });
    return await this.agoalOrgObjectiveRuleListWithOptions(headers, runtime);
  }

  /**
   * 查询某个考核计划的部门得分
   * 
   * @param request - AgoalOrgPerfDocQueryRequest
   * @param headers - AgoalOrgPerfDocQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalOrgPerfDocQueryResponse
   */
  async agoalOrgPerfDocQueryWithOptions(request: AgoalOrgPerfDocQueryRequest, headers: AgoalOrgPerfDocQueryHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalOrgPerfDocQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.planId)) {
      query["planId"] = request.planId;
    }

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
      action: "AgoalOrgPerfDocQuery",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/org_perf/documents/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalOrgPerfDocQueryResponse>(await this.execute(params, req, runtime), new AgoalOrgPerfDocQueryResponse({}));
  }

  /**
   * 查询某个考核计划的部门得分
   * 
   * @param request - AgoalOrgPerfDocQueryRequest
   * @returns AgoalOrgPerfDocQueryResponse
   */
  async agoalOrgPerfDocQuery(request: AgoalOrgPerfDocQueryRequest): Promise<AgoalOrgPerfDocQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalOrgPerfDocQueryHeaders({ });
    return await this.agoalOrgPerfDocQueryWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业下的所有考核计划
   * 
   * @param request - AgoalOrgPerfPlanQueryRequest
   * @param headers - AgoalOrgPerfPlanQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalOrgPerfPlanQueryResponse
   */
  async agoalOrgPerfPlanQueryWithOptions(request: AgoalOrgPerfPlanQueryRequest, headers: AgoalOrgPerfPlanQueryHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalOrgPerfPlanQueryResponse> {
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
      action: "AgoalOrgPerfPlanQuery",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/org_perf/plans/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalOrgPerfPlanQueryResponse>(await this.execute(params, req, runtime), new AgoalOrgPerfPlanQueryResponse({}));
  }

  /**
   * 查询企业下的所有考核计划
   * 
   * @param request - AgoalOrgPerfPlanQueryRequest
   * @returns AgoalOrgPerfPlanQueryResponse
   */
  async agoalOrgPerfPlanQuery(request: AgoalOrgPerfPlanQueryRequest): Promise<AgoalOrgPerfPlanQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalOrgPerfPlanQueryHeaders({ });
    return await this.agoalOrgPerfPlanQueryWithOptions(request, headers, runtime);
  }

  /**
   * 创建考核任务
   * 
   * @param request - AgoalPerfTaskCreateRequest
   * @param headers - AgoalPerfTaskCreateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalPerfTaskCreateResponse
   */
  async agoalPerfTaskCreateWithOptions(request: AgoalPerfTaskCreateRequest, headers: AgoalPerfTaskCreateHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalPerfTaskCreateResponse> {
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
      action: "AgoalPerfTaskCreate",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/perfTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalPerfTaskCreateResponse>(await this.execute(params, req, runtime), new AgoalPerfTaskCreateResponse({}));
  }

  /**
   * 创建考核任务
   * 
   * @param request - AgoalPerfTaskCreateRequest
   * @returns AgoalPerfTaskCreateResponse
   */
  async agoalPerfTaskCreate(request: AgoalPerfTaskCreateRequest): Promise<AgoalPerfTaskCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalPerfTaskCreateHeaders({ });
    return await this.agoalPerfTaskCreateWithOptions(request, headers, runtime);
  }

  /**
   * 更新考核任务
   * 
   * @param request - AgoalPerfTaskUpdateRequest
   * @param headers - AgoalPerfTaskUpdateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalPerfTaskUpdateResponse
   */
  async agoalPerfTaskUpdateWithOptions(request: AgoalPerfTaskUpdateRequest, headers: AgoalPerfTaskUpdateHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalPerfTaskUpdateResponse> {
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
      action: "AgoalPerfTaskUpdate",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/perfTasks`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalPerfTaskUpdateResponse>(await this.execute(params, req, runtime), new AgoalPerfTaskUpdateResponse({}));
  }

  /**
   * 更新考核任务
   * 
   * @param request - AgoalPerfTaskUpdateRequest
   * @returns AgoalPerfTaskUpdateResponse
   */
  async agoalPerfTaskUpdate(request: AgoalPerfTaskUpdateRequest): Promise<AgoalPerfTaskUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalPerfTaskUpdateHeaders({ });
    return await this.agoalPerfTaskUpdateWithOptions(request, headers, runtime);
  }

  /**
   * 获取 Agoal 周期列表
   * 
   * @param tmpReq - AgoalPeriodListRequest
   * @param headers - AgoalPeriodListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalPeriodListResponse
   */
  async agoalPeriodListWithOptions(tmpReq: AgoalPeriodListRequest, headers: AgoalPeriodListHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalPeriodListResponse> {
    Util.validateModel(tmpReq);
    let request = new AgoalPeriodListShrinkRequest({ });
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
      action: "AgoalPeriodList",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/periods/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalPeriodListResponse>(await this.execute(params, req, runtime), new AgoalPeriodListResponse({}));
  }

  /**
   * 获取 Agoal 周期列表
   * 
   * @param request - AgoalPeriodListRequest
   * @returns AgoalPeriodListResponse
   */
  async agoalPeriodList(request: AgoalPeriodListRequest): Promise<AgoalPeriodListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalPeriodListHeaders({ });
    return await this.agoalPeriodListWithOptions(request, headers, runtime);
  }

  /**
   * Agoal消息发送
   * 
   * @param request - AgoalSendMessageRequest
   * @param headers - AgoalSendMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalSendMessageResponse
   */
  async agoalSendMessageWithOptions(request: AgoalSendMessageRequest, headers: AgoalSendMessageHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalSendMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mobileUrl)) {
      body["mobileUrl"] = request.mobileUrl;
    }

    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
    }

    if (!Util.isUnset(request.pcUrl)) {
      body["pcUrl"] = request.pcUrl;
    }

    if (!Util.isUnset(request.sourceDingUserId)) {
      body["sourceDingUserId"] = request.sourceDingUserId;
    }

    if (!Util.isUnset(request.targetDingUserIds)) {
      body["targetDingUserIds"] = request.targetDingUserIds;
    }

    if (!Util.isUnset(request.templateId)) {
      body["templateId"] = request.templateId;
    }

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
      action: "AgoalSendMessage",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/messages/send`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalSendMessageResponse>(await this.execute(params, req, runtime), new AgoalSendMessageResponse({}));
  }

  /**
   * Agoal消息发送
   * 
   * @param request - AgoalSendMessageRequest
   * @returns AgoalSendMessageResponse
   */
  async agoalSendMessage(request: AgoalSendMessageRequest): Promise<AgoalSendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalSendMessageHeaders({ });
    return await this.agoalSendMessageWithOptions(request, headers, runtime);
  }

  /**
   * 获取Agoal管理员列表
   * 
   * @param headers - AgoalUserAdminListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalUserAdminListResponse
   */
  async agoalUserAdminListWithOptions(headers: AgoalUserAdminListHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalUserAdminListResponse> {
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
      action: "AgoalUserAdminList",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/administrators/lists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalUserAdminListResponse>(await this.execute(params, req, runtime), new AgoalUserAdminListResponse({}));
  }

  /**
   * 获取Agoal管理员列表
   * @returns AgoalUserAdminListResponse
   */
  async agoalUserAdminList(): Promise<AgoalUserAdminListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalUserAdminListHeaders({ });
    return await this.agoalUserAdminListWithOptions(headers, runtime);
  }

  /**
   * Agoal用户目标列表
   * 
   * @param request - AgoalUserObjectiveListRequest
   * @param headers - AgoalUserObjectiveListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalUserObjectiveListResponse
   */
  async agoalUserObjectiveListWithOptions(request: AgoalUserObjectiveListRequest, headers: AgoalUserObjectiveListHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalUserObjectiveListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dingUserId)) {
      body["dingUserId"] = request.dingUserId;
    }

    if (!Util.isUnset(request.objectiveRuleId)) {
      body["objectiveRuleId"] = request.objectiveRuleId;
    }

    if (!Util.isUnset(request.periodIds)) {
      body["periodIds"] = request.periodIds;
    }

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
      action: "AgoalUserObjectiveList",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/users/objectiveLists/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalUserObjectiveListResponse>(await this.execute(params, req, runtime), new AgoalUserObjectiveListResponse({}));
  }

  /**
   * Agoal用户目标列表
   * 
   * @param request - AgoalUserObjectiveListRequest
   * @returns AgoalUserObjectiveListResponse
   */
  async agoalUserObjectiveList(request: AgoalUserObjectiveListRequest): Promise<AgoalUserObjectiveListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalUserObjectiveListHeaders({ });
    return await this.agoalUserObjectiveListWithOptions(request, headers, runtime);
  }

  /**
   * 获取Agoal子管理员列表
   * 
   * @param request - AgoalUserSubAdminListRequest
   * @param headers - AgoalUserSubAdminListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgoalUserSubAdminListResponse
   */
  async agoalUserSubAdminListWithOptions(request: AgoalUserSubAdminListRequest, headers: AgoalUserSubAdminListHeaders, runtime: $Util.RuntimeOptions): Promise<AgoalUserSubAdminListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.funcPermissionGroup)) {
      query["funcPermissionGroup"] = request.funcPermissionGroup;
    }

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
      action: "AgoalUserSubAdminList",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/administrators/sub/lists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<AgoalUserSubAdminListResponse>(await this.execute(params, req, runtime), new AgoalUserSubAdminListResponse({}));
  }

  /**
   * 获取Agoal子管理员列表
   * 
   * @param request - AgoalUserSubAdminListRequest
   * @returns AgoalUserSubAdminListResponse
   */
  async agoalUserSubAdminList(request: AgoalUserSubAdminListRequest): Promise<AgoalUserSubAdminListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AgoalUserSubAdminListHeaders({ });
    return await this.agoalUserSubAdminListWithOptions(request, headers, runtime);
  }

  /**
   * 获取部门下的维度和指标id
   * 
   * @param request - GetDeptScoreCardIndicatorRequest
   * @param headers - GetDeptScoreCardIndicatorHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeptScoreCardIndicatorResponse
   */
  async getDeptScoreCardIndicatorWithOptions(request: GetDeptScoreCardIndicatorRequest, headers: GetDeptScoreCardIndicatorHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeptScoreCardIndicatorResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dingTeamId)) {
      query["dingTeamId"] = request.dingTeamId;
    }

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
      action: "GetDeptScoreCardIndicator",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/scorecards/departments/indicators`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetDeptScoreCardIndicatorResponse>(await this.execute(params, req, runtime), new GetDeptScoreCardIndicatorResponse({}));
  }

  /**
   * 获取部门下的维度和指标id
   * 
   * @param request - GetDeptScoreCardIndicatorRequest
   * @returns GetDeptScoreCardIndicatorResponse
   */
  async getDeptScoreCardIndicator(request: GetDeptScoreCardIndicatorRequest): Promise<GetDeptScoreCardIndicatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeptScoreCardIndicatorHeaders({ });
    return await this.getDeptScoreCardIndicatorWithOptions(request, headers, runtime);
  }

  /**
   * 获取指标详情
   * 
   * @param request - GetIndicatorDetailRequest
   * @param headers - GetIndicatorDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndicatorDetailResponse
   */
  async getIndicatorDetailWithOptions(request: GetIndicatorDetailRequest, headers: GetIndicatorDetailHeaders, runtime: $Util.RuntimeOptions): Promise<GetIndicatorDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.indicatorId)) {
      query["indicatorId"] = request.indicatorId;
    }

    if (!Util.isUnset(request.monthNum)) {
      query["monthNum"] = request.monthNum;
    }

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
      action: "GetIndicatorDetail",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/scorecards/indicators/details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetIndicatorDetailResponse>(await this.execute(params, req, runtime), new GetIndicatorDetailResponse({}));
  }

  /**
   * 获取指标详情
   * 
   * @param request - GetIndicatorDetailRequest
   * @returns GetIndicatorDetailResponse
   */
  async getIndicatorDetail(request: GetIndicatorDetailRequest): Promise<GetIndicatorDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetIndicatorDetailHeaders({ });
    return await this.getIndicatorDetailWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业下个人目标详情
   * 
   * @param request - GetObjectiveDetailRequest
   * @param headers - GetObjectiveDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetObjectiveDetailResponse
   */
  async getObjectiveDetailWithOptions(request: GetObjectiveDetailRequest, headers: GetObjectiveDetailHeaders, runtime: $Util.RuntimeOptions): Promise<GetObjectiveDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.objectiveId)) {
      query["objectiveId"] = request.objectiveId;
    }

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
      action: "GetObjectiveDetail",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/objectives/details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetObjectiveDetailResponse>(await this.execute(params, req, runtime), new GetObjectiveDetailResponse({}));
  }

  /**
   * 查询企业下个人目标详情
   * 
   * @param request - GetObjectiveDetailRequest
   * @returns GetObjectiveDetailResponse
   */
  async getObjectiveDetail(request: GetObjectiveDetailRequest): Promise<GetObjectiveDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetObjectiveDetailHeaders({ });
    return await this.getObjectiveDetailWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业下单个目标规则详情
   * 
   * @param request - GetObjectiveRuleDetailRequest
   * @param headers - GetObjectiveRuleDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetObjectiveRuleDetailResponse
   */
  async getObjectiveRuleDetailWithOptions(request: GetObjectiveRuleDetailRequest, headers: GetObjectiveRuleDetailHeaders, runtime: $Util.RuntimeOptions): Promise<GetObjectiveRuleDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.objectiveRuleId)) {
      query["objectiveRuleId"] = request.objectiveRuleId;
    }

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
      action: "GetObjectiveRuleDetail",
      version: "agoal_1.0",
      protocol: "HTTP",
      pathname: `/v1.0/agoal/objectiveRules/details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $tea.cast<GetObjectiveRuleDetailResponse>(await this.execute(params, req, runtime), new GetObjectiveRuleDetailResponse({}));
  }

  /**
   * 查询企业下单个目标规则详情
   * 
   * @param request - GetObjectiveRuleDetailRequest
   * @returns GetObjectiveRuleDetailResponse
   */
  async getObjectiveRuleDetail(request: GetObjectiveRuleDetailRequest): Promise<GetObjectiveRuleDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetObjectiveRuleDetailHeaders({ });
    return await this.getObjectiveRuleDetailWithOptions(request, headers, runtime);
  }

}
