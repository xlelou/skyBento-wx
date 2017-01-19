<template>
    <div class="pay-order">
        <com-cell type="link" @clickHandle="editUserInfo">
            <div slot="body">
                订餐人信息
            </div>
            <div slot="footer">
                <div v-show="userInfo == null" class="active">
                    +添加
                </div>
                <div v-if="userInfo">
                  <span>{{userInfo.name}}</span>
                  <span>{{userInfo.tel}}</span>
                </div>
            </div>
        </com-cell>
        <com-cell type="link" title="取餐地址" :border="true" @clickHandle="addAddress">
            <div slot="body">
                <div v-show="!address || !address.addrName">
                    选择取餐地址
                </div>
                <div v-if="address">
                    {{address.addrName}}
                </div>
            </div>
        </com-cell>
        <com-cell type="link" :border="true" @clickHandle="showTimePicker">
            <div slot="body">
                取餐时间
            </div>
            <div slot="footer">
                <div v-show="!talkTime" class="active">
                    选择取餐时间
                </div>
                <div v-if="talkTime">
                    <span class="active">{{talkTime.dayValue}} {{talkTime.timeValue}}</span>
                </div>
            </div>
        </com-cell>
        <com-cell :border="true">
            <div slot="body" class="tip">
                <span class="icon icon-tip"> </span>我们会尽力保障外卖的送达时间
            </div>
        </com-cell>

        <div class="product-list">
            <com-cell v-for="(item, index) in products" :border="index === products.length - 1 ? true : false">
                <div slot="body" class="product-item">
                    <span>{{item.name}}</span>
                    <span>x{{item.number}}</span>
                    <span>￥{{item.price}}</span>
                </div>
            </com-cell>
            <div class="total">
                <span>共{{total}}份, </span>
                <span>总计：<b>{{price}}</b>元</span>
            </div>
        </div>
        <com-cell :border="true" title="订单备注">
            <div slot="body">
                <input type="text" placeholder="输入您的用餐习惯" v-model="desc">
            </div>
        </com-cell>
        <com-cell :border="true" title="付款方式">
            <div slot="body">
                微信支付
            </div>
            <div slot="footer" class="pay-way">
                <span class="icon icon-selected"></span>
            </div>
        </com-cell>
        <com-footer type="pay-order" @submit="submitHandle"></com-footer>
    </div>
</template>
<script>
    import iosSelect from 'iosselect'
    import css from '../lib/iosPicker.css'
    import comCell from '../components/comCell'
    import comFooter from '../components/comFooter'
   
    export default {
        data() {
            return {
                talkTime: null,
                userInfo: null,
                address: null,
                desc: ""
            }
        },
        computed: {
            products() {
                return this.$store.getters.getProducts
            },
            total() {
                return this.$store.getters.getProductTotalNumber
            },
            price() {
                return this.$store.getters.getProductTotalPrice
            }
        },
        mounted(){
           this.address = JSON.parse(sessionStorage.getItem("address")) || {};

           this.getUserInfo();
        },
        methods: {
            getUserInfo(){
                 this.$http({url: "/getUserInfo", method: "GET", params: {t: +new Date()}}).then((res)=>{
                    var data = JSON.parse(res.data).data;
                    sessionStorage.setItem("userInfo", JSON.stringify(data));

                    this.userInfo = data;
                }).catch((e)=>{
                    console.log(e);
                    alert("请求出错，请联系管理员")
                })
            },
            submitOrder() {
                alert("submit order")
            },
            editUserInfo(){
                this.$router.push({
                    path: "/userInfo"
                })
            },
            addAddress(){
                this.$router.push({
                    path: "/address"
                })
            },
            submitHandle(){
                var orderItems = [],
                    products = this.products,
                    userInfo = JSON.parse(sessionStorage.getItem("userInfo")) || {},
                    address = JSON.parse(sessionStorage.getItem("address")) || {};

                if (!userInfo) {
                    return;
                }

                products.forEach(function (item, index, array) {
                    orderItems.push({
                        dishes: {
                            id: item.id,
                            name: item.name,
                            price2: item.price,
                        },
                        number: item.number
                    });
                });
                var params = {
                    money: this.price,
                    distributionSites: {
                        id: address.addressId,
                        address: address.addrName
                    },
                    reserverTime: +new Date(this.talkTime.dayValue),
                    times: {
                        id: +this.talkTime.timeId
                    },
                    receiverName: userInfo.name,
                    receiverTelephone: userInfo.tel,
                    openid: userInfo.openId,
                    status: "0",
                    orderItems: orderItems,
                    remarks: this.desc
                };
                console.log(params);
                //post data
                this.$router.push({
                    path: "/orderDetail"
                })
            },
            showTimePicker() {
                 var self = this;
                 this.$http({url: "/getTalkTime", method: "GET", params: {t: +new Date()}}).then((res)=>{
                    var data = JSON.parse(res.data).data;
                   
                    data.daylist = data.daylist.map(function(item){
                        return {
                            id: item.id,
                            value: (new Date(item.day)).toLocaleDateString()
                        }
                    });
                    data.selectTime = data.selectTime.map(function(item) {
                        return {
                            id: item.id,
                            value: item.startTime + "-" + item.endTime
                        }
                    });
                   
                    new iosSelect(2,
                        [data.daylist, data.selectTime],
                        {
                            title: '选择时间',
                            oneLevelId: self.talkTime ? self.talkTime.dayId : "",
                            twoLevelId: self.talkTime ? self.talkTime.timeId : "",
                            callback: function (day, time) {
                                self.talkTime = {
                                    dayId: day.id,
                                    dayValue: day.value,
                                    timeId: time.id,
                                    timeValue: time.value
                                };
                            }
                        });
                }).catch((e)=>{
                    console.log(e);
                    alert("请求出错，请联系管理员")
                });
            }
        },
        components: {
            comCell,
            comFooter,
        }
    }
</script>
<style scoped>
    .product-list .com-cell:last-child {
        border-bottom: 1px solid #656565
    }
    .active {
        color: #ff8400;
    }
    .tip {
        color: #999;
        display: flex;
    }
    .pay-way {
        display: flex;
        align-items: center
    }
     .icon.icon-tip,
    .icon.icon-selected{
        width: 1.5rem;
        height: 1.5rem;
        display: inline-block;
    }
    .icon.icon-tip {
        background: url(../assets/icon-tip.png);
        background-size: 100%;
    }
    .icon.icon-selected {
        background: url(../assets/icon-selected.png);
        background-size: 100%;
    }
   .pay-order {
       padding: .5rem;
       min-height: calc(100vh - 3rem);
       background: #1a1b1f;
       color: #fff;
   }
   .product-item {
       display: flex;
       width: 100%;
       justify-content: space-between
   }
   input {
       color: #fff;
       border: none;
       background: transparent;
       outline: none;
   }
 .total {
     display: flex;
     justify-content: flex-end;
     margin: .3rem .8rem;
 }
</style>