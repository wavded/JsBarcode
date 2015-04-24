'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});
//The structure for the all digits, 1 is wide and 0 is narrow
var digitStructure = {
  0: '00110',
  1: '10001',
  2: '01001',
  3: '11000',
  4: '00101',
  5: '10100',
  6: '01100',
  7: '00011',
  8: '10010',
  9: '01010'
};

// The start bits
var startBin = '1010';
// The end bits
var endBin = '11101';

// Regexp for a valid Inter25 code
var validRe = /^([0-9][0-9])+$/;

var ITF = (function () {
  function ITF(code) {
    _classCallCheck(this, ITF);

    this.code = String(code);
  }

  _createClass(ITF, [{
    key: 'isValid',
    value: function isValid() {
      return validRe.test(this.code);
    }
  }, {
    key: 'encode',
    value: function encode() {
      // Create the variable that should be returned at the end of the function
      var result = '';

      // Always add the same start bits
      result += startBin;

      // Calculate all the digit pairs
      for (var i = 0; i < this.code.length; i += 2) {
        result += this.calculatePair(this.code.substr(i, 2));
      }

      // Always add the same end bits
      result += endBin;

      return result;
    }
  }, {
    key: 'calculatePair',
    value: function calculatePair(twoNumbers) {
      var result = '';

      var number1Struct = digitStructure[twoNumbers[0]];
      var number2Struct = digitStructure[twoNumbers[1]];

      // Take every second bit and add to the result
      for (var i = 0; i < 5; i++) {
        result += number1Struct[i] === '1' ? '111' : '1';
        result += number2Struct[i] === '1' ? '000' : '0';
      }

      return result;
    }
  }]);

  return ITF;
})();

exports['default'] = ITF;
module.exports = exports['default'];