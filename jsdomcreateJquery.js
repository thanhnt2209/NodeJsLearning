var jsdom = require("jsdom/lib/old-api.js");
var fs = require("fs");
var jquery = fs.readFileSync("./myJquery.js", "utf-8");

jsdom.env({
  html: "<html><body><p>Hello NodeJs</p><body></html>",
  src: [jquery],
  // scripts: ["http://code.jquery.com/jquery.js"],
  done: function (err, window) {
    if(err){
       console.log(err);
    }else{
      var $ = window.$;
      // console.log(window.fu(window.$));
      console.log($(this).text());
    }
  }
});
