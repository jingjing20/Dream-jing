- npm init -y 项目的初始化
  java 一样来做后端 企业级开发框架

  npm init egg --type=simple    引入egg

  - app node 里面的应用程序 主要代码
  - config 配置文件夹
  - test   测试目录

- egg 架构
  脚手架快速构建项目结构
  web   http协议
  路由  router.js   配置了路由
  然后找到控制器 ->controller (ctx.request.body)
  再找视图层 modle

- npm i sequelize-cli -D
  -D? devDependencies 
  开发阶段的依赖  方便 MySQL 的处理。   
  创建表    执行sql
  sequelize-cli command-line 命令行

- sequelize 命令行集锦
    sequelize init 初始化MySQL的工作目录
    - config.json
    sequelize db:create 创建数据库
    
