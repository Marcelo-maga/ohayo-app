import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoutes'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AppPage from './pages/App'
import { AuthContext } from './Context/AuthContetext'

const Routes = () => {
  const { authenticated } = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/login" component={LoginPage}>
          {authenticated ? <Redirect to='/' /> : false}
        </Route>

        <Route path="/register" component={RegisterPage}>
          {authenticated ? <Redirect to='/' /> : false}
        </Route>

        <PrivateRoute path='/' component={AppPage} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes
