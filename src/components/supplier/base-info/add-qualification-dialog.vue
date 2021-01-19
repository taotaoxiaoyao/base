<template>
  <el-dialog
    title="资质信息"
    :visible.sync="dialogVisible"
    class="dialog-md"
  >
    <el-row class="form-wrapper">
      <el-form :model="pageForm" size="small" label-width="120px">
        <el-row class="form-group" prop="name">
          <el-form-item label="资质大类：">
            <el-select v-model="pageForm.name" placeholder="请选择资质大类" clearable class="form-control">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="资质小类：">
            <el-select v-model="pageForm.name" placeholder="请选择资质小类" clearable class="form-control">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="主资质：">
            <el-switch
              v-model="pageForm.flag"
              active-text="按月付费"
              inactive-text="按年付费"
            />
          </el-form-item>
          <el-form-item label="资质证书名称：">
            <el-select v-model="pageForm.name" placeholder="请选择资质证书名称" clearable class="form-control">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="综合等级：">
            <el-select v-model="pageForm.name" placeholder="请选择综合等级" clearable class="form-control">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="资质证书编号：">
            <el-input v-model="pageForm.name" placeholder="请输入资质证书编号" clearable class="form-control" />
          </el-form-item>
          <el-form-item label="资质证书附件：">
            <el-input v-model="pageForm.name" placeholder="请输入资质证书编号" clearable class="form-control" />
          </el-form-item>
          <el-form-item label="到期日：">
            <el-date-picker
              v-model="pageForm.name"
              clearable
              class="form-control"
              align="right"
              type="date"
              placeholder="请选择到期日"
              format="yyyy-MM-dd"
              value-format="timestamp"
            />
          </el-form-item>
          <el-form-item label="说明：">
            <el-input v-model="pageForm.name" type="textarea" placeholder="请输入说明" clearable class="form-control" />
          </el-form-item>
          <el-form-item label="相关文档：">
            <el-card shadow="never" class="documents-card">
              <el-row slot="header" class="btn-group">
                <el-button type="primary" size="mini" icon="el-icon-plus">添加</el-button>
                <el-button type="danger" size="mini" icon="el-icon-delete">删除</el-button>
              </el-row>
              <el-row class="table-wrapper">
                <!--                <el-table-->
                <!--                  v-loading="loading"-->
                <!--                  :data="tableData"-->
                <!--                  border-->
                <!--                >-->
                <!--                  <el-table-column type="selection" />-->
                <!--                  <el-table-column-->
                <!--                    prop="name"-->
                <!--                    label="名称"-->
                <!--                  >-->
                <!--                    <span class="txt">项目内容</span>-->
                <!--                  </el-table-column>-->
                <!--                  <el-table-column-->
                <!--                    prop="opt"-->
                <!--                    label="操作"-->
                <!--                  >-->
                <!--                    &lt;!&ndash;                    <template slot-scope="scope">&ndash;&gt;-->
                <!--                    &lt;!&ndash;                      <el-button icon="el-icon-download" size="mini" type="primary">下载</el-button>&ndash;&gt;-->
                <!--                    &lt;!&ndash;                    </template>&ndash;&gt;-->
                <!--                  </el-table-column>-->
                <!--                </el-table>-->
              </el-row>
            </el-card>
          </el-form-item>
        </el-row>
      </el-form>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogTenderReceiptVisible = false">取 消</el-button>
      <el-button type="primary" size="small" @click="dialogTenderReceiptVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddContactDialog',
  props: {
    dialogVisible: {
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
