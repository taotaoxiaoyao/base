<template>
  <el-row class="form-wrapper">
    <el-form ref="otherInfoForm" :model="otherInfoForm" :rules="rules" size="small" label-width="230px">
      <el-row class="form-group">
        <el-form-item label="营业执照号：" prop="businessLicenseNo">
          <el-input v-model="otherInfoForm.businessLicenseNo" placeholder="请输入营业执照号" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="营业执照副本：">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="otherInfoForm.fileList"
          >
            <el-button size="small" icon="el-icon-upload" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="税务登记号：" prop="taxNo">
          <el-input v-model="otherInfoForm.taxNo" placeholder="请输入税务登记号" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="办公地性质：" prop="officeType">
          <el-select v-model="otherInfoForm.officeType" placeholder="请选择办公地性质" clearable class="form-control">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="开户银行：" prop="bankName">
          <el-input v-model="otherInfoForm.bankName" placeholder="请输入开户银行" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="开户账号：" prop="bankAccount">
          <el-input v-model="otherInfoForm.bankAccount" placeholder="请输入开户账号" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="办公/工厂面积：" prop="officeArea">
          <el-input v-model="otherInfoForm.officeArea" placeholder="请输入办公/工厂面积" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="近两年平均营业额：">
          <el-row class="input-group">
            <el-row class="input-item">
              <el-form-item prop="latestTwoYearsAvgAmount">
                <el-input v-model="otherInfoForm.latestTwoYearsAvgAmount" placeholder="请输入营业额" clearable class="form-control" />
              </el-form-item>
            </el-row>
            <el-row class="select-item">
              <el-form-item prop="latestTwoYearsAvgAmountUnit">
                <el-select v-model="otherInfoForm.latestTwoYearsAvgAmountUnit" placeholder="请选择" clearable class="form-control">
                  <el-option
                    v-for="item in config.unitOptions"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
            </el-row>
            <el-row class="select-item">
              <el-form-item prop="latestTwoYearsAvgAmountCurrencyType">
                <el-select v-model="otherInfoForm.latestTwoYearsAvgAmountCurrencyType" placeholder="请选择" clearable class="form-control">
                  <el-option
                    v-for="item in config.currencyTypeOptions"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
            </el-row>
          </el-row>
        </el-form-item>
        <el-form-item label="注册资本：">
          <el-row class="input-group">
            <el-row class="input-item">
              <el-form-item prop="registeredCapital">
                <el-input v-model="otherInfoForm.registeredCapital" placeholder="请输入注册资本" clearable class="form-control" />
              </el-form-item>
            </el-row>
            <el-row class="select-item">
              <el-form-item prop="registeredCapitalUnit">
                <el-select v-model="otherInfoForm.registeredCapitalUnit" placeholder="请选择" clearable class="form-control">
                  <el-option
                    v-for="item in config.unitOptions"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
            </el-row>
            <el-row class="select-item">
              <el-form-item prop="registeredCapitalCurrencyType">
                <el-select v-model="otherInfoForm.registeredCapitalCurrencyType" placeholder="请选择" clearable class="form-control">
                  <el-option
                    v-for="item in config.currencyTypeOptions"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
            </el-row>
          </el-row>
        </el-form-item>
        <el-form-item label="固定资产：">
          <el-row class="input-group">
            <el-row class="input-item">
              <el-form-item prop="fixedAssets">
                <el-input v-model="otherInfoForm.fixedAssets" placeholder="请输入固定资产" clearable class="form-control" />
              </el-form-item>
            </el-row>
            <el-row class="select-item">
              <el-form-item prop="fixedAssetsUnit">
                <el-select v-model="otherInfoForm.fixedAssetsUnit" placeholder="请选择" clearable class="form-control">
                  <el-option
                    v-for="item in config.unitOptions"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
            </el-row>
            <el-row class="select-item">
              <el-form-item prop="fixedAssetsCurrencyType">
                <el-select v-model="otherInfoForm.fixedAssetsCurrencyType" placeholder="请选择" clearable class="form-control">
                  <el-option
                    v-for="item in config.currencyTypeOptions"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
            </el-row>
          </el-row>
        </el-form-item>
        <el-form-item label="流动资金：">
          <el-row class="input-group">
            <el-row class="input-item">
              <el-form-item prop="liquidity">
                <el-input v-model="otherInfoForm.liquidity" placeholder="请输入流动资金" clearable class="form-control" />
              </el-form-item>
            </el-row>
            <el-row class="select-item">
              <el-form-item prop="liquidityUnit">
                <el-select v-model="otherInfoForm.liquidityUnit" placeholder="请选择" clearable class="form-control">
                  <el-option
                    v-for="item in config.unitOptions"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
            </el-row>
            <el-row class="select-item">
              <el-form-item prop="liquidityCurrencyType">
                <el-select v-model="otherInfoForm.liquidityCurrencyType" placeholder="请选择" clearable class="form-control">
                  <el-option
                    v-for="item in config.currencyTypeOptions"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
            </el-row>
          </el-row>
        </el-form-item>
        <el-form-item label="员工数量：" prop="employeesNum">
          <el-input v-model="otherInfoForm.employeesNum" placeholder="请输入员工数量" clearable class="form-control" />
        </el-form-item>
      </el-row>
      <el-row class="btn-group">
        <el-button type="default" size="small" @click="onReset('otherInfoForm')">重置</el-button>
        <el-button type="primary" size="small">上一步</el-button>
        <el-button type="primary" size="small">下一步</el-button>
        <el-button type="primary" size="small">提交</el-button>
      </el-row>
    </el-form>
  </el-row>
</template>

<script>
import config from '@/config/dict'
export default {
  name: 'OtherInfo',
  props: {
    otherInfoForm: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      config,
      rules: {
        businessLicenseNo: [
          { required: true, message: '请输入营业执照号', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
  },
  methods: {
    onReset(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}

</script>

<style lang="scss" scoped>
  .form-wrapper {
    .form-group {
      ::v-deep .el-form-item__label {

      }
      ::v-deep .el-form-item__content {
        width: 500px;
        .input-group {
          display: flex;
          .el-form-item {
            margin-bottom: 0;
            .el-form-item__content {
              width: auto;
            }
          }
          .select-item {
            flex: 1;
            margin-left: 10px;
          }
        }
        .form-control {
          width: 100%;
        }
      }
    }

    .btn-group {
      padding-left: 90px;
      text-align: center;
    }
  }
</style>
