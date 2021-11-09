import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoutes'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'

import { AuthContext } from './context/AuthContext'

const Routes = () => {
  const { authenticated } = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/login" component={LoginPage}>
          {authenticated ? <Redirect to='/' /> : null}
        </Route>

        <Route path="/register" component={RegisterPage}>
          {authenticated ? <Redirect to='/' /> : null}
        </Route>

        <PrivateRoute path='/' component={Dashboard} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes
