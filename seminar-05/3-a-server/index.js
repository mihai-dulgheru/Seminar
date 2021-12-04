const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)

const array = [
  { id: 1, nume: 'Ionut', varsta: 25 },
  { id: 2, nume: 'Alex', varsta: 18 },
  { id: 3, nume: 'Mihai', varsta: 13 },
  { id: 4, nume: 'Marcel', varsta: 12 },
  { id: 5, nume: 'Marius', varsta: 22 }
]

router.route('/getList').get((req, res) => {
  res.json(array)
})

router.route('/postList').post((req, res) => {
  const el = req.body
  el.id = array.length + 1
  array.push(el)
  res.json(el)
})

router.route('/getList/:id').get((req, res) => {
  const id = parseInt(req.params.id)
  const person = array.find(e => e.id === id)
  if (person) {
    res.status(200).json(person)
  } else {
    res.status(404).json({ message: 'not found' })
  }
})

// 7 - (Opțional) - Implementați o metodă put și o metodă delete pe server.
router.route('/putList').put((req, res) => {
  const el = req.body
  const person = array.find(e => e.id === el.id)
  if (person) {
    person.nume = el.nume
    person.varsta = el.varsta
    res.status(200).json(person)
  } else {
    array.push(el)
    res.status(200).json(el)
  }
})

router.route('/deleteList/:id').delete((req, res) => {
  const id = parseInt(req.params.id)
  const person = array.find(e => e.id === id)
  if (person) {
    array.splice(array.indexOf(person), 1)
    res.status(200).json({ message: 'complete deletion' })
  } else {
    res.status(404).json({ message: 'not found' })
  }
})

const port = 8000
app.listen(port)

console.log('API is running')
