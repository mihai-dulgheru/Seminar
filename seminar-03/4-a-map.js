const sampleArray = [1, 2, 3, 4, 5]

const map = (array, transformation) => {
  const result = []
  for (const element of array) {
    result.push(transformation(element))
  }
  return result
}

console.log(map(sampleArray, (x) => x * 2))

// reimplementați metoda reduce(reduceleft) ca o funcție globală
const reduce = (array, update, initialValue) => {
  let accumulator = initialValue
  for (const element of array) {
    accumulator = update(accumulator, element)
  }
  return accumulator
}

console.log(reduce([1, 2, 3, 4], (a, e) => a + e, 0))
