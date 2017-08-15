import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Create from '@/components/Create'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: MainPage
        },
        {
            path: '/create',
            component: Create
        },
        {
            path: '/article',
            component: ArticleDetail
        }
    ]
})