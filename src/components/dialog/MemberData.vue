<template>
    <form style="min-width:400px">
        <div class="w-full h-[50px] text-black text-2xl text-center">
            <h1>---會員資料---</h1>
        </div>

        <div class="flex w-full justify-center text-lg mb-5">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">會員ID:</div>
                <input type="text" class="border-black border rounded-md w-[350px]" v-model="one">
            </div>
        </div>

        <div class="flex w-full justify-center text-lg mb-5">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">密碼:</div>
                <input type="text" class="border-black border rounded-md w-[350px]" v-model="two">
            </div>
        </div>

        <div class="flex w-full justify-center text-lg mb-5">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">姓名:</div>
                <input type="text" class="border-black border rounded-md w-[350px]" v-model="three">
            </div>
        </div>

        <div class="flex w-full justify-center text-lg mb-5">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">電子信箱:</div>
                <input type="text" class="border-black border rounded-md w-[350px]" v-model="four">
            </div>
        </div>

        <div class="flex w-full justify-center text-lg mb-5">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">生日:</div>
                <input type="text" class="border-black border rounded-md w-[350px]" v-model="five">
            </div>
        </div>

        <div class="flex w-full justify-center text-lg mb-8">
            <div class="flex flex-col max-w-[470px]">
                <div class="w-[120px]">地址:</div>
                <input type="text" class="border-black border rounded-md w-[350px]" v-model="six">
            </div>   
        </div>
        <div class="flex w-full justify-center text-lg mb-5">
            <button @click.prevent="gogoro2" class="border px-3 py-1">取消</button>
            <div class="bg-blue-600 ml-5"><button @click.prevent="updatebtn" class="px-3 py-1 text-white">確認</button></div>
        </div>
    </form>
</template>

<script>
export default {
    props: ['userid'],
    async created () {
        const fd = new FormData()
        fd.append('userid', this.userid)
        const res = await fetch('http://localhost:8080/backfront-php/SelectDialogMember.php', {
            method: 'POST',
            body: fd
        });
        const resdata = await res.json();
        this.user = resdata
        console.log(this.user[0]);
        this.one = this.user[0][0];
        this.two = this.user[0][1];
        this.three = this.user[0][4];
        this.four = this.user[0][2];
        this.five = this.user[0][5];
        this.six = this.user[0][3];
        console.log(this.userid);
    },
    data() {
        return {
            close: false,
            user: [],
            one: '', 
            two: '',
            three: '',
            four: '',
            five: '',
            six: ''
        }
    },
    methods:{
        gogoro2(){
            this.$emit('gogoro', this.close)
        },
        updatebtn(){
            console.log(this.one);
            console.log(this.two);
            console.log(this.three);
            console.log(this.four);
            console.log(this.five);
            console.log(this.six);
            const formdata = new FormData();
            formdata.append('PASSWORD', this.two)
            formdata.append('EMAIL', this.four)
            formdata.append('ADDRESS', this.six)
            formdata.append('FULLNAME', this.three)
            formdata.append('BIRTHDAY', this.five)
            formdata.append('MEMBERID', this.one)
            fetch('http://localhost:8080/backfront-php/UpdateDialogMember.php', {
                method: 'POST',
                body: formdata
            })
        }
    }
}
</script>