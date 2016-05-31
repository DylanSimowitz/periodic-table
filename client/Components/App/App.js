import React from 'react';

import { Provider } from 'react-redux';

// We'll create this in Step 5.
import store from '../../Stores/store.js';

// We'll create this in Step 6.
import UserForm from '../RegistrationForm/RegistrationForm';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <UserForm />
      </Provider>
    );
  }
}

export default App;
