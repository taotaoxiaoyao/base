<template>
  <el-dialog
    title="施工人员管理"
    :visible.sync="dialogVisible"
    class="dialog-xl"
  >
    <el-row class="form-wrapper">
      <el-form :model="editForm" size="small" label-width="150px">
        <el-row class="form-group" prop="name">
          <el-row class="form-group__left">
            <el-form-item label="用户姓名：" prop="userName">
              <el-input v-model="editForm.userName" placeholder="请输入用户姓名" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="性别：" prop="userSex">
              <el-radio v-for="item in config.genderOptions || []" :key="item.value" v-model="editForm.userSex" :label="item.value">{{ item.label }}</el-radio>
            </el-form-item>
            <el-form-item label="身份证号：" prop="userCard">
              <el-input v-model="editForm.userCard" placeholder="请输入身份证号" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="教育程度：" prop="userEdu">
              <el-select v-model="editForm.userEdu" placeholder="请选择教育程度" clearable class="form-control">
                <el-option
                  v-for="item in config.userEduOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="项目案例：" prop="userDemo">
              <el-input v-model="editForm.userDemo" placeholder="请输入项目案例" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="岗位证书：" prop="userCert">
              <file-upload v-model="userCert" />
            </el-form-item>
            <el-form-item label="生产施工：" prop="produceCon">
              <el-select v-model="editForm.produceCon" placeholder="请选择生产施工" clearable class="form-control">
                <el-option
                  v-for="item in config.produceConOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-row>
          <el-row class="form-group__right">
            <el-form-item label="用户手机：" prop="userTel">
              <el-input v-model="editForm.userTel" placeholder="请输入用户手机" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="年龄：" prop="userAge">
              <el-input v-model="editForm.userAge" placeholder="请输入年龄" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="户籍：" prop="userDom">
              <el-input v-model="editForm.userDom" placeholder="请输入户籍" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="职位：" prop="userJob">
              <el-input v-model="editForm.userJob" placeholder="请输入职位" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="工种：" prop="userJobType">
              <el-select v-model="editForm.userJobType" placeholder="请选择工种" clearable class="form-control">
                <el-option
                  v-for="item in config.userJobTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="健康不良嗜：" prop="userNogood">
              <el-checkbox-group v-model="editForm.userNogood" size="small">
                <el-checkbox v-for="item in config.userNogoodOptions || []" :key="item.value" :label="item.value">{{ item.label }}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-row>
        </el-row>
        <el-row class="btn-group">
          <el-button size="small" @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" size="small" @click="dialogVisible = false">确 定</el-button>
        </el-row>
      </el-form>
    </el-row>
  </el-dialog>
</template>

<script>
import mixins from '@/views/register/mixins'
import config from '@/config/dict'
export default {
  name: 'EditDialog',
  mixins,
  props: {
    dialogVisible: {
      type: Boolean,
      default: () => true
    },
    editForm: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      config,
      userCert: [],
      options: []
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
      .form-group__right {
        ::v-deep .el-checkbox {
          margin-right: 10px;
        }
      }
    }
    .btn-group {
      text-align: right;
    }
    .form-control {
      width: 100%;
    }
  }
</style>
