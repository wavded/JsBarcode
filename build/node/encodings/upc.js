'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ean = require('./ean');

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