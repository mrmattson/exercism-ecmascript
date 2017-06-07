class Leap {
  constructor (year) {
    this.year = year
  }

  isLeap () {
    const year = this.year

    if (year % 4 === 0) {
      if (year % 100 !== 0) {
        return true
      } else if (year % 400 === 0) {
        return true
      }
    }
    return false
  }
}

export default Leap
