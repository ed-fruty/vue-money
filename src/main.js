import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import store from './store';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

Vue.use(Vuex);

window.app = new Vue({
  store: new Vuex.Store(store),
  render: h => h(App),
}).$mount('#app')
