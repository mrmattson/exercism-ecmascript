class Hamming {
  compute (strand1, strand2) {
    let count = 0

    if (strand1.length !== strand2.length) {
      throw new Error('DNA strands must be of equal length.')
    }

    const strandArr1 = strand1.split('')
    const strandArr2 = strand2.split('')

    strandArr1.forEach((el, i) => {
      if (el !== strandArr2[i]) {
        count += 1
      }
    })

    return count
  }
}

export default Hamming
