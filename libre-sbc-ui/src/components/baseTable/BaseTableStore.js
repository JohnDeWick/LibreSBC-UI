export default{
  debug: true,
  state: {
    pageIndex: 0,
    pageSize: 0,
    totalItems: 0
  },
  setPageIndexAction (newValue) {
    if (this.debug) console.log('setPageIndexAction triggered with', newValue)
    this.state.pageIndex = newValue;
  },
  setPageSizeAction (newValue) {
    if (this.debug) console.log('setPageSizeAction triggered with', newValue)
    this.state.pageSize = newValue;
  },
  setTotalItemsAction (newValue) {
    if (this.debug) console.log('setTotalItemsAction triggered with', newValue)
    this.state.totalItems = newValue;
  },
}
