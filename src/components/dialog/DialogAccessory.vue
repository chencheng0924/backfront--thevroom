<template>
  <div style="min-width:600px">
    <div class="flex w-full justify-around text-lg mb-10">
        <div class="w-1/2">
            商品ID : 
            <input type="text" class="border-black border rounded-md">
        </div>
        <div class="w-1/2">
            商品種類 :  
            <!-- <input type="text" class="border-black border rounded-md"> -->
            <select name="kind" class="border-black border rounded-md w-[200px] h-[30px]"></select>
        </div>
    </div>

    <div class="flex w-full justify-around text-lg mb-10">
        <div class="w-1/2">
            商品名稱 : 
            <input type="text" class="border-black border rounded-md">
        </div>
        <div class="w-1/2">
            價格 :  
            <input type="text" class="border-black border rounded-md">
        </div>
    </div>

    <div class="text-lg mb-10">
      <div>
        商品描述 : 
        <textarea cols="50" rows="5" class="border-black border rounded-md" placeholder="請輸入內容"></textarea>
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