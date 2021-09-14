
import React, { } from 'react'

import { Layout, RegisterArea } from './styles'
import { Input, Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

import api from '../../services/api'
import schema from './validation'

const RegisterPage: React.FC = () => {
  interface IFormInput {
    email: string,
    password: string,
    passwordConfirm: string
  }

  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<IFormInput> = async ({ email, password }: IFormInput) => {
    api.post('/register', {
      email,
      password
    })
  }

  return (
    <Layout>
      <RegisterArea>
      <Box>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Input type='email' {...register('email')} placeholder='Seu email: ' size='md' name='email'/>
          <p>{errors.email?.message}</p>

          <Input type='text' {...register('password')} placeholder='Sua senha: ' size='md' name='password'/>
          <p>{errors.password?.message}</p>

          <Input type='text' {...register('passwordConfirm')} placeholder='Sua senha novamente: ' size='md' name='passwordConfirm'/>
          <p>{errors.passwordConfirm?.message}</p>

          <Button type='submit' isLoading={isSubmitting}>Sing up</Button>
        </form>
          <Link to='/login'>Já possui uma conta?</Link>
      </Box>
      </RegisterArea>
    </Layout>
  )
}

export default RegisterPage
