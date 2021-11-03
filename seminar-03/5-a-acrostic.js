const dictionary = ['the', 'quick', 'brown', 'jumps', 'over', 'the', 'lazy', 'dog'];

const sampleText = `
    best
    read
    on
    windy
    nights
`;

const checkAcrostic = (text, dictionary) => {
    const candidate = text.split('\n').filter(e => e).map(e => e.trim()).map(e => e[0]).join('');
    return dictionary.indexOf(candidate) !== -1;
};

console.log(checkAcrostic(sampleText, dictionary));

// implementați cenzurarea unui text printr - o funcție.Funcția primește un șir de caractere și un dicționar sub forma unui array.
// De exemplu pentru șirul "javascript este minunat" și dicționarul["este"] funcția va produce "javascript e**e minunat".

const sampleString = "javascript este minunat";
const dict = ["este"];

const censor = (str, dict) => {
    let modified = str;
    for (let word of str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").split(' ')) {
        if (dict.indexOf(word) !== -1) {
            const newWord = word[0] + '*'.repeat(word.length - 2) + word[word.length - 1];
            modified = modified.replace(word, newWord);
        }
    }
    return modified;
};

console.log(censor(sampleString, dict));;

// ioana 6 - ajutor, solutie