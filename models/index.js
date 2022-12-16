'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

const sequelize = new Sequelize('SBD', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: '34.76.19.152'
}
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// const initModels = require("./init-models");
// console.log(initModels);

// //Dodaje nowy item do tabeli
// sequelize.sync().then(() => {
//   db.Film.create({
//       Film_Id: 1,
//       Tytuł: "Test",
//       Data_Wydania: "2021-12-14",
//       Długość: 130,
//       Opis: "XD",
//       Zdjęcie: " XD",
//       Język: "Cebulacki"
//   }).then(res => {
//       console.log(res)
//   }).catch((error) => {
//       console.error('Failed to create a new record : ', error);
//   });
//   }).catch((error) => {
//   console.error('Unable to create table : ', error);
// });

// //Pobiera wszystkie Filmy i wypisuje w konsoli
// var log = function(inst) {
//   console.dir(inst.get())
// }
// var models = initModels(sequelize)
// models.Film.findAll().then(function(posts) {
//   posts.forEach(log)
// })




