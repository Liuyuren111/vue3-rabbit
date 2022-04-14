export const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/pages/LayoutPage'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/pages/home/HomePage.vue'),
            }
        ]
    },

]
