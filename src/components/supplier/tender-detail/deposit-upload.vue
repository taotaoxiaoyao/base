<template>
  <el-dialog
    title="保证金附件上传"
    :visible.sync="dialogDepositUploadVisible"
    class="dialog-lg"
  >
    <el-row class="header-group">
      <span class="txt-title">基本信息</span>
    </el-row>
    <el-row class="detail-wrapper">
      <el-col :span="24">
        <el-row class="txt-group">
          <el-row class="txt-label">招标邀请</el-row>
          <el-row class="txt-content">2020-11-16</el-row>
        </el-row>
      </el-col>
      <el-col :span="24">
        <el-row class="txt-group">
          <el-row class="txt-label">保证金要求</el-row>
          <el-row class="txt-content">公开招标</el-row>
        </el-row>
      </el-col>
      <el-col :span="24">
        <el-row class="txt-group">
          <el-row class="txt-label">保证金附件</el-row>
          <el-row class="txt-content">
            <el-upload
              class="upload-wrapper"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="depositUploadForm.fileList"
            >
              <el-button size="small" icon="el-icon-upload" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogTenderReceiptVisible = false">取 消</el-button>
      <el-button type="primary" size="small" @click="dialogTenderReceiptVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'DepositUpload',
  props: {
    dialogDepositUploadVisible: {
      type: Boolean,
      default: () => false
    },
    depositUploadForm: {
      type: Object,
      default: () => {
      }
    },
    rules: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-group {
    padding: 0 10px;
    margin-top: 10px;
    margin-bottom: 15px;
    display: flex;
    border-left: 2px solid #409EFF;

    .txt-title {
      flex: 1;
      font-size: 14px;
      color: #313303;
      line-height: 24px;
    }
  }

  .detail-wrapper {
    border: 1px solid #EBEEF5;
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #fff;
      left: 0;
      bottom: 0;
    }

    .txt-group {
      display: flex;
      line-height: 30px;

      .txt-label, .txt-content {
        font-size: 14px;
        padding: 5px 10px;
        border-bottom: 1px solid #EBEEF5;
      }

      .txt-label {
        background-color: #f5f7fa;
        color: #313303;
        flex: 0 0 150px;
        text-align: center;
      }

      .txt-content {
        flex: 1;
        color: #606266;
      }
    }
  }

  .detail-wrapper_form {
    border: 1px solid #EBEEF5;
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #fff;
      left: 0;
      bottom: 0;
    }

    .txt-group {
      display: flex;
      align-items: center;
      line-height: 30px;

      .txt-label, .txt-content {
        font-size: 14px;
        padding: 5px 10px;
        border-bottom: 1px solid #EBEEF5;
      }

      .txt-label {
        color: #313303;
        flex: 0 0 150px;
        text-align: center;
      }

      .txt-content {
        flex: 1;
        color: #606266;
        border-left: 1px solid #EBEEF5;

        .form-wrapper {
          display: flex;

          .input-group {
            padding: 0 10px;

            ::v-deep .el-form-item__label {
              text-align: center;
              display: block;
              float: none;
            }

            ::v-deep .el-form-item__content {
              .el-input {
                margin-bottom: 10px;
              }

              .txt-src {
                display: inline-block;
                min-width: 150px;
              }
            }

            .upload-wrapper {
              margin-bottom: 10px;
              text-align: center;
            }
          }
        }

        .txt-tips {
          color: #99a9bf;
          margin-top: 0;
        }
      }
    }
  }

</style>
