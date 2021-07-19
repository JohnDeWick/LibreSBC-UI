<template>
  <div class="table-responsive">
    <table class="table card-table table-vcenter text-nowrap datatable">
      <BaseTableContentHead :fieldsDef="fieldsDef"/>
      <tbody>
        <tr>
          <td><span class="text-muted">001408</span></td>
          <td><a href="invoice.html" class="text-reset" tabindex="-1">Icons</a></td>
          <td>
            13 May 2018
          </td>
          <td>$940</td>
          <td class="text-end">
            <span class="dropdown">
              <button
                class="btn dropdown-toggle align-text-top"
                data-bs-boundary="viewport"
                data-bs-toggle="dropdown">
                Actions
              </button>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </div>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import BaseTableContentHead from './BaseTableContentHead.vue';

export default {
  name: 'BaseTableContent',
  props: {
    data: {
      type: Array,
      required: true,
    },
    fieldsDef: {
      type: Array,
      required: true,
    },
  },
  components: {
    BaseTableContentHead,
  },
};
</script>
