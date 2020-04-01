'use strict';

const fs = require('fs');
const toCustomProperties = require('@theme-ui/custom-properties');
const jsonToCssVariables = require('./json-to-css-variables.js');

const options = {
	element: ':root',
	pretty: true,
	unit: 'px'
};

const themeObj = require('../dist/index.cjs');
const customProperties = toCustomProperties(themeObj.default, 'rac');
const cssString = jsonToCssVariables(customProperties, options);

// console.log(customProperties);
fs.writeFileSync('dist/index.css', cssString);
