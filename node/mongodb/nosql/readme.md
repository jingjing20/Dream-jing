- NOSQL
  MYSQL 关系型数据库
  database->table->fields
  NOSQL 不需要写SQL
  JSON object {}.save() 存储
  fing({}) 查找
  适合碎片化的 结构型并不是很良好的数据存储
  Mongodb   云开发数据库就是线上版的

-       MYSQL       MONGODB
    关系型数据库     NOSQL Facebook 文档型
    show database;  show dbs;
              use db;
    tables;         collections;
    SQL语句         js 语法的面向对象api    


- 连接mongodb
    url mongodb://

- db.createCollections('site',function(err,res){
    //err 出错
    //我们了解到时异步的 耗时间的
    js 中执行的代码不会阻塞
    db.close();
})

- 代码顺序
    1. createCollections

- 数据库 后端开发框架 express
  node 后端就是app
  app.get('/',(req,res) =>
  res.send('hello world'))
  app.listen(3000,)