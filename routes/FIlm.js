const db = require("../models");
const route = require('express').Router()
var Film = db.Film

route.get('/', (req, res) => {
    Film.findAll()
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

    Film.findByPk(id)
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
    const id = req.body.Film_Id;

    Film.destroy({
        where: { Film_Id: id }
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
    Film.create({
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