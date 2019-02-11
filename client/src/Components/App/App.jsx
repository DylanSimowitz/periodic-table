import 'normalize.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import configureStore from '../../Stores';
import routes from '../../Routes';
import Theme from '../Theme';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Theme>
      <BrowserRouter>{routes}</BrowserRouter>
    </Theme>
  </Provider>
);

App.propTypes = {};

export default App;
