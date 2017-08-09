const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent);
// console.log(dom.window.document.documentElement.outerHTML);


// const dom = new JSDOM(``, {
//   url: "http://www.24h.com.vn/tin-tuc-trong-ngay/xe-may-dut-doi-3-nguoi-chet-tai-cho-sau-cu-va-cham-kinh-hoang-voi-o-to-c46a888327.html",
//   referrer: "http://www.24h.com.vn/tin-tuc-trong-ngay/xe-may-dut-doi-3-nguoi-chet-tai-cho-sau-cu-va-cham-kinh-hoang-voi-o-to-c46a888327.html",
//   contentType: "text/html",
//   userAgent: "Mellblomenator/9000",
//   includeNodeLocations: false
// });
// console.log(dom.window.document.documentElement.outerHTML);


// const dom = new JSDOM(``, {
//   url: "http://cdn.123moviesapp.net/embed/ee51cef162d960851ed8277af703b9f277fc833c2d19ea12d17ae6d49c3e9ccea96c117617750d9ca06f379829e06f75b87a710c37a9411c2f3f0fc27b69e3e207b2254b3f8bd1d540e9b800731aaeba2fef2b364d2af6ed541a6b53476354b1f6912f4899ff2955ac255240170ffc4a3f4e483f8a125b35627702842d7748a34a8685f21c5be34c7e2ad39ab2e92d25ac94da5f3b94fe075ec2e86ecbb57a3ded3e09e80157a3a671a2bb3ebdd8acafc62659985a145a3db42f16eacd7a2346bb8e2b1f3840105946a700107705ea5c8ff9f6406d01dea243bd8fcc46db33cc6d6a4759f11d218241469afa48b28dce3308b63b423e9e63c386641993f0a970399b91529c83b630295f8b360d42e23f3c38faaff01532da42698d40df40a66462573583c39ba45b3c51c646507fcc6a8db4e7b8c256f9d361cf278d67741926463f709bfc5f42525d3d24fb3cf5b4a6990eb71f1a9f294387ce3fc2f1b7fc4b54b92bd88454c4a4b3a3c001f1dd09a8dbce2beb031f51781bed87c960674bfd02e26bb7f904b51ad08ed7d4e3c59b620d66cdce7fa63a55441c41bc0ee3c4fd61666846303cafa50c3ae03fc0fd566134cdec6cf1d2e8a4e4b1e73aba9e1430f352ac48ca214b4c3da71b69abbb8d78c7deac7380b646a2b66111b88085d1ce75fa200596e47b310e6fdffd26d41990e8a360b43fb926f4b07133c7f9a3bad96b35a13657d7ee76f0147f33edf5d539606b4aa54bd95d188eb9e24c3d4be0c425101acc49a489d7fbb676b47c6df80a1c374bac5c18d3d6d10c488152db898af1e72f1e7f4af094e22bb030c92515219590af24c3ac02a7e25f1a333fb3bb12a709e0a4f3414e68de57ee5c99ad968287755e767e31db0256be5bb5348d32b7df21bc56c4301c1219f976e0d0a210c33268f75da389bd71f349e64daaf7f0c53cb94f8e9afd7004602380bb2c8d2270a8089f2916eada1fa463a6103a9a580705645889b4e842f27a8e4248e8ea55bda747e13f70ce8c1d9159798add9098cf44dd795b7f9b75b512ad4a76dd3f9f695afa30c1090e26c1c5bbb245c82bc0a4c45d71aca99155ffa058613f6c70296120c080ea51ba7d7241d4c9c1c1ae184d771308f518d6cc038945c0507d0fef57f721eb79de083e294dac4d22d2e43e37a055b16817e0d01f25bd661c14de42924e7c3aa9fce00614d59f5ec08aa61fbbb19141d851d3213e9bb6c4ad70ac0dbc207a0a2209c074e7ff2e44cdd9961c4eaa77303183bad0ec08b2dc6293aeaf62c2c0b115b1ddc238e00d0f6d38f6c96c2e9ccdd72edb33e583920537fc6ca79bb7ee27c64e99e38cfa0d7af875a001e6fe4ee0f97175c7afe943d0219d6423a4c07cb6a9c0774af3abd9b9c2dbf34681d0b4052a110d873a536b50b648c87158a5ee9592de57874522712f2e4438404d89ffd5fb71a94439c67001",
//   referrer: "http://cdn.123moviesapp.net",
//   contentType: "text/html",
//   userAgent: "Mellblomenator/9000",
//   includeNodeLocations: false
// });
// console.log(dom.window.document.documentElement.getElementsByTagName('video').length);

var x = "https://r2---sn-i3b7kn7z.c.drive.google.com/videoplayback?id\u003d0bde38b554baf52b\u0026itag\u003d35\u0026source\u003dwebdrive\u0026requiressl\u003dyes\u0026mm\u003d30\u0026mn\u003dsn-i3b7kn7z\u0026ms\u003dnxu\u0026mv\u003dm\u0026pl\u003d24\u0026sc\u003dyes\u0026ttl\u003dtransient\u0026ei\u003dfHOKWbPxJYOmqgXN5bGIBA\u0026susci\u003do-AOm7PtEJi3Ij279l4_PgHN51WbQDZcnCH3ZiqhNLt5foifZQ\u0026driveid\u003d0B9IUGXzrgBm3WS1EYWJweTg1bE0\u0026app\u003dtexmex\u0026mime\u003dvideo/x-flv\u0026gir\u003dyes\u0026clen\u003d69120675\u0026dur\u003d585\u0026lmt\u003d1502217380165175\u0026mt\u003d1502245492\u0026ip\u003d118.70.184.34\u0026ipbits\u003d0\u0026expire\u003d1502260156\u0026cp\u003dQVNFVENfT1FTR1hOOnhtLWFWRmxiS28w\u0026sparams\u003dip%2Cipbits%2Cexpire%2Cid%2Citag%2Csource%2Crequiressl%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Csc%2Cttl%2Cei%2Csusci%2Cdriveid%2Capp%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt%2Ccp\u0026signature\u003d112DF33AD18B2882DFDC5674E2CE62C6AD12144B.1AC8D7A648258F7B6185EC3AC238A99D9CEAF190\u0026key\u003dck2";
var r = /\\u([\d\w]{4})/gi;
x = x.replace(r, function (match, grp) {
    return String.fromCharCode(parseInt(grp, 16)); } );
x = unescape(x);
console.log(x);
