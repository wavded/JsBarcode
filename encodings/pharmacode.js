class Pharmacode {
  constructor (code) {
    this.code = Number(code)
  }

  isValid() {
    return this.code >= 3 && this.code <= 131070
  }

  // A helper function to calculate the zeros at the end of a string
  _calcZeros (code) {
    let i = code.length - 1
    let zeros = 0
    while (code[i] === '0' || i < 0){
      zeros++
      i--
    }
    return zeros
  }

  encodeBinary (code, state) {
    if (code.length === 0) return ''

    let generated
    let nextState = false
    let nZeros = this._calcZeros(code)

    if (nZeros === 0) {
      generated = state ? '001' : '00111'
      nextState = state
    }
    else {
      generated = '001'.repeat(nZeros - (state ? 1 : 0))
      generated += '00111'
    }
    return this.encodeBinary(code.substr(0, code.length - nZeros - 1), nextState) + generated
  }

  encode() {
    return this.encodeBinary(this.code.toString(2), true).substr(2)
  }
}

export default Pharmacode