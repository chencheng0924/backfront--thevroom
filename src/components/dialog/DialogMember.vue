<template>
  <div style="min-width:600px">
    <div class="flex w-full justify-around text-lg mb-10">
        <div class="w-1/2">
            檢舉編號 : 
            <input type="text" class="border-black border rounded-md" v-model="one">
        </div>
        <div class="w-1/2">
            姓名 :  
            <input type="text" class="border-black border rounded-md" v-model="two">
        </div>
    </div>

    <div class="text-lg mb-10">
      <div>
        留言時間 :
        <input type="text" class="border-black border rounded-md" v-model="three">
      </div>
    </div>

    <div class="text-lg mb-10">
      <div>
        留言內容 : 
        <textarea cols="50" rows="5" class="border-black border rounded-md" placeholder="請輸入內容" v-model="four"></textarea>
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
    props: ['repid'],
    async created () {
      const fd = new FormData()
      fd.append('repid', this.repid)
      const res = await fetch('http://localhost:8080/backfront-php/SelectReportReply.php', {
        method: 'POST',
        body: fd
      });
      // console.log(res)
      const resdata = await res.json()
      this.testtest = resdata
      // console.log(this.testtest[0]);
      this.one = this.testtest[0][0];
      this.two = this.testtest[0][2];
      this.three = this.testtest[0][3];
      this.four = this.testtest[0][4];
    },
    data() {
        return {
            close: false,
            testtest: [],
            one: '', 
            two: '',
            three: '',
            four: '',
        }
    },
    methods:{
        gogoro2(){
            this.$emit('gogoro', this.close)
        }
    }
}
</script>