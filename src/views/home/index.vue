<template>
  <div class="app-container">
    <div class="main-left">
      <!-- 招标公告 start -->
      <Wrap
        title="招标公告"
        en-title="BIDDING ANNOUNCEMENT"
      >
        <el-row class="list-group">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <a href="javascript:;" class="txt-group">
                <span class="txt-title">{{ item.text }}</span>
                <span class="txt-time">{{ item.time }}</span>
              </a>
            </li>
          </ul>
        </el-row>
      </Wrap>
      <!-- 招标公告 end -->

      <!-- 变更公告 start -->
      <Wrap
        title="变更公告"
        en-title="CHANGE ANNOUNCEMENT"
      >
        <el-row class="list-group">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <a href="javascript:;" class="txt-group">
                <span class="txt-title">{{ item.text }}</span>
                <span class="txt-time">{{ item.time }}</span>
              </a>
            </li>
          </ul>
        </el-row>
      </Wrap>
      <!-- 变更公告 end -->

      <!-- 中标结果 start -->
      <Wrap
        title="中标结果"
        en-title="BID WINNING ANNOUNCEMENT"
      >
        <el-row class="list-group">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <a href="javascript:;" class="txt-group">
                <span class="txt-title">{{ item.text }}</span>
                <span class="txt-time">{{ item.time }}</span>
              </a>
            </li>
          </ul>
        </el-row>
      </Wrap>
      <!-- 中标结果 end -->
      <!-- 供应商招募 start -->
      <Wrap
        title="供应商招募"
        en-title="SUPPLIER RECRUITMENT"
      >
        <el-row class="list-group">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <a href="javascript:;" class="txt-group">
                <span class="txt-title">{{ item.text }}</span>
                <span class="txt-time">{{ item.time }}</span>
              </a>
            </li>
          </ul>
        </el-row>
      </Wrap>
      <!-- 供应商招募 end -->
    </div>
    <div class="main-right">
      <Wrap v-if="login" title="登录">
        <el-row class="form-wrapper">
          <el-form ref="ruleForm" :model="ruleForm" size="small" status-icon :rules="rules">
            <el-form-item label="" prop="userName">
              <el-input v-model="ruleForm.userName" prefix-icon="el-icon-user" placeholder="用户名" type="text" clearable />
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input v-model="ruleForm.password" prefix-icon="el-icon-key" placeholder="密 码" type="password" clearable />
            </el-form-item>
            <el-row class="link-group">
              <a class="forget-pass" href="#/">忘记密码？</a>
            </el-row>
            <el-row class="btn-group">
              <el-button type="warning" class="btn btn-register" size="small" @click="onRegister">注 册</el-button>
              <el-button type="primary" class="btn btn-login" size="small" @click="submitForm('ruleForm')">登 录</el-button>
            </el-row>
          </el-form>
        </el-row>
      </Wrap>
      <Wrap v-else class="logout">
        <img src="" class="profile">
        <a class="hello" href="#/">欢迎您，林木工程<span style="color: rgb(72, 129, 255)">[退出]</span></a>
        <div class="my">
          <a class="my-setting" href="#/">我的设置</a>
          <a class="my-msg" href="#/">我的消息</a>
        </div>
        <el-button type="primary" @click="handlerMy()">进入我的管理中心</el-button>
      </Wrap>
      <Wrap>
        <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">
            <el-row class="list-group">
              <ul>
                <li v-for="(item, index) in list" :key="index">
                  <a href="javascript:;" class="txt-group">
                    <span class="txt-title">{{ item.text }}</span>
                  </a>
                </li>
              </ul>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">
            <el-row class="list-group">
              <ul>
                <li v-for="(item, index) in list" :key="index">
                  <a href="javascript:;" class="txt-group">
                    <span class="txt-title">{{ item.text }}</span>
                  </a>
                </li>
              </ul>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </Wrap>
    </div>
  </div>
</template>
<script>
import Wrap from './components/Wrap'
export default {
  name: 'Home',
  components: {
    Wrap
  },
  data() {
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      login: true,
      activeName: 'first',
      ruleForm: {
        userName: '',
        password: ''
      },
      list: [
        {
          text: '抖音大厦整体墙面内饰装修装饰工程--材料版',
          time: '2019-11-27 16:06:06'
        },
        {
          text: '抖音大厦整体墙面内饰装修装饰工程--材料版',
          time: '2019-11-27 16:06:06'
        },
        {
          text: '抖音大厦整体墙面内饰装修装饰工程--材料版',
          time: '2019-11-27 16:06:06'
        },
        {
          text: '抖音大厦整体墙面内饰装修装饰工程--材料版',
          time: '2019-11-27 16:06:06'
        },
        {
          text: '抖音大厦整体墙面内饰装修装饰工程--材料版',
          time: '2019-11-27 16:06:06'
        }
      ],
      rules: {
        userName: [
          { validator: validateName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  created() {
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(1)
        }
      })
    },
    onRegister() {
      this.$router.push({
        path: '/register'
      })
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .app-container {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .main-left {
      width: 880px;
      margin-right: 20px;
      ::v-deep {
        .list-wrapper {
          &:before {
            width: 100px;
          }
        }
      }
    }
    .main-right {
      width: 300px;
      ::v-deep {
        .list-wrapper {
          &:before {
            width: 100%;
          }
        }
      }
      .form-wrapper {
        padding: 25px 15px;
        .link-group {
          padding-bottom: 10px;
          .forget-pass {
            display: block;
            text-align: right;
            font-size: 14px;
          }
        }
        .btn-group {
          display: flex;
          padding: 10px 0;
          justify-content: space-between;
          .btn {
            font-size: 14px;
            padding: 9px 35px;
          }
        }
      }
      .register {
        padding-top: 10px;
        display: block;
        text-align: right;
      }
      &.logout {
        font-size: 14px;
        text-align: center;
        .profile {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid #cccccc;
        }
        .hello {
          display: block;
          line-height: 3;
        }
        .my {
          a {
            display: inline-block;
            padding: 0 10px;
            line-height: 1.3;
          }
          a + a {
            border-left: 1px solid #666666;
          }
          .my-msg {
            position: relative;
            &::after {
              content: '5';
              position: absolute;
              padding: 0 10px;
              background: red;
              border: 6px;
            }
          }
        }
        .el-button {
          margin: 15px 0;
        }
      }
      ::v-deep .list-wrapper {
        .el-tabs {
          padding: 10px 0;
          .el-tabs__header {
            .el-tabs__item {
              &:hover,
              &.is-active {
                color: $tabsActive;
              }
            }
            .el-tabs__active-bar {
              background-color: $tabsActive;
            }
          }
          .list-group {
            ul {
              li {
                .txt-group {
                  .txt-title {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                }
              }
            }
          }
        }
      }
    }
    .list-group {
      padding: 0 15px;
      ul {
        li {
          .txt-group {
            display: flex;
            justify-content: space-between;
            line-height: 40px;
            color: #606266;
            font-size: 14px;
            -webkit-transition: all .2s;
            -moz-transition: all .2s;
            -ms-transition: all .2s;
            -o-transition: all .2s;
            transition: all .2s;
            .txt-time {
              color: #909399;
            }
          }
          &:hover {
            .txt-group {
              padding-left: 5px;
              .txt-title {
                color: $tabsActive;
              }
            }
          }
        }
      }
    }
  }
</style>
