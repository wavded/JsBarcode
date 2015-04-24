'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _repeat = require('core-js/library/fn/string/repeat');

var _repeat2 = _interopRequireWildcard(_repeat);

var Pharmacode = (function () {
  function Pharmacode(code) {
    _classCallCheck(this, Pharmacode);

    this.code = Number(code);
  }

  _createClass(Pharmacode, [{
    key: 'isValid',
    value: function isValid() {
      return this.code >= 3 && this.code <= 131070;
    }
  }, {
    key: '_calcZeros',

    // A helper function to calculate the zeros at the end of a string
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
      if (code.length === 0) {
        return '';
      }var generated = undefined;
      var nextState = false;
      var nZeros = this._calcZeros(code);

      if (nZeros === 0) {
        generated = state ? '001' : '00111';
        nextState = state;
      } else {
        generated = _repeat2['default']('001', nZeros - (state ? 1 : 0));
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
})();

exports['default'] = Pharmacode;
module.exports = exports['default'];