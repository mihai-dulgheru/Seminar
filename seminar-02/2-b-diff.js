function countDiff (first, second) {
  if (first.length !== second.length) {
    return -1
  } else {
    let count = 0
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        count++
      }
    }
    return count
  }
}

console.log(countDiff('car', 'car'))
console.log(countDiff('car', 'cars'))
console.log(countDiff('car', 'par'))
