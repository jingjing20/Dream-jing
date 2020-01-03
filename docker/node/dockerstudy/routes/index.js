const router = require('koa-router')();

router.get('/', async(ctx, next) => {
    // 把模板读取到内存    pug 模板的编译
    await ctx.render('index', { title: '首页' });
});


router.post('/form', async(ctx, next) => {
    console.log('from')
    ctx.body = ctx.request.body
});
// commonJS
module.exports = router