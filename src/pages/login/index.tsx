import React from 'react'
import { Grid, Login } from './styles'

import Form from '../../components/LoginForm'

const LoginPage: React.FC = () => {
  return (<>
    <Grid>
      <Login>
        <Form/>
      </Login>
    </Grid>
  </>)
}

export default LoginPage
