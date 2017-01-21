<template>
    <div class="com-order" @click.stop.prevent="clickFunc">
        <h5><span class="icon icon-time"></span><span class="reserver-time">{{(new Date(order.reserverTime)).toLocaleString()}}</span><span
                style="margin-right: .5rem;">{{state}}</span>
        </h5>
        <ul>
            <li v-for="item in order.orderItems">
                <span>{{item.dishesName}}</span> <span>x{{item.number}}</span> <span>￥{{item.price}}</span>
            </li>
        </ul>
        <div class="total">
            <span>共{{order.total}}份，</span><span>总计{{order.price}}元</span>
        </div>
        <div class="footer">
            <button type="button" v-if="order.status == 0" @click.stop="cancelOrder">取消订单</button>
            <button type="button" v-if="order.status == 0" @click.stop="payOrder">去付款</button>
            <button type="button" v-if="order.status == 1" @click.stop="applyRefund">申请退款</button>
            <button type="button" v-if="order.status == 2" @click.stop="comment">去评价</button>
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
            order: {
                type: Object,
                required: true
            }
        },
        computed: {
            state() {
                var state = "";
                switch (this.order.status) {
                    case -1:
                        state = "已取消";
                        break;
                    case 0:
                        state = "未支付";
                        break;
                    case 1:
                        state = '已支付';
                        break;
                    case 2:
                        state = "已完成";
                        break;
                    case 3:
                        state = "申请退款中";
                        break;
                    case 4:
                        state = "已退款";
                        break;
                    case 5:
                        state = "取消退款";
                        break;
                }
                return state;
            }
        },
        methods: {
            clickFunc(){
                this.$emit("clickHandle", this.order.orderNo);
            },
            cancelOrder(){
                alert(this.order.orderNo + "取消订单");
                //post request
            },
            payOrder(){
                alert(this.order.orderNo + "支付");
                //post request;
            },
            applyRefund(){
                this.$router.push({
                    path: `/applyRefund/${this.order.orderNo}`
                })
            },
            comment(){
                this.$router.push({
                    path: `/comment/${this.order.orderNo}`
                })
            }
        }
    }
</script>
<style scoped>
    .com-order {
        margin: .5rem 0 1rem 0;
    }
    h5 {
        font-weight: normal;
        font-size: .9rem;
        background: #26262d;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .icon.icon-time {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        background: url(../assets/icon-wait.png) no-repeat;
        background-size: 100%;
        margin: 0 .5rem;
    }
    .reserver-time {
        flex: 1;
    }
    ul {
        padding: 0 .5rem;
        border-bottom: 1px solid #656565
    }
    ul li {
        margin: .5rem;
        display: flex;
        justify-content: space-between
    }
    ul li span:first-child {
         flex: 2;
     }
    ul li span {
        flex: 1;
    }
    .total {
        display: flex;
        justify-content: flex-end;
        margin: .5rem;
        font-size: .9rem;
    }
    .footer {
        display: flex;
        justify-content: flex-end;
    }
    button {
        padding: .25rem .5rem;
        background: transparent;
        border: 1px solid #ff8400;
        color: #ff8400;
        border-radius: 3px;
        margin-right: .5rem;
    }
</style>