import React from 'react'

import { Input } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Search2Icon /> <Input placeholder={'Search a project '} />
    </Container>
  )
}

export default Header
