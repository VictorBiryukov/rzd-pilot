import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  Byte: any;
  Char: any;
  Long: any;
  Short: any;
  _ByteArray: any;
  _Date: any;
  _DateTime: any;
  _Float4: any;
  _OffsetDateTime: any;
};






export type Risk = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  cost?: Maybe<Scalars['BigDecimal']>;
  probability?: Maybe<Scalars['BigDecimal']>;
  realized?: Maybe<Scalars['Boolean']>;
  descr?: Maybe<Scalars['String']>;
  sysHistNumber?: Maybe<Scalars['Long']>;
  sysLastHistVersion?: Maybe<Scalars['Long']>;
  type: Scalars['String'];
  subProject: SubProject;
  riskType?: Maybe<RiskType>;
  aggregateRoot?: Maybe<RootProject>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type RiskSubProjectArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type RiskRiskTypeArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type RiskAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type Risk_GetCharArgs = {
  expression: Scalars['String'];
};


export type Risk_GetStringArgs = {
  expression: Scalars['String'];
};


export type Risk_GetByteArgs = {
  expression: Scalars['String'];
};


export type Risk_GetShortArgs = {
  expression: Scalars['String'];
};


export type Risk_GetIntArgs = {
  expression: Scalars['String'];
};


export type Risk_GetLongArgs = {
  expression: Scalars['String'];
};


export type Risk_GetFloatArgs = {
  expression: Scalars['String'];
};


export type Risk_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type Risk_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type Risk_GetDateArgs = {
  expression: Scalars['String'];
};


