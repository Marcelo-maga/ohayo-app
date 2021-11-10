import { SmallAddIcon } from '@chakra-ui/icons'
import React from 'react'
import { Containar, ProjectsArea, Header } from './styles'

export const ProjectsPage: React.FC = () => {
  return (

    <Containar>
      <Header>
        <h1>Projetos</h1>
        <button className='btnAdd'><SmallAddIcon /></button>
      </Header>

      <ProjectsArea>

      </ProjectsArea>

    </Containar>
  )
}
