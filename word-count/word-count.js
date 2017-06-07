export default class Words {
  count (string) {
    const stringArr = string.trim().split(/[\s]+/)
    return stringArr.reduce((count, word) => {
      const newCount = Object.assign({}, count)
      const normalizedWord = word.toLowerCase()
      if (newCount[normalizedWord] && Number.isFinite(newCount[normalizedWord])) {
        newCount[normalizedWord] += 1
      } else {
        newCount[normalizedWord] = 1
      }
      return newCount
    }, {})
  }
}
