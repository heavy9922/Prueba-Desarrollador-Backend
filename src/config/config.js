require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser:  process.env.MONGO_INITDB_ROOT_USERNAME,
  dbPassword:  process.env.MONGO_INITDB_ROOT_PASSWORD,
  dbHost:  process.env.MONGO_HOST,
  dbName:  process.env.MONGO_DB,
  dbPort:  process.env.MONGO_PORT,
  dbconnection:process.env.MONGO_CONNECTION
}

module.exports = { config };
