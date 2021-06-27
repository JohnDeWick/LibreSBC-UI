<template>
  <thead>
    <tr>
      <th class="w-1">No. 
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-sm text-dark icon-thick" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 15 12 9 18 15"></polyline></svg>
      </th>
      <th>Name</th>
      <th>Description.</th>
      <th>Codec</th>
      <th></th>
    </tr>
  </thead>
</template>
<script>
  export default {
    name: 'BaseTableContentHead',
    props: {
      fieldsDef: {
        type: Array,
        required: true
      }
    }
  }
</script>

