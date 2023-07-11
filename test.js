/*
 * test.js
 *
 * Copyright (c) 2022, 2023 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/napi-ctp
 */

const ctp = require(".");
const fs = require("node:fs");

if (!fs.existsSync("./flow/")) {
  fs.mkdirSync("./flow/", { recursive: true });
}
const td = ctp.createTrader("./flow/", "tcp://180.166.103.21:55205");

if (!fs.existsSync("./flowMd/")) {
  fs.mkdirSync("./flowMd/", { recursive: true });
}
const md = ctp.createMarketData("./flowMd/", "tcp://180.166.103.21:55213");

console.log(td.getApiVersion());
console.log(md.getApiVersion());
console.log(md.getTradingDay());
console.log(td.getTradingDay());

md.reqUserLogout({
  BrokerID: "4040",
  UserID: "369863",
});

md
.on('front-connected', (...args) => {
  console.log('md front-connected', ...args);
  md.reqUserLogin({
    BrokerID: "4040",
    UserID: "369863",
  });
})
.on('front-disconnected', (...args) => {
  console.log('md front-disconnected', ...args);
})
.on('rsp-error', (...args) => {
  console.log('md rsp-error', ...args);
})
.on('rsp-user-login', (...args) => {
  console.log('md rsp-user-login', ...args);
  // const n = md.subscribeMarketData(['au2310', 'ag2308']);
  // console.log('subscribeMarketData', n);
})
.on('rtn-depth-market-data', (...args) => {
  console.log('md rtn-depth-market-data', ...args);
});

td
.on('front-connected', (...args) => {
  console.log('td front-connected', ...args);
  td.reqAuthenticate({
    BrokerID: "4040",
    UserID: "369863",
    AuthCode: "",
    AppID: ""
  });
})
.on('rsp-authenticate', (...args) => {
  console.log('td rsp-authenticate', ...args);
  td.reqUserLogin({
    BrokerID: "4040",
    UserID: "369863",
    Password: "****"
  });
})
.on('front-disconnected', (...args) => {
  console.log('td front-disconnected', ...args);
})
.on('rsp-error', (...args) => {
  console.log('td rsp-error', ...args);
})
.on('rsp-user-login', (...args) => {
  console.log('td rsp-user-login', ...args);
  
});



