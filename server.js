var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('success');
}).listen(8888);   

var fs = require("fs");
var data = "psx";
fs.writeFile('input.txt', data, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('success.');
    }   
})

fs.readFile('input.txt', function(err, file) {
    if (err) {
       return console.error(err);
   }
    console.log('文件读取完毕');
    console.log(data);
});
console.log('发起读取文件');