import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import api from '../../services/api'

import { Projects } from './styles'

interface IProjects {
  id: string,
  name: string,
  desc: string,
  timeWorked: number
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<IProjects[]>([])

  useEffect(() => {
    async function getAllProjects () {
      await api.get<IProjects[]>('/getAllProjects').then(response => {
        setProjects(response.data)
      })
    }
    getAllProjects()
  }, [])

  const history = useHistory()

  return (
    <Projects>
      {!projects
        ? <strong>Crie seu novo projeto!</strong>
        : <ul>
        {projects.map(project => {
          return (
            <li key={project.id} onClick={() => history.push({
              pathname: `${project.id}`
            })}>
              <div />
              <p>{project.name}</p>
              <p>{ project.timeWorked / 60 < 1
                ? (project.timeWorked / 60 / 60).toFixed(0) + ' Horas'
                : project.timeWorked + ' Segundos'}
                </p>
            </li>
          )
        })}
      </ul>
      }
    </Projects>
  )
}

export { ProjectList }
