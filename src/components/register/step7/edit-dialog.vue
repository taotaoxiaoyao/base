<template>
  <el-dialog
    title="服务管理"
    :visible.sync="value"
    class="dialog-lg"
    :before-close="close"
  >
    <el-row class="form-wrapper">
      <el-form :model="editForm" size="small" label-width="150px">
        <el-row class="form-group" prop="name">
          <el-row class="form-group__left">
            <el-form-item label="服务名称：" prop="serviceName">
              <el-input v-model="editForm.serviceName" placeholder="请输入服务名称" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="劳务分包：" prop="typeOne">
              <el-row class="select-group">
                <el-select v-model="editForm.typeOne" placeholder="请选择劳务分包" clearable class="form-control" @change="handleChange('poslisttwo', editForm.typeOne, ['typeTwo', 'typeThree', 'typeFour'], ['poslistThree', 'poslistFour'])">
                  <el-option
                    v-for="(item, index) in poslist"
                    :key="item.id + index"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </el-row>
            </el-form-item>
            <el-form-item label="分类：" prop="typeTwo">
              <el-row class="select-group">
                <el-select v-model="editForm.typeTwo" placeholder="请选择分类" clearable class="form-control" @change="handleChange('poslistThree', editForm.typeTwo, ['typeThree', 'typeFour'], ['poslistFour'])">
                  <el-option
                    v-for="(item, index) in poslisttwo"
                    :key="item.id + index"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </el-row>
            </el-form-item>
            <el-form-item label="专业：" prop="typeThree">
              <el-row class="select-group">
                <el-select v-model="editForm.typeThree" placeholder="请选择专业" clearable class="form-control" @change="handleChange('poslistFour', editForm.typeThree, ['typeFour'])">
                  <el-option
                    v-for="(item, index) in poslistThree"
                    :key="item.id + index"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </el-row>
            </el-form-item>
            <el-form-item label="工作内容：" prop="typeFour">
              <el-row class="select-group">
                <el-select v-model="editForm.typeFour" placeholder="请选择工作内容" clearable class="form-control">
                  <el-option
                    v-for="(item, index) in poslistFour"
                    :key="item.id + index"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </el-row>
            </el-form-item>
          </el-row>
          <el-row class="form-group__right">
            <el-form-item label="分包编码：" prop="serviceCode">
              <el-input v-model="editForm.serviceCode" placeholder="请输入分包编码" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="市场价：" prop="markPrice">
              <el-input v-model="editForm.markPrice" placeholder="请输入市场价" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="工程价：" prop="engineerPrice">
              <el-input v-model="editForm.engineerPrice" placeholder="请输入工程价" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="服务说明：" prop="serviceRemark">
              <el-input v-model="editForm.serviceRemark" placeholder="请输入服务说明" clearable class="form-control" />
            </el-form-item>
          </el-row>
        </el-row>
        <el-row class="btn-group">
          <el-button size="small" @click="$emit('input', false)">取 消</el-button>
          <el-button type="primary" size="small" @click="onSave('editForm')">确 定</el-button>
        </el-row>
      </el-form>
    </el-row>
  </el-dialog>
</template>

<script>
import { save_serviceInfo } from '@/api/register-api'
export default {
  name: 'EditDialog',
  props: {
    value: {
      type: Boolean,
      default: () => true
    },
    poslist: {
      type: Array,
      default: () => []
    },
    poslisttwo: {
      type: Array,
      default: () => []
    },
    poslistThree: {
      type: Array,
      default: () => []
    },
    poslistFour: {
      type: Array,
      default: () => []
    },
    callback: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      editForm: {
        serviceName: '',
        typeOne: '',
        typeTwo: '',
        typeThree: '',
        typeFour: '',
        serviceCode: '',
        markPrice: '',
        engineerPrice: '',
        serviceRemark: '',
        suppilerId: '421063778096906241'
      }
    }
  },
  methods: {
    close() {
      console.log('onClose: ')
      this.$emit('input', false)
    },
    handleChange(key, id, option = [], list = []) {
      console.log('key, id: ', key, id, option, list)
      option.forEach(item => {
        this.editForm[item] = ''
      })
      this.$emit('change', list)
      this.$emit('queryCodesByPid', key, { pid: id }, list)
    },
    async onSave(formName) {
      console.log('onSave', this.editForm)
      try {
        // this.$refs[formName].validate(async valid => {
        //   if (valid) {
        const res = (await save_serviceInfo(this.editForm)).data || {}
        console.log(res)
        typeof this.callback === 'function' && this.callback()
        this.close()
        //   }
        // })
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
        margin-right: 10px;
      }
    }
  }
</style>
