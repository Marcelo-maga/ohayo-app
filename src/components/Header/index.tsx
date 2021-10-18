/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */

import React, { useState } from 'react'

import {
  Input,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'

import { Search2Icon, SettingsIcon } from '@chakra-ui/icons'

import { Container, InputCont } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <InputCont>
        <Search2Icon /> <Input placeholder={'Search a project '} />
      </InputCont>
      <Menu>
        <MenuButton>
          <Avatar src='https://github.com/Marcelo-maga.png'/>
        </MenuButton>
        <MenuList>
          <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
        </MenuList>
      </Menu>
    </Container>
  )
}

export default Header
