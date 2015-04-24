'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _EAN = require('./ean');

var _EAN2 = _interopRequireWildcard(_EAN);

var _UPC = require('./upc');

var _UPC2 = _interopRequireWildcard(_UPC);

var _ITF = require('./itf');

var _ITF2 = _interopRequireWildcard(_ITF);

var _ITF14 = require('./itf14');

var _ITF142 = _interopRequireWildcard(_ITF14);

var _CODE39 = require('./code39');

var _CODE392 = _interopRequireWildcard(_CODE39);

var _CODE128B = require('./code128b');

var _CODE128B2 = _interopRequireWildcard(_CODE128B);

var _CODE128C = require('./code128c');

var _CODE128C2 = _interopRequireWildcard(_CODE128C);

var _Pharmacode = require('./pharmacode');

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