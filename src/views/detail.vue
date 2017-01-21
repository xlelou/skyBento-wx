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
        <ul class="tab">
            <li :class="{active: isProductDetail === 'detail' ? true : false}" @click="isProductDetail = 'detail'">
                详情
            </li>
            <li :class="{active: isProductDetail === 'comment' ? true : false}" @click="isProductDetail = 'comment'">
                评价
            </li>
        </ul>
        <transition name="component-fade" mode="out-in">
            <product-detail :id="id" v-if="isProductDetail === 'detail' ? true : false "></product-detail>
            <comment :id="id" v-if="isProductDetail === 'comment' ? true : false "></comment>
        </transition>
        <com-footer @submit="submitOrder" @showCart="show = true">
           <p slot="submit-order-slot">提交订单</p>
        </com-footer>
        <cart :show="show" :dataSource="dataSource" @hide="show = false"></cart>
    </div>
</template>
<script>
    import comFooter from '../components/comFooter'
    import cart from '../components/cart'
    import productDetail from '../components/detail'
    import comment from '../components/comment'
    import api from '../api/api'

    export default {
        data(){
            return {
                product: {

                },
                show: false,
                active: false,
                isProductDetail: "detail",
                id: this.$route.params.id
            }
        },
        computed: {
            dataSource(){
               return this.$store.getters.getProducts
            }
        },
        beforeRouteEnter(to, from, next){
            api.getDishesData({id: to.params.id}).then((res)=>{
                 next(vm => {
                    vm.product = res.data.data[0];
                })
            }).catch(()=>{
                alert("error")
            });
        },
        methods: {
             submitOrder(){
                 this.$router.push({
                    path: "/payOrder"
                  });
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
            cart,
            productDetail,
            comment
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
        box-sizing: border-box;
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
    .tab {
        display: flex;
        list-style-type: none;
        background: #ff8400;
        padding: .5rem 1rem;
    }
    .tab li {
        width: 50%;
        text-align: center
    }
    .tab li:first-child {
          border-right: 1px solid #fff
    }
    .tab li.active {
        color: #fff;
    }
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .2s ease;
    }
    .component-fade-enter, .component-fade-leave-active {
        opacity: 0;
    }
</style>