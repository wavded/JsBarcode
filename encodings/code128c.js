import CODE128 from './code128'

class CODE128C extends CODE128 {
  constructor (code) {
    super(code)
    this.code = this.code.replace(/ /g, '')
    this.startCode = 105
  }

  encodeClass () {
    let result = ''
    for(let i = 0; i < this.code.length; i += 2) {
      result += super.encodingById(Number(this.code.substr(i, 2)))
    }
    return result
  }

  checksum() {
    let sum = 0
    let w = 1
    for (let i = 0; i < this.code.length; i += 2) {
      sum += Number(this.code.substr(i, 2)) * (w)
      w++
    }
    return (sum + this.startCode) % 103
  }
}

export default CODE128C