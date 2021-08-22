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
                    <div class="w-11/12 flex justify-center">文章編號</div>
                    <div class="w-11/12 flex justify-center">留言ID</div>
                    <div class="w-11/12 flex justify-center">留言日期</div>
                    <div class="w-11/12 flex justify-center">留言內容</div>
                    <div class="w-11/12 flex justify-center">檢舉原因</div>
                    <div class="w-11/12 flex justify-center">狀態</div>
                    <div class="w-11/12 flex justify-center">編輯</div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-around items-center my-5" v-for="forum in forums" :key="forum.article">
                    <div class="w-11/12 flex justify-center">{{forum[2]}}</div>
                    <div class="w-11/12 flex justify-center">{{forum[0]}}</div>
                    <div class="w-11/12 flex justify-left">{{forum[5]}}</div>
                    <div class="w-11/12 flex justify-center">{{forum[4]}}</div>
                    <div class="w-11/12 flex justify-center">{{forum[7]}}</div>
                    <!-- <div style="border:1px solid red" class="w-11/12 flex justify-center">{{forum[6]}}</div> -->
                    <!-- <div style="border: 1px solid red" class="w-11/12 flex justify-center">{{forum[5]}}</div> -->
                    <!-- <div style="border: 1px solid #000" class="p-2">{{ forum.state }}</div> -->
                    <div class="w-11/12 flex justify-center">  <button class="btn w-[80px] h-[40px] bg-green-500 text-white rounded-xl" @click="toggle(forum[0], $event)" :class="{change: arr.includes(forum[0], $event)}">{{arr.includes(forum[0]) ? 'OFF' : 'ON'}}</button></div>
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
        console.log(resdata)
        this.forums = resdata

        const repzero = await fetch('http://localhost:8080/backfront-php/SelectForumreplyZero.php')
        const checkzero = await repzero.json()
        console.log(checkzero);

        const repone = await fetch('http://localhost:8080/backfront-php/SelectForumreplyOne.php')
        const checkone = await repone.json()
        checkone.forEach(item => {
            this.arr.push(item.FORUMREPLYID)
        })
    },
    data() {
        return {
            dialogs: false,
            forums:[],
            arr: [],
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
                this.repid = id
                console.log(this.repid);
                console.log(this.arr.indexOf(id))
                const index = this.arr.indexOf(id)
                this.arr.splice(index, 1)

                e.target.innerText = 'ON'

                const formdata = new FormData();
                formdata.append('FORUMREPLYID', this.repid);
                fetch('http://localhost:8080/backfront-php/UpdateForumreplyOn.php', {
                method: 'POST',
                body: formdata
            })
            } else {
                this.repid = id
                console.log(this.repid);
                console.log(this.arr);
                this.arr.push(id)

                e.target.innerText = 'OFF'

                const formdata = new FormData();
                formdata.append('FORUMREPLYID', this.repid);
                fetch('http://localhost:8080/backfront-php/UpdateForumreplyOff.php', {
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