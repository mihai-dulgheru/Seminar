const express = require('express')

const app = express()

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
app.get('/books', (req, res) => {
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

app.listen(8080)
