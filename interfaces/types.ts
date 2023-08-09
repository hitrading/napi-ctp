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

/*----------------------------------------------------------------------------*/

export type RspUserLoginField = {
  kind: "CThostFtdcRspUserLoginField";
  TradingDay: string;
  LoginTime: string;
  BrokerID: string;
  UserID: string;
  SystemName: string;
  FrontID: number;
  SessionID: number;
  MaxOrderRef: string;
  SHFETime: string;
  DCETime: string;
  CZCETime: string;
  FFEXTime: string;
  INETime: string;
  SysVersion: string;
};

export type UserLogoutField = {
  kind: "CThostFtdcUserLogoutField";
  BrokerID: string;
  UserID: string;
};

export type MulticastInstrumentField = {
  kind: "CThostFtdcMulticastInstrumentField";
  TopicID: number;
  InstrumentNo: number;
  CodePrice: number;
  VolumeMultiple: number;
  PriceTick: number;
  InstrumentID: string;
};

export type RspInfoField = {
  kind: "CThostFtdcRspInfoField";
  ErrorID: number;
  ErrorMsg: string;
};

export type SpecificInstrumentField = {
  kind: "CThostFtdcSpecificInstrumentField";
  InstrumentID: string;
};

export type DepthMarketDataField = {
  kind: "CThostFtdcDepthMarketDataField";
  TradingDay: string;
  ExchangeID: string;
  LastPrice: number;
  PreSettlementPrice: number;
  PreClosePrice: number;
  PreOpenInterest: number;
  OpenPrice: number;
  HighestPrice: number;
  LowestPrice: number;
  Volume: number;
  Turnover: number;
  OpenInterest: number;
  ClosePrice: number;
  SettlementPrice: number;
  UpperLimitPrice: number;
  LowerLimitPrice: number;
  PreDelta: number;
  CurrDelta: number;
  UpdateTime: string;
  UpdateMillisec: number;
  BidPrice1: number;
  BidVolume1: number;
  AskPrice1: number;
  AskVolume1: number;
  BidPrice2: number;
  BidVolume2: number;
  AskPrice2: number;
  AskVolume2: number;
  BidPrice3: number;
  BidVolume3: number;
  AskPrice3: number;
  AskVolume3: number;
  BidPrice4: number;
  BidVolume4: number;
  AskPrice4: number;
  AskVolume4: number;
  BidPrice5: number;
  BidVolume5: number;
  AskPrice5: number;
  AskVolume5: number;
  AveragePrice: number;
  ActionDay: string;
  InstrumentID: string;
  ExchangeInstID: string;
  BandingUpperPrice: number;
  BandingLowerPrice: number;
};

export type ForQuoteRspField = {
  kind: "CThostFtdcForQuoteRspField";
  TradingDay: string;
  ForQuoteSysID: string;
  ForQuoteTime: string;
  ActionDay: string;
  ExchangeID: string;
  InstrumentID: string;
};

export type RspAuthenticateField = {
  kind: "CThostFtdcRspAuthenticateField";
  BrokerID: string;
  UserID: string;
  UserProductInfo: string;
  AppID: string;
  AppType: string;
};

export type UserPasswordUpdateField = {
  kind: "CThostFtdcUserPasswordUpdateField";
  BrokerID: string;
  UserID: string;
  OldPassword: string;
  NewPassword: string;
};

export type TradingAccountPasswordUpdateField = {
  kind: "CThostFtdcTradingAccountPasswordUpdateField";
  BrokerID: string;
  AccountID: string;
  OldPassword: string;
  NewPassword: string;
  CurrencyID: string;
};

export type RspUserAuthMethodField = {
  kind: "CThostFtdcRspUserAuthMethodField";
  UsableAuthMethod: number;
};

export type RspGenUserCaptchaField = {
  kind: "CThostFtdcRspGenUserCaptchaField";
  BrokerID: string;
  UserID: string;
  CaptchaInfo: Buffer;
};

export type RspGenUserTextField = {
  kind: "CThostFtdcRspGenUserTextField";
  UserTextSeq: number;
};

