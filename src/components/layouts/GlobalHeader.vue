<template>
  <!-- <a-layout-header style="background: #fff; padding: 0"> -->
  <a-layout-header class="global-header">
    <a-icon
      class="icon"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="toggleCollapse"
    />
    <div style="float: right">
      <header-avatar class="header-item"/>
    </div>
  </a-layout-header>
</template>

<script>
import HeaderAvatar from './HeaderAvatar'

export default {
  name: 'GlobalHeader',
  components: {
    HeaderAvatar
  },
  props: {
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    toggleCollapse () {
      this.$emit('toggleCollapse')
    }
  }

}
</script>
<style lang='less' scoped>
.global-header {
  background: #fff;
  padding: 0 12px 0 0;
  -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  position: relative;
}
.icon {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
.icon:hover {
  color: #1890ff;
}
.header-item {
  padding: 0 12px;
  display: inline-block;
  height: 100%;
  cursor: pointer;
  i {
    font-size: 16px;
    color: rgba(0,0,0,.65);
  }
}
.header-item:hover {
  background: #e6f7ff;
}
</style>