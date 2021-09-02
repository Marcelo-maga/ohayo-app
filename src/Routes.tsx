import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginPage from './pages/Login'
import RegisPage from './pages/Register'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
