'use strict';

const path = require('path');
const fs = require('node:fs');
const os = require('node:os');
const { parse } = require('json5');

const spliter = os === 'win32' ? '\r\n' : '\n';

const bindingContent = fs.readFileSync(path.join(__dirname, '../binding.gyp'), 'utf-8');
const bindingJson = parse(bindingContent);
const tradeApiVersion = bindingJson.variables.tradeapi_version;

console.log('generate enum for ctp trade api version:', tradeApiVersion);

function create() {
  let filepath_ThostFtdcUserApiDataType = path.join(__dirname, `../tradeapi/${tradeApiVersion}/ThostFtdcUserApiDataType.h`);

  fs.readFile(filepath_ThostFtdcUserApiDataType, 'utf8', (err, data) => {
    if (err) throw err;
    data = data.replace(/\//g, '');
    let lines = data.split(spliter);

    for(let i = lines.length - 1; i >= 0; i--) {
      if (/^\s*$/.test(lines[i])) {
        lines.splice(i, 1);
      }
      // else {
      //   lines[i] = lines[i].replace(/'/g, '"');
      // }
    }

    let enumText = "'use strict';\n";
    let microEnumText = "'use strict';\n\nconst Enum = require('microenum');\n";
    let description;
    let inDict = false;

    for (let i = 0; i < lines.length - 1; i++) {
      let line = lines[i];
      let nextLine = lines[i + 1];
      
      if (/^TFtdc/.test(line)) {
        if (/[\u4e00-\u9fa5]+/.test(nextLine)) {
          description = trim(nextLine);
          line = line.replace(/^TFtdc/, '').replace('是一个', ' ');
          let arr = line.split(/\s/);
          enumText += "\n/** " + arr[1] + " */\n";
          microEnumText += "\n/** " + arr[1] + " */\n";
          enumText += "export enum " + arr[0] + " {";
          microEnumText += "exports." + arr[0] + " = new Enum(";
          // i += 1;
          inDict = true;
        }
        else {
          description = '';
        }
      }
      else if (inDict) {
        if (description && /^#define\s/.test(line)) {
          let words = line.split(/\s+/);
          if (words.length >= 3) {
            let value = words[2];
            value = trim(value);
            let key = words[1];
            let keys = key.split(/_/);
            key = keys[keys.length - 1];
            key = trim(key);
            enumText += "\n  /** " + description + " */\n";
            enumText += "  " + key + " = " + value + ",";
            microEnumText += "\n  { alias: '" + key + "', value: " + value + ", text: '" + description + "' },";
            description = '';
          }
        }
        else if (/[\u4e00-\u9fa5]+/.test(line)) {
          description = trim(line);
        }
        else if(/^typedef/.test(line)) {
          enumText += "\n};\n";
          microEnumText += "\n);\n";
          inDict = false;
        }
      }
    }

    if (!fs.existsSync(path.join(__dirname, '../dist'))) {
      fs.mkdirSync(path.join(__dirname, '../dist'), { recursive: true });
    }

    fs.writeFile(path.join(__dirname, '../dist/microEnum.js'), microEnumText, function(err) {
      if (err) throw err;
      console.log('generate UserApiDataType microEnum.js success!');
    });

    fs.writeFile(path.join(__dirname, '../interfaces/enum.ts'), enumText, function(err) {
      if (err) throw err;
      console.log('generate UserApiDataType enum.ts success!');
    });
  });
}


function trim(value) {
  return value.replace(/^\s*/, '').replace(/\s*$/, '');
}

create();

exports.create = create;