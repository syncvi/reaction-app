const db = require("../models");
const route = require('express').Router()
var Kategoria = db.Kategoria

route.get('/', (req, res) => {
    Kategoria.findAll()
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
    Kategoria.create({
        
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