<template>
    <div>
       <product :product="dishesData"></product>
       <com-menu @toggle="toggleFunc" ref="menu" @load="loadFunc"></com-menu>
        <com-footer @submit="submitOrder" @showCart="showCart">
           <p slot="submit-order-slot">提交订单</p>
       </com-footer>
    </div>
</template>
<script>
    import comFooter from '../components/comFooter'
    import comMenu from '../components/comMenu'
    import product from '../components/product'
    export default {
        data() {
            return {
                 dishesData: {

                 }
            }
        },
        mounted(){
        },
        methods: {
            loadFunc(){
                const menu = this.$refs.menu;
                this.toggleFunc(menu.$el.querySelector(".active").getAttribute("data-id"));
            },
            submitOrder(){
                alert("submit order");
            },
            showCart(){
                alert("show cart");
            },
            toggleFunc(id){
               this.$http({method: "GET", params: {id: id}, url: "/index/getDishesData"}).then(res=>{
                   this.dishesData = (JSON.parse(res.data)).data[0];
               }).catch(function(){
                   alert("请求出错，请联系管理员")
               })
            }
        },
        components: {
            comFooter,
            comMenu,
            product
        },
        watch: {
            dishesData: function (val, oldVal) {
                console.log( val, oldVal)
            },
        }
    }
</script>
<style>

</style>