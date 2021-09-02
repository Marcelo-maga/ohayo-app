import React from 'react'
import { FormLogin, Input, Button } from './styles'

const Form: React.FC = (props) => {
  async function handleSubmit () {

  }

  return (
    <>
      <FormLogin onSubmit={handleSubmit}>

        <label>Email: </label>
        <Input type='text' placeholder='Informe seu email: ' />

        <label>Senha: </label>
        <Input type='password' placeholder='Informe sua senha: ' />

        <Button type='submit'>Entar</Button>

      </FormLogin>
    </>
  )
}

export default Form
