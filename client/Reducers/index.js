function reducer(state = [], action) {
  switch (action.type) {
    case 'CHANGE_USER':
      return Object.assign({}, state, {
        name: action.name
      })
    default:
      return state
  }
}
export default reducer;
