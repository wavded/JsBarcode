import encodings from './encodings'

let api = {}

/* eslint no-loop-func:0 */
for (let name in encodings) {
	api[name] = (...args) => generateBarcodeDataUri(encodings[name], ...args)
}

export default api

const defaults = {
	width: 2,
	height: 100,
	quite: 10,
	displayValue: false,
	font: 'monospace',
	textAlign: 'center',
	fontSize: 12,
	backgroundColor: '',
	lineColor: '#000'
}

function _drawBarcodeText (text, canvas, opts) {
	let ctx	= canvas.getContext('2d')
	let x, y

	y = opts.height

	ctx.font = `${opts.fontSize}px ${opts.font}`
	ctx.textBaseline = 'bottom'
	ctx.textBaseline = 'top'

	if (opts.textAlign === 'left') {
		x = opts.quite
		ctx.textAlign = 'left'
	}
	else if (opts.textAlign === 'right') {
		x = canvas.width - opts.quite
		ctx.textAlign = 'right'
	}
	else {
		x = canvas.width / 2
		ctx.textAlign = 'center'
	}

	ctx.fillText(text, x, y)
}

function generateBarcodeDataUri (Encoding, code, opts) {
	/* eslint complexity:0 */
	opts = Object.assign({}, defaults, opts)

	let canvas = document.createElement('canvas')
	let encoder = new Encoding(code)

	// Abort if the barcode format does not support the content
	if (!encoder.isValid()) {
		throw new Error('Content is not supported by the encoding')
	}

	// Encode the content
	var binaryString = encoder.encode()

	// Get the canvas context
	var ctx	= canvas.getContext('2d')

	// Set the width and height of the barcode
	canvas.width = binaryString.length * opts.width + 2 * opts.quite

  // Set extra height if the value is displayed under the barcode.
  canvas.height = opts.height + (opts.displayValue ? opts.fontSize * 1.3 : 0)

	// Paint the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height)

	if (opts.backgroundColor) {
		ctx.fillStyle = opts.backgroundColor
		ctx.fillRect(0, 0, canvas.width, canvas.height)
	}

	// Change to lineColor to paint the lines
	ctx.fillStyle = opts.lineColor

	// Creates the barcode out of the binary string
	for (let i = 0; i < binaryString.length; i++) {
		let x = i * opts.width + opts.quite
		if (binaryString[i] === '1') {
			ctx.fillRect(x, 0, opts.width, opts.height)
		}
	}

	// Add value below if enabled
	if (opts.displayValue) {
		_drawBarcodeText(code, canvas, opts)
	}

	// Grab the dataUri from the canvas
	return canvas.toDataURL('image/png')
}