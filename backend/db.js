const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();
const pool = mysql.createPool({
    host: "db",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE
})

module.exports = {pool};