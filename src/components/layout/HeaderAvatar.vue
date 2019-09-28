<template>
  <!-- <a-dropdown style="display: inline-block; height: 100%; vertical-align: initial" > -->
  <a-dropdown class="drop-down" >
    <span>
      <!-- <a-avatar style="vertical-align: middle;" size="default" shape="circle" :src="currUser.avatar"/> -->
      <a-avatar class="avatar" size="default" shape="circle" :src="currUser.avatar"/>
      <span>{{currUser.name}}</span>
    </span>
    <a-menu style="width: 150px" slot="overlay">
      <a-menu-item>
        <a-icon type="user" />
        <span>个人中心</span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="setting" />
        <span>设置</span>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <!-- <router-link to="/login"> -->
          <a-icon type="logout" />
          <span>退出登录</span>
        <!-- </router-link> -->
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
</style>