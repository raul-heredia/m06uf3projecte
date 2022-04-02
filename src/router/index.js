import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent'
import AddService from '@/components/AddService'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HeaderComponent',
        component: HeaderComponent
    },
    {
        path: '/add-service',
        name: 'Add Service',
        component: AddService
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')