import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import isAuthtenticate from '../services/auth'

interface Props {
  path: string;
  component: any;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}
    render={props => isAuthtenticate()
      ? (
        <Component {...props} />
        )
      : (
        <Redirect to={{ pathname: '/login' }} />
        )} />
  )
}

export default PrivateRoute
