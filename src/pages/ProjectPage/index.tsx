import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { useParams } from 'react-router'
import { Container } from './styles'

interface ParamsProjectId {
  projectId: string
}

interface IProjectTypes {
  id: string
  name: string
  desc: string
}

const ProjectPage: React.FC = () => {
  const params: ParamsProjectId = useParams()

  const [project, setProject] = useState<IProjectTypes>()

  useEffect(() => {
    async function getProject () {
      await api.get<IProjectTypes>(`/getProject/${params.projectId}`).then(response => {
        setProject(response.data)
      })
    }
    getProject()
  }, [])

  return (
    <Container>
      <h1 className={'title'} >{project?.name}</h1>
    </Container>
  )
}

export { ProjectPage }
