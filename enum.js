"use strict";
/*
 * types.ts
 *
 * Copyright (c) 2022, 2023 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/napi-ctp
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemParamIDType = exports.ExchangeSettlementParamIDType = exports.InvestorSettlementParamIDType = exports.MortgageType = exports.ReturnStandardType = exports.ReturnLevelType = exports.ReturnPatternType = exports.ReturnStyleType = exports.BatchStatusType = exports.InstStatusEnterReasonType = exports.InstrumentStatusType = exports.PriceSourceType = exports.SpecPosiType = exports.TradeType = exports.OrderSourceType = exports.TradingRightType = exports.ActionFlagType = exports.ContingentConditionType = exports.VolumeConditionType = exports.TimeConditionType = exports.OrderType = exports.ForceCloseReasonType = exports.OffsetFlagType = exports.OrderPriceType = exports.ClientIDType = exports.BillHedgeFlagType = exports.HedgeFlagType = exports.RatioAttrType = exports.SysSettlementStatusType = exports.PosiDirectionType = exports.PositionType = exports.DirectionType = exports.InstLifePhaseType = exports.APIProductClassType = exports.ProductClassType = exports.TradingRoleType = exports.PositionDateType = exports.OrderSubmitStatusType = exports.OrderStatusType = exports.OrderActionStatusType = exports.BrokerFunctionCodeType = exports.FunctionCodeType = exports.TraderConnectStatusType = exports.ExchangeConnectStatusType = exports.BrokerDataSyncStatusType = exports.DataSyncStatusType = exports.DepartmentRangeType = exports.InvestorRangeType = exports.IdCardType = exports.ExchangePropertyType = void 0;
exports.VirDealStatusType = exports.ParkedOrderStatusType = exports.StatModeType = exports.CloseStyleType = exports.UserEventType = exports.InvestorRiskStatusType = exports.QueryInvestorRangeType = exports.PersonType = exports.HandleTradingAccountAlgoIDType = exports.FindMarginRateAlgoIDType = exports.HandlePositionAlgoIDType = exports.AlgoType = exports.BillGenStatusType = exports.MarginPriceType = exports.UserRightType = exports.SettlementBillType = exports.SettlementStyleType = exports.NoteType = exports.RateType = exports.UserType = exports.SexType = exports.ReasonType = exports.TransferValidFlagType = exports.TransferType = exports.FuturePwdFlagType = exports.AllWithoutTradeType = exports.IncludeCloseProfitType = exports.AlgorithmType = exports.PasswordType = exports.FeeAcceptStyleType = exports.RiskLevelType = exports.BrokerType = exports.InvestorType = exports.SettlementStatusType = exports.SystemStatusType = exports.PublishStatusType = exports.FundStatusType = exports.FundDirectionType = exports.FundType = exports.FundIOType = exports.DeliveryModeType = exports.ProductLifePhaseType = exports.BasisPriceType = exports.SpecialCreateRuleType = exports.TransferDirectionType = exports.FileUploadStatusType = exports.FileFormatType = exports.FileType = exports.FileIDType = exports.TradeParamIDType = void 0;
exports.DBOperationType = exports.FBTUserEventType = exports.ReqRspType = exports.SponsorType = exports.TransferStatusType = exports.SecuAccType = exports.PwdFlagType = exports.LinkStatusType = exports.CommApiType = exports.CCBFeeModeType = exports.OrganStatusType = exports.FutureAccType = exports.BankAccType = exports.SyncModeType = exports.ConnectModeType = exports.ProtocalIDType = exports.OrganLevelType = exports.OrganType = exports.AvailabilityFlagType = exports.OpenOrDestroyType = exports.FBTTransferDirectionType = exports.CustType = exports.ProcessStatusType = exports.TxnEndFlagType = exports.SystemType = exports.ManageStatusType = exports.MoneyAccountStatusType = exports.BankAccStatusType = exports.LastFragmentType = exports.InstitutionType = exports.BrokerRepealFlagType = exports.BankRepealFlagType = exports.FBTEncryModeType = exports.FBTPassWordType = exports.PassWordKeyType = exports.FeePayFlagType = exports.GenderType = exports.BanlanceType = exports.YesNoIndicatorType = exports.CashExchangeCodeType = exports.FileBusinessCodeType = exports.CertificationType = exports.CFMMCKeyKindType = exports.AMLGenStatusType = exports.VirementTradeCodeType = exports.VirementAvailAbilityType = exports.VirementStatusType = exports.VirBankAccType = exports.VirTradeStatusType = exports.OrgSystemIDType = void 0;
exports.TradeSourceType = exports.SyncDataStatusType = exports.RateInvestorRangeType = exports.ExprSetModeType = exports.TradeSumStatModeType = exports.ByGroupType = exports.UserRangeType = exports.CodeSourceType = exports.AccountSourceType = exports.FundEventType = exports.FutureType = exports.BrokerUserType = exports.OTPStatusType = exports.OTPType = exports.FBTTradeCodeEnumType = exports.MonthBillTradeSumType = exports.BankAcountOriginType = exports.UsedStatusType = exports.CheckStatusType = exports.CheckLevelType = exports.FlowIDType = exports.UOAAutoSendType = exports.EventModeType = exports.SendMethodType = exports.ApplyStatusIDType = exports.ApplyOperateIDType = exports.UpdateFlagType = exports.ExClientIDType = exports.ExchangeIDType = exports.ClientType = exports.CfmmcReturnCodeType = exports.BusinessType = exports.QuestionType = exports.ClientIDStatusType = exports.SendType = exports.ConditionalOrderSortType = exports.RiskUserEventType = exports.RiskNotifyStatusType = exports.RiskNotifyMethodType = exports.ForceCloseType = exports.NotifyClassType = exports.FBEReqFlagType = exports.FBEUserEventType = exports.FBEAlreadyTradeType = exports.FBEFileFlagType = exports.FBEExchStatusType = exports.FBEResultFlagType = exports.ExDirectionType = exports.SyncType = exports.SyncFlagType = void 0;
exports.HasTrusteeType = exports.PromptType = exports.LoginModeType = exports.TemplateType = exports.StartModeType = exports.HasBoardType = exports.ClientRegionType = exports.ExStatusType = exports.ResFlagType = exports.ReqFlagType = exports.CurrencySwapStatusType = exports.CurrExDirectionType = exports.SwapSourceType = exports.BusinessClassType = exports.FundMortDirectionType = exports.AccountSettlementParamIDType = exports.FundMortgageType = exports.SpecProductType = exports.MortgageFundUseRangeType = exports.CloseDealType = exports.CTPType = exports.SettArchiveStatusType = exports.SaveStatusType = exports.ReportStatusType = exports.InitSettlementType = exports.BackUpStatusType = exports.MarginRateType = exports.ActiveType = exports.MarginType = exports.DataResourceType = exports.LimitUseType = exports.SettleManagerGroupType = exports.SettleManagerLevelType = exports.SettleManagerType = exports.ExportFileType = exports.AmlCheckLevelType = exports.AmlDateType = exports.AMLCheckStatusType = exports.DataStatusType = exports.RightParamType = exports.StandardStatusType = exports.FreezeStatusType = exports.CSRCDataQueyType = exports.SysOperType = exports.SysOperModeType = exports.FileGenStyleType = exports.FileStatusType = exports.PropertyInvestorRangeType = exports.ByInvestorRangeType = exports.FlexStatModeType = void 0;
exports.ClassType = exports.AuthType = exports.MatchType = exports.OTCTradeType = exports.ResponseValueType = exports.AppType = exports.BizType = exports.OptSelfCloseFlagType = exports.WeakPasswordSourceType = exports.ReserveOpenAccStasType = exports.StrikeOffsetType = exports.CombDirectionType = exports.CFFEXUploadFileNameType = exports.SHFEUploadFileNameType = exports.DCEUploadFileNameType = exports.CZCEUploadFileNameType = exports.ProductType = exports.ExecOrderCloseFlagType = exports.ExecOrderPositionFlagType = exports.ValueMethodType = exports.ForQuoteStatusType = exports.ActionType = exports.BalanceAlgorithmType = exports.OptionRoyaltyPriceType = exports.DceCombinationType = exports.CombinationType = exports.ExecResultType = exports.GiveUpDataSourceType = exports.ApplyType = exports.StrikeType = exports.StrikeModeType = exports.OptionsType = exports.FundMortDirectionEnType = exports.FundDirectionEnType = exports.FundTypeEnType = exports.FundIOTypeEnType = exports.HedgeFlagEnType = exports.OffsetFlagEnType = exports.DirectionEnType = exports.UOAAssetmgrType = exports.DAClientType = exports.MaxMarginSideAlgorithmType = exports.DeliveryType = exports.CheckInstrType = exports.AssetmgrType = exports.AssetmgrClientType = exports.LanguageType = exports.CusAccountType = exports.CSRCFundIOType = exports.AmType = void 0;
exports.EnumBoolType = exports.OrderFreqControlLevelType = exports.OpenLimitControlLevelType = exports.OrderCancelAlgType = exports.ActionDirectionType = exports.SyncDeltaStatusType = exports.ProductStatusType = exports.TradingType = void 0;
/** 交易所属性类型 */
var ExchangePropertyType;
(function (ExchangePropertyType) {
    /** 正常 */
    ExchangePropertyType["Normal"] = "0";
    /** 根据成交生成报单 */
    ExchangePropertyType["GenOrderByTrade"] = "1";
})(ExchangePropertyType || (exports.ExchangePropertyType = ExchangePropertyType = {}));
/** 证件类型类型 */
var IdCardType;
(function (IdCardType) {
    /** 组织机构代码 */
    IdCardType["EID"] = "0";
    /** 中国公民身份证 */
    IdCardType["IDCard"] = "1";
    /** 军官证 */
    IdCardType["OfficerIDCard"] = "2";
    /** 警官证 */
    IdCardType["PoliceIDCard"] = "3";
    /** 士兵证 */
    IdCardType["SoldierIDCard"] = "4";
    /** 户口簿 */
    IdCardType["HouseholdRegister"] = "5";
    /** 护照 */
    IdCardType["Passport"] = "6";
    /** 台胞证 */
    IdCardType["TaiwanCompatriotIDCard"] = "7";
    /** 回乡证 */
    IdCardType["HomeComingCard"] = "8";
    /** 营业执照号 */
    IdCardType["LicenseNo"] = "9";
    /** 税务登记号/当地纳税ID */
    IdCardType["TaxNo"] = "A";
    /** 港澳居民来往内地通行证 */
    IdCardType["HMMainlandTravelPermit"] = "B";
    /** 台湾居民来往大陆通行证 */
    IdCardType["TwMainlandTravelPermit"] = "C";
    /** 驾照 */
    IdCardType["DrivingLicense"] = "D";
    /** 当地社保ID */
    IdCardType["SocialID"] = "F";
    /** 当地身份证 */
    IdCardType["LocalID"] = "G";
    /** 商业登记证 */
    IdCardType["BusinessRegistration"] = "H";
    /** 港澳永久性居民身份证 */
    IdCardType["HKMCIDCard"] = "I";
    /** 人行开户许可证 */
    IdCardType["AccountsPermits"] = "J";
    /** 外国人永久居留证 */
    IdCardType["FrgPrmtRdCard"] = "K";
    /** 资管产品备案函 */
    IdCardType["CptMngPrdLetter"] = "L";
    /** 港澳台居民居住证 */
    IdCardType["HKMCTwResidencePermit"] = "M";
    /** 统一社会信用代码 */
    IdCardType["UniformSocialCreditCode"] = "N";
    /** 机构成立证明文件 */
    IdCardType["CorporationCertNo"] = "O";
    /** 其他证件 */
    IdCardType["OtherCard"] = "x";
})(IdCardType || (exports.IdCardType = IdCardType = {}));
/** 投资者范围类型 */
var InvestorRangeType;
(function (InvestorRangeType) {
    /** 所有 */
    InvestorRangeType["All"] = "1";
    /** 投资者组 */
    InvestorRangeType["Group"] = "2";
    /** 单一投资者 */
    InvestorRangeType["Single"] = "3";
})(InvestorRangeType || (exports.InvestorRangeType = InvestorRangeType = {}));
/** 投资者范围类型 */
var DepartmentRangeType;
(function (DepartmentRangeType) {
    /** 所有 */
    DepartmentRangeType["All"] = "1";
    /** 组织架构 */
    DepartmentRangeType["Group"] = "2";
    /** 单一投资者 */
    DepartmentRangeType["Single"] = "3";
})(DepartmentRangeType || (exports.DepartmentRangeType = DepartmentRangeType = {}));
/** 数据同步状态类型 */
var DataSyncStatusType;
(function (DataSyncStatusType) {
    /** 未同步 */
    DataSyncStatusType["Asynchronous"] = "1";
    /** 同步中 */
    DataSyncStatusType["Synchronizing"] = "2";
    /** 已同步 */
    DataSyncStatusType["Synchronized"] = "3";
})(DataSyncStatusType || (exports.DataSyncStatusType = DataSyncStatusType = {}));
/** 经纪公司数据同步状态类型 */
var BrokerDataSyncStatusType;
(function (BrokerDataSyncStatusType) {
    /** 已同步 */
    BrokerDataSyncStatusType["Synchronized"] = "1";
    /** 同步中 */
    BrokerDataSyncStatusType["Synchronizing"] = "2";
})(BrokerDataSyncStatusType || (exports.BrokerDataSyncStatusType = BrokerDataSyncStatusType = {}));
/** 交易所连接状态类型 */
var ExchangeConnectStatusType;
(function (ExchangeConnectStatusType) {
    /** 没有任何连接 */
    ExchangeConnectStatusType["NoConnection"] = "1";
    /** 已经发出合约查询请求 */
    ExchangeConnectStatusType["QryInstrumentSent"] = "2";
    /** 已经获取信息 */
    ExchangeConnectStatusType["GotInformation"] = "9";
})(ExchangeConnectStatusType || (exports.ExchangeConnectStatusType = ExchangeConnectStatusType = {}));
/** 交易所交易员连接状态类型 */
var TraderConnectStatusType;
(function (TraderConnectStatusType) {
    /** 没有任何连接 */
    TraderConnectStatusType["NotConnected"] = "1";
    /** 已经连接 */
    TraderConnectStatusType["Connected"] = "2";
    /** 已经发出合约查询请求 */
    TraderConnectStatusType["QryInstrumentSent"] = "3";
    /** 订阅私有流 */
    TraderConnectStatusType["SubPrivateFlow"] = "4";
})(TraderConnectStatusType || (exports.TraderConnectStatusType = TraderConnectStatusType = {}));
/** 功能代码类型 */
var FunctionCodeType;
(function (FunctionCodeType) {
    /** 数据异步化 */
    FunctionCodeType["DataAsync"] = "1";
    /** 强制用户登出 */
    FunctionCodeType["ForceUserLogout"] = "2";
    /** 变更管理用户口令 */
    FunctionCodeType["UserPasswordUpdate"] = "3";
    /** 变更经纪公司口令 */
    FunctionCodeType["BrokerPasswordUpdate"] = "4";
    /** 变更投资者口令 */
    FunctionCodeType["InvestorPasswordUpdate"] = "5";
    /** 报单插入 */
    FunctionCodeType["OrderInsert"] = "6";
    /** 报单操作 */
    FunctionCodeType["OrderAction"] = "7";
    /** 同步系统数据 */
    FunctionCodeType["SyncSystemData"] = "8";
    /** 同步经纪公司数据 */
    FunctionCodeType["SyncBrokerData"] = "9";
    /** 批量同步经纪公司数据 */
    FunctionCodeType["BachSyncBrokerData"] = "A";
    /** 超级查询 */
    FunctionCodeType["SuperQuery"] = "B";
    /** 预埋报单插入 */
    FunctionCodeType["ParkedOrderInsert"] = "C";
    /** 预埋报单操作 */
    FunctionCodeType["ParkedOrderAction"] = "D";
    /** 同步动态令牌 */
    FunctionCodeType["SyncOTP"] = "E";
    /** 删除未知单 */
    FunctionCodeType["DeleteOrder"] = "F";
})(FunctionCodeType || (exports.FunctionCodeType = FunctionCodeType = {}));
/** 经纪公司功能代码类型 */
var BrokerFunctionCodeType;
(function (BrokerFunctionCodeType) {
    /** 强制用户登出 */
    BrokerFunctionCodeType["ForceUserLogout"] = "1";
    /** 变更用户口令 */
    BrokerFunctionCodeType["UserPasswordUpdate"] = "2";
    /** 同步经纪公司数据 */
    BrokerFunctionCodeType["SyncBrokerData"] = "3";
    /** 批量同步经纪公司数据 */
    BrokerFunctionCodeType["BachSyncBrokerData"] = "4";
    /** 报单插入 */
    BrokerFunctionCodeType["OrderInsert"] = "5";
    /** 报单操作 */
    BrokerFunctionCodeType["OrderAction"] = "6";
    /** 全部查询 */
    BrokerFunctionCodeType["AllQuery"] = "7";
    /** 系统功能：登入/登出/修改密码等 */
    BrokerFunctionCodeType["log"] = "a";
    /** 基本查询：查询基础数据，如合约，交易所等常量 */
    BrokerFunctionCodeType["BaseQry"] = "b";
    /** 交易查询：如查成交，委托 */
    BrokerFunctionCodeType["TradeQry"] = "c";
    /** 交易功能：报单，撤单 */
    BrokerFunctionCodeType["Trade"] = "d";
    /** 银期转账 */
    BrokerFunctionCodeType["Virement"] = "e";
    /** 风险监控 */
    BrokerFunctionCodeType["Risk"] = "f";
    /** 查询/管理：查询会话，踢人等 */
    BrokerFunctionCodeType["Session"] = "g";
    /** 风控通知控制 */
    BrokerFunctionCodeType["RiskNoticeCtl"] = "h";
    /** 风控通知发送 */
    BrokerFunctionCodeType["RiskNotice"] = "i";
    /** 察看经纪公司资金权限 */
    BrokerFunctionCodeType["BrokerDeposit"] = "j";
    /** 资金查询 */
    BrokerFunctionCodeType["QueryFund"] = "k";
    /** 报单查询 */
    BrokerFunctionCodeType["QueryOrder"] = "l";
    /** 成交查询 */
    BrokerFunctionCodeType["QueryTrade"] = "m";
    /** 持仓查询 */
    BrokerFunctionCodeType["QueryPosition"] = "n";
    /** 行情查询 */
    BrokerFunctionCodeType["QueryMarketData"] = "o";
    /** 用户事件查询 */
    BrokerFunctionCodeType["QueryUserEvent"] = "p";
    /** 风险通知查询 */
    BrokerFunctionCodeType["QueryRiskNotify"] = "q";
    /** 出入金查询 */
    BrokerFunctionCodeType["QueryFundChange"] = "r";
    /** 投资者信息查询 */
    BrokerFunctionCodeType["QueryInvestor"] = "s";
    /** 交易编码查询 */
    BrokerFunctionCodeType["QueryTradingCode"] = "t";
    /** 强平 */
    BrokerFunctionCodeType["ForceClose"] = "u";
    /** 压力测试 */
    BrokerFunctionCodeType["PressTest"] = "v";
    /** 权益反算 */
    BrokerFunctionCodeType["RemainCalc"] = "w";
    /** 净持仓保证金指标 */
    BrokerFunctionCodeType["NetPositionInd"] = "x";
    /** 风险预算 */
    BrokerFunctionCodeType["RiskPredict"] = "y";
    /** 数据导出 */
    BrokerFunctionCodeType["DataExport"] = "z";
    /** 风控指标设置 */
    BrokerFunctionCodeType["RiskTargetSetup"] = "A";
    /** 行情预警 */
    BrokerFunctionCodeType["MarketDataWarn"] = "B";
    /** 业务通知查询 */
    BrokerFunctionCodeType["QryBizNotice"] = "C";
    /** 业务通知模板设置 */
    BrokerFunctionCodeType["CfgBizNotice"] = "D";
    /** 同步动态令牌 */
    BrokerFunctionCodeType["SyncOTP"] = "E";
    /** 发送业务通知 */
    BrokerFunctionCodeType["SendBizNotice"] = "F";
    /** 风险级别标准设置 */
    BrokerFunctionCodeType["CfgRiskLevelStd"] = "G";
    /** 交易终端应急功能 */
    BrokerFunctionCodeType["TbCommand"] = "H";
    /** 删除未知单 */
    BrokerFunctionCodeType["DeleteOrder"] = "J";
    /** 预埋报单插入 */
    BrokerFunctionCodeType["ParkedOrderInsert"] = "K";
    /** 预埋报单操作 */
    BrokerFunctionCodeType["ParkedOrderAction"] = "L";
    /** 资金不够仍允许行权 */
    BrokerFunctionCodeType["ExecOrderNoCheck"] = "M";
    /** 指定 */
    BrokerFunctionCodeType["Designate"] = "N";
    /** 证券处置 */
    BrokerFunctionCodeType["StockDisposal"] = "O";
    /** 席位资金预警 */
    BrokerFunctionCodeType["BrokerDepositWarn"] = "Q";
    /** 备兑不足预警 */
    BrokerFunctionCodeType["CoverWarn"] = "S";
    /** 行权试算 */
    BrokerFunctionCodeType["PreExecOrder"] = "T";
    /** 行权交收风险 */
    BrokerFunctionCodeType["ExecOrderRisk"] = "P";
    /** 持仓限额预警 */
    BrokerFunctionCodeType["PosiLimitWarn"] = "U";
    /** 持仓限额查询 */
    BrokerFunctionCodeType["QryPosiLimit"] = "V";
    /** 银期签到签退 */
    BrokerFunctionCodeType["FBSign"] = "W";
    /** 银期签约解约 */
    BrokerFunctionCodeType["FBAccount"] = "X";
})(BrokerFunctionCodeType || (exports.BrokerFunctionCodeType = BrokerFunctionCodeType = {}));
/** 报单操作状态类型 */
var OrderActionStatusType;
(function (OrderActionStatusType) {
    /** 已经提交 */
    OrderActionStatusType["Submitted"] = "a";
    /** 已经接受 */
    OrderActionStatusType["Accepted"] = "b";
    /** 已经被拒绝 */
    OrderActionStatusType["Rejected"] = "c";
})(OrderActionStatusType || (exports.OrderActionStatusType = OrderActionStatusType = {}));
/** 报单状态类型 */
var OrderStatusType;
(function (OrderStatusType) {
    /** 全部成交 */
    OrderStatusType["AllTraded"] = "0";
    /** 部分成交还在队列中 */
    OrderStatusType["PartTradedQueueing"] = "1";
    /** 部分成交不在队列中 */
    OrderStatusType["PartTradedNotQueueing"] = "2";
    /** 未成交还在队列中 */
    OrderStatusType["NoTradeQueueing"] = "3";
    /** 未成交不在队列中 */
    OrderStatusType["NoTradeNotQueueing"] = "4";
    /** 撤单 */
    OrderStatusType["Canceled"] = "5";
    /** 未知 */
    OrderStatusType["Unknown"] = "a";
    /** 尚未触发 */
    OrderStatusType["NotTouched"] = "b";
    /** 已触发 */
    OrderStatusType["Touched"] = "c";
})(OrderStatusType || (exports.OrderStatusType = OrderStatusType = {}));
/** 报单提交状态类型 */
var OrderSubmitStatusType;
(function (OrderSubmitStatusType) {
    /** 已经提交 */
    OrderSubmitStatusType["InsertSubmitted"] = "0";
    /** 撤单已经提交 */
    OrderSubmitStatusType["CancelSubmitted"] = "1";
    /** 修改已经提交 */
    OrderSubmitStatusType["ModifySubmitted"] = "2";
    /** 已经接受 */
    OrderSubmitStatusType["Accepted"] = "3";
    /** 报单已经被拒绝 */
    OrderSubmitStatusType["InsertRejected"] = "4";
    /** 撤单已经被拒绝 */
    OrderSubmitStatusType["CancelRejected"] = "5";
    /** 改单已经被拒绝 */
    OrderSubmitStatusType["ModifyRejected"] = "6";
})(OrderSubmitStatusType || (exports.OrderSubmitStatusType = OrderSubmitStatusType = {}));
/** 持仓日期类型 */
var PositionDateType;
(function (PositionDateType) {
    /** 今日持仓 */
    PositionDateType["Today"] = "1";
    /** 历史持仓 */
    PositionDateType["History"] = "2";
})(PositionDateType || (exports.PositionDateType = PositionDateType = {}));
/** 持仓日期类型类型 */
(function (PositionDateType) {
    /** 使用历史持仓 */
    PositionDateType["UseHistory"] = "1";
    /** 不使用历史持仓 */
    PositionDateType["NoUseHistory"] = "2";
})(PositionDateType || (exports.PositionDateType = PositionDateType = {}));
/** 交易角色类型 */
var TradingRoleType;
(function (TradingRoleType) {
    /** 代理 */
    TradingRoleType["Broker"] = "1";
    /** 自营 */
    TradingRoleType["Host"] = "2";
    /** 做市商 */
    TradingRoleType["Maker"] = "3";
})(TradingRoleType || (exports.TradingRoleType = TradingRoleType = {}));
/** 产品类型类型 */
var ProductClassType;
(function (ProductClassType) {
    /** 期货 */
    ProductClassType["Futures"] = "1";
    /** 期货期权 */
    ProductClassType["Options"] = "2";
    /** 组合 */
    ProductClassType["Combination"] = "3";
    /** 即期 */
    ProductClassType["Spot"] = "4";
    /** 期转现 */
    ProductClassType["EFP"] = "5";
    /** 现货期权 */
    ProductClassType["SpotOption"] = "6";
    /** TAS合约 */
    ProductClassType["TAS"] = "7";
    /** 金属指数 */
    ProductClassType["MI"] = "I";
})(ProductClassType || (exports.ProductClassType = ProductClassType = {}));
/** 产品类型类型 */
var APIProductClassType;
(function (APIProductClassType) {
    /** 期货单一合约 */
    APIProductClassType["FutureSingle"] = "1";
    /** 期权单一合约 */
    APIProductClassType["OptionSingle"] = "2";
    /** 可交易期货(含期货组合和期货单一合约) */
    APIProductClassType["Futures"] = "3";
    /** 可交易期权(含期权组合和期权单一合约) */
    APIProductClassType["Options"] = "4";
    /** 可下单组合（目前包含DCE和ZCE的期货组合） */
    APIProductClassType["TradingComb"] = "5";
    /** 可申请的组合（dce可以申请的组合合约 包含dce可以交易的合约） */
    APIProductClassType["UnTradingComb"] = "6";
    /** 所有可以交易合约 */
    APIProductClassType["AllTrading"] = "7";
    /** 所有合约（包含不能交易合约 慎用） */
    APIProductClassType["All"] = "8";
})(APIProductClassType || (exports.APIProductClassType = APIProductClassType = {}));
/** 合约生命周期状态类型 */
var InstLifePhaseType;
(function (InstLifePhaseType) {
    /** 未上市 */
    InstLifePhaseType["NotStart"] = "0";
    /** 上市 */
    InstLifePhaseType["Started"] = "1";
    /** 停牌 */
    InstLifePhaseType["Pause"] = "2";
    /** 到期 */
    InstLifePhaseType["Expired"] = "3";
})(InstLifePhaseType || (exports.InstLifePhaseType = InstLifePhaseType = {}));
/** 买卖方向类型 */
var DirectionType;
(function (DirectionType) {
    /** 买 */
    DirectionType["Buy"] = "0";
    /** 卖 */
    DirectionType["Sell"] = "1";
})(DirectionType || (exports.DirectionType = DirectionType = {}));
/** 持仓类型类型 */
var PositionType;
(function (PositionType) {
    /** 净持仓 */
    PositionType["Net"] = "1";
    /** 综合持仓 */
    PositionType["Gross"] = "2";
})(PositionType || (exports.PositionType = PositionType = {}));
/** 持仓多空方向类型 */
var PosiDirectionType;
(function (PosiDirectionType) {
    /** 净 */
    PosiDirectionType["Net"] = "1";
    /** 多头 */
    PosiDirectionType["Long"] = "2";
    /** 空头 */
    PosiDirectionType["Short"] = "3";
})(PosiDirectionType || (exports.PosiDirectionType = PosiDirectionType = {}));
/** 系统结算状态类型 */
var SysSettlementStatusType;
(function (SysSettlementStatusType) {
    /** 不活跃 */
    SysSettlementStatusType["NonActive"] = "1";
    /** 启动 */
    SysSettlementStatusType["Startup"] = "2";
    /** 操作 */
    SysSettlementStatusType["Operating"] = "3";
    /** 结算 */
    SysSettlementStatusType["Settlement"] = "4";
    /** 结算完成 */
    SysSettlementStatusType["SettlementFinished"] = "5";
})(SysSettlementStatusType || (exports.SysSettlementStatusType = SysSettlementStatusType = {}));
/** 费率属性类型 */
var RatioAttrType;
(function (RatioAttrType) {
    /** 交易费率 */
    RatioAttrType["Trade"] = "0";
    /** 结算费率 */
    RatioAttrType["Settlement"] = "1";
})(RatioAttrType || (exports.RatioAttrType = RatioAttrType = {}));
/** 投机套保标志类型 */
var HedgeFlagType;
(function (HedgeFlagType) {
    /** 投机 */
    HedgeFlagType["Speculation"] = "1";
    /** 套利 */
    HedgeFlagType["Arbitrage"] = "2";
    /** 套保 */
    HedgeFlagType["Hedge"] = "3";
    /** 做市商 */
    HedgeFlagType["MarketMaker"] = "5";
    /** 第一腿投机第二腿套保 大商所专用 */
    HedgeFlagType["SpecHedge"] = "6";
    /** 第一腿套保第二腿投机  大商所专用 */
    HedgeFlagType["HedgeSpec"] = "7";
})(HedgeFlagType || (exports.HedgeFlagType = HedgeFlagType = {}));
/** 投机套保标志类型 */
var BillHedgeFlagType;
(function (BillHedgeFlagType) {
    /** 投机 */
    BillHedgeFlagType["Speculation"] = "1";
    /** 套利 */
    BillHedgeFlagType["Arbitrage"] = "2";
    /** 套保 */
    BillHedgeFlagType["Hedge"] = "3";
})(BillHedgeFlagType || (exports.BillHedgeFlagType = BillHedgeFlagType = {}));
/** 交易编码类型类型 */
var ClientIDType;
(function (ClientIDType) {
    /** 投机 */
    ClientIDType["Speculation"] = "1";
    /** 套利 */
    ClientIDType["Arbitrage"] = "2";
    /** 套保 */
    ClientIDType["Hedge"] = "3";
    /** 做市商 */
    ClientIDType["MarketMaker"] = "5";
})(ClientIDType || (exports.ClientIDType = ClientIDType = {}));
/** 报单价格条件类型 */
var OrderPriceType;
(function (OrderPriceType) {
    /** 任意价 */
    OrderPriceType["AnyPrice"] = "1";
    /** 限价 */
    OrderPriceType["LimitPrice"] = "2";
    /** 最优价 */
    OrderPriceType["BestPrice"] = "3";
    /** 最新价 */
    OrderPriceType["LastPrice"] = "4";
    /** 最新价浮动上浮1个ticks */
    OrderPriceType["LastPricePlusOneTicks"] = "5";
    /** 最新价浮动上浮2个ticks */
    OrderPriceType["LastPricePlusTwoTicks"] = "6";
    /** 最新价浮动上浮3个ticks */
    OrderPriceType["LastPricePlusThreeTicks"] = "7";
    /** 卖一价 */
    OrderPriceType["AskPrice1"] = "8";
    /** 卖一价浮动上浮1个ticks */
    OrderPriceType["AskPrice1PlusOneTicks"] = "9";
    /** 卖一价浮动上浮2个ticks */
    OrderPriceType["AskPrice1PlusTwoTicks"] = "A";
    /** 卖一价浮动上浮3个ticks */
    OrderPriceType["AskPrice1PlusThreeTicks"] = "B";
    /** 买一价 */
    OrderPriceType["BidPrice1"] = "C";
    /** 买一价浮动上浮1个ticks */
    OrderPriceType["BidPrice1PlusOneTicks"] = "D";
    /** 买一价浮动上浮2个ticks */
    OrderPriceType["BidPrice1PlusTwoTicks"] = "E";
    /** 买一价浮动上浮3个ticks */
    OrderPriceType["BidPrice1PlusThreeTicks"] = "F";
    /** 五档价 */
    OrderPriceType["FiveLevelPrice"] = "G";
})(OrderPriceType || (exports.OrderPriceType = OrderPriceType = {}));
/** 开平标志类型 */
var OffsetFlagType;
(function (OffsetFlagType) {
    /** 开仓 */
    OffsetFlagType["Open"] = "0";
    /** 平仓 */
    OffsetFlagType["Close"] = "1";
    /** 强平 */
    OffsetFlagType["ForceClose"] = "2";
    /** 平今 */
    OffsetFlagType["CloseToday"] = "3";
    /** 平昨 */
    OffsetFlagType["CloseYesterday"] = "4";
    /** 强减 */
    OffsetFlagType["ForceOff"] = "5";
    /** 本地强平 */
    OffsetFlagType["LocalForceClose"] = "6";
})(OffsetFlagType || (exports.OffsetFlagType = OffsetFlagType = {}));
/** 强平原因类型 */
var ForceCloseReasonType;
(function (ForceCloseReasonType) {
    /** 非强平 */
    ForceCloseReasonType["NotForceClose"] = "0";
    /** 资金不足 */
    ForceCloseReasonType["LackDeposit"] = "1";
    /** 客户超仓 */
    ForceCloseReasonType["ClientOverPositionLimit"] = "2";
    /** 会员超仓 */
    ForceCloseReasonType["MemberOverPositionLimit"] = "3";
    /** 持仓非整数倍 */
    ForceCloseReasonType["NotMultiple"] = "4";
    /** 违规 */
    ForceCloseReasonType["Violation"] = "5";
    /** 其它 */
    ForceCloseReasonType["Other"] = "6";
    /** 自然人临近交割 */
    ForceCloseReasonType["PersonDeliv"] = "7";
    /** 风控强平不验证资金 */
    ForceCloseReasonType["Notverifycapital"] = "8";
})(ForceCloseReasonType || (exports.ForceCloseReasonType = ForceCloseReasonType = {}));
/** 报单类型类型 */
var OrderType;
(function (OrderType) {
    /** 正常 */
    OrderType["Normal"] = "0";
    /** 报价衍生 */
    OrderType["DeriveFromQuote"] = "1";
    /** 组合衍生 */
    OrderType["DeriveFromCombination"] = "2";
    /** 组合报单 */
    OrderType["Combination"] = "3";
    /** 条件单 */
    OrderType["ConditionalOrder"] = "4";
    /** 互换单 */
    OrderType["Swap"] = "5";
    /** 大宗交易成交衍生 */
    OrderType["DeriveFromBlockTrade"] = "6";
    /** 期转现成交衍生 */
    OrderType["DeriveFromEFPTrade"] = "7";
})(OrderType || (exports.OrderType = OrderType = {}));
/** 有效期类型类型 */
var TimeConditionType;
(function (TimeConditionType) {
    /** 立即完成，否则撤销 */
    TimeConditionType["IOC"] = "1";
    /** 本节有效 */
    TimeConditionType["GFS"] = "2";
    /** 当日有效 */
    TimeConditionType["GFD"] = "3";
    /** 指定日期前有效 */
    TimeConditionType["GTD"] = "4";
    /** 撤销前有效 */
    TimeConditionType["GTC"] = "5";
    /** 集合竞价有效 */
    TimeConditionType["GFA"] = "6";
})(TimeConditionType || (exports.TimeConditionType = TimeConditionType = {}));
/** 成交量类型类型 */
var VolumeConditionType;
(function (VolumeConditionType) {
    /** 任何数量 */
    VolumeConditionType["AV"] = "1";
    /** 最小数量 */
    VolumeConditionType["MV"] = "2";
    /** 全部数量 */
    VolumeConditionType["CV"] = "3";
})(VolumeConditionType || (exports.VolumeConditionType = VolumeConditionType = {}));
/** 触发条件类型 */
var ContingentConditionType;
(function (ContingentConditionType) {
    /** 立即 */
    ContingentConditionType["Immediately"] = "1";
    /** 止损 */
    ContingentConditionType["Touch"] = "2";
    /** 止赢 */
    ContingentConditionType["TouchProfit"] = "3";
    /** 预埋单 */
    ContingentConditionType["ParkedOrder"] = "4";
    /** 最新价大于条件价 */
    ContingentConditionType["LastPriceGreaterThanStopPrice"] = "5";
    /** 最新价大于等于条件价 */
    ContingentConditionType["LastPriceGreaterEqualStopPrice"] = "6";
    /** 最新价小于条件价 */
    ContingentConditionType["LastPriceLesserThanStopPrice"] = "7";
    /** 最新价小于等于条件价 */
    ContingentConditionType["LastPriceLesserEqualStopPrice"] = "8";
    /** 卖一价大于条件价 */
    ContingentConditionType["AskPriceGreaterThanStopPrice"] = "9";
    /** 卖一价大于等于条件价 */
    ContingentConditionType["AskPriceGreaterEqualStopPrice"] = "A";
    /** 卖一价小于条件价 */
    ContingentConditionType["AskPriceLesserThanStopPrice"] = "B";
    /** 卖一价小于等于条件价 */
    ContingentConditionType["AskPriceLesserEqualStopPrice"] = "C";
    /** 买一价大于条件价 */
    ContingentConditionType["BidPriceGreaterThanStopPrice"] = "D";
    /** 买一价大于等于条件价 */
    ContingentConditionType["BidPriceGreaterEqualStopPrice"] = "E";
    /** 买一价小于条件价 */
    ContingentConditionType["BidPriceLesserThanStopPrice"] = "F";
    /** 买一价小于等于条件价 */
    ContingentConditionType["BidPriceLesserEqualStopPrice"] = "H";
})(ContingentConditionType || (exports.ContingentConditionType = ContingentConditionType = {}));
/** 操作标志类型 */
var ActionFlagType;
(function (ActionFlagType) {
    /** 删除 */
    ActionFlagType["Delete"] = "0";
    /** 修改 */
    ActionFlagType["Modify"] = "3";
})(ActionFlagType || (exports.ActionFlagType = ActionFlagType = {}));
/** 交易权限类型 */
var TradingRightType;
(function (TradingRightType) {
    /** 可以交易 */
    TradingRightType["Allow"] = "0";
    /** 只能平仓 */
    TradingRightType["CloseOnly"] = "1";
    /** 不能交易 */
    TradingRightType["Forbidden"] = "2";
})(TradingRightType || (exports.TradingRightType = TradingRightType = {}));
/** 报单来源类型 */
var OrderSourceType;
(function (OrderSourceType) {
    /** 来自参与者 */
    OrderSourceType["Participant"] = "0";
    /** 来自管理员 */
    OrderSourceType["Administrator"] = "1";
})(OrderSourceType || (exports.OrderSourceType = OrderSourceType = {}));
/** 成交类型类型 */
var TradeType;
(function (TradeType) {
    /** 组合持仓拆分为单一持仓,初始化不应包含该类型的持仓 */
    TradeType["SplitCombination"] = "#";
    /** 普通成交 */
    TradeType["Common"] = "0";
    /** 期权执行 */
    TradeType["OptionsExecution"] = "1";
    /** OTC成交 */
    TradeType["OTC"] = "2";
    /** 期转现衍生成交 */
    TradeType["EFPDerived"] = "3";
    /** 组合衍生成交 */
    TradeType["CombinationDerived"] = "4";
    /** 大宗交易成交 */
    TradeType["BlockTrade"] = "5";
})(TradeType || (exports.TradeType = TradeType = {}));
/** 特殊持仓明细标识类型 */
var SpecPosiType;
(function (SpecPosiType) {
    /** 普通持仓明细 */
    SpecPosiType["Common"] = "#";
    /** TAS合约成交产生的标的合约持仓明细 */
    SpecPosiType["Tas"] = "0";
})(SpecPosiType || (exports.SpecPosiType = SpecPosiType = {}));
/** 成交价来源类型 */
var PriceSourceType;
(function (PriceSourceType) {
    /** 前成交价 */
    PriceSourceType["LastPrice"] = "0";
    /** 买委托价 */
    PriceSourceType["Buy"] = "1";
    /** 卖委托价 */
    PriceSourceType["Sell"] = "2";
    /** 场外成交价 */
    PriceSourceType["OTC"] = "3";
})(PriceSourceType || (exports.PriceSourceType = PriceSourceType = {}));
/** 合约交易状态类型 */
var InstrumentStatusType;
(function (InstrumentStatusType) {
    /** 开盘前 */
    InstrumentStatusType["BeforeTrading"] = "0";
    /** 非交易 */
    InstrumentStatusType["NoTrading"] = "1";
    /** 连续交易 */
    InstrumentStatusType["Continous"] = "2";
    /** 集合竞价报单 */
    InstrumentStatusType["AuctionOrdering"] = "3";
    /** 集合竞价价格平衡 */
    InstrumentStatusType["AuctionBalance"] = "4";
    /** 集合竞价撮合 */
    InstrumentStatusType["AuctionMatch"] = "5";
    /** 收盘 */
    InstrumentStatusType["Closed"] = "6";
})(InstrumentStatusType || (exports.InstrumentStatusType = InstrumentStatusType = {}));
/** 品种进入交易状态原因类型 */
var InstStatusEnterReasonType;
(function (InstStatusEnterReasonType) {
    /** 自动切换 */
    InstStatusEnterReasonType["Automatic"] = "1";
    /** 手动切换 */
    InstStatusEnterReasonType["Manual"] = "2";
    /** 熔断 */
    InstStatusEnterReasonType["Fuse"] = "3";
})(InstStatusEnterReasonType || (exports.InstStatusEnterReasonType = InstStatusEnterReasonType = {}));
/** 处理状态类型 */
var BatchStatusType;
(function (BatchStatusType) {
    /** 未上传 */
    BatchStatusType["NoUpload"] = "1";
    /** 已上传 */
    BatchStatusType["Uploaded"] = "2";
    /** 审核失败 */
    BatchStatusType["Failed"] = "3";
})(BatchStatusType || (exports.BatchStatusType = BatchStatusType = {}));
/** 按品种返还方式类型 */
var ReturnStyleType;
(function (ReturnStyleType) {
    /** 按所有品种 */
    ReturnStyleType["All"] = "1";
    /** 按品种 */
    ReturnStyleType["ByProduct"] = "2";
})(ReturnStyleType || (exports.ReturnStyleType = ReturnStyleType = {}));
/** 返还模式类型 */
var ReturnPatternType;
(function (ReturnPatternType) {
    /** 按成交手数 */
    ReturnPatternType["ByVolume"] = "1";
    /** 按留存手续费 */
    ReturnPatternType["ByFeeOnHand"] = "2";
})(ReturnPatternType || (exports.ReturnPatternType = ReturnPatternType = {}));
/** 返还级别类型 */
var ReturnLevelType;
(function (ReturnLevelType) {
    /** 级别1 */
    ReturnLevelType["Level1"] = "1";
    /** 级别2 */
    ReturnLevelType["Level2"] = "2";
    /** 级别3 */
    ReturnLevelType["Level3"] = "3";
    /** 级别4 */
    ReturnLevelType["Level4"] = "4";
    /** 级别5 */
    ReturnLevelType["Level5"] = "5";
    /** 级别6 */
    ReturnLevelType["Level6"] = "6";
    /** 级别7 */
    ReturnLevelType["Level7"] = "7";
    /** 级别8 */
    ReturnLevelType["Level8"] = "8";
    /** 级别9 */
    ReturnLevelType["Level9"] = "9";
})(ReturnLevelType || (exports.ReturnLevelType = ReturnLevelType = {}));
/** 返还标准类型 */
var ReturnStandardType;
(function (ReturnStandardType) {
    /** 分阶段返还 */
    ReturnStandardType["ByPeriod"] = "1";
    /** 按某一标准 */
    ReturnStandardType["ByStandard"] = "2";
})(ReturnStandardType || (exports.ReturnStandardType = ReturnStandardType = {}));
/** 质押类型类型 */
var MortgageType;
(function (MortgageType) {
    /** 质出 */
    MortgageType["Out"] = "0";
    /** 质入 */
    MortgageType["In"] = "1";
})(MortgageType || (exports.MortgageType = MortgageType = {}));
/** 投资者结算参数代码类型 */
var InvestorSettlementParamIDType;
(function (InvestorSettlementParamIDType) {
    /** 质押比例 */
    InvestorSettlementParamIDType["MortgageRatio"] = "4";
    /** 保证金算法 */
    InvestorSettlementParamIDType["MarginWay"] = "5";
    /** 结算单结存是否包含质押 */
    InvestorSettlementParamIDType["BillDeposit"] = "9";
})(InvestorSettlementParamIDType || (exports.InvestorSettlementParamIDType = InvestorSettlementParamIDType = {}));
/** 交易所结算参数代码类型 */
var ExchangeSettlementParamIDType;
(function (ExchangeSettlementParamIDType) {
    /** 质押比例 */
    ExchangeSettlementParamIDType["MortgageRatio"] = "1";
    /** 分项资金导入项 */
    ExchangeSettlementParamIDType["OtherFundItem"] = "2";
    /** 分项资金入交易所出入金 */
    ExchangeSettlementParamIDType["OtherFundImport"] = "3";
    /** 中金所开户最低可用金额 */
    ExchangeSettlementParamIDType["CFFEXMinPrepa"] = "6";
    /** 郑商所结算方式 */
    ExchangeSettlementParamIDType["CZCESettlementType"] = "7";
    /** 交易所交割手续费收取方式 */
    ExchangeSettlementParamIDType["ExchDelivFeeMode"] = "9";
    /** 投资者交割手续费收取方式 */
    ExchangeSettlementParamIDType["DelivFeeMode"] = "0";
    /** 郑商所组合持仓保证金收取方式 */
    ExchangeSettlementParamIDType["CZCEComMarginType"] = "A";
    /** 大商所套利保证金是否优惠 */
    ExchangeSettlementParamIDType["DceComMarginType"] = "B";
    /** 虚值期权保证金优惠比率 */
    ExchangeSettlementParamIDType["OptOutDisCountRate"] = "a";
    /** 最低保障系数 */
    ExchangeSettlementParamIDType["OptMiniGuarantee"] = "b";
})(ExchangeSettlementParamIDType || (exports.ExchangeSettlementParamIDType = ExchangeSettlementParamIDType = {}));
/** 系统参数代码类型 */
var SystemParamIDType;
(function (SystemParamIDType) {
    /** 投资者代码最小长度 */
    SystemParamIDType["InvestorIDMinLength"] = "1";
    /** 投资者帐号代码最小长度 */
    SystemParamIDType["AccountIDMinLength"] = "2";
    /** 投资者开户默认登录权限 */
    SystemParamIDType["UserRightLogon"] = "3";
    /** 投资者交易结算单成交汇总方式 */
    SystemParamIDType["SettlementBillTrade"] = "4";
    /** 统一开户更新交易编码方式 */
    SystemParamIDType["TradingCode"] = "5";
    /** 结算是否判断存在未复核的出入金和分项资金 */
    SystemParamIDType["CheckFund"] = "6";
    /** 是否启用手续费模板数据权限 */
    SystemParamIDType["CommModelRight"] = "7";
    /** 是否启用保证金率模板数据权限 */
    SystemParamIDType["MarginModelRight"] = "9";
    /** 是否规范用户才能激活 */
    SystemParamIDType["IsStandardActive"] = "8";
    /** 上传的交易所结算文件路径 */
    SystemParamIDType["UploadSettlementFile"] = "U";
    /** 上报保证金监控中心文件路径 */
    SystemParamIDType["DownloadCSRCFile"] = "D";
    /** 生成的结算单文件路径 */
    SystemParamIDType["SettlementBillFile"] = "S";
    /** 证监会文件标识 */
    SystemParamIDType["CSRCOthersFile"] = "C";
    /** 投资者照片路径 */
    SystemParamIDType["InvestorPhoto"] = "P";
    /** 全结经纪公司上传文件路径 */
    SystemParamIDType["CSRCData"] = "R";
    /** 开户密码录入方式 */
    SystemParamIDType["InvestorPwdModel"] = "I";
    /** 投资者中金所结算文件下载路径 */
    SystemParamIDType["CFFEXInvestorSettleFile"] = "F";
    /** 投资者代码编码方式 */
    SystemParamIDType["InvestorIDType"] = "a";
    /** 休眠户最高权益 */
    SystemParamIDType["FreezeMaxReMain"] = "r";
    /** 手续费相关操作实时上场开关 */
    SystemParamIDType["IsSync"] = "A";
    /** 解除开仓权限限制 */
    SystemParamIDType["RelieveOpenLimit"] = "O";
    /** 是否规范用户才能休眠 */
    SystemParamIDType["IsStandardFreeze"] = "X";
    /** 郑商所是否开放所有品种套保交易 */
    SystemParamIDType["CZCENormalProductHedge"] = "B";
})(SystemParamIDType || (exports.SystemParamIDType = SystemParamIDType = {}));
/** 交易系统参数代码类型 */
var TradeParamIDType;
(function (TradeParamIDType) {
    /** 系统加密算法 */
    TradeParamIDType["EncryptionStandard"] = "E";
    /** 系统风险算法 */
    TradeParamIDType["RiskMode"] = "R";
    /** 系统风险算法是否全局 0-否 1-是 */
    TradeParamIDType["RiskModeGlobal"] = "G";
    /** 密码加密算法 */
    TradeParamIDType["modeEncode"] = "P";
    /** 价格小数位数参数 */
    TradeParamIDType["tickMode"] = "T";
    /** 用户最大会话数 */
    TradeParamIDType["SingleUserSessionMaxNum"] = "S";
    /** 最大连续登录失败数 */
    TradeParamIDType["LoginFailMaxNum"] = "L";
    /** 是否强制认证 */
    TradeParamIDType["IsAuthForce"] = "A";
    /** 是否冻结证券持仓 */
    TradeParamIDType["IsPosiFreeze"] = "F";
    /** 是否限仓 */
    TradeParamIDType["IsPosiLimit"] = "M";
    /** 郑商所询价时间间隔 */
    TradeParamIDType["ForQuoteTimeInterval"] = "Q";
    /** 是否期货限仓 */
    TradeParamIDType["IsFuturePosiLimit"] = "B";
    /** 是否期货下单频率限制 */
    TradeParamIDType["IsFutureOrderFreq"] = "C";
    /** 行权冻结是否计算盈利 */
    TradeParamIDType["IsExecOrderProfit"] = "H";
    /** 银期开户是否验证开户银行卡号是否是预留银行账户 */
    TradeParamIDType["IsCheckBankAcc"] = "I";
    /** 弱密码最后修改日期 */
    TradeParamIDType["PasswordDeadLine"] = "J";
    /** 强密码校验 */
    TradeParamIDType["IsStrongPassword"] = "K";
    /** 自有资金质押比 */
    TradeParamIDType["BalanceMorgage"] = "a";
    /** 最小密码长度 */
    TradeParamIDType["MinPwdLen"] = "O";
    /** IP当日最大登陆失败次数 */
    TradeParamIDType["LoginFailMaxNumForIP"] = "U";
    /** 密码有效期 */
    TradeParamIDType["PasswordPeriod"] = "V";
})(TradeParamIDType || (exports.TradeParamIDType = TradeParamIDType = {}));
/** 文件标识类型 */
var FileIDType;
(function (FileIDType) {
    /** 资金数据 */
    FileIDType["SettlementFund"] = "F";
    /** 成交数据 */
    FileIDType["Trade"] = "T";
    /** 投资者持仓数据 */
    FileIDType["InvestorPosition"] = "P";
    /** 投资者分项资金数据 */
    FileIDType["SubEntryFund"] = "O";
    /** 组合持仓数据 */
    FileIDType["CZCECombinationPos"] = "C";
    /** 上报保证金监控中心数据 */
    FileIDType["CSRCData"] = "R";
    /** 郑商所平仓了结数据 */
    FileIDType["CZCEClose"] = "L";
    /** 郑商所非平仓了结数据 */
    FileIDType["CZCENoClose"] = "N";
    /** 持仓明细数据 */
    FileIDType["PositionDtl"] = "D";
    /** 期权执行文件 */
    FileIDType["OptionStrike"] = "S";
    /** 结算价比对文件 */
    FileIDType["SettlementPriceComparison"] = "M";
    /** 上期所非持仓变动明细 */
    FileIDType["NonTradePosChange"] = "B";
})(FileIDType || (exports.FileIDType = FileIDType = {}));
/** 文件上传类型类型 */
var FileType;
(function (FileType) {
    /** 结算 */
    FileType["Settlement"] = "0";
    /** 核对 */
    FileType["Check"] = "1";
})(FileType || (exports.FileType = FileType = {}));
/** 文件格式类型 */
var FileFormatType;
(function (FileFormatType) {
    /** 文本文件(.txt) */
    FileFormatType["Txt"] = "0";
    /** 压缩文件(.zip) */
    FileFormatType["Zip"] = "1";
    /** DBF文件(.dbf) */
    FileFormatType["DBF"] = "2";
})(FileFormatType || (exports.FileFormatType = FileFormatType = {}));
/** 文件状态类型 */
var FileUploadStatusType;
(function (FileUploadStatusType) {
    /** 上传成功 */
    FileUploadStatusType["SucceedUpload"] = "1";
    /** 上传失败 */
    FileUploadStatusType["FailedUpload"] = "2";
    /** 导入成功 */
    FileUploadStatusType["SucceedLoad"] = "3";
    /** 导入部分成功 */
    FileUploadStatusType["PartSucceedLoad"] = "4";
    /** 导入失败 */
    FileUploadStatusType["FailedLoad"] = "5";
})(FileUploadStatusType || (exports.FileUploadStatusType = FileUploadStatusType = {}));
/** 移仓方向类型 */
var TransferDirectionType;
(function (TransferDirectionType) {
    /** 移出 */
    TransferDirectionType["Out"] = "0";
    /** 移入 */
    TransferDirectionType["In"] = "1";
})(TransferDirectionType || (exports.TransferDirectionType = TransferDirectionType = {}));
/** 特殊的创建规则类型 */
var SpecialCreateRuleType;
(function (SpecialCreateRuleType) {
    /** 没有特殊创建规则 */
    SpecialCreateRuleType["NoSpecialRule"] = "0";
    /** 不包含春节 */
    SpecialCreateRuleType["NoSpringFestival"] = "1";
})(SpecialCreateRuleType || (exports.SpecialCreateRuleType = SpecialCreateRuleType = {}));
/** 挂牌基准价类型类型 */
var BasisPriceType;
(function (BasisPriceType) {
    /** 上一合约结算价 */
    BasisPriceType["LastSettlement"] = "1";
    /** 上一合约收盘价 */
    BasisPriceType["LaseClose"] = "2";
})(BasisPriceType || (exports.BasisPriceType = BasisPriceType = {}));
/** 产品生命周期状态类型 */
var ProductLifePhaseType;
(function (ProductLifePhaseType) {
    /** 活跃 */
    ProductLifePhaseType["Active"] = "1";
    /** 不活跃 */
    ProductLifePhaseType["NonActive"] = "2";
    /** 注销 */
    ProductLifePhaseType["Canceled"] = "3";
})(ProductLifePhaseType || (exports.ProductLifePhaseType = ProductLifePhaseType = {}));
/** 交割方式类型 */
var DeliveryModeType;
(function (DeliveryModeType) {
    /** 现金交割 */
    DeliveryModeType["CashDeliv"] = "1";
    /** 实物交割 */
    DeliveryModeType["CommodityDeliv"] = "2";
})(DeliveryModeType || (exports.DeliveryModeType = DeliveryModeType = {}));
/** 出入金类型类型 */
var FundIOType;
(function (FundIOType) {
    /** 出入金 */
    FundIOType["FundIO"] = "1";
    /** 银期转帐 */
    FundIOType["Transfer"] = "2";
    /** 银期换汇 */
    FundIOType["SwapCurrency"] = "3";
})(FundIOType || (exports.FundIOType = FundIOType = {}));
/** 资金类型类型 */
var FundType;
(function (FundType) {
    /** 银行存款 */
    FundType["Deposite"] = "1";
    /** 分项资金 */
    FundType["ItemFund"] = "2";
    /** 公司调整 */
    FundType["Company"] = "3";
    /** 资金内转 */
    FundType["InnerTransfer"] = "4";
})(FundType || (exports.FundType = FundType = {}));
/** 出入金方向类型 */
var FundDirectionType;
(function (FundDirectionType) {
    /** 入金 */
    FundDirectionType["In"] = "1";
    /** 出金 */
    FundDirectionType["Out"] = "2";
})(FundDirectionType || (exports.FundDirectionType = FundDirectionType = {}));
/** 资金状态类型 */
var FundStatusType;
(function (FundStatusType) {
    /** 已录入 */
    FundStatusType["Record"] = "1";
    /** 已复核 */
    FundStatusType["Check"] = "2";
    /** 已冲销 */
    FundStatusType["Charge"] = "3";
})(FundStatusType || (exports.FundStatusType = FundStatusType = {}));
/** 发布状态类型 */
var PublishStatusType;
(function (PublishStatusType) {
    /** 未发布 */
    PublishStatusType["None"] = "1";
    /** 正在发布 */
    PublishStatusType["Publishing"] = "2";
    /** 已发布 */
    PublishStatusType["Published"] = "3";
})(PublishStatusType || (exports.PublishStatusType = PublishStatusType = {}));
/** 系统状态类型 */
var SystemStatusType;
(function (SystemStatusType) {
    /** 不活跃 */
    SystemStatusType["NonActive"] = "1";
    /** 启动 */
    SystemStatusType["Startup"] = "2";
    /** 交易开始初始化 */
    SystemStatusType["Initialize"] = "3";
    /** 交易完成初始化 */
    SystemStatusType["Initialized"] = "4";
    /** 收市开始 */
    SystemStatusType["Close"] = "5";
    /** 收市完成 */
    SystemStatusType["Closed"] = "6";
    /** 结算 */
    SystemStatusType["Settlement"] = "7";
})(SystemStatusType || (exports.SystemStatusType = SystemStatusType = {}));
/** 结算状态类型 */
var SettlementStatusType;
(function (SettlementStatusType) {
    /** 初始 */
    SettlementStatusType["Initialize"] = "0";
    /** 结算中 */
    SettlementStatusType["Settlementing"] = "1";
    /** 已结算 */
    SettlementStatusType["Settlemented"] = "2";
    /** 结算完成 */
    SettlementStatusType["Finished"] = "3";
})(SettlementStatusType || (exports.SettlementStatusType = SettlementStatusType = {}));
/** 投资者类型类型 */
var InvestorType;
(function (InvestorType) {
    /** 自然人 */
    InvestorType["Person"] = "0";
    /** 法人 */
    InvestorType["Company"] = "1";
    /** 投资基金 */
    InvestorType["Fund"] = "2";
    /** 特殊法人 */
    InvestorType["SpecialOrgan"] = "3";
    /** 资管户 */
    InvestorType["Asset"] = "4";
})(InvestorType || (exports.InvestorType = InvestorType = {}));
/** 经纪公司类型类型 */
var BrokerType;
(function (BrokerType) {
    /** 交易会员 */
    BrokerType["Trade"] = "0";
    /** 交易结算会员 */
    BrokerType["TradeSettle"] = "1";
})(BrokerType || (exports.BrokerType = BrokerType = {}));
/** 风险等级类型 */
var RiskLevelType;
(function (RiskLevelType) {
    /** 低风险客户 */
    RiskLevelType["Low"] = "1";
    /** 普通客户 */
    RiskLevelType["Normal"] = "2";
    /** 关注客户 */
    RiskLevelType["Focus"] = "3";
    /** 风险客户 */
    RiskLevelType["Risk"] = "4";
})(RiskLevelType || (exports.RiskLevelType = RiskLevelType = {}));
/** 手续费收取方式类型 */
var FeeAcceptStyleType;
(function (FeeAcceptStyleType) {
    /** 按交易收取 */
    FeeAcceptStyleType["ByTrade"] = "1";
    /** 按交割收取 */
    FeeAcceptStyleType["ByDeliv"] = "2";
    /** 不收 */
    FeeAcceptStyleType["None"] = "3";
    /** 按指定手续费收取 */
    FeeAcceptStyleType["FixFee"] = "4";
})(FeeAcceptStyleType || (exports.FeeAcceptStyleType = FeeAcceptStyleType = {}));
/** 密码类型类型 */
var PasswordType;
(function (PasswordType) {
    /** 交易密码 */
    PasswordType["Trade"] = "1";
    /** 资金密码 */
    PasswordType["Account"] = "2";
})(PasswordType || (exports.PasswordType = PasswordType = {}));
/** 盈亏算法类型 */
var AlgorithmType;
(function (AlgorithmType) {
    /** 浮盈浮亏都计算 */
    AlgorithmType["All"] = "1";
    /** 浮盈不计，浮亏计 */
    AlgorithmType["OnlyLost"] = "2";
    /** 浮盈计，浮亏不计 */
    AlgorithmType["OnlyGain"] = "3";
    /** 浮盈浮亏都不计算 */
    AlgorithmType["None"] = "4";
})(AlgorithmType || (exports.AlgorithmType = AlgorithmType = {}));
/** 是否包含平仓盈利类型 */
var IncludeCloseProfitType;
(function (IncludeCloseProfitType) {
    /** 包含平仓盈利 */
    IncludeCloseProfitType["Include"] = "0";
    /** 不包含平仓盈利 */
    IncludeCloseProfitType["NotInclude"] = "2";
})(IncludeCloseProfitType || (exports.IncludeCloseProfitType = IncludeCloseProfitType = {}));
/** 是否受可提比例限制类型 */
var AllWithoutTradeType;
(function (AllWithoutTradeType) {
    /** 无仓无成交不受可提比例限制 */
    AllWithoutTradeType["Enable"] = "0";
    /** 受可提比例限制 */
    AllWithoutTradeType["Disable"] = "2";
    /** 无仓不受可提比例限制 */
    AllWithoutTradeType["NoHoldEnable"] = "3";
})(AllWithoutTradeType || (exports.AllWithoutTradeType = AllWithoutTradeType = {}));
/** 资金密码核对标志类型 */
var FuturePwdFlagType;
(function (FuturePwdFlagType) {
    /** 不核对 */
    FuturePwdFlagType["UnCheck"] = "0";
    /** 核对 */
    FuturePwdFlagType["Check"] = "1";
})(FuturePwdFlagType || (exports.FuturePwdFlagType = FuturePwdFlagType = {}));
/** 银期转账类型类型 */
var TransferType;
(function (TransferType) {
    /** 银行转期货 */
    TransferType["BankToFuture"] = "0";
    /** 期货转银行 */
    TransferType["FutureToBank"] = "1";
})(TransferType || (exports.TransferType = TransferType = {}));
/** 转账有效标志类型 */
var TransferValidFlagType;
(function (TransferValidFlagType) {
    /** 无效或失败 */
    TransferValidFlagType["Invalid"] = "0";
    /** 有效 */
    TransferValidFlagType["Valid"] = "1";
    /** 冲正 */
    TransferValidFlagType["Reverse"] = "2";
})(TransferValidFlagType || (exports.TransferValidFlagType = TransferValidFlagType = {}));
/** 事由类型 */
var ReasonType;
(function (ReasonType) {
    /** 错单 */
    ReasonType["CD"] = "0";
    /** 资金在途 */
    ReasonType["ZT"] = "1";
    /** 其它 */
    ReasonType["QT"] = "2";
})(ReasonType || (exports.ReasonType = ReasonType = {}));
/** 性别类型 */
var SexType;
(function (SexType) {
    /** 未知 */
    SexType["None"] = "0";
    /** 男 */
    SexType["Man"] = "1";
    /** 女 */
    SexType["Woman"] = "2";
})(SexType || (exports.SexType = SexType = {}));
/** 用户类型类型 */
var UserType;
(function (UserType) {
    /** 投资者 */
    UserType["Investor"] = "0";
    /** 操作员 */
    UserType["Operator"] = "1";
    /** 管理员 */
    UserType["SuperUser"] = "2";
})(UserType || (exports.UserType = UserType = {}));
/** 费率类型类型 */
var RateType;
(function (RateType) {
    /** 保证金率 */
    RateType["MarginRate"] = "2";
})(RateType || (exports.RateType = RateType = {}));
/** 通知类型类型 */
var NoteType;
(function (NoteType) {
    /** 交易结算单 */
    NoteType["TradeSettleBill"] = "1";
    /** 交易结算月报 */
    NoteType["TradeSettleMonth"] = "2";
    /** 追加保证金通知书 */
    NoteType["CallMarginNotes"] = "3";
    /** 强行平仓通知书 */
    NoteType["ForceCloseNotes"] = "4";
    /** 成交通知书 */
    NoteType["TradeNotes"] = "5";
    /** 交割通知书 */
    NoteType["DelivNotes"] = "6";
})(NoteType || (exports.NoteType = NoteType = {}));
/** 结算单方式类型 */
var SettlementStyleType;
(function (SettlementStyleType) {
    /** 逐日盯市 */
    SettlementStyleType["Day"] = "1";
    /** 逐笔对冲 */
    SettlementStyleType["Volume"] = "2";
})(SettlementStyleType || (exports.SettlementStyleType = SettlementStyleType = {}));
/** 结算单类型类型 */
var SettlementBillType;
(function (SettlementBillType) {
    /** 日报 */
    SettlementBillType["Day"] = "0";
    /** 月报 */
    SettlementBillType["Month"] = "1";
})(SettlementBillType || (exports.SettlementBillType = SettlementBillType = {}));
/** 客户权限类型类型 */
var UserRightType;
(function (UserRightType) {
    /** 登录 */
    UserRightType["Logon"] = "1";
    /** 银期转帐 */
    UserRightType["Transfer"] = "2";
    /** 邮寄结算单 */
    UserRightType["EMail"] = "3";
    /** 传真结算单 */
    UserRightType["Fax"] = "4";
    /** 条件单 */
    UserRightType["ConditionOrder"] = "5";
})(UserRightType || (exports.UserRightType = UserRightType = {}));
/** 保证金价格类型类型 */
var MarginPriceType;
(function (MarginPriceType) {
    /** 昨结算价 */
    MarginPriceType["PreSettlementPrice"] = "1";
    /** 最新价 */
    MarginPriceType["SettlementPrice"] = "2";
    /** 成交均价 */
    MarginPriceType["AveragePrice"] = "3";
    /** 开仓价 */
    MarginPriceType["OpenPrice"] = "4";
})(MarginPriceType || (exports.MarginPriceType = MarginPriceType = {}));
/** 结算单生成状态类型 */
var BillGenStatusType;
(function (BillGenStatusType) {
    /** 未生成 */
    BillGenStatusType["None"] = "0";
    /** 生成中 */
    BillGenStatusType["NoGenerated"] = "1";
    /** 已生成 */
    BillGenStatusType["Generated"] = "2";
})(BillGenStatusType || (exports.BillGenStatusType = BillGenStatusType = {}));
/** 算法类型类型 */
var AlgoType;
(function (AlgoType) {
    /** 持仓处理算法 */
    AlgoType["HandlePositionAlgo"] = "1";
    /** 寻找保证金率算法 */
    AlgoType["FindMarginRateAlgo"] = "2";
})(AlgoType || (exports.AlgoType = AlgoType = {}));
/** 持仓处理算法编号类型 */
var HandlePositionAlgoIDType;
(function (HandlePositionAlgoIDType) {
    /** 基本 */
    HandlePositionAlgoIDType["Base"] = "1";
    /** 大连商品交易所 */
    HandlePositionAlgoIDType["DCE"] = "2";
    /** 郑州商品交易所 */
    HandlePositionAlgoIDType["CZCE"] = "3";
})(HandlePositionAlgoIDType || (exports.HandlePositionAlgoIDType = HandlePositionAlgoIDType = {}));
/** 寻找保证金率算法编号类型 */
var FindMarginRateAlgoIDType;
(function (FindMarginRateAlgoIDType) {
    /** 基本 */
    FindMarginRateAlgoIDType["Base"] = "1";
    /** 大连商品交易所 */
    FindMarginRateAlgoIDType["DCE"] = "2";
    /** 郑州商品交易所 */
    FindMarginRateAlgoIDType["CZCE"] = "3";
})(FindMarginRateAlgoIDType || (exports.FindMarginRateAlgoIDType = FindMarginRateAlgoIDType = {}));
/** 资金处理算法编号类型 */
var HandleTradingAccountAlgoIDType;
(function (HandleTradingAccountAlgoIDType) {
    /** 基本 */
    HandleTradingAccountAlgoIDType["Base"] = "1";
    /** 大连商品交易所 */
    HandleTradingAccountAlgoIDType["DCE"] = "2";
    /** 郑州商品交易所 */
    HandleTradingAccountAlgoIDType["CZCE"] = "3";
})(HandleTradingAccountAlgoIDType || (exports.HandleTradingAccountAlgoIDType = HandleTradingAccountAlgoIDType = {}));
/** 联系人类型类型 */
var PersonType;
(function (PersonType) {
    /** 指定下单人 */
    PersonType["Order"] = "1";
    /** 开户授权人 */
    PersonType["Open"] = "2";
    /** 资金调拨人 */
    PersonType["Fund"] = "3";
    /** 结算单确认人 */
    PersonType["Settlement"] = "4";
    /** 法人 */
    PersonType["Company"] = "5";
    /** 法人代表 */
    PersonType["Corporation"] = "6";
    /** 投资者联系人 */
    PersonType["LinkMan"] = "7";
    /** 分户管理资产负责人 */
    PersonType["Ledger"] = "8";
    /** 托（保）管人 */
    PersonType["Trustee"] = "9";
    /** 托（保）管机构法人代表 */
    PersonType["TrusteeCorporation"] = "A";
    /** 托（保）管机构开户授权人 */
    PersonType["TrusteeOpen"] = "B";
    /** 托（保）管机构联系人 */
    PersonType["TrusteeContact"] = "C";
    /** 境外自然人参考证件 */
    PersonType["ForeignerRefer"] = "D";
    /** 法人代表参考证件 */
    PersonType["CorporationRefer"] = "E";
})(PersonType || (exports.PersonType = PersonType = {}));
/** 查询范围类型 */
var QueryInvestorRangeType;
(function (QueryInvestorRangeType) {
    /** 所有 */
    QueryInvestorRangeType["All"] = "1";
    /** 查询分类 */
    QueryInvestorRangeType["Group"] = "2";
    /** 单一投资者 */
    QueryInvestorRangeType["Single"] = "3";
})(QueryInvestorRangeType || (exports.QueryInvestorRangeType = QueryInvestorRangeType = {}));
/** 投资者风险状态类型 */
var InvestorRiskStatusType;
(function (InvestorRiskStatusType) {
    /** 正常 */
    InvestorRiskStatusType["Normal"] = "1";
    /** 警告 */
    InvestorRiskStatusType["Warn"] = "2";
    /** 追保 */
    InvestorRiskStatusType["Call"] = "3";
    /** 强平 */
    InvestorRiskStatusType["Force"] = "4";
    /** 异常 */
    InvestorRiskStatusType["Exception"] = "5";
})(InvestorRiskStatusType || (exports.InvestorRiskStatusType = InvestorRiskStatusType = {}));
/** 用户事件类型类型 */
var UserEventType;
(function (UserEventType) {
    /** 登录 */
    UserEventType["Login"] = "1";
    /** 登出 */
    UserEventType["Logout"] = "2";
    /** 交易成功 */
    UserEventType["Trading"] = "3";
    /** 交易失败 */
    UserEventType["TradingError"] = "4";
    /** 修改密码 */
    UserEventType["UpdatePassword"] = "5";
    /** 客户端认证 */
    UserEventType["Authenticate"] = "6";
    /** 终端信息上报 */
    UserEventType["SubmitSysInfo"] = "7";
    /** 转账 */
    UserEventType["Transfer"] = "8";
    /** 其他 */
    UserEventType["Other"] = "9";
})(UserEventType || (exports.UserEventType = UserEventType = {}));
/** 平仓方式类型 */
var CloseStyleType;
(function (CloseStyleType) {
    /** 先开先平 */
    CloseStyleType["Close"] = "0";
    /** 先平今再平昨 */
    CloseStyleType["CloseToday"] = "1";
})(CloseStyleType || (exports.CloseStyleType = CloseStyleType = {}));
/** 统计方式类型 */
var StatModeType;
(function (StatModeType) {
    /** ---- */
    StatModeType["Non"] = "0";
    /** 按合约统计 */
    StatModeType["Instrument"] = "1";
    /** 按产品统计 */
    StatModeType["Product"] = "2";
    /** 按投资者统计 */
    StatModeType["Investor"] = "3";
})(StatModeType || (exports.StatModeType = StatModeType = {}));
/** 预埋单状态类型 */
var ParkedOrderStatusType;
(function (ParkedOrderStatusType) {
    /** 未发送 */
    ParkedOrderStatusType["NotSend"] = "1";
    /** 已发送 */
    ParkedOrderStatusType["Send"] = "2";
    /** 已删除 */
    ParkedOrderStatusType["Deleted"] = "3";
})(ParkedOrderStatusType || (exports.ParkedOrderStatusType = ParkedOrderStatusType = {}));
/** 处理状态类型 */
var VirDealStatusType;
(function (VirDealStatusType) {
    /** 正在处理 */
    VirDealStatusType["Dealing"] = "1";
    /** 处理成功 */
    VirDealStatusType["DeaclSucceed"] = "2";
})(VirDealStatusType || (exports.VirDealStatusType = VirDealStatusType = {}));
/** 原有系统代码类型 */
var OrgSystemIDType;
(function (OrgSystemIDType) {
    /** 综合交易平台 */
    OrgSystemIDType["Standard"] = "0";
    /** 易盛系统 */
    OrgSystemIDType["ESunny"] = "1";
    /** 金仕达V6系统 */
    OrgSystemIDType["KingStarV6"] = "2";
})(OrgSystemIDType || (exports.OrgSystemIDType = OrgSystemIDType = {}));
/** 交易状态类型 */
var VirTradeStatusType;
(function (VirTradeStatusType) {
    /** 正常处理中 */
    VirTradeStatusType["NaturalDeal"] = "0";
    /** 成功结束 */
    VirTradeStatusType["SucceedEnd"] = "1";
    /** 失败结束 */
    VirTradeStatusType["FailedEND"] = "2";
    /** 异常中 */
    VirTradeStatusType["Exception"] = "3";
    /** 已人工异常处理 */
    VirTradeStatusType["ManualDeal"] = "4";
    /** 通讯异常 ，请人工处理 */
    VirTradeStatusType["MesException"] = "5";
    /** 系统出错，请人工处理 */
    VirTradeStatusType["SysException"] = "6";
})(VirTradeStatusType || (exports.VirTradeStatusType = VirTradeStatusType = {}));
/** 银行帐户类型类型 */
var VirBankAccType;
(function (VirBankAccType) {
    /** 存折 */
    VirBankAccType["BankBook"] = "1";
    /** 储蓄卡 */
    VirBankAccType["BankCard"] = "2";
    /** 信用卡 */
    VirBankAccType["CreditCard"] = "3";
})(VirBankAccType || (exports.VirBankAccType = VirBankAccType = {}));
/** 银行帐户类型类型 */
var VirementStatusType;
(function (VirementStatusType) {
    /** 正常 */
    VirementStatusType["Natural"] = "0";
    /** 销户 */
    VirementStatusType["Canceled"] = "9";
})(VirementStatusType || (exports.VirementStatusType = VirementStatusType = {}));
/** 有效标志类型 */
var VirementAvailAbilityType;
(function (VirementAvailAbilityType) {
    /** 未确认 */
    VirementAvailAbilityType["NoAvailAbility"] = "0";
    /** 有效 */
    VirementAvailAbilityType["AvailAbility"] = "1";
    /** 冲正 */
    VirementAvailAbilityType["Repeal"] = "2";
})(VirementAvailAbilityType || (exports.VirementAvailAbilityType = VirementAvailAbilityType = {}));
/** 交易代码类型 */
var VirementTradeCodeType;
(function (VirementTradeCodeType) {
    /** 银行发起银行资金转期货 */
    VirementTradeCodeType["BankBankToFuture"] = "\u8E71";
    /** 银行发起期货资金转银行 */
    VirementTradeCodeType["BankFutureToBank"] = "\u8E72";
    /** 期货发起银行资金转期货 */
    VirementTradeCodeType["FutureBankToFuture"] = "\u1511";
    /** 期货发起期货资金转银行 */
    VirementTradeCodeType["FutureFutureToBank"] = "\u1512";
})(VirementTradeCodeType || (exports.VirementTradeCodeType = VirementTradeCodeType = {}));
/** Aml生成方式类型 */
var AMLGenStatusType;
(function (AMLGenStatusType) {
    /** 程序生成 */
    AMLGenStatusType["Program"] = "0";
    /** 人工生成 */
    AMLGenStatusType["HandWork"] = "1";
})(AMLGenStatusType || (exports.AMLGenStatusType = AMLGenStatusType = {}));
/** 动态密钥类别(保证金监管)类型 */
var CFMMCKeyKindType;
(function (CFMMCKeyKindType) {
    /** 主动请求更新 */
    CFMMCKeyKindType["REQUEST"] = "R";
    /** CFMMC自动更新 */
    CFMMCKeyKindType["AUTO"] = "A";
    /** CFMMC手动更新 */
    CFMMCKeyKindType["MANUAL"] = "M";
})(CFMMCKeyKindType || (exports.CFMMCKeyKindType = CFMMCKeyKindType = {}));
/** 证件类型类型 */
var CertificationType;
(function (CertificationType) {
    /** 身份证 */
    CertificationType["IDCard"] = "0";
    /** 护照 */
    CertificationType["Passport"] = "1";
    /** 军官证 */
    CertificationType["OfficerIDCard"] = "2";
    /** 士兵证 */
    CertificationType["SoldierIDCard"] = "3";
    /** 回乡证 */
    CertificationType["HomeComingCard"] = "4";
    /** 户口簿 */
    CertificationType["HouseholdRegister"] = "5";
    /** 营业执照号 */
    CertificationType["LicenseNo"] = "6";
    /** 组织机构代码证 */
    CertificationType["InstitutionCodeCard"] = "7";
    /** 临时营业执照号 */
    CertificationType["TempLicenseNo"] = "8";
    /** 民办非企业登记证书 */
    CertificationType["NoEnterpriseLicenseNo"] = "9";
    /** 其他证件 */
    CertificationType["OtherCard"] = "x";
    /** 主管部门批文 */
    CertificationType["SuperDepAgree"] = "a";
})(CertificationType || (exports.CertificationType = CertificationType = {}));
/** 文件业务功能类型 */
var FileBusinessCodeType;
(function (FileBusinessCodeType) {
    /** 其他 */
    FileBusinessCodeType["Others"] = "0";
    /** 转账交易明细对账 */
    FileBusinessCodeType["TransferDetails"] = "1";
    /** 客户账户状态对账 */
    FileBusinessCodeType["CustAccStatus"] = "2";
    /** 账户类交易明细对账 */
    FileBusinessCodeType["AccountTradeDetails"] = "3";
    /** 期货账户信息变更明细对账 */
    FileBusinessCodeType["FutureAccountChangeInfoDetails"] = "4";
    /** 客户资金台账余额明细对账 */
    FileBusinessCodeType["CustMoneyDetail"] = "5";
    /** 客户销户结息明细对账 */
    FileBusinessCodeType["CustCancelAccountInfo"] = "6";
    /** 客户资金余额对账结果 */
    FileBusinessCodeType["CustMoneyResult"] = "7";
    /** 其它对账异常结果文件 */
    FileBusinessCodeType["OthersExceptionResult"] = "8";
    /** 客户结息净额明细 */
    FileBusinessCodeType["CustInterestNetMoneyDetails"] = "9";
    /** 客户资金交收明细 */
    FileBusinessCodeType["CustMoneySendAndReceiveDetails"] = "a";
    /** 法人存管银行资金交收汇总 */
    FileBusinessCodeType["CorporationMoneyTotal"] = "b";
    /** 主体间资金交收汇总 */
    FileBusinessCodeType["MainbodyMoneyTotal"] = "c";
    /** 总分平衡监管数据 */
    FileBusinessCodeType["MainPartMonitorData"] = "d";
    /** 存管银行备付金余额 */
    FileBusinessCodeType["PreparationMoney"] = "e";
    /** 协办存管银行资金监管数据 */
    FileBusinessCodeType["BankMoneyMonitorData"] = "f";
})(FileBusinessCodeType || (exports.FileBusinessCodeType = FileBusinessCodeType = {}));
/** 汇钞标志类型 */
var CashExchangeCodeType;
(function (CashExchangeCodeType) {
    /** 汇 */
    CashExchangeCodeType["Exchange"] = "1";
    /** 钞 */
    CashExchangeCodeType["Cash"] = "2";
})(CashExchangeCodeType || (exports.CashExchangeCodeType = CashExchangeCodeType = {}));
/** 是或否标识类型 */
var YesNoIndicatorType;
(function (YesNoIndicatorType) {
    /** 是 */
    YesNoIndicatorType["Yes"] = "0";
    /** 否 */
    YesNoIndicatorType["No"] = "1";
})(YesNoIndicatorType || (exports.YesNoIndicatorType = YesNoIndicatorType = {}));
/** 余额类型类型 */
var BanlanceType;
(function (BanlanceType) {
    /** 当前余额 */
    BanlanceType["CurrentMoney"] = "0";
    /** 可用余额 */
    BanlanceType["UsableMoney"] = "1";
    /** 可取余额 */
    BanlanceType["FetchableMoney"] = "2";
    /** 冻结余额 */
    BanlanceType["FreezeMoney"] = "3";
})(BanlanceType || (exports.BanlanceType = BanlanceType = {}));
/** 性别类型 */
var GenderType;
(function (GenderType) {
    /** 未知状态 */
    GenderType["Unknown"] = "0";
    /** 男 */
    GenderType["Male"] = "1";
    /** 女 */
    GenderType["Female"] = "2";
})(GenderType || (exports.GenderType = GenderType = {}));
/** 费用支付标志类型 */
var FeePayFlagType;
(function (FeePayFlagType) {
    /** 由受益方支付费用 */
    FeePayFlagType["BEN"] = "0";
    /** 由发送方支付费用 */
    FeePayFlagType["OUR"] = "1";
    /** 由发送方支付发起的费用，受益方支付接受的费用 */
    FeePayFlagType["SHA"] = "2";
})(FeePayFlagType || (exports.FeePayFlagType = FeePayFlagType = {}));
/** 密钥类型类型 */
var PassWordKeyType;
(function (PassWordKeyType) {
    /** 交换密钥 */
    PassWordKeyType["ExchangeKey"] = "0";
    /** 密码密钥 */
    PassWordKeyType["PassWordKey"] = "1";
    /** MAC密钥 */
    PassWordKeyType["MACKey"] = "2";
    /** 报文密钥 */
    PassWordKeyType["MessageKey"] = "3";
})(PassWordKeyType || (exports.PassWordKeyType = PassWordKeyType = {}));
/** 密码类型类型 */
var FBTPassWordType;
(function (FBTPassWordType) {
    /** 查询 */
    FBTPassWordType["Query"] = "0";
    /** 取款 */
    FBTPassWordType["Fetch"] = "1";
    /** 转帐 */
    FBTPassWordType["Transfer"] = "2";
    /** 交易 */
    FBTPassWordType["Trade"] = "3";
})(FBTPassWordType || (exports.FBTPassWordType = FBTPassWordType = {}));
/** 加密方式类型 */
var FBTEncryModeType;
(function (FBTEncryModeType) {
    /** 不加密 */
    FBTEncryModeType["NoEncry"] = "0";
    /** DES */
    FBTEncryModeType["DES"] = "1";
    /** 3DES */
    FBTEncryModeType["DES3"] = "2";
})(FBTEncryModeType || (exports.FBTEncryModeType = FBTEncryModeType = {}));
/** 银行冲正标志类型 */
var BankRepealFlagType;
(function (BankRepealFlagType) {
    /** 银行无需自动冲正 */
    BankRepealFlagType["BankNotNeedRepeal"] = "0";
    /** 银行待自动冲正 */
    BankRepealFlagType["BankWaitingRepeal"] = "1";
    /** 银行已自动冲正 */
    BankRepealFlagType["BankBeenRepealed"] = "2";
})(BankRepealFlagType || (exports.BankRepealFlagType = BankRepealFlagType = {}));
/** 期商冲正标志类型 */
var BrokerRepealFlagType;
(function (BrokerRepealFlagType) {
    /** 期商无需自动冲正 */
    BrokerRepealFlagType["BrokerNotNeedRepeal"] = "0";
    /** 期商待自动冲正 */
    BrokerRepealFlagType["BrokerWaitingRepeal"] = "1";
    /** 期商已自动冲正 */
    BrokerRepealFlagType["BrokerBeenRepealed"] = "2";
})(BrokerRepealFlagType || (exports.BrokerRepealFlagType = BrokerRepealFlagType = {}));
/** 机构类别类型 */
var InstitutionType;
(function (InstitutionType) {
    /** 银行 */
    InstitutionType["Bank"] = "0";
    /** 期商 */
    InstitutionType["Future"] = "1";
    /** 券商 */
    InstitutionType["Store"] = "2";
})(InstitutionType || (exports.InstitutionType = InstitutionType = {}));
/** 最后分片标志类型 */
var LastFragmentType;
(function (LastFragmentType) {
    /** 是最后分片 */
    LastFragmentType["Yes"] = "0";
    /** 不是最后分片 */
    LastFragmentType["No"] = "1";
})(LastFragmentType || (exports.LastFragmentType = LastFragmentType = {}));
/** 银行账户状态类型 */
var BankAccStatusType;
(function (BankAccStatusType) {
    /** 正常 */
    BankAccStatusType["Normal"] = "0";
    /** 冻结 */
    BankAccStatusType["Freeze"] = "1";
    /** 挂失 */
    BankAccStatusType["ReportLoss"] = "2";
})(BankAccStatusType || (exports.BankAccStatusType = BankAccStatusType = {}));
/** 资金账户状态类型 */
var MoneyAccountStatusType;
(function (MoneyAccountStatusType) {
    /** 正常 */
    MoneyAccountStatusType["Normal"] = "0";
    /** 销户 */
    MoneyAccountStatusType["Cancel"] = "1";
})(MoneyAccountStatusType || (exports.MoneyAccountStatusType = MoneyAccountStatusType = {}));
/** 存管状态类型 */
var ManageStatusType;
(function (ManageStatusType) {
    /** 指定存管 */
    ManageStatusType["Point"] = "0";
    /** 预指定 */
    ManageStatusType["PrePoint"] = "1";
    /** 撤销指定 */
    ManageStatusType["CancelPoint"] = "2";
})(ManageStatusType || (exports.ManageStatusType = ManageStatusType = {}));
/** 应用系统类型类型 */
var SystemType;
(function (SystemType) {
    /** 银期转帐 */
    SystemType["FutureBankTransfer"] = "0";
    /** 银证转帐 */
    SystemType["StockBankTransfer"] = "1";
    /** 第三方存管 */
    SystemType["TheThirdPartStore"] = "2";
})(SystemType || (exports.SystemType = SystemType = {}));
/** 银期转帐划转结果标志类型 */
var TxnEndFlagType;
(function (TxnEndFlagType) {
    /** 正常处理中 */
    TxnEndFlagType["NormalProcessing"] = "0";
    /** 成功结束 */
    TxnEndFlagType["Success"] = "1";
    /** 失败结束 */
    TxnEndFlagType["Failed"] = "2";
    /** 异常中 */
    TxnEndFlagType["Abnormal"] = "3";
    /** 已人工异常处理 */
    TxnEndFlagType["ManualProcessedForException"] = "4";
    /** 通讯异常 ，请人工处理 */
    TxnEndFlagType["CommuFailedNeedManualProcess"] = "5";
    /** 系统出错，请人工处理 */
    TxnEndFlagType["SysErrorNeedManualProcess"] = "6";
})(TxnEndFlagType || (exports.TxnEndFlagType = TxnEndFlagType = {}));
/** 银期转帐服务处理状态类型 */
var ProcessStatusType;
(function (ProcessStatusType) {
    /** 未处理 */
    ProcessStatusType["NotProcess"] = "0";
    /** 开始处理 */
    ProcessStatusType["StartProcess"] = "1";
    /** 处理完成 */
    ProcessStatusType["Finished"] = "2";
})(ProcessStatusType || (exports.ProcessStatusType = ProcessStatusType = {}));
/** 客户类型类型 */
var CustType;
(function (CustType) {
    /** 自然人 */
    CustType["Person"] = "0";
    /** 机构户 */
    CustType["Institution"] = "1";
})(CustType || (exports.CustType = CustType = {}));
/** 银期转帐方向类型 */
var FBTTransferDirectionType;
(function (FBTTransferDirectionType) {
    /** 入金，银行转期货 */
    FBTTransferDirectionType["FromBankToFuture"] = "1";
    /** 出金，期货转银行 */
    FBTTransferDirectionType["FromFutureToBank"] = "2";
})(FBTTransferDirectionType || (exports.FBTTransferDirectionType = FBTTransferDirectionType = {}));
/** 开销户类别类型 */
var OpenOrDestroyType;
(function (OpenOrDestroyType) {
    /** 开户 */
    OpenOrDestroyType["Open"] = "1";
    /** 销户 */
    OpenOrDestroyType["Destroy"] = "0";
})(OpenOrDestroyType || (exports.OpenOrDestroyType = OpenOrDestroyType = {}));
/** 有效标志类型 */
var AvailabilityFlagType;
(function (AvailabilityFlagType) {
    /** 未确认 */
    AvailabilityFlagType["Invalid"] = "0";
    /** 有效 */
    AvailabilityFlagType["Valid"] = "1";
    /** 冲正 */
    AvailabilityFlagType["Repeal"] = "2";
})(AvailabilityFlagType || (exports.AvailabilityFlagType = AvailabilityFlagType = {}));
/** 机构类型类型 */
var OrganType;
(function (OrganType) {
    /** 银行代理 */
    OrganType["Bank"] = "1";
    /** 交易前置 */
    OrganType["Future"] = "2";
    /** 银期转帐平台管理 */
    OrganType["PlateForm"] = "9";
})(OrganType || (exports.OrganType = OrganType = {}));
/** 机构级别类型 */
var OrganLevelType;
(function (OrganLevelType) {
    /** 银行总行或期商总部 */
    OrganLevelType["HeadQuarters"] = "1";
    /** 银行分中心或期货公司营业部 */
    OrganLevelType["Branch"] = "2";
})(OrganLevelType || (exports.OrganLevelType = OrganLevelType = {}));
/** 协议类型类型 */
var ProtocalIDType;
(function (ProtocalIDType) {
    /** 期商协议 */
    ProtocalIDType["FutureProtocal"] = "0";
    /** 工行协议 */
    ProtocalIDType["ICBCProtocal"] = "1";
    /** 农行协议 */
    ProtocalIDType["ABCProtocal"] = "2";
    /** 中国银行协议 */
    ProtocalIDType["CBCProtocal"] = "3";
    /** 建行协议 */
    ProtocalIDType["CCBProtocal"] = "4";
    /** 交行协议 */
    ProtocalIDType["BOCOMProtocal"] = "5";
    /** 银期转帐平台协议 */
    ProtocalIDType["FBTPlateFormProtocal"] = "X";
})(ProtocalIDType || (exports.ProtocalIDType = ProtocalIDType = {}));
/** 套接字连接方式类型 */
var ConnectModeType;
(function (ConnectModeType) {
    /** 短连接 */
    ConnectModeType["ShortConnect"] = "0";
    /** 长连接 */
    ConnectModeType["LongConnect"] = "1";
})(ConnectModeType || (exports.ConnectModeType = ConnectModeType = {}));
/** 套接字通信方式类型 */
var SyncModeType;
(function (SyncModeType) {
    /** 异步 */
    SyncModeType["ASync"] = "0";
    /** 同步 */
    SyncModeType["Sync"] = "1";
})(SyncModeType || (exports.SyncModeType = SyncModeType = {}));
/** 银行帐号类型类型 */
var BankAccType;
(function (BankAccType) {
    /** 银行存折 */
    BankAccType["BankBook"] = "1";
    /** 储蓄卡 */
    BankAccType["SavingCard"] = "2";
    /** 信用卡 */
    BankAccType["CreditCard"] = "3";
})(BankAccType || (exports.BankAccType = BankAccType = {}));
/** 期货公司帐号类型类型 */
var FutureAccType;
(function (FutureAccType) {
    /** 银行存折 */
    FutureAccType["BankBook"] = "1";
    /** 储蓄卡 */
    FutureAccType["SavingCard"] = "2";
    /** 信用卡 */
    FutureAccType["CreditCard"] = "3";
})(FutureAccType || (exports.FutureAccType = FutureAccType = {}));
/** 接入机构状态类型 */
var OrganStatusType;
(function (OrganStatusType) {
    /** 启用 */
    OrganStatusType["Ready"] = "0";
    /** 签到 */
    OrganStatusType["CheckIn"] = "1";
    /** 签退 */
    OrganStatusType["CheckOut"] = "2";
    /** 对帐文件到达 */
    OrganStatusType["CheckFileArrived"] = "3";
    /** 对帐 */
    OrganStatusType["CheckDetail"] = "4";
    /** 日终清理 */
    OrganStatusType["DayEndClean"] = "5";
    /** 注销 */
    OrganStatusType["Invalid"] = "9";
})(OrganStatusType || (exports.OrganStatusType = OrganStatusType = {}));
/** 建行收费模式类型 */
var CCBFeeModeType;
(function (CCBFeeModeType) {
    /** 按金额扣收 */
    CCBFeeModeType["ByAmount"] = "1";
    /** 按月扣收 */
    CCBFeeModeType["ByMonth"] = "2";
})(CCBFeeModeType || (exports.CCBFeeModeType = CCBFeeModeType = {}));
/** 通讯API类型类型 */
var CommApiType;
(function (CommApiType) {
    /** 客户端 */
    CommApiType["Client"] = "1";
    /** 服务端 */
    CommApiType["Server"] = "2";
    /** 交易系统的UserApi */
    CommApiType["UserApi"] = "3";
})(CommApiType || (exports.CommApiType = CommApiType = {}));
/** 连接状态类型 */
var LinkStatusType;
(function (LinkStatusType) {
    /** 已经连接 */
    LinkStatusType["Connected"] = "1";
    /** 没有连接 */
    LinkStatusType["Disconnected"] = "2";
})(LinkStatusType || (exports.LinkStatusType = LinkStatusType = {}));
/** 密码核对标志类型 */
var PwdFlagType;
(function (PwdFlagType) {
    /** 不核对 */
    PwdFlagType["NoCheck"] = "0";
    /** 明文核对 */
    PwdFlagType["BlankCheck"] = "1";
    /** 密文核对 */
    PwdFlagType["EncryptCheck"] = "2";
})(PwdFlagType || (exports.PwdFlagType = PwdFlagType = {}));
/** 期货帐号类型类型 */
var SecuAccType;
(function (SecuAccType) {
    /** 资金帐号 */
    SecuAccType["AccountID"] = "1";
    /** 资金卡号 */
    SecuAccType["CardID"] = "2";
    /** 上海股东帐号 */
    SecuAccType["SHStockholderID"] = "3";
    /** 深圳股东帐号 */
    SecuAccType["SZStockholderID"] = "4";
})(SecuAccType || (exports.SecuAccType = SecuAccType = {}));
/** 转账交易状态类型 */
var TransferStatusType;
(function (TransferStatusType) {
    /** 正常 */
    TransferStatusType["Normal"] = "0";
    /** 被冲正 */
    TransferStatusType["Repealed"] = "1";
})(TransferStatusType || (exports.TransferStatusType = TransferStatusType = {}));
/** 发起方类型 */
var SponsorType;
(function (SponsorType) {
    /** 期商 */
    SponsorType["Broker"] = "0";
    /** 银行 */
    SponsorType["Bank"] = "1";
})(SponsorType || (exports.SponsorType = SponsorType = {}));
/** 请求响应类别类型 */
var ReqRspType;
(function (ReqRspType) {
    /** 请求 */
    ReqRspType["Request"] = "0";
    /** 响应 */
    ReqRspType["Response"] = "1";
})(ReqRspType || (exports.ReqRspType = ReqRspType = {}));
/** 银期转帐用户事件类型类型 */
var FBTUserEventType;
(function (FBTUserEventType) {
    /** 签到 */
    FBTUserEventType["SignIn"] = "0";
    /** 银行转期货 */
    FBTUserEventType["FromBankToFuture"] = "1";
    /** 期货转银行 */
    FBTUserEventType["FromFutureToBank"] = "2";
    /** 开户 */
    FBTUserEventType["OpenAccount"] = "3";
    /** 销户 */
    FBTUserEventType["CancelAccount"] = "4";
    /** 变更银行账户 */
    FBTUserEventType["ChangeAccount"] = "5";
    /** 冲正银行转期货 */
    FBTUserEventType["RepealFromBankToFuture"] = "6";
    /** 冲正期货转银行 */
    FBTUserEventType["RepealFromFutureToBank"] = "7";
    /** 查询银行账户 */
    FBTUserEventType["QueryBankAccount"] = "8";
    /** 查询期货账户 */
    FBTUserEventType["QueryFutureAccount"] = "9";
    /** 签退 */
    FBTUserEventType["SignOut"] = "A";
    /** 密钥同步 */
    FBTUserEventType["SyncKey"] = "B";
    /** 预约开户 */
    FBTUserEventType["ReserveOpenAccount"] = "C";
    /** 撤销预约开户 */
    FBTUserEventType["CancelReserveOpenAccount"] = "D";
    /** 预约开户确认 */
    FBTUserEventType["ReserveOpenAccountConfirm"] = "E";
    /** 其他 */
    FBTUserEventType["Other"] = "Z";
})(FBTUserEventType || (exports.FBTUserEventType = FBTUserEventType = {}));
/** 记录操作类型类型 */
var DBOperationType;
(function (DBOperationType) {
    /** 插入 */
    DBOperationType["Insert"] = "0";
    /** 更新 */
    DBOperationType["Update"] = "1";
    /** 删除 */
    DBOperationType["Delete"] = "2";
})(DBOperationType || (exports.DBOperationType = DBOperationType = {}));
/** 同步标记类型 */
var SyncFlagType;
(function (SyncFlagType) {
    /** 已同步 */
    SyncFlagType["Yes"] = "0";
    /** 未同步 */
    SyncFlagType["No"] = "1";
})(SyncFlagType || (exports.SyncFlagType = SyncFlagType = {}));
/** 同步类型类型 */
var SyncType;
(function (SyncType) {
    /** 一次同步 */
    SyncType["OneOffSync"] = "0";
    /** 定时同步 */
    SyncType["TimerSync"] = "1";
    /** 定时完全同步 */
    SyncType["TimerFullSync"] = "2";
})(SyncType || (exports.SyncType = SyncType = {}));
/** 换汇方向类型 */
var ExDirectionType;
(function (ExDirectionType) {
    /** 结汇 */
    ExDirectionType["Settlement"] = "0";
    /** 售汇 */
    ExDirectionType["Sale"] = "1";
})(ExDirectionType || (exports.ExDirectionType = ExDirectionType = {}));
/** 换汇成功标志类型 */
var FBEResultFlagType;
(function (FBEResultFlagType) {
    /** 成功 */
    FBEResultFlagType["Success"] = "0";
    /** 账户余额不足 */
    FBEResultFlagType["InsufficientBalance"] = "1";
    /** 交易结果未知 */
    FBEResultFlagType["UnknownTrading"] = "8";
    /** 失败 */
    FBEResultFlagType["Fail"] = "x";
})(FBEResultFlagType || (exports.FBEResultFlagType = FBEResultFlagType = {}));
/** 换汇交易状态类型 */
var FBEExchStatusType;
(function (FBEExchStatusType) {
    /** 正常 */
    FBEExchStatusType["Normal"] = "0";
    /** 交易重发 */
    FBEExchStatusType["ReExchange"] = "1";
})(FBEExchStatusType || (exports.FBEExchStatusType = FBEExchStatusType = {}));
/** 换汇文件标志类型 */
var FBEFileFlagType;
(function (FBEFileFlagType) {
    /** 数据包 */
    FBEFileFlagType["DataPackage"] = "0";
    /** 文件 */
    FBEFileFlagType["File"] = "1";
})(FBEFileFlagType || (exports.FBEFileFlagType = FBEFileFlagType = {}));
/** 换汇已交易标志类型 */
var FBEAlreadyTradeType;
(function (FBEAlreadyTradeType) {
    /** 未交易 */
    FBEAlreadyTradeType["NotTrade"] = "0";
    /** 已交易 */
    FBEAlreadyTradeType["Trade"] = "1";
})(FBEAlreadyTradeType || (exports.FBEAlreadyTradeType = FBEAlreadyTradeType = {}));
/** 银期换汇用户事件类型类型 */
var FBEUserEventType;
(function (FBEUserEventType) {
    /** 签到 */
    FBEUserEventType["SignIn"] = "0";
    /** 换汇 */
    FBEUserEventType["Exchange"] = "1";
    /** 换汇重发 */
    FBEUserEventType["ReExchange"] = "2";
    /** 银行账户查询 */
    FBEUserEventType["QueryBankAccount"] = "3";
    /** 换汇明细查询 */
    FBEUserEventType["QueryExchDetial"] = "4";
    /** 换汇汇总查询 */
    FBEUserEventType["QueryExchSummary"] = "5";
    /** 换汇汇率查询 */
    FBEUserEventType["QueryExchRate"] = "6";
    /** 对账文件通知 */
    FBEUserEventType["CheckBankAccount"] = "7";
    /** 签退 */
    FBEUserEventType["SignOut"] = "8";
    /** 其他 */
    FBEUserEventType["Other"] = "Z";
})(FBEUserEventType || (exports.FBEUserEventType = FBEUserEventType = {}));
/** 换汇发送标志类型 */
var FBEReqFlagType;
(function (FBEReqFlagType) {
    /** 未处理 */
    FBEReqFlagType["UnProcessed"] = "0";
    /** 等待发送 */
    FBEReqFlagType["WaitSend"] = "1";
    /** 发送成功 */
    FBEReqFlagType["SendSuccess"] = "2";
    /** 发送失败 */
    FBEReqFlagType["SendFailed"] = "3";
    /** 等待重发 */
    FBEReqFlagType["WaitReSend"] = "4";
})(FBEReqFlagType || (exports.FBEReqFlagType = FBEReqFlagType = {}));
/** 风险通知类型类型 */
var NotifyClassType;
(function (NotifyClassType) {
    /** 正常 */
    NotifyClassType["NOERROR"] = "0";
    /** 警示 */
    NotifyClassType["Warn"] = "1";
    /** 追保 */
    NotifyClassType["Call"] = "2";
    /** 强平 */
    NotifyClassType["Force"] = "3";
    /** 穿仓 */
    NotifyClassType["CHUANCANG"] = "4";
    /** 异常 */
    NotifyClassType["Exception"] = "5";
})(NotifyClassType || (exports.NotifyClassType = NotifyClassType = {}));
/** 强平单类型类型 */
var ForceCloseType;
(function (ForceCloseType) {
    /** 手工强平 */
    ForceCloseType["Manual"] = "0";
    /** 单一投资者辅助强平 */
    ForceCloseType["Single"] = "1";
    /** 批量投资者辅助强平 */
    ForceCloseType["Group"] = "2";
})(ForceCloseType || (exports.ForceCloseType = ForceCloseType = {}));
/** 风险通知途径类型 */
var RiskNotifyMethodType;
(function (RiskNotifyMethodType) {
    /** 系统通知 */
    RiskNotifyMethodType["System"] = "0";
    /** 短信通知 */
    RiskNotifyMethodType["SMS"] = "1";
    /** 邮件通知 */
    RiskNotifyMethodType["EMail"] = "2";
    /** 人工通知 */
    RiskNotifyMethodType["Manual"] = "3";
})(RiskNotifyMethodType || (exports.RiskNotifyMethodType = RiskNotifyMethodType = {}));
/** 风险通知状态类型 */
var RiskNotifyStatusType;
(function (RiskNotifyStatusType) {
    /** 未生成 */
    RiskNotifyStatusType["NotGen"] = "0";
    /** 已生成未发送 */
    RiskNotifyStatusType["Generated"] = "1";
    /** 发送失败 */
    RiskNotifyStatusType["SendError"] = "2";
    /** 已发送未接收 */
    RiskNotifyStatusType["SendOk"] = "3";
    /** 已接收未确认 */
    RiskNotifyStatusType["Received"] = "4";
    /** 已确认 */
    RiskNotifyStatusType["Confirmed"] = "5";
})(RiskNotifyStatusType || (exports.RiskNotifyStatusType = RiskNotifyStatusType = {}));
/** 风控用户操作事件类型 */
var RiskUserEventType;
(function (RiskUserEventType) {
    /** 导出数据 */
    RiskUserEventType["ExportData"] = "0";
})(RiskUserEventType || (exports.RiskUserEventType = RiskUserEventType = {}));
/** 条件单索引条件类型 */
var ConditionalOrderSortType;
(function (ConditionalOrderSortType) {
    /** 使用最新价升序 */
    ConditionalOrderSortType["LastPriceAsc"] = "0";
    /** 使用最新价降序 */
    ConditionalOrderSortType["LastPriceDesc"] = "1";
    /** 使用卖价升序 */
    ConditionalOrderSortType["AskPriceAsc"] = "2";
    /** 使用卖价降序 */
    ConditionalOrderSortType["AskPriceDesc"] = "3";
    /** 使用买价升序 */
    ConditionalOrderSortType["BidPriceAsc"] = "4";
    /** 使用买价降序 */
    ConditionalOrderSortType["BidPriceDesc"] = "5";
})(ConditionalOrderSortType || (exports.ConditionalOrderSortType = ConditionalOrderSortType = {}));
/** 报送状态类型 */
var SendType;
(function (SendType) {
    /** 未发送 */
    SendType["NoSend"] = "0";
    /** 已发送 */
    SendType["Sended"] = "1";
    /** 已生成 */
    SendType["Generated"] = "2";
    /** 报送失败 */
    SendType["SendFail"] = "3";
    /** 接收成功 */
    SendType["Success"] = "4";
    /** 接收失败 */
    SendType["Fail"] = "5";
    /** 取消报送 */
    SendType["Cancel"] = "6";
})(SendType || (exports.SendType = SendType = {}));
/** 交易编码状态类型 */
var ClientIDStatusType;
(function (ClientIDStatusType) {
    /** 未申请 */
    ClientIDStatusType["NoApply"] = "1";
    /** 已提交申请 */
    ClientIDStatusType["Submited"] = "2";
    /** 已发送申请 */
    ClientIDStatusType["Sended"] = "3";
    /** 完成 */
    ClientIDStatusType["Success"] = "4";
    /** 拒绝 */
    ClientIDStatusType["Refuse"] = "5";
    /** 已撤销编码 */
    ClientIDStatusType["Cancel"] = "6";
})(ClientIDStatusType || (exports.ClientIDStatusType = ClientIDStatusType = {}));
/** 特有信息类型类型 */
var QuestionType;
(function (QuestionType) {
    /** 单选 */
    QuestionType["Radio"] = "1";
    /** 多选 */
    QuestionType["Option"] = "2";
    /** 填空 */
    QuestionType["Blank"] = "3";
})(QuestionType || (exports.QuestionType = QuestionType = {}));
/** 业务类型类型 */
var BusinessType;
(function (BusinessType) {
    /** 请求 */
    BusinessType["Request"] = "1";
    /** 应答 */
    BusinessType["Response"] = "2";
    /** 通知 */
    BusinessType["Notice"] = "3";
})(BusinessType || (exports.BusinessType = BusinessType = {}));
/** 监控中心返回码类型 */
var CfmmcReturnCodeType;
(function (CfmmcReturnCodeType) {
    /** 成功 */
    CfmmcReturnCodeType["Success"] = "0";
    /** 该客户已经有流程在处理中 */
    CfmmcReturnCodeType["Working"] = "1";
    /** 监控中客户资料检查失败 */
    CfmmcReturnCodeType["InfoFail"] = "2";
    /** 监控中实名制检查失败 */
    CfmmcReturnCodeType["IDCardFail"] = "3";
    /** 其他错误 */
    CfmmcReturnCodeType["OtherFail"] = "4";
})(CfmmcReturnCodeType || (exports.CfmmcReturnCodeType = CfmmcReturnCodeType = {}));
/** 客户类型类型 */
var ClientType;
(function (ClientType) {
    /** 所有 */
    ClientType["All"] = "0";
    /** 个人 */
    ClientType["Person"] = "1";
    /** 单位 */
    ClientType["Company"] = "2";
    /** 其他 */
    ClientType["Other"] = "3";
    /** 特殊法人 */
    ClientType["SpecialOrgan"] = "4";
    /** 资管户 */
    ClientType["Asset"] = "5";
})(ClientType || (exports.ClientType = ClientType = {}));
/** 交易所编号类型 */
var ExchangeIDType;
(function (ExchangeIDType) {
    /** 上海期货交易所 */
    ExchangeIDType["SHFE"] = "S";
    /** 郑州商品交易所 */
    ExchangeIDType["CZCE"] = "Z";
    /** 大连商品交易所 */
    ExchangeIDType["DCE"] = "D";
    /** 中国金融期货交易所 */
    ExchangeIDType["CFFEX"] = "J";
    /** 上海国际能源交易中心股份有限公司 */
    ExchangeIDType["INE"] = "N";
})(ExchangeIDType || (exports.ExchangeIDType = ExchangeIDType = {}));
/** 交易编码类型类型 */
var ExClientIDType;
(function (ExClientIDType) {
    /** 套保 */
    ExClientIDType["Hedge"] = "1";
    /** 套利 */
    ExClientIDType["Arbitrage"] = "2";
    /** 投机 */
    ExClientIDType["Speculation"] = "3";
})(ExClientIDType || (exports.ExClientIDType = ExClientIDType = {}));
/** 更新状态类型 */
var UpdateFlagType;
(function (UpdateFlagType) {
    /** 未更新 */
    UpdateFlagType["NoUpdate"] = "0";
    /** 更新全部信息成功 */
    UpdateFlagType["Success"] = "1";
    /** 更新全部信息失败 */
    UpdateFlagType["Fail"] = "2";
    /** 更新交易编码成功 */
    UpdateFlagType["TCSuccess"] = "3";
    /** 更新交易编码失败 */
    UpdateFlagType["TCFail"] = "4";
    /** 已丢弃 */
    UpdateFlagType["Cancel"] = "5";
})(UpdateFlagType || (exports.UpdateFlagType = UpdateFlagType = {}));
/** 申请动作类型 */
var ApplyOperateIDType;
(function (ApplyOperateIDType) {
    /** 开户 */
    ApplyOperateIDType["OpenInvestor"] = "1";
    /** 修改身份信息 */
    ApplyOperateIDType["ModifyIDCard"] = "2";
    /** 修改一般信息 */
    ApplyOperateIDType["ModifyNoIDCard"] = "3";
    /** 申请交易编码 */
    ApplyOperateIDType["ApplyTradingCode"] = "4";
    /** 撤销交易编码 */
    ApplyOperateIDType["CancelTradingCode"] = "5";
    /** 销户 */
    ApplyOperateIDType["CancelInvestor"] = "6";
    /** 账户休眠 */
    ApplyOperateIDType["FreezeAccount"] = "8";
    /** 激活休眠账户 */
    ApplyOperateIDType["ActiveFreezeAccount"] = "9";
})(ApplyOperateIDType || (exports.ApplyOperateIDType = ApplyOperateIDType = {}));
/** 申请状态类型 */
var ApplyStatusIDType;
(function (ApplyStatusIDType) {
    /** 未补全 */
    ApplyStatusIDType["NoComplete"] = "1";
    /** 已提交 */
    ApplyStatusIDType["Submited"] = "2";
    /** 已审核 */
    ApplyStatusIDType["Checked"] = "3";
    /** 已拒绝 */
    ApplyStatusIDType["Refused"] = "4";
    /** 已删除 */
    ApplyStatusIDType["Deleted"] = "5";
})(ApplyStatusIDType || (exports.ApplyStatusIDType = ApplyStatusIDType = {}));
/** 发送方式类型 */
var SendMethodType;
(function (SendMethodType) {
    /** 文件发送 */
    SendMethodType["ByAPI"] = "1";
    /** 电子发送 */
    SendMethodType["ByFile"] = "2";
})(SendMethodType || (exports.SendMethodType = SendMethodType = {}));
/** 操作方法类型 */
var EventModeType;
(function (EventModeType) {
    /** 增加 */
    EventModeType["ADD"] = "1";
    /** 修改 */
    EventModeType["UPDATE"] = "2";
    /** 删除 */
    EventModeType["DELETE"] = "3";
    /** 复核 */
    EventModeType["CHECK"] = "4";
    /** 复制 */
    EventModeType["COPY"] = "5";
    /** 注销 */
    EventModeType["CANCEL"] = "6";
    /** 冲销 */
    EventModeType["Reverse"] = "7";
})(EventModeType || (exports.EventModeType = EventModeType = {}));
/** 统一开户申请自动发送类型 */
var UOAAutoSendType;
(function (UOAAutoSendType) {
    /** 自动发送并接收 */
    UOAAutoSendType["ASR"] = "1";
    /** 自动发送，不自动接收 */
    UOAAutoSendType["ASNR"] = "2";
    /** 不自动发送，自动接收 */
    UOAAutoSendType["NSAR"] = "3";
    /** 不自动发送，也不自动接收 */
    UOAAutoSendType["NSR"] = "4";
})(UOAAutoSendType || (exports.UOAAutoSendType = UOAAutoSendType = {}));
/** 流程ID类型 */
var FlowIDType;
(function (FlowIDType) {
    /** 投资者对应投资者组设置 */
    FlowIDType["InvestorGroupFlow"] = "1";
    /** 投资者手续费率设置 */
    FlowIDType["InvestorRate"] = "2";
    /** 投资者手续费率模板关系设置 */
    FlowIDType["InvestorCommRateModel"] = "3";
})(FlowIDType || (exports.FlowIDType = FlowIDType = {}));
/** 复核级别类型 */
var CheckLevelType;
(function (CheckLevelType) {
    /** 零级复核 */
    CheckLevelType["Zero"] = "0";
    /** 一级复核 */
    CheckLevelType["One"] = "1";
    /** 二级复核 */
    CheckLevelType["Two"] = "2";
})(CheckLevelType || (exports.CheckLevelType = CheckLevelType = {}));
/** 复核级别类型 */
var CheckStatusType;
(function (CheckStatusType) {
    /** 未复核 */
    CheckStatusType["Init"] = "0";
    /** 复核中 */
    CheckStatusType["Checking"] = "1";
    /** 已复核 */
    CheckStatusType["Checked"] = "2";
    /** 拒绝 */
    CheckStatusType["Refuse"] = "3";
    /** 作废 */
    CheckStatusType["Cancel"] = "4";
})(CheckStatusType || (exports.CheckStatusType = CheckStatusType = {}));
/** 生效状态类型 */
var UsedStatusType;
(function (UsedStatusType) {
    /** 未生效 */
    UsedStatusType["Unused"] = "0";
    /** 已生效 */
    UsedStatusType["Used"] = "1";
    /** 生效失败 */
    UsedStatusType["Fail"] = "2";
})(UsedStatusType || (exports.UsedStatusType = UsedStatusType = {}));
/** 账户来源类型 */
var BankAcountOriginType;
(function (BankAcountOriginType) {
    /** 手工录入 */
    BankAcountOriginType["ByAccProperty"] = "0";
    /** 银期转账 */
    BankAcountOriginType["ByFBTransfer"] = "1";
})(BankAcountOriginType || (exports.BankAcountOriginType = BankAcountOriginType = {}));
/** 结算单月报成交汇总方式类型 */
var MonthBillTradeSumType;
(function (MonthBillTradeSumType) {
    /** 同日同合约 */
    MonthBillTradeSumType["ByInstrument"] = "0";
    /** 同日同合约同价格 */
    MonthBillTradeSumType["ByDayInsPrc"] = "1";
    /** 同合约 */
    MonthBillTradeSumType["ByDayIns"] = "2";
})(MonthBillTradeSumType || (exports.MonthBillTradeSumType = MonthBillTradeSumType = {}));
/** 银期交易代码枚举类型 */
var FBTTradeCodeEnumType;
(function (FBTTradeCodeEnumType) {
    /** 银行发起银行转期货 */
    FBTTradeCodeEnumType["BankLaunchBankToBroker"] = "\u8E71";
    /** 期货发起银行转期货 */
    FBTTradeCodeEnumType["BrokerLaunchBankToBroker"] = "\u1511";
    /** 银行发起期货转银行 */
    FBTTradeCodeEnumType["BankLaunchBrokerToBank"] = "\u8E72";
    /** 期货发起期货转银行 */
    FBTTradeCodeEnumType["BrokerLaunchBrokerToBank"] = "\u1512";
})(FBTTradeCodeEnumType || (exports.FBTTradeCodeEnumType = FBTTradeCodeEnumType = {}));
/** 动态令牌类型类型 */
var OTPType;
(function (OTPType) {
    /** 无动态令牌 */
    OTPType["NONE"] = "0";
    /** 时间令牌 */
    OTPType["TOTP"] = "1";
})(OTPType || (exports.OTPType = OTPType = {}));
/** 动态令牌状态类型 */
var OTPStatusType;
(function (OTPStatusType) {
    /** 未使用 */
    OTPStatusType["Unused"] = "0";
    /** 已使用 */
    OTPStatusType["Used"] = "1";
    /** 注销 */
    OTPStatusType["Disuse"] = "2";
})(OTPStatusType || (exports.OTPStatusType = OTPStatusType = {}));
/** 经济公司用户类型类型 */
var BrokerUserType;
(function (BrokerUserType) {
    /** 投资者 */
    BrokerUserType["Investor"] = "1";
    /** 操作员 */
    BrokerUserType["BrokerUser"] = "2";
})(BrokerUserType || (exports.BrokerUserType = BrokerUserType = {}));
/** 期货类型类型 */
var FutureType;
(function (FutureType) {
    /** 商品期货 */
    FutureType["Commodity"] = "1";
    /** 金融期货 */
    FutureType["Financial"] = "2";
})(FutureType || (exports.FutureType = FutureType = {}));
/** 资金管理操作类型类型 */
var FundEventType;
(function (FundEventType) {
    /** 转账限额 */
    FundEventType["Restriction"] = "0";
    /** 当日转账限额 */
    FundEventType["TodayRestriction"] = "1";
    /** 期商流水 */
    FundEventType["Transfer"] = "2";
    /** 资金冻结 */
    FundEventType["Credit"] = "3";
    /** 投资者可提资金比例 */
    FundEventType["InvestorWithdrawAlm"] = "4";
    /** 单个银行帐户转账限额 */
    FundEventType["BankRestriction"] = "5";
    /** 银期签约账户 */
    FundEventType["Accountregister"] = "6";
    /** 交易所出入金 */
    FundEventType["ExchangeFundIO"] = "7";
    /** 投资者出入金 */
    FundEventType["InvestorFundIO"] = "8";
})(FundEventType || (exports.FundEventType = FundEventType = {}));
/**  资金账户来源类型*/
var AccountSourceType;
(function (AccountSourceType) {
    /** 银期同步 */
    AccountSourceType["FBTransfer"] = "0";
    /** 手工录入 */
    AccountSourceType["ManualEntry"] = "1";
})(AccountSourceType || (exports.AccountSourceType = AccountSourceType = {}));
/** 交易编码来源类型 */
var CodeSourceType;
(function (CodeSourceType) {
    /** 统一开户(已规范) */
    CodeSourceType["UnifyAccount"] = "0";
    /** 手工录入(未规范) */
    CodeSourceType["ManualEntry"] = "1";
})(CodeSourceType || (exports.CodeSourceType = CodeSourceType = {}));
/** 操作员范围类型 */
var UserRangeType;
(function (UserRangeType) {
    /** 所有 */
    UserRangeType["All"] = "0";
    /** 单一操作员 */
    UserRangeType["Single"] = "1";
})(UserRangeType || (exports.UserRangeType = UserRangeType = {}));
/** 交易统计表按客户统计方式类型 */
var ByGroupType;
(function (ByGroupType) {
    /** 按投资者统计 */
    ByGroupType["Investor"] = "2";
    /** 按类统计 */
    ByGroupType["Group"] = "1";
})(ByGroupType || (exports.ByGroupType = ByGroupType = {}));
/** 交易统计表按范围统计方式类型 */
var TradeSumStatModeType;
(function (TradeSumStatModeType) {
    /** 按合约统计 */
    TradeSumStatModeType["Instrument"] = "1";
    /** 按产品统计 */
    TradeSumStatModeType["Product"] = "2";
    /** 按交易所统计 */
    TradeSumStatModeType["Exchange"] = "3";
})(TradeSumStatModeType || (exports.TradeSumStatModeType = TradeSumStatModeType = {}));
/** 日期表达式设置类型类型 */
var ExprSetModeType;
(function (ExprSetModeType) {
    /** 相对已有规则设置 */
    ExprSetModeType["Relative"] = "1";
    /** 典型设置 */
    ExprSetModeType["Typical"] = "2";
})(ExprSetModeType || (exports.ExprSetModeType = ExprSetModeType = {}));
/** 投资者范围类型 */
var RateInvestorRangeType;
(function (RateInvestorRangeType) {
    /** 公司标准 */
    RateInvestorRangeType["All"] = "1";
    /** 模板 */
    RateInvestorRangeType["Model"] = "2";
    /** 单一投资者 */
    RateInvestorRangeType["Single"] = "3";
})(RateInvestorRangeType || (exports.RateInvestorRangeType = RateInvestorRangeType = {}));
/** 主次用系统数据同步状态类型 */
var SyncDataStatusType;
(function (SyncDataStatusType) {
    /** 未同步 */
    SyncDataStatusType["Initialize"] = "0";
    /** 同步中 */
    SyncDataStatusType["Settlementing"] = "1";
    /** 已同步 */
    SyncDataStatusType["Settlemented"] = "2";
})(SyncDataStatusType || (exports.SyncDataStatusType = SyncDataStatusType = {}));
/** 成交来源类型 */
var TradeSourceType;
(function (TradeSourceType) {
    /** 来自交易所普通回报 */
    TradeSourceType["NORMAL"] = "0";
    /** 来自查询 */
    TradeSourceType["QUERY"] = "1";
})(TradeSourceType || (exports.TradeSourceType = TradeSourceType = {}));
/** 产品合约统计方式类型 */
var FlexStatModeType;
(function (FlexStatModeType) {
    /** 产品统计 */
    FlexStatModeType["Product"] = "1";
    /** 交易所统计 */
    FlexStatModeType["Exchange"] = "2";
    /** 统计所有 */
    FlexStatModeType["All"] = "3";
})(FlexStatModeType || (exports.FlexStatModeType = FlexStatModeType = {}));
/** 投资者范围统计方式类型 */
var ByInvestorRangeType;
(function (ByInvestorRangeType) {
    /** 属性统计 */
    ByInvestorRangeType["Property"] = "1";
    /** 统计所有 */
    ByInvestorRangeType["All"] = "2";
})(ByInvestorRangeType || (exports.ByInvestorRangeType = ByInvestorRangeType = {}));
/** 投资者范围类型 */
var PropertyInvestorRangeType;
(function (PropertyInvestorRangeType) {
    /** 所有 */
    PropertyInvestorRangeType["All"] = "1";
    /** 投资者属性 */
    PropertyInvestorRangeType["Property"] = "2";
    /** 单一投资者 */
    PropertyInvestorRangeType["Single"] = "3";
})(PropertyInvestorRangeType || (exports.PropertyInvestorRangeType = PropertyInvestorRangeType = {}));
/** 文件状态类型 */
var FileStatusType;
(function (FileStatusType) {
    /** 未生成 */
    FileStatusType["NoCreate"] = "0";
    /** 已生成 */
    FileStatusType["Created"] = "1";
    /** 生成失败 */
    FileStatusType["Failed"] = "2";
})(FileStatusType || (exports.FileStatusType = FileStatusType = {}));
/** 文件生成方式类型 */
var FileGenStyleType;
(function (FileGenStyleType) {
    /** 下发 */
    FileGenStyleType["FileTransmit"] = "0";
    /** 生成 */
    FileGenStyleType["FileGen"] = "1";
})(FileGenStyleType || (exports.FileGenStyleType = FileGenStyleType = {}));
/** 系统日志操作方法类型 */
var SysOperModeType;
(function (SysOperModeType) {
    /** 增加 */
    SysOperModeType["Add"] = "1";
    /** 修改 */
    SysOperModeType["Update"] = "2";
    /** 删除 */
    SysOperModeType["Delete"] = "3";
    /** 复制 */
    SysOperModeType["Copy"] = "4";
    /** 激活 */
    SysOperModeType["AcTive"] = "5";
    /** 注销 */
    SysOperModeType["CanCel"] = "6";
    /** 重置 */
    SysOperModeType["ReSet"] = "7";
})(SysOperModeType || (exports.SysOperModeType = SysOperModeType = {}));
/** 系统日志操作类型类型 */
var SysOperType;
(function (SysOperType) {
    /** 修改操作员密码 */
    SysOperType["UpdatePassword"] = "0";
    /** 操作员组织架构关系 */
    SysOperType["UserDepartment"] = "1";
    /** 角色管理 */
    SysOperType["RoleManager"] = "2";
    /** 角色功能设置 */
    SysOperType["RoleFunction"] = "3";
    /** 基础参数设置 */
    SysOperType["BaseParam"] = "4";
    /** 设置操作员 */
    SysOperType["SetUserID"] = "5";
    /** 用户角色设置 */
    SysOperType["SetUserRole"] = "6";
    /** 用户IP限制 */
    SysOperType["UserIpRestriction"] = "7";
    /** 组织架构管理 */
    SysOperType["DepartmentManager"] = "8";
    /** 组织架构向查询分类复制 */
    SysOperType["DepartmentCopy"] = "9";
    /** 交易编码管理 */
    SysOperType["Tradingcode"] = "A";
    /** 投资者状态维护 */
    SysOperType["InvestorStatus"] = "B";
    /** 投资者权限管理 */
    SysOperType["InvestorAuthority"] = "C";
    /** 属性设置 */
    SysOperType["PropertySet"] = "D";
    /** 重置投资者密码 */
    SysOperType["ReSetInvestorPasswd"] = "E";
    /** 投资者个性信息维护 */
    SysOperType["InvestorPersonalityInfo"] = "F";
})(SysOperType || (exports.SysOperType = SysOperType = {}));
/** 上报数据查询类型类型 */
var CSRCDataQueyType;
(function (CSRCDataQueyType) {
    /** 查询当前交易日报送的数据 */
    CSRCDataQueyType["Current"] = "0";
    /** 查询历史报送的代理经纪公司的数据 */
    CSRCDataQueyType["History"] = "1";
})(CSRCDataQueyType || (exports.CSRCDataQueyType = CSRCDataQueyType = {}));
/** 休眠状态类型 */
var FreezeStatusType;
(function (FreezeStatusType) {
    /** 活跃 */
    FreezeStatusType["Normal"] = "1";
    /** 休眠 */
    FreezeStatusType["Freeze"] = "0";
})(FreezeStatusType || (exports.FreezeStatusType = FreezeStatusType = {}));
/** 规范状态类型 */
var StandardStatusType;
(function (StandardStatusType) {
    /** 已规范 */
    StandardStatusType["Standard"] = "0";
    /** 未规范 */
    StandardStatusType["NonStandard"] = "1";
})(StandardStatusType || (exports.StandardStatusType = StandardStatusType = {}));
/** 配置类型类型 */
var RightParamType;
(function (RightParamType) {
    /** 休眠户 */
    RightParamType["Freeze"] = "1";
    /** 激活休眠户 */
    RightParamType["FreezeActive"] = "2";
    /** 开仓权限限制 */
    RightParamType["OpenLimit"] = "3";
    /** 解除开仓权限限制 */
    RightParamType["RelieveOpenLimit"] = "4";
})(RightParamType || (exports.RightParamType = RightParamType = {}));
/** 反洗钱审核表数据状态类型 */
var DataStatusType;
(function (DataStatusType) {
    /** 正常 */
    DataStatusType["Normal"] = "0";
    /** 已删除 */
    DataStatusType["Deleted"] = "1";
})(DataStatusType || (exports.DataStatusType = DataStatusType = {}));
/** 审核状态类型 */
var AMLCheckStatusType;
(function (AMLCheckStatusType) {
    /** 未复核 */
    AMLCheckStatusType["Init"] = "0";
    /** 复核中 */
    AMLCheckStatusType["Checking"] = "1";
    /** 已复核 */
    AMLCheckStatusType["Checked"] = "2";
    /** 拒绝上报 */
    AMLCheckStatusType["RefuseReport"] = "3";
})(AMLCheckStatusType || (exports.AMLCheckStatusType = AMLCheckStatusType = {}));
/** 日期类型类型 */
var AmlDateType;
(function (AmlDateType) {
    /** 检查日期 */
    AmlDateType["DrawDay"] = "0";
    /** 发生日期 */
    AmlDateType["TouchDay"] = "1";
})(AmlDateType || (exports.AmlDateType = AmlDateType = {}));
/** 审核级别类型 */
var AmlCheckLevelType;
(function (AmlCheckLevelType) {
    /** 零级审核 */
    AmlCheckLevelType["CheckLevel0"] = "0";
    /** 一级审核 */
    AmlCheckLevelType["CheckLevel1"] = "1";
    /** 二级审核 */
    AmlCheckLevelType["CheckLevel2"] = "2";
    /** 三级审核 */
    AmlCheckLevelType["CheckLevel3"] = "3";
})(AmlCheckLevelType || (exports.AmlCheckLevelType = AmlCheckLevelType = {}));
/** 导出文件类型类型 */
var ExportFileType;
(function (ExportFileType) {
    /** CSV */
    ExportFileType["CSV"] = "0";
    /** Excel */
    ExportFileType["EXCEL"] = "1";
    /** DBF */
    ExportFileType["DBF"] = "2";
})(ExportFileType || (exports.ExportFileType = ExportFileType = {}));
/** 结算配置类型类型 */
var SettleManagerType;
(function (SettleManagerType) {
    /** 结算前准备 */
    SettleManagerType["Before"] = "1";
    /** 结算 */
    SettleManagerType["Settlement"] = "2";
    /** 结算后核对 */
    SettleManagerType["After"] = "3";
    /** 结算后处理 */
    SettleManagerType["Settlemented"] = "4";
})(SettleManagerType || (exports.SettleManagerType = SettleManagerType = {}));
/** 结算配置等级类型 */
var SettleManagerLevelType;
(function (SettleManagerLevelType) {
    /** 必要 */
    SettleManagerLevelType["Must"] = "1";
    /** 警告 */
    SettleManagerLevelType["Alarm"] = "2";
    /** 提示 */
    SettleManagerLevelType["Prompt"] = "3";
    /** 不检查 */
    SettleManagerLevelType["Ignore"] = "4";
})(SettleManagerLevelType || (exports.SettleManagerLevelType = SettleManagerLevelType = {}));
/** 模块分组类型 */
var SettleManagerGroupType;
(function (SettleManagerGroupType) {
    /** 交易所核对 */
    SettleManagerGroupType["Exhcange"] = "1";
    /** 内部核对 */
    SettleManagerGroupType["ASP"] = "2";
    /** 上报数据核对 */
    SettleManagerGroupType["CSRC"] = "3";
})(SettleManagerGroupType || (exports.SettleManagerGroupType = SettleManagerGroupType = {}));
/** 保值额度使用类型类型 */
var LimitUseType;
(function (LimitUseType) {
    /** 可重复使用 */
    LimitUseType["Repeatable"] = "1";
    /** 不可重复使用 */
    LimitUseType["Unrepeatable"] = "2";
})(LimitUseType || (exports.LimitUseType = LimitUseType = {}));
/** 数据来源类型 */
var DataResourceType;
(function (DataResourceType) {
    /** 本系统 */
    DataResourceType["Settle"] = "1";
    /** 交易所 */
    DataResourceType["Exchange"] = "2";
    /** 报送数据 */
    DataResourceType["CSRC"] = "3";
})(DataResourceType || (exports.DataResourceType = DataResourceType = {}));
/** 保证金类型类型 */
var MarginType;
(function (MarginType) {
    /** 交易所保证金率 */
    MarginType["ExchMarginRate"] = "0";
    /** 投资者保证金率 */
    MarginType["InstrMarginRate"] = "1";
    /** 投资者交易保证金率 */
    MarginType["InstrMarginRateTrade"] = "2";
})(MarginType || (exports.MarginType = MarginType = {}));
/** 生效类型类型 */
var ActiveType;
(function (ActiveType) {
    /** 仅当日生效 */
    ActiveType["Intraday"] = "1";
    /** 长期生效 */
    ActiveType["Long"] = "2";
})(ActiveType || (exports.ActiveType = ActiveType = {}));
/** 冲突保证金率类型类型 */
var MarginRateType;
(function (MarginRateType) {
    /** 交易所保证金率 */
    MarginRateType["Exchange"] = "1";
    /** 投资者保证金率 */
    MarginRateType["Investor"] = "2";
    /** 投资者交易保证金率 */
    MarginRateType["InvestorTrade"] = "3";
})(MarginRateType || (exports.MarginRateType = MarginRateType = {}));
/** 备份数据状态类型 */
var BackUpStatusType;
(function (BackUpStatusType) {
    /** 未生成备份数据 */
    BackUpStatusType["UnBak"] = "0";
    /** 备份数据生成中 */
    BackUpStatusType["BakUp"] = "1";
    /** 已生成备份数据 */
    BackUpStatusType["BakUped"] = "2";
    /** 备份数据失败 */
    BackUpStatusType["BakFail"] = "3";
})(BackUpStatusType || (exports.BackUpStatusType = BackUpStatusType = {}));
/** 结算初始化状态类型 */
var InitSettlementType;
(function (InitSettlementType) {
    /** 结算初始化未开始 */
    InitSettlementType["UnInitialize"] = "0";
    /** 结算初始化中 */
    InitSettlementType["Initialize"] = "1";
    /** 结算初始化完成 */
    InitSettlementType["Initialized"] = "2";
})(InitSettlementType || (exports.InitSettlementType = InitSettlementType = {}));
/** 报表数据生成状态类型 */
var ReportStatusType;
(function (ReportStatusType) {
    /** 未生成报表数据 */
    ReportStatusType["NoCreate"] = "0";
    /** 报表数据生成中 */
    ReportStatusType["Create"] = "1";
    /** 已生成报表数据 */
    ReportStatusType["Created"] = "2";
    /** 生成报表数据失败 */
    ReportStatusType["CreateFail"] = "3";
})(ReportStatusType || (exports.ReportStatusType = ReportStatusType = {}));
/** 数据归档状态类型 */
var SaveStatusType;
(function (SaveStatusType) {
    /** 归档未完成 */
    SaveStatusType["UnSaveData"] = "0";
    /** 归档完成 */
    SaveStatusType["SaveDatad"] = "1";
})(SaveStatusType || (exports.SaveStatusType = SaveStatusType = {}));
/** 结算确认数据归档状态类型 */
var SettArchiveStatusType;
(function (SettArchiveStatusType) {
    /** 未归档数据 */
    SettArchiveStatusType["UnArchived"] = "0";
    /** 数据归档中 */
    SettArchiveStatusType["Archiving"] = "1";
    /** 已归档数据 */
    SettArchiveStatusType["Archived"] = "2";
    /** 归档数据失败 */
    SettArchiveStatusType["ArchiveFail"] = "3";
})(SettArchiveStatusType || (exports.SettArchiveStatusType = SettArchiveStatusType = {}));
/** CTP交易系统类型类型 */
var CTPType;
(function (CTPType) {
    /** 未知类型 */
    CTPType["Unkown"] = "0";
    /** 主中心 */
    CTPType["MainCenter"] = "1";
    /** 备中心 */
    CTPType["BackUp"] = "2";
})(CTPType || (exports.CTPType = CTPType = {}));
/** 平仓处理类型类型 */
var CloseDealType;
(function (CloseDealType) {
    /** 正常 */
    CloseDealType["Normal"] = "0";
    /** 投机平仓优先 */
    CloseDealType["SpecFirst"] = "1";
})(CloseDealType || (exports.CloseDealType = CloseDealType = {}));
/** 货币质押资金可用范围类型 */
var MortgageFundUseRangeType;
(function (MortgageFundUseRangeType) {
    /** 不能使用 */
    MortgageFundUseRangeType["None"] = "0";
    /** 用于保证金 */
    MortgageFundUseRangeType["Margin"] = "1";
    /** 用于手续费、盈亏、保证金 */
    MortgageFundUseRangeType["All"] = "2";
    /** 人民币方案3 */
    MortgageFundUseRangeType["CNY3"] = "3";
})(MortgageFundUseRangeType || (exports.MortgageFundUseRangeType = MortgageFundUseRangeType = {}));
/** 特殊产品类型类型 */
var SpecProductType;
(function (SpecProductType) {
    /** 郑商所套保产品 */
    SpecProductType["CzceHedge"] = "1";
    /** 货币质押产品 */
    SpecProductType["IneForeignCurrency"] = "2";
    /** 大连短线开平仓产品 */
    SpecProductType["DceOpenClose"] = "3";
})(SpecProductType || (exports.SpecProductType = SpecProductType = {}));
/** 货币质押类型类型 */
var FundMortgageType;
(function (FundMortgageType) {
    /** 质押 */
    FundMortgageType["Mortgage"] = "1";
    /** 解质 */
    FundMortgageType["Redemption"] = "2";
})(FundMortgageType || (exports.FundMortgageType = FundMortgageType = {}));
/** 投资者账户结算参数代码类型 */
var AccountSettlementParamIDType;
(function (AccountSettlementParamIDType) {
    /** 基础保证金 */
    AccountSettlementParamIDType["BaseMargin"] = "1";
    /** 最低权益标准 */
    AccountSettlementParamIDType["LowestInterest"] = "2";
})(AccountSettlementParamIDType || (exports.AccountSettlementParamIDType = AccountSettlementParamIDType = {}));
/** 货币质押方向类型 */
var FundMortDirectionType;
(function (FundMortDirectionType) {
    /** 货币质入 */
    FundMortDirectionType["In"] = "1";
    /** 货币质出 */
    FundMortDirectionType["Out"] = "2";
})(FundMortDirectionType || (exports.FundMortDirectionType = FundMortDirectionType = {}));
/** 换汇类别类型 */
var BusinessClassType;
(function (BusinessClassType) {
    /** 盈利 */
    BusinessClassType["Profit"] = "0";
    /** 亏损 */
    BusinessClassType["Loss"] = "1";
    /** 其他 */
    BusinessClassType["Other"] = "Z";
})(BusinessClassType || (exports.BusinessClassType = BusinessClassType = {}));
/** 换汇数据来源类型 */
var SwapSourceType;
(function (SwapSourceType) {
    /** 手工 */
    SwapSourceType["Manual"] = "0";
    /** 自动生成 */
    SwapSourceType["Automatic"] = "1";
})(SwapSourceType || (exports.SwapSourceType = SwapSourceType = {}));
/** 换汇类型类型 */
var CurrExDirectionType;
(function (CurrExDirectionType) {
    /** 结汇 */
    CurrExDirectionType["Settlement"] = "0";
    /** 售汇 */
    CurrExDirectionType["Sale"] = "1";
})(CurrExDirectionType || (exports.CurrExDirectionType = CurrExDirectionType = {}));
/** 申请状态类型 */
var CurrencySwapStatusType;
(function (CurrencySwapStatusType) {
    /** 已录入 */
    CurrencySwapStatusType["Entry"] = "1";
    /** 已审核 */
    CurrencySwapStatusType["Approve"] = "2";
    /** 已拒绝 */
    CurrencySwapStatusType["Refuse"] = "3";
    /** 已撤销 */
    CurrencySwapStatusType["Revoke"] = "4";
    /** 已发送 */
    CurrencySwapStatusType["Send"] = "5";
    /** 换汇成功 */
    CurrencySwapStatusType["Success"] = "6";
    /** 换汇失败 */
    CurrencySwapStatusType["Failure"] = "7";
})(CurrencySwapStatusType || (exports.CurrencySwapStatusType = CurrencySwapStatusType = {}));
/** 换汇发送标志类型 */
var ReqFlagType;
(function (ReqFlagType) {
    /** 未发送 */
    ReqFlagType["NoSend"] = "0";
    /** 发送成功 */
    ReqFlagType["SendSuccess"] = "1";
    /** 发送失败 */
    ReqFlagType["SendFailed"] = "2";
    /** 等待重发 */
    ReqFlagType["WaitReSend"] = "3";
})(ReqFlagType || (exports.ReqFlagType = ReqFlagType = {}));
/** 换汇返回成功标志类型 */
var ResFlagType;
(function (ResFlagType) {
    /** 成功 */
    ResFlagType["Success"] = "0";
    /** 账户余额不足 */
    ResFlagType["InsuffiCient"] = "1";
    /** 交易结果未知 */
    ResFlagType["UnKnown"] = "8";
})(ResFlagType || (exports.ResFlagType = ResFlagType = {}));
/** 修改状态类型 */
var ExStatusType;
(function (ExStatusType) {
    /** 修改前 */
    ExStatusType["Before"] = "0";
    /** 修改后 */
    ExStatusType["After"] = "1";
})(ExStatusType || (exports.ExStatusType = ExStatusType = {}));
/** 开户客户地域类型 */
var ClientRegionType;
(function (ClientRegionType) {
    /** 国内客户 */
    ClientRegionType["Domestic"] = "1";
    /** 港澳台客户 */
    ClientRegionType["GMT"] = "2";
    /** 国外客户 */
    ClientRegionType["Foreign"] = "3";
})(ClientRegionType || (exports.ClientRegionType = ClientRegionType = {}));
/** 是否有董事会类型 */
var HasBoardType;
(function (HasBoardType) {
    /** 没有 */
    HasBoardType["No"] = "0";
    /** 有 */
    HasBoardType["Yes"] = "1";
})(HasBoardType || (exports.HasBoardType = HasBoardType = {}));
/** 启动模式类型 */
var StartModeType;
(function (StartModeType) {
    /** 正常 */
    StartModeType["Normal"] = "1";
    /** 应急 */
    StartModeType["Emerge"] = "2";
    /** 恢复 */
    StartModeType["Restore"] = "3";
})(StartModeType || (exports.StartModeType = StartModeType = {}));
/** 模型类型类型 */
var TemplateType;
(function (TemplateType) {
    /** 全量 */
    TemplateType["Full"] = "1";
    /** 增量 */
    TemplateType["Increment"] = "2";
    /** 备份 */
    TemplateType["BackUp"] = "3";
})(TemplateType || (exports.TemplateType = TemplateType = {}));
/** 登录模式类型 */
var LoginModeType;
(function (LoginModeType) {
    /** 交易 */
    LoginModeType["Trade"] = "0";
    /** 转账 */
    LoginModeType["Transfer"] = "1";
})(LoginModeType || (exports.LoginModeType = LoginModeType = {}));
/** 日历提示类型类型 */
var PromptType;
(function (PromptType) {
    /** 合约上下市 */
    PromptType["Instrument"] = "1";
    /** 保证金分段生效 */
    PromptType["Margin"] = "2";
})(PromptType || (exports.PromptType = PromptType = {}));
/** 是否有托管人类型 */
var HasTrusteeType;
(function (HasTrusteeType) {
    /** 有 */
    HasTrusteeType["Yes"] = "1";
    /** 没有 */
    HasTrusteeType["No"] = "0";
})(HasTrusteeType || (exports.HasTrusteeType = HasTrusteeType = {}));
/** 机构类型类型 */
var AmType;
(function (AmType) {
    /** 银行 */
    AmType["Bank"] = "1";
    /** 证券公司 */
    AmType["Securities"] = "2";
    /** 基金公司 */
    AmType["Fund"] = "3";
    /** 保险公司 */
    AmType["Insurance"] = "4";
    /** 信托公司 */
    AmType["Trust"] = "5";
    /** 其他 */
    AmType["Other"] = "9";
})(AmType || (exports.AmType = AmType = {}));
/** 出入金类型类型 */
var CSRCFundIOType;
(function (CSRCFundIOType) {
    /** 出入金 */
    CSRCFundIOType["FundIO"] = "0";
    /** 银期换汇 */
    CSRCFundIOType["SwapCurrency"] = "1";
})(CSRCFundIOType || (exports.CSRCFundIOType = CSRCFundIOType = {}));
/** 结算账户类型类型 */
var CusAccountType;
(function (CusAccountType) {
    /** 期货结算账户 */
    CusAccountType["Futures"] = "1";
    /** 纯期货资管业务下的资管结算账户 */
    CusAccountType["AssetmgrFuture"] = "2";
    /** 综合类资管业务下的期货资管托管账户 */
    CusAccountType["AssetmgrTrustee"] = "3";
    /** 综合类资管业务下的资金中转账户 */
    CusAccountType["AssetmgrTransfer"] = "4";
})(CusAccountType || (exports.CusAccountType = CusAccountType = {}));
/** 通知语言类型类型 */
var LanguageType;
(function (LanguageType) {
    /** 中文 */
    LanguageType["Chinese"] = "1";
    /** 英文 */
    LanguageType["English"] = "2";
})(LanguageType || (exports.LanguageType = LanguageType = {}));
/** 资产管理客户类型类型 */
var AssetmgrClientType;
(function (AssetmgrClientType) {
    /** 个人资管客户 */
    AssetmgrClientType["Person"] = "1";
    /** 单位资管客户 */
    AssetmgrClientType["Organ"] = "2";
    /** 特殊单位资管客户 */
    AssetmgrClientType["SpecialOrgan"] = "4";
})(AssetmgrClientType || (exports.AssetmgrClientType = AssetmgrClientType = {}));
/** 投资类型类型 */
var AssetmgrType;
(function (AssetmgrType) {
    /** 期货类 */
    AssetmgrType["Futures"] = "3";
    /** 综合类 */
    AssetmgrType["SpecialOrgan"] = "4";
})(AssetmgrType || (exports.AssetmgrType = AssetmgrType = {}));
/** 合约比较类型类型 */
var CheckInstrType;
(function (CheckInstrType) {
    /** 合约交易所不存在 */
    CheckInstrType["HasExch"] = "0";
    /** 合约本系统不存在 */
    CheckInstrType["HasATP"] = "1";
    /** 合约比较不一致 */
    CheckInstrType["HasDiff"] = "2";
})(CheckInstrType || (exports.CheckInstrType = CheckInstrType = {}));
/** 交割类型类型 */
var DeliveryType;
(function (DeliveryType) {
    /** 手工交割 */
    DeliveryType["HandDeliv"] = "1";
    /** 到期交割 */
    DeliveryType["PersonDeliv"] = "2";
})(DeliveryType || (exports.DeliveryType = DeliveryType = {}));
/** 大额单边保证金算法类型 */
var MaxMarginSideAlgorithmType;
(function (MaxMarginSideAlgorithmType) {
    /** 不使用大额单边保证金算法 */
    MaxMarginSideAlgorithmType["NO"] = "0";
    /** 使用大额单边保证金算法 */
    MaxMarginSideAlgorithmType["YES"] = "1";
})(MaxMarginSideAlgorithmType || (exports.MaxMarginSideAlgorithmType = MaxMarginSideAlgorithmType = {}));
/** 资产管理客户类型类型 */
var DAClientType;
(function (DAClientType) {
    /** 自然人 */
    DAClientType["Person"] = "0";
    /** 法人 */
    DAClientType["Company"] = "1";
    /** 其他 */
    DAClientType["Other"] = "2";
})(DAClientType || (exports.DAClientType = DAClientType = {}));
/** 投资类型类型 */
var UOAAssetmgrType;
(function (UOAAssetmgrType) {
    /** 期货类 */
    UOAAssetmgrType["Futures"] = "1";
    /** 综合类 */
    UOAAssetmgrType["SpecialOrgan"] = "2";
})(UOAAssetmgrType || (exports.UOAAssetmgrType = UOAAssetmgrType = {}));
/** 买卖方向类型 */
var DirectionEnType;
(function (DirectionEnType) {
    /** Buy */
    DirectionEnType["Buy"] = "0";
    /** Sell */
    DirectionEnType["Sell"] = "1";
})(DirectionEnType || (exports.DirectionEnType = DirectionEnType = {}));
/** 开平标志类型 */
var OffsetFlagEnType;
(function (OffsetFlagEnType) {
    /** Position Opening */
    OffsetFlagEnType["Open"] = "0";
    /** Position Close */
    OffsetFlagEnType["Close"] = "1";
    /** Forced Liquidation */
    OffsetFlagEnType["ForceClose"] = "2";
    /** Close Today */
    OffsetFlagEnType["CloseToday"] = "3";
    /** Close Prev. */
    OffsetFlagEnType["CloseYesterday"] = "4";
    /** Forced Reduction */
    OffsetFlagEnType["ForceOff"] = "5";
    /** Local Forced Liquidation */
    OffsetFlagEnType["LocalForceClose"] = "6";
})(OffsetFlagEnType || (exports.OffsetFlagEnType = OffsetFlagEnType = {}));
/** 投机套保标志类型 */
var HedgeFlagEnType;
(function (HedgeFlagEnType) {
    /** Speculation */
    HedgeFlagEnType["Speculation"] = "1";
    /** Arbitrage */
    HedgeFlagEnType["Arbitrage"] = "2";
    /** Hedge */
    HedgeFlagEnType["Hedge"] = "3";
})(HedgeFlagEnType || (exports.HedgeFlagEnType = HedgeFlagEnType = {}));
/** 出入金类型类型 */
var FundIOTypeEnType;
(function (FundIOTypeEnType) {
    /** Deposit/Withdrawal */
    FundIOTypeEnType["FundIO"] = "1";
    /** Bank-Futures Transfer */
    FundIOTypeEnType["Transfer"] = "2";
    /** Bank-Futures FX Exchange */
    FundIOTypeEnType["SwapCurrency"] = "3";
})(FundIOTypeEnType || (exports.FundIOTypeEnType = FundIOTypeEnType = {}));
/** 资金类型类型 */
var FundTypeEnType;
(function (FundTypeEnType) {
    /** Bank Deposit */
    FundTypeEnType["Deposite"] = "1";
    /** Payment/Fee */
    FundTypeEnType["ItemFund"] = "2";
    /** Brokerage Adj */
    FundTypeEnType["Company"] = "3";
    /** Internal Transfer */
    FundTypeEnType["InnerTransfer"] = "4";
})(FundTypeEnType || (exports.FundTypeEnType = FundTypeEnType = {}));
/** 出入金方向类型 */
var FundDirectionEnType;
(function (FundDirectionEnType) {
    /** Deposit */
    FundDirectionEnType["In"] = "1";
    /** Withdrawal */
    FundDirectionEnType["Out"] = "2";
})(FundDirectionEnType || (exports.FundDirectionEnType = FundDirectionEnType = {}));
/** 货币质押方向类型 */
var FundMortDirectionEnType;
(function (FundMortDirectionEnType) {
    /** Pledge */
    FundMortDirectionEnType["In"] = "1";
    /** Redemption */
    FundMortDirectionEnType["Out"] = "2";
})(FundMortDirectionEnType || (exports.FundMortDirectionEnType = FundMortDirectionEnType = {}));
/** 期权类型类型 */
var OptionsType;
(function (OptionsType) {
    /** 看涨 */
    OptionsType["CallOptions"] = "1";
    /** 看跌 */
    OptionsType["PutOptions"] = "2";
})(OptionsType || (exports.OptionsType = OptionsType = {}));
/** 执行方式类型 */
var StrikeModeType;
(function (StrikeModeType) {
    /** 欧式 */
    StrikeModeType["Continental"] = "0";
    /** 美式 */
    StrikeModeType["American"] = "1";
    /** 百慕大 */
    StrikeModeType["Bermuda"] = "2";
})(StrikeModeType || (exports.StrikeModeType = StrikeModeType = {}));
/** 执行类型类型 */
var StrikeType;
(function (StrikeType) {
    /** 自身对冲 */
    StrikeType["Hedge"] = "0";
    /** 匹配执行 */
    StrikeType["Match"] = "1";
})(StrikeType || (exports.StrikeType = StrikeType = {}));
/** 中金所期权放弃执行申请类型类型 */
var ApplyType;
(function (ApplyType) {
    /** 不执行数量 */
    ApplyType["NotStrikeNum"] = "4";
})(ApplyType || (exports.ApplyType = ApplyType = {}));
/** 放弃执行申请数据来源类型 */
var GiveUpDataSourceType;
(function (GiveUpDataSourceType) {
    /** 系统生成 */
    GiveUpDataSourceType["Gen"] = "0";
    /** 手工添加 */
    GiveUpDataSourceType["Hand"] = "1";
})(GiveUpDataSourceType || (exports.GiveUpDataSourceType = GiveUpDataSourceType = {}));
/** 执行结果类型 */
var ExecResultType;
(function (ExecResultType) {
    /** 没有执行 */
    ExecResultType["NoExec"] = "n";
    /** 已经取消 */
    ExecResultType["Canceled"] = "c";
    /** 执行成功 */
    ExecResultType["OK"] = "0";
    /** 期权持仓不够 */
    ExecResultType["NoPosition"] = "1";
    /** 资金不够 */
    ExecResultType["NoDeposit"] = "2";
    /** 会员不存在 */
    ExecResultType["NoParticipant"] = "3";
    /** 客户不存在 */
    ExecResultType["NoClient"] = "4";
    /** 合约不存在 */
    ExecResultType["NoInstrument"] = "6";
    /** 没有执行权限 */
    ExecResultType["NoRight"] = "7";
    /** 不合理的数量 */
    ExecResultType["InvalidVolume"] = "8";
    /** 没有足够的历史成交 */
    ExecResultType["NoEnoughHistoryTrade"] = "9";
    /** 未知 */
    ExecResultType["Unknown"] = "a";
})(ExecResultType || (exports.ExecResultType = ExecResultType = {}));
/** 组合类型类型 */
var CombinationType;
(function (CombinationType) {
    /** 期货组合 */
    CombinationType["Future"] = "0";
    /** 垂直价差BUL */
    CombinationType["BUL"] = "1";
    /** 垂直价差BER */
    CombinationType["BER"] = "2";
    /** 跨式组合 */
    CombinationType["STD"] = "3";
    /** 宽跨式组合 */
    CombinationType["STG"] = "4";
    /** 备兑组合 */
    CombinationType["PRT"] = "5";
    /** 时间价差组合 */
    CombinationType["CAS"] = "6";
    /** 期权对锁组合 */
    CombinationType["OPL"] = "7";
    /** 买备兑组合 */
    CombinationType["BFO"] = "8";
    /** 买入期权垂直价差组合 */
    CombinationType["BLS"] = "9";
    /** 卖出期权垂直价差组合 */
    CombinationType["BES"] = "a";
})(CombinationType || (exports.CombinationType = CombinationType = {}));
/** 组合类型类型 */
var DceCombinationType;
(function (DceCombinationType) {
    /** 期货对锁组合 */
    DceCombinationType["SPL"] = "0";
    /** 期权对锁组合 */
    DceCombinationType["OPL"] = "1";
    /** 期货跨期组合 */
    DceCombinationType["SP"] = "2";
    /** 期货跨品种组合 */
    DceCombinationType["SPC"] = "3";
    /** 买入期权垂直价差组合 */
    DceCombinationType["BLS"] = "4";
    /** 卖出期权垂直价差组合 */
    DceCombinationType["BES"] = "5";
    /** 期权日历价差组合 */
    DceCombinationType["CAS"] = "6";
    /** 期权跨式组合 */
    DceCombinationType["STD"] = "7";
    /** 期权宽跨式组合 */
    DceCombinationType["STG"] = "8";
    /** 买入期货期权组合 */
    DceCombinationType["BFO"] = "9";
    /** 卖出期货期权组合 */
    DceCombinationType["SFO"] = "a";
})(DceCombinationType || (exports.DceCombinationType = DceCombinationType = {}));
/** 期权权利金价格类型类型 */
var OptionRoyaltyPriceType;
(function (OptionRoyaltyPriceType) {
    /** 昨结算价 */
    OptionRoyaltyPriceType["PreSettlementPrice"] = "1";
    /** 开仓价 */
    OptionRoyaltyPriceType["OpenPrice"] = "4";
    /** 最新价与昨结算价较大值 */
    OptionRoyaltyPriceType["MaxPreSettlementPrice"] = "5";
})(OptionRoyaltyPriceType || (exports.OptionRoyaltyPriceType = OptionRoyaltyPriceType = {}));
/** 权益算法类型 */
var BalanceAlgorithmType;
(function (BalanceAlgorithmType) {
    /** 不计算期权市值盈亏 */
    BalanceAlgorithmType["Default"] = "1";
    /** 计算期权市值亏损 */
    BalanceAlgorithmType["IncludeOptValLost"] = "2";
})(BalanceAlgorithmType || (exports.BalanceAlgorithmType = BalanceAlgorithmType = {}));
/** 执行类型类型 */
var ActionType;
(function (ActionType) {
    /** 执行 */
    ActionType["Exec"] = "1";
    /** 放弃 */
    ActionType["Abandon"] = "2";
})(ActionType || (exports.ActionType = ActionType = {}));
/** 询价状态类型 */
var ForQuoteStatusType;
(function (ForQuoteStatusType) {
    /** 已经提交 */
    ForQuoteStatusType["Submitted"] = "a";
    /** 已经接受 */
    ForQuoteStatusType["Accepted"] = "b";
    /** 已经被拒绝 */
    ForQuoteStatusType["Rejected"] = "c";
})(ForQuoteStatusType || (exports.ForQuoteStatusType = ForQuoteStatusType = {}));
/** 取值方式类型 */
var ValueMethodType;
(function (ValueMethodType) {
    /** 按绝对值 */
    ValueMethodType["Absolute"] = "0";
    /** 按比率 */
    ValueMethodType["Ratio"] = "1";
})(ValueMethodType || (exports.ValueMethodType = ValueMethodType = {}));
/** 期权行权后是否保留期货头寸的标记类型 */
var ExecOrderPositionFlagType;
(function (ExecOrderPositionFlagType) {
    /** 保留 */
    ExecOrderPositionFlagType["Reserve"] = "0";
    /** 不保留 */
    ExecOrderPositionFlagType["UnReserve"] = "1";
})(ExecOrderPositionFlagType || (exports.ExecOrderPositionFlagType = ExecOrderPositionFlagType = {}));
/** 期权行权后生成的头寸是否自动平仓类型 */
var ExecOrderCloseFlagType;
(function (ExecOrderCloseFlagType) {
    /** 自动平仓 */
    ExecOrderCloseFlagType["AutoClose"] = "0";
    /** 免于自动平仓 */
    ExecOrderCloseFlagType["NotToClose"] = "1";
})(ExecOrderCloseFlagType || (exports.ExecOrderCloseFlagType = ExecOrderCloseFlagType = {}));
/** 产品类型类型 */
var ProductType;
(function (ProductType) {
    /** 期货 */
    ProductType["Futures"] = "1";
    /** 期权 */
    ProductType["Options"] = "2";
})(ProductType || (exports.ProductType = ProductType = {}));
/** 郑商所结算文件名类型 */
var CZCEUploadFileNameType;
(function (CZCEUploadFileNameType) {
    /** ^\d{8}_zz_\d{4} */
    CZCEUploadFileNameType["O"] = "O";
    /** ^\d{8}成交表 */
    CZCEUploadFileNameType["T"] = "T";
    /** ^\d{8}单腿持仓表new */
    CZCEUploadFileNameType["P"] = "P";
    /** ^\d{8}非平仓了结表 */
    CZCEUploadFileNameType["N"] = "N";
    /** ^\d{8}平仓表 */
    CZCEUploadFileNameType["L"] = "L";
    /** ^\d{8}资金表 */
    CZCEUploadFileNameType["F"] = "F";
    /** ^\d{8}组合持仓表 */
    CZCEUploadFileNameType["C"] = "C";
    /** ^\d{8}保证金参数表 */
    CZCEUploadFileNameType["M"] = "M";
})(CZCEUploadFileNameType || (exports.CZCEUploadFileNameType = CZCEUploadFileNameType = {}));
/** 大商所结算文件名类型 */
var DCEUploadFileNameType;
(function (DCEUploadFileNameType) {
    /** ^\d{8}_dl_\d{3} */
    DCEUploadFileNameType["O"] = "O";
    /** ^\d{8}_成交表 */
    DCEUploadFileNameType["T"] = "T";
    /** ^\d{8}_持仓表 */
    DCEUploadFileNameType["P"] = "P";
    /** ^\d{8}_资金结算表 */
    DCEUploadFileNameType["F"] = "F";
    /** ^\d{8}_优惠组合持仓明细表 */
    DCEUploadFileNameType["C"] = "C";
    /** ^\d{8}_持仓明细表 */
    DCEUploadFileNameType["D"] = "D";
    /** ^\d{8}_保证金参数表 */
    DCEUploadFileNameType["M"] = "M";
    /** ^\d{8}_期权执行表 */
    DCEUploadFileNameType["S"] = "S";
})(DCEUploadFileNameType || (exports.DCEUploadFileNameType = DCEUploadFileNameType = {}));
/** 上期所结算文件名类型 */
var SHFEUploadFileNameType;
(function (SHFEUploadFileNameType) {
    /** ^\d{4}_\d{8}_\d{8}_DailyFundChg */
    SHFEUploadFileNameType["O"] = "O";
    /** ^\d{4}_\d{8}_\d{8}_Trade */
    SHFEUploadFileNameType["T"] = "T";
    /** ^\d{4}_\d{8}_\d{8}_SettlementDetail */
    SHFEUploadFileNameType["P"] = "P";
    /** ^\d{4}_\d{8}_\d{8}_Capital */
    SHFEUploadFileNameType["F"] = "F";
})(SHFEUploadFileNameType || (exports.SHFEUploadFileNameType = SHFEUploadFileNameType = {}));
/** 中金所结算文件名类型 */
var CFFEXUploadFileNameType;
(function (CFFEXUploadFileNameType) {
    /** ^\d{4}_SG\d{1}_\d{8}_\d{1}_Trade */
    CFFEXUploadFileNameType["T"] = "T";
    /** ^\d{4}_SG\d{1}_\d{8}_\d{1}_SettlementDetail */
    CFFEXUploadFileNameType["P"] = "P";
    /** ^\d{4}_SG\d{1}_\d{8}_\d{1}_Capital */
    CFFEXUploadFileNameType["F"] = "F";
    /** ^\d{4}_SG\d{1}_\d{8}_\d{1}_OptionExec */
    CFFEXUploadFileNameType["S"] = "S";
})(CFFEXUploadFileNameType || (exports.CFFEXUploadFileNameType = CFFEXUploadFileNameType = {}));
/** 组合指令方向类型 */
var CombDirectionType;
(function (CombDirectionType) {
    /** 申请组合 */
    CombDirectionType["Comb"] = "0";
    /** 申请拆分 */
    CombDirectionType["UnComb"] = "1";
    /** 操作员删组合单 */
    CombDirectionType["DelComb"] = "2";
})(CombDirectionType || (exports.CombDirectionType = CombDirectionType = {}));
/** 行权偏移类型类型 */
var StrikeOffsetType;
(function (StrikeOffsetType) {
    /** 实值额 */
    StrikeOffsetType["RealValue"] = "1";
    /** 盈利额 */
    StrikeOffsetType["ProfitValue"] = "2";
    /** 实值比例 */
    StrikeOffsetType["RealRatio"] = "3";
    /** 盈利比例 */
    StrikeOffsetType["ProfitRatio"] = "4";
})(StrikeOffsetType || (exports.StrikeOffsetType = StrikeOffsetType = {}));
/** 预约开户状态类型 */
var ReserveOpenAccStasType;
(function (ReserveOpenAccStasType) {
    /** 等待处理中 */
    ReserveOpenAccStasType["Processing"] = "0";
    /** 已撤销 */
    ReserveOpenAccStasType["Cancelled"] = "1";
    /** 已开户 */
    ReserveOpenAccStasType["Opened"] = "2";
    /** 无效请求 */
    ReserveOpenAccStasType["Invalid"] = "3";
})(ReserveOpenAccStasType || (exports.ReserveOpenAccStasType = ReserveOpenAccStasType = {}));
/** 弱密码来源类型 */
var WeakPasswordSourceType;
(function (WeakPasswordSourceType) {
    /** 弱密码库 */
    WeakPasswordSourceType["Lib"] = "1";
    /** 手工录入 */
    WeakPasswordSourceType["Manual"] = "2";
})(WeakPasswordSourceType || (exports.WeakPasswordSourceType = WeakPasswordSourceType = {}));
/** 期权行权的头寸是否自对冲类型 */
var OptSelfCloseFlagType;
(function (OptSelfCloseFlagType) {
    /** 自对冲期权仓位 */
    OptSelfCloseFlagType["CloseSelfOptionPosition"] = "1";
    /** 保留期权仓位 */
    OptSelfCloseFlagType["ReserveOptionPosition"] = "2";
    /** 自对冲卖方履约后的期货仓位 */
    OptSelfCloseFlagType["SellCloseSelfFuturePosition"] = "3";
    /** 保留卖方履约后的期货仓位 */
    OptSelfCloseFlagType["ReserveFuturePosition"] = "4";
})(OptSelfCloseFlagType || (exports.OptSelfCloseFlagType = OptSelfCloseFlagType = {}));
/** 业务类型类型 */
var BizType;
(function (BizType) {
    /** 期货 */
    BizType["Future"] = "1";
    /** 证券 */
    BizType["Stock"] = "2";
})(BizType || (exports.BizType = BizType = {}));
/** 用户App类型类型 */
var AppType;
(function (AppType) {
    /** 直连的投资者 */
    AppType["Investor"] = "1";
    /** 为每个投资者都创建连接的中继 */
    AppType["InvestorRelay"] = "2";
    /** 所有投资者共享一个操作员连接的中继 */
    AppType["OperatorRelay"] = "3";
    /** 未知 */
    AppType["UnKnown"] = "4";
})(AppType || (exports.AppType = AppType = {}));
/** 应答类型类型 */
var ResponseValueType;
(function (ResponseValueType) {
    /** 检查成功 */
    ResponseValueType["Right"] = "0";
    /** 检查失败 */
    ResponseValueType["Refuse"] = "1";
})(ResponseValueType || (exports.ResponseValueType = ResponseValueType = {}));
/** OTC成交类型类型 */
var OTCTradeType;
(function (OTCTradeType) {
    /** 大宗交易 */
    OTCTradeType["Block"] = "0";
    /** 期转现 */
    OTCTradeType["EFP"] = "1";
})(OTCTradeType || (exports.OTCTradeType = OTCTradeType = {}));
/** 期现风险匹配方式类型 */
var MatchType;
(function (MatchType) {
    /** 基点价值 */
    MatchType["DV01"] = "1";
    /** 面值 */
    MatchType["ParValue"] = "2";
})(MatchType || (exports.MatchType = MatchType = {}));
/** 用户终端认证方式类型 */
var AuthType;
(function (AuthType) {
    /** 白名单校验 */
    AuthType["WHITE"] = "0";
    /** 黑名单校验 */
    AuthType["BLACK"] = "1";
})(AuthType || (exports.AuthType = AuthType = {}));
/** 合约分类方式类型 */
var ClassType;
(function (ClassType) {
    /** 所有合约 */
    ClassType["ALL"] = "0";
    /** 期货、即期、期转现、Tas、金属指数合约 */
    ClassType["FUTURE"] = "1";
    /** 期货、现货期权合约 */
    ClassType["OPTION"] = "2";
    /** 组合合约 */
    ClassType["COMB"] = "3";
})(ClassType || (exports.ClassType = ClassType = {}));
/** 合约交易状态分类方式类型 */
var TradingType;
(function (TradingType) {
    /** 所有状态 */
    TradingType["ALL"] = "0";
    /** 交易 */
    TradingType["TRADE"] = "1";
    /** 非交易 */
    TradingType["UNTRADE"] = "2";
})(TradingType || (exports.TradingType = TradingType = {}));
/** 产品状态类型 */
var ProductStatusType;
(function (ProductStatusType) {
    /** 可交易 */
    ProductStatusType["tradeable"] = "1";
    /** 不可交易 */
    ProductStatusType["untradeable"] = "2";
})(ProductStatusType || (exports.ProductStatusType = ProductStatusType = {}));
/** 追平状态类型 */
var SyncDeltaStatusType;
(function (SyncDeltaStatusType) {
    /** 交易可读 */
    SyncDeltaStatusType["Readable"] = "1";
    /** 交易在读 */
    SyncDeltaStatusType["Reading"] = "2";
    /** 交易读取完成 */
    SyncDeltaStatusType["Readend"] = "3";
    /** 追平失败 交易本地状态结算不存在 */
    SyncDeltaStatusType["OptErr"] = "e";
})(SyncDeltaStatusType || (exports.SyncDeltaStatusType = SyncDeltaStatusType = {}));
/** 操作标志类型 */
var ActionDirectionType;
(function (ActionDirectionType) {
    /** 增加 */
    ActionDirectionType["Add"] = "1";
    /** 删除 */
    ActionDirectionType["Del"] = "2";
    /** 更新 */
    ActionDirectionType["Upd"] = "3";
})(ActionDirectionType || (exports.ActionDirectionType = ActionDirectionType = {}));
/** 撤单时选择席位算法类型 */
var OrderCancelAlgType;
(function (OrderCancelAlgType) {
    /** 轮询席位撤单 */
    OrderCancelAlgType["Balance"] = "1";
    /** 优先原报单席位撤单 */
    OrderCancelAlgType["OrigFirst"] = "2";
})(OrderCancelAlgType || (exports.OrderCancelAlgType = OrderCancelAlgType = {}));
/** 开仓量限制粒度类型 */
var OpenLimitControlLevelType;
(function (OpenLimitControlLevelType) {
    /** 不控制 */
    OpenLimitControlLevelType["None"] = "0";
    /** 产品级别 */
    OpenLimitControlLevelType["Product"] = "1";
    /** 合约级别 */
    OpenLimitControlLevelType["Inst"] = "2";
})(OpenLimitControlLevelType || (exports.OpenLimitControlLevelType = OpenLimitControlLevelType = {}));
/** 报单频率控制粒度类型 */
var OrderFreqControlLevelType;
(function (OrderFreqControlLevelType) {
    /** 不控制 */
    OrderFreqControlLevelType["None"] = "0";
    /** 产品级别 */
    OrderFreqControlLevelType["Product"] = "1";
    /** 合约级别 */
    OrderFreqControlLevelType["Inst"] = "2";
})(OrderFreqControlLevelType || (exports.OrderFreqControlLevelType = OrderFreqControlLevelType = {}));
/** 枚举bool类型类型 */
var EnumBoolType;
(function (EnumBoolType) {
    /** false */
    EnumBoolType["False"] = "0";
    /** true */
    EnumBoolType["True"] = "1";
})(EnumBoolType || (exports.EnumBoolType = EnumBoolType = {}));
