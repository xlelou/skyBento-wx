<template>
    <div class="page-my-order">
        <div class="header" v-if="order.length"><span class="icon icon-info"></span>
            <h5>9点之前可申请退款</h5>
        </div>
        <div v-if="order.length == 0" class="order-empty">
            <div>
                <i class="weui-icon-info weui-icon_msg"></i>
                <p>亲，您暂时还没有订单哦...</p>
                <router-link to="list" class="btn">去逛逛</router-link>
            </div>
        </div>
        <order v-for="item in order" :order="item" @clickHandle="toOrderDetail"></order>
        <div v-show="isOver" class="over">
            暂无更多数据...
        </div>
        <div v-show="isLoading" class="loading">
            加载中...
        </div>
    </div>
</template>
<script>
    import api from '../api/api'
    import order from '../components/order'
    export default {
        data() {
            return {
                order: [],
                pageIndex: 1,
                isOver: false,
                isLoading: false
            }
        },
        beforeRouteEnter: (to, from, next) => {
            api.getOrder({ t: +new Date }).then(({data}) => {
                next(vm => {
                    vm.order = data.data;
                })
            }).catch(() => {
                alert("error")
            });
        },
        mounted() {
            this.loadMoreData();
        },
        destroyed() {
            window.onscroll = null;
        },
        methods: {
            toOrderDetail(e) {
                this.$router.push({
                    path: `/orderDetail/${e}`
                })
            },
            loadMoreData() {
                let self = this;
                window.onscroll = function () {
                    var scrollTop = document.body.scrollTop;
                    if (scrollTop + window.innerHeight >= document.body.clientHeight && !self.isOver && !self.isLoading) {
                        self.isLoading = true;
                        console.log(self.pageIndex);
                        api.getOrder({ pageIndex: ++self.pageIndex }).then(({data}) => {
                            const result = data.data;
                            self.isLoading = false;
                            if (!result.length || self.pageIndex > 5) {
                                self.isOver = true;
                                window.onscroll = null;
                                return;
                            }
                            self.order.push(...result);
                        }).catch((res) => {
                            alert("error");
                        });
                    }
                }
            }
        },
        components: {
            order
        }
    }

</script>
<style scoped>
    .page-my-order {
        min-height: 100vh;
        background: #1a1b1f;
        color: #fff;
    }
    
    .header {
        display: flex;
        align-items: center;
        padding-top: .5rem;
        padding-left: .5rem;
    }
    
    h5 {
        font-weight: normal;
    }
    
    .icon.icon-info {
        display: inline-block;
        width: 1.25rem;
        height: 1.25rem;
        background: url(../assets/icon-info.png) no-repeat;
        background-size: 100% 100%;
        margin-right: .5rem;
    }
    
    .over,
    .loading {
        text-align: center
    }
    
    .order-empty {
        display: flex;
        justify-content: center
    }
    
    .order-empty > div {
        text-align: center;
        margin-top: 15%;
    }
    
    .order-empty p {
        margin: 1rem;
    }
    .order-empty i,
    .order-empty .btn {
        color: #ff8400
    }
</style>