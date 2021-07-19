<template>
  <div class="card">
    <BaseTableTitleBar></BaseTableTitleBar>
    <BaseTableContent
       :data="pageData"
       :fieldsDef="fieldsDef"
      >
    </BaseTableContent>
    <BaseTablePagination></BaseTablePagination>
  </div>
</template>

<script>
import BaseTableTitleBar from './BaseTableTitleBar.vue';
import BaseTablePagination from './BaseTablePagination.vue';
import BaseTableContent from './BaseTableContent.vue';
import BaseTableStore from './BaseTableStore';

export default {
  name: 'BaseTable',
  components: {
    BaseTableTitleBar,
    BaseTablePagination,
    BaseTableContent,
  },
  props: {
    pageSize: {
      type: Number,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    pageData: {
      type: Array,
      required: true,
    },
    fieldsDef: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      store: BaseTableStore,
    };
  },
};
</script>
