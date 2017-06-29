import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index'
Vue.use(Router);

/*const Home = resolve => require(['../pages/homepages/home/home'], resolve);*/
const Index = r => require.ensure([], () => r(require('../pages/homepages/index')), 'group-foo');
const Home = r => require.ensure([], () => r(require('../pages/homepages/home/home')), 'group-foo');
const Details = r => require.ensure([], () => r(require('../pages/details/details')), 'group-foo');
const Shopcart = r => require.ensure([], () => r(require('../pages/shopcart/shopcart')), 'group-foo');
const Register = r => require.ensure([], () => r(require('../pages/register/register')), 'group-foo');
const Lodinup = r => require.ensure([], () => r(require('../pages/register/lodinup')), 'group-foo');
const Speakers = r => require.ensure([], () => r(require('../pages/speakers/speakers')), 'group-foo');
const goodslist = r => require.ensure([], () => r(require('../pages/goodslist/goodslist')), 'group-foo');
const select = r => require.ensure([], () => r(require('../pages/select/select')), 'group-foo');

const router=new Router({
 // mode: 'history',
  routes: [
    {
      path:'/lodinup',
      name:'Lodinup',
      component:Lodinup
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
         {
          path: 'home',
          name: 'home',
          component:Home
        },
        {
          path: 'details',
          name: 'details',
          component:Details
        },  {
          path: 'shopcart',
          name: 'shopcart',
          component: Shopcart,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          }
        },
        {
          path: 'speakers',
          name: 'speakers',
          component: Speakers,
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的

          }
        },
        {
          path:'goodslist',
          component:goodslist,
        },
        {
          path:'select',
          component:select,
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    //console.log(store.state.token);
    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/lodinup',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})
export default router
