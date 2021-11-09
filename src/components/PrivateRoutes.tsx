import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
interface Props {
  path: string
  component: any
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext)

  return (
    <Route {...rest}
    render={props => authenticated
      ? (
        <Component {...props} />
        )
      : (
        <Redirect to={{ pathname: '/login' }} />
        )} />
  )
}

export default PrivateRoute
