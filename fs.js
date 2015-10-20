var fs = require('fs');

/*setTimeout(function(){
    console.log('setTimeout');
},10);*/
//以异步方式读取文件
/*fs.readFile('index.html','utf8',function(err,data){
    console.log(err);
    //console.log(data);
})*/
var content = fs.readFileSync('index.html','utf8');
console.log(content);
console.log('next');
var n = 10;