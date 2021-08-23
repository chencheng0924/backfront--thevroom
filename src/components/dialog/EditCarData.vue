<template>
    <form style="min-width:900px">
        <div class="flex">
            <div>
                <uploadimage @photofile="addphoto" class="mr-3" />
            </div>
            <div>
                <div class="flex w-full justify-around text-lg mb-5">
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">車廠:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="one">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">車款:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="two">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">價錢:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="three">
                    </div>
                </div>
                <div class="flex w-full justify-around text-lg mb-5">
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">動力型式:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="four">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">引擎型式:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="five">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">變速系統:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="six">
                    </div>
                </div>
                <div class="flex w-full justify-around text-lg mb-5">
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">驅動型式:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="seven">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">扭力:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="eight">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">車身型式:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="nine">
                    </div>
                </div>
                <div class="flex w-full justify-around text-lg mb-5">
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">車型大小:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="ten">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">後車廂大小:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="eleven">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">車身座位:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="twelve">
                    </div>
                </div>
                <div class="flex w-full justify-around text-lg mb-5">
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">排氣量:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="thirteen">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[95px] text-md">性能數據:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="fourteen">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">能源消耗:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="fifteen">
                    </div>
                </div>
                <div class="flex w-full justify-around text-lg mb-5">
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">相關稅率:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="sixteen">
                    </div>
                </div>
                <div class="flex w-full justify-end text-lg mb-3">
                    <button @click="gogoro3" class="border px-3 py-1">取消</button>
                    <div class="bg-blue-600 ml-5"><button @click.prevent="updatebtn" class="px-3 py-1 text-white" >確認</button></div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import uploadimage from '../uploadimage.vue'
export default {
    components:{
        uploadimage
    },
    props: ['carid'],
    async created () {
        const cd = new FormData()
        cd.append('carid', this.carid)
        const cdres = await fetch('http://localhost:8080/backfront-php/SelectEditCardata.php', {
          method: 'POST',
          body: cd
        });
        const cdresdata = await cdres.json()
        this.cddata = cdresdata
        console.log(this.cddata[0]);
        this.one = this.cddata[0][1];
        this.two = this.cddata[0][2];
        this.three = this.cddata[0][14];
        this.four = this.cddata[0][3];
        this.five = this.cddata[0][4];
        this.six = this.cddata[0][5];
        this.seven = this.cddata[0][6];
        this.eight = this.cddata[0][7];
        this.nine = this.cddata[0][8];
        this.ten = this.cddata[0][9];
        this.eleven = this.cddata[0][10];
        this.twelve = this.cddata[0][11];
        this.thirteen = this.cddata[0][12];
        this.fourteen = this.cddata[0][13];
        this.fifteen = this.cddata[0][15];
        this.sixteen = this.cddata[0][16];
        console.log(this.carid)
    },
    data() {
        return {
            testgogo: false,
            insertphoto: [],
            cddata: [],
            one: '', 
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '', 
            eight: '',
            nine: '',
            ten: '',
            eleven: '',
            twelve: '',
            thirteen: '', 
            fourteen: '',
            fifteen: '',
            sixteen: ''
        }
    },
    methods:{
        addphoto(val) {
            this.insertphoto = val
            console.log(this.insertphoto)
        },
        gogoro3(){
            this.$emit('gogo2', this.testgogo)
        },
        updatebtn(){
          console.log(this.one);
          console.log(this.two);
          console.log(this.three);
          console.log(this.four);
          console.log(this.five);
          console.log(this.six);
          const updata = new FormData()
          updata.append('BRAND', this.one)
          updata.append('CARMODEL', this.two)
          updata.append('POWERTYPE', this.four)
          updata.append('ENGINETYPE', this.five)
          updata.append('TRANSMISSIONSYSTEM', this.six)
          updata.append('DRIVETYPE', this.seven)
          updata.append('MAXTORQUE', this.eight)
          updata.append('BODYTYPE', this.nine)
          updata.append('MODELSIZE', this.ten)
          updata.append('TRUNKSIZE', this.eleven)
          updata.append('DOOR', this.twelve)
          updata.append('DISPLACEMENT', this.thirteen)
          updata.append('PERFORMANCEDATA', this.fourteen)
          updata.append('CARPRICE', this.three)
          updata.append('ENERGY', this.fifteen)
          updata.append('RATES', this.sixteen)
          updata.append('CARID', this.carid)
          fetch('http://localhost:8080/backfront-php/UpdateCardata.php', {
                method: 'POST',
                body: updata
            })
        }
    }
}
</script>