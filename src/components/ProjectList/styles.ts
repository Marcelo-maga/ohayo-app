import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;

    width: 100%;

    li {
      display: flex;
      flex-direction: column;
      
      margin-left: 35px;
      margin-bottom: 20px;

      svg {
        margin-left: 10px;
        margin-top: 5px;
      }

      p {
        margin-left: 10px;
      }

      div {
        background-color: aqua;
        height: 40px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }

      background-color: ${colors.tertiary};
      width: 20%;
      height: 80px;
      border-radius: 5px;

      :hover {
        cursor: pointer;
      } 

    }
  }
`
