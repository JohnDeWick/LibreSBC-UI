<template>
  <div class="antialiased theme-dark">
    <div class="wrapper">
      <TheNavbar></TheNavbar>
      <div class="page-wrapper">
        <router-view/>
        <TheFooter></TheFooter>
      </div>
    </div>
  </div>
  <div id="nav">
    <!--<router-link to="/about">About</router-link>-->
  </div>
</template>
<script>
  import TheNavbar from './components/TheNavbar.vue'
  import TheFooter from './components/TheFooter.vue'
  export default {
    name: 'Home',
    components: {
      TheNavbar,
      TheFooter
    }
  }
</script>
<style>
  @import "../node_modules/@tabler/core/dist/css/tabler.min.css";
</style>
