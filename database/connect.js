var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var getData = require('../helloWorld.js');

var connectMongo = function(){
  // Connection URL
  var url = 'mongodb://localhost:27017/testdb';
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    insertDocuments(db, callbackResult);
    db.close();
  });
}

var callbackResult = function(result){
  console.log(result);
}


var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {name : 1}, {name : 2}, {name : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}


var getDataFormWeb = function(){
  getData.jsdomFunction(function(object){
      console.log("Inserted 3 documents into the document collection");
  })
}

getDataFormWeb;
