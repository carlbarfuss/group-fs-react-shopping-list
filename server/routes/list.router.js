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

router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = `INSERT INTO "list" ("name", "quantity", "unit") VALUES ($1, $2, $3);`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(sqlText, [item.name, item.quantity, item.unit])
        .then((result) => {
            console.log(`Added item to the database`, item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

//PUT ROUTE


//DELETE ROUTE

module.exports = router;