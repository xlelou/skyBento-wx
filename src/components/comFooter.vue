<template>
    <div>
        <div class="footer" v-if="type === 'submit-order'">
            <div id="check-in-cart" class="cart" @click="showCartFunc">
                <transition enter-active-class="animated bounceIn">
                    <span class="total" v-if="total >= 1 ? true : false">{{total}}</span>
                </transition>
            </div>

            <div class="submit" id="submit-order" @click="submitFunc">
                <slot name="submit-order-slot">
                    下单
                </slot>
            </div>
        </div>
        <div class="footer" :class="type" v-else>
            <div class="pay-money">待支付:￥{{price}}</div>
            <div class="submit" @click="submitFunc">
                <slot>下单</slot>
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
            type: {
                type: String,
                default: "submit-order", //submit-order || pay-order
            }
        },
        computed: {
            total: function () {
                return this.$store.getters.getProductTotalNumber;
            },
            price() {
                return this.$store.getters.getProductTotalPrice;
            }
        },
        methods: {
            showCartFunc() {
                this.$emit('showCart');
            },
            submitFunc() {
                this.$emit('submit');
            },
        }
    }

</script>

<style scoped lang="scss">
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        background: #272727;
        display: flex;
        width: 100%;
        padding: .5rem 1rem;
        align-items: center;

        &.pay-order {
            padding: 0;
            div {
                padding: .5rem;
                text-align: center;
                &:first-child {
                    width: 55%;
                }
                &:last-child {
                    width: 45%;
                    background: #ff8400;
                }
            }
        }
        .cart {
            width: 2rem;
            height: 2rem;
            background: url(../assets/cart.png);
            background-size: 100% 100%;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                height: 100%;
                width: 1px;
                background: #ff8400;
                right: -1rem
            }
        }

        .submit {
            width: 80%;
            width: calc(100% - 4rem);
            width: -webkit-calc(100% -4rem);
            text-align: center;
            color: #fff;
        }
        .total {
            display: inline-block;
            width: 1.25rem;
            height: 1.25rem;
            background: #8b4740;
            border-radius: 50%;
            font-size: 10px;
            text-align: center;
            line-height: 1.25rem;
            position: absolute;
            right: -.3rem;
            top: -.3rem;
            color: #fff;
        }
    }
</style>