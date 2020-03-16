> db.users.find().pretty(); 格式化查询结果
> db.users.ensureIndex({"tags":1}); 创建索引
> db.users.getIndexSpecs(); 获取索引
> db.users.dropIndex("tags_1");   删除索引
> db.users.find({tags: 'coding'}).explain("executionStats");  查询


>db.inventory.insertMany([ {"item": "f1", type:"food", quantity: 500}, {"item": "f2", type:"food", quantity: 100}, {"item": "p1", type:"paper", quantity: 200}, {"item": "p2", type:"paper", quantity: 150}, {"item": "f3", type:"food", quantity: 300}, {"item": "t1", type:"toys", quantity: 500}, {"item": "a1", type:"apparel", quantity: 250}, {"item": "t2", type:"toys", quantity: 50}, {"item": "f4", type:"food", quantity: 75} ]);

>db.inventory.find( { quantity: {    $gte: 100,     $lte:200    } });   按条件查找  大于100小于200
>db.inventory.createIndex({quantity:1});  创建索引
>db.inventory.createIndex({ quantity: 1, type: 1});   创建正向索引
>db.inventory.createIndex({ type: 1, quantity: 1});   创建反向索引

