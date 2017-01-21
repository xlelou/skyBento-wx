<template>
    <div class="page-my-order">
        <div class="header"><span class="icon icon-info"></span>
            <h5>9点之前可申请退款</h5>
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
                    vm.order = data.data
                })
            }).catch(() => {
                alert("error")
            });
        },
        mounted() {
            this.loadMoreData();
        },
        methods: {
            toOrderDetail(e) {
                this.$router.push({
                    path: `/orderDetail/${e}`
                })
            },
            getScrollTop() {
                let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
                if (document.body) {
                    bodyScrollTop = document.body.scrollTop;
                }
                if (document.documentElement) {
                    documentScrollTop = document.documentElement.scrollTop;
                }
                scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
                return scrollTop;
            },
            //文档的总高度
            getScrollHeight() {
                let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
                if (document.body) {
                    bodyScrollHeight = document.body.scrollHeight;
                }
                if (document.documentElement) {
                    documentScrollHeight = document.documentElement.scrollHeight;
                }
                scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
                return scrollHeight;
            },
            //浏览器视口的高度
            getWindowHeight() {
                let windowHeight = 0;
                if (document.compatMode == "CSS1Compat") {
                    windowHeight = document.documentElement.clientHeight;
                } else {
                    windowHeight = document.body.clientHeight;
                }
                return windowHeight;
            },
            loadMoreData() {
                let self = this;
                window.onscroll = function () {
                    if (self.getScrollTop() + self.getWindowHeight() == self.getScrollHeight() && !self.isOver && !self.isLoading) {
                        self.isLoading = true;
                        console.log(self.pageIndex);
                        api.getOrder({ pageIndex: ++self.pageIndex }).then(({data}) => {
                            const result = data.data;
                            if (!result.length || self.pageIndex > 5) {
                                self.isOver = true;
                            }
                            self.order.push(...result);
                            self.isLoading = false;
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
    .over, .loading {
        text-align: center    
    }
</style>