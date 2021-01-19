<template>
  <el-row class="header">
    <el-row class="header-wrap">
      <el-row class="header-left">
        <a href="#/">
          <img :src="logo" class="logo" alt="logo">
        </a>
      </el-row>
      <el-row class="header-center">
        <el-input v-model="search" size="small" placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search" />
        </el-input>
      </el-row>
      <el-row class="header-right">
        <el-row class="txt-group">
          <el-link :underline="false">登录</el-link>
        </el-row>
        <el-row class="txt-group">
          <el-link :underline="false">注册</el-link>
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import logo from '@/assets/fl-logo.png'
export default {
  name: 'HeaderView',
  data() {
    return {
      logo,
      views: {
        path: '/index',
        title: '首页'
      },
      search: ''
    }
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path
    }
  }
}
</script>
