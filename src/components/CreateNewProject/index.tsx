import React from 'react'
import api from '../../services/api'
import { Container, Content } from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  projectName: string,
  projectDesc: string
}

const CreateNewProject: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>({})

  const onSubimit: SubmitHandler<IFormInput> = async ({ projectName, projectDesc }: IFormInput) => {
    await api.post('/newProject', {
      projectName,
      projectDesc
    }).then(() => {
      setTimeout(() => {
        location.reload()
      }, 2500)
    })
  }

  return (
    <Container>
      <Content>
        <h1>Crie seu proximo projeto</h1>

        <form onSubmit={handleSubmit(onSubimit)}>

          <input {...register('projectName')} placeholder={'Project Name: '} name={'projectName'} />

          <input {...register('projectDesc')} placeholder={'Descrição: '} name={'projectDesc'} />

          <div className={'divColors'}>
            <label>Selecione a cor do projeto</label>
            <div></div>
          </div>

          <div className={'divBtns'}>
            <button className={'btnCreate'} type='submit'>Criar</button>
            <button className={'btnCancel'} type='reset'>Cancel</button>
          </div>
        </form>

      </Content>
    </Container>
  )
}

export { CreateNewProject }
