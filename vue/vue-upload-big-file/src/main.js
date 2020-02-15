import Vue from 'vue'
import App from './App.vue'
// 引入element-ui
import ElementUI from "element-ui";
// 标准操作 引入默认的样式
import "element-ui/lib/theme-chalk/index.css";
// 全局注册element-ui的组件库 在任何地方都能使用
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')