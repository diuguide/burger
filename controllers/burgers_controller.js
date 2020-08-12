const express = require("express");

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.all((data) => {
        let obj = {
            burgers: data
        };
        console.log(obj);
        res.render('index', obj);
    });
});
router.post('api/burgers', (req, res) => {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) =>{
        res.json( { BLANK });
    });
});
router.put('/api/burgers/:devoured', (req, res) => {
    let condition = "devoured = " + req.params.devoured;
    burger.update
})

module.exports = router;