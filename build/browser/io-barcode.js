(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
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
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _assign = __webpack_require__(1);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _encodings = __webpack_require__(16);
	
	var _encodings2 = _interopRequireDefault(_encodings);
	
	var _canvasBrowserify = __webpack_require__(84);
	
	var _canvasBrowserify2 = _interopRequireDefault(_canvasBrowserify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var api = {};
	
	var defaults = {
		width: 2,
		height: 100,
		quite: 10,
		displayValue: false,
		font: 'monospace',
		textAlign: 'center',
		fontSize: 12,
		fontWeight: 'normal',
		backgroundColor: '',
		lineColor: '#000'
	};
	
	function _drawBarcodeText(text, canvas, opts) {
		var ctx = canvas.getContext('2d');
		var x = undefined,
		    y = undefined;
	
		y = opts.height;
	
		ctx.font = opts.fontWeight + ' ' + opts.fontSize + 'px ' + opts.font;
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
		opts = (0, _assign2.default)({}, defaults, opts);
	
		var canvas = new _canvasBrowserify2.default();
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
			_drawBarcodeText(opts.customLabel || code, canvas, opts);
		}
	
		return canvas;
	}
	
	/* eslint no-loop-func:0 */
	
	var _loop = function _loop(name) {
		api[name] = function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			return generateBarcodeDataUri.apply(undefined, [_encodings2.default[name]].concat(args));
		};
	};
	
	for (var name in _encodings2.default) {
		_loop(name);
	}
	
	exports.default = api;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(6).Object.assign;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(4);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(9)});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , core      = __webpack_require__(6)
	  , ctx       = __webpack_require__(7)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(8);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(10)
	  , toObject = __webpack_require__(11)
	  , IObject  = __webpack_require__(13);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(15)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(14);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ean = __webpack_require__(17);
	
	var _ean2 = _interopRequireDefault(_ean);
	
	var _upc = __webpack_require__(22);
	
	var _upc2 = _interopRequireDefault(_upc);
	
	var _itf = __webpack_require__(57);
	
	var _itf2 = _interopRequireDefault(_itf);
	
	var _itf3 = __webpack_require__(58);
	
	var _itf4 = _interopRequireDefault(_itf3);
	
	var _code = __webpack_require__(63);
	
	var _code2 = _interopRequireDefault(_code);
	
	var _code128b = __webpack_require__(64);
	
	var _code128b2 = _interopRequireDefault(_code128b);
	
	var _code128c = __webpack_require__(67);
	
	var _code128c2 = _interopRequireDefault(_code128c);
	
	var _pharmacode = __webpack_require__(68);
	
	var _pharmacode2 = _interopRequireDefault(_pharmacode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  EAN: _ean2.default,
	  UPC: _upc2.default,
	  ITF: _itf2.default,
	  ITF14: _itf4.default,
	  CODE39: _code2.default,
	  CODE128B: _code128b2.default,
	  CODE128C: _code128c2.default,
	  Pharmacode: _pharmacode2.default
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	    (0, _classCallCheck3.default)(this, EAN);
	
	    this.code = String(code);
	  }
	
	  (0, _createClass3.default)(EAN, [{
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
	
	    // Create the binary representation of the EAN code
	    // number needs to be a string
	
	  }, {
	    key: 'encode',
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
	
	    // Convert a number array to the representing
	
	  }, {
	    key: 'encodeStruct',
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
	
	exports.default = EAN;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(20);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(10);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(27);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(50);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ean = __webpack_require__(17);
	
	var _ean2 = _interopRequireDefault(_ean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UPC = (function (_EAN) {
	  (0, _inherits3.default)(UPC, _EAN);
	
	  function UPC(code) {
	    (0, _classCallCheck3.default)(this, UPC);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(UPC).call(this, '0' + code));
	  }
	
	  return UPC;
	})(_ean2.default);
	
	exports.default = UPC;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(6).Object.getPrototypeOf;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(11);
	
	__webpack_require__(26)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(4)
	  , core    = __webpack_require__(6)
	  , fails   = __webpack_require__(15);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(28);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _symbol = __webpack_require__(29);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof _Symbol !== "undefined" && obj.constructor === _Symbol ? "symbol" : typeof obj; }
	
	exports.default = function (obj) {
	  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	__webpack_require__(49);
	module.exports = __webpack_require__(6).Symbol;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(10)
	  , global         = __webpack_require__(5)
	  , has            = __webpack_require__(32)
	  , DESCRIPTORS    = __webpack_require__(33)
	  , $export        = __webpack_require__(4)
	  , redefine       = __webpack_require__(34)
	  , $fails         = __webpack_require__(15)
	  , shared         = __webpack_require__(37)
	  , setToStringTag = __webpack_require__(38)
	  , uid            = __webpack_require__(40)
	  , wks            = __webpack_require__(39)
	  , keyOf          = __webpack_require__(41)
	  , $names         = __webpack_require__(43)
	  , enumKeys       = __webpack_require__(44)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(46)
	  , toIObject      = __webpack_require__(42)
	  , createDesc     = __webpack_require__(36)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(48)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 32 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(15)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(35);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(10)
	  , createDesc = __webpack_require__(36);
	module.exports = __webpack_require__(33) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(10).setDesc
	  , has = __webpack_require__(32)
	  , TAG = __webpack_require__(39)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(37)('wks')
	  , uid    = __webpack_require__(40)
	  , Symbol = __webpack_require__(5).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(10)
	  , toIObject = __webpack_require__(42);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(13)
	  , defined = __webpack_require__(12);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(42)
	  , getNames  = __webpack_require__(10).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(10);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(14);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(47);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 49 */
/***/ function(module, exports) {



/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(51);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(55);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(28);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	module.exports = __webpack_require__(6).Object.setPrototypeOf;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(4);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(54).set});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(10).getDesc
	  , isObject = __webpack_require__(47)
	  , anObject = __webpack_require__(46);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(7)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(10);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
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
	
	var ITF = (function () {
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
	})();
	
	exports.default = ITF;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(27);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(59);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(50);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _itf = __webpack_require__(57);
	
	var _itf2 = _interopRequireDefault(_itf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var validRe = /^[0-9]{13,14}$/;
	
	var ITF14 = (function (_ITF) {
	  (0, _inherits3.default)(ITF14, _ITF);
	
	  function ITF14(code) {
	    (0, _classCallCheck3.default)(this, ITF14);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ITF14).call(this, code));
	
	    if (code.length === 13) {
	      _this.code += _this.checksum();
	    }
	    return _this;
	  }
	
	  (0, _createClass3.default)(ITF14, [{
	    key: 'isValid',
	    value: function isValid() {
	      return (0, _get3.default)((0, _getPrototypeOf2.default)(ITF14.prototype), 'isValid', this).call(this) && validRe.test(this.code) && Number(this.code[13]) === this.checksum();
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
	})(_itf2.default);
	
	exports.default = ITF14;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _getOwnPropertyDescriptor = __webpack_require__(60);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);
	
	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);
	
	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;
	
	    if (getter === undefined) {
	      return undefined;
	    }
	
	    return getter.call(receiver);
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(10);
	__webpack_require__(62);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(42);
	
	__webpack_require__(26)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var code39 = {
	  '0': '101000111011101',
	  '1': '111010001010111',
	  '2': '101110001010111',
	  '3': '111011100010101',
	  '4': '101000111010111',
	  '5': '111010001110101',
	  '6': '101110001110101',
	  '7': '101000101110111',
	  '8': '111010001011101',
	  '9': '101110001011101',
	  'A': '111010100010111',
	  'B': '101110100010111',
	  'C': '111011101000101',
	  'D': '101011100010111',
	  'E': '111010111000101',
	  'F': '101110111000101',
	  'G': '101010001110111',
	  'H': '111010100011101',
	  'I': '101110100011101',
	  'J': '101011100011101',
	  'K': '111010101000111',
	  'L': '101110101000111',
	  'M': '111011101010001',
	  'N': '101011101000111',
	  'O': '111010111010001',
	  'P': '101110111010001',
	  'Q': '101010111000111',
	  'R': '111010101110001',
	  'S': '101110101110001',
	  'T': '101011101110001',
	  'U': '111000101010111',
	  'V': '100011101010111',
	  'W': '111000111010101',
	  'X': '100010111010111',
	  'Y': '111000101110101',
	  'Z': '100011101110101',
	  '-': '100010101110111',
	  '.': '111000101011101',
	  ' ': '100011101011101',
	  '$': '100010001000101',
	  '/': '100010001010001',
	  '+': '100010100010001',
	  '%': '101000100010001'
	};
	
	var validRe = /^[0-9a-zA-Z\-\.\ \$\/\+\%]+$/;
	
	var CODE39 = (function () {
	  function CODE39(code) {
	    (0, _classCallCheck3.default)(this, CODE39);
	
	    this.code = String(code);
	  }
	
	  (0, _createClass3.default)(CODE39, [{
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
	      return code39[char] || '';
	    }
	  }]);
	  return CODE39;
	})();
	
	exports.default = CODE39;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(27);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(59);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(50);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _code = __webpack_require__(65);
	
	var _code2 = _interopRequireDefault(_code);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CODE128B = (function (_CODE) {
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
	})(_code2.default);
	
	exports.default = CODE128B;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _code128b;
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _defineProperty2 = __webpack_require__(66);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Data for each character
	// The last characters will not be encoded but are used for error correction
	var code128b = (_code128b = {
	  ' ': ['11011001100', 0],
	  '!': ['11001101100', 1],
	  '"': ['11001100110', 2],
	  '#': ['10010011000', 3],
	  '$': ['10010001100', 4],
	  '%': ['10001001100', 5],
	  '&': ['10011001000', 6],
	  '\'': ['10011000100', 7],
	  '(': ['10001100100', 8],
	  ')': ['11001001000', 9],
	  '*': ['11001000100', 10],
	  '+': ['11000100100', 11],
	  ',': ['10110011100', 12],
	  '-': ['10011011100', 13],
	  '.': ['10011001110', 14],
	  '/': ['10111001100', 15],
	  '0': ['10011101100', 16],
	  '1': ['10011100110', 17],
	  '2': ['11001110010', 18],
	  '3': ['11001011100', 19],
	  '4': ['11001001110', 20],
	  '5': ['11011100100', 21],
	  '6': ['11001110100', 22],
	  '7': ['11101101110', 23],
	  '8': ['11101001100', 24],
	  '9': ['11100101100', 25],
	  ':': ['11100100110', 26],
	  ';': ['11101100100', 27],
	  '<': ['11100110100', 28],
	  '=': ['11100110010', 29],
	  '>': ['11011011000', 30],
	  '?': ['11011000110', 31],
	  '@': ['11000110110', 32],
	  'A': ['10100011000', 33],
	  'B': ['10001011000', 34],
	  'C': ['10001000110', 35],
	  'D': ['10110001000', 36],
	  'E': ['10001101000', 37],
	  'F': ['10001100010', 38],
	  'G': ['11010001000', 39],
	  'H': ['11000101000', 40],
	  'I': ['11000100010', 41],
	  'J': ['10110111000', 42],
	  'K': ['10110001110', 43],
	  'L': ['10001101110', 44],
	  'M': ['10111011000', 45],
	  'N': ['10111000110', 46],
	  'O': ['10001110110', 47],
	  'P': ['11101110110', 48],
	  'Q': ['11010001110', 49],
	  'R': ['11000101110', 50],
	  'S': ['11011101000', 51],
	  'T': ['11011100010', 52],
	  'U': ['11011101110', 53],
	  'V': ['11101011000', 54],
	  'W': ['11101000110', 55],
	  'X': ['11100010110', 56],
	  'Y': ['11101101000', 57],
	  'Z': ['11101100010', 58],
	  '': ['11100011010', 59],
	  '\\': ['11101111010', 60],
	  ']': ['11001000010', 61],
	  '^': ['11110001010', 62],
	  '_': ['10100110000', 63],
	  '`': ['10100001100', 64],
	  'a': ['10010110000', 65],
	  'b': ['10010000110', 66],
	  'c': ['10000101100', 67],
	  'd': ['10000100110', 68],
	  'e': ['10110010000', 69],
	  'f': ['10110000100', 70],
	  'g': ['10011010000', 71],
	  'h': ['10011000010', 72],
	  'i': ['10000110100', 73],
	  'j': ['10000110010', 74],
	  'k': ['11000010010', 75],
	  'l': ['11001010000', 76],
	  'm': ['11110111010', 77],
	  'n': ['11000010100', 78],
	  'o': ['10001111010', 79],
	  'p': ['10100111100', 80],
	  'q': ['10010111100', 81],
	  'r': ['10010011110', 82],
	  's': ['10111100100', 83],
	  't': ['10011110100', 84],
	  'u': ['10011110010', 85],
	  'v': ['11110100100', 86],
	  'w': ['11110010100', 87],
	  'x': ['11110010010', 88],
	  'y': ['11011011110', 89],
	  'z': ['11011110110', 90],
	  '{': ['11110110110', 91],
	  '|': ['10101111000', 92],
	  '}': ['10100011110', 93],
	  '~': ['10001011110', 94]
	}, (0, _defineProperty3.default)(_code128b, String.fromCharCode(127), ['10111101000', 95]), (0, _defineProperty3.default)(_code128b, String.fromCharCode(128), ['10111100010', 96]), (0, _defineProperty3.default)(_code128b, String.fromCharCode(129), ['11110101000', 97]), (0, _defineProperty3.default)(_code128b, String.fromCharCode(130), ['11110100010', 98]), (0, _defineProperty3.default)(_code128b, String.fromCharCode(131), ['10111011110', 99]), (0, _defineProperty3.default)(_code128b, String.fromCharCode(132), ['10111101110', 100]), (0, _defineProperty3.default)(_code128b, String.fromCharCode(133), ['11101011110', 101]), (0, _defineProperty3.default)(_code128b, String.fromCharCode(134), ['11110101110', 102]), (0, _defineProperty3.default)(_code128b, String.fromCharCode(135), ['11010000100', 103]), (0, _defineProperty3.default)(_code128b, String.fromCharCode(136), ['11010010000', 104]), (0, _defineProperty3.default)(_code128b, String.fromCharCode(137), ['11010011100', 105]), _code128b);
	
	var endBin = '1100011101011';
	var validRe = /^[!-~ ]+$/;
	
	var CODE128 = (function () {
	  function CODE128(code) {
	    (0, _classCallCheck3.default)(this, CODE128);
	
	    this.code = String(code);
	  }
	
	  (0, _createClass3.default)(CODE128, [{
	    key: 'isValid',
	    value: function isValid() {
	      return validRe.test(this.code);
	    }
	  }, {
	    key: 'encode',
	    value: function encode() {
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
	      for (var key in code128b) {
	        var code = code128b[key];
	        if (code[1] === id) {
	          return code[0];
	        }
	      }
	      return '';
	    }
	  }, {
	    key: 'weightByCharacter',
	    value: function weightByCharacter(char) {
	      var code = code128b[char];
	      if (!code) return 0;
	      return code[1];
	    }
	  }, {
	    key: 'encodingByChar',
	    value: function encodingByChar(char) {
	      var code = code128b[char];
	      if (!code) return '';
	      return code[0];
	    }
	  }]);
	  return CODE128;
	})();
	
	exports.default = CODE128;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(20);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(27);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(59);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(50);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _code = __webpack_require__(65);
	
	var _code2 = _interopRequireDefault(_code);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CODE128C = (function (_CODE) {
	  (0, _inherits3.default)(CODE128C, _CODE);
	
	  function CODE128C(code) {
	    (0, _classCallCheck3.default)(this, CODE128C);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CODE128C).call(this, code));
	
	    _this.code = _this.code.replace(/ /g, '');
	    _this.startCode = 105;
	    return _this;
	  }
	
	  (0, _createClass3.default)(CODE128C, [{
	    key: 'encodeClass',
	    value: function encodeClass() {
	      var result = '';
	      for (var i = 0; i < this.code.length; i += 2) {
	        result += (0, _get3.default)((0, _getPrototypeOf2.default)(CODE128C.prototype), 'encodingById', this).call(this, Number(this.code.substr(i, 2)));
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
	})(_code2.default);
	
	exports.default = CODE128C;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _repeat = __webpack_require__(69);
	
	var _repeat2 = _interopRequireDefault(_repeat);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Pharmacode = (function () {
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
	})();
	
	exports.default = Pharmacode;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	module.exports = __webpack_require__(73).String.repeat;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(71);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(81)
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(72)
	  , core      = __webpack_require__(73)
	  , ctx       = __webpack_require__(74)
	  , hide      = __webpack_require__(76)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 72 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 73 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.0.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(75);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(77)
	  , createDesc = __webpack_require__(78);
	module.exports = __webpack_require__(79) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(80)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(82)
	  , defined   = __webpack_require__(83);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	
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
	
	
	


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkNjY3MjMyM2UzYzY3MDkxZjNjNyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvZWFuLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvdXBjLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmtleW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvaXRmLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2l0ZjE0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2NvZGUzOS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2VuY29kaW5ncy9jb2RlMTI4Yi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2VuY29kaW5ncy9jb2RlMTI4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2NvZGUxMjhjLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL3BoYXJtYWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3RyaW5nL3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvXy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY2FudmFzLWJyb3dzZXJpZnkvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1h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TUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLEtBQUUsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDekIsT0FBSSxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMzQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7QUFDMUIsTUFBRyxFQUFFLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRTtBQUMxQixNQUFHLEVBQUUsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFFO0FBQzFCLE1BQUcsRUFBRSxDQUFFLGFBQWEsRUFBRSxFQUFFLENBQUU7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QUNkLGVBQWM7QUFDZCxnQkFBZTtBQUNmLGdCQUFlO0FBQ2YsZ0JBQWU7QUFDZixpQkFBZ0I7QUFDaEIsMEI7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsZ0M7Ozs7OztBQ0h2Qyw4QkFBNkI7QUFDN0Isc0NBQXFDLGdDOzs7Ozs7QUNEckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEc7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTtBQUNBO0FBQ0Esa0NBQWlDLFFBQVEsZ0JBQWdCLFVBQVUsR0FBRztBQUN0RSxFQUFDLEU7Ozs7OztBQ0hEO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPLE1BQU07QUFDYjtBQUNBLEc7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW8tYmFyY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImlvQmFyY29kZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpb0JhcmNvZGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGQ2NjcyMzIzZTNjNjcwOTFmM2M3XG4gKiovIiwiaW1wb3J0IGVuY29kaW5ncyBmcm9tICcuL2VuY29kaW5ncydcclxuaW1wb3J0IENhbnZhcyBmcm9tICdjYW52YXMtYnJvd3NlcmlmeSdcclxuXHJcbmxldCBhcGkgPSB7fVxyXG5cclxuY29uc3QgZGVmYXVsdHMgPSB7XHJcblx0d2lkdGg6IDIsXHJcblx0aGVpZ2h0OiAxMDAsXHJcblx0cXVpdGU6IDEwLFxyXG5cdGRpc3BsYXlWYWx1ZTogZmFsc2UsXHJcblx0Zm9udDogJ21vbm9zcGFjZScsXHJcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRmb250U2l6ZTogMTIsXHJcblx0Zm9udFdlaWdodDogJ25vcm1hbCcsXHJcblx0YmFja2dyb3VuZENvbG9yOiAnJyxcclxuXHRsaW5lQ29sb3I6ICcjMDAwJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZHJhd0JhcmNvZGVUZXh0ICh0ZXh0LCBjYW52YXMsIG9wdHMpIHtcclxuXHRsZXQgY3R4XHQ9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcblx0bGV0IHgsIHlcclxuXHJcblx0eSA9IG9wdHMuaGVpZ2h0XHJcblxyXG5cdGN0eC5mb250ID0gYCR7b3B0cy5mb250V2VpZ2h0fSAke29wdHMuZm9udFNpemV9cHggJHtvcHRzLmZvbnR9YFxyXG5cdGN0eC50ZXh0QmFzZWxpbmUgPSAnYm90dG9tJ1xyXG5cdGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJ1xyXG5cclxuXHRpZiAob3B0cy50ZXh0QWxpZ24gPT09ICdsZWZ0Jykge1xyXG5cdFx0eCA9IG9wdHMucXVpdGVcclxuXHRcdGN0eC50ZXh0QWxpZ24gPSAnbGVmdCdcclxuXHR9XHJcblx0ZWxzZSBpZiAob3B0cy50ZXh0QWxpZ24gPT09ICdyaWdodCcpIHtcclxuXHRcdHggPSBjYW52YXMud2lkdGggLSBvcHRzLnF1aXRlXHJcblx0XHRjdHgudGV4dEFsaWduID0gJ3JpZ2h0J1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHggPSBjYW52YXMud2lkdGggLyAyXHJcblx0XHRjdHgudGV4dEFsaWduID0gJ2NlbnRlcidcclxuXHR9XHJcblxyXG5cdGN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCYXJjb2RlRGF0YVVyaSAoRW5jb2RpbmcsIGNvZGUsIG9wdHMpIHtcclxuXHQvKiBlc2xpbnQgY29tcGxleGl0eTowICovXHJcblx0b3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRzKVxyXG5cclxuXHRsZXQgY2FudmFzID0gbmV3IENhbnZhcygpXHJcblx0bGV0IGVuY29kZXIgPSBuZXcgRW5jb2RpbmcoY29kZSlcclxuXHJcblx0Ly8gQWJvcnQgaWYgdGhlIGJhcmNvZGUgZm9ybWF0IGRvZXMgbm90IHN1cHBvcnQgdGhlIGNvbnRlbnRcclxuXHRpZiAoIWVuY29kZXIuaXNWYWxpZCgpKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvbnRlbnQgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZW5jb2RpbmcnKVxyXG5cdH1cclxuXHJcblx0Ly8gRW5jb2RlIHRoZSBjb250ZW50XHJcblx0bGV0IGJpbmFyeVN0cmluZyA9IGVuY29kZXIuZW5jb2RlKClcclxuXHJcblx0Ly8gR2V0IHRoZSBjYW52YXMgY29udGV4dFxyXG5cdGxldCBjdHhcdD0gY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuXHJcblx0Ly8gU2V0IHRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBiYXJjb2RlXHJcblx0Y2FudmFzLndpZHRoID0gYmluYXJ5U3RyaW5nLmxlbmd0aCAqIG9wdHMud2lkdGggKyAyICogb3B0cy5xdWl0ZVxyXG5cclxuICAvLyBTZXQgZXh0cmEgaGVpZ2h0IGlmIHRoZSB2YWx1ZSBpcyBkaXNwbGF5ZWQgdW5kZXIgdGhlIGJhcmNvZGUuXHJcbiAgY2FudmFzLmhlaWdodCA9IG9wdHMuaGVpZ2h0ICsgKG9wdHMuZGlzcGxheVZhbHVlID8gb3B0cy5mb250U2l6ZSAqIDEuMyA6IDApXHJcblxyXG5cdC8vIFBhaW50IHRoZSBjYW52YXNcclxuXHRjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuXHJcblx0aWYgKG9wdHMuYmFja2dyb3VuZENvbG9yKSB7XHJcblx0XHRjdHguZmlsbFN0eWxlID0gb3B0cy5iYWNrZ3JvdW5kQ29sb3JcclxuXHRcdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXHJcblx0fVxyXG5cclxuXHQvLyBDaGFuZ2UgdG8gbGluZUNvbG9yIHRvIHBhaW50IHRoZSBsaW5lc1xyXG5cdGN0eC5maWxsU3R5bGUgPSBvcHRzLmxpbmVDb2xvclxyXG5cclxuXHQvLyBDcmVhdGVzIHRoZSBiYXJjb2RlIG91dCBvZiB0aGUgYmluYXJ5IHN0cmluZ1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYmluYXJ5U3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRsZXQgeCA9IGkgKiBvcHRzLndpZHRoICsgb3B0cy5xdWl0ZVxyXG5cdFx0aWYgKGJpbmFyeVN0cmluZ1tpXSA9PT0gJzEnKSB7XHJcblx0XHRcdGN0eC5maWxsUmVjdCh4LCAwLCBvcHRzLndpZHRoLCBvcHRzLmhlaWdodClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIEFkZCB2YWx1ZSBiZWxvdyBpZiBlbmFibGVkXHJcblx0aWYgKG9wdHMuZGlzcGxheVZhbHVlKSB7XHJcblx0XHRfZHJhd0JhcmNvZGVUZXh0KG9wdHMuY3VzdG9tTGFiZWwgfHwgY29kZSwgY2FudmFzLCBvcHRzKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNhbnZhc1xyXG59XHJcblxyXG4vKiBlc2xpbnQgbm8tbG9vcC1mdW5jOjAgKi9cclxuZm9yIChsZXQgbmFtZSBpbiBlbmNvZGluZ3MpIHtcclxuXHRhcGlbbmFtZV0gPSAoLi4uYXJncykgPT4gZ2VuZXJhdGVCYXJjb2RlRGF0YVVyaShlbmNvZGluZ3NbbmFtZV0sIC4uLmFyZ3MpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi8kLm9iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIGlmKElTX1BST1RPKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgLy8gd3JhcFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmV4cG9ydC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIGEgPSBPYmplY3QuYXNzaWduXG4gICAgLCBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuIGEoe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoYSh7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgJCQgICAgPSBhcmd1bWVudHNcbiAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldEtleXMgICAgPSAkLmdldEtleXNcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHNcbiAgICAsIGlzRW51bSAgICAgPSAkLmlzRW51bTtcbiAgd2hpbGUoJCRsZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoJCRbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfVxuICByZXR1cm4gVDtcbn0gOiBPYmplY3QuYXNzaWduO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmaW5lZC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgRUFOIGZyb20gJy4vZWFuJ1xuaW1wb3J0IFVQQyBmcm9tICcuL3VwYydcbmltcG9ydCBJVEYgZnJvbSAnLi9pdGYnXG5pbXBvcnQgSVRGMTQgZnJvbSAnLi9pdGYxNCdcbmltcG9ydCBDT0RFMzkgZnJvbSAnLi9jb2RlMzknXG5pbXBvcnQgQ09ERTEyOEIgZnJvbSAnLi9jb2RlMTI4YidcbmltcG9ydCBDT0RFMTI4QyBmcm9tICcuL2NvZGUxMjhjJ1xuaW1wb3J0IFBoYXJtYWNvZGUgZnJvbSAnLi9waGFybWFjb2RlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEVBTixcbiAgVVBDLFxuICBJVEYsXG4gIElURjE0LFxuICBDT0RFMzksXG4gIENPREUxMjhCLFxuICBDT0RFMTI4QyxcbiAgUGhhcm1hY29kZVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvaW5kZXguanNcbiAqKi8iLCIvLyBUaGUgTCAobGVmdCkgdHlwZSBvZiBlbmNvZGluZ1xuY29uc3QgTGJpbmFyeSA9IHtcbiAgMDogJzAwMDExMDEnLFxuICAxOiAnMDAxMTAwMScsXG4gIDI6ICcwMDEwMDExJyxcbiAgMzogJzAxMTExMDEnLFxuICA0OiAnMDEwMDAxMScsXG4gIDU6ICcwMTEwMDAxJyxcbiAgNjogJzAxMDExMTEnLFxuICA3OiAnMDExMTAxMScsXG4gIDg6ICcwMTEwMTExJyxcbiAgOTogJzAwMDEwMTEnXG59XG5cbi8vIFRoZSBHIHR5cGUgb2YgZW5jb2RpbmdcbmNvbnN0IEdiaW5hcnkgPSB7XG4gIDA6ICcwMTAwMTExJyxcbiAgMTogJzAxMTAwMTEnLFxuICAyOiAnMDAxMTAxMScsXG4gIDM6ICcwMTAwMDAxJyxcbiAgNDogJzAwMTExMDEnLFxuICA1OiAnMDExMTAwMScsXG4gIDY6ICcwMDAwMTAxJyxcbiAgNzogJzAwMTAwMDEnLFxuICA4OiAnMDAwMTAwMScsXG4gIDk6ICcwMDEwMTExJ1xufVxuXG4vLyBUaGUgUiAocmlnaHQpIHR5cGUgb2YgZW5jb2RpbmdcbmNvbnN0IFJiaW5hcnkgPSB7XG4gIDA6ICcxMTEwMDEwJyxcbiAgMTogJzExMDAxMTAnLFxuICAyOiAnMTEwMTEwMCcsXG4gIDM6ICcxMDAwMDEwJyxcbiAgNDogJzEwMTExMDAnLFxuICA1OiAnMTAwMTExMCcsXG4gIDY6ICcxMDEwMDAwJyxcbiAgNzogJzEwMDAxMDAnLFxuICA4OiAnMTAwMTAwMCcsXG4gIDk6ICcxMTEwMTAwJ1xufVxuXG4vLyBUaGUgbGVmdCBzaWRlIHN0cnVjdHVyZSBpbiBFQU4tMTNcbmNvbnN0IEVBTnN0cnVjdCA9IHtcbiAgMDogJ0xMTExMTCcsXG4gIDE6ICdMTEdMR0cnLFxuICAyOiAnTExHR0xHJyxcbiAgMzogJ0xMR0dHTCcsXG4gIDQ6ICdMR0xMR0cnLFxuICA1OiAnTEdHTExHJyxcbiAgNjogJ0xHR0dMTCcsXG4gIDc6ICdMR0xHTEcnLFxuICA4OiAnTEdMR0dMJyxcbiAgOTogJ0xHR0xHTCdcbn1cblxuLy8gVmFsaWQgRUFOIGNvZGVcbmNvbnN0IHZhbGlkUmUgPSAvXlswLTldezEzfSQvXG4vLyBUaGUgc3RhcnQgYml0c1xuY29uc3Qgc3RhcnRCaW4gPSAnMTAxJ1xuLy8gVGhlIGVuZCBiaXRzXG5jb25zdCBlbmRCaW4gPSAnMTAxJ1xuLy8gVGhlIG1pZGRsZSBiaXRzXG5jb25zdCBtaWRkbGVCaW4gPSAnMDEwMTAnXG5cblxuY2xhc3MgRUFOIHtcbiAgY29uc3RydWN0b3IgKGNvZGUpIHtcbiAgICB0aGlzLmNvZGUgPSBTdHJpbmcoY29kZSlcbiAgfVxuXG4gIGlzVmFsaWQgKCkge1xuICAgIHJldHVybiB2YWxpZFJlLnRlc3QodGhpcy5jb2RlKSAmJlxuICAgICAgTnVtYmVyKHRoaXMuY29kZVsxMl0pID09PSB0aGlzLmNoZWNrc3VtKClcbiAgfVxuXG4gIGNoZWNrc3VtICgpIHtcbiAgICBsZXQgcmVzdWx0ID0gMFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSArPSAyKSB7XG4gICAgICByZXN1bHQgKz0gTnVtYmVyKHRoaXMuY29kZVtpXSlcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMjsgaSArPSAyKSB7XG4gICAgICByZXN1bHQgKz0gTnVtYmVyKHRoaXMuY29kZVtpXSkgKiAzXG4gICAgfVxuXG4gICAgcmV0dXJuICgxMCAtIChyZXN1bHQgJSAxMCkpICUgMTBcbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBFQU4gY29kZVxuICAvLyBudW1iZXIgbmVlZHMgdG8gYmUgYSBzdHJpbmdcbiAgZW5jb2RlICgpIHtcbiAgICAvLyBDcmVhdGUgdGhlIHJldHVybiB2YXJpYWJsZVxuICAgIGxldCByZXN1bHQgPSAnJ1xuXG4gICAgLy8gR2V0IHRoZSBmaXJzdCBkaWdpdCAoZm9yIGxhdGVyIGRldGVybWluYXRpb24gb2YgdGhlIGVuY29kaW5nIHR5cGUpXG4gICAgbGV0IGZpcnN0RGlnaXQgPSB0aGlzLmNvZGVbMF1cblxuICAgIC8vIEdldCB0aGUgbnVtYmVyIHRvIGJlIGVuY29kZWQgb24gdGhlIGxlZnQgc2lkZSBvZiB0aGUgRUFOIGNvZGVcbiAgICBsZXQgbGVmdFNpZGUgPSB0aGlzLmNvZGUuc3Vic3RyKDEsIDcpXG5cbiAgICAvLyBHZXQgdGhlIG51bWJlciB0byBiZSBlbmNvZGVkIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBFQU4gY29kZVxuICAgIGxldCByaWdodFNpZGUgPSB0aGlzLmNvZGUuc3Vic3RyKDcsIDYpXG5cblxuICAgIC8vIEFkZCB0aGUgc3RhcnQgYml0c1xuICAgIHJlc3VsdCArPSBzdGFydEJpblxuXG4gICAgLy8gQWRkIHRoZSBsZWZ0IHNpZGVcbiAgICByZXN1bHQgKz0gdGhpcy5lbmNvZGVTdHJ1Y3QobGVmdFNpZGUsIEVBTnN0cnVjdFtmaXJzdERpZ2l0XSlcblxuICAgIC8vIEFkZCB0aGUgbWlkZGxlIGJpdHNcbiAgICByZXN1bHQgKz0gbWlkZGxlQmluXG5cbiAgICAvLyBBZGQgdGhlIHJpZ2h0IHNpZGVcbiAgICByZXN1bHQgKz0gdGhpcy5lbmNvZGVTdHJ1Y3QocmlnaHRTaWRlLCAnUlJSUlJSJylcblxuICAgIC8vIEFkZCB0aGUgZW5kIGJpdHNcbiAgICByZXN1bHQgKz0gZW5kQmluXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvLyBDb252ZXJ0IGEgbnVtYmVyIGFycmF5IHRvIHRoZSByZXByZXNlbnRpbmdcbiAgZW5jb2RlU3RydWN0IChjb2RlUGFydCwgc3RydWN0KSB7XG4gICAgLy8gQ3JlYXRlIHRoZSB2YXJpYWJsZSB0aGF0IHNob3VsZCBiZSByZXR1cm5lZCBhdCB0aGUgZW5kIG9mIHRoZSBmdW5jdGlvblxuICAgIGxldCByZXN1bHQgPSAnJ1xuXG4gICAgLy8gTG9vcCBhbGwgdGhlIG51bWJlcnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvZGVQYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBVc2luZyB0aGUgTCwgRyBvciBSIGVuY29kaW5nIGFuZCBhZGQgaXQgdG8gdGhlIHJldHVybmluZyB2YXJpYWJsZVxuICAgICAgaWYgKHN0cnVjdFtpXSA9PT0gJ0wnKSB7XG4gICAgICAgIHJlc3VsdCArPSBMYmluYXJ5W2NvZGVQYXJ0W2ldXVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoc3RydWN0W2ldID09PSAnRycpIHtcbiAgICAgICAgcmVzdWx0ICs9IEdiaW5hcnlbY29kZVBhcnRbaV1dXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzdHJ1Y3RbaV0gPT09ICdSJykge1xuICAgICAgICByZXN1bHQgKz0gUmJpbmFyeVtjb2RlUGFydFtpXV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVBTlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvZWFuLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IEVBTiBmcm9tICcuL2VhbidcblxuY2xhc3MgVVBDIGV4dGVuZHMgRUFOIHtcbiAgY29uc3RydWN0b3IoY29kZSkge1xuICAgIHN1cGVyKGAwJHtjb2RlfWApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVVBDXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy91cGMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigkZ2V0UHJvdG90eXBlT2Ype1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX1N5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuU3ltYm9sO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmtleW9mJylcbiAgLCAkbmFtZXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi8kLmVudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgZ2V0RGVzYyAgICAgICAgPSAkLmdldERlc2NcbiAgLCBzZXREZXNjICAgICAgICA9ICQuc2V0RGVzY1xuICAsIF9jcmVhdGUgICAgICAgID0gJC5jcmVhdGVcbiAgLCBnZXROYW1lcyAgICAgICA9ICRuYW1lcy5nZXRcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBzZXR0ZXIgICAgICAgICA9IGZhbHNlXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIGlzRW51bSAgICAgICAgID0gJC5pc0VudW1cbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgdXNlTmF0aXZlICAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKHNldERlc2Moe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHNldERlc2ModGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ2V0RGVzYyhPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBzZXREZXNjKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKXNldERlc2MoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBzZXREZXNjO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2wucHJvdG90eXBlKTtcbiAgc3ltLl9rID0gdGFnO1xuICBERVNDUklQVE9SUyAmJiBzZXR0ZXIgJiYgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpc2V0RGVzYyhpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gc2V0RGVzYyhpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5KTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XVxuICAgID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHZhciBEID0gZ2V0RGVzYyhpdCA9IHRvSU9iamVjdChpdCksIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTilyZXN1bHQucHVzaChrZXkpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIHZhciBhcmdzID0gW2l0XVxuICAgICwgaSAgICA9IDFcbiAgICAsICQkICAgPSBhcmd1bWVudHNcbiAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gIHdoaWxlKCQkLmxlbmd0aCA+IGkpYXJncy5wdXNoKCQkW2krK10pO1xuICByZXBsYWNlciA9IGFyZ3NbMV07XG4gIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gIH07XG4gIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xufTtcbnZhciBidWdneUpTT04gPSAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSk7XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIXVzZU5hdGl2ZSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZihpc1N5bWJvbCh0aGlzKSl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHJldHVybiB3cmFwKHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCkpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgaXNTeW1ib2wgPSBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbiAgfTtcblxuICAkLmNyZWF0ZSAgICAgPSAkY3JlYXRlO1xuICAkLmlzRW51bSAgICAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICQuZ2V0RGVzYyAgICA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICQuc2V0RGVzYyAgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgJC5zZXREZXNjcyAgID0gJGRlZmluZVByb3BlcnRpZXM7XG4gICQuZ2V0TmFtZXMgICA9ICRuYW1lcy5nZXQgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgJC5nZXRTeW1ib2xzID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi8kLmxpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cbn1cblxudmFyIHN5bWJvbFN0YXRpY3MgPSB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn07XG4vLyAxOS40LjIuMiBTeW1ib2wuaGFzSW5zdGFuY2Vcbi8vIDE5LjQuMi4zIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVcbi8vIDE5LjQuMi40IFN5bWJvbC5pdGVyYXRvclxuLy8gMTkuNC4yLjYgU3ltYm9sLm1hdGNoXG4vLyAxOS40LjIuOCBTeW1ib2wucmVwbGFjZVxuLy8gMTkuNC4yLjkgU3ltYm9sLnNlYXJjaFxuLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXG4vLyAxOS40LjIuMTEgU3ltYm9sLnNwbGl0XG4vLyAxOS40LjIuMTIgU3ltYm9sLnRvUHJpbWl0aXZlXG4vLyAxOS40LjIuMTMgU3ltYm9sLnRvU3RyaW5nVGFnXG4vLyAxOS40LjIuMTQgU3ltYm9sLnVuc2NvcGFibGVzXG4kLmVhY2guY2FsbCgoXG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsJyArXG4gICdzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBmdW5jdGlvbihpdCl7XG4gIHZhciBzeW0gPSB3a3MoaXQpO1xuICBzeW1ib2xTdGF0aWNzW2l0XSA9IHVzZU5hdGl2ZSA/IHN5bSA6IHdyYXAoc3ltKTtcbn0pO1xuXG5zZXR0ZXIgPSB0cnVlO1xuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVywge1N5bWJvbDogJFN5bWJvbH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N5bWJvbCcsIHN5bWJvbFN0YXRpY3MpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICF1c2VOYXRpdmUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCF1c2VOYXRpdmUgfHwgYnVnZ3lKU09OKSwgJ0pTT04nLCB7c3RyaW5naWZ5OiAkc3RyaW5naWZ5fSk7XG5cbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5oaWRlJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oaWRlLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi8kJykuc2V0RGVzY1xuICAsIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3RvcmUgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIFN5bWJvbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5TeW1ib2w7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBTeW1ib2wgJiYgU3ltYm9sW25hbWVdIHx8IChTeW1ib2wgfHwgdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gJC5nZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5rZXlvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGdldE5hbWVzICA9IHJlcXVpcmUoJy4vJCcpLmdldE5hbWVzXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ2V0TmFtZXMoaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgaWYod2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScpcmV0dXJuIGdldFdpbmRvd05hbWVzKGl0KTtcbiAgcmV0dXJuIGdldE5hbWVzKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nZXQtbmFtZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGtleXMgICAgICAgPSAkLmdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSAkLmlzRW51bVxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKWtleXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5lbnVtLWtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24oYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubGlicmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBnZXREZXNjICA9IHJlcXVpcmUoJy4vJCcpLmdldERlc2NcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vJC5jdHgnKShGdW5jdGlvbi5jYWxsLCBnZXREZXNjKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXByb3RvLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvL1RoZSBzdHJ1Y3R1cmUgZm9yIHRoZSBhbGwgZGlnaXRzLCAxIGlzIHdpZGUgYW5kIDAgaXMgbmFycm93XG5jb25zdCBkaWdpdFN0cnVjdHVyZSA9IHtcbiAgMDogJzAwMTEwJyxcbiAgMTogJzEwMDAxJyxcbiAgMjogJzAxMDAxJyxcbiAgMzogJzExMDAwJyxcbiAgNDogJzAwMTAxJyxcbiAgNTogJzEwMTAwJyxcbiAgNjogJzAxMTAwJyxcbiAgNzogJzAwMDExJyxcbiAgODogJzEwMDEwJyxcbiAgOTogJzAxMDEwJ1xufVxuXG4vLyBUaGUgc3RhcnQgYml0c1xuY29uc3Qgc3RhcnRCaW4gPSAnMTAxMCdcbi8vIFRoZSBlbmQgYml0c1xuY29uc3QgZW5kQmluID0gJzExMTAxJ1xuXG4vLyBSZWdleHAgZm9yIGEgdmFsaWQgSW50ZXIyNSBjb2RlXG5jb25zdCB2YWxpZFJlID0gL14oWzAtOV1bMC05XSkrJC9cblxuY2xhc3MgSVRGIHtcbiAgY29uc3RydWN0b3IgKGNvZGUpIHtcbiAgICB0aGlzLmNvZGUgPSBTdHJpbmcoY29kZSlcbiAgfVxuXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHZhbGlkUmUudGVzdCh0aGlzLmNvZGUpXG4gIH1cblxuICBlbmNvZGUoKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSB2YXJpYWJsZSB0aGF0IHNob3VsZCBiZSByZXR1cm5lZCBhdCB0aGUgZW5kIG9mIHRoZSBmdW5jdGlvblxuICAgIGxldCByZXN1bHQgPSAnJ1xuXG4gICAgLy8gQWx3YXlzIGFkZCB0aGUgc2FtZSBzdGFydCBiaXRzXG4gICAgcmVzdWx0ICs9IHN0YXJ0QmluXG5cbiAgICAvLyBDYWxjdWxhdGUgYWxsIHRoZSBkaWdpdCBwYWlyc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2RlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICByZXN1bHQgKz0gdGhpcy5jYWxjdWxhdGVQYWlyKHRoaXMuY29kZS5zdWJzdHIoaSwgMikpXG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIGFkZCB0aGUgc2FtZSBlbmQgYml0c1xuICAgIHJlc3VsdCArPSBlbmRCaW5cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNhbGN1bGF0ZVBhaXIgKHR3b051bWJlcnMpIHtcbiAgICBsZXQgcmVzdWx0ID0gJydcblxuICAgIGxldCBudW1iZXIxU3RydWN0ID0gZGlnaXRTdHJ1Y3R1cmVbdHdvTnVtYmVyc1swXV1cbiAgICBsZXQgbnVtYmVyMlN0cnVjdCA9IGRpZ2l0U3RydWN0dXJlW3R3b051bWJlcnNbMV1dXG5cbiAgICAvLyBUYWtlIGV2ZXJ5IHNlY29uZCBiaXQgYW5kIGFkZCB0byB0aGUgcmVzdWx0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSAobnVtYmVyMVN0cnVjdFtpXSA9PT0gJzEnKSA/ICcxMTEnIDogJzEnXG4gICAgICByZXN1bHQgKz0gKG51bWJlcjJTdHJ1Y3RbaV0gPT09ICcxJykgPyAnMDAwJyA6ICcwJ1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJVEZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvZW5jb2RpbmdzL2l0Zi5qc1xuICoqLyIsImltcG9ydCBJVEYgZnJvbSAnLi9pdGYnXG5cbmNvbnN0IHZhbGlkUmUgPSAvXlswLTldezEzLDE0fSQvXG5cbmNsYXNzIElURjE0IGV4dGVuZHMgSVRGIHtcbiAgY29uc3RydWN0b3IoY29kZSkge1xuICAgIHN1cGVyKGNvZGUpXG5cbiAgICBpZiAoY29kZS5sZW5ndGggPT09IDEzKSB7XG4gICAgICB0aGlzLmNvZGUgKz0gdGhpcy5jaGVja3N1bSgpXG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaXNWYWxpZCgpICYmIHZhbGlkUmUudGVzdCh0aGlzLmNvZGUpICYmXG4gICAgICBOdW1iZXIodGhpcy5jb2RlWzEzXSkgPT09IHRoaXMuY2hlY2tzdW0oKVxuICB9XG5cbiAgY2hlY2tzdW0oKSB7XG4gICAgbGV0IHJlc3VsdCA9IDBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTM7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IE51bWJlcih0aGlzLmNvZGVbaV0pICogKDMgLSAoaSAlIDIpICogMilcbiAgICB9XG5cbiAgICByZXR1cm4gMTAgLSAocmVzdWx0ICUgMTApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSVRGMTRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvZW5jb2RpbmdzL2l0ZjE0LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICQuZ2V0RGVzYyhpdCwga2V5KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImNvbnN0IGNvZGUzOSA9IHtcbiAgJzAnOiAnMTAxMDAwMTExMDExMTAxJyxcbiAgJzEnOiAnMTExMDEwMDAxMDEwMTExJyxcbiAgJzInOiAnMTAxMTEwMDAxMDEwMTExJyxcbiAgJzMnOiAnMTExMDExMTAwMDEwMTAxJyxcbiAgJzQnOiAnMTAxMDAwMTExMDEwMTExJyxcbiAgJzUnOiAnMTExMDEwMDAxMTEwMTAxJyxcbiAgJzYnOiAnMTAxMTEwMDAxMTEwMTAxJyxcbiAgJzcnOiAnMTAxMDAwMTAxMTEwMTExJyxcbiAgJzgnOiAnMTExMDEwMDAxMDExMTAxJyxcbiAgJzknOiAnMTAxMTEwMDAxMDExMTAxJyxcbiAgJ0EnOiAnMTExMDEwMTAwMDEwMTExJyxcbiAgJ0InOiAnMTAxMTEwMTAwMDEwMTExJyxcbiAgJ0MnOiAnMTExMDExMTAxMDAwMTAxJyxcbiAgJ0QnOiAnMTAxMDExMTAwMDEwMTExJyxcbiAgJ0UnOiAnMTExMDEwMTExMDAwMTAxJyxcbiAgJ0YnOiAnMTAxMTEwMTExMDAwMTAxJyxcbiAgJ0cnOiAnMTAxMDEwMDAxMTEwMTExJyxcbiAgJ0gnOiAnMTExMDEwMTAwMDExMTAxJyxcbiAgJ0knOiAnMTAxMTEwMTAwMDExMTAxJyxcbiAgJ0onOiAnMTAxMDExMTAwMDExMTAxJyxcbiAgJ0snOiAnMTExMDEwMTAxMDAwMTExJyxcbiAgJ0wnOiAnMTAxMTEwMTAxMDAwMTExJyxcbiAgJ00nOiAnMTExMDExMTAxMDEwMDAxJyxcbiAgJ04nOiAnMTAxMDExMTAxMDAwMTExJyxcbiAgJ08nOiAnMTExMDEwMTExMDEwMDAxJyxcbiAgJ1AnOiAnMTAxMTEwMTExMDEwMDAxJyxcbiAgJ1EnOiAnMTAxMDEwMTExMDAwMTExJyxcbiAgJ1InOiAnMTExMDEwMTAxMTEwMDAxJyxcbiAgJ1MnOiAnMTAxMTEwMTAxMTEwMDAxJyxcbiAgJ1QnOiAnMTAxMDExMTAxMTEwMDAxJyxcbiAgJ1UnOiAnMTExMDAwMTAxMDEwMTExJyxcbiAgJ1YnOiAnMTAwMDExMTAxMDEwMTExJyxcbiAgJ1cnOiAnMTExMDAwMTExMDEwMTAxJyxcbiAgJ1gnOiAnMTAwMDEwMTExMDEwMTExJyxcbiAgJ1knOiAnMTExMDAwMTAxMTEwMTAxJyxcbiAgJ1onOiAnMTAwMDExMTAxMTEwMTAxJyxcbiAgJy0nOiAnMTAwMDEwMTAxMTEwMTExJyxcbiAgJy4nOiAnMTExMDAwMTAxMDExMTAxJyxcbiAgJyAnOiAnMTAwMDExMTAxMDExMTAxJyxcbiAgJyQnOiAnMTAwMDEwMDAxMDAwMTAxJyxcbiAgJy8nOiAnMTAwMDEwMDAxMDEwMDAxJyxcbiAgJysnOiAnMTAwMDEwMTAwMDEwMDAxJyxcbiAgJyUnOiAnMTAxMDAwMTAwMDEwMDAxJ1xufVxuXG5jb25zdCB2YWxpZFJlID0gL15bMC05YS16QS1aXFwtXFwuXFwgXFwkXFwvXFwrXFwlXSskL1xuXG5jbGFzcyBDT0RFMzkge1xuICBjb25zdHJ1Y3RvciAoY29kZSkge1xuICAgIHRoaXMuY29kZSA9IFN0cmluZyhjb2RlKVxuICB9XG5cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdmFsaWRSZS50ZXN0KHRoaXMuY29kZSlcbiAgfVxuXG4gIGVuY29kZSgpIHtcbiAgICBsZXQgc3RyaW5nID0gdGhpcy5jb2RlLnRvVXBwZXJDYXNlKClcblxuICAgIGxldCByZXN1bHQgPSAnJ1xuICAgIHJlc3VsdCArPSAnMTAwMDEwMTExMDExMTAxMCdcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IHRoaXMuZW5jb2RpbmdCeUNoYXIoc3RyaW5nW2ldKSArICcwJ1xuICAgIH1cbiAgICByZXN1bHQgKz0gJzEwMDAxMDExMTAxMTEwMTAnXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZW5jb2RpbmdCeUNoYXIgKGNoYXIpIHtcbiAgICByZXR1cm4gY29kZTM5W2NoYXJdIHx8ICcnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ09ERTM5XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvY29kZTM5LmpzXG4gKiovIiwiaW1wb3J0IENPREUxMjggZnJvbSAnLi9jb2RlMTI4J1xuXG5jbGFzcyBDT0RFMTI4QiBleHRlbmRzIENPREUxMjgge1xuICBjb25zdHJ1Y3RvciAoY29kZSkge1xuICAgIHN1cGVyKGNvZGUpXG4gICAgdGhpcy5zdGFydENvZGUgPSAxMDRcbiAgfVxuXG4gIGVuY29kZUNsYXNzICgpIHtcbiAgICBsZXQgcmVzdWx0ID0gJydcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29kZS5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IHN1cGVyLmVuY29kaW5nQnlDaGFyKHRoaXMuY29kZVtpXSlcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY2hlY2tzdW0oKSB7XG4gICAgbGV0IHN1bSA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29kZS5sZW5ndGg7IGkrKykge1xuICAgICAgc3VtICs9IHN1cGVyLndlaWdodEJ5Q2hhcmFjdGVyKHRoaXMuY29kZVtpXSkgKiAoaSArIDEpXG4gICAgfVxuICAgIHJldHVybiAoc3VtICsgdGhpcy5zdGFydENvZGUpICUgMTAzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ09ERTEyOEJcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvZW5jb2RpbmdzL2NvZGUxMjhiLmpzXG4gKiovIiwiLy8gRGF0YSBmb3IgZWFjaCBjaGFyYWN0ZXJcbi8vIFRoZSBsYXN0IGNoYXJhY3RlcnMgd2lsbCBub3QgYmUgZW5jb2RlZCBidXQgYXJlIHVzZWQgZm9yIGVycm9yIGNvcnJlY3Rpb25cbmNvbnN0IGNvZGUxMjhiID0ge1xuICAgJyAnOiBbICcxMTAxMTAwMTEwMCcsIDAgXSxcbiAgICchJzogWyAnMTEwMDExMDExMDAnLCAxIF0sXG4gICAnXCInOiBbICcxMTAwMTEwMDExMCcsIDIgXSxcbiAgICcjJzogWyAnMTAwMTAwMTEwMDAnLCAzIF0sXG4gICAnJCc6IFsgJzEwMDEwMDAxMTAwJywgNCBdLFxuICAgJyUnOiBbICcxMDAwMTAwMTEwMCcsIDUgXSxcbiAgICcmJzogWyAnMTAwMTEwMDEwMDAnLCA2IF0sXG4gICAnXFwnJzogWyAnMTAwMTEwMDAxMDAnLCA3IF0sXG4gICAnKCc6IFsgJzEwMDAxMTAwMTAwJywgOCBdLFxuICAgJyknOiBbICcxMTAwMTAwMTAwMCcsIDkgXSxcbiAgICcqJzogWyAnMTEwMDEwMDAxMDAnLCAxMCBdLFxuICAgJysnOiBbICcxMTAwMDEwMDEwMCcsIDExIF0sXG4gICAnLCc6IFsgJzEwMTEwMDExMTAwJywgMTIgXSxcbiAgICctJzogWyAnMTAwMTEwMTExMDAnLCAxMyBdLFxuICAgJy4nOiBbICcxMDAxMTAwMTExMCcsIDE0IF0sXG4gICAnLyc6IFsgJzEwMTExMDAxMTAwJywgMTUgXSxcbiAgICcwJzogWyAnMTAwMTExMDExMDAnLCAxNiBdLFxuICAgJzEnOiBbICcxMDAxMTEwMDExMCcsIDE3IF0sXG4gICAnMic6IFsgJzExMDAxMTEwMDEwJywgMTggXSxcbiAgICczJzogWyAnMTEwMDEwMTExMDAnLCAxOSBdLFxuICAgJzQnOiBbICcxMTAwMTAwMTExMCcsIDIwIF0sXG4gICAnNSc6IFsgJzExMDExMTAwMTAwJywgMjEgXSxcbiAgICc2JzogWyAnMTEwMDExMTAxMDAnLCAyMiBdLFxuICAgJzcnOiBbICcxMTEwMTEwMTExMCcsIDIzIF0sXG4gICAnOCc6IFsgJzExMTAxMDAxMTAwJywgMjQgXSxcbiAgICc5JzogWyAnMTExMDAxMDExMDAnLCAyNSBdLFxuICAgJzonOiBbICcxMTEwMDEwMDExMCcsIDI2IF0sXG4gICAnOyc6IFsgJzExMTAxMTAwMTAwJywgMjcgXSxcbiAgICc8JzogWyAnMTExMDAxMTAxMDAnLCAyOCBdLFxuICAgJz0nOiBbICcxMTEwMDExMDAxMCcsIDI5IF0sXG4gICAnPic6IFsgJzExMDExMDExMDAwJywgMzAgXSxcbiAgICc/JzogWyAnMTEwMTEwMDAxMTAnLCAzMSBdLFxuICAgJ0AnOiBbICcxMTAwMDExMDExMCcsIDMyIF0sXG4gICAnQSc6IFsgJzEwMTAwMDExMDAwJywgMzMgXSxcbiAgICdCJzogWyAnMTAwMDEwMTEwMDAnLCAzNCBdLFxuICAgJ0MnOiBbICcxMDAwMTAwMDExMCcsIDM1IF0sXG4gICAnRCc6IFsgJzEwMTEwMDAxMDAwJywgMzYgXSxcbiAgICdFJzogWyAnMTAwMDExMDEwMDAnLCAzNyBdLFxuICAgJ0YnOiBbICcxMDAwMTEwMDAxMCcsIDM4IF0sXG4gICAnRyc6IFsgJzExMDEwMDAxMDAwJywgMzkgXSxcbiAgICdIJzogWyAnMTEwMDAxMDEwMDAnLCA0MCBdLFxuICAgJ0knOiBbICcxMTAwMDEwMDAxMCcsIDQxIF0sXG4gICAnSic6IFsgJzEwMTEwMTExMDAwJywgNDIgXSxcbiAgICdLJzogWyAnMTAxMTAwMDExMTAnLCA0MyBdLFxuICAgJ0wnOiBbICcxMDAwMTEwMTExMCcsIDQ0IF0sXG4gICAnTSc6IFsgJzEwMTExMDExMDAwJywgNDUgXSxcbiAgICdOJzogWyAnMTAxMTEwMDAxMTAnLCA0NiBdLFxuICAgJ08nOiBbICcxMDAwMTExMDExMCcsIDQ3IF0sXG4gICAnUCc6IFsgJzExMTAxMTEwMTEwJywgNDggXSxcbiAgICdRJzogWyAnMTEwMTAwMDExMTAnLCA0OSBdLFxuICAgJ1InOiBbICcxMTAwMDEwMTExMCcsIDUwIF0sXG4gICAnUyc6IFsgJzExMDExMTAxMDAwJywgNTEgXSxcbiAgICdUJzogWyAnMTEwMTExMDAwMTAnLCA1MiBdLFxuICAgJ1UnOiBbICcxMTAxMTEwMTExMCcsIDUzIF0sXG4gICAnVic6IFsgJzExMTAxMDExMDAwJywgNTQgXSxcbiAgICdXJzogWyAnMTExMDEwMDAxMTAnLCA1NSBdLFxuICAgJ1gnOiBbICcxMTEwMDAxMDExMCcsIDU2IF0sXG4gICAnWSc6IFsgJzExMTAxMTAxMDAwJywgNTcgXSxcbiAgICdaJzogWyAnMTExMDExMDAwMTAnLCA1OCBdLFxuICAgJyc6IFsgJzExMTAwMDExMDEwJywgNTkgXSxcbiAgICdcXFxcJzogWyAnMTExMDExMTEwMTAnLCA2MCBdLFxuICAgJ10nOiBbICcxMTAwMTAwMDAxMCcsIDYxIF0sXG4gICAnXic6IFsgJzExMTEwMDAxMDEwJywgNjIgXSxcbiAgICdfJzogWyAnMTAxMDAxMTAwMDAnLCA2MyBdLFxuICAgJ2AnOiBbICcxMDEwMDAwMTEwMCcsIDY0IF0sXG4gICAnYSc6IFsgJzEwMDEwMTEwMDAwJywgNjUgXSxcbiAgICdiJzogWyAnMTAwMTAwMDAxMTAnLCA2NiBdLFxuICAgJ2MnOiBbICcxMDAwMDEwMTEwMCcsIDY3IF0sXG4gICAnZCc6IFsgJzEwMDAwMTAwMTEwJywgNjggXSxcbiAgICdlJzogWyAnMTAxMTAwMTAwMDAnLCA2OSBdLFxuICAgJ2YnOiBbICcxMDExMDAwMDEwMCcsIDcwIF0sXG4gICAnZyc6IFsgJzEwMDExMDEwMDAwJywgNzEgXSxcbiAgICdoJzogWyAnMTAwMTEwMDAwMTAnLCA3MiBdLFxuICAgJ2knOiBbICcxMDAwMDExMDEwMCcsIDczIF0sXG4gICAnaic6IFsgJzEwMDAwMTEwMDEwJywgNzQgXSxcbiAgICdrJzogWyAnMTEwMDAwMTAwMTAnLCA3NSBdLFxuICAgJ2wnOiBbICcxMTAwMTAxMDAwMCcsIDc2IF0sXG4gICAnbSc6IFsgJzExMTEwMTExMDEwJywgNzcgXSxcbiAgICduJzogWyAnMTEwMDAwMTAxMDAnLCA3OCBdLFxuICAgJ28nOiBbICcxMDAwMTExMTAxMCcsIDc5IF0sXG4gICAncCc6IFsgJzEwMTAwMTExMTAwJywgODAgXSxcbiAgICdxJzogWyAnMTAwMTAxMTExMDAnLCA4MSBdLFxuICAgJ3InOiBbICcxMDAxMDAxMTExMCcsIDgyIF0sXG4gICAncyc6IFsgJzEwMTExMTAwMTAwJywgODMgXSxcbiAgICd0JzogWyAnMTAwMTExMTAxMDAnLCA4NCBdLFxuICAgJ3UnOiBbICcxMDAxMTExMDAxMCcsIDg1IF0sXG4gICAndic6IFsgJzExMTEwMTAwMTAwJywgODYgXSxcbiAgICd3JzogWyAnMTExMTAwMTAxMDAnLCA4NyBdLFxuICAgJ3gnOiBbICcxMTExMDAxMDAxMCcsIDg4IF0sXG4gICAneSc6IFsgJzExMDExMDExMTEwJywgODkgXSxcbiAgICd6JzogWyAnMTEwMTExMTAxMTAnLCA5MCBdLFxuICAgJ3snOiBbICcxMTExMDExMDExMCcsIDkxIF0sXG4gICAnfCc6IFsgJzEwMTAxMTExMDAwJywgOTIgXSxcbiAgICd9JzogWyAnMTAxMDAwMTExMTAnLCA5MyBdLFxuICAgJ34nOiBbICcxMDAwMTAxMTExMCcsIDk0IF0sXG4gICBbU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpXTogWyAnMTAxMTExMDEwMDAnLCA5NSBdLFxuICAgW1N0cmluZy5mcm9tQ2hhckNvZGUoMTI4KV06IFsgJzEwMTExMTAwMDEwJywgOTYgXSxcbiAgIFtTdHJpbmcuZnJvbUNoYXJDb2RlKDEyOSldOiBbICcxMTExMDEwMTAwMCcsIDk3IF0sXG4gICBbU3RyaW5nLmZyb21DaGFyQ29kZSgxMzApXTogWyAnMTExMTAxMDAwMTAnLCA5OCBdLFxuICAgW1N0cmluZy5mcm9tQ2hhckNvZGUoMTMxKV06IFsgJzEwMTExMDExMTEwJywgOTkgXSxcbiAgIFtTdHJpbmcuZnJvbUNoYXJDb2RlKDEzMildOiBbICcxMDExMTEwMTExMCcsIDEwMCBdLFxuICAgW1N0cmluZy5mcm9tQ2hhckNvZGUoMTMzKV06IFsgJzExMTAxMDExMTEwJywgMTAxIF0sXG4gICBbU3RyaW5nLmZyb21DaGFyQ29kZSgxMzQpXTogWyAnMTExMTAxMDExMTAnLCAxMDIgXSxcbiAgIC8vU3RhcnQgY29kZXNcbiAgIFtTdHJpbmcuZnJvbUNoYXJDb2RlKDEzNSldOiBbICcxMTAxMDAwMDEwMCcsIDEwMyBdLFxuICAgW1N0cmluZy5mcm9tQ2hhckNvZGUoMTM2KV06IFsgJzExMDEwMDEwMDAwJywgMTA0IF0sXG4gICBbU3RyaW5nLmZyb21DaGFyQ29kZSgxMzcpXTogWyAnMTEwMTAwMTExMDAnLCAxMDUgXVxufVxuXG5jb25zdCBlbmRCaW4gPSAnMTEwMDAxMTEwMTAxMSdcbmNvbnN0IHZhbGlkUmUgPSAvXlshLX4gXSskL1xuXG5jbGFzcyBDT0RFMTI4IHtcbiAgY29uc3RydWN0b3IgKGNvZGUpIHtcbiAgICB0aGlzLmNvZGUgPSBTdHJpbmcoY29kZSlcbiAgfVxuXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHZhbGlkUmUudGVzdCh0aGlzLmNvZGUpXG4gIH1cblxuICBlbmNvZGUoKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnXG5cbiAgICAvL0FkZCB0aGUgc3RhcnQgYml0c1xuICAgIHJlc3VsdCArPSB0aGlzLmVuY29kaW5nQnlJZCh0aGlzLnN0YXJ0Q29kZSlcblxuICAgIC8vQWRkIHRoZSBlbmNvZGVkIGJpdHNcbiAgICByZXN1bHQgKz0gdGhpcy5lbmNvZGVDbGFzcygpXG5cbiAgICAvL0FkZCB0aGUgY2hlY2tzdW1cbiAgICByZXN1bHQgKz0gdGhpcy5lbmNvZGluZ0J5SWQodGhpcy5jaGVja3N1bSgpKVxuXG4gICAgLy9BZGQgdGhlIGVuZCBiaXRzXG4gICAgcmVzdWx0ICs9IGVuZEJpblxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZW5jb2RpbmdCeUlkIChpZCkge1xuICAgIGZvciAobGV0IGtleSBpbiBjb2RlMTI4Yikge1xuICAgICAgICBjb25zdCBjb2RlID0gY29kZTEyOGJba2V5XVxuICAgICAgICBpZiAoY29kZVsxXSA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2RlWzBdXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICB3ZWlnaHRCeUNoYXJhY3RlciAoY2hhcikge1xuICAgIGNvbnN0IGNvZGUgPSBjb2RlMTI4YltjaGFyXVxuICAgIGlmICghY29kZSkgcmV0dXJuIDBcbiAgICByZXR1cm4gY29kZVsxXVxuICB9XG5cbiAgZW5jb2RpbmdCeUNoYXIgKGNoYXIpIHtcbiAgICBjb25zdCBjb2RlID0gY29kZTEyOGJbY2hhcl1cbiAgICBpZiAoIWNvZGUpIHJldHVybiAnJ1xuICAgIHJldHVybiBjb2RlWzBdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ09ERTEyOFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy9jb2RlMTI4LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBDT0RFMTI4IGZyb20gJy4vY29kZTEyOCdcblxuY2xhc3MgQ09ERTEyOEMgZXh0ZW5kcyBDT0RFMTI4IHtcbiAgY29uc3RydWN0b3IgKGNvZGUpIHtcbiAgICBzdXBlcihjb2RlKVxuICAgIHRoaXMuY29kZSA9IHRoaXMuY29kZS5yZXBsYWNlKC8gL2csICcnKVxuICAgIHRoaXMuc3RhcnRDb2RlID0gMTA1XG4gIH1cblxuICBlbmNvZGVDbGFzcyAoKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY29kZS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgcmVzdWx0ICs9IHN1cGVyLmVuY29kaW5nQnlJZChOdW1iZXIodGhpcy5jb2RlLnN1YnN0cihpLCAyKSkpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNoZWNrc3VtKCkge1xuICAgIGxldCBzdW0gPSAwXG4gICAgbGV0IHcgPSAxXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvZGUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHN1bSArPSBOdW1iZXIodGhpcy5jb2RlLnN1YnN0cihpLCAyKSkgKiAodylcbiAgICAgIHcrK1xuICAgIH1cbiAgICByZXR1cm4gKHN1bSArIHRoaXMuc3RhcnRDb2RlKSAlIDEwM1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENPREUxMjhDXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy9jb2RlMTI4Yy5qc1xuICoqLyIsImltcG9ydCByZXBlYXQgZnJvbSAnY29yZS1qcy9saWJyYXJ5L2ZuL3N0cmluZy9yZXBlYXQnXG5cbmNsYXNzIFBoYXJtYWNvZGUge1xuICBjb25zdHJ1Y3RvciAoY29kZSkge1xuICAgIHRoaXMuY29kZSA9IE51bWJlcihjb2RlKVxuICB9XG5cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlID49IDMgJiYgdGhpcy5jb2RlIDw9IDEzMTA3MFxuICB9XG5cbiAgLy8gQSBoZWxwZXIgZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSB6ZXJvcyBhdCB0aGUgZW5kIG9mIGEgc3RyaW5nXG4gIF9jYWxjWmVyb3MgKGNvZGUpIHtcbiAgICBsZXQgaSA9IGNvZGUubGVuZ3RoIC0gMVxuICAgIGxldCB6ZXJvcyA9IDBcbiAgICB3aGlsZSAoY29kZVtpXSA9PT0gJzAnIHx8IGkgPCAwKXtcbiAgICAgIHplcm9zKytcbiAgICAgIGktLVxuICAgIH1cbiAgICByZXR1cm4gemVyb3NcbiAgfVxuXG4gIGVuY29kZUJpbmFyeSAoY29kZSwgc3RhdGUpIHtcbiAgICBpZiAoY29kZS5sZW5ndGggPT09IDApIHJldHVybiAnJ1xuXG4gICAgbGV0IGdlbmVyYXRlZFxuICAgIGxldCBuZXh0U3RhdGUgPSBmYWxzZVxuICAgIGxldCBuWmVyb3MgPSB0aGlzLl9jYWxjWmVyb3MoY29kZSlcblxuICAgIGlmIChuWmVyb3MgPT09IDApIHtcbiAgICAgIGdlbmVyYXRlZCA9IHN0YXRlID8gJzAwMScgOiAnMDAxMTEnXG4gICAgICBuZXh0U3RhdGUgPSBzdGF0ZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGdlbmVyYXRlZCA9IHJlcGVhdCgnMDAxJywgblplcm9zIC0gKHN0YXRlID8gMSA6IDApKVxuICAgICAgZ2VuZXJhdGVkICs9ICcwMDExMSdcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZW5jb2RlQmluYXJ5KGNvZGUuc3Vic3RyKDAsIGNvZGUubGVuZ3RoIC0gblplcm9zIC0gMSksIG5leHRTdGF0ZSkgKyBnZW5lcmF0ZWRcbiAgfVxuXG4gIGVuY29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbmNvZGVCaW5hcnkodGhpcy5jb2RlLnRvU3RyaW5nKDIpLCB0cnVlKS5zdWJzdHIoMilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaGFybWFjb2RlXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy9waGFybWFjb2RlLmpzXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3RyaW5nLnJlcGVhdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3RyaW5nL3JlcGVhdC5qc1xuICoqIG1vZHVsZSBpZCA9IDY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4zLjEzIFN0cmluZy5wcm90b3R5cGUucmVwZWF0KGNvdW50KVxuICByZXBlYXQ6IHJlcXVpcmUoJy4vX3N0cmluZy1yZXBlYXQnKVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQuanNcbiAqKiBtb2R1bGUgaWQgPSA3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuMC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbiAqKiBtb2R1bGUgaWQgPSA3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuL18nKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbiAqKiBtb2R1bGUgaWQgPSA3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvXy5qc1xuICoqIG1vZHVsZSBpZCA9IDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcGVhdChjb3VudCl7XG4gIHZhciBzdHIgPSBTdHJpbmcoZGVmaW5lZCh0aGlzKSlcbiAgICAsIHJlcyA9ICcnXG4gICAgLCBuICAgPSB0b0ludGVnZXIoY291bnQpO1xuICBpZihuIDwgMCB8fCBuID09IEluZmluaXR5KXRocm93IFJhbmdlRXJyb3IoXCJDb3VudCBjYW4ndCBiZSBuZWdhdGl2ZVwiKTtcbiAgZm9yKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpaWYobiAmIDEpcmVzICs9IHN0cjtcbiAgcmV0dXJuIHJlcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1yZXBlYXQuanNcbiAqKiBtb2R1bGUgaWQgPSA4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuICoqIG1vZHVsZSBpZCA9IDgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcclxudmFyIENhbnZhcyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQ2FudmFzICh3LCBoKSB7XHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgY2FudmFzLndpZHRoID0gdyB8fCAzMDBcclxuICBjYW52YXMuaGVpZ2h0ID0gaCB8fCAxNTBcclxuICByZXR1cm4gY2FudmFzXHJcbn1cclxuXHJcbkNhbnZhcy5JbWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICByZXR1cm4gaW1nXHJcbn1cclxuXHJcblxyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2FudmFzLWJyb3dzZXJpZnkvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDg0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9