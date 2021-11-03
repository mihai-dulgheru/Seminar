// let sayHello = (name) => {
//     return `Hello, ${name}!`
// }

let sayHello = (name) => `Hello, ${name}!`;

console.log(sayHello(process.argv[2]));

// implemetează o funcție arrow care primește ca parametru un array de string și îmi returnează un singur string obținut prin 
// concatenarea string - urilor din array - ul primit ca parametru.

const sampleList = ['aaa', 'bbb', 'ccc', 'ddd'];

// const concat = (list) => {
//     let result = ''
//     // for (let i = 0; i < list.length; i++) {
//     //     result += list[i]
//     // }
//     for (const element of list) {
//         result += element
//     }
//     return result
// }

const concat = (list) => list.join('');

const params = process.argv.slice(2, process.argv.length);

console.log(concat(params));