<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Codec</h3>
    </div>
    <div class="card-body border-bottom py-3">
      <div class="d-flex">
        <div class="text-muted">
          Show
          <div class="mx-2 d-inline-block">
            <input type="text" class="form-control form-control-sm" value="8" size="3" aria-label="Invoices count">
          </div>
          entries
        </div>
        <div class="ms-auto text-muted">
          Search:
          <div class="ms-2 d-inline-block">
            <input type="text" class="form-control form-control-sm" aria-label="Search invoice">
          </div>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <SettingCodecTable></SettingCodecTable>
    </div>
  </div>
</template>

<script>
  import SettingCodecTable from './components/SettingCodecTable.vue'
  export default {
    name: 'SettingCodec',
    components: {
      SettingCodecTable
    }
  }
</script>
