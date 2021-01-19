<template>
  <el-row class="app-container">
    <el-row class="main-container">
      <el-row class="form-wrapper">
        <el-form ref="ruleForm" :inline="true" :model="ruleForm" label-position="left" size="small" class="page-form">
          <el-row class="form-group">
            <el-form-item label="搜索：" prop="mate_mark_price">
              <el-input v-model="ruleForm.mate_mark_price" clearable class="form-control" placeholder="请输入关键字" />
            </el-form-item>
          </el-row>
          <el-row class="btn-group">
            <el-button type="primary" size="small" icon="el-icon-search" @click="handleQuery">查询</el-button>
            <el-button type="default" size="small" icon="el-icon-refresh" @click="handleReset('ruleForm')">重置</el-button>
            <el-button type="primary" size="small" icon="el-icon-plus" @click="handleShowEditDialog">新增</el-button>
            <el-button type="primary" size="small" icon="el-icon-search" @click="handleChange('ruleForm')">材料选择</el-button>
          </el-row>
        </el-form>
      </el-row>
      <el-row class="table-wrapper">
        <el-table
          v-loading="loading"
          :data="tableData"
          border
        >
          <el-table-column
            v-for="(col,idx) in columns"
            :key="idx"
            :prop="col.prop"
            :label="col.label"
            :width="col.width"
            :fixed="col.fixed"
            :formatter="col.formatter"
          />
        </el-table>
      </el-row>
      <el-row class="page-wrapper">
        <el-pagination
          v-if="tableData.length > 0"
          background
          layout="prev, pager, next"
          :total="1000"
        />
      </el-row>
    </el-row>
    <!-- 新增/编辑 start -->
    <EditDialog
      :dialog-visible="dialogVisible"
      :edit-form="editForm"
      :rules="rules"
      :material-type-first-list="materialTypeFirstList"
      :material-type-second-list="materialTypeSecondList"
      :material-type-third-list="materialTypeThirdList"
      :material-type-forth-list="materialTypeForthList"
      :material-type-fifth-list="materialTypeFifthList"
      :material-type-sixth-list="materialTypeSixthList"
      :material-type-seventh-list="materialTypeSeventhList"
      :main-params-list="mainParamsList"
      :custom-params-list="customParamsList"
      :main-price-list="mainPriceList"
      :suppiler-id="suppilerId"
      @handleAddType="handleAddType"
      @queryCodesByPid="queryCodesByPid"
      @onClearMaterialTypeList="onClearMaterialTypeList"
      @queryParamsByCode="queryParamsByCode"
      @queryParamsByCodePrice="queryParamsByCodePrice"
      @handleCloseEditDialog="handleCloseEditDialog"
    />
    <!-- 新增/编辑 end -->
    <!-- 添加品牌/系列/规格/颜色具体型号 start -->
    <AddTypeDialog
      :suppiler-id="suppilerId"
      :add-type-form="addTypeForm"
      @queryCodesByPid="queryCodesByPid"
      @queryParamsByCode="queryParamsByCode"
      @queryParamsByCodePrice="queryParamsByCodePrice"
    />
    <!-- 添加品牌/系列/规格/颜色具体型号 end -->
  </el-row>
