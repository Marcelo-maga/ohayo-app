import styled from 'styled-components'
import { theme } from '../../styles/colors'

export const Container = styled.div`
  grid-area: SB;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  justify-content: flex-start;

  font-size: 15px;
  background-color: ${theme.colors.primary} ;

`

export const Diver = styled.div`
  width: 100%;
  border-top: 2px solid #bbb;
  margin-bottom: 10px;
`

export const Top = styled.div`
  h1{
    font-weight: bolder;
    font-size: 20px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`

export const MenuContainer = styled.div`

`
