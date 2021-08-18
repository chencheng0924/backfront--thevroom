<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">會員資料管理</div>
        </div>
        <div>
            <dialoggo :show="dialogs">
                <member-data @gogoro='close' :userid="userid"/>
            </dialoggo>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-11/12 flex flex-col justify-center">
                <div class="flex text-xl w-full justify-around items-center mb-3">
                    <div style="border: 1px solid red" class="w-11/12 flex justify-center">會員ID</div>
                    <div style="border: 1px solid red" class="w-11/12 flex justify-center">姓名</div>
                    <div style="border: 1px solid red" class="w-11/12 flex justify-center">生日</div>
                    <div style="border: 1px solid red" class="w-11/12 flex justify-center">電子信箱</div>
                    <div style="border: 1px solid red" class="w-11/12 flex justify-center">狀態</div>
                    <div style="border: 1px solid red" class="w-11/12 flex justify-center"><button>檢視</button></div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-around items-center my-5" v-for="member in members" :key="member.id">
                    <div style="border: 1px solid red" class="w-11/12 flex justify-center">{{member[0]}}</div>
                    <div style="border: 1px solid red" class="w-11/12 flex justify-center">{{member[4]}}</div>
                    <div style="border: 1px solid red" class="w-11/12 flex justify-center">{{member[5]}}</div>
                    <div style="border: 1px solid red" class="w-11/12 flex justify-center">{{member[2]}}</div>
                    <div style="border: 1px solid red" class="w-11/12 flex justify-center">已啟用</div>
                    <div style="border: 1px solid red" class="w-11/12 flex justify-center"><button @click="gogo(member[0])" class="w-[80px] h-[40px] rounded-lg bg-black text-white">編輯</button></div>
                </div>
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
    async created () {
        const res = await fetch('http://localhost:8080/backfront-php/SelectMemberData.php')
        const resdata = await res.json()
        console.log(res)
        console.log(resdata)
        this.members = [...resdata]
        // this.forums = this.forums1.push(resdata)
        console.log(this.members)
    },
    data() {
        return {
            dialogs: false,
            // members:[
            //     {id:'001',name:'tony',gender:'1',bir:'1992/9/24',email:'abs255667@yahoo.com'},
            //     {id:'002',name:'allen',gender:'1',bir:'1993/2/5',email:'abs255667@yahoo.com'},
            //     {id:'003',name:'jessie',gender:'0',bir:'1996/3/9',email:'abs255667@yahoo.com'},
            // ]
            members: [],
            userid: ''
        }
    },
    methods:{
        gogo(a){
            this.dialogs = true
            this.userid = a
            console.log(this.userid)
            // const fd = new FormData()
            // fd.append('artID', a)
            // fetch('http://localhost:8080/phpfile/SelectDiologArticle.php', {
            //     method: 'POST',
            //     body: fd
            // })
        },
        close(){
            this.dialogs = false
        }
    }
}
</script>