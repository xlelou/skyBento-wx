<template>
    <div>
        <span v-for="(item, index) in level" :class="{active: childStar > index ? true : false}" @click="selectStar(index)"></span>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                childStar: this.star
            }
        },
        props: {
            star: {
                type: [String, Number],
                default: 0
            },
            level: {
                type: [String, Number],
                default: 5
            },
        },
        methods: {
            selectStar(index){
                this.childStar = index + 1;
                this.$emit("confirm", this.childStar);
            }
        }
    }
</script>
<style scoped>
    div {
        display: flex;
        margin: 1rem 0;
        justify-content: center
    }
    span {
        display: inline-block;
        margin: 0 .5rem;
        height: 2rem;
        width: 2rem;
        background: url(../assets/icon-ustar.png) no-repeat center;
        background-size: 100%;
    }
     span.active {
        background: url(../assets/icon-star.png) no-repeat center;
        background-size: 100%;
    }
</style>