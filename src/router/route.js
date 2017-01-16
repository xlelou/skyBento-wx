const routes = [
    {
        path: "/list",
        component: require('../views/list'),
        name: 'list'
    },
    {
        path: "/detail/:id",
        component: require('../views/detail'),
    },
    {
        path: "/payOrder",
        component: require('../views/payOrder'),
        name: "payOrder"
    },
    {
        path: "*",
        component: require('../views/notFoundPage')
    }
]
export default routes