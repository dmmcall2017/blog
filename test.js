var fs = require('fs');                //获取fs模块
console.log('start async read');        //异步读取开始
fs.readFile('test2.js',function(error,date){    //读取文件，回调函数第一个参数表示错误信息，第二个参数为读取的文本内容
    if(error){
        console.log(error);
    }else{
        console.log('end async read');    //异步读取结束
    }
});


console.log('start sync read'); //同步读取开始
if(!fs.existsSync('./demo')){
    fs.mkdirSync('./demo');
    console.log("创建新文件夹");
}
console.log('end sync read');    //同步读取结束