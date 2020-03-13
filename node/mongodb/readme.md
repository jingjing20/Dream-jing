> db.users.find().pretty(); 格式化查询结果
> db.users.ensureIndex({"tags":1}); 创建索引
> db.users.getIndexSpecs(); 获取索引
> db.users.dropIndex("tags_1");   删除索引
> db.users.find({tags: 'coding'}).explain("executionStats");  查询