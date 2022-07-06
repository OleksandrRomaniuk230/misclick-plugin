import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import misclick from './plugins/misclick'

Vue.config.productionTip = false

Vue.use(misclick)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
