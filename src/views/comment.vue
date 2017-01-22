<template>
    <div class="page-comment">
        <h5><span class="icon icon-time"></span><span class="reserver-time">{{(new Date(order.reserverTime)).toLocaleString()}}</span><span
                style="margin-right: .5rem;">{{state}}</span>
        </h5>
        <ul>
            <li v-for="item in order.orderItems">
                <span>{{item.dishesName}}</span> <span>x{{item.number}}</span> <span>￥{{item.price}}</span><button type="button" class="btn" @click="goComment(item.id)">去评价</button>
            </li>
        </ul>
        <div class="total">
            <span>共{{order.total}}份，</span><span>总计{{order.price}}元</span>
        </div>
    </div>
</template>
<script>
    import api from '../api/api'

    export default {
        data() {
            return {
                order: {

                }
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
        beforeRouteEnter(to, from, next) {
            api.getOrder({ t: +new Date }).then(({data}) => {
                next(vm => {
                    vm.order = data.data[0]
                })
            }).catch(() => {
                alert("error")
            });
        },
        methods: {
            goComment(id) {
                this.$router.push({
                    path: `/commentDishes/${this.order.orderNo}/${id}`
                })
            }
        }
    }
</script>
<style scoped>
     .page-comment {
         background: #1a1b1f;
         color: #fff;
         min-height: 100vh;
         box-sizing: border-box;
         padding-top: .6rem;
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
    .btn {
        background: transparent;
        border: 1px solid #ff8400;
        color: #ff8400;
        border-radius: 3px;
        padding: .25rem .5rem;
    }
</style>