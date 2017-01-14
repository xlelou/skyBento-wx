<template>
    <div v-show="show">
        <div class="weui-mask" id="iosMask" @click="showActionSheet" style="opacity: 1;"></div>
        <div class="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet">
            <div class="weui-actionsheet__menu">
                 <div class="weui-actionsheet__cell s-list-item weui-actionsheet-title">
						购物车
					<span id="clear-cart" style="display: flex"><i class="icon-delete"></i>清空购物车</span>
				</div>
                <div class="weui-actionsheet__cell" v-if="dataSource.length == 0">
                    您的购物车是空的...
                </div>
                <div class="weui-actionsheet__cell" v-for="(item, index) in dataSource">
                    {{item.name}}-{{item.price}}-{{item.number}}
                </div>
            </div>
            <div class="weui-actionsheet__action">
                <div class="weui-actionsheet__cell" id="iosActionsheetCancel" @click="showActionSheet">取消</div>
            </div>
        </div>
    </div>
</template>
<script>
    require("../lib/weui.css")

    export default {
        data(){
            return {

            }
        },
        props: {
            dataSource: {
                type: Array,
                required: true
            },
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            showActionSheet(){
                this.show = false;
            }
        }
    }
</script>
<style>
    
</style>