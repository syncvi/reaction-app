var express = require('express')
var router = express.Router();
const db = require("../models");
console.log("database")
console.log(db.Film)

// Create and Save a new Tutorial
exports.create = (req, res) => {
    console.log(req.body)
    // Validate request
    // if (!req.body.Tytuł) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    // }

    // Save Tutorial in the database
    db.Film.create({
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
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    db.Film.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};


