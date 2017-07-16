import React from 'react';
import configureStore from '../../Stores';
import { Provider } from 'react-redux';
import {Router, browserHistory, Route} from 'react-router'
import Routes from '../../Routes'
import PeriodicTable from '../PeriodicTable'
//import FeaturedElement from '../FeaturedElement'

import 'normalize.css';

let store = configureStore()

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={PeriodicTable}>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default App;


//<Route path="element/:element" component={FeaturedElement}/>
