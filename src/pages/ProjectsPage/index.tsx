import { SmallAddIcon } from '@chakra-ui/icons'
import React from 'react'
import { ProjectList } from '../../components/ProjectList'
import { Containar, Header } from './styles'

export const ProjectsPage: React.FC = () => {
  return (

    <Containar>
      <Header>
        <h1>Projetos</h1>
        <button className='btnAdd'><SmallAddIcon /></button>
      </Header>

      <ProjectList />

    </Containar>
  )
}
