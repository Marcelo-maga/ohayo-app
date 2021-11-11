import React from 'react'
import { Container, DashBoardContainer } from './styles'

import Cards from '../../components/Cards'
import { Layout } from '../../components/UiComponents/Layout'

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Container>
          <h1 className={'title'}>Dashboard</h1>
          <DashBoardContainer>
            <Cards />
          </DashBoardContainer>
      </Container>
    </Layout>
  )
}

export default Dashboard
