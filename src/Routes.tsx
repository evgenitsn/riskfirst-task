import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Details, NoMatch } from './screens/index';
import { Header } from './components/index';
import styled from 'styled-components';

const Main = styled.main`
  padding: 2.5rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Main>
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
      </Main>
    </Router>
  );
};

export default Routes;
