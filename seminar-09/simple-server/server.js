const express = require('express')
const bodyParser = require('body-parser')

const Sequelize = require('sequelize')
const Op = Sequelize.Op

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './simple.db'
})

const app = express()
app.use(bodyParser.json())

const Employee = require('./models/employee')(sequelize, Sequelize)

// get /employees?sortField=firstName&sortOrder=ASC&page=3&pageSize=10&filterField=firstName&filterContent=jim&simplified=on
app.get('/employees', async (req, res, next) => {
  try {
    const query = {}
    if (req.query.sortField) {
      const sortField = req.query.sortField
      const sortOrder = req.query.sortOrder ? req.query.sortOrder : 'ASC'
      query.order = [[sortField, sortOrder]]
    }

    if (req.query.page) {
      const page = parseInt(req.query.page)
      const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10
      query.limit = pageSize
      query.offset = pageSize * page
    }

    if (req.query.filterField && req.query.filterContent) {
      const filterField = req.query.filterField
      const filterContent = req.query.filterContent
      query.where = {
        [filterField]: {
          [Op.like]: `%${filterContent}%`
        }
      }
    }

    if (req.query.simplified && req.query.simplified === 'on') {
      query.attributes = ['firstName', 'lastName']
    }

    const employees = await Employee.findAll(query)
    res.status(200).json(employees)
  } catch (err) {
    next(err)
  }
})

app.post('/employees', async (req, res, next) => {
  try {
    const employee = req.body
    const createdEmployee = await Employee.create(employee)
    res.status(201).json(createdEmployee)
  } catch (err) {
    next(err)
  }
})

app.use((err, req, res, next) => {
  console.warn(err)
  res.status(500).json({ message: 'some error' })
})

app.listen(8080, () => {
  console.log('server started')
})
