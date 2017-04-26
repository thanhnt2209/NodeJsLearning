var log = require('color-log');
log.info("helloworld");
var url = "http://hinhnen.pro/hinh-nen-mua-thu-buon/";
var url1 = "http://m.intl.taobao.com/detail/detail.html?id=527303031972&id=527303031972&ali_trackid=2:mm_59033140_12440238_47166240:1464095319_2k1_1864176951&spm=a21bo.7925826.192013.2.rJzutV%22";
var connection;

var jsdomm = require('jsdom');

/*
  load web dong xong roi get data
*/

// var phantom = require('phantom');
//
// var sitepage = null;
// var phInstance = null;
// phantom.create()
//     .then(instance => {
//         phInstance = instance;
//         return instance.createPage();
//     })
//     .then(page => {
//         sitepage = page;
//         return page.open(url1);
//     })
//     .then(status => {
//         console.log(status);
//         return sitepage.property('content');
//     })
//     .then(content => {
//         // console.log(content);
//         jsdomFunction(content);
//         sitepage.close();
//         phInstance.exit();
//     })
//     .catch(error => {
//         console.log(error);
//         phInstance.exit();
//     });



/*
  su dung de get data
*/
var jsdomFunction = function(cb) {
  jsdomm.env(url, function(err, window) {
  	if (err) {
  		log.error(err);
  		return;
  	}

  	var jquery = require("jquery")(window);
    var allImg = jquery("img");
    var arrayUrl = [];
    // console.log(allImg.text());
    log.info(allImg.length);
    for(var i = 0 ; i< allImg.length ; i++){
      arrayUrl.push({
        name : allImg[i].alt,
        url : allImg[i].src
      });
    }
    // returnListImage(arrayUrl);
    if (cb) cb(returnListImage(arrayUrl));
  });
}

var jsdomNew = function(){
  new jsdomm.JSDOM.fromURL(url, {aaaa : "bbb"}).then(function(dom) {
    console.log(dom.serialize());
  });
}


var createDatabase = function () {
  var mysql  = require('mysql');
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1',
    database : 'ImageDb'
  });
  connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('done ');
});
}

var returnListImage = function (arrayUrl) {
  var obj = {
    data: arrayUrl
  }

  // var key = '';
  // for(var i = 0;i<arrayUrl.length;i++){
  //    key = key + `('${arrayUrl[i].name}','${arrayUrl[i].url}'),`;
  // }
  //
  // key = key.slice(0,key.length-1)
  // console.log(key);
  //
  // connection.query('INSERT INTO autum (name,url) VALUES '+key, function(err, rows, fields) {
  // if (err) throw err;

  // console.log('The solution is: ', rows[0].solution);
// });
// connection.end()
  // console.log(JSON.stringify(obj));


  return obj;
}

var request = function (obj) {
  var express = require('express')
  var app = express()

  app.get('/', function (req, res) {
    jsdomFunction(function(obj){
      res.send(JSON.stringify(obj));
    })
  })

  app.listen(3000);
}


// createDatabase();
jsdomNew();
// request();
// connectMongo();
