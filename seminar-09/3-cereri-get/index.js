'use strict'

const express = require('express')
const sequelize = require('./sequelize')
require('./models/employee')

const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

app.use('/api', require('./routes/employees'))

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something broke!' })
})

app.listen(7000, async () => {
  console.log('Server started on http://localhost:7000')
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully')
  } catch (error) {
    console.error('Unable to connect to the database: ')
  }
})

// https://www.sqlite.org/download.html
