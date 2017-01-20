<template>
    <div v-if="orderDetail" class="page-order-detail">
        <div class="header">   
            <span class="icon icon-order"></span>
            <div>
                <h5>此订单{{state}}</h5>
                <p>预订时间<span class="reserveTime">{{(new Date(orderDetail.reserveTime)).toLocaleString()}}</span></p>
            </div>
        </div>
         <div class="product-list">
            <com-cell v-for="(item, index) in orderDetail.orderItems" :border="index === orderDetail.orderItems.length - 1 ? true : false">
                <div slot="body" class="product-item">
                    <span>{{item.dishes.name}}</span>
                    <span>x{{item.number}}</span>
                    <span>￥{{item.dishes.price}}</span>
                </div>
            </com-cell>
            <div class="total">
                <span>共{{orderDetail.total}}份, </span>
                <span>总计：<b>{{orderDetail.price}}</b>元</span>
            </div>
        </div>
        <div class="qr-code-wrapper">
            <p>配送员扫一扫，完成订单确认</p>
            <div id="qr-code">
                <qrcode :value="orderDetail.orderNo" :size="128"></qrcode>
            </div>
            <p>{{orderDetail.orderNo}}</p>
        </div>
        <div class="order-info">
            <p>订单信息</p>
            <div>
                <span>收货人:</span>
                <p>{{orderDetail.receiverName}}</p>
            </div>
           <div>
                <span>手机号码:</span>
                <p>{{orderDetail.receiverTelephone}}</p>
           </div>
           <div>
                <span>下单时间:</span>
                <p>{{orderDetail.createtime}}</p>
            </div>
            <div>
                <span>订单号:</span>
                <p>{{orderDetail.orderNo}}</p>
           </div>
            <div>
                <span>收货地址:</span>
                <p>{{orderDetail.address}}</p>
           </div>
        </div>
    </div>
</template>
<script>
    import Qrcode from 'v-qrcode/src/index'
    import comCell from '../components/comCell'
    import api from '../api/api'
    export default {
        data(){
            return {
               orderDetail: null,
               qrcode: null
            }
        },
        computed: {
            state(){
                switch(this.orderDetail.status) {
                    case 1:
                        return "已支付";
                    case 0: 
                        return "未支付";
                    case -1:
                        return "已取消";
                    case 2:
                        return "已完成"
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            api.getOrderDetail({orderId: to.params.orderId}).then(res=>{
                next(vm=>{
                    vm.orderDetail = res.data.data;
                })
            }).catch(()=>{
                alert("error");
            })
        },
        components: {
            comCell,
            Qrcode
        }
    }
</script>
<style>
    h5 {
        font-weight: normal;
        font-size: 1rem;
    }
    .total,
    h5 + p {
        color: #a7a7a8;
        font-size: .9rem;
    }
    .page-order-detail {
        min-height: 100vh;
        background: #1a1b1f;
        color: #fff;
        box-sizing: border-box;
        padding: .5rem;
    }
    .product-list {
        overflow: hidden
    }
    .product-list .product-item{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .product-list .product-item :first-child{
        width: 50%;
    }
    .total {
        float: right;
    }
    .reserveTime {
        margin-left: .5rem;
    }
    .header {
        display: flex;
        padding-bottom: .5rem;
        border-bottom: 1px solid #656565
    }
    .total,
    .qr-code-wrapper p,
    .qr-code-wrapper {
        margin: .5rem 0
    }
    .qr-code-wrapper p{
        text-align: center
    }
    .icon.icon-order {
        width: 1.5rem;
        height: 1.5rem;
        display: inline-block;
        background: url(../assets/icon-order.png) no-repeat;
        background-size: 100%;
        margin-right: .5rem;
    }
    .order-info {
        border-top: 1px solid #656565
    }
     .order-info > p {
         padding: .5rem;
     }
    .order-info > div {
        display: flex;
        padding: .5rem;
    }
    .order-info > div p {
        flex: 1;
    }
    .order-info > div p,
    .order-info > div span {
        text-align: left
    }
    .order-info > div span {
        width: 30%;
    }
    canvas {
        display: block;
        border-bottom: 1px solid #fff;
        margin: 0 auto
    }
</style>