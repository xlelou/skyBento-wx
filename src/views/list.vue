<template>
    <div>
        <button type="button" class="prev" @click="getPrevProduct" v-show="pageIndex == 1 ? false : true"></button>
        <product v-if="dishesData" :product="dishesData"></product>
        <com-menu @toggle="toggleFunc" ref="menu" @load="loadFunc"></com-menu>
        <button type="button" class="next" @click="getNextProduct" v-show="isOver ? false : true"></button>
        <com-footer @submit="submitOrder" @showCart="show = true">
            <p slot="submit-order-slot">提交订单</p>
        </com-footer>
        <cart :show="show" :dataSource="dataSource" @hide="show = false"></cart>
    </div>
</template>
<script>
    import comFooter from '../components/comFooter'
    import comMenu from '../components/comMenu'
    import product from '../components/product'
    import cart from '../components/cart'
    import api from '../api/api'
    export default {
        data() {
            return {
                dishesData: {

                },
                show: false,
                pageIndex: 1,
                isOver: false,
            }
        },
        computed: {
            dataSource() {
                return this.$store.getters.getProducts
            }
        },
        methods: {
            //获取上一页商品
            getPrevProduct() {
                const menu = this.$refs.menu;
                this.toggleFunc(menu.$el.querySelector(".active").getAttribute("data-id"), --this.pageIndex);
            },
            //获取下一页商品
            getNextProduct() {
                const menu = this.$refs.menu;
                this.toggleFunc(menu.$el.querySelector(".active").getAttribute("data-id"), ++this.pageIndex);
            },
            //加载商品
            loadFunc() {
                const menu = this.$refs.menu;
                this.toggleFunc(menu.$el.querySelector(".active").getAttribute("data-id"));
            },
            submitOrder() {
                this.$router.push({
                    path: "/payOrder"
                });
            },
            toggleFunc(id, pageIndex = 1) {
                if (pageIndex == 1) {
                    this.pageIndex = 1;
                }
                console.log(pageIndex, this.pageIndex);
                api.getDishesData({ id: id, pageIndex: pageIndex }).then((res) => {
                    var data = res.data.data[0];

                    if (!data) {
                        this.isOver = true;
                        return;
                    }
                    this.dishesData = data;
                }).catch(() => {
                    alert("error")
                });
            }
        },
        components: {
            comFooter,
            comMenu,
            product,
            cart,
        }
    }

</script>
<style scoped lang="scss">
    @mixin btnStyle($url) {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        position: absolute;
        z-index: 99;
        left: 50%;
        margin-left: -1rem;
        border: none;
        animation: show 1s infinite ease-in-out;
        -webkit-animation: show 1s infinite ease-in-out;
        background: url($url);
        background-size: 100% 100%;
    }
    
    .prev {
        top: 1rem;
        @include btnStyle("../assets/prev.png");
    }
    
    .next {
        @include btnStyle("../assets/next.png");
        bottom: 4rem;
    }
    
    @mixin btnAnimate (){
        from {
            transform: scale(.8);
            -webkit-transform: scale(.8);
            opacity: 0;
        }
        to {
            transform: scale(1);
            -webkit-transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes show {
        @include btnAnimate();
    }
    
    @-webkit-keyframes show
    {
        @include btnAnimate();
    }
</style>