import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { useParams } from 'react-router'
import { Container, Header, Content, Content1, Content2 } from './styles'
import { HourConter } from '../../components/HourCounter'
import { VscCheck, VscChromeClose } from 'react-icons/vsc'
import { ToDoList } from '../../components/ToDoList'
interface ParamsProjectId {
  projectId: string
}

interface IProjectTypes {
  id: string
  name: string
  desc: string
  timeWorked: number
  complete: boolean
}

const ProjectPage: React.FC = () => {
  const params: ParamsProjectId = useParams()

  const [completeProject, setcompleteProject] = useState(false)
  const [project, setProject] = useState<IProjectTypes>()

  useEffect(() => {
    async function getProject () {
      await api.get<IProjectTypes>(`/getProject/${params.projectId}`).then(response => {
        setProject(response.data)
      })
    }
    getProject()
  }, [])

  async function completeProjectFunction () {
    if (!completeProject) {
      setcompleteProject(true)
      await api.post(`/completeProject/${params.projectId}`, {
        completeProject
      })
    } else if (completeProject) {
      setcompleteProject(false)
      await api.post(`/completeProject/${params.projectId}`, {
        completeProject
      })
    }
  }

  return (
    <Container>

      <Header>
        <h1 className={'title'} >{project?.name}</h1>
        <button onClick={completeProjectFunction} className={'button'} >
          {!completeProject ? <VscCheck/> : <VscChromeClose/>}
        </button>
      </Header>

      <Content>

        <Content1>
          <ToDoList />
        </Content1>

        <Content2>
          <HourConter />
          <h2>Descrição: </h2>
          <h3>{project?.desc}</h3>
        </Content2>

      </Content>

    </Container>
  )
}

export { ProjectPage }
