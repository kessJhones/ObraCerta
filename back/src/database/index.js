const Sequelize = require('sequelize');
const dbconfig = require('../config/database.js')
const User = require('../models/User.js')

const connection = new Sequelize(dbconfig);

User.init(connection);

module.exports = connection;