const fetch = require('node-fetch')

async function RLECompression (url) {
  const text = await (await fetch(url)).text()

  let result = ''
  if (text.length > 0) {
    let count = 1
    let value = text[0]
    for (let i = 1; i < text.length; i++) {
      if (text[i] === value) {
        count += 1
      } else {
        switch (value) {
          case '\r':
            result += count + '\\' + 'r'
            break
          case '\n':
            result += count + '\\' + 'n'
            break
          default:
            result += count + value
            break
        }
        count = 1
        value = text[i]
      }
    }
    switch (text[text.length - 1]) {
      case '\n':
        result += count + '\\' + 'n'
        break
      default:
        result += count + text[text.length - 1]
        break
    }
  }
  return result
}

async function main () {
  const url = 'http://127.0.0.1:8887/file.txt'
  const compressedText = await RLECompression(url)
  console.log(compressedText)
}

main()
