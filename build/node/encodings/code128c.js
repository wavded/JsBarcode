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
})(_CODE1283['default']);

exports['default'] = CODE128C;
module.exports = exports['default'];