'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _itf = require('./itf');

var _itf2 = _interopRequireDefault(_itf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validRe = /^[0-9]{13,14}$/;

var ITF14 = function (_ITF) {
  (0, _inherits3.default)(ITF14, _ITF);

  function ITF14(code) {
    (0, _classCallCheck3.default)(this, ITF14);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ITF14).call(this, code));

    if (code.length === 13) {
      _this.code += _this.checksum();
    }
    return _this;
  }

  (0, _createClass3.default)(ITF14, [{
    key: 'isValid',
    value: function isValid() {
      return (0, _get3.default)((0, _getPrototypeOf2.default)(ITF14.prototype), 'isValid', this).call(this) && validRe.test(this.code) && Number(this.code[13]) === this.checksum();
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
}(_itf2.default);

exports.default = ITF14;