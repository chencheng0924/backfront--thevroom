<template>
  <div style="min-width:600px">
    <div class="flex w-full justify-around text-lg mb-10">
        <div class="w-1/2">
            會員ID : 
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
        <div class="bg-blue-600 ml-5"><button class="px-3 py-1 text-white" @click="update">確認</button></div>
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
      console.log(res)
      const resdata = await res.json()
      this.testtest = resdata
      console.log(resdata);
      this.one = this.testtest[0][1];
      this.two = this.testtest[0][3];
      this.three = this.testtest[0][5];
      this.four= this.testtest[0][4];
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
        },
        update(){
          const fdd = new FormData()
          fdd.append('one', this.one)
          fdd.append('two',this.two)
          fdd.append('three',this.three)
          fdd.append('four', this.four)
          fetch('http://localhost:8080/backfront-php/UpdateReportReply.php',{
            method:'POST',
            body:fdd
          })
        }
    }
}
</script>