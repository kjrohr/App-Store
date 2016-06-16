// Sets variable express to the module express
const express = require('express');

// Sets body_parser to the module body-parser
const bodyParser = require('body-parser');

// Sets the util varaible to the util.js file
const util = require('../lib/util.js');

// Sets app to the express
const app = express();

// Sets port to 3000
const port = process.env.PORT || 3000;

// Allows the app to use the body parser module to parse body data like req.body
app.use(bodyParser.json());

// Tells the app to have a requirement of /api and then require the api.js file and pass it express
app.use('/api', require('./routes/api.js')(express));


// What the server does while it's running and initialized
const server = app.listen(port, () => {
  util.debug('Server is running on port: ', port);
});

// exports the server as variable to be used when this file is included
module.exports = server;
