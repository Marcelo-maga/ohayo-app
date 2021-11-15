import React from 'react'
import { Container, DashBoardContainer } from './styles'

import Cards from '../../components/Cards'

const Dashboard: React.FC = () => {
  return (
      <Container>
          <h1 className={'title'}>Dashboard</h1>
          <DashBoardContainer>
            <Cards />
          </DashBoardContainer>
      </Container>
  )
}

export { Dashboard }
