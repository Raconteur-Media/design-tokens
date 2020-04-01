'use strict';

const flattenObjSass = require('js-to-scss');
const fs = require('fs');
const themeObj = require('../dist/index.cjs');

let sassvars = flattenObjSass(themeObj.default, '$rac-');
// console.log(sassvars);
fs.writeFileSync('dist/index.scss', sassvars);
