function reducer(state = {}, action) {
  switch (action.type) {
    case 'COLOR':
      return Object.assign({}, state, {
        trend: {
          ...state.trend,
          [action.trend]: {
            ...state.trend[action.trend],
            [action.item]: action.color,
          },
        },
      });
    default:
      return state;
  }
}
export default reducer;
