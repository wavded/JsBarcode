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
	
	var _Object$assign = __webpack_require__(1)['default'];
	
	var _interopRequireDefault = __webpack_require__(9)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _encodings = __webpack_require__(10);
	
	var _encodings2 = _interopRequireDefault(_encodings);
	
	var _canvasBrowserify = __webpack_require__(35);
	
	var _canvasBrowserify2 = _interopRequireDefault(_canvasBrowserify);
	
	var api = {};
	
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
	
		ctx.font = opts.fontSize + 'px ' + opts.font;
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
		opts = _Object$assign({}, defaults, opts);
	
		var canvas = new _canvasBrowserify2['default']();
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
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(5).core.Object.assign;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(4);
	$def($def.S, 'Object', {assign: __webpack_require__(7)});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(5)
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
	    , isProto  = type & $def.P
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
	    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 5 */
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
	
	var $ = module.exports = __webpack_require__(6)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
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
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(5)
	  , enumKeys = __webpack_require__(8);
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(5);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getDesc    = $.getDesc
	    , getSymbols = $.getSymbols;
	  if(getSymbols)$.each.call(getSymbols(it), function(key){
	    if(getDesc(it, key).enumerable)keys.push(key);
	  });
	  return keys;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(9)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _ean = __webpack_require__(11);
	
	var _ean2 = _interopRequireDefault(_ean);
	
	var _upc = __webpack_require__(16);
	
	var _upc2 = _interopRequireDefault(_upc);
	
	var _itf = __webpack_require__(25);
	
	var _itf2 = _interopRequireDefault(_itf);
	
	var _itf14 = __webpack_require__(26);
	
	var _itf142 = _interopRequireDefault(_itf14);
	
	var _code39 = __webpack_require__(27);
	
	var _code392 = _interopRequireDefault(_code39);
	
	var _code128b = __webpack_require__(28);
	
	var _code128b2 = _interopRequireDefault(_code128b);
	
	var _code128c = __webpack_require__(30);
	
	var _code128c2 = _interopRequireDefault(_code128c);
	
	var _pharmacode = __webpack_require__(31);
	
	var _pharmacode2 = _interopRequireDefault(_pharmacode);
	
	exports['default'] = {
	  EAN: _ean2['default'],
	  UPC: _upc2['default'],
	  ITF: _itf2['default'],
	  ITF14: _itf142['default'],
	  CODE39: _code392['default'],
	  CODE128B: _code128b2['default'],
	  CODE128C: _code128c2['default'],
	  Pharmacode: _pharmacode2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// The L (left) type of encoding
	'use strict';
	
	var _createClass = __webpack_require__(12)['default'];
	
	var _classCallCheck = __webpack_require__(15)['default'];
	
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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(13)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(5);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(17)['default'];
	
	var _get = __webpack_require__(20)['default'];
	
	var _classCallCheck = __webpack_require__(15)['default'];
	
	var _interopRequireDefault = __webpack_require__(9)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _ean = __webpack_require__(11);
	
	var _ean2 = _interopRequireDefault(_ean);
	
	var UPC = (function (_EAN) {
	  function UPC(code) {
	    _classCallCheck(this, UPC);
	
	    _get(Object.getPrototypeOf(UPC.prototype), 'constructor', this).call(this, '0' + code);
	  }
	
	  _inherits(UPC, _EAN);
	
	  return UPC;
	})(_ean2['default']);
	
	exports['default'] = UPC;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(18)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(5);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(21)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
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
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(5);
	__webpack_require__(23);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(5)
	  , $def     = __webpack_require__(4)
	  , isObject = $.isObject
	  , toObject = $.toObject;
	$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
	  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
	, function(KEY, ID){
	  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
	    , forced = 0
	    , method = {};
	  method[KEY] = ID == 0 ? function freeze(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 1 ? function seal(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 2 ? function preventExtensions(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 3 ? function isFrozen(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 4 ? function isSealed(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 5 ? function isExtensible(it){
	    return isObject(it) ? fn(it) : false;
	  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
	    return fn(toObject(it), key);
	  } : ID == 7 ? function getPrototypeOf(it){
	    return fn(Object($.assertDefined(it)));
	  } : ID == 8 ? function keys(it){
	    return fn(toObject(it));
	  } : __webpack_require__(24).get;
	  try {
	    fn('z');
	  } catch(e){
	    forced = 1;
	  }
	  $def($def.S + $def.F * forced, 'Object', method);
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var $ = __webpack_require__(5)
	  , toString = {}.toString
	  , getNames = $.getNames;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	function getWindowNames(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	}
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames($.toObject(it));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	//The structure for the all digits, 1 is wide and 0 is narrow
	'use strict';
	
	var _createClass = __webpack_require__(12)['default'];
	
	var _classCallCheck = __webpack_require__(15)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(17)['default'];
	
	var _get = __webpack_require__(20)['default'];
	
	var _createClass = __webpack_require__(12)['default'];
	
	var _classCallCheck = __webpack_require__(15)['default'];
	
	var _interopRequireDefault = __webpack_require__(9)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _itf = __webpack_require__(25);
	
	var _itf2 = _interopRequireDefault(_itf);
	
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
	})(_itf2['default']);
	
	exports['default'] = ITF14;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = __webpack_require__(12)['default'];
	
	var _classCallCheck = __webpack_require__(15)['default'];
	
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(17)['default'];
	
	var _get = __webpack_require__(20)['default'];
	
	var _createClass = __webpack_require__(12)['default'];
	
	var _classCallCheck = __webpack_require__(15)['default'];
	
	var _interopRequireDefault = __webpack_require__(9)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _code128 = __webpack_require__(29);
	
	var _code1282 = _interopRequireDefault(_code128);
	
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
	})(_code1282['default']);
	
	exports['default'] = CODE128B;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// Data for each character
	// The last characters will not be encoded but are used for error correction
	'use strict';
	
	var _createClass = __webpack_require__(12)['default'];
	
	var _classCallCheck = __webpack_require__(15)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(17)['default'];
	
	var _get = __webpack_require__(20)['default'];
	
	var _createClass = __webpack_require__(12)['default'];
	
	var _classCallCheck = __webpack_require__(15)['default'];
	
	var _interopRequireDefault = __webpack_require__(9)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _code128 = __webpack_require__(29);
	
	var _code1282 = _interopRequireDefault(_code128);
	
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
	})(_code1282['default']);
	
	exports['default'] = CODE128C;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = __webpack_require__(12)['default'];
	
	var _classCallCheck = __webpack_require__(15)['default'];
	
	var _interopRequireDefault = __webpack_require__(9)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _coreJsLibraryFnStringRepeat = __webpack_require__(32);
	
	var _coreJsLibraryFnStringRepeat2 = _interopRequireDefault(_coreJsLibraryFnStringRepeat);
	
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
	      if (code.length === 0) return '';
	
	      var generated = undefined;
	      var nextState = false;
	      var nZeros = this._calcZeros(code);
	
	      if (nZeros === 0) {
	        generated = state ? '001' : '00111';
	        nextState = state;
	      } else {
	        generated = (0, _coreJsLibraryFnStringRepeat2['default'])('001', nZeros - (state ? 1 : 0));
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33);
	module.exports = __webpack_require__(5).core.String.repeat;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var $def = __webpack_require__(4);
	
	$def($def.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(34)
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(5);
	
	module.exports = function repeat(count){
	  var str = String($.assertDefined(this))
	    , res = ''
	    , n   = $.toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 35 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxYzc0MzY1YjZiZmEzYjA1MmYyYiIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvZWFuLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2VuY29kaW5ncy91cGMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2VuY29kaW5ncy9pdGYuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvaXRmMTQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvY29kZTM5LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2NvZGUxMjhiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZW5jb2RpbmdzL2NvZGUxMjguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvY29kZTEyOGMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lbmNvZGluZ3MvcGhhcm1hY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zdHJpbmcvcmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmluZy1yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jYW52YXMtYnJvd3NlcmlmeS9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NDdENzQixFQUFhOzs7OzZDQUNoQixFQUFtQjs7OztBQUV0QyxLQUFJLEdBQUcsR0FBRyxFQUFFOztBQUVaLEtBQU0sUUFBUSxHQUFHO0FBQ2hCLE9BQUssRUFBRSxDQUFDO0FBQ1IsUUFBTSxFQUFFLEdBQUc7QUFDWCxPQUFLLEVBQUUsRUFBRTtBQUNULGNBQVksRUFBRSxLQUFLO0FBQ25CLE1BQUksRUFBRSxXQUFXO0FBQ2pCLFdBQVMsRUFBRSxRQUFRO0FBQ25CLFVBQVEsRUFBRSxFQUFFO0FBQ1osaUJBQWUsRUFBRSxFQUFFO0FBQ25CLFdBQVMsRUFBRSxNQUFNO0VBQ2pCOztBQUVELFVBQVMsZ0JBQWdCLENBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDOUMsTUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDakMsTUFBSSxDQUFDO01BQUUsQ0FBQzs7QUFFUixHQUFD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QixDQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDOUIsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzlCLENBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM5QixDQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDOUIsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzlCLENBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM5QixDQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDOUIsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzlCLENBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM5QixDQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDOUIsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzlCLENBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM5QixDQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDOUIsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzlCLENBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM5QixDQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDOUIsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzlCLENBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxFQUM5QixDQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUUsRUFDOUIsQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFFLEVBQzlCLENBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBRSxF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QUFHLENBQ2YsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBRSxFQUN6QixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFFLEVBQ3pCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUUsRUFDekIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBRSxFQUN6QixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFFLEVBQ3pCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUUsRUFDekIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBRSxFQUN6QixDQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUUsRUFDekIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBRSxFQUN6QixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMzQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUUsRUFDMUIsQ0FBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBRSxFQUMxQixDQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQzFCLENBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQy9DLENBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQy9DLENBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQy9DLENBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQy9DLENBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFFLEVBQy9DLENBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxhQUFhLEVBQUUsR0FBRyxDQUFFLEVBQ2hELENBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxhQUFhLEVBQUUsR0FBRyxDQUFFLEVBQ2hELENBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxhQUFhLEVBQUUsR0FBRyxDQUFFOztBQUVoRCxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsYUFBYSxFQUFFLEdBQUcsQ0FBRSxFQUNoRCxD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cGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImlvQmFyY29kZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpb0JhcmNvZGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDFjNzQzNjViNmJmYTNiMDUyZjJiXG4gKiovIiwiaW1wb3J0IGVuY29kaW5ncyBmcm9tICcuL2VuY29kaW5ncydcclxuaW1wb3J0IENhbnZhcyBmcm9tICdjYW52YXMtYnJvd3NlcmlmeSdcclxuXHJcbmxldCBhcGkgPSB7fVxyXG5cclxuY29uc3QgZGVmYXVsdHMgPSB7XHJcblx0d2lkdGg6IDIsXHJcblx0aGVpZ2h0OiAxMDAsXHJcblx0cXVpdGU6IDEwLFxyXG5cdGRpc3BsYXlWYWx1ZTogZmFsc2UsXHJcblx0Zm9udDogJ21vbm9zcGFjZScsXHJcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRmb250U2l6ZTogMTIsXHJcblx0YmFja2dyb3VuZENvbG9yOiAnJyxcclxuXHRsaW5lQ29sb3I6ICcjMDAwJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZHJhd0JhcmNvZGVUZXh0ICh0ZXh0LCBjYW52YXMsIG9wdHMpIHtcclxuXHRsZXQgY3R4XHQ9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcblx0bGV0IHgsIHlcclxuXHJcblx0eSA9IG9wdHMuaGVpZ2h0XHJcblxyXG5cdGN0eC5mb250ID0gYCR7b3B0cy5mb250U2l6ZX1weCAke29wdHMuZm9udH1gXHJcblx0Y3R4LnRleHRCYXNlbGluZSA9ICdib3R0b20nXHJcblx0Y3R4LnRleHRCYXNlbGluZSA9ICd0b3AnXHJcblxyXG5cdGlmIChvcHRzLnRleHRBbGlnbiA9PT0gJ2xlZnQnKSB7XHJcblx0XHR4ID0gb3B0cy5xdWl0ZVxyXG5cdFx0Y3R4LnRleHRBbGlnbiA9ICdsZWZ0J1xyXG5cdH1cclxuXHRlbHNlIGlmIChvcHRzLnRleHRBbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG5cdFx0eCA9IGNhbnZhcy53aWR0aCAtIG9wdHMucXVpdGVcclxuXHRcdGN0eC50ZXh0QWxpZ24gPSAncmlnaHQnXHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0eCA9IGNhbnZhcy53aWR0aCAvIDJcclxuXHRcdGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJ1xyXG5cdH1cclxuXHJcblx0Y3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUJhcmNvZGVEYXRhVXJpIChFbmNvZGluZywgY29kZSwgb3B0cykge1xyXG5cdC8qIGVzbGludCBjb21wbGV4aXR5OjAgKi9cclxuXHRvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIG9wdHMpXHJcblxyXG5cdGxldCBjYW52YXMgPSBuZXcgQ2FudmFzKClcclxuXHRsZXQgZW5jb2RlciA9IG5ldyBFbmNvZGluZyhjb2RlKVxyXG5cclxuXHQvLyBBYm9ydCBpZiB0aGUgYmFyY29kZSBmb3JtYXQgZG9lcyBub3Qgc3VwcG9ydCB0aGUgY29udGVudFxyXG5cdGlmICghZW5jb2Rlci5pc1ZhbGlkKCkpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcignQ29udGVudCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBlbmNvZGluZycpXHJcblx0fVxyXG5cclxuXHQvLyBFbmNvZGUgdGhlIGNvbnRlbnRcclxuXHRsZXQgYmluYXJ5U3RyaW5nID0gZW5jb2Rlci5lbmNvZGUoKVxyXG5cclxuXHQvLyBHZXQgdGhlIGNhbnZhcyBjb250ZXh0XHJcblx0bGV0IGN0eFx0PSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG5cclxuXHQvLyBTZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGJhcmNvZGVcclxuXHRjYW52YXMud2lkdGggPSBiaW5hcnlTdHJpbmcubGVuZ3RoICogb3B0cy53aWR0aCArIDIgKiBvcHRzLnF1aXRlXHJcblxyXG4gIC8vIFNldCBleHRyYSBoZWlnaHQgaWYgdGhlIHZhbHVlIGlzIGRpc3BsYXllZCB1bmRlciB0aGUgYmFyY29kZS5cclxuICBjYW52YXMuaGVpZ2h0ID0gb3B0cy5oZWlnaHQgKyAob3B0cy5kaXNwbGF5VmFsdWUgPyBvcHRzLmZvbnRTaXplICogMS4zIDogMClcclxuXHJcblx0Ly8gUGFpbnQgdGhlIGNhbnZhc1xyXG5cdGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG5cclxuXHRpZiAob3B0cy5iYWNrZ3JvdW5kQ29sb3IpIHtcclxuXHRcdGN0eC5maWxsU3R5bGUgPSBvcHRzLmJhY2tncm91bmRDb2xvclxyXG5cdFx0Y3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuXHR9XHJcblxyXG5cdC8vIENoYW5nZSB0byBsaW5lQ29sb3IgdG8gcGFpbnQgdGhlIGxpbmVzXHJcblx0Y3R4LmZpbGxTdHlsZSA9IG9wdHMubGluZUNvbG9yXHJcblxyXG5cdC8vIENyZWF0ZXMgdGhlIGJhcmNvZGUgb3V0IG9mIHRoZSBiaW5hcnkgc3RyaW5nXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiaW5hcnlTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuXHRcdGxldCB4ID0gaSAqIG9wdHMud2lkdGggKyBvcHRzLnF1aXRlXHJcblx0XHRpZiAoYmluYXJ5U3RyaW5nW2ldID09PSAnMScpIHtcclxuXHRcdFx0Y3R4LmZpbGxSZWN0KHgsIDAsIG9wdHMud2lkdGgsIG9wdHMuaGVpZ2h0KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQWRkIHZhbHVlIGJlbG93IGlmIGVuYWJsZWRcclxuXHRpZiAob3B0cy5kaXNwbGF5VmFsdWUpIHtcclxuXHRcdF9kcmF3QmFyY29kZVRleHQob3B0cy5jdXN0b21MYWJlbCB8fCBjb2RlLCBjYW52YXMsIG9wdHMpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY2FudmFzXHJcbn1cclxuXHJcbi8qIGVzbGludCBuby1sb29wLWZ1bmM6MCAqL1xyXG5mb3IgKGxldCBuYW1lIGluIGVuY29kaW5ncykge1xyXG5cdGFwaVtuYW1lXSA9ICguLi5hcmdzKSA9PiBnZW5lcmF0ZUJhcmNvZGVEYXRhVXJpKGVuY29kaW5nc1tuYW1lXSwgLi4uYXJncylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJykuY29yZS5PYmplY3QuYXNzaWduO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xuJGRlZigkZGVmLlMsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuLyQuYXNzaWduJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICAgID0gJC5nXG4gICwgY29yZSAgICAgICA9ICQuY29yZVxuICAsIGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb247XG5mdW5jdGlvbiBjdHgoZm4sIHRoYXQpe1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cbi8vIHR5cGUgYml0bWFwXG4kZGVmLkYgPSAxOyAgLy8gZm9yY2VkXG4kZGVmLkcgPSAyOyAgLy8gZ2xvYmFsXG4kZGVmLlMgPSA0OyAgLy8gc3RhdGljXG4kZGVmLlAgPSA4OyAgLy8gcHJvdG9cbiRkZWYuQiA9IDE2OyAvLyBiaW5kXG4kZGVmLlcgPSAzMjsgLy8gd3JhcFxuZnVuY3Rpb24gJGRlZih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwXG4gICAgLCBpc0dsb2JhbCA9IHR5cGUgJiAkZGVmLkdcbiAgICAsIGlzUHJvdG8gID0gdHlwZSAmICRkZWYuUFxuICAgICwgdGFyZ2V0ICAgPSBpc0dsb2JhbCA/IGdsb2JhbCA6IHR5cGUgJiAkZGVmLlNcbiAgICAgICAgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KS5wcm90b3R5cGVcbiAgICAsIGV4cG9ydHMgID0gaXNHbG9iYWwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgaWYoaXNHbG9iYWwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICEodHlwZSAmICRkZWYuRikgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBpZihpc0dsb2JhbCAmJiAhaXNGdW5jdGlvbih0YXJnZXRba2V5XSkpZXhwID0gc291cmNlW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLkIgJiYgb3duKWV4cCA9IGN0eChvdXQsIGdsb2JhbCk7XG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLlcgJiYgdGFyZ2V0W2tleV0gPT0gb3V0KSFmdW5jdGlvbihDKXtcbiAgICAgIGV4cCA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgZXhwLnByb3RvdHlwZSA9IEMucHJvdG90eXBlO1xuICAgIH0ob3V0KTtcbiAgICBlbHNlIGV4cCA9IGlzUHJvdG8gJiYgaXNGdW5jdGlvbihvdXQpID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0XG4gICAgZXhwb3J0c1trZXldID0gZXhwO1xuICAgIGlmKGlzUHJvdG8pKGV4cG9ydHMucHJvdG90eXBlIHx8IChleHBvcnRzLnByb3RvdHlwZSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSAkZGVmO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClcbiAgLCBjb3JlICAgPSB7fVxuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gICwgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eVxuICAsIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yXG4gICwgbWF4ICAgPSBNYXRoLm1heFxuICAsIG1pbiAgID0gTWF0aC5taW47XG4vLyBUaGUgZW5naW5lIHdvcmtzIGZpbmUgd2l0aCBkZXNjcmlwdG9ycz8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eS5cbnZhciBERVNDID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gMjsgfX0pLmEgPT0gMjtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xudmFyIGhpZGUgPSBjcmVhdGVEZWZpbmVyKDEpO1xuLy8gNy4xLjQgVG9JbnRlZ2VyXG5mdW5jdGlvbiB0b0ludGVnZXIoaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn1cbmZ1bmN0aW9uIGRlc2MoYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufVxuZnVuY3Rpb24gc2ltcGxlU2V0KG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59XG5mdW5jdGlvbiBjcmVhdGVEZWZpbmVyKGJpdG1hcCl7XG4gIHJldHVybiBERVNDID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBkZXNjKGJpdG1hcCwgdmFsdWUpKTtcbiAgfSA6IHNpbXBsZVNldDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoaXQpe1xuICByZXR1cm4gaXQgIT09IG51bGwgJiYgKHR5cGVvZiBpdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYXNzZXJ0RGVmaW5lZChpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn1cblxudmFyICQgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mdycpKHtcbiAgZzogZ2xvYmFsLFxuICBjb3JlOiBjb3JlLFxuICBodG1sOiBnbG9iYWwuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb3JlLWpzLWlzb2JqZWN0XG4gIGlzT2JqZWN0OiAgIGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICB0aGF0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvLyA3LjEuNCBUb0ludGVnZXJcbiAgdG9JbnRlZ2VyOiB0b0ludGVnZXIsXG4gIC8vIDcuMS4xNSBUb0xlbmd0aFxuICB0b0xlbmd0aDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG4gIH0sXG4gIHRvSW5kZXg6IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICAgIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihpdCwga2V5KXtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbiAgfSxcbiAgY3JlYXRlOiAgICAgT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBERVNDOiAgICAgICBERVNDLFxuICBkZXNjOiAgICAgICBkZXNjLFxuICBnZXREZXNjOiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICBkZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgIE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgYXNzZXJ0RGVmaW5lZDogYXNzZXJ0RGVmaW5lZCxcbiAgLy8gRHVtbXksIGZpeCBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZyBpbiBlczUgbW9kdWxlXG4gIEVTNU9iamVjdDogT2JqZWN0LFxuICB0b09iamVjdDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiAkLkVTNU9iamVjdChhc3NlcnREZWZpbmVkKGl0KSk7XG4gIH0sXG4gIGhpZGU6IGhpZGUsXG4gIGRlZjogY3JlYXRlRGVmaW5lcigwKSxcbiAgc2V0OiBnbG9iYWwuU3ltYm9sID8gc2ltcGxlU2V0IDogaGlkZSxcbiAgZWFjaDogW10uZm9yRWFjaFxufSk7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuaWYodHlwZW9mIF9fZSAhPSAndW5kZWZpbmVkJylfX2UgPSBjb3JlO1xuaWYodHlwZW9mIF9fZyAhPSAndW5kZWZpbmVkJylfX2cgPSBnbG9iYWw7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJCl7XG4gICQuRlcgICA9IGZhbHNlO1xuICAkLnBhdGggPSAkLmNvcmU7XG4gIHJldHVybiAkO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZ3LmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vJC5lbnVtLWtleXMnKTtcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgdmFyIFQgPSBPYmplY3QoJC5hc3NlcnREZWZpbmVkKHRhcmdldCkpXG4gICAgLCBsID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaSA9IDE7XG4gIHdoaWxlKGwgPiBpKXtcbiAgICB2YXIgUyAgICAgID0gJC5FUzVPYmplY3QoYXJndW1lbnRzW2krK10pXG4gICAgICAsIGtleXMgICA9IGVudW1LZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopVFtrZXkgPSBrZXlzW2orK11dID0gU1trZXldO1xuICB9XG4gIHJldHVybiBUO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGtleXMgICAgICAgPSAkLmdldEtleXMoaXQpXG4gICAgLCBnZXREZXNjICAgID0gJC5nZXREZXNjXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xuICBpZihnZXRTeW1ib2xzKSQuZWFjaC5jYWxsKGdldFN5bWJvbHMoaXQpLCBmdW5jdGlvbihrZXkpe1xuICAgIGlmKGdldERlc2MoaXQsIGtleSkuZW51bWVyYWJsZSlrZXlzLnB1c2goa2V5KTtcbiAgfSk7XG4gIHJldHVybiBrZXlzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmVudW0ta2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBFQU4gZnJvbSAnLi9lYW4nXG5pbXBvcnQgVVBDIGZyb20gJy4vdXBjJ1xuaW1wb3J0IElURiBmcm9tICcuL2l0ZidcbmltcG9ydCBJVEYxNCBmcm9tICcuL2l0ZjE0J1xuaW1wb3J0IENPREUzOSBmcm9tICcuL2NvZGUzOSdcbmltcG9ydCBDT0RFMTI4QiBmcm9tICcuL2NvZGUxMjhiJ1xuaW1wb3J0IENPREUxMjhDIGZyb20gJy4vY29kZTEyOGMnXG5pbXBvcnQgUGhhcm1hY29kZSBmcm9tICcuL3BoYXJtYWNvZGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgRUFOLFxuICBVUEMsXG4gIElURixcbiAgSVRGMTQsXG4gIENPREUzOSxcbiAgQ09ERTEyOEIsXG4gIENPREUxMjhDLFxuICBQaGFybWFjb2RlXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy9pbmRleC5qc1xuICoqLyIsIi8vIFRoZSBMIChsZWZ0KSB0eXBlIG9mIGVuY29kaW5nXG5jb25zdCBMYmluYXJ5ID0ge1xuICAwOiAnMDAwMTEwMScsXG4gIDE6ICcwMDExMDAxJyxcbiAgMjogJzAwMTAwMTEnLFxuICAzOiAnMDExMTEwMScsXG4gIDQ6ICcwMTAwMDExJyxcbiAgNTogJzAxMTAwMDEnLFxuICA2OiAnMDEwMTExMScsXG4gIDc6ICcwMTExMDExJyxcbiAgODogJzAxMTAxMTEnLFxuICA5OiAnMDAwMTAxMSdcbn1cblxuLy8gVGhlIEcgdHlwZSBvZiBlbmNvZGluZ1xuY29uc3QgR2JpbmFyeSA9IHtcbiAgMDogJzAxMDAxMTEnLFxuICAxOiAnMDExMDAxMScsXG4gIDI6ICcwMDExMDExJyxcbiAgMzogJzAxMDAwMDEnLFxuICA0OiAnMDAxMTEwMScsXG4gIDU6ICcwMTExMDAxJyxcbiAgNjogJzAwMDAxMDEnLFxuICA3OiAnMDAxMDAwMScsXG4gIDg6ICcwMDAxMDAxJyxcbiAgOTogJzAwMTAxMTEnXG59XG5cbi8vIFRoZSBSIChyaWdodCkgdHlwZSBvZiBlbmNvZGluZ1xuY29uc3QgUmJpbmFyeSA9IHtcbiAgMDogJzExMTAwMTAnLFxuICAxOiAnMTEwMDExMCcsXG4gIDI6ICcxMTAxMTAwJyxcbiAgMzogJzEwMDAwMTAnLFxuICA0OiAnMTAxMTEwMCcsXG4gIDU6ICcxMDAxMTEwJyxcbiAgNjogJzEwMTAwMDAnLFxuICA3OiAnMTAwMDEwMCcsXG4gIDg6ICcxMDAxMDAwJyxcbiAgOTogJzExMTAxMDAnXG59XG5cbi8vIFRoZSBsZWZ0IHNpZGUgc3RydWN0dXJlIGluIEVBTi0xM1xuY29uc3QgRUFOc3RydWN0ID0ge1xuICAwOiAnTExMTExMJyxcbiAgMTogJ0xMR0xHRycsXG4gIDI6ICdMTEdHTEcnLFxuICAzOiAnTExHR0dMJyxcbiAgNDogJ0xHTExHRycsXG4gIDU6ICdMR0dMTEcnLFxuICA2OiAnTEdHR0xMJyxcbiAgNzogJ0xHTEdMRycsXG4gIDg6ICdMR0xHR0wnLFxuICA5OiAnTEdHTEdMJ1xufVxuXG4vLyBWYWxpZCBFQU4gY29kZVxuY29uc3QgdmFsaWRSZSA9IC9eWzAtOV17MTN9JC9cbi8vIFRoZSBzdGFydCBiaXRzXG5jb25zdCBzdGFydEJpbiA9ICcxMDEnXG4vLyBUaGUgZW5kIGJpdHNcbmNvbnN0IGVuZEJpbiA9ICcxMDEnXG4vLyBUaGUgbWlkZGxlIGJpdHNcbmNvbnN0IG1pZGRsZUJpbiA9ICcwMTAxMCdcblxuXG5jbGFzcyBFQU4ge1xuICBjb25zdHJ1Y3RvciAoY29kZSkge1xuICAgIHRoaXMuY29kZSA9IFN0cmluZyhjb2RlKVxuICB9XG5cbiAgaXNWYWxpZCAoKSB7XG4gICAgcmV0dXJuIHZhbGlkUmUudGVzdCh0aGlzLmNvZGUpICYmXG4gICAgICBOdW1iZXIodGhpcy5jb2RlWzEyXSkgPT09IHRoaXMuY2hlY2tzdW0oKVxuICB9XG5cbiAgY2hlY2tzdW0gKCkge1xuICAgIGxldCByZXN1bHQgPSAwXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpICs9IDIpIHtcbiAgICAgIHJlc3VsdCArPSBOdW1iZXIodGhpcy5jb2RlW2ldKVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEyOyBpICs9IDIpIHtcbiAgICAgIHJlc3VsdCArPSBOdW1iZXIodGhpcy5jb2RlW2ldKSAqIDNcbiAgICB9XG5cbiAgICByZXR1cm4gKDEwIC0gKHJlc3VsdCAlIDEwKSkgJSAxMFxuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSBiaW5hcnkgcmVwcmVzZW50YXRpb24gb2YgdGhlIEVBTiBjb2RlXG4gIC8vIG51bWJlciBuZWVkcyB0byBiZSBhIHN0cmluZ1xuICBlbmNvZGUgKCkge1xuICAgIC8vIENyZWF0ZSB0aGUgcmV0dXJuIHZhcmlhYmxlXG4gICAgbGV0IHJlc3VsdCA9ICcnXG5cbiAgICAvLyBHZXQgdGhlIGZpcnN0IGRpZ2l0IChmb3IgbGF0ZXIgZGV0ZXJtaW5hdGlvbiBvZiB0aGUgZW5jb2RpbmcgdHlwZSlcbiAgICBsZXQgZmlyc3REaWdpdCA9IHRoaXMuY29kZVswXVxuXG4gICAgLy8gR2V0IHRoZSBudW1iZXIgdG8gYmUgZW5jb2RlZCBvbiB0aGUgbGVmdCBzaWRlIG9mIHRoZSBFQU4gY29kZVxuICAgIGxldCBsZWZ0U2lkZSA9IHRoaXMuY29kZS5zdWJzdHIoMSwgNylcblxuICAgIC8vIEdldCB0aGUgbnVtYmVyIHRvIGJlIGVuY29kZWQgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEVBTiBjb2RlXG4gICAgbGV0IHJpZ2h0U2lkZSA9IHRoaXMuY29kZS5zdWJzdHIoNywgNilcblxuXG4gICAgLy8gQWRkIHRoZSBzdGFydCBiaXRzXG4gICAgcmVzdWx0ICs9IHN0YXJ0QmluXG5cbiAgICAvLyBBZGQgdGhlIGxlZnQgc2lkZVxuICAgIHJlc3VsdCArPSB0aGlzLmVuY29kZVN0cnVjdChsZWZ0U2lkZSwgRUFOc3RydWN0W2ZpcnN0RGlnaXRdKVxuXG4gICAgLy8gQWRkIHRoZSBtaWRkbGUgYml0c1xuICAgIHJlc3VsdCArPSBtaWRkbGVCaW5cblxuICAgIC8vIEFkZCB0aGUgcmlnaHQgc2lkZVxuICAgIHJlc3VsdCArPSB0aGlzLmVuY29kZVN0cnVjdChyaWdodFNpZGUsICdSUlJSUlInKVxuXG4gICAgLy8gQWRkIHRoZSBlbmQgYml0c1xuICAgIHJlc3VsdCArPSBlbmRCaW5cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vIENvbnZlcnQgYSBudW1iZXIgYXJyYXkgdG8gdGhlIHJlcHJlc2VudGluZ1xuICBlbmNvZGVTdHJ1Y3QgKGNvZGVQYXJ0LCBzdHJ1Y3QpIHtcbiAgICAvLyBDcmVhdGUgdGhlIHZhcmlhYmxlIHRoYXQgc2hvdWxkIGJlIHJldHVybmVkIGF0IHRoZSBlbmQgb2YgdGhlIGZ1bmN0aW9uXG4gICAgbGV0IHJlc3VsdCA9ICcnXG5cbiAgICAvLyBMb29wIGFsbCB0aGUgbnVtYmVyc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29kZVBhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIFVzaW5nIHRoZSBMLCBHIG9yIFIgZW5jb2RpbmcgYW5kIGFkZCBpdCB0byB0aGUgcmV0dXJuaW5nIHZhcmlhYmxlXG4gICAgICBpZiAoc3RydWN0W2ldID09PSAnTCcpIHtcbiAgICAgICAgcmVzdWx0ICs9IExiaW5hcnlbY29kZVBhcnRbaV1dXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzdHJ1Y3RbaV0gPT09ICdHJykge1xuICAgICAgICByZXN1bHQgKz0gR2JpbmFyeVtjb2RlUGFydFtpXV1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHN0cnVjdFtpXSA9PT0gJ1InKSB7XG4gICAgICAgIHJlc3VsdCArPSBSYmluYXJ5W2NvZGVQYXJ0W2ldXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRUFOXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy9lYW4uanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IEVBTiBmcm9tICcuL2VhbidcblxuY2xhc3MgVVBDIGV4dGVuZHMgRUFOIHtcbiAgY29uc3RydWN0b3IoY29kZSkge1xuICAgIHN1cGVyKGAwJHtjb2RlfWApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVVBDXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL2VuY29kaW5ncy91cGMuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkY3JlYXRlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gX09iamVjdCRjcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICQuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7XG4gIHZhciBfYWdhaW4gPSB0cnVlO1xuXG4gIF9mdW5jdGlvbjogd2hpbGUgKF9hZ2Fpbikge1xuICAgIHZhciBvYmplY3QgPSBfeCxcbiAgICAgICAgcHJvcGVydHkgPSBfeDIsXG4gICAgICAgIHJlY2VpdmVyID0gX3gzO1xuICAgIGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7XG4gICAgX2FnYWluID0gZmFsc2U7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gICAgdmFyIGRlc2MgPSBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICAgIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3ggPSBwYXJlbnQ7XG4gICAgICAgIF94MiA9IHByb3BlcnR5O1xuICAgICAgICBfeDMgPSByZWNlaXZlcjtcbiAgICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICQuZ2V0RGVzYyhpdCwga2V5KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZGVmICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxuICAsIGlzT2JqZWN0ID0gJC5pc09iamVjdFxuICAsIHRvT2JqZWN0ID0gJC50b09iamVjdDtcbiQuZWFjaC5jYWxsKCgnZnJlZXplLHNlYWwscHJldmVudEV4dGVuc2lvbnMsaXNGcm96ZW4saXNTZWFsZWQsaXNFeHRlbnNpYmxlLCcgK1xuICAnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLGdldFByb3RvdHlwZU9mLGtleXMsZ2V0T3duUHJvcGVydHlOYW1lcycpLnNwbGl0KCcsJylcbiwgZnVuY3Rpb24oS0VZLCBJRCl7XG4gIHZhciBmbiAgICAgPSAoJC5jb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZm9yY2VkID0gMFxuICAgICwgbWV0aG9kID0ge307XG4gIG1ldGhvZFtLRVldID0gSUQgPT0gMCA/IGZ1bmN0aW9uIGZyZWV6ZShpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMSA/IGZ1bmN0aW9uIHNlYWwoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDIgPyBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyhpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMyA/IGZ1bmN0aW9uIGlzRnJvemVuKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogdHJ1ZTtcbiAgfSA6IElEID09IDQgPyBmdW5jdGlvbiBpc1NlYWxlZChpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XG4gIH0gOiBJRCA9PSA1ID8gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogZmFsc2U7XG4gIH0gOiBJRCA9PSA2ID8gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiBmbih0b09iamVjdChpdCksIGtleSk7XG4gIH0gOiBJRCA9PSA3ID8gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiBmbihPYmplY3QoJC5hc3NlcnREZWZpbmVkKGl0KSkpO1xuICB9IDogSUQgPT0gOCA/IGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiBmbih0b09iamVjdChpdCkpO1xuICB9IDogcmVxdWlyZSgnLi8kLmdldC1uYW1lcycpLmdldDtcbiAgdHJ5IHtcbiAgICBmbigneicpO1xuICB9IGNhdGNoKGUpe1xuICAgIGZvcmNlZCA9IDE7XG4gIH1cbiAgJGRlZigkZGVmLlMgKyAkZGVmLkYgKiBmb3JjZWQsICdPYmplY3QnLCBtZXRob2QpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcclxudmFyICQgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgdG9TdHJpbmcgPSB7fS50b1N0cmluZ1xyXG4gICwgZ2V0TmFtZXMgPSAkLmdldE5hbWVzO1xyXG5cclxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xyXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93TmFtZXMoaXQpe1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZ2V0TmFtZXMoaXQpO1xyXG4gIH0gY2F0Y2goZSl7XHJcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xyXG4gIGlmKHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nKXJldHVybiBnZXRXaW5kb3dOYW1lcyhpdCk7XHJcbiAgcmV0dXJuIGdldE5hbWVzKCQudG9PYmplY3QoaXQpKTtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvL1RoZSBzdHJ1Y3R1cmUgZm9yIHRoZSBhbGwgZGlnaXRzLCAxIGlzIHdpZGUgYW5kIDAgaXMgbmFycm93XG5jb25zdCBkaWdpdFN0cnVjdHVyZSA9IHtcbiAgMDogJzAwMTEwJyxcbiAgMTogJzEwMDAxJyxcbiAgMjogJzAxMDAxJyxcbiAgMzogJzExMDAwJyxcbiAgNDogJzAwMTAxJyxcbiAgNTogJzEwMTAwJyxcbiAgNjogJzAxMTAwJyxcbiAgNzogJzAwMDExJyxcbiAgODogJzEwMDEwJyxcbiAgOTogJzAxMDEwJ1xufVxuXG4vLyBUaGUgc3RhcnQgYml0c1xuY29uc3Qgc3RhcnRCaW4gPSAnMTAxMCdcbi8vIFRoZSBlbmQgYml0c1xuY29uc3QgZW5kQmluID0gJzExMTAxJ1xuXG4vLyBSZWdleHAgZm9yIGEgdmFsaWQgSW50ZXIyNSBjb2RlXG5jb25zdCB2YWxpZFJlID0gL14oWzAtOV1bMC05XSkrJC9cblxuY2xhc3MgSVRGIHtcbiAgY29uc3RydWN0b3IgKGNvZGUpIHtcbiAgICB0aGlzLmNvZGUgPSBTdHJpbmcoY29kZSlcbiAgfVxuXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHZhbGlkUmUudGVzdCh0aGlzLmNvZGUpXG4gIH1cblxuICBlbmNvZGUoKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSB2YXJpYWJsZSB0aGF0IHNob3VsZCBiZSByZXR1cm5lZCBhdCB0aGUgZW5kIG9mIHRoZSBmdW5jdGlvblxuICAgIGxldCByZXN1bHQgPSAnJ1xuXG4gICAgLy8gQWx3YXlzIGFkZCB0aGUgc2FtZSBzdGFydCBiaXRzXG4gICAgcmVzdWx0ICs9IHN0YXJ0QmluXG5cbiAgICAvLyBDYWxjdWxhdGUgYWxsIHRoZSBkaWdpdCBwYWlyc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2RlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICByZXN1bHQgKz0gdGhpcy5jYWxjdWxhdGVQYWlyKHRoaXMuY29kZS5zdWJzdHIoaSwgMikpXG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIGFkZCB0aGUgc2FtZSBlbmQgYml0c1xuICAgIHJlc3VsdCArPSBlbmRCaW5cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNhbGN1bGF0ZVBhaXIgKHR3b051bWJlcnMpIHtcbiAgICBsZXQgcmVzdWx0ID0gJydcblxuICAgIGxldCBudW1iZXIxU3RydWN0ID0gZGlnaXRTdHJ1Y3R1cmVbdHdvTnVtYmVyc1swXV1cbiAgICBsZXQgbnVtYmVyMlN0cnVjdCA9IGRpZ2l0U3RydWN0dXJlW3R3b051bWJlcnNbMV1dXG5cbiAgICAvLyBUYWtlIGV2ZXJ5IHNlY29uZCBiaXQgYW5kIGFkZCB0byB0aGUgcmVzdWx0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSAobnVtYmVyMVN0cnVjdFtpXSA9PT0gJzEnKSA/ICcxMTEnIDogJzEnXG4gICAgICByZXN1bHQgKz0gKG51bWJlcjJTdHJ1Y3RbaV0gPT09ICcxJykgPyAnMDAwJyA6ICcwJ1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJVEZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvZW5jb2RpbmdzL2l0Zi5qc1xuICoqLyIsImltcG9ydCBJVEYgZnJvbSAnLi9pdGYnXG5cbmNvbnN0IHZhbGlkUmUgPSAvXlswLTldezEzLDE0fSQvXG5cbmNsYXNzIElURjE0IGV4dGVuZHMgSVRGIHtcbiAgY29uc3RydWN0b3IoY29kZSkge1xuICAgIHN1cGVyKGNvZGUpXG5cbiAgICBpZiAoY29kZS5sZW5ndGggPT09IDEzKSB7XG4gICAgICB0aGlzLmNvZGUgKz0gdGhpcy5jaGVja3N1bSgpXG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gc3VwZXIuaXNWYWxpZCgpICYmIHZhbGlkUmUudGVzdCh0aGlzLmNvZGUpICYmXG4gICAgICBOdW1iZXIodGhpcy5jb2RlWzEzXSkgPT09IHRoaXMuY2hlY2tzdW0oKVxuICB9XG5cbiAgY2hlY2tzdW0oKSB7XG4gICAgbGV0IHJlc3VsdCA9IDBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTM7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IE51bWJlcih0aGlzLmNvZGVbaV0pICogKDMgLSAoaSAlIDIpICogMilcbiAgICB9XG5cbiAgICByZXR1cm4gMTAgLSAocmVzdWx0ICUgMTApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSVRGMTRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvZW5jb2RpbmdzL2l0ZjE0LmpzXG4gKiovIiwiY29uc3QgY29kZTM5ID0gW1xuICBbIDAsICcwJywgJzEwMTAwMDExMTAxMTEwMScgXSxcbiAgWyAxLCAnMScsICcxMTEwMTAwMDEwMTAxMTEnIF0sXG4gIFsgMiwgJzInLCAnMTAxMTEwMDAxMDEwMTExJyBdLFxuICBbIDMsICczJywgJzExMTAxMTEwMDAxMDEwMScgXSxcbiAgWyA0LCAnNCcsICcxMDEwMDAxMTEwMTAxMTEnIF0sXG4gIFsgNSwgJzUnLCAnMTExMDEwMDAxMTEwMTAxJyBdLFxuICBbIDYsICc2JywgJzEwMTExMDAwMTExMDEwMScgXSxcbiAgWyA3LCAnNycsICcxMDEwMDAxMDExMTAxMTEnIF0sXG4gIFsgOCwgJzgnLCAnMTExMDEwMDAxMDExMTAxJyBdLFxuICBbIDksICc5JywgJzEwMTExMDAwMTAxMTEwMScgXSxcbiAgWyAxMCwgJ0EnLCAnMTExMDEwMTAwMDEwMTExJyBdLFxuICBbIDExLCAnQicsICcxMDExMTAxMDAwMTAxMTEnIF0sXG4gIFsgMTIsICdDJywgJzExMTAxMTEwMTAwMDEwMScgXSxcbiAgWyAxMywgJ0QnLCAnMTAxMDExMTAwMDEwMTExJyBdLFxuICBbIDE0LCAnRScsICcxMTEwMTAxMTEwMDAxMDEnIF0sXG4gIFsgMTUsICdGJywgJzEwMTExMDExMTAwMDEwMScgXSxcbiAgWyAxNiwgJ0cnLCAnMTAxMDEwMDAxMTEwMTExJyBdLFxuICBbIDE3LCAnSCcsICcxMTEwMTAxMDAwMTExMDEnIF0sXG4gIFsgMTgsICdJJywgJzEwMTExMDEwMDAxMTEwMScgXSxcbiAgWyAxOSwgJ0onLCAnMTAxMDExMTAwMDExMTAxJyBdLFxuICBbIDIwLCAnSycsICcxMTEwMTAxMDEwMDAxMTEnIF0sXG4gIFsgMjEsICdMJywgJzEwMTExMDEwMTAwMDExMScgXSxcbiAgWyAyMiwgJ00nLCAnMTExMDExMTAxMDEwMDAxJyBdLFxuICBbIDIzLCAnTicsICcxMDEwMTExMDEwMDAxMTEnIF0sXG4gIFsgMjQsICdPJywgJzExMTAxMDExMTAxMDAwMScgXSxcbiAgWyAyNSwgJ1AnLCAnMTAxMTEwMTExMDEwMDAxJyBdLFxuICBbIDI2LCAnUScsICcxMDEwMTAxMTEwMDAxMTEnIF0sXG4gIFsgMjcsICdSJywgJzExMTAxMDEwMTExMDAwMScgXSxcbiAgWyAyOCwgJ1MnLCAnMTAxMTEwMTAxMTEwMDAxJyBdLFxuICBbIDI5LCAnVCcsICcxMDEwMTExMDExMTAwMDEnIF0sXG4gIFsgMzAsICdVJywgJzExMTAwMDEwMTAxMDExMScgXSxcbiAgWyAzMSwgJ1YnLCAnMTAwMDExMTAxMDEwMTExJyBdLFxuICBbIDMyLCAnVycsICcxMTEwMDAxMTEwMTAxMDEnIF0sXG4gIFsgMzMsICdYJywgJzEwMDAxMDExMTAxMDExMScgXSxcbiAgWyAzNCwgJ1knLCAnMTExMDAwMTAxMTEwMTAxJyBdLFxuICBbIDM1LCAnWicsICcxMDAwMTExMDExMTAxMDEnIF0sXG4gIFsgMzYsICctJywgJzEwMDAxMDEwMTExMDExMScgXSxcbiAgWyAzNywgJy4nLCAnMTExMDAwMTAxMDExMTAxJyBdLFxuICBbIDM4LCAnICcsICcxMDAwMTExMDEwMTExMDEnIF0sXG4gIFsgMzksICckJywgJzEwMDAxMDAwMTAwMDEwMScgXSxcbiAgWyA0MCwgJy8nLCAnMTAwMDEwMDAxMDEwMDAxJyBdLFxuICBbIDQxLCAnKycsICcxMDAwMTAxMDAwMTAwMDEnIF0sXG4gIFsgNDIsICclJywgJzEwMTAwMDEwMDAxMDAwMScgXVxuXVxuXG5jb25zdCB2YWxpZFJlID0gL15bMC05YS16QS1aXFwtXFwuXFwgXFwkXFwvXFwrXFwlXSskL1xuXG5jbGFzcyBDT0RFMzkge1xuICBjb25zdHJ1Y3RvciAoY29kZSkge1xuICAgIHRoaXMuY29kZSA9IFN0cmluZyhjb2RlKVxuICB9XG5cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdmFsaWRSZS50ZXN0KHRoaXMuY29kZSlcbiAgfVxuXG4gIGVuY29kZSgpIHtcbiAgICBsZXQgc3RyaW5nID0gdGhpcy5jb2RlLnRvVXBwZXJDYXNlKClcblxuICAgIGxldCByZXN1bHQgPSAnJ1xuICAgIHJlc3VsdCArPSAnMTAwMDEwMTExMDExMTAxMCdcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IHRoaXMuZW5jb2RpbmdCeUNoYXIoc3RyaW5nW2ldKSArICcwJ1xuICAgIH1cbiAgICByZXN1bHQgKz0gJzEwMDAxMDExMTAxMTEwMTAnXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZW5jb2RpbmdCeUNoYXIgKGNoYXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvZGUzOS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNvZGUzOVtpXVsxXSA9PT0gY2hhcikge1xuICAgICAgICByZXR1cm4gY29kZTM5W2ldWzJdXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENPREUzOVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvY29kZTM5LmpzXG4gKiovIiwiaW1wb3J0IENPREUxMjggZnJvbSAnLi9jb2RlMTI4J1xuXG5jbGFzcyBDT0RFMTI4QiBleHRlbmRzIENPREUxMjgge1xuICBjb25zdHJ1Y3RvciAoY29kZSkge1xuICAgIHN1cGVyKGNvZGUpXG4gICAgdGhpcy5zdGFydENvZGUgPSAxMDRcbiAgfVxuXG4gIGVuY29kZUNsYXNzICgpIHtcbiAgICBsZXQgcmVzdWx0ID0gJydcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29kZS5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IHN1cGVyLmVuY29kaW5nQnlDaGFyKHRoaXMuY29kZVtpXSlcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY2hlY2tzdW0oKSB7XG4gICAgbGV0IHN1bSA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29kZS5sZW5ndGg7IGkrKykge1xuICAgICAgc3VtICs9IHN1cGVyLndlaWdodEJ5Q2hhcmFjdGVyKHRoaXMuY29kZVtpXSkgKiAoaSArIDEpXG4gICAgfVxuICAgIHJldHVybiAoc3VtICsgdGhpcy5zdGFydENvZGUpICUgMTAzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ09ERTEyOEJcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvZW5jb2RpbmdzL2NvZGUxMjhiLmpzXG4gKiovIiwiLy8gRGF0YSBmb3IgZWFjaCBjaGFyYWN0ZXJcbi8vIFRoZSBsYXN0IGNoYXJhY3RlcnMgd2lsbCBub3QgYmUgZW5jb2RlZCBidXQgYXJlIHVzZWQgZm9yIGVycm9yIGNvcnJlY3Rpb25cbmNvbnN0IGNvZGUxMjhiID0gW1xuICBbICcgJywgJzExMDExMDAxMTAwJywgMCBdLFxuICBbICchJywgJzExMDAxMTAxMTAwJywgMSBdLFxuICBbICdcIicsICcxMTAwMTEwMDExMCcsIDIgXSxcbiAgWyAnIycsICcxMDAxMDAxMTAwMCcsIDMgXSxcbiAgWyAnJCcsICcxMDAxMDAwMTEwMCcsIDQgXSxcbiAgWyAnJScsICcxMDAwMTAwMTEwMCcsIDUgXSxcbiAgWyAnJicsICcxMDAxMTAwMTAwMCcsIDYgXSxcbiAgWyAnXFwnJywgJzEwMDExMDAwMTAwJywgNyBdLFxuICBbICcoJywgJzEwMDAxMTAwMTAwJywgOCBdLFxuICBbICcpJywgJzExMDAxMDAxMDAwJywgOSBdLFxuICBbICcqJywgJzExMDAxMDAwMTAwJywgMTAgXSxcbiAgWyAnKycsICcxMTAwMDEwMDEwMCcsIDExIF0sXG4gIFsgJywnLCAnMTAxMTAwMTExMDAnLCAxMiBdLFxuICBbICctJywgJzEwMDExMDExMTAwJywgMTMgXSxcbiAgWyAnLicsICcxMDAxMTAwMTExMCcsIDE0IF0sXG4gIFsgJy8nLCAnMTAxMTEwMDExMDAnLCAxNSBdLFxuICBbICcwJywgJzEwMDExMTAxMTAwJywgMTYgXSxcbiAgWyAnMScsICcxMDAxMTEwMDExMCcsIDE3IF0sXG4gIFsgJzInLCAnMTEwMDExMTAwMTAnLCAxOCBdLFxuICBbICczJywgJzExMDAxMDExMTAwJywgMTkgXSxcbiAgWyAnNCcsICcxMTAwMTAwMTExMCcsIDIwIF0sXG4gIFsgJzUnLCAnMTEwMTExMDAxMDAnLCAyMSBdLFxuICBbICc2JywgJzExMDAxMTEwMTAwJywgMjIgXSxcbiAgWyAnNycsICcxMTEwMTEwMTExMCcsIDIzIF0sXG4gIFsgJzgnLCAnMTExMDEwMDExMDAnLCAyNCBdLFxuICBbICc5JywgJzExMTAwMTAxMTAwJywgMjUgXSxcbiAgWyAnOicsICcxMTEwMDEwMDExMCcsIDI2IF0sXG4gIFsgJzsnLCAnMTExMDExMDAxMDAnLCAyNyBdLFxuICBbICc8JywgJzExMTAwMTEwMTAwJywgMjggXSxcbiAgWyAnPScsICcxMTEwMDExMDAxMCcsIDI5IF0sXG4gIFsgJz4nLCAnMTEwMTEwMTEwMDAnLCAzMCBdLFxuICBbICc/JywgJzExMDExMDAwMTEwJywgMzEgXSxcbiAgWyAnQCcsICcxMTAwMDExMDExMCcsIDMyIF0sXG4gIFsgJ0EnLCAnMTAxMDAwMTEwMDAnLCAzMyBdLFxuICBbICdCJywgJzEwMDAxMDExMDAwJywgMzQgXSxcbiAgWyAnQycsICcxMDAwMTAwMDExMCcsIDM1IF0sXG4gIFsgJ0QnLCAnMTAxMTAwMDEwMDAnLCAzNiBdLFxuICBbICdFJywgJzEwMDAxMTAxMDAwJywgMzcgXSxcbiAgWyAnRicsICcxMDAwMTEwMDAxMCcsIDM4IF0sXG4gIFsgJ0cnLCAnMTEwMTAwMDEwMDAnLCAzOSBdLFxuICBbICdIJywgJzExMDAwMTAxMDAwJywgNDAgXSxcbiAgWyAnSScsICcxMTAwMDEwMDAxMCcsIDQxIF0sXG4gIFsgJ0onLCAnMTAxMTAxMTEwMDAnLCA0MiBdLFxuICBbICdLJywgJzEwMTEwMDAxMTEwJywgNDMgXSxcbiAgWyAnTCcsICcxMDAwMTEwMTExMCcsIDQ0IF0sXG4gIFsgJ00nLCAnMTAxMTEwMTEwMDAnLCA0NSBdLFxuICBbICdOJywgJzEwMTExMDAwMTEwJywgNDYgXSxcbiAgWyAnTycsICcxMDAwMTExMDExMCcsIDQ3IF0sXG4gIFsgJ1AnLCAnMTExMDExMTAxMTAnLCA0OCBdLFxuICBbICdRJywgJzExMDEwMDAxMTEwJywgNDkgXSxcbiAgWyAnUicsICcxMTAwMDEwMTExMCcsIDUwIF0sXG4gIFsgJ1MnLCAnMTEwMTExMDEwMDAnLCA1MSBdLFxuICBbICdUJywgJzExMDExMTAwMDEwJywgNTIgXSxcbiAgWyAnVScsICcxMTAxMTEwMTExMCcsIDUzIF0sXG4gIFsgJ1YnLCAnMTExMDEwMTEwMDAnLCA1NCBdLFxuICBbICdXJywgJzExMTAxMDAwMTEwJywgNTUgXSxcbiAgWyAnWCcsICcxMTEwMDAxMDExMCcsIDU2IF0sXG4gIFsgJ1knLCAnMTExMDExMDEwMDAnLCA1NyBdLFxuICBbICdaJywgJzExMTAxMTAwMDEwJywgNTggXSxcbiAgWyAnWycsICcxMTEwMDAxMTAxMCcsIDU5IF0sXG4gIFsgJ1xcXFwnLCAnMTExMDExMTEwMTAnLCA2MCBdLFxuICBbICddJywgJzExMDAxMDAwMDEwJywgNjEgXSxcbiAgWyAnXicsICcxMTExMDAwMTAxMCcsIDYyIF0sXG4gIFsgJ18nLCAnMTAxMDAxMTAwMDAnLCA2MyBdLFxuICBbICdgJywgJzEwMTAwMDAxMTAwJywgNjQgXSxcbiAgWyAnYScsICcxMDAxMDExMDAwMCcsIDY1IF0sXG4gIFsgJ2InLCAnMTAwMTAwMDAxMTAnLCA2NiBdLFxuICBbICdjJywgJzEwMDAwMTAxMTAwJywgNjcgXSxcbiAgWyAnZCcsICcxMDAwMDEwMDExMCcsIDY4IF0sXG4gIFsgJ2UnLCAnMTAxMTAwMTAwMDAnLCA2OSBdLFxuICBbICdmJywgJzEwMTEwMDAwMTAwJywgNzAgXSxcbiAgWyAnZycsICcxMDAxMTAxMDAwMCcsIDcxIF0sXG4gIFsgJ2gnLCAnMTAwMTEwMDAwMTAnLCA3MiBdLFxuICBbICdpJywgJzEwMDAwMTEwMTAwJywgNzMgXSxcbiAgWyAnaicsICcxMDAwMDExMDAxMCcsIDc0IF0sXG4gIFsgJ2snLCAnMTEwMDAwMTAwMTAnLCA3NSBdLFxuICBbICdsJywgJzExMDAxMDEwMDAwJywgNzYgXSxcbiAgWyAnbScsICcxMTExMDExMTAxMCcsIDc3IF0sXG4gIFsgJ24nLCAnMTEwMDAwMTAxMDAnLCA3OCBdLFxuICBbICdvJywgJzEwMDAxMTExMDEwJywgNzkgXSxcbiAgWyAncCcsICcxMDEwMDExMTEwMCcsIDgwIF0sXG4gIFsgJ3EnLCAnMTAwMTAxMTExMDAnLCA4MSBdLFxuICBbICdyJywgJzEwMDEwMDExMTEwJywgODIgXSxcbiAgWyAncycsICcxMDExMTEwMDEwMCcsIDgzIF0sXG4gIFsgJ3QnLCAnMTAwMTExMTAxMDAnLCA4NCBdLFxuICBbICd1JywgJzEwMDExMTEwMDEwJywgODUgXSxcbiAgWyAndicsICcxMTExMDEwMDEwMCcsIDg2IF0sXG4gIFsgJ3cnLCAnMTExMTAwMTAxMDAnLCA4NyBdLFxuICBbICd4JywgJzExMTEwMDEwMDEwJywgODggXSxcbiAgWyAneScsICcxMTAxMTAxMTExMCcsIDg5IF0sXG4gIFsgJ3onLCAnMTEwMTExMTAxMTAnLCA5MCBdLFxuICBbICd7JywgJzExMTEwMTEwMTEwJywgOTEgXSxcbiAgWyAnfCcsICcxMDEwMTExMTAwMCcsIDkyIF0sXG4gIFsgJ30nLCAnMTAxMDAwMTExMTAnLCA5MyBdLFxuICBbICd+JywgJzEwMDAxMDExMTEwJywgOTQgXSxcbiAgWyBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyksICcxMDExMTEwMTAwMCcsIDk1IF0sXG4gIFsgU3RyaW5nLmZyb21DaGFyQ29kZSgxMjgpLCAnMTAxMTExMDAwMTAnLCA5NiBdLFxuICBbIFN0cmluZy5mcm9tQ2hhckNvZGUoMTI5KSwgJzExMTEwMTAxMDAwJywgOTcgXSxcbiAgWyBTdHJpbmcuZnJvbUNoYXJDb2RlKDEzMCksICcxMTExMDEwMDAxMCcsIDk4IF0sXG4gIFsgU3RyaW5nLmZyb21DaGFyQ29kZSgxMzEpLCAnMTAxMTEwMTExMTAnLCA5OSBdLFxuICBbIFN0cmluZy5mcm9tQ2hhckNvZGUoMTMyKSwgJzEwMTExMTAxMTEwJywgMTAwIF0sXG4gIFsgU3RyaW5nLmZyb21DaGFyQ29kZSgxMzMpLCAnMTExMDEwMTExMTAnLCAxMDEgXSxcbiAgWyBTdHJpbmcuZnJvbUNoYXJDb2RlKDEzNCksICcxMTExMDEwMTExMCcsIDEwMiBdLFxuICAvL1N0YXJ0IGNvZGVzXG4gIFsgU3RyaW5nLmZyb21DaGFyQ29kZSgxMzUpLCAnMTEwMTAwMDAxMDAnLCAxMDMgXSxcbiAgWyBTdHJpbmcuZnJvbUNoYXJDb2RlKDEzNiksICcxMTAxMDAxMDAwMCcsIDEwNCBdLFxuICBbIFN0cmluZy5mcm9tQ2hhckNvZGUoMTM3KSwgJzExMDEwMDExMTAwJywgMTA1IF1cbl1cblxuY29uc3QgZW5kQmluID0gJzExMDAwMTExMDEwMTEnXG5jb25zdCB2YWxpZFJlID0gL15bIS1+IF0rJC9cblxuY2xhc3MgQ09ERTEyOCB7XG4gIGNvbnN0cnVjdG9yIChjb2RlKSB7XG4gICAgdGhpcy5jb2RlID0gU3RyaW5nKGNvZGUpXG4gIH1cblxuICBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB2YWxpZFJlLnRlc3QodGhpcy5jb2RlKVxuICB9XG5cbiAgZW5jb2RlKCkge1xuICAgIGxldCByZXN1bHQgPSAnJ1xuXG4gICAgLy9BZGQgdGhlIHN0YXJ0IGJpdHNcbiAgICByZXN1bHQgKz0gdGhpcy5lbmNvZGluZ0J5SWQodGhpcy5zdGFydENvZGUpXG5cbiAgICAvL0FkZCB0aGUgZW5jb2RlZCBiaXRzXG4gICAgcmVzdWx0ICs9IHRoaXMuZW5jb2RlQ2xhc3MoKVxuXG4gICAgLy9BZGQgdGhlIGNoZWNrc3VtXG4gICAgcmVzdWx0ICs9IHRoaXMuZW5jb2RpbmdCeUlkKHRoaXMuY2hlY2tzdW0oKSlcblxuICAgIC8vQWRkIHRoZSBlbmQgYml0c1xuICAgIHJlc3VsdCArPSBlbmRCaW5cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGVuY29kaW5nQnlJZCAoaWQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvZGUxMjhiLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29kZTEyOGJbaV1bMl0gPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBjb2RlMTI4YltpXVsxXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHdlaWdodEJ5Q2hhcmFjdGVyIChjaGFyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2RlMTI4Yi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNvZGUxMjhiW2ldWzBdID09PSBjaGFyKSB7XG4gICAgICAgIHJldHVybiBjb2RlMTI4YltpXVsyXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgZW5jb2RpbmdCeUNoYXIgKGNoYXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvZGUxMjhiLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29kZTEyOGJbaV1bMF0gPT09IGNoYXIpIHtcbiAgICAgICAgcmV0dXJuIGNvZGUxMjhiW2ldWzFdXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENPREUxMjhcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvZW5jb2RpbmdzL2NvZGUxMjguanNcbiAqKi8iLCJpbXBvcnQgQ09ERTEyOCBmcm9tICcuL2NvZGUxMjgnXG5cbmNsYXNzIENPREUxMjhDIGV4dGVuZHMgQ09ERTEyOCB7XG4gIGNvbnN0cnVjdG9yIChjb2RlKSB7XG4gICAgc3VwZXIoY29kZSlcbiAgICB0aGlzLmNvZGUgPSB0aGlzLmNvZGUucmVwbGFjZSgvIC9nLCAnJylcbiAgICB0aGlzLnN0YXJ0Q29kZSA9IDEwNVxuICB9XG5cbiAgZW5jb2RlQ2xhc3MgKCkge1xuICAgIGxldCByZXN1bHQgPSAnJ1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvZGUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHJlc3VsdCArPSBzdXBlci5lbmNvZGluZ0J5SWQoTnVtYmVyKHRoaXMuY29kZS5zdWJzdHIoaSwgMikpKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjaGVja3N1bSgpIHtcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCB3ID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2RlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBzdW0gKz0gTnVtYmVyKHRoaXMuY29kZS5zdWJzdHIoaSwgMikpICogKHcpXG4gICAgICB3KytcbiAgICB9XG4gICAgcmV0dXJuIChzdW0gKyB0aGlzLnN0YXJ0Q29kZSkgJSAxMDNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDT0RFMTI4Q1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvY29kZTEyOGMuanNcbiAqKi8iLCJpbXBvcnQgcmVwZWF0IGZyb20gJ2NvcmUtanMvbGlicmFyeS9mbi9zdHJpbmcvcmVwZWF0J1xuXG5jbGFzcyBQaGFybWFjb2RlIHtcbiAgY29uc3RydWN0b3IgKGNvZGUpIHtcbiAgICB0aGlzLmNvZGUgPSBOdW1iZXIoY29kZSlcbiAgfVxuXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29kZSA+PSAzICYmIHRoaXMuY29kZSA8PSAxMzEwNzBcbiAgfVxuXG4gIC8vIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgemVyb3MgYXQgdGhlIGVuZCBvZiBhIHN0cmluZ1xuICBfY2FsY1plcm9zIChjb2RlKSB7XG4gICAgbGV0IGkgPSBjb2RlLmxlbmd0aCAtIDFcbiAgICBsZXQgemVyb3MgPSAwXG4gICAgd2hpbGUgKGNvZGVbaV0gPT09ICcwJyB8fCBpIDwgMCl7XG4gICAgICB6ZXJvcysrXG4gICAgICBpLS1cbiAgICB9XG4gICAgcmV0dXJuIHplcm9zXG4gIH1cblxuICBlbmNvZGVCaW5hcnkgKGNvZGUsIHN0YXRlKSB7XG4gICAgaWYgKGNvZGUubGVuZ3RoID09PSAwKSByZXR1cm4gJydcblxuICAgIGxldCBnZW5lcmF0ZWRcbiAgICBsZXQgbmV4dFN0YXRlID0gZmFsc2VcbiAgICBsZXQgblplcm9zID0gdGhpcy5fY2FsY1plcm9zKGNvZGUpXG5cbiAgICBpZiAoblplcm9zID09PSAwKSB7XG4gICAgICBnZW5lcmF0ZWQgPSBzdGF0ZSA/ICcwMDEnIDogJzAwMTExJ1xuICAgICAgbmV4dFN0YXRlID0gc3RhdGVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBnZW5lcmF0ZWQgPSByZXBlYXQoJzAwMScsIG5aZXJvcyAtIChzdGF0ZSA/IDEgOiAwKSlcbiAgICAgIGdlbmVyYXRlZCArPSAnMDAxMTEnXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuY29kZUJpbmFyeShjb2RlLnN1YnN0cigwLCBjb2RlLmxlbmd0aCAtIG5aZXJvcyAtIDEpLCBuZXh0U3RhdGUpICsgZ2VuZXJhdGVkXG4gIH1cblxuICBlbmNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5jb2RlQmluYXJ5KHRoaXMuY29kZS50b1N0cmluZygyKSwgdHJ1ZSkuc3Vic3RyKDIpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGhhcm1hY29kZVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9lbmNvZGluZ3MvcGhhcm1hY29kZS5qc1xuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJykuY29yZS5TdHJpbmcucmVwZWF0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zdHJpbmcvcmVwZWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xuXG4kZGVmKCRkZWYuUCwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4zLjEzIFN0cmluZy5wcm90b3R5cGUucmVwZWF0KGNvdW50KVxuICByZXBlYXQ6IHJlcXVpcmUoJy4vJC5zdHJpbmctcmVwZWF0Jylcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KXtcbiAgdmFyIHN0ciA9IFN0cmluZygkLmFzc2VydERlZmluZWQodGhpcykpXG4gICAgLCByZXMgPSAnJ1xuICAgICwgbiAgID0gJC50b0ludGVnZXIoY291bnQpO1xuICBpZihuIDwgMCB8fCBuID09IEluZmluaXR5KXRocm93IFJhbmdlRXJyb3IoXCJDb3VudCBjYW4ndCBiZSBuZWdhdGl2ZVwiKTtcbiAgZm9yKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpaWYobiAmIDEpcmVzICs9IHN0cjtcbiAgcmV0dXJuIHJlcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctcmVwZWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIENhbnZhcyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQ2FudmFzICh3LCBoKSB7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBjYW52YXMud2lkdGggPSB3IHx8IDMwMFxuICBjYW52YXMuaGVpZ2h0ID0gaCB8fCAxNTBcbiAgcmV0dXJuIGNhbnZhc1xufVxuXG5DYW52YXMuSW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICByZXR1cm4gaW1nXG59XG5cblxuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jYW52YXMtYnJvd3NlcmlmeS9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=