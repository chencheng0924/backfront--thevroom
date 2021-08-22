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
                    <div class="w-11/12 flex justify-center">文章編號</div>
                    <div class="w-11/12 flex justify-center">發文者會員ID</div>
                    <div class="w-11/12 flex justify-center">發文日期</div>
                    <div class="w-11/12 flex justify-center">主題類別</div>
                    <div class="w-11/12 flex justify-center">主題名稱</div>
                    <div class="w-11/12 flex justify-center">是否啟用</div>
                    <div class="w-11/12 flex justify-center">編輯</div>
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
                            <button class="btn w-[80px] h-[40px] bg-green-500 text-white rounded-xl" @click="toggle(forum[0], $event)" :class="{change : arr.includes(forum[0], $event)}">{{arr.includes(forum[0]) ? 'OFF' : 'ON'}}</button>
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
        const res = await fetch('http://localhost:8080/backfront-php/SelectArticle.php')
        const resdata = await res.json()
        console.log(res)
        console.log(resdata)
        this.forums = [...resdata]
        // this.forums = this.forums1.push(resdata)
        console.log(this.forums)

        const testzero = await fetch('http://localhost:8080/backfront-php/SelectZero.php')
        const checkzero = await testzero.json()
        console.log(testzero);
        console.log(checkzero);

        const testone = await fetch('http://localhost:8080/backfront-php/SelectOne.php')
        const checkone = await testone.json()
        console.log(testone);
        console.log(checkone);
        console.log(this.arr);
        // console.log(checkone[0].ARTICLEID)
        // const abc = checkone[0].ARTICLEID
        // console.log(abc);
        checkone.forEach(list => {
            this.arr.push(list.ARTICLEID)
            console.log(list);
        })
    },
    data() {
        return {
            msg: 'ON',
            dialogs: false,
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
            if(this.arr.includes(id, e)){
                this.artid = id
                console.log(this.artid)
                console.log(this.arr.indexOf(id))
                const index = this.arr.indexOf(id)
                this.arr.splice(index, 1)

                e.target.innerText = 'ON'

                const formdata = new FormData();
                formdata.append('ARTICLEID', this.artid);
                fetch('http://localhost:8080/backfront-php/UpdateOn.php', {
                method: 'POST',
                body: formdata
            })
            } else {
                this.artid = id
                console.log(this.artid)
                console.log(this.arr);
                this.arr.push(id)

                e.target.innerText = 'OFF'
                
                const formdata = new FormData();
                formdata.append('ARTICLEID', this.artid);
                fetch('http://localhost:8080/backfront-php/UpdateOff.php', {
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