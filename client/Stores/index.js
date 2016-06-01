// ./store.js
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducers';

export const initialUserState = {
    name: 'Dylan',
    password: ''
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
