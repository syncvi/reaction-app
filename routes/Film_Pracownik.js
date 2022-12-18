const db = require("../models");
const route = require('express').Router()
var Film_Pracownik = db.Film_Pracownik

route.get('/', (req, res) => {
    Film_Pracownik.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
})

route.post('/', (req, res) => {
    console.log(req.body)
    Film_Pracownik.create({
        Film_Id: req.body.Film_Id,
        Osoba_Id: req.body.Osoba_Id,
        Stanowisko: req.body.Stanowisko
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
})

exports = module.exports = route