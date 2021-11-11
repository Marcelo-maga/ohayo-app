import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { Projects } from './styles'

interface IProject {
  id: string,

  name: string,
  desc: string,
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([])

  useEffect(() => {
    async function getAllProjects () {
      await api.get<IProject[]>('/getAllProjects').then(response => {
        setProjects(response.data)
      })
    }
    getAllProjects()
  }, [])

  async function goToProject (projectId: string) {
    console.log('tem que começar esse função')
    console.log(projectId)
  }

  return (
    <Projects>
      <ul>
        {projects.map(project => {
          return (
            <li key={project.id} onClick={() => goToProject(project.id)}>
              <div />
              <p>{project.name}</p>
              <p> Dias</p>
            </li>
          )
        })}
      </ul>
    </Projects>
  )
}

export { ProjectList }
