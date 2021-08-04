<template>
    <form style="min-width:900px">
        <div class="flex w-full justify-around text-lg mb-5">
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">車款名稱:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">價格:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">年份:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-5">
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">車輛ID:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">車廠:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">車系:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-5">
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">動力型式:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">引擎型式:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">變速系統:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-5">
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">驅動型式:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">最大扭力:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">車身型式:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-5">
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">車型大小:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
            <div class="flex max-w-[250px]">
                <div class="w-[95px] text-md">後車廂大小:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">相關稅率:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-5">
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">排氣量:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">性能數據:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
            <div class="flex max-w-[250px]">
                <div class="w-[80px]">能源消耗:</div>
                <input type="text" class="border-black border rounded-md w-[150px]">
            </div>
        </div>
        <div class="flex w-full justify-end text-lg mb-3">
            <button @click="gogoro2" class="border px-3 py-1">取消</button>
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