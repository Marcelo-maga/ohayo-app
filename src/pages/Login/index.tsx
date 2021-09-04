import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Container, LoginArea, ArtArea, Header } from './layout'
import { FormControl, Input, Button } from '@chakra-ui/react'

const LoginPage: React.FC = () => {
  const {
    handleSubmit, formState: { errors, isSubmitting }
  } = useForm()

  function onSubmit () {

  }

  return (
    <Container>
      <Header>
      </Header>
      <LoginArea>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.email}>

            <h1>Welcome Back</h1>

            <Input type='text' placeholder="Informe seu email: " size="md" />
            <Input type='password' placeholder="Informe sua senha: " size="md" />

          </FormControl>
          <Button type='submit' isLoading={isSubmitting} >
            Login
          </Button>
          <Button>
            <Link to={'/register'}>
            Cadastre-se
            </Link>
          </Button>
        </form>

      </LoginArea>

      <ArtArea>
      </ArtArea>

    </Container>
  )
}

export default LoginPage
