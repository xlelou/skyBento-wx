<template>
    <div>
        <img :src="item" v-for="(item, index) in detail" alt="" width="100%">
    </div>
</template>
<script>
    import api from '../api/api'
    export default {
        data() {
            return {
                detail: null
            }
        },
        props: {
            id: {
                required: true,
                type: [Number, String]
            }
        },
        mounted() {
            api.getProductDetail({ id: this.id, }).then(res => {
                this.detail = res.data.data.goodsImg;
            }).catch(res => {
                alert("error")
            })
        },
    }

</script>
<style>

</style>