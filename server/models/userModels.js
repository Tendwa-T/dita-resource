const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
});


const User = sequelize.define("User", {
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
});

User.sync().then( async() => {
    console.log('User table created');
    await sequelize.sync({ alter: true });
}   
).catch(err => console.log(err));


module.exports = User;