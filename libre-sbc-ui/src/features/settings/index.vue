<template>
  <div class="container-xl">
    <!-- Page title -->
    <div class="page-header d-print-none">
      <div class="row align-items-center">
        <div class="col">
          <!-- Page pre-title -->
          <div class="page-pretitle">
           Settings
          </div>
          <h2 class="page-title">
            Codec List
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-cards">
        <div class="col-12">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Settings',
};
</script>
