<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">車輛訂單管理</div>
            <dialoggo :show="dialogs">
              <dialig-car-date />
            </dialoggo>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-11/12 flex flex-col justify-center">
                <div class="flex text-xl w-full justify-around items-center mb-3">
                    <div class="w-[100px]">訂單編號</div>
                    <div class="w-[100px]">車輛ID</div>
                    <div class="w-[100px]">車系</div>
                    <div class="w-[100px]">車款</div>
                    <div class="w-[100px]">年份</div>
                    <div class="w-[100px]">價格</div>
                    <div class="w-[100px]">是否結帳</div>
                    <div class="w-[100px]">編輯</div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-around items-center my-5" v-for="newcar in orders" :key="newcar.car">
                    <div class="w-[100px]">{{newcar.order}}</div>
                    <div class="w-[100px]">{{newcar.id}}</div>
                    <div class="w-[100px]">{{newcar.cartype}}</div>
                    <div class="w-[100px]">{{newcar.carname}}</div>
                    <div class="w-[100px]">{{newcar.year}}</div>
                    <div class="w-[100px]">{{newcar.price}}</div>
                    <div class="w-[100px]">{{newcar.checkout}}</div>
                    <div class="w-[100px]"><button @click="gogo" class="px-2 py-3 rounded-lg bg-black text-white">編輯</button></div>
                </div>
            </div>
            <dialoggo :show="dialogs">
                <dialig-car-order @gogoro='close'/>
            </dialoggo>
        </div>
    </div>
</template>

<script>
import DialigCarOrder from './dialog/DialogCarOrder.vue'
export default {
    components:{
        DialigCarOrder
    },
    data() {
        return {
            dialogs:false,
            orders:[
                {order:'001',id:'001',cartype:'2',carname:'220i',year:'2020',price:'1980000',checkout:'已結帳'},
                {order:'002',id:'002',cartype:'2',carname:'220i',year:'2020',price:'1980000',checkout:'未結帳'},
                {order:'003',id:'003',cartype:'2',carname:'220i',year:'2020',price:'1980000',checkout:'未結帳'},
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