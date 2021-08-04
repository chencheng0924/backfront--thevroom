<template>
  <div style="min-width:600px">
    <div class="flex w-full justify-around text-lg mb-10">
        <div class="w-1/2">
            訂單邊號 : 
            <input type="text" class="border-black border rounded-md">
        </div>
        <div class="w-1/2">
            會員編號 :  
            <input type="text" class="border-black border rounded-md">
        </div>
    </div>

    <div class="flex w-full justify-around text-lg mb-10">
        <div class="w-1/3">
            數量 : 
            <input type="text" class="border-black border rounded-md">
        </div>
        <div class="w-1/3">
            付款方式 :  
            <input type="text" class="border-black border rounded-md">
        </div>
        <div class="w-1/3">
            總價 :  
            <input type="text" class="border-black border rounded-md">
        </div>
    </div>

    <div class="text-lg">
      <ol>
        訂單清單 : 
        <li>aaa</li>
        <li>aaa</li>
      </ol>
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