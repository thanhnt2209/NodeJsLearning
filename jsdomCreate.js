const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent);
// console.log(dom.window.document.documentElement.outerHTML);


const dom = new JSDOM(``, {
  url: "http://www.24h.com.vn/tin-tuc-trong-ngay/xe-may-dut-doi-3-nguoi-chet-tai-cho-sau-cu-va-cham-kinh-hoang-voi-o-to-c46a888327.html",
  referrer: "http://www.24h.com.vn/tin-tuc-trong-ngay/xe-may-dut-doi-3-nguoi-chet-tai-cho-sau-cu-va-cham-kinh-hoang-voi-o-to-c46a888327.html",
  contentType: "text/html",
  userAgent: "Mellblomenator/9000",
  includeNodeLocations: false
});
console.log(dom.window.document.documentElement.outerHTML);
