import React, { useContext } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'
import { Layout, LoginArea } from './styles'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './validation'
import { AuthContext } from '../../context/AuthContext'

const LoginPage: React.FC = () => {
  interface IFormInput {
    email: string,
    password: string
  }

  const { handleSingIn } = useContext(AuthContext)

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<IFormInput> = async ({ email, password }: IFormInput) => {
    await handleSingIn({
      email,
      password
    })
  }

  return (
    <Layout>
      <LoginArea>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <input type='email' {...register('email')} placeholder='Seu email: ' name='email' />
          <p>{errors.email?.message}</p>

          <input type='password' {...register('password')} placeholder='Sua senha: 'name='password'/>
          <p>{errors.password?.message}</p>

          <button type='submit'>Sing in</button>
        </form>
          <Link to='/register'>Crie uma conta aqui!</Link>
      </LoginArea>
    </Layout>
  )
}

export default LoginPage
