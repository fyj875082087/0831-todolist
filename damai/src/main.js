import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入公众的css
import "./assets/style/reset.css"
// 图标
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import { CountDown } from 'vant';
Vue.use(CountDown);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
