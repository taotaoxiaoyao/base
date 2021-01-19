import methods from '@/mixin/methods'
import qs from 'qs'

export function get_ppcgGetSuppilerId(data) {
  return methods.commonRequest({
    api: '/sys/ppcgSuppilerBaseInfo/ppcgGetSuppilerId',
    method: 'post',
    data
  })
}

// 基本信息
export function save_ppcgSuppilerBaseInfoManager(data) {
  return methods.commonRequest({
    api: '/sys/ppcgSuppilerBaseInfo/save_ppcgSuppilerBaseInfoManager',
    method: 'post',
    data
  })
}

// 经办人信息
export function save_ppcgSupplierManageinfo(data) {
  return methods.commonRequest({
    api: '/sys/ppcgSupplierManageinfo/save',
    method: 'post',
    data
  })
}

// 财务状况
export function save_ppcgSupplierFianceinfo(data) {
  return methods.commonRequest({
    api: '/sys/ppcgSupplierFianceinfo/save',
    method: 'post',
    data
  })
}

// 公司人员查询
export function get_ppcgSupplierPeasonalinfo(params) {
  return methods.commonRequest({
    api: '/sys/ppcgSupplierPeasonalinfo/get',
    method: 'post',
    data: qs.stringify(params)
  })
}

// 公司人员管理
export function save_ppcgSupplierPeasonalinfo(data) {
  return methods.commonRequest({
    api: '/sys/ppcgSupplierPeasonalinfo/save_PpcgSupplierPeasonalinfo',
    method: 'post',
    data
  })
}

// 其他信息
export function save_ppcgSupplierOtherinfo(data) {
  return methods.commonRequest({
    api: '/sys/ppcgSupplierPeasonalinfo/save',
    method: 'post',
    data
  })
}

// 获取采购人员列表
export function get_PurchasingMembers(data) {
  return methods.commonRequest({
    api: '/form/formCustDialog/listData_userSelector',
    method: 'post',
    data: qs.stringify(data)
  })
}

// 获取材料列表
export function querySuppilerMaterial(data) {
  return methods.commonRequest({
    api: '/sys/ppcgMaterialInfo/querySuppilerMaterial?suppilerId=',
    method: 'post',
    data: qs.stringify(data)
  })
}

// 获取服务列表
export function querySuppilerServiceInfolist(data) {
  return methods.commonRequest({
    api: '/sys/ppcgServiceInfo/SuppilerServiceInfolistJson?serviceCode=',
    method: 'post',
    data: qs.stringify(data)
  })
}

// 获取施工人员列表
export function querySuppilerPersons(data) {
  return methods.commonRequest({
    api: '/sys/ppcgSuppilerPersons/listJson?suppilerId=',
    method: 'post',
    data: qs.stringify(data)
  })
}

// 获取材料使用部位类别列表
export function queryCodesByPid(data) {
  let params = ''
  if (data.ismaster && data.ismaster === 1) {
    params = `${data.pid}&ismaster=1`
  } else {
    params = data.pid
  }
  return methods.commonRequest({
    api: `/sys/ppcgMaterialCode/queryCodesByPid?pid=${params}`,
    method: 'get'
  })
}
// 获取材料使用部位类别列表
export function queryCodesByPid2(data) {
  return methods.commonRequest({
    api: `/sys/ppcgMaterialCode/queryCodesByPid`,
    method: 'get',
    data
  })
}

// 获取主要参数
export function queryParamsByCode(data) {
  return methods.commonRequest({
    api: `/sys/ppcgCommonParams/queryParamsByCode?pid=${data.pid}`,
    method: 'get'
  })
}

// 获取价格
export function queryParamsByCodePrice(data) {
  return methods.commonRequest({
    api: `/sys/ppcgCommonParams/queryParamsByCodePrice?pid=${data.pid}`,
    method: 'get'
  })
}

// 获取组织编码
export function queryOrgCodeByPid(data) {
  return methods.commonRequest({
    api: `/sys/ppcgMaterialCode/queryIdByPid?pid=${data.pid}`,
    method: 'get'
  })
}

// 保存品牌/系列/规格。。。
export function savePpcgMaterialCode(data) {
  return methods.commonRequest({
    api: `/sys/ppcgMaterialCode/savejson`,
    method: 'post',
    data
  })
}

// 保存材料
export function save_materInfo(data) {
  return methods.commonRequest({
    api: `/sys/ppcgMaterialInfo/save_materInfo`,
    method: 'post',
    data
  })
}

// 保存服务
export function save_serviceInfo(data) {
  return methods.commonRequest({
    api: `/sys/ppcgServiceInfo/save`,
    method: 'post',
    data
  })
}
