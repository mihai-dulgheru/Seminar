const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './simple.db'
})

const Employee = require('./models/employee')(sequelize, Sequelize)
const Task = require('./models/task')(sequelize, Sequelize)

Employee.hasMany(Task)

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('tables created')
  })
  .catch((err) => {
    console.warn(err)
  })
