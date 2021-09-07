import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Container, RegisterArea, ArtArea, Header } from './styles'
import { FormControl, Input, Button } from '@chakra-ui/react'
import api from '../../services/api'

const RegisterPage: React.FC = () => {
 interface IFormInput {
    email: string,
    password: string
  }

 const { register, handleSubmit, formState: { isSubmitting } } = useForm<IFormInput>()

 const onSubmit: SubmitHandler<IFormInput> = async data => {
   console.log(data)
   api.post('/register', data)
 }

 return (
    <Container>
      <Header>
      </Header>
      <RegisterArea>

        <form onSubmit={handleSubmit(onSubmit)}>

          <FormControl>

            <h1>Welcome</h1>

            <Input type='text' {...register('email')} placeholder="Informe seu email: " size='md' />
            <Input type='password' {...register('password')} placeholder="Informe sua senha: " size='md'/>

          </FormControl>

          <Button type='submit' isLoading={isSubmitting} >
            Register
          </Button>

        </form>

      </RegisterArea>

      <ArtArea>
      </ArtArea>

    </Container>
 )
}

export default RegisterPage
