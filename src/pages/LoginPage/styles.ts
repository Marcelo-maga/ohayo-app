import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Layout = styled.div`
  display: grid;
  position: absolute;
  
  grid-template-areas: 
    'LO';

  grid-template-columns: 50%;
  justify-content: center;

  height: 100vh;
  width: 100%;

  background-color: ${colors.primary};
`

export const LoginArea = styled.div`
  grid-area: LO;
  
  align-self: center;

  h1{
    font-size: 46px;
    margin-bottom: 40px;
    font-weight: bold;
  }

  form{
    Input{
      margin: 0 0 5px 0;
      height: 45px;
    }
    Button{
      margin-right: 10px;
      margin-bottom: 20px;
      background-color: ${colors.purple.darkPurple};
      :hover {
        background-color: ${colors.purple.lightPurple};
      }
      width: 30%;
    }
    p{
      margin: 0 0 15px 0;
    }
  }
`
