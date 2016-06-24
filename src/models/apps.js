// Variable db set to the db.js file

const db = require('./db.js');
// Variable util set to the rohr_karl_utility file
const util = require('rohr_karl_utility');
// Exports the create method
exports.create = (payload, err, success) => {
  // Functions of the create method, the sequelize create, accepts payload,
  // then what idtdoes on success, and then catches any errors
  db.apps.create(payload).then(success).catch(err);
  // Checks the payload
  util.debug('Model - Apps: ', payload);
};
// Exports the findAll method
exports.findAll = (err, success) => {
  // Functions of the findAll method, the sequelize findAll method,
  // finds all, then after the success, and then catches any errors
  db.apps.findAll().then(success).catch(err);
  // Checks the success
  util.debug('Model - Apps - Read All: ', success);
};
// Exports the find method
exports.find = (payload, err, success) => {
  // Functions of the find method, the sequelize find method,
  // Finds by id, then what it does after success
  // and catches any errors
  db.apps.find({
    where: {
      id: payload.id,
    },
    // Find all relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  // Checks the payload
  util.debug('Model - Apps: ', payload);
};
// Exports the update method
exports.update = (payload, err, success) => {
  // Functions of update, the sequelize update method
  // update by id, then what it does after successs,
  // catch all errors
  db.apps.find({
    where: {
      id: payload.id,
    },

  }).then((existingData) => {
    // Updates the existingData with the updateAttributes
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  // Checks the payload
  util.debug('Model - Apps: ', payload);
};
// Exports the destroy method
exports.destroy = (payload, err, success) => {
  // Functions of the destroy method, the sequelize destroy method
  // destroy by id, then after succcess
  // catch any errors
  db.apps.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  // Checks the payload
  util.debug('Model - Apps: ', payload);
};
