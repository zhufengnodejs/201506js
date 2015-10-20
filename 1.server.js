/*
* $('#btn').addEventListener('click',function(){
*    alert('welcome');
* }
* );
* */
//庆丰包子店
var http = require('http');

//开建一个新店 装修完成
var server = http.createServer();
//当有客人进来的时候 触发一个服务员的服务方法
server.addListener('request',function(request,response){
    response.write('welcome');
    response.write('亲爱的先生');
    response.end();
});
//在当前服务器的414端口上进行监听
server.listen(414,'0.0.0.0');

/**
  GET / HTTP/1.1
  User-Agent: curl/7.41.0
  Host: localhost:414
  Accept:

 HTTP/1.1 200 OK
 Date: Tue, 20 Oct 2015 04:36:30 GMT
 Connection: keep-alive
 Transfer-Encoding: chunked

welcome浜茬埍鐨勫厛鐢? Connection #0 to host local
 **/