const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const mysql = require('mysql2');
port = process.env.PORT || 3000;


module.exports = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'MyMovies'
});

