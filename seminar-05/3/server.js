const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.locals.people = [{
  id: 1,
  name: 'jim'
}, {
  id: 2,
  name: 'jane'
}]

app.get('/people', (req, res) => {
  res.status(200).json(app.locals.people)
})

app.post('/people', (req, res) => {
  const person = req.body
  app.locals.people.push(person)
  res.status(201).json({ message: 'created' })
})

app.get('/people/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const person = app.locals.people.find(e => e.id === id)
  if (person) {
    res.status(200).json(person)
  } else {
    res.status(404).json({ message: 'not found' })
  }
})

app.listen(8080)
