const checkPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      return false
    }
  }
  return true
}

if (process.argv.length < 3) {
  console.log('not enough params')
} else {
  console.log(checkPrime(parseInt(process.argv[2])))
}

// implementează o funcție care calculează elementul de un anumit ordin al șirului lui Fibonacci, primind acest ordin ca parametru de
// linie de comandă
const Fibonacci = (ordin) => {
  if (ordin > 0) {
    elem = [1, 1]
    for (let i = 3; i <= ordin; i++) {
      temp = elem[0] + elem[1]
      elem[0] = elem[1]
      elem[1] = temp
    }
    return elem[1]
  }
}

if (process.argv.length >= 3) {
  console.log(Fibonacci(process.argv[2]))
}
