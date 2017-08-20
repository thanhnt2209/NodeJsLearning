var express = require('express');
var app = express();

var bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/', function(req, res){
//   res.send('Fucking alala');
//   // next();
// });
// //
// var server = app.listen(9988, function(){
//   var host =  server.address().address;
//   var post = server.address().port;
//
//   console.log("Node js dang lang nghe tai dia chi : http://%s:%s", host, post);
// });
//
// app.get('/abc', function(req, res){
//   res.send('Hello World123');
// });

// app.post('/', function(req, res){
//   // var x = req.body.var1;
//   res.send('1113333 alo colem');
// });

// var serverTwo = app.listen(9911, function(){
//   var host =  serverTwo.address().address;
//   var post = serverTwo.address().port;
//
//   console.log("Node js dang lang nghe tai dia chi1 : http://%s:%s", host, post);
// });


app.post('/', function(req, res){
  // var x = req.body.var1;
  console.log('1113333 alo colem');
});

// var serverone = app.listen(8888, function() {
//
//   var port1 = serverone.address().port
//
//   console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s", port1)
//
// });