export type Risk_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Risk_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type Risk_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type Risk_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type RiskHistory = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  cost?: Maybe<Scalars['BigDecimal']>;
  sysCostUpdated?: Maybe<Scalars['Boolean']>;
  probability?: Maybe<Scalars['BigDecimal']>;
  sysProbabilityUpdated?: Maybe<Scalars['Boolean']>;
  sysState?: Maybe<Scalars['Byte']>;
  sysHistNumber?: Maybe<Scalars['Long']>;
  sysLastHistVersion?: Maybe<Scalars['Long']>;
  sysHistoryTime?: Maybe<Scalars['_OffsetDateTime']>;
  type: Scalars['String'];
  sysHistoryOwner: Risk;
  aggregateRoot?: Maybe<RootProject>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type RiskHistorySysHistoryOwnerArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type RiskHistoryAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type RiskHistory_GetCharArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetStringArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetByteArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetShortArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetIntArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetLongArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetFloatArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetDateArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type RiskHistory_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type RiskType = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  aggregateRoot?: Maybe<RootDictionary>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type RiskTypeAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type RiskType_GetCharArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetStringArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetByteArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetShortArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetIntArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetLongArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetFloatArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetDateArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type RiskType_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type RootDictionary = {
  id: Scalars['ID'];
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type RootDictionary_GetCharArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetStringArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetByteArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetShortArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetIntArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetLongArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetFloatArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetDateArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type RootDictionary_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type RootProject = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  dateOpen?: Maybe<Scalars['_Date']>;
  dateClose?: Maybe<Scalars['_Date']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  countryIsoCode?: Maybe<Scalars['String']>;
  maxCost?: Maybe<Scalars['BigDecimal']>;
  type: Scalars['String'];
  subProjectList: _Ec_SubProject;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type RootProjectSubProjectListArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type RootProject_GetCharArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetStringArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetByteArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetShortArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetIntArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetLongArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetFloatArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetDateArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type RootProject_GetByteArrayArgs = {
  expression: Scalars['String'];
};


export type SubProject = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  dateOpen?: Maybe<Scalars['_Date']>;
  dateClose?: Maybe<Scalars['_Date']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  type: Scalars['String'];
  rootProject: RootProject;
  parent?: Maybe<SubProject>;
  aggregateRoot?: Maybe<RootProject>;
  childs: _Ec_SubProject;
  risk: _Ec_Risk;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type SubProjectRootProjectArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SubProjectParentArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SubProjectAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SubProjectChildsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type SubProjectRiskArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type SubProject_GetCharArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetStringArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetByteArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetShortArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetIntArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetLongArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetFloatArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetDateArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type SubProject_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type SysAdminSettings = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  rootSecurity: SysRootSecurity;
  aggregateRoot?: Maybe<SysRootSecurity>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type SysAdminSettingsRootSecurityArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysAdminSettingsAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysAdminSettings_GetCharArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetStringArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetByteArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetShortArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetIntArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetLongArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetFloatArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetDateArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type SysAdminSettings_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type SysCheckSelect = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  conditionValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  orderValue?: Maybe<Scalars['Int']>;
  typeName?: Maybe<Scalars['String']>;
  operation: SysOperation;
  aggregateRoot?: Maybe<SysRootSecurity>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type SysCheckSelectOperationArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysCheckSelectAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysCheckSelect_GetCharArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetStringArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetByteArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetShortArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetIntArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetLongArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetFloatArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetDateArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type SysCheckSelect_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type SysOperation = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  allowEmptyChecks?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  disableJwtVerification?: Maybe<Scalars['Boolean']>;
  hashValue?: Maybe<Scalars['String']>;
  rootSecurity: SysRootSecurity;
  aggregateRoot?: Maybe<SysRootSecurity>;
  checkSelects: _Ec_SysCheckSelect;
  paramAdditions: _Ec_SysParamAddition;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type SysOperationRootSecurityArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysOperationAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysOperationCheckSelectsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type SysOperationParamAdditionsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type SysOperation_GetCharArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetStringArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetByteArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetShortArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetIntArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetLongArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetFloatArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetDateArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type SysOperation_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type SysParamAddition = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  paramAddition?: Maybe<Scalars['String']>;
  paramName?: Maybe<Scalars['String']>;
  operation: SysOperation;
  aggregateRoot?: Maybe<SysRootSecurity>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type SysParamAdditionOperationArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysParamAdditionAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type SysParamAddition_GetCharArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetStringArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetByteArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetShortArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetIntArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetLongArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetFloatArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetDateArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type SysParamAddition_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type SysRootSecurity = {
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  type: Scalars['String'];
  adminSettings: _Ec_SysAdminSettings;
  operations: _Ec_SysOperation;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type SysRootSecurityAdminSettingsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type SysRootSecurityOperationsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type SysRootSecurity_GetCharArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetStringArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetByteArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetShortArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetIntArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetLongArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetFloatArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetDateArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type SysRootSecurity_GetByteArrayArgs = {
  expression: Scalars['String'];
};


export type _CompareRootProjectInput = {
  dateOpen?: Maybe<Scalars['_Date']>;
  countryIsoCode?: Maybe<Scalars['String']>;
  dateClose?: Maybe<Scalars['_Date']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
};

export type _CompareSubProjectInput = {
  dateOpen?: Maybe<Scalars['_Date']>;
  dateClose?: Maybe<Scalars['_Date']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
};

export type _CreateRiskInput = {
  descr?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['BigDecimal']>;
  riskType?: Maybe<Scalars['ID']>;
  probability?: Maybe<Scalars['BigDecimal']>;
  subProject: Scalars['ID'];
  realized?: Maybe<Scalars['Boolean']>;
};

export type _CreateRootProjectInput = {
  dateOpen?: Maybe<Scalars['_Date']>;
  countryIsoCode?: Maybe<Scalars['String']>;
  dateClose?: Maybe<Scalars['_Date']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  maxCost?: Maybe<Scalars['BigDecimal']>;
};

export type _CreateSubProjectInput = {
  dateOpen?: Maybe<Scalars['_Date']>;
  parent?: Maybe<Scalars['ID']>;
  dateClose?: Maybe<Scalars['_Date']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  rootProject: Scalars['ID'];
};



export type _Ecm_Risk = {
  __typename?: '_ECM_Risk';
  elems: Array<Risk>;
  count: Scalars['Int'];
  ctx?: Maybe<Scalars['String']>;
};

export type _Ecm_RiskHistory = {
  __typename?: '_ECM_RiskHistory';
  elems: Array<RiskHistory>;
  count: Scalars['Int'];
  ctx?: Maybe<Scalars['String']>;
};

export type _Ecm_RiskType = {
  __typename?: '_ECM_RiskType';
  elems: Array<RiskType>;
  count: Scalars['Int'];
  ctx?: Maybe<Scalars['String']>;
};

export type _Ecm_RootDictionary = {
  __typename?: '_ECM_RootDictionary';
  elems: Array<RootDictionary>;
  count: Scalars['Int'];
  ctx?: Maybe<Scalars['String']>;
};

export type _Ecm_RootProject = {
  __typename?: '_ECM_RootProject';
  elems: Array<RootProject>;
  count: Scalars['Int'];
  ctx?: Maybe<Scalars['String']>;
};

export type _Ecm_SubProject = {
  __typename?: '_ECM_SubProject';
  elems: Array<SubProject>;
  count: Scalars['Int'];
  ctx?: Maybe<Scalars['String']>;
};

export type _Ecm_SysAdminSettings = {
  __typename?: '_ECM_SysAdminSettings';
  elems: Array<SysAdminSettings>;
  count: Scalars['Int'];
  ctx?: Maybe<Scalars['String']>;
};

export type _Ecm_SysCheckSelect = {
  __typename?: '_ECM_SysCheckSelect';
  elems: Array<SysCheckSelect>;
  count: Scalars['Int'];
  ctx?: Maybe<Scalars['String']>;
};

export type _Ecm_SysOperation = {
  __typename?: '_ECM_SysOperation';
  elems: Array<SysOperation>;
  count: Scalars['Int'];
  ctx?: Maybe<Scalars['String']>;
};

export type _Ecm_SysParamAddition = {
  __typename?: '_ECM_SysParamAddition';
  elems: Array<SysParamAddition>;
  count: Scalars['Int'];
  ctx?: Maybe<Scalars['String']>;
};

export type _Ecm_SysRootSecurity = {
  __typename?: '_ECM_SysRootSecurity';
  elems: Array<SysRootSecurity>;
  count: Scalars['Int'];
  ctx?: Maybe<Scalars['String']>;
};

export type _Ec_Risk = {
  __typename?: '_EC_Risk';
  elems: Array<Risk>;
  count: Scalars['Int'];
};

export type _Ec_RiskHistory = {
  __typename?: '_EC_RiskHistory';
  elems: Array<RiskHistory>;
  count: Scalars['Int'];
};

export type _Ec_RiskType = {
  __typename?: '_EC_RiskType';
  elems: Array<RiskType>;
  count: Scalars['Int'];
};

export type _Ec_RootDictionary = {
  __typename?: '_EC_RootDictionary';
  elems: Array<RootDictionary>;
  count: Scalars['Int'];
};

export type _Ec_RootProject = {
  __typename?: '_EC_RootProject';
  elems: Array<RootProject>;
  count: Scalars['Int'];
};

export type _Ec_SubProject = {
  __typename?: '_EC_SubProject';
  elems: Array<SubProject>;
  count: Scalars['Int'];
};

export type _Ec_SysAdminSettings = {
  __typename?: '_EC_SysAdminSettings';
  elems: Array<SysAdminSettings>;
  count: Scalars['Int'];
};

export type _Ec_SysCheckSelect = {
  __typename?: '_EC_SysCheckSelect';
  elems: Array<SysCheckSelect>;
  count: Scalars['Int'];
};

export type _Ec_SysOperation = {
  __typename?: '_EC_SysOperation';
  elems: Array<SysOperation>;
  count: Scalars['Int'];
};

export type _Ec_SysParamAddition = {
  __typename?: '_EC_SysParamAddition';
  elems: Array<SysParamAddition>;
  count: Scalars['Int'];
};

export type _Ec_SysRootSecurity = {
  __typename?: '_EC_SysRootSecurity';
  elems: Array<SysRootSecurity>;
  count: Scalars['Int'];
};

export type _Enc_ModelStatus = {
  __typename?: '_ENC_ModelStatus';
  elems: Array<_En_ModelStatus>;
  count: Scalars['Int'];
};

export enum _En_ModelStatus {
  New = 'NEW',
  Implementing = 'IMPLEMENTING',
  Done = 'DONE',
  Rollback = 'ROLLBACK',
  Undone = 'UNDONE',
  Cancelled = 'CANCELLED'
}

export type _E_Risk = _Entity & Risk & {
  __typename?: '_E_Risk';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  cost?: Maybe<Scalars['BigDecimal']>;
  probability?: Maybe<Scalars['BigDecimal']>;
  realized?: Maybe<Scalars['Boolean']>;
  descr?: Maybe<Scalars['String']>;
  sysHistNumber?: Maybe<Scalars['Long']>;
  sysLastHistVersion?: Maybe<Scalars['Long']>;
  type: Scalars['String'];
  subProject: SubProject;
  riskType?: Maybe<RiskType>;
  aggregateRoot?: Maybe<RootProject>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_RiskSubProjectArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_RiskRiskTypeArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_RiskAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_Risk_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_Risk_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_RiskHistory = _Entity & RiskHistory & {
  __typename?: '_E_RiskHistory';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  cost?: Maybe<Scalars['BigDecimal']>;
  sysCostUpdated?: Maybe<Scalars['Boolean']>;
  probability?: Maybe<Scalars['BigDecimal']>;
  sysProbabilityUpdated?: Maybe<Scalars['Boolean']>;
  sysState?: Maybe<Scalars['Byte']>;
  sysHistNumber?: Maybe<Scalars['Long']>;
  sysLastHistVersion?: Maybe<Scalars['Long']>;
  sysHistoryTime?: Maybe<Scalars['_OffsetDateTime']>;
  type: Scalars['String'];
  sysHistoryOwner: Risk;
  aggregateRoot?: Maybe<RootProject>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_RiskHistorySysHistoryOwnerArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_RiskHistoryAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_RiskHistory_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_RiskHistory_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_RiskType = _Entity & RiskType & {
  __typename?: '_E_RiskType';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  aggregateRoot?: Maybe<RootDictionary>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_RiskTypeAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_RiskType_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_RiskType_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_RootDictionary = _Entity & RootDictionary & {
  __typename?: '_E_RootDictionary';
  id: Scalars['ID'];
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_RootDictionary_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_RootDictionary_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_RootProject = _Entity & RootProject & {
  __typename?: '_E_RootProject';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  dateOpen?: Maybe<Scalars['_Date']>;
  dateClose?: Maybe<Scalars['_Date']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  countryIsoCode?: Maybe<Scalars['String']>;
  maxCost?: Maybe<Scalars['BigDecimal']>;
  type: Scalars['String'];
  subProjectList: _Ec_SubProject;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_RootProjectSubProjectListArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_RootProject_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_RootProject_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_SubProject = _Entity & SubProject & {
  __typename?: '_E_SubProject';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  dateOpen?: Maybe<Scalars['_Date']>;
  dateClose?: Maybe<Scalars['_Date']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  type: Scalars['String'];
  rootProject: RootProject;
  parent?: Maybe<SubProject>;
  aggregateRoot?: Maybe<RootProject>;
  childs: _Ec_SubProject;
  risk: _Ec_Risk;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_SubProjectRootProjectArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SubProjectParentArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SubProjectAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SubProjectChildsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_SubProjectRiskArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_SubProject_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_SubProject_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_SysAdminSettings = _Entity & SysAdminSettings & {
  __typename?: '_E_SysAdminSettings';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  rootSecurity: SysRootSecurity;
  aggregateRoot?: Maybe<SysRootSecurity>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_SysAdminSettingsRootSecurityArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysAdminSettingsAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysAdminSettings_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_SysAdminSettings_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_SysCheckSelect = _Entity & SysCheckSelect & {
  __typename?: '_E_SysCheckSelect';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  conditionValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  orderValue?: Maybe<Scalars['Int']>;
  typeName?: Maybe<Scalars['String']>;
  operation: SysOperation;
  aggregateRoot?: Maybe<SysRootSecurity>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_SysCheckSelectOperationArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysCheckSelectAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysCheckSelect_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_SysCheckSelect_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_SysOperation = _Entity & SysOperation & {
  __typename?: '_E_SysOperation';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  allowEmptyChecks?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  disableJwtVerification?: Maybe<Scalars['Boolean']>;
  hashValue?: Maybe<Scalars['String']>;
  rootSecurity: SysRootSecurity;
  aggregateRoot?: Maybe<SysRootSecurity>;
  checkSelects: _Ec_SysCheckSelect;
  paramAdditions: _Ec_SysParamAddition;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_SysOperationRootSecurityArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysOperationAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysOperationCheckSelectsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_SysOperationParamAdditionsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_SysOperation_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_SysOperation_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_SysParamAddition = _Entity & SysParamAddition & {
  __typename?: '_E_SysParamAddition';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  paramAddition?: Maybe<Scalars['String']>;
  paramName?: Maybe<Scalars['String']>;
  operation: SysOperation;
  aggregateRoot?: Maybe<SysRootSecurity>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_SysParamAdditionOperationArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysParamAdditionAggregateRootArgs = {
  alias?: Maybe<Scalars['String']>;
};


export type _E_SysParamAddition_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_SysParamAddition_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _E_SysRootSecurity = _Entity & SysRootSecurity & {
  __typename?: '_E_SysRootSecurity';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  type: Scalars['String'];
  adminSettings: _Ec_SysAdminSettings;
  operations: _Ec_SysOperation;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _E_SysRootSecurityAdminSettingsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_SysRootSecurityOperationsArgs = {
  elemAlias?: Maybe<Scalars['String']>;
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _E_SysRootSecurity_GetCharArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetStringArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetByteArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetShortArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetIntArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetLongArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetDateArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _E_SysRootSecurity_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Entity = {
  id: Scalars['ID'];
};


export type _Hc_Risk = {
  __typename?: '_HC_Risk';
  elems: Array<_H_Risk>;
  count: Scalars['Int'];
};

export type _H_Risk = {
  __typename?: '_H_Risk';
  cost?: Maybe<Scalars['BigDecimal']>;
  sysCostUpdated?: Maybe<Scalars['Boolean']>;
  probability?: Maybe<Scalars['BigDecimal']>;
  sysProbabilityUpdated?: Maybe<Scalars['Boolean']>;
  sysState?: Maybe<Scalars['Byte']>;
  sysHistNumber?: Maybe<Scalars['Long']>;
  sysHistoryTime?: Maybe<Scalars['_OffsetDateTime']>;
  type: Scalars['String'];
  sysHistoryOwner?: Maybe<Scalars['String']>;
  aggregateRoot?: Maybe<Scalars['String']>;
};

export type _IncBigDecimalValueInput = {
  value: Scalars['BigDecimal'];
};

export type _IncRiskInput = {
  cost?: Maybe<_IncBigDecimalValueInput>;
  probability?: Maybe<_IncBigDecimalValueInput>;
};

export type _IncRootProjectInput = {
  maxCost?: Maybe<_IncBigDecimalValueInput>;
};

export type _MergedEntitiesCollection = {
  __typename?: '_MergedEntitiesCollection';
  elems: Array<_Entity>;
  count: Scalars['Int'];
};

export type _MultiMergedEntitiesCollection = {
  __typename?: '_MultiMergedEntitiesCollection';
  elems: Array<_Entity>;
  count: Scalars['Int'];
  ctx?: Maybe<Scalars['String']>;
};

export type _Mutation = {
  __typename?: '_Mutation';
  packet?: Maybe<_Packet>;
};


export type _MutationPacketArgs = {
  aggregateVersion?: Maybe<Scalars['Long']>;
  idempotencePacketId?: Maybe<Scalars['String']>;
};


export type _Packet = {
  __typename?: '_Packet';
  createRootProject?: Maybe<RootProject>;
  updateRootProject?: Maybe<RootProject>;
  getRootProject?: Maybe<RootProject>;
  deleteRootProject?: Maybe<Scalars['String']>;
  createRisk?: Maybe<Risk>;
  updateRisk?: Maybe<Risk>;
  getRisk?: Maybe<Risk>;
  deleteRisk?: Maybe<Scalars['String']>;
  createSubProject?: Maybe<SubProject>;
  updateSubProject?: Maybe<SubProject>;
  getSubProject?: Maybe<SubProject>;
  deleteSubProject?: Maybe<Scalars['String']>;
  aggregateVersion?: Maybe<Scalars['Long']>;
  isIdempotenceResponse?: Maybe<Scalars['Boolean']>;
};


export type _PacketCreateRootProjectArgs = {
  input: _CreateRootProjectInput;
};


export type _PacketUpdateRootProjectArgs = {
  input: _UpdateRootProjectInput;
  compare?: Maybe<_CompareRootProjectInput>;
  inc?: Maybe<_IncRootProjectInput>;
};


export type _PacketGetRootProjectArgs = {
  id: Scalars['ID'];
};


export type _PacketDeleteRootProjectArgs = {
  id: Scalars['ID'];
  compare?: Maybe<_CompareRootProjectInput>;
};


export type _PacketCreateRiskArgs = {
  input: _CreateRiskInput;
};


export type _PacketUpdateRiskArgs = {
  input: _UpdateRiskInput;
  inc?: Maybe<_IncRiskInput>;
};


export type _PacketGetRiskArgs = {
  id: Scalars['ID'];
};


export type _PacketDeleteRiskArgs = {
  id: Scalars['ID'];
};


export type _PacketCreateSubProjectArgs = {
  input: _CreateSubProjectInput;
};


export type _PacketUpdateSubProjectArgs = {
  input: _UpdateSubProjectInput;
  compare?: Maybe<_CompareSubProjectInput>;
};


export type _PacketGetSubProjectArgs = {
  id: Scalars['ID'];
};


export type _PacketDeleteSubProjectArgs = {
  id: Scalars['ID'];
  compare?: Maybe<_CompareSubProjectInput>;
};

export type _Query = {
  __typename?: '_Query';
  merge: _MergedEntitiesCollection;
  multimerge: _MultiMergedEntitiesCollection;
  resolveReferences: Array<_Reference>;
  searchRiskType: _Ec_RiskType;
  multisearchRiskType: _Ecm_RiskType;
  searchRootProject: _Ec_RootProject;
  multisearchRootProject: _Ecm_RootProject;
  searchSubProject: _Ec_SubProject;
  multisearchSubProject: _Ecm_SubProject;
  searchRisk: _Ec_Risk;
  multisearchRisk: _Ecm_Risk;
  searchRootDictionary: _Ec_RootDictionary;
  multisearchRootDictionary: _Ecm_RootDictionary;
  searchSysRootSecurity: _Ec_SysRootSecurity;
  multisearchSysRootSecurity: _Ecm_SysRootSecurity;
  searchSysAdminSettings: _Ec_SysAdminSettings;
  multisearchSysAdminSettings: _Ecm_SysAdminSettings;
  searchSysOperation: _Ec_SysOperation;
  multisearchSysOperation: _Ecm_SysOperation;
  searchSysCheckSelect: _Ec_SysCheckSelect;
  multisearchSysCheckSelect: _Ecm_SysCheckSelect;
  searchSysParamAddition: _Ec_SysParamAddition;
  multisearchSysParamAddition: _Ecm_SysParamAddition;
  searchRiskHistory: _Ec_RiskHistory;
  multisearchRiskHistory: _Ecm_RiskHistory;
  selectionByRiskType: _Sec_RiskType;
  selectionByRootProject: _Sec_RootProject;
  selectionBySubProject: _Sec_SubProject;
  selectionByRisk: _Sec_Risk;
  selectionByRootDictionary: _Sec_RootDictionary;
  selectionBySysRootSecurity: _Sec_SysRootSecurity;
  selectionBySysAdminSettings: _Sec_SysAdminSettings;
  selectionBySysOperation: _Sec_SysOperation;
  selectionBySysCheckSelect: _Sec_SysCheckSelect;
  selectionBySysParamAddition: _Sec_SysParamAddition;
  selectionByRiskHistory: _Sec_RiskHistory;
  getStateRisk?: Maybe<_S_Risk>;
  getStatesRisk: _Sc_Risk;
  getRiskHistory: _Hc_Risk;
};


export type _QueryMergeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryMultimergeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  ctx?: Maybe<Scalars['String']>;
};


export type _QueryResolveReferencesArgs = {
  referenceType: Scalars['String'];
  ids: Array<Scalars['ID']>;
};


export type _QuerySearchRiskTypeArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryMultisearchRiskTypeArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  ctx?: Maybe<Scalars['String']>;
};


export type _QuerySearchRootProjectArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryMultisearchRootProjectArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  ctx?: Maybe<Scalars['String']>;
};


export type _QuerySearchSubProjectArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryMultisearchSubProjectArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  ctx?: Maybe<Scalars['String']>;
};


export type _QuerySearchRiskArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryMultisearchRiskArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  ctx?: Maybe<Scalars['String']>;
};


export type _QuerySearchRootDictionaryArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryMultisearchRootDictionaryArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  ctx?: Maybe<Scalars['String']>;
};


export type _QuerySearchSysRootSecurityArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryMultisearchSysRootSecurityArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  ctx?: Maybe<Scalars['String']>;
};


export type _QuerySearchSysAdminSettingsArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryMultisearchSysAdminSettingsArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  ctx?: Maybe<Scalars['String']>;
};


export type _QuerySearchSysOperationArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryMultisearchSysOperationArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  ctx?: Maybe<Scalars['String']>;
};


export type _QuerySearchSysCheckSelectArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryMultisearchSysCheckSelectArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  ctx?: Maybe<Scalars['String']>;
};


export type _QuerySearchSysParamAdditionArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryMultisearchSysParamAdditionArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  ctx?: Maybe<Scalars['String']>;
};


export type _QuerySearchRiskHistoryArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
};


export type _QueryMultisearchRiskHistoryArgs = {
  cond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  ctx?: Maybe<Scalars['String']>;
};


export type _QuerySelectionByRiskTypeArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByRootProjectArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionBySubProjectArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByRiskArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByRootDictionaryArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionBySysRootSecurityArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionBySysAdminSettingsArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionBySysOperationArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionBySysCheckSelectArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionBySysParamAdditionArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QuerySelectionByRiskHistoryArgs = {
  cond?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Scalars['String']>>;
  groupCond?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<_SortCriterionSpecification>>;
  distinct?: Maybe<Scalars['Boolean']>;
};


export type _QueryGetStateRiskArgs = {
  id: Scalars['String'];
  date: Scalars['_OffsetDateTime'];
};


export type _QueryGetStatesRiskArgs = {
  id: Scalars['String'];
  timeFrom?: Maybe<Scalars['_OffsetDateTime']>;
  timeTo?: Maybe<Scalars['_OffsetDateTime']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type _QueryGetRiskHistoryArgs = {
  id: Scalars['String'];
  timeFrom?: Maybe<Scalars['_OffsetDateTime']>;
  timeTo?: Maybe<Scalars['_OffsetDateTime']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type _R_Risk = _Reference & {
  __typename?: '_R_Risk';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<Risk>;
};

export type _R_RiskHistory = _Reference & {
  __typename?: '_R_RiskHistory';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<RiskHistory>;
};

export type _R_RiskType = _Reference & {
  __typename?: '_R_RiskType';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<RiskType>;
};

export type _R_RootDictionary = _Reference & {
  __typename?: '_R_RootDictionary';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<RootDictionary>;
};

export type _R_RootProject = _Reference & {
  __typename?: '_R_RootProject';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<RootProject>;
};

export type _R_SubProject = _Reference & {
  __typename?: '_R_SubProject';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<SubProject>;
};

export type _R_SysAdminSettings = _Reference & {
  __typename?: '_R_SysAdminSettings';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<SysAdminSettings>;
};

export type _R_SysCheckSelect = _Reference & {
  __typename?: '_R_SysCheckSelect';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<SysCheckSelect>;
};

export type _R_SysOperation = _Reference & {
  __typename?: '_R_SysOperation';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<SysOperation>;
};

export type _R_SysParamAddition = _Reference & {
  __typename?: '_R_SysParamAddition';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<SysParamAddition>;
};

export type _R_SysRootSecurity = _Reference & {
  __typename?: '_R_SysRootSecurity';
  entityId?: Maybe<Scalars['String']>;
  entity?: Maybe<SysRootSecurity>;
};

export type _Reference = {
  entityId?: Maybe<Scalars['String']>;
};

export type _Sc_Risk = {
  __typename?: '_SC_Risk';
  elems: Array<_Ss_Risk>;
  count: Scalars['Int'];
};

export type _Sec_Risk = {
  __typename?: '_SEC_Risk';
  elems: Array<_Se_Risk>;
  count: Scalars['Int'];
};

export type _Sec_RiskHistory = {
  __typename?: '_SEC_RiskHistory';
  elems: Array<_Se_RiskHistory>;
  count: Scalars['Int'];
};

export type _Sec_RiskType = {
  __typename?: '_SEC_RiskType';
  elems: Array<_Se_RiskType>;
  count: Scalars['Int'];
};

export type _Sec_RootDictionary = {
  __typename?: '_SEC_RootDictionary';
  elems: Array<_Se_RootDictionary>;
  count: Scalars['Int'];
};

export type _Sec_RootProject = {
  __typename?: '_SEC_RootProject';
  elems: Array<_Se_RootProject>;
  count: Scalars['Int'];
};

export type _Sec_SubProject = {
  __typename?: '_SEC_SubProject';
  elems: Array<_Se_SubProject>;
  count: Scalars['Int'];
};

export type _Sec_SysAdminSettings = {
  __typename?: '_SEC_SysAdminSettings';
  elems: Array<_Se_SysAdminSettings>;
  count: Scalars['Int'];
};

export type _Sec_SysCheckSelect = {
  __typename?: '_SEC_SysCheckSelect';
  elems: Array<_Se_SysCheckSelect>;
  count: Scalars['Int'];
};

export type _Sec_SysOperation = {
  __typename?: '_SEC_SysOperation';
  elems: Array<_Se_SysOperation>;
  count: Scalars['Int'];
};

export type _Sec_SysParamAddition = {
  __typename?: '_SEC_SysParamAddition';
  elems: Array<_Se_SysParamAddition>;
  count: Scalars['Int'];
};

export type _Sec_SysRootSecurity = {
  __typename?: '_SEC_SysRootSecurity';
  elems: Array<_Se_SysRootSecurity>;
  count: Scalars['Int'];
};

export type _Se_Risk = {
  __typename?: '_SE_Risk';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  cost?: Maybe<Scalars['BigDecimal']>;
  probability?: Maybe<Scalars['BigDecimal']>;
  realized?: Maybe<Scalars['Boolean']>;
  descr?: Maybe<Scalars['String']>;
  sysHistNumber?: Maybe<Scalars['Long']>;
  sysLastHistVersion?: Maybe<Scalars['Long']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_Risk_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_Risk_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_RiskHistory = {
  __typename?: '_SE_RiskHistory';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  cost?: Maybe<Scalars['BigDecimal']>;
  sysCostUpdated?: Maybe<Scalars['Boolean']>;
  probability?: Maybe<Scalars['BigDecimal']>;
  sysProbabilityUpdated?: Maybe<Scalars['Boolean']>;
  sysState?: Maybe<Scalars['Byte']>;
  sysHistNumber?: Maybe<Scalars['Long']>;
  sysLastHistVersion?: Maybe<Scalars['Long']>;
  sysHistoryTime?: Maybe<Scalars['_OffsetDateTime']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_RiskHistory_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskHistory_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_RiskType = {
  __typename?: '_SE_RiskType';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  name?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_RiskType_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_RiskType_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_RootDictionary = {
  __typename?: '_SE_RootDictionary';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_RootDictionary_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_RootDictionary_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_RootProject = {
  __typename?: '_SE_RootProject';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  dateOpen?: Maybe<Scalars['_Date']>;
  dateClose?: Maybe<Scalars['_Date']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  countryIsoCode?: Maybe<Scalars['String']>;
  maxCost?: Maybe<Scalars['BigDecimal']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_RootProject_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_RootProject_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_SubProject = {
  __typename?: '_SE_SubProject';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  dateOpen?: Maybe<Scalars['_Date']>;
  dateClose?: Maybe<Scalars['_Date']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_SubProject_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_SubProject_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_SysAdminSettings = {
  __typename?: '_SE_SysAdminSettings';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_SysAdminSettings_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_SysAdminSettings_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_SysCheckSelect = {
  __typename?: '_SE_SysCheckSelect';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  conditionValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  orderValue?: Maybe<Scalars['Int']>;
  typeName?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_SysCheckSelect_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_SysCheckSelect_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_SysOperation = {
  __typename?: '_SE_SysOperation';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  allowEmptyChecks?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  disableJwtVerification?: Maybe<Scalars['Boolean']>;
  hashValue?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_SysOperation_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_SysOperation_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_SysParamAddition = {
  __typename?: '_SE_SysParamAddition';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  paramAddition?: Maybe<Scalars['String']>;
  paramName?: Maybe<Scalars['String']>;
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_SysParamAddition_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_SysParamAddition_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Se_SysRootSecurity = {
  __typename?: '_SE_SysRootSecurity';
  id: Scalars['ID'];
  aggVersion: Scalars['Long'];
  chgCnt?: Maybe<Scalars['Long']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']>;
  type: Scalars['String'];
  _getChar?: Maybe<Scalars['Char']>;
  _getString?: Maybe<Scalars['String']>;
  _getByte?: Maybe<Scalars['Byte']>;
  _getShort?: Maybe<Scalars['Short']>;
  _getInt?: Maybe<Scalars['Int']>;
  _getLong?: Maybe<Scalars['Long']>;
  _getFloat?: Maybe<Scalars['_Float4']>;
  _getDouble?: Maybe<Scalars['Float']>;
  _getBigDecimal?: Maybe<Scalars['BigDecimal']>;
  _getDate?: Maybe<Scalars['_Date']>;
  _getDateTime?: Maybe<Scalars['_DateTime']>;
  _getOffsetDateTime?: Maybe<Scalars['_OffsetDateTime']>;
  _getBoolean?: Maybe<Scalars['Boolean']>;
  _getByteArray?: Maybe<Scalars['_ByteArray']>;
};


export type _Se_SysRootSecurity_GetCharArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetStringArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetByteArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetShortArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetIntArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetLongArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetFloatArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetDoubleArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetBigDecimalArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetDateArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetOffsetDateTimeArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetBooleanArgs = {
  expression: Scalars['String'];
};


export type _Se_SysRootSecurity_GetByteArrayArgs = {
  expression: Scalars['String'];
};

export type _Ss_Risk = {
  __typename?: '_SS_Risk';
  cost?: Maybe<Scalars['BigDecimal']>;
  sysCostUpdated?: Maybe<Scalars['Boolean']>;
  probability?: Maybe<Scalars['BigDecimal']>;
  sysProbabilityUpdated?: Maybe<Scalars['Boolean']>;
  sysState?: Maybe<Scalars['Byte']>;
  sysHistNumber?: Maybe<Scalars['Long']>;
  sysHistoryTime?: Maybe<Scalars['_OffsetDateTime']>;
  type: Scalars['String'];
  sysHistoryOwner?: Maybe<Scalars['String']>;
  aggregateRoot?: Maybe<Scalars['String']>;
};

export type _S_Risk = {
  __typename?: '_S_Risk';
  cost?: Maybe<Scalars['BigDecimal']>;
  sysCostUpdated?: Maybe<Scalars['Boolean']>;
  probability?: Maybe<Scalars['BigDecimal']>;
  sysProbabilityUpdated?: Maybe<Scalars['Boolean']>;
  sysHistNumber?: Maybe<Scalars['Long']>;
  type: Scalars['String'];
  sysHistoryOwner?: Maybe<Scalars['String']>;
  aggregateRoot?: Maybe<Scalars['String']>;
};

export type _SortCriterionSpecification = {
  crit: Scalars['String'];
  order?: _SortOrder;
  nullsLast?: Maybe<Scalars['Boolean']>;
};

export enum _SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type _UpdateRiskInput = {
  descr?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['BigDecimal']>;
  riskType?: Maybe<Scalars['ID']>;
  probability?: Maybe<Scalars['BigDecimal']>;
  subProject?: Maybe<Scalars['ID']>;
  realized?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type _UpdateRootProjectInput = {
  dateOpen?: Maybe<Scalars['_Date']>;
  countryIsoCode?: Maybe<Scalars['String']>;
  dateClose?: Maybe<Scalars['_Date']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  maxCost?: Maybe<Scalars['BigDecimal']>;
  id: Scalars['ID'];
};

export type _UpdateSubProjectInput = {
  dateOpen?: Maybe<Scalars['_Date']>;
  parent?: Maybe<Scalars['ID']>;
  dateClose?: Maybe<Scalars['_Date']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  rootProject?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
};

export type RootProjectAttributesFragment = (
  { __typename: '_E_RootProject' }
  & Pick<_E_RootProject, 'id' | 'name' | 'dateOpen' | 'maxCost'>
);

export type SearchRootProjectQueryVariables = Exact<{ [key: string]: never; }>;


export type SearchRootProjectQuery = (
  { __typename?: '_Query' }
  & { searchRootProject: (
    { __typename?: '_EC_RootProject' }
    & { elems: Array<(
      { __typename?: '_E_RootProject' }
      & RootProjectAttributesFragment
    )> }
  ) }
);

export type CreateRootProjectMutationVariables = Exact<{
  input: _CreateRootProjectInput;
}>;


export type CreateRootProjectMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & { createRootProject?: Maybe<(
      { __typename?: '_E_RootProject' }
      & RootProjectAttributesFragment
    )> }
  )> }
);

export type UpdateRootProjectMutationVariables = Exact<{
  input: _UpdateRootProjectInput;
}>;


export type UpdateRootProjectMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & { updateRootProject?: Maybe<(
      { __typename?: '_E_RootProject' }
      & RootProjectAttributesFragment
    )> }
  )> }
);

export type DeleteRootProjectMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteRootProjectMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & Pick<_Packet, 'deleteRootProject'>
  )> }
);

export type SubProjectAttributesFragment = (
  { __typename: '_E_SubProject' }
  & Pick<_E_SubProject, 'id' | 'name' | 'fullName' | 'dateOpen'>
);

export type SearchSubProjectQueryVariables = Exact<{
  cond?: Maybe<Scalars['String']>;
}>;


export type SearchSubProjectQuery = (
  { __typename?: '_Query' }
  & { searchSubProject: (
    { __typename?: '_EC_SubProject' }
    & { elems: Array<(
      { __typename?: '_E_SubProject' }
      & SubProjectAttributesFragment
    )> }
  ) }
);

export type SubProjectTreeAttributesFragment = (
  { __typename?: '_E_SubProject' }
  & { childs: (
    { __typename?: '_EC_SubProject' }
    & Pick<_Ec_SubProject, 'count'>
    & { elems: Array<(
      { __typename?: '_E_SubProject' }
      & { childs: (
        { __typename?: '_EC_SubProject' }
        & Pick<_Ec_SubProject, 'count'>
        & { elems: Array<(
          { __typename?: '_E_SubProject' }
          & { childs: (
            { __typename?: '_EC_SubProject' }
            & Pick<_Ec_SubProject, 'count'>
          ) }
          & SubProjectAttributesFragment
        )> }
      ) }
      & SubProjectAttributesFragment
    )> }
  ) }
  & SubProjectAttributesFragment
);

export type SearchSubProjectTreeQueryVariables = Exact<{
  cond?: Maybe<Scalars['String']>;
}>;


export type SearchSubProjectTreeQuery = (
  { __typename?: '_Query' }
  & { searchSubProject: (
    { __typename?: '_EC_SubProject' }
    & { elems: Array<(
      { __typename?: '_E_SubProject' }
      & SubProjectTreeAttributesFragment
    )> }
  ) }
);

export type CreateSubProjectMutationVariables = Exact<{
  input: _CreateSubProjectInput;
}>;


export type CreateSubProjectMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & { createSubProject?: Maybe<(
      { __typename?: '_E_SubProject' }
      & SubProjectAttributesFragment
    )> }
  )> }
);

export type UpdateSubProjectMutationVariables = Exact<{
  input: _UpdateSubProjectInput;
}>;


export type UpdateSubProjectMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & { updateSubProject?: Maybe<(
      { __typename?: '_E_SubProject' }
      & SubProjectAttributesFragment
    )> }
  )> }
);

