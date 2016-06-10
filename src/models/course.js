const db = require('./db.js');
const util = require('../../lib/util');

exports.create = (payload, err, success) => {
  db.apps.create(payload).then(success).catch(err);
  util.debug("Model - Course: ", payload);
};

exports.findAll = (err, success) => {
  db.apps.findAll().then(success).catch(err);
};

exports.find = (payload, err, success) => {
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
  util.debug("Model - Course: ", payload);
};

exports.update = (payload, err, success) => {
  db.apps.find({
    where: {
      id: payload.id,
    },

  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  util.debug("Model - Course: ", payload);
};

exports.destroy = (payload, err, success) => {
  db.apps.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.debug("Model - Course: ", payload);
};
