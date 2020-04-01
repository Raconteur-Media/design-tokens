'use strict';

const fs = require('fs');
var themeObj = require('../dist/index.cjs');
let data = JSON.stringify(themeObj.default);

fs.writeFileSync('dist/index.json', data);
