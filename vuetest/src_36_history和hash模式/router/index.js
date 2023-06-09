//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//创建并暴露一个路由器
const router = new VueRouter({
    mode:'history',
    routes: [
        //一级路由
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {
                isAuth: true,
                title: '关于'
            }
        },
        //二级路由
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {
                title: '主页'
            },
            children: [{

                name: 'xinwen',
                path: 'news',
                component: News,
                meta: {
                    isAuth: true,
                    title: '新闻'
                },
                // beforeEnter: (to, from, next) => {
                //     console.log('新闻路由守卫', to, from);
                //     if (to.meta.isAuth) { //判断是否需要权限
                //         if (localStorage.getItem('school') === 'kuluomi') {
                //             // document.title = to.meta.title || '库洛米'
                //             next()
                //         } else {
                //             alert('学校名不对,无权限')
                //         }
                //     } else {
                //         // document.title = to.meta.title || '库洛米'
                //         next()
                //     }
                // }
            },
            {
                name: 'xiaoxi',
                path: 'message',
                component: Message,
                meta: {
                    isAuth: true,
                    title: '消息'
                },
                children: [{
                    name: 'xiangqing',
                    meta: {
                        title: '详情'
                    },
                    // path: 'detail/:id/:title',//param得占位
                    path: 'detail',
                    component: Detail,
                    //props的第一种写法，值为对象,该对象中所有的key-value都会以props的形式传给Detail组件
                    // props:{a:1,b:'hello'}
                    //props的第二种写法，值为布尔值,若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                    // props: true
                    //props的第三种写法，值为函数
                    props($route) {
                        return {
                            id: $route.query.id,
                            title: $route.query.id
                        }
                    }
                }]
            },
            ]
        },
    ]
})
//全局前置路由守卫-每次路由切换之前和初始化时调用
// router.beforeEach((to, from, next) => {
//         console.log('前置路由守卫', to, from);
//         if (to.meta.isAuth) { //判断是否需要权限
//             if (localStorage.getItem('school') === 'kuluomi') {
//                 // document.title = to.meta.title || '库洛米'
//                 next()
//             } else {
//                 alert('学校名不对,无权限')
//             }
//         } else {
//             // document.title = to.meta.title || '库洛米'
//             next()
//         }
//     })

//全局后置路由守卫-每次路由切换之后和初始化时调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from);
    document.title = to.meta.title || '库洛米'
})

export default router