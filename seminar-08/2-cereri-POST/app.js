const express = require('express')
const app = express()
const port = 3000
const Book = require('./Book')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to my API')
})

app.listen(port, () => {
  console.log('Running on port ' + port)
})

const books = [
  new Book(1, 'Dune', 'sf', 'Frank Herbert'),
  new Book(2, 'Robinson Crusoe', 'adventures', 'Daniel Defoe'),
  new Book(3, 'Foundation', 'sf', 'Asimov')
]

app.get('/books', (req, res) => {
  let filteredBooks = []
  if (req.query.genre) {
    filteredBooks = books.filter((e) => e.genre === req.query.genre)
  } else {
    filteredBooks = books
  }
  res.json(filteredBooks)
})

app.post('/addBooks', (req, res) => {
  const newBook = new Book(
    req.body.id,
    req.body.name,
    req.body.genre,
    req.body.author
  )
  books.push(newBook)
  console.log(books)
  return res.json(newBook)
})

// app.post("/addBooksValidated", (req, res) => {
//     let id = req.body.id;
//     let name = req.body.name;
//     let genre = req.body.genre;
//     let author = req.body.author;
//     if (
//         books.find((e) => e.id === id) ||
//         name === "" ||
//         genre === "" ||
//         author === ""
//     ) {
//         res.status(400).json({ message: "Bad Request" });
//     } else {
//         let book = new Book(id, name, genre, author);
//         books.push(book);
//         res.status(201).json({ message: "Created" });
//     }
// });

app.post('/booksValidated', (req, res) => {
  if (!req.body.id) {
    return res.send('no id available in the body of the request')
  }
  if (!req.body.name) {
    return res.send('no name available in the body of the request')
  }
  if (!req.body.genre) {
    return res.send('no genre available in the body of the request')
  }
  if (!req.body.author) {
    return res.send('no author available in the body of the request')
  }

  const newBook = new Book(
    req.body.id,
    req.body.name,
    req.body.genre,
    req.body.author
  )
  books.push(newBook)
  console.log(books)
  return res.json(newBook)
})
