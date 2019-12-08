'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //动手搞blog
  // 新增博客
  // 显示博客列表
  // 博客详情
  router.get('/posts',controller.post.index);  //显示博客列表 所有的博客都查出来

  // router.get('/posts/:id');    // : 表示动态参数

  router.get('/posts/create',controller.post.new);

  router.post('/posts',controller.post.create);

  // router.delete('/posts/:id'); 

  // router.put('/posts/:id');
};
