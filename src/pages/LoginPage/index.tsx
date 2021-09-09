import React from 'react'

import { Layout, LoginArea } from './styles'
import { Input, Button } from '@chakra-ui/react'

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <LoginArea>
        <h1>Login</h1>
        <form>
          <Input type='email' placeholder='Seu email: ' size='md'/>
          <Input type='password' placeholder='Sua senha: ' size='md'/>
        </form>
        <Button>Login</Button>
      </LoginArea>
    </Layout>
  )
}

export default LoginPage
