export default class Anagram {
  static sort (word) {
    return word.split('').sort().join('')
  }

  static normalize (word) {
    return Anagram.sort(word.toLowerCase())
  }

  constructor (word) {
    this.word = word
    this.lowerCaseWord = this.word.toLowerCase()
    this.normedWord = Anagram.normalize(this.word)
  }

  isNotOwn (word) {
    return word.toLowerCase() !== this.lowerCaseWord
  }

  sameExactLetters (word) {
    return Anagram.normalize(word) === this.normedWord
  }

  matches (...params) {
    const wordList = Array.isArray(params[0]) ? params[0] : params
    return wordList.filter(word => this.sameExactLetters(word) && this.isNotOwn(word))
  }
}
