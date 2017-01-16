<template>
    <div>
        <img :src="item" v-for="(item, index) in detail" alt="" width="100%"> 
    </div>
</template>
<script>
    export default {
        data(){
            return {
                detail: null
            }
        },
        props: {
            id: {
                required: true,
                type: [Number, String]
            }
        },
        mounted(){
              this.$http({method: "GET", params: {id: this.id,}, url: "/detail"}).then(res=>{
                   var data = (JSON.parse(res.data)).data.goodsImg;
                  
                   this.detail = data;
               }).catch(function(){
                   alert("请求出错，请联系管理员")
               })
        },
    }
</script>
<style>
    
</style>