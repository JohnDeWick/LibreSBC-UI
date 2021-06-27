<template>
  <tr>
    <td>
      <span v-html="rowTestData"></span>
      <span class="text-muted">001408</span></td>
    <td><a href="invoice.html" class="text-reset" tabindex="-1">Icons</a></td>
    <td>
      87956621
    </td>
    <td>
      13 May 2018
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
</template>
<script>
  let rowTestData = {
    name: 'Codec A',
    decs: 'Codec desc',
    codecs: 'PCMA PCMU OPUS'
  }

  export default {
    name: 'BaseTableContentRow',
    props: {
      item: {
        type: Object,
        required: true
      },
      fieldsDef: {
        type: Array,
        required: true
      }
    }
  }
</script>

