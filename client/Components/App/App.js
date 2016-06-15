import React from 'react';
import PeriodicTable from '../PeriodicTable';
import configureStore from '../../Stores';
import { Provider } from 'react-redux';

import 'normalize.css';

let store = configureStore()

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <PeriodicTable/>
      </Provider>
    )
  }
}

export default App;
