import styled from 'styled-components'

export const Projects = styled.ul`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      flex-direction: row;

      div {
        background-color: aqua;

      }

      background-color: aliceblue;
      width: 20%;
      height: 80px;
      border-radius: 5px;

      :hover {
        cursor: pointer;
      } 

    }
  }
`
