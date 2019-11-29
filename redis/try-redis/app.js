const http = require('http');
const redis = require('redis');
const client = redis.createClient(6379,'192.168.31.128');
let api_limit = 10;

client.set("jing_hao",520,function(err,obj){
    console.log(obj);
})
http.createServer((req,res) => {
    if (/^\/api/.test(req.url)) {        //正则表达式    /^\/api/.test("/test/api") false 加^表示一定要以/api开头
        // 响应头？
        //200是状态码 StatusCode
        //1xx   请求进行中...
        //2xx   成功 
        //3xx   跳转
        //4xx   用户端发生错误
        //5xx   服务端
        // res 用户访问的响应  响应体  
        //api_limit--;
        client.get("jing_hao", function(err,count){
            res.writeHead(200,{
                'Content-Type': 'text/json;charset=utf-8'
            });
            if(count>=0){
                client.decrby("jing_hao",1);
                res.end(JSON.stringify({
                    name: 'jing',
                    count:`您拥有${count}次调用权限`
                }))
            }else{
                res.writeHead(200,{
                    'Content-Type': 'text/json;charset=utf-8'
                })
                res.end(JSON.stringify({
                    msg:`您的次数已用完！请充值！`
                }))
            }
        })       
    }
})
.listen(7001)