export type DeleteSubProjectMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteSubProjectMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & Pick<_Packet, 'deleteSubProject'>
  )> }
);

export type RiskAttributesFragment = (
  { __typename: '_E_Risk' }
  & Pick<_E_Risk, 'id' | 'descr' | 'cost' | 'probability' | 'realized'>
);

export type SearchRiskQueryVariables = Exact<{
  cond?: Maybe<Scalars['String']>;
}>;


export type SearchRiskQuery = (
  { __typename?: '_Query' }
  & { searchRisk: (
    { __typename?: '_EC_Risk' }
    & { elems: Array<(
      { __typename?: '_E_Risk' }
      & RiskAttributesFragment
    )> }
  ) }
);

export type CreateRiskMutationVariables = Exact<{
  input: _CreateRiskInput;
}>;


export type CreateRiskMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & { createRisk?: Maybe<(
      { __typename?: '_E_Risk' }
      & RiskAttributesFragment
    )> }
  )> }
);

export type UpdateRiskMutationVariables = Exact<{
  input: _UpdateRiskInput;
}>;


export type UpdateRiskMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & { updateRisk?: Maybe<(
      { __typename?: '_E_Risk' }
      & RiskAttributesFragment
    )> }
  )> }
);

export type DeleteRiskMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteRiskMutation = (
  { __typename?: '_Mutation' }
  & { packet?: Maybe<(
    { __typename?: '_Packet' }
    & Pick<_Packet, 'deleteRisk'>
  )> }
);

