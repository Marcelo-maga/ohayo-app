import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { useForm, SubmitHandler } from 'react-hook-form'
import { Container, Content } from './styles'

interface IFormInput {
  projectName: string,
  projectDesc: string,
  complete: boolean
}

interface IProjectTypes {
  id: string
  name: string
  desc: string
  timeWorked: number
  complete: boolean
}

const EditProjectForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>({})

  const url = document.URL

  const projectIdWithBar = new URL(url).pathname

  const [, projectId] = projectIdWithBar.split('/')

  const onSubimit: SubmitHandler<IFormInput> = async ({ projectName, projectDesc, complete }: IFormInput) => {
    await api.post(`/editProject/${projectId}`, {
      projectName,
      projectDesc,
      complete
    })
  }
  const [project, setProject] = useState<IProjectTypes>()
  useEffect(() => {
    async function getProject () {
      await api.get<IProjectTypes>(`/getProject/${projectId}`).then(response => {
        setProject(response.data)
      })
    }
    getProject()
  }, [])

  return (
    <Container>
      <Content>
        <h1>Edite seu projeto</h1>

        <form onSubmit={handleSubmit(onSubimit)}>

          <label>Nome do projeto</label>
          <input {...register('projectName')} value={project?.name} placeholder={'Project Name: '} name={'projectName'} />

          <label>Descrição do projeto</label>
          <input {...register('projectDesc')} value={project?.desc} placeholder={'Descrição: '} name={'projectDesc'} />

          <label>Projeto Completo?</label>
          <input {...register('complete')} className={'checkBox'} type="checkbox" />

          <div className={'divBtns'}>
            <button className={'btnCreate'} type='submit'>Alterar</button>
            <button className={'btnCancel'} type='reset'>Cancelar</button>
          </div>
        </form>

      </Content>
    </Container>
  )
}

export { EditProjectForm }
