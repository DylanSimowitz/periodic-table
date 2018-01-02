import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import undoable, { groupByActionTypes } from 'redux-undo';
import tableReducer from '../Reducers/table';
import themeReducer from '../Reducers/theme';

export const initialUserState = {
  table: {
    isLoading: true,
    elements: {},
    featuredElement: {},
    featuredKeyItem: '',
    featuredGroup: '',
    featuredSeries: '',
    trend: 'Block',
    selectedProperty: 'Name',
  },
  theme: {
    trend: {
      Block: {
        s: 'rgb(79, 163, 62)',
        d: 'rgb(212, 134, 54)',
        p: 'rgb(177, 74, 74)',
        f: 'rgb(60, 181, 208)',
      },
      Phase: {
        solid: 'rgb(188, 102, 45)',
        liquid: 'rgb(68, 140, 255)',
        gas: 'rgb(115, 239, 137)',
        unknown: 'rgb(38, 220, 175)',
      },
      AtomicRadius: {
      },
    },
  },
};

export default function configureStore() {
  return createStore(
    combineReducers({
      table: tableReducer,
      routing: routerReducer,
      theme: undoable(themeReducer, { groupBy: groupByActionTypes('COLOR') }),
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
