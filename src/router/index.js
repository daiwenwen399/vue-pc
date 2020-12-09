import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@store'

const Home = () => import(/* webpackChunkName: "Home" */'@views/Home')
const Login = () => import(/* webpackChunkName: "Login" */'@views/Login')
const Register = () => import(/* webpackChunkName: "Register" */'@views/Register')
const Search = () => import(/* webpackChunkName: "Search" */'@views/Search')
const Detail = () => import(/* webpackChunkName: "Detail" */'@views/Detail')
const AddCartSuccess = () => import(/* webpackChunkName: "AddCartSuccess" */'@views/AddCartSuccess')
const ShopCart = () => import(/* webpackChunkName: "ShopCart" */'@views/ShopCart')
const Trade = () => import(/* webpackChunkName: "Trade" */'@views/Trade')
const Pay = () => import(/* webpackChunkName: "Pay" */'@views/Pay')
const PaySuccess = () => import(/* webpackChunkName: "PaySuccess" */'@views/PaySuccess')
const Center = () => import(/* webpackChunkName: "Center" */'@views/Center')
const MyOrder = () => import(/* webpackChunkName: "MyOrder" */'@views/Center/myOrder')
const Groupbuy = () => import(/* webpackChunkName: "Groupbuy" */'@views/Center/Groupbuy')

// 重写push\replace方法解决重复点击报错问题
const newPush = VueRouter.prototype.push;
const newReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, oncomplete, onAbort) {
    // 如果想处理失败就处理
    if (oncomplete && onAbort) {
        return newPush.call(this, location, oncomplete, onAbort)
    }
    // 如果不想处理就设置为空函数
    return newPush.call(this, location, oncomplete, () => { })
}

VueRouter.prototype.replace = function (location, oncomplete, onAbort) {
    // 如果想处理失败就处理
    if (oncomplete && onAbort) {
        return newReplace.call(this, location, oncomplete, onAbort)
    }
    // 如果不想处理就设置为空函数
    return newReplace.call(this, location, oncomplete, () => { })
}

// 使用插件
Vue.use(VueRouter)

const router = new VueRouter({
    // 路由模式
    mode: "history",
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/login',
            component: Login,
            // 当组件加载显示时，meta中的参数会传到$route中
            // 当组件不加载显示时，meta中的参数不会传
            meta: {
                isFooterHide: true,
            },
        },
        {
            path: '/register',
            component: Register,
            meta: {
                isFooterHide: true,
            },
        },
        {
            name: 'search',
            // ?: 代表 params 参数是可选的
            path: '/search/:searchContent?',
            component: Search,
        },
        {
            name: "detail",
            path: "/detail/:id",
            component: Detail,
        },
        {
            name: "addcartsuccess",
            path: "/addcartsuccess",
            component: AddCartSuccess,
        },
        {
            name: "shopCart",
            path: "/shopCart",
            component: ShopCart,
        },
        {
            name: "trade",
            path: "/trade",
            component: Trade,
        },
        {
            name: "pay",
            path: "/pay",
            component: Pay,
        },
        {
            name: "paySuccess",
            path: "/paySuccess",
            component: PaySuccess,
        },
        {
            name: "center",
            path: "/center",
            component: Center,
            children: [
                {
                    name: "myOrder",
                    path: "myOrder",
                    component: MyOrder
                },
                {
                    name: "groupBuy",
                    path: "groupBuy",
                    component: Groupbuy
                },
                {
                    path: '',
                    redirect: '/center/myOrder'
                },
            ]
        },
    ],
})

const authorityList = ['/trade', '/pay', '/paySuccess', '/center']

router.beforeEach((to, from, next) => {
    if (authorityList.indexOf(to.path) > -1 && !store.state.user.token) next("/login")
    else next()
})

export default router