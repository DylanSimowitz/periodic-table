import React from 'react';
import UserForm from '../RegistrationForm/RegistrationForm';
import configureStore from '../../Stores';
import { Provider } from 'react-redux';

let store = configureStore()

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <UserForm />
      </Provider>
    )
  }
}

export default App;
