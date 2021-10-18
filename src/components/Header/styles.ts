
import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Container = styled.div`
  grid-area: HE;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px 10px 50px;
  
  background-color: ${colors.primary};
  
  `

export const InputCont = styled.div`
  width: 100%;
  Input {
    margin-left: 10px;
    width: 30%;
  }
`
