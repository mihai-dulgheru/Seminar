const crypto = require('crypto-js')

const word1 = 'word1'
const word2 = 'word2'

const crypt = crypto.AES.encrypt(JSON.stringify(word1), 'secret key 123').toString()

console.log(crypt)

const bytes = crypto.AES.decrypt(crypt, 'secret key 123')
const decrypt = JSON.parse(bytes.toString(crypto.enc.Utf8))

console.log(decrypt)

const KEY_WORD_2 = 'mysecretkey2'
const crypt2 = crypto.AES.encrypt(JSON.stringify(word2), KEY_WORD_2).toString()

console.log(crypt2)

const bytes2 = crypto.AES.decrypt(crypt2, KEY_WORD_2)
const decrypt2 = JSON.parse(bytes2.toString(crypto.enc.Utf8))

console.log(decrypt2)
