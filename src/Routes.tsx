import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginPage from './pages/Login'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
