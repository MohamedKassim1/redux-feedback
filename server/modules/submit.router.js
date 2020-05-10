const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    console.log(req.body);
    
    const newReview = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES 
  ($1, $2, $3, $4)`;
    // sanitization 
    pool.query(queryText, [newReview.feeling, newReview.understanding, newReview.support, newReview.comment])
        .then((result) => {
            console.log(`Added review to the database`, newReview );
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query`, error);
            res.sendStatus(500); 
        })
})

module.exports = router;