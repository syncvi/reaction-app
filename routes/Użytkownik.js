const db = require("../models");
const route = require('express').Router()
var Użytkownik = db.Użytkownik

route.get('/', (req, res) => {
    Użytkownik.findAll()
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

route.get('/:id', (req, res) => {
    const id = req.params.id;

    Użytkownik.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });
})

route.delete('/', (req, res) => {
    const id = req.body.Login;

    Użytkownik.destroy({
        where: { Login: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Movie was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Movie with id=" + id
            });
        });
})

route.post('/', (req, res) => {
    console.log(req.body)
    Użytkownik.create({
        Login: req.body.Login,
        EMail: req.body.EMail,
        Hasło: req.body.Hasło,
        StatusPremium: req.body.StatusPremium,
        TypKonta: req.body.TypKonta,
        Zdjęcie: req.body.Zdjęcie
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