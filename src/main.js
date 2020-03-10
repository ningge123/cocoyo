import http from '$utils/http'
import Vue from 'vue'
import Root from './root.vue'
import { Message } from 'element-ui'
import './assets/css/index.css'
import './bootstrap'
import router from './router'

Vue.prototype.$message = Message
Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Root),
}).$mount('#app')
