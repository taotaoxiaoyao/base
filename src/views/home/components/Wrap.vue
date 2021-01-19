<template>
  <div class="list-wrapper">
    <el-row v-if="title" class="header-group">
      <h3 class="txt-title">{{ title }}</h3>
      <slot name="enTitle">
        <p v-if="enTitle" class="txt-title-en">{{ enTitle }}</p>
      </slot>
    </el-row>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    enTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~@/styles/variables.scss';
  .list-wrapper {
  background-color: #fff;
  margin-bottom: 15px;
  padding-bottom: 15px;
  min-height: 300px;

  &:before {
    content: '';
    display: block;
    height: 3px;
    background: -webkit-repeating-linear-gradient(0deg, $navBg, $navBg 50px, $tabsActive 50px, $tabsActive 100px);
  }

  .header-group {
    padding: 20px 15px 10px 15px;

    .txt-title {
      font-size: 16px;
      color: #313303;
    }

    .txt-title-en {
      padding-top: 5px;
      margin: 0;
      font-size: 14px;
      color: #909399;
      font-weight: normal;
    }
  }
}
</style>
