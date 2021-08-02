import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import Dialoggo from './components/dialog/Dialoggo.vue'

const app = createApp(App)

app.component('Dialoggo', Dialoggo)

app.use(router).mount('#app')