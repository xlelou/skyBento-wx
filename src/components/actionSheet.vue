<template>
    <div v-show="show">
        <div class="weui-mask" id="iosMask" @click="showActionSheet" style="opacity: 1;"></div>
        <div class="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet">
            <div class="weui-actionsheet__menu">
                <div class="weui-actionsheet__cell s-list-item weui-actionsheet-title">
                    购物车
                    <span id="clear-cart" style="display: flex" @click="clearCart"><i class="icon-delete"></i>清空购物车</span>
                </div>
                <div class="weui-actionsheet__cell" v-if="dataSource.length == 0">
                    您的购物车是空的...
                </div>
                <div class="weui-actionsheet__cell s-list-item" v-for="(item, index) in dataSource">
                    <span class='product-id' style="display: none">{{item.id}}</span>
                    <h5 class="product-name">{{item.name}}</h5>
                    <span class="cart-price">￥{{(item.price * item.number).toFixed(2)}}</span>
                    <div class="info">
                        <a href="javascript:;" class="minus" @click="checkOutCart(item)">-</a>
                        <span class="amount">{{item.number}}</span>
                        <a href="javascript:;" class="add"  @click="checkInCart(item)">+</a>
                    </div>
                </div>
            </div>
            <div class="weui-actionsheet__action" style="visibility: hidden">
                <div class="weui-actionsheet__cell" id="iosActionsheetCancel" @click="showActionSheet">取消</div>
            </div>
    </div>
</div>
</template>
<script>
    import weui from '../lib/weui.css'

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
            showActionSheet() {
                this.show = !this.show;
            },
            checkInCart(e){
                this.$store.dispatch('checkInCart', e);
            },
            checkOutCart({id}){
                this.$store.dispatch('checkOutCart', id);
            },
            clearCart(){
                 this.$store.dispatch('clearCart');
            }
        }
    }
</script>
<style>
        .weui-actionsheet-title {
            padding: 5px;
            color: #fff;
            font-size: 14px;
            background: rgba(0,0,0, .5) !important;
        }
    	.weui-actionsheet__cell {
			position: relative;
			text-align: left;
			padding-left: .5rem;
			background: #fff;
			justify-content: space-between;
			-webkit-box-pack:space-between;
			-webkit-justify-content: space-between;
		}
		.weui-actionsheet__cell .cart-price {
		    width: 25%;
		}
		.weui-actionsheet__menu,
		.weui-actionsheet {
			background: transparent !important;
		}
		.weui-actionsheet__cell {
			color: #fff;
			background: rgba(0,0,0, .5) !important;
		}
		.weui-actionsheet-title {
			padding: 5px;
			color: #fff;
			font-size: 14px;
			background: rgba(0,0,0, .5) !important;
		}
		.weui-actionsheet {
			bottom: 3rem;
		}
		.weui-actionsheet__cell .info {
			width: 25%;
			display: -webkit-box;
		    display: -webkit-flex;
		    display: -ms-flexbox;
		    display: flex;
		    align-items: center;
		    -webkit-box-align: center;
		    -webkit-align-items: center;
   			justify-content: space-between;
   			-webkit-box-pack:space-between;
			-webkit-justify-content: space-between;
		}
		.weui-actionsheet__cell .product-name {
			width: 50%;
            text-align: left;
		}
		.weui-actionsheet__cell .minus {
		    display: block;
		    width: 1.2rem;
		    height: 1.2rem;
		    border-radius: 50%;
		    border: 1px solid #ff8400;
		    text-align: center;
		    line-height: 1.2rem;
		    color: #ff8400;
		}
		
		 .weui-actionsheet__cell .add {
			display: block;
			width: 1.2rem;
   			height: 1.2rem;
			border-radius: 50%;
			border: 1px solid #ff8400;
			text-align: center;
			line-height: 1.2rem;
			color: #fff;
			background: #ff8400;
		}
		
		.weui-actionsheet__cell .amount {
			display: block;
			text-align: center;
		}
		 .weui-actionsheet__menu .s-list-item {
			display: -webkit-box;
		    display: -webkit-flex;
		    display: -ms-flexbox;
		    display: flex;
		}
</style>