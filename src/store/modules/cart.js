import * as type from "../mutationType.js"

const state = {
    products: JSON.parse(sessionStorage.getItem("products")) || []
}

const actions = {
    checkInCart: function ({commit}, product) {
        commit(type.CHECK_IN_CART, product);
    },
    checkOutCart: function ({commit}, id) {
        commit(type.CHECK_OUT_CART, id)
    },
    clearCart: function ({commit}) {
        commit(type.CLEAR_CART);
    }
}

const getters = {
    getProducts: ({products}) => {
        return products;
    },
    getProductTotalNumber: ({products}) => {
        return products.reduce(function (num, item) {
            return num += item.number;
        }, 0)
    },
    getProductTotalPrice: ({products}) => {
        return products.reduce(function (sum, item) {
            return sum += (item.number * item.price);
        }, 0)
    }
}

const mutations = {
    [type.CHECK_IN_CART]({products}, product) {
        var record = products.find(function (item, index, array) {
            return item.id === product.id;
        });
        if (record) {
            record.number++;
        } else {
            products.push({
                id: product.id,
                price: product.price,
                name: product.name,
                number: 1
            });
        }
    },
    [type.CHECK_OUT_CART](state, id) {
        var record = state.products.find(function (item, index, array) {
            return item.id === id;
        });

        if (record.number > 1) {
            record.number--;
        } else {
            state.products = state.products.filter((item) => {
                return item.id !== id;
            });
        }
    },
    [type.CLEAR_CART](state) {
        state.products = [];
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}