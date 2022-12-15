const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const dbConfig = require('../config/config.js');
const db = {};


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

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
module.exports = db;

// const initModels = require("./init-models");
// console.log(db.Film);
// var models = initModels(sequelize)
// console.log(models)

//Dodaje nowy item do tabeli
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

//Pobiera wszystkie Filmy i wypisuje w konsoli
// var log = function(inst) {
//   console.dir(inst.get())
// }

// models.Film.findAll().then(function(posts) {
//   posts.forEach(log)
// })




