"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const { Sequelize, DataTypes, InferAttributes, Model } = require("sequelize");
const sequelize = new Sequelize('athleanAppDB', 'root', undefined, {
    host: '127.0.0.1',
    dialect: 'mysql'
});
class User extends Model {
}
exports.User = User;
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Users',
    sequelize
});
