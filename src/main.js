import Vue from 'vue'
import App from './App.vue'

import misclick from './plugins/misclick'

Vue.config.productionTip = false

Vue.use(misclick)

new Vue({
  render: h => h(App)
}).$mount('#app')
