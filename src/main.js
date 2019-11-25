import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Add CSS
require('./styles/main.scss')
require('./styles/metro.scss')
require('./styles/secondary.scss')

import Sidenav from "@/components/Sidenav";

Vue.component("Sidenav", Sidenav);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
