<template>
  <a-layout-sider
  :trigger="null"
  collapsible
  v-model="collapsed"
  >
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" :openKeys="openKeys" @openChange="onOpenChange">
      <a-menu-item key="1">
        <a-icon type="dashboard" />
        <span>Dashaboard</span>
      </a-menu-item>
      <!-- <a-sub-menu key="1">
        <span slot="title"><a-icon type="dashboard" /><span>Dashaboard</span></span>
      </a-sub-menu> -->
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="3">
        <a-icon type="setting" />
        <span>Setting</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'GlobalSider',
  data() {
    return {
      rootSubmenuKeys: ['1', 'sub1', 'sub2', '3'],
      openKeys: [],
      cachedOpenKeys: []
    }
  },
  props: {
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  },
  watch: {
    collapsed (val) {
      if (val) {
        this.cachedOpenKeys = this.openKeys
        this.openKeys = []
      } else {
        this.openKeys = this.cachedOpenKeys
      }
    }
  }
}
</script>
<style>
.logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>