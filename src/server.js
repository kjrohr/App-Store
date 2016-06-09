// Sets variable express to the module express
var express = require('express');

// Sets body_parser to the module body-parser
var body_parser = require('body-parser');

// Sets the util varaible to the util.js file
const util = require('../lib/util.js');

// Sets app to the express
var app = express();

// Sets port to 3000
var port = 3000;

// Allows the app to use the body parser module to parse body data like req.body
app.use(body_parser.json());

// Tells the app to have a requirement of /api and then require the api.js file and pass it express
app.use('/api', require('./routes/api.js')(express));


// What the server does while it's running and initialized
var server = app.listen(port, function(){
  util.debug("Server is running on port: ", port);
});

// exports the server as variable to be used when this file is included
module.exports = server;
