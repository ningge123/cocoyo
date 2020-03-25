import { routes as home } from '$modules/home'
import { routes as auth } from '$modules/auth'
import { routes as cloud } from '$modules/cloud'
import { routes as users } from '$modules/users'
import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './berforEach'

Vue.use(Router)

const AppRoute = {
    path: '/',
    component: () => import('../app'),
    children: [...home, ...cloud, ...users]
}

const AuthRoute = {
    path: '/',
    component: () => import('../root'),
    children: [...auth]
}

const routes = [AppRoute, AuthRoute]

const router = new Router({
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    mode: 'hash'
})

router.beforeEach(beforeEach)

export default router