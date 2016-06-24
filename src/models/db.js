// Variable Sequelize set to import the sequelize module

const Sequelize = require('sequelize');
// Requiring the dotenv.config() method of the dotenv module
if (!process.env.DB_HOST) {
  require('dotenv').config();
}
// Sequelize handling the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});
// Defining the user table with a name colume, age colume
// and hobby colume
const user = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  hobby: {
    type: Sequelize.STRING,
  },
});

// Defining the apps table with a name colume, and code colume
const apps = sequelize.define('apps', {
  name: {
    type: Sequelize.STRING,
  },
  code: {
    type: Sequelize.STRING,
  },
});

// So far the foreign key still breaks my stuff

// apps.hasMany(user, {
//   foreignKey: 'courseID',
// });

// Syncs to the db
sequelize.sync();

// Exports the sequenlize
exports.sequelize = sequelize;
// Exports user table
exports.user = user;
// Exports apps table
exports.apps = apps;
