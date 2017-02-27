<template>
    <div class="page-address">
        <h5>选择收货地址</h5>
        <div class="ship-point">
            <span class="label">苏州市</span>
            <div>
                <input type="text" placeholder="配送至">
            </div>
        </div>
        <ul>
            <li v-for="item in addressList" @click="confirmAddress(item)">
                <p class="hidden">{{item.id}}</p>
                <p>{{item.name}}</p>
                <p>{{item.detail}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import api from '../api/api'
    export default {
        data() {
            return {
                addressList: []
            }
        },
        beforeRouteEnter(to, from, next) {
            api.getAddress({ t: +new Date }).then((res) => {
                next(vm => {
                    vm.addressList = res.data.data
                });
            }).catch(() => {
                alert("error")
            });
        },
        methods: {
            confirmAddress({id, name, detail}) {
                var address = JSON.parse(sessionStorage.getItem("address")) || {};
                address = Object.assign({}, { addressId: id, addrName: name, addrDetail: detail });

                sessionStorage.setItem("address", JSON.stringify(address));
                this.$router.push({
                    path: "/payOrder"
                });
            }
        }
    }

</script>
<style scoped>
    .hidden {
        display: none;
    }
    
    .page-address {
        min-height: 100vh;
        background: #1a1b20;
        color: #fff;
        padding: .5rem;
        box-sizing: border-box
    }
    
    .ship-point {
        display: flex;
        align-items: center
    }
    
    .ship-point div {
        flex: 1;
        border-bottom: 1px solid #656565;
        margin-left: 1rem;
        position: relative
    }
    
    .ship-point div::after {
        content: "";
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        background: url(../assets/icon-arrow.png) no-repeat;
        background-size: 100%;
        position: absolute;
        right: 0
    }
    
    h5 {
        color: #999;
        font-weight: normal;
        font-size: 1rem;
        margin: .5rem 0
    }
    
    input {
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
        width: 100%;
    }
    
    ul {
        width: 80%;
        float: right;
        list-style-type: none;
    }
    
    ul li {
        border-bottom: 1px solid #656565;
        padding-bottom: .25rem;
        margin: .25rem 0
    }
    
    ul li p:last-child {
        color: #666;
    }
</style>