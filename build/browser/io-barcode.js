(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["ioBarcode"] = factory();
	else
		root["ioBarcode"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _assign = __webpack_require__(3);
	
	var _assign2 = _interopRequireWildcard(_assign);
	
	var _encodings = __webpack_require__(1);
	
	var _encodings2 = _interopRequireWildcard(_encodings);
	
	var _Canvas = __webpack_require__(2);
	
	var _Canvas2 = _interopRequireWildcard(_Canvas);
	
	var api = {};
	
	var _loop = function (_name) {
		api[_name] = function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			return generateBarcodeDataUri.apply(undefined, [_encodings2['default'][_name]].concat(args));
		};
	};
	
	/* eslint no-loop-func:0 */
	for (var _name in _encodings2['default']) {
		_loop(_name);
	}
	
	exports['default'] = api;
	
	var defaults = {
		width: 2,
		height: 100,
		quite: 10,
		displayValue: false,
		font: 'monospace',
		textAlign: 'center',
		fontSize: 12,
		backgroundColor: '',
		lineColor: '#000'
	};
	
	function _drawBarcodeText(text, canvas, opts) {
		var ctx = canvas.getContext('2d');
		var x = undefined,
		    y = undefined;
	
		y = opts.height;
	
		ctx.font = '' + opts.fontSize + 'px ' + opts.font;
		ctx.textBaseline = 'bottom';
		ctx.textBaseline = 'top';
	
		if (opts.textAlign === 'left') {
			x = opts.quite;
			ctx.textAlign = 'left';
		} else if (opts.textAlign === 'right') {
			x = canvas.width - opts.quite;
			ctx.textAlign = 'right';
		} else {
			x = canvas.width / 2;
			ctx.textAlign = 'center';
		}
	
		ctx.fillText(text, x, y);
	}
	
	function generateBarcodeDataUri(Encoding, code, opts) {
		/* eslint complexity:0 */
		opts = _assign2['default']({}, defaults, opts);
	
		var canvas = new _Canvas2['default']();
		var encoder = new Encoding(code);
	
		// Abort if the barcode format does not support the content
		if (!encoder.isValid()) {
			throw new Error('Content is not supported by the encoding');
		}
	
		// Encode the content
		var binaryString = encoder.encode();
	
		// Get the canvas context
		var ctx = canvas.getContext('2d');
	
		// Set the width and height of the barcode
		canvas.width = binaryString.length * opts.width + 2 * opts.quite;
	
		// Set extra height if the value is displayed under the barcode.
		canvas.height = opts.height + (opts.displayValue ? opts.fontSize * 1.3 : 0);
	
		// Paint the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	
		if (opts.backgroundColor) {
			ctx.fillStyle = opts.backgroundColor;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}
	
		// Change to lineColor to paint the lines
		ctx.fillStyle = opts.lineColor;
	
		// Creates the barcode out of the binary string
		for (var i = 0; i < binaryString.length; i++) {
			var x = i * opts.width + opts.quite;
			if (binaryString[i] === '1') {
				ctx.fillRect(x, 0, opts.width, opts.height);
			}
		}
	
		// Add value below if enabled
		if (opts.displayValue) {
			_drawBarcodeText(code, canvas, opts);
		}
	
		return canvas;
	}
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _EAN = __webpack_require__(4);
	
	var _EAN2 = _interopRequireWildcard(_EAN);
	
	var _UPC = __webpack_require__(5);
	
	var _UPC2 = _interopRequireWildcard(_UPC);
	
	var _ITF = __webpack_require__(6);
	
	var _ITF2 = _interopRequireWildcard(_ITF);
	
	var _ITF14 = __webpack_require__(7);
	
	var _ITF142 = _interopRequireWildcard(_ITF14);
	
	var _CODE39 = __webpack_require__(8);
	
	var _CODE392 = _interopRequireWildcard(_CODE39);
	
	var _CODE128B = __webpack_require__(9);
	
	var _CODE128B2 = _interopRequireWildcard(_CODE128B);
	
	var _CODE128C = __webpack_require__(10);
	
	var _CODE128C2 = _interopRequireWildcard(_CODE128C);
	
	var _Pharmacode = __webpack_require__(11);
	
	var _Pharmacode2 = _interopRequireWildcard(_Pharmacode);
	
	exports['default'] = {
	  EAN: _EAN2['default'],
	  UPC: _UPC2['default'],
	  ITF: _ITF2['default'],
	  ITF14: _ITF142['default'],
	  CODE39: _CODE392['default'],
	  CODE128B: _CODE128B2['default'],
	  CODE128C: _CODE128C2['default'],
	  Pharmacode: _Pharmacode2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	var Canvas = module.exports = function Canvas (w, h) {
	  var canvas = document.createElement('canvas')
	  canvas.width = w || 300
	  canvas.height = h || 150
	  return canvas
	}
	
	Canvas.Image = function () {
	  var img = document.createElement('img')
	  return img
	}
	
	
	


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12);
	module.exports = __webpack_require__(13).core.Object.assign;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	// The L (left) type of encoding
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _EAN2 = __webpack_require__(4);
	
	var _EAN3 = _interopRequireWildcard(_EAN2);
	
	var UPC = (function (_EAN) {
	  function UPC(code) {
	    _classCallCheck(this, UPC);
	
	    _get(Object.getPrototypeOf(UPC.prototype), 'constructor', this).call(this, '0' + code);
	  }
	
	  _inherits(UPC, _EAN);
	
	  return UPC;
	})(_EAN3['default']);
	
	exports['default'] = UPC;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _ITF2 = __webpack_require__(6);
	
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var code39 = [[0, '0', '101000111011101'], [1, '1', '111010001010111'], [2, '2', '101110001010111'], [3, '3', '111011100010101'], [4, '4', '101000111010111'], [5, '5', '111010001110101'], [6, '6', '101110001110101'], [7, '7', '101000101110111'], [8, '8', '111010001011101'], [9, '9', '101110001011101'], [10, 'A', '111010100010111'], [11, 'B', '101110100010111'], [12, 'C', '111011101000101'], [13, 'D', '101011100010111'], [14, 'E', '111010111000101'], [15, 'F', '101110111000101'], [16, 'G', '101010001110111'], [17, 'H', '111010100011101'], [18, 'I', '101110100011101'], [19, 'J', '101011100011101'], [20, 'K', '111010101000111'], [21, 'L', '101110101000111'], [22, 'M', '111011101010001'], [23, 'N', '101011101000111'], [24, 'O', '111010111010001'], [25, 'P', '101110111010001'], [26, 'Q', '101010111000111'], [27, 'R', '111010101110001'], [28, 'S', '101110101110001'], [29, 'T', '101011101110001'], [30, 'U', '111000101010111'], [31, 'V', '100011101010111'], [32, 'W', '111000111010101'], [33, 'X', '100010111010111'], [34, 'Y', '111000101110101'], [35, 'Z', '100011101110101'], [36, '-', '100010101110111'], [37, '.', '111000101011101'], [38, ' ', '100011101011101'], [39, '$', '100010001000101'], [40, '/', '100010001010001'], [41, '+', '100010100010001'], [42, '%', '101000100010001']];
	
	var validRe = /^[0-9a-zA-Z\-\.\ \$\/\+\%]+$/;
	
	var CODE39 = (function () {
	  function CODE39(code) {
	    _classCallCheck(this, CODE39);
	
	    this.code = String(code);
	  }
	
	  _createClass(CODE39, [{
	    key: 'isValid',
	    value: function isValid() {
	      return validRe.test(this.code);
	    }
	  }, {
	    key: 'encode',
	    value: function encode() {
	      var string = this.code.toUpperCase();
	
	      var result = '';
	      result += '1000101110111010';
	      for (var i = 0; i < string.length; i++) {
	        result += this.encodingByChar(string[i]) + '0';
	      }
	      result += '1000101110111010';
	      return result;
	    }
	  }, {
	    key: 'encodingByChar',
	    value: function encodingByChar(char) {
	      for (var i = 0; i < code39.length; i++) {
	        if (code39[i][1] === char) {
	          return code39[i][2];
	        }
	      }
	      return '';
	    }
	  }]);
	
	  return CODE39;
	})();
	
	exports['default'] = CODE39;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _CODE1282 = __webpack_require__(14);
	
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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _CODE1282 = __webpack_require__(14);
	
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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _repeat = __webpack_require__(15);
	
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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(16);
	$def($def.S, 'Object', {assign: __webpack_require__(17)});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value));
	  } : simpleSet;
	}
	
	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}
	
	var $ = module.exports = __webpack_require__(18)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  it: function(it){
	    return it;
	  },
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  setDescs:   Object.defineProperties,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  assertDefined: assertDefined,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  mix: function(target, src){
	    for(var key in src)hide(target, key, src[key]);
	    return target;
	  },
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	// Data for each character
	// The last characters will not be encoded but are used for error correction
	var code128b = [[' ', '11011001100', 0], ['!', '11001101100', 1], ['"', '11001100110', 2], ['#', '10010011000', 3], ['$', '10010001100', 4], ['%', '10001001100', 5], ['&', '10011001000', 6], ['\'', '10011000100', 7], ['(', '10001100100', 8], [')', '11001001000', 9], ['*', '11001000100', 10], ['+', '11000100100', 11], [',', '10110011100', 12], ['-', '10011011100', 13], ['.', '10011001110', 14], ['/', '10111001100', 15], ['0', '10011101100', 16], ['1', '10011100110', 17], ['2', '11001110010', 18], ['3', '11001011100', 19], ['4', '11001001110', 20], ['5', '11011100100', 21], ['6', '11001110100', 22], ['7', '11101101110', 23], ['8', '11101001100', 24], ['9', '11100101100', 25], [':', '11100100110', 26], [';', '11101100100', 27], ['<', '11100110100', 28], ['=', '11100110010', 29], ['>', '11011011000', 30], ['?', '11011000110', 31], ['@', '11000110110', 32], ['A', '10100011000', 33], ['B', '10001011000', 34], ['C', '10001000110', 35], ['D', '10110001000', 36], ['E', '10001101000', 37], ['F', '10001100010', 38], ['G', '11010001000', 39], ['H', '11000101000', 40], ['I', '11000100010', 41], ['J', '10110111000', 42], ['K', '10110001110', 43], ['L', '10001101110', 44], ['M', '10111011000', 45], ['N', '10111000110', 46], ['O', '10001110110', 47], ['P', '11101110110', 48], ['Q', '11010001110', 49], ['R', '11000101110', 50], ['S', '11011101000', 51], ['T', '11011100010', 52], ['U', '11011101110', 53], ['V', '11101011000', 54], ['W', '11101000110', 55], ['X', '11100010110', 56], ['Y', '11101101000', 57], ['Z', '11101100010', 58], ['[', '11100011010', 59], ['\\', '11101111010', 60], [']', '11001000010', 61], ['^', '11110001010', 62], ['_', '10100110000', 63], ['`', '10100001100', 64], ['a', '10010110000', 65], ['b', '10010000110', 66], ['c', '10000101100', 67], ['d', '10000100110', 68], ['e', '10110010000', 69], ['f', '10110000100', 70], ['g', '10011010000', 71], ['h', '10011000010', 72], ['i', '10000110100', 73], ['j', '10000110010', 74], ['k', '11000010010', 75], ['l', '11001010000', 76], ['m', '11110111010', 77], ['n', '11000010100', 78], ['o', '10001111010', 79], ['p', '10100111100', 80], ['q', '10010111100', 81], ['r', '10010011110', 82], ['s', '10111100100', 83], ['t', '10011110100', 84], ['u', '10011110010', 85], ['v', '11110100100', 86], ['w', '11110010100', 87], ['x', '11110010010', 88], ['y', '11011011110', 89], ['z', '11011110110', 90], ['{', '11110110110', 91], ['|', '10101111000', 92], ['}', '10100011110', 93], ['~', '10001011110', 94], [String.fromCharCode(127), '10111101000', 95], [String.fromCharCode(128), '10111100010', 96], [String.fromCharCode(129), '11110101000', 97], [String.fromCharCode(130), '11110100010', 98], [String.fromCharCode(131), '10111011110', 99], [String.fromCharCode(132), '10111101110', 100], [String.fromCharCode(133), '11101011110', 101], [String.fromCharCode(134), '11110101110', 102],
	//Start codes
	[String.fromCharCode(135), '11010000100', 103], [String.fromCharCode(136), '11010010000', 104], [String.fromCharCode(137), '11010011100', 105]];
	
	var endBin = '1100011101011';
	var validRe = /^[!-~ ]+$/;
	
	var CODE128 = (function () {
	  function CODE128(code) {
	    _classCallCheck(this, CODE128);
	
	    this.code = String(code);
	  }
	
	  _createClass(CODE128, [{
	    key: 'isValid',
	    value: function isValid() {
	      return validRe.test(this.code);
	    }
	  }, {
	    key: 'encode',
	    value: function encode(encodeFn, startCode, checksumFn) {
	      var result = '';
	
	      //Add the start bits
	      result += this.encodingById(this.startCode);
	
	      //Add the encoded bits
	      result += this.encodeClass();
	
	      //Add the checksum
	      result += this.encodingById(this.checksum());
	
	      //Add the end bits
	      result += endBin;
	
	      return result;
	    }
	  }, {
	    key: 'encodingById',
	    value: function encodingById(id) {
	      for (var i = 0; i < code128b.length; i++) {
	        if (code128b[i][2] === id) {
	          return code128b[i][1];
	        }
	      }
	      return '';
	    }
	  }, {
	    key: 'weightByCharacter',
	    value: function weightByCharacter(char) {
	      for (var i = 0; i < code128b.length; i++) {
	        if (code128b[i][0] === char) {
	          return code128b[i][2];
	        }
	      }
	      return 0;
	    }
	  }, {
	    key: 'encodingByChar',
	    value: function encodingByChar(char) {
	      for (var i = 0; i < code128b.length; i++) {
	        if (code128b[i][0] === char) {
	          return code128b[i][1];
	        }
	      }
	      return '';
	    }
	  }]);
	
	  return CODE128;
	})();
	
	exports['default'] = CODE128;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(19);
	module.exports = __webpack_require__(13).core.String.repeat;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(13)
	  , global     = $.g
	  , core       = $.core
	  , isFunction = $.isFunction;
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {}).prototype
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp.prototype = C.prototype;
	    }(out);
	    else exp = type & $def.P && isFunction(out) ? ctx(Function.call, out) : out;
	    // export
	    $.hide(exports, key, exp);
	  }
	}
	module.exports = $def;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(13)
	  , enumKeys = __webpack_require__(20);
	// 19.1.2.1 Object.assign(target, source, ...)
	/* eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/* eslint-enable no-unused-vars */
	  var T = Object($.assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = $.ES5Object(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $    = __webpack_require__(13)
	  , $def = __webpack_require__(16);
	
	$def($def.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: function repeat(count){
	    var str = String($.assertDefined(this))
	      , res = ''
	      , n   = $.toInteger(count);
	    if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	    for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	    return res;
	  }
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(13);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getDesc    = $.getDesc
	    , getSymbols = $.getSymbols;
	  if(getSymbols)$.each.call(getSymbols(it), function(key){
	    if(getDesc(it, key).enumerable)keys.push(key);
	  });
	  return keys;
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1YmUzMDJmNjM3MjA5MTM2YmY3MCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY2FudmFzLWJyb3dzZXJpZnkvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2Vhbi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2VuY29kaW5ncy91cGMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvaXRmLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2l0ZjE0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2NvZGUzOS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2VuY29kaW5ncy9jb2RlMTI4Yi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2VuY29kaW5ncy9jb2RlMTI4Yy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2VuY29kaW5ncy9waGFybWFjb2RlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2NvZGUxMjguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3RyaW5nL3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZ3LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OzttQ0N0Q21CLENBQWtDOzs7O3NDQUMvQixDQUFhOzs7O21DQUNoQixDQUFtQjs7OztBQUV0QyxLQUFJLEdBQUcsR0FBRyxFQUFFOzt1QkFHSCxLQUFJO0FBQ1osS0FBRyxDQUFDLEtBQUksQ0FBQyxHQUFHO3FDQUFJLElBQUk7QUFBSixRQUFJOzs7VUFBSyxzQkFBc0IsbUJBQUMsdUJBQVUsS0FBSSxDQUFDLFNBQUssSUFBSSxFQUFDO0dBQUE7Ozs7QUFEMUUsTUFBSyxJQUFJLEtBQUksNEJBQWU7UUFBbkIsS0FBSTtFQUVaOztzQkFFYyxHQUFHOztBQUVsQixLQUFNLFFBQVEsR0FBRztBQUNoQixPQUFLLEVBQUUsQ0FBQztBQUNSLFFBQU0sRUFBRSxHQUFHO0FBQ1gsT0FBSyxFQUFFLEVBQUU7QUFDVCxjQUFZLEVBQUUsS0FBSztBQUNuQixNQUFJLEVBQUUsV0FBVztBQUNqQixXQUFTLEVBQUUsUUFBUTtBQUNuQixVQUFRLEVBQUUsRUFBRTtBQUNaLGlCQUFlLEVB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Q0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzdCLENBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM3QixDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDN0IsQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzdCLENBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM3QixDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDN0IsQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzdCLENBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM5QixDQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDOUIsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzlCLENBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM5QixDQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDOUIsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzlCLENBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM5QixDQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDOUIsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzlCLENBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM5QixDQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDOUIsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzlCLENBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM5QixDQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFD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QUUsYUFBYSxFQUFFLENBQUMsQ0FBRSxFQUN6QixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMzQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQy9DLENBQUUsTUFBTSxDQUFDLFlBQVks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RTtBQUMzQixrQkFBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3RCO1FBQ0Y7QUFDRCxjQUFPLEVBQUU7TUFDVjs7O1VBcERHLE9BQU87OztzQkF1REUsT0FBTzs7Ozs7OztBQzFLdEI7QUFDQSw2RDs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsWUFBVztBQUNYLFlBQVc7QUFDWCxZQUFXO0FBQ1gsYUFBWTtBQUNaLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QztBQUM1QyxrRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUI7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTLE1BQU07QUFDZjtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNkRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEciLCJmaWxlIjoiaW8tYmFyY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaW9CYXJjb2RlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImlvQmFyY29kZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNWJlMzAyZjYzNzIwOTEzNmJmNzBcbiAqKi8iLCJpbXBvcnQgYXNzaWduIGZyb20gJ2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduJ1xyXG5pbXBvcnQgZW5jb2RpbmdzIGZyb20gJy4vZW5jb2RpbmdzJ1xyXG5pbXBvcnQgQ2FudmFzIGZyb20gJ2NhbnZhcy1icm93c2VyaWZ5J1xyXG5cclxubGV0IGFwaSA9IHt9XHJcblxyXG4vKiBlc2xpbnQgbm8tbG9vcC1mdW5jOjAgKi9cclxuZm9yIChsZXQgbmFtZSBpbiBlbmNvZGluZ3MpIHtcclxuXHRhcGlbbmFtZV0gPSAoLi4uYXJncykgPT4gZ2VuZXJhdGVCYXJjb2RlRGF0YVVyaShlbmNvZGluZ3NbbmFtZV0sIC4uLmFyZ3MpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaVxyXG5cclxuY29uc3QgZGVmYXVsdHMgPSB7XHJcblx0d2lkdGg6IDIsXHJcblx0aGVpZ2h0OiAxMDAsXHJcblx0cXVpdGU6IDEwLFxyXG5cdGRpc3BsYXlWYWx1ZTogZmFsc2UsXHJcblx0Zm9udDogJ21vbm9zcGFjZScsXHJcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRmb250U2l6ZTogMTIsXHJcblx0YmFja2dyb3VuZENvbG9yOiAnJyxcclxuXHRsaW5lQ29sb3I6ICcjMDAwJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZHJhd0JhcmNvZGVUZXh0ICh0ZXh0LCBjYW52YXMsIG9wdHMpIHtcclxuXHRsZXQgY3R4XHQ9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcblx0bGV0IHgsIHlcclxuXHJcblx0eSA9IG9wdHMuaGVpZ2h0XHJcblxyXG5cdGN0eC5mb250ID0gYCR7b3B0cy5mb250U2l6ZX1weCAke29wdHMuZm9udH1gXHJcblx0Y3R4LnRleHRCYXNlbGluZSA9ICdib3R0b20nXHJcblx0Y3R4LnRleHRCYXNlbGluZSA9ICd0b3AnXHJcblxyXG5cdGlmIChvcHRzLnRleHRBbGlnbiA9PT0gJ2xlZnQnKSB7XHJcblx0XHR4ID0gb3B0cy5xdWl0ZVxyXG5cdFx0Y3R4LnRleHRBbGlnbiA9ICdsZWZ0J1xyXG5cdH1cclxuXHRlbHNlIGlmIChvcHRzLnRleHRBbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG5cdFx0eCA9IGNhbnZhcy53aWR0aCAtIG9wdHMucXVpdGVcclxuXHRcdGN0eC50ZXh0QWxpZ24gPSAncmlnaHQnXHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0eCA9IGNhbnZhcy53aWR0aCAvIDJcclxuXHRcdGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJ1xyXG5cdH1cclxuXHJcblx0Y3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQmFyY29kZURhdGFVcmkgKEVuY29kaW5nLCBjb2RlLCBvcHRzKSB7XHJcblx0LyogZXNsaW50IGNvbXBsZXhpdHk6MCAqL1xyXG5cdG9wdHMgPSBhc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRzKVxyXG5cclxuXHRsZXQgY2FudmFzID0gbmV3IENhbnZhcygpXHJcblx0bGV0IGVuY29kZXIgPSBuZXcgRW5jb2RpbmcoY29kZSlcclxuXHJcblx0Ly8gQWJvcnQgaWYgdGhlIGJhcmNvZGUgZm9ybWF0IGRvZXMgbm90IHN1cHBvcnQgdGhlIGNvbnRlbnRcclxuXHRpZiAoIWVuY29kZXIuaXNWYWxpZCgpKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvbnRlbnQgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZW5jb2RpbmcnKVxyXG5cdH1cclxuXHJcblx0Ly8gRW5jb2RlIHRoZSBjb250ZW50XHJcblx0dmFyIGJpbmFyeVN0cmluZyA9IGVuY29kZXIuZW5jb2RlKClcclxuXHJcblx0Ly8gR2V0IHRoZSBjYW52YXMgY29udGV4dFxyXG5cdHZhciBjdHhcdD0gY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuXHJcblx0Ly8gU2V0IHRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBiYXJjb2RlXHJcblx0Y2FudmFzLndpZHRoID0gYmluYXJ5U3RyaW5nLmxlbmd0aCAqIG9wdHMud2lkdGggKyAyICogb3B0cy5xdWl0ZVxyXG5cclxuICAvLyBTZXQgZXh0cmEgaGVpZ2h0IGlmIHRoZSB2YWx1ZSBpcyBkaXNwbGF5ZWQgdW5kZXIgdGhlIGJhcmNvZGUuXHJcbiAgY2FudmFzLmhlaWdodCA9IG9wdHMuaGVpZ2h0ICsgKG9wdHMuZGlzcGxheVZhbHVlID8gb3B0cy5mb250U2l6ZSAqIDEuMyA6IDApXHJcblxyXG5cdC8vIFBhaW50IHRoZSBjYW52YXNcclxuXHRjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuXHJcblx0aWYgKG9wdHMuYmFja2dyb3VuZENvbG9yKSB7XHJcblx0XHRjdHguZmlsbFN0eWxlID0gb3B0cy5iYWNrZ3JvdW5kQ29sb3JcclxuXHRcdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXHJcblx0fVxyXG5cclxuXHQvLyBDaGFuZ2UgdG8gbGluZUNvbG9yIHRvIHBhaW50IHRoZSBsaW5lc1xyXG5cdGN0eC5maWxsU3R5bGUgPSBvcHRzLmxpbmVDb2xvclxyXG5cclxuXHQvLyBDcmVhdGVzIHRoZSBiYXJjb2RlIG91dCBvZiB0aGUgYmluYXJ5IHN0cmluZ1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYmluYXJ5U3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRsZXQgeCA9IGkgKiBvcHRzLndpZHRoICsgb3B0cy5xdWl0ZVxyXG5cdFx0aWYgKGJpbmFyeVN0cmluZ1tpXSA9PT0gJzEnKSB7XHJcblx0XHRcdGN0eC5maWxsUmVjdCh4LCAwLCBvcHRzLndpZHRoLCBvcHRzLmhlaWdodClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIEFkZCB2YWx1ZSBiZWxvdyBpZiBlbmFibGVkXHJcblx0aWYgKG9wdHMuZGlzcGxheVZhbHVlKSB7XHJcblx0XHRfZHJhd0JhcmNvZGVUZXh0KGNvZGUsIGNhbnZhcywgb3B0cylcclxuXHR9XHJcblxyXG5cdHJldHVybiBjYW52YXNcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBFQU4gZnJvbSAnLi9lYW4nXG5pbXBvcnQgVVBDIGZyb20gJy4vdXBjJ1xuaW1wb3J0IElURiBmcm9tICcuL2l0ZidcbmltcG9ydCBJVEYxNCBmcm9tICcuL2l0ZjE0J1xuaW1wb3J0IENPREUzOSBmcm9tICcuL2NvZGUzOSdcbmltcG9ydCBDT0RFMTI4QiBmcm9tICcuL2NvZGUxMjhiJ1xuaW1wb3J0IENPREUxMjhDIGZyb20gJy4vY29kZTEyOGMnXG5pbXBvcnQgUGhhcm1hY29kZSBmcm9tICcuL3BoYXJtYWNvZGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgRUFOLFxuICBVUEMsXG4gIElURixcbiAgSVRGMTQsXG4gIENPREUzOSxcbiAgQ09ERTEyOEIsXG4gIENPREUxMjhDLFxuICBQaGFybWFjb2RlXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy9pbmRleC5qc1xuICoqLyIsIlxudmFyIENhbnZhcyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQ2FudmFzICh3LCBoKSB7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBjYW52YXMud2lkdGggPSB3IHx8IDMwMFxuICBjYW52YXMuaGVpZ2h0ID0gaCB8fCAxNTBcbiAgcmV0dXJuIGNhbnZhc1xufVxuXG5DYW52YXMuSW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICByZXR1cm4gaW1nXG59XG5cblxuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jYW52YXMtYnJvd3NlcmlmeS9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpLmNvcmUuT2JqZWN0LmFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFRoZSBMIChsZWZ0KSB0eXBlIG9mIGVuY29kaW5nXG5jb25zdCBMYmluYXJ5ID0ge1xuICAwOiAnMDAwMTEwMScsXG4gIDE6ICcwMDExMDAxJyxcbiAgMjogJzAwMTAwMTEnLFxuICAzOiAnMDExMTEwMScsXG4gIDQ6ICcwMTAwMDExJyxcbiAgNTogJzAxMTAwMDEnLFxuICA2OiAnMDEwMTExMScsXG4gIDc6ICcwMTExMDExJyxcbiAgODogJzAxMTAxMTEnLFxuICA5OiAnMDAwMTAxMSdcbn1cblxuLy8gVGhlIEcgdHlwZSBvZiBlbmNvZGluZ1xuY29uc3QgR2JpbmFyeSA9IHtcbiAgMDogJzAxMDAxMTEnLFxuICAxOiAnMDExMDAxMScsXG4gIDI6ICcwMDExMDExJyxcbiAgMzogJzAxMDAwMDEnLFxuICA0OiAnMDAxMTEwMScsXG4gIDU6ICcwMTExMDAxJyxcbiAgNjogJzAwMDAxMDEnLFxuICA3OiAnMDAxMDAwMScsXG4gIDg6ICcwMDAxMDAxJyxcbiAgOTogJzAwMTAxMTEnXG59XG5cbi8vIFRoZSBSIChyaWdodCkgdHlwZSBvZiBlbmNvZGluZ1xuY29uc3QgUmJpbmFyeSA9IHtcbiAgMDogJzExMTAwMTAnLFxuICAxOiAnMTEwMDExMCcsXG4gIDI6ICcxMTAxMTAwJyxcbiAgMzogJzEwMDAwMTAnLFxuICA0OiAnMTAxMTEwMCcsXG4gIDU6ICcxMDAxMTEwJyxcbiAgNjogJzEwMTAwMDAnLFxuICA3OiAnMTAwMDEwMCcsXG4gIDg6ICcxMDAxMDAwJyxcbiAgOTogJzExMTAxMDAnXG59XG5cbi8vIFRoZSBsZWZ0IHNpZGUgc3RydWN0dXJlIGluIEVBTi0xM1xuY29uc3QgRUFOc3RydWN0ID0ge1xuICAwOiAnTExMTExMJyxcbiAgMTogJ0xMR0xHRycsXG4gIDI6ICdMTEdHTEcnLFxuICAzOiAnTExHR0dMJyxcbiAgNDogJ0xHTExHRycsXG4gIDU6ICdMR0dMTEcnLFxuICA2OiAnTEdHR0xMJyxcbiAgNzogJ0xHTEdMRycsXG4gIDg6ICdMR0xHR0wnLFxuICA5OiAnTEdHTEdMJ1xufVxuXG4vLyBWYWxpZCBFQU4gY29kZVxuY29uc3QgdmFsaWRSZSA9IC9eWzAtOV17MTN9JC9cbi8vIFRoZSBzdGFydCBiaXRzXG5jb25zdCBzdGFydEJpbiA9ICcxMDEnXG4vLyBUaGUgZW5kIGJpdHNcbmNvbnN0IGVuZEJpbiA9ICcxMDEnXG4vLyBUaGUgbWlkZGxlIGJpdHNcbmNvbnN0IG1pZGRsZUJpbiA9ICcwMTAxMCdcblxuXG5jbGFzcyBFQU4ge1xuICBjb25zdHJ1Y3RvciAoY29kZSkge1xuICAgIHRoaXMuY29kZSA9IFN0cmluZyhjb2RlKVxuICB9XG5cbiAgaXNWYWxpZCAoKSB7XG4gICAgcmV0dXJuIHZhbGlkUmUudGVzdCh0aGlzLmNvZGUpICYmXG4gICAgICBOdW1iZXIodGhpcy5jb2RlWzEyXSkgPT09IHRoaXMuY2hlY2tzdW0oKVxuICB9XG5cbiAgY2hlY2tzdW0gKCkge1xuICAgIGxldCByZXN1bHQgPSAwXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpICs9IDIpIHtcbiAgICAgIHJlc3VsdCArPSBOdW1iZXIodGhpcy5jb2RlW2ldKVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEyOyBpICs9IDIpIHtcbiAgICAgIHJlc3VsdCArPSBOdW1iZXIodGhpcy5jb2RlW2ldKSAqIDNcbiAgICB9XG5cbiAgICByZXR1cm4gKDEwIC0gKHJlc3VsdCAlIDEwKSkgJSAxMFxuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSBiaW5hcnkgcmVwcmVzZW50YXRpb24gb2YgdGhlIEVBTiBjb2RlXG4gIC8vIG51bWJlciBuZWVkcyB0byBiZSBhIHN0cmluZ1xuICBlbmNvZGUgKCkge1xuICAgIC8vIENyZWF0ZSB0aGUgcmV0dXJuIHZhcmlhYmxlXG4gICAgbGV0IHJlc3VsdCA9ICcnXG5cbiAgICAvLyBHZXQgdGhlIGZpcnN0IGRpZ2l0IChmb3IgbGF0ZXIgZGV0ZXJtaW5hdGlvbiBvZiB0aGUgZW5jb2RpbmcgdHlwZSlcbiAgICBsZXQgZmlyc3REaWdpdCA9IHRoaXMuY29kZVswXVxuXG4gICAgLy8gR2V0IHRoZSBudW1iZXIgdG8gYmUgZW5jb2RlZCBvbiB0aGUgbGVmdCBzaWRlIG9mIHRoZSBFQU4gY29kZVxuICAgIGxldCBsZWZ0U2lkZSA9IHRoaXMuY29kZS5zdWJzdHIoMSwgNylcblxuICAgIC8vIEdldCB0aGUgbnVtYmVyIHRvIGJlIGVuY29kZWQgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEVBTiBjb2RlXG4gICAgbGV0IHJpZ2h0U2lkZSA9IHRoaXMuY29kZS5zdWJzdHIoNywgNilcblxuXG4gICAgLy8gQWRkIHRoZSBzdGFydCBiaXRzXG4gICAgcmVzdWx0ICs9IHN0YXJ0QmluXG5cbiAgICAvLyBBZGQgdGhlIGxlZnQgc2lkZVxuICAgIHJlc3VsdCArPSB0aGlzLmVuY29kZVN0cnVjdChsZWZ0U2lkZSwgRUFOc3RydWN0W2ZpcnN0RGlnaXRdKVxuXG4gICAgLy8gQWRkIHRoZSBtaWRkbGUgYml0c1xuICAgIHJlc3VsdCArPSBtaWRkbGVCaW5cblxuICAgIC8vIEFkZCB0aGUgcmlnaHQgc2lkZVxuICAgIHJlc3VsdCArPSB0aGlzLmVuY29kZVN0cnVjdChyaWdodFNpZGUsICdSUlJSUlInKVxuXG4gICAgLy8gQWRkIHRoZSBlbmQgYml0c1xuICAgIHJlc3VsdCArPSBlbmRCaW5cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vIENvbnZlcnQgYSBudW1iZXIgYXJyYXkgdG8gdGhlIHJlcHJlc2VudGluZ1xuICBlbmNvZGVTdHJ1Y3QgKGNvZGVQYXJ0LCBzdHJ1Y3QpIHtcbiAgICAvLyBDcmVhdGUgdGhlIHZhcmlhYmxlIHRoYXQgc2hvdWxkIGJlIHJldHVybmVkIGF0IHRoZSBlbmQgb2YgdGhlIGZ1bmN0aW9uXG4gICAgbGV0IHJlc3VsdCA9ICcnXG5cbiAgICAvLyBMb29wIGFsbCB0aGUgbnVtYmVyc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29kZVBhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIFVzaW5nIHRoZSBMLCBHIG9yIFIgZW5jb2RpbmcgYW5kIGFkZCBpdCB0byB0aGUgcmV0dXJuaW5nIHZhcmlhYmxlXG4gICAgICBpZiAoc3RydWN0W2ldID09PSAnTCcpIHtcbiAgICAgICAgcmVzdWx0ICs9IExiaW5hcnlbY29kZVBhcnRbaV1dXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzdHJ1Y3RbaV0gPT09ICdHJykge1xuICAgICAgICByZXN1bHQgKz0gR2JpbmFyeVtjb2RlUGFydFtpXV1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHN0cnVjdFtpXSA9PT0gJ1InKSB7XG4gICAgICAgIHJlc3VsdCArPSBSYmluYXJ5W2NvZGVQYXJ0W2ldXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRUFOXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy9lYW4uanNcbiAqKi8iLCJpbXBvcnQgRUFOIGZyb20gJy4vZWFuJ1xuXG5jbGFzcyBVUEMgZXh0ZW5kcyBFQU4ge1xuICBjb25zdHJ1Y3Rvcihjb2RlKSB7XG4gICAgc3VwZXIoYDAke2NvZGV9YClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVUENcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvZW5jb2RpbmdzL3VwYy5qc1xuICoqLyIsIi8vVGhlIHN0cnVjdHVyZSBmb3IgdGhlIGFsbCBkaWdpdHMsIDEgaXMgd2lkZSBhbmQgMCBpcyBuYXJyb3dcbmNvbnN0IGRpZ2l0U3RydWN0dXJlID0ge1xuICAwOiAnMDAxMTAnLFxuICAxOiAnMTAwMDEnLFxuICAyOiAnMDEwMDEnLFxuICAzOiAnMTEwMDAnLFxuICA0OiAnMDAxMDEnLFxuICA1OiAnMTAxMDAnLFxuICA2OiAnMDExMDAnLFxuICA3OiAnMDAwMTEnLFxuICA4OiAnMTAwMTAnLFxuICA5OiAnMDEwMTAnXG59XG5cbi8vIFRoZSBzdGFydCBiaXRzXG5jb25zdCBzdGFydEJpbiA9ICcxMDEwJ1xuLy8gVGhlIGVuZCBiaXRzXG5jb25zdCBlbmRCaW4gPSAnMTExMDEnXG5cbi8vIFJlZ2V4cCBmb3IgYSB2YWxpZCBJbnRlcjI1IGNvZGVcbmNvbnN0IHZhbGlkUmUgPSAvXihbMC05XVswLTldKSskL1xuXG5jbGFzcyBJVEYge1xuICBjb25zdHJ1Y3RvciAoY29kZSkge1xuICAgIHRoaXMuY29kZSA9IFN0cmluZyhjb2RlKVxuICB9XG5cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdmFsaWRSZS50ZXN0KHRoaXMuY29kZSlcbiAgfVxuXG4gIGVuY29kZSgpIHtcbiAgICAvLyBDcmVhdGUgdGhlIHZhcmlhYmxlIHRoYXQgc2hvdWxkIGJlIHJldHVybmVkIGF0IHRoZSBlbmQgb2YgdGhlIGZ1bmN0aW9uXG4gICAgbGV0IHJlc3VsdCA9ICcnXG5cbiAgICAvLyBBbHdheXMgYWRkIHRoZSBzYW1lIHN0YXJ0IGJpdHNcbiAgICByZXN1bHQgKz0gc3RhcnRCaW5cblxuICAgIC8vIENhbGN1bGF0ZSBhbGwgdGhlIGRpZ2l0IHBhaXJzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvZGUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHJlc3VsdCArPSB0aGlzLmNhbGN1bGF0ZVBhaXIodGhpcy5jb2RlLnN1YnN0cihpLCAyKSlcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgYWRkIHRoZSBzYW1lIGVuZCBiaXRzXG4gICAgcmVzdWx0ICs9IGVuZEJpblxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY2FsY3VsYXRlUGFpciAodHdvTnVtYmVycykge1xuICAgIGxldCByZXN1bHQgPSAnJ1xuXG4gICAgbGV0IG51bWJlcjFTdHJ1Y3QgPSBkaWdpdFN0cnVjdHVyZVt0d29OdW1iZXJzWzBdXVxuICAgIGxldCBudW1iZXIyU3RydWN0ID0gZGlnaXRTdHJ1Y3R1cmVbdHdvTnVtYmVyc1sxXV1cblxuICAgIC8vIFRha2UgZXZlcnkgc2Vjb25kIGJpdCBhbmQgYWRkIHRvIHRoZSByZXN1bHRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IChudW1iZXIxU3RydWN0W2ldID09PSAnMScpID8gJzExMScgOiAnMSdcbiAgICAgIHJlc3VsdCArPSAobnVtYmVyMlN0cnVjdFtpXSA9PT0gJzEnKSA/ICcwMDAnIDogJzAnXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElURlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvaXRmLmpzXG4gKiovIiwiaW1wb3J0IElURiBmcm9tICcuL2l0ZidcblxuY29uc3QgdmFsaWRSZSA9IC9eWzAtOV17MTMsMTR9JC9cblxuY2xhc3MgSVRGMTQgZXh0ZW5kcyBJVEYge1xuICBjb25zdHJ1Y3Rvcihjb2RlKSB7XG4gICAgc3VwZXIoY29kZSlcblxuICAgIGlmIChjb2RlLmxlbmd0aCA9PT0gMTMpIHtcbiAgICAgIHRoaXMuY29kZSArPSB0aGlzLmNoZWNrc3VtKClcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkKCkge1xuICAgIHJldHVybiBzdXBlci5pc1ZhbGlkKCkgJiYgdmFsaWRSZS50ZXN0KHRoaXMuY29kZSkgJiZcbiAgICAgIE51bWJlcih0aGlzLmNvZGVbMTNdKSA9PT0gdGhpcy5jaGVja3N1bSgpXG4gIH1cblxuICBjaGVja3N1bSgpIHtcbiAgICB2YXIgcmVzdWx0ID0gMFxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMzsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gTnVtYmVyKHRoaXMuY29kZVtpXSkgKiAoMyAtIChpICUgMikgKiAyKVxuICAgIH1cblxuICAgIHJldHVybiAxMCAtIChyZXN1bHQgJSAxMClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJVEYxNFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvaXRmMTQuanNcbiAqKi8iLCJjb25zdCBjb2RlMzkgPSBbXG4gIFsgMCwgJzAnLCAnMTAxMDAwMTExMDExMTAxJyBdLFxuICBbIDEsICcxJywgJzExMTAxMDAwMTAxMDExMScgXSxcbiAgWyAyLCAnMicsICcxMDExMTAwMDEwMTAxMTEnIF0sXG4gIFsgMywgJzMnLCAnMTExMDExMTAwMDEwMTAxJyBdLFxuICBbIDQsICc0JywgJzEwMTAwMDExMTAxMDExMScgXSxcbiAgWyA1LCAnNScsICcxMTEwMTAwMDExMTAxMDEnIF0sXG4gIFsgNiwgJzYnLCAnMTAxMTEwMDAxMTEwMTAxJyBdLFxuICBbIDcsICc3JywgJzEwMTAwMDEwMTExMDExMScgXSxcbiAgWyA4LCAnOCcsICcxMTEwMTAwMDEwMTExMDEnIF0sXG4gIFsgOSwgJzknLCAnMTAxMTEwMDAxMDExMTAxJyBdLFxuICBbIDEwLCAnQScsICcxMTEwMTAxMDAwMTAxMTEnIF0sXG4gIFsgMTEsICdCJywgJzEwMTExMDEwMDAxMDExMScgXSxcbiAgWyAxMiwgJ0MnLCAnMTExMDExMTAxMDAwMTAxJyBdLFxuICBbIDEzLCAnRCcsICcxMDEwMTExMDAwMTAxMTEnIF0sXG4gIFsgMTQsICdFJywgJzExMTAxMDExMTAwMDEwMScgXSxcbiAgWyAxNSwgJ0YnLCAnMTAxMTEwMTExMDAwMTAxJyBdLFxuICBbIDE2LCAnRycsICcxMDEwMTAwMDExMTAxMTEnIF0sXG4gIFsgMTcsICdIJywgJzExMTAxMDEwMDAxMTEwMScgXSxcbiAgWyAxOCwgJ0knLCAnMTAxMTEwMTAwMDExMTAxJyBdLFxuICBbIDE5LCAnSicsICcxMDEwMTExMDAwMTExMDEnIF0sXG4gIFsgMjAsICdLJywgJzExMTAxMDEwMTAwMDExMScgXSxcbiAgWyAyMSwgJ0wnLCAnMTAxMTEwMTAxMDAwMTExJyBdLFxuICBbIDIyLCAnTScsICcxMTEwMTExMDEwMTAwMDEnIF0sXG4gIFsgMjMsICdOJywgJzEwMTAxMTEwMTAwMDExMScgXSxcbiAgWyAyNCwgJ08nLCAnMTExMDEwMTExMDEwMDAxJyBdLFxuICBbIDI1LCAnUCcsICcxMDExMTAxMTEwMTAwMDEnIF0sXG4gIFsgMjYsICdRJywgJzEwMTAxMDExMTAwMDExMScgXSxcbiAgWyAyNywgJ1InLCAnMTExMDEwMTAxMTEwMDAxJyBdLFxuICBbIDI4LCAnUycsICcxMDExMTAxMDExMTAwMDEnIF0sXG4gIFsgMjksICdUJywgJzEwMTAxMTEwMTExMDAwMScgXSxcbiAgWyAzMCwgJ1UnLCAnMTExMDAwMTAxMDEwMTExJyBdLFxuICBbIDMxLCAnVicsICcxMDAwMTExMDEwMTAxMTEnIF0sXG4gIFsgMzIsICdXJywgJzExMTAwMDExMTAxMDEwMScgXSxcbiAgWyAzMywgJ1gnLCAnMTAwMDEwMTExMDEwMTExJyBdLFxuICBbIDM0LCAnWScsICcxMTEwMDAxMDExMTAxMDEnIF0sXG4gIFsgMzUsICdaJywgJzEwMDAxMTEwMTExMDEwMScgXSxcbiAgWyAzNiwgJy0nLCAnMTAwMDEwMTAxMTEwMTExJyBdLFxuICBbIDM3LCAnLicsICcxMTEwMDAxMDEwMTExMDEnIF0sXG4gIFsgMzgsICcgJywgJzEwMDAxMTEwMTAxMTEwMScgXSxcbiAgWyAzOSwgJyQnLCAnMTAwMDEwMDAxMDAwMTAxJyBdLFxuICBbIDQwLCAnLycsICcxMDAwMTAwMDEwMTAwMDEnIF0sXG4gIFsgNDEsICcrJywgJzEwMDAxMDEwMDAxMDAwMScgXSxcbiAgWyA0MiwgJyUnLCAnMTAxMDAwMTAwMDEwMDAxJyBdXG5dXG5cbmNvbnN0IHZhbGlkUmUgPSAvXlswLTlhLXpBLVpcXC1cXC5cXCBcXCRcXC9cXCtcXCVdKyQvXG5cbmNsYXNzIENPREUzOSB7XG4gIGNvbnN0cnVjdG9yIChjb2RlKSB7XG4gICAgdGhpcy5jb2RlID0gU3RyaW5nKGNvZGUpXG4gIH1cblxuICBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB2YWxpZFJlLnRlc3QodGhpcy5jb2RlKVxuICB9XG5cbiAgZW5jb2RlKCkge1xuICAgIGxldCBzdHJpbmcgPSB0aGlzLmNvZGUudG9VcHBlckNhc2UoKVxuXG4gICAgdmFyIHJlc3VsdCA9ICcnXG4gICAgcmVzdWx0ICs9ICcxMDAwMTAxMTEwMTExMDEwJ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gdGhpcy5lbmNvZGluZ0J5Q2hhcihzdHJpbmdbaV0pICsgJzAnXG4gICAgfVxuICAgIHJlc3VsdCArPSAnMTAwMDEwMTExMDExMTAxMCdcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBlbmNvZGluZ0J5Q2hhciAoY2hhcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29kZTM5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29kZTM5W2ldWzFdID09PSBjaGFyKSB7XG4gICAgICAgIHJldHVybiBjb2RlMzlbaV1bMl1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ09ERTM5XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy9jb2RlMzkuanNcbiAqKi8iLCJpbXBvcnQgQ09ERTEyOCBmcm9tICcuL2NvZGUxMjgnXG5cbmNsYXNzIENPREUxMjhCIGV4dGVuZHMgQ09ERTEyOCB7XG4gIGNvbnN0cnVjdG9yIChjb2RlKSB7XG4gICAgc3VwZXIoY29kZSlcbiAgICB0aGlzLnN0YXJ0Q29kZSA9IDEwNFxuICB9XG5cbiAgZW5jb2RlQ2xhc3MgKCkge1xuICAgIGxldCByZXN1bHQgPSAnJ1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gc3VwZXIuZW5jb2RpbmdCeUNoYXIodGhpcy5jb2RlW2ldKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjaGVja3N1bSgpIHtcbiAgICBsZXQgc3VtID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdW0gKz0gc3VwZXIud2VpZ2h0QnlDaGFyYWN0ZXIodGhpcy5jb2RlW2ldKSAqIChpICsgMSlcbiAgICB9XG4gICAgcmV0dXJuIChzdW0gKyB0aGlzLnN0YXJ0Q29kZSkgJSAxMDNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDT0RFMTI4QlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvY29kZTEyOGIuanNcbiAqKi8iLCJpbXBvcnQgQ09ERTEyOCBmcm9tICcuL2NvZGUxMjgnXG5cbmNsYXNzIENPREUxMjhDIGV4dGVuZHMgQ09ERTEyOCB7XG4gIGNvbnN0cnVjdG9yIChjb2RlKSB7XG4gICAgc3VwZXIoY29kZSlcbiAgICB0aGlzLmNvZGUgPSB0aGlzLmNvZGUucmVwbGFjZSgvIC9nLCAnJylcbiAgICB0aGlzLnN0YXJ0Q29kZSA9IDEwNVxuICB9XG5cbiAgZW5jb2RlQ2xhc3MgKCkge1xuICAgIGxldCByZXN1bHQgPSAnJ1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvZGUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHJlc3VsdCArPSBzdXBlci5lbmNvZGluZ0J5SWQoTnVtYmVyKHRoaXMuY29kZS5zdWJzdHIoaSwgMikpKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjaGVja3N1bSgpIHtcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCB3ID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2RlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBzdW0gKz0gTnVtYmVyKHRoaXMuY29kZS5zdWJzdHIoaSwgMikpICogKHcpXG4gICAgICB3KytcbiAgICB9XG4gICAgcmV0dXJuIChzdW0gKyB0aGlzLnN0YXJ0Q29kZSkgJSAxMDNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDT0RFMTI4Q1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvY29kZTEyOGMuanNcbiAqKi8iLCJpbXBvcnQgcmVwZWF0IGZyb20gJ2NvcmUtanMvbGlicmFyeS9mbi9zdHJpbmcvcmVwZWF0J1xuXG5jbGFzcyBQaGFybWFjb2RlIHtcbiAgY29uc3RydWN0b3IgKGNvZGUpIHtcbiAgICB0aGlzLmNvZGUgPSBOdW1iZXIoY29kZSlcbiAgfVxuXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29kZSA+PSAzICYmIHRoaXMuY29kZSA8PSAxMzEwNzBcbiAgfVxuXG4gIC8vIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgemVyb3MgYXQgdGhlIGVuZCBvZiBhIHN0cmluZ1xuICBfY2FsY1plcm9zIChjb2RlKSB7XG4gICAgbGV0IGkgPSBjb2RlLmxlbmd0aCAtIDFcbiAgICBsZXQgemVyb3MgPSAwXG4gICAgd2hpbGUgKGNvZGVbaV0gPT09ICcwJyB8fCBpIDwgMCl7XG4gICAgICB6ZXJvcysrXG4gICAgICBpLS1cbiAgICB9XG4gICAgcmV0dXJuIHplcm9zXG4gIH1cblxuICBlbmNvZGVCaW5hcnkgKGNvZGUsIHN0YXRlKSB7XG4gICAgaWYgKGNvZGUubGVuZ3RoID09PSAwKSByZXR1cm4gJydcblxuICAgIGxldCBnZW5lcmF0ZWRcbiAgICBsZXQgbmV4dFN0YXRlID0gZmFsc2VcbiAgICBsZXQgblplcm9zID0gdGhpcy5fY2FsY1plcm9zKGNvZGUpXG5cbiAgICBpZiAoblplcm9zID09PSAwKSB7XG4gICAgICBnZW5lcmF0ZWQgPSBzdGF0ZSA/ICcwMDEnIDogJzAwMTExJ1xuICAgICAgbmV4dFN0YXRlID0gc3RhdGVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBnZW5lcmF0ZWQgPSByZXBlYXQoJzAwMScsIG5aZXJvcyAtIChzdGF0ZSA/IDEgOiAwKSlcbiAgICAgIGdlbmVyYXRlZCArPSAnMDAxMTEnXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuY29kZUJpbmFyeShjb2RlLnN1YnN0cigwLCBjb2RlLmxlbmd0aCAtIG5aZXJvcyAtIDEpLCBuZXh0U3RhdGUpICsgZ2VuZXJhdGVkXG4gIH1cblxuICBlbmNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5jb2RlQmluYXJ5KHRoaXMuY29kZS50b1N0cmluZygyKSwgdHJ1ZSkuc3Vic3RyKDIpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGhhcm1hY29kZVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvcGhhcm1hY29kZS5qc1xuICoqLyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vJC5hc3NpZ24nKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxudmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClcclxuICAsIGNvcmUgICA9IHt9XHJcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxyXG4gICwgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eVxyXG4gICwgY2VpbCAgPSBNYXRoLmNlaWxcclxuICAsIGZsb29yID0gTWF0aC5mbG9vclxyXG4gICwgbWF4ICAgPSBNYXRoLm1heFxyXG4gICwgbWluICAgPSBNYXRoLm1pbjtcclxuLy8gVGhlIGVuZ2luZSB3b3JrcyBmaW5lIHdpdGggZGVzY3JpcHRvcnM/IFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHkuXHJcbnZhciBERVNDID0gISFmdW5jdGlvbigpe1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDI7IH19KS5hID09IDI7XHJcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxyXG59KCk7XHJcbnZhciBoaWRlID0gY3JlYXRlRGVmaW5lcigxKTtcclxuLy8gNy4xLjQgVG9JbnRlZ2VyXHJcbmZ1bmN0aW9uIHRvSW50ZWdlcihpdCl7XHJcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XHJcbn1cclxuZnVuY3Rpb24gZGVzYyhiaXRtYXAsIHZhbHVlKXtcclxuICByZXR1cm4ge1xyXG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxyXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxyXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxyXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxyXG4gIH07XHJcbn1cclxuZnVuY3Rpb24gc2ltcGxlU2V0KG9iamVjdCwga2V5LCB2YWx1ZSl7XHJcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcclxuICByZXR1cm4gb2JqZWN0O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmluZXIoYml0bWFwKXtcclxuICByZXR1cm4gREVTQyA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XHJcbiAgICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBkZXNjKGJpdG1hcCwgdmFsdWUpKTtcclxuICB9IDogc2ltcGxlU2V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdChpdCl7XHJcbiAgcmV0dXJuIGl0ICE9PSBudWxsICYmICh0eXBlb2YgaXQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIGl0ID09ICdmdW5jdGlvbicpO1xyXG59XHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oaXQpe1xyXG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJztcclxufVxyXG5mdW5jdGlvbiBhc3NlcnREZWZpbmVkKGl0KXtcclxuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xyXG4gIHJldHVybiBpdDtcclxufVxyXG5cclxudmFyICQgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mdycpKHtcclxuICBnOiBnbG9iYWwsXHJcbiAgY29yZTogY29yZSxcclxuICBodG1sOiBnbG9iYWwuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxyXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvcmUtanMtaXNvYmplY3RcclxuICBpc09iamVjdDogICBpc09iamVjdCxcclxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxyXG4gIGl0OiBmdW5jdGlvbihpdCl7XHJcbiAgICByZXR1cm4gaXQ7XHJcbiAgfSxcclxuICB0aGF0OiBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfSxcclxuICAvLyA3LjEuNCBUb0ludGVnZXJcclxuICB0b0ludGVnZXI6IHRvSW50ZWdlcixcclxuICAvLyA3LjEuMTUgVG9MZW5ndGhcclxuICB0b0xlbmd0aDogZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcclxuICB9LFxyXG4gIHRvSW5kZXg6IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xyXG4gICAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xyXG4gICAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XHJcbiAgfSxcclxuICBoYXM6IGZ1bmN0aW9uKGl0LCBrZXkpe1xyXG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XHJcbiAgfSxcclxuICBjcmVhdGU6ICAgICBPYmplY3QuY3JlYXRlLFxyXG4gIGdldFByb3RvOiAgIE9iamVjdC5nZXRQcm90b3R5cGVPZixcclxuICBERVNDOiAgICAgICBERVNDLFxyXG4gIGRlc2M6ICAgICAgIGRlc2MsXHJcbiAgZ2V0RGVzYzogICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcclxuICBzZXREZXNjOiAgICBkZWZpbmVQcm9wZXJ0eSxcclxuICBzZXREZXNjczogICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcclxuICBnZXRLZXlzOiAgICBPYmplY3Qua2V5cyxcclxuICBnZXROYW1lczogICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcclxuICBnZXRTeW1ib2xzOiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxyXG4gIGFzc2VydERlZmluZWQ6IGFzc2VydERlZmluZWQsXHJcbiAgLy8gRHVtbXksIGZpeCBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZyBpbiBlczUgbW9kdWxlXHJcbiAgRVM1T2JqZWN0OiBPYmplY3QsXHJcbiAgdG9PYmplY3Q6IGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiAkLkVTNU9iamVjdChhc3NlcnREZWZpbmVkKGl0KSk7XHJcbiAgfSxcclxuICBoaWRlOiBoaWRlLFxyXG4gIGRlZjogY3JlYXRlRGVmaW5lcigwKSxcclxuICBzZXQ6IGdsb2JhbC5TeW1ib2wgPyBzaW1wbGVTZXQgOiBoaWRlLFxyXG4gIG1peDogZnVuY3Rpb24odGFyZ2V0LCBzcmMpe1xyXG4gICAgZm9yKHZhciBrZXkgaW4gc3JjKWhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfSxcclxuICBlYWNoOiBbXS5mb3JFYWNoXHJcbn0pO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5pZih0eXBlb2YgX19lICE9ICd1bmRlZmluZWQnKV9fZSA9IGNvcmU7XHJcbmlmKHR5cGVvZiBfX2cgIT0gJ3VuZGVmaW5lZCcpX19nID0gZ2xvYmFsO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gRGF0YSBmb3IgZWFjaCBjaGFyYWN0ZXJcbi8vIFRoZSBsYXN0IGNoYXJhY3RlcnMgd2lsbCBub3QgYmUgZW5jb2RlZCBidXQgYXJlIHVzZWQgZm9yIGVycm9yIGNvcnJlY3Rpb25cbmNvbnN0IGNvZGUxMjhiID0gW1xuICBbICcgJywgJzExMDExMDAxMTAwJywgMCBdLFxuICBbICchJywgJzExMDAxMTAxMTAwJywgMSBdLFxuICBbICdcIicsICcxMTAwMTEwMDExMCcsIDIgXSxcbiAgWyAnIycsICcxMDAxMDAxMTAwMCcsIDMgXSxcbiAgWyAnJCcsICcxMDAxMDAwMTEwMCcsIDQgXSxcbiAgWyAnJScsICcxMDAwMTAwMTEwMCcsIDUgXSxcbiAgWyAnJicsICcxMDAxMTAwMTAwMCcsIDYgXSxcbiAgWyAnXFwnJywgJzEwMDExMDAwMTAwJywgNyBdLFxuICBbICcoJywgJzEwMDAxMTAwMTAwJywgOCBdLFxuICBbICcpJywgJzExMDAxMDAxMDAwJywgOSBdLFxuICBbICcqJywgJzExMDAxMDAwMTAwJywgMTAgXSxcbiAgWyAnKycsICcxMTAwMDEwMDEwMCcsIDExIF0sXG4gIFsgJywnLCAnMTAxMTAwMTExMDAnLCAxMiBdLFxuICBbICctJywgJzEwMDExMDExMTAwJywgMTMgXSxcbiAgWyAnLicsICcxMDAxMTAwMTExMCcsIDE0IF0sXG4gIFsgJy8nLCAnMTAxMTEwMDExMDAnLCAxNSBdLFxuICBbICcwJywgJzEwMDExMTAxMTAwJywgMTYgXSxcbiAgWyAnMScsICcxMDAxMTEwMDExMCcsIDE3IF0sXG4gIFsgJzInLCAnMTEwMDExMTAwMTAnLCAxOCBdLFxuICBbICczJywgJzExMDAxMDExMTAwJywgMTkgXSxcbiAgWyAnNCcsICcxMTAwMTAwMTExMCcsIDIwIF0sXG4gIFsgJzUnLCAnMTEwMTExMDAxMDAnLCAyMSBdLFxuICBbICc2JywgJzExMDAxMTEwMTAwJywgMjIgXSxcbiAgWyAnNycsICcxMTEwMTEwMTExMCcsIDIzIF0sXG4gIFsgJzgnLCAnMTExMDEwMDExMDAnLCAyNCBdLFxuICBbICc5JywgJzExMTAwMTAxMTAwJywgMjUgXSxcbiAgWyAnOicsICcxMTEwMDEwMDExMCcsIDI2IF0sXG4gIFsgJzsnLCAnMTExMDExMDAxMDAnLCAyNyBdLFxuICBbICc8JywgJzExMTAwMTEwMTAwJywgMjggXSxcbiAgWyAnPScsICcxMTEwMDExMDAxMCcsIDI5IF0sXG4gIFsgJz4nLCAnMTEwMTEwMTEwMDAnLCAzMCBdLFxuICBbICc/JywgJzExMDExMDAwMTEwJywgMzEgXSxcbiAgWyAnQCcsICcxMTAwMDExMDExMCcsIDMyIF0sXG4gIFsgJ0EnLCAnMTAxMDAwMTEwMDAnLCAzMyBdLFxuICBbICdCJywgJzEwMDAxMDExMDAwJywgMzQgXSxcbiAgWyAnQycsICcxMDAwMTAwMDExMCcsIDM1IF0sXG4gIFsgJ0QnLCAnMTAxMTAwMDEwMDAnLCAzNiBdLFxuICBbICdFJywgJzEwMDAxMTAxMDAwJywgMzcgXSxcbiAgWyAnRicsICcxMDAwMTEwMDAxMCcsIDM4IF0sXG4gIFsgJ0cnLCAnMTEwMTAwMDEwMDAnLCAzOSBdLFxuICBbICdIJywgJzExMDAwMTAxMDAwJywgNDAgXSxcbiAgWyAnSScsICcxMTAwMDEwMDAxMCcsIDQxIF0sXG4gIFsgJ0onLCAnMTAxMTAxMTEwMDAnLCA0MiBdLFxuICBbICdLJywgJzEwMTEwMDAxMTEwJywgNDMgXSxcbiAgWyAnTCcsICcxMDAwMTEwMTExMCcsIDQ0IF0sXG4gIFsgJ00nLCAnMTAxMTEwMTEwMDAnLCA0NSBdLFxuICBbICdOJywgJzEwMTExMDAwMTEwJywgNDYgXSxcbiAgWyAnTycsICcxMDAwMTExMDExMCcsIDQ3IF0sXG4gIFsgJ1AnLCAnMTExMDExMTAxMTAnLCA0OCBdLFxuICBbICdRJywgJzExMDEwMDAxMTEwJywgNDkgXSxcbiAgWyAnUicsICcxMTAwMDEwMTExMCcsIDUwIF0sXG4gIFsgJ1MnLCAnMTEwMTExMDEwMDAnLCA1MSBdLFxuICBbICdUJywgJzExMDExMTAwMDEwJywgNTIgXSxcbiAgWyAnVScsICcxMTAxMTEwMTExMCcsIDUzIF0sXG4gIFsgJ1YnLCAnMTExMDEwMTEwMDAnLCA1NCBdLFxuICBbICdXJywgJzExMTAxMDAwMTEwJywgNTUgXSxcbiAgWyAnWCcsICcxMTEwMDAxMDExMCcsIDU2IF0sXG4gIFsgJ1knLCAnMTExMDExMDEwMDAnLCA1NyBdLFxuICBbICdaJywgJzExMTAxMTAwMDEwJywgNTggXSxcbiAgWyAnWycsICcxMTEwMDAxMTAxMCcsIDU5IF0sXG4gIFsgJ1xcXFwnLCAnMTExMDExMTEwMTAnLCA2MCBdLFxuICBbICddJywgJzExMDAxMDAwMDEwJywgNjEgXSxcbiAgWyAnXicsICcxMTExMDAwMTAxMCcsIDYyIF0sXG4gIFsgJ18nLCAnMTAxMDAxMTAwMDAnLCA2MyBdLFxuICBbICdgJywgJzEwMTAwMDAxMTAwJywgNjQgXSxcbiAgWyAnYScsICcxMDAxMDExMDAwMCcsIDY1IF0sXG4gIFsgJ2InLCAnMTAwMTAwMDAxMTAnLCA2NiBdLFxuICBbICdjJywgJzEwMDAwMTAxMTAwJywgNjcgXSxcbiAgWyAnZCcsICcxMDAwMDEwMDExMCcsIDY4IF0sXG4gIFsgJ2UnLCAnMTAxMTAwMTAwMDAnLCA2OSBdLFxuICBbICdmJywgJzEwMTEwMDAwMTAwJywgNzAgXSxcbiAgWyAnZycsICcxMDAxMTAxMDAwMCcsIDcxIF0sXG4gIFsgJ2gnLCAnMTAwMTEwMDAwMTAnLCA3MiBdLFxuICBbICdpJywgJzEwMDAwMTEwMTAwJywgNzMgXSxcbiAgWyAnaicsICcxMDAwMDExMDAxMCcsIDc0IF0sXG4gIFsgJ2snLCAnMTEwMDAwMTAwMTAnLCA3NSBdLFxuICBbICdsJywgJzExMDAxMDEwMDAwJywgNzYgXSxcbiAgWyAnbScsICcxMTExMDExMTAxMCcsIDc3IF0sXG4gIFsgJ24nLCAnMTEwMDAwMTAxMDAnLCA3OCBdLFxuICBbICdvJywgJzEwMDAxMTExMDEwJywgNzkgXSxcbiAgWyAncCcsICcxMDEwMDExMTEwMCcsIDgwIF0sXG4gIFsgJ3EnLCAnMTAwMTAxMTExMDAnLCA4MSBdLFxuICBbICdyJywgJzEwMDEwMDExMTEwJywgODIgXSxcbiAgWyAncycsICcxMDExMTEwMDEwMCcsIDgzIF0sXG4gIFsgJ3QnLCAnMTAwMTExMTAxMDAnLCA4NCBdLFxuICBbICd1JywgJzEwMDExMTEwMDEwJywgODUgXSxcbiAgWyAndicsICcxMTExMDEwMDEwMCcsIDg2IF0sXG4gIFsgJ3cnLCAnMTExMTAwMTAxMDAnLCA4NyBdLFxuICBbICd4JywgJzExMTEwMDEwMDEwJywgODggXSxcbiAgWyAneScsICcxMTAxMTAxMTExMCcsIDg5IF0sXG4gIFsgJ3onLCAnMTEwMTExMTAxMTAnLCA5MCBdLFxuICBbICd7JywgJzExMTEwMTEwMTEwJywgOTEgXSxcbiAgWyAnfCcsICcxMDEwMTExMTAwMCcsIDkyIF0sXG4gIFsgJ30nLCAnMTAxMDAwMTExMTAnLCA5MyBdLFxuICBbICd+JywgJzEwMDAxMDExMTEwJywgOTQgXSxcbiAgWyBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyksICcxMDExMTEwMTAwMCcsIDk1IF0sXG4gIFsgU3RyaW5nLmZyb21DaGFyQ29kZSgxMjgpLCAnMTAxMTExMDAwMTAnLCA5NiBdLFxuICBbIFN0cmluZy5mcm9tQ2hhckNvZGUoMTI5KSwgJzExMTEwMTAxMDAwJywgOTcgXSxcbiAgWyBTdHJpbmcuZnJvbUNoYXJDb2RlKDEzMCksICcxMTExMDEwMDAxMCcsIDk4IF0sXG4gIFsgU3RyaW5nLmZyb21DaGFyQ29kZSgxMzEpLCAnMTAxMTEwMTExMTAnLCA5OSBdLFxuICBbIFN0cmluZy5mcm9tQ2hhckNvZGUoMTMyKSwgJzEwMTExMTAxMTEwJywgMTAwIF0sXG4gIFsgU3RyaW5nLmZyb21DaGFyQ29kZSgxMzMpLCAnMTExMDEwMTExMTAnLCAxMDEgXSxcbiAgWyBTdHJpbmcuZnJvbUNoYXJDb2RlKDEzNCksICcxMTExMDEwMTExMCcsIDEwMiBdLFxuICAvL1N0YXJ0IGNvZGVzXG4gIFsgU3RyaW5nLmZyb21DaGFyQ29kZSgxMzUpLCAnMTEwMTAwMDAxMDAnLCAxMDMgXSxcbiAgWyBTdHJpbmcuZnJvbUNoYXJDb2RlKDEzNiksICcxMTAxMDAxMDAwMCcsIDEwNCBdLFxuICBbIFN0cmluZy5mcm9tQ2hhckNvZGUoMTM3KSwgJzExMDEwMDExMTAwJywgMTA1IF1cbl1cblxuY29uc3QgZW5kQmluID0gJzExMDAwMTExMDEwMTEnXG5jb25zdCB2YWxpZFJlID0gL15bIS1+IF0rJC9cblxuY2xhc3MgQ09ERTEyOCB7XG4gIGNvbnN0cnVjdG9yIChjb2RlKSB7XG4gICAgdGhpcy5jb2RlID0gU3RyaW5nKGNvZGUpXG4gIH1cblxuICBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB2YWxpZFJlLnRlc3QodGhpcy5jb2RlKVxuICB9XG5cbiAgZW5jb2RlKGVuY29kZUZuLCBzdGFydENvZGUsIGNoZWNrc3VtRm4pIHtcbiAgICBsZXQgcmVzdWx0ID0gJydcblxuICAgIC8vQWRkIHRoZSBzdGFydCBiaXRzXG4gICAgcmVzdWx0ICs9IHRoaXMuZW5jb2RpbmdCeUlkKHRoaXMuc3RhcnRDb2RlKVxuXG4gICAgLy9BZGQgdGhlIGVuY29kZWQgYml0c1xuICAgIHJlc3VsdCArPSB0aGlzLmVuY29kZUNsYXNzKClcblxuICAgIC8vQWRkIHRoZSBjaGVja3N1bVxuICAgIHJlc3VsdCArPSB0aGlzLmVuY29kaW5nQnlJZCh0aGlzLmNoZWNrc3VtKCkpXG5cbiAgICAvL0FkZCB0aGUgZW5kIGJpdHNcbiAgICByZXN1bHQgKz0gZW5kQmluXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBlbmNvZGluZ0J5SWQgKGlkKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2RlMTI4Yi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNvZGUxMjhiW2ldWzJdID09PSBpZCkge1xuICAgICAgICByZXR1cm4gY29kZTEyOGJbaV1bMV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICB3ZWlnaHRCeUNoYXJhY3RlciAoY2hhcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29kZTEyOGIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjb2RlMTI4YltpXVswXSA9PT0gY2hhcikge1xuICAgICAgICByZXR1cm4gY29kZTEyOGJbaV1bMl1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGVuY29kaW5nQnlDaGFyIChjaGFyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2RlMTI4Yi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNvZGUxMjhiW2ldWzBdID09PSBjaGFyKSB7XG4gICAgICAgIHJldHVybiBjb2RlMTI4YltpXVsxXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDT0RFMTI4XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy9jb2RlMTI4LmpzXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpLmNvcmUuU3RyaW5nLnJlcGVhdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3RyaW5nL3JlcGVhdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBnbG9iYWwgICAgID0gJC5nXHJcbiAgLCBjb3JlICAgICAgID0gJC5jb3JlXHJcbiAgLCBpc0Z1bmN0aW9uID0gJC5pc0Z1bmN0aW9uO1xyXG5mdW5jdGlvbiBjdHgoZm4sIHRoYXQpe1xyXG4gIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XHJcbiAgfTtcclxufVxyXG4vLyB0eXBlIGJpdG1hcFxyXG4kZGVmLkYgPSAxOyAgLy8gZm9yY2VkXHJcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcclxuJGRlZi5TID0gNDsgIC8vIHN0YXRpY1xyXG4kZGVmLlAgPSA4OyAgLy8gcHJvdG9cclxuJGRlZi5CID0gMTY7IC8vIGJpbmRcclxuJGRlZi5XID0gMzI7IC8vIHdyYXBcclxuZnVuY3Rpb24gJGRlZih0eXBlLCBuYW1lLCBzb3VyY2Upe1xyXG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcclxuICAgICwgaXNHbG9iYWwgPSB0eXBlICYgJGRlZi5HXHJcbiAgICAsIHRhcmdldCAgID0gaXNHbG9iYWwgPyBnbG9iYWwgOiB0eXBlICYgJGRlZi5TXHJcbiAgICAgICAgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KS5wcm90b3R5cGVcclxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xyXG4gIGlmKGlzR2xvYmFsKXNvdXJjZSA9IG5hbWU7XHJcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xyXG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXHJcbiAgICBvd24gPSAhKHR5cGUgJiAkZGVmLkYpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xyXG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xyXG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcclxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XHJcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcclxuICAgIGlmKGlzR2xvYmFsICYmICFpc0Z1bmN0aW9uKHRhcmdldFtrZXldKSlleHAgPSBzb3VyY2Vba2V5XTtcclxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XHJcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLkIgJiYgb3duKWV4cCA9IGN0eChvdXQsIGdsb2JhbCk7XHJcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxyXG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5XICYmIHRhcmdldFtrZXldID09IG91dCkhZnVuY3Rpb24oQyl7XHJcbiAgICAgIGV4cCA9IGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcclxuICAgICAgfTtcclxuICAgICAgZXhwLnByb3RvdHlwZSA9IEMucHJvdG90eXBlO1xyXG4gICAgfShvdXQpO1xyXG4gICAgZWxzZSBleHAgPSB0eXBlICYgJGRlZi5QICYmIGlzRnVuY3Rpb24ob3V0KSA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xyXG4gICAgLy8gZXhwb3J0XHJcbiAgICAkLmhpZGUoZXhwb3J0cywga2V5LCBleHApO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9ICRkZWY7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGVudW1LZXlzID0gcmVxdWlyZSgnLi8kLmVudW0ta2V5cycpO1xyXG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2Upe1xyXG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXHJcbiAgdmFyIFQgPSBPYmplY3QoJC5hc3NlcnREZWZpbmVkKHRhcmdldCkpXHJcbiAgICAsIGwgPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAsIGkgPSAxO1xyXG4gIHdoaWxlKGwgPiBpKXtcclxuICAgIHZhciBTICAgICAgPSAkLkVTNU9iamVjdChhcmd1bWVudHNbaSsrXSlcclxuICAgICAgLCBrZXlzICAgPSBlbnVtS2V5cyhTKVxyXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXHJcbiAgICAgICwgaiAgICAgID0gMFxyXG4gICAgICAsIGtleTtcclxuICAgIHdoaWxlKGxlbmd0aCA+IGopVFtrZXkgPSBrZXlzW2orK11dID0gU1trZXldO1xyXG4gIH1cclxuICByZXR1cm4gVDtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCQpe1xyXG4gICQuRlcgICA9IGZhbHNlO1xyXG4gICQucGF0aCA9ICQuY29yZTtcclxuICByZXR1cm4gJDtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZ3LmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcclxuXHJcbiRkZWYoJGRlZi5QLCAnU3RyaW5nJywge1xyXG4gIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcclxuICByZXBlYXQ6IGZ1bmN0aW9uIHJlcGVhdChjb3VudCl7XHJcbiAgICB2YXIgc3RyID0gU3RyaW5nKCQuYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgLCByZXMgPSAnJ1xyXG4gICAgICAsIG4gICA9ICQudG9JbnRlZ2VyKGNvdW50KTtcclxuICAgIGlmKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO1xyXG4gICAgZm9yKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpaWYobiAmIDEpcmVzICs9IHN0cjtcclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcclxuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0S2V5cyhpdClcclxuICAgICwgZ2V0RGVzYyAgICA9ICQuZ2V0RGVzY1xyXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xyXG4gIGlmKGdldFN5bWJvbHMpJC5lYWNoLmNhbGwoZ2V0U3ltYm9scyhpdCksIGZ1bmN0aW9uKGtleSl7XHJcbiAgICBpZihnZXREZXNjKGl0LCBrZXkpLmVudW1lcmFibGUpa2V5cy5wdXNoKGtleSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGtleXM7XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5lbnVtLWtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==