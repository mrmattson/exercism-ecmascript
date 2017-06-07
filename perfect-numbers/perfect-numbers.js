export default class PerfectNumbers {
  classify (num) {
    if (num <= 0) {
      throw new Error('Classification is only possible for natural numbers.')
    }

    // First, find all the factors
    const integers = this.range(1, num - 1)
    const factors = integers.filter(integer => Number.isInteger(num / integer))

    // Second, sum up the factors
    const sum = factors.reduce((runningTotal, factor) => runningTotal + factor, 0)

    // Third, compare the sum to the original number
    return this.compare(num, sum)
  }

  range (start, stop) {
    const rangeArr = []
    for (let i = start; i <= stop; i += 1) {
      rangeArr.push(i)
    }
    return rangeArr
  }

  compare (num, sum) {
    if (num < sum) {
      return 'abundant'
    }
    if (num > sum) {
      return 'deficient'
    }
    return 'perfect'
  }
}
