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

      <form onSubmit={handleSubmit(onSubimit)}>
        <Input {...register('projectName')} placeholder={'Project Name: '} name={'projectName'} size='md' />
        <Input {...register('projectDesc')} placeholder={'Descrição: '} name={'projectDesc'} size='md' />
        <Button type='submit'>Criar</Button>
        <Button type='reset'>Cancel</Button>
      </form>

      </Content>
    </Container>
  )
}

export { CreateNewProject }
