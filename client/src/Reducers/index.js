function reducer(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_ELEMENTS':
      return {
        ...state,
        isLoading: false,
        elements: action.elements,
      };
    case 'SET_FEATURED_ELEMENT':
      return {
        ...state,
        featuredElement:
        state.elements.find(element => (
          element.name.toLowerCase() === action.element || element.name === action.element.name
        )),
      };
    case 'SELECT_PROPERTY':
      return {
        ...state,
        selectedProperty: action.property,
      };
    default:
      return state;
  }
}
export default reducer;
