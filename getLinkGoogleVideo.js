var x = "https://r2---sn-i3b7kn7d.c.drive.google.com/videoplayback?id\u003db4f7fed13dc90663\u0026itag\u003d34\u0026source\u003dwebdrive\u0026requiressl\u003dyes\u0026mm\u003d30\u0026mn\u003dsn-i3b7kn7d\u0026ms\u003dnxu\u0026mv\u003dm\u0026pl\u003d24\u0026sc\u003dyes\u0026ttl\u003dtransient\u0026ei\u003d6FqaWdejGJDPuQLOlbfYCw\u0026driveid\u003d0B-0Uuw-j8lSHOFZHaklVTEoxT3M\u0026app\u003dtexmex\u0026mime\u003dvideo/x-flv\u0026gir\u003dyes\u0026clen\u003d408489251\u0026dur\u003d6309\u0026lmt\u003d1498572686796206\u0026mt\u003d1503287920\u0026ip\u003d118.70.28.200\u0026ipbits\u003d0\u0026expire\u003d1503302440\u0026cp\u003dQVNFVURfUVRSQVhOOjZNVWRra0ptQ1ly\u0026sparams\u003dip%2Cipbits%2Cexpire%2Cid%2Citag%2Csource%2Crequiressl%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Csc%2Cttl%2Cei%2Cdriveid%2Capp%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt%2Ccp\u0026signature\u003d94A15F5EF72487F9D55D0D57ED21D5D04CECE73F.023592C31AF51345D629686A5AB55F740F8F375A\u0026key\u003dck2";
var r = /\\u([\d\w]{4})/gi;
x = x.replace(r, function (match, grp) {
    return String.fromCharCode(parseInt(grp, 16)); } );
x = unescape(x);
console.log(x);
