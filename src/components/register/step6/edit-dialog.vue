<template>
  <el-dialog
    title="材料管理"
    :visible.sync="dialogVisible"
    class="dialog-xl"
  >
    <el-row class="form-wrapper">
      <el-form ref="editForm" :model="editForm" size="small" label-width="150px">
        <el-row class="form-group" prop="name">
          <el-row class="form-group__left">
            <el-form-item label="使用部位类别：" prop="typeOne">
              <el-row class="select-group">
                <el-select
                  v-model="editForm.typeOne"
                  value-key="id"
                  placeholder="请选择使用部位类别"
                  clearable
                  class="form-control"
                  @change="handleChange({
                    type: 'second',
                    item: editForm.typeOne
                  })"
                >
                  <el-option
                    v-for="(item, index) in materialTypeFirstList"
                    :key="item.id + index"
                    :label="item.name"
                    :value="item"
                  />
                </el-select>
              </el-row>
            </el-form-item>
            <el-form-item label="材质类别：" prop="typeTwo">
              <el-row class="select-group">
                <el-select
                  v-model="editForm.typeTwo"
                  value-key="id"
                  placeholder="请选择材质类别"
                  clearable
                  class="form-control"
                  @change="handleChange({
                    type: 'third',
                    item: editForm.typeTwo
                  })"
                >
                  <el-option
                    v-for="(item, index) in materialTypeSecondList"
                    :key="item.id + index"
                    :label="item.name"
                    :value="item"
                  />
                </el-select>
              </el-row>
            </el-form-item>
            <el-form-item label="分类类别：" prop="typeThree">
              <el-row class="select-group">
                <el-select
                  v-model="editForm.typeThree"
                  value-key="id"
                  placeholder="请选择分类类别"
                  clearable
                  class="form-control"
                  @change="handleChange({
                    type: 'forth',
                    item: editForm.typeThree
                  })"
                >
                  <el-option
                    v-for="(item, index) in materialTypeThirdList"
                    :key="item.id + index"
                    :label="item.name"
                    :value="item"
                  />
                </el-select>
              </el-row>
            </el-form-item>
            <el-form-item label="品牌类别：" prop="typeFour">
              <el-row class="select-group">
                <el-select
                  v-model="editForm.typeFour"
                  value-key="id"
                  placeholder="请选择品牌类别"
                  clearable
                  class="form-control"
                  @change="handleChange({
                    type: 'fifth',
                    item: editForm.typeFour
                  })"
                >
                  <el-option
                    v-for="(item, index) in materialTypeForthList"
                    :key="item.id + index"
                    :label="item.name"
                    :value="item"
                  />
                </el-select>
                <el-button
                  v-if="editForm.typethreediv"
                  icon="el-icon-plus"
                  type="primary"
                  class="btn-add"
                  @click="handleAdd({
                    type: 'forth',
                    item: editForm.typeThree
                  })"
                >
                  添加
                </el-button>
              </el-row>
            </el-form-item>
            <el-form-item label="系列类别：" prop="typeFive">
              <el-row class="select-group">
                <el-select
                  v-model="editForm.typeFive"
                  value-key="id"
                  placeholder="请选择系列类别"
                  clearable
                  class="form-control"
                  @change="handleChange({
                    type: 'sixth',
                    item: editForm.typeFive
                  })"
                >
                  <el-option
                    v-for="(item, index) in materialTypeFifthList"
                    :key="item.id + index"
                    :label="item.name"
                    :value="item"
                  />
                </el-select>
                <el-button
                  v-if="editForm.typefourdiv"
                  icon="el-icon-plus"
                  type="primary"
                  class="btn-add"
                  @click="handleAdd({
                    type: 'fifth',
                    item: editForm.typeFour
                  })"
                >
                  添加
                </el-button>
              </el-row>
            </el-form-item>
            <el-form-item label="规格类别：" prop="typeSix">
              <el-row class="select-group">
                <el-select
                  v-model="editForm.typeSix"
                  value-key="id"
                  placeholder="请选择规格类别"
                  clearable
                  class="form-control"
                  @change="handleChange({
                    type: 'seventh',
                    item: editForm.typeSix
                  })"
                >
                  <el-option
                    v-for="(item, index) in materialTypeSixthList"
                    :key="item.id + index"
                    :label="item.name"
                    :value="item"
                  />
                </el-select>
                <el-button
                  v-if="editForm.typefivediv"
                  icon="el-icon-plus"
                  type="primary"
                  class="btn-add"
                  @click="handleAdd({
                    type: 'sixth',
                    item: editForm.typeFive
                  })"
                >
                  添加
                </el-button>
              </el-row>
            </el-form-item>
            <el-form-item label="颜色具体型号类别：" prop="typeSeven">
              <el-row class="select-group">
                <el-select
                  v-model="editForm.typeSeven"
                  value-key="id"
                  placeholder="请选择颜色具体型号类别"
                  clearable
                  class="form-control"
                  @change="handleChange({
                    type: 'eighth',
                    item: editForm.typeSeven
                  })"
                >
                  <el-option
                    v-for="(item, index) in materialTypeSeventhList"
                    :key="item.id + index"
                    :label="item.name"
                    :value="item"
                  />
                </el-select>
                <el-button
                  v-if="editForm.typesixdiv"
                  icon="el-icon-plus"
                  type="primary"
                  class="btn-add"
                  @click="handleAdd({
                    type: 'seventh',
                    item: editForm.typeSix
                  })"
                >
                  添加
                </el-button>
              </el-row>
            </el-form-item>
            <el-form-item v-if="mainParamsList && mainParamsList.length > 0" label="主要技术参数：">
              <el-row class="list-group">
                <el-form-item v-for="(params, idx) in mainParamsList" :key="idx" :label="params.name + '：'" prop="paramValue">
                  <el-input v-model="params.paramValue" placeholder="参数值" clearable class="form-control" />
                </el-form-item>
              </el-row>
            </el-form-item>
            <el-form-item v-if="customParamsList && customParamsList.length > 0" label="定制参数：">
              <el-row class="list-group">
                <el-form-item v-for="(params, idx) in customParamsList" :key="idx" :label="params.name + '：'" prop="paramValue">
                  <el-input v-model="params.paramValue" placeholder="参数值" clearable class="form-control" />
                </el-form-item>
              </el-row>
            </el-form-item>
            <el-form-item v-if="mainPriceList && mainPriceList.length > 0" label="主要价格：">
              <el-row class="list-group">
                <el-form-item v-for="(params, idx) in mainPriceList" :key="idx" :label="params.name + '：'" prop="paramValue">
                  <el-input v-model="params.paramValue" placeholder="价格" clearable class="form-control" />
                </el-form-item>
              </el-row>
            </el-form-item>
          </el-row>
          <el-row class="form-group__right">
            <el-form-item label="材料名称：" prop="mateName">
              <el-input v-model="editForm.mateName" placeholder="请输入材料名称" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="材料名称：" prop="mateCode">
              <el-input v-model="editForm.mateCode" placeholder="请输入材料名称" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="样品照片：" prop="matePics">
              <file-upload v-model="editForm.matePics" />
            </el-form-item>
            <el-form-item v-if="false" label="品牌：" prop="mateBrand">
              <el-input v-model="editForm.mateBrand" placeholder="请输入品牌" clearable class="form-control" />
            </el-form-item>
            <el-form-item v-if="false" label="货品系列：" prop="mateSeries">
              <el-input v-model="editForm.mateSeries" placeholder="请输入货品系列" clearable class="form-control" />
            </el-form-item>
            <el-form-item v-if="false" label="产品型号：" prop="mateMode">
              <el-input v-model="editForm.mateMode" placeholder="请输入产品型号" clearable class="form-control" />
            </el-form-item>
            <el-form-item v-if="false" label="单位：" prop="mateMode">
              <el-input v-model="editForm.mateMode" placeholder="请输入单位" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="市场价：" prop="mateMarkPrice">
              <el-input v-model="editForm.mateMarkPrice" placeholder="请输入市场价" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="市场价单位：" prop="mateMarkPriceUnit">
              <el-input v-model="editForm.mateMarkPriceUnit" placeholder="请输入市场价单位" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="工程价：" prop="mateProjectPrice">
              <el-input v-model="editForm.mateProjectPrice" placeholder="请输入工程价" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="货期：" prop="mateDevivyTime">
              <el-input v-model="editForm.mateDevivyTime" placeholder="请输入货期" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="产地：" prop="mateAddress">
              <el-input v-model="editForm.mateAddress" placeholder="请输入产地" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="网址：" prop="mateUrl">
              <el-input v-model="editForm.mateUrl" placeholder="请输入网址" clearable class="form-control" />
            </el-form-item>
            <el-form-item label="备注：" prop="mateSize">
              <el-input v-model="editForm.mateSize" placeholder="请输入备注" clearable class="form-control" />
            </el-form-item>
          </el-row>
        </el-row>
        <el-row class="btn-group">
          <el-button size="small" @click="handleReset('editForm')">取 消</el-button>
          <el-button type="primary" size="small" @click="handleSubmitEdit('editForm')">确 定</el-button>
        </el-row>
      </el-form>
    </el-row>
  </el-dialog>
