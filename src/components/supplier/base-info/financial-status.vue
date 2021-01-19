<template>
  <el-row class="financial-status">
    <el-row class="header-wrapper">
      <span class="txt-title">财务状态基础数据（单位：元）</span>
    </el-row>
    <el-row class="table-wrapper">
      <el-table
        v-loading="loading"
        :data="tableData"
        border
      >
        <el-table-column
          prop="year"
          label="年份"
        >
          <span class="txt">资产</span>
        </el-table-column>
        <el-table-column
          prop="year2014"
          label="2014年"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.value" size="small" clearable class="form-control" />
          </template>
        </el-table-column>
        <el-table-column
          prop="year2015"
          label="2015年"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.value" size="small" clearable class="form-control" />
          </template>
        </el-table-column>
        <el-table-column
          prop="year2016"
          label="2016年"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.value" size="small" clearable class="form-control" />
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row class="btn-group">
      <el-button type="primary" size="small">上一步</el-button>
      <el-button type="primary" size="small">下一步</el-button>
      <el-button type="primary" size="small">提交</el-button>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'FinancialStatus',
  data() {
    return {
      tableData: [],
      columns: [
        {
          label: '年份',
          prop: 'name'
        },
        {
          label: '2014年',
          prop: 'theme'
        },
        {
          label: '2015年',
          prop: 'type'
        },
        {
          label: '2016年',
          prop: 'gender'
        }
      ]
    }
  },
  created() {
    this.getContactList()
  },
  methods: {
    getContactList() {
      this.loading = true
      this.tableData = [
        {
          year: '2016',
          year2014: '100000',
          year2015: '200000',
          year2016: '300000'
        }
      ]
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.financial-status {
  .header-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 8px 0;
    .txt-title {
      font-size: 14px;
      color: #606266;
      flex: 1;
      padding-left: 10px;
      border-left: 2px solid #409EFF;
    }
  }
  .table-wrapper {
    margin: 15px 0;
  }
  .btn-group {
    padding-left: 90px;
    text-align: center;
  }
}
</style>
