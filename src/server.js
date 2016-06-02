// Sets variable express to the module express
var express = require('express');

// Sets body_parser to the module body-parser
var body_pareser = require('body-parser');

// Sets app to the express
var app = express();

// Sets port to 3000
var port = 3000;

// Tells the app to have a requirement of /api and then require the api.js file and pass it express
app.use('/api', require('../routes/api.js')(express));


// What the server does while it's running and initialized
app.listen(port, function(){
  console.log("Server is running on port: " + port);
});
