import React from 'react'

import { Container } from './styles'
import { Avatar } from '@chakra-ui/react'

interface Types {

}

const Header: React.FC<Types> = () => {
  return (
    <Container>
      <h1>
        Projetos
      </h1>
      <Avatar
        src="https://github.com/Marcelo-maga.png"
        className={'Avatar'}
        size='lg'
      />
    </Container>
  )
}

export default Header
