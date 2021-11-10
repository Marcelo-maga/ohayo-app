import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Containar = styled.div`
  grid-area: CO;

  display: flex;
  flex-direction: column;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  margin-left: 55px;
  background-color: ${colors.secondary};

  h1 {
    font-size: 30px;
    font-weight: bold;

    margin-top: 30px;
    margin-bottom: 10px;

    margin-left: 50px;
  }

  .btnAdd {

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 30px;
    margin-right: 15px;

    border-width: 2px;
    border-style: double;

    width: 40px;
    height: 40px;

    border-radius: 50%;
  }

`

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`

export const ProjectsArea = styled.div`

`
