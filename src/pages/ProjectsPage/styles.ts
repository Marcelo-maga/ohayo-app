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
    margin-right: 50px;

    border-width: 3px;
    border-style: solid;
    border-color: ${colors.purple.lightPurple};

    width: 40px;
    height: 40px;

    border-radius: 50%;

    svg {
      color: ${colors.purple.lightPurple}
    }
  }

`

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`
