const Service = require('egg').Service;
const crypto = require('crypto');
const uuid = require('uuid');

class UserService extends Service{
    async register(user) {
        const {ctx} = this;
        console.log(user,'service');
        //密码加密  单向加密
        user.password = crypto.createHash('sha256','wzh9898')
        .update(user.password)
        .digest('hex');
        // user.user_id = uuid.v4().replace(/-/g,'');
        const userInfo = await this.ctx.model.User.create(user);

        ctx.body = {
            userInfo,
            msg: '注册成功',
            // user_id: user.user_id
        }
    }
}

module.exports = UserService