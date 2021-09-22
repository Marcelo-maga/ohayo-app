import React from 'react'

import {
  Menu,
  MenuItem,
  useColorMode
} from '@chakra-ui/react'

import { AddIcon, SunIcon, SettingsIcon, MoonIcon, EditIcon } from '@chakra-ui/icons'

import { Container, Daddy } from './styles'

const Sidebar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container>
      <Daddy>
        <Menu>
          <MenuItem icon={<AddIcon />} />
          <MenuItem icon={<EditIcon />} />
          <MenuItem icon={<SettingsIcon />} />
          <MenuItem icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode} />
        </Menu>
      </Daddy>
    </Container>
  )
}

export default Sidebar
