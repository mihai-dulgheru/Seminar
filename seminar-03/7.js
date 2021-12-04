// Dat fiind un array de numere scrieți o funcție pentru a calcula media lor folosind reduce?
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mean = (array) => {
  return array.reduce((a, e) => {
    return (a * array.indexOf(e) + e) / (array.indexOf(e) + 1)
  }, 0)
}

console.log(mean(array))

const mean2 = (array) => array.reduce((a, e) => a + (e - a) / (array.indexOf(e) + 1), 0)

console.log(mean2(array))
