import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import VueRouter from "vue-router";

axios.defaults.withCredentials=true
//引用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入MD5加密
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

//引入vueX
import store from "./store/index";

//引入路由
import router from "./router/myRouter";

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

