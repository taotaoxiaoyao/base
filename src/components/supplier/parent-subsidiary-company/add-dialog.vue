<template>
  <el-dialog
    title="新增绑定"
    :visible.sync="dialogVisible"
    class="dialog-md"
  >
    <el-row class="form-wrapper">
      <el-form :model="pageForm" size="small" label-width="120px">
        <el-row class="form-group" prop="name">
          <el-form-item label="公司名称：">
            <el-input v-model="pageForm.name" placeholder="请输入公司名称" clearable class="form-control">
              <el-button slot="append">搜索</el-button>
            </el-input>
          </el-form-item>
        </el-row>
      </el-form>
      <el-row class="header-group">
        <span class="txt-title">申请公司信息</span>
      </el-row>
      <el-row class="detail-wrapper">
        <el-row class="txt-group">
          <el-row class="txt-label">公司全称</el-row>
          <el-row class="txt-content">--</el-row>
        </el-row>
        <el-row class="txt-group">
          <el-row class="txt-label">公司简称</el-row>
          <el-row class="txt-content">--</el-row>
        </el-row>
        <el-row class="txt-group">
          <el-row class="txt-label">公司所在地</el-row>
          <el-row class="txt-content">--</el-row>
        </el-row>
        <el-row class="txt-group">
          <el-row class="txt-label">法人代表</el-row>
          <el-row class="txt-content">--</el-row>
        </el-row>
        <el-row class="txt-group">
          <el-row class="txt-label">邮政编码</el-row>
          <el-row class="txt-content">--</el-row>
        </el-row>
        <el-row class="txt-group">
          <el-row class="txt-label">电话号码</el-row>
          <el-row class="txt-content">--</el-row>
        </el-row>
      </el-row>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" size="small" @click="dialogVisible = false">申请绑定其为母公司</el-button>
      <el-button type="primary" size="small" @click="dialogVisible = false">申请绑定其为子公司</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddDialog',
  props: {
    pageForm: {
      type: Object,
      default: () => {}
    },
    dialogVisible: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrapper {

  .header-group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .txt-title {
      line-height: 20px;
      font-size: 14px;
      color: #313303;
      padding: 0 10px;
      border-left: 3px solid #409EFF;
      flex: 1;
    }
  }
  .detail-wrapper {
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

}
</style>
