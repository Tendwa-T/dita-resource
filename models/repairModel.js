const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');
const User = require('./userModel');
const{ v4: uuidv4 } = require('uuid');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
});


const Repair = sequelize.define("Repair", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    repairID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Pending'
    },
    user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'student_No',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
    },
    cost:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
});

Repair.sync().then( async() => {
    console.log('Repair table created');
    await sequelize.sync({ alter: true });
}   
).catch(err => console.log(err));

module.exports = Repair;

