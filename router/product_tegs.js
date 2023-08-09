
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const pool = require("../db")


router.get("/product_tegs", (req, res) => {   
    pool.query("SELECT * FROM product_tegs", (err, result) => {
        if (!err) {

            res.status(200).send(result.rows)

        } else {
            res.send(err)
        }
    })
})

router.get('/product_tegs/:id', (req, res) => {
    
    pool.query("SELECT * FROM product_tegs where id=$1", [req.params.id ], (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.status(400).send(err)
        }
    })
})


router.post("/product_tegs",(req, res) => {
    const body = req.body;
        pool.query('INSERT INTO product_tegs (name) VALUES ($1) RETURNING *',
        [body.product_tegs],

         (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(201).send("Created");
            }
        });
});

router.delete("/product_tegs/:id",(req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM product_tegs WHERE id = $1', [id], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send("Deleted")
        }
    })
})
router.put("/product_tegs/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    pool.query(
        'UPDATE product_tegs SET name=$1    WHERE id = $2',
        [body.product_tegs,id ],
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