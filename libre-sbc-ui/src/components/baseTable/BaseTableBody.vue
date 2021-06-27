<template>
  <div class="table-responsive">
    <table class="table card-table table-vcenter text-nowrap datatable">
      <BaseTableContentHead></BaseTableContentHead>
      <tbody>
        <tr>
          <td><span class="text-muted">001408</span></td>
          <td><a href="invoice.html" class="text-reset" tabindex="-1">Icons</a></td>
          <td>
            87956621
          </td>
          <td>
            <span v-html="testData"></span>
          </td>
          <td>$940</td>
          <td class="text-end">
            <span class="dropdown">
              <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
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
//  import Head from './BaseTableContentHead.vue'
//  import Row from './BaseTableContentRow'
  export default {
    name: 'BaseTableContent',
    components: {
//      Head,
//      Row
    },
    data: () => {
      return {
        testData: '2020 May 24'
      }
    },
    props: {
      data: {
        type: Array,
        required: true
      }
    }
  }
</script>
