import CODE128 from './code128'

class CODE128B extends CODE128 {
  constructor (code) {
    super(code)
    this.startCode = 104
  }

  encodeClass () {
    let result = ''
    for (let i = 0; i < this.code.length; i++) {
      result += super.encodingByChar(this.code[i])
    }
    return result
  }

  checksum() {
    let sum = 0
    for (let i = 0; i < this.code.length; i++) {
      sum += super.weightByCharacter(this.code[i]) * (i + 1)
    }
    return (sum + this.startCode) % 103
  }
}

export default CODE128B