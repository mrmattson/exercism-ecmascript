export default class PhoneNumber {
  static breakApartNum (phoneNum) {
    return phoneNum.split('')
  }

  static stripSeparators (phoneNumArr) {
    return phoneNumArr.filter(char => !/[ ()-.]/.test(char))
  }

  static prepNum (phoneNum) {
    const PN = PhoneNumber
    return PN.stripSeparators(PN.breakApartNum(phoneNum))
  }

  static assembleNum (phoneNumArr) {
    return phoneNumArr === null ? null : phoneNumArr.join('')
  }

  static digitsOnly (phoneNumArr) {
    if (phoneNumArr === null) {
      return null
    }
    return phoneNumArr.every(char => /[0-9]/.test(char)) ? phoneNumArr : null
  }

  static removeFirstDigit (phoneNumArr) {
    return [...phoneNumArr.slice(1)]
  }

  static length (phoneNumArr) {
    if (phoneNumArr === null) {
      return null
    }
    if (phoneNumArr[0] === '1') {
      console.log('This is not completely correct format.\nIf number starts with 1, it can be 11 digits long.\nThe tests don\'t enforce (NXX)-NXX-XXXX.')
    }
    if (phoneNumArr[0] === '1' && phoneNumArr.length === 11) {
      // If number starts with 1, it can be 11 digits long
      return phoneNumArr.length === 11 ? PhoneNumber.removeFirstDigit(phoneNumArr) : null
    }
    return phoneNumArr.length === 10 ? phoneNumArr : null
  }

  static processNum (phoneNumArr) {
    const PN = PhoneNumber
    return PN.length(PN.digitsOnly(phoneNumArr))
  }

  constructor (phoneNum) {
    this.phoneNum = phoneNum
  }

  number () {
    const PN = PhoneNumber
    return PN.assembleNum(PN.processNum(PN.prepNum(this.phoneNum)))
  }
}
