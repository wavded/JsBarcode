import EAN from './ean'

class UPC extends EAN {
  constructor(code) {
    super(`0${code}`)
  }
}

export default UPC