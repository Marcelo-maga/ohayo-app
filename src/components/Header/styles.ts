import styled from 'styled-components'
import { theme } from '../../styles/colors'

export const Container = styled.div`
  grid-area: HE;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 50px;
  background-color: ${theme.colors.primary} ;
  Input {
    margin-left: 10px;
    width: 35%;
  }
`
