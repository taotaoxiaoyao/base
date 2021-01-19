<template>
  <el-dialog
    title="联系人"
    :visible.sync="dialogVisible"
    class="dialog-md"
  >
    <el-row class="form-wrapper">
      <el-form :model="ruleForm" size="small" label-width="120px">
        <el-row class="form-group">
          <el-form-item label="姓名：" prop="parentId">
            <el-input v-model="ruleForm.parentId" placeholder="请输入姓名" clearable class="form-control" />
          </el-form-item>
        </el-row>
      </el-form>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogTenderReceiptVisible = false">取 消</el-button>
      <el-button type="primary" size="small" @click="dialogTenderReceiptVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddDialog',
  data() {
    return {
      ruleForm: {
        parentId: '',
        name: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
