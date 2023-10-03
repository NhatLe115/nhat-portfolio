import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import 'animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueLazyload,
  render: (h) => h(App),
}).$mount('#app')
