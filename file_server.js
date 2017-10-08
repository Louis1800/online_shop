'use strict';
var fs = require('fs');//读取文件
var url = require('url');//操作url
// console.log(url.parse('http://www.weibo.com/u/1395851263/home?wvr=5'));

var http = require('http');

var path = require('path');

// var workDir = path.resolve('.');

// var filePath = path.join(workDir,'pub','index.html');
// console.log(filePath);

var root = path.resolve(process.argv[2]||'.');

var server = http.createServer(function (request,response) {
    console.log(request.url);
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root,pathname);
    console.log(filepath);
    fs.stat(filepath,function(err,stats){
        if(!err&&stats.isFile()){
            console.log('200 '+request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }
    })
});

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080');