import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

import "normalize.css";
import "@/assets/scss/common.scss"

import UI from '@/library/UI'

const app = createApp(App)
const store = createPinia()

store.use(piniaPluginPersist)
app.use(router)
app.use(store)
app.use(UI)
app.mount('#app')
