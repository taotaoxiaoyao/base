<template>
  <el-row class="app-container">
    <el-row class="main-container">
      <el-row class="form-wrapper">
        <el-form ref="ruleForm" :inline="true" :model="ruleForm" label-position="left" size="small" class="page-form">
          <el-row class="form-group">
            <el-form-item label="用户姓名：" prop="user_name">
              <el-input v-model="ruleForm.user_name" clearable class="form-control" placeholder="请输入用户姓名" />
            </el-form-item>
          </el-row>
          <el-row class="btn-group">
            <el-button type="primary" size="small" icon="el-icon-search" @click="handleQuery">查询</el-button>
            <el-button type="default" size="small" icon="el-icon-refresh" @click="handleReset('ruleForm')">重置</el-button>
            <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAdd">新增</el-button>
            <el-button type="primary" size="small" icon="el-icon-upload" @click="handleChange('ruleForm')">导入</el-button>
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
    />
    <!-- 新增/编辑 end -->
  </el-row>
</template>
<script>
import { querySuppilerPersons } from '@/api/register-api'
import EditDialog from '@/components/register/step8/edit-dialog'
export default {
  components: {
    EditDialog
  },
  props: {},
  data() {
    return {
      ruleForm: {
        user_name: ''
      },
      loading: false,
      editForm: {
        userName: '',
        userSex: '',
        userCard: '',
        userEdu: '',
        userDemo: '',
        produceCon: '',
        userTel: '',
        userAge: '',
        userDom: '',
        userJob: '',
        userJobType: '',
        userNogood: ''
      },
      dialogVisible: false,
      tableData: [
        {
          userName: 'xx10000'
        }
      ],
      columns: [
        {
          label: '用户姓名',
          prop: 'userName'
        },
        {
          label: '用户手机',
          prop: 'userTel'
        },
        {
          label: '性别',
          prop: 'userSex'
        },
        {
          label: '年龄',
          prop: 'userAge'
        },
        {
          label: '身份证号',
          prop: 'userCard'
        },
        {
          label: '户籍',
          prop: 'userDom'
        },
        {
          label: '教育程度',
          prop: 'userEdu'
        },
        {
          label: '职位',
          prop: 'userJob'
        },
        {
          label: '项目案例',
          prop: 'userDemo',
          width: '200'
        },
        {
          label: '工种',
          prop: 'userJobType',
          width: '200'
        },
        {
          label: '健康不良嗜',
          prop: 'userNogood',
          width: '200'
        },
        {
          label: '生产施工',
          prop: 'produceCon',
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
      ],
      rules: {}
    }
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
          'user_name_^VLK': this.ruleForm.user_name
        }
        this.loading = true
        this.tableData = (await querySuppilerPersons(params)).rows || []
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
