<template>
  <el-dialog
    title="回标"
    :visible.sync="dialogResponseToTenderVisible"
    class="dialog-lg"
  >
    <el-row class="detail-wrapper_form">
      <el-form :model="responseToTenderForm" size="small" :rules="rules">
        <el-col :span="24">
          <el-row class="txt-group">
            <el-row class="txt-label">招标公告</el-row>
            <el-row class="txt-content">
              <p class="txt">xxxx2020</p>
            </el-row>
          </el-row>
        </el-col>
        <el-col :span="24">
          <el-row class="txt-group">
            <el-row class="txt-label">回标标段</el-row>
            <el-row class="txt-content">
              <p class="txt">标段1</p>
              <p class="txt">标段2</p>
            </el-row>
          </el-row>
        </el-col>
        <el-col :span="24">
          <el-row class="txt-group">
            <el-row class="txt-label">回标文档</el-row>
            <el-row class="txt-content">
              树
            </el-row>
          </el-row>
        </el-col>
      </el-form>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogTenderReceiptVisible = false">保 存</el-button>
      <el-button type="primary" size="small" @click="dialogTenderReceiptVisible = false">提 交</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'ResponseToTender',
  props: {
    dialogResponseToTenderVisible: {
      type: Boolean,
      default: () => false
    },
    responseToTenderForm: {
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

        .txt {
          margin: 0;
        }

        .txt-tips {
          color: #99a9bf;
          margin-top: 0;
        }
      }
    }
  }

</style>
