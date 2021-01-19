<template>
  <el-row class="form-wrapper">
    <el-form ref="ruleForm" size="small" :model="ruleForm" label-width="180px">
      <el-form-item label="经办人姓名：" prop="operatorName">
        <el-input v-model="ruleForm.operatorName" clearable placeholder="请输入经办人姓名" />
      </el-form-item>
      <el-form-item label="经办人电话：" prop="operatorTel">
        <el-input v-model="ruleForm.operatorTel" clearable placeholder="请输入经办人电话" />
      </el-form-item>
      <el-form-item label="经办人邮箱：" prop="operatorMail">
        <el-input v-model="ruleForm.operatorMail" clearable placeholder="请输入经办人邮箱" />
      </el-form-item>
      <el-form-item label="经办人职务：" prop="operatorJob">
        <el-input v-model="ruleForm.operatorJob" clearable placeholder="请输入经办人职务" />
      </el-form-item>
      <el-form-item label="营业执照上传：">
        <file-upload v-model="licenseUpload" />
      </el-form-item>
      <el-form-item label="银行开户许可证：">
        <file-upload v-model="khxkUpload" />
      </el-form-item>
      <el-form-item label="质量认证证书上传：">
        <file-upload v-model="zlrzsUpload" />
      </el-form-item>
      <el-form-item label="其他附件：">
        <file-upload v-model="otherInfo" />
      </el-form-item>
      <el-form-item>
        <el-button @click="onCancel('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="onSave('ruleForm')">保 存</el-button>
        <el-button type="primary" @click="onNext">下一步</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>
<script>
import mixins from '../mixins/index'
import { save_ppcgSupplierManageinfo } from '@/api/register-api'
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
      ruleForm: {
        operatorName: '',
        operatorTel: '',
        operatorMail: '',
        operatorJob: ''
      },
      licenseUpload: [],
      khxkUpload: [],
      zlrzsUpload: [],
      otherInfo: [],
      rules: {
        operatorName: [
          { required: true, message: '请输入经办人姓名', trigger: 'blur' }
        ],
        operatorTel: [
          { required: true, message: '请输入经办人电话', trigger: 'blur' }
        ],
        operatorMail: [
          { required: true, message: '请输入经办人邮箱', trigger: 'blur' }
        ],
        operatorJob: [
          { required: true, message: '请输入经办人职务', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onCancel(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
      this.licenseUpload = []
      this.khxkUpload = []
      this.zlrzsUpload = []
      this.otherInfo = []
    },
    onNext() {},
    onSave(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          // {
          //   "suppilerId": "421171514260586497",
          //   "operatorName": "100",
          //   "operatorTel": "100",
          //   "operatorMail": "100",
          //   "operatorJob": "100",
          //   "licenseUpload": "[{\"id\":\"421172187330772993\",\"name\":\"bg2.png\",\"src\":\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCADIAMgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUBBv/EABoQAQABBQAAAAAAAAAAAAAAAAABAgMWVJL/xAAXAQEBAQEAAAAAAAAAAAAAAAAABgQF/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAMUUv/aAAwDAQACEQMRAD8ApAK9MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvYpe2aOZMUvbNHMstyDTRVmygi9il7Zo5kxS9s0cyXINFWbKCL2KXtmjmTFL2zRzJcg0VZsoIvYpe2aOZMUvbNHMlyDRVmygi9il7Zo5kxS9s0cyXINFWbKCL2KXtmjmTFL2zRzJcg0VZsoIvYpe2aOZMUvbNHMlyDRVmygi9il7Zo5kxS9s0cyXINFWbKCL2KXtmjmTFL2zRzJcg0VZsoIvYpe2aOZMUvbNHMlyDRVmygi9il7Zo5kxS9s0cyXINFWbKCL2KXtmjmTFL2zRzJcg0VZsoIvYpe2aOZC5BoqzZdiNE07zBoDBoDBoDBoDBoDBoDBoDBoDBoDBoDBoDBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==\"}]",
          //   "khxkUpload": "[{\"id\":\"421172190556192769\",\"name\":\"bg3.png\",\"src\":\"data:image/jpeg;base64,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\"}]",
          //   "zlrzsUpload": "[{\"id\":\"421172192291848193\",\"name\":\"bg4.png\",\"src\":\"data:image/jpeg;base64,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\"}]",
          //   "otherInfo": "[{\"id\":\"421172194091466753\",\"name\":\"bg.png\",\"src\":\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCADIAMgDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAQFAQMG/8QAJBABAAEFAAICAQUAAAAAAAAAAAIBBBVTkgUzA4IRITFBQnH/xAAZAQEBAQEBAQAAAAAAAAAAAAAABQMCBAH/xAAdEQEAAwEBAAMBAAAAAAAAAAAAAhJRAQMRMjME/9oADAMBAAIRAxEAPwD64BeSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAevwfBL550jGla/4MZ+8Id+O9aR8py588eQDZmAAAAAAAAAAAAAAAAAAAAAA1/AxpX5/1p/WtR3wHv8ArURvb9Oqfn9OMcBZTAAAAAAAAAAAAAAAAAAAAAAGx4D3/WoeA9/1qI3t+nVPz+nGOOzpGk60hX8x/hxYTAB9AAAAAAAAAAAAAAAAAAAAGx4D3/WoeA9/1qI3t+nVPz+nGOAspgAAAAAAAAAAAAAAAAAAAAADY8B7/rUPA+/61Eb2/Tqn5/TjHAWUwAAAAAAAAAAAAAAAAAAAAABTZ3crX5KSpX9hMPNP+eE+/LaPvKPPgAeliAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+oxtvrhyY231w5WCHeWqtY4jxtvrhyY231w5WBeWlY4jxtvrhyY231w5WBeWlY4jxtvrhyY231w5WBeWlY4jxtvrhyY231w5WBeWlY4jxtvrhyY231w5WBeWlY4jxtvrhyY231w5WBeWlY4jxtvrhyY231w5WBeWlY4jxtvrhyY231w5WBeWlY4jxtvrhyY231w5WBeWlY4jxtvrhyY231w5WBeWlY4jxtvrhyY231w5WBeWlY4jxtvrhyLAvLSscAHLoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=\"}]"
          // }
          //
          const params = Object.assign({}, this.ruleForm)
          params.suppilerId = this.suppilerId
          params.licenseUpload = JSON.stringify(await this.getUploadList(this.licenseUpload))
          params.khxkUpload = JSON.stringify(await this.getUploadList(this.khxkUpload))
          params.zlrzsUpload = JSON.stringify(await this.getUploadList(this.zlrzsUpload))
          params.otherInfo = JSON.stringify(await this.getUploadList(this.otherInfo))
          const res = await save_ppcgSupplierManageinfo(params) || {}
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
  padding: 20px 0;
}
</style>
