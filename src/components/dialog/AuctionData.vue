<template>
    <form style="min-width:900px">
        <div class="w-full h-[50px] text-black text-2xl text-center">
            <h1>---拍賣會資料---</h1>
        </div>
        <div class="flex w-full justify-around text-lg mb-5">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">拍賣場編號:</div>
                <input type="text" class="border-black border rounded-md w-[350px]">
            </div>
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">賣家會員編號:</div>
                <input type="text" class="border-black border rounded-md w-[350px]">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-5">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">開始時間:</div>
                <input type="text" class="border-black border rounded-md w-[350px]">
            </div>
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">持續天數:</div>
                <input type="text" class="border-black border rounded-md w-[350px]">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-8">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">車輛名稱:</div>
                <input type="text" class="border-black border rounded-md w-[350px]">
            </div>
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">底價:</div>
                <input type="text" class="border-black border rounded-md w-[350px]">
            </div>
        </div>
        <div class="flex w-full justify-start text-lg ml-12 mb-8">
            <uploadimage/>
        </div>
        <div class="flex w-full justify-end text-lg mb-3">
            <button @click.prevent="gogoro2" class="border px-3 py-1">取消</button>
            <div class="bg-blue-600 ml-5"><button class="px-3 py-1 text-white">確認</button></div>
        </div>
    </form>
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
        }
    },
    methods:{
        gogoro2(){
            this.$emit('gogoro', this.close)
        }
    }
}
</script>