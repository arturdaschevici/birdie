const mysql = require('mysql');
const { db: { host, user, password, port, database } } = require('../config/environment');
const connection = mysql.createConnection({ host, user, password, port, database });

module.exports = connection;
