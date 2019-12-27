- 事件监听 执行逻辑？
    浏览器 Chrome.exe 打开即产生一个进程
    js 是Chrome里的语言编译器来执行的
    html + css DOM树 树的数据结构   浏览器先构建DOM树 再将html css 加载到节点上
    js 作为脚本执行是立刻执行的 但是事件监听是异步的
    - 注册事件？    micro event 一直循环 等到回调函数
    - 事件发生时怎么执行？
    js 单线程语言 onload
    轮循注册事件的地方

- 订阅 发布者模式
    楼房 发布者(有房子的信息)
    买房者 订阅者   建模

- listen 加订阅者
    saleOffices.clientList.push(fn);    形成订阅关系

- saleOffices   发布者
    trigger 有事通知  触发器一样    把所有的订阅者都执行一次

- apply 指定其this指向  arguments

- document.body.addEventListener('click',fn);
    发布者 document.body 它可以有很多订阅者
    订阅者 fn
    document.body.events = [] click 事件池
      trigger
        event.each(fn)