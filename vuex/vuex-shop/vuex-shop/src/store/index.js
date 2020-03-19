import Vue from 'vue'
import Vuex from 'vuex'
// 商品模块的数据管理分离
import products from './modules/products'; 
//集中管理products数据
import cart from './modules/cart' //集中模块化管理cart
Vue.use(Vuex)
// 单一状态树  状态不会有问题
// 树 modules 来了

export default new Vuex.Store({
  state: { //根节点
    // 为空  未登录 全局共享状态 
    userInfo: {
      uid: 10001,
      username: '腾哥'
    }
    // 所有状态 放在这里
  },
  mutations: {
  },
  actions: {
    
  },
  modules: {
    // cart, // 当应用复杂起来的时候
    products, //叶节点
    cart
  }
})
