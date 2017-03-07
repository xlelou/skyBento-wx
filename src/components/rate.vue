<template>
    <div>
        <span v-for="(item, index) in level" :class="{active: childStar > index ? true : false}" @click="selectStar(index)"></span>
    </div>
</template>
<script>
    export default {
        data() {
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
            selectStar(index) {
                this.childStar = index + 1;
                this.$emit("confirm", this.childStar);
            }
        }
    }

</script>
<style scoped lang="scss">
    @mixin bgImage($url) {
        background: url($url) no-repeat center;
        background-size: 100%;
    }
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
        @include bgImage("../assets/icon-ustar.png");

        &.active {
            @include bgImage("../assets/icon-star.png");
        }
    }
</style>