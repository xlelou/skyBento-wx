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
    import api from '../api/api'
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
            api.getComment({ id: this.id }).then(res => {
                this.commentList = res.data.data.list;
            }).catch((res) => {
                alert("error");
            });
            this.loadMoreData();
        },
        destroyed() {
            window.onscroll = null;
        },
        methods: {
            loadMoreData() {
                let self = this;
                window.onscroll = function () {
                    var scrollTop = document.body.scrollTop;
                    if (scrollTop + window.innerHeight >= document.body.clientHeight && !self.isOver && !self.isLoading) {
                        self.isLoading = true;
                        console.log(self.pageIndex);
                        api.getComment({ id: this.id, pageIndex: ++self.pageIndex }).then(({data}) => {
                            const result = data.data.list;
                            self.isLoading = false;
                            if (!result.length || self.pageIndex > 5) {
                                self.isOver = true;
                                window.onscroll = null;
                                return;
                            }
                            self.commentList.push(...result);
                        }).catch((res) => {
                            alert("error");
                        });
                    }
                }
            }
        },

    }

</script>
<style scoped lang="scss">
    .avatar img {
        width: 2.5rem;
        height: 2.5rem;
        display: inline-block;
        border: 1px solid #fff;
        border-radius: 50%;
    }
    
    ul {
        padding-bottom: 3rem;

        li {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            flex-wrap: wrap;
            padding: .7rem;
            background: #1b1a1f;
            color: #fff;
            
            .user-info {
                width: 80%;
                width: calc(100% - 3.5rem);
                width: -webkit-calc(100% -3rem);
                padding-left: .5rem;
            }
            .desc {
                margin: 5px
            }
            .details-img img {
                width: 30%;
                height: 5rem;
                display: block;
                border-radius: 3px;
                box-sizing: border-box;
                margin: 3px;
                float: left;
            }
        }
    }   
    
    .iconfont.icon-wuxing {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin: 0 .1rem;
        &.active {
            background: url("../assets/icon-star.png");
            background-size: 100% 100%;
        }
    }
    
    .time {
        float: right
    }
    
    .over,
    .loading {
        text-align: center;
    }
</style>