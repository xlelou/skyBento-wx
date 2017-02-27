<template>
    <div class="page msg_success js_show">
        <div class="icon-box">
            <i class="weui-icon-success weui-icon_msg"></i>
            <div class="icon-box__ctn">
                <h3 class="icon-box__title">预订成功</h3>
                <p class="icon-box__desc">已支付</p>
            </div>
        </div>
        <p class="tip">我们会尽力保证便当的送达时间</p>
        <div class="footer">
            <router-link to="/myOrder" class="btn">查看订单</router-link>
            <router-link to="/list" class="btn">继续预订</router-link>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }

</script>
<style scoped>
    .page {
        background: #1a1b1f;
        color: #fff;
        min-height: 100vh;
        box-sizing: border-box;
        padding: 2rem;
    }
    
    .icon-box {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5rem;
    }
    
    h3 {
        font-weight: normal;
        color: #ff8400
    }
    
    .weui-icon_msg {
        font-size: 50px;
        color: #ff8400;
        margin-right: 1rem;
    }
    
    .tip {
        margin: 1rem;
        text-align: center;
        color: #999
    }
    
    .footer {
        display: flex;
        justify-content: space-between
    }
    
    .btn {
        background: transparent;
        border: 1px solid #ff8400;
        color: #ff8400;
        flex: 1;
        margin: 1rem;
        padding: .3rem 0;
        border-radius: 4px;
        text-align: center
    }
    
    .btn:last-child {
        background: #ff8400;
        color: #fff
    }
</style>