export type GetStatesRiskQueryVariables = Exact<{
  riskId: Scalars['String'];
}>;


export type GetStatesRiskQuery = (
  { __typename?: '_Query' }
  & { getStatesRisk: (
    { __typename?: '_SC_Risk' }
    & { elems: Array<(
      { __typename?: '_SS_Risk' }
      & Pick<_Ss_Risk, 'sysHistoryTime' | 'cost' | 'probability'>
    )> }
  ) }
);

export const RootProjectAttributesFragmentDoc = gql`
    fragment RootProjectAttributes on _E_RootProject {
  id
  __typename
  name
  dateOpen
  maxCost
}
    `;
export const SubProjectAttributesFragmentDoc = gql`
    fragment SubProjectAttributes on _E_SubProject {
  id
  __typename
  name
  fullName
  dateOpen
}
    `;
export const SubProjectTreeAttributesFragmentDoc = gql`
    fragment SubProjectTreeAttributes on _E_SubProject {
  ...SubProjectAttributes
  childs {
    count
    elems {
      ...SubProjectAttributes
      childs {
        count
        elems {
          ...SubProjectAttributes
          childs {
            count
          }
        }
      }
    }
  }
}
    ${SubProjectAttributesFragmentDoc}`;
export const RiskAttributesFragmentDoc = gql`
    fragment RiskAttributes on _E_Risk {
  id
  __typename
  descr
  cost
  probability
  realized
}
    `;
