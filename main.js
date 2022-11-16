// var http=require('http');
//
// var server=http.createServer(function(req,res){
//     res.end('hello');
//
//
// })
// server.listen('5050');
// console.log("successfull");
//
// var http=require('http');
//
// var server=http.createServer(function(req,res){
//
//     if(req.url=="/"){
//         res.writeHead(200,{'contentType':'text/html'})
//         res.write("<h1>this is home page</h1>");
//         res.end();
//
//     }else if(req.url=="/about"){
//
//         res.writeHead(200,{'contentType':'text/html'})
//         res.write("<h1>this is about page</h1>");
//         res.end();
//     }else if(req.url=="/content"){
//         res.writeHead(200,{'contenttype':'text/html'})
//         res.write("<h1>this is content page</h1>");
//         res.end();
//     }




//
// })
// server.listen('5050')
// console.log("successfull");

var http=require('http');
var URL=require('url');

var server=http.createServer(function(req,res){
    var myurl="http://jawadulkarim.com/content.html?year=2022jewof=ewf";

    var myurlobj=URL.parse(myurl,true);
    var hostname=myurlobj.host;
    var pathName=myurlobj.pathname;
    var mysearch=myurlobj.search;

    res.writeHead(200,{'content-type':'text/html'})
    res.write(hostname);
    res.end();


})
server.listen("5050");
console.log("done");