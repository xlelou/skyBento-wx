<template>
    <div class="weui-panel weui-panel_access" :class="{hide: hideIcon}">
            <div class="weui-panel__hd">{{title}}</div>
            <div class="weui-panel__ft">
                <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">
                      <slot name="cell-bd">默认内容</slot>
                    </div>
                    <slot name="cell-ft"></slot>
                    
                </a>
            </div>
        </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        props: {
            title: {
                type: String,
                default: "默认标题"
            },
            hideIcon: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style scoped>
    .weui-panel {
        background: #1a1b1f;
    }
   .hide .weui-panel__hd:after {
        display: none
    }
  .weui-cells:before,
  .weui-cell:before,
  .weui-panel:before {
      display: none;
  }
 
  .weui-panel__hd {
      color: #fff;
      font-size: 16px
  }
   .weui-cell {
      padding: 10px 15px
  }
   .weui-cell_access:active {
     background: transparent
 }
   .weui-cell_link {
      color:#fff;
  }
</style>