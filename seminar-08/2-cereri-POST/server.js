const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const booksRouter = express.Router()

app.locals.books = [
  {
    id: 1,
    title: 'a title',
    author: 'some author',
    genre: 'sf'
  },
  {
    id: 2,
    title: 'some other title',
    author: 'an author',
    genre: 'fantasy'
  }
]

// get /books?sortField=title&sortOrder=1
booksRouter.get('/books', (req, res) => {
  if (req.query.sortField) {
    const sortField = req.query.sortField
    const sortOrder = req.query.sortOrder
      ? parseInt(req.query.sortOrder)
      : 1
    const sortedBooks = app.locals.books.sort((first, second) => {
      if (first[sortField] === second[sortField]) {
        return 0
      } else {
        if (first[sortField] > second[sortField]) {
          return 1 * sortOrder
        } else {
          return -1 * sortOrder
        }
      }
    })
    res.status(200).json(sortedBooks)
  } else {
    res.status(200).json(app.locals.books)
  }
})

booksRouter.post('/books', (req, res) => {
  const book = req.body
  try {
    if (typeof book.title !== 'string' || book.title.length < 3) {
      throw new Error('invalid title')
    }
    app.locals.books.push(book)
    res.status(201).json({ message: 'created' })
  } catch (err) {
    console.warn(err)
    res.status(500).json({ message: 'some error occured' })
  }
})

app.use('/books-api', booksRouter)

app.listen(8080)
