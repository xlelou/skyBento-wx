<template>
    <div class="menu-wrapper">
        <ul class="menu">
            <li v-for="(item, index) in getDishesTypeData.list" :data-id="item.id" @click="toggle(item.id, index)" :class="{active: active === index}">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                getDishesTypeData: {

                },
                active: 0
            }
        },
        mounted() {
            this.$http({ method: "GET", url: "/index/getDishesTypeData" }).then(res => {
                this.getDishesTypeData = (JSON.parse(res.data)).data;
               
                this.$nextTick(()=>{
                    this.$emit("load");
                });
            }).catch(() => alert("请求出错"));

        },
        methods: {
            toggle(id, index) {
                this.active = index;
                this.$emit("toggle", id);
            }
        }
    }
</script>
<style>
 .menu-wrapper {
    position: absolute;
    right: 0;
    width: 45%;
    top: 1rem;
    background: url(../assets/bg-menu.png);
    padding: 3rem 0rem;
    background-size: 100% 100%;
    color: #fff;
}
.menu-wrapper ul {
    list-style-type: none;
    width: 60%;
    float: right;
    text-align: left;
}
.menu-wrapper ul li {
	padding: .2rem
}
 .menu-wrapper ul li.active {
	border-bottom: 1px solid #fff;
	display: inline-block;
	position: relative;
}
 .menu-wrapper ul li.active::before {
	content: "";
    display: inline-block;
    background: url(../assets/icon-meal.png);
    background-size: 100% 100%;
    width: 2rem;
    position: absolute;
    height: 2rem;
    left: -2rem;
    bottom: -.5rem;
}
</style>