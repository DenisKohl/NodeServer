var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/json', function (req, res) {
   res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write('{"name" : "Hans", "beruf" : "Maurer", "hobbys" : ["Angeln","Fussball","Kino"]}');
  res.end();
});

app.post('/data', function(req, res){
	console.log(req.body);
	res.send();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});