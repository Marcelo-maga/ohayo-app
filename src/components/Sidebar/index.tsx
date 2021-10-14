/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */

import React, { useState } from 'react'

import {
  Menu,
  MenuItem,
  useColorMode
} from '@chakra-ui/react'

import { AddIcon, SunIcon, SettingsIcon, MoonIcon, EditIcon, BellIcon } from '@chakra-ui/icons'

import { Container, Top, Diver, MenuContainer } from './styles'

const Sidebar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode() // Altera o modo de cor do app
  const [isVisible, setVisible] = useState(false)

  async function openModal () {
    setVisible(true)
    { isVisible ? <h1>oiiii</h1> : null }
  }

  return (
    <Container>
      <Top>
        <h1>Ohayo</h1>
        <Diver />
      </Top>
      <MenuContainer>
        <Menu>
          <MenuItem icon={<AddIcon />} onClick={openModal}>New Project</MenuItem>
          <MenuItem icon={<BellIcon/>}>All Projects</MenuItem>
          <MenuItem icon={<EditIcon />}>Notes</MenuItem>
          <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>

          <MenuItem icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode}>
            { colorMode === 'dark' ? 'Ligth' : 'Dark' } Mode
          </MenuItem>

        </Menu>
      </MenuContainer>
    </Container>
  )
}

export default Sidebar
