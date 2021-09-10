import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import PrivateRoute from './components/PrivateRoutes'
import AppPage from './pages/App'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path='/' component={AppPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
