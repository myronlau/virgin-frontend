<template>
  <a-layout>
    <!-- Sider -->
    <global-sider :collapsed="collapsed" :collapsible="true"/>
    <a-layout>
      <!-- Header -->
      <global-header :collapsed='collapsed' @toggleCollapse="toggleCollapse"/>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: minHeight }">
        <!-- <router-view/> -->
        Content
      </a-layout-content>
      <a-layout-footer style="padding: 0px">
        <global-footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import GlobalSider from './GlobalSider'
import GlobalHeader from './GlobalHeader'
import GlobalFooter from './GlobalFooter'

const minHeight = window.innerHeight - 64 - 24 - 24 - 73.6  //header: 64, margin-top: 24, margin-bottom: 24, footer: 73.8

export default {
  name: 'GlobalLayout',
  components: {
    GlobalSider,
    GlobalHeader,
    GlobalFooter
  },
  data() {
    return {
      collapsed: false,
      minHeight: minHeight + 'px'
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