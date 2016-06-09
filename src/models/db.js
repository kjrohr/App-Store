const Sequelize = require('sequelize');
require('dotenv').config();
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

const apps = sequelize.define('apps', {
  name: {
    type: Sequelize.STRING,
  },
  code: {
    type: Sequelize.STRING,
  },
});

// apps.hasMany(user, {
//   foreignKey: 'courseID',
// });

sequelize.sync();

exports.sequelize = sequelize;
exports.user = user;
exports.apps = apps;
