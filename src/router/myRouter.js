import Router from 'vue-router';
//首页
import index from '../components/index/index.vue'
//个人中心首页
const weHead = () => import("../components/we/weHead.vue")
//登录界面
const login = () => import("../components/weLink/login.vue")
//个人信息设置
const myself = () => import("../components/weLink/myself.vue")
//计划
const plan = () => import("../components/weLink/plan.vue")
//开课通知
const kaike = () => import("../components/weLink/kaike.vue")
//其他登录方式
const otherLogin = () => import("../components/weLink/otherLogin.vue")
//修改密码
const updatePsw = () => import("../components/weLink/updatePsw.vue")
//用户注册
const newUser = () => import("../components/weLink/newUser.vue")
//登录方式-验证码
const yzm = () => import("../components/weLink/yzm.vue")
//登录方式-密码
const paw = () => import("../components/weLink/paw.vue")
//在线课堂
const classroom = () => import("../components/classroom/classroom.vue")

let router = new Router({
    model: 'history',
    routes: [{
            path: '',
            redirect: '/index',
        },
        {
            path: '/index',
            name: "index",
            component: index,
            meta: {
                title: "首页"
            }
        },
        {
            path: '/weHead',
            name: "weHead",
            component: weHead,
            meta: {
                title: "我的"
            }
        },
        {
            path: '/login',
            name: "login",
            component: login,
            meta: {
                title: "用户登录"
            }
        },
        {
            path: '/myself',
            name: "myself",
            component: myself,
            meta: {
                title: "个人信息中心"
            }
        },
        {
            path: '/plan',
            name: "plan",
            component: plan,
            meta: {
                title: "计划"
            }
        },
        {
            path: '/kaike',
            name: "kaike",
            component: kaike,
            meta: {
                title: "开课申请"
            }
        },
        {
            path: '/otherLogin',
            name: "otherLogin",
            component: otherLogin,
            meta: {
                title: "其他登录方式"
            },
            children: [{
                    path: '/yzm',
                    name: "yzm",
                    component: yzm
                },
                {
                    path: '/paw',
                    name: "paw",
                    component: paw
                },
            ]
        },
        {
            path: '/updatePsw',
            name: "updatePsw",
            component: updatePsw,
            meta: {
                title: "修改密码"
            }
        },
        {
            path: '/newUser',
            name: "newUser",
            component: newUser,
            meta: {
                title: "用户注册"
            }
        },
        {
            path: '/classroom',
            name: "classroom",
            component: classroom,
            meta: {
                title: "在线课堂"
            }
        },
    ]
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//     if (to.path === '/otherLogin') {
//         next();
//     } else {
//         let token = localStorage.getItem('Authorization');
//         console.log(token)
//         if (!token) {
//             next('/otherLogin');
//             console.log("aa")
//         } else {
//              next();
//         }
//     }
// });
export default router;