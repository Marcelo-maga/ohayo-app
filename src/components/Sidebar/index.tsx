/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */

import React from 'react'

import { AddIcon, EditIcon, BellIcon } from '@chakra-ui/icons'

import { Container, Menu } from './styles'

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Menu>
        <button><AddIcon/></button>
        <button><BellIcon/></button>
        <button><EditIcon/></button>
      </Menu>
    </Container>
  )
}

export default Sidebar
