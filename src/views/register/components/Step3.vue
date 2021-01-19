<template>
  <el-row class="form-wrapper">
    <el-form ref="ruleForm" inline size="small" :model="ruleForm" class="financial-status">
      <el-row class="form-group">
        <el-form-item label="财务报告" prop="fianceReportInfo">
          <file-upload v-model="fianceReportInfo" />
        </el-form-item>
        <el-row class="input-group">
          <el-form-item label="年份：" prop="oneYear">
            <el-input v-model="ruleForm.oneYear" class="form-control" disabled clearable placeholder="请输入年份">
              <template slot="append">年</template>
            </el-input>
          </el-form-item>
          <el-form-item label="对应年份营业额：" prop="oneYearIncome">
            <el-input v-model="ruleForm.oneYearIncome" class="form-control" clearable type="number" placeholder="请输入对应年份营业额" min="0" precision="2" :maxlength="10">
              <template slot="append">万元</template>
            </el-input>
          </el-form-item>
        </el-row>
        <el-row class="input-group">
          <el-form-item label="年份：" prop="twoYear">
            <el-input v-model="ruleForm.twoYear" class="form-control" disabled clearable placeholder="请输入年份">
              <template slot="append">年</template>
            </el-input>
          </el-form-item>
          <el-form-item label="对应年份营业额：" prop="twoYearIncome">
            <el-input v-model="ruleForm.twoYearIncome" class="form-control" clearable type="number" placeholder="请输入对应年份营业额" min="0" precision="2" :maxlength="10">
              <template slot="append">万元</template>
            </el-input>
          </el-form-item>
        </el-row>
        <el-row class="input-group">
          <el-form-item label="年份：" prop="threeYear">
            <el-input v-model="ruleForm.threeYear" class="form-control" disabled clearable placeholder="请输入年份">
              <template slot="append">年</template>
            </el-input>
          </el-form-item>
          <el-form-item label="对应年份营业额：" prop="threeYearIncome">
            <el-input v-model="ruleForm.threeYearIncome" class="form-control" clearable type="number" placeholder="请输入对应年份营业额" min="0" precision="2" :maxlength="10">
              <template slot="append">万元</template>
            </el-input>
          </el-form-item>
        </el-row>
      </el-row>
      <el-row class="grid-group" data-before="前三合作方">
        <el-form-item label="2019：" label-width="60px" class="extra">
          <div class="grip-wrap">
            <span class="title">合作方名称</span>
            <span class="title">营业额</span>
            <span class="title">占比</span>
            <el-form-item prop="partName1">
              <el-input
                v-model="ruleForm.partName1"
                class="form-control"
                placeholder="合作方名称"
                min="0"
                precision="2"
                :maxlength="10"
              />
            </el-form-item>
            <el-form-item prop="partTurnover1">
              <el-input
                v-model="ruleForm.partTurnover1"
                class="form-control"
                type="number"
                placeholder="营业额"
                min="0"
                precision="2"
                :maxlength="10"
              >
                <template slot="append">万元</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="percentage1">
              <el-input v-model="ruleForm.percentage1" placeholder="占比" min="0" precision="2" :maxlength="10">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="partName2">
              <el-input
                v-model="ruleForm.partName2"
                class="form-control"
                placeholder="合作方名称"
                min="0"
                precision="2"
                :maxlength="10"
              />
            </el-form-item>
            <el-form-item prop="partTurnover2">
              <el-input
                v-model="ruleForm.partTurnover2"
                class="form-control"
                placeholder="营业额"
                type="number"
                min="0"
                precision="2"
                :maxlength="10"
              >
                <template slot="append">万元</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="percentage2">
              <el-input
                v-model="ruleForm.percentage2"
                class="form-control"
                placeholder="占比"
                min="0"
                precision="2"
                :maxlength="10"
              >
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="partName3">
              <el-input
                v-model="ruleForm.partName3"
                class="form-control"
                placeholder="合作方名称"
                min="0"
                precision="2"
                :maxlength="10"
              />
            </el-form-item>

            <el-form-item prop="partTurnover3">
              <el-input
                v-model="ruleForm.partTurnover3"
                class="form-control"
                type="number"
                placeholder="营业额"
                min="0"
                precision="2"
                :maxlength="10"
              >
                <template slot="append">万元</template>
              </el-input>
            </el-form-item>

            <el-form-item prop="percentage3">
              <el-input v-model="ruleForm.percentage3" placeholder="占比" min="0" precision="2" :maxlength="10">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </div>
        </el-form-item>
        <el-form-item label="2020：" label-width="60px" class="extra">
          <div class="grip-wrap">
            <span class="title">合作方名称</span>
            <span class="title">营业额</span>
            <span class="title">占比</span>
            <el-form-item prop="partName11">
              <el-input
                v-model="ruleForm.partName11"
                class="form-control"
                placeholder="合作方名称"
                min="0"
                precision="2"
                :maxlength="10"
              />
            </el-form-item>
            <el-form-item prop="partTurnover11">
              <el-input
                v-model="ruleForm.partTurnover11"
                class="form-control"
                type="number"
                placeholder="营业额"
                min="0"
                precision="2"
                :maxlength="10"
              >
                <template slot="append">万元</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="percentage11">
              <el-input v-model="ruleForm.percentage11" placeholder="占比" min="0" precision="2" :maxlength="10">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="partName12">
              <el-input
                v-model="ruleForm.partName12"
                class="form-control"
                placeholder="合作方名称"
                min="0"
                precision="2"
                :maxlength="10"
              />
            </el-form-item>
            <el-form-item prop="partTurnover12">
              <el-input
                v-model="ruleForm.partTurnover12"
                class="form-control"
                type="number"
                placeholder="营业额"
                min="0"
                precision="2"
                :maxlength="10"
              >
                <template slot="append">万元</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="percentage12">
              <el-input
                v-model="ruleForm.percentage12"
                class="form-control"
                placeholder="占比"
                min="0"
                precision="2"
                :maxlength="10"
              >
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="partName13">
              <el-input
                v-model="ruleForm.partName13"
                class="form-control"
                placeholder="合作方名称"
                min="0"
                precision="2"
                :maxlength="10"
              />
            </el-form-item>
            <el-form-item prop="partTurnover13">
              <el-input
                v-model="ruleForm.partTurnover13"
                class="form-control"
                placeholder="营业额"
                type="number"
                min="0"
                precision="2"
                :maxlength="10"
              >
                <template slot="append">万元</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="percentage13">
              <el-input
                v-model="ruleForm.percentage13"
                class="form-control"
                placeholder="占比"
                min="0"
                precision="2"
                :maxlength="10"
              >
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </div>
        </el-form-item>
      </el-row>
      <el-row class="form-group">
        <el-row class="radio-group">
          <el-form-item label="纳税规模：" prop="taxScale">
            <el-radio v-for="item in config.taxScaleOptions || []" :key="item.value" v-model="ruleForm.taxScale" :label="item.value">{{ item.label }}</el-radio>
          </el-form-item>
        </el-row>
        <el-row class="radio-group">
          <el-form-item label="税率：" prop="taxRate">
            <el-radio v-for="item in config.taxRateOptions || []" :key="item.value" v-model="ruleForm.taxRate" :label="item.value">{{ item.label }}</el-radio>
          </el-form-item>
        </el-row>
        <el-row class="radio-group">
          <el-form-item label="发票类型：" prop="invoiceType">
            <el-radio v-for="item in config.invoiceTypeOptions || []" :key="item.value" v-model="ruleForm.invoiceType" :label="item.value">{{ item.label }}</el-radio>
          </el-form-item>
        </el-row>
      </el-row>
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
import { save_ppcgSupplierFianceinfo } from '@/api/register-api'
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
      config,
      fianceReportInfo: [],
      ruleForm: {
        oneYear: 2020,
        oneYearIncome: '',
        twoYear: 2019,
        twoYearIncome: '',
        threeYear: 2018,
        threeYearIncome: '',
        yean1: 2019,
        partName1: '',
        partTurnover1: '',
        percentage1: '',
        yean2: 2019,
        partName2: '',
        partTurnover2: '',
        percentage2: '',
        yean3: 2019,
        partName3: '',
        partTurnover3: '',
        percentage3: '',
        yean11: 2020,
        partName11: '',
        partTurnover11: '',
        percentage11: '',
        yean12: 2020,
        partName12: '',
        partTurnover12: '',
        percentage12: '',
        yean13: 2020,
        partName13: '',
        partTurnover13: '',
        percentage13: '',
        taxScale: '1',
        taxRate: '1',
        invoiceType: '1'
      },
      rules: {
        report: [
          { required: true, message: '请上传财务报告', trigger: 'blur' }
        ],
        oneYear: [
          { required: true, message: '请输入年份', trigger: 'blur' }
        ],
        oneYearIncome: [
          { required: true, message: '请输入营业额', trigger: 'blur' }
        ],
        twoYear: [
          { required: true, message: '请输入年份', trigger: 'blur' }
        ],
        twoYearIncome: [
          { required: true, message: '请输入营业额', trigger: 'blur' }
        ],
        threeYear: [
          { required: true, message: '请输入年份', trigger: 'blur' }
        ],
        threeYearIncome: [
          { required: true, message: '请输入营业额', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  watch: {
    'ruleForm.partTurnover1': {
      handler(val) {
        if (val !== '' && this.ruleForm.twoYearIncome !== '') {
          this.ruleForm.percentage1 = parseInt((val / this.ruleForm.twoYearIncome) * 100)
        }
      }
    },
    'ruleForm.partTurnover2': {
      handler(val) {
        if (val !== '' && this.ruleForm.twoYearIncome !== '') {
          this.ruleForm.percentage2 = parseInt((val / this.ruleForm.twoYearIncome) * 100)
        }
      }
    },
    'ruleForm.partTurnover3': {
      handler(val) {
        if (val !== '' && this.ruleForm.twoYearIncome !== '') {
          this.ruleForm.percentage3 = parseInt((val / this.ruleForm.twoYearIncome) * 100)
        }
      }
    },
    'ruleForm.partTurnover11': {
      handler(val) {
        if (val !== '' && this.ruleForm.threeYearIncome !== '') {
          this.ruleForm.percentage11 = parseInt((val / this.ruleForm.threeYearIncome) * 100)
        }
      }
    },
    'ruleForm.partTurnover12': {
      handler(val) {
        if (val !== '' && this.ruleForm.threeYearIncome !== '') {
          this.ruleForm.percentage12 = parseInt((val / this.ruleForm.threeYearIncome) * 100)
        }
      }
    },
    'ruleForm.partTurnover13': {
      handler(val) {
        if (val !== '' && this.ruleForm.threeYearIncome !== '') {
          this.ruleForm.percentage13 = parseInt((val / this.ruleForm.threeYearIncome) * 100)
        }
      }
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    onCancel(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
      this.fianceReportInfo = []
    },
    onNext() {
    },
    onSave(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          try {
            const params = Object.assign({}, this.ruleForm)
            params.suppilerId = this.suppilerId
            params.createAt = this.user.createAt
            params.taxScale = config.taxScaleOptions.find(x => x.value === params.taxScale).label
            params.taxRate = config.taxRateOptions.find(x => x.value === params.taxRate).label
            params.invoiceType = config.invoiceTypeOptions.find(x => x.value === params.invoiceType).label
            params.fianceReportInfo = JSON.stringify(await this.getUploadList(this.fianceReportInfo))
            const res = await save_ppcgSupplierFianceinfo(params) || {}
            this.$message.success(res.msg)
            this.onCancel(formName)

            // {
            //   "suppilerId": "421165284400037889",
            //   "oneYear": 2020,
            //   "twoYear": 2019,
            //   "threeYear": 2018,
            //   "yean1": 2019,
            //   "yean2": 2019,
            //   "yean3": 2019,
            //   "yean11": 2020,
            //   "yean12": 2020,
            //   "yean13": 2020,
            //   "oneYearIncome": "100000",
            //   "twoYearIncome": "10000",
            //   "threeYearIncome": "1000",
            //   "partName1": "测试合作方1",
            //   "partTurnover1": "10000000",
            //   "percentage1": 100000,
            //   "partName2": "测试合作方2",
            //   "partTurnover2": "1000",
            //   "percentage2": 10,
            //   "partName3": "测试合作方2",
            //   "partTurnover3": "100",
            //   "percentage3": 1,
            //   "partName11": "测试合作方1",
            //   "percentage11": 1,
            //   "partTurnover11": "1000",
            //   "partName12": "测试合作方2",
            //   "partTurnover12": "10000",
            //   "percentage12": 10,
            //   "partName13": "测试合作方3",
            //   "partTurnover13": "20000",
            //   "percentage13": 20,
            //   "taxScale": "小规模",
            //   "taxRate": "6%",
            //   "invoiceType": "增值税普通发票",
            //   "fianceReportInfo": "[{\"id\":\"421165789782736897\",\"name\":\"bg3.png\",\"src\":\"}]"
            // }
          } catch (e) {
            console.log(e)
          }
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
    padding: 15px 0;
    .form-group {
      margin-bottom: 15px;
      ::v-deep .el-form-item__label {
        min-width: 100px;
        text-align: right;
      }
    }
    .grid-group {
      &:before {
        content: attr(data-before);
        display: block;
        font-size: 14px;
        line-height: 24px;
        padding: 0 10px;
        font-weight: bold;
        border-left: 3px solid #409EFF;
        margin-bottom: 10px;
      }
      ::v-deep .el-form-item {
        display: flex;
        margin-right: 0;
        margin-bottom: 0;
        .el-form-item__label {
          margin-top: 86px;
        }
        .el-form-item__content {
          width: 100%;
        }
      }
      > ::v-deep .el-form-item {
        margin-bottom: 18px;
      }
    }
    .btn-group {
      text-align: center;
    }
  }
  .grip-wrap {
    display: grid;
    align-items: center;
    line-height: 20px;
    grid-template-columns: 290px 220px 150px;
    grid-column-gap: 10px;
    grid-row-gap: 18px;
    .title {
      text-align: center;
    }
  }
</style>
