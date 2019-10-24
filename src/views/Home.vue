<template>
  <div>
    <global-layout>
      <router-view />
    </global-layout>  
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalLayout from '@/components/layouts/GlobalLayout.vue'
// import Layout from '@/components/layout/Layout.vue'

export default {
  name: 'Home',
  components: {
    GlobalLayout,
    // Layout
  }
}
</script>
