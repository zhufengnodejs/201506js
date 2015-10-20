  //庆丰包子店
var http = require('http');
var fs = require('fs');
  var mime = require('mime');//从文件类型得知内容类型
//开建一个新店 装修完成
var server = http.createServer();

//当有客人进来的时候 触发一个服务员的服务方法
/**
 * http.IncomingMessage request
 * http.ServerResponse response
 */
server.addListener('request',function(request,response){
  var url = request.url;
  if(url == '/clock'){
      response.write(new Date().toLocaleString());
    return response.end();
  }
  var filename = url.slice(1);
      //异步
  fs.readFile(filename,function(err,content){
          if(err){
              response.statusCode =  404;
              return response.end('没有这个文件');
          }
      console.log(mime.lookup('xxx.jpg'));
      response.setHeader('Content-Type',mime.lookup(filename));
          response.write(content);
          response.end();
  })


});
//在当前服务器的414端口上进行监听
server.listen(8080,'0.0.0.0');
