## JS 面向对象
 - JS数据类型
 {} 对象 Object
 [] 数组
 字符串 "婧婧" String
 数值型 Number 20
 布尔值类型 Booleann
 - JS中面向对象有两种表达方式
    1. class 方式来构造抽象的类，以及可使用的对象的概念 constructor type n
    2. 对象字面量的方式来构建  {} 描述性 key-value形式 属性+方法的复杂数据类型
        haohao.age  haohao.sendFlower(jingjing);
 - 代理模式 Proxy
   小明 -> 小红 简陋的方式
   小明 -> 小美 ->小红  复杂？
   不同的对象(小红，小美),只要实现同样的方法receiveFlower(),就可以交换使用，面向接口的编程