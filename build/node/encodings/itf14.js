'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _itf = require('./itf');

var _itf2 = _interopRequireDefault(_itf);

var validRe = /^[0-9]{13,14}$/;

var ITF14 = (function (_ITF) {
  function ITF14(code) {
    _classCallCheck(this, ITF14);

    _get(Object.getPrototypeOf(ITF14.prototype), 'constructor', this).call(this, code);

    if (code.length === 13) {
      this.code += this.checksum();
    }
  }

  _inherits(ITF14, _ITF);

  _createClass(ITF14, [{
    key: 'isValid',
    value: function isValid() {
      return _get(Object.getPrototypeOf(ITF14.prototype), 'isValid', this).call(this) && validRe.test(this.code) && Number(this.code[13]) === this.checksum();
    }
  }, {
    key: 'checksum',
    value: function checksum() {
      var result = 0;

      for (var i = 0; i < 13; i++) {
        result += Number(this.code[i]) * (3 - i % 2 * 2);
      }

      return 10 - result % 10;
    }
  }]);

  return ITF14;
})(_itf2['default']);

exports['default'] = ITF14;
module.exports = exports['default'];