export default class Transcriptor {
  toRna (nucleotides) {
    const nucleotidesArr = nucleotides.split('')

    const rna = nucleotidesArr.map((nucleotide) => {
      switch (nucleotide) {
        case 'G':
          return 'C'
        case 'C':
          return 'G'
        case 'T':
          return 'A'
        case 'A':
          return 'U'
        default:
          throw new Error('Invalid input DNA.')
      }
    })

    return rna.join('')
  }
}
