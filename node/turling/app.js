const TULING = require('tuling');

const aiTuling = new TULING({
    key: '5cee0ea284cf4b64b89a0439b3d2bc98'
});


//立即执行函数  用括号先把函数体括起来 再在后面加一个括号即可
// (() =>{
//     console.log('arrow function')
// })()

//console.log(func);
//func();

(async () =>{
    //机器人
    //console.log('arrow function')
    const result = await aiTuling.send({
        userid:1,
        info: '今天的天气？',
        loc: '南昌市'
    });
    console.log(result);
})()