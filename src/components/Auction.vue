<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">拍賣會管理</div>
            <dialoggo :show="dialogs">
                <div class="flex flex-col w-full justify-around">
                    <div class="w-full mb-5">
                      <div class="text-2xl text-black text-center">---會員資料---</div>
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
                    <div class="w-[100px]">拍賣會編號</div>
                    <div class="w-[150px]">拍賣會名稱</div>
                    <div class="w-[80px]">成交價</div>
                    <div class="w-[80px]">開始時間</div>
                    <div class="w-[80px]">持續天數</div>
                    <div class="w-[80px]">狀態</div>
                    <div class="w-[80px]"><button>檢視</button></div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-around items-center my-5" v-for="item in auction" :key="item.id">
                    <div class="w-[100px]">{{item.id}}</div>
                    <div class="w-[150px]">{{item.name}}</div>
                    <div class="w-[80px]">{{item.startprice}}</div>
                    <div class="w-[80px]">{{item.startdate}}</div>
                    <div class="w-[80px]">{{item.day}}</div>
                    <div class="w-[80px]">已啟用</div>
                    <div class="w-[80px]"><button @click="gogo" class="px-2 py-3 rounded-lg bg-black text-white">編輯</button></div>
                </div>
            </div>
            <div>
                <dialoggo :show="dialogs">
                    <auction-data @gogoro='close'/>
                </dialoggo>
            </div>
        </div>
    </div>
</template>

<script>
import AuctionData from './dialog/AuctionData.vue'
export default {
    components:{
        AuctionData
    },
    data() {
        return {
            dialogs: false,
            auction:[
                {id:'001',name:'拍賣會',startprice:'1500000',startdate:'1992/9/24',day:'5'},
                {id:'002',name:'拍賣會',startprice:'1500000',startdate:'1992/9/24',day:'5'},
                {id:'003',name:'拍賣會',startprice:'1500000',startdate:'1992/9/24',day:'5'},
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