export const SearchRootProjectDocument = gql`
    query searchRootProject {
  searchRootProject {
    elems {
      ...RootProjectAttributes
    }
  }
}
    ${RootProjectAttributesFragmentDoc}`;

/**
 * __useSearchRootProjectQuery__
 *
 * To run a query within a React component, call `useSearchRootProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRootProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRootProjectQuery({
 *   variables: {
 *   },
 * });
 */
export function useSearchRootProjectQuery(baseOptions?: Apollo.QueryHookOptions<SearchRootProjectQuery, SearchRootProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchRootProjectQuery, SearchRootProjectQueryVariables>(SearchRootProjectDocument, options);
      }
export function useSearchRootProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRootProjectQuery, SearchRootProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchRootProjectQuery, SearchRootProjectQueryVariables>(SearchRootProjectDocument, options);
        }
export type SearchRootProjectQueryHookResult = ReturnType<typeof useSearchRootProjectQuery>;
export type SearchRootProjectLazyQueryHookResult = ReturnType<typeof useSearchRootProjectLazyQuery>;
export type SearchRootProjectQueryResult = Apollo.QueryResult<SearchRootProjectQuery, SearchRootProjectQueryVariables>;
export const CreateRootProjectDocument = gql`
    mutation createRootProject($input: _CreateRootProjectInput!) {
  packet {
    createRootProject(input: $input) {
      ...RootProjectAttributes
    }
  }
}
    ${RootProjectAttributesFragmentDoc}`;
