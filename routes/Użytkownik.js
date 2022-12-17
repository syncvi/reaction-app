const db = require("../models");
const route = require('express').Router()
var Użytkownik = db.Użytkownik
const bcrypt = require("bcrypt");

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

route.post("/finduser", (request, response) => {
    // check if email exists
    Użytkownik.findAll({
        where: {
            Login: request.body.Login
        }
    })

        // if email exists
        .then((user) => {
            // compare the password entered and the hashed password found
            bcrypt
                .compare(request.body.password, user.password)

                // if the passwords match
                .then((passwordCheck) => {

                    // check if password matches
                    if (!passwordCheck) {
                        return response.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                    }

                    //   create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    );

                    //   return success response
                    response.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                    });
                })
                // catch error if password does not match
                .catch((error) => {
                    response.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                });
        })
        // catch error if email does not exist
        // .catch((e) => {
        //     response.status(404).send({
        //         message: "Email not found",
        //         e,
        //     });
        // });
});


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