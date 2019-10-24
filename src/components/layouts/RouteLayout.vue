<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item :key="item.path" v-for="(item, index) in breadcrumb">
        <span v-if="index === 0"><a href="#/dashboard/workplace">{{item.name}}</a></span>
        <span v-else>{{item.name}}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div style="padding: 18px 0 0 0;">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'BlankLayout',
  data() {
    return {
      breadcrumb: {
        type: Array,
        required: false
      }
    }
  },
  mounted () {
    this.getBreadcrumb()
  },
  updated () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      this.breadcrumb = this.$route.matched
    }
  }
}
</script>

<style scoped>

</style>
