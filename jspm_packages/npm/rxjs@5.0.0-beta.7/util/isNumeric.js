/* */ 
"use strict";
var isArray_1 = require('./isArray');
function isNumeric(val) {
  return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
;
