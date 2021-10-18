import React from 'react'

import { Container, Card } from './styles'
import { TimeIcon, StarIcon } from '@chakra-ui/icons'

const Cards: React.FC = () => {
  return (
    <Container>

      <Card>
        <TimeIcon />
        <strong>Total hours</strong>
        {}
      </Card>

      <Card>
        <StarIcon />
        <strong>Favorite Project</strong>
        {}
      </Card>

      <Card>
        <strong></strong>
      </Card>

      <Card>
        <strong></strong>
      </Card>

      <Card>
        <strong></strong>
      </Card>

    </Container>
  )
}

export default Cards
