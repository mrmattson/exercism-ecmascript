function range (start, end) {
  const numRange = []
  for (let i = start; i <= end; i += 1) {
    numRange.push(i)
  }
  return numRange
}

function reverseRange (start, end) {
  const numRange = []
  for (let i = start; i >= end; i -= 1) {
    numRange.push(i)
  }
  return numRange
}

export default class Song {
  static animal (num) {
    const animals = [
      '',
      'fly',
      'spider',
      'bird',
      'cat',
      'dog',
      'goat',
      'cow',
      'horse'
    ]
    return animals[num]
  }

  static firstLine (num) {
    return `I know an old lady who swallowed a ${Song.animal(num)}.\n`
  }

  static sillySecondLine (num) {
    const sillyLine = [
      '',
      '',
      'It wriggled and jiggled and tickled inside her.\n',
      'How absurd to swallow a bird!\n',
      'Imagine that, to swallow a cat!\n',
      'What a hog, to swallow a dog!\n',
      'Just opened her throat and swallowed a goat!\n',
      'I don\'t know how she swallowed a cow!\n'
    ]
    return sillyLine[num]
  }

  static middleLine (num) {
    return num === 3 ? `She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n` : `She swallowed the ${Song.animal(num)} to catch the ${Song.animal(num - 1)}.\n`
  }

  static middleLines (num) {
    return reverseRange(num, 2).map(middleNum => Song.middleLine(middleNum)).join('')
  }

  static lastLine () {
    return 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
  }

  verse (verseNum) {
    let song = Song.firstLine(verseNum)

    if (verseNum === 8) {
      song += 'She\'s dead, of course!\n'
      return song
    }

    if (verseNum >= 2) {
      song += Song.sillySecondLine(verseNum)
      song += Song.middleLines(verseNum)
    }

    song += Song.lastLine()

    return song
  }

  verses (firstVerseNum, lastVerseNum) {
    return `${range(firstVerseNum, lastVerseNum).map(num => `${this.verse(num)}`).join('\n')}\n`
  }
}
