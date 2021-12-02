// implementați metoda 'times' pe tipul Number, astfel încât 3.times(() => {}) să execute funcția de 3 ori.
Number.prototype.times = function (callback) {
  for (let index = 0; index < this.valueOf(); index++) {
    callback()
  }
}

const number = new Number(5)
number.times(() => { console.log(`the function was called ${number} times`) })

let factorial = 1
let i = 1
number.times(() => factorial *= i++)
console.log(factorial)

number.times(() => console.log(Math.random()))
