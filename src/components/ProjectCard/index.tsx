import React from 'react'

import { Container, Content, Color } from './styles'
import { Avatar } from '@chakra-ui/react'

interface Types {

}

const ProjectCard: React.FC<Types> = () => {
  return (
    <Container>
        <Content>
          <Color>Horas trabalhadas: {}</Color>
          <Avatar
            className={'Avatar'}
            size='lg'
          />
          <h3>{}</h3>
        </Content>
    </Container>
  )
}

export default ProjectCard
