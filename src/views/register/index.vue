<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="注册" name="register">
        <el-tabs v-model="activeNameSub" class="tabs-register" type="card" @tab-click="handleTabClick">
          <el-tab-pane label="基本信息" name="first">
            <Step1 ref="ruleForm1" />
          </el-tab-pane>
          <el-tab-pane label="经办人信息" name="second">
            <Step2 ref="ruleForm1" :suppiler-id="suppilerId" />
          </el-tab-pane>
          <el-tab-pane label="财务状况" name="third">
            <Step3 ref="ruleForm3" :suppiler-id="suppilerId" />
          </el-tab-pane>
          <el-tab-pane label="公司管理人员架构" name="fourth">
            <Step4 ref="ruleForm4" :suppiler-id="suppilerId" />
          </el-tab-pane>
          <el-tab-pane label="其他信息" name="fifth">
            <Step5
              ref="ruleForm5"
              :suppiler-id="suppilerId"
              :contract-template-path="contractTemplatePath"
              @handleShowMaterial="handleShowMaterial"
              @handleShowService="handleShowService"
            />
          </el-tab-pane>
          <el-tab-pane v-if="showMaterial" label="材料管理" name="sixth">
            <Step6
              ref="ruleForm6"
              :suppiler-id="suppilerId"
            />
          </el-tab-pane>
          <el-tab-pane v-if="showService" label="服务管理" name="seventh">
            <Step7 ref="ruleForm7" :suppiler-id="suppilerId" />
          </el-tab-pane>
          <el-tab-pane label="施工人员管理" name="eighth">
            <Step8 ref="ruleForm8" :suppiler-id="suppilerId" />
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>
<script>
import registerMixin from './mixins'
import host from '@/config/url'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import Step5 from './components/Step5'
import Step6 from './components/Step6'
import Step7 from './components/Step7'
import Step8 from './components/Step8'
export default {
  name: 'Register',
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8
  },
  mixins: [registerMixin],
  data() {
    return {
      login: true,
      activeName: 'register',
      activeNameSub: 'first',
      showMaterial: false,
      showService: false,
      contractTemplatePath: ''
    }
  },
  async created() {
    this.contractTemplatePath = `${host.host}/ppcgui/project/templefile/code_temple.xlsx `
    await this.getSuppilerId()
  },
  methods: {
    // 显示财料管理
    handleShowMaterial(flag) {
      this.showMaterial = flag
    },
    // 显示服务管理
    handleShowService(flag) {
      this.showService = flag
    },
    // 选项卡切换
    handleTabClick() {
      if (this.activeNameSub === 'fifth') {
        this.$bus.$emit('getPurchasingMembersBus')
      } else if (this.activeNameSub === 'sixth') {
        this.$bus.$emit('queryCodesByPidBus')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-container {
    padding: 20px;
    background-color: #fff;
    ::v-deep .tabs-register {
      margin: 20px 30px;
    }
  }

</style>
