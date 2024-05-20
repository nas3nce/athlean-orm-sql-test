const { Sequelize, DataTypes, InferAttributes, Model } = require("sequelize");

const sequelize = new Sequelize('athleanAppDB', 'root', undefined, {
    host: '127.0.0.1',
    dialect: 'mysql'
});

export class User extends Model{
    declare id: number
    declare name: string
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'Users',
        sequelize
    }
);

User.sync()

