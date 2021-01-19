<template>
  <el-dialog
    :title="addTypeForm.dialogAddTitle"
    :visible.sync="addTypeForm.dialogAddVisible"
    class="dialog-sm"
  >
    <el-row class="form-wrapper">
      <el-form ref="addTypeForm" :model="addTypeForm" size="small" label-width="120px">
        <el-form-item v-if="addTypeForm.parentItem" label="上级组织：" prop="id">
          <el-input v-model="addTypeForm.parentItem.id" disabled placeholder="上级组织" clearable class="form-control" />
        </el-form-item>
        <el-form-item v-if="addTypeForm.type === 'forth'" label="品牌：" prop="name">
          <el-input v-model="addTypeForm.name" placeholder="品牌" clearable class="form-control" />
        </el-form-item>
        <el-form-item v-else-if="addTypeForm.type === 'fifth'" label="系列：" prop="name">
          <el-input v-model="addTypeForm.name" placeholder="系列" clearable class="form-control" />
        </el-form-item>
        <el-form-item v-else-if="addTypeForm.type === 'sixth'" label="规格：" prop="name">
          <el-input v-model="addTypeForm.name" placeholder="规格" clearable class="form-control" />
        </el-form-item>
        <el-form-item v-else-if="addTypeForm.type === 'seventh'" label="颜色具体型号：" prop="name">
          <el-input v-model="addTypeForm.name" placeholder="颜色具体型号" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="组织编码：" prop="code">
          <el-input v-model="addTypeForm.code" disabled placeholder="组织编码" clearable class="form-control" />
        </el-form-item>
        <el-row class="btn-group">
          <el-button size="small" @click="handleCancelAdd('addTypeForm')">取 消</el-button>
          <el-button type="primary" size="small" @click="handleSubmitAddForm('addTypeForm')">确 定</el-button>
        </el-row>
      </el-form>
    </el-row>
  </el-dialog>
</template>

<script>
import { savePpcgMaterialCode } from '@/api/register-api'
export default {
  name: 'AddTypeDialog',
  props: {
    addTypeForm: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleCancelAdd(formName) {
      this.addTypeForm.dialogAddVisible = false
      this.addTypeForm.dialogAddTitle = ''
      this.$refs[formName] && this.$refs[formName].resetFields()
    },
    handleSubmitAddForm(formName) {
      try {
        this.$refs[formName].validate(async valid => {
          if (valid) {
            const params = {
              parentName: this.addTypeForm.parentItem.name,
              parentId: this.addTypeForm.parentItem.id,
              sn: 1,
              code: this.addTypeForm.code,
              name: this.addTypeForm.name
            }
            const res = (await savePpcgMaterialCode(params)) || {}
            this.$message.success(res.msg)
            this.addTypeForm.dialogAddTitle = ''
            this.addTypeForm.dialogAddVisible = false
            this.handleCancelAdd(formName)
            this.$emit('queryCodesByPid', {
              item: this.addTypeForm.parentItem,
              type: this.addTypeForm.type
            })
            this.$emit('queryParamsByCode', {
              item: this.addTypeForm.parentItem,
              type: this.addTypeForm.type
            })
            this.$emit('queryParamsByCodePrice', {
              item: this.addTypeForm.parentItem,
              type: this.addTypeForm.type
            })
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-wrapper {
    .form-group {
      display: flex;
      .form-group__left,
      .form-group__right {
        flex: 1;
      }
    }
    .btn-group {
      text-align: right;
    }
    .select-group {
      display: flex;
      .form-control {
        flex: 1;
      }
      .btn-add {
        margin-left: 10px;
      }
    }
    .list-group {
      ::v-deep .el-form-item__label {
        width: 100px !important;
        text-align: left;
      }
      ::v-deep .el-form-item__content {
        margin-left: 100px !important;
      }
    }
  }
</style>
