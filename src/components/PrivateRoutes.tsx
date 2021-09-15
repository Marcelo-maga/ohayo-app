import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContetext'
interface Props {
  path: string
  component: any
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext)

  console.log(authenticated)
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
