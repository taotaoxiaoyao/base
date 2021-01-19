import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
const service = axios.create({
  // baseURL: host,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status === 200) {
      if (res.code !== '200') {
        Message({
          message: res.msg || 'Error',
          type: 'error',
          duration: 2000
        })
        if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
          MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(async() => {
            await store.dispatch('user/resetToken')
            location.reload()
          })
        }
        return Promise.reject(new Error(res.msg || 'Error'))
      } else {
        return Promise.resolve(res)
      }
    } else {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 2000
      })
      return Promise.reject(response)
    }
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.response.data.msg,
      type: 'error',
      duration: 2000
    })
    // if (error.response.status) {
    //   switch (error.response.status) {
    //     // 401: 未登录
    //     // 未登录则跳转登录页面，并携带当前页面的路径
    //     // 在登录成功后返回当前页面，这一步需要在登录页操作。
    //     case 401:
    //       break
    //     // 403 无权限访问
    //     // 清除本地token和清空vuex中token对象
    //     // 跳转登录页面
    //     case 403:
    //       // 清除token
    //       break
    //     // 404请求不存在
    //     case 404:
    //       break
    //     // 其他错误，直接抛出错误提示
    //     default:
    //   }
    // }
    return Promise.reject(error.response)
  }
)

export default service
// 通用接口请求
// export function commonRequest(payload) {
//   const request = {
//     url: payload.url ? payload.url : host.host + payload.api,
//     silence: payload.silence || false
//   }
//   if (payload.method === 'get') {
//     request.params = payload.data || {}
//   } else {
//     request.data = payload.data || {}
//   }
//   return service(request)
// }
