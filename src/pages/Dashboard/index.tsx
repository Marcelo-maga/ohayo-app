import React from 'react'
import { Container, Container2 } from './styles'

import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard'
import StatsCard from '../../components/StatsCard'

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Container>
          <h1 className={'title'}>Dashboard</h1>
          <Container2>
            <StatsCard />
            <ProjectCard />
          </Container2>
      </Container>
    </Layout>
  )
}

export default Dashboard
