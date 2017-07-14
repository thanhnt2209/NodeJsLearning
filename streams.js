var fs = require("fs");

var data = '';

var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('UTF8');

readStream.on('data' ,function(chunk){
  data += chunk;
});

readStream.on('end', function(){
  console.log(data);
});



readStream.on('error', function(err){
  console.log(err.stack);
});


console.log("Program Ended");

var dataOne = "day la data moi";

var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(dataOne,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");

var readerStreamOne = fs.createReadStream('input.txt');

// Create a writable stream
var writerStreamOne = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStreamOne.pipe(writerStreamOne);

console.log("Program Ended");
