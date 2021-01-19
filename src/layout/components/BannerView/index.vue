<template>
  <div class="banner">
    <div class="banner-wrap" />
  </div>
</template>

<script>
import logo from '@/assets/ppcg-logo.png'
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
