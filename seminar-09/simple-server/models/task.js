module.exports = (sequelize, Sequelize) => {
  return sequelize.define('task', {
    description: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
