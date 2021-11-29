import React from 'react'

import { Container, Menu } from './styles'

const Sidebar: React.FC = ({ children }) => {
  return (
      <Container>
        <Menu>
          { children }
        </Menu>
      </Container>
  )
}

export { Sidebar }
