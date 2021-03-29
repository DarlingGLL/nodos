import Vue from 'vue'
import vuetify from '../src/plugins/vuetify.js' 
import App from './App.vue'
new Vue({
  vuetify,
  el: '#app',
  render: h => h(App)
})
