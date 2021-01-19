<template>
  <el-row class="app-container">
    <el-row class="main-container">
      <el-row class="form-wrapper">
        <el-form ref="ruleForm" :inline="true" :model="ruleForm" label-position="left" size="small" class="page-form">
          <el-row class="form-group">
            <el-form-item label="分包名称：" prop="service_name">
              <el-input v-model="ruleForm.service_name" clearable class="form-control" placeholder="请输入分包名称" />
            </el-form-item>
            <el-form-item label="分包编码：" prop="service_code">
              <el-input v-model="ruleForm.service_code" clearable class="form-control" placeholder="请输入分包编码" />
            </el-form-item>
          </el-row>
          <el-row class="btn-group">
            <el-button type="primary" size="small" icon="el-icon-search" @click="handleQuery">查询</el-button>
            <el-button type="default" size="small" icon="el-icon-refresh" @click="handleReset('ruleForm')">重置</el-button>
            <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAdd">新增</el-button>
            <el-button type="primary" size="small" icon="el-icon-search" @click="handleChange('ruleForm')">服务选择</el-button>
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
    <!-- @callback="刷新列表的函数" -->
    <EditDialog
      v-model="dialogVisible"
      :poslist="poslist"
      :poslisttwo="poslisttwo"
      :poslist-three="poslistThree"
      :poslist-four="poslistFour"
      @queryCodesByPid="queryCodesByPid"
      @change="onChange"
    />
    <!-- 新增/编辑 end -->
  </el-row>
</template>
<script>
import mixins from '../mixins/index'
import EditDialog from '@/components/register/step7/edit-dialog'
import { querySuppilerServiceInfolist, queryCodesByPid2 } from '@/api/register-api'
export default {
  components: {
    EditDialog
  },
  mixins: [mixins],
  props: {},
  data() {
    return {
      poslist: [],
      poslisttwo: [],
      poslistThree: [],
      poslistFour: [],
      ruleForm: {
        service_name: '',
        service_code: ''
      },
      dialogVisible: false,
      loading: false,
      tableData: [
        {
          serviceName: 'xx10000'
        }
      ],
      columns: [
        {
          label: '服务名称',
          prop: 'serviceName'
        },
        {
          label: '劳务分包',
          prop: 'typeOneName'
        },
        {
          label: '分类',
          prop: 'typeTwoName'
        },
        {
          label: '专业',
          prop: 'typeThreeName'
        },
        {
          label: '工作内容',
          prop: 'typeFourName'
        },
        {
          label: '分包编码',
          prop: 'serviceCode'
        },
        {
          label: '市场价',
          prop: 'markPrice'
        },
        {
          label: '工程价',
          prop: 'engineerPrice'
        },
        {
          label: '服务说明',
          prop: 'serviceRemark',
          width: '200'
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
      ]
    }
  },
  mounted() {
    this.queryCodesByPid('poslist', { ismaster: 0 })
  },
  methods: {
    // 获取类别
    async queryCodesByPid(key, data = {}) {
      try {
        let params = {
          createAt: this.user.createAt,
          pid: 0
        }
        console.log(data)
        params = Object.assign({}, params, data)
        this[key] = (await queryCodesByPid2(params)).data || []
        this.$forceUpdate()
      } catch (e) {
        console.log(e)
        this[key] = []
      }
    },
    handleChange() {},
    onChange(list) {
      if (!Array.isArray(list)) return
      list.forEach(item => {
        this[item] = []
      })
    },
    async handleQuery() {
      try {
        const params = {
          // suppilerId: this.suppilerId',
          suppilerId: '421063778096906241',
          order: 'asc',
          offset: 0,
          limit: 10,
          'service_name_^VLK': this.ruleForm.service_name,
          'service_code_^VLK': this.ruleForm.service_code
        }
        this.loading = true
        this.tableData = (await querySuppilerServiceInfolist(params)).rows || []
        this.loading = false
      } catch (e) {
        this.loading = false
        console.log(e)
      }
    },
    handleReset(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
    },
    handleAdd() {
      this.dialogVisible = true
    }
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
