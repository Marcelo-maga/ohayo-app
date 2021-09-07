import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginPage from './pages/Login'

import PrivateRoute from './components/PrivateRoutes'
import RegisterPage from './pages/Register'
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
