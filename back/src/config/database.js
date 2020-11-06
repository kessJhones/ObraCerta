require('dotenv/config');

module.exports = {
  dialect: process.env.DB_DIALECT,
  host : process.env.DB_HOST,
  username : process.env.DB_USERNAME,
  database : process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD
}