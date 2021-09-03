import React from 'react'
import { useForm } from 'react-hook-form'

import { Container, LoginArea, ArtArea } from './layout'
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react'

const LoginPage: React.FC = () => {
  const {
    handleSubmit, formState: { errors, isSubmitting }
  } = useForm()

  function onSubmit () {

  }

  return (
    <Container>

      <LoginArea>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.email}>

            <h1>Welcome Back</h1>

            <FormLabel htmlFor="email">Email: </FormLabel>
            <Input type='text' placeholder="Informe seu email: " size="md" />

            <FormLabel htmlFor="pass">Senha: </FormLabel>
            <Input type='password' placeholder="Informe sua senha:  " size="md" />

          </FormControl>
          <Button type='submit' isLoading={isSubmitting} >
            Login
          </Button>
        </form>

      </LoginArea>

      <ArtArea>
      </ArtArea>

    </Container>
  )
}

export default LoginPage
