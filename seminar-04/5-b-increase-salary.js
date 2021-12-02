// implementați funcția increaseSalary care primește ca parametrii un array de salarii și un număr reprezentând procentul cu care se
// vor mări(ex 10).Funcția aruncă excepții dacă primul parametru nu este un array sau al doilea parametru nu este un număr.

const increaseSalaries = (salaries, percent) => {
  if (!Array.isArray(salaries)) {
    throw new Error('salaries should be an array')
  }
  if (!(typeof percent === 'number' || percent instanceof Number)) {
    throw new Error('percent should be a number')
  }
  return salaries.map(e => e * (percent + 100) / 100)
}

try {
  console.log(increaseSalaries([1000, 1500, 2000, 2300], 10))
  // console.log(increaseSalaries([1000, 1500, 2000, 2300], '10'));
  console.log(increaseSalaries({}, 10))
} catch (error) {
  console.warn(error)
}
