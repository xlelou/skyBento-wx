<template>
    <div class="page-comment-dishes">
        <h5>{{dishes.name}}</h5>
        <p class="title">
            <span class="line"></span>
            <span>为菜品打分</span>
            <span class="line"></span>
        </p>
        <div>
            <rate @confirm="getStar"></rate>
        </div>
        <com-cell title="说说哪里不满意，帮助商家改进">
            <div slot="body" class="textarea-wrapper">
                <textarea id="" v-model="remake"></textarea>
            </div>
        </com-cell>
        <uploader @upload="uploadFunc"></uploader>
        <div class="footer">
            <button type="button" class="btn" @click="submitComment">提交</button>
        </div>
    </div>
</template>
<script>
    import api from '../api/api'
    import comCell from '../components/comCell'
    import rate from '../components/rate'
    import uploader from '../components/uploader'

    export default {
        data() {
            return {
                dishes: {

                },
                level: 0,
                remake: "",
                imgs: null
            }
        },
        methods: {
            uploadFunc(list) {
                this.imgs = list;
            },
            getStar(index) {
                this.level = index;
            },
            submitComment() {
                if (!this.remake) {
                    alert("请填写评论");
                    return;
                }
                if (!this.level) {
                    alert("请选择星级");
                    return;
                }
                const data = {
                    dishes: this.dishes.id,
                    remake: this.remake,
                    level: this.level,
                    imgs: this.imgs
                };
                //post
            }
        },
        beforeRouteEnter: (to, from, next) => {
            api.getDishesDetail({ orderNo: to.params.orderNo, dishesId: to.params.dishesId }).then(({data}) => {
                next((vm) => {
                    vm.dishes = data.data
                })
            });
        },
        components: {
            comCell,
            rate,
            uploader
        }
    }

</script>
<style scoped>
    .page-comment-dishes {
        min-height: 100vh;
        background: #1a1b1f;
        color: #fff;
        box-sizing: border-box;
        padding: 1rem;
    }
    
    h5 {
        text-align: center;
        font-weight: normal;
        font-size: 1rem;
    }
    
    p.title {
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    
    p span {
        flex: 1;
        text-align: center;
        color: #999;
        font-size: .9rem;
    }
    
    .line {
        height: 1px;
        border-top: 1px solid #656565;
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
    
    .footer {
        position: fixed;
        bottom: 2rem;
        text-align: center;
        width: 100%;
        left: 0
    }
    
    .btn {
        padding: .5rem 2rem;
        border: 1px solid #ff8400;
        color: #ff8400;
        background: transparent;
        border-radius: 4px;
    }
</style>