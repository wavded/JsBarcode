import ioBarcode from '../modules'
import { join } from 'path'
import fs from 'fs'

let date = new Date()
let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
let opts = { displayValue: true }

/**
 * Currently exists an issue in node-canvas on OSX for fonts
 * This test works good on Ubuntu 14.04
 * https://github.com/Automattic/node-canvas/issues/548
 */
fs.writeFile(join(__dirname, 'server-test.html'), `

<!doctype html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <title>JsBarcode - Server Render</title>
  </head>
  <body>
    <a href="/">Client Render Test</a>

    <h1>Example: Barcode Clock</h1>
    <img src="${ioBarcode.CODE128B(time, opts).toDataURL()}" />

    <h1>Example: Options</h1>
    <img src="
      ${ioBarcode.Pharmacode(1234, {
        displayValue: true,
        backgroundColor: 'lightblue',
        lineColor: 'blue',
        textAlign: 'right',
        font: 'Arial',
        fontSize: 14,
        quite: 50,
        height: 50,
        width: 10
      }).toDataURL()}
    " />

    <h1>Encodings</h1>

    <h2>UPC</h2>
    <img src="${ioBarcode.UPC('123456789999', opts).toDataURL()}" />

    <h2>EAN</h2>
    <img src="${ioBarcode.EAN('1234567890128', opts).toDataURL()}" />

    <h2>ITF</h2>
    <img src="${ioBarcode.ITF('123456', opts).toDataURL()}" />

    <h2>ITF14</h2>
    <img src="${ioBarcode.ITF14('10012345000017', opts).toDataURL()}" />

    <h2>CODE39</h2>
    <img src="${ioBarcode.CODE39('JSBARCODE', opts).toDataURL()}" />

    <h2>CODE128B</h2>
    <img src="${ioBarcode.CODE128B('JsBarcode', opts).toDataURL()}" />

    <h2>CODE128C</h2>
    <img src="${ioBarcode.CODE128C('JcB', opts).toDataURL()}" />

    <h2>Pharmacode</h2>
    <img src="${ioBarcode.Pharmacode(1234, opts).toDataURL()}" />

  </body>
</html>

`)