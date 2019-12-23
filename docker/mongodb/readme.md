## docker 基本概念
- mongodb nosql 数据库
- docker 集装箱 一家公司的开发环境迅速上线的核武器
  解决了开发环境的问题
- docker pull image
    镜像

- docker run -p 27017:27017 --name mongo -d 18400f87db91
    -p 27017:27017  端口
    --name          运行容器名称

- docker ps -a 查看正在运行的容器

- docker exec -it mongo mongo
    exec 执行
    -it 命令行的交互
    第一个mongo是镜像
    第二个mongo是  -it 交互的脚本
    任何一个docker拉取的都是一个简版的linux

## mongodb shell交互
- use tutorial; 新建一个collection
- db.users.insert({username: 'smith'}); 直接建立users集合(collection)同时插入一条数据
- db.users.find();  查找所有集合元素