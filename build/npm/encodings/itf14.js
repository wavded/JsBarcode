'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ITF2 = require('./itf');

var _ITF3 = _interopRequireWildcard(_ITF2);

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
})(_ITF3['default']);

exports['default'] = ITF14;
module.exports = exports['default'];