function bottleWords (numOfBottles) {
  return numOfBottles > 1 ? `${numOfBottles} bottles` : `${numOfBottles} bottle`
}

function normalVerse (numOfBottles) {
  return `${bottleWords(numOfBottles)} of beer on the wall, ${bottleWords(numOfBottles)} of beer.\nTake one down and pass it around, ${bottleWords(numOfBottles - 1)} of beer on the wall.\n`
}

function secondToLastVerse (numOfBottles) {
  return `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`
}

function lastVerse () {
  return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
}

function verse (numOfBottles) {
  switch (numOfBottles) {
    case 1:
      return secondToLastVerse()
    case 0:
      return lastVerse()
    default:
      return normalVerse(numOfBottles)
  }
}

function reverseRange (start, end) {
  const reverseRangeArr = []
  for (let i = start; i >= end; i -= 1) {
    reverseRangeArr.push(i)
  }
  return reverseRangeArr
}

function sing (startNumOfBottles = 99, endNumOfBottles = 0) {
  const bottles = reverseRange(startNumOfBottles, endNumOfBottles)
  return bottles.map(numOfBottles => verse(numOfBottles)).join('\n')
}

const Beer = {
  verse,
  sing
}

export default Beer
