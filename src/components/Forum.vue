<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">討論區管理(檢舉留言)</div>
            <dialoggo :show="dialogs">
                <div class="flex flex-col w-full justify-around">
                    <div class="w-full mb-5 bg-black">
                        <div class="text-2xl text-white text-center">會員管理資料</div>
                    </div>
                    <div class="flex justify-between">
                        <dialog-member @gogoro='close' :repid="repid"/>
                    </div>
                </div>
            </dialoggo>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-11/12 flex flex-col justify-center">
                <div class="flex text-xl w-full justify-around items-center mb-3">
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">文章編號</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">留言ID</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">留言日期</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">留言內容</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">檢舉原因</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">狀態</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">編輯</div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-around items-center my-5" v-for="forum in reply" :key="forum.article">
                    <div class="w-11/12 flex justify-center">{{forum[2]}}</div>
                    <div class="w-11/12 flex justify-center">{{forum[0]}}</div>
                    <div class="w-11/12 flex justify-left">{{forum[5]}}</div>
                    <div class="w-11/12 flex justify-center">{{forum[4]}}</div>
                    <div class="w-12/12 flex justify-center">{{forum[11]}}</div>
                    <div class="w-11/12 flex justify-center">{{forum[6]}}</div>
                    <!-- <div style="border: 1px solid red" class="w-11/12 flex justify-center">{{forum[5]}}</div> -->
                    <!-- <div style="border: 1px solid #000" class="p-2">{{ forum.state }}</div> -->
                    <div class="w-11/12 flex justify-center">  <button class="btn w-[80px] h-[40px] bg-red-600 text-white rounded-xl" @click="toggle(forum[0], $event)" :class="{change: arr.includes(forum[0], $event)}">OFF</button></div>
                    <div class="w-11/12 flex justify-center"><button @click="gogo(forum[0])" class="px-2 py-3 rounded-lg bg-black text-white">檢視</button></div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import DialogMember from './dialog/DialogMember.vue'
export default {
    components:{
        DialogMember
    },
    async created () {
        const res = await fetch('http://localhost:8080/backfront-php/ReportReply.php')
        const resdata = await res.json()
        // console.log(res)
        console.log(resdata)
        this.reply = resdata
        // this.forums = this.forums1.push(resdata)
        // console.log(this.reply)
        // console.log(typeof this.reply);
    },
    data() {
        return {
            dialogs: false,
            reply:[],
            arr: [],
            forums:[
                {article:'001',user:'Shen',date:'2021/04/21',type:'0',name:'新手如何挑車',reason:'性騷擾',state: '已隱藏'},
                {article:'002',user:'Chen',date:'2021/04/21',type:'1',name:'新手如何挑車',reason:'性騷擾',state: '未處理'},
                {article:'003',user:'Fred',date:'2021/04/21',type:'0',name:'新手如何挑車',reason:'性騷擾',state: '已隱藏'},
            ],
            repid:''
        }
    },
    methods:{
        gogo(r){
            this.dialogs = true
            this.repid = r
            console.log(this.repid)
        },
        close(){
            this.dialogs = false
        },
        toggle(id, e){
            if(this.arr.includes(id)){
                console.log(this.arr.indexOf(id))
                const index = this.arr.indexOf(id)
                this.arr.splice(index, 1)
                e.target.innerText = 'OFF'
            } else {
                console.log(this.arr);
                this.arr.push(id)
                e.target.innerText = 'ON'
            }
        }
    }
}
</script>
<style scoped>
.change{
    background-color: #10B981;
}
</style>