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
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/LoginPage.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/pages/RegisterPage.vue')
    }

]
