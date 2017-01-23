<template>
    <div class="page msg_success js_show">
    <div class="weui-msg">
        <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
        <div class="weui-msg__text-area">
            <h2 class="weui-msg__title">支付成功</h2>
            <p class="weui-msg__desc">我们会尽力保证便当的送达时间</a></p>
        </div>
        <div class="weui-msg__opr-area">
            <p class="weui-btn-area">
                <router-link to="/myOrder" class="weui-btn">查看我的订单</router-link>
                <router-link to="/list" class="weui-btn weui-btn_default">继续预订</router-link>
            </p>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        data(){
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
    }
    .weui-icon-success {
        color: #ff8400
    }
    .weui-btn_primary:not(.weui-btn_disabled):visited {
        color: #ff8400;
    }
    .weui-btn_primary:hover,
    .weui-btn_primary:link,
    .weui-btn_primary:visited,
    .weui-btn_primary:active,
    .weui-btn{
        background: transparent;
        border: 1px solid #ff8400;
        color: #ff8400;
    }
    .weui-btn_default:not(.weui-btn_disabled):visited {
        color: #fff
    }
    .weui-btn_default {
        background: #ff8400;
        color: #fff;
    }
</style>