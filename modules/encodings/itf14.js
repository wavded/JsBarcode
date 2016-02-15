import ITF from './itf'

const validRe = /^[0-9]{13,14}$/

class ITF14 extends ITF {
  constructor(code) {
    super(code)

    if (code.length === 13) {
      this.code += this.checksum()
    }
  }

  isValid() {
    return super.isValid() && validRe.test(this.code) &&
      Number(this.code[13]) === this.checksum()
  }

  checksum() {
    let result = 0

    for (let i = 0; i < 13; i++) {
      result += Number(this.code[i]) * (3 - (i % 2) * 2)
    }

    return Math.ceil(result / 10) * 10 - result;
  }
}

export default ITF14
