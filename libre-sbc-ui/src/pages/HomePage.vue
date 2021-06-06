<template>

</template>
<script>
    export default {
      name: "home-page",
      data: () => ({
        stats: [
          {label: 'New Tickets', movement: 6, total: 43},
          {label: 'Closed Today', movement: -3, total: 17},
          {label: 'New Replies', movement: 9, total: 7},
          {label: 'Followers', movement: 3, total: '27.3K'},
          {label: 'Daily Earnings', movement: -2, total: '$95'},
          {label: 'Products', movement: -1, total: 621}
        ],
        process: [
          {label: 'New feedback', movement: 6, total: 62},
          {label: 'Today profit', movement: -3, total: '$652'}
        ]
      })
    }
</script>

<style scoped>
</style>
