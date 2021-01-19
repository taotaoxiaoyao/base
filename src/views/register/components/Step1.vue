<template>
  <el-row class="form-wrapper">
    <el-form ref="ruleForm" size="small" :model="ruleForm" label-width="120px">
      <el-row class="form-group">
        <el-row class="form-group__left">
          <!-- <el-form-item label="登录账号：" prop="userName">
            <el-input v-model="ruleForm.userName" class="form-control" clearable placeholder="请输入登录账号" />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="ruleForm.password" class="form-control" clearable type="password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item label="确认密码：" prop="confirmPass">
            <el-input v-model="ruleForm.confirmPass" class="form-control" clearable type="password" placeholder="请输入确认密码" />
          </el-form-item> -->
          <el-form-item label="公司名称：" prop="suppileName">
            <el-input v-model="ruleForm.suppileName" class="form-control" clearable placeholder="请输入公司名称" />
          </el-form-item>
          <el-form-item label="公司地址：" prop="supplierAddress">
            <el-input v-model="ruleForm.supplierAddress" class="form-control" clearable placeholder="请输入公司地址" />
          </el-form-item>
          <el-form-item label="是有有工厂：" prop="supplierFactory">
            <el-radio-group v-model="ruleForm.supplierFactory">
              <el-radio v-for="item in config.supplierFactory || []" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <template v-if="ruleForm.supplierFactory === 0">
            <el-form-item label="生产人员情况：" prop="productPerson">
              <file-upload v-model="productPersonFile">
                <el-input slot="input" v-model="ruleForm.productPerson" class="form-control" clearable placeholder="请输入生产人员情况" />
              </file-upload>
            </el-form-item>
            <el-form-item label="机具设备：" prop="factoryEquitment">
              <file-upload v-model="factoryEquitmentFile">
                <el-input slot="input" v-model="ruleForm.factoryEquitment" class="form-control" clearable placeholder="请输入机器设备" />
              </file-upload>
            </el-form-item>
          </template>
          <el-form-item label="公司网址：" prop="supplierWeb">
            <el-input v-model="ruleForm.supplierWeb" class="form-control" clearable placeholder="请输入公司网址" />
          </el-form-item>
          <el-form-item label="工厂地址：" prop="factoryAddress">
            <el-input v-model="ruleForm.factoryAddress" class="form-control" clearable placeholder="请输入工厂地址" />
          </el-form-item>
          <el-form-item label="总经理电话：" prop="supplierGmTel">
            <el-input v-model="ruleForm.supplierGmTel" class="form-control" clearable placeholder="请输入总经理电话" />
          </el-form-item>
          <el-form-item label="公司注册资金：" prop="supplierSetupFund">
            <el-input v-model="ruleForm.supplierSetupFund" class="form-control" clearable placeholder="请输入公司注册资金">
              <el-button slot="append">万元</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="公司介绍：">
            <file-upload v-model="supplierDescFileUploadFile" />
          </el-form-item>
          <el-form-item label="工厂介绍：">
            <file-upload v-model="supplierFactoryDescUploadFile" />
          </el-form-item>
          <el-form-item label="项目案例：">
            <file-upload v-model="supplierProjectDemosUploadFile" />
          </el-form-item>
        </el-row>
        <el-row class="form-group__right">
          <el-form-item label="所有制属性：" prop="supplierProperty">
            <el-radio-group v-model="ruleForm.supplierProperty">
              <el-radio v-for="item in config.supplierProperty || []" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="详细地址：" prop="supplierAddressDetail">
            <el-input v-model="ruleForm.supplierAddressDetail" class="form-control" clearable placeholder="请输入详细地址" />
          </el-form-item>
          <el-form-item label="公司电话：" prop="supplierTel">
            <el-input v-model="ruleForm.supplierTel" class="form-control" clearable placeholder="请输入公司电话" />
          </el-form-item>
          <template v-if="ruleForm.supplierFactory === 0">
            <el-form-item label="工厂规模：" prop="factoryScale">
              <file-upload v-model="factoryScaleFile">
                <el-input slot="input" v-model="ruleForm.factoryScale" class="form-control" clearable placeholder="请输入工厂规模" />
              </file-upload>
            </el-form-item>
            <el-form-item label="工厂网站：" prop="factoryWeburl">
              <el-input v-model="ruleForm.factoryWeburl" class="form-control" clearable placeholder="请输入工厂网站" />
            </el-form-item>
          </template>
          <el-form-item label="总经理姓名：" prop="supplierGmName">
            <el-input v-model="ruleForm.supplierGmName" class="form-control" clearable placeholder="请输入总经理姓名" />
          </el-form-item>
          <el-form-item label="公司成立日期：" prop="supplierSetupDate">
            <el-date-picker
              v-model="ruleForm.supplierSetupDate"
              clearable
              class="form-control"
              type="date"
              placeholder="请选择公司成立日期"
              format="yyyy-MM-dd"
              value-format="timestamp"
              :picker-options="pickerOptions"
            />
          </el-form-item>
        </el-row>
      </el-row>
      <!-- <p class="btm-tip"><i>*</i>我们将审核结果发送到您的手机和电子邮箱，请正确输入。</p> -->
      <el-row class="btn-group">
        <el-button size="small" @click="onCancel('ruleForm')">取 消</el-button>
        <el-button size="small" type="primary" @click="onSave('ruleForm')">保 存</el-button>
        <el-button size="small" type="primary">下一步</el-button>
      </el-row>
    </el-form>
  </el-row>
