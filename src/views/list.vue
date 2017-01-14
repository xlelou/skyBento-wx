<template>
    <div>
        <product :product="dishesData"></product>
        <com-menu @toggle="toggleFunc" ref="menu" @load="loadFunc"></com-menu>
        <com-footer @submit="submitOrder" @showCart="show = true">
           <p slot="submit-order-slot">提交订单</p>
        </com-footer>
        <action-sheet :show="show" :dataSource="dataSource"></action-sheet>
    </div>
</template>
<script>
    import comFooter from '../components/comFooter'
    import comMenu from '../components/comMenu'
    import product from '../components/product'
    import actionSheet from '../components/actionSheet'
    export default {
        data() {
            return {
                 dishesData: {

                 },
                 show: false,
            }
        },
        computed: {
            dataSource(){
               return this.$store.getters.getProducts
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
            toggleFunc(id){
               this.$http({method: "GET", params: {id: id}, url: "/index/getDishesData"}).then(res=>{
                   console.log("success");
                   this.dishesData = (JSON.parse(res.data)).data[0];
               }).catch(function(){
                   alert("请求出错，请联系管理员")
               })
            }
        },
        components: {
            comFooter,
            comMenu,
            product,
            actionSheet
        }
    }
</script>
<style>

</style>