//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey (message) {
    const cleanMessage = message
    if (this.isYelling(cleanMessage)) {
      return this.respondToYelling()
    }
    if (this.isQuestion(cleanMessage)) {
      return this.respondToQuestion()
    }
    if (this.isBlank(cleanMessage)) {
      return this.respondToBlank()
    }
    return this.respondToAnythingElse()
  }

  isQuestion (message) {
    if (message.endsWith('?')) {
      return true
    }
    return false
  }

  respondToQuestion () {
    return 'Sure.'
  }

  isYelling (message) {
    const allUppercase = message === message.toUpperCase()
    const containsLetters = /[A-Za-z]/.test(message)
    if (allUppercase && containsLetters) {
      return true
    }
    return false
  }

  respondToYelling () {
    return 'Whoa, chill out!'
  }

  isBlank (message) {
    if (message.trim() === '') {
      return true
    }
    return false
  }

  respondToBlank () {
    return 'Fine. Be that way!'
  }

  respondToAnythingElse () {
    return 'Whatever.'
  }
}

export default Bob
