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

var _code = require('./code128');

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CODE128B = function (_CODE) {
  (0, _inherits3.default)(CODE128B, _CODE);

  function CODE128B(code) {
    (0, _classCallCheck3.default)(this, CODE128B);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CODE128B).call(this, code));

    _this.startCode = 104;
    return _this;
  }

  (0, _createClass3.default)(CODE128B, [{
    key: 'encodeClass',
    value: function encodeClass() {
      var result = '';
      for (var i = 0; i < this.code.length; i++) {
        result += (0, _get3.default)((0, _getPrototypeOf2.default)(CODE128B.prototype), 'encodingByChar', this).call(this, this.code[i]);
      }
      return result;
    }
  }, {
    key: 'checksum',
    value: function checksum() {
      var sum = 0;
      for (var i = 0; i < this.code.length; i++) {
        sum += (0, _get3.default)((0, _getPrototypeOf2.default)(CODE128B.prototype), 'weightByCharacter', this).call(this, this.code[i]) * (i + 1);
      }
      return (sum + this.startCode) % 103;
    }
  }]);
  return CODE128B;
}(_code2.default);

exports.default = CODE128B;