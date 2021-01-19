<template>
  <el-row class="form-wrapper">
    <el-row class="btn-group btn-group__top">
      <el-button size="small" type="primary" icon="el-icon-plus" @click="onAdd">添加</el-button>
    </el-row>
    <el-form ref="ruleForm" :model="ruleForm" inline size="small" label-width="120px">
      <el-row v-for="(item, index) in ruleForm.ppcgMaterialParamsValuesPrivate" :key="index" class="input-group">
        <el-form-item label="职务：">
          <el-input v-model="item.paramsId" clearable placeholder="请输入职务" />
        </el-form-item>
        <el-form-item label="数量：">
          <el-input v-model="item.paramValue" clearable type="number" placeholder="请输入数量" min="0" />
        </el-form-item>
        <el-form-item>
          <el-button type="danger" icon="el-icon-delete" @click="onDelete(index)">删除</el-button>
        </el-form-item>
      </el-row>
      <el-form-item label="管理人员证书：" prop="manageCertificate">
        <file-upload v-model="manageCertificate" />
      </el-form-item>
      <el-row class="btn-group">
        <el-button size="small" @click="onCancel('ruleForm')">取消</el-button>
        <el-button size="small" type="primary" @click="onSave('ruleForm')">保存</el-button>
        <el-button size="small" type="primary" @click="onNext">下一步</el-button>
      </el-row>
    </el-form>
  </el-row>
</template>
<script>
import mixins from '../mixins/index'
import { get_ppcgSupplierPeasonalinfo, save_ppcgSupplierPeasonalinfo } from '@/api/register-api'
import { mapGetters } from 'vuex'

export default {
  mixins,
  props: {
    suppilerId: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      manageCertificate: [],
      jobArr: [],
      numberArr: [],
      ruleForm: {
        ppcgMaterialParamsValuesPrivate: [
          {
            paramValue: '',
            paramsId: ''
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  created() {
    this.getSupplierPeasonalList()
  },
  mounted() {},
  methods: {
    onAdd() {
      this.ruleForm.ppcgMaterialParamsValuesPrivate.push({
        paramValue: '',
        paramsId: ''
      })
    },
    onDelete(index) {
      if (this.ruleForm.ppcgMaterialParamsValuesPrivate.length === 1) {
        this.$message.warning('请至少保留一条')
        return false
      }
      this.ruleForm.ppcgMaterialParamsValuesPrivate.splice(index, 1)
    },
    onCancel(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
      this.manageCertificate = []
      this.ruleForm.ppcgMaterialParamsValuesPrivate = [
        {
          paramValue: '',
          paramsId: ''
        }
      ]
    },
    onNext() {
    },
    async getSupplierPeasonalList() {
      const params = {
        // id: this.suppilerId
        id: '421155173915688961'
      }
      const res = (await get_ppcgSupplierPeasonalinfo(params)).data || {}
      const jobArr = JSON.parse(res.job) || []
      const numberArr = JSON.parse(res.number) || []
      this.ruleForm.ppcgMaterialParamsValuesPrivate = []
      for (const [k, v] of Object.entries(jobArr)) {
        this.ruleForm.ppcgMaterialParamsValuesPrivate.push({
          paramValue: numberArr[k],
          paramsId: v
        })
      }
      this.manageCertificate = JSON.parse(res.manageCertificate) || []
    },
    onSave(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          // {
          //   "suppilerId": "421166208964100097",
          //   "manageCertificate": "[]",
          //   "ppcgMaterialParamsValuesPrivate": {
          //     "paramsId": {
          //       "1": "工程师1",
          //       "2": "工程师2",
          //       "3": "工程师3",
          //       "4": "工程师4"
          //     },
          //     "paramValue": {
          //       "1": "10",
          //       "2": "12",
          //       "3": "12",
          //       "4": "12"
          //     }
          //   }
          // }

          const params = Object.assign({}, this.ruleForm)
          params.suppilerId = this.suppilerId
          params.manageCertificate = JSON.stringify(await this.getUploadList(this.manageCertificate)) || []

          const jobObj = {}
          const numberObj = {}
          params.ppcgMaterialParamsValuesPrivate = {}
          this.ruleForm.ppcgMaterialParamsValuesPrivate.forEach((item, index) => {
            jobObj[index + 1] = item.paramsId
            numberObj[index + 1] = item.paramValue
          })
          params.ppcgMaterialParamsValuesPrivate.paramsId = jobObj
          params.ppcgMaterialParamsValuesPrivate.paramValue = numberObj
          const res = await save_ppcgSupplierPeasonalinfo(params) || {}
          this.$message.success(res.msg)
          this.onCancel(formName)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .form-wrapper {
    width: 800px;
    margin: 0 auto;
    padding: 20px;
    min-height: 500px;
    .btn-group {
      padding-left: 120px;
      &.btn-group__top {
        text-align: right;
        padding-right: 43px;
        margin-bottom: 20px;
      }
    }
  }
</style>
