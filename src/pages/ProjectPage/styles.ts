import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const Container = styled.div`
  grid-area: CO;

  display: flex;
  flex-direction: column;

  border-top-left-radius: 10px;

  margin-left: 55px;
  background-color: ${colors.secondary};
  
  .title {
    font-size: 30px;
    font-weight: bold;

    margin-top: 30px;
    margin-bottom: 10px;

    margin-left: 50px;
  }
`

export const Staus = styled.div`
  display: flex;
  flex-direction: row;
`
