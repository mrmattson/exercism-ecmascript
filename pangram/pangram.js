export default class Pangram {
  constructor (sentence) {
    this.sentence = sentence
  }

  _lowercase (str) {
    return str.toLowerCase()
  }

  _splitChars (str) {
    return str.split('')
  }

  _filterAthruZ (charArr) {
    return charArr.filter(char => /[a-z]/.test(char))
  }

  prepareSentence (sentence) {
    return this._filterAthruZ(this._splitChars(this._lowercase(sentence)))
  }

  _unique (charArr) {
    return charArr.filter((char, index, array) => !array.includes(char, index + 1))
  }

  _allCharsAtoZ (charArr) {
    return charArr.length === 26
  }

  containsAllCharsAtoZ (charArr) {
    return this._allCharsAtoZ(this._unique(charArr))
  }

  isPangram () {
    return this.containsAllCharsAtoZ(this.prepareSentence(this.sentence))
  }
}
