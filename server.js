const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config()

const db = require('./src/db/database');
const { Model } = require('objection');
Model.knex(db);

const userController = require('./src/controllers/UserController');

const defaultPort = 3000;
const app = express();

app.use(bodyParser.json({type: 'application/json'}));

// Set CORS security headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*') // Will change to actual Internal network IP
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    next()
});
  
app.get('/', async(req, res, next) => {
    const answer = await db.raw("SELECT VERSION()")
    res.json("Hello worldsafsafsafasasaasaa")
    // res.json({nemanja: answer})
});

app.route('/test').get(userController.getAllUsers);

app.listen(process.env.PORT || defaultPort, () => {
 console.log(`Server running on port ${process.env.PORT || defaultPort}`);
});