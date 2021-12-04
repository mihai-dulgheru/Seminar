const sampleString = 'i am a {type} string'
const sampleFormat = { type: 'special' }

String.prototype.format = function (formatSpec) {
  let modified = this
  for (const prop in formatSpec) {
    if (modified.indexOf('{' + prop + '}') !== -1) {
      modified = modified.replace('{' + prop + '}', formatSpec[prop])
    }
  }
  return modified
}

// console.log(format(sampleString, sampleFormat))
console.log('i am a {type} string'.format(sampleFormat))
