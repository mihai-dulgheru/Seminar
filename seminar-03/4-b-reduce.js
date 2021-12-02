const sampleArray = [1, 2, 3, 4, 5]

const reduce = (array, update, initialAccumulator = 0) => {
  let accumulator = initialAccumulator
  for (const element of array) {
    accumulator = update(accumulator, element)
  }
  return accumulator
}

console.log(reduce(sampleArray, (a, e) => a + e, 0))
