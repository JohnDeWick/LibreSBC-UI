<template>
  <div class="antialiased theme-dark">
    <div class="wrapper">
      <TheNavbar></TheNavbar>
      <div class="page-wrapper">
        <div class="container-xl">
          <!-- Page title -->
          <div class="page-header d-print-none">
            <div class="row align-items-center">
              <div class="col">
                <!-- Page pre-title -->
                <div class="page-pretitle">
                  Overview
                </div>
                <h2 class="page-title">
                  Dark mode
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="page-body">
          <div class="container-xl">
          
          </div>
        </div>
        <TheFooter></TheFooter>
      </div>
    </div>
  </div>
  <div id="nav">
    <!--<router-link to="/about">About</router-link>-->
  </div>
  <router-view/>
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
