const routes = [
    {
        path: "/",
        beforeEnter: (to, from, next) => {
            if (to.path === "/") { 
                next({ path: "/list"})
            }
        }
    },
    {
        path: "/list",
        component: function(resolve) {
             require(['../views/list'], resolve);
        },
        name: 'list'
    },
    {
        path: "/detail/:id",
        component: function(resolve) {
             require(['../views/detail'], resolve);
        },
    },
    {
        path: "/payOrder",
        component: function(resolve) {
             require(['../views/payOrder'], resolve);
        },
        name: "payOrder"
    }, 
    {
        path: "/address",
        component:  function(resolve) {
             require(['../views/address'], resolve);
        },
        name: "address"
    },
     {
        path: "/userInfo",
        component: function(resolve) {
             require(['../views/editUserInfo'], resolve);
        },
        name: "userInfo"
    },
    {
        path: "/orderDetail/:orderId",
        component: function(resolve) {
             require(['../views/orderDetail'], resolve);
        },
        name: "orderDetail"
    },
    {
        path: "/myOrder",
        component: function(resolve) {
             require(['../views/myOrder'], resolve);
        },
        name: "myOrder"
    },
    {
        path: "*",
        component: function(resolve) {
             require(['../views/notFoundPage'], resolve);
        },
    }
]
export default routes