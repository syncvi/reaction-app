const db = require("../models");
const route = require('express').Router()
var Obserwuje = db.Obserwuje
const Sequelize = require('sequelize');
const initModels = require("../models/init-models");

const sequelize = new Sequelize('SBD', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: '34.76.19.152'
}
);
var models = initModels(sequelize)

route.post('/', (req, res) => {
    console.log(req.body)
    Obserwuje.create({
        Film_Id: req.body.Film_Id,
        Login: req.body.Login
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

route.get("/", (req, res) => {
    Obserwuje.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving tutorials.",
            });
        });
})

route.get("/findObserved/:login", (req, res) => {
    const id = req.params.login;

    models.Obserwuje.findAll({ where: { Login: id }, include: { model: models.Film, as: 'Film' } })
        .then((data) => {
            res.send(JSON.stringify(data, null, 2))
        })
})

exports = module.exports = route