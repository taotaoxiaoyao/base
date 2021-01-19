<template>
  <el-row class="form-wrapper">
    <el-form ref="ruleForm" :model="ruleForm" size="small" label-width="180px">
      <el-form-item label="供应商类型选择：" prop="supplierType">
        <el-checkbox-group v-model="ruleForm.supplierType" size="small">
          <el-checkbox v-for="item in config.supplierTypeOptions || []" :key="item.value" v-model="ruleForm.supplierType" :label="item.value">{{ item.label }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="标准合同模板：">
        <el-link :href="contractTemplatePath" :underline="false" type="primary">合同模板</el-link>
      </el-form-item>
      <el-form-item label="介绍人：" prop="manageCertificate">
        <el-select v-model="ruleForm.manageCertificate" value-key="id_" class="form-control" clearable multiple filterable placeholder="请选择">
          <el-option
            v-for="item in purchasingMembers"
            :key="item.id_"
            :label="item.fullname_"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <template v-if="showAgentInfo">
        <el-form-item label="经销资质证书上传：" prop="agentInfoList">
          <file-upload v-model="agentInfoList" />
        </el-form-item>
        <el-form-item label="代理类型：" prop="supplierProperty">
          <el-radio v-for="item in config.supplierPropertyOptions || []" :key="item.value" v-model="ruleForm.supplierProperty" :label="item.value">{{ item.label }}</el-radio>
        </el-form-item>
      </template>
      <el-form-item v-if="showIndustryInfo" label="安装服务资质证书上传：" prop="industryInfoList">
        <file-upload v-model="industryInfoList" />
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
import config from '@/config/dict'
import mixins from '../mixins/index'
import { get_PurchasingMembers, save_ppcgSupplierOtherinfo } from '@/api/register-api'
import { mapGetters } from 'vuex'
export default {
  mixins,
  props: {
    suppilerId: {
      type: String,
      default: () => ''
    },
    contractTemplatePath: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      config,
      showAgentInfo: false,
      showIndustryInfo: false,
      agentInfoList: [],
      industryInfoList: [],
      purchasingMembers: [],
      ruleForm: {
        supplierType: [],
        manageCertificate: [],
        supplierProperty: 1
      }
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  watch: {
    'ruleForm.supplierType': {
      handler(val) {
        if (val.indexOf(1) > -1) {
          this.showAgentInfo = true
          this.$emit('handleShowMaterial', this.showAgentInfo)
        } else {
          this.showAgentInfo = false
          this.$emit('handleShowMaterial', this.showAgentInfo)
        }
        if (val.indexOf(2) > -1) {
          this.showIndustryInfo = true
          this.$emit('handleShowService', this.showIndustryInfo)
        } else {
          this.showIndustryInfo = false
          this.$emit('handleShowService', this.showIndustryInfo)
        }
        if (val.indexOf(1) > -1 && val.indexOf(2) > -1) {
          this.showAgentInfo = true
          this.showIndustryInfo = true
          this.$emit('handleShowMaterial', this.showAgentInfo)
          this.$emit('handleShowService', this.showIndustryInfo)
        }
      },
      deep: true
    }
  },
  created() {
    this.$bus.$on('getPurchasingMembersBus', () => {
      this.getPurchasingMembers()
    })
  },
  mounted() {},
  methods: {
    // 获取采购人员信息
    async getPurchasingMembers() {
      try {
        const params = {
          createAt: this.user.createAt,
          order: 'asc',
          offset: 0,
          limit: 10
        }
        this.purchasingMembers = (await get_PurchasingMembers(params)).rows || []
      } catch (e) {
        console.log(e)
        this.purchasingMembers = []
      }
    },
    onCancel(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
      this.showAgentInfo = false
      this.showIndustryInfo = false
      this.agentInfoList = []
      this.industryInfoList = []
    },
    onNext() {
    },
    onSave(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          const params = {}
          params.ismaterial = this.ruleForm.supplierType.includes(1)
          params.isservice = this.ruleForm.supplierType.includes(2)
          params.supplierProperty = config.supplierPropertyOptions.find(x => x.value === this.ruleForm.supplierProperty).label
          params.suppilerId = this.suppilerId
          params.userIds = this.ruleForm.manageCertificate.map(item => {
            return item.id_
          }).join(',')
          params.manageCertificate = this.ruleForm.manageCertificate.map(item => {
            return item.fullname_
          }).join(',')
          params.agentInfo = JSON.stringify(await this.getUploadList(this.agentInfoList)) || []
          params.industryInfo = JSON.stringify(await this.getUploadList(this.industryInfoList)) || []
          console.log(params)
          const res = await save_ppcgSupplierOtherinfo(params) || {}
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
    width: 600px;
    margin: 0 auto;
    padding: 20px;
    min-height: 500px;
    ::v-deep .el-form-item__content {
      .el-radio {
        margin-right: 10px;
      }
    }
    .form-control {
      width: 100%;
    }
    .btn-group {
      padding-left: 150px;
    }
  }
</style>
