import React from 'react'

import { Container } from './styles'

const StatsCard: React.FC = () => {
  return (
    <Container>
      <h1>Total Statistics</h1>
      <strong>Total Hours: </strong>
      <strong>Project with most hours: </strong>
      <strong>Complete Projects: </strong>
      <strong>Total Projects: </strong>
    </Container>
  )
}

export default StatsCard
