var express = require('express');
var body_pareser = require('body-parser');
var app = express();

var port = 3000;

app.use('/api', require('../routes/api.js')(express));



app.listen(port, function(){
  console.log("Server is running on port: " + port);
});
