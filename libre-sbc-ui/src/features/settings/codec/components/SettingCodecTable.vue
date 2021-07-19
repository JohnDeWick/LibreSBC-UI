<template>
  <BaseTable
    :pageSize="pageSize"
    :pageData="pageData"
    :totalItems="totalItems"
    :fieldsDef="fieldsDef"
  >
  </BaseTable>
</template>
<script>
import BaseTable from '../../../../components/baseTable/index.vue';
import CodecApi from '../api';
import FieldsDef from './SettingCodecTableFieldsDef';

export default {
  name: 'SettingCodecTable',
  inject: ['trace'],
  components: {
    BaseTable,
  },
  data() {
    return {
      pageSize: 10,
      totalItems: 0,
      pageData: [],
      fieldsDef: FieldsDef,
      isFetching: true,
    };
  },
  async mounted() {
    const response = await CodecApi.getList();
    console.log(this);
    this.trace(`get media list response: ${response}`);
    this.pageData = response.data;
    this.isFetching = false;
  },
};
</script>
