<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="footer-link">
        <a class="com-link" href="#/about">关于我们</a>
        <a class="com-link" href="#/about">企业服务</a>
        <a class="com-link" href="#/about">帮助中心</a>
        <a class="com-link" href="#/about">联系我们</a>
      </div>
      <div class="copyright">京ICP证130164号  ｜  Copyright © 2006-2019 PPCG</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterView',
  data() {
    return {
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

<style lang="scss" scoped>
.navbar {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      background-color: #42b983;
      color: #fff;
      border-color: #42b983;
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 2px;
      }
    }
  }
}
</style>
