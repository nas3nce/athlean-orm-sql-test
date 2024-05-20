
import express from 'express';
import {Sequelize} from 'sequelize';
import { User } from './models/User';

const app = express();

const sequelize = new Sequelize('athleanAppDB', 'root', undefined, {
    host: '127.0.0.1',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error));

app.get('/test', async (req, res) => {
    try {        
      await User.create({
            name: 'USER',
        })
    } catch (err) {
        console.log(err);
    }
});


app.listen(3000, () => console.log(`server is listening`));
