export default {
  // 消息中心-阅读状态
  readStatusOptions: [
    {
      key: 0,
      label: '未读'
    },
    {
      key: 1,
      label: '已读'
    }
  ],

  // 我的投标-招标分类
  biddingCategoryOptions: [
    {
      key: 1,
      label: '工程类'
    },
    {
      key: 3,
      label: '设计类'
    },
    {
      key: 4,
      label: '营销策划类'
    },
    {
      key: 5,
      label: 'IT类'
    },
    {
      key: 6,
      label: '行政人事类'
    },
    {
      key: 7,
      label: '物业类'
    }
  ],

  // 我的投标-招标状态
  biddingStatusOptions: [
    {
      key: 1,
      label: '已报名'
    },
    {
      key: 2,
      label: '已发标'
    },
    {
      key: 3,
      label: '已开标'
    },
    {
      key: 4,
      label: '已定标'
    },
    {
      key: 5,
      label: '废标/中止'
    },
    {
      key: 6,
      label: '已回标'
    },
    {
      key: 7,
      label: '未回标'
    }
  ],

  // 在线提疑-类型
  questionTypeOptions: [
    {
      key: 1,
      label: '商务类'
    },
    {
      key: 2,
      label: '技术类'
    },
    {
      key: 3,
      label: '法律类'
    },
    {
      key: 4,
      label: '其他'
    },
    {
      key: 5,
      label: '项目'
    }
  ],

  // 在线澄清-回复状态
  replyStatusOptions: [
    {
      key: -1,
      label: '所有状态'
    },
    {
      key: 1,
      label: '未回复'
    },
    {
      key: 2,
      label: '已回复'
    }
  ],

  // 基本资料-公司基本信息-企业性质
  businessNatureOptions: [
    {
      key: 1,
      label: '国企'
    },
    {
      key: 2,
      label: '民营'
    },
    {
      key: 3,
      label: '外资'
    },
    {
      key: 4,
      label: '合资'
    },
    {
      key: 5,
      label: '其他'
    }
  ],

  // 基本资料-公司基本信息-是否是上市公司
  companyTypeOptions: [
    {
      key: 1,
      label: '非上市公司'
    },
    {
      key: 2,
      label: '上市公司'
    },
    {
      key: 3,
      label: '未选择'
    }
  ],

  // 基本资料-其他信息-RMB单位
  unitOptions: [
    {
      key: 1,
      label: '元'
    },
    {
      key: 2,
      label: '万元'
    },
    {
      key: 3,
      label: '亿元'
    }
  ],

  // 基本资料-其他信息-币种类型
  currencyTypeOptions: [
    {
      key: 1,
      label: '人民币'
    },
    {
      key: 2,
      label: '美元'
    },
    {
      key: 3,
      label: '欧元'
    },
    {
      key: 4,
      label: '新加坡元'
    },
    {
      key: 5,
      label: '韩元'
    },
    {
      key: 6,
      label: '瑞尔'
    },
    {
      key: 7,
      label: '林吉特'
    },
    {
      key: 8,
      label: '澳元'
    }
  ],

  // 注册-基本信息-是否有工厂
  supplierFactory: [
    {
      label: '有',
      value: 0
    }, {
      label: '无',
      value: 1
    }
  ],

  // 注册-基本信息-所有制属性
  supplierProperty: [
    {
      label: '国有',
      value: 0
    }, {
      label: '私有',
      value: 1
    }, {
      label: '合资',
      value: 2
    }, {
      label: '外企',
      value: 3
    }, {
      label: '其它',
      value: 4
    }
  ],

  // 注册-其他信息-供应商类型选择
  supplierTypeOptions: [
    {
      value: 1,
      label: '材料商'
    },
    {
      value: 2,
      label: '服务商'
    }
  ],

  // 注册-其他信息-代理类型选择
  supplierPropertyOptions: [
    {
      value: 1,
      label: '生产厂商'
    },
    {
      value: 2,
      label: '总经销'
    },
    {
      value: 3,
      label: '总代理'
    },
    {
      value: 4,
      label: '一级代理/经销'
    },
    {
      value: 5,
      label: '二级代理/经销'
    },
    {
      value: 6,
      label: '零售'
    },
    {
      value: 7,
      label: '其他'
    }
  ],

  // 注册-财务状态-纳税规模选择
  taxScaleOptions: [
    {
      value: '1',
      label: '小规模'
    },
    {
      value: '2',
      label: '一般纳税人'
    }
  ],

  // 注册-财务状态-税率选择
  taxRateOptions: [
    {
      value: '1',
      label: '3%'
    },
    {
      value: '2',
      label: '6%'
    },
    {
      value: '3',
      label: '9%'
    },
    {
      value: '4',
      label: '13%'
    }
  ],

  // 注册-财务状态-发票类型选择
  invoiceTypeOptions: [
    {
      value: '1',
      label: '增值税普通发票'
    },
    {
      value: '2',
      label: '增值税专用发票'
    }
  ],
  // 注册-施工人员管理-工种选择
  userJobTypeOptions: [
    {
      value: '1',
      label: '木工'
    },
    {
      value: '2',
      label: '泥作'
    },
    {
      value: '3',
      label: '水管工'
    }
  ],
  // 注册-施工人员管理-健康不良嗜选择
  userNogoodOptions: [
    {
      value: '1',
      label: '高血压'
    },
    {
      value: '2',
      label: '心脏病'
    },
    {
      value: '3',
      label: '吸毒'
    },
    {
      value: '4',
      label: '犯罪记录'
    }
  ],
  // 注册-施工人员管理-性别选择
  genderOptions: [
    {
      value: '1',
      label: '男'
    },
    {
      value: '2',
      label: '女'
    }
  ],
  // 注册-施工人员管理-教育选择
  userEduOptions: [
    {
      value: '1',
      label: '小学'
    },
    {
      value: '2',
      label: '初中'
    },
    {
      value: '3',
      label: '高中'
    },
    {
      value: '4',
      label: '大专'
    },
    {
      value: '5',
      label: '本科'
    },
    {
      value: '6',
      label: '硕士'
    },
    {
      value: '7',
      label: '博士'
    },
    {
      value: '8',
      label: '院士'
    }
  ],
  // 注册-施工人员管理-生产施工选择
  produceConOptions: [
    {
      value: '1',
      label: '生产'
    },
    {
      value: '2',
      label: '施工'
    }
  ]
}
