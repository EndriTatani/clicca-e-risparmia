import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Luce from '/src/components/Luce.vue'
import Gas from '/src/components/Gas.vue'
import Telefonia from '/src/components/Telefonia.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/luce',
        name: 'Luce',
        component: Luce,
    },
    {
        path: '/gas',
        name: 'Gas',
        component: Gas,
    },
    {
        path: '/telefonia',
        name: 'Telefonia',
        component: Telefonia,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router