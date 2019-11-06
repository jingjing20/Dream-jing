//fileSystem    内置模块
const fs = require('fs');
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
//console.log('hello node');
const image = fs.readFileSync('car2.jpg').toString("base64");    //base64是图片一种新的文件格式

//console.log(image);
const client = new AipImageClassifyClient('17711936','HXpkTYaH7kYAexripSQYLA8a','NUBEcFLwgvDdGIb7qEPcn9WpFdwr1k99');

client
    .carDetect(image)
    .then(function(result){
        console.log(result)
    })
//AipImageClassifyClient
//回调函数
// 文件在哪？磁盘里
// js 在哪里运行？ 内存中运行   IO操作
// fs.readFile('./tessxt.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log(data.toString());
// })