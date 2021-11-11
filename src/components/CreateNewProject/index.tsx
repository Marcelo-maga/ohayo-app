import React from 'react'
import { Container, Content } from './styles'
import { Input, Button } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import api from '../../services/api'

interface IFormInput {
  projectName: string,
  projectDesc: string
}

const CreateNewProject: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>({
  })

  const onSubimit: SubmitHandler<IFormInput> = async ({ projectName, projectDesc }: IFormInput) => {
    await api.post('/newProject', {
      projectName,
      projectDesc
    })
  }

  return (
    <Container>
      <Content>
        <h1>Crie seu proximo projeto</h1>

        <form onSubmit={handleSubmit(onSubimit)}>

          <Input {...register('projectName')} placeholder={'Project Name: '} name={'projectName'} size='md' />

          <Input {...register('projectDesc')} placeholder={'Descrição: '} name={'projectDesc'} size='md' />

          <div className={'divColors'}>
            <label>Selecione a cor do projeto</label>
            <div></div>
          </div>

          <div className={'divBtns'}>
            <Button className={'btnCreate'} type='submit'>Criar</Button>
            <Button className={'btnCancel'} type='reset'>Cancel</Button>
          </div>
        </form>

      </Content>
    </Container>
  )
}

export { CreateNewProject }
