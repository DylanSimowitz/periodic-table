import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from '../Reducers';

export const initialUserState = {
  table: {
    isLoading: true,
    elements: {},
    featuredElement: {
      symbol: 'El',
      name: 'Name',
      number: '#',
      weight: 'Atomic Mass',
    },
    trend: 'Block',
    selectedProperty: 'appearance',
  },
};

export default function configureStore() {
  return createStore(
    combineReducers({
      table: reducer,
      routing: routerReducer,
    }),
    initialUserState,
    compose(
      applyMiddleware(
        thunk,
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
}
