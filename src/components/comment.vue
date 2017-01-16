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
                        <span class="iconfont icon-wuxing active" v-for="i in comment.star"></span>
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
            <li v-show="isOver" class="over">
                暂无更多数据...
            </li>
            <li v-show="isLoading" class="loading">
                加载中...
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                commentList: [],
                isOver: false,
                isLoading: false,
                pageIndex: 1
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
            });
            this.loadMoreData();
        },
        methods: {
            getScrollTop(){
            　　let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            　　if(document.body){
            　　　　bodyScrollTop = document.body.scrollTop;
            　　}
            　　if(document.documentElement){
            　　　　documentScrollTop = document.documentElement.scrollTop;
            　　}
            　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
            　　return scrollTop;
            },
            //文档的总高度
            getScrollHeight(){
            　　let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
            　　if(document.body){
            　　　　bodyScrollHeight = document.body.scrollHeight;
            　　}
            　　if(document.documentElement){
            　　　　documentScrollHeight = document.documentElement.scrollHeight;
            　　}
            　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
            　　return scrollHeight;
            },
            //浏览器视口的高度
            getWindowHeight(){
                let windowHeight = 0;
            　　if(document.compatMode == "CSS1Compat"){
            　　　　windowHeight = document.documentElement.clientHeight;
            　　}else{
            　　　　windowHeight = document.body.clientHeight;
            　　}
            　　return windowHeight;
            },
            loadMoreData(){
                let self = this;
                window.onscroll = function(){
                    if(self.getScrollTop() + self.getWindowHeight() == self.getScrollHeight() && !self.isOver && !self.isLoading){
                        self.isLoading = true;
                        console.log(self.pageIndex);
                　　　　 self.$http({ method: "GET", params: { id: self.id, pageIndex: ++self.pageIndex}, url: "/comment" }).then(res => {
                            const data = (JSON.parse(res.data)).data.list;
                            if (!data.length || self.pageIndex > 5) {
                                self.isOver = true;
                            }
                            
                            self.commentList.push(...data);
                            self.isLoading = false;
                        }).catch(function () {
                            alert("请求出错，请联系管理员")
                        });
                　　}
                }
            }
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
	display: inline-block;
    width: 1rem;
    height: 1rem;
    margin: 0 .1rem;
}
.time {
    float: right
}
.over,
.loading {
    text-align: center;
}
</style>