<template>
  <el-dialog
    title="项目信息(近三年已完成重点项目情况)"
    :visible.sync="dialogRecentThreeYearsProjectVisible"
    class="dialog-md"
  >
    <el-row class="form-wrapper">
      <el-form :model="pageForm" size="small" label-width="120px">
        <el-row class="form-group" prop="name">
          <el-form-item label="项目名称：">
            <el-input v-model="pageForm.name" placeholder="请输入项目名称" clearable class="form-control" />
          </el-form-item>
          <el-form-item label="甲方单位：">
            <el-input v-model="pageForm.name" placeholder="请输入甲方单位" clearable class="form-control" />
          </el-form-item>
          <el-form-item label="合同金额：">
            <el-row class="input-group">
              <el-row class="input-item">
                <el-input v-model="pageForm.name" placeholder="请输入营业额" clearable class="form-control" />
              </el-row>
              <el-row class="select-item">
                <el-select v-model="pageForm.name" placeholder="请选择市区" clearable class="form-control">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-row>
              <el-row class="select-item">
                <el-select v-model="pageForm.name" placeholder="请选择城镇" clearable class="form-control">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-row>
            </el-row>
          </el-form-item>
          <el-form-item label="完工日期：">
            <el-date-picker
              v-model="pageForm.name"
              clearable
              class="form-control"
              align="right"
              type="date"
              placeholder="请选择完工日期"
              format="yyyy-MM-dd"
              value-format="timestamp"
            />
          </el-form-item>
          <el-form-item label="项目描述：">
            <el-input v-model="pageForm.name" type="textarea" placeholder="请输入项目描述" clearable class="form-control" />
          </el-form-item>
          <el-form-item label="相关文档：">
            <el-card shadow="never" class="documents-card">
              <el-row slot="header" class="btn-group">
                <el-button type="primary" size="mini" icon="el-icon-plus">添加</el-button>
                <el-button type="danger" size="mini" icon="el-icon-delete">删除</el-button>
              </el-row>
              <el-row class="table-wrapper">
                <el-table
                  v-loading="loading"
                  :data="tableData"
                  border
                >
                  <el-table-column type="selection" />
                  <el-table-column
                    prop="name"
                    label="名称"
                  >
                    <span class="txt">项目内容</span>
                  </el-table-column>
                  <el-table-column
                    prop="opt"
                    label="操作"
                  >
                    <!--                    <template slot-scope="scope">-->
                    <!--                      <el-button icon="el-icon-download" size="mini" type="primary">下载</el-button>-->
                    <!--                    </template>-->
                  </el-table-column>
                </el-table>
              </el-row>
            </el-card>
          </el-form-item>
        </el-row>
      </el-form>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogRecentThreeYearsProjectVisible = false">取 消</el-button>
      <el-button type="primary" size="small" @click="dialogRecentThreeYearsProjectVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'RecentThreeYearsProjectDialog',
  props: {
    dialogRecentThreeYearsProjectVisible: {
      type: Boolean,
      default: () => false
    },
    pageForm: {
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
      tableData: []
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
          name: '项目内容'
        }
      ]
      this.loading = false
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
        .input-group {
          display: flex;
          .select-item {
            flex: 1;
            margin-left: 10px;
          }
        }
        .form-control {
          width: 100%;
        }
        .documents-card {
          .el-card__header, .el-card__body {
            padding: 10px;
          }
          .table-wrapper {
            .el-table th {
              padding: 5px;
            }
            .el-table td {
              padding: 5px;
            }
          }
        }
      }
    }

    .btn-group {
      text-align: right;
    }
  }
</style>
