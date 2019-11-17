const fs = require('fs');
const image = fs.readFileSync('./car4.jpg').toString('base64');     //readFileSync 等待完成在继续执行 像回调函数一样的效果

const AipOccClient = require('baidu-aip-sdk').ocr;

const client = new AipOccClient('17712432','pjpPCumRa5s8WVmq1MogRLsB','s6IEq6VcuEAkoPk2ZMWBq3ATeoFLE01G');

const options = {};
options["multi_detect"] = "true";
client
    .licensePlate(image,options)
    .then(function(result){
        console.log(result);
    });