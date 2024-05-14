const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('athleanAppDB', 'root', null, {
    host: '127.0.0.1',
    dialect: 'mysql'
});


const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        first_name: {
            type: DataTypes.STRING(45),
        },
        last_name: {
            type: DataTypes.STRING(45)
        },
        username: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        profile_picture_url: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING(45)
        },
        languages: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING(25),
        },
        user_role: {
            type: DataTypes.TINYINT(1),
            allowNull: false,
            defaultValue: -1
        },
        visible: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1
        }   
    }

);

User.sync();

module.exports = User;
