
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const pool = require("../db")


router.get("/buy_product", (req, res) => {   
    pool.query("SELECT * FROM buy_product", (err, result) => {
        if (!err) {

            res.status(200).send(result.rows)

        } else {
            res.send(err)
        }
    })
})

router.get('/buy_product/:id', (req, res) => {
    
    pool.query("SELECT * FROM buy_product where id=$1", [req.params.id ], (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.status(400).send(err)
        }
    })
})


router.post("/buy_product",(req, res) => {
    const body = req.body;
        pool.query('INSERT INTO buy_product (name) VALUES ($1) RETURNING *',
        [body.buy_product],

         (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(201).send("Created");
            }
        });
});

router.delete("/buy_product/:id",(req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM buy_product WHERE id = $1', [id], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send("Deleted")
        }
    })
})
router.put("/buy_product/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    pool.query(
        'UPDATE buy_product SET name=$1    WHERE id = $2',
        [body.buy_product,id ],
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