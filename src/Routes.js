import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const Arrays = lazy(() => import('./components/data_structures/arrays/Arrays'));
const Lists = lazy(() => import('./components/data_structures/lists/Lists'));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/arrays" component={Arrays} />
        <Route path="/lists" component={Lists} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
