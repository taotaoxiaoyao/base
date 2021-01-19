<template>
  <div class="app-wrapper">
    <div :class="{'fixed-header': fixedHeader}">
      <div class="fix-wrap">
        <header-view />
        <navbar />
        <banner-view />
      </div>
    </div>
    <app-main />
    <footer-view />
  </div>
</template>

<script>
import { HeaderView, BannerView, Navbar, AppMain, FooterView } from './components'

export default {
  name: 'Layout',
  components: {
    HeaderView,
    BannerView,
    Navbar,
    AppMain,
    FooterView
  },
  data() {
    return {
      fixedHeader: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .fixed-header {
    .fix-wrap {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9;
    }
    height: $headerHeight + $navHeight;
    transition: width 0.28s;
  }
</style>
