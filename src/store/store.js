import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import plugins from './plugins'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        cart
    },
    plugins
});

export default store;