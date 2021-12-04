const fs = require('fs')
const rimraf = require('rimraf')

// console.log(fs);

fs.mkdirSync('temp')
fs.writeFileSync('./temp/somefile.data', 'i am a file')

rimraf.sync('./temp')
