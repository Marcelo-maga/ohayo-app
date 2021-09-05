import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginPage from './pages/Login'

// import PrivateRoute from './components/PrivateRoutes'
// import App from './App'

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
