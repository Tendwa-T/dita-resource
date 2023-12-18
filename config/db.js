require('dotenv').config();
const mysql2 = require('mysql2');

const dbName = process.env.DB_NAME;


const db = mysql2.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:dbName,
});

module.exports = db;