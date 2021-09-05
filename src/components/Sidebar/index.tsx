import React from 'react'

import {
  Menu,
  MenuButton,
  MenuList,
  // MenuItem,
  IconButton
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import { Container } from './styles'

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          variant="outline"
          className={'HamButtom'}
          icon={<HamburgerIcon />}
        />
        <MenuList>

        </MenuList>
      </Menu>
    </Container>
  )
}

export default Sidebar