</template>
<script>
import config from '@/config/dict'
import { parseTime } from '@/utils'
import mixins from '../mixins/index'
import { save_ppcgSuppilerBaseInfoManager } from '@/api/register-api'
import { mapGetters } from 'vuex'
export default {
  mixins,
  props: {},
  data() {
    // const validateName = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入登录账号'))
    //   } else if (!(/^(?![^a-zA-Z]+$)(?!\D+$)/).test(value)) {
    //     callback(new Error('登录账号需由字母和数字组合'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatePass = (rule, value, callback) => {
    //   if (value.length < 6) {
    //     callback(new Error('密码长度不能少于6位'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validateCPass = (rule, value, callback) => {
    //   console.log(' value: ', value)
    //   console.log(' this.ruleForm.password', this.ruleForm.password)
    //   if (value.length < 6) {
    //     callback(new Error('再次输入的密码长度不能少于6位'))
    //   } else if (value !== this.ruleForm.password) {
    //     console.log('this.ruleForm.password: ', this.ruleForm.password)
    //     callback(new Error('两次输入密码不一致!'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      config,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      uploadParams: {
        url: process.env.VUE_APP_BASE_API + 'sys/sysFile/upload'
      },
      productPersonFile: [],
      factoryEquitmentFile: [],
      supplierDescFileUploadFile: [],
      supplierFactoryDescUploadFile: [],
      supplierProjectDemosUploadFile: [],
      factoryScaleFile: [],
      ruleForm: {
        // userName: '',
        // password: '',
        // confirmPass: '',
        suppileName: '',
        supplierAddress: '',
        supplierFactory: 0,
        supplierWeb: '',
        factoryAddress: '',
        supplierGmTel: '',
        supplierSetupFund: '',
        supplierProperty: 0,
        supplierAddressDetail: '',
        supplierTel: '',
        supplierGmName: '',
        supplierSetupDate: '',
        productPerson: '',
        factoryEquitment: '',
        factoryScale: '',
        factoryWeburl: ''
      },
      rules: {
        // userName: [
        //   { required: true, validator: validateName, trigger: 'blur' }
        // ],
        // password: [
        //   { required: true, validator: validatePass, trigger: 'blur' }
        // ],
        // confirmPass: [
        //   { required: true, validator: validateCPass, trigger: 'blur' }
        // ],
        suppileName: [
          { required: true, message: '请输入公司名称', trigger: 'blur' }
        ],
        supplierAddress: [
          { required: true, message: '请输入公司地址', trigger: 'blur' }
        ],
        factoryAddress: [
          { required: true, message: '请输入工厂地址', trigger: 'blur' }
        ],
        supplierFactory: [
          { required: true, message: '请选择是否有工厂', trigger: 'blur' }
        ],
        supplierWeb: [
          { required: true, message: '请输入公司网址', trigger: 'blur' }
        ],
        supplierGmTel: [
          { required: true, message: '请输入总经理电话', trigger: 'blur' }
        ],
        supplierSetupFund: [
          { required: true, message: '请输入公司注册资金', trigger: 'blur' }
        ],
        supplierProperty: [
          { required: true, message: '请选择所有制属性', trigger: 'blur' }
        ],
        supplierAddressDetail: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
        supplierTel: [
          { required: true, message: '请输入公司电话', trigger: 'blur' }
        ],
        managerName: [
          { required: true, message: '请输入总经理姓名', trigger: 'blur' }
        ],
        supplierSetupDate: [
          { required: true, message: '请选择公司成立日期', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    // 预留
    setData(data) {},
    getData() {
      const res = {}
      return res
    },
    // 取消
    onCancel(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
      this.productPersonFile = []
      this.factoryEquitmentFile = []
      this.supplierDescFileUploadFile = []
      this.supplierFactoryDescUploadFile = []
      this.supplierProjectDemosUploadFile = []
      this.factoryScaleFile = []
    },
    // 保存
    onSave(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          try {
            const params = Object.assign({}, this.ruleForm)
            params.createAt = this.user.createAt
            params.supplierFactory = config.supplierFactory.find(x => x.value === params.supplierFactory).label
            params.supplierProperty = config.supplierProperty.find(x => x.value === params.supplierProperty).label
            params.supplierSetupDate = parseTime(params.supplierSetupDate, '{y}-{m}-{d}')
            params.productPersonFile = JSON.stringify(await this.getUploadList(this.productPersonFile))
            params.factoryEquitmentFile = JSON.stringify(await this.getUploadList(this.factoryEquitmentFile))
            params.supplierDescFileUploadFile = JSON.stringify(await this.getUploadList(this.supplierDescFileUploadFile))
            params.supplierFactoryDescUploadFile = JSON.stringify(await this.getUploadList(this.supplierFactoryDescUploadFile))
            params.supplierProjectDemosUploadFile = JSON.stringify(await this.getUploadList(this.supplierProjectDemosUploadFile))
            params.factoryScaleFile = JSON.stringify(await this.getUploadList(this.factoryScaleFile))
            console.log('onSave: ', params)
            const res = await save_ppcgSuppilerBaseInfoManager(params) || {}
            this.$message.success(res.msg)
            this.onCancel(formName)
            console.log('res: ', res)
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
  padding: 20px 0;
  width: 1000px;
  margin: 0 auto;
  .form-group {
    display: flex;
    ::v-deep .el-radio {
      margin-right: 10px;
    }
    .form-control {
      width: 100%;
    }
    .form-group__left,
    .form-group__right {
      flex: 1;
      margin: 0 20px;
    }
  }
  .btn-group {
    padding-left: 140px;
  }
}
</style>
