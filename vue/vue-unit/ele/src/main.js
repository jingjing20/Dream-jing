import Vue from 'vue'
import App from './App.vue'
import router from './router'

import jinghaoui from 'jinghaoui'
import 'jinghaoui/lib/jingui.css'

Vue.config.productionTip = false
Vue.use(jinghaoui)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
