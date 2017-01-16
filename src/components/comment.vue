<template>
    <div>
        <ul>
            <li v-for="comment in commentList">
                <div class="avatar">
                    <img :src="comment.avatar" width="100%" height="100%" alt="">
                </div>
                <div class="user-info">
                    <h5>{{comment.userName}}</h5>
                    <div class="star">
                        <span class="iconfont icon-wuxing active"></span>
                        <span class="iconfont icon-wuxing active"></span>
                        <span class="iconfont icon-wuxing "></span>
                        <span class="iconfont icon-wuxing "></span>
                        <span class="iconfont icon-wuxing "></span>
                        <span class="time">{{(new Date(comment.createTime)).toLocaleDateString()}}</span>
                    </div>
                </div>
                <div>
                    <div class="desc">{{comment.comment}}</div>
                    <div class="details-img">
                        <img :src="item" alt="" v-for="item in comment.commentImg">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                commentList: [],
            }
        },
        props: {
            id: {
                required: true,
                type: [Number, String]
            }
        },
        mounted() {
            this.$http({ method: "GET", params: { id: this.id, }, url: "/comment" }).then(res => {
                this.commentList = (JSON.parse(res.data)).data.list;
            }).catch(function () {
                alert("请求出错，请联系管理员")
            })
        },
    }
</script>
<style scoped>
    .avatar img{
	width: 2.5rem;
	height: 2.5rem;
	display: inline-block;
	border: 1px solid #fff;
	border-radius: 50%;
}
ul {
    padding-bottom: 3rem;
}
 ul li {
	display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
	flex-wrap: wrap;
	padding: .7rem;
	background: #1b1a1f;
	color: #fff;
}

ul li .user-info {
	width: 80%;
	width: calc(100% - 3.5rem);
	width: -webkit-calc(100% -3rem);
	padding-left: .5rem;
}
ul li .desc {
	margin: 5px
}
ul li .details-img img{
	width: 30%;
    height: 5rem;
    display: block;
    border-radius: 3px;
    box-sizing: border-box;
    margin: 3px;
    float: left;
}
.iconfont.icon-wuxing.active  {
	background: url("../assets/icon-star.png");
	background-size: 100% 100%;
}
.iconfont.icon-wuxing {
	background: url("../assets/icon-star(2).png");
	background-size: 100% 100%;
	display: inline-block;
    width: 1rem;
    height: 1rem;
}

</style>