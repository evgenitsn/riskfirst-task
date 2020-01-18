import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Details } from './screens/index';
import { Header } from './components/index';

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/details/:id'>
            <Details />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default Routes;
