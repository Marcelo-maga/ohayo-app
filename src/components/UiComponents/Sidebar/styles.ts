import styled from 'styled-components'
import { colors } from '../../../styles/theme'

export const Container = styled.div`
  grid-area: SB;
  
  display: flex;
  flex-direction: column;

  width: 5%;
  
  justify-content: center;
  
  background-color: ${colors.primary};
`

export const Menu = styled.div`

  button {
    width: 100%;
    margin-bottom: 5px;
    margin-left: 15px;
    
    svg {
      width: 19px;
      height: 19px;
    }
  }
`
