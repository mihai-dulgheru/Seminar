const sampleInput = '1,23,456,2,3'

const sampleOutPut = [1, 23, 456, 2, 3]

// const convert = (s) => {
//     const result = []
//     const items = s.split(',')
//     for (const item of items) {
//         result.push(parseInt(item))
//     }
//     return result
// }

const convert = (s) => s.split(',').map(e => parseInt(e))

console.log(convert(sampleInput))
