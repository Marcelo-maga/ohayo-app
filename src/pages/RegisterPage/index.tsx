import React from 'react'

import { Layout, RegisterArea } from './styles'
import { Input, Button } from '@chakra-ui/react'

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <RegisterArea>
        <h1>Cadastro</h1>
        <form>
          <Input type='email' placeholder='Seu email: ' size='md'/>
          <Input type='password' placeholder='Sua senha: ' size='md'/>
        </form>
        <Button>Login</Button>
      </RegisterArea>
    </Layout>
  )
}

export default LoginPage
