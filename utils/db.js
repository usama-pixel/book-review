require('dotenv').config()
const { Sequelize } = require('sequelize')
const { db_name, db_user, db_pass } = require('./env')
console.log({ db_name, db_user, db_pass });
const sequelize = new Sequelize(db_name, db_user, db_pass, {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
})

module.exports = sequelize