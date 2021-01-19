<template>
  <el-row class="contacts-list">
    <el-row class="header-wrapper">
      <span class="txt-title">资质详细信息</span>
      <el-button type="primary" size="small" icon="el-icon-plus" class="btn-add">新增</el-button>
    </el-row>
    <el-row class="table-wrapper">
      <el-table
        v-loading="loading"
        :data="tableData"
        border
      >
        <el-table-column type="index" />
        <el-table-column
          v-for="(col,idx) in columns"
          :key="idx"
          :prop="col.prop"
          :label="col.label"
          :formatter="col.formatter"
        />
      </el-table>
    </el-row>
    <el-row class="btn-group">
      <el-button type="primary" size="small">下一步</el-button>
      <el-button type="primary" size="small">提交</el-button>
    </el-row>
    <AddQualificationDialog
      :page-form="pageForm"
      :options="options"
      :dialog-visible="dialogVisible"
    />
  </el-row>
</template>

<script>
import AddQualificationDialog from '@/components/supplier/base-info/add-qualification-dialog'
export default {
  name: 'QualificationList',
  components: {
    AddQualificationDialog
  },
  data() {
    return {
      pageForm: {
        name: '',
        list: [],
        flag: 1
      },
      dialogVisible: false,
      loading: false,
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      tableData: [],
      columns: [
        {
          label: '产品与服务名',
          prop: 'name'
        },
        {
          label: '主资质',
          prop: 'theme'
        },
        {
          label: '综合等级',
          prop: 'type'
        },
        {
          label: '资质证书名称',
          prop: 'gender'
        },
        {
          label: '资质证书编号',
          prop: 'position'
        },
        {
          label: '到期日',
          prop: 'mobile'
        },
        {
          label: '邮箱',
          prop: 'email'
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
          name: '戴海',
          type: '企业法人',
          gender: '男',
          position: '总裁',
          mobile: '13244556677',
          telephone: '0718-000000',
          email: '1@1.cn'
        }
      ]
      this.loading = false
    }
  }
}

</script>

<style lang="scss" scoped>
  .contacts-list {
    .header-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
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
