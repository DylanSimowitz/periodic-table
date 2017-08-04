import { Route, IndexRoute } from 'react-router';
import React from 'react';
import Container from '../Views/Container';
import PeriodicTable from '../Components/PeriodicTable';
import ElementPage from '../Views/ElementPage';

const Routes = (
  <div>
    <Route path="/" component={Container}>
      <IndexRoute component={PeriodicTable} />
      <Route path="elements/:element" component={ElementPage} />
    </Route>
  </div>
);

export default Routes;
