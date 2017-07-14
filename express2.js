var express = require('express');
var app = express();

var bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/abd', function (req, res) {
  var x = req.body.x1;
  res.send('day la pos '+ x);
});

// app.get('/abc', function(req, res, next){
//
// })

app.post('/abd', function(req, res){

})

app.listen(9999);
