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
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="carbrand">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">車款:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="carmodel">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">價錢:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="carprice">
                    </div>
                </div>
                <div class="flex w-full justify-around text-lg mb-5">
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">動力型式:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="carpower">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">引擎型式:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="carengine">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">變速系統:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="cartrans">
                    </div>
                </div>
                <div class="flex w-full justify-around text-lg mb-5">
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">驅動型式:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="cardrive">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">扭力:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="cartorque">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">車身型式:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="carbody">
                    </div>
                </div>
                <div class="flex w-full justify-around text-lg mb-5">
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">車型大小:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="carsize">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">後車廂大小:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="cartrunk">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">車身座位:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="cardoor">
                    </div>
                </div>
                <div class="flex w-full justify-around text-lg mb-5">
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">排氣量:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="cardisplacement">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[95px] text-md">性能數據:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="carperformance">
                    </div>
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">能源消耗:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="carenergy">
                    </div>
                </div>
                <div class="flex w-full justify-around text-lg mb-5">
                    <div class="flex max-w-[250px]">
                        <div class="w-[80px]">相關稅率:</div>
                        <input type="text" class="border-black border rounded-md w-[150px]" v-model="carrates">
                    </div>
                </div>
                <div class="flex w-full justify-end text-lg mb-3">
                    <button @click="gogoro2" class="border px-3 py-1">取消</button>
                    <div class="bg-blue-600 ml-5"><button @click.prevent="addbtn" class="px-3 py-1 text-white" >確認</button></div>
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
    data() {
        return {
            close: false,
            insertphoto: []
        }
    },
    methods:{
        addphoto(val) {
            this.insertphoto = val
            console.log(this.insertphoto)
        },
        gogoro2(){
            this.$emit('gogoro', this.close)
        },
        addbtn() {
            console.log(this.carbrand);
            console.log(this.carmodel);
            console.log(this.carprice);
            console.log(this.carpower);
            console.log(this.carengine);
            console.log(this.cartrans);
            console.log(this.cardrive);
            console.log(this.cartorque);
            console.log(this.carbody);
            console.log(this.carsize);
            console.log(this.cartrunk);
            console.log(this.cardoor);
            console.log(this.cardisplacement);
            console.log(this.carperformance);
            console.log(this.carenergy);
            console.log(this.carrates);
            console.log(this.insertphoto);
            const formdata = new FormData();
            formdata.append('BRAND', this.carbrand);
            formdata.append('CARMODEL', this.carmodel);
            formdata.append('POWERTYPE', this.carpower);
            formdata.append('ENGINETYPE', this.carengine);
            formdata.append('TRANSMISSIONSYSTEM', this.cartrans);
            formdata.append('DRIVETYPE', this.cardrive);
            formdata.append('MAXTORQUE', this.cartorque);
            formdata.append('BODYTYPE', this.carbody);
            formdata.append('MODELSIZE', this.carsize);
            formdata.append('TRUNKSIZE', this.cartrunk);
            formdata.append('DOOR', this.cardoor);
            formdata.append('DISPLACEMENT', this.cardisplacement);
            formdata.append('PERFORMANCEDATA', this.carperformance);
            formdata.append('CARPRICE', this.carprice);
            formdata.append('ENERGY', this.carenergy);
            formdata.append('RATES', this.carrates);
            formdata.append('CARTYPEPHOTO', this.insertphoto[0])
            fetch('http://localhost:8080/backfront-php/InsertCardata.php', {
                method: 'POST',
                body: formdata
            })
        }
    }
}
</script>