import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
