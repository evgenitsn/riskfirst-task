import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Details } from './screens/index'
import { Header } from './components/index'

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/details'>
          <Details />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
