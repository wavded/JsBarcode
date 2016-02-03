'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _repeat = require('core-js/library/fn/string/repeat');

var _repeat2 = _interopRequireDefault(_repeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pharmacode = function () {
  function Pharmacode(code) {
    (0, _classCallCheck3.default)(this, Pharmacode);

    this.code = Number(code);
  }

  (0, _createClass3.default)(Pharmacode, [{
    key: 'isValid',
    value: function isValid() {
      return this.code >= 3 && this.code <= 131070;
    }

    // A helper function to calculate the zeros at the end of a string

  }, {
    key: '_calcZeros',
    value: function _calcZeros(code) {
      var i = code.length - 1;
      var zeros = 0;
      while (code[i] === '0' || i < 0) {
        zeros++;
        i--;
      }
      return zeros;
    }
  }, {
    key: 'encodeBinary',
    value: function encodeBinary(code, state) {
      if (code.length === 0) return '';

      var generated = undefined;
      var nextState = false;
      var nZeros = this._calcZeros(code);

      if (nZeros === 0) {
        generated = state ? '001' : '00111';
        nextState = state;
      } else {
        generated = (0, _repeat2.default)('001', nZeros - (state ? 1 : 0));
        generated += '00111';
      }
      return this.encodeBinary(code.substr(0, code.length - nZeros - 1), nextState) + generated;
    }
  }, {
    key: 'encode',
    value: function encode() {
      return this.encodeBinary(this.code.toString(2), true).substr(2);
    }
  }]);
  return Pharmacode;
}();

exports.default = Pharmacode;