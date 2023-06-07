const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const expenseTracker = sequelize.define('expense',
{
    id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
    },
    amount:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    description:{
        type:Sequelize.STRING,
        allowNull:true
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    }

    }
)

module.exports = expenseTracker;