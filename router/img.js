
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const pool = require("../db")


router.get("/img", (req, res) => {   
    pool.query("SELECT * FROM img", (err, result) => {
        if (!err) {

            res.status(200).send(result.rows)

        } else {
            res.send(err)
        }
    })
})

router.get('/img/:id', (req, res) => {
    
    pool.query("SELECT * FROM img where id=$1", [req.params.id ], (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.status(400).send(err)
        }
    })
})


router.post("/img",(req, res) => {
    const body = req.body;
        pool.query('INSERT INTO img (product) VALUES ($1) RETURNING *',
        [body.img],

         (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(201).send("Created");
            }
        });
});

router.delete("/img/:id",(req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM img WHERE id = $1', [id], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send("Deleted")
        }
    })
})
router.put("/img/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    pool.query(
        'UPDATE product SET img=$1    WHERE id = $2',
        [body.img,id ],
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