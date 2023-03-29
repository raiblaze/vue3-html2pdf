/*
  @license
	Rollup.js v2.45.2
	Tue, 13 Apr 2021 04:32:03 GMT - commit e9bedf202e4754caaa32d566c9eef0147e1ef3b9


	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

var loadConfigFile_js = require('./shared/loadConfigFile.js');
require('fs');
require('path');
require('url');
require('./shared/rollup.js');
require('./shared/mergeOptions.js');
require('crypto');
require('events');



module.exports = loadConfigFile_js.loadAndParseConfigFile;
//# sourceMappingURL=loadConfigFile.js.map
