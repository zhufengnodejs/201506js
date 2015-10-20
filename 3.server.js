  //庆丰包子店
var http = require('http');
var fs = require('fs');
//开建一个新店 装修完成
var server = http.createServer();
//当有客人进来的时候 触发一个服务员的服务方法
/**
 * http.IncomingMessage request
 * http.ServerResponse response
 */
server.addListener('request',function(request,response){
  var url = request.url;

  if(url == '/index.html'){
      //同步
     /* var content = fs.readFileSync('index.html','utf8');
      response.write(content);
      response.end();*/

      //异步
      fs.readFile('html/index.html','utf8',function(err,content){
          if(err){
              response.statusCode =  404;
              return response.end('没有这个文件');
          }
          response.write(content);
          response.end();
      })
      console.log('next');
  }

});
//在当前服务器的414端口上进行监听
server.listen(8080,'0.0.0.0');
