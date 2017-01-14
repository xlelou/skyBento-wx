<template>
    <div>
        {{msg}}
        <com-footer @submit="submitOrder" @showCart="show = true">
           <p slot="submit-order-slot">提交订单</p>
        </com-footer>
        <action-sheet :show="show" :dataSource="dataSource" @hide="show = false"></action-sheet>
    </div>
</template>
<script>
    import comFooter from '../components/comFooter'
    import actionSheet from '../components/actionSheet'
    export default {
        data(){
            return {
                msg: "detail page",
                show: false,
            }
        },
         computed: {
            dataSource(){
               return this.$store.getters.getProducts
            }
        },
        methods: {
             submitOrder(){
                alert("submit order");
            },
        },
        components: {
            comFooter,
            actionSheet
        }
    }
</script>
<style>
    
</style>