- 第一步创建路由
    router.js中 自己可以创建路由地址
    //注册url 
    router.post('/login/register',controller.login.register);
    //登录url post 请求login 登录
    router.post('/login',controller.login.loginIn)
- 第二步写控制器
    controller目录下建立与router.js中配置的路由相同名字的js文件
