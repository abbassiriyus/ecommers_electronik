
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const pool = require("../db")


router.get("/tegs", (req, res) => {   
    pool.query("SELECT * FROM tegs", (err, result) => {
        if (!err) {

            res.status(200).send(result.rows)

        } else {
            res.send(err)
        }
    })
})

router.get('/tegs/:id', (req, res) => {
    
    pool.query("SELECT * FROM tegs where id=$1", [req.params.id ], (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.status(400).send(err)
        }
    })
})


router.post("/tegs",(req, res) => {
    const body = req.body;
        pool.query('INSERT INTO tegs (name) VALUES ($1) RETURNING *',
        [body.tegs],

         (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(201).send("Created");
            }
        });
});

router.delete("/tegs/:id",(req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM tegs WHERE id = $1', [id], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send("Deleted")
        }
    })
})
router.put("/tegs/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    pool.query(
        'UPDATE product SET name=$1    WHERE id = $2',
        [body.tegs,id ],
        (err, result) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send("Updated")
            }
        }
    )
})

module.exports = router;