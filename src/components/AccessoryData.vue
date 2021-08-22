<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">配件資料管理</div>
            <div><button @click="gogo" class="bg-black text-white py-2 px-5 rounded-lg">建立新產品</button></div>
            <dialoggo :show="dialogs">
                <div class="flex flex-col w-full justify-around">
                    <div class="w-full mb-5 bg-black">
                      <div class="text-2xl text-white text-center">新增配件</div>
                    </div>
                    <div class="flex justify-between">
                      <!-- <uploadimage class="mr-3" /> -->
                      <dialog-accessory @gogoro='close'/>
                    </div>
                </div>
            </dialoggo>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-11/12 flex flex-col justify-center">
                <div class="flex text-xl w-full justify-around items-center mb-3">
                    <div class="w-11/12 flex justify-center">商品ID</div>
                    <div class="w-11/12 flex justify-center">項目</div>
                    <div class="w-11/12 flex justify-center">種類</div>
                    <div class="w-11/12 flex justify-center">商品名稱</div>
                    <div class="w-11/12 flex justify-center">價格</div>
                    <div class="w-11/12 flex justify-center">是否啟用</div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="mt-3 w-full h-[650px] flex flex-col overflow-auto">
                    <div class="w-full flex text-lg justify-around items-center mb-8" v-for="accessory in accessorys" :key="accessory">
                        <div class="w-11/12 h-full flex justify-center">{{accessory[0]}}</div>
                        <div class="w-11/12 h-full flex justify-center">{{accessory[1]}}</div>
                        <div class="w-11/12 h-full flex justify-center">{{accessory[2]}}</div>
                        <div class="w-11/12 h-full flex justify-center">{{accessory[3]}}</div>
                        <div class="w-11/12 h-full flex justify-center">{{accessory[4]}}</div>
                        <div class="w-11/12 h-full flex justify-center">
                            <button class="btn w-[80px] h-[40px] bg-green-500 text-white rounded-xl" @click="toggle(accessory[0], $event)" :class="{change : arr.includes(accessory[0], $event)}">{{arr.includes(accessory[0]) ? 'OFF' : 'ON'}}</button>
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
import DialogAccessory from './dialog/DialogAccessory.vue'
export default {
    components:{
        DialogAccessory
    },
    async created () {
        const res = await fetch('http://localhost:8080/backfront-php/SelectAccessory.php');
        const resdata = await res.json();
        console.log(res);
        console.log(resdata);
        this.accessorys = resdata
        // this.cars = resdata.concat(this.new)
        console.log(this.accessorys);

        const testone = await fetch('http://localhost:8080/backfront-php/SelectAccOne.php')
        const checkone = await testone.json()
        console.log(testone);
        console.log(checkone);
        console.log(this.arr);
        // console.log(checkone[0].ARTICLEID)
        // const abc = checkone[0].ARTICLEID
        // console.log(abc);
        checkone.forEach(list => {
            this.arr.push(list.PRODUCTID)
            console.log(list);
        })
    },
    data() {
        return {
            dialogs: false,
            // accessorys:[
            //     {product:'001',type:'車用',name:'輪胎',price:'1980000'},
            //     {product:'002',type:'清潔',name:'雨刷',price:'1980000'},
            //     {product:'003',type:'電子',name:'行車紀錄器',price:'1980000'},
            // ],
            accessorys: [],
            arr: [],
            accid: ''
        }
    },
    methods:{
        gogo(){
            this.dialogs = true
        },
        close(){
            this.dialogs = false
        },
        toggle(id, e){
            if(this.arr.includes(id)){
                this.accid = id
                console.log(this.arr.indexOf(id))
                const index = this.arr.indexOf(id)
                this.arr.splice(index, 1)

                e.target.innerText = 'ON'

                const formdata = new FormData();
                formdata.append('PRODUCTID', this.accid);
                fetch('http://localhost:8080/backfront-php/UpdateAccOn.php', {
                method: 'POST',
                body: formdata
            })
            } else {
                this.accid = id
                console.log(this.arr);
                this.arr.push(id)

                e.target.innerText = 'OFF'

                const formdata = new FormData();
                formdata.append('PRODUCTID', this.accid);
                fetch('http://localhost:8080/backfront-php/UpdateAccOff.php', {
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