const user = require('../models/user');
const apps = require('../models/course');
module.exports = (express) => {
  const router = express.Router();

  // Read All
  router.get('/users', (req, res) => {
    user.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);

    });
  });

  // Read One
  router.get('/users/:id', (req, res) => {
    // URL id will override any preexisting id
    var x = {};
    x.id = req.params.id;
    user.find(x, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Delete
  router.delete('/users/:id', (req, res) => {
    // URL id will override any preexisting id
    req.body.id = req.params.id;
    user.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Update
  router.post('/users/:id', (req, res) => {
    // URL id will override any preexisting id
    req.body.id = req.params.id;
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Create User
  router.post('/users', (req, res) => {
    console.log(req.body);
    user.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read All
  router.get('/apps', (req, res) => {
    apps.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);

    });
  });

  // Read One
  router.get('/apps/:id', (req, res) => {
    // URL id will override any preexisting id
    var x = {};
    x.id = req.params.id;
    apps.find(x, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Delete
  router.delete('/apps/:id', (req, res) => {
    // URL id will override any preexisting id
    req.body.id = req.params.id;
    apps.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Update
  router.post('/apps/:id', (req, res) => {
    // URL id will override any preexisting id
    req.body.id = req.params.id;
    apps.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Create User
  router.post('/apps', (req, res) => {
    console.log(req.body);
    apps.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
