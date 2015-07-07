'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _code128 = require('./code128');

var _code1282 = _interopRequireDefault(_code128);

var CODE128C = (function (_CODE128) {
  function CODE128C(code) {
    _classCallCheck(this, CODE128C);

    _get(Object.getPrototypeOf(CODE128C.prototype), 'constructor', this).call(this, code);
    this.code = this.code.replace(/ /g, '');
    this.startCode = 105;
  }

  _inherits(CODE128C, _CODE128);

  _createClass(CODE128C, [{
    key: 'encodeClass',
    value: function encodeClass() {
      var result = '';
      for (var i = 0; i < this.code.length; i += 2) {
        result += _get(Object.getPrototypeOf(CODE128C.prototype), 'encodingById', this).call(this, Number(this.code.substr(i, 2)));
      }
      return result;
    }
  }, {
    key: 'checksum',
    value: function checksum() {
      var sum = 0;
      var w = 1;
      for (var i = 0; i < this.code.length; i += 2) {
        sum += Number(this.code.substr(i, 2)) * w;
        w++;
      }
      return (sum + this.startCode) % 103;
    }
  }]);

  return CODE128C;
})(_code1282['default']);

exports['default'] = CODE128C;
module.exports = exports['default'];