// The L (left) type of encoding
const Lbinary = {
  0: '0001101',
  1: '0011001',
  2: '0010011',
  3: '0111101',
  4: '0100011',
  5: '0110001',
  6: '0101111',
  7: '0111011',
  8: '0110111',
  9: '0001011'
};

// The G type of encoding
const Gbinary = {
  0: '0100111',
  1: '0110011',
  2: '0011011',
  3: '0100001',
  4: '0011101',
  5: '0111001',
  6: '0000101',
  7: '0010001',
  8: '0001001',
  9: '0010111'
};

// The R (right) type of encoding
const Rbinary = {
  0: '1110010',
  1: '1100110',
  2: '1101100',
  3: '1000010',
  4: '1011100',
  5: '1001110',
  6: '1010000',
  7: '1000100',
  8: '1001000',
  9: '1110100'
};

// The left side structure in EAN-13
const EANstruct = {
  0: 'LLLLLL',
  1: 'LLGLGG',
  2: 'LLGGLG',
  3: 'LLGGGL',
  4: 'LGLLGG',
  5: 'LGGLLG',
  6: 'LGGGLL',
  7: 'LGLGLG',
  8: 'LGLGGL',
  9: 'LGGLGL'
};

// Valid EAN code
const validRe = /^[0-9]{13}$/;
// The start bits
const startBin = '101';
// The end bits
const endBin = '101';
// The middle bits
const middleBin = '01010';

class EAN {
  constructor(code) {
    this.code = String(code);
  }

  isValid() {
    return validRe.test(this.code) && Number(this.code[12]) === this.checksum();
  }

  checksum() {
    let result = 0;

    for (let i = 0; i < 12; i += 2) {
      result += Number(this.code[i]);
    }
    for (let i = 1; i < 12; i += 2) {
      result += Number(this.code[i]) * 3;
    }

    return (10 - result % 10) % 10;
  }

  // Create the binary representation of the EAN code
  // number needs to be a string
  encode() {
    // Create the return variable
    let result = '';

    // Get the first digit (for later determination of the encoding type)
    let firstDigit = this.code[0];

    // Get the number to be encoded on the left side of the EAN code
    let leftSide = this.code.substr(1, 7);

    // Get the number to be encoded on the right side of the EAN code
    let rightSide = this.code.substr(7, 6);

    // Add the start bits
    result += startBin;

    // Add the left side
    result += this.encodeStruct(leftSide, EANstruct[firstDigit]);

    // Add the middle bits
    result += middleBin;

    // Add the right side
    result += this.encodeStruct(rightSide, 'RRRRRR');

    // Add the end bits
    result += endBin;

    return result;
  }

  // Convert a number array to the representing
  encodeStruct(codePart, struct) {
    // Create the variable that should be returned at the end of the function
    let result = '';

    // Loop all the numbers
    for (let i = 0; i < codePart.length; i++) {
      // Using the L, G or R encoding and add it to the returning variable
      if (struct[i] === 'L') {
        result += Lbinary[codePart[i]];
      } else if (struct[i] === 'G') {
        result += Gbinary[codePart[i]];
      } else if (struct[i] === 'R') {
        result += Rbinary[codePart[i]];
      }
    }
    return result;
  }
}

export default EAN;