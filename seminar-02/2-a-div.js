function checkDivisible (n, divisor) {
  if (n % divisor) {
    return false
  } else {
    return true
  }
}

console.log(checkDivisible(10, 2))
console.log(checkDivisible(10, 3))

// implementează o funcție care returnează numărul de caractere diferite între două string - uri de aceeași lungime primite ca parametri.
// Dacă string - urile primite nu sunt de aceeași lungime, funcția va returna - 1.

function noCharacters (string1, string2) {
  if (string1.length !== string2.length) {
    return -1
  } else {
    let count = 0
    for (const i in string1) {
      if (string1[i] !== string2[i]) { count++ }
    }
    return count
  }
}

const params = ['abcdefg', 'xycdeab']

console.log(noCharacters(...params))
