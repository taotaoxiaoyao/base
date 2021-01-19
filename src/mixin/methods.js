import Server from '@/utils/request'
import host from '@/config/url'
export default {
  // 通用接口请求
  commonRequest(payload) {
    const request = {
      method: payload.method || 'post',
      url: payload.url ? payload.url : host.host + payload.api,
      silence: payload.silence || false
    }
    if (payload.method === 'get') {
      request.params = payload.data || {}
    } else {
      request.data = payload.data || {}
    }
    return Server(request)
  },
  getOtherQuery(query) {
    return Object.keys(query).reduce((acc, cur) => {
      if (cur !== 'redirect') {
        acc[cur] = query[cur]
      }
      return acc
    }, {})
  },
  // 组装上传图片/文件参数
  async getUploadList(fileList) {
    const arr = []
    if (!fileList || !fileList.length) return arr
    await Promise.all(fileList.map(async item => {
      const res = await this.pic2url(item)
      item.src = res
      item.id = item.fileId
      arr.push(item)
    }))

    return arr
  },
  // url转base64
  pic2url(file) {
    // const isJPG = file.name
    // const strRegex = /\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/
    const isJPG = file.type
    const strRegex = /^image\//
    return new Promise(resolve => {
      if (strRegex.test(isJPG)) {
        const img = new Image()
        img.crossOrigin = 'Anonymous'
        img.onload = () => {
          let canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          canvas.width = img.width
          canvas.height = img.height
          ctx.drawImage(img, 0, 0, img.width, img.height)
          const dataURL = canvas.toDataURL(file.type, 0.7)
          resolve(dataURL)
          canvas = null
        }
        img.onerror = () => {
          resolve(file.url)
        }
        img.src = file.url
      } else {
        resolve(file.url)
      }
    })
  }
}
