export default class Gigasecond {
  constructor (date) {
    this.dateSeconds = date.valueOf() / 1000
  }

  date () {
    const anniversarySeconds = this.dateSeconds + 1e9
    return new Date(anniversarySeconds * 1000)
  }
}
