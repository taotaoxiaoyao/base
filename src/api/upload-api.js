import methods from '@/mixin/methods'
import qs from 'qs'

export function uploadFile(data) {
  return methods.commonRequest({
    api: '/sys/sysFile/upload',
    method: 'post',
    data
  })
}

export function deleteFile(data) {
  return methods.commonRequest({
    api: '/sys/sysFile/del',
    method: 'post',
    data: qs.stringify(data) || {}
  })
}
