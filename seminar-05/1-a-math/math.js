// export const a = 1;

const a = 3.1415 // Math.PI

const f1 = (a, b) => {
  return a + b
}

const f2 = (a, b) => {
  return a * b
}

export { a as pi, f1 as Sum, f2 as Product }
