import React from 'react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorMode
} from '@chakra-ui/react'

import { HamburgerIcon, AddIcon, SunIcon, SettingsIcon, MoonIcon, EditIcon } from '@chakra-ui/icons'

import { Container } from './styles'

const Sidebar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

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
          <MenuItem icon={<EditIcon />} >
            Notes
          </MenuItem>
          <MenuItem icon={<SettingsIcon />} >
            Settings
          </MenuItem>
          <MenuItem icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode} >
            Toggle {colorMode === 'dark' ? 'Light' : 'Dark'}
          </MenuItem>
        </MenuList>
      </Menu>
    </Container>
  )
}

export default Sidebar
