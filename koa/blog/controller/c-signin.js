exports.getSignin = async (ctx) => {
    await ctx.render('signin',{
        
    })
}

exports.postSignin = async (ctx) => {
    ctx.body = {
        msg: '登录成功！'
    }
}