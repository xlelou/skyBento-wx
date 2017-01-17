<template>
    <div class="page-edit-user-info">
        <p></p>
        <div>
            <label for="name">取餐人</label>
            <input type="text" v-model="userInfo.username" id="name" placeholder="请输入取餐人">
        </div>
        <div>
            <label for="">联系电话</label>
            <input type="text" v-model="userInfo.mobile" placeholder="请输入联系电话">
        </div>
        <div class="hidden">
            <label for="">用户id</label>
            <input type="text" v-model="userInfo.userid">
        </div>
        <div class="hidden">
            <label for="">open id</label>
            <input type="text" v-model="userInfo.openid">
        </div>
        <div>
            <button type="button" @click="sumbit">保存</button>
        </div>
    </div>
</template>
<script>
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
        }
    }
</script>
<style scoped>
    div.page-edit-user-info {
        min-height: 100vh;
        background: #1a1b1f;
        padding: 1rem;
        box-sizing: border-box
    }
    div.page-edit-user-info div {
        padding: .5rem 0;
        display: flex;
        justify-content: center
    }
    label {
        color: #fff;
        width: 100px;
        display: flex;
        align-items: flex-end
    }
    input {
        width: calc(100% - 100px);
        border: none;
        color: #fff;
        background: transparent;
        outline: none;
        border-bottom: 1px solid #656565
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
</style>