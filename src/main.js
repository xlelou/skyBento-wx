import Vue from 'vue'
import App from './App'
import routes from './router/route'
import vueResource from 'vue-resource'
import vuex from 'vuex'
import vueRouter from 'vue-router'
import store from './store/store'
import mock from './server/mock'

Vue.use(vuex);
Vue.use(vueResource);
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
