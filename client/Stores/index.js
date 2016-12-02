// ./store.js
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducers';

export const initialUserState = {
  periodicTable: {
    isFetching: true,
    elements: [],
    featuredElement: {
      symbol: 'El',
      name: 'Element Name',
      number: 'Atomic Number',
      weight: 'Atomic Mass'
    }
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
