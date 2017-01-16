import list from '../views/list'
import detail from '../views/detail'
import notFoundPage from '../views/notFoundPage'
import payOrder from '../views/payOrder'

const routes = [
    {
        path: "/list",
        component: list,
        name: 'list'
    },
    {
        path: "/detail/:id",
        component: detail,
    },
    {
        path: "/payOrder",
        component: payOrder,
    },
    {
        path: "*",
        component: notFoundPage
    }
]
export default routes