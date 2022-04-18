const { Sequelize } = require('sequelize');
const { parsed: DB_CONFIG } = require('dotenv').config();

const sequelize = new Sequelize(DB_CONFIG.NAME_DB, DB_CONFIG.ADMIN_DB, DB_CONFIG.ADMIN_PASSWORD, {
  host: DB_CONFIG.HOST,
  dialect: DB_CONFIG.DB
})

const test = async () => {
  try {
    await sequelize.authenticate()
    console.log('successful connection')
  } catch (error) {
    console.log(error.stack,'Failed connection')
  } 
}
test()


module.exports = sequelize