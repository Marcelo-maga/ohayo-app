import React, { useState } from 'react'
import { Container, Player } from './styles'

import { VscDebugContinue, VscDebugPause } from 'react-icons/vsc'
import api from '../../services/api'

const HourConter: React.FC = () => {
  const [pause, setPause] = useState(false)

  async function countHours () {
    if (!pause) {
      setPause(true)
      const startHour = new Date().getTime()
      localStorage.setItem('startTime', `${startHour}`)
    } else if (pause) {
      setPause(false)
      const endHour = new Date().getTime()
      localStorage.setItem('endTime', `${endHour}`)
    }

    const url = document.URL

    const projectIdWithBar = new URL(url).pathname

    const [, projectId] = projectIdWithBar.split('/')

    const startHourStorage = localStorage.getItem('startTime')
    const endHourStorage = localStorage.getItem('endTime')

    if (startHourStorage && endHourStorage) {
      const startHours = parseInt(startHourStorage, 10)
      const endHours = parseInt(endHourStorage, 10)

      const newTimeWorked = (endHours - startHours) / 1000

      localStorage.removeItem('startTime')
      localStorage.removeItem('endTime')

      await api.post('/newTotalHours', {
        projectId,
        newTimeWorked
      })
    }
  }

  return (
    <Container>
      <Player>
        <button onClick={countHours}>
          {!pause ? <VscDebugContinue /> : <VscDebugPause/>}
        </button>
      </Player>
    </Container>
  )
}

export { HourConter }
