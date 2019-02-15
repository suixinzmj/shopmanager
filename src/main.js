// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.css'
import moment from 'moment'
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

Vue.use(ElementUI)
// 格式化日期
Vue.filter('fmtdate', (v) => {
  return moment(v).format('YYYY-MM-DD')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
