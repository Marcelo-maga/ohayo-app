import React from 'react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'

import { HamburgerIcon, AddIcon, StarIcon, SettingsIcon } from '@chakra-ui/icons'

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

          <MenuItem icon={<AddIcon />} >
            New Project
          </MenuItem>
          <MenuItem icon={<StarIcon />} >
            Notes
          </MenuItem>
          <MenuItem icon={<SettingsIcon />} >
            Settings
          </MenuItem>
        </MenuList>
      </Menu>
    </Container>
  )
}

export default Sidebar
