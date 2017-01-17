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
        path: "/address",
        component: require('../views/address'),
        name: "address"
    },
     {
        path: "/userInfo",
        component: require('../views/userInfo'),
        name: "userInfo"
    },
    {
        path: "*",
        component: require('../views/notFoundPage')
    }
]
export default routes