import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Details } from './screens/index'

const App: React.FC = () => {
  return (
    <Router>
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

export default App
