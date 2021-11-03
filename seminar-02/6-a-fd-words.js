const sampleString = 'the quick brown fox jumps over the lazy dog';

const getCounts = (text) => {
    const words = text.split(' ');
    const result = {};
    for (const word of words) {
        if (word in result) {
            result[word]++;
        }
        else {
            result[word] = 1;
        }
    }
    for (const word in result) {
        if (Object.hasOwnProperty.call(result, word)) {
            result[word] /= words.length;
        }
    }
    return result;
};

console.log(getCounts(sampleString));