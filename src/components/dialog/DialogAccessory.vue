<template>
    <div style="min-width:600px">
        <div class="flex">
            <div>
                <uploadimage @photofile="addphoto" class="mr-3" />
            </div>

            <div>
                <div class="flex w-full justify-around text-lg mb-10">
                    <!-- <div class="w-1/3">
                        商品ID : 
                        <input type="text" class="border-black border rounded-md" v-model="productid">
                    </div> -->
                    <div class="w-1/2">
                        商品種類 :  
                        <!-- <input type="text" class="border-black border rounded-md"> -->
                        <select name="kind" class="border-black border rounded-md w-[200px] h-[30px]" style="cursor: pointer" v-model="productsort">
                            <option value="硬骨型">硬骨型</option>
                            <option value="軟骨型">軟骨型</option>
                            <option value="後窗專用型">後窗專用型</option>
                            <option value="小燈/方向燈/煞車燈">小燈/方向燈/煞車燈</option>
                            <option value="牌照燈">牌照燈</option>
                            <option value="高音揚聲器">高音揚聲器</option>
                            <option value="低音炮管">低音炮管</option>
                            <option value="胎內">胎內</option>
                            <option value="胎外">胎外</option>
                            <option value="電源供應器">電源供應器</option>
                            <option value="千斤頂">千斤頂</option>
                            <option value="警告標示">警告標示</option>
                        </select>
                    </div>
                </div>

                <div class="flex w-full justify-around text-lg mb-10">
                    <div class="w-1/3">
                        商品名稱 : 
                        <input type="text" class="border-black border rounded-md" v-model="productname">
                    </div>
                    <div class="w-1/3">
                        價格 :  
                        <input type="text" class="border-black border rounded-md" v-model="productprice">
                    </div>
                </div>

                <div class="text-lg mb-10">
                    <div>
                        商品描述 : 
                        <textarea cols="50" rows="5" class="border-black border rounded-md" placeholder="請輸入內容" v-model="productinfo"></textarea>
                    </div>
                </div>

                <div class="flex w-full justify-end text-lg mb-3">
                    <button @click="gogoro2" class="border px-3 py-1">取消</button>
                    <div class="bg-blue-600 ml-5"><button @click.prevent="addbtn" class="px-3 py-1 text-white">確認</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import uploadimage from '../uploadimage.vue'
export default {
    components:{
        uploadimage
    },
    data() {
        return {
            close: false,
            insertphoto: []
        }
    },
    methods:{
        addphoto(val) {
            this.insertphoto = val
            console.log(this.insertphoto)
        },
        gogoro2(){
            this.$emit('gogoro', this.close)
        },
        addbtn(){
            // console.log(this.productid);
            console.log(this.productsort);
            console.log(this.productname);
            console.log(this.productprice);
            console.log(this.productinfo);
            // console.log(this.insertphoto);
            const formdata = new FormData();
            // formdata.append('PRODUCTID', this.productid);
            formdata.append('SORT', this.productsort);
            formdata.append('PRODUCTNAME', this.productname);
            formdata.append('PRODUCTPRICE', this.productprice);
            formdata.append('PRODUCTINFO', this.productinfo);
            formdata.append('PRODUCTIMG', this.insertphoto);
            fetch('http://localhost:8080/thevroom-php/InsertAccessorydata.php', {
                method: 'POST',
                body: formdata
            })
        }
    }
}
</script>