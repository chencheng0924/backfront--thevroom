<template>
    <form style="min-width:900px">
        <div class="w-full h-[50px] text-black text-2xl text-center">
            <h1>---會員資料---</h1>
        </div>
        <div class="flex w-full justify-around text-lg mb-5">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">會員ID:</div>
                <input type="text" class="border-black border rounded-md w-[350px]">
            </div>
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">密碼:</div>
                <input type="text" class="border-black border rounded-md w-[350px]">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-5">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">姓名:</div>
                <input type="text" class="border-black border rounded-md w-[350px]">
            </div>
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">性別:</div>
                <input type="text" class="border-black border rounded-md w-[350px]">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-8">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">電子信箱:</div>
                <input type="text" class="border-black border rounded-md w-[350px]">
            </div>
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">生日:</div>
                <input type="text" class="border-black border rounded-md w-[350px]">
            </div>
        </div>
        <div class="flex w-full justify-center text-lg mb-5">
            <div class="flex max-w-[800px]">
                <div class="w-[80px]">地址:</div>
                <input type="text" class="border-black border rounded-md w-[720px]">
            </div>   
        </div>
        <div class="flex w-full justify-end text-lg mb-3">
            <button @click.prevent="gogoro2" class="border px-3 py-1">取消</button>
            <div class="bg-blue-600 ml-5"><button class="px-3 py-1 text-white">確認</button></div>
        </div>
    </form>
</template>

<script>
export default {
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