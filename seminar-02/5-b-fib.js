const fib = (order) => {
  switch (order) {
    case 0:
    case 1:
      return 1
    default:
      return fib(order - 1) + fib(order - 2)
  }
}

if (process.argv.length <= 2) {
  console.log('not enough args')
} else {
  console.log(fib(parseInt(process.argv[2])))
}
