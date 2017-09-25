import { Route } from 'react-router-dom';
import React from 'react';
import Container from '../Views/Container';
import PeriodicTable from '../Components/PeriodicTable';
import ElementPage from '../Views/ElementPage';

const Routes = (
  <Container>
    <div>
      <Route exact path="/" component={PeriodicTable} />
      <Route path="elements/:element" component={ElementPage} />
    </div>
  </Container>
);

export default Routes;
