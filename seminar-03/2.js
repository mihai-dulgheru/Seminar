const squareDimensions = [3, 5, 12, 3, 5, 3]

// const getTotalArea = (squareDimensions) => {
//     return squareDimensions.map((side) => {
//         return side * side
//     }).reduce((prev, current) => {
//         return prev + current
//     }, 0)
// }

const getTotalArea = (squareDimensions) => squareDimensions.map((side) => side * side).reduce((prev, current) => prev + current, 0)

const result = getTotalArea(squareDimensions)
console.log('result: ', result)

// implementați o funcție care primește ca parametrii un array de numere și un număr și returnează suma tuturor numerelor din array
// divizibile cu cel de - al doilea parametru.

const getSum = (array, number) => array.filter((e) => e % number === 0).reduce((p, c) => p + c, 0)

const array = [1, 2, 3, 4, 5, 6, 7, 8]
const number = 3
console.log(getSum(array, number))
