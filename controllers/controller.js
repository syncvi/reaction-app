var express = require('express');
var router = express.Router();
const db = require("../models");
const Kategoria = db.Kategoria;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const Kategoria = {
        Kategoria_Id: req.body.id,
        Nazwa: req.body.name,
    };

    // Save Tutorial in the database
    Kategoria.create(tutorial)
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
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};
    
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};


