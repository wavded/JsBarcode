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

var CODE128B = (function (_CODE128) {
  function CODE128B(code) {
    _classCallCheck(this, CODE128B);

    _get(Object.getPrototypeOf(CODE128B.prototype), 'constructor', this).call(this, code);
    this.startCode = 104;
  }

  _inherits(CODE128B, _CODE128);

  _createClass(CODE128B, [{
    key: 'encodeClass',
    value: function encodeClass() {
      var result = '';
      for (var i = 0; i < this.code.length; i++) {
        result += _get(Object.getPrototypeOf(CODE128B.prototype), 'encodingByChar', this).call(this, this.code[i]);
      }
      return result;
    }
  }, {
    key: 'checksum',
    value: function checksum() {
      var sum = 0;
      for (var i = 0; i < this.code.length; i++) {
        sum += _get(Object.getPrototypeOf(CODE128B.prototype), 'weightByCharacter', this).call(this, this.code[i]) * (i + 1);
      }
      return (sum + this.startCode) % 103;
    }
  }]);

  return CODE128B;
})(_code1282['default']);

exports['default'] = CODE128B;
module.exports = exports['default'];