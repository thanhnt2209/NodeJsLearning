var x = "https://r2---sn-i3beln7k.c.docs.google.com/videoplayback?id\u003d47218eaa9b8782ad\u0026itag\u003d18\u0026source\u003dpicasa\u0026requiressl\u003dyes\u0026mm\u003d30\u0026mn\u003dsn-i3beln7k\u0026ms\u003dnxu\u0026mv\u003dm\u0026pl\u003d24\u0026sc\u003dyes\u0026ttl\u003dtransient\u0026ei\u003dyLyWWbiGJIeCuQLOlqGYDQ\u0026driveid\u003d1YqtHvrrQ017mu5Ex7KIt_k0vUGdI60Wivw\u0026app\u003dtexmex\u0026mime\u003dvideo/mp4\u0026lmt\u003d1455651520613971\u0026mt\u003d1503050817\u0026ip\u003d118.70.28.200\u0026ipbits\u003d0\u0026expire\u003d1503065352\u0026cp\u003dQVNFVUFfVFNTQ1hOOnphUjdid1ZFOFZ2\u0026sparams\u003dip%2Cipbits%2Cexpire%2Cid%2Citag%2Csource%2Crequiressl%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Csc%2Cttl%2Cei%2Cdriveid%2Capp%2Cmime%2Clmt%2Ccp\u0026signature\u003dB546087A36708DB25D372405BC9BD70566661AA1.6D3E2D49C0626B9AB17D4C41ED4608CB568025AF\u0026key\u003dck2";
var r = /\\u([\d\w]{4})/gi;
x = x.replace(r, function (match, grp) {
    return String.fromCharCode(parseInt(grp, 16)); } );
x = unescape(x);
console.log(x);
