import { Route } from 'react-router-dom';
import React from 'react';
import Container from '../Views/Container';
import PeriodicTable from '../Components/PeriodicTable';
import ElementPage from '../Views/ElementPage';

const Routes = (
    <div>
      <Route path="/" component={PeriodicTable} />
      <Route path="/:element" component={ElementPage} />
    </div>
);

export default Routes;
