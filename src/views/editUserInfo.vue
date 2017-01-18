<template>
    <div class="page-edit-user-info">
        <p>订餐人信息</p>
        <com-cell :border="true" title="姓名">
            <div slot="body">
                <input type="text" name="name" id="name" v-model="userInfo.username">
            </div>
        </com-cell>
         <com-cell :border="true" title="联系电话">
            <div slot="body">
                <input type="text" name="tel" id="tel" v-model="userInfo.mobile">
            </div>
        </com-cell>

        <com-cell :border="true" title="用户id" class="hidden">
            <div slot="body">
                <input type="text" name="userid" id="userid" v-model="userInfo.userid">
            </div>
        </com-cell>
        <com-cell :border="true" title="openid" class="hidden">
            <div slot="body">
                <input type="text" name="openid" id="openid" v-model="userInfo.openid">
            </div>
        </com-cell>
        <div style="display: flex; justify-content: center">
            <button type="button" @click="sumbit">保存</button>
        </div>
    </div>
</template>
<script>
    import comCell from '../components/comCell'
    export default {
        data(){
            return {
                userInfo: {
                    username: "",
                    mobile: "",
                    userid: "",
                    openid: "",
                }
            }
        },
        mounted(){
            const userInfo = JSON.parse(sessionStorage.getItem("userInfo")) || {}
            const {username, mobile, userid, openid} = userInfo;
            this.userInfo = {
                username,
                mobile,
                userid,
                openid
            }
        },
        methods: {
            sumbit(){
                const {username, mobile, userid, openid} = this.userInfo;
                this.$http({method: "POST", params: {username, mobile, userid, openid}}).then((res)=>{
                    //success
                }).catch(()=>{
                    //error
                });
            }
        },
        components: {
            comCell
        }
    }
</script>
<style scoped>
    div.page-edit-user-info {
        min-height: 100vh;
        background: #1a1b1f;
        padding: 1rem;
        box-sizing: border-box;
        color: #fff;
    }
   
    input {
        border: none;
        color: #fff;
        background: transparent;
        outline: none;
    }
    button {
        padding: .5rem 2rem;
        border: 1px solid #ff8400;
        color: #ff8400;
        background: transparent;
        margin-top: 1rem; 
    }
    .hidden {
        display: none !important;
    }
    p {
        color: #999;
        font-size: .95rem;
    }
</style>