
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const pool = require("../db")


router.get("/category", (req, res) => {   
    pool.query("SELECT * FROM category", (err, result) => {
        if (!err) {

            res.status(200).send(result.rows)

        } else {
            res.send(err)
        }
    })
})

router.get('/category/:id', (req, res) => {
    
    pool.query("SELECT * FROM category where id=$1", [req.params.id ], (err, result) => {
        if (!err) {
            res.status(200).send(result.rows)
        } else {
            res.status(400).send(err)
        }
    })
})


router.post("/category",(req, res) => {
    const body = req.body;
        pool.query('INSERT INTO category (category) VALUES ($1) RETURNING *',
        [body.product],

         (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(201).send("Created");
            }
        });
});

router.delete("/category/:id",(req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM category WHERE id = $1', [id], (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send("Deleted")
        }
    })
})
router.put("/category/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    pool.query(
        'UPDATE category SET category=$1    WHERE id = $2',
        [body.product,id ],
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