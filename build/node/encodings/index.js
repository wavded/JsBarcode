'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ean = require('./ean');

var _ean2 = _interopRequireDefault(_ean);

var _upc = require('./upc');

var _upc2 = _interopRequireDefault(_upc);

var _itf = require('./itf');

var _itf2 = _interopRequireDefault(_itf);

var _itf14 = require('./itf14');

var _itf142 = _interopRequireDefault(_itf14);

var _code39 = require('./code39');

var _code392 = _interopRequireDefault(_code39);

var _code128b = require('./code128b');

var _code128b2 = _interopRequireDefault(_code128b);

var _code128c = require('./code128c');

var _code128c2 = _interopRequireDefault(_code128c);

var _pharmacode = require('./pharmacode');

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