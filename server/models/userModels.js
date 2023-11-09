const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
});


const User = sequelize.define("users", {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    student_No: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
}, {
 findByID: async (student_No) => {
    const userQuery =db.query('SELECT * FROM users WHERE student_No = ?', [student_No], async (error, results) => {
        if (error) throw error;
        return results;
        
    });
    if (userQuery.length === 0) {
        return null;
    }
    else {
        return results[0];
    }
 }
});

module.exports = User;