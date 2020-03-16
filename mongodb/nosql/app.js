//mongodb 数据库驱动
var MongodbClient = require('mongodb').MongoClient;
//mongodb 连接是用mongodb:// 协议来    27017端口
//mysql 3306
var url = 'mongodb://127.0.0.1:27017/jingjing';
MongodbClient.connect(url,{
    useNewUrlParser: true
},function(err,db){     //回调函数
    if(err) {
        throw err;
    }
    //console.log('数据库已创建！');
    var dbbase = db.db('jingjing');
    // //查询数据库是异步？回调方案
    // dbbase.createCollection('wzh_site',function(err,res){
    //     // 回调先处理错误
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('创建了集合');
    //     db.close();
    // })


    //插入数据  JSON object
    var myObj = {name: '龙婧',url: 'haohao-wodedabaobei'};
    dbbase
        .collection('wzh_site')
        .insertOne(myObj,function(err,res){
            if(err)
                throw err;
            console.log('插入成功！');
            db.close();
        })
    //查找数据
    // dbbase.collection("wzh_site")
    //     .find({"name":"王志浩"})
    //     .toArray(function(err,result){
    //         if(err)
    //             throw err;
    //         console.log(result);
    //         db.close();
    //     })
})