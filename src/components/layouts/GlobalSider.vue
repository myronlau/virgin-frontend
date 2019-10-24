<template>
  <a-layout-sider
  :trigger="null"
  :collapsible="collapsible"
  v-model="collapsed"
  >
    <div class="logo">
      <router-link to="/dashboard/workplace">
        <img src="@/assets/logo.png">
        <h1>Vue Ant Pro</h1>
      </router-link>
    </div>
    <i-menu :collapsed="collapsed" :menuData="menuData" @select="onSelect"/>
  </a-layout-sider>
</template>

<script>
import IMenu from '../menu/menu'

export default {
  name: 'GlobalSider',
  components: {
    IMenu
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
    },
    menuData: {
      type: Array,
      required: true
    }
  },
  methods: {
    onSelect (obj) {
      this.$emit('menuSelect', obj)
    }
  },
}
</script>
<style lang="less" scoped>
.logo{
      height: 64px;
      position: relative;
      line-height: 64px;
      padding-left: 24px;
      -webkit-transition: all .3s;
      transition: all .3s;
      background: #002140;
      overflow: hidden;
      h1{
        color: #fff;
        font-size: 20px;
        margin: 0 0 0 12px;
        font-family: "Myriad Pro","Helvetica Neue",Arial,Helvetica,sans-serif;
        font-weight: 600;
        display: inline-block;
        height: 32px;
        line-height: 32px;
        vertical-align: middle;
      }
      img{
        width: 32px;
        display: inline-block;
        vertical-align: middle;
      }
    }
</style>