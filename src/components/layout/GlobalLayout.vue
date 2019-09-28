<template>
  <a-layout>
    <!-- Sider -->
    <global-sider :collapsed="collapsed" :collapsible="true"/>
    <a-layout>
      <!-- Header -->
      <global-header :collapsed='collapsed' @toggleCollapse="toggleCollapse"/>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <!-- <router-view/> -->
        Content
      </a-layout-content>
      <!-- header -->
      <!-- <global-header :collapsed="collapsed" @toggleCollapse="toggleCollapse"/> -->
      <!-- content -->
      <!-- <a-layout-content :style="{minHeight: minHeight, margin: '24px 24px 0'}">
        <slot></slot>
      </a-layout-content> -->
      <!-- footer -->
      <!-- <a-layout-footer style="padding: 0px">
        <global-footer />
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<script>
import GlobalSider from './GlobalSider'
import GlobalHeader from './GlobalHeader'

export default {
  name: 'GlobalLayout',
  components: {
    GlobalSider,
    GlobalHeader
  },
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style lang='less' scoped>
#layout-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
</style>