export default class School {
  constructor () {
    this.rosterList = {}
  }
  roster () {
    return JSON.parse(JSON.stringify(this.rosterList))
  }

  add (student, grade) {
    if (this.rosterList[grade] === undefined) {
      this.rosterList[grade] = []
    }
    this.rosterList[grade].push(student)
    this.rosterList[grade] = this.rosterList[grade].sort()
  }

  grade (grade) {
    if (this.rosterList[grade] === undefined) {
      return []
    }
    return [...this.rosterList[grade]]
  }
}
