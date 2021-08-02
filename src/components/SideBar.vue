<template>
  <div class="flex">
    <div class="w-1/5 h-screen bg-gray-300 flex flex-col items-center justify-evenly">
        <div>
            <div class="text-2xl flex">
                <div>商品管理</div>
            </div>
            <div class="flex flex-col justify-evenly h-[100px]">
                <div class="flex">
                    <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/></svg></div>
                    <div @click="component = 'car-data'">車輛資料管理</div>
                </div>
                <div class="flex">
                    <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 10h3.13c.21.78.67 1.47 1.27 2H5v-2zm14 2h-4.4c.6-.53 1.06-1.22 1.27-2H19v2zm0-4h-5v1c0 1.07-.93 2-2 2s-2-.93-2-2V8H5V5h14v3zm-2 7h-3v1c0 .47-.19.9-.48 1.25-.37.45-.92.75-1.52.75s-1.15-.3-1.52-.75c-.29-.35-.48-.78-.48-1.25v-1H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-4zM5 17h3.13c.02.09.06.17.09.25.24.68.65 1.28 1.18 1.75H5v-2zm14 2h-4.4c.54-.47.95-1.07 1.18-1.75.03-.08.07-.16.09-.25H19v2z"/></svg></div>
                    <div @click="component = 'accessory-data'">配件資料管理</div>
                </div>
            </div>
        </div>
        <div>
            <div class="text-2xl flex">
                <div>訂單管理</div>
                </div>
            <div class="flex flex-col justify-evenly h-[100px]">
                <div class="flex">
                    <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg></div>
                    <div @click="component = 'car-order'">車輛訂單管理</div>
                </div>
                <div class="flex">
                    <div><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><path d="M12,18c3.31,0,6-2.69,6-6s-2.69-6-6-6s-6,2.69-6,6S8.69,18,12,18z M15.44,10c0.26,0.45,0.44,0.96,0.51,1.5h-7.9 c0.07-0.54,0.24-1.05,0.51-1.5H15.44z M15.95,12.5c-0.07,0.54-0.24,1.05-0.51,1.5H8.56c-0.26-0.45-0.44-0.96-0.51-1.5H15.95z M9.38,15h5.24c-0.7,0.61-1.61,1-2.62,1S10.09,15.61,9.38,15z M14.62,9H9.38c0.7-0.61,1.61-1,2.62-1S13.91,8.39,14.62,9z"/></g></g></svg></div>
                    <div @click="component = 'accessory-order'">配件訂單管理</div>
                </div>
            </div>
        </div>
        <div>
            <div class="text-2xl">討論區管理</div>
            <div class="flex flex-col justify-evenly h-[100px]">
                <div class="flex">
                    <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/></svg></div>
                    <div @click="component = 'forum'">檢舉留言管理</div>
                </div>
                <div class="flex">
                    <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/></svg></div>
                    <div @click="component = 'article'">文章管理</div>
                </div>
            </div>
        </div>
        <div class="text-2xl" @click="component = 'member'">會員資料管理</div>
        <div class="text-2xl" @click="component = 'auction'">拍賣會管理</div>
    </div>
    <div class="w-4/5">
        <component :is="component"></component>
    </div>
  </div>
</template>

<script>
import AccessoryData from './AccessoryData.vue'
import AccessoryOrder from './AccessoryOrder.vue'
import Article from './Article.vue'
import Auction from './Auction.vue'
import CarData from './CarData.vue'
import CarOrder from './CarOrder.vue'
import Forum from './Forum.vue'
import Member from './Member.vue'
export default {
    components:{
    'accessory-data': AccessoryData,
    'accessory-order': AccessoryOrder,
    'article': Article,
    'auction': Auction,
    'car-data': CarData,
    'car-order': CarOrder,
    'forum': Forum,
    'member': Member
    },
    data() {
        return {
            component: 'car-data'
        }
    },
}
</script>