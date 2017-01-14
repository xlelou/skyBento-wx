import list from '../views/list'
import detail from '../views/detail'
import notFoundPage from '../views/notFoundPage'

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
        path: "*",
        component: notFoundPage
    }
]
export default routes