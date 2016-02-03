'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ITF = function () {
  function ITF(code) {
    (0, _classCallCheck3.default)(this, ITF);

    this.code = String(code);
  }

  (0, _createClass3.default)(ITF, [{
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
}();

exports.default = ITF;