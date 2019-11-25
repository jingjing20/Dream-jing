// var express = require('express');   //node 开发框架
// //异步无阻塞 node 可以支持更高的并发
// // 启动一个webapp
// const app = express();

// app.get('/',(req,res) => res.send('hello world'));
// app.listen(3000, () => console.log('Example app listening on port 3000!'));

const express = require('express');
const ejs = require('ejs');     //模板引擎
const app = express();
var dbbase;

var MongodbClient = require('mongodb').MongoClient;
//mongodb 连接是用mongodb:// 协议来    27017端口
//mysql 3306
var url = 'mongodb://127.0.0.1:27017/jingjing';

MongodbClient.connect(url,{
    useNewUrlParser: true
},function(err,db){
    if(err) {
        throw err;
    }
    // console.log('数据库已创建！');
    dbbase = db.db('jingjing');
});


app.get('/',(req, res) => {

    dbbase.collection("wzh_site")
        .find({"name":"龙婧"})
        .toArray(function(err,result){
            if(err)
                throw err;
            console.log(result);
            //db.close();

            ejs.renderFile("views/index.html",{
                title: '婧婧',
                items: result
            },function(err, data){
                res.end(data);
            })
        })
})
app.listen(3000);