const sayHello = (name) => `Hello, ${name}!`

console.log(sayHello(process.argv[2]))

// implemetează o funcție arrow care primește ca parametru un array de string și îmi returnează un singur string obținut prin
// concatenarea string - urilor din array - ul primit ca parametru
const concat = (stringArray) => stringArray.join('')

console.log(concat(['abc', 'def', 'ghi', '123']))
