import React, { useEffect, useState } from 'react'
import { VscCheck, VscChromeClose } from 'react-icons/vsc'
import { useHistory } from 'react-router'
import api from '../../services/api'

import { List } from './styles'

type IProjects = {
  id: string,
  name: string,
  desc: string,
  timeWorked: number,
  complete: boolean
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<IProjects[]>([])

  useEffect(() => {
    async function getProjects () {
      await api.get<IProjects[]>('/getAllProjects').then((response) => {
        setProjects(response.data)
      })
    }
    getProjects()
  }, [])

  const history = useHistory()

  return (
    <List>
      <ul>
        {
          !projects
            ? <h2>Crie seu primeiro projeto!</h2>
            : projects.map(project => {
              return (
              <li key={project.id} onClick={() => history.push({
                pathname: `${project.id}`
              })}>
                <p>{project.name}</p>
                <p>
                  {(project.timeWorked / 60).toFixed(0) + ' Horas'}
                </p>
                  {!project.complete ? <VscChromeClose/> : <VscCheck/>}
              </li>
              )
            })
        }
      </ul>
    </List>
  )
}

export { ProjectList }
