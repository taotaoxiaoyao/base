<template>
  <el-row class="form-wrapper">
    <el-form ref="baseInfoForm" :model="baseInfoForm" :rules="rules" size="small" label-width="230px">
      <el-row class="form-group">
        <el-form-item label="公司全称：" prop="companyFullName">
          <el-input v-model="baseInfoForm.companyFullName" placeholder="请输入公司全称" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="公司简称：" prop="companyShortName">
          <el-input v-model="baseInfoForm.companyShortName" placeholder="请输入公司简称" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="企业性质：" prop="unitNature">
          <el-select v-model="baseInfoForm.unitNature" placeholder="请选择企业性质" clearable class="form-control">
            <el-option
              v-for="item in config.businessNatureOptions"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="是否是上市公司：" prop="isListedCompany">
          <el-select v-model="baseInfoForm.isListedCompany" placeholder="是否是上市公司" clearable class="form-control">
            <el-option
              v-for="item in config.companyTypeOptions"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="承接类别：" prop="vendorCategory">
          <el-select v-model="baseInfoForm.vendorCategory" multiple placeholder="请选择承接类别" clearable class="form-control">
            <el-option
              v-for="item in config.companyTypeOptions"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="有设置分支机构或分公司的城市：" prop="serviceAreas">
          <el-select v-model="baseInfoForm.serviceAreas" placeholder="请选择分支机构或城市" multiple clearable class="form-control">
            <el-option
              v-for="item in config.companyTypeOptions"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="愿意承接工程的省份/城市：" prop="undertakeAreas">
          <el-select v-model="baseInfoForm.undertakeAreas" placeholder="请选择省份/城市" multiple clearable class="form-control">
            <el-option
              v-for="item in config.companyTypeOptions"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="对接地区公司：" prop="cityCompany">
          <el-select v-model="baseInfoForm.cityCompany" placeholder="请选择对接地区公司" multiple clearable class="form-control">
            <el-option
              v-for="item in config.companyTypeOptions"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="企业办公固话：" prop="officePhone">
          <el-input v-model="baseInfoForm.officePhone" placeholder="请输入企业办公固话" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="企业邮箱：" prop="email">
          <el-input v-model="baseInfoForm.email" placeholder="请输入企业邮箱" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="公司所在地：">
          <el-row class="select-group">
            <el-row class="select-item">
              <el-form-item prop="countryID">
                <el-select v-model="baseInfoForm.countryID" placeholder="请选择省份" clearable class="form-control">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-row>
            <el-row class="select-item">
              <el-form-item prop="provinceID">
                <el-select v-model="baseInfoForm.provinceID" placeholder="请选择市区" clearable class="form-control">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-row>
            <el-row class="select-item">
              <el-form-item prop="cityID">
                <el-select v-model="baseInfoForm.cityID" placeholder="请选择城镇" clearable class="form-control">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-row>
          </el-row>
        </el-form-item>
        <el-form-item label="详细地址：" prop="companyAddress">
          <el-input v-model="baseInfoForm.companyAddress" placeholder="请输入详细地址" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="邮政编码：" prop="zipCode">
          <el-input v-model="baseInfoForm.zipCode" placeholder="请输入邮政编码" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="曾合作过的其他大型地产商：" prop="cooperativePartner">
          <el-input v-model="baseInfoForm.cooperativePartner" placeholder="请输入地产商" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="基本情况介绍：" prop="vendorIntroduction">
          <el-input v-model="baseInfoForm.vendorIntroduction" placeholder="请输入介绍说明" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="营业范围：" prop="businessScope">
          <el-input v-model="baseInfoForm.businessScope" placeholder="请输入营业范围" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" clearable class="form-control" />
        </el-form-item>
      </el-row>
      <el-row class="btn-group">
        <el-button type="default" size="small" @click="onReset('baseInfoForm')">重置</el-button>
        <el-button type="primary" size="small">下一步</el-button>
        <el-button type="primary" size="small">提交</el-button>
      </el-row>
    </el-form>
  </el-row>
</template>

<script>
import config from '@/config/dict'
export default {
  name: 'BaseCompanyInfo',
  props: {
    baseInfoForm: {
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
        fullName: [
          { required: true, message: '请输入公司全称', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入企业办公固话', trigger: 'blur' }
        ],
        detailedAddress: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
        summary: [
          { required: true, message: '请输入介绍说明', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
  },
  methods: {
    onReset(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
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
        .select-group {
          display: flex;
          .el-form-item {
            margin-bottom: 0;
            .el-form-item__content {
              width: auto;
            }
          }
          .select-item {
            margin-left: 10px;
            flex: 1;
            &:first-child {
              margin-left: 0;
            }
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
