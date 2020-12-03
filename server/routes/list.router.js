const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

//GET ROUTE
router.get('/', (req, res) => {
    // Get all of the treats from the database
    const sqlText = `SELECT * FROM list`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

//POST ROUTE


//PUT ROUTE


//DELETE ROUTE

module.exports = router;