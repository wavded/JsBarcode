// The L (left) type of encoding
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Lbinary = {
  0: '0001101',
  1: '0011001',
  2: '0010011',
  3: '0111101',
  4: '0100011',
  5: '0110001',
  6: '0101111',
  7: '0111011',
  8: '0110111',
  9: '0001011'
};

// The G type of encoding
var Gbinary = {
  0: '0100111',
  1: '0110011',
  2: '0011011',
  3: '0100001',
  4: '0011101',
  5: '0111001',
  6: '0000101',
  7: '0010001',
  8: '0001001',
  9: '0010111'
};

// The R (right) type of encoding
var Rbinary = {
  0: '1110010',
  1: '1100110',
  2: '1101100',
  3: '1000010',
  4: '1011100',
  5: '1001110',
  6: '1010000',
  7: '1000100',
  8: '1001000',
  9: '1110100'
};

// The left side structure in EAN-13
var EANstruct = {
  0: 'LLLLLL',
  1: 'LLGLGG',
  2: 'LLGGLG',
  3: 'LLGGGL',
  4: 'LGLLGG',
  5: 'LGGLLG',
  6: 'LGGGLL',
  7: 'LGLGLG',
  8: 'LGLGGL',
  9: 'LGGLGL'
};

// Valid EAN code
var validRe = /^[0-9]{13}$/;
// The start bits
var startBin = '101';
// The end bits
var endBin = '101';
// The middle bits
var middleBin = '01010';

var EAN = (function () {
  function EAN(code) {
    _classCallCheck(this, EAN);

    this.code = String(code);
  }

  _createClass(EAN, [{
    key: 'isValid',
    value: function isValid() {
      return validRe.test(this.code) && Number(this.code[12]) === this.checksum();
    }
  }, {
    key: 'checksum',
    value: function checksum() {
      var result = 0;

      for (var i = 0; i < 12; i += 2) {
        result += Number(this.code[i]);
      }
      for (var i = 1; i < 12; i += 2) {
        result += Number(this.code[i]) * 3;
      }

      return (10 - result % 10) % 10;
    }
  }, {
    key: 'encode',

    // Create the binary representation of the EAN code
    // number needs to be a string
    value: function encode() {
      // Create the return variable
      var result = '';

      // Get the first digit (for later determination of the encoding type)
      var firstDigit = this.code[0];

      // Get the number to be encoded on the left side of the EAN code
      var leftSide = this.code.substr(1, 7);

      // Get the number to be encoded on the right side of the EAN code
      var rightSide = this.code.substr(7, 6);

      // Add the start bits
      result += startBin;

      // Add the left side
      result += this.encodeStruct(leftSide, EANstruct[firstDigit]);

      // Add the middle bits
      result += middleBin;

      // Add the right side
      result += this.encodeStruct(rightSide, 'RRRRRR');

      // Add the end bits
      result += endBin;

      return result;
    }
  }, {
    key: 'encodeStruct',

    // Convert a number array to the representing
    value: function encodeStruct(codePart, struct) {
      // Create the variable that should be returned at the end of the function
      var result = '';

      // Loop all the numbers
      for (var i = 0; i < codePart.length; i++) {
        // Using the L, G or R encoding and add it to the returning variable
        if (struct[i] === 'L') {
          result += Lbinary[codePart[i]];
        } else if (struct[i] === 'G') {
          result += Gbinary[codePart[i]];
        } else if (struct[i] === 'R') {
          result += Rbinary[codePart[i]];
        }
      }
      return result;
    }
  }]);

  return EAN;
})();

exports['default'] = EAN;
module.exports = exports['default'];