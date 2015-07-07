'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _encodings = require('./encodings');

var _encodings2 = _interopRequireDefault(_encodings);

var _canvasBrowserify = require('canvas-browserify');

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