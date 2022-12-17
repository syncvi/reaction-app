const db = require("../models");
const route = require('express').Router()
var Osoba = db.Osoba

route.get('/', (req, res) => {
    Osoba.findAll()
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
    Osoba.create({
        Film_Id: req.body.Film_Id,
        Tytuł: req.body.Tytuł,
        Data_Wydania: req.body.Data_Wydania,
        Długość: req.body.Długość,
        Opis: req.body.Opis,
        Zdjęcie: req.body.Zdjęcie,
        Język: req.body.Język
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