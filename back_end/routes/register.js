const pool = require("../database.js");
const express = require('express')
const router = express.Router()

//nicolas n'a pas reussi a faire fonctionner le register même apres 1heure de tentative

router.post('/', (req, res) => {
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


module.exports = router