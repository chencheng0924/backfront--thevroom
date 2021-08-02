<template>
    <div style="min-width:600px">
        <div class="flex w-full justify-around text-lg mb-3">
            <div class="w-1/2">
                車款名稱:
                <input type="text" class="border-black border rounded-md">
            </div>
            <div class="w-1/2">
                價格:
                <input type="text" class="border-black border rounded-md">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-3">
            <div class="w-4/10">
                車輛ID:
                <input type="text" class="border-black border rounded-md">
            </div>
            <div class="w-3/10">
                車廠:
                <input type="text" class="border-black border rounded-md">
            </div>
            <div class="w-3/10">
                車系:
                <input type="text" class="border-black border rounded-md">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-3">
            <div class="w-1/3">
                動力型式:
                <input type="text" class="border-black border rounded-md">
            </div>
            <div class="w-1/3">
                引擎型式:
                <input type="text" class="border-black border rounded-md">
            </div>
            <div class="w-1/3">
                變速系統:
                <input type="text" class="border-black border rounded-md">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-3">
            <div class="w-1/3">
                驅動型式:
                <input type="text" class="border-black border rounded-md">
            </div>
            <div class="w-1/3">
                最大扭力:
                <input type="text" class="border-black border rounded-md">
            </div>
            <div class="w-1/3">
                車身型式:
                <input type="text" class="border-black border rounded-md">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-3">
            <div class="w-1/3">
                車型大小:
                <input type="text" class="border-black border rounded-md">
            </div>
            <div class="w-1/3">
                後車廂大小:
                <input type="text" class="border-black border rounded-md">
            </div>
            <div class="w-1/3">
                車身座位:
                <input type="text" class="border-black border rounded-md">
            </div>
        </div>
        <div class="flex w-full justify-around text-lg mb-3">
            <div class="w-1/3">
                排氣量:
                <input type="text" class="border-black border rounded-md">
            </div>
            <div class="w-1/3">
                性能數據:
                <input type="text" class="border-black border rounded-md">
            </div>
            <div class="w-1/3">
                能源消耗:
                <input type="text" class="border-black border rounded-md">
            </div>
        </div>
        <div class="flex w-full justify-start text-lg mb-3">
            <div class="w-1/3">
                相關稅率:
                <input type="text" class="border-black border rounded-md">
            </div>
            <div class="w-1/3">
                年份:
                <input type="text" class="border-black border rounded-md">
            </div>
        </div>
        <div class="flex w-full justify-end text-lg mb-3">
            <button @click="gogoro2" class="border px-3 py-1">取消</button>
            <div class="bg-blue-600 ml-5"><button class="px-3 py-1 text-white">確認</button></div>
        </div>
    </div>
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