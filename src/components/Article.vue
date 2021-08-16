<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">討論區管理(文章)</div>
            <dialoggo :show="dialogs">
                <div class="flex flex-col w-full justify-around">
                    <div class="w-full mb-5 bg-black">
                        <div class="text-2xl text-white text-center">討論區管理(文章)</div>
                    </div>
                    <div class="flex justify-between">
                        <!-- <uploadimage class="mr-3" /> -->
                        <dialog-article @gogoro='close' :artid="artid"/>
                        <!-- v-for="forum in forums" :key="forum.id" v-bind="forum" -->
                    </div>
                </div>
            </dialoggo>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-11/12 flex flex-col justify-center">
                <div class="flex text-xl w-full justify-around items-center mb-3">
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">文章編號</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">發文者會員ID</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">發文日期</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">主題類別</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">主題名稱</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">是否啟用</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid #000">編輯</div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="mt-3 w-full h-[650px] flex flex-col overflow-auto">
                    <div class="w-full flex text-lg justify-around items-center my-5" v-for="forum in forums" :key="forum.article">
                        <div class="w-11/12 flex justify-center">{{forum[0]}}</div>
                        <div class="w-11/12 flex justify-center">{{forum[1]}}</div>
                        <div class="w-11/12 flex justify-center">{{forum[2]}}</div>
                        <div class="w-11/12 flex justify-center">{{forum[4]}}</div>
                        <div class="w-11/12 flex justify-center">{{forum[5]}}</div>
                        <div class="w-11/12 flex justify-center">
                            <button class="btn w-[80px] h-[40px] bg-red-600 text-white rounded-xl" @click="toggle(forum[0], $event)" :class="{change : arr.includes(forum[0], $event)}">OFF</button>
                        </div>
                        <div class="w-11/12 flex justify-center">
                            <button @click="gogo(forum[0])" class="w-[80px] h-[40px] rounded-lg bg-black text-white">檢視</button>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
// import uploadimage from './uploadimage.vue'
import DialogArticle from './dialog/DialogArticle.vue'
export default {
    components:{
        DialogArticle
    },
    async created () {
        const res = await fetch('http://localhost:8080/phpfile/SelectArticle.php')
        const resdata = await res.json()
        console.log(res)
        console.log(resdata)
        this.forums = [...resdata]
        // this.forums = this.forums1.push(resdata)
        console.log(this.forums)
    },
    data() {
        return {
            dialogs: false,
            // forums:[
            //     {article:'001',user:'Shen',date:'2021/04/21',type:'0',name:'新手如何挑車',state: '啟用'},
            //     {article:'002',user:'Chen',date:'2021/04/21',type:'1',name:'新手如何挑車',state: '未啟用'},
            //     {article:'003',user:'Fred',date:'2021/04/21',type:'0',name:'新手如何挑車',state: '啟用'},
            // ],
            forums: [],
            arr: [],
            artid: ''
        }
    },
    methods:{
        gogo(a){
            this.dialogs = true
            this.artid = a
            console.log(this.artid)
            // const fd = new FormData()
            // fd.append('artID', a)
            // fetch('http://localhost:8080/phpfile/SelectDiologArticle.php', {
            //     method: 'POST',
            //     body: fd
            // })
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