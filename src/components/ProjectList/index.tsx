import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import { Projects } from './styles'

interface IProjects {
  id: string,

  name: string,
  desc: string,
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
      <ul>
        {projects.map(project => {
          return (
            <li key={project.id} onClick={() => history.push({
              pathname: `${project.id}`
            })}>
              <div />
              <p>{project.name}</p>
              <p> Dias</p>
            </li>
          )
        })}
        <Link to="/" />
      </ul>
    </Projects>
  )
}

export { ProjectList }
