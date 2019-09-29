<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <global-layout />
    <!-- <layout /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalLayout from '@/components/layout/GlobalLayout.vue'
// import Layout from '@/components/layout/Layout.vue'

export default {
  name: 'Home',
  components: {
    GlobalLayout,
    // Layout
  }
}
</script>
