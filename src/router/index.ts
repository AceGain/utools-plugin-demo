const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../view/home.vue')
    },
    {
        path: '/other/',
        name: 'other',
        component: () => import('../view/other.vue'),
    }
]

export default routes;
