<template>
    <div v-show="show">
        <div class="weui-mask" id="iosMask" @click="hide" style="opacity: 1;"></div>
        <div class="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet">
            <div class="weui-actionsheet__menu">
                <div class="weui-actionsheet__cell s-list-item weui-actionsheet-title">
                    <h5>购物车</h5>
                    <span id="clear-cart" style="display: flex" @click="clearCart"><i class="icon-delete"></i>清空购物车</span>
                </div>
                <div class="weui-actionsheet__cell empty" v-if="dataSource.length == 0">
                    您的购物车是空的...
                </div>
                <div class="weui-actionsheet__cell" v-for="(item, index) in dataSource">
                    <span class='product-id' style="display: none">{{item.id}}</span>
                    <h5 class="product-name">{{item.name}}</h5>
                    <span class="cart-price">￥{{(item.price * item.number).toFixed(2)}}</span>
                    <div class="info">
                        <a href="javascript:;" class="minus" @click="checkOutCart(item)">-</a>
                        <span class="amount">{{item.number}}</span>
                        <a href="javascript:;" class="add" @click="checkInCart(item)">+</a>
                    </div>
                </div>
            </div>
            <div class="weui-actionsheet__action" style="visibility: hidden">
                <div class="weui-actionsheet__cell" id="iosActionsheetCancel" @click="hide">取消</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        props: {
            dataSource: {
                type: Array,
                required: true
            },
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hide() {
                this.$emit("hide");
            },
            checkInCart(e) {
                this.$store.dispatch('checkInCart', e);
            },
            checkOutCart({id}) {
                this.$store.dispatch('checkOutCart', id);
            },
            clearCart() {
                this.$store.dispatch('clearCart');
            }
        }
    }

</script>
<style scoped lang="scss">
    #clear-cart {
        font-size: .95rem;
    }
    .weui-actionsheet__action {
        margin-top: 0
    }
    
    .weui-actionsheet,
    .weui-actionsheet__menu {
        background: rgba(0, 0, 0, .4);
    }
    
    .weui-actionsheet-title h5
    .weui-actionsheet-title {
        font-size: .95rem;
        background: transparent;
        font-weight: normal;
        text-indent: .3rem;
    }
    
    .weui-actionsheet {
        color: #fff;
    }
    
    .icon-delete {
        display: inline-block;
        width: 1.25rem;
        height: 1.4rem;
        background: url(../assets/icon-delete.png);
        background-size: 100% 100%;
    }
    
    .weui-actionsheet-title {
        display: flex;
        padding: .25rem;
        justify-content: space-between
    }

    .weui-actionsheet__cell {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:hover,
        &:visited,
        &:link,
        &:active {
            background: rgba(0, 0, 0, .4);
        }
        &.empty {
            text-indent: 1rem;
        }
        .product-name {
            width: 45%;
            text-align: left;
            text-indent: .5rem;
            font-weight: normal
        }
        .cart-price {
            width: 30%;
        }
        .info  {
            width: 25%;
            .public {
                display: inline-block;
                width: 1.25rem;
                height: 1.25rem;
                border-radius: 50%;
                line-height: 1rem;
                box-sizing: border-box;
            }
            .minus {
                @extend .public;
                border: 1px solid #ff8400;
                color: #ff8400;
            }
            .add {
                @extend .public;
                background: #ff8400;
                color: #fff
            }
        }
    } 
</style>