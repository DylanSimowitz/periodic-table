// ./store.js
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducers';

export const initialUserState = {
  periodicTable: {
    isFetching: true,
    elements: [],
    featuredElement: ''
  }
};

export default function configureStore() {
  return createStore(
    reducer,
    initialUserState,
    compose(
      applyMiddleware(
        thunk
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )

  )
}
