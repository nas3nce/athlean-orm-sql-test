const { Sequelize, DataTypes } = require('sequelize');
const User = require('./User');


const sequelize = new Sequelize('athleanAppDB', 'root', null, {
    host: '127.0.0.1',
    dialect: 'mysql'
});

const Contributor = sequelize.define(
    'Contributor',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        approval_date: {
            type: DataTypes.DATE,
        },
        summary: {
            type: DataTypes.STRING(500)
        },
        rating: {
            type: DataTypes.DECIMAL(2.1),
            allowNull: false,
            defaultValue: 0.0
        },
        is_trusted: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        }
    }
);

Contributor.belongsTo(User , {
    foreignKey: 'user_id',  
})

Contributor.sync();

module.exports = Contributor;
