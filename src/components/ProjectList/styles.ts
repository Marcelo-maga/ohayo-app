import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Projects = styled.ul`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: row;

    li {
      display: flex;
      flex-direction: column;
      
      margin-left: 35px;
      margin-bottom: 20px;

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
