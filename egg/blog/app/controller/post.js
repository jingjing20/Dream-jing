const Controller = require('egg').Controller;
class PostController extends Controller {
    async index () {
       await this.ctx.render('index.tpl');
    }

    async new() {

        // this.ctx.body = 'hi 东理F4';
        await this.ctx.render('new.tpl');   //异步操作 需要时间
    }

    async create(){
        const { ctx } = this;
        let { title, body } = ctx.request.body; //请求体
        // console.log(title,body);
        // this.ctx.body = '在这里处理表单提交';   //不需要异步 不要await
        await ctx.service.post.newPost(title,body);       //存储数据库

        ctx.redirect('/posts')
    }
}

module.exports = PostController;