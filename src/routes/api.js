const user = require('../models/user');
const apps = require('../models/apps');
const util = require('../../lib/util');
module.exports = (express) => {
  const router = express.Router();

  // Read All
  router.get('/users', (req, res) => {
    user.findAll((err) => {
      res.status(500).json(err);
      util.debug('/users Read All error', err);
    }, (data) => {
      res.status(200).json(data);
      util.debug('/users Read all success', data);
    });
  });

  // Read One
  router.get('/users/:id', (req, res) => {
    // URL id will override any preexisting id
    const x = { id: req.params.id };
    // x.id = req.params.id;
    user.find(x, (err) => {
      res.status(500).json(err);
      util.debug('/users/:id Read one user by id error', err);
    }, (data) => {
      res.status(200).json(data);
      util.debug('/users/:id Read one user by id success', data);
    });
  });

  // Delete
  router.delete('/users/:id', (req, res) => {
    // URL id will override any preexisting id
    const x = { id: req.params.id };
    user.destroy(x, (err) => {
      res.status(500).json(err);
      util.debug('/users/:id Delete one user by id error', err);
    }, (data) => {
      res.status(200).json(data);
      util.debug('/users/:id Delete one user by id success', data);
    });
  });

  // Update
  router.post('/users/:id', (req, res) => {
    // URL id will override any preexisting id
    const x = { id: req.params.id, name: req.body.name, hobby: req.body.hobby };
    user.update(x, (err) => {
      res.status(500).json(err);
      util.debug('/users/:id Update one user by id error', err);
    }, (data) => {
      res.status(200).json(data);
      util.debug('/users/:id Update one user by id success', data);
    });
  });

  // Create User
  router.post('/users', (req, res) => {
    user.create(req.body, (err) => {
      res.status(500).json(err);
      util.debug('/users Create user error', err);
    }, (data) => {
      res.status(200).json(data);
      util.debug('/users Create user success', data);
    });
  });

  // Read All
  router.get('/apps', (req, res) => {
    apps.findAll((err) => {
      res.status(500).json(err);
      util.debug('/apps Read all apps error', err);
    }, (data) => {
      res.status(200).json(data);
      util.debug('/apps Read all apps success', data);
    });
  });

  // Read One
  router.get('/apps/:id', (req, res) => {
    // URL id will override any preexisting id
    const x = { id: req.params.id };
    apps.find(x, (err) => {
      res.status(500).json(err);
      util.debug('/apps/:id Read one app by id error', err);
    }, (data) => {
      res.status(200).json(data);
      util.debug('/apps/:id Read one app by id success', data);
    });
  });

  // Delete
  router.delete('/apps/:id', (req, res) => {
    // URL id will override any preexisting id
    const x = { id: req.params.id };
    apps.destroy(x, (err) => {
      res.status(500).json(err);
      util.debug('/apps/:id Delete app by id error', err);
    }, (data) => {
      res.status(200).json(data);
      util.debug('/apps/:id Delete app by id success', data);
    });
  });

  // Update
  router.post('/apps/:id', (req, res) => {
    // URL id will override any preexisting id
    const x = { id: req.params.id, name: req.body.name, hobby: req.body.hobby };

    apps.update(x, (err) => {
      res.status(500).json(err);
      util.debug('/apps/:id Update user by id error', err);
    }, (data) => {
      res.status(200).json(data);
      util.debug('/apps/:id Update user by id success', data);
    });
  });

  // Create User
  router.post('/apps', (req, res) => {
    apps.create(req.body, (err) => {
      res.status(500).json(err);
      util.debug('/apps Create app error', err);
    }, (data) => {
      res.status(200).json(data);
      util.debug('/apps Create app success', data);
    });
  });

  return router;
};
