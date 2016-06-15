const db = require('./db.js');
const util = require('../../lib/util.js');

exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
  util.debug('Model - User - Create: ', payload);
};

exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch(err);
  util.debug('Model - User - Read All', success);
};

exports.find = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
    // Find all relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  util.debug('Model - User - Fine One: ', payload);
};

exports.update = (payload, err, success) => {
  util.debug('Model - User - Update: ', payload);
  db.user.find({
    where: {
      id: payload.id,
    },

  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.debug('Model - User - Delete: ', payload);
};
