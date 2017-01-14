import * as type from "../mutationType.js"

const state = {
    products: JSON.parse(sessionStorage.getItem("products")) || []
}

const actions = {
    checkInCart: function({commit}, product){
        commit(type.CHECK_IN_CART, product);
    },
    checkOutCart: function({commit}, id){
        commit(type.CHECK_OUT_CART, id)
    }
}

const getters = {
    getProducts:({products}) => {
        return products;
    },
    getProductTotalNumber: ({products}) => {
        return products.reduce(function(num, item){
            return num += item.number;
        }, 0)
    }
}

const mutations = {
    [type.CHECK_IN_CART]({products}, product){
        var record = products.find(function(item, index, array){
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
    [type.CHECK_OUT_CART]({products}, id){
        var record = products.find(function(item, index, array){
           return item.id === product.id;
        });

        if (record.number > 1) {
            record.number--;
        } else {
            products = products.filter((item)=>{
                return item.id !== id;
            });
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}