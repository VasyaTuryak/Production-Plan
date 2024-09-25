import {createRouter, createWebHistory} from 'vue-router'

import Plan from './components/plan.vue'
import AddDesign from './components/addDesign.vue'
import AdditionalInfo from "./components/additionalInfo.vue";

const routes = [
    { path: '/', component: Plan },
    { path: '/add', component: AddDesign },
    { path: '/additionalInfo', component: AdditionalInfo },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
