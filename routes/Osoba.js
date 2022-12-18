const db = require("../models");
const route = require('express').Router()
var Osoba = db.Osoba
var Film = db.Film

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

route.post('/findId', (req, res) => {
    Osoba.findOne({
        where: {
            Imię: req.body.Imię,
            Nazwisko: req.body.Nazwisko
        }
    })
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





exports = module.exports = route