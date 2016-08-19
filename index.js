var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// create application/json parser
var sports = [];

app.use(bodyParser.json())
app.use(express.static('.'));

app.get('/sports', function(req, res){
    console.log('these are the sports ' + JSON.stringify(sports));
    res.end(JSON.stringify(sports));
});

app.post('/sports', function(req, res){
  console.log('thanx for this entry ' + req.body.name);
  if (!(req.body.name in sports)) {
      sports.push({'name':req.body.name, local:false});
  }
  res.end();

});



app.listen(5000, function(){ console.log('I am ready...')});