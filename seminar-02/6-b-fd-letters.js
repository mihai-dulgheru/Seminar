// implementează o funcție care calculează frecvențele relative de apariție a unor litere într - un text, excluzând caracterul pentru
// spațiu
const sampleString = 'the quick brown fox jumps over the lazy dog'

const getCounts = (text) => {
  const result = {}
  for (const letter of text) {
    if (letter !== ' ') {
      if (letter in result) {
        result[letter]++
      } else {
        result[letter] = 1
      }
    }
  }
  const len = text.length - (text.split(' ').length - 1)
  for (const letter in result) {
    result[letter] /= len
  }

  const resultSorted = {}
  const keys = Object.keys(result)
  keys.sort()
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = result[key]
    resultSorted[key] = value
  }

  return resultSorted
}

console.log(getCounts(sampleString))
