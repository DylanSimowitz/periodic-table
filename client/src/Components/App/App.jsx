import 'normalize.css';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import configureStore from '../../Stores';
import routes from '../../Routes';
import './App.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const theme = {
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
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  </ThemeProvider>
);
export default App;
