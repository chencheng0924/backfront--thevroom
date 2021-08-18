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
                        <dialog-member @gogoro='close'/>
                    </div>
                </div>
            </dialoggo>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-11/12 flex flex-col justify-center">
                <div class="flex text-xl w-full justify-around items-center mb-3">
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red">文章編號</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red">留言ID</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red">留言日期</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red">留言內容</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red">檢舉原因</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red">狀態</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red">編輯</div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="w-full flex text-lg justify-around items-center my-5" v-for="list in reports" :key="list">
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red">{{list[2]}}</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red">{{list[0]}}</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red">{{list[5]}}</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red">{{list[4]}}</div>
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red">{{list[11]}}</div>
                    <!-- <div class="w-11/12 flex justify-center" style="border: 1px solid red">{{list[]}}</div> -->
                    <div class="w-11/12 flex justify-center" style="border: 1px solid red"><button @click="gogo" class="w-[80px] h-[40px] rounded-lg bg-black text-white">檢視</button></div>
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
        const res = await fetch('http://localhost:8080/backfront-php/test.php');
        const resdata = await res.json();
        console.log(res);
        console.log(resdata);
        this.reports = resdata;
        console.log(this.reports);
    },
    data() {
        return {
            dialogs: false,
            // massagecontent: '',
            reports: []
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