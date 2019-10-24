<template>
  <!-- <a-dropdown style="display: inline-block; height: 100%; vertical-align: initial" > -->
  <a-dropdown>
    <span>
      <!-- <a-avatar style="vertical-align: middle;" size="default" shape="circle" :src="currUser.avatar"/> -->
      <a-avatar class="avatar" size="default" shape="circle" :src="currUser.avatar"/>
      <span>{{ currUser.name }}</span>
    </span>
    <!-- <a-menu style="width: 150px" slot="overlay" class="user-dropdown-menu-wrapper"> -->
    <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
      <a-menu-item key="0">
        <a-icon type="user" />
        <span>个人中心</span>
      </a-menu-item>
      <a-menu-item key="1">
        <a-icon type="setting" />
        <span>设置</span>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="2">
        <router-link :to="{ name: 'Login'}">
          <a-icon type="logout" />
          <span>退出登录</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: 'HeaderAvatar',
  data() {
    return {
      currUser: {
        name: 'Myron Lau',
        avatar: 'https://i.loli.net/2019/09/28/1JtiS9xL5luh7Gj.jpg'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.drop-down {
  display: inline-block;
  height: 100%;
  vertical-align: initial;
}
.avatar{
  margin: 0 5px 0 0;
  color: #1890ff;
  background: hsla(0,0%,100%,.85);
  vertical-align: middle;
}
.user-dropdown-menu-wrapper.ant-dropdown-menu {
  padding: 4px 0;

  .ant-dropdown-menu-item {
    width: 160px;
  }

  .ant-dropdown-menu-item > .anticon:first-child,
  .ant-dropdown-menu-item > a > .anticon:first-child,
  .ant-dropdown-menu-submenu-title > .anticon:first-child .ant-dropdown-menu-submenu-title > a > .anticon:first-child {
    min-width: 12px;
    margin-right: 8px;
  }
}
</style>