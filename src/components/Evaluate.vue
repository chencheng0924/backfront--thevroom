<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">線上估價管理</div>
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
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">ID</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">車輛廠牌</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">出廠年份</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">里程數</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">姓名</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">email</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">狀態</div>
                    <!-- <div class="w-11/12 flex justify-center" style="border: 1px solid #000">編輯</div> -->
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-between items-center my-5" v-for="forum in eva" :key="forum">
                    <div class="flex w-11/12 justify-center">{{forum[0]}}</div>
                    <div class="flex w-11/12 justify-center flex-wrap">{{forum[1]}}</div>
                    <div class="flex w-11/12 justify-center flex-wrap">{{forum[2]}}</div>
                    <div class="flex w-11/12 justify-center flex-wrap">{{forum[3]}}</div>
                    <div class="flex w-11/12 justify-center flex-wrap">{{forum[4]}}</div>
                    <div class="flex w-11/12 flex-wrap truncate">{{forum[5]}}</div>
                    <!-- <div class="w-11/12 flex justify-center">{{forum[6]}}</div> -->
                    <!-- <div style="border: 1px solid red" class="w-11/12 flex justify-center">{{forum[5]}}</div> -->
                    <!-- <div style="border: 1px solid #000" class="p-2">{{ forum.state }}</div> -->
                    <div class="w-11/12 flex justify-center">  <button class="btn w-[80px] h-[40px] bg-red-600 text-white rounded-xl" @click="toggle(forum[0], $event)" :class="{change: arr.includes(forum[0], $event)}">未回覆</button></div>
                    <!-- <div class="w-11/12 flex justify-center"><button @click="gogo(forum[0])" class="px-2 py-3 rounded-lg bg-black text-white">檢視</button></div> -->
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
        const res = await fetch('http://localhost:8080/backfront-php/EvaluateBack.php')
        const resdata = await res.json()
        // console.log(res)
        console.log(resdata)
        this.eva = resdata
        // this.forums = this.forums1.push(resdata)
        // console.log(this.reply)
        // console.log(typeof this.reply);
    },
    data() {
        return {
            dialogs: false,
            reply:[],
            arr: [],
            eva: [],
            eid:'',
            status:''
        }
    },
    methods:{
        gogo(e){
            this.dialogs = true
            this.eid = e
            console.log(this.eid)
        },
        close(){
            this.dialogs = false
        },
        toggle(id, e){
            if(this.arr.includes(id)){
                this.eid = id;
                console.log(this.arr.indexOf(id))
                const index = this.arr.indexOf(id)
                this.arr.splice(index, 1)
                e.target.innerText = '未回覆'
                this.status = e.target.innerText
                const fdd = new FormData()
                fdd.append('eid', this.eid)
                fdd.append('status',this.status)
                fetch('http://localhost:8080/backfront-php/UpdateEvaluate.php', {
                method: 'POST',
                body: fdd
            })
            } else {
                console.log(this.arr);
                console.log(id);
                this.eid = id;
                this.arr.push(id)
                e.target.innerText = '已回覆'
                this.status = e.target.innerText
                const fdd = new FormData()
                fdd.append('eid', this.eid)
                fdd.append('status',this.status)
                fetch('http://localhost:8080/backfront-php/hotest.php', {
                method: 'POST',
                body: fdd 
            })
            }
            // e.target.innerText = this.status
            // console.log(e.target.innerText)
            // this.status = e.target.innerText
            // const fdd = new FormData()
            // fdd.append('eid', this.eid)
            // fdd.append('status',this.status)
            // fetch('http://localhost:8080/backfront-php/hotest.php', {
            //     method: 'POST',
            //     body: fdd
            // })
        }
    }
}
</script>
<style scoped>
.change{
    background-color: #10B981;
}
</style>