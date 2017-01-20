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
                 this.detail = (JSON.parse(res.data)).data.goodsImg;
               }).catch(function(){
                   alert("请求出错，请联系管理员")
               })
        },
    }
</script>
<style>
    
</style>