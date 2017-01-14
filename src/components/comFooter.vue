<template>
    <div>
        <div class="footer">
            <div id="check-in-cart" class="cart" @click="showCartFunc"><span class="total" :class="{hidden: total}">{{total}}</span></div>
            <div class="submit" id="submit-order" @click="submitFunc">
                <slot name="submit-order-slot">
                    下单
                </slot>
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
        computed:{
            total: function () {
                return this.$store.getters.getProductTotalNumber;
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

<style>
.footer {
	position: fixed;
	left: 0;
	bottom: 0;
	background: #272727;
	display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding: .5rem 1rem;
    align-items: center;
}

.footer .cart {
	width: 2rem;
	height: 2rem;
	background: url(../assets/cart.png);
	background-size: 100% 100%;
    position: relative
}
.footer .submit {
	width: 80%;
	width: calc(100% - 4rem);
	width: -webkit-calc(100% -4rem);
    text-align: center;
    color: #fff;
}
.footer .total {
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
</style>