const user = require('../models/user');
const course = require('../models/course');
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
  router.get('/courses', (req, res) => {
    course.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);

    });
  });

  // Read One
  router.get('/courses/:id', (req, res) => {
    // URL id will override any preexisting id
    var x = {};
    x.id = req.params.id;
    course.find(x, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Delete
  router.delete('/courses/:id', (req, res) => {
    // URL id will override any preexisting id
    req.body.id = req.params.id;
    course.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Update
  router.post('/courses/:id', (req, res) => {
    // URL id will override any preexisting id
    req.body.id = req.params.id;
    course.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Create User
  router.post('/courses', (req, res) => {
    console.log(req.body);
    course.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
