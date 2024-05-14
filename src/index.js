const express = require('express');
const { Sequelize } = require('sequelize');
const User = require('./models/User');
const Contributor = require('./models/Contributors');


const app = express();

const sequelize = new Sequelize('athleanAppDB', 'root', null, {
    host: '127.0.0.1',
    dialect: 'mysql'
});


sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error));

app.get('/test', async (req, res) => {
    try {
        
        await Contributor.create({
            user_id: 1,
            approval_date:'2024-04-18',
            summary:'KING user can do wathever',
             rating :5.0,
             is_trusted: 1

        })

        // await User.create({            
        //     first_name: 'KING USER',
        //     last_name: 'KING',
        //     username: 'KINGUSER',
        //     email: 'king@king.king',
        //     password: 'SHA256',
        //     profile_picture_url: '/url/to/photo',
        //     country: null,
        //     languages: '1,2,3',
        //     phone_number: null,
        //     user_role: -1,
        //     visible: 0
        // });

    } catch (err) {
        console.log(err);
        // console.log(err.errors[0].message);
    }
});




app.listen(3000, () => console.log(`server is listening`));


// module.exports = sequelize;
