const { Employee } = require('../sequelize').models
const { Op } = require('sequelize')

const router = require('express').Router()

router
  .route('/employees')
  .get(async (req, res) => {
    try {
      const { minSalary, simplified, sortBy, order } = req.query
      const employees = await Employee.findAll({
        attributes: simplified ? { exclude: ['id', 'createdAt', 'updatedAt'] } : undefined,
        order: sortBy ? [[sortBy, order && (order === 'ASC' || order === 'DESC') ? order : 'ASC']] : undefined,
        where: minSalary ? { salary: { [Op.gt]: minSalary } } : undefined
      })
      return res.status(200).json(employees)
    } catch (error) {
      console.error(error)
      return res.status(500).json(error)
    }
  })
  .post(async (req, res) => {
    try {
      const newEmployee = await Employee.create(req.body)
      console.log(req.body)
      return res.status(200).json(newEmployee)
    } catch (error) {
      return res.status(500).json(error)
    }
  })

router
  .route('/employees/:id')
  .get(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id)
      if (employee) {
        return res.status(200).json(employee)
      } else {
        return res.status(404).json({ error: `Employee with id ${req.params.id} not found` })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json(error)
    }
  })
  .put(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id)
      if (employee) {
        const updateEmployee = await employee.update(req.body)
        return res.status(200).json(updateEmployee)
      } else {
        return res.status(404).json({ error: `Employee with id ${req.params.id} not found` })
      }
    } catch (error) {
      return res.status(500).json(error)
    }
  })

// După ce ai rulat exemplul, implementează ștergerea unei înregistrări pe un nou endpoint
router.route('/employees/:id').delete(async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id)
    if (employee) {
      return res.status(200).json(await employee.destroy())
    } else {
      return res.status(404).json({ error: `Employee with id ${req.params.id} does not exists` })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
})

module.exports = router
