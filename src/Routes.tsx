import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Details, NoMatch } from './screens/index';
import { Header } from './components/index';

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/details/:id' exact>
            <Details />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default Routes;
