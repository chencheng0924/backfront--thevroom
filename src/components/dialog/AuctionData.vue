<template>
    <form style="min-width:900px">
        <div class="w-full h-[50px] text-black text-2xl text-center">
            <h1>---拍賣會資料---</h1>
        </div>

        <div class="flex w-full justify-around text-lg mb-5">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">拍賣場編號:</div>
                <input type="text" class="border-black border rounded-md w-[350px]" v-model="one">
            </div>
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">賣家會員編號:</div>
                <input type="text" class="border-black border rounded-md w-[350px]" v-model="two">
            </div>
        </div>

        <div class="flex w-full justify-around text-lg mb-5">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">開始時間:</div>
                <input type="text" class="border-black border rounded-md w-[350px]" v-model="three">
            </div>
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">持續天數:</div>
                <input type="text" class="border-black border rounded-md w-[350px]" v-model="four">
            </div>
        </div>

        <div class="flex w-full justify-around text-lg mb-8">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">車輛名稱:</div>
                <input type="text" class="border-black border rounded-md w-[350px]" v-model="five">
            </div>
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">底價:</div>
                <input type="text" class="border-black border rounded-md w-[350px]" v-model="six">
            </div>
        </div>

        <div class="flex w-full justify-around text-lg mb-8">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">車輛描述:</div>
                <textarea cols="50" rows="5" class="border-black border rounded-md w-full" placeholder="請輸入內容" v-model="seven"></textarea>
            </div>
        </div>

        <div class="flex w-full justify-start text-lg ml-12 mb-8">
            <uploadimage/>
        </div>

        <div class="flex w-full justify-end text-lg mb-3">
            <button @click.prevent="gogoro2" class="border px-3 py-1">取消</button>
            <div class="bg-blue-600 ml-5"><button @click.prevent="updatebtn" class="px-3 py-1 text-white">確認</button></div>
        </div>
    </form>
</template>

<script>
import uploadimage from '../uploadimage.vue'
export default {
    components:{
        uploadimage
    },
    props: ['aucid'],
    async created () {
        const fd = new FormData()
        fd.append('aucid', this.aucid)
        const res = await fetch('http://localhost:8080/backfront-php/SelectAuctionData.php', {
            method: 'POST',
            body: fd
        });
        const resdata = await res.json();
        this.auc = resdata
        console.log(this.auc[0]);
        this.one = this.auc[0][0];
        this.two = this.auc[0][1];
        this.three = this.auc[0][10];
        this.four = this.auc[0][11];
        this.five = this.auc[0][4] + this.auc[0][5];
        this.six = this.auc[0][9];
        this.seven = this.auc[0][6]
    },
    data() {
        return {
            close: false,
            auc: [],
            one: '', 
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: ''
        }
    },
    methods:{
        gogoro2(){
            this.$emit('gogoro', this.close)
        },
        updatebtn(){
            const auctiondata = new FormData()
            auctiondata.append('DURATION', this.four)
            auctiondata.append('RESERVEPRICE', this.six)
            auctiondata.append('DESCRIPTION', this.seven)
            auctiondata.append('AUCTIONID', this.one)
            fetch('http://localhost:8080/backfront-php/UpdateDialogAuction.php', {
                method: 'POST',
                body: auctiondata
            })
        }
    }
}
</script>