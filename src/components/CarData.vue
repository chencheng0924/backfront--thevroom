<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">車輛資料管理</div>
            <div><button @click="gogo" class="bg-black text-white py-2 px-5 rounded-lg">建立新車輛</button></div>
            <dialoggo :show="dialogs">
                <div class="flex flex-col w-full justify-around">
                    <div class="w-full mb-5">
                      <div class="text-2xl text-black text-center">---新增車輛---</div>
                    </div>
                    <div class="flex justify-between">
                      <!-- <uploadimage @photofile="addphoto" class="mr-3" /> -->
                      <dialig-car-date @gogoro='close'/>
                    </div>
                </div>
            </dialoggo>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-11/12 flex flex-col justify-center">
                <div class="flex text-xl w-full justify-around items-center mb-3">
                    <div class="w-[100px]">車輛ID</div>
                    <div class="w-[100px]">車廠</div>
                    <div class="w-[100px]">車款</div>
                    <div class="w-[100px]">價格</div>
                    <div class="w-[100px]"><button>編輯</button></div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="mt-3 w-full h-[650px] flex flex-col overflow-auto">
                    <div class="w-full flex text-lg justify-around items-center mb-10" v-for="item in cars" :key="item">
                        <div class="w-[100px]">{{item[0]}}</div>
                        <div class="w-[100px]">{{item[1]}}</div>
                        <div class="w-[100px]">{{item[2]}}</div>
                        <div class="w-[100px]">{{item[14]}}</div>
                        <div class="w-[100px]"><buttons class="px-2 py-3 rounded-lg bg-black text-white">編輯</buttons></div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
// import uploadimage from './uploadimage.vue'
import DialigCarDate from './dialog/DialogCarDate.vue'
export default {
    components:{
        // uploadimage,
        DialigCarDate
    },
    async created () {
        const res = await fetch('http://localhost:8080/thevroom-php/SelectCardata.php');
        const resdata = await res.json();
        console.log(res);
        console.log(resdata);
        this.cars = resdata
        // this.cars = resdata.concat(this.new)
        console.log(this.cars);
    },
    data() {
        return {
            dialogs: false,
            // cars:[
            //     {car:'001',carbrand:'BMW',carname:'220i',price:'1980000'},
            //     {car:'002',carbrand:'BMW',carname:'220i',price:'1980000'},
            //     {car:'003',carbrand:'BMW',carname:'220i',price:'1980000'},
            // ]
            cars: [],
            test: [],
            new: []
        }
    },
    methods:{
        gogo(){
            this.dialogs = true
        },
        close(){
            this.dialogs = false
        }
    }
}
</script>