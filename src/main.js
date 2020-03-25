import http from '$utils/http'
import Vue from 'vue'
import Root from './root.vue'
import { Message } from 'element-ui'
import VueSweetalert2 from 'vue-sweetalert2';
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/message.css'
import './assets/css/index.css'
import './bootstrap'
import router from './router'
import store from './vuex'
import { sync } from 'vuex-router-sync'

Vue.use(VueSweetalert2);

sync(store, router)

Vue.prototype.$message = Message
Vue.prototype.$http = http
Vue.prototype.router = router
Vue.config.productionTip = false
Vue.prototype.$user = () => {
  return store.getters.currentUser
}

setTimeout(() => {
  new Vue({
    store,
    router,
    render: h => h(Root)
  }).$mount('#app')
}, 200)

