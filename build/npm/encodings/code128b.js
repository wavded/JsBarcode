'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _CODE1282 = require('./code128');

var _CODE1283 = _interopRequireWildcard(_CODE1282);

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
})(_CODE1283['default']);

exports['default'] = CODE128B;
module.exports = exports['default'];