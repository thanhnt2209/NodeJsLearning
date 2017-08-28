var jsdom = require("jsdom/lib/old-api.js");
var express = require('express');

var MongoClient = require('mongodb').MongoClient, assert = require('assert');

var app = express();

var bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



var fs = require('fs');

function writeFileHTML(html){
  fs.writeFile("html.txt", html, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  });
}

jsdom.env(
  "http://truyentranh8.net/search.php?act=search&sort=truyen&view=detail",
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
    if(err){
      console.log(err);
    }else{
      var arrayManga = [];
      window.$("div.btop img.lazy.thumbnail").each(function() {
        arrayManga.push({
          name : window.$(this).attr('title'),
          url : window.$(this).attr('src')
        });
      });
      console.log(arrayManga);

      connectMongo(returnJson(arrayManga));
    }

  }
);

var returnJson = function (arrayManga) {
  var obj = {
    data: arrayManga
  }
  return obj;
}

var url = 'mongodb://localhost:27017/manga';





var connectMongo = function(json){
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    var collection = db.collection("list_new");
    collection.insert(json, function(err, doc) {
      console.log(doc);
      if(err) throw err;
    });
    // insertDocuments(db, callbackResult);
    db.close();
  });
}



var callbackResult = function(result){
  console.log("callbackResult");
  console.log(result);
}


var port = process.env.PORT || 8888;
// ROUTES FOR OUR API
var router = express.Router();
// get an instance of the express Router
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'ahihi' });
});
// REGISTER OUR ROUTES
app.use('/api', router);
// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
