const mysql = require('mysql2');
const dotenv = require('dotenv');
const database = require('./database');
dotenv.config({path: './.env'})
port = process.env.PORT || 3000;
const register = require('./routes/register.js');
const express = require('express');
const app = express()
app.use('/register', register)

app.post('/', function(req, res) {
    const mail = req.body.mail;
    const password = req.body.password
    pool.query('insert into users values(?, ?)', [mail, password], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(posted)
        }
    })
})

app.listen(port, (error) => {
    if (error)
        console.log("toto")
    else
        console.log("Server connected")
})

console.log("Connected on port " + port)