<template>
    <div class="weui-uploader">
        <div class="weui-uploader__hd">
        </div>
        <div class="weui-uploader__bd">
            <ul class="weui-uploader__files" id="uploaderFiles">
                <li class="weui-uploader__file" v-for="(item, index) in imgList" :style="{backgroundImage: 'url('+ item +')', backgroundRepeat: 'no-repeat', backgroundPosition: 'fixed top',  backgroundSize: '100% 100%'}">
                    <span class="remove" @click="remove(index)">x</span>
                </li>
            </ul>
            <div class="weui-uploader__input-box">
                <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="multiple" @change="uploadFunc($event)">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                imgList: [],
                fd: new FormData()
            }
        },
        methods: {
            uploadFunc(e){
                this.imgList = [];
                this.fd = new FormData();
                
                var src, url = window.URL || window.webkitURL || window.mozURL, files = e.target.files;
                for (var i = 0, len = files.length; i < len; ++i) {
                    var file = files[i];
                    
                    if (url) {
                        src = url.createObjectURL(file);
                    } else {
                        src = e.target.result;
                    }
                    this.imgList.push(src);
                    console.log(i, file);
                    this.fd.append("key" + i, file);
                    this.$emit("upload", this.fd);
                }
            },
            remove(index){
                this.imgList.splice(index, 1);
                this.fd.delete("key" + index);
                this.$emit("upload", this.fd);
            },
        }
    }
</script>
<style>
    .weui-uploader__bd {
        overflow: visible
    }
    .weui-uploader__input-box {
        background: url(../assets/icon-addImage.png);
        background-size: 100%;
        border: none;
    }
    .weui-uploader__input-box::before,
    .weui-uploader__input-box::after {
        display: none;
    }
    #uploaderFiles li {
        position: relative;
    }
    .remove {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        background: #e22;
        color: #fff;
        border-radius: 50%;
        line-height: 1rem;
        text-align: center;
        position: absolute;
        right: -.6rem;
        top: -.6rem;
    }
</style>