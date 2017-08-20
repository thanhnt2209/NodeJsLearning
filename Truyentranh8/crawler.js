var jsdom = require("jsdom/lib/old-api.js");

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
  "http://truyentranh8.net",
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
    if(err){
      console.log(err);
    }else{
      // console.log( window.document.documentElement.outerHTML);
      // writeFileHTML( window.document.documentElement.outerHTML);

      // console.log(window.document.documentElement.querySelector("div[name='btop']"));
      console.log(window.document.documentElement.querySelector(".btop"));

    }

  }
);
