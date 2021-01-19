<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane
      v-for="(item, index) in tabsList"
      :key="index"
      :name="item.key"
      :label="item.label"
    >
      <el-row class="table-wrapper">
        <el-table
          v-loading="loading"
          :data="item.list"
          border
        >
          <el-table-column
            v-for="(col,idx) in columns"
            :key="idx"
            :prop="col.prop"
            :label="col.label"
            :formatter="col.formatter"
          />
        </el-table>
      </el-row>
      <el-row class="page-wrapper">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
        />
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'TabsSwitch',
  props: {
    tabsList: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      activeName: 'engineering'
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('handleClick', e)
    }
  }
}
</script>

<style scoped>

</style>
