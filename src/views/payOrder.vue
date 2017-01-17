<template>
    <div class="pay-order">
        <div class="weui-cells">
             <router-link class="weui-cell weui-cell_access" to="/userInfo">
                <div class="weui-cell__bd">
                    <p>订餐人信息</p>
                </div>
                <div class="weui-cell__ft">
                    <span v-show="userInfoIsNull" style="color: #ff8400">+添加</span>
                </div>
            </router-link>
        </div>
        <div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">取餐地址</div>
            <div class="weui-panel__ft">
                <router-link to="/address" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">
                        <span v-show="addressIsNull">选择取餐地址</span>
                        <input type="text" name="time" value="" v-show="!addressIsNull">
                    </div>
                    <span class="weui-cell__ft"></span>
                </router-link>
            </div>
        </div>
        <div class="weui-cells">
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>取餐时间</p>
                </div>
                <div class="weui-cell__ft">
                    <span v-show="timeIsNull">选择取餐时间</span>
                </div>
            </a>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd">
                <img src="../assets/icon-tip.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
                <p>会尽力保障便当的送达时间</p>
            </div>
        </div>
        <ul class="list-view">
            <li v-for="item in products">
                <span>{{item.name}}</span>
                <span>x{{item.number}}</span>
                <span>￥{{item.price}}</span>
            </li>
        </ul>
        <div class="total">
            <span>共{{total}}份, </span>
            <span>总计：<b>{{price}}</b>元</span>
        </div>
        <div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">备注信息</div>
            <div class="weui-panel__ft">
                <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">
                        <input type="text" name="address" placeholder="请输入您的用餐习惯">
                    </div>
                </a>
            </div>
        </div>
        <div class="weui-panel weui-panel_access pay">
            <div class="weui-panel__hd">支付方式</div>
            <div class="weui-panel__ft">
                <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">
                        微信支付
                    </div>
                    <span class="icon icon-selected"></span>
                </a>
            </div>
        </div>
        <div class="footer">
          <div class="price">待支付:￥{{price}}</div>
          <div class="sumit" @click="submitOrder">下单</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                timeIsNull: true,
                userInfoIsNull: true,
                addressIsNull: true,
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
        methods: {
            submitOrder(){
                alert("submit order")
            }
        }
    }
</script>
<style scoped>

   .weui-cell__bd input,
   .weui-cell__bd,
   .weui-panel__hd,
   .weui-cells {
       font-size: 1rem;
       outline: none;
   }
   .pay-order {
       padding: .5rem;
       min-height: calc(100vh - 3rem);
   }
   input {
       color: #fff;
       border: none;
       background: transparent
   }
   .weui-cells,
   .pay-order,
  .weui-panel {
      background: #1a1b1f;
      color: #fff;
  }
  .weui-cells,
  .weui-panel {
      margin-top: 0;
  }
  .weui-panel:after,
  .weui-cells:after {
      left: 15px
  }
  .weui-cells:before,
  .weui-cell:before,
  .weui-panel__hd:after,
  .weui-panel:before {
      display: none;
  }
  .weui-panel__hd {
      color: #fff;
      padding: 7px 15px 0px;
  }
  .weui-cell {
      padding: 10px 15px
  }
  .weui-cell_link {
      color:#fff;
  }
  .icon.icon-selected{
      width: 1.5rem;
      height: 1.5rem;
      display: inline-block;
      background: url(../assets/icon-selected.png);
      background-size: 100%;
 }
 .weui-cell_access:active {
     background: transparent
 }
 .list-view {
     padding: 10px 0px;
     list-style-type: none;
     border-top: 1px solid #656565;
     border-bottom: 1px solid #656565;
     margin: 0 0 0 15px;
 }
 .list-view li {
     display: flex;
     justify-content: space-between;
     margin-top: .5rem;
 }
 .total {
     display: flex;
     justify-content: flex-end;
     margin: .3rem .8rem;
 }
 .footer {
     position: fixed;
     bottom: 0;
     background: #272727;
     color: #fff;
     width: 100%;
     left: 0;
     display: flex;
     box-sizing: border-box;
 }
 .footer div {
     padding: .8rem .5rem;
     text-align: center
 }
.footer div:first-child {
    width: 55%;
}
.footer div:last-child {
    width: 45%;
    background: #ff8400;
}
</style>