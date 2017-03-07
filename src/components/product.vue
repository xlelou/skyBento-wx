<template>
    <div class="product-container" @click="gotoDetail" :style="{backgroundImage: 'url('+ product.img +')', backgroundRepeat: 'no-repeat', backgroundPosition: 'fixed top',  backgroundSize: '100% 100%'}">
        <div class="product-item">
            <p class="product-id hidden">{{product.id}}</p>
            <div class="product-name">
                <h5>{{product.name}}</h5>
                <span class="add-to-cart" @click.stop="checkInCart" :class="{active: active}"></span>
            </div>
            <p class="product-price"><span>{{product.price}}</span>元/份</p>
            <ul class="product-desc">
                <li>
                    {{product.desc}}
                </li>
            </ul>
            <img class="new-type" v-if="product.isNew" src="../assets/new-type.png">
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                active: false,
            }
        },
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        methods: {
            checkInCart() {
                this.active = true;

                setTimeout(() => {
                    this.active = false;
                }, 400);

                this.$store.dispatch('checkInCart', this.product);
            },
            gotoDetail() {
                this.$router.push({
                    path: `/detail/${this.product.id}`
                });
            }
        }
    }

</script>
<style scoped lang="scss">
    @mixin bgImage($url) {
        background: url($url) no-repeat;
        background-size: 100%;
    }
    .product-container {
        width: 100%;
        height: 100%;
        position: absolute;
    }
    
    .product-item {
        position: absolute;
        top: 30%;
        width: 60%;
        margin-left: 1rem;

        .product-desc {
            font-size: .9rem;
            list-style-type: square;
            margin-left: 1rem;
        }
        p {
            margin: .25rem 0
        }
        .product-name {
            font-size: 1.7rem;
            color: #6a1109;
            display: flex;
            display: -webkit-box;
            display: -webkit-flex;
            align-items: flex-end;
            -webkit-box-align: flex-end;
            /*提供继承*/
            .public {
                border-bottom: 2px solid #6a1109;
                padding-bottom: .25rem;
            }
            span {
                @extend .public;
            }
             h5 {
                padding-right: .2rem;
                @extend .public;
            }
        }
    }
    
    .hidden {
        display: none;
    }
    
    .add-to-cart {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        
        @include bgImage("../assets/icon-cart.png");
        &.active {
            @include bgImage("../assets/icon-cart-active.png");
        }
    }
    
    img.new-type {
        width: 9rem;
        height: 9rem;
        margin-top: .5rem;
    }
    
    .product-price span {
        font-size: 1.2rem;
        color: #6a1109;
    }
</style>