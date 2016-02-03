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
	
	module.exports = api;

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
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	
	var EAN = function () {
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
	}();
	
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
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(27);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(50);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ean = __webpack_require__(17);
	
	var _ean2 = _interopRequireDefault(_ean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UPC = function (_EAN) {
	  (0, _inherits3.default)(UPC, _EAN);
	
	  function UPC(code) {
	    (0, _classCallCheck3.default)(this, UPC);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(UPC).call(this, '0' + code));
	  }
	
	  return UPC;
	}(_ean2.default);
	
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
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
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

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _itf = __webpack_require__(57);
	
	var _itf2 = _interopRequireDefault(_itf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var validRe = /^[0-9]{13,14}$/;
	
	var ITF14 = function (_ITF) {
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
	}(_itf2.default);
	
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
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	
	var CODE39 = function () {
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
	}();
	
	exports.default = CODE39;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _code = __webpack_require__(65);
	
	var _code2 = _interopRequireDefault(_code);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CODE128B = function (_CODE) {
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
	}(_code2.default);
	
	exports.default = CODE128B;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _defineProperty2 = __webpack_require__(66);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _code128b;
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	
	var CODE128 = function () {
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
	}();
	
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _code = __webpack_require__(65);
	
	var _code2 = _interopRequireDefault(_code);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CODE128C = function (_CODE) {
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
	}(_code2.default);
	
	exports.default = CODE128C;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _repeat = __webpack_require__(69);
	
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

	var core = module.exports = {version: '2.0.3'};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjN2JkZDk0NDc2ZDAzN2NlNThlZSIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvZWFuLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvdXBjLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmtleW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvaXRmLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2l0ZjE0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2NvZGUzOS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2VuY29kaW5ncy9jb2RlMTI4Yi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2VuY29kaW5ncy9jb2RlMTI4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2NvZGUxMjhjLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL3BoYXJtYWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3RyaW5nL3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvXy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY2FudmFzLWJyb3dzZXJpZnkvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1h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QUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsT0FBSSxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBSjtBQUNBLFNBQU0sQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQU47QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMO0FBQ0EsUUFBSyxDQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBTDtBQUNBLFFBQUssQ0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQUw7QUFDQSxRQUFLLENBQUUsYUFBRixFQUFpQixFQUFqQixDQUFMOzZDQUNDLE9BQU8sWUFBUCxDQUFvQixHQUFwQixHQUEyQixDQUFFLGFBQUYsRUFBaUIsRUFBakIsNkNBQzNCLE9BQU8sWUFBUCxDQUFvQixHQUFwQixHQUEyQixDQUFFLGFBQUYsRUFBaUIsRUFBakIsNkNBQzNCLE9BQU8sWUFBUCxDQUFvQixHQUFwQixHQUEyQixDQUFFLGFBQUYsRUFBaUIsRUFBakIsNkNBQzNCLE9BQU8sWUFBUCxDQUFvQixHQUFwQixHQUEyQixDQUFFLGFBQUYsRUFBaUIsRUFBakIsNkNBQzNCLE9BQU8sWUFBUCxDQUFvQixHQUFwQixHQUEyQixDQUFFLGFBQUYsRUFBaUIsRUFBakIsNkNBQzNCLE9BQU8sWUFBUCxDQUFvQixHQUFwQixHQUEyQixDQUFFLGFBQUYsRUFBaUIsR0FBakIsNkNBQzNCLE9BQU8sWUFBUCxDQUFvQixHQUFwQixHQUEyQixDQUFFLGFBQUYsRUFBaUIsR0FBakIsNkNBQzNCLE9BQU8sWUFBUCxDQUFvQixHQUFwQixHQUEyQixDQUFFLGFBQUYsRUFBaUIsR0FBakIsNkNBRTNCLE9BQU8sWUFBUCxDQUFvQixHQUFwQixHQUEyQixDQUFFLGFBQUYsRUFBaUIsR0FBakIsNkNBQzNCLE9BQU8sWUFBUCxDQUFvQixH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QTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTtBQUNBO0FBQ0Esa0NBQWlDLFFBQVEsZ0JBQWdCLFVBQVUsR0FBRztBQUN0RSxFQUFDLEU7Ozs7OztBQ0hEO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPLE1BQU07QUFDYjtBQUNBLEc7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW8tYmFyY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImlvQmFyY29kZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpb0JhcmNvZGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGM3YmRkOTQ0NzZkMDM3Y2U1OGVlXG4gKiovIiwiaW1wb3J0IGVuY29kaW5ncyBmcm9tICcuL2VuY29kaW5ncydcclxuaW1wb3J0IENhbnZhcyBmcm9tICdjYW52YXMtYnJvd3NlcmlmeSdcclxuXHJcbmxldCBhcGkgPSB7fVxyXG5cclxuY29uc3QgZGVmYXVsdHMgPSB7XHJcbiAgd2lkdGg6IDIsXHJcbiAgaGVpZ2h0OiAxMDAsXHJcbiAgcXVpdGU6IDEwLFxyXG4gIGRpc3BsYXlWYWx1ZTogZmFsc2UsXHJcbiAgZm9udDogJ21vbm9zcGFjZScsXHJcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICBmb250U2l6ZTogMTIsXHJcbiAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnJyxcclxuICBsaW5lQ29sb3I6ICcjMDAwJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZHJhd0JhcmNvZGVUZXh0KHRleHQsIGNhbnZhcywgb3B0cykge1xyXG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4gIGxldCB4LCB5XHJcblxyXG4gIHkgPSBvcHRzLmhlaWdodFxyXG5cclxuICBjdHguZm9udCA9IGAke29wdHMuZm9udFdlaWdodH0gJHtvcHRzLmZvbnRTaXplfXB4ICR7b3B0cy5mb250fWBcclxuICBjdHgudGV4dEJhc2VsaW5lID0gJ2JvdHRvbSdcclxuICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCdcclxuXHJcbiAgaWYgKG9wdHMudGV4dEFsaWduID09PSAnbGVmdCcpIHtcclxuICAgIHggPSBvcHRzLnF1aXRlXHJcbiAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnXHJcbiAgfSBlbHNlIGlmIChvcHRzLnRleHRBbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgeCA9IGNhbnZhcy53aWR0aCAtIG9wdHMucXVpdGVcclxuICAgIGN0eC50ZXh0QWxpZ24gPSAncmlnaHQnXHJcbiAgfSBlbHNlIHtcclxuICAgIHggPSBjYW52YXMud2lkdGggLyAyXHJcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcidcclxuICB9XHJcblxyXG4gIGN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCYXJjb2RlRGF0YVVyaShFbmNvZGluZywgY29kZSwgb3B0cykge1xyXG4gIC8qIGVzbGludCBjb21wbGV4aXR5OjAgKi9cclxuICBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIG9wdHMpXHJcblxyXG4gIGxldCBjYW52YXMgPSBuZXcgQ2FudmFzKClcclxuICBsZXQgZW5jb2RlciA9IG5ldyBFbmNvZGluZyhjb2RlKVxyXG5cclxuICAvLyBBYm9ydCBpZiB0aGUgYmFyY29kZSBmb3JtYXQgZG9lcyBub3Qgc3VwcG9ydCB0aGUgY29udGVudFxyXG4gIGlmICghZW5jb2Rlci5pc1ZhbGlkKCkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignQ29udGVudCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBlbmNvZGluZycpXHJcbiAgfVxyXG5cclxuICAvLyBFbmNvZGUgdGhlIGNvbnRlbnRcclxuICBsZXQgYmluYXJ5U3RyaW5nID0gZW5jb2Rlci5lbmNvZGUoKVxyXG5cclxuICAvLyBHZXQgdGhlIGNhbnZhcyBjb250ZXh0XHJcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcblxyXG4gIC8vIFNldCB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgYmFyY29kZVxyXG4gIGNhbnZhcy53aWR0aCA9IGJpbmFyeVN0cmluZy5sZW5ndGggKiBvcHRzLndpZHRoICsgMiAqIG9wdHMucXVpdGVcclxuXHJcbiAgLy8gU2V0IGV4dHJhIGhlaWdodCBpZiB0aGUgdmFsdWUgaXMgZGlzcGxheWVkIHVuZGVyIHRoZSBiYXJjb2RlLlxyXG4gIGNhbnZhcy5oZWlnaHQgPSBvcHRzLmhlaWdodCArIChvcHRzLmRpc3BsYXlWYWx1ZSA/IG9wdHMuZm9udFNpemUgKiAxLjMgOiAwKVxyXG5cclxuICAvLyBQYWludCB0aGUgY2FudmFzXHJcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXHJcblxyXG4gIGlmIChvcHRzLmJhY2tncm91bmRDb2xvcikge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IG9wdHMuYmFja2dyb3VuZENvbG9yXHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG4gIH1cclxuXHJcbiAgLy8gQ2hhbmdlIHRvIGxpbmVDb2xvciB0byBwYWludCB0aGUgbGluZXNcclxuICBjdHguZmlsbFN0eWxlID0gb3B0cy5saW5lQ29sb3JcclxuXHJcbiAgLy8gQ3JlYXRlcyB0aGUgYmFyY29kZSBvdXQgb2YgdGhlIGJpbmFyeSBzdHJpbmdcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmFyeVN0cmluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IHggPSBpICogb3B0cy53aWR0aCArIG9wdHMucXVpdGVcclxuICAgIGlmIChiaW5hcnlTdHJpbmdbaV0gPT09ICcxJykge1xyXG4gICAgICBjdHguZmlsbFJlY3QoeCwgMCwgb3B0cy53aWR0aCwgb3B0cy5oZWlnaHQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgdmFsdWUgYmVsb3cgaWYgZW5hYmxlZFxyXG4gIGlmIChvcHRzLmRpc3BsYXlWYWx1ZSkge1xyXG4gICAgX2RyYXdCYXJjb2RlVGV4dChvcHRzLmN1c3RvbUxhYmVsIHx8IGNvZGUsIGNhbnZhcywgb3B0cylcclxuICB9XHJcblxyXG4gIHJldHVybiBjYW52YXNcclxufVxyXG5cclxuLyogZXNsaW50IG5vLWxvb3AtZnVuYzowICovXHJcbmZvciAobGV0IG5hbWUgaW4gZW5jb2RpbmdzKSB7XHJcbiAgYXBpW25hbWVdID0gKC4uLmFyZ3MpID0+IGdlbmVyYXRlQmFyY29kZURhdGFVcmkoZW5jb2RpbmdzW25hbWVdLCAuLi5hcmdzKVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFwaVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vJC5vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICBpZihJU19QUk9UTykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMS4yLjYnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKTtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBhID0gT2JqZWN0LmFzc2lnblxuICAgICwgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiBhKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKGEoe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgLCAkJGxlbiA9ICQkLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRLZXlzICAgID0gJC5nZXRLZXlzXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzXG4gICAgLCBpc0VudW0gICAgID0gJC5pc0VudW07XG4gIHdoaWxlKCQkbGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KCQkW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH1cbiAgcmV0dXJuIFQ7XG59IDogT2JqZWN0LmFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3QtYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IEVBTiBmcm9tICcuL2VhbidcbmltcG9ydCBVUEMgZnJvbSAnLi91cGMnXG5pbXBvcnQgSVRGIGZyb20gJy4vaXRmJ1xuaW1wb3J0IElURjE0IGZyb20gJy4vaXRmMTQnXG5pbXBvcnQgQ09ERTM5IGZyb20gJy4vY29kZTM5J1xuaW1wb3J0IENPREUxMjhCIGZyb20gJy4vY29kZTEyOGInXG5pbXBvcnQgQ09ERTEyOEMgZnJvbSAnLi9jb2RlMTI4YydcbmltcG9ydCBQaGFybWFjb2RlIGZyb20gJy4vcGhhcm1hY29kZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBFQU4sXG4gIFVQQyxcbiAgSVRGLFxuICBJVEYxNCxcbiAgQ09ERTM5LFxuICBDT0RFMTI4QixcbiAgQ09ERTEyOEMsXG4gIFBoYXJtYWNvZGVcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvZW5jb2RpbmdzL2luZGV4LmpzXG4gKiovIiwiLy8gVGhlIEwgKGxlZnQpIHR5cGUgb2YgZW5jb2RpbmdcbmNvbnN0IExiaW5hcnkgPSB7XG4gIDA6ICcwMDAxMTAxJyxcbiAgMTogJzAwMTEwMDEnLFxuICAyOiAnMDAxMDAxMScsXG4gIDM6ICcwMTExMTAxJyxcbiAgNDogJzAxMDAwMTEnLFxuICA1OiAnMDExMDAwMScsXG4gIDY6ICcwMTAxMTExJyxcbiAgNzogJzAxMTEwMTEnLFxuICA4OiAnMDExMDExMScsXG4gIDk6ICcwMDAxMDExJ1xufVxuXG4vLyBUaGUgRyB0eXBlIG9mIGVuY29kaW5nXG5jb25zdCBHYmluYXJ5ID0ge1xuICAwOiAnMDEwMDExMScsXG4gIDE6ICcwMTEwMDExJyxcbiAgMjogJzAwMTEwMTEnLFxuICAzOiAnMDEwMDAwMScsXG4gIDQ6ICcwMDExMTAxJyxcbiAgNTogJzAxMTEwMDEnLFxuICA2OiAnMDAwMDEwMScsXG4gIDc6ICcwMDEwMDAxJyxcbiAgODogJzAwMDEwMDEnLFxuICA5OiAnMDAxMDExMSdcbn1cblxuLy8gVGhlIFIgKHJpZ2h0KSB0eXBlIG9mIGVuY29kaW5nXG5jb25zdCBSYmluYXJ5ID0ge1xuICAwOiAnMTExMDAxMCcsXG4gIDE6ICcxMTAwMTEwJyxcbiAgMjogJzExMDExMDAnLFxuICAzOiAnMTAwMDAxMCcsXG4gIDQ6ICcxMDExMTAwJyxcbiAgNTogJzEwMDExMTAnLFxuICA2OiAnMTAxMDAwMCcsXG4gIDc6ICcxMDAwMTAwJyxcbiAgODogJzEwMDEwMDAnLFxuICA5OiAnMTExMDEwMCdcbn1cblxuLy8gVGhlIGxlZnQgc2lkZSBzdHJ1Y3R1cmUgaW4gRUFOLTEzXG5jb25zdCBFQU5zdHJ1Y3QgPSB7XG4gIDA6ICdMTExMTEwnLFxuICAxOiAnTExHTEdHJyxcbiAgMjogJ0xMR0dMRycsXG4gIDM6ICdMTEdHR0wnLFxuICA0OiAnTEdMTEdHJyxcbiAgNTogJ0xHR0xMRycsXG4gIDY6ICdMR0dHTEwnLFxuICA3OiAnTEdMR0xHJyxcbiAgODogJ0xHTEdHTCcsXG4gIDk6ICdMR0dMR0wnXG59XG5cbi8vIFZhbGlkIEVBTiBjb2RlXG5jb25zdCB2YWxpZFJlID0gL15bMC05XXsxM30kL1xuLy8gVGhlIHN0YXJ0IGJpdHNcbmNvbnN0IHN0YXJ0QmluID0gJzEwMSdcbi8vIFRoZSBlbmQgYml0c1xuY29uc3QgZW5kQmluID0gJzEwMSdcbi8vIFRoZSBtaWRkbGUgYml0c1xuY29uc3QgbWlkZGxlQmluID0gJzAxMDEwJ1xuXG5cbmNsYXNzIEVBTiB7XG4gIGNvbnN0cnVjdG9yIChjb2RlKSB7XG4gICAgdGhpcy5jb2RlID0gU3RyaW5nKGNvZGUpXG4gIH1cblxuICBpc1ZhbGlkICgpIHtcbiAgICByZXR1cm4gdmFsaWRSZS50ZXN0KHRoaXMuY29kZSkgJiZcbiAgICAgIE51bWJlcih0aGlzLmNvZGVbMTJdKSA9PT0gdGhpcy5jaGVja3N1bSgpXG4gIH1cblxuICBjaGVja3N1bSAoKSB7XG4gICAgbGV0IHJlc3VsdCA9IDBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkgKz0gMikge1xuICAgICAgcmVzdWx0ICs9IE51bWJlcih0aGlzLmNvZGVbaV0pXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTI7IGkgKz0gMikge1xuICAgICAgcmVzdWx0ICs9IE51bWJlcih0aGlzLmNvZGVbaV0pICogM1xuICAgIH1cblxuICAgIHJldHVybiAoMTAgLSAocmVzdWx0ICUgMTApKSAlIDEwXG4gIH1cblxuICAvLyBDcmVhdGUgdGhlIGJpbmFyeSByZXByZXNlbnRhdGlvbiBvZiB0aGUgRUFOIGNvZGVcbiAgLy8gbnVtYmVyIG5lZWRzIHRvIGJlIGEgc3RyaW5nXG4gIGVuY29kZSAoKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSByZXR1cm4gdmFyaWFibGVcbiAgICBsZXQgcmVzdWx0ID0gJydcblxuICAgIC8vIEdldCB0aGUgZmlyc3QgZGlnaXQgKGZvciBsYXRlciBkZXRlcm1pbmF0aW9uIG9mIHRoZSBlbmNvZGluZyB0eXBlKVxuICAgIGxldCBmaXJzdERpZ2l0ID0gdGhpcy5jb2RlWzBdXG5cbiAgICAvLyBHZXQgdGhlIG51bWJlciB0byBiZSBlbmNvZGVkIG9uIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIEVBTiBjb2RlXG4gICAgbGV0IGxlZnRTaWRlID0gdGhpcy5jb2RlLnN1YnN0cigxLCA3KVxuXG4gICAgLy8gR2V0IHRoZSBudW1iZXIgdG8gYmUgZW5jb2RlZCBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgRUFOIGNvZGVcbiAgICBsZXQgcmlnaHRTaWRlID0gdGhpcy5jb2RlLnN1YnN0cig3LCA2KVxuXG5cbiAgICAvLyBBZGQgdGhlIHN0YXJ0IGJpdHNcbiAgICByZXN1bHQgKz0gc3RhcnRCaW5cblxuICAgIC8vIEFkZCB0aGUgbGVmdCBzaWRlXG4gICAgcmVzdWx0ICs9IHRoaXMuZW5jb2RlU3RydWN0KGxlZnRTaWRlLCBFQU5zdHJ1Y3RbZmlyc3REaWdpdF0pXG5cbiAgICAvLyBBZGQgdGhlIG1pZGRsZSBiaXRzXG4gICAgcmVzdWx0ICs9IG1pZGRsZUJpblxuXG4gICAgLy8gQWRkIHRoZSByaWdodCBzaWRlXG4gICAgcmVzdWx0ICs9IHRoaXMuZW5jb2RlU3RydWN0KHJpZ2h0U2lkZSwgJ1JSUlJSUicpXG5cbiAgICAvLyBBZGQgdGhlIGVuZCBiaXRzXG4gICAgcmVzdWx0ICs9IGVuZEJpblxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy8gQ29udmVydCBhIG51bWJlciBhcnJheSB0byB0aGUgcmVwcmVzZW50aW5nXG4gIGVuY29kZVN0cnVjdCAoY29kZVBhcnQsIHN0cnVjdCkge1xuICAgIC8vIENyZWF0ZSB0aGUgdmFyaWFibGUgdGhhdCBzaG91bGQgYmUgcmV0dXJuZWQgYXQgdGhlIGVuZCBvZiB0aGUgZnVuY3Rpb25cbiAgICBsZXQgcmVzdWx0ID0gJydcblxuICAgIC8vIExvb3AgYWxsIHRoZSBudW1iZXJzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2RlUGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVXNpbmcgdGhlIEwsIEcgb3IgUiBlbmNvZGluZyBhbmQgYWRkIGl0IHRvIHRoZSByZXR1cm5pbmcgdmFyaWFibGVcbiAgICAgIGlmIChzdHJ1Y3RbaV0gPT09ICdMJykge1xuICAgICAgICByZXN1bHQgKz0gTGJpbmFyeVtjb2RlUGFydFtpXV1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHN0cnVjdFtpXSA9PT0gJ0cnKSB7XG4gICAgICAgIHJlc3VsdCArPSBHYmluYXJ5W2NvZGVQYXJ0W2ldXVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoc3RydWN0W2ldID09PSAnUicpIHtcbiAgICAgICAgcmVzdWx0ICs9IFJiaW5hcnlbY29kZVBhcnRbaV1dXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFQU5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvZW5jb2RpbmdzL2Vhbi5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBFQU4gZnJvbSAnLi9lYW4nXG5cbmNsYXNzIFVQQyBleHRlbmRzIEVBTiB7XG4gIGNvbnN0cnVjdG9yKGNvZGUpIHtcbiAgICBzdXBlcihgMCR7Y29kZX1gKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVQQ1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvdXBjLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24oJGdldFByb3RvdHlwZU9mKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQub2JqZWN0LXNhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX1N5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9TeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgIT09IFwidW5kZWZpbmVkXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLlN5bWJvbDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQud2tzJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5rZXlvZicpXG4gICwgJG5hbWVzICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2V0LW5hbWVzJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vJC5lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIGdldERlc2MgICAgICAgID0gJC5nZXREZXNjXG4gICwgc2V0RGVzYyAgICAgICAgPSAkLnNldERlc2NcbiAgLCBfY3JlYXRlICAgICAgICA9ICQuY3JlYXRlXG4gICwgZ2V0TmFtZXMgICAgICAgPSAkbmFtZXMuZ2V0XG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgc2V0dGVyICAgICAgICAgPSBmYWxzZVxuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBpc0VudW0gICAgICAgICA9ICQuaXNFbnVtXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIHVzZU5hdGl2ZSAgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShzZXREZXNjKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBzZXREZXNjKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdldERlc2MoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgc2V0RGVzYyhpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylzZXREZXNjKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogc2V0RGVzYztcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sLnByb3RvdHlwZSk7XG4gIHN5bS5fayA9IHRhZztcbiAgREVTQ1JJUFRPUlMgJiYgc2V0dGVyICYmIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKXNldERlc2MoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIHNldERlc2MoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSk7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV1cbiAgICA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICB2YXIgRCA9IGdldERlc2MoaXQgPSB0b0lPYmplY3QoaXQpLCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnZXROYW1lcyh0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4pcmVzdWx0LnB1c2goa2V5KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnZXROYW1lcyh0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICB2YXIgYXJncyA9IFtpdF1cbiAgICAsIGkgICAgPSAxXG4gICAgLCAkJCAgID0gYXJndW1lbnRzXG4gICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICB3aGlsZSgkJC5sZW5ndGggPiBpKWFyZ3MucHVzaCgkJFtpKytdKTtcbiAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICB9O1xuICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbn07XG52YXIgYnVnZ3lKU09OID0gJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pO1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCF1c2VOYXRpdmUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYoaXNTeW1ib2wodGhpcykpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcbiAgICByZXR1cm4gd3JhcCh1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gIGlzU3ltYm9sID0gZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG4gIH07XG5cbiAgJC5jcmVhdGUgICAgID0gJGNyZWF0ZTtcbiAgJC5pc0VudW0gICAgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAkLmdldERlc2MgICAgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkLnNldERlc2MgICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gICQuc2V0RGVzY3MgICA9ICRkZWZpbmVQcm9wZXJ0aWVzO1xuICAkLmdldE5hbWVzICAgPSAkbmFtZXMuZ2V0ID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gICQuZ2V0U3ltYm9scyA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vJC5saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG59XG5cbnZhciBzeW1ib2xTdGF0aWNzID0ge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIHJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59O1xuLy8gMTkuNC4yLjIgU3ltYm9sLmhhc0luc3RhbmNlXG4vLyAxOS40LjIuMyBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlXG4vLyAxOS40LjIuNCBTeW1ib2wuaXRlcmF0b3Jcbi8vIDE5LjQuMi42IFN5bWJvbC5tYXRjaFxuLy8gMTkuNC4yLjggU3ltYm9sLnJlcGxhY2Vcbi8vIDE5LjQuMi45IFN5bWJvbC5zZWFyY2hcbi8vIDE5LjQuMi4xMCBTeW1ib2wuc3BlY2llc1xuLy8gMTkuNC4yLjExIFN5bWJvbC5zcGxpdFxuLy8gMTkuNC4yLjEyIFN5bWJvbC50b1ByaW1pdGl2ZVxuLy8gMTkuNC4yLjEzIFN5bWJvbC50b1N0cmluZ1RhZ1xuLy8gMTkuNC4yLjE0IFN5bWJvbC51bnNjb3BhYmxlc1xuJC5lYWNoLmNhbGwoKFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLCcgK1xuICAnc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgZnVuY3Rpb24oaXQpe1xuICB2YXIgc3ltID0gd2tzKGl0KTtcbiAgc3ltYm9sU3RhdGljc1tpdF0gPSB1c2VOYXRpdmUgPyBzeW0gOiB3cmFwKHN5bSk7XG59KTtcblxuc2V0dGVyID0gdHJ1ZTtcblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTeW1ib2wnLCBzeW1ib2xTdGF0aWNzKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhdXNlTmF0aXZlLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghdXNlTmF0aXZlIHx8IGJ1Z2d5SlNPTiksICdKU09OJywge3N0cmluZ2lmeTogJHN0cmluZ2lmeX0pO1xuXG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVzY3JpcHRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuaGlkZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vJCcpLnNldERlc2NcbiAgLCBoYXMgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXRvLXN0cmluZy10YWcuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHN0b3JlICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCBTeW1ib2wgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuU3ltYm9sO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgU3ltYm9sICYmIFN5bWJvbFtuYW1lXSB8fCAoU3ltYm9sIHx8IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC53a3MuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudWlkLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQua2V5b2YuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCBnZXROYW1lcyAgPSByZXF1aXJlKCcuLyQnKS5nZXROYW1lc1xuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdldE5hbWVzKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIGlmKHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nKXJldHVybiBnZXRXaW5kb3dOYW1lcyhpdCk7XG4gIHJldHVybiBnZXROYW1lcyh0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2V0LW5hbWVzLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrZXlzICAgICAgID0gJC5nZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gJC5pc0VudW1cbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlrZXlzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZW51bS1rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmxpYnJhcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuLyQuc2V0LXByb3RvJykuc2V0fSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgZ2V0RGVzYyAgPSByZXF1aXJlKCcuLyQnKS5nZXREZXNjXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuLyQuY3R4JykoRnVuY3Rpb24uY2FsbCwgZ2V0RGVzYyhPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC1wcm90by5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICQuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy9UaGUgc3RydWN0dXJlIGZvciB0aGUgYWxsIGRpZ2l0cywgMSBpcyB3aWRlIGFuZCAwIGlzIG5hcnJvd1xuY29uc3QgZGlnaXRTdHJ1Y3R1cmUgPSB7XG4gIDA6ICcwMDExMCcsXG4gIDE6ICcxMDAwMScsXG4gIDI6ICcwMTAwMScsXG4gIDM6ICcxMTAwMCcsXG4gIDQ6ICcwMDEwMScsXG4gIDU6ICcxMDEwMCcsXG4gIDY6ICcwMTEwMCcsXG4gIDc6ICcwMDAxMScsXG4gIDg6ICcxMDAxMCcsXG4gIDk6ICcwMTAxMCdcbn1cblxuLy8gVGhlIHN0YXJ0IGJpdHNcbmNvbnN0IHN0YXJ0QmluID0gJzEwMTAnXG4vLyBUaGUgZW5kIGJpdHNcbmNvbnN0IGVuZEJpbiA9ICcxMTEwMSdcblxuLy8gUmVnZXhwIGZvciBhIHZhbGlkIEludGVyMjUgY29kZVxuY29uc3QgdmFsaWRSZSA9IC9eKFswLTldWzAtOV0pKyQvXG5cbmNsYXNzIElURiB7XG4gIGNvbnN0cnVjdG9yIChjb2RlKSB7XG4gICAgdGhpcy5jb2RlID0gU3RyaW5nKGNvZGUpXG4gIH1cblxuICBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB2YWxpZFJlLnRlc3QodGhpcy5jb2RlKVxuICB9XG5cbiAgZW5jb2RlKCkge1xuICAgIC8vIENyZWF0ZSB0aGUgdmFyaWFibGUgdGhhdCBzaG91bGQgYmUgcmV0dXJuZWQgYXQgdGhlIGVuZCBvZiB0aGUgZnVuY3Rpb25cbiAgICBsZXQgcmVzdWx0ID0gJydcblxuICAgIC8vIEFsd2F5cyBhZGQgdGhlIHNhbWUgc3RhcnQgYml0c1xuICAgIHJlc3VsdCArPSBzdGFydEJpblxuXG4gICAgLy8gQ2FsY3VsYXRlIGFsbCB0aGUgZGlnaXQgcGFpcnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29kZS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgcmVzdWx0ICs9IHRoaXMuY2FsY3VsYXRlUGFpcih0aGlzLmNvZGUuc3Vic3RyKGksIDIpKVxuICAgIH1cblxuICAgIC8vIEFsd2F5cyBhZGQgdGhlIHNhbWUgZW5kIGJpdHNcbiAgICByZXN1bHQgKz0gZW5kQmluXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjYWxjdWxhdGVQYWlyICh0d29OdW1iZXJzKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnXG5cbiAgICBsZXQgbnVtYmVyMVN0cnVjdCA9IGRpZ2l0U3RydWN0dXJlW3R3b051bWJlcnNbMF1dXG4gICAgbGV0IG51bWJlcjJTdHJ1Y3QgPSBkaWdpdFN0cnVjdHVyZVt0d29OdW1iZXJzWzFdXVxuXG4gICAgLy8gVGFrZSBldmVyeSBzZWNvbmQgYml0IGFuZCBhZGQgdG8gdGhlIHJlc3VsdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gKG51bWJlcjFTdHJ1Y3RbaV0gPT09ICcxJykgPyAnMTExJyA6ICcxJ1xuICAgICAgcmVzdWx0ICs9IChudW1iZXIyU3RydWN0W2ldID09PSAnMScpID8gJzAwMCcgOiAnMCdcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSVRGXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy9pdGYuanNcbiAqKi8iLCJpbXBvcnQgSVRGIGZyb20gJy4vaXRmJ1xuXG5jb25zdCB2YWxpZFJlID0gL15bMC05XXsxMywxNH0kL1xuXG5jbGFzcyBJVEYxNCBleHRlbmRzIElURiB7XG4gIGNvbnN0cnVjdG9yKGNvZGUpIHtcbiAgICBzdXBlcihjb2RlKVxuXG4gICAgaWYgKGNvZGUubGVuZ3RoID09PSAxMykge1xuICAgICAgdGhpcy5jb2RlICs9IHRoaXMuY2hlY2tzdW0oKVxuICAgIH1cbiAgfVxuXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmlzVmFsaWQoKSAmJiB2YWxpZFJlLnRlc3QodGhpcy5jb2RlKSAmJlxuICAgICAgTnVtYmVyKHRoaXMuY29kZVsxM10pID09PSB0aGlzLmNoZWNrc3VtKClcbiAgfVxuXG4gIGNoZWNrc3VtKCkge1xuICAgIGxldCByZXN1bHQgPSAwXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEzOyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSBOdW1iZXIodGhpcy5jb2RlW2ldKSAqICgzIC0gKGkgJSAyKSAqIDIpXG4gICAgfVxuXG4gICAgcmV0dXJuIDEwIC0gKHJlc3VsdCAlIDEwKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElURjE0XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy9pdGYxNC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE93blByb3BlcnR5RGVzY3JpcHRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyLmRlZmF1bHQpKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkLmdldERlc2MoaXQsIGtleSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oJGdldE93blByb3BlcnR5RGVzY3JpcHRvcil7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJjb25zdCBjb2RlMzkgPSB7XG4gICcwJzogJzEwMTAwMDExMTAxMTEwMScsXG4gICcxJzogJzExMTAxMDAwMTAxMDExMScsXG4gICcyJzogJzEwMTExMDAwMTAxMDExMScsXG4gICczJzogJzExMTAxMTEwMDAxMDEwMScsXG4gICc0JzogJzEwMTAwMDExMTAxMDExMScsXG4gICc1JzogJzExMTAxMDAwMTExMDEwMScsXG4gICc2JzogJzEwMTExMDAwMTExMDEwMScsXG4gICc3JzogJzEwMTAwMDEwMTExMDExMScsXG4gICc4JzogJzExMTAxMDAwMTAxMTEwMScsXG4gICc5JzogJzEwMTExMDAwMTAxMTEwMScsXG4gICdBJzogJzExMTAxMDEwMDAxMDExMScsXG4gICdCJzogJzEwMTExMDEwMDAxMDExMScsXG4gICdDJzogJzExMTAxMTEwMTAwMDEwMScsXG4gICdEJzogJzEwMTAxMTEwMDAxMDExMScsXG4gICdFJzogJzExMTAxMDExMTAwMDEwMScsXG4gICdGJzogJzEwMTExMDExMTAwMDEwMScsXG4gICdHJzogJzEwMTAxMDAwMTExMDExMScsXG4gICdIJzogJzExMTAxMDEwMDAxMTEwMScsXG4gICdJJzogJzEwMTExMDEwMDAxMTEwMScsXG4gICdKJzogJzEwMTAxMTEwMDAxMTEwMScsXG4gICdLJzogJzExMTAxMDEwMTAwMDExMScsXG4gICdMJzogJzEwMTExMDEwMTAwMDExMScsXG4gICdNJzogJzExMTAxMTEwMTAxMDAwMScsXG4gICdOJzogJzEwMTAxMTEwMTAwMDExMScsXG4gICdPJzogJzExMTAxMDExMTAxMDAwMScsXG4gICdQJzogJzEwMTExMDExMTAxMDAwMScsXG4gICdRJzogJzEwMTAxMDExMTAwMDExMScsXG4gICdSJzogJzExMTAxMDEwMTExMDAwMScsXG4gICdTJzogJzEwMTExMDEwMTExMDAwMScsXG4gICdUJzogJzEwMTAxMTEwMTExMDAwMScsXG4gICdVJzogJzExMTAwMDEwMTAxMDExMScsXG4gICdWJzogJzEwMDAxMTEwMTAxMDExMScsXG4gICdXJzogJzExMTAwMDExMTAxMDEwMScsXG4gICdYJzogJzEwMDAxMDExMTAxMDExMScsXG4gICdZJzogJzExMTAwMDEwMTExMDEwMScsXG4gICdaJzogJzEwMDAxMTEwMTExMDEwMScsXG4gICctJzogJzEwMDAxMDEwMTExMDExMScsXG4gICcuJzogJzExMTAwMDEwMTAxMTEwMScsXG4gICcgJzogJzEwMDAxMTEwMTAxMTEwMScsXG4gICckJzogJzEwMDAxMDAwMTAwMDEwMScsXG4gICcvJzogJzEwMDAxMDAwMTAxMDAwMScsXG4gICcrJzogJzEwMDAxMDEwMDAxMDAwMScsXG4gICclJzogJzEwMTAwMDEwMDAxMDAwMSdcbn1cblxuY29uc3QgdmFsaWRSZSA9IC9eWzAtOWEtekEtWlxcLVxcLlxcIFxcJFxcL1xcK1xcJV0rJC9cblxuY2xhc3MgQ09ERTM5IHtcbiAgY29uc3RydWN0b3IgKGNvZGUpIHtcbiAgICB0aGlzLmNvZGUgPSBTdHJpbmcoY29kZSlcbiAgfVxuXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHZhbGlkUmUudGVzdCh0aGlzLmNvZGUpXG4gIH1cblxuICBlbmNvZGUoKSB7XG4gICAgbGV0IHN0cmluZyA9IHRoaXMuY29kZS50b1VwcGVyQ2FzZSgpXG5cbiAgICBsZXQgcmVzdWx0ID0gJydcbiAgICByZXN1bHQgKz0gJzEwMDAxMDExMTAxMTEwMTAnXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSB0aGlzLmVuY29kaW5nQnlDaGFyKHN0cmluZ1tpXSkgKyAnMCdcbiAgICB9XG4gICAgcmVzdWx0ICs9ICcxMDAwMTAxMTEwMTExMDEwJ1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGVuY29kaW5nQnlDaGFyIChjaGFyKSB7XG4gICAgcmV0dXJuIGNvZGUzOVtjaGFyXSB8fCAnJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENPREUzOVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvZW5jb2RpbmdzL2NvZGUzOS5qc1xuICoqLyIsImltcG9ydCBDT0RFMTI4IGZyb20gJy4vY29kZTEyOCdcblxuY2xhc3MgQ09ERTEyOEIgZXh0ZW5kcyBDT0RFMTI4IHtcbiAgY29uc3RydWN0b3IgKGNvZGUpIHtcbiAgICBzdXBlcihjb2RlKVxuICAgIHRoaXMuc3RhcnRDb2RlID0gMTA0XG4gIH1cblxuICBlbmNvZGVDbGFzcyAoKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSBzdXBlci5lbmNvZGluZ0J5Q2hhcih0aGlzLmNvZGVbaV0pXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNoZWNrc3VtKCkge1xuICAgIGxldCBzdW0gPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN1bSArPSBzdXBlci53ZWlnaHRCeUNoYXJhY3Rlcih0aGlzLmNvZGVbaV0pICogKGkgKyAxKVxuICAgIH1cbiAgICByZXR1cm4gKHN1bSArIHRoaXMuc3RhcnRDb2RlKSAlIDEwM1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENPREUxMjhCXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy9jb2RlMTI4Yi5qc1xuICoqLyIsIi8vIERhdGEgZm9yIGVhY2ggY2hhcmFjdGVyXG4vLyBUaGUgbGFzdCBjaGFyYWN0ZXJzIHdpbGwgbm90IGJlIGVuY29kZWQgYnV0IGFyZSB1c2VkIGZvciBlcnJvciBjb3JyZWN0aW9uXG5jb25zdCBjb2RlMTI4YiA9IHtcbiAgICcgJzogWyAnMTEwMTEwMDExMDAnLCAwIF0sXG4gICAnISc6IFsgJzExMDAxMTAxMTAwJywgMSBdLFxuICAgJ1wiJzogWyAnMTEwMDExMDAxMTAnLCAyIF0sXG4gICAnIyc6IFsgJzEwMDEwMDExMDAwJywgMyBdLFxuICAgJyQnOiBbICcxMDAxMDAwMTEwMCcsIDQgXSxcbiAgICclJzogWyAnMTAwMDEwMDExMDAnLCA1IF0sXG4gICAnJic6IFsgJzEwMDExMDAxMDAwJywgNiBdLFxuICAgJ1xcJyc6IFsgJzEwMDExMDAwMTAwJywgNyBdLFxuICAgJygnOiBbICcxMDAwMTEwMDEwMCcsIDggXSxcbiAgICcpJzogWyAnMTEwMDEwMDEwMDAnLCA5IF0sXG4gICAnKic6IFsgJzExMDAxMDAwMTAwJywgMTAgXSxcbiAgICcrJzogWyAnMTEwMDAxMDAxMDAnLCAxMSBdLFxuICAgJywnOiBbICcxMDExMDAxMTEwMCcsIDEyIF0sXG4gICAnLSc6IFsgJzEwMDExMDExMTAwJywgMTMgXSxcbiAgICcuJzogWyAnMTAwMTEwMDExMTAnLCAxNCBdLFxuICAgJy8nOiBbICcxMDExMTAwMTEwMCcsIDE1IF0sXG4gICAnMCc6IFsgJzEwMDExMTAxMTAwJywgMTYgXSxcbiAgICcxJzogWyAnMTAwMTExMDAxMTAnLCAxNyBdLFxuICAgJzInOiBbICcxMTAwMTExMDAxMCcsIDE4IF0sXG4gICAnMyc6IFsgJzExMDAxMDExMTAwJywgMTkgXSxcbiAgICc0JzogWyAnMTEwMDEwMDExMTAnLCAyMCBdLFxuICAgJzUnOiBbICcxMTAxMTEwMDEwMCcsIDIxIF0sXG4gICAnNic6IFsgJzExMDAxMTEwMTAwJywgMjIgXSxcbiAgICc3JzogWyAnMTExMDExMDExMTAnLCAyMyBdLFxuICAgJzgnOiBbICcxMTEwMTAwMTEwMCcsIDI0IF0sXG4gICAnOSc6IFsgJzExMTAwMTAxMTAwJywgMjUgXSxcbiAgICc6JzogWyAnMTExMDAxMDAxMTAnLCAyNiBdLFxuICAgJzsnOiBbICcxMTEwMTEwMDEwMCcsIDI3IF0sXG4gICAnPCc6IFsgJzExMTAwMTEwMTAwJywgMjggXSxcbiAgICc9JzogWyAnMTExMDAxMTAwMTAnLCAyOSBdLFxuICAgJz4nOiBbICcxMTAxMTAxMTAwMCcsIDMwIF0sXG4gICAnPyc6IFsgJzExMDExMDAwMTEwJywgMzEgXSxcbiAgICdAJzogWyAnMTEwMDAxMTAxMTAnLCAzMiBdLFxuICAgJ0EnOiBbICcxMDEwMDAxMTAwMCcsIDMzIF0sXG4gICAnQic6IFsgJzEwMDAxMDExMDAwJywgMzQgXSxcbiAgICdDJzogWyAnMTAwMDEwMDAxMTAnLCAzNSBdLFxuICAgJ0QnOiBbICcxMDExMDAwMTAwMCcsIDM2IF0sXG4gICAnRSc6IFsgJzEwMDAxMTAxMDAwJywgMzcgXSxcbiAgICdGJzogWyAnMTAwMDExMDAwMTAnLCAzOCBdLFxuICAgJ0cnOiBbICcxMTAxMDAwMTAwMCcsIDM5IF0sXG4gICAnSCc6IFsgJzExMDAwMTAxMDAwJywgNDAgXSxcbiAgICdJJzogWyAnMTEwMDAxMDAwMTAnLCA0MSBdLFxuICAgJ0onOiBbICcxMDExMDExMTAwMCcsIDQyIF0sXG4gICAnSyc6IFsgJzEwMTEwMDAxMTEwJywgNDMgXSxcbiAgICdMJzogWyAnMTAwMDExMDExMTAnLCA0NCBdLFxuICAgJ00nOiBbICcxMDExMTAxMTAwMCcsIDQ1IF0sXG4gICAnTic6IFsgJzEwMTExMDAwMTEwJywgNDYgXSxcbiAgICdPJzogWyAnMTAwMDExMTAxMTAnLCA0NyBdLFxuICAgJ1AnOiBbICcxMTEwMTExMDExMCcsIDQ4IF0sXG4gICAnUSc6IFsgJzExMDEwMDAxMTEwJywgNDkgXSxcbiAgICdSJzogWyAnMTEwMDAxMDExMTAnLCA1MCBdLFxuICAgJ1MnOiBbICcxMTAxMTEwMTAwMCcsIDUxIF0sXG4gICAnVCc6IFsgJzExMDExMTAwMDEwJywgNTIgXSxcbiAgICdVJzogWyAnMTEwMTExMDExMTAnLCA1MyBdLFxuICAgJ1YnOiBbICcxMTEwMTAxMTAwMCcsIDU0IF0sXG4gICAnVyc6IFsgJzExMTAxMDAwMTEwJywgNTUgXSxcbiAgICdYJzogWyAnMTExMDAwMTAxMTAnLCA1NiBdLFxuICAgJ1knOiBbICcxMTEwMTEwMTAwMCcsIDU3IF0sXG4gICAnWic6IFsgJzExMTAxMTAwMDEwJywgNTggXSxcbiAgICcnOiBbICcxMTEwMDAxMTAxMCcsIDU5IF0sXG4gICAnXFxcXCc6IFsgJzExMTAxMTExMDEwJywgNjAgXSxcbiAgICddJzogWyAnMTEwMDEwMDAwMTAnLCA2MSBdLFxuICAgJ14nOiBbICcxMTExMDAwMTAxMCcsIDYyIF0sXG4gICAnXyc6IFsgJzEwMTAwMTEwMDAwJywgNjMgXSxcbiAgICdgJzogWyAnMTAxMDAwMDExMDAnLCA2NCBdLFxuICAgJ2EnOiBbICcxMDAxMDExMDAwMCcsIDY1IF0sXG4gICAnYic6IFsgJzEwMDEwMDAwMTEwJywgNjYgXSxcbiAgICdjJzogWyAnMTAwMDAxMDExMDAnLCA2NyBdLFxuICAgJ2QnOiBbICcxMDAwMDEwMDExMCcsIDY4IF0sXG4gICAnZSc6IFsgJzEwMTEwMDEwMDAwJywgNjkgXSxcbiAgICdmJzogWyAnMTAxMTAwMDAxMDAnLCA3MCBdLFxuICAgJ2cnOiBbICcxMDAxMTAxMDAwMCcsIDcxIF0sXG4gICAnaCc6IFsgJzEwMDExMDAwMDEwJywgNzIgXSxcbiAgICdpJzogWyAnMTAwMDAxMTAxMDAnLCA3MyBdLFxuICAgJ2onOiBbICcxMDAwMDExMDAxMCcsIDc0IF0sXG4gICAnayc6IFsgJzExMDAwMDEwMDEwJywgNzUgXSxcbiAgICdsJzogWyAnMTEwMDEwMTAwMDAnLCA3NiBdLFxuICAgJ20nOiBbICcxMTExMDExMTAxMCcsIDc3IF0sXG4gICAnbic6IFsgJzExMDAwMDEwMTAwJywgNzggXSxcbiAgICdvJzogWyAnMTAwMDExMTEwMTAnLCA3OSBdLFxuICAgJ3AnOiBbICcxMDEwMDExMTEwMCcsIDgwIF0sXG4gICAncSc6IFsgJzEwMDEwMTExMTAwJywgODEgXSxcbiAgICdyJzogWyAnMTAwMTAwMTExMTAnLCA4MiBdLFxuICAgJ3MnOiBbICcxMDExMTEwMDEwMCcsIDgzIF0sXG4gICAndCc6IFsgJzEwMDExMTEwMTAwJywgODQgXSxcbiAgICd1JzogWyAnMTAwMTExMTAwMTAnLCA4NSBdLFxuICAgJ3YnOiBbICcxMTExMDEwMDEwMCcsIDg2IF0sXG4gICAndyc6IFsgJzExMTEwMDEwMTAwJywgODcgXSxcbiAgICd4JzogWyAnMTExMTAwMTAwMTAnLCA4OCBdLFxuICAgJ3knOiBbICcxMTAxMTAxMTExMCcsIDg5IF0sXG4gICAneic6IFsgJzExMDExMTEwMTEwJywgOTAgXSxcbiAgICd7JzogWyAnMTExMTAxMTAxMTAnLCA5MSBdLFxuICAgJ3wnOiBbICcxMDEwMTExMTAwMCcsIDkyIF0sXG4gICAnfSc6IFsgJzEwMTAwMDExMTEwJywgOTMgXSxcbiAgICd+JzogWyAnMTAwMDEwMTExMTAnLCA5NCBdLFxuICAgW1N0cmluZy5mcm9tQ2hhckNvZGUoMTI3KV06IFsgJzEwMTExMTAxMDAwJywgOTUgXSxcbiAgIFtTdHJpbmcuZnJvbUNoYXJDb2RlKDEyOCldOiBbICcxMDExMTEwMDAxMCcsIDk2IF0sXG4gICBbU3RyaW5nLmZyb21DaGFyQ29kZSgxMjkpXTogWyAnMTExMTAxMDEwMDAnLCA5NyBdLFxuICAgW1N0cmluZy5mcm9tQ2hhckNvZGUoMTMwKV06IFsgJzExMTEwMTAwMDEwJywgOTggXSxcbiAgIFtTdHJpbmcuZnJvbUNoYXJDb2RlKDEzMSldOiBbICcxMDExMTAxMTExMCcsIDk5IF0sXG4gICBbU3RyaW5nLmZyb21DaGFyQ29kZSgxMzIpXTogWyAnMTAxMTExMDExMTAnLCAxMDAgXSxcbiAgIFtTdHJpbmcuZnJvbUNoYXJDb2RlKDEzMyldOiBbICcxMTEwMTAxMTExMCcsIDEwMSBdLFxuICAgW1N0cmluZy5mcm9tQ2hhckNvZGUoMTM0KV06IFsgJzExMTEwMTAxMTEwJywgMTAyIF0sXG4gICAvL1N0YXJ0IGNvZGVzXG4gICBbU3RyaW5nLmZyb21DaGFyQ29kZSgxMzUpXTogWyAnMTEwMTAwMDAxMDAnLCAxMDMgXSxcbiAgIFtTdHJpbmcuZnJvbUNoYXJDb2RlKDEzNildOiBbICcxMTAxMDAxMDAwMCcsIDEwNCBdLFxuICAgW1N0cmluZy5mcm9tQ2hhckNvZGUoMTM3KV06IFsgJzExMDEwMDExMTAwJywgMTA1IF1cbn1cblxuY29uc3QgZW5kQmluID0gJzExMDAwMTExMDEwMTEnXG5jb25zdCB2YWxpZFJlID0gL15bIS1+IF0rJC9cblxuY2xhc3MgQ09ERTEyOCB7XG4gIGNvbnN0cnVjdG9yIChjb2RlKSB7XG4gICAgdGhpcy5jb2RlID0gU3RyaW5nKGNvZGUpXG4gIH1cblxuICBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB2YWxpZFJlLnRlc3QodGhpcy5jb2RlKVxuICB9XG5cbiAgZW5jb2RlKCkge1xuICAgIGxldCByZXN1bHQgPSAnJ1xuXG4gICAgLy9BZGQgdGhlIHN0YXJ0IGJpdHNcbiAgICByZXN1bHQgKz0gdGhpcy5lbmNvZGluZ0J5SWQodGhpcy5zdGFydENvZGUpXG5cbiAgICAvL0FkZCB0aGUgZW5jb2RlZCBiaXRzXG4gICAgcmVzdWx0ICs9IHRoaXMuZW5jb2RlQ2xhc3MoKVxuXG4gICAgLy9BZGQgdGhlIGNoZWNrc3VtXG4gICAgcmVzdWx0ICs9IHRoaXMuZW5jb2RpbmdCeUlkKHRoaXMuY2hlY2tzdW0oKSlcblxuICAgIC8vQWRkIHRoZSBlbmQgYml0c1xuICAgIHJlc3VsdCArPSBlbmRCaW5cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGVuY29kaW5nQnlJZCAoaWQpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gY29kZTEyOGIpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGNvZGUxMjhiW2tleV1cbiAgICAgICAgaWYgKGNvZGVbMV0gPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29kZVswXVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgd2VpZ2h0QnlDaGFyYWN0ZXIgKGNoYXIpIHtcbiAgICBjb25zdCBjb2RlID0gY29kZTEyOGJbY2hhcl1cbiAgICBpZiAoIWNvZGUpIHJldHVybiAwXG4gICAgcmV0dXJuIGNvZGVbMV1cbiAgfVxuXG4gIGVuY29kaW5nQnlDaGFyIChjaGFyKSB7XG4gICAgY29uc3QgY29kZSA9IGNvZGUxMjhiW2NoYXJdXG4gICAgaWYgKCFjb2RlKSByZXR1cm4gJydcbiAgICByZXR1cm4gY29kZVswXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENPREUxMjhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvY29kZTEyOC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgQ09ERTEyOCBmcm9tICcuL2NvZGUxMjgnXG5cbmNsYXNzIENPREUxMjhDIGV4dGVuZHMgQ09ERTEyOCB7XG4gIGNvbnN0cnVjdG9yIChjb2RlKSB7XG4gICAgc3VwZXIoY29kZSlcbiAgICB0aGlzLmNvZGUgPSB0aGlzLmNvZGUucmVwbGFjZSgvIC9nLCAnJylcbiAgICB0aGlzLnN0YXJ0Q29kZSA9IDEwNVxuICB9XG5cbiAgZW5jb2RlQ2xhc3MgKCkge1xuICAgIGxldCByZXN1bHQgPSAnJ1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvZGUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHJlc3VsdCArPSBzdXBlci5lbmNvZGluZ0J5SWQoTnVtYmVyKHRoaXMuY29kZS5zdWJzdHIoaSwgMikpKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjaGVja3N1bSgpIHtcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCB3ID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2RlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBzdW0gKz0gTnVtYmVyKHRoaXMuY29kZS5zdWJzdHIoaSwgMikpICogKHcpXG4gICAgICB3KytcbiAgICB9XG4gICAgcmV0dXJuIChzdW0gKyB0aGlzLnN0YXJ0Q29kZSkgJSAxMDNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDT0RFMTI4Q1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvY29kZTEyOGMuanNcbiAqKi8iLCJpbXBvcnQgcmVwZWF0IGZyb20gJ2NvcmUtanMvbGlicmFyeS9mbi9zdHJpbmcvcmVwZWF0J1xuXG5jbGFzcyBQaGFybWFjb2RlIHtcbiAgY29uc3RydWN0b3IgKGNvZGUpIHtcbiAgICB0aGlzLmNvZGUgPSBOdW1iZXIoY29kZSlcbiAgfVxuXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29kZSA+PSAzICYmIHRoaXMuY29kZSA8PSAxMzEwNzBcbiAgfVxuXG4gIC8vIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgemVyb3MgYXQgdGhlIGVuZCBvZiBhIHN0cmluZ1xuICBfY2FsY1plcm9zIChjb2RlKSB7XG4gICAgbGV0IGkgPSBjb2RlLmxlbmd0aCAtIDFcbiAgICBsZXQgemVyb3MgPSAwXG4gICAgd2hpbGUgKGNvZGVbaV0gPT09ICcwJyB8fCBpIDwgMCl7XG4gICAgICB6ZXJvcysrXG4gICAgICBpLS1cbiAgICB9XG4gICAgcmV0dXJuIHplcm9zXG4gIH1cblxuICBlbmNvZGVCaW5hcnkgKGNvZGUsIHN0YXRlKSB7XG4gICAgaWYgKGNvZGUubGVuZ3RoID09PSAwKSByZXR1cm4gJydcblxuICAgIGxldCBnZW5lcmF0ZWRcbiAgICBsZXQgbmV4dFN0YXRlID0gZmFsc2VcbiAgICBsZXQgblplcm9zID0gdGhpcy5fY2FsY1plcm9zKGNvZGUpXG5cbiAgICBpZiAoblplcm9zID09PSAwKSB7XG4gICAgICBnZW5lcmF0ZWQgPSBzdGF0ZSA/ICcwMDEnIDogJzAwMTExJ1xuICAgICAgbmV4dFN0YXRlID0gc3RhdGVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBnZW5lcmF0ZWQgPSByZXBlYXQoJzAwMScsIG5aZXJvcyAtIChzdGF0ZSA/IDEgOiAwKSlcbiAgICAgIGdlbmVyYXRlZCArPSAnMDAxMTEnXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuY29kZUJpbmFyeShjb2RlLnN1YnN0cigwLCBjb2RlLmxlbmd0aCAtIG5aZXJvcyAtIDEpLCBuZXh0U3RhdGUpICsgZ2VuZXJhdGVkXG4gIH1cblxuICBlbmNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5jb2RlQmluYXJ5KHRoaXMuY29kZS50b1N0cmluZygyKSwgdHJ1ZSkuc3Vic3RyKDIpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGhhcm1hY29kZVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvcGhhcm1hY29kZS5qc1xuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN0cmluZy5yZXBlYXQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N0cmluZy9yZXBlYXQuanNcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcbiAgcmVwZWF0OiByZXF1aXJlKCcuL19zdHJpbmctcmVwZWF0Jylcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0LmpzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuICoqIG1vZHVsZSBpZCA9IDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjAuMyd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSA3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi9fJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4gKiogbW9kdWxlIGlkID0gNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL18uanNcbiAqKiBtb2R1bGUgaWQgPSA3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiogbW9kdWxlIGlkID0gNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpe1xuICB2YXIgc3RyID0gU3RyaW5nKGRlZmluZWQodGhpcykpXG4gICAgLCByZXMgPSAnJ1xuICAgICwgbiAgID0gdG9JbnRlZ2VyKGNvdW50KTtcbiAgaWYobiA8IDAgfHwgbiA9PSBJbmZpbml0eSl0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XG4gIGZvcig7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKWlmKG4gJiAxKXJlcyArPSBzdHI7XG4gIHJldHVybiByZXM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctcmVwZWF0LmpzXG4gKiogbW9kdWxlIGlkID0gODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDgyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA4M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXHJcbnZhciBDYW52YXMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENhbnZhcyAodywgaCkge1xyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxyXG4gIGNhbnZhcy53aWR0aCA9IHcgfHwgMzAwXHJcbiAgY2FudmFzLmhlaWdodCA9IGggfHwgMTUwXHJcbiAgcmV0dXJuIGNhbnZhc1xyXG59XHJcblxyXG5DYW52YXMuSW1hZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgcmV0dXJuIGltZ1xyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NhbnZhcy1icm93c2VyaWZ5L2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA4NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==