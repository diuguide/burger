const express = require("express");
const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.all((data) => {
        let obj = {
            burgers: data
        };
        console.log('OBJECT', obj);
        res.render('index', obj);
    });
});
router.post('/api/burgers', (req, res) => {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, false], (result) => {
        res.redirect("/");
    });

});
router.put('/api/burgers/:id', (req, res) => {
    let id = req.params.id;

    burger.update(["devoured", "id"], [true, id], (result) => {
        res.json(result);
    })
})

module.exports = router;