export default [
    {
        path: 'users/edit',
        component: () => import('./edit'),
    },
    {
        path: 'users/:username',
        component: () => import('./profile'),
        children: [
            {
                path: '/',
                component: () => import('./articles')
            },
            {
                path: 'follow',
                component: () => import('./follow')
            },
            {
                path: 'fans',
                component: () => import('./fans')
            }
        ]
    }
]
