import React from 'react';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import Layout from './layout';

import Main from './App';

const NotFound = () => <p>Page Not Found</p>;

function Router() {
  return (<Layout>
    <Switch>
      <Route exact path={'/'} component={Main} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Layout>);
}

export default withRouter(Router);
