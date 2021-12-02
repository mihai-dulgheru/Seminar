const sampleList = ['aaa', 'bbb', 'ccc', 'dddd']

const concat = (list) => list.join('')

const params = process.argv.slice(2, process.argv.length)

console.log(concat(params))
