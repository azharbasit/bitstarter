var express = require('express');
var fs1 = require('fs');
var path = require('path');

var app = express();
app.use(express.logger());

var data = fs1.readFileSync(path.resolve(__dirname, 'index.html'));
var message = data.toString('utf-8');

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

