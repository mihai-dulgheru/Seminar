let crypto = require('crypto-js');

let word1 = "word1";
let word2 = "word2";

let crypt = crypto.AES.encrypt(JSON.stringify(word1), "secret key 123").toString();

console.log(crypt);

let bytes = crypto.AES.decrypt(crypt, "secret key 123");
let decrypt = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decrypt);

const KEY_WORD_2 = 'mysecretkey2';
let crypt2 = crypto.AES.encrypt(JSON.stringify(word2), KEY_WORD_2).toString();

console.log(crypt2);

let bytes2 = crypto.AES.decrypt(crypt2, KEY_WORD_2);
let decrypt2 = JSON.parse(bytes2.toString(crypto.enc.Utf8));

console.log(decrypt2);