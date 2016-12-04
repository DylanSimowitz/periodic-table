import { Route, IndexRoute } from 'react-router'
import PeriodicTable from '../Components/PeriodicTable';

const Routes = () => {
  <Route path="/" component={PeriodicTable}>
    <Route path=":element" component={FeaturedElement}/>
  </Route>
}

export default Routes
