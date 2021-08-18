<template>
  <div style="min-width:600px">
    <div class="flex">
      <div>
          <uploadimage @photofile="addphoto" class="mr-3" />
      </div>

      <div>
        <div class="w-full text-lg mb-6">
            <div>
                文章編號 : 
                <input type="text" class="border-black border rounded-md w-full" v-model="one">
            </div>
        </div>
    
        <div class="w-full text-lg mb-6">
            <div>
                發文者會員編號 :  
                <input type="text" class="border-black border rounded-md w-full" v-model="two">
            </div>
        </div>
    
        <div class="w-full text-lg mb-6">
            <div>
                發文日期 : 
                <input type="text" class="border-black border rounded-md w-full" v-model="three">
            </div>
        </div>
    
        <div class="w-full text-lg mb-6">
            <div>
                主題類型 :  
                <input type="text" class="border-black border rounded-md w-full" v-model="four">
            </div>
        </div>
    
        <div class="text-lg mb-6 w-full">
            <div>
              文章名稱 : 
              <input type="text" class="border-black border rounded-md w-full" v-model="five">
            </div>
        </div>
    
        <div class="text-lg mb-6 w-full">
            <div>
              文章內容 : 
              <textarea cols="50" rows="5" class="border-black border rounded-md w-full" placeholder="請輸入內容" v-model="six"></textarea>
            </div>
        </div>
    
        <div class="flex w-full justify-end text-lg mb-3">
            <button @click="gogoro2" class="border px-3 py-1">取消</button>
            <div class="bg-blue-600 ml-5"><button @click.prevent="updatebtn" class="px-3 py-1 text-white">確認</button></div>
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
  props: ['artid'],
  async created () {
        const fd = new FormData()
        fd.append('artid', this.artid)
        const res = await fetch('http://localhost:8080/backfront-php/SelectDiologArticle.php', {
          method: 'POST',
          body: fd
        });
        const resdata = await res.json();
        this.test = resdata
        console.log(this.test[0]);
        this.one = this.test[0][0];
        this.two = this.test[0][1];
        this.three = this.test[0][2];
        this.four = this.test[0][4];
        this.five = this.test[0][5];
        this.six = this.test[0][6];
    },
    data() {
        return {
            close: false,
            test: [],
            artphoto: [],
            one: '', 
            two: '',
            three: '',
            four: '',
            five: '',
            six: ''
        }
    },
    methods:{
        gogoro2(){
            this.$emit('gogoro', this.close)
        },
        addphoto(val) {
            this.artphoto = val
            console.log(this.artphoto)
        },
        updatebtn(){
          console.log(this.one);
          console.log(this.two);
          console.log(this.three);
          console.log(this.four);
          console.log(this.five);
          console.log(this.six);
          // console.log(this.testname);
          const formdata = new FormData();
          formdata.append('SUBJECTNAME', this.five);
          formdata.append('CONTENT', this.six);
          formdata.append('ARTICLEID', this.one);
          fetch('http://localhost:8080/backfront-php/UpdateDialogArticle.php', {
                method: 'POST',
                body: formdata
            })
        }
    }
}
</script>