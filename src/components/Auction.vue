<template>
    <div>
        <div class="flex justify-between m-10">
            <div class="text-2xl">拍賣會管理</div>
            <div>
                <dialoggo :show="dialogs">
                    <auction-data @gogoro='close' :aucid="aucid"/>
                </dialoggo>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-11/12 flex flex-col justify-center">
                <div class="flex text-xl w-full justify-around items-center mb-3">
                    <div class="w-11/12 flex justify-center">拍賣會編號</div>
                    <div class="w-11/12 flex justify-center">拍賣會名稱</div>
                    <div class="w-11/12 flex justify-center">開始時間</div>
                    <div class="w-11/12 flex justify-center">持續天數</div>
                    <div class="w-11/12 flex justify-center">狀態</div>
                    <div class="w-11/12 flex justify-center"><button>檢視</button></div>
                </div>
                <div class="bg-black h-[2px]"></div>
                <div class="mt-3 w-full h-[650px] flex flex-col overflow-auto">
                    <div class="w-full flex text-lg justify-around items-center my-5" v-for="item in auction" :key="item.id">
                        <div class="w-11/12 flex justify-center">{{item[0]}}</div>
                        <div class="w-11/12 flex justify-center">{{item[2]}}</div>
                        <div class="w-11/12 flex justify-center">{{item[10]}}</div>
                        <div class="w-11/12 flex justify-center">{{item[11]}}</div>
                        <div class="w-11/12 flex justify-center">
                            <button class="btn w-[80px] h-[40px] bg-green-500 text-white rounded-xl" @click="toggle(item[0], $event)" :class="{change : arr.includes(item[0], $event)}">{{arr.includes(item[0]) ? 'OFF' : 'ON'}}</button>
                        </div>
                        <div class="w-11/12 flex justify-center"><button @click="gogo(item[0])" class="px-2 py-3 rounded-lg bg-black text-white">編輯</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AuctionData from './dialog/AuctionData.vue'
export default {
    components:{
        AuctionData
    },
    async created () {
        const res = await fetch('http://localhost:8080/backfront-php/SelectAuction.php')
        const resdata = await res.json()
        console.log(res)
        console.log(resdata)
        this.auction = resdata
        // this.forums = this.forums1.push(resdata)
        console.log(this.auction)

        const aucone = await fetch('http://localhost:8080/backfront-php/SelectAuctionOne.php')
        const auccheckone = await aucone.json()
        auccheckone.forEach(list => {
            this.arr.push(list.AUCTIONID)
        })
    },
    data() {
        return {
            dialogs: false,
            auction: [],
            arr: [],
            aucid: ''
        }
    },
    methods:{
        gogo(e){
            this.dialogs = true
            this.aucid = e
            console.log(this.aucid);
        },
        close(){
            this.dialogs = false
        },
        toggle(id, e){
            if(this.arr.includes(id, e)){
                this.aucid = id
                const index = this.arr.indexOf(id)
                this.arr.splice(index, 1)

                e.target.innerText = 'ON'

                const formdata = new FormData();
                formdata.append('AUCTIONID', this.aucid);
                fetch('http://localhost:8080/backfront-php/UpdateAuctionOn.php', {
                method: 'POST',
                body: formdata
            })
            }else{
                this.aucid = id
                this.arr.push(id)

                e.target.innerText = 'OFF'

                const formdata = new FormData();
                formdata.append('AUCTIONID', this.aucid);
                fetch('http://localhost:8080/backfront-php/UpdateAuctionOff.php', {
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