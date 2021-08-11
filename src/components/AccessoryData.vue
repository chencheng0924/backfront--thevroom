<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">配件資料管理</div>
            <div><button @click="gogo" class="bg-black text-white py-2 px-5 rounded-lg">建立新產品</button></div>
            <dialoggo :show="dialogs">
                <div class="flex flex-col w-full justify-around">
                    <div class="w-full mb-5 bg-black">
                      <div class="text-2xl text-white text-center">新增配件</div>
                    </div>
                    <div class="flex justify-between">
                      <uploadimage class="mr-3" />
                      <dialog-accessory @gogoro='close'/>
                    </div>
                </div>
            </dialoggo>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-11/12 flex flex-col justify-center">
                <div class="flex text-xl w-full justify-around items-center mb-3">
                    <div>商品ID</div>
                    <div>種類</div>
                    <div>商品名稱</div>
                    <div>商品資訊</div>
                    <div>價格</div>
                    <div>是否啟用</div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-around items-center my-5" v-for="accessory in accessorys" :key="accessory.product">
                    <div>{{accessory.product}}</div>
                    <div>{{accessory.type}}</div>
                    <div>{{accessory.name}}</div>
                    <div>{{accessory.info}}</div>
                    <div>{{accessory.price}}</div>
                    <!-- <div style="border: 1px solid #000" class="p-2">{{ accessory.state }}</div> -->
                    <div><button class="px-2 py-3 rounded-lg bg-black text-white">編輯</button></div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import uploadimage from './uploadimage.vue'
import DialogAccessory from './dialog/DialogAccessory.vue'
export default {
    components:{
        uploadimage,
        DialogAccessory
    },
    data() {
        return {
            dialogs: false,
            accessorys:[
                {product:'001',type:'車用',name:'輪胎',info:'1.aaaaaa',price:'1980000'},
                {product:'002',type:'清潔',name:'雨刷',info:'1.aaaaaa',price:'1980000'},
                {product:'003',type:'電子',name:'行車紀錄器',info:'1.aaaaaa',price:'1980000'},
            ]
        }
    },
    methods:{
        gogo(){
            this.dialogs = true
        },
        close(){
            this.dialogs = false
        }
    }
}
</script>