export type InputOrderField = {
  kind: "CThostFtdcInputOrderField";
  BrokerID: string;
  InvestorID: string;
  OrderRef: string;
  UserID: string;
  OrderPriceType: string;
  Direction: string;
  CombOffsetFlag: string;
  CombHedgeFlag: string;
  LimitPrice: number;
  VolumeTotalOriginal: number;
  TimeCondition: string;
  GTDDate: string;
  VolumeCondition: string;
  MinVolume: number;
  ContingentCondition: string;
  StopPrice: number;
  ForceCloseReason: string;
  IsAutoSuspend: number;
  BusinessUnit: string;
  RequestID: number;
  UserForceClose: number;
  IsSwapOrder: number;
  ExchangeID: string;
  InvestUnitID: string;
  AccountID: string;
  CurrencyID: string;
  ClientID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type ParkedOrderField = {
  kind: "CThostFtdcParkedOrderField";
  BrokerID: string;
  InvestorID: string;
  OrderRef: string;
  UserID: string;
  OrderPriceType: string;
  Direction: string;
  CombOffsetFlag: string;
  CombHedgeFlag: string;
  LimitPrice: number;
  VolumeTotalOriginal: number;
  TimeCondition: string;
  GTDDate: string;
  VolumeCondition: string;
  MinVolume: number;
  ContingentCondition: string;
  StopPrice: number;
  ForceCloseReason: string;
  IsAutoSuspend: number;
  BusinessUnit: string;
  RequestID: number;
  UserForceClose: number;
  ExchangeID: string;
  ParkedOrderID: string;
  UserType: string;
  Status: string;
  ErrorID: number;
  ErrorMsg: string;
  IsSwapOrder: number;
  AccountID: string;
  CurrencyID: string;
  ClientID: string;
  InvestUnitID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type ParkedOrderActionField = {
  kind: "CThostFtdcParkedOrderActionField";
  BrokerID: string;
  InvestorID: string;
  OrderActionRef: number;
  OrderRef: string;
  RequestID: number;
  FrontID: number;
  SessionID: number;
  ExchangeID: string;
  OrderSysID: string;
  ActionFlag: string;
  LimitPrice: number;
  VolumeChange: number;
  UserID: string;
  ParkedOrderActionID: string;
  UserType: string;
  Status: string;
  ErrorID: number;
  ErrorMsg: string;
  InvestUnitID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type InputOrderActionField = {
  kind: "CThostFtdcInputOrderActionField";
  BrokerID: string;
  InvestorID: string;
  OrderActionRef: number;
  OrderRef: string;
  RequestID: number;
  FrontID: number;
  SessionID: number;
  ExchangeID: string;
  OrderSysID: string;
  ActionFlag: string;
  LimitPrice: number;
  VolumeChange: number;
  UserID: string;
  InvestUnitID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type QryMaxOrderVolumeField = {
  kind: "CThostFtdcQryMaxOrderVolumeField";
  BrokerID: string;
  InvestorID: string;
  Direction: string;
  OffsetFlag: string;
  HedgeFlag: string;
  MaxVolume: number;
  ExchangeID: string;
  InvestUnitID: string;
  InstrumentID: string;
};

export type SettlementInfoConfirmField = {
  kind: "CThostFtdcSettlementInfoConfirmField";
  BrokerID: string;
  InvestorID: string;
  ConfirmDate: string;
  ConfirmTime: string;
  SettlementID: number;
  AccountID: string;
  CurrencyID: string;
};

export type RemoveParkedOrderField = {
  kind: "CThostFtdcRemoveParkedOrderField";
  BrokerID: string;
  InvestorID: string;
  ParkedOrderID: string;
  InvestUnitID: string;
};

export type RemoveParkedOrderActionField = {
  kind: "CThostFtdcRemoveParkedOrderActionField";
  BrokerID: string;
  InvestorID: string;
  ParkedOrderActionID: string;
  InvestUnitID: string;
};

export type InputExecOrderField = {
  kind: "CThostFtdcInputExecOrderField";
  BrokerID: string;
  InvestorID: string;
  ExecOrderRef: string;
  UserID: string;
  Volume: number;
  RequestID: number;
  BusinessUnit: string;
  OffsetFlag: string;
  HedgeFlag: string;
  ActionType: string;
  PosiDirection: string;
  ReservePositionFlag: string;
  CloseFlag: string;
  ExchangeID: string;
  InvestUnitID: string;
  AccountID: string;
  CurrencyID: string;
  ClientID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type InputExecOrderActionField = {
  kind: "CThostFtdcInputExecOrderActionField";
  BrokerID: string;
  InvestorID: string;
  ExecOrderActionRef: number;
  ExecOrderRef: string;
  RequestID: number;
  FrontID: number;
  SessionID: number;
  ExchangeID: string;
  ExecOrderSysID: string;
  ActionFlag: string;
  UserID: string;
  InvestUnitID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type InputForQuoteField = {
  kind: "CThostFtdcInputForQuoteField";
  BrokerID: string;
  InvestorID: string;
  ForQuoteRef: string;
  UserID: string;
  ExchangeID: string;
  InvestUnitID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type InputQuoteField = {
  kind: "CThostFtdcInputQuoteField";
  BrokerID: string;
  InvestorID: string;
  QuoteRef: string;
  UserID: string;
  AskPrice: number;
  BidPrice: number;
  AskVolume: number;
  BidVolume: number;
  RequestID: number;
  BusinessUnit: string;
  AskOffsetFlag: string;
  BidOffsetFlag: string;
  AskHedgeFlag: string;
  BidHedgeFlag: string;
  AskOrderRef: string;
  BidOrderRef: string;
  ForQuoteSysID: string;
  ExchangeID: string;
  InvestUnitID: string;
  ClientID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
  ReplaceSysID: string;
};

export type InputQuoteActionField = {
  kind: "CThostFtdcInputQuoteActionField";
  BrokerID: string;
  InvestorID: string;
  QuoteActionRef: number;
  QuoteRef: string;
  RequestID: number;
  FrontID: number;
  SessionID: number;
  ExchangeID: string;
  QuoteSysID: string;
  ActionFlag: string;
  UserID: string;
  InvestUnitID: string;
  ClientID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type InputBatchOrderActionField = {
  kind: "CThostFtdcInputBatchOrderActionField";
  BrokerID: string;
  InvestorID: string;
  OrderActionRef: number;
  RequestID: number;
  FrontID: number;
  SessionID: number;
  ExchangeID: string;
  UserID: string;
  InvestUnitID: string;
  MacAddress: string;
  IPAddress: string;
};

export type InputOptionSelfCloseField = {
  kind: "CThostFtdcInputOptionSelfCloseField";
  BrokerID: string;
  InvestorID: string;
  OptionSelfCloseRef: string;
  UserID: string;
  Volume: number;
  RequestID: number;
  BusinessUnit: string;
  HedgeFlag: string;
  OptSelfCloseFlag: string;
  ExchangeID: string;
  InvestUnitID: string;
  AccountID: string;
  CurrencyID: string;
  ClientID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type InputOptionSelfCloseActionField = {
  kind: "CThostFtdcInputOptionSelfCloseActionField";
  BrokerID: string;
  InvestorID: string;
  OptionSelfCloseActionRef: number;
  OptionSelfCloseRef: string;
  RequestID: number;
  FrontID: number;
  SessionID: number;
  ExchangeID: string;
  OptionSelfCloseSysID: string;
  ActionFlag: string;
  UserID: string;
  InvestUnitID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type InputCombActionField = {
  kind: "CThostFtdcInputCombActionField";
  BrokerID: string;
  InvestorID: string;
  CombActionRef: string;
  UserID: string;
  Direction: string;
  Volume: number;
  CombDirection: string;
  HedgeFlag: string;
  ExchangeID: string;
  MacAddress: string;
  InvestUnitID: string;
  FrontID: number;
  SessionID: number;
  InstrumentID: string;
  IPAddress: string;
};

export type OrderField = {
  kind: "CThostFtdcOrderField";
  BrokerID: string;
  InvestorID: string;
  OrderRef: string;
  UserID: string;
  OrderPriceType: string;
  Direction: string;
  CombOffsetFlag: string;
  CombHedgeFlag: string;
  LimitPrice: number;
  VolumeTotalOriginal: number;
  TimeCondition: string;
  GTDDate: string;
  VolumeCondition: string;
  MinVolume: number;
  ContingentCondition: string;
  StopPrice: number;
  ForceCloseReason: string;
  IsAutoSuspend: number;
  BusinessUnit: string;
  RequestID: number;
  OrderLocalID: string;
  ExchangeID: string;
  ParticipantID: string;
  ClientID: string;
  TraderID: string;
  InstallID: number;
  OrderSubmitStatus: string;
  NotifySequence: number;
  TradingDay: string;
  SettlementID: number;
  OrderSysID: string;
  OrderSource: string;
  OrderStatus: string;
  OrderType: string;
  VolumeTraded: number;
  VolumeTotal: number;
  InsertDate: string;
  InsertTime: string;
  ActiveTime: string;
  SuspendTime: string;
  UpdateTime: string;
  CancelTime: string;
  ActiveTraderID: string;
  ClearingPartID: string;
  SequenceNo: number;
  FrontID: number;
  SessionID: number;
  UserProductInfo: string;
  StatusMsg: string;
  UserForceClose: number;
  ActiveUserID: string;
  BrokerOrderSeq: number;
  RelativeOrderSysID: string;
  ZCETotalTradedVolume: number;
  IsSwapOrder: number;
  BranchID: string;
  InvestUnitID: string;
  AccountID: string;
  CurrencyID: string;
  MacAddress: string;
  InstrumentID: string;
  ExchangeInstID: string;
  IPAddress: string;
};

export type TradeField = {
  kind: "CThostFtdcTradeField";
  BrokerID: string;
  InvestorID: string;
  OrderRef: string;
  UserID: string;
  ExchangeID: string;
  TradeID: string;
  Direction: string;
  OrderSysID: string;
  ParticipantID: string;
  ClientID: string;
  TradingRole: string;
  OffsetFlag: string;
  HedgeFlag: string;
  Price: number;
  Volume: number;
  TradeDate: string;
  TradeTime: string;
  TradeType: string;
  PriceSource: string;
  TraderID: string;
  OrderLocalID: string;
  ClearingPartID: string;
  BusinessUnit: string;
  SequenceNo: number;
  TradingDay: string;
  SettlementID: number;
  BrokerOrderSeq: number;
  TradeSource: string;
  InvestUnitID: string;
  InstrumentID: string;
  ExchangeInstID: string;
};

export type InvestorPositionField = {
  kind: "CThostFtdcInvestorPositionField";
  BrokerID: string;
  InvestorID: string;
  PosiDirection: string;
  HedgeFlag: string;
  PositionDate: string;
  YdPosition: number;
  Position: number;
  LongFrozen: number;
  ShortFrozen: number;
  LongFrozenAmount: number;
  ShortFrozenAmount: number;
  OpenVolume: number;
  CloseVolume: number;
  OpenAmount: number;
  CloseAmount: number;
  PositionCost: number;
  PreMargin: number;
  UseMargin: number;
  FrozenMargin: number;
  FrozenCash: number;
  FrozenCommission: number;
  CashIn: number;
  Commission: number;
  CloseProfit: number;
  PositionProfit: number;
  PreSettlementPrice: number;
  SettlementPrice: number;
  TradingDay: string;
  SettlementID: number;
  OpenCost: number;
  ExchangeMargin: number;
  CombPosition: number;
  CombLongFrozen: number;
  CombShortFrozen: number;
  CloseProfitByDate: number;
  CloseProfitByTrade: number;
  TodayPosition: number;
  MarginRateByMoney: number;
  MarginRateByVolume: number;
  StrikeFrozen: number;
  StrikeFrozenAmount: number;
  AbandonFrozen: number;
  ExchangeID: string;
  YdStrikeFrozen: number;
  InvestUnitID: string;
  PositionCostOffset: number;
  TasPosition: number;
  TasPositionCost: number;
  InstrumentID: string;
};

export type TradingAccountField = {
  kind: "CThostFtdcTradingAccountField";
  BrokerID: string;
  AccountID: string;
  PreMortgage: number;
  PreCredit: number;
  PreDeposit: number;
  PreBalance: number;
  PreMargin: number;
  InterestBase: number;
  Interest: number;
  Deposit: number;
  Withdraw: number;
  FrozenMargin: number;
  FrozenCash: number;
  FrozenCommission: number;
  CurrMargin: number;
  CashIn: number;
  Commission: number;
  CloseProfit: number;
  PositionProfit: number;
  Balance: number;
  Available: number;
  WithdrawQuota: number;
  Reserve: number;
  TradingDay: string;
  SettlementID: number;
  Credit: number;
  Mortgage: number;
  ExchangeMargin: number;
  DeliveryMargin: number;
  ExchangeDeliveryMargin: number;
  ReserveBalance: number;
  CurrencyID: string;
  PreFundMortgageIn: number;
  PreFundMortgageOut: number;
  FundMortgageIn: number;
  FundMortgageOut: number;
  FundMortgageAvailable: number;
  MortgageableFund: number;
  SpecProductMargin: number;
  SpecProductFrozenMargin: number;
  SpecProductCommission: number;
  SpecProductFrozenCommission: number;
  SpecProductPositionProfit: number;
  SpecProductCloseProfit: number;
  SpecProductPositionProfitByAlg: number;
  SpecProductExchangeMargin: number;
  BizType: string;
  FrozenSwap: number;
  RemainSwap: number;
};

export type InvestorField = {
  kind: "CThostFtdcInvestorField";
  InvestorID: string;
  BrokerID: string;
  InvestorGroupID: string;
  InvestorName: string;
  IdentifiedCardType: string;
  IdentifiedCardNo: string;
  IsActive: number;
  Telephone: string;
  Address: string;
  OpenDate: string;
  Mobile: string;
  CommModelID: string;
  MarginModelID: string;
  IsOrderFreq: string;
  IsOpenVolLimit: string;
};

export type TradingCodeField = {
  kind: "CThostFtdcTradingCodeField";
  InvestorID: string;
  BrokerID: string;
  ExchangeID: string;
  ClientID: string;
  IsActive: number;
  ClientIDType: string;
  BranchID: string;
  BizType: string;
  InvestUnitID: string;
};

export type InstrumentMarginRateField = {
  kind: "CThostFtdcInstrumentMarginRateField";
  InvestorRange: string;
  BrokerID: string;
  InvestorID: string;
  HedgeFlag: string;
  LongMarginRatioByMoney: number;
  LongMarginRatioByVolume: number;
  ShortMarginRatioByMoney: number;
  ShortMarginRatioByVolume: number;
  IsRelative: number;
  ExchangeID: string;
  InvestUnitID: string;
  InstrumentID: string;
};

export type InstrumentCommissionRateField = {
  kind: "CThostFtdcInstrumentCommissionRateField";
  InvestorRange: string;
  BrokerID: string;
  InvestorID: string;
  OpenRatioByMoney: number;
  OpenRatioByVolume: number;
  CloseRatioByMoney: number;
  CloseRatioByVolume: number;
  CloseTodayRatioByMoney: number;
  CloseTodayRatioByVolume: number;
  ExchangeID: string;
  BizType: string;
  InvestUnitID: string;
  InstrumentID: string;
};

export type ExchangeField = {
  kind: "CThostFtdcExchangeField";
  ExchangeID: string;
  ExchangeName: string;
  ExchangeProperty: string;
};

export type ProductField = {
  kind: "CThostFtdcProductField";
  ProductName: string;
  ExchangeID: string;
  ProductClass: string;
  VolumeMultiple: number;
  PriceTick: number;
  MaxMarketOrderVolume: number;
  MinMarketOrderVolume: number;
  MaxLimitOrderVolume: number;
  MinLimitOrderVolume: number;
  PositionType: string;
  PositionDateType: string;
  CloseDealType: string;
  TradeCurrencyID: string;
  MortgageFundUseRange: string;
  UnderlyingMultiple: number;
  ProductID: string;
  ExchangeProductID: string;
  OpenLimitControlLevel: string;
  OrderFreqControlLevel: string;
};

export type InstrumentField = {
  kind: "CThostFtdcInstrumentField";
  ExchangeID: string;
  InstrumentName: string;
  ProductClass: string;
  DeliveryYear: number;
  DeliveryMonth: number;
  MaxMarketOrderVolume: number;
  MinMarketOrderVolume: number;
  MaxLimitOrderVolume: number;
  MinLimitOrderVolume: number;
  VolumeMultiple: number;
  PriceTick: number;
  CreateDate: string;
  OpenDate: string;
  ExpireDate: string;
  StartDelivDate: string;
  EndDelivDate: string;
  InstLifePhase: string;
  IsTrading: number;
  PositionType: string;
  PositionDateType: string;
  LongMarginRatio: number;
  ShortMarginRatio: number;
  MaxMarginSideAlgorithm: string;
  StrikePrice: number;
  OptionsType: string;
  UnderlyingMultiple: number;
  CombinationType: string;
  InstrumentID: string;
  ExchangeInstID: string;
  ProductID: string;
  UnderlyingInstrID: string;
};

export type TraderOfferField = {
  kind: "CThostFtdcTraderOfferField";
  ExchangeID: string;
  TraderID: string;
  ParticipantID: string;
  Password: string;
  InstallID: number;
  OrderLocalID: string;
  TraderConnectStatus: string;
  ConnectRequestDate: string;
  ConnectRequestTime: string;
  LastReportDate: string;
  LastReportTime: string;
  ConnectDate: string;
  ConnectTime: string;
  StartDate: string;
  StartTime: string;
  TradingDay: string;
  BrokerID: string;
  MaxTradeID: string;
  MaxOrderMessageReference: string;
  OrderCancelAlg: string;
};

export type SettlementInfoField = {
  kind: "CThostFtdcSettlementInfoField";
  TradingDay: string;
  SettlementID: number;
  BrokerID: string;
  InvestorID: string;
  SequenceNo: number;
  Content: string;
  AccountID: string;
  CurrencyID: string;
};

export type TransferBankField = {
  kind: "CThostFtdcTransferBankField";
  BankID: string;
  BankBrchID: string;
  BankName: string;
  IsActive: number;
};

export type InvestorPositionDetailField = {
  kind: "CThostFtdcInvestorPositionDetailField";
  BrokerID: string;
  InvestorID: string;
  HedgeFlag: string;
  Direction: string;
  OpenDate: string;
  TradeID: string;
  Volume: number;
  OpenPrice: number;
  TradingDay: string;
  SettlementID: number;
  TradeType: string;
  ExchangeID: string;
  CloseProfitByDate: number;
  CloseProfitByTrade: number;
  PositionProfitByDate: number;
  PositionProfitByTrade: number;
  Margin: number;
  ExchMargin: number;
  MarginRateByMoney: number;
  MarginRateByVolume: number;
  LastSettlementPrice: number;
  SettlementPrice: number;
  CloseVolume: number;
  CloseAmount: number;
  TimeFirstVolume: number;
  InvestUnitID: string;
  SpecPosiType: string;
  InstrumentID: string;
  CombInstrumentID: string;
};

export type NoticeField = {
  kind: "CThostFtdcNoticeField";
  BrokerID: string;
  Content: string;
  SequenceLabel: string;
};

export type CFMMCTradingAccountKeyField = {
  kind: "CThostFtdcCFMMCTradingAccountKeyField";
  BrokerID: string;
  ParticipantID: string;
  AccountID: string;
  KeyID: number;
  CurrentKey: string;
};

export type EWarrantOffsetField = {
  kind: "CThostFtdcEWarrantOffsetField";
  TradingDay: string;
  BrokerID: string;
  InvestorID: string;
  ExchangeID: string;
  Direction: string;
  HedgeFlag: string;
  Volume: number;
  InvestUnitID: string;
  InstrumentID: string;
};

export type InvestorProductGroupMarginField = {
  kind: "CThostFtdcInvestorProductGroupMarginField";
  BrokerID: string;
  InvestorID: string;
  TradingDay: string;
  SettlementID: number;
  FrozenMargin: number;
  LongFrozenMargin: number;
  ShortFrozenMargin: number;
  UseMargin: number;
  LongUseMargin: number;
  ShortUseMargin: number;
  ExchMargin: number;
  LongExchMargin: number;
  ShortExchMargin: number;
  CloseProfit: number;
  FrozenCommission: number;
  Commission: number;
  FrozenCash: number;
  CashIn: number;
  PositionProfit: number;
  OffsetAmount: number;
  LongOffsetAmount: number;
  ShortOffsetAmount: number;
  ExchOffsetAmount: number;
  LongExchOffsetAmount: number;
  ShortExchOffsetAmount: number;
  HedgeFlag: string;
  ExchangeID: string;
  InvestUnitID: string;
  ProductGroupID: string;
};

export type ExchangeMarginRateField = {
  kind: "CThostFtdcExchangeMarginRateField";
  BrokerID: string;
  HedgeFlag: string;
  LongMarginRatioByMoney: number;
  LongMarginRatioByVolume: number;
  ShortMarginRatioByMoney: number;
  ShortMarginRatioByVolume: number;
  ExchangeID: string;
  InstrumentID: string;
};

export type ExchangeMarginRateAdjustField = {
  kind: "CThostFtdcExchangeMarginRateAdjustField";
  BrokerID: string;
  HedgeFlag: string;
  LongMarginRatioByMoney: number;
  LongMarginRatioByVolume: number;
  ShortMarginRatioByMoney: number;
  ShortMarginRatioByVolume: number;
  ExchLongMarginRatioByMoney: number;
  ExchLongMarginRatioByVolume: number;
  ExchShortMarginRatioByMoney: number;
  ExchShortMarginRatioByVolume: number;
  NoLongMarginRatioByMoney: number;
  NoLongMarginRatioByVolume: number;
  NoShortMarginRatioByMoney: number;
  NoShortMarginRatioByVolume: number;
  InstrumentID: string;
};

export type ExchangeRateField = {
  kind: "CThostFtdcExchangeRateField";
  BrokerID: string;
  FromCurrencyID: string;
  FromCurrencyUnit: number;
  ToCurrencyID: string;
  ExchangeRate: number;
};

export type SecAgentACIDMapField = {
  kind: "CThostFtdcSecAgentACIDMapField";
  BrokerID: string;
  UserID: string;
  AccountID: string;
  CurrencyID: string;
  BrokerSecAgentID: string;
};

export type ProductExchRateField = {
  kind: "CThostFtdcProductExchRateField";
  QuoteCurrencyID: string;
  ExchangeRate: number;
  ExchangeID: string;
  ProductID: string;
};

export type ProductGroupField = {
  kind: "CThostFtdcProductGroupField";
  ExchangeID: string;
  ProductID: string;
  ProductGroupID: string;
};

export type MMInstrumentCommissionRateField = {
  kind: "CThostFtdcMMInstrumentCommissionRateField";
  InvestorRange: string;
  BrokerID: string;
  InvestorID: string;
  OpenRatioByMoney: number;
  OpenRatioByVolume: number;
  CloseRatioByMoney: number;
  CloseRatioByVolume: number;
  CloseTodayRatioByMoney: number;
  CloseTodayRatioByVolume: number;
  InstrumentID: string;
};

export type MMOptionInstrCommRateField = {
  kind: "CThostFtdcMMOptionInstrCommRateField";
  InvestorRange: string;
  BrokerID: string;
  InvestorID: string;
  OpenRatioByMoney: number;
  OpenRatioByVolume: number;
  CloseRatioByMoney: number;
  CloseRatioByVolume: number;
  CloseTodayRatioByMoney: number;
  CloseTodayRatioByVolume: number;
  StrikeRatioByMoney: number;
  StrikeRatioByVolume: number;
  InstrumentID: string;
};

export type InstrumentOrderCommRateField = {
  kind: "CThostFtdcInstrumentOrderCommRateField";
  InvestorRange: string;
  BrokerID: string;
  InvestorID: string;
  HedgeFlag: string;
  OrderCommByVolume: number;
  OrderActionCommByVolume: number;
  ExchangeID: string;
  InvestUnitID: string;
  InstrumentID: string;
  OrderCommByTrade: number;
  OrderActionCommByTrade: number;
};

export type SecAgentCheckModeField = {
  kind: "CThostFtdcSecAgentCheckModeField";
  InvestorID: string;
  BrokerID: string;
  CurrencyID: string;
  BrokerSecAgentID: string;
  CheckSelfAccount: number;
};

export type SecAgentTradeInfoField = {
  kind: "CThostFtdcSecAgentTradeInfoField";
  BrokerID: string;
  BrokerSecAgentID: string;
  InvestorID: string;
  LongCustomerName: string;
};

export type OptionInstrTradeCostField = {
  kind: "CThostFtdcOptionInstrTradeCostField";
  BrokerID: string;
  InvestorID: string;
  HedgeFlag: string;
  FixedMargin: number;
  MiniMargin: number;
  Royalty: number;
  ExchFixedMargin: number;
  ExchMiniMargin: number;
  ExchangeID: string;
  InvestUnitID: string;
  InstrumentID: string;
};

export type OptionInstrCommRateField = {
  kind: "CThostFtdcOptionInstrCommRateField";
  InvestorRange: string;
  BrokerID: string;
  InvestorID: string;
  OpenRatioByMoney: number;
  OpenRatioByVolume: number;
  CloseRatioByMoney: number;
  CloseRatioByVolume: number;
  CloseTodayRatioByMoney: number;
  CloseTodayRatioByVolume: number;
  StrikeRatioByMoney: number;
  StrikeRatioByVolume: number;
  ExchangeID: string;
  InvestUnitID: string;
  InstrumentID: string;
};

export type ExecOrderField = {
  kind: "CThostFtdcExecOrderField";
  BrokerID: string;
  InvestorID: string;
  ExecOrderRef: string;
  UserID: string;
  Volume: number;
  RequestID: number;
  BusinessUnit: string;
  OffsetFlag: string;
  HedgeFlag: string;
  ActionType: string;
  PosiDirection: string;
  ReservePositionFlag: string;
  CloseFlag: string;
  ExecOrderLocalID: string;
  ExchangeID: string;
  ParticipantID: string;
  ClientID: string;
  TraderID: string;
  InstallID: number;
  OrderSubmitStatus: string;
  NotifySequence: number;
  TradingDay: string;
  SettlementID: number;
  ExecOrderSysID: string;
  InsertDate: string;
  InsertTime: string;
  CancelTime: string;
  ExecResult: string;
  ClearingPartID: string;
  SequenceNo: number;
  FrontID: number;
  SessionID: number;
  UserProductInfo: string;
  StatusMsg: string;
  ActiveUserID: string;
  BrokerExecOrderSeq: number;
  BranchID: string;
  InvestUnitID: string;
  AccountID: string;
  CurrencyID: string;
  MacAddress: string;
  InstrumentID: string;
  ExchangeInstID: string;
  IPAddress: string;
};

export type ForQuoteField = {
  kind: "CThostFtdcForQuoteField";
  BrokerID: string;
  InvestorID: string;
  ForQuoteRef: string;
  UserID: string;
  ForQuoteLocalID: string;
  ExchangeID: string;
  ParticipantID: string;
  ClientID: string;
  TraderID: string;
  InstallID: number;
  InsertDate: string;
  InsertTime: string;
  ForQuoteStatus: string;
  FrontID: number;
  SessionID: number;
  StatusMsg: string;
  ActiveUserID: string;
  BrokerForQutoSeq: number;
  InvestUnitID: string;
  MacAddress: string;
  InstrumentID: string;
  ExchangeInstID: string;
  IPAddress: string;
};

export type QuoteField = {
  kind: "CThostFtdcQuoteField";
  BrokerID: string;
  InvestorID: string;
  QuoteRef: string;
  UserID: string;
  AskPrice: number;
  BidPrice: number;
  AskVolume: number;
  BidVolume: number;
  RequestID: number;
  BusinessUnit: string;
  AskOffsetFlag: string;
  BidOffsetFlag: string;
  AskHedgeFlag: string;
  BidHedgeFlag: string;
  QuoteLocalID: string;
  ExchangeID: string;
  ParticipantID: string;
  ClientID: string;
  TraderID: string;
  InstallID: number;
  NotifySequence: number;
  OrderSubmitStatus: string;
  TradingDay: string;
  SettlementID: number;
  QuoteSysID: string;
  InsertDate: string;
  InsertTime: string;
  CancelTime: string;
  QuoteStatus: string;
  ClearingPartID: string;
  SequenceNo: number;
  AskOrderSysID: string;
  BidOrderSysID: string;
  FrontID: number;
  SessionID: number;
  UserProductInfo: string;
  StatusMsg: string;
  ActiveUserID: string;
  BrokerQuoteSeq: number;
  AskOrderRef: string;
  BidOrderRef: string;
  ForQuoteSysID: string;
  BranchID: string;
  InvestUnitID: string;
  AccountID: string;
  CurrencyID: string;
  MacAddress: string;
  InstrumentID: string;
  ExchangeInstID: string;
  IPAddress: string;
  ReplaceSysID: string;
};

export type OptionSelfCloseField = {
  kind: "CThostFtdcOptionSelfCloseField";
  BrokerID: string;
  InvestorID: string;
  OptionSelfCloseRef: string;
  UserID: string;
  Volume: number;
  RequestID: number;
  BusinessUnit: string;
  HedgeFlag: string;
  OptSelfCloseFlag: string;
  OptionSelfCloseLocalID: string;
  ExchangeID: string;
  ParticipantID: string;
  ClientID: string;
  TraderID: string;
  InstallID: number;
  OrderSubmitStatus: string;
  NotifySequence: number;
  TradingDay: string;
  SettlementID: number;
  OptionSelfCloseSysID: string;
  InsertDate: string;
  InsertTime: string;
  CancelTime: string;
  ExecResult: string;
  ClearingPartID: string;
  SequenceNo: number;
  FrontID: number;
  SessionID: number;
  UserProductInfo: string;
  StatusMsg: string;
  ActiveUserID: string;
  BrokerOptionSelfCloseSeq: number;
  BranchID: string;
  InvestUnitID: string;
  AccountID: string;
  CurrencyID: string;
  MacAddress: string;
  InstrumentID: string;
  ExchangeInstID: string;
  IPAddress: string;
};

export type InvestUnitField = {
  kind: "CThostFtdcInvestUnitField";
  BrokerID: string;
  InvestorID: string;
  InvestUnitID: string;
  InvestorUnitName: string;
  InvestorGroupID: string;
  CommModelID: string;
  MarginModelID: string;
  AccountID: string;
  CurrencyID: string;
};

export type CombInstrumentGuardField = {
  kind: "CThostFtdcCombInstrumentGuardField";
  BrokerID: string;
  GuarantRatio: number;
  ExchangeID: string;
  InstrumentID: string;
};

export type CombActionField = {
  kind: "CThostFtdcCombActionField";
  BrokerID: string;
  InvestorID: string;
  CombActionRef: string;
  UserID: string;
  Direction: string;
  Volume: number;
  CombDirection: string;
  HedgeFlag: string;
  ActionLocalID: string;
  ExchangeID: string;
  ParticipantID: string;
  ClientID: string;
  TraderID: string;
  InstallID: number;
  ActionStatus: string;
  NotifySequence: number;
  TradingDay: string;
  SettlementID: number;
  SequenceNo: number;
  FrontID: number;
  SessionID: number;
  UserProductInfo: string;
  StatusMsg: string;
  MacAddress: string;
  ComTradeID: string;
  BranchID: string;
  InvestUnitID: string;
  InstrumentID: string;
  ExchangeInstID: string;
  IPAddress: string;
};

export type TransferSerialField = {
  kind: "CThostFtdcTransferSerialField";
  PlateSerial: number;
  TradeDate: string;
  TradingDay: string;
  TradeTime: string;
  TradeCode: string;
  SessionID: number;
  BankID: string;
  BankBranchID: string;
  BankAccType: string;
  BankAccount: string;
  BankSerial: string;
  BrokerID: string;
  BrokerBranchID: string;
  FutureAccType: string;
  AccountID: string;
  InvestorID: string;
  FutureSerial: number;
  IdCardType: string;
  IdentifiedCardNo: string;
  CurrencyID: string;
  CustFee: number;
  BrokerFee: number;
  AvailabilityFlag: string;
  OperatorCode: string;
  BankNewAccount: string;
  ErrorID: number;
  ErrorMsg: string;
};

export type AccountregisterField = {
  kind: "CThostFtdcAccountregisterField";
  TradeDay: string;
  BankID: string;
  BankBranchID: string;
  BankAccount: string;
  BrokerID: string;
  BrokerBranchID: string;
  AccountID: string;
  IdCardType: string;
  IdentifiedCardNo: string;
  CustomerName: string;
  CurrencyID: string;
  OpenOrDestroy: string;
  RegDate: string;
  OutDate: string;
  TID: number;
  CustType: string;
  BankAccType: string;
  LongCustomerName: string;
};

export type OrderActionField = {
  kind: "CThostFtdcOrderActionField";
  BrokerID: string;
  InvestorID: string;
  OrderActionRef: number;
  OrderRef: string;
  RequestID: number;
  FrontID: number;
  SessionID: number;
  ExchangeID: string;
  OrderSysID: string;
  ActionFlag: string;
  LimitPrice: number;
  VolumeChange: number;
  ActionDate: string;
  ActionTime: string;
  TraderID: string;
  InstallID: number;
  OrderLocalID: string;
  ActionLocalID: string;
  ParticipantID: string;
  ClientID: string;
  BusinessUnit: string;
  OrderActionStatus: string;
  UserID: string;
  StatusMsg: string;
  BranchID: string;
  InvestUnitID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type InstrumentStatusField = {
  kind: "CThostFtdcInstrumentStatusField";
  ExchangeID: string;
  SettlementGroupID: string;
  InstrumentStatus: string;
  TradingSegmentSN: number;
  EnterTime: string;
  EnterReason: string;
  ExchangeInstID: string;
  InstrumentID: string;
};

export type BulletinField = {
  kind: "CThostFtdcBulletinField";
  ExchangeID: string;
  TradingDay: string;
  BulletinID: number;
  SequenceNo: number;
  NewsType: string;
  NewsUrgency: string;
  SendTime: string;
  Abstract: string;
  ComeFrom: string;
  Content: string;
  URLLink: string;
  MarketID: string;
};

export type TradingNoticeInfoField = {
  kind: "CThostFtdcTradingNoticeInfoField";
  BrokerID: string;
  InvestorID: string;
  SendTime: string;
  FieldContent: string;
  SequenceSeries: number;
  SequenceNo: number;
  InvestUnitID: string;
};

export type ErrorConditionalOrderField = {
  kind: "CThostFtdcErrorConditionalOrderField";
  BrokerID: string;
  InvestorID: string;
  OrderRef: string;
  UserID: string;
  OrderPriceType: string;
  Direction: string;
  CombOffsetFlag: string;
  CombHedgeFlag: string;
  LimitPrice: number;
  VolumeTotalOriginal: number;
  TimeCondition: string;
  GTDDate: string;
  VolumeCondition: string;
  MinVolume: number;
  ContingentCondition: string;
  StopPrice: number;
  ForceCloseReason: string;
  IsAutoSuspend: number;
  BusinessUnit: string;
  RequestID: number;
  OrderLocalID: string;
  ExchangeID: string;
  ParticipantID: string;
  ClientID: string;
  TraderID: string;
  InstallID: number;
  OrderSubmitStatus: string;
  NotifySequence: number;
  TradingDay: string;
  SettlementID: number;
  OrderSysID: string;
  OrderSource: string;
  OrderStatus: string;
  OrderType: string;
  VolumeTraded: number;
  VolumeTotal: number;
  InsertDate: string;
  InsertTime: string;
  ActiveTime: string;
  SuspendTime: string;
  UpdateTime: string;
  CancelTime: string;
  ActiveTraderID: string;
  ClearingPartID: string;
  SequenceNo: number;
  FrontID: number;
  SessionID: number;
  UserProductInfo: string;
  StatusMsg: string;
  UserForceClose: number;
  ActiveUserID: string;
  BrokerOrderSeq: number;
  RelativeOrderSysID: string;
  ZCETotalTradedVolume: number;
  ErrorID: number;
  ErrorMsg: string;
  IsSwapOrder: number;
  BranchID: string;
  InvestUnitID: string;
  AccountID: string;
  CurrencyID: string;
  MacAddress: string;
  InstrumentID: string;
  ExchangeInstID: string;
  IPAddress: string;
};

export type ExecOrderActionField = {
  kind: "CThostFtdcExecOrderActionField";
  BrokerID: string;
  InvestorID: string;
  ExecOrderActionRef: number;
  ExecOrderRef: string;
  RequestID: number;
  FrontID: number;
  SessionID: number;
  ExchangeID: string;
  ExecOrderSysID: string;
  ActionFlag: string;
  ActionDate: string;
  ActionTime: string;
  TraderID: string;
  InstallID: number;
  ExecOrderLocalID: string;
  ActionLocalID: string;
  ParticipantID: string;
  ClientID: string;
  BusinessUnit: string;
  OrderActionStatus: string;
  UserID: string;
  ActionType: string;
  StatusMsg: string;
  BranchID: string;
  InvestUnitID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type QuoteActionField = {
  kind: "CThostFtdcQuoteActionField";
  BrokerID: string;
  InvestorID: string;
  QuoteActionRef: number;
  QuoteRef: string;
  RequestID: number;
  FrontID: number;
  SessionID: number;
  ExchangeID: string;
  QuoteSysID: string;
  ActionFlag: string;
  ActionDate: string;
  ActionTime: string;
  TraderID: string;
  InstallID: number;
  QuoteLocalID: string;
  ActionLocalID: string;
  ParticipantID: string;
  ClientID: string;
  BusinessUnit: string;
  OrderActionStatus: string;
  UserID: string;
  StatusMsg: string;
  BranchID: string;
  InvestUnitID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type CFMMCTradingAccountTokenField = {
  kind: "CThostFtdcCFMMCTradingAccountTokenField";
  BrokerID: string;
  ParticipantID: string;
  AccountID: string;
  KeyID: number;
  Token: string;
};

export type BatchOrderActionField = {
  kind: "CThostFtdcBatchOrderActionField";
  BrokerID: string;
  InvestorID: string;
  OrderActionRef: number;
  RequestID: number;
  FrontID: number;
  SessionID: number;
  ExchangeID: string;
  ActionDate: string;
  ActionTime: string;
  TraderID: string;
  InstallID: number;
  ActionLocalID: string;
  ParticipantID: string;
  ClientID: string;
  BusinessUnit: string;
  OrderActionStatus: string;
  UserID: string;
  StatusMsg: string;
  InvestUnitID: string;
  MacAddress: string;
  IPAddress: string;
};

export type OptionSelfCloseActionField = {
  kind: "CThostFtdcOptionSelfCloseActionField";
  BrokerID: string;
  InvestorID: string;
  OptionSelfCloseActionRef: number;
  OptionSelfCloseRef: string;
  RequestID: number;
  FrontID: number;
  SessionID: number;
  ExchangeID: string;
  OptionSelfCloseSysID: string;
  ActionFlag: string;
  ActionDate: string;
  ActionTime: string;
  TraderID: string;
  InstallID: number;
  OptionSelfCloseLocalID: string;
  ActionLocalID: string;
  ParticipantID: string;
  ClientID: string;
  BusinessUnit: string;
  OrderActionStatus: string;
  UserID: string;
  StatusMsg: string;
  BranchID: string;
  InvestUnitID: string;
  MacAddress: string;
  InstrumentID: string;
  IPAddress: string;
};

export type ContractBankField = {
  kind: "CThostFtdcContractBankField";
  BrokerID: string;
  BankID: string;
  BankBrchID: string;
  BankName: string;
};

export type TradingNoticeField = {
  kind: "CThostFtdcTradingNoticeField";
  BrokerID: string;
  InvestorRange: string;
  InvestorID: string;
  SequenceSeries: number;
  UserID: string;
  SendTime: string;
  SequenceNo: number;
  FieldContent: string;
  InvestUnitID: string;
};

export type BrokerTradingParamsField = {
  kind: "CThostFtdcBrokerTradingParamsField";
  BrokerID: string;
  InvestorID: string;
  MarginPriceType: string;
  Algorithm: string;
  AvailIncludeCloseProfit: string;
  CurrencyID: string;
  OptionRoyaltyPriceType: string;
  AccountID: string;
};

export type BrokerTradingAlgosField = {
  kind: "CThostFtdcBrokerTradingAlgosField";
  BrokerID: string;
  ExchangeID: string;
  HandlePositionAlgoID: string;
  FindMarginRateAlgoID: string;
  HandleTradingAccountAlgoID: string;
  InstrumentID: string;
};

export type QueryCFMMCTradingAccountTokenField = {
  kind: "CThostFtdcQueryCFMMCTradingAccountTokenField";
  BrokerID: string;
  InvestorID: string;
  InvestUnitID: string;
};

export type RspTransferField = {
  kind: "CThostFtdcRspTransferField";
  TradeCode: string;
  BankID: string;
  BankBranchID: string;
  BrokerID: string;
  BrokerBranchID: string;
  TradeDate: string;
  TradeTime: string;
  BankSerial: string;
  TradingDay: string;
  PlateSerial: number;
  LastFragment: string;
  SessionID: number;
  CustomerName: string;
  IdCardType: string;
  IdentifiedCardNo: string;
  CustType: string;
  BankAccount: string;
  BankPassWord: string;
  AccountID: string;
  Password: string;
  InstallID: number;
  FutureSerial: number;
  UserID: string;
  VerifyCertNoFlag: string;
  CurrencyID: string;
  TradeAmount: number;
  FutureFetchAmount: number;
  FeePayFlag: string;
  CustFee: number;
  BrokerFee: number;
  Message: string;
  Digest: string;
  BankAccType: string;
  DeviceID: string;
  BankSecuAccType: string;
  BrokerIDByBank: string;
  BankSecuAcc: string;
  BankPwdFlag: string;
  SecuPwdFlag: string;
  OperNo: string;
  RequestID: number;
  TID: number;
  TransferStatus: string;
  ErrorID: number;
  ErrorMsg: string;
  LongCustomerName: string;
};

export type RspRepealField = {
  kind: "CThostFtdcRspRepealField";
  RepealTimeInterval: number;
  RepealedTimes: number;
  BankRepealFlag: string;
  BrokerRepealFlag: string;
  PlateRepealSerial: number;
  BankRepealSerial: string;
  FutureRepealSerial: number;
  TradeCode: string;
  BankID: string;
  BankBranchID: string;
  BrokerID: string;
  BrokerBranchID: string;
  TradeDate: string;
  TradeTime: string;
  BankSerial: string;
  TradingDay: string;
  PlateSerial: number;
  LastFragment: string;
  SessionID: number;
  CustomerName: string;
  IdCardType: string;
  IdentifiedCardNo: string;
  CustType: string;
  BankAccount: string;
  BankPassWord: string;
  AccountID: string;
  Password: string;
  InstallID: number;
  FutureSerial: number;
  UserID: string;
  VerifyCertNoFlag: string;
  CurrencyID: string;
  TradeAmount: number;
  FutureFetchAmount: number;
  FeePayFlag: string;
  CustFee: number;
  BrokerFee: number;
  Message: string;
  Digest: string;
  BankAccType: string;
  DeviceID: string;
  BankSecuAccType: string;
  BrokerIDByBank: string;
  BankSecuAcc: string;
  BankPwdFlag: string;
  SecuPwdFlag: string;
  OperNo: string;
  RequestID: number;
  TID: number;
  TransferStatus: string;
  ErrorID: number;
  ErrorMsg: string;
  LongCustomerName: string;
};

export type NotifyQueryAccountField = {
  kind: "CThostFtdcNotifyQueryAccountField";
  TradeCode: string;
  BankID: string;
  BankBranchID: string;
  BrokerID: string;
  BrokerBranchID: string;
  TradeDate: string;
  TradeTime: string;
  BankSerial: string;
  TradingDay: string;
  PlateSerial: number;
  LastFragment: string;
  SessionID: number;
  CustomerName: string;
  IdCardType: string;
  IdentifiedCardNo: string;
  CustType: string;
  BankAccount: string;
  BankPassWord: string;
  AccountID: string;
  Password: string;
  FutureSerial: number;
  InstallID: number;
  UserID: string;
  VerifyCertNoFlag: string;
  CurrencyID: string;
  Digest: string;
  BankAccType: string;
  DeviceID: string;
  BankSecuAccType: string;
  BrokerIDByBank: string;
  BankSecuAcc: string;
  BankPwdFlag: string;
  SecuPwdFlag: string;
  OperNo: string;
  RequestID: number;
  TID: number;
  BankUseAmount: number;
  BankFetchAmount: number;
  ErrorID: number;
  ErrorMsg: string;
  LongCustomerName: string;
};

export type ReqTransferField = {
  kind: "CThostFtdcReqTransferField";
  TradeCode: string;
  BankID: string;
  BankBranchID: string;
  BrokerID: string;
  BrokerBranchID: string;
  TradeDate: string;
  TradeTime: string;
  BankSerial: string;
  TradingDay: string;
  PlateSerial: number;
  LastFragment: string;
  SessionID: number;
  CustomerName: string;
  IdCardType: string;
  IdentifiedCardNo: string;
  CustType: string;
  BankAccount: string;
  BankPassWord: string;
  AccountID: string;
  Password: string;
  InstallID: number;
  FutureSerial: number;
  UserID: string;
  VerifyCertNoFlag: string;
  CurrencyID: string;
  TradeAmount: number;
  FutureFetchAmount: number;
  FeePayFlag: string;
  CustFee: number;
  BrokerFee: number;
  Message: string;
  Digest: string;
  BankAccType: string;
  DeviceID: string;
  BankSecuAccType: string;
  BrokerIDByBank: string;
  BankSecuAcc: string;
  BankPwdFlag: string;
  SecuPwdFlag: string;
  OperNo: string;
  RequestID: number;
  TID: number;
  TransferStatus: string;
  LongCustomerName: string;
};

export type ReqRepealField = {
  kind: "CThostFtdcReqRepealField";
  RepealTimeInterval: number;
  RepealedTimes: number;
  BankRepealFlag: string;
  BrokerRepealFlag: string;
  PlateRepealSerial: number;
  BankRepealSerial: string;
  FutureRepealSerial: number;
  TradeCode: string;
  BankID: string;
  BankBranchID: string;
  BrokerID: string;
  BrokerBranchID: string;
  TradeDate: string;
  TradeTime: string;
  BankSerial: string;
  TradingDay: string;
  PlateSerial: number;
  LastFragment: string;
  SessionID: number;
  CustomerName: string;
  IdCardType: string;
  IdentifiedCardNo: string;
  CustType: string;
  BankAccount: string;
  BankPassWord: string;
  AccountID: string;
  Password: string;
  InstallID: number;
  FutureSerial: number;
  UserID: string;
  VerifyCertNoFlag: string;
  CurrencyID: string;
  TradeAmount: number;
  FutureFetchAmount: number;
  FeePayFlag: string;
  CustFee: number;
  BrokerFee: number;
  Message: string;
  Digest: string;
  BankAccType: string;
  DeviceID: string;
  BankSecuAccType: string;
  BrokerIDByBank: string;
  BankSecuAcc: string;
  BankPwdFlag: string;
  SecuPwdFlag: string;
  OperNo: string;
  RequestID: number;
  TID: number;
  TransferStatus: string;
  LongCustomerName: string;
};

export type ReqQueryAccountField = {
  kind: "CThostFtdcReqQueryAccountField";
  TradeCode: string;
  BankID: string;
  BankBranchID: string;
  BrokerID: string;
  BrokerBranchID: string;
  TradeDate: string;
  TradeTime: string;
  BankSerial: string;
  TradingDay: string;
  PlateSerial: number;
  LastFragment: string;
  SessionID: number;
  CustomerName: string;
  IdCardType: string;
  IdentifiedCardNo: string;
  CustType: string;
  BankAccount: string;
  BankPassWord: string;
  AccountID: string;
  Password: string;
  FutureSerial: number;
  InstallID: number;
  UserID: string;
  VerifyCertNoFlag: string;
  CurrencyID: string;
  Digest: string;
  BankAccType: string;
  DeviceID: string;
  BankSecuAccType: string;
  BrokerIDByBank: string;
  BankSecuAcc: string;
  BankPwdFlag: string;
  SecuPwdFlag: string;
  OperNo: string;
  RequestID: number;
  TID: number;
  LongCustomerName: string;
};

export type OpenAccountField = {
  kind: "CThostFtdcOpenAccountField";
  TradeCode: string;
  BankID: string;
  BankBranchID: string;
  BrokerID: string;
  BrokerBranchID: string;
  TradeDate: string;
  TradeTime: string;
  BankSerial: string;
  TradingDay: string;
  PlateSerial: number;
  LastFragment: string;
  SessionID: number;
  CustomerName: string;
  IdCardType: string;
  IdentifiedCardNo: string;
  Gender: string;
  CountryCode: string;
  CustType: string;
  Address: string;
  ZipCode: string;
  Telephone: string;
  MobilePhone: string;
  Fax: string;
  EMail: string;
  MoneyAccountStatus: string;
  BankAccount: string;
  BankPassWord: string;
  AccountID: string;
  Password: string;
  InstallID: number;
  VerifyCertNoFlag: string;
  CurrencyID: string;
  CashExchangeCode: string;
  Digest: string;
  BankAccType: string;
  DeviceID: string;
  BankSecuAccType: string;
  BrokerIDByBank: string;
  BankSecuAcc: string;
  BankPwdFlag: string;
  SecuPwdFlag: string;
  OperNo: string;
  TID: number;
  UserID: string;
  ErrorID: number;
  ErrorMsg: string;
  LongCustomerName: string;
};

export type CancelAccountField = {
  kind: "CThostFtdcCancelAccountField";
  TradeCode: string;
  BankID: string;
  BankBranchID: string;
  BrokerID: string;
  BrokerBranchID: string;
  TradeDate: string;
  TradeTime: string;
  BankSerial: string;
  TradingDay: string;
  PlateSerial: number;
  LastFragment: string;
  SessionID: number;
  CustomerName: string;
  IdCardType: string;
  IdentifiedCardNo: string;
  Gender: string;
  CountryCode: string;
  CustType: string;
  Address: string;
  ZipCode: string;
  Telephone: string;
  MobilePhone: string;
  Fax: string;
  EMail: string;
  MoneyAccountStatus: string;
  BankAccount: string;
  BankPassWord: string;
  AccountID: string;
  Password: string;
  InstallID: number;
  VerifyCertNoFlag: string;
  CurrencyID: string;
  CashExchangeCode: string;
  Digest: string;
  BankAccType: string;
  DeviceID: string;
  BankSecuAccType: string;
  BrokerIDByBank: string;
  BankSecuAcc: string;
  BankPwdFlag: string;
  SecuPwdFlag: string;
  OperNo: string;
  TID: number;
  UserID: string;
  ErrorID: number;
  ErrorMsg: string;
  LongCustomerName: string;
};

export type ChangeAccountField = {
  kind: "CThostFtdcChangeAccountField";
  TradeCode: string;
  BankID: string;
  BankBranchID: string;
  BrokerID: string;
  BrokerBranchID: string;
  TradeDate: string;
  TradeTime: string;
  BankSerial: string;
  TradingDay: string;
  PlateSerial: number;
  LastFragment: string;
  SessionID: number;
  CustomerName: string;
  IdCardType: string;
  IdentifiedCardNo: string;
  Gender: string;
  CountryCode: string;
  CustType: string;
  Address: string;
  ZipCode: string;
  Telephone: string;
  MobilePhone: string;
  Fax: string;
  EMail: string;
  MoneyAccountStatus: string;
  BankAccount: string;
  BankPassWord: string;
  NewBankAccount: string;
  NewBankPassWord: string;
  AccountID: string;
  Password: string;
  BankAccType: string;
  InstallID: number;
  VerifyCertNoFlag: string;
  CurrencyID: string;
  BrokerIDByBank: string;
  BankPwdFlag: string;
  SecuPwdFlag: string;
  TID: number;
  Digest: string;
  ErrorID: number;
  ErrorMsg: string;
  LongCustomerName: string;
};

export type RiskSettleInvstPositionField = {
  kind: "CThostFtdcRiskSettleInvstPositionField";
  InstrumentID: string;
  BrokerID: string;
  InvestorID: string;
  PosiDirection: string;
  HedgeFlag: string;
  PositionDate: string;
  YdPosition: number;
  Position: number;
  LongFrozen: number;
  ShortFrozen: number;
  LongFrozenAmount: number;
  ShortFrozenAmount: number;
  OpenVolume: number;
  CloseVolume: number;
  OpenAmount: number;
  CloseAmount: number;
  PositionCost: number;
  PreMargin: number;
  UseMargin: number;
  FrozenMargin: number;
  FrozenCash: number;
  FrozenCommission: number;
  CashIn: number;
  Commission: number;
  CloseProfit: number;
  PositionProfit: number;
  PreSettlementPrice: number;
  SettlementPrice: number;
  TradingDay: string;
  SettlementID: number;
  OpenCost: number;
  ExchangeMargin: number;
  CombPosition: number;
  CombLongFrozen: number;
  CombShortFrozen: number;
  CloseProfitByDate: number;
  CloseProfitByTrade: number;
  TodayPosition: number;
  MarginRateByMoney: number;
  MarginRateByVolume: number;
  StrikeFrozen: number;
  StrikeFrozenAmount: number;
  AbandonFrozen: number;
  ExchangeID: string;
  YdStrikeFrozen: number;
  InvestUnitID: string;
  PositionCostOffset: number;
  TasPosition: number;
  TasPositionCost: number;
};

export type RiskSettleProductStatusField = {
  kind: "CThostFtdcRiskSettleProductStatusField";
  ExchangeID: string;
  ProductID: string;
  ProductStatus: string;
};

/*----------------------------------------------------------------------------*/

export type CallbackMessage =
  | undefined
  | number
  | RspUserLoginField
  | UserLogoutField
  | MulticastInstrumentField
  | RspInfoField
  | SpecificInstrumentField
  | DepthMarketDataField
  | ForQuoteRspField
  | RspAuthenticateField
  | UserPasswordUpdateField
  | TradingAccountPasswordUpdateField
  | RspUserAuthMethodField
  | RspGenUserCaptchaField
  | RspGenUserTextField
  | InputOrderField
  | ParkedOrderField
  | ParkedOrderActionField
  | InputOrderActionField
  | QryMaxOrderVolumeField
  | SettlementInfoConfirmField
  | RemoveParkedOrderField
  | RemoveParkedOrderActionField
  | InputExecOrderField
  | InputExecOrderActionField
  | InputForQuoteField
  | InputQuoteField
  | InputQuoteActionField
  | InputBatchOrderActionField
  | InputOptionSelfCloseField
  | InputOptionSelfCloseActionField
  | InputCombActionField
  | OrderField
  | TradeField
  | InvestorPositionField
  | TradingAccountField
  | InvestorField
  | TradingCodeField
  | InstrumentMarginRateField
  | InstrumentCommissionRateField
  | ExchangeField
  | ProductField
  | InstrumentField
  | TraderOfferField
  | SettlementInfoField
  | TransferBankField
  | InvestorPositionDetailField
  | NoticeField
  | CFMMCTradingAccountKeyField
  | EWarrantOffsetField
  | InvestorProductGroupMarginField
  | ExchangeMarginRateField
  | ExchangeMarginRateAdjustField
  | ExchangeRateField
  | SecAgentACIDMapField
  | ProductExchRateField
  | ProductGroupField
  | MMInstrumentCommissionRateField
  | MMOptionInstrCommRateField
  | InstrumentOrderCommRateField
  | SecAgentCheckModeField
  | SecAgentTradeInfoField
  | OptionInstrTradeCostField
  | OptionInstrCommRateField
  | ExecOrderField
  | ForQuoteField
  | QuoteField
  | OptionSelfCloseField
  | InvestUnitField
  | CombInstrumentGuardField
  | CombActionField
  | TransferSerialField
  | AccountregisterField
  | OrderActionField
  | InstrumentStatusField
  | BulletinField
  | TradingNoticeInfoField
  | ErrorConditionalOrderField
  | ExecOrderActionField
  | QuoteActionField
  | CFMMCTradingAccountTokenField
  | BatchOrderActionField
  | OptionSelfCloseActionField
  | ContractBankField
  | TradingNoticeField
  | BrokerTradingParamsField
  | BrokerTradingAlgosField
  | QueryCFMMCTradingAccountTokenField
  | RspTransferField
  | RspRepealField
  | NotifyQueryAccountField
  | ReqTransferField
  | ReqRepealField
  | ReqQueryAccountField
  | OpenAccountField
  | CancelAccountField
  | ChangeAccountField
  | RiskSettleInvstPositionField
  | RiskSettleProductStatusField;

export type CallbackOptions = {
  isLast?: boolean;
};

/** 消息事件回调接口 */
export type CallbackFunction = (
  message: CallbackMessage,
  options: CallbackOptions
) => void;

/** 行情消息事件 */
type MarketDataEvent =
  | "quit"
  | "front-connected"
  | "front-disconnected"
  | "heart-beat-warning"
  | "rsp-user-login"
  | "rsp-user-logout"
  | "rsp-qry-multicast-instrument"
  | "rsp-error"
  | "rsp-sub-market-data"
  | "rsp-unsub-market-data"
  | "rsp-sub-for-quote"
  | "rsp-unsub-for-quote"
  | "rtn-depth-market-data"
  | "rtn-for-quote";

/** 交易消息事件 */
type TraderEvent =
  | "quit"
  | "front-connected"
  | "front-disconnected"
  | "heart-beat-warning"
  | "rsp-authenticate"
  | "rsp-user-login"
  | "rsp-user-logout"
  | "rsp-user-password-update"
  | "rsp-trading-account-password-update"
  | "rsp-user-auth-method"
  | "rsp-gen-user-captcha"
  | "rsp-gen-user-text"
  | "rsp-order-insert"
  | "rsp-parked-order-insert"
  | "rsp-parked-order-action"
  | "rsp-order-action"
  | "rsp-qry-max-order-volume"
  | "rsp-settlement-info-confirm"
  | "rsp-remove-parked-order"
  | "rsp-remove-parked-order-action"
  | "rsp-exec-order-insert"
  | "rsp-exec-order-action"
  | "rsp-for-quote-insert"
  | "rsp-quote-insert"
  | "rsp-quote-action"
  | "rsp-batch-order-action"
  | "rsp-option-self-close-insert"
  | "rsp-option-self-close-action"
  | "rsp-comb-action-insert"
  | "rsp-qry-order"
  | "rsp-qry-trade"
  | "rsp-qry-investor-position"
  | "rsp-qry-trading-account"
  | "rsp-qry-investor"
  | "rsp-qry-trading-code"
  | "rsp-qry-instrument-margin-rate"
  | "rsp-qry-instrument-commission-rate"
  | "rsp-qry-exchange"
  | "rsp-qry-product"
  | "rsp-qry-instrument"
  | "rsp-qry-depth-market-data"
  | "rsp-qry-trader-offer"
  | "rsp-qry-settlement-info"
  | "rsp-qry-transfer-bank"
  | "rsp-qry-investor-position-detail"
  | "rsp-qry-notice"
  | "rsp-qry-settlement-info-confirm"
  | "rsp-qry-investor-position-combine-detail"
  | "rsp-qry-cfmmc-trading-account-key"
  | "rsp-qry-e-warrant-offset"
  | "rsp-qry-investor-product-group-margin"
  | "rsp-qry-exchange-margin-rate"
  | "rsp-qry-exchange-margin-rate-adjust"
  | "rsp-qry-exchange-rate"
  | "rsp-qry-sec-agent-acid-map"
  | "rsp-qry-product-exch-rate"
  | "rsp-qry-product-group"
  | "rsp-qry-mm-instrument-commission-rate"
  | "rsp-qry-mm-option-instr-comm-rate"
  | "rsp-qry-instrument-order-comm-rate"
  | "rsp-qry-sec-agent-trading-account"
  | "rsp-qry-sec-agent-check-mode"
  | "rsp-qry-sec-agent-trade-info"
  | "rsp-qry-option-instr-trade-cost"
  | "rsp-qry-option-instr-comm-rate"
  | "rsp-qry-exec-order"
  | "rsp-qry-for-quote"
  | "rsp-qry-quote"
  | "rsp-qry-option-self-close"
  | "rsp-qry-invest-unit"
  | "rsp-qry-comb-instrument-guard"
  | "rsp-qry-comb-action"
  | "rsp-qry-transfer-serial"
  | "rsp-qry-account-register"
  | "rsp-error"
  | "rtn-order"
  | "rtn-trade"
  | "err-rtn-order-insert"
  | "err-rtn-order-action"
  | "rtn-instrument-status"
  | "rtn-bulletin"
  | "rtn-trading-notice"
  | "rtn-error-conditional-order"
  | "rtn-exec-order"
  | "err-rtn-exec-order-insert"
  | "err-rtn-exec-order-action"
  | "err-rtn-for-quote-insert"
  | "rtn-quote"
  | "err-rtn-quote-insert"
  | "err-rtn-quote-action"
  | "rtn-for-quote"
  | "rtn-cfmmc-trading-account-token"
  | "err-rtn-batch-order-action"
  | "rtn-option-self-close"
  | "err-rtn-option-self-close-insert"
  | "err-rtn-option-self-close-action"
  | "rtn-comb-action"
  | "err-rtn-comb-action-insert"
  | "rsp-qry-contract-bank"
  | "rsp-qry-parked-order"
  | "rsp-qry-parked-order-action"
  | "rsp-qry-trading-notice"
  | "rsp-qry-broker-trading-params"
  | "rsp-qry-broker-trading-algos"
  | "rtn-from-bank-to-future-by-bank"
  | "rtn-from-future-to-bank-by-bank"
  | "rtn-repeal-from-bank-to-future-by-bank"
  | "rtn-repeal-from-future-to-bank-by-bank"
  | "rtn-from-bank-to-future-by-future"
  | "rtn-from-future-to-bank-by-future"
  | "rtn-repeal-from-bank-to-future-by-future-manual"
  | "rtn-repeal-from-future-to-bank-by-future-manual"
  | "rtn-query-bank-balance-by-future"
  | "err-rtn-bank-to-future-by-future"
  | "err-rtn-future-to-bank-by-future"
  | "err-rtn-repeal-bank-to-future-by-future-manual"
  | "err-rtn-repeal-future-to-bank-by-future-manual"
  | "err-rtn-query-bank-balance-by-future"
  | "rtn-repeal-from-bank-to-future-by-future"
  | "rtn-repeal-from-future-to-bank-by-future"
  | "rsp-from-bank-to-future-by-future"
  | "rsp-from-future-to-bank-by-future"
  | "rsp-query-bank-account-money-by-future"
  | "rtn-open-account-by-bank"
  | "rtn-cancel-account-by-bank"
  | "rtn-change-account-by-bank"
  | "rsp-qry-classified-instrument"
  | "rsp-qry-comb-promotion-param"
  | "rsp-qry-risk-settle-invst-position"
  | "rsp-qry-risk-settle-product-status";


  /** 行情对象 */
export interface Market {
  // /**
  //  *
  //  * @param flowMdPath 存贮订阅信息文件的目录
  //  * @param frontMdAddr 前置机网络地址
  //  */
  // constructor(flowMdPath: string, frontMdAddr: string);

  /**
   * 获取API的版本信息
   * @returns 获取到的版本号
   */
  getApiVersion(): string;

  /**
   * 获得当前交易日，只有当登陆成功后才会取到正确的值
   * @returns 获得当前交易日
   */
  getTradingDay(): string;

  /**
   * 订阅行情
   * @param instrumentIds 合约ID列表
   */
  subscribeMarketData(instrumentIds: string[]): number;

  /**
   * 退订行情
   * @param instrumentIds 合约ID列表
   */
  unsubscribeMarketData(instrumentIds: string[]): number;

  /**
   * 订阅询价
   * @param instrumentIds 合约ID列表
   */
  subscribeForQuoteRsp(instrumentIds: string[]): number;

  /**
   * 退订询价
   * @param instrumentIds 合约ID列表
   */
  unsubscribeForQuoteRsp(instrumentIds: string[]): number;

  /**
   * 用户登录请求
   * @param req 用户登陆信息
   */
  reqUserLogin(req: object): number;

  /**
   * 用户登出请求
   * @param req 用户登出信息
   */
  reqUserLogout(req: object): number;

  /**
   * 注册行情消息回调函数
   * @param event 行情消息事件
   * @param func 回调函数
   */
  on(event: MarketDataEvent, func: CallbackFunction): Market;
}

/** 交易对象 */
export interface Trader {
  // /**
  //  *
  //  * @param flowPath 存贮订阅信息文件的目录
  //  * @param frontAddr 前置机网络地址
  //  */
  // constructor(flowPath: string, frontAddr: string);

  /**
   * 获取API的版本信息
   * @returns 获取到的版本号
   */
  getApiVersion(): string;

  /**
   * 获得当前交易日，只有当登陆成功后才会取到正确的值
   * @returns 获得当前交易日
   */
  getTradingDay(): string;

  /**
   * 客户端认证请求
   * @param req 客户端认证信息
   */
  reqAuthenticate(req: object): number;

  /**
   * 用户登录请求
   * @param req 用户登陆信息
   */
  reqUserLogin(req: object): number;

  /**
   * 用户登出请求
   * @param req 用户登出信息
   */
  reqUserLogout(req: object): number;

  /**
   * 用户口令更新请求
   * @param req 用户口令信息
   */
  reqUserPasswordUpdate(req: object): number;

  /**
   * 资金账户口令更新请求
   * @param req 用户口令信息
   */
  reqTradingAccountPasswordUpdate(req: object): number;

  /**
   * 查询用户当前支持的认证模式
   * @param req 用户信息
   */
  reqUserAuthMethod(req: object): number;

  /**
   * 用户发出获取图形验证码请求
   * @param req 用户信息
   */
  reqGenUserCaptcha(req: object): number;

  /**
   * 用户发出获取短信验证码请求
   * @param req 用户信息
   */
  reqGenUserText(req: object): number;

  /**
   * 用户发出带有图片验证码的登陆请求
   * @param req 用户登陆信息
   */
  reqUserLoginWithCaptcha(req: object): number;

  /**
   * 用户发出带有短信验证码的登陆请求
   * @param req 用户登陆信息
   */
  reqUserLoginWithText(req: object): number;

  /**
   * 用户发出带有动态口令的登陆请求
   * @param req 用户登陆信息
   */
  reqUserLoginWithOTP(req: object): number;

  /**
   * 报单录入请求
   * @param req 报单信息
   */
  reqOrderInsert(req: object): number;

  /**
   * 预埋单录入请求
   * @param req 预埋单信息
   */
  reqParkedOrderInsert(req: object): number;

  /**
   * 预埋撤单录入请求
   * @param req 预埋单信息
   */
  reqParkedOrderAction(req: object): number;

  /**
   * 报单操作请求
   * @param req 报单信息
   */
  reqOrderAction(req: object): number;

  /**
   * 查询最大报单数量请求
   * @param req 查询最大报单数量
   */
  reqQryMaxOrderVolume(req: object): number;

  /**
   * 投资者结算结果确认
   * @param req 投资者结算结果确认信息
   */
  reqSettlementInfoConfirm(req: object): number;

  /**
   * 请求删除预埋单
   * @param req 预埋单信息
   */
  reqRemoveParkedOrder(req: object): number;

  /**
   * 请求删除预埋撤单
   * @param req 预埋单信息
   */
  reqRemoveParkedOrderAction(req: object): number;

  /**
   * 执行宣告录入请求
   * @param req 宣告信息
   */
  reqExecOrderInsert(req: object): number;

  /**
   * 执行宣告操作请求
   * @param req 宣告信息
   */
  reqExecOrderAction(req: object): number;

  /**
   * 询价录入请求
   * @param req 询价信息
   */
  reqForQuoteInsert(req: object): number;

  /**
   * 报价录入请求
   * @param req 报价信息
   */
  reqQuoteInsert(req: object): number;

  /**
   * 报价操作请求
   * @param req 报价信息
   */
  reqQuoteAction(req: object): number;

  /**
   * 批量报单操作请求
   * @param req 报单请求
   */
  reqBatchOrderAction(req: object): number;

  /**
   * 期权自对冲录入请求
   * @param req 期权自对冲信息
   */
  reqOptionSelfCloseInsert(req: object): number;

  /**
   * 期权自对冲操作请求
   * @param req 期权自对冲信息
   */
  reqOptionSelfCloseAction(req: object): number;

  /**
   * 申请组合录入请求
   * @param req 组合信息
   */
  reqCombActionInsert(req: object): number;

  /**
   * 请求查询报单
   * @param req 查询信息
   */
  reqQryOrder(req: object): number;

  /**
   * 请求查询成交
   * @param req 查询信息
   */
  reqQryTrade(req: object): number;

  /**
   * 请求查询投资者持仓
   * @param req 查询信息
   */
  reqQryInvestorPosition(req: object): number;

  /**
   * 请求查询资金账户
   * @param req 查询信息
   */
  reqQryTradingAccount(req: object): number;

  /**
   * 请求查询投资者
   * @param req 查询信息
   */
  reqQryInvestor(req: object): number;

  /**
   * 请求查询交易编码
   * @param req 查询信息
   */
  reqQryTradingCode(req: object): number;

  /**
   * 请求查询合约保证金率
   * @param req 查询信息
   */
  reqQryInstrumentMarginRate(req: object): number;

  /**
   * 请求查询合约手续费率
   * @param req 查询信息
   */
  reqQryInstrumentCommissionRate(req: object): number;

  /**
   * 请求查询交易所
   * @param req 查询信息
   */
  reqQryExchange(req: object): number;

  /**
   * 请求查询产品
   * @param req 查询信息
   */
  reqQryProduct(req: object): number;

  /**
   * 请求查询合约
   * @param req 查询信息
   */
  reqQryInstrument(req: object): number;

  /**
   * 请求查询行情
   * @param req 查询信息
   */
  reqQryDepthMarketData(req: object): number;

  /**
   * 请求查询交易员报盘机
   * @param req 查询信息
   */
  reqQryTraderOffer(req: object): number;

  /**
   * 请求查询投资者结算结果
   * @param req 查询信息
   */
  reqQrySettlementInfo(req: object): number;

  /**
   * 请求查询转帐银行
   * @param req 转账信息
   */
  reqQryTransferBank(req: object): number;

  /**
   * 请求查询投资者持仓明细
   * @param req 查询信息
   */
  reqQryInvestorPositionDetail(req: object): number;

  /**
   * 请求查询客户通知
   * @param req 查询信息
   */
  reqQryNotice(req: object): number;

  /**
   * 请求查询结算信息确认
   * @param req 查询信息
   */
  reqQrySettlementInfoConfirm(req: object): number;

  /**
   * 请求查询投资者持仓明细
   * @param req 查询信息
   */
  reqQryInvestorPositionCombineDetail(req: object): number;

  /**
   * 请求查询保证金监管系统经纪公司资金账户密钥
   * @param req 查询信息
   */
  reqQryCFMMCTradingAccountKey(req: object): number;

  /**
   * 请求查询仓单折抵信息
   * @param req 查询信息
   */
  reqQryEWarrantOffset(req: object): number;

  /**
   * 请求查询投资者品种/跨品种保证金
   * @param req 查询信息
   */
  reqQryInvestorProductGroupMargin(req: object): number;

  /**
   * 请求查询交易所保证金率
   * @param req 查询信息
   */
  reqQryExchangeMarginRate(req: object): number;

  /**
   * 请求查询交易所调整保证金率
   * @param req 查询信息
   */
  reqQryExchangeMarginRateAdjust(req: object): number;

  /**
   * 请求查询汇率
   * @param req 查询信息
   */
  reqQryExchangeRate(req: object): number;

  /**
   * 请求查询二级代理操作员银期权限
   * @param req 查询信息
   */
  reqQrySecAgentACIDMap(req: object): number;

  /**
   * 请求查询产品报价汇率
   * @param req 查询信息
   */
  reqQryProductExchRate(req: object): number;

  /**
   * 请求查询产品组
   * @param req 查询信息
   */
  reqQryProductGroup(req: object): number;

  /**
   * 请求查询做市商合约手续费率
   * @param req 查询信息
   */
  reqQryMMInstrumentCommissionRate(req: object): number;

  /**
   * 请求查询做市商期权合约手续费
   * @param req 查询信息
   */
  reqQryMMOptionInstrCommRate(req: object): number;

  /**
   * 请求查询报单手续费
   * @param req 查询信息
   */
  reqQryInstrumentOrderCommRate(req: object): number;

  /**
   * 请求查询资金账户
   * @param req 查询信息
   */
  reqQrySecAgentTradingAccount(req: object): number;

  /**
   * 请求查询二级代理商资金校验模式
   * @param req 查询信息
   */
  reqQrySecAgentCheckMode(req: object): number;

  /**
   * 请求查询二级代理商信息
   * @param req 查询信息
   */
  reqQrySecAgentTradeInfo(req: object): number;

  /**
   * 请求查询期权交易成本
   * @param req 查询信息
   */
  reqQryOptionInstrTradeCost(req: object): number;

  /**
   * 请求查询期权合约手续费
   * @param req 查询信息
   */
  reqQryOptionInstrCommRate(req: object): number;

  /**
   * 请求查询执行宣告
   * @param req 查询信息
   */
  reqQryExecOrder(req: object): number;

  /**
   * 请求查询询价
   * @param req 查询信息
   */
  reqQryForQuote(req: object): number;

  /**
   * 请求查询报价
   * @param req 查询信息
   */
  reqQryQuote(req: object): number;

  /**
   * 请求查询期权自对冲
   * @param req 查询信息
   */
  reqQryOptionSelfClose(req: object): number;

  /**
   * 请求查询投资单元
   * @param req 查询信息
   */
  reqQryInvestUnit(req: object): number;

  /**
   * 请求查询组合合约安全系数
   * @param req 查询信息
   */
  reqQryCombInstrumentGuard(req: object): number;

  /**
   * 请求查询申请组合
   * @param req 查询信息
   */
  reqQryCombAction(req: object): number;

  /**
   * 请求查询转帐流水
   * @param req 查询信息
   */
  reqQryTransferSerial(req: object): number;

  /**
   * 请求查询银期签约关系
   * @param req 查询信息
   */
  reqQryAccountregister(req: object): number;

  /**
   * 请求查询签约银行
   * @param req 查询信息
   */
  reqQryContractBank(req: object): number;

  /**
   * 请求查询预埋单
   * @param req 查询信息
   */
  reqQryParkedOrder(req: object): number;

  /**
   * 请求查询预埋撤单
   * @param req 查询信息
   */
  reqQryParkedOrderAction(req: object): number;

  /**
   * 请求查询交易通知
   * @param req 查询信息
   */
  reqQryTradingNotice(req: object): number;

  /**
   * 请求查询经纪公司交易参数
   * @param req 查询信息
   */
  reqQryBrokerTradingParams(req: object): number;

  /**
   * 请求查询经纪公司交易算法
   * @param req 查询信息
   */
  reqQryBrokerTradingAlgos(req: object): number;

  /**
   * 请求查询监控中心用户令牌
   * @param req 查询信息
   */
  reqQueryCFMMCTradingAccountToken(req: object): number;

  /**
   * 期货发起银行资金转期货请求
   * @param req 查询信息
   */
  reqFromBankToFutureByFuture(req: object): number;

  /**
   * 期货发起期货资金转银行请求
   * @param req 查询信息
   */
  reqFromFutureToBankByFuture(req: object): number;

  /**
   * 期货发起查询银行余额请求
   * @param req 查询信息
   */
  reqQueryBankAccountMoneyByFuture(req: object): number;

  /**
   * 请求查询分类合约
   * @param req 查询信息
   */
  reqQryClassifiedInstrument(req: object): number;

  /**
   * 请求组合优惠比例
   * @param req 查询信息
   */
  reqQryCombPromotionParam(req: object): number;

  /**
   * 投资者风险结算持仓查询
   * @param req 查询信息
   */
  reqQryRiskSettleInvstPosition(req: object): number;

  /**
   * 风险结算产品查询
   * @param req 查询信息
   */
  reqQryRiskSettleProductStatus(req: object): number;

  /**
   * 注册交易消息回调函数
   * @param event 交易消息事件
   * @param func 回调函数
   */
  on(event: TraderEvent, func: CallbackFunction): Trader;
}