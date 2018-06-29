const http=require('http');
const url=require('url');
const fs=require('fs');
const { fork } = require('child_process');
const queryString=require('querystring');

const server=http.createServer();

server.on('request',(req,res)=>{
const myURL=queryString.stringify(url.parse(req.url)).split("%2F");
if(myURL.pop()=='file.txt'){
    res.setHeader('content-type', 'text/html');
    const childProcess=fork('childOperation.js');
    childProcess.send('start');
    req.setEncoding('utf8');
    childProcess.on('message',(data)=>{
       res.end(data)
    })
}

}).listen(4000);
