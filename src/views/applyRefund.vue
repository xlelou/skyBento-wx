<template>
    <div class="page-apply-refund">
        <com-cell>
            <div slot="body">下单时间</div>
            <div slot="footer" class="active">{{(new Date(order.reserverTime)).toLocaleString()}}</div>
        </com-cell>
        <com-cell :border="true">
            <div slot="body">订单号</div>
            <div slot="footer">{{order.orderNo}}</div>
        </com-cell>
        <div class="product-list">
            <com-cell :border="index === order.orderItems.length - 1 ? true : false" v-for="(item, index) in order.orderItems">
                <div slot="body" class="product-item">
                    <span>{{item.dishesName}}</span>
                    <span>x{{item.price}}</span>
                    <span>￥{{item.number}}</span>
                </div>
            </com-cell>
            <com-cell>
                <div slot="body"></div>
                <div slot="footer">
                    <span>共{{order.total}}份，</span>
                    <span>总计{{order.price}}元</span>
                </div>
            </com-cell>
        </div>
        <com-cell title="请输入退款原因">
            <div slot="body" class="textarea-wrapper">
                <textarea id="" v-model="comment"></textarea>
            </div>
        </com-cell>
        <div class="submit-wrapper">
            <button type="button" @click="applyRefundFunc">提交</button>
        </div>
    </div>
</template>
<script>
    import comCell from '../components/comCell'
    import api from '../api/api'

    export default {
        data() {
            return {
                order: {

                },
                comment: ""
            }
        },
        beforeRouteEnter: (to, from, next) => {
            api.getOrder({ orderNo: to.params.orderNo }).then(({data}) => {
                console.log(data);
                next(vm => {
                    vm.order = data.data[0];
                });
            }).catch(() => {
                alert("error");
            })
        },
        methods: {
            applyRefundFunc() {
                const orderNo = this.order.orderNo;
                const comment = this.comment;

                const data = {
                    orderNo,
                    comment
                }
                alert("退款")
                //post apply refund;
            }
        },
        components: {
            comCell
        }
    }

</script>
<style scoped>
    .page-apply-refund {
        min-height: 100vh;
        color: #fff;
        background: #1a1b1f;
        padding-left: .5rem;
    }
    
    .textarea-wrapper {
        width: 100%;
    }
    
    textarea {
        width: 100%;
        height: 5rem;
        color: #fff;
        outline: none;
        font-size: .9rem;
        background: transparent
    }
    
    button {
        padding: .5rem 2rem;
        background: transparent;
        border: 1px solid #ff8400;
        color: #ff8400;
        border-radius: 4px;
    }
    
    .submit-wrapper {
        text-align: center
    }
    
    .active {
        color: #ff8400;
    }
    
    .product-item {
        width: 100%;
        display: flex;
        justify-content: space-between
    }
    
    .product-item span:first-child {
        flex: 2;
    }
    
    .product-item span {
        flex: 1;
    }
</style>