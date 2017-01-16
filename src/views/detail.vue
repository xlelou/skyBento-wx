<template>
    <div>
        <div class="header">
            <img :src="product.img" alt="">
            <div>
                <h5>{{product.name}}</h5>
                <p>
                    <span class="price"><b>{{product.price}}</b>元/份</span>
                    <span class="inventory">(当前库存仅剩{{product.inventory}}份)</span>
                </p>
                <span class="icon add-to-cart" @click="checkInCart" :class="{active: active}"></span>
            </div>
        </div>
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
                product: {

                },
                show: false,
                active: false
            }
        },
         computed: {
            dataSource(){
               return this.$store.getters.getProducts
            }
        },
        mounted(){
              this.$http({method: "GET", params: {id: this.$route.params.id,}, url: "/index/getDishesData"}).then(res=>{
                   var data = (JSON.parse(res.data)).data[0];
                  
                   this.product = data;
               }).catch(function(){
                   alert("请求出错，请联系管理员")
               })
        },
        methods: {
             submitOrder(){
                alert("submit order");
            },
            checkInCart(){
                this.active = true;

                setTimeout(()=>{
                    this.active = false;
                }, 400);

                this.$store.dispatch('checkInCart', this.product);
            },
        },
        components: {
            comFooter,
            actionSheet
        }
    }
</script>
<style scoped>
    .header {
        height: 14rem;
        position: relative
    }
    .header > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .header > div {
        position: absolute;
        background: rgba(0,0,0,.4);
        z-index: 2;
        width: 100%;
        bottom: 0;
        color: #fff;
        padding: .5rem 1rem;
    }
    .header > div h5 {
         font-size: 1rem;
     }
    .header > div p {
        font-size: .85rem;       
    }
      .add-to-cart{
        display: inline-block;
        width: 2rem;
        height: 2rem;
        background: url(../assets/icon-cart.png) no-repeat;
        background-size: 100%;
        position: absolute;
        right: 3rem;
        top: 1rem;
    }
    .add-to-cart.active {
        background: url(../assets/icon-cart-active.png) no-repeat;
        background-size: 100%
    }
</style>