<template>
  <a-layout-sider
  :trigger="null"
  collapsible
  v-model="collapsed"
  >
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" :openKeys="openKeys" @openChange="onOpenChange" >
      <!-- <a-menu-item key="1">
        <a-icon type="dashboard" />
        <span>Dashaboard</span>
      </a-menu-item>
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
      </a-menu-item> -->

      <template v-for="item in menuList">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon :type= "item.icon" />
          <span>{{item.title}}</span>
        </a-menu-item>
        <a-sub-menu v-if="item.children" :key="item.key">
          <span slot="title"><a-icon :type="item.icon" /><span>{{item.title}}</span></span>
          <a-menu-item v-for="subitem in item.children" :key="subitem.key">
            <a-icon type="subitem.icon" />
            <span>{{subitem.title}}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'GlobalSider',
  data() {
    return {
      //If update menu list, please also update rootSubmenuKeys.
      rootSubmenuKeys: ['1', 'sub1', 'sub2', '3'],
      openKeys: [],
      cachedOpenKeys: [],
      menuList: [
        {
          key: '1',
          title: 'Dashboard',
          icon: 'dashboard'
        },
        {
          key: 'sub1',
          title: 'Navigation One',
          icon: 'mail',
          children: [
            {
              key: 5,
              title: 'Option 5',
              icon: ''
            },
            {
              key: 6,
              title: 'Option 6',
              icon: ''
            },
            {
              key: 7,
              title: 'Option 7',
              icon: ''
            },
            {
              key: 8,
              title: 'Option 8',
              icon: ''
            }
          ]
        },
        {
          key: 'sub2',
          title: 'Navigation two',
          icon: 'appstore',
          children: [
            {
              key: '9',
              title: 'Option 9',
              icon: ''
            },
            {
              key: '10',
              title: "Option 10",
              icon: ''
            }
          ]
        },
        {
          key: '3',
          title: 'Setting',
          icon: 'setting'
        }
      ]
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