const CHANGE_USER = 'CHANGE_USER';
const RECEIVE_ELEMENTS = 'RECEIVE_ELEMENTS';
const SET_FEATURED_ELEMENT = 'SET_FEATURED_ELEMENT';
const API_ENDPOINT = 'http://localhost:3030/elements';
const SELECT_PROPERTY = 'SELECT_PROPERTY';
const SELECT_TREND = 'SELECT_TREND';

export function changeUser(name) {
  return { type: CHANGE_USER, name };
}

function receiveElements(json) {
  return { type: RECEIVE_ELEMENTS, elements: json };
}

export function selectProperty(property) {
  return { type: SELECT_PROPERTY, property };
}

export function fetchElements() {
  return dispatch => (
      fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(json => dispatch(receiveElements(json)))
  );
}

export function setFeaturedElement(element) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.table.isLoading) {
      return dispatch(fetchElements()).then(() => {
        dispatch({ type: SET_FEATURED_ELEMENT, element });
      });
    }
    return dispatch({ type: SET_FEATURED_ELEMENT, element });
  };
}

export function selectTrend(trend) {
  return { type: SELECT_TREND, trend };
}
