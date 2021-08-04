<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">配件訂單管理</div>
            <dialoggo :show="dialogs">
                <div class="flex flex-col w-full justify-around">
                    <div class="w-full mb-5 bg-black">
                        <div class="text-2xl text-white text-center">配件訂單管理</div>
                    </div>
                    <div class="flex justify-between">
                        <dialog-accessoryorder @gogoro='close'/>
                    </div>
                </div>
            </dialoggo>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-11/12 flex flex-col justify-center">
                <div class="flex text-xl w-full justify-around items-center mb-3">
                    <div>配件訂單編號</div>
                    <div>會員編號</div>
                    <div>數量</div>
                    <div>付款方式</div>
                    <div>總計</div>
                    <div>是否完成訂單</div>
                    <div>編輯</div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-around items-center my-5" v-for="accessoryorder in accessoryorders" :key="accessoryorder.accessory">
                    <div>{{accessoryorder.accessory}}</div>
                    <div>{{accessoryorder.userid}}</div>
                    <div>{{accessoryorder.num}}</div>
                    <div>{{accessoryorder.pay}}</div>
                    <div>{{accessoryorder.sum}}</div>
                    <div style="border: 1px solid #000" class="p-2">{{ accessoryorder.state }}</div>
                    <div><button @click="gogo" class="px-2 py-3 rounded-lg bg-black text-white">編輯</button></div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import DialogAccessoryorder from './dialog/DialogAccessoryorder.vue'
export default {
    components:{
        DialogAccessoryorder
    },
    data() {
        return {
            dialogs: false,
            accessoryorders:[
                {accessory:'001',userid:'111',num:'1',pay:'信用卡',sum:'2700',state: '已隱藏'},
                {accessory:'002',userid:'111',num:'1',pay:'信用卡',sum:'2700',state: '未處理'},
                {accessory:'003',userid:'111',num:'1',pay:'信用卡',sum:'2700',state: '已隱藏'},
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