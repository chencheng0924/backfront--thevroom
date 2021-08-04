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
                        <uploadimage class="mr-3" />
                        <dialog-article @gogoro='close'/>
                    </div>
                </div>
            </dialoggo>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-11/12 flex flex-col justify-center">
                <div class="flex text-xl w-full justify-around items-center mb-3">
                    <div>文章編號</div>
                    <div>發文者會員ID</div>
                    <div>發文日期</div>
                    <div>主題類別</div>
                    <div>主題名稱</div>
                    <div>是否啟用</div>
                    <div>編輯</div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-around items-center my-5" v-for="forum in forums" :key="forum.article">
                    <div>{{forum.article}}</div>
                    <div>{{forum.user}}</div>
                    <div>{{forum.date}}</div>
                    <div>{{forum.type}}</div>
                    <div>{{forum.name}}</div>
                    <div style="border: 1px solid #000" class="p-2">{{ forum.state }}</div>
                    <div><button @click="gogo" class="px-2 py-3 rounded-lg bg-black text-white">檢視</button></div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import uploadimage from './uploadimage.vue'
import DialogArticle from './dialog/DialogArticle.vue'
export default {
    components:{
        uploadimage,
        DialogArticle
    },
    data() {
        return {
            dialogs: false,
            forums:[
                {article:'001',user:'Shen',date:'2021/04/21',type:'0',name:'新手如何挑車',state: '啟用'},
                {article:'002',user:'Chen',date:'2021/04/21',type:'1',name:'新手如何挑車',state: '未啟用'},
                {article:'003',user:'Fred',date:'2021/04/21',type:'0',name:'新手如何挑車',state: '啟用'},
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