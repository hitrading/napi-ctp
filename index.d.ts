/*
 * index.d.ts
 *
 * Copyright (c) 2022, 2023 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/napi-ctp
 */

export * from "./interfaces/enum";
import type { Market, Trader } from "./interfaces/types";


/**
 * 创建行情对象
 * @param flowMdPath 存贮订阅信息文件的目录
 * @param frontMdAddr 前置机网络地址
 * @returns 行情对象
 */
export declare function createMarketData(
  flowMdPath: string,
  frontMdAddr: string
): Market;

/**
 * 创建交易对象
 * @param flowPath 存贮订阅信息文件的目录
 * @param frontAddr 前置机网络地址
 * @returns 交易对象
 */
export declare function createTrader(
  flowPath: string,
  frontAddr: string
): Trader;