console.log('1');
if(true){
    console.log(2);
}

console.log(global.process.pid);

setInterval(function(){
    console.log('hello');
},1000)
//window.alert('3');