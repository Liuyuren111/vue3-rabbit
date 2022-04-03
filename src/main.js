import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "normalize.css";
import "@/assets/scsss/common.scss"
createApp(App).use(router).mount('#app')
