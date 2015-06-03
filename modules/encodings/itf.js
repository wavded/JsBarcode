//The structure for the all digits, 1 is wide and 0 is narrow
const digitStructure = {
  0: '00110',
  1: '10001',
  2: '01001',
  3: '11000',
  4: '00101',
  5: '10100',
  6: '01100',
  7: '00011',
  8: '10010',
  9: '01010'
}

// The start bits
const startBin = '1010'
// The end bits
const endBin = '11101'

// Regexp for a valid Inter25 code
const validRe = /^([0-9][0-9])+$/

class ITF {
  constructor (code) {
    this.code = String(code)
  }

  isValid() {
    return validRe.test(this.code)
  }

  encode() {
    // Create the variable that should be returned at the end of the function
    let result = ''

    // Always add the same start bits
    result += startBin

    // Calculate all the digit pairs
    for (let i = 0; i < this.code.length; i += 2) {
      result += this.calculatePair(this.code.substr(i, 2))
    }

    // Always add the same end bits
    result += endBin

    return result
  }

  calculatePair (twoNumbers) {
    let result = ''

    let number1Struct = digitStructure[twoNumbers[0]]
    let number2Struct = digitStructure[twoNumbers[1]]

    // Take every second bit and add to the result
    for (let i = 0; i < 5; i++) {
      result += (number1Struct[i] === '1') ? '111' : '1'
      result += (number2Struct[i] === '1') ? '000' : '0'
    }

    return result
  }
}

export default ITF