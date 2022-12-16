var express = require('express');
var log = function(inst) {
  console.dir(inst.get())
}

module.exports = app => {
    const controller = require("../controllers/controller.js");
  
    var router = require("express").Router();

    router.post("/", controller.create)
    
    router.get("/", controller.findAll);

}
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
