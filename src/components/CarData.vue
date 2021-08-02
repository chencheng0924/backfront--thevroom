<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">車輛資料管理</div>
            <div><button @click="gogo" class="bg-black text-white py-2 px-5 rounded-lg">建立新車輛</button></div>
            <dialoggo :show="dialogs">
                <div class="flex flex-col w-full justify-around">
                    <div class="w-full mb-5">
                      <div class="text-2xl text-black text-center">新增車輛</div>
                    </div>
                    <div class="flex justify-between">
                      <uploadimage class="mr-3" />
                      <dialig-car-date @gogoro='close'/>
                    </div>
                </div>
            </dialoggo>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-11/12 flex flex-col justify-center">
                <div class="flex text-xl w-full justify-around items-center mb-3">
                    <div>車輛ID</div>
                    <div>車廠</div>
                    <div>車系</div>
                    <div>車款</div>
                    <div>年份</div>
                    <div>價格</div>
                    <div>是否啟用</div>
                    <div>編輯</div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-around items-center my-5" v-for="newcar in cars" :key="newcar.car">
                    <div>{{newcar.car}}</div>
                    <div>{{newcar.carbrand}}</div>
                    <div>{{newcar.cartype}}</div>
                    <div>{{newcar.carname}}</div>
                    <div>{{newcar.year}}</div>
                    <div>{{newcar.price}}</div>
                    <div>未啟用</div>
                    <div><button class="px-2 py-3 rounded-lg bg-black text-white">編輯</button></div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import uploadimage from './uploadimage.vue'
import DialigCarDate from './dialog/DialogCarDate.vue'
export default {
    components:{
        uploadimage,
        DialigCarDate
    },
    data() {
        return {
            dialogs: false,
            cars:[
                {car:'001',carbrand:'BMW',cartype:'2',carname:'220i',year:'2020',price:'1980000'},
                {car:'002',carbrand:'BMW',cartype:'2',carname:'220i',year:'2020',price:'1980000'},
                {car:'003',carbrand:'BMW',cartype:'2',carname:'220i',year:'2020',price:'1980000'},
            ]
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