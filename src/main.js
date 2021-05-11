import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


// module
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/default.css';

import 'boxicons/css/boxicons.min.css'
import './assets/css/styles.css'

Vue.use(VueHighlightJS)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
