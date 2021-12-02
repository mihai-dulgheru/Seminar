// function addToArray() {
//     let args = arguments
//     let array = args[0]
//     for (let i = 1; i < args.length; i++) {
//         array.push(args[i])
//     }
//     return array
// }

function addToArray (array, ...args) {
  for (let i = 0; i < args.length; i++) {
    array.push(args[i])
  }
  return array
}

const array = ['a']

console.log(addToArray(array, 'b', 'c').join(', '))

// implementează o funcție care primește ca parametrii două array - uri de aceeași lungime și returnează un array cu elementele din
// cele două surse intercalate
function interspersedArrays (array1, array2) {
  const newArray = []
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i])
    newArray.push(array2[i])
  }
  return newArray
}

const a1 = [1, 2, 3]
const a2 = ['a', 'b', true]
console.log(interspersedArrays(a1, a2))