</template>

<script>
import { save_materInfo } from '@/api/register-api'
export default {
  name: 'EditDialog',
  props: {
    suppilerId: {
      type: String,
      default: () => ''
    },
    dialogVisible: {
      type: Boolean,
      default: () => true
    },
    editForm: {
      type: Object,
      default: () => {}
    },
    materialTypeFirstList: {
      type: Array,
      default: () => []
    },
    materialTypeSecondList: {
      type: Array,
      default: () => []
    },
    materialTypeThirdList: {
      type: Array,
      default: () => []
    },
    materialTypeForthList: {
      type: Array,
      default: () => []
    },
    materialTypeFifthList: {
      type: Array,
      default: () => []
    },
    materialTypeSixthList: {
      type: Array,
      default: () => []
    },
    materialTypeSeventhList: {
      type: Array,
      default: () => []
    },
    mainParamsList: {
      type: Array,
      default: () => []
    },
    customParamsList: {
      type: Array,
      default: () => []
    },
    mainPriceList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  watch: {
    'mainPriceList': {
      handler(val) {
        if (val && val.length > 0) {
          val.forEach(item => {
            this.editForm.mateProjectPrice = item.paramValue
          })
        }
      }
    }
  },
  methods: {
    // 各类别下拉框选择
    handleChange(data) {
      this.$emit('queryCodesByPid', data)
      this.editForm.mateCode = data.item.code
      if (data.type) {
        switch (data.type) {
          case 'second':
            this.editForm.typeTwo = ''
            this.editForm.typeThree = ''
            this.editForm.typeFour = ''
            this.editForm.typeFive = ''
            this.editForm.typeSix = ''
            this.editForm.typeSeven = ''
            this.$emit('onClearMaterialTypeList', this.materialTypeSecondList)
            this.$emit('onClearMaterialTypeList', this.materialTypeThirdList)
            this.$emit('onClearMaterialTypeList', this.materialTypeForthList)
            this.$emit('onClearMaterialTypeList', this.materialTypeFifthList)
            this.$emit('onClearMaterialTypeList', this.materialTypeSixthList)
            this.$emit('onClearMaterialTypeList', this.materialTypeSeventhList)
            break
          case 'third':
            this.editForm.typeThree = ''
            this.editForm.typeFour = ''
            this.editForm.typeFive = ''
            this.editForm.typeSix = ''
            this.editForm.typeSeven = ''
            this.$emit('onClearMaterialTypeList', this.materialTypeThirdList)
            this.$emit('onClearMaterialTypeList', this.materialTypeForthList)
            this.$emit('onClearMaterialTypeList', this.materialTypeFifthList)
            this.$emit('onClearMaterialTypeList', this.materialTypeSixthList)
            this.$emit('onClearMaterialTypeList', this.materialTypeSeventhList)
            this.$emit('queryParamsByCode', {
              item: data.item,
              type: data.type
            })
            this.$emit('queryParamsByCodePrice', {
              item: data.item,
              type: data.type
            })
            break
          case 'forth':
            this.editForm.typeFour = ''
            this.editForm.typeFive = ''
            this.editForm.typeSix = ''
            this.editForm.typeSeven = ''
            this.editForm.typethreediv = true
            this.$emit('onClearMaterialTypeList', this.materialTypeForthList)
            this.$emit('onClearMaterialTypeList', this.materialTypeFifthList)
            this.$emit('onClearMaterialTypeList', this.materialTypeSixthList)
            this.$emit('onClearMaterialTypeList', this.materialTypeSeventhList)
            this.$emit('queryParamsByCode', {
              item: data.item,
              type: data.type
            })
            this.$emit('queryParamsByCodePrice', {
              item: data.item,
              type: data.type
            })
            break
          case 'fifth':
            this.editForm.typeFive = ''
            this.editForm.typeSix = ''
            this.editForm.typeSeven = ''
            this.editForm.typefourdiv = true
            this.$emit('onClearMaterialTypeList', this.materialTypeFifthList)
            this.$emit('onClearMaterialTypeList', this.materialTypeSixthList)
            this.$emit('onClearMaterialTypeList', this.materialTypeSeventhList)
            this.$emit('queryParamsByCode', {
              item: data.item,
              type: data.type
            })
            this.$emit('queryParamsByCodePrice', {
              item: data.item,
              type: data.type
            })
            break
          case 'sixth':
            this.editForm.typeSix = ''
            this.editForm.typeSeven = ''
            this.editForm.typefivediv = true
            this.$emit('onClearMaterialTypeList', this.materialTypeSixthList)
            this.$emit('onClearMaterialTypeList', this.materialTypeSeventhList)
            this.$emit('queryParamsByCode', {
              item: data.item,
              type: data.type
            })
            this.$emit('queryParamsByCodePrice', {
              item: data.item,
              type: data.type
            })
            break
          case 'seventh':
            this.editForm.typeSeven = ''
            this.editForm.typesixdiv = true
            this.$emit('onClearMaterialTypeList', this.materialTypeSeventhList)
            this.$emit('queryParamsByCode', {
              item: data.item,
              type: data.type
            })
            this.$emit('queryParamsByCodePrice', {
              item: data.item,
              type: data.type
            })
            break
        }
      }
    },
    // 添加品牌/系列/规格/颜色具体型号
    handleAdd(data) {
      this.$emit('handleAddType', data)
    },
    // 提交新增/编辑数据
    handleSubmitEdit(formName) {
      try {
        this.$refs[formName].validate(async valid => {
          if (valid) {
            const params = {
              suppilerId: this.suppilerId,
              typeOne: this.editForm.typeOne,
              typeTwo: this.editForm.typeTwo,
              typeThree: this.editForm.typeThree,
              typethreediv: this.editForm.typethreediv,
              typeFour: this.editForm.typeFour,
              typefourdiv: this.editForm.typefourdiv,
              typeFive: this.editForm.typeFive,
              typefivediv: this.editForm.typefivediv,
              typeSix: this.editForm.typeSix,
              typesixdiv: this.editForm.typesixdiv,
              typeSeven: this.editForm.typeSeven,
              matePics: JSON.stringify(await this.getUploadList(this.matePics)) || [],
              mateMarkPrice: this.editForm.mateMarkPrice,
              mateMarkPriceUnit: this.editForm.mateMarkPriceUnit,
              mateProjectPrice: this.editForm.mateProjectPrice,
              mateDevivyTime: this.editForm.mateDevivyTime,
              mateAddress: this.editForm.mateAddress,
              mateUrl: this.editForm.mateUrl,
              mateSize: this.editForm.mateSize
            }
            // {
            //   "suppilerId": "421265836861292545",
            //   "typeOne": "01",
            //   "mateCode": "01.01.01.01.01.01",
            //   "typeTwo": "01.01",
            //   "ppcgMaterialParamsValuesPrice": {
            //   "paramsId": {
            //     "1": "420923193240059905"
            //   }
            // },
            //   "ppcgMaterialParamsValuesList": {
            //   "paramsId": {
            //     "1": "420281371109883905",
            //       "2": "420281597340418049"
            //   },
            //   "paramValue": {
            //     "1": "100",
            //       "2": "100"
            //   }
            // },
            //   "typeThree": "01.01.01",
            //   "ppcgMaterialParamsValuesPrivate": {
            //   "paramsId": {
            //     "1": "420281487816916993",
            //       "2": "420281599391956993",
            //       "3": "420392465779654657",
            //       "4": "420392481058193409",
            //       "5": "420392483966418945"
            //   },
            //   "paramValue": {
            //     "1": "100",
            //       "2": "100",
            //       "3": "100",
            //       "4": "100",
            //       "5": "100"
            //   }
            // },
            //   "typethreediv": true,
            //   "typeFour": "01.01.01.01",
            //   "typefourdiv": true,
            //   "typeFive": "01.01.01.01.01",
            //   "typefivediv": true,
            //   "typeSix": "01.01.01.01.01.01",
            //   "typesixdiv": true,
            //   "typeSeven": "01.01.01.01.01.01.01",
            //   "matePics": "[{\"id\":\"421267386112409601\",\"name\":\"bg2.png\",\"src\":\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCADIAMgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUBBv/EABoQAQABBQAAAAAAAAAAAAAAAAABAgMWVJL/xAAXAQEBAQEAAAAAAAAAAAAAAAAABgQF/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAMUUv/aAAwDAQACEQMRAD8ApAK9MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvYpe2aOZMUvbNHMstyDTRVmygi9il7Zo5kxS9s0cyXINFWbKCL2KXtmjmTFL2zRzJcg0VZsoIvYpe2aOZMUvbNHMlyDRVmygi9il7Zo5kxS9s0cyXINFWbKCL2KXtmjmTFL2zRzJcg0VZsoIvYpe2aOZMUvbNHMlyDRVmygi9il7Zo5kxS9s0cyXINFWbKCL2KXtmjmTFL2zRzJcg0VZsoIvYpe2aOZMUvbNHMlyDRVmygi9il7Zo5kxS9s0cyXINFWbKCL2KXtmjmTFL2zRzJcg0VZsoIvYpe2aOZC5BoqzZdiNE07zBoDBoDBoDBoDBoDBoDBoDBoDBoDBoDBoDBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==\"}]",
            //   "mateMarkPrice": "100",
            //   "mateMarkPriceUnit": "元",
            //   "mateProjectPrice": "200",
            //   "mateDevivyTime": "100",
            //   "mateAddress": "100",
            //   "mateUrl": "www.h.com",
            //   "mateSize": "测试"
            // }
            const res = (await save_materInfo(params)).data || {}
            console.log(res)
          }
        })
      } catch (e) {
        console.log(e)
      }
    },
    // 重置
    handleReset(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
      this.$emit('handleCloseEditDialog')
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  .form-group {
    display: flex;
    .form-group__left,
    .form-group__right {
      flex: 1;
    }
  }
  .btn-group {
    text-align: right;
  }
  .select-group {
    display: flex;
    .form-control {
      flex: 1;
    }
    .btn-add {
      margin-left: 10px;
    }
  }
  .list-group {
    ::v-deep .el-form-item__label {
      width: 100px !important;
      text-align: left;
    }
    ::v-deep .el-form-item__content {
      margin-left: 100px !important;
    }
  }
}
</style>
