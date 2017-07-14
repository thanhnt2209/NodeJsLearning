var buf = new Buffer(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);
console.log("Octets written : "+  buf.toString('utf8',0,10));
var json = buf.toJSON(buf);
console.log("json = "+ json);

var buf1 = new Buffer('ABC');
var buf2 = new Buffer('ABCD');
var buftemp = buf2.compare(buf1);
console.log(buftemp);
