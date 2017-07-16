const CHANGE_USER = 'CHANGE_USER';
const RECEIVE_ELEMENTS = 'RECEIVE_ELEMENTS';
const SET_FEATURED_ELEMENT = 'SET_FEATURED_ELEMENT';
const API_ENDPOINT = '/api/data'
const SELECT_PROPERTY = 'SELECT_PROPERTY'

export function changeUser(name) {
    return {type: CHANGE_USER, name}
}

function receiveElements(json) {
  return {type: RECEIVE_ELEMENTS, elements: json}
}

export function selectProperty(property) {
  return {type: SELECT_PROPERTY, property}
}

export function fetchElements() {
    return dispatch => {
        return fetch(API_ENDPOINT)
          .then(response => response.json())
          .then(json => dispatch(receiveElements(json)))
    }
}

export function setFeaturedElement(element) {
  return {type: SET_FEATURED_ELEMENT, element}
}
