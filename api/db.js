const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'miranime-nest',
  logging: false
})

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
