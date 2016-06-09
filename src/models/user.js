const db = require('./db.js');

exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
  console.log("Model - User: " + payload);
};

exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch(err);
  console.log(db.user.findAll());
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
  console.log("Model - User: " + payload);
};

exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },

  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  console.log("Model - User: " + payload);
};

exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  console.log("Model - User: " + payload);
};
