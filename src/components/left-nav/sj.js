const menuList = [
    {
        title: '首页',
        key: '/home',
        icon: 'home'
    },
    {
        title: '首页2',
        key: '/product',
        icon: 'home',
        children: [
            {
                title: '首页3',
                key: '/category',
                icon: 'home',
            },
            {
                title: '首页4',
                key: '/charts',
                icon: 'home',
            }
        ]
    },
    {
        title: '首页5',
        key: '/user',
        icon: 'home'
    },
]

export default menuList