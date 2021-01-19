<template>
  <div class="navbar">
    <div class="nav-wrap">
      <router-link
        v-for="tag in list"
        ref="tag"
        :key="tag.path"
        :class="isActive(tag) ? 'active' : ''"
        :to="{ path: tag.path }"
        class="item"
      >
        {{ tag.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      list: [{
        path: '/index',
        title: '首页'
      }, {
        path: '/bidding',
        title: '招标公告'
      }, {
        path: '/change',
        title: '变更公告'
      }, {
        path: '/win',
        title: '中标结果'
      }, {
        path: '/recruit',
        title: '供应商招募'
      }]
    }
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path
    }
  }
}
</script>
