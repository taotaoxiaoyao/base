<template>
  <el-dialog
    title="联系人"
    :visible.sync="dialogVisible"
    class="dialog-md"
  >
    <el-row class="form-wrapper">
      <el-form :model="pageForm" size="small" label-width="120px">
        <el-row class="form-group" prop="name">
          <el-form-item label="姓名：">
            <el-input v-model="pageForm.name" placeholder="请输入姓名" clearable class="form-control" />
          </el-form-item>
          <el-form-item label="适用公司：">
            <el-select v-model="pageForm.list" placeholder="请选择适用公司" multiple clearable class="form-control">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio v-model="pageForm.flag" label="1">男</el-radio>
            <el-radio v-model="pageForm.flag" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="联系人类型：">
            <el-select v-model="pageForm.name" placeholder="请选择联系人类型" clearable class="form-control">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="职位：">
            <el-input v-model="pageForm.name" placeholder="请输入职位" clearable class="form-control" />
          </el-form-item>
          <el-form-item label="身份证号：">
            <el-input v-model="pageForm.name" placeholder="请输入身份证号" clearable class="form-control" />
          </el-form-item>
          <el-form-item label="社保号：">
            <el-input v-model="pageForm.name" placeholder="请输入社保号" clearable class="form-control" />
          </el-form-item>
          <el-form-item label="手机号码：">
            <el-input v-model="pageForm.name" placeholder="请输入手机号码" clearable class="form-control" />
          </el-form-item>
          <el-form-item label="办公固话：">
            <el-input v-model="pageForm.name" placeholder="请输入办公固话" clearable class="form-control" />
          </el-form-item>
          <el-form-item label="电子邮箱：">
            <el-input v-model="pageForm.name" placeholder="请输入电子邮箱" clearable class="form-control" />
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
  name: 'AddContactDialog',
  props: {
    dialogVisible: {
      type: Boolean,
      default: () => false
    },
    pageForm: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-wrapper {
    .form-control {
      width: 100%;
    }
  }

</style>
