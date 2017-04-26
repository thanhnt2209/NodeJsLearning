var request = require('request');
var cheerio = require('cheerio');



var header = {
  tyle : "abc",
};
var method = require('./Constants')
var urlMethod = "https://servicestruyen.hay.la/ServiceManga.svc/GetListManga?v=12831&lang=vi&sig=22129306b8c24fe26d535321f4866f1e";

function callComicApi(method , connectTimeout , url){

  request({
      url: url,
      method: method,
      timeout: connectTimeout,
      rejectUnauthorized: false,
      followRedirect: true,
      maxRedirects: 10,
      }, function(error, response, body) {
      console.log(body);
  });
}

callComicApi(method.GET, 10000, urlMethod);
