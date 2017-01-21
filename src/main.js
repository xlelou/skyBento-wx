import Vue from 'vue'
import App from './App'
import routes from './router/route'
import vuex from 'vuex'
import vueRouter from 'vue-router'
import store from './store/store'
import mock from './server/mock'
import Validator from 'vue-validator'

Vue.use(vuex);
Vue.use(Validator);
Vue.use(vueRouter);

const router = new vueRouter({
    mode: "history",
    routes
  })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
