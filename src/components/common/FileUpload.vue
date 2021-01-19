<template>
  <div class="file-upload">
    <el-row class="upload-wrapper">
      <slot name="input" />
      <el-upload
        class="upload-wrap"
        :action="action"
        :http-request="handleUpload"
        multiple
        :show-file-list="false"
      >
        <el-button size="small" icon="el-icon-upload" type="primary">上传</el-button>
      </el-upload>
      <el-button v-if="value && value.length > 1" size="small" icon="el-icon-download" type="primary" @click="handleZipDownload">打包下载</el-button>
    </el-row>
    <el-row v-if="value && value.length > 0" class="list-group">
      <ul>
        <li v-for="(file, index) in value" :key="index">
          <el-link :underline="false" :href="file.url" download class="txt-title" :title="file.name">{{ file.name }}</el-link>
          <el-link :underline="false" type="primary" class="action" title="预览" icon="el-icon-view" @click="handlePreview(file)" />
          <el-link :underline="false" :href="file.url" download type="primary" class="action" title="下载" icon="el-icon-download" />
          <el-link :underline="false" type="danger" class="action" title="删除" icon="el-icon-delete" @click="handleRemove(file, index)" />
        </li>
      </ul>
    </el-row>
  </div>
</template>

<script>
import { uploadFile, deleteFile } from '@/api/upload-api'
import host from '@/config/url'
export default {
  name: 'FileUpload',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    action: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 文件上传
    async handleUpload(e) {
      try {
        const { file } = e
        const formData = new FormData()
        formData.append('id', file.uid)
        formData.append('name', file.name)
        formData.append('type', file.type)
        formData.append('lastModifiedDate', file.lastModifiedDate)
        formData.append('size', file.size)
        formData.append('file', file)
        const res = (await uploadFile(formData)) || {}
        const fileId = res.data
        this.$message.success(res.msg)
        this.value.push({
          id: file.uid,
          name: file.name,
          type: file.type,
          fileId,
          url: host.host + `/sys/sysFile/download?fileId=${fileId}`
        })
        this.$emit('input', this.value)
      } catch (e) {
        console.log(e)
      }
    },
    // 打包下载
    handleZipDownload() {
      const fileIds = []
      this.value.forEach(file => {
        fileIds.push(file.fileId)
      })
      const url = host.host + `/sys/sysFile/zip`
      const form = document.createElement('form')
      form.setAttribute('method', 'GET')
      form.setAttribute('action', url)
      const input = document.createElement('input')
      input.setAttribute('name', 'fileIds')
      input.setAttribute('value', fileIds.join(','))
      form.appendChild(input)
      document.body.appendChild(form)
      form.submit()
      document.body.removeChild(form)
    },
    // 删除文件
    async handleRemove(file, index) {
      try {
        const params = {
          fileId: file.fileId
        }
        const res = (await deleteFile(params)) || {}
        this.$message.success(res.msg)
        if (this.value && this.value.length > 0) {
          this.value.splice(index, 1)
          this.$emit('input', this.value)
        }
      } catch (e) {
        console.log(e)
      }
    },
    // 图片新窗口打开预览
    handlePreview(file) {
      const { href } = this.$router.resolve({
        path: `/img-view?fileId=${file.fileId}&name=${file.name}`
      })
      console.log('href: ', href)
      window.open(href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.file-upload {
  .upload-wrapper {
    display: flex;
    ::v-deep .el-input {
      margin-right: 10px;
    }
    ::v-deep .el-button {
      margin-left: 10px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .list-group {
    margin-top: 10px;
    ul {
      li {
        display: flex;
        align-items: center;
        line-height: 30px;
        overflow: hidden;
        .txt-title {
          flex: 1;
          margin-right: 10px;
          white-space: nowrap;
          overflow: hidden;
          justify-content: flex-start;
          max-width: 255px;
          text-overflow: ellipsis;
          display: block;
        }
        .action {
          padding: 0 5px;
        }
      }
    }
  }
}
</style>
