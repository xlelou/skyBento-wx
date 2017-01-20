import axios from 'axios'

export default {
    getAddress(params, cb){
         axios.get("/getAddress", {method: "GET", params: params}).then(res=>{
            typeof cb === "function" && cb(res);
        }).catch(()=>{
            alert("请求出错，请联系管理员")
        })
    },
    getUserInfo(params, cb){
        axios.get("/getUserInfo", {method: "get", params}).then(res=>{
            typeof cb === "function" && cb(res);
        }).catch(()=>{
            alert("请求出错，请联系管理员")
        })
    },
    getDishesData(params, cb){
        axios.get("/index/getDishesData", {method: "get", params}).then(res=>{
            typeof cb === "function" && cb(res);
        }).catch(()=>{
            alert("请求出错，请联系管理员")
        })
    },
}