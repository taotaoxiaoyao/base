import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'
// import methods from '@/mixin/methods'

NProgress.configure({ showSpinner: false })
// const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async(to, from, next) => {
  // console.log('to, from: ', to, from)
  NProgress.start()
  document.title = getPageTitle(to.meta.title)
  // 待删除
  next()
  // 待删除
  // const hasToken = getToken()
  // if (hasToken) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     const hasRoles = store.getters.roles && store.getters.roles.length > 0
  //     if (hasRoles) {
  //       next()
  //     } else {
  //       try {
  //         // 获取用户权限信息，如: ['admin'] 或 ['developer','editor']
  //         const { roles } = await store.dispatch('user/getInfo')
  //         // 基于role获取权限菜单
  //         const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
  //         // 生成动态路由
  //         router.addRoutes(accessRoutes)
  //         next({ ...to, replace: true })
  //       } catch (error) {
  //         // 清除store和cookie中token
  //         await store.dispatch('user/resetToken')
  //         Message.error(error || 'Has Error')
  //         next(`/login?redirect=${to.path}`)
  //         NProgress.done()
  //       }
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     console.log('if: ', to.path, from.path, store.getters.permission_routes)
  //     // to的页面在白名单
  //     if (flag) {
  //       next({ ...to, replace: true })
  //     } else {
  //       next()
  //     }
  //   } else {
  //     console.log('else: ', to.path, from.fullPath, `/login?redirect=${encodeURIComponent(to.path)}`)
  //     const fullpath = from.fullPath
  //     if (fullpath !== `/login?redirect=${encodeURIComponent(to.path)}`) {
  //       if (from.path === '/login') {
  //         router.replace(`/login?redirect=${to.path}`)
  //       } else {
  //         next(`/login?redirect=${to.path}`)
  //       }
  //     }
  //     // to的页面无权限
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
