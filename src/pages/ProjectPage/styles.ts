import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Container = styled.div`
   grid-area: CO;

  display: flex;
  flex-direction: column;

  border-top-left-radius: 20px;

  margin-left: 55px;
  background-color: ${colors.secondary};
`
