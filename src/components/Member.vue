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
                    <div class="w-11/12 flex justify-center">會員ID</div>
                    <div class="w-11/12 flex justify-center">姓名</div>
                    <div class="w-11/12 flex justify-center">生日</div>
                    <div class="w-11/12 flex justify-center">電子信箱</div>
                    <div class="w-11/12 flex justify-center">狀態</div>
                    <div class="w-11/12 flex justify-center"><button>檢視</button></div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-around items-center my-5" v-for="member in members" :key="member.id">
                    <div class="w-11/12 flex justify-center">{{member[0]}}</div>
                    <div class="w-11/12 flex justify-center">{{member[4]}}</div>
                    <div class="w-11/12 flex justify-center">{{member[5]}}</div>
                    <div class="w-11/12 flex justify-center">{{member[2]}}</div>
                    <div class="w-11/12 flex justify-center">
                        <button class="btn w-[80px] h-[40px] bg-green-500 text-white rounded-xl" @click="toggle(member[0], $event)" :class="{change : arr.includes(member[0], $event)}">{{arr.includes(member[0]) ? 'OFF' : 'ON'}}</button>
                    </div>
                    <div class="w-11/12 flex justify-center"><button @click="gogo(member[0])" class="w-[80px] h-[40px] rounded-lg bg-black text-white">編輯</button></div>
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
        console.log(this.members)

        const mbone = await fetch('http://localhost:8080/backfront-php/SelectMemberOne.php')
        const mbcheckone = await mbone.json()
        mbcheckone.forEach(list => {
            this.arr.push(list.MEMBERID)
        })
    },
    data() {
        return {
            dialogs: false,
            members: [],
            arr: [],
            userid: ''
        }
    },
    methods:{
        gogo(a){
            this.dialogs = true
            this.userid = a
            console.log(this.userid)
        },
        close(){
            this.dialogs = false
        },
        toggle(id, e){
            if(this.arr.includes(id, e)){
                this.userid = id
                const index = this.arr.indexOf(id)
                this.arr.splice(index, 1)

                e.target.innerText = 'ON'

                const formdata = new FormData();
                formdata.append('MEMBERID', this.userid)
                fetch('http://localhost:8080/backfront-php/UpdateMemberOn.php', {
                method: 'POST',
                body: formdata
                })
            }else{
                this.userid = id
                this.arr.push(id)

                e.target.innerText = 'OFF'

                const formdata = new FormData();
                formdata.append('MEMBERID', this.userid)
                fetch('http://localhost:8080/backfront-php/UpdateMemberOff.php', {
                method: 'POST',
                body: formdata
                })
            }
        }
    }
}
</script>

<style scoped>
.change{
    background-color: #DC2626;
}
</style>