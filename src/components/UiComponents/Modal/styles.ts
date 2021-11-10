import styled from 'styled-components'
import { colors } from '../../../styles/theme'

export const Container = styled.div`
  display: flex;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);

`

export const Content = styled.div`
  width: 70%;
  height: 70%;


  justify-content: center;
  position: absolute;

  border-radius: 20px;


  h1 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  form{
    display: flex;
    flex-direction: column;

    Input {
      margin-left: 50px;
      height: 45px;
      width: 50%;
      margin-bottom: 10px;
    }

    Button {
      margin-left: 50px;
      height: 45px;
      width: 20%;
    }


  }

  background-color: ${colors.secondary};
`
