import { createApp } from 'vue'
import './assets/styles/default.css'
import App from './App.vue'

import {createRouter, createWebHashHistory} from 'vue-router'
import routes from './router/index'

// 创建vue实例
const app = createApp(App)

// 创建VueRouter实例
const appRouter = createRouter({
    history: createWebHashHistory(),
    routes
})
// 挂载VueRouter实例
app.use(appRouter)

// 挂载Vue应用
app.mount('#app')
