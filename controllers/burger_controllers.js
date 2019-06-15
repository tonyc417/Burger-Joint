const express = require('express');

var router = express.Router();

var burger = require("../models/burger");

router.get("/", (req,res) => {
    burger.selectAll( (data) => {
        var hbsObject = {
            burgers : data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
}); 

router.post('/burgers/create', (req, res) => {
    burger.insert(req.body.burger_name, (result) => {
        res.redirect("/")
    })
})

module.exports = router;