var route = require('express').Router();
var log = function(inst) {
  console.dir(inst.get())
}

route.use('/Film', require('./Film'))
route.use('/Kategoria', require('./Kategoria'))
route.use('/Osoba', require('./Osoba'))

exports = module.exports = {
  route
}


// module.exports = app => {
//     const controller = require("../controllers/controller.js");
  
//     var router = require("express").Router();

//     router.post("/", controller.create)
    
//     router.get("/", controller.findAll);

//     app.use('/api/controller', router)

// }


// const test = controller.findAll()
// console.log(test);
//get friends by id
// router.get(
//     Film.findAll().then(function(posts) {
//         posts.forEach(log)
//       })
// );



//Pobiera wszystkie Filmy i wypisuje w konsoli
// var log = function(inst) {
//   console.dir(inst.get())
// }

// models.Film.findAll().then(function(posts) {
//   posts.forEach(log)
// })


// exports.create = (req, res) => {
//   console.log(req.body)
//   // Validate request
//   // if (!req.body.Tytuł) {
//   //     res.status(400).send({
//   //         message: "Content can not be empty!"
//   //     });
//   //     return;
//   // }

//   // Save Tutorial in the database
//   db.Film.create({
//       Film_Id: req.body.Film_Id,
//       Tytuł: req.body.Tytuł,
//       Data_Wydania: req.body.Data_Wydania,
//       Długość: req.body.Długość,
//       Opis: req.body.Opis,
//       Zdjęcie: req.body.Zdjęcie,
//       Język: req.body.Język
//   })
//       .then(data => {
//           res.send(data);
//       })
//       .catch(err => {
//           res.status(500).send({
//               message:
//                   err.message || "Some error occurred while creating the Tutorial."
//           });
//       });
// };

// // Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {
//   db.Film.findAll()
//       .then(data => {
//           res.send(data);
//       })
//       .catch(err => {
//           res.status(500).send({
//               message:
//                   err.message || "Some error occurred while retrieving tutorials."
//           });
//       });
// };

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {

// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {

// };


