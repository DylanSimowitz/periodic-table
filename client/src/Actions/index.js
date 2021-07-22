import Color from 'color';

const CHANGE_USER = 'CHANGE_USER';
const RECEIVE_ELEMENTS = 'RECEIVE_ELEMENTS';
const SET_FEATURED_ELEMENT = 'SET_FEATURED_ELEMENT';
let API_ENDPOINT = '/elements.json';
if (process.env.NODE_ENV === 'development') {
  API_ENDPOINT = 'http://localhost:3030/elements.json';
}
const SELECT_PROPERTY = 'SELECT_PROPERTY';
const SELECT_TREND = 'SELECT_TREND';
const COLOR = 'COLOR';
const FEATURED_GROUP = 'FEATURED_GROUP';
const FEATURED_SERIES = 'FEATURED_SERIES';

export function changeColor(color, item, trend) {
  return { type: COLOR, color, item, trend };
}

export function setFeaturedGroup(group) {
  return { type: FEATURED_GROUP, group };
}

export function setFeaturedSeries(series) {
  return { type: FEATURED_SERIES, series };
}

export function setFeaturedKeyItem(item) {
  return (dispatch, getState) => {
    const state = getState();
    Object.keys(state.theme.present.trend[state.table.trend]).forEach((key) => {
      if (key !== item) {
        const color = Color(state.theme.present.trend[state.table.trend][key])
          .grayscale()
          .string();
        dispatch(changeColor(color, key, state.table.trend));
      }
    });
  };
}

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
  return dispatch =>
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(json => dispatch(receiveElements(json)));
}

// export function fetchElement(element) {
//   return dispatch => (
//     fetch(`${API_ENDPOINT}/${element}`)
//       .then(response => response.json())
//       .then(json => dispatch())
//   )
// }

export function setFeaturedElement(element) {
  return (dispatch, getState) => {
    let state = getState();
    if (state.table.elements[element]) {
      return dispatch({ type: SET_FEATURED_ELEMENT, element: state.table.elements[element] });
    }
    return dispatch(fetchElements()).then(() => {
      state = getState();
      dispatch({ type: SET_FEATURED_ELEMENT, element: state.table.elements[element] });
    });
  };
}

export function selectTrend(trend) {
  return { type: SELECT_TREND, trend };
}
