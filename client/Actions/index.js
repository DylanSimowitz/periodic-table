const CHANGE_USER = 'CHANGE_USER';
const RECEIVE_ELEMENTS = 'RECEIVE_ELEMENTS';
const SET_FEATURED_ELEMENT = 'SET_FEATURED_ELEMENT';

export function changeUser(name) {
    return {type: CHANGE_USER, name}
}

function receiveElements(json) {
  return {type: RECEIVE_ELEMENTS, elements: json}
}

export function fetchElements() {
    return dispatch => {
        return fetch('/api/elements')
          .then(response => response.json())
          .then(json => dispatch(receiveElements(json)))
    }
}

export function setFeaturedElement(name) {
  return {type: SET_FEATURED_ELEMENT, name}
}
