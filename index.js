const binding = require("node-gyp-build")(__dirname);
const constants = require("./dist/enum");

module.exports = Object.assign(binding, constants);