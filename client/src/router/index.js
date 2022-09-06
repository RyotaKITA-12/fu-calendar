import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Friend from '../views/Friend.vue'
import Group from '../views/Group.vue'
import Search from '../views/Search.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import firebase from "@/firebase/firebase"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/friend',
        name: 'Friend',
        component: Friend
    },
    {
        path: '/group',
        name: 'Group',
        component: Group
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth) {
        // const user = sessionStorage.getItem('user')
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                next({
                    path: '/signin',
                    query: { redirect: to.fullPath }
                })
            } else {
                next()
            }
        })
    } else {
        next()
    }
})

export default router
