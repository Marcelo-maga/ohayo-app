import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { Projects } from './styles'

interface IProject {
  projectId: number,
  
  projectName: string,
  projectDesc: string,
  projectColor: string,
  projectTime: string
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([])

  useEffect(() => {
    async function getAllProjects() {
      await api.get<IProject[]>('/getAllProjects/').then(response => {
        setProjects(response.data)
      })
    }
  }, [])

  return (
    <Projects>
      <ul>
        {projects.map(project => {
          return (
            <li key={project.projectId}>
              <div color={project.projectColor} />
              <p>{project.projectName}</p>
              <p>{project.projectTime} Dias</p>
            </li>
          )
        })}
      </ul>
    </Projects>
  )
}

export { ProjectList }
