import { createRouter, createWebHistory } from 'vue-router'
import Loading from '../views/Loading.vue'
import Home from '../views/Home.vue'


const routes = [{
        path: '/',
        name: 'Loading',
        component: Loading
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    //linkExactActiveClass: "active" // active class for *exact* links.
})

export default router