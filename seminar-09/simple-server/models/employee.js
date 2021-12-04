module.exports = (sequelize, Sequelize) => {
  return sequelize.define('employee', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    birthYear: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 1900
      }
    }
  })
}
