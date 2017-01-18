<template>          
    <div class="com-cell" :class="{link: type=='link' ? true : false, border: border }">
        <h5>{{title}}</h5>
        <a href="javascript:;" @click="clickFunc">
            <slot name="body">
                默认内容
            </slot>
            <slot name="footer">
            </slot>
        </a>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        props: {
            type: {
                type: String,
                default: "cell"
            },
            title: {
                type: String,
            },
            border: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            clickFunc(){
                this.$emit("clickHandle")
            }
        }
    }
</script>
<style scoped>
    .com-cell {
        padding: .5rem 1rem .5rem 0;
    }
    .com-cell.border {
        border-bottom: 1px solid #656565;
    }
    .com-cell a{
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative
    }
    .com-cell.link a::after {
        content: "";
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        background: url(../assets/icon-left-arrow.png) no-repeat;
        background-size: 100%;
        position: absolute;
        right: -1.2rem;
        margin-top: -.75rem;
        top: 50%;
    }
    h5 {
        font-size: 1rem;
        font-weight: normal;
        margin-bottom: .25rem;
    }
</style>