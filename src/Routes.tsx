import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home'


const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes