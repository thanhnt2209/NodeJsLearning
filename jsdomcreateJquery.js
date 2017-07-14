var jsdom = require("jsdom/lib/old-api.js");
var fs = require("fs");
var jquery = fs.readFileSync("./myJquery.js", "utf-8");

jsdom.env(
  "<html><body><p>Hello NodeJs</p><body></html>",
  src: [jquery],
  done: function (err, window) {
    if(err){
       console.log(err);
    }else{
       console.log(window.fu);
    }
  }
);
