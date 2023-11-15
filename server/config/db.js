const mysql = require('mysql2');

const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:'resource_center',
});

/* //create user table if it doesn't exist
db.query(`CREATE TABLE IF NOT EXISTS users (
    student_No VARCHAR(255) PRIMARY KEY, 
    firstName VARCHAR(255), 
    lastName VARCHAR(255), 
    email VARCHAR(255) UNIQUE,
    isAdmin BOOLEAN  Default FALSE, 
    password VARCHAR(255))`, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});

///Create a table for the repair requests
db.query(`CREATE TABLE IF NOT EXISTS repair_requests (
    student_No VARCHAR(255) PRIMARY KEY, 
    firstName VARCHAR(255), 
    lastName VARCHAR(255), 
    email VARCHAR(255) UNIQUE,
    description VARCHAR(255),
    status BOOLEAN NOT NULL DEFAULT FALSE
    )`, function (err, result) {
    if (err) throw err;
    console.log("Table created");
}); */


module.exports = db;