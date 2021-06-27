<template>
  <div class="card">
    <BaseTableTitleBar></BaseTableTitleBar>
    <BaseTableBody :data="pageData"></BaseTableBody>
    <BaseTablePagination></BaseTablePagination>
  </div>
</template>

<script>
  import BaseTableTitleBar from './BaseTableTitleBar.vue'
  import BaseTablePagination from './BaseTablePagination.vue'
  import BaseTableBody from './BaseTableBody.vue'
  import BaseTableStore from './BaseTableStore.js'
  export default {
    name: 'BaseTable',
    components: {
      BaseTableTitleBar,
      BaseTablePagination,
      BaseTableBody
    },
    props: {
      initPageSize: {
        type: Number,
        required: true
      },
      totalItems: {
        type: Number,
        required: true
      },
      pageData: {
        type: Array,
        required: true
      },

    },
    data() {
      return {
        store: BaseTableStore
      }
    }
  }
</script>


