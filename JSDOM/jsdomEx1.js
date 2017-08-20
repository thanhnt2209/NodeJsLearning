const jsdom = require("jsdom");
const { JSDOM } = jsdom;


//ex 1
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent);

const dom = new JSDOM(``, {
  url: "http://www.24h.com.vn/bong-da/video-ket-qua-bong-da-stoke-city-arsenal-don-phu-dau-ket-lieu-vong-2-ngoai-hang-anh-c48a897303.html",
  referrer: "http://www.24h.com.vn/bong-da/video-ket-qua-bong-da-stoke-city-arsenal-don-phu-dau-ket-lieu-vong-2-ngoai-hang-anh-c48a897303.html",
  contentType: "text/html",
  userAgent: "Mellblomenator/9000",
  includeNodeLocations: false
});
console.log(dom.window.document.documentElement.);
