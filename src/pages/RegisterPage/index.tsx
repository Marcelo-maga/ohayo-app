
import React, { } from 'react'

import { Layout, RegisterArea } from './styles'
import { Link, useHistory } from 'react-router-dom'

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

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  })

  const history = useHistory()
  const onSubmit: SubmitHandler<IFormInput> = async ({ email, password }: IFormInput) => {
    api.post('/register', {
      email,
      password
    }).then((response) => {
      setTimeout(() => {
        history.push('/login')
      }, 1500)
    })
  }

  return (
    <Layout>
      <RegisterArea>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <input type='email' {...register('email')} placeholder='Seu email: ' name='email'/>
          <p>{errors.email?.message}</p>

          <input type='password' {...register('password')} placeholder='Sua senha: ' name='password'/>
          <p>{errors.password?.message}</p>

          <input type='password' {...register('passwordConfirm')} placeholder='Sua senha novamente: ' name='passwordConfirm'/>
          <p>{errors.passwordConfirm?.message}</p>

          <button type='submit'>Sing up</button>
        </form>
          <Link to='/login'>Já possui uma conta?</Link>
      </RegisterArea>
    </Layout>
  )
}

export default RegisterPage
