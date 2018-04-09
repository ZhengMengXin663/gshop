import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import './mock/mockServer'
import Split from './components/Split/Split.vue'
import './filters'

Vue.component('Split',Split)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
