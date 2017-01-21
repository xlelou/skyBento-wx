import axios from 'axios'

export default {
    getAddress(params, cb){
        var p = new Promise(function(resolve, reject){
            axios.get("/getAddress", {method: "get", params}).then(res=>{
                resolve(res);
            }).catch((res)=>{
                reject(res)
            });
        });
        return p;
    },
    getUserInfo(params, cb){
        var p = new Promise(function(resolve, reject){
            axios.get("/getUserInfo", {method: "get", params}).then(res=>{
                resolve(res);
            }).catch((res)=>{
                reject(res)
            });
        });
        return p;
    },
    getDishesData(params, cb){
        var p = new Promise(function(resolve, reject){
            axios.get("/index/getDishesData", {method: "get", params}).then(res=>{
                resolve(res);
            }).catch((res)=>{
                reject(res)
            });
        });
        return p;
    },
    getProductDetail(params, cb){
        var p = new Promise(function(resolve, reject){
            axios.get("/detail", {method: "get", params}).then(res=>{
                resolve(res);
            }).catch((res)=>{
                reject(res)
            });
        });
        return p;
    },
    getDishesTypeData(params, cb){
        var p = new Promise(function(resolve, reject){
            axios.get("/index/getDishesTypeData", {method: "get", params}).then(res=>{
                resolve(res);
            }).catch((res)=>{
                reject(res)
            });
        });
        return p;
    },
    getComment(params){
        var p = new Promise(function(resolve, reject){
            axios.get("/comment", {method: "get", params}).then(res=>{
                resolve(res);
            }).catch((res)=>{
                reject(res)
            });
        });
        return p;
    },
    getTalkTime(params){
        var p = new Promise(function(resolve, reject){
            axios.get("/getTalkTime", {method: "get", params}).then(res=>{
                resolve(res);
            }).catch((res)=>{
                reject(res)
            });
        });
        return p; 
    },
    getOrderDetail(params){
        var p = new Promise(function(resolve, reject){
            axios.get("/getOrderDetail", {method: "get", params}).then(res=>{
                resolve(res);
            }).catch((res)=>{
                reject(res)
            });
        });
        return p; 
    },
    getOrder(params) {
        var p = new Promise(function(resolve, reject){
            axios.get("/getOrder", {method: "get", params}).then(res=>{
                resolve(res);
            }).catch((res)=>{
                reject(res)
            });
        });
        return p;
    }
}