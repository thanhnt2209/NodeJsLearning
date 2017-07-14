var jsdom = require("jsdom/lib/old-api.js");

jsdom.env(
  "http://www.24h.com.vn/bong-da/james-rodriguez-gay-soc-chon-bayern-mu-chelsea-nao-ne-c48a888041.html",
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
    if(err){
      console.log(err);
    }else{
      console.log( window.$('img').attr('src'));
    }
  }
);
