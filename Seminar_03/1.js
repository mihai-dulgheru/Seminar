const words = [
    "fox",
    "wolf",
    "snake",
    "crocodile",
    "lion",
    "cat",
    "crocodile",
    "horse"
];

const forbiddenWord = "crocodile";
const minLength = 4;

// const filterWords = (words, forbiddenWord, minLength) => {
//     const result = words.filter((word) => {
//         if (word !== forbiddenWord && word.length >= minLength) {
//             return true;
//         }
//         return false
//     })
//     return result
// }

const filterWords = (words, forbiddenWord, minLength) =>
    words.filter((word) => word !== forbiddenWord && word.length >= minLength);


console.log(filterWords(words, forbiddenWord, minLength));

// folosiți metodele map și filter pentru a procesa un array de numere reprezentând ani de naștere obținând vârstele peste 18 ani.
const getCurrentAges = (years) => years.map(year => new Date().getFullYear() - year).filter(year => year > 18);

const years = [1980, 2000, 2005, 1995, 2012, 2007];

const result = getCurrentAges(years);
console.log('result :>> ', result);