/*
* $('#btn').addEventListener('click',function(){
*    alert('welcome');
* }
* );
* */


/**
 GET / HTTP/1.1
 User-Agent: curl/7.41.0
 Host: localhost:414
 Accept:

 HTTP/1.1 200 OK
 Date: Tue, 20 Oct 2015 04:36:30 GMT
 Connection: keep-alive
 Transfer-Encoding: chunked


 **/
  //庆丰包子店
var http = require('http');

//开建一个新店 装修完成
var server = http.createServer();
//当有客人进来的时候 触发一个服务员的服务方法
/**
 * http.IncomingMessage request
 * http.ServerResponse response
 */
server.addListener('request',function(request,response){
    //获取请求的方法
    console.log(request.method);
    console.log(request.url);
    console.log(request.httpVersion);
    console.log(request.headers);
    response.statusCode = 404;
    response.setHeader('name', 'zfpx');
    response.write('hello');
    setTimeout(function(){
        response.write('world');
        response.end();
        //
    },5000)

});
//在当前服务器的414端口上进行监听
server.listen(8888,'0.0.0.0');

/**
  GET / HTTP/1.1
  User-Agent: curl/7.41.0
  Host: localhost:414
  Accept:

 HTTP/1.1 200 OK
 Date: Tue, 20 Oct 2015 04:36:30 GMT
 Connection: keep-alive
 Transfer-Encoding: chunked


 **/