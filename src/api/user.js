// import request from '@/utils/request'
import methods from '@/mixin/methods'

export function login(data) {
  return methods.commonRequest({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return methods.commonRequest({
    api: '/vue-admin-template/user/info',
    method: 'get',
    data: { token }
  })
}

export function logout() {
  return methods.commonRequest({
    api: '/vue-admin-template/user/logout',
    method: 'post',
    data: {}
  })
}