export type CreateRootProjectMutationFn = Apollo.MutationFunction<CreateRootProjectMutation, CreateRootProjectMutationVariables>;

/**
 * __useCreateRootProjectMutation__
 *
 * To run a mutation, you first call `useCreateRootProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRootProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRootProjectMutation, { data, loading, error }] = useCreateRootProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRootProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateRootProjectMutation, CreateRootProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRootProjectMutation, CreateRootProjectMutationVariables>(CreateRootProjectDocument, options);
      }
export type CreateRootProjectMutationHookResult = ReturnType<typeof useCreateRootProjectMutation>;
export type CreateRootProjectMutationResult = Apollo.MutationResult<CreateRootProjectMutation>;
export type CreateRootProjectMutationOptions = Apollo.BaseMutationOptions<CreateRootProjectMutation, CreateRootProjectMutationVariables>;
export const UpdateRootProjectDocument = gql`
    mutation updateRootProject($input: _UpdateRootProjectInput!) {
  packet {
    updateRootProject(input: $input) {
      ...RootProjectAttributes
    }
  }
}
    ${RootProjectAttributesFragmentDoc}`;
export type UpdateRootProjectMutationFn = Apollo.MutationFunction<UpdateRootProjectMutation, UpdateRootProjectMutationVariables>;

/**
 * __useUpdateRootProjectMutation__
 *
 * To run a mutation, you first call `useUpdateRootProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRootProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRootProjectMutation, { data, loading, error }] = useUpdateRootProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRootProjectMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRootProjectMutation, UpdateRootProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRootProjectMutation, UpdateRootProjectMutationVariables>(UpdateRootProjectDocument, options);
      }
export type UpdateRootProjectMutationHookResult = ReturnType<typeof useUpdateRootProjectMutation>;
export type UpdateRootProjectMutationResult = Apollo.MutationResult<UpdateRootProjectMutation>;
export type UpdateRootProjectMutationOptions = Apollo.BaseMutationOptions<UpdateRootProjectMutation, UpdateRootProjectMutationVariables>;
export const DeleteRootProjectDocument = gql`
    mutation deleteRootProject($id: ID!) {
  packet {
    deleteRootProject(id: $id)
  }
}
    `;
export type DeleteRootProjectMutationFn = Apollo.MutationFunction<DeleteRootProjectMutation, DeleteRootProjectMutationVariables>;

/**
 * __useDeleteRootProjectMutation__
 *
 * To run a mutation, you first call `useDeleteRootProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRootProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRootProjectMutation, { data, loading, error }] = useDeleteRootProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRootProjectMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRootProjectMutation, DeleteRootProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRootProjectMutation, DeleteRootProjectMutationVariables>(DeleteRootProjectDocument, options);
      }
export type DeleteRootProjectMutationHookResult = ReturnType<typeof useDeleteRootProjectMutation>;
export type DeleteRootProjectMutationResult = Apollo.MutationResult<DeleteRootProjectMutation>;
export type DeleteRootProjectMutationOptions = Apollo.BaseMutationOptions<DeleteRootProjectMutation, DeleteRootProjectMutationVariables>;
export const SearchSubProjectDocument = gql`
    query searchSubProject($cond: String) {
  searchSubProject(cond: $cond) {
    elems {
      ...SubProjectAttributes
    }
  }
}
    ${SubProjectAttributesFragmentDoc}`;

/**
 * __useSearchSubProjectQuery__
 *
 * To run a query within a React component, call `useSearchSubProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchSubProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchSubProjectQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchSubProjectQuery(baseOptions?: Apollo.QueryHookOptions<SearchSubProjectQuery, SearchSubProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchSubProjectQuery, SearchSubProjectQueryVariables>(SearchSubProjectDocument, options);
      }
export function useSearchSubProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchSubProjectQuery, SearchSubProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchSubProjectQuery, SearchSubProjectQueryVariables>(SearchSubProjectDocument, options);
        }
export type SearchSubProjectQueryHookResult = ReturnType<typeof useSearchSubProjectQuery>;
export type SearchSubProjectLazyQueryHookResult = ReturnType<typeof useSearchSubProjectLazyQuery>;
export type SearchSubProjectQueryResult = Apollo.QueryResult<SearchSubProjectQuery, SearchSubProjectQueryVariables>;
export const SearchSubProjectTreeDocument = gql`
    query searchSubProjectTree($cond: String) {
  searchSubProject(cond: $cond) {
    elems {
      ...SubProjectTreeAttributes
    }
  }
}
    ${SubProjectTreeAttributesFragmentDoc}`;

/**
 * __useSearchSubProjectTreeQuery__
 *
 * To run a query within a React component, call `useSearchSubProjectTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchSubProjectTreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchSubProjectTreeQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchSubProjectTreeQuery(baseOptions?: Apollo.QueryHookOptions<SearchSubProjectTreeQuery, SearchSubProjectTreeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchSubProjectTreeQuery, SearchSubProjectTreeQueryVariables>(SearchSubProjectTreeDocument, options);
      }
export function useSearchSubProjectTreeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchSubProjectTreeQuery, SearchSubProjectTreeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchSubProjectTreeQuery, SearchSubProjectTreeQueryVariables>(SearchSubProjectTreeDocument, options);
        }
export type SearchSubProjectTreeQueryHookResult = ReturnType<typeof useSearchSubProjectTreeQuery>;
export type SearchSubProjectTreeLazyQueryHookResult = ReturnType<typeof useSearchSubProjectTreeLazyQuery>;
export type SearchSubProjectTreeQueryResult = Apollo.QueryResult<SearchSubProjectTreeQuery, SearchSubProjectTreeQueryVariables>;
export const CreateSubProjectDocument = gql`
    mutation createSubProject($input: _CreateSubProjectInput!) {
  packet {
    createSubProject(input: $input) {
      ...SubProjectAttributes
    }
  }
}
    ${SubProjectAttributesFragmentDoc}`;
export type CreateSubProjectMutationFn = Apollo.MutationFunction<CreateSubProjectMutation, CreateSubProjectMutationVariables>;

/**
 * __useCreateSubProjectMutation__
 *
 * To run a mutation, you first call `useCreateSubProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubProjectMutation, { data, loading, error }] = useCreateSubProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSubProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubProjectMutation, CreateSubProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSubProjectMutation, CreateSubProjectMutationVariables>(CreateSubProjectDocument, options);
      }
export type CreateSubProjectMutationHookResult = ReturnType<typeof useCreateSubProjectMutation>;
export type CreateSubProjectMutationResult = Apollo.MutationResult<CreateSubProjectMutation>;
export type CreateSubProjectMutationOptions = Apollo.BaseMutationOptions<CreateSubProjectMutation, CreateSubProjectMutationVariables>;
export const UpdateSubProjectDocument = gql`
    mutation updateSubProject($input: _UpdateSubProjectInput!) {
  packet {
    updateSubProject(input: $input) {
      ...SubProjectAttributes
    }
  }
}
    ${SubProjectAttributesFragmentDoc}`;
export type UpdateSubProjectMutationFn = Apollo.MutationFunction<UpdateSubProjectMutation, UpdateSubProjectMutationVariables>;

/**
 * __useUpdateSubProjectMutation__
 *
 * To run a mutation, you first call `useUpdateSubProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubProjectMutation, { data, loading, error }] = useUpdateSubProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSubProjectMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSubProjectMutation, UpdateSubProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSubProjectMutation, UpdateSubProjectMutationVariables>(UpdateSubProjectDocument, options);
      }
export type UpdateSubProjectMutationHookResult = ReturnType<typeof useUpdateSubProjectMutation>;
export type UpdateSubProjectMutationResult = Apollo.MutationResult<UpdateSubProjectMutation>;
export type UpdateSubProjectMutationOptions = Apollo.BaseMutationOptions<UpdateSubProjectMutation, UpdateSubProjectMutationVariables>;
export const DeleteSubProjectDocument = gql`
    mutation deleteSubProject($id: ID!) {
  packet {
    deleteSubProject(id: $id)
  }
}
    `;
export type DeleteSubProjectMutationFn = Apollo.MutationFunction<DeleteSubProjectMutation, DeleteSubProjectMutationVariables>;

/**
 * __useDeleteSubProjectMutation__
 *
 * To run a mutation, you first call `useDeleteSubProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubProjectMutation, { data, loading, error }] = useDeleteSubProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSubProjectMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSubProjectMutation, DeleteSubProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSubProjectMutation, DeleteSubProjectMutationVariables>(DeleteSubProjectDocument, options);
      }
export type DeleteSubProjectMutationHookResult = ReturnType<typeof useDeleteSubProjectMutation>;
export type DeleteSubProjectMutationResult = Apollo.MutationResult<DeleteSubProjectMutation>;
export type DeleteSubProjectMutationOptions = Apollo.BaseMutationOptions<DeleteSubProjectMutation, DeleteSubProjectMutationVariables>;
export const SearchRiskDocument = gql`
    query searchRisk($cond: String) {
  searchRisk(cond: $cond) {
    elems {
      ...RiskAttributes
    }
  }
}
    ${RiskAttributesFragmentDoc}`;

/**
 * __useSearchRiskQuery__
 *
 * To run a query within a React component, call `useSearchRiskQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRiskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRiskQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchRiskQuery(baseOptions?: Apollo.QueryHookOptions<SearchRiskQuery, SearchRiskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchRiskQuery, SearchRiskQueryVariables>(SearchRiskDocument, options);
      }
export function useSearchRiskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRiskQuery, SearchRiskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchRiskQuery, SearchRiskQueryVariables>(SearchRiskDocument, options);
        }
export type SearchRiskQueryHookResult = ReturnType<typeof useSearchRiskQuery>;
export type SearchRiskLazyQueryHookResult = ReturnType<typeof useSearchRiskLazyQuery>;
export type SearchRiskQueryResult = Apollo.QueryResult<SearchRiskQuery, SearchRiskQueryVariables>;
export const CreateRiskDocument = gql`
    mutation createRisk($input: _CreateRiskInput!) {
  packet {
    createRisk(input: $input) {
      ...RiskAttributes
    }
  }
}
    ${RiskAttributesFragmentDoc}`;
export type CreateRiskMutationFn = Apollo.MutationFunction<CreateRiskMutation, CreateRiskMutationVariables>;

/**
 * __useCreateRiskMutation__
 *
 * To run a mutation, you first call `useCreateRiskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRiskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRiskMutation, { data, loading, error }] = useCreateRiskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRiskMutation(baseOptions?: Apollo.MutationHookOptions<CreateRiskMutation, CreateRiskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRiskMutation, CreateRiskMutationVariables>(CreateRiskDocument, options);
      }
export type CreateRiskMutationHookResult = ReturnType<typeof useCreateRiskMutation>;
export type CreateRiskMutationResult = Apollo.MutationResult<CreateRiskMutation>;
export type CreateRiskMutationOptions = Apollo.BaseMutationOptions<CreateRiskMutation, CreateRiskMutationVariables>;
export const UpdateRiskDocument = gql`
    mutation updateRisk($input: _UpdateRiskInput!) {
  packet {
    updateRisk(input: $input) {
      ...RiskAttributes
    }
  }
}
    ${RiskAttributesFragmentDoc}`;
export type UpdateRiskMutationFn = Apollo.MutationFunction<UpdateRiskMutation, UpdateRiskMutationVariables>;

/**
 * __useUpdateRiskMutation__
 *
 * To run a mutation, you first call `useUpdateRiskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRiskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRiskMutation, { data, loading, error }] = useUpdateRiskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRiskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRiskMutation, UpdateRiskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRiskMutation, UpdateRiskMutationVariables>(UpdateRiskDocument, options);
      }
export type UpdateRiskMutationHookResult = ReturnType<typeof useUpdateRiskMutation>;
export type UpdateRiskMutationResult = Apollo.MutationResult<UpdateRiskMutation>;
export type UpdateRiskMutationOptions = Apollo.BaseMutationOptions<UpdateRiskMutation, UpdateRiskMutationVariables>;
export const DeleteRiskDocument = gql`
    mutation deleteRisk($id: ID!) {
  packet {
    deleteRisk(id: $id)
  }
}
    `;
export type DeleteRiskMutationFn = Apollo.MutationFunction<DeleteRiskMutation, DeleteRiskMutationVariables>;

/**
 * __useDeleteRiskMutation__
 *
 * To run a mutation, you first call `useDeleteRiskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRiskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRiskMutation, { data, loading, error }] = useDeleteRiskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRiskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRiskMutation, DeleteRiskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRiskMutation, DeleteRiskMutationVariables>(DeleteRiskDocument, options);
      }
export type DeleteRiskMutationHookResult = ReturnType<typeof useDeleteRiskMutation>;
export type DeleteRiskMutationResult = Apollo.MutationResult<DeleteRiskMutation>;
export type DeleteRiskMutationOptions = Apollo.BaseMutationOptions<DeleteRiskMutation, DeleteRiskMutationVariables>;
export const GetStatesRiskDocument = gql`
    query getStatesRisk($riskId: String!) {
  getStatesRisk(id: $riskId) {
    elems {
      sysHistoryTime
      cost
      probability
    }
  }
}
    `;

/**
 * __useGetStatesRiskQuery__
 *
 * To run a query within a React component, call `useGetStatesRiskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatesRiskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatesRiskQuery({
 *   variables: {
 *      riskId: // value for 'riskId'
 *   },
 * });
 */
export function useGetStatesRiskQuery(baseOptions: Apollo.QueryHookOptions<GetStatesRiskQuery, GetStatesRiskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatesRiskQuery, GetStatesRiskQueryVariables>(GetStatesRiskDocument, options);
      }
export function useGetStatesRiskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatesRiskQuery, GetStatesRiskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatesRiskQuery, GetStatesRiskQueryVariables>(GetStatesRiskDocument, options);
        }
export type GetStatesRiskQueryHookResult = ReturnType<typeof useGetStatesRiskQuery>;
export type GetStatesRiskLazyQueryHookResult = ReturnType<typeof useGetStatesRiskLazyQuery>;
export type GetStatesRiskQueryResult = Apollo.QueryResult<GetStatesRiskQuery, GetStatesRiskQueryVariables>;