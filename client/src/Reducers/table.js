function reducer(state = [], action) {
  switch (action.type) {
    case 'FEATURED_SERIES':
      return {
        ...state,
        featuredSeries: action.series,
      };
    case 'FEATURED_GROUP':
      return {
        ...state,
        featuredGroup: action.group,
      };
    case 'FEATURED_KEY_ITEM':
      return {
        ...state,
        featuredKeyItem: action.item,
      };
    case 'RECEIVE_ELEMENTS':
      return {
        ...state,
        isLoading: false,
        elements: action.elements,
      };
    case 'SET_FEATURED_ELEMENT':
      return {
        ...state,
        featuredElement: action.element,
        // state.elements.find(element => (
        //   element.name.toLowerCase() === action.element || element.name === action.element.name
        // )),
      };
    case 'SELECT_PROPERTY':
      return {
        ...state,
        selectedProperty: action.property,
      };
    case 'SELECT_TREND':
      return {
        ...state,
        trend: action.trend,
      };
    default:
      return state;
  }
}
export default reducer;
