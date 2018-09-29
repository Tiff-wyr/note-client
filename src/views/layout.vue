<template>
  <div class="layout">
    <Header></Header>
    <router-view></router-view>

  </div>
</template>

<script>
import Header from '@/components/Header'
    export default {
      name: "layout",
      components:{
        Header
      }
    }
</script>

<style scoped>

</style>
