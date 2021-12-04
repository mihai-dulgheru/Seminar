function occurences (text, character) {
  // let count = 0
  // for (let i = 0; i < text.length; i++) {
  //     if (text.charAt(i) === character) {
  //         count++
  //     }
  // }
  // return count

  return text.split(character).length - 1
}

const o = (text, character) => text.split(character).length - 1

console.log(occurences('sample text', 'e'))
console.log(o('sample text', 'e'))

// implementează o funcție care primește ca parametru o listă de numere și returnează un array conținând acele numere
const sampleInput = '1,23,456,2,3'

const sampleOutPut = [1, 23, 456, 2, 3]

const convert = (list, sep = ',') => list.split(sep).map(e => parseInt(e))

console.log(convert(sampleInput))
