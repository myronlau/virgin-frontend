<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <global-layout />
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalLayout from '@/components/layout/GlobalLayout.vue'

export default {
  name: 'Home',
  components: {
    GlobalLayout
  }
}
</script>
