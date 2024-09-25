import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
const pinia = createPinia()

import router from './router.js'

createApp(App).use(pinia).use(router).mount('#app')
