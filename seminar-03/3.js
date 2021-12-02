const filter = (array, predicate) => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i)) {
      result.push(array[i])
    }
  }
  return result
}

console.log(filter([1, 2, 3, 4, 5], (e, i) => e > 3 && i > 2))
