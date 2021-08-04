<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">會員資料管理</div>
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
                    <div class="w-[60px]">會員ID</div>
                    <div class="w-[60px]">姓名</div>
                    <div class="w-[60px]">性別</div>
                    <div class="w-[60px]">生日</div>
                    <div class="w-[150px]">電子信箱</div>
                    <div class="w-[60px]">狀態</div>
                    <div class="w-[60px]"><button>檢視</button></div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-around items-center my-5" v-for="man in member" :key="man.id">
                    <div class="w-[60px]">{{man.id}}</div>
                    <div class="w-[60px]">{{man.name}}</div>
                    <div class="w-[60px]">{{man.gender}}</div>
                    <div class="w-[60px]">{{man.bir}}</div>
                    <div class="w-[150px]">{{man.email}}</div>
                    <div class="w-[60px]">已啟用</div>
                    <div class="w-[60px]"><button @click="gogo" class="px-2 py-3 rounded-lg bg-black text-white">編輯</button></div>
                </div>
            </div>
            <div>
                <dialoggo :show="dialogs">
                    <member-data @gogoro='close'/>
                </dialoggo>
            </div>
        </div>
    </div>
</template>

<script>
import MemberData from './dialog/MemberData.vue'
export default {
    components:{
        MemberData
    },
    data() {
        return {
            dialogs: false,
            member:[
                {id:'001',name:'tony',gender:'1',bir:'1992/9/24',email:'abs255667@yahoo.com.tw'},
                {id:'002',name:'allen',gender:'1',bir:'1993/2/5',email:'abs255667@yahoo.com.tw'},
                {id:'003',name:'jessie',gender:'0',bir:'1996/3/9',email:'abs255667@yahoo.com.tw'},
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