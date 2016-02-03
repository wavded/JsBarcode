'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ean = require('./ean');

var _ean2 = _interopRequireDefault(_ean);

var _upc = require('./upc');

var _upc2 = _interopRequireDefault(_upc);

var _itf = require('./itf');

var _itf2 = _interopRequireDefault(_itf);

var _itf3 = require('./itf14');

var _itf4 = _interopRequireDefault(_itf3);

var _code = require('./code39');

var _code2 = _interopRequireDefault(_code);

var _code128b = require('./code128b');

var _code128b2 = _interopRequireDefault(_code128b);

var _code128c = require('./code128c');

var _code128c2 = _interopRequireDefault(_code128c);

var _pharmacode = require('./pharmacode');

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