</template>
<script>
import {
  querySuppilerMaterial,
  queryOrgCodeByPid,
  queryCodesByPid,
  queryParamsByCode,
  queryParamsByCodePrice
} from '@/api/register-api'
import EditDialog from '@/components/register/step6/edit-dialog'
import AddTypeDialog from '@/components/register/step6/add-type-dialog'
import { mapGetters } from 'vuex'
export default {
  components: {
    EditDialog,
    AddTypeDialog
  },
  props: {
    suppilerId: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      materialTypeFirstList: [],
      materialTypeSecondList: [],
      materialTypeThirdList: [],
      materialTypeForthList: [],
      materialTypeFifthList: [],
      materialTypeSixthList: [],
      materialTypeSeventhList: [],
      mainParamsList: [],
      customParamsList: [],
      mainPriceList: [],
      ruleForm: {
        mate_mark_price: ''
      },
      editForm: {
        typeOne: '',
        typeTwo: '',
        typeThree: '',
        typeFour: '',
        typeFive: '',
        typeSix: '',
        typeSeven: '',
        typethreediv: false,
        typefourdiv: false,
        typefivediv: false,
        typesixdiv: false,
        ppcgMaterialParamsValuesList: [
          {
            paramsId: '',
            paramValue: ''
          }
        ],
        ppcgMaterialParamsValuesPrivate: [
          {
            paramsId: '',
            paramValue: ''
          }
        ],
        mateName: '',
        mateCode: '',
        matePics: [],
        mateBrand: '',
        mateSeries: '',
        mateMode: '',
        mateSizeUnit: '',
        mateMarkPrice: '',
        mateMarkPriceUnit: '',
        mateProjectPrice: '',
        mateDevivyTime: '',
        mateAddress: '',
        mateUrl: '',
        mateSize: ''
      },
      addTypeForm: {
        dialogAddTitle: '',
        dialogAddVisible: false,
        type: '',
        name: '',
        code: '',
        parentName: {}
      },
      dialogVisible: false,
      loading: false,
      tableData: [
        {
          mateCode: 'xx10000'
        }
      ],
      columns: [
        {
          label: '材料编码',
          prop: 'mateCode'
        },
        {
          label: '使用部位类别',
          prop: 'typeOneName',
          width: '120'
        },
        {
          label: '材质类别',
          prop: 'typeTwoName'
        },
        {
          label: '分类类别',
          prop: 'typeThreeName'
        },
        {
          label: '品牌类别',
          prop: 'typeFourName'
        },
        {
          label: '系列类别',
          prop: 'typeFiveName'
        },
        {
          label: '规格类别',
          prop: 'typeSixName'
        },
        {
          label: '颜色具体型号类别',
          prop: 'typeSevenName',
          width: '200'
        },
        {
          label: '备注',
          prop: 'mateSize'
        },
        {
          label: '市场价',
          prop: 'mateMarkPrice'
        },
        {
          label: '市场价单位',
          prop: 'mateMarkPriceUnit',
          width: '120'
        },
        {
          label: '货期',
          prop: 'mateDevivyTime'
        },
        {
          label: '产地',
          prop: 'mateAddress'
        },
        {
          label: '产品手册',
          prop: 'mateManual'
        },
        {
          label: '安装手艺',
          prop: 'mateInstall'
        },
        {
          label: '检测报告',
          prop: 'mateTestReport'
        },
        {
          label: '网址',
          prop: 'mateUrl'
        },
        {
          label: '备注',
          prop: 'mateSize'
        },
        {
          prop: 'operate',
          label: '管理',
          fixed: 'right',
          operator: [
            {
              name: '编辑',
              type: 'primary',
              click: (row) => {
              }
            },
            {
              name: '详情',
              type: 'default',
              click: (row) => {
              }
            },
            {
              name: '删除',
              type: 'danger',
              click: (row) => {
              }
            }
          ]
        }
      ],
      rules: {}
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  created() {
    this.handleQuery()
    this.$bus.$on('queryCodesByPidBus', () => {
      this.queryCodesByPid({
        type: 'first'
      })
    })
  },
  mounted() {},
  methods: {
    async handleQuery() {
      try {
        const params = {
          // suppilerId: this.suppilerId',
          suppilerId: '421063778096906241',
          order: 'asc',
          offset: 0,
          limit: 10,
          mate_mark_price: this.ruleForm.mate_mark_price
        }
        this.loading = true
        this.tableData = (await querySuppilerMaterial(params)).rows || []
        this.loading = false
      } catch (e) {
        this.loading = false
        console.log(e)
      }
    },
    // 获取类别
    async queryCodesByPid(data) {
      try {
        let params = {
          createAt: this.user.createAt
        }
        if (data.type) {
          switch (data.type) {
            case 'first':
              params = {
                pid: 0,
                ismaster: 1
              }
              this.materialTypeFirstList = (await queryCodesByPid(params)).data || []
              this.$forceUpdate()
              break
            case 'second':
              params = {
                pid: data.item.id
              }
              this.materialTypeSecondList = (await queryCodesByPid(params)).data || []
              this.$forceUpdate()
              break
            case 'third':
              params = {
                pid: data.item.id
              }
              this.materialTypeThirdList = (await queryCodesByPid(params)).data || []
              this.$forceUpdate()
              break
            case 'forth':
              params = {
                pid: data.item.id
              }
              this.materialTypeForthList = (await queryCodesByPid(params)).data || []
              this.$forceUpdate()
              console.log('forth', this.materialTypeFifthList)
              break
            case 'fifth':
              params = {
                pid: data.item.id
              }
              this.materialTypeFifthList = (await queryCodesByPid(params)).data || []
              this.$forceUpdate()
              break
            case 'sixth':
              params = {
                pid: data.item.id
              }
              this.materialTypeSixthList = (await queryCodesByPid(params)).data || []
              this.$forceUpdate()
              break
            case 'seventh':
              params = {
                pid: data.item.id
              }
              this.materialTypeSeventhList = (await queryCodesByPid(params)).data || []
              this.$forceUpdate()
              break
            default:
              params = {
                pid: 0,
                ismaster: 1
              }
              this.materialTypeFirstList = (await queryCodesByPid(params)).data || []
              this.$forceUpdate()
          }
        }
      } catch (e) {
        console.log(e)
        this.materialTypeFirstList = []
        this.materialTypeSecondList = []
        this.materialTypeThirdList = []
        this.materialTypeForthList = []
        this.materialTypeFifthList = []
        this.materialTypeSixthList = []
        this.materialTypeSeventhList = []
      }
    },
    // 清空类型数组
    onClearMaterialTypeList(arr) {
      if (arr && arr.length > 0) {
        arr.length = 0
      }
    },
    // 获取主要技术参数
    async queryParamsByCode(data) {
      try {
        const params = {
          pid: data.item.id
        }
        const res = (await queryParamsByCode(params)).data || []
        if (res && res.length > 0) {
          res.forEach(item => {
            this.$set(item, 'paramsId', item.id)
            this.$set(item, 'paramValue', '')
          })
          if (data.type && data.type === 'third') {
            this.mainParamsList = res
          } else {
            res.forEach(r => {
              this.customParamsList.push(r)
            })
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
    // 获取主要价格
    async queryParamsByCodePrice(data) {
      try {
        const params = {
          pid: data.item.id
        }
        const res = (await queryParamsByCodePrice(params)).data || []
        if (res && res.length > 0) {
          res.forEach(item => {
            this.$set(item, 'paramsId', item.id)
            this.$set(item, 'paramValue', '')
          })
          this.mainPriceList = res
        }
      } catch (e) {
        console.log(e)
        this.mainPriceList = []
      }
    },
    handleReset(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
    },
    // 打开新增/编辑材料弹窗
    handleShowEditDialog() {
      this.dialogVisible = true
    },
    // 关闭新增/编辑材料弹窗
    handleCloseEditDialog() {
      this.dialogVisible = false
      this.editForm.typethreediv = false
      this.editForm.typefourdiv = false
      this.editForm.typefivediv = false
      this.editForm.typesixdiv = false
    },
    // 添加品牌/系列/规格/颜色具体型号
    handleAddType(data) {
      if (data.type) {
        switch (data.type) {
          case 'forth':
            this.addTypeForm.dialogAddTitle = '添加品牌'
            break
          case 'fifth':
            this.addTypeForm.dialogAddTitle = '添加系列'
            break
          case 'sixth':
            this.addTypeForm.dialogAddTitle = '添加规格'
            break
          case 'seventh':
            this.addTypeForm.dialogAddTitle = '添加颜色具体型号'
            break
        }
      }
      this.queryOrgCodeByPid(data)
      this.addTypeForm.type = data.type
      this.addTypeForm.parentItem = data.item
      this.addTypeForm.dialogAddVisible = true
    },
    // 添加品牌时获取组织编码
    async queryOrgCodeByPid(data) {
      try {
        const params = {
          pid: data.item.id
        }
        this.addTypeForm.code = (await queryOrgCodeByPid(params)).data || ''
      } catch (e) {
        console.log(e)
        this.addTypeForm.code = ''
      }
    },
    handleChange() {}
  }
}
</script>
<style lang="scss" scoped>
  .main-container {
    min-height: 500px;
  }
  .form-wrapper {
    .form-group, .btn-group {
      display: inline-block;
      vertical-align: top;
      &:before, &:after {
        display: none;
      }
    }
    .btn-group {
      padding: 0 10px;
    }
  }
  .table-wrapper {
    margin-bottom: 15px;
  }
  .page-wrapper {
    margin: 15px 0;
    text-align: right;
  }
</style>
