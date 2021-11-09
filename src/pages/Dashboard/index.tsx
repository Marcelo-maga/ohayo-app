import React from 'react'
import { Container, DashBoardContainer } from './styles'

import Layout from '../../components/UiComponents/Layout'
import Cards from '../../components/Cards'

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
