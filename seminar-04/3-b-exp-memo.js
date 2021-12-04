// implementați o variantă recursiva a unei funcții de exponențiere. Atât rezultatele finale cât și cele intermediare vor fi memoizate.
const expGen = () => {
  const cache = {}

  const exp = (...args) => {
    const key = JSON.stringify(args)
    if (key in cache) {
      console.log('from cache ' + key)
      return cache[key]
    } else {
      const [x, n] = args
      let result
      if (n === 0) {
        result = 1
      } else {
        if (n % 2 === 0) {
          result = exp(x * x, n / 2)
        } else {
          result = x * exp(x * x, Math.floor(n / 2))
        }
      }
      console.log('calculated ' + key)
      cache[key] = result
      return result
    }
  }
  return exp
}

const exp = expGen()

const before = performance.now()
const result = exp(5, 6)
console.log('function took ' + (performance.now() - before))

console.log(result)

console.log(exp(25